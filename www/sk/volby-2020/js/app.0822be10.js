(function(e){function t(t){for(var o,a,s=t[0],u=t[1],i=t[2],l=0,k=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&k.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(k.length)k.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-036cc4b8":"b315a729","chunk-05834597":"41d309c0","chunk-109238b8":"812e497d","chunk-24221c67":"517e8cb7","chunk-2484f639":"613bad2f","chunk-2937f95d":"e727ac56","chunk-4907a7f6":"cce39647","chunk-62ecc48e":"2ba8295a","chunk-06c7a8ce":"cc8052ed","chunk-1b8c8190":"019b4fbe","chunk-d357c5f2":"c88179a8","chunk-5542b828":"a8f2f4f1","chunk-557c2ed8":"81eac891","chunk-ed35e6cc":"403d0ac1","chunk-3e55eecc":"3950dc38","chunk-a751e1b2":"7d1c4d27","chunk-b1889084":"5d94fd2b"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-05834597":1,"chunk-109238b8":1,"chunk-24221c67":1,"chunk-06c7a8ce":1,"chunk-1b8c8190":1,"chunk-d357c5f2":1,"chunk-5542b828":1,"chunk-557c2ed8":1,"chunk-ed35e6cc":1,"chunk-3e55eecc":1,"chunk-b1889084":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-036cc4b8":"31d6cfe0","chunk-05834597":"eb75b1fc","chunk-109238b8":"17af6f68","chunk-24221c67":"28676553","chunk-2484f639":"31d6cfe0","chunk-2937f95d":"31d6cfe0","chunk-4907a7f6":"31d6cfe0","chunk-62ecc48e":"31d6cfe0","chunk-06c7a8ce":"aa5f060a","chunk-1b8c8190":"5d364f32","chunk-d357c5f2":"aa5f060a","chunk-5542b828":"08636a37","chunk-557c2ed8":"d23b4649","chunk-ed35e6cc":"29be13a2","chunk-3e55eecc":"c2084ad8","chunk-a751e1b2":"31d6cfe0","chunk-b1889084":"4862a125"}[e]+".css",c=u.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return t()}var k=document.getElementsByTagName("style");for(s=0;s<k.length;s++){i=k[s],l=i.getAttribute("data-href");if(l===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var k=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;k.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",k.name="ChunkLoadError",k.type=o,k.request=a,n[1](k)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/sk/volby-2020/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var k=0;k<i.length;k++)t(i[k]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f13":function(e,t,n){var o={"./Analytics.vue":["f8b4","chunk-036cc4b8"],"./Darujme.vue":["2c6b","chunk-2937f95d"],"./Footer.vue":["fd2d","chunk-2484f639"],"./Header.vue":["0418","chunk-a751e1b2"],"./HelloWorld.vue":["fdab","chunk-24221c67"],"./Progress.vue":["ad18","chunk-05834597"],"./Results.vue":["8169","chunk-62ecc48e","chunk-1b8c8190","chunk-d357c5f2","chunk-5542b828"],"./ResultsModal.vue":["036c","chunk-62ecc48e","chunk-06c7a8ce"],"./ResultsNoreply.vue":["1153","chunk-109238b8"],"./ResultsTable.vue":["2173","chunk-62ecc48e","chunk-1b8c8190","chunk-d357c5f2","chunk-ed35e6cc"],"./ResultsWinners.vue":["1dae","chunk-62ecc48e","chunk-1b8c8190","chunk-d357c5f2","chunk-557c2ed8"],"./Selection.vue":["54c5","chunk-62ecc48e","chunk-3e55eecc"],"./Stars.vue":["76e5","chunk-62ecc48e","chunk-1b8c8190"],"./Test.vue":["864c","chunk-4907a7f6"],"./VAA.vue":["1a3f","chunk-b1889084"]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="0f13",e.exports=a},"199c":function(e,t){},"1f92":function(e){e.exports=JSON.parse('{"url":"https://volebnakalkulacka.sk/","cookie":"vkid","cookie_code":"_sk","calc":"volby-2020","locale":"sk-SK","cdn":"https://volebnakalkulacka.azureedge.net/","path":"sk/volby-2020/","save_path":"/volby-2020/","api_path":"https://api.volebnikalkulacka.cz/","fb_app_id":"647475721940594"}')},"23be":function(e,t,n){"use strict";var o=n("199c"),a=n.n(o);t["default"]=a.a},"3dfd":function(e,t,n){"use strict";var o=n("95e3"),a=n("23be"),c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("3dfd"),c=(n("d3b7"),n("8c4f"));function r(e){return function(){return n("0f13")("./".concat(e,".vue"))}}o["default"].use(c["a"]);var s=[{path:"/",name:"VAA",component:r("VAA")},{path:"/selection",name:"Selection",component:r("Selection")},{path:"/results",name:"Results",component:r("Results")},{path:"/test",name:"Test",component:r("Test")}],u=new c["a"]({mode:"history",base:"/sk/volby-2020/",routes:s}),i=u,l=n("a925"),k=n("a66e"),d=(n("5acb"),n("2ca0"),n("7ef0"),n("2f62"));o["default"].use(d["a"]);var h={count:1,answers:{},weights:{},results:[]},f={getCount:function(e){return e.count},getAnswers:function(e){return e.answers},getWeights:function(e){return e.weights},getResults:function(e){return e.results},getAnswersStored:function(e){return e.answers_stored}},p={increment:function(e){e.count++},decrement:function(e){e.count--},addAnswer:function(e,t){e.answers[t.key]=t.value},storeWeights:function(e,t){e.weights=t},storeAnswers:function(e,t){e.answers=t},resetAnswers:function(e){e.answers={}},resetWeights:function(e){e.weights={}},storeResults:function(e,t){e.results=t},storeAnswersStored:function(e,t){e.answers_stored=t}},v={},b=new d["a"].Store({state:h,mutations:p,actions:v,getters:f}),m=b,_=n("8ed1"),g=n.n(_),y=n("1f92"),w=n("1052"),j=n.n(w),S={install:function(e){e.prototype.$settings=y,e.prototype.$getSetCookie=function(e){var t="";return this.$cookies.isKey(e)?t=this.$cookies.get(e):(t="vk."+Date.now()+"."+Math.round(1e15*Math.random()),this.$cookies.set(e,t,432e6)),t},e.prototype.$clicked=function(e,t){var n=this.$getSetCookie(this.$settings["cookie"]),o={vkid:n,calc:this.$settings["calc"],campaign:e,attributes:t};j.a.get(this.$settings["url"]+this.$settings["save_path"]+"match/click.php",{params:o})},e.prototype.$action=function(e){var t=this.$getSetCookie(this.$settings["cookie"]),n={vkid:t,calc:this.$settings["calc"],action:e,href:window.location.href};j.a.get(this.$settings["url"]+this.$settings["save_path"]+"match/action.php",{params:n})},e.prototype.$save_results=function(e){var t=this.$getSetCookie(this.$settings["cookie"]),n={vkid:t,calc:this.$settings["calc"],answer:e};j.a.get(this.$settings["url"]+this.$settings["save_path"]+"match/results.php",{params:n})}}},z=S;"undefined"!==typeof window&&window.Vue&&window.Vue.use(S);var O=n("a944"),N=n("1f92");o["default"].config.productionTip=!1,o["default"].use(l["a"]),o["default"].use(k["a"]),o["default"].use(g.a),o["default"].use(z);var $=new l["a"]({locale:N["locale"],messages:O});new o["default"]({router:i,i18n:$,store:m,render:function(e){return e(a["default"])}}).$mount("#app")},"95e3":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[];n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}))},a944:function(e){e.exports=JSON.parse('{"cs-CZ":{"header_name":"Volební kalkulačka EP 2019","YES":"ANO","NO":"NE","yes":"Ano","no":"Ne","dont_know":"Nevím","not_voted":"Nehl.","not_important":"Je mi to jedno","skip":"Přeskočit","result":"Výsledek","back":"Zpět","select_extra_important_questions":"Vyberte otázky, které jsou pro vás extra důležité:","clicking_detailed_match":"Tip: klikněte na jméno strany a dostanete s ní Vaši podrobnou shodu","match":"Shoda","close":"Zavřít","question":"Otázka","me":"Já","no_replies":"Snažili jsme se opakovaně oslovit všechny strany, ostatní zatím na otázky neodpověděly.","fb_1":"Volební kalkulačka Europarlament 2019, moje shoda: ","share_on_fb":"Řekněte o tom na ","send_by_email":"Pošlete emailem","email_1":"Zkus si volební kalkulačku Europarlamentu 2019. Ukáže ti strany, které jsou ti postoji nejblíž.","email_2":"\\n\\nVolební kalkulačka je zde:\\nhttps://volebnikalkulacka.cz/?ref=","og_title":"Volební kalkulačka EP 2019","og_description":"Volební kalkulačka EP 2019. Srovnání na základě postojů stran.","all_meps":"Všichni europoslanci"},"sk-SK":{"header_name":"Volebná kalkulačka 2020","YES":"ÁNO","NO":"NIE","yes":"Áno","no":"Nie","dont_know":"Neviem","not_important":"Je mi to jedno","skip":"Preskočiť","result":"Výsledok","back":"Späť","select_extra_important_questions":"Vyberte otázky, ktoré sú pre vás extra dôležité:","clicking_detailed_match":"Tip: kliknite na stranu a dostanete s ňou svoju podrobnú zhodu","match":"Zhoda","close":"Zavrieť","question":"Otázka","me":"Ja","fb_1":"Volebná kalkulačka 2020, moja zhoda: ","share_on_fb":"Povedzte o tom na ","send_by_email":"Pošlite emailom","email_1":"Skús si volebnú kalkulačku pre voľby 2020. Ukáže strany, ktoré sú tí postoji najbližšie.","email_2":"\\n\\nVolebná kalkulačka je tu:\\nhttps://volebnakalkulacka.sk/?ref=","og_title":"Volebná kalkulačka 2020","og_description":"Volebná kalkulačka 2020. Porovnanie na základe postojov strán.","all_meps":"Všetci europoslanci","local_meps":"Europoslanci zo Slovenska","the_other_calc":"https://volebnikalkulacka.cz/cs/inventura-hlasovani-evropsky-parlament-2014-2019/results","the_other_meps":"Europoslanci z Českej republiky","find_on_the_other_calc":"Nájdete na českej kalkulačke","candidate_comment":"Komentár strany","dont_know_them":"Nevieme / nemáme jednoznačný názor","no_replies":"Oslovili sme opakovane všetky strany, ostatné zatiaľ bohužiaľ na otázky neodpovedali.","explanation_replies":"Postoje strán sú priamo ich odpovede na dané otázky.","eplanation_old_replies":"U strán OĽaNO, KDH a SNS sme použili odpovede na zhodné otázky z Volebných kalkulačiek z rokov 2019 a 2016, pretože tento rok na otázky bohužiaľ zatiaľ neodpovedali. U niekoľkých otázok, ktoré neboli v roku 2019 ani 2016, je preto u týchto strán odpoveď \'nevieme\'. Ak ešte odpovia na otázky, ich odpovede vo Volebnej kalkulačke sa tak môžu zmeniť."}}')}});
//# sourceMappingURL=app.0822be10.js.map