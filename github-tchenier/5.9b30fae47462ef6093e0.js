(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{XkBy:function(e,t,i){"use strict";i.r(t),i.d(t,"SoftwareEngineeringModule",function(){return l});var n=i("ofXK"),o=i("tyNb"),r=i("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.yb({type:e,selectors:[["app-clean-architecture"]],decls:40,vars:0,consts:[[1,"track-header"],[1,"icon"],["alt","","src","https://static.thenounproject.com/png/581062-200.png"],[1,"inner"],[1,"track-progress"],[1,"widget-code-snippet",2,"text-align","center"],[1,"rendered"]],template:function(e,t){1&e&&(r.Hb(0,"div",0),r.Hb(1,"div",1),r.Fb(2,"img",2),r.Gb(),r.Hb(3,"div",3),r.Hb(4,"h2"),r.Wb(5,"Clean architecture"),r.Gb(),r.Hb(6,"div",4),r.Hb(7,"h3"),r.Wb(8,"Update : 02/19/2021"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Hb(9,"div",5),r.Hb(10,"h2"),r.Wb(11,"Introduction"),r.Gb(),r.Gb(),r.Fb(12,"br"),r.Hb(13,"div",6),r.Wb(14," When we create software, several stages intervene in its life cycle: "),r.Hb(15,"ul"),r.Hb(16,"li"),r.Wb(17,"An objective, which, starting from an idea, will allow us to think about the reason for which we are going to implement an application and what the intended goal is through this."),r.Gb(),r.Hb(18,"li"),r.Wb(19,"Analyzes, in order to confirm that the objective is viable, through various study and research procedures which will make it possible to confirm or not, whether the application deserves to see the light of day."),r.Gb(),r.Hb(20,"li"),r.Wb(21,"A design, the goal of which is from the different analyzes, to think about the software in its short, medium and long terms, in order to bring out the methodology, the budget, the number of staff and other factors involved in its concrete realization."),r.Gb(),r.Hb(22,"li"),r.Wb(23,"An achievement, a natural result of the design stage, which will bring the software to life. This is the longest stage in the life cycle and it is during this that the product comes to life."),r.Gb(),r.Hb(24,"li"),r.Wb(25,"A release, which is the culmination but is usually only the beginning of an iteration cycle aimed at improving or adding functionality to the application."),r.Gb(),r.Hb(26,"li"),r.Wb(27,"Maintenance, which is the step after delivery of the product, to ensure that it still meets objectives."),r.Gb(),r.Gb(),r.Hb(28,"p"),r.Wb(29,"Throughout this life cycle, the stage of software development occurs in different contexts, such as the time during which the product is produced, the technology used, the competence of those making the product, or well the necessary updating of the software in order to guarantee a certain level of service, to name a few."),r.Gb(),r.Hb(30,"p"),r.Wb(31,"Regardless, the years have shown that the majority of technical debts and therefore of the time wasted in making software, come from the architecture chosen according to the purpose of the product."),r.Gb(),r.Hb(32,"p"),r.Wb(33,"However, the choice of software architecture is difficult. Everyone will want to share their expertise, their vision of product design and the right way to organize themselves technically, in order to bring consistency, stability and maintainability to the product."),r.Gb(),r.Hb(34,"p"),r.Wb(35,"Thus, we have seen the emergence of design pattern and through this desire to formalize good practices, a conceptualization of models such as MVC, MVVM or even MVP."),r.Gb(),r.Hb(36,"p"),r.Wb(37,"There are plenty of them with their pros and cons, but here we will limit ourselves to one of these models: clean architecture."),r.Gb(),r.Hb(38,"p"),r.Wb(39,"Through this page, I offer you to study what clean architecture is. Its interest in relation to other models and an implementation in order to be able to use it, through different exercises."),r.Gb(),r.Gb())},styles:[""]}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.yb({type:e,selectors:[["app-clean-how"]],decls:3,vars:0,consts:[[1,"language-text"]],template:function(e,t){1&e&&(r.Hb(0,"pre",0),r.Hb(1,"code",0),r.Wb(2,"\n    Work in progress ...\n"),r.Gb(),r.Gb())},styles:[""]}),e})(),s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.yb({type:e,selectors:[["app-clean-what"]],decls:125,vars:0,consts:[[1,"track-header"],[1,"icon"],["alt","","src","https://static.thenounproject.com/png/581062-200.png"],[1,"inner"],[1,"track-progress"],[1,"widget-code-snippet",2,"text-align","center"],[1,"rendered"],[2,"font-size","14px"],["id","selectionBoundary_1613782037257_5211492021778079",1,"rangySelectionBoundary"],["id","selectionBoundary_1613782037257_855727794813993",1,"rangySelectionBoundary"],["href","https://www.amazon.fr/Clean-Architecture-Robert-Martin-2016-12-10/dp/B01N2GDUQ9"],["src","https://images-na.ssl-images-amazon.com/images/I/41WiR7FkWDL._SX382_BO1,204,203,200_.jpg",2,"width","150px","height","220px"]],template:function(e,t){1&e&&(r.Hb(0,"div",0),r.Hb(1,"div",1),r.Fb(2,"img",2),r.Gb(),r.Hb(3,"div",3),r.Hb(4,"h2"),r.Wb(5,"Clean architecture"),r.Gb(),r.Hb(6,"div",4),r.Hb(7,"h3"),r.Wb(8,"Update : 02/20/2021"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Hb(9,"div",5),r.Hb(10,"h2"),r.Wb(11,"What clean architecture is"),r.Gb(),r.Gb(),r.Fb(12,"br"),r.Hb(13,"div",6),r.Hb(14,"p"),r.Wb(15,"We all know the MVC model, a design pattern launched in 1978 whose formalism assumes that\xa0"),r.Gb(),r.Fb(16,"p"),r.Hb(17,"ul"),r.Hb(18,"li"),r.Wb(19,"The model: contains the data and its logic.\xa0"),r.Gb(),r.Hb(20,"li"),r.Wb(21,"The controller: orchestrates the use case required by the application, processing actions and then modifying model and view data.\xa0"),r.Gb(),r.Hb(22,"li"),r.Wb(23,"The view: either the man-machine interface passing its actions to the controller, which will decide whether the action requires a call to the model or processing directly to the view.\xa0"),r.Gb(),r.Gb(),r.Hb(24,"p"),r.Wb(25,"MVP and MVVM are almost the same if only in"),r.Gb(),r.Hb(26,"div"),r.Hb(27,"div"),r.Hb(28,"ul"),r.Hb(29,"li"),r.Hb(30,"span",7),r.Wb(31,'MVP:\xa0the controller is replaced by a "presentor", the events of which passing through it have the role of propagating via the action triggered by the user. These actions coming from the human-machine interface, the sight.\xa0\xa0'),r.Gb(),r.Gb(),r.Hb(32,"li"),r.Wb(33,"MVVM: there is a linked communication between the view and the model, by bidirectionality. In other words, it is the actions of the view that cause changes to the data managed by the model, not the presenter (MVP) or controller (MVC)."),r.Gb(),r.Gb(),r.Fb(34,"br"),r.Fb(35,"br"),r.Fb(36,"p"),r.Gb(),r.Gb(),r.Hb(37,"p"),r.Wb(38,"The goal through this is to segment the different application layers, so that everyone can work on their area of \u200b\u200bexpertise without causing regression, harming maintainability or encroaching on the work of their neighbor.\xa0"),r.Gb(),r.Hb(39,"div"),r.Fb(40,"br"),r.Gb(),r.Hb(41,"div"),r.Wb(42,"Thus, the integrator in charge of taking care of the graphics and rendering of the application, can focus in MVC on the view and developers can specialize in business or network logic via the controller and the model, respectively .\xa0"),r.Gb(),r.Hb(43,"div"),r.Fb(44,"br"),r.Gb(),r.Hb(45,"div"),r.Wb(46,"Finally that, in theory ...\xa0"),r.Gb(),r.Hb(47,"div"),r.Fb(48,"br"),r.Gb(),r.Hb(49,"div"),r.Wb(50,"Where this model works very well when teams are small, there just needs to be frequently changing needs or increasing complexity and the model quickly reaches its limits."),r.Hb(51,"div"),r.Hb(52,"div"),r.Fb(53,"br"),r.Fb(54,"p"),r.Gb(),r.Gb(),r.Gb(),r.Fb(55,"p"),r.Hb(56,"p"),r.Wb(57,"When this happens, we would like to be able to segment the application layers more finely in order to isolate them, so that we can work on each of them, without having any side effects.\xa0"),r.Gb(),r.Hb(58,"div"),r.Fb(59,"br"),r.Gb(),r.Hb(60,"div"),r.Wb(61,"This principle, Uncle Bob, alias Robert C. Martin, famous software engineer and co-founder of the AGILE manifesto, calls it \u201cSeparation of concerns\u201d.\xa0"),r.Gb(),r.Hb(62,"div"),r.Fb(63,"br"),r.Gb(),r.Hb(64,"div"),r.Wb(65,"Through this paradigm, the idea is not so much to say that the \u201cclean\u201d architecture is better than another, but to highlight the need to draw feedback from all these years and to implement by adapting to a context."),r.Hb(66,"div"),r.Hb(67,"div"),r.Hb(68,"div"),r.Fb(69,"br"),r.Fb(70,"p"),r.Gb(),r.Gb(),r.Gb(),r.Gb(),r.Fb(71,"h2"),r.Hb(72,"p"),r.Hb(73,"b"),r.Fb(74,"span",8),r.Wb(75,"SO "),r.Fb(76,"br"),r.Fb(77,"span",9),r.Gb(),r.Gb(),r.Hb(78,"p"),r.Fb(79,"br"),r.Gb(),r.Hb(80,"p"),r.Wb(81,"Clean architecture is necessary, via its principle of isolation, when these signs appear:"),r.Gb(),r.Hb(82,"div"),r.Hb(83,"ul"),r.Hb(84,"li"),r.Wb(85,"You can no longer test your code and are forced to find excuses.\xa0"),r.Gb(),r.Hb(86,"li"),r.Wb(87,"You are no longer able to modify one element in your code without impacting another.\xa0"),r.Gb(),r.Hb(88,"li"),r.Wb(89,"When you want to update a library, all of your code is impacted.\xa0"),r.Gb(),r.Hb(90,"li"),r.Wb(91,"It becomes difficult for you to develop the application, for reasons of time, see, skills.\xa0"),r.Gb(),r.Hb(92,"li"),r.Wb(93,"The business area does not keep pace with the related elements. Technical elements are taken into account after or during the creation of the software."),r.Gb(),r.Gb(),r.Hb(94,"div"),r.Fb(95,"p"),r.Gb(),r.Gb(),r.Hb(96,"p"),r.Hb(97,"b"),r.Fb(98,"span",8),r.Gb(),r.Gb(),r.Hb(99,"p"),r.Wb(100,"So, if you are in one of these scenarios, it looks like this architecture could provide you with a solution.\xa0"),r.Gb(),r.Hb(101,"div"),r.Fb(102,"br"),r.Gb(),r.Hb(103,"div"),r.Wb(104,"To be able to set it up, the logic you are going to implement will have to:\xa0"),r.Gb(),r.Hb(105,"div"),r.Hb(106,"ul"),r.Hb(107,"li"),r.Wb(108,"Be independent of frameworks: frameworks and libraries must be tools, without constraining you.\xa0"),r.Gb(),r.Hb(109,"li"),r.Wb(110,"Be independently testable: the tests must be able to be performed without external elements (user interface, database, etc.)\xa0"),r.Gb(),r.Hb(111,"li"),r.Wb(112,"Be independent of the user interface: the user interface must be able to change form (console, web interface, etc.) Be independent from the database: it must be possible to change DBMS.\xa0"),r.Gb(),r.Hb(113,"li"),r.Wb(114,"Be independent of any external service or system: in short, it should not be aware of what surrounds it."),r.Gb(),r.Gb(),r.Gb(),r.Hb(115,"div"),r.Hb(116,"div"),r.Hb(117,"div"),r.Fb(118,"p"),r.Gb(),r.Gb(),r.Gb(),r.Fb(119,"h2"),r.Hb(120,"p"),r.Hb(121,"strong"),r.Wb(122,"sources"),r.Gb(),r.Gb(),r.Hb(123,"a",10),r.Fb(124,"img",11),r.Gb(),r.Gb())},styles:[""]}),e})();const c=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.yb({type:e,selectors:[["app-software-engineering"]],decls:3,vars:0,consts:[[1,"language-text"]],template:function(e,t){1&e&&(r.Hb(0,"pre",0),r.Hb(1,"code",0),r.Wb(2,"\n    Software engineering Work in progress ...\n"),r.Gb(),r.Gb())},styles:[""]}),e})()},{path:"clean-architecture",component:a},{path:"clean-architecture/what",component:s},{path:"clean-architecture/how",component:b}];let h=(()=>{class e{}return e.\u0275mod=r.Cb({type:e}),e.\u0275inj=r.Bb({factory:function(t){return new(t||e)},imports:[[o.b.forChild(c)],o.b]}),e})(),l=(()=>{class e{}return e.\u0275mod=r.Cb({type:e}),e.\u0275inj=r.Bb({factory:function(t){return new(t||e)},imports:[[n.b,h]]}),e})()}}]);