(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1889084","chunk-036cc4b8","chunk-2484f639","chunk-a751e1b2","chunk-05834597"],{"0418":function(t,e,a){"use strict";a.r(e);var n=a("c275"),o=a("ad21");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var r=a("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"1a3f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page"},[a("component-header"),a("component-progress",{attrs:{progress:t.progress}}),a("b-carousel",{ref:"carousel",attrs:{id:"carousel",controls:"",indicators:"",interval:0,wrap:!1},on:{"sliding-start":t.onSlideStart},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.questions,(function(e,n){return a("div",{key:n},[a("b-carousel-slide",{staticClass:"carousel-item"},[a("div",{staticClass:"row d-flex align-items-stretch item-inner item-inner-upper"},[a("div",{staticClass:"col-md-2 col-sm-1"}),a("div",{staticClass:"col-sm-10 col-md-8 align-self-center"},[a("div",{staticClass:"d-flex justify-content-center text-dark"},[a("h2",{staticClass:"h2 vaa-width"},[t._v(t._s(e.question))])]),a("div",{staticClass:"d-flex justify-content-center text-dark"},[a("p",{staticClass:"p-2 vaa-width vaa-description"},[t._v(t._s(e.description))])])])]),a("div",{staticClass:"row d-flex align-items-stretch item-inner item-inner-lower"},[a("div",{staticClass:"col-sm-1 col-md-2"}),a("div",{staticClass:"col-sm-10 col-md-8"},[a("div",{staticClass:"vaa-width",staticStyle:{margin:"auto"}},[a("div",{staticClass:"row p-2",attrs:{"data-toggle":"buttons"}},[a("div",{staticClass:"col-4"},[a("label",{staticClass:"btn btn-outline-primary btn-lg btn-block",class:t.checked(e.id,1),on:{click:function(a){return t.addAnswer(e.id,1,n)}}},[a("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(n),id:t.radionId(e.id,1)}}),t._v(t._s(t.$t("YES"))+" ")])]),a("div",{staticClass:"col-4"},[a("label",{staticClass:"btn btn-outline-primary btn-lg btn-block",class:t.checked(e.id,-1),on:{click:function(a){return t.addAnswer(e.id,-1,n)}}},[a("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(n),id:t.radionId(e.id,-1)}}),t._v(t._s(t.$t("NO"))+" ")])]),a("div",{staticClass:"col-4"},[a("label",{staticClass:"btn btn-outline-secondary btn-lg btn-block",class:t.checked(e.id,0),on:{click:function(a){return t.addAnswer(e.id,0,n)}}},[a("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(n),id:t.radionId(e.id,0)}}),a("small",[t._v(t._s(t.$t("dont_know")))])])])])])])])])],1)})),0),a("component-footer"),a("Analytics")],1)])},o=[],i=a("7842"),r=a("0418"),s=a("fd2d"),d=a("ad18"),c=a("f8b4"),l={data:function(){return{questions:i,progress:1,slide:0,sliding:null}},mounted:function(){this.$action("calc_started"),this.$getSetCookie(this.$settings["cookie"]),this.$route.query.s>0?this.slide=this.$route.query.s-1:this.slide=0},methods:{onSlideStart:function(t){this.progress=t/this.questions.length*100,this.$router.push({path:"/",query:{s:t+1}})},radioName:function(t){return"q-"+t},radionId:function(t,e){return"q-"+t+"-"+e},addAnswer:function(t,e,a){var n=this,o={key:t,value:e};this.$store.commit("addAnswer",o),setTimeout((function(){n.slide+1===n.questions.length?n.$router.push({path:"/selection",query:{q:JSON.stringify(n.$store.state.answers)}}):n.slide=a+1}),250)},checked:function(t,e){return this.$store.state.answers[t]===e?"active":""}},computed:{},components:{"component-header":r["default"],"component-footer":s["default"],"component-progress":d["default"],Analytics:c["default"]}},u=l,v=(a("b2a5"),a("2877")),m=Object(v["a"])(u,n,o,!1,null,null,null);e["default"]=m.exports},"2e93":function(t,e){},"4aa0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("iframe",{attrs:{src:"https://volebnakalkulacka.sk/session/",width:"0",height:"0",frameborder:"0"}}),a("noscript",[a("div",[a("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/35358145",alt:""}})])]),a("img",{staticStyle:{border:"0"},attrs:{src:"https://piwik.kohovolit.eu/matomo.php?idsite=2&rec=1",alt:""}})])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},"54d2":function(t,e,a){"use strict";a.r(e);var n=a("5f0a"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"5f0a":function(t,e){(function(t,e,a,n,o,i,r){t["GoogleAnalyticsObject"]=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,i=e.createElement(a),r=e.getElementsByTagName(a)[0],i.async=1,i.src=n,r.parentNode.insertBefore(i,r)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-49538088-12","auto"),ga("send","pageview"),function(t,e,a){(e[a]=e[a]||[]).push((function(){try{e.yaCounter35358145=new Ya.Metrika({id:35358145,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){}}));var n=t.getElementsByTagName("script")[0],o=t.createElement("script"),i=function(){n.parentNode.insertBefore(o,n)};o.type="text/javascript",o.async=!0,o.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",i,!1):i()}(document,window,"yandex_metrika_callbacks")},"61ed":function(t,e,a){"use strict";var n=a("c522"),o=a.n(n);o.a},7842:function(t){t.exports=JSON.parse('[{"id":"31","name":"Nižšie kvórum u referenda","question":"Malo by sa znížiť kvórum (dnes 50%) nutné k platnosti celoštátneho referenda.","description":"","order":1},{"id":"34","name":"Školné na VŠ","question":"Malo by sa začať platiť školné na verejných vysokých školách.","description":"","order":2},{"id":"46","name":"Slovensko a klimatické zmeny","question":"Slovensko má robiť proti klimatickým zmenám viac ako teraz.","description":"","order":3},{"id":"44","name":"Kvóty - správny krok","question":"Prijatie povinných kvót na prerozdeľovanie utečencov by bolo správnym krokom.","description":"","order":4},{"id":"26","name":"Zákaz mešít","question":"Na Slovensku by mala byť zakázaná stavba mešít.","description":"","order":5},{"id":"3","name":"Zvýšenie dane na alkohol","question":"Spotrebná daň na alkohol by sa mala zvýšiť.","description":"","order":6},{"id":"17","name":"Výpoveď bez udania dôvodu","question":"Zamestnávateľ by mal mať možnosť dať výpoveď bez udania dôvodu.","description":"","order":7},{"id":"38","name":"Vyššia DPH pre škodlivé potraviny","question":"Zdraviu škodlivé potraviny (napr. limonády, cukrovinky či hranolky) by mali mať vyššiu sadzbu DPH.","description":"","order":8},{"id":"14","name":"Zamestnávanie ľudí v preddôchodkovom veku","question":"Zamestnávanie ľudí v preddôchodkovom veku by malo byť daňovo zvýhodnené.","description":"","order":9},{"id":"16","name":"Podpora jadrovej energetiky","question":"Jadrová energetika by mala byť aj naďalej podporovaná z verejných zdrojov.","description":"","order":10},{"id":"29","name":"Vyrovnaný rozpočet","question":"Mal by byť schválený zákon o vyrovnanom štátnom rozpočte.","description":"","order":11},{"id":"27","name":"Štátne inštitúcie po celom Slovensku","question":"Nové štátne inštitúcie by mali byť rozmiestnené rovnomerne po celom území Slovenska, nielen prevažne v Bratislave.","description":"","order":12},{"id":"5","name":"Pokuty za dopravné priestupky","question":"Pokuty za dopravné priestupky by sa mali aspoň čiastočne stanovovať podľa príjmu dlžníka.","description":"","order":13},{"id":"21","name":"Firmy z daňových rajov","question":"Firmy z daňových rajov by mali byť znevýhodnené pri zadávaní verejných zákaziek.","description":"","order":14},{"id":"20","name":"Obmedzovanie GMO","question":"Štát by mal obmedzovať výrobu potravín z geneticky modifikovaných organizmov.","description":"","order":15},{"id":"7","name":"Vystúpenie z EÚ","question":"Slovensko by malo vystúpiť z EÚ.","description":"","order":16},{"id":"28","name":"Dvojité občianstvo","question":"Dvojité občianstvo by malo byť povolené.","description":"","order":17},{"id":"60","name":"Vystúpenie z NATO","question":"Slovensko by malo vystúpiť z NATO.","description":"","order":18},{"id":"55","name":"Ukrajina v EÚ","question":"Ukrajina by mala vstúpiť do EÚ.","description":"","order":19},{"id":"58","name":"Počet volebných obvodov","question":"Počet volebných obvodov pre voľby do NR SR by sa mal zvýšiť (dnes jeden, celé Slovensko).","description":"","order":20},{"id":"52","name":"Maďarčina","question":"Maďarčina by mala mať v oblastiach s maďarskou majoritou rovnaké postavenie ako slovenčina.","description":"","order":21},{"id":"43","name":"Prezident a sudci","question":"Prezident SR má mať právo odmietnuť menovať ústavných sudcov navrhnutých NR SR.","description":"","order":22},{"id":"32","name":"Voľby cez internet","question":"Mala by sa zaviesť možnosť voliť cez internet.","description":"","order":23},{"id":"50","name":"Predškolská dochádzka","question":"Ste za to, aby bola predškolská dochádzka povinná v rozsahu aspoň jedného roka?","description":"","order":24},{"id":"40","name":"Očkovanie dobrovoľné","question":"Očkovanie by malo byť vždy dobrovoľné.","description":"","order":25},{"id":"36","name":"Eutanázie","question":"Mala by sa zaviesť možnosť eutanázie.","description":"","order":26},{"id":"15","name":"Hazard vo vylúčených lokalitách","question":"V sociálne vylúčených lokalitách by mali byť zakázané hazardné prístroje.","description":"","order":27},{"id":"24","name":"Registrované partnerstvo","question":"Homosexuálne páry by mali mať možnost uzavrieť registrované partnerstvo.","description":"","order":28},{"id":"56","name":"Jozef Tiso","question":"Jozef Tiso bol hrdina.","description":"","order":29},{"id":"61","name":"13. dôchodok","question":"Mali by sa zaviesť 13. dôchodky.","description":"","order":30}]')},"94d4":function(t,e,a){"use strict";a.r(e);var n=a("2e93"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},ad18:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar bg-danger",style:t.progressStyle,attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])])},o=[],i={props:["progress"],computed:{progressStyle:function(){return{width:this.progress+"%"}}}},r=i,s=(a("61ed"),a("2877")),d=Object(s["a"])(r,n,o,!1,null,"7b65995d",null);e["default"]=d.exports},ad21:function(t,e,a){"use strict";a.r(e);var n=a("e504"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},b2a5:function(t,e,a){"use strict";var n=a("d87b"),o=a.n(n);o.a},c275:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v(t._s(t.$t("header_name")))])])},o=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},c522:function(t,e,a){},d87b:function(t,e,a){},e504:function(t,e){},f806:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-muted mt-4 md-4"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-md-3"}),a("div",{staticClass:"col-md-6 text-center"},[a("a",{attrs:{href:"http://kohovolit.eu",title:"KohoVolit.eu",id:"footer-kohovolit-logo",target:"_blank"}},[a("img",{attrs:{src:"https://volebnakalkulacka.azureedge.net/image/logo.png",alt:"logo kohovolit.eu"}})]),a("p",{staticClass:"lead black"},[t._v("Volebné kalkulačky pre Vás už od roku 2006 vytvára občianske združenie "),a("a",{attrs:{href:"http://kohovolit.eu",target:"_blank"}},[t._v("KohoVolit.eu")])]),a("hr"),a("p",{staticClass:"black"},[t._v("Creative Commons BY NC 4.0 | "),a("a",{attrs:{href:"http://kohovolit.eu",id:"footer-kohovolit-licence"}},[t._v("KohoVolit.eu")]),t._v(" 2020")])])])])])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},f8b4:function(t,e,a){"use strict";a.r(e);var n=a("4aa0"),o=a("54d2");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var r=a("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},fd2d:function(t,e,a){"use strict";a.r(e);var n=a("f806"),o=a("94d4");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);var r=a("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-b1889084.097ad731.js.map