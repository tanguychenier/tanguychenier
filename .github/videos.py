#!/usr/bin/env python3
"""Remplit la section « Latest Videos » du profil depuis le flux de la chaine.

Le flux RSS de YouTube donne les quinze dernieres videos sans cle d'API et sans
quota : c'est ce qu'il faut pour une action qui tourne tous les jours. Les
resumes, eux, sont ecrits a la main et vivent dans `.github/resumes.json` ;
une video sans resume affiche simplement son titre.
"""
import json, os, re, urllib.request
import xml.etree.ElementTree as ET

CHAINE = "UCA0_E4hwxpnmqM-w6wwbTDw"
FLUX = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHAINE}"
COMBIEN = 3
DEBUT, FIN = "<!-- videos:debut -->", "<!-- videos:fin -->"
ICI = os.path.dirname(os.path.abspath(__file__))


def dernieres():
    with urllib.request.urlopen(FLUX, timeout=30) as r:
        arbre = ET.fromstring(r.read())
    ns = {"a": "http://www.w3.org/2005/Atom", "y": "http://www.youtube.com/xml/schemas/2015"}
    videos = []
    for e in arbre.findall("a:entry", ns)[:COMBIEN]:
        videos.append({"id": e.find("y:videoId", ns).text,
                       "titre": e.find("a:title", ns).text})
    return videos


def bloc(videos, resumes):
    largeur = 100 // max(1, len(videos))
    cases = []
    for v in videos:
        r = resumes.get(v["id"], "")
        cases.append(f"""<td width="{largeur}%" valign="top">

[![{v['titre']}](https://i.ytimg.com/vi/{v['id']}/hqdefault.jpg)](https://www.youtube.com/watch?v={v['id']})

🇬🇧 [**{v['titre']}**](https://www.youtube.com/watch?v={v['id']})

{r}

</td>""")
    return (f"{DEBUT}\n\n## 🎬 Latest Videos\n\n"
            "Live coding on [my channel](https://www.youtube.com/@tanguy_tec): "
            "one game per stream, written from an empty file.\n\n"
            "<table>\n<tr>\n" + "\n".join(cases) + "\n</tr>\n</table>\n\n"
            "Every stream, including the older ones, is on "
            "[the channel](https://www.youtube.com/@tanguy_tec/streams).\n\n" + FIN)


def main():
    chemin = os.path.join(ICI, "..", "README.md")
    texte = open(chemin, encoding="utf-8").read()
    if DEBUT not in texte or FIN not in texte:
        raise SystemExit("les reperes videos:debut / videos:fin ont disparu du README")
    resumes = {}
    f = os.path.join(ICI, "resumes.json")
    if os.path.exists(f):
        resumes = json.load(open(f, encoding="utf-8"))
    videos = dernieres()
    if not videos:
        raise SystemExit("le flux de la chaine n'a rien rendu")
    neuf = re.sub(re.escape(DEBUT) + ".*?" + re.escape(FIN), lambda _: bloc(videos, resumes),
                  texte, flags=re.S)
    open(chemin, "w", encoding="utf-8").write(neuf)
    print("section ecrite :", ", ".join(v["titre"][:40] for v in videos))


if __name__ == "__main__":
    main()
