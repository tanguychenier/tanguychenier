#!/usr/bin/env python3
"""Remplit la section « Latest Videos » du profil depuis le flux de la chaine.

Le flux RSS de YouTube donne les quinze dernieres videos sans cle d'API et sans
quota : c'est ce qu'il faut pour une action qui tourne tous les jours. Les
resumes, eux, sont ecrits a la main et vivent dans `.github/resumes.json` ;
une video sans resume affiche simplement son titre.
"""
import json, os, re, time, urllib.error, urllib.request
import xml.etree.ElementTree as ET

CHAINE = "UCA0_E4hwxpnmqM-w6wwbTDw"
CODE = "https://github.com/tanguychenier/live-coding"
FLUX = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHAINE}"
COMBIEN = 3
DEBUT, FIN = "<!-- videos:debut -->", "<!-- videos:fin -->"
ICI = os.path.dirname(os.path.abspath(__file__))
# Depuis une machine d'integration, YouTube repond 404 au flux quand la requete
# arrive sans navigateur declare. Le meme flux, depuis un poste de travail,
# repond 200 : c'est l'en-tete qui manque, pas la chaine.
NAVIGATEUR = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
              "(KHTML, like Gecko) Chrome/140.0 Safari/537.36")
ESSAIS = 3


def flux():
    """Le flux, ou None si la chaine ne repond pas.

    Le travail tourne tous les jours sans personne devant : une panne de
    reseau ne doit pas laisser une croix rouge sur le profil. Si le flux se
    derobe, le README garde ce qu'il a, et la tentative du lendemain suffit."""
    d = urllib.request.Request(FLUX, headers={"User-Agent": NAVIGATEUR,
                                              "Accept": "application/atom+xml"})
    for n in range(ESSAIS):
        try:
            with urllib.request.urlopen(d, timeout=30) as r:
                return r.read()
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"flux indisponible ({e}), essai {n + 1}/{ESSAIS}")
            if n + 1 < ESSAIS:
                time.sleep(5 * (n + 1))
    return None


def dernieres(brut):
    arbre = ET.fromstring(brut)
    ns = {"a": "http://www.w3.org/2005/Atom", "y": "http://www.youtube.com/xml/schemas/2015"}
    videos = []
    for e in arbre.findall("a:entry", ns)[:COMBIEN]:
        videos.append({"id": e.find("y:videoId", ns).text,
                       "titre": e.find("a:title", ns).text})
    return videos


def bloc(videos, resumes, jeux):
    largeur = 100 // max(1, len(videos))
    cases = []
    for v in videos:
        # LE TITRE, LA SOURCE ET LE JEU, rien d'autre : c'est la regle qu'il a
        # posee. Les cartes portaient un resume pour l'une et rien pour l'autre.
        # Le lien du jeu mene a la page du jeu lui-meme, pas a l'accueil du site.
        r = f"[Source]({resumes.get(v['id']) or CODE})"
        if jeux.get(v["id"]):
            r += f" · [Play in the browser]({jeux[v['id']]})"
        cases.append(f"""<td width="{largeur}%" valign="top">

[![{v['titre']}](https://i.ytimg.com/vi/{v['id']}/hqdefault.jpg)](https://www.youtube.com/watch?v={v['id']})

🇬🇧 [**{v['titre']}**](https://www.youtube.com/watch?v={v['id']})

{r}

</td>""")
    return (f"{DEBUT}\n\n## 🎬 Latest Videos\n\n"
            "Live coding on [my channel](https://www.youtube.com/@tanguy_tec), "
            "one game per stream, written from an empty file. Every game can be "
            "played in the browser on [the games page]"
            "(https://tanguychenier.github.io/live-coding/), and the link under "
            "each card opens that game.\n\n"
            "<table>\n<tr>\n" + "\n".join(cases) + "\n</tr>\n</table>\n\n" + FIN)


def main():
    chemin = os.path.join(ICI, "..", "README.md")
    texte = open(chemin, encoding="utf-8").read()
    if DEBUT not in texte or FIN not in texte:
        raise SystemExit("les reperes videos:debut / videos:fin ont disparu du README")
    resumes = {}
    f = os.path.join(ICI, "resumes.json")
    if os.path.exists(f):
        resumes = json.load(open(f, encoding="utf-8"))
    # la page ou le jeu de chaque direct se joue dans le navigateur
    jeux = {}
    f = os.path.join(ICI, "jeux.json")
    if os.path.exists(f):
        jeux = json.load(open(f, encoding="utf-8"))
    brut = flux()
    if brut is None:
        print("la chaine n'a pas repondu, le README garde ce qu'il a")
        return
    videos = dernieres(brut)
    if not videos:
        raise SystemExit("le flux de la chaine n'a rien rendu")
    neuf = re.sub(re.escape(DEBUT) + ".*?" + re.escape(FIN), lambda _: bloc(videos, resumes, jeux),
                  texte, flags=re.S)
    open(chemin, "w", encoding="utf-8").write(neuf)
    print("section ecrite :", ", ".join(v["titre"][:40] for v in videos))


if __name__ == "__main__":
    main()
