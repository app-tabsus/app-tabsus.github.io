(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10,15,40],{1031:function(t,e,r){"use strict";r.r(e);r(93),r(26);var n=r(5),o=r(70),c=(r(153),r(118),r(17),r(40),{name:"PainelCardDatasets",props:{title:{type:String,default:""},value:{type:String,default:""},desc:{type:String,default:""},button:{type:String,default:"Mais"},system:{type:String,required:!0},url:{type:String,default:""},params:{type:Object,required:!0}},data:function(){return{rows:[],checkedDatasets:[],currentSort:"year",currentSortDir:"desc"}},computed:{rowsSorted:function(){var t=this;return Object(o.a)(this.rows).sort((function(a,b){var e=1;return"desc"===t.currentSortDir&&(e=-1),a[t.currentSort]<b[t.currentSort]?-1*e:a[t.currentSort]>b[t.currentSort]?1*e:0}))}},watch:{deep:!0,immediate:!0,url:function(t,e){t!==e&&this.getRows(t,this.params)},params:function(t,e){this.getRows(this.url,t)},checkedDatasets:function(){var t=this,e=[];this.rows.forEach((function(r){t.checkedDatasets.forEach((function(t){t===r.id&&e.push(r)}))})),this.$emit("checked",e)}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat(t.url),{params:t.params});case 2:return r=e.sent,e.next=5,r.data;case 5:for(t.rows=e.sent,n=[],t.checkedDatasets=[],o=0;o<3;o++)t.checkedDatasets.push(t.rows[o].id),n.push(t.rows[o]);t.$emit("loadend"),t.$emit("checked",n);case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{sortedClass:function(t){return this.currentSort===t?"sorted ".concat("asc"===this.currentSortDir?"desc":"asc"):""},sortBy:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},getRows:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.get("".concat(t),{params:e});case 2:return o=n.sent,n.next=5,o.data;case 5:for(r.rows=n.sent,r.checkedDatasets=[],c=0;c<3;c++)r.checkedDatasets.push(r.rows[c].id);r.$emit("loadend");case 9:case"end":return n.stop()}}),n)})))()}}}),l=(r(981),r(195)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card text-center shadow-2xl m-2"},[e("div",{staticClass:"card-body pl-2 pr-1 py-1"},[e("h2",{staticClass:"card-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"overflow-y-auto h-72"},[e("table",{staticClass:"table w-full table-zebra table-compact"},[e("thead",[e("tr",[e("th",{class:t.sortedClass("year"),on:{click:function(e){return t.sortBy("year")}}},[t._v("Ano")]),t._v(" "),e("th",{class:t.sortedClass("total"),on:{click:function(e){return t.sortBy("total")}}},[t._v("\n              Total\n            ")]),t._v(" "),e("th",[t._v("Check")]),t._v(" "),e("th",[t._v("Detalhes")])])]),t._v(" "),e("tbody",t._l(t.rowsSorted,(function(r){return e("tr",{key:r.id},[e("td",[e("div",{staticClass:"badge badge-primary",style:"background-color: ".concat(r.color,"; border-color: transparent")},[t._v("\n                "+t._s(r.year)+"\n              ")])]),t._v(" "),e("td",[t._v(t._s(t._f("locateNumber")(r.total)))]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedDatasets,expression:"checkedDatasets"}],staticClass:"toggle-primary toggle",attrs:{type:"checkbox"},domProps:{value:r.id,checked:Array.isArray(t.checkedDatasets)?t._i(t.checkedDatasets,r.id)>-1:t.checkedDatasets},on:{change:function(e){var n=t.checkedDatasets,o=e.target,c=!!o.checked;if(Array.isArray(n)){var l=r.id,d=t._i(n,l);o.checked?d<0&&(t.checkedDatasets=n.concat([l])):d>-1&&(t.checkedDatasets=n.slice(0,d).concat(n.slice(d+1)))}else t.checkedDatasets=c}}})]),t._v(" "),e("td",[e("NuxtLink",{staticClass:"btn btn-sm btn-secondary text-center align-middle",attrs:{to:"/panels/".concat(t.system,"/map/").concat(r.id)}},[e("fa-icon",{staticClass:"icon-menu w-4 h-4 stroke-current",attrs:{icon:["far","map"]}})],1),t._v(" "),e("NuxtLink",{staticClass:"btn btn-sm btn-primary text-center align-middle",attrs:{to:"/panels/".concat(t.system,"/details/").concat(r.id)}},[e("fa-icon",{staticClass:"icon-menu w-4 h-4 stroke-current",attrs:{icon:"square-plus"}}),t._v(" "),e("fa-icon",{staticClass:"icon-menu w-4 h-4 ml-2 stroke-current",attrs:{icon:"chevron-right"}})],1)],1)])})),0)])])])])}),[],!1,null,"0a104cb1",null);e.default=component.exports;installComponents(component,{Table:r(813).default})},810:function(t,e,r){var content=r(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(141).default)("49ca9d96",content,!0,{sourceMap:!1})},813:function(t,e,r){"use strict";r.r(e);r(45),r(338),r(142),r(154);var n=r(5),o=r(70),c=(r(153),r(93),r(8)),l={name:"TableComponent",auth:!1,props:{headers:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},keyColumns:{type:String,default:"id"},urlBase:{type:String,default:""}},data:function(){return{rows:[],perPage:5,currentPage:1,totalRows:0,search:"",perPageOptions:[5,10,50,100],dateColumns:["created_at","updated_at"],grid:{display:"grid","grid-template-columns":"repeat(4, 1fr)","overflow-y":"auto",height:"250px"},iconColor:{width:"28px",height:"28px"},swatches:[].concat(Object(o.a)(c.a.palette.metro),Object(o.a)(c.a.palette.field),Object(o.a)(c.a.palette.nights),Object(o.a)(c.a.palette.pastels),Object(o.a)(c.a.palette.brewer1),Object(o.a)(c.a.palette.brewer2))}},computed:{url:function(){return"".concat(this.urlBase).concat(this.genPage()).concat(this.genSearch())}},mounted:function(){this.getRows()},methods:{genPage:function(){return"?per_page=".concat(this.perPage,"&page=").concat(this.currentPage)},genSearch:function(){return this.search.length>3?"&search=".concat(this.search):""},setPage:function(t){this.currentPage=t,this.getRows()},getRows:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get(t.url);case 2:return r=e.sent,e.next=5,r.data.data;case 5:return t.rows=e.sent,e.next=8,r.data.total;case 8:t.totalRows=e.sent;case 9:case"end":return e.stop()}}),e)})))()},changeColor:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.$axios.patch("".concat(r.urlBase,"/").concat(e),{color:t},{timeout:9999999});case 3:r.$toast.success("Cor alterada",{timeout:3e4}),n.next=12;break;case 6:return n.prev=6,n.t0=n.catch(0),r.$toast.error("Desculpe não foi possivel alterada cor",{timeout:3e4}),n.next=11,n.t0.response;case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},d=(r(826),r(195)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card shadow-lg compact side bg-base-100 my-1"},[e("div",{staticClass:"p-1 flex justify-end"},[t._v("\n    "+t._s(t.search)+"\n    "),e("div",{staticClass:"form-control"},[e("label",{staticClass:"input-group input-group-md"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input input-bordered input-md",attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getRows.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("span",[e("a",{on:{click:t.getRows}},[e("fa-icon",{attrs:{icon:"magnifying-glass"}})],1)])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"table w-full table-zebra"},[e("thead",[e("tr",[t._l(t.headers,(function(r,n){return e("th",{key:n},[t._v(t._s(r))])})),t._v(" "),e("th",[t._v("Ações")])],2)]),t._v(" "),e("tbody",t._l(t.rows,(function(r){return e("tr",{key:r[t.keyColumns]},[t._l(t.columns,(function(n,o){return e("td",{key:o},[t.dateColumns.includes(n)?e("div",[t._v("\n              "+t._s(t._f("formatDate")(r[n]))+"\n            ")]):"color"==n?e("div",[e("v-swatches",{attrs:{"wrapper-style":t.grid,"swatch-style":t.iconColor,"trigger-style":t.iconColor,swatches:t.swatches},on:{input:function(e){return t.changeColor(e,r[t.keyColumns])}},model:{value:r[n],callback:function(e){t.$set(r,n,e)},expression:"row[column]"}})],1):e("div",[t._v("\n              "+t._s(r[n])+"\n            ")])])})),t._v(" "),e("td",[e("ModalDelete",{attrs:{id:r[t.keyColumns],url:t.urlBase},on:{delete:t.getRows}})],1)],2)})),0)]),t._v(" "),e("div",{staticClass:"p-1 flex justify-end"},[e("Pagination",{attrs:{"per-page":t.perPage,value:t.currentPage,total:t.totalRows},on:{"update:perPage":function(e){t.perPage=e},"update:per-page":function(e){t.perPage=e},"update:value":function(e){t.currentPage=e},input:t.setPage}})],1)])])}),[],!1,null,"5be89f54",null);e.default=component.exports;installComponents(component,{ModalDelete:r(822).default,Table:r(813).default,Pagination:r(814).default})},814:function(t,e,r){"use strict";r.r(e);r(117);var n={name:"PaginationComponent",props:{noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},data:function(){return{defaultPagesToDisplay:5}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2);return t+this.value>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2)+this.value;return t<this.totalPages?t:this.totalPages}return this.pagesToDisplay}},watch:{perPage:function(){},total:function(){}},methods:{range:function(t,e){for(var r=[],i=t;i<=e;i++)r.push(i);return r},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}}},o=r(195),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn",class:{disabled:1===t.value,"no-arrows":1===t.value},on:{click:t.prevPage}},[t._v("\n    «\n  ")]),t._v(" "),t._l(t.range(t.minPage,t.maxPage),(function(r){return e("button",{key:r,staticClass:"btn",class:{"btn-active":t.value===r},on:{click:function(e){return t.changePage(r)}}},[t._v("\n    "+t._s(r)+"\n  ")])})),t._v(" "),e("button",{staticClass:"btn",class:{disabled:t.value===t.totalPages,"no-arrows":t.value===t.totalPages},on:{click:t.nextPage}},[t._v("\n    »\n  ")])],2)}),[],!1,null,null,null);e.default=component.exports},822:function(t,e,r){"use strict";r.r(e);r(117),r(93);var n={name:"ModalDelete",props:{url:{type:String,required:!0},id:{type:Number,required:!0}},data:function(){return{showModal:!1}},methods:{destroy:function(){var t=this;this.$axios.delete("".concat(this.url,"/").concat(this.id)).then((function(e){t.$toast.success("Dateset apagado",{timeout:3e4}),console.log(e)})).catch((function(e){t.$toast.success("Não consegui apagar",{timeout:3e4}),console.error(e)})),this.showModal=!1,this.$emit("delete")}}},o=r(195),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("a",{staticClass:"btn btn-error btn-outline btn-circle btn-sm",on:{click:function(e){t.showModal=!t.showModal}}},[e("fa-icon",{attrs:{icon:["far","trash-alt"]}})],1),t._v(" "),e("div",{staticClass:"modal",class:{"modal-open":t.showModal}},[e("div",{staticClass:"modal-box"},[t._t("default"),t._v(" "),e("p",[t._v("Tem Certeza?")]),t._v(" "),e("div",{staticClass:"modal-action"},[e("a",{staticClass:"btn btn-warning",on:{click:t.destroy}},[t._v("Sim")]),t._v(" "),e("a",{staticClass:"btn",on:{click:function(e){t.showModal=!t.showModal}}},[t._v("Não")])])],2)])])}),[],!1,null,null,null);e.default=component.exports},826:function(t,e,r){"use strict";r(810)},827:function(t,e,r){var n=r(140)((function(i){return i[1]}));n.push([t.i,".table td[data-v-5be89f54],.table th[data-v-5be89f54]{padding:0.375rem}@media (min-width: 768px){.table td[data-v-5be89f54],.table th[data-v-5be89f54]{padding:1rem}}",""]),n.locals={},t.exports=n},932:function(t,e,r){var content=r(982);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(141).default)("aaddeaaa",content,!0,{sourceMap:!1})},981:function(t,e,r){"use strict";r(932)},982:function(t,e,r){var n=r(140)((function(i){return i[1]}));n.push([t.i,'th.sorted.asc[data-v-0a104cb1]:after{display:inline-block;content:"▼"}th.sorted.desc[data-v-0a104cb1]:after{display:inline-block;content:"▲"}td[data-v-0a104cb1]{padding-left:0.25rem;padding-right:0.25rem}',""]),n.locals={},t.exports=n}}]);