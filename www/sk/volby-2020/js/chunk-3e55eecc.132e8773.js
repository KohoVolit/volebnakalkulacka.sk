(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e55eecc","chunk-2484f639","chunk-a751e1b2"],{"0418":function(e,n,t){"use strict";t.r(n);var o=t("c275"),a=t("ad21");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);var s=t("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"2e93":function(e,n){},"54c5":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("component-header"),t("div",{staticClass:"selection"},[t("h4",{staticClass:"p-2"},[e._v(" "+e._s(e.$t("select_extra_important_questions"))+" ")]),t("button",{staticClass:"btn btn-outline-secondary btn-lg btn-block mb-3",on:{click:function(n){return e.goResults()}}},[e.spinning?t("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t("span",[e._v(">")]),e._v(" "+e._s(e.$t("skip"))+" "),e.spinning?t("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t("span",[e._v(">")])],1),e._l(e.questions,(function(n){return e.answered[n.id]?t("div",{staticClass:"list-group"},[t("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[t("label",{staticClass:"custom-control custom-checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked[n.id],expression:"checked[question.id]"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked[n.id])?e._i(e.checked[n.id],null)>-1:e.checked[n.id]},on:{change:[function(t){var o=e.checked[n.id],a=t.target,i=!!a.checked;if(Array.isArray(o)){var s=null,r=e._i(o,s);a.checked?r<0&&e.$set(e.checked,n.id,o.concat([s])):r>-1&&e.$set(e.checked,n.id,o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.checked,n.id,i)},function(n){return e.storeWeights()}]}}),t("span",{staticClass:"custom-control-indicator"}),t("div",{staticClass:"custom-control-description"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v(e._s(n.name)+" ("+e._s(e.answers[n.id])+")")])]),t("small",{staticClass:"mb-1 text-muted"},[e._v(" "+e._s(n.question)+" ")])])])])]):e._e()})),t("button",{staticClass:"btn btn-success btn-lg btn-block mt-3",on:{click:function(n){return e.goResults()}}},[e.spinning?t("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t("span",[e._v(">")]),e._v(" "+e._s(e.$t("result"))+" "),e.spinning?t("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):t("span",[e._v(">")])],1)],2),t("component-footer")],1)},a=[],i=t("7842"),s=t("0418"),r=t("fd2d"),d=t("a46b"),c=t("1d11"),l=t("8695");d["c"].add(c["d"]);var u={data:function(){for(var e={},n=0;n<i.length;n++)e[i[n].id]=!1;var t={},o={},a=JSON.parse(this.$route.query.q);for(var s in i){var r=i[s];Math.abs(a[parseInt(r.id)])>0?(t[r.id]=!0,this.$store.state.answers[parseInt(r.id)]=a[parseInt(r.id)]):t[r.id]=!1,-1===a[parseInt(r.id)]&&(o[r.id]=this.$t("no")),1===a[parseInt(r.id)]&&(o[r.id]=this.$t("yes"))}return{questions:i,answered:t,answers:o,checked:e,spinning:!1}},methods:{addChecked:function(){this.checked.push({question_id:!1})},storeWeights:function(){this.$store.commit("storeWeights",this.checked)},goResults:function(){this.spinning=!0,this.$router.push({path:"/results",query:{q:JSON.stringify(this.$store.state.answers),w:JSON.stringify(this.$store.state.weights)}})}},components:{"component-header":s["default"],"component-footer":r["default"],"font-awesome-icon":l["a"]}},v=u,p=(t("c985"),t("2877")),m=Object(p["a"])(v,o,a,!1,null,"86268d50",null);n["default"]=m.exports},7842:function(e){e.exports=JSON.parse('[{"id":"31","name":"Nižšie kvórum u referenda","question":"Malo by sa znížiť kvórum (dnes 50%) nutné k platnosti celoštátneho referenda.","description":"","order":1},{"id":"34","name":"Školné na VŠ","question":"Malo by sa začať platiť školné na verejných vysokých školách.","description":"","order":2},{"id":"46","name":"Slovensko a klimatické zmeny","question":"Slovensko má robiť proti klimatickým zmenám viac ako teraz.","description":"","order":3},{"id":"4","name":"Mýto za km","question":"Mýto na diaľniciach pre osobné automobily by sa malo platiť za prejazdenú vzdialenosť.","description":"","order":4},{"id":"26","name":"Zákaz mešít","question":"Na Slovensku by mala byť zakázaná stavba mešít.","description":"","order":5},{"id":"3","name":"Zvýšenie dane na alkohol","question":"Spotrebná daň na alkohol by sa mala zvýšiť.","description":"","order":6},{"id":"11","name":"Daňová progresia u dane z príjmov","question":"Mala by sa zvýšiť daňová progresia dane z príjmov u ľudí (tj. vyššia sadzba dane pre vyššie príjmy)","description":"","order":7},{"id":"38","name":"Vyššia DPH pre škodlivé potraviny","question":"Zdraviu škodlivé potraviny (napr. limonády, cukrovinky či hranolky) by mali mať vyššiu sadzbu DPH.","description":"","order":8},{"id":"14","name":"Zamestnávanie ľudí v preddôchodkovom veku","question":"Zamestnávanie ľudí v preddôchodkovom veku by malo byť daňovo zvýhodnené.","description":"","order":9},{"id":"16","name":"Podpora jadrovej energetiky","question":"Jadrová energetika by mala byť aj naďalej podporovaná z verejných zdrojov.","description":"","order":10},{"id":"49","name":"Platy učiteľov rozdielne","question":"Ste za to, aby boli platy učiteľov v krajoch rozdielne, podľa priemernej mzdy a životných nákladov v kraji?","description":"","order":11},{"id":"27","name":"Štátne inštitúcie po celom Slovensku","question":"Nové štátne inštitúcie by mali byť rozmiestnené rovnomerne po celom území Slovenska, nielen prevažne v Bratislave.","description":"","order":12},{"id":"5","name":"Pokuty za dopravné priestupky","question":"Pokuty za dopravné priestupky by sa mali aspoň čiastočne stanovovať podľa príjmu dlžníka.","description":"","order":13},{"id":"12","name":"Zákaz reklamy pre deti","question":"Reklama zameraná na deti by mala byť zakázaná.","description":"","order":14},{"id":"19","name":"Podiel potravín od slovenských výrobcov","question":"Obchodné reťazce by mali ponúkať povinne predpísaný podiel potravín od slovenských výrobcov.","description":"","order":15},{"id":"7","name":"Vystúpenie z EÚ","question":"Slovensko by malo vystúpiť z EÚ.","description":"","order":16},{"id":"28","name":"Dvojité občianstvo","question":"Dvojité občianstvo by malo byť povolené.","description":"","order":17},{"id":"60","name":"Vystúpenie z NATO","question":"Slovensko by malo vystúpiť z NATO.","description":"","order":18},{"id":"55","name":"Ukrajina v EÚ","question":"Ukrajina by mala vstúpiť do EÚ.","description":"","order":19},{"id":"58","name":"Počet volebných obvodov","question":"Počet volebných obvodov pre voľby do NR SR by sa mal zvýšiť (dnes jeden, celé Slovensko).","description":"","order":20},{"id":"52","name":"Maďarčina","question":"Maďarčina by mala mať v oblastiach s maďarskou majoritou rovnaké postavenie ako slovenčina.","description":"","order":21},{"id":"43","name":"Prezident a sudci","question":"Prezident SR má mať právo odmietnuť menovať ústavných sudcov navrhnutých NR SR.","description":"","order":22},{"id":"57","name":"Zahraničné misie","question":"Slovenská armáda by sa mala účastniť zahraničných vojenských misií.","description":"","order":23},{"id":"53","name":"Rómčina","question":"Mala by sa podporovať možnosť výučby rómčiny ako voliteľného predmetu.","description":"","order":24},{"id":"40","name":"Očkovanie dobrovoľné","question":"Očkovanie by malo byť vždy dobrovoľné.","description":"","order":25},{"id":"37","name":"Zákaz interrupcie","question":"Interrupcia by mala byť zakázaná až na výnimočné prípady, ako je znásilnenie alebo ohrozenie života matky.","description":"","order":26},{"id":"15","name":"Hazard vo vylúčených lokalitách","question":"V sociálne vylúčených lokalitách by mali byť zakázané hazardné prístroje.","description":"","order":27},{"id":"24","name":"Registrované partnerstvo","question":"Homosexuálne páry by mali mať možnost uzavrieť registrované partnerstvo.","description":"","order":28},{"id":"45","name":"Utenčenci - ohrozenie kultúry","question":"Prijatie utečencov, ktorí nie sú katolíci, by bylo ohrozením slovenskej kultúry.","description":"","order":29},{"id":"61","name":"13. dôchodok","question":"Mali by sa zaviesť 13. dôchodky.","description":"","order":30}]')},"94d4":function(e,n,t){"use strict";t.r(n);var o=t("2e93"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},ad21:function(e,n,t){"use strict";t.r(n);var o=t("e504"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},c275:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e._v(e._s(e.$t("header_name")))])])},a=[];t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return a}))},c985:function(e,n,t){"use strict";var o=t("e800"),a=t.n(o);a.a},e504:function(e,n){},e800:function(e,n,t){},f806:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"text-muted mt-4 md-4"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-center"},[t("div",{staticClass:"col-md-3"}),t("div",{staticClass:"col-md-6 text-center"},[t("a",{attrs:{href:"http://kohovolit.eu",title:"KohoVolit.eu",id:"footer-kohovolit-logo",target:"_blank"}},[t("img",{attrs:{src:"https://volebnakalkulacka.azureedge.net/image/logo.png",alt:"logo kohovolit.eu"}})]),t("p",{staticClass:"lead black"},[e._v("Volebné kalkulačky pre Vás už od roku 2006 vytvára občianske združenie "),t("a",{attrs:{href:"http://kohovolit.eu",target:"_blank"}},[e._v("KohoVolit.eu")])]),t("hr"),t("p",{staticClass:"black"},[e._v("Creative Commons BY NC 4.0 | "),t("a",{attrs:{href:"http://kohovolit.eu",id:"footer-kohovolit-licence"}},[e._v("KohoVolit.eu")]),e._v(" 2020")])])])])])}];t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return a}))},fd2d:function(e,n,t){"use strict";t.r(n);var o=t("f806"),a=t("94d4");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);var s=t("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-3e55eecc.132e8773.js.map