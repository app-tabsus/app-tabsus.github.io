(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10,15,40],{1042:function(t,e,o){"use strict";o.r(e);o(68);var n=o(5),r=(o(45),o(64),o(17),o(69),o(85),o(142),o(154),o(153),{name:"PainelTableCities",props:{initial:{type:String,default:""},name:{type:String,default:""},painel:{type:String,default:""},optionsScopeLocation:{type:Array,default:function(){return[]}}},data:function(){return{cities:[],citiesSearched:[],citiesChecked:[],microregionsChecked:[],mesoregionsChecked:[],locationName:"",locationType:this.$store.state[this.painel].locationType,locationId:this.$store.state[this.painel].locationId,scopeLocation:this.$store.state[this.painel].scopeLocation,term:""}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.initial){e.next=3;break}return e.next=3,t.getCities(t.initial);case 3:case"end":return e.stop()}}),e)})))()},watch:{initial:function(t){null!=t&&(this.getCities(t),this.citiesChecked=[],this.microregionsChecked=[],this.mesoregionsChecked=[])}},methods:{getCities:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.cities=[],e.citiesSearched=[],o.prev=2,o.next=5,e.$axios.get("v1/location/city?initial=".concat(t));case 5:n=o.sent,e.cities=n.data,e.citiesSearched=Object.assign({},e.cities),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),e.$toast.error("Erro ao carregar as cidades",{timeout:3e4});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})))()},toLower:function(text){return(text=text.normalize("NFD").replace(/[\u0300-\u036F]/g,"")).toString().toLowerCase()},searchByName:function(t,e){var o=this;e&&(t=t.filter((function(t){return!!o.toLower(t.city).includes(o.toLower(e))||(!!o.toLower(t.microregion).includes(o.toLower(e))||!!o.toLower(t.mesoregion).includes(o.toLower(e)))}))),this.citiesSearched=t},updateLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;return"city"===t?(this.microregionsChecked=[],this.mesoregionsChecked=[],this.locationName="Cidade: ".concat(e),this.locationType=t,this.locationId=this.citiesChecked,0===this.locationId.length&&(this.locationType=null)):"microregion"===t?(this.mesoregionsChecked=[],this.citiesChecked=[],this.locationName="Microrregião: ".concat(e),this.locationType=t,this.locationId=this.microregionsChecked,0===this.locationId.length&&(this.locationType=null)):"mesoregion"===t&&(this.microregionsChecked=[],this.citiesChecked=[],this.locationName="Mesorregião: ".concat(e),this.locationType=t,this.locationId=this.mesoregionsChecked,0===this.locationId.length&&(this.locationType=null)),this.$store.commit("".concat(this.painel,"/setLocation"),{locationType:this.locationType,locationId:this.locationId,locationName:this.locationName}),this.$store.commit("".concat(this.painel,"/setScopo"),{scopeLocation:this.scopeLocation}),this.$emit("changeLocation",{locationId:this.locationId,locationType:this.locationType,locationName:this.locationName}),!0},changeScope:function(){this.$store.commit("".concat(this.painel,"/setScopo"),{scopeLocation:this.scopeLocation}),this.$emit("changeLocation",{locationId:this.locationId,locationType:this.locationType,locationName:this.locationName})}}}),c=r,l=(o(991),o(195)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},[e("div",{staticClass:"px-2 mx-2 navbar-start"},[e("span",{staticClass:"text-lg font-bold"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),t.optionsScopeLocation.length>0?e("div",t._l(t.optionsScopeLocation,(function(o){return e("div",{key:o.value,staticClass:"btn btn-ghost btn-sm rounded-btn m-1"},[t._v("\n          "+t._s(o.name)+"\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.scopeLocation,expression:"scopeLocation"}],staticClass:"toggle toggle-primary ml-2",attrs:{type:"radio"},domProps:{value:o.value,checked:t._q(t.scopeLocation,o.value)},on:{change:[function(e){t.scopeLocation=o.value},t.changeScope]}})])})),0):t._e()]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"form-control"},[e("div",{staticClass:"relative text-neutral"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.term,expression:"term"}],staticClass:"w-full pr-16 input input-primary input-bordered",attrs:{type:"text",placeholder:"Buscar..."},domProps:{value:t.term},on:{click:function(t){return t.stopPropagation(),function(){return!0}.apply(null,arguments)},input:[function(e){e.target.composing||(t.term=e.target.value)},function(e){return t.searchByName(t.cities,t.term)}]}}),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 rounded-l-none btn btn-primary"},[e("fa-icon",{staticClass:"icon-menu",attrs:{icon:"magnifying-glass"}})],1)])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto container-table"},[e("table",{staticClass:"table w-full table-zebra table-compact"},[t._m(1),t._v(" "),e("tbody",t._l(t.citiesSearched,(function(o){return e("tr",{key:o.city_id,staticClass:"hover"},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.citiesChecked,expression:"citiesChecked"}],staticClass:"checkbox",attrs:{type:"radio"},domProps:{value:o.city_id,checked:t._q(t.citiesChecked,o.city_id)},on:{change:[function(e){t.citiesChecked=o.city_id},function(e){return t.updateLocation("city",o.city)}]}}),t._v("\n            "+t._s(o.city)+"\n          ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.microregionsChecked,expression:"microregionsChecked"}],staticClass:"checkbox",attrs:{type:"radio"},domProps:{value:o.microregion_id,checked:t._q(t.microregionsChecked,o.microregion_id)},on:{change:[function(e){t.microregionsChecked=o.microregion_id},function(e){return t.updateLocation("microregion",o.microregion)}]}}),t._v("\n            "+t._s(o.microregion)+"\n          ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mesoregionsChecked,expression:"mesoregionsChecked"}],staticClass:"checkbox",attrs:{type:"radio"},domProps:{value:o.mesoregion_id,checked:t._q(t.mesoregionsChecked,o.mesoregion_id)},on:{change:[function(e){t.mesoregionsChecked=o.mesoregion_id},function(e){return t.updateLocation("mesoregion",o.mesoregion)}]}}),t._v("\n            "+t._s(o.mesoregion)+"\n          ")])])})),0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"hidden px-2 mx-2 navbar-center lg:flex"},[t("div",{staticClass:"flex items-stretch"})])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Cidade")]),t._v(" "),e("th",[t._v("Microrregião")]),t._v(" "),e("th",[t._v("Mesorregião")])])])}],!1,null,"4ecaef2d",null);e.default=component.exports;installComponents(component,{Table:o(813).default})},810:function(t,e,o){var content=o(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(141).default)("49ca9d96",content,!0,{sourceMap:!1})},813:function(t,e,o){"use strict";o.r(e);o(45),o(338),o(142),o(154);var n=o(5),r=o(70),c=(o(153),o(93),o(8)),l={name:"TableComponent",auth:!1,props:{headers:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},keyColumns:{type:String,default:"id"},urlBase:{type:String,default:""}},data:function(){return{rows:[],perPage:5,currentPage:1,totalRows:0,search:"",perPageOptions:[5,10,50,100],dateColumns:["created_at","updated_at"],grid:{display:"grid","grid-template-columns":"repeat(4, 1fr)","overflow-y":"auto",height:"250px"},iconColor:{width:"28px",height:"28px"},swatches:[].concat(Object(r.a)(c.a.palette.metro),Object(r.a)(c.a.palette.field),Object(r.a)(c.a.palette.nights),Object(r.a)(c.a.palette.pastels),Object(r.a)(c.a.palette.brewer1),Object(r.a)(c.a.palette.brewer2))}},computed:{url:function(){return"".concat(this.urlBase).concat(this.genPage()).concat(this.genSearch())}},mounted:function(){this.getRows()},methods:{genPage:function(){return"?per_page=".concat(this.perPage,"&page=").concat(this.currentPage)},genSearch:function(){return this.search.length>3?"&search=".concat(this.search):""},setPage:function(t){this.currentPage=t,this.getRows()},getRows:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get(t.url);case 2:return o=e.sent,e.next=5,o.data.data;case 5:return t.rows=e.sent,e.next=8,o.data.total;case 8:t.totalRows=e.sent;case 9:case"end":return e.stop()}}),e)})))()},changeColor:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.$axios.patch("".concat(o.urlBase,"/").concat(e),{color:t},{timeout:9999999});case 3:o.$toast.success("Cor alterada",{timeout:3e4}),n.next=12;break;case 6:return n.prev=6,n.t0=n.catch(0),o.$toast.error("Desculpe não foi possivel alterada cor",{timeout:3e4}),n.next=11,n.t0.response;case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},d=(o(826),o(195)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card shadow-lg compact side bg-base-100 my-1"},[e("div",{staticClass:"p-1 flex justify-end"},[t._v("\n    "+t._s(t.search)+"\n    "),e("div",{staticClass:"form-control"},[e("label",{staticClass:"input-group input-group-md"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input input-bordered input-md",attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getRows.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("span",[e("a",{on:{click:t.getRows}},[e("fa-icon",{attrs:{icon:"magnifying-glass"}})],1)])])])]),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[e("table",{staticClass:"table w-full table-zebra"},[e("thead",[e("tr",[t._l(t.headers,(function(o,n){return e("th",{key:n},[t._v(t._s(o))])})),t._v(" "),e("th",[t._v("Ações")])],2)]),t._v(" "),e("tbody",t._l(t.rows,(function(o){return e("tr",{key:o[t.keyColumns]},[t._l(t.columns,(function(n,r){return e("td",{key:r},[t.dateColumns.includes(n)?e("div",[t._v("\n              "+t._s(t._f("formatDate")(o[n]))+"\n            ")]):"color"==n?e("div",[e("v-swatches",{attrs:{"wrapper-style":t.grid,"swatch-style":t.iconColor,"trigger-style":t.iconColor,swatches:t.swatches},on:{input:function(e){return t.changeColor(e,o[t.keyColumns])}},model:{value:o[n],callback:function(e){t.$set(o,n,e)},expression:"row[column]"}})],1):e("div",[t._v("\n              "+t._s(o[n])+"\n            ")])])})),t._v(" "),e("td",[e("ModalDelete",{attrs:{id:o[t.keyColumns],url:t.urlBase},on:{delete:t.getRows}})],1)],2)})),0)]),t._v(" "),e("div",{staticClass:"p-1 flex justify-end"},[e("Pagination",{attrs:{"per-page":t.perPage,value:t.currentPage,total:t.totalRows},on:{"update:perPage":function(e){t.perPage=e},"update:per-page":function(e){t.perPage=e},"update:value":function(e){t.currentPage=e},input:t.setPage}})],1)])])}),[],!1,null,"5be89f54",null);e.default=component.exports;installComponents(component,{ModalDelete:o(822).default,Table:o(813).default,Pagination:o(814).default})},814:function(t,e,o){"use strict";o.r(e);o(117);var n={name:"PaginationComponent",props:{noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},data:function(){return{defaultPagesToDisplay:5}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2);return t+this.value>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2)+this.value;return t<this.totalPages?t:this.totalPages}return this.pagesToDisplay}},watch:{perPage:function(){},total:function(){}},methods:{range:function(t,e){for(var o=[],i=t;i<=e;i++)o.push(i);return o},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}}},r=o(195),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn",class:{disabled:1===t.value,"no-arrows":1===t.value},on:{click:t.prevPage}},[t._v("\n    «\n  ")]),t._v(" "),t._l(t.range(t.minPage,t.maxPage),(function(o){return e("button",{key:o,staticClass:"btn",class:{"btn-active":t.value===o},on:{click:function(e){return t.changePage(o)}}},[t._v("\n    "+t._s(o)+"\n  ")])})),t._v(" "),e("button",{staticClass:"btn",class:{disabled:t.value===t.totalPages,"no-arrows":t.value===t.totalPages},on:{click:t.nextPage}},[t._v("\n    »\n  ")])],2)}),[],!1,null,null,null);e.default=component.exports},822:function(t,e,o){"use strict";o.r(e);o(117),o(93);var n={name:"ModalDelete",props:{url:{type:String,required:!0},id:{type:Number,required:!0}},data:function(){return{showModal:!1}},methods:{destroy:function(){var t=this;this.$axios.delete("".concat(this.url,"/").concat(this.id)).then((function(e){t.$toast.success("Dateset apagado",{timeout:3e4}),console.log(e)})).catch((function(e){t.$toast.success("Não consegui apagar",{timeout:3e4}),console.error(e)})),this.showModal=!1,this.$emit("delete")}}},r=o(195),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("a",{staticClass:"btn btn-error btn-outline btn-circle btn-sm",on:{click:function(e){t.showModal=!t.showModal}}},[e("fa-icon",{attrs:{icon:["far","trash-alt"]}})],1),t._v(" "),e("div",{staticClass:"modal",class:{"modal-open":t.showModal}},[e("div",{staticClass:"modal-box"},[t._t("default"),t._v(" "),e("p",[t._v("Tem Certeza?")]),t._v(" "),e("div",{staticClass:"modal-action"},[e("a",{staticClass:"btn btn-warning",on:{click:t.destroy}},[t._v("Sim")]),t._v(" "),e("a",{staticClass:"btn",on:{click:function(e){t.showModal=!t.showModal}}},[t._v("Não")])])],2)])])}),[],!1,null,null,null);e.default=component.exports},826:function(t,e,o){"use strict";o(810)},827:function(t,e,o){var n=o(140)((function(i){return i[1]}));n.push([t.i,".table td[data-v-5be89f54],.table th[data-v-5be89f54]{padding:0.375rem}@media (min-width: 768px){.table td[data-v-5be89f54],.table th[data-v-5be89f54]{padding:1rem}}",""]),n.locals={},t.exports=n},936:function(t,e,o){var content=o(992);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(141).default)("a4de930a",content,!0,{sourceMap:!1})},991:function(t,e,o){"use strict";o(936)},992:function(t,e,o){var n=o(140)((function(i){return i[1]}));n.push([t.i,".container-table[data-v-4ecaef2d]{max-height:64vh}td[data-v-4ecaef2d]{max-width:100px;white-space:inherit}td>input[data-v-4ecaef2d]{margin-bottom:-5px}",""]),n.locals={},t.exports=n}}]);