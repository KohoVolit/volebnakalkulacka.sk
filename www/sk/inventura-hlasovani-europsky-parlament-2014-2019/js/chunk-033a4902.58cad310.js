(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-033a4902","chunk-6a3e339a","chunk-0459a331"],{"1a3f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page"},[s("component-header"),s("component-progress",{attrs:{progress:t.progress}}),s("b-carousel",{ref:"carousel",attrs:{id:"carousel",controls:"",indicators:"",interval:0,wrap:!1},on:{"sliding-start":t.onSlideStart},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.questions,function(e,a){return s("div",{key:a},[s("b-carousel-slide",{staticClass:"carousel-item",attrs:{question:e}},[s("div",{staticClass:"row d-flex align-items-stretch item-inner item-inner-upper"},[s("div",{staticClass:"col-md-2 col-sm-1"}),s("div",{staticClass:"col-sm-10 col-md-8 align-self-center"},[s("div",{staticClass:"d-flex justify-content-center text-dark"},[s("h2",{staticClass:"h2 vaa-width"},[t._v(t._s(e.question))])]),s("div",{staticClass:"d-flex justify-content-center text-dark"},[s("p",{staticClass:"p-2 vaa-width vaa-description"},[t._v(t._s(e.description))])])])]),s("div",{staticClass:"row d-flex align-items-stretch item-inner item-inner-lower"},[s("div",{staticClass:"col-sm-1 col-md-2"}),s("div",{staticClass:"col-sm-10 col-md-8"},[s("div",{staticClass:"vaa-width",staticStyle:{margin:"auto"}},[s("div",{staticClass:"row p-2",attrs:{"data-toggle":"buttons"}},[s("div",{staticClass:"col-4"},[s("label",{staticClass:"btn btn-outline-primary btn-lg btn-block",class:t.checked(e.id,1),on:{click:function(s){return t.addAnswer(e.id,1)}}},[s("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(a),id:t.radionId(e.id,1)}}),t._v(t._s(t.$t("YES"))+"\n                                        ")])]),s("div",{staticClass:"col-4"},[s("label",{staticClass:"btn btn-outline-primary btn-lg btn-block",class:t.checked(e.id,-1),on:{click:function(s){return t.addAnswer(e.id,-1)}}},[s("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(a),id:t.radionId(e.id,-1),checked:"checked"}}),t._v(t._s(t.$t("NO"))+"\n                                        ")])]),s("div",{staticClass:"col-4"},[s("label",{staticClass:"btn btn-outline-secondary btn-lg btn-block",class:t.checked(e.id,0),on:{click:function(s){return t.addAnswer(e.id,0)}}},[s("input",{staticClass:"vaa-btn",attrs:{type:"radio",name:t.radioName(a),id:t.radionId(e.id,0)},on:{click:function(s){return t.addAnswer(e.id,0)}}}),s("small",[t._v(t._s(t.$t("dont_know")))])])])])])])])])],1)}),0),s("component-footer"),s("Analytics")],1)])},n=[],i=s("7842"),r=s("0418"),c=s("fd2d"),o=s("ad18"),l=s("f8b4"),d={data:function(){return{questions:i,progress:1,slide:0,sliding:null}},mounted:function(){this.$action("calc_started"),this.$getSetCookie(this.$settings["cookie"]),this.$route.query.s>0?this.slide=this.$route.query.s-1:this.slide=0},methods:{onSlideStart:function(t){this.progress=t/this.questions.length*100,this.$router.push({path:"/",query:{s:t+1}})},radioName:function(t){return"q-"+t},radionId:function(t,e){return"q-"+t+"-"+e},addAnswer:function(t,e){var s=this,a={key:t,value:e};this.$store.commit("addAnswer",a),setTimeout(function(){s.slide+1===s.questions.length?s.$router.push({path:"/selection",query:{q:JSON.stringify(s.$store.state.answers)}}):s.slide++},250)},checked:function(t,e){return this.$store.state.answers[t]===e?"active":""}},computed:{},components:{"component-header":r["default"],"component-footer":c["default"],"component-progress":o["default"],Analytics:l["default"]}},u=d,p=(s("b2a5"),s("2877")),f=Object(p["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},4029:function(t,e,s){},"54c0":function(t,e,s){},"54d2":function(t,e,s){"use strict";s.r(e);var a=s("5f0a"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},"5f0a":function(t,e){(function(t,e,s,a,n,i,r){t["GoogleAnalyticsObject"]=n,t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].l=1*new Date,i=e.createElement(s),r=e.getElementsByTagName(s)[0],i.async=1,i.src=a,r.parentNode.insertBefore(i,r)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-8592359-12","auto"),ga("send","pageview");var s=s||[];s.push(["trackPageView"]),s.push(["enableLinkTracking"]),function(){var t="//piwik.kohovolit.eu/";s.push(["setTrackerUrl",t+"piwik.php"]),s.push(["setSiteId","2"]);var e=document,a=e.createElement("script"),n=e.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.defer=!0,a.src=t+"piwik.js",n.parentNode.insertBefore(a,n)}(),function(t,e,s){(e[s]=e[s]||[]).push(function(){try{e.yaCounter35358145=new Ya.Metrika({id:35358145,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){}});var a=t.getElementsByTagName("script")[0],n=t.createElement("script"),i=function(){a.parentNode.insertBefore(n,a)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",i,!1):i()}(document,window,"yandex_metrika_callbacks")},"61ed":function(t,e,s){"use strict";var a=s("54c0"),n=s.n(a);n.a},ad18:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-danger",style:t.progressStyle,attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])])},n=[],i={props:["progress"],computed:{progressStyle:function(){return{width:this.progress+"%"}}}},r=i,c=(s("61ed"),s("2877")),o=Object(c["a"])(r,a,n,!1,null,"7b65995d",null);e["default"]=o.exports},b2a5:function(t,e,s){"use strict";var a=s("4029"),n=s.n(a);n.a},e4d6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("iframe",{attrs:{src:"https://volebnakalkulacka.sk/session/",width:"0",height:"0",frameborder:"0"}}),s("noscript",[s("div",[s("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/35358145",alt:""}})])]),s("noscript",[s("p",[s("img",{staticStyle:{border:"0"},attrs:{src:"//piwik.kohovolit.eu/piwik.php?idsite=2&rec=1",alt:""}})])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},f8b4:function(t,e,s){"use strict";s.r(e);var a=s("e4d6"),n=s("54d2");for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-033a4902.58cad310.js.map