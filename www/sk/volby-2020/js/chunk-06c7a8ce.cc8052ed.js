(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c7a8ce"],{"036c":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.results[t.index]?e("div",{staticClass:"modal-dialog modal-lg"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header row m-2"},[t._m(0),e("div",{staticClass:"card col-12"},[e("div",{staticClass:"card-body pb-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.results[t.index].info.name))]),e("div",{staticClass:"card-text"},[e("span",[t._v(t._s(t.results[t.index].info.abbreviation))]),e("br")]),e("div",{staticClass:"card-text text-muted"},[t._v(t._s(t.$t("match"))+": "+t._s(t.results[t.index].result_percent)+"%")])]),e("div",{staticClass:"col-4 text-right"},[e("img",{staticClass:"picture mr-2",attrs:{src:"pictures/200x200/"+t.results[t.index].info.picture}})])])])]),e("button",{staticClass:"btn btn-secondary btn-lg btn-block mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])]),e("div",{staticClass:"modal-body"},[e("table",{staticClass:"table-striped w-100"},[e("thead",[e("th",{staticClass:"text-left"},[t._v(" "+t._s(t.$t("question"))+" ")]),e("th",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("me"))+" ")]),e("th",{staticClass:"text-center"},[t._v(" x ")]),e("th",{staticClass:"text-center"},[t._v(" "+t._s(t.results[t.index].info.name)+" ")]),e("th",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("candidate_comment"))+" ")])]),e("tbody",t._l(t.questions,(function(s,i){return e("tr",{key:i,class:[t.compared(t.answers[s.id],t.results[t.index]["info"]["votes"][s.id]),t.weighted(t.weights[s.id])]},[e("td",[t.weights[s.id]?e("i",{staticClass:"fa fa-star"}):t._e(),t.weights[s.id]?e("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),t._v(" "+t._s(s.name)+" "),e("font-awesome-icon",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:s.question,expression:"question.question",modifiers:{hover:!0,top:!0}}],attrs:{icon:"info-circle"}})],1),e("td",{staticClass:"text-center"},[t._v(" "+t._s(t.answer2Text(t.answers[s.id]))+" ")]),e("td",{staticClass:"text-center"},[t._v(" "+t._s(t.compare(t.answers[s.id],t.results[t.index]["info"]["votes"][s.id]))+" ")]),e("td",{staticClass:"text-center"},[t._v(" "+t._s(t.answer2TextThem(t.results[t.index]["info"]["votes"][s.id]))+" ")]),e("td",{staticClass:"text-center comment p-2"},[t._v(" "+t._s(t.shortenText(t.results[t.index]["info"]["details"][s.id]))+" "),t.shortened(t.results[t.index]["info"]["details"][s.id])?e("font-awesome-icon",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:t.results[t.index]["info"]["details"][s.id],expression:"results[index]['info']['details'][question.id]",modifiers:{hover:!0,top:!0}}],attrs:{icon:"info-circle"}}):t._e()],1)])})),0)])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary btn-lg mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])])])]):t._e()},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],a=e("a46b"),o=e("1d11"),r=e("8695");a["c"].add(o["a"]),a["c"].add(o["b"]),a["c"].add(o["d"]);var d={props:["index","questions","results","answers","weights"],mounted:function(){"undefined"!==typeof $&&$((function(){$('[data-toggle="popover"]').popover()}))},computed:{stars:function(){var t=Math.floor(this.results[this.index].rating),s=0;t<this.results[this.index].rating&&(s=1);var e=5-t-s;return{full:t,half:s,empty:e}}},methods:{send:function(t){return t},answer2Text:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("dont_know"):"--"},answer2TextThem:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("dont_know_them"):"--"},compare:function(t,s){return t*s===-1?"x":""},compared:function(t,s){return void 0===t?"text-muted":t*s===-1?"text-danger":t*s===1?"text-success":""},weighted:function(t){return t?"strong":""},shortenText:function(t){if(!t)return"";var s=window.innerWidth,e=0;return e=s<576?20:400,t.length>e?t.substr(0,e-3)+"...":t},shortened:function(t){if(!t)return!1;var s=window.innerWidth,e=0;return e=s<576?20:400,t.length>e}},components:{"font-awesome-icon":r["a"]}},c=d,l=(e("a856"),e("2877")),u=Object(l["a"])(c,i,n,!1,null,"c03c4a04",null);s["default"]=u.exports},"7b7d":function(t,s,e){},a856:function(t,s,e){"use strict";var i=e("7b7d"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-06c7a8ce.cc8052ed.js.map