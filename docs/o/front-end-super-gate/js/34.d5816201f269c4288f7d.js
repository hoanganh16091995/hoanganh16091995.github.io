webpackJsonp([34],{254:function(e,t,n){var s=n(137)(n(749),n(768),null,null);s.options.__file="/Users/binhth/Documents/git_opencps/20-8-2018/frontend-opencps-v2.1/onegate_21_fe/src/components/DanhSachThuTuc.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] DanhSachThuTuc.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(37);t.default={props:["serviceCode"],data:function(){return{govAgencies:[],serviceOptions:[],serviceConfigSelect:null}},computed:{currentIndex:function(){return this.$store.getters.index}},created:function(){var e=this;console.log("create------"),e.$store.dispatch("loadServiceConfigsGov",{}).then(function(t){if(e.govAgencies=t,"0"!==String(e.serviceCode))for(var n in e.govAgencies){var s=e.govAgencies[n].govAgencyCode;for(var o in e.govAgencies[n].domains)for(var i in e.govAgencies[n].domains[o].serviceConfigs){var r=e.govAgencies[n].domains[o].serviceConfigs[i],c=r.serviceConfigId;if(String(e.serviceCode)===String(c)){e.pullServiceOptions(r,s);break}}}})},updated:function(){},watch:{},methods:{pullServiceOptions:function(e,t){console.log("govAgencyCode++++++++++",t);var n=this;n.serviceConfigSelect=e,n.$store.dispatch("getServiceOpionByProcess",e).then(function(o){1===o.length?n.$store.dispatch("getServiceInfo",{serviceInfoId:e.serviceInfoId}).then(function(e){console.log("resServiceInfo+++++++++++",e);var i={serviceCode:e.serviceCode,govAgencyCode:t,templateNo:o[0].templateNo,originality:n.getOriginality()};n.$store.dispatch("postDossier",i).then(function(e){n.loadingAction=!1,n.indexAction=-1,s.a.push({path:"/danh-sach-ho-so/0/ho-so/"+e.dossierId+"/NEW",query:n.$router.history.current.query})})}):n.serviceOptions=o})},selectServiceOption:function(e,t){var n=this;console.log("govAgencyCode+++++++++++",t),n.$store.dispatch("getServiceInfo",{serviceInfoId:n.serviceConfigSelect.serviceInfoId}).then(function(o){console.log("resServiceInfo+++++++++++",o);var i={serviceCode:o.serviceCode,govAgencyCode:t,templateNo:e.templateNo,originality:n.getOriginality()};n.$store.dispatch("postDossier",i).then(function(e){n.loadingAction=!1,n.indexAction=-1,s.a.push({path:"/danh-sach-ho-so/0/ho-so/"+e.dossierId+"/NEW",query:n.$router.history.current.query})})})}}}},768:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["0"!==String(e.serviceCode)?n("div",{staticClass:"text-center mt-4"},[n("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}}),e._v(" "),n("p",{staticClass:"mt-4"},[e._v("đang tạo hồ sơ ...")])],1):n("v-expansion-panel",{staticClass:"expand__select__gov",attrs:{expand:""}},e._l(e.govAgencies,function(t,s){return n("v-expansion-panel-content",{key:s},[n("div",{staticClass:"ml-3",attrs:{slot:"header"},slot:"header"},[n("v-icon",{staticStyle:{"font-size":"14px","margin-top":"-4px","padding-right":"5px"}},[e._v("account_balance")]),e._v(" "+e._s(t.govAgencyName))],1),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"grey lighten-3 px-0 py-0"},[n("v-expansion-panel",{staticClass:"expand__select__domain",attrs:{expand:""}},e._l(t.domains,function(s,o){return t.domains?n("v-expansion-panel-content",{key:o},[n("div",{staticStyle:{"margin-left":"14px"},attrs:{slot:"header"},slot:"header"},[n("v-icon",{staticClass:"pr-2 theme--dark"},[e._v("navigate_next")]),e._v(" "),n("span",{staticStyle:{position:"absolute","margin-top":"1px"}},[e._v(e._s(s.domainName))])],1),e._v(" "),n("v-card",e._l(s.serviceConfigs,function(o,i){return s.serviceConfigs?n("v-card-text",{key:i,staticClass:"card__text__gov"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pt-1",attrs:{xs12:"",sm9:""}},[n("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(i+1)+".")]),e._v("  \n                      "),n("span",[e._v(e._s(o.serviceInfoName))])]),e._v(" "),n("v-flex",{staticClass:"text-xs-center pt-1",attrs:{xs12:"",sm1:""}},[n("span",[e._v("Mức "+e._s(o.level))])]),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm2:""}},[n("v-menu",{attrs:{left:""}},[n("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",flat:"",small:""},on:{click:function(n){e.pullServiceOptions(o,t.govAgencyCode)}},slot:"activator"},[e._v("\n                          Chọn\n                        ")]),e._v(" "),e.serviceOptions.length>1?n("v-list",e._l(e.serviceOptions,function(s,o){return n("v-list-tile",{key:o,on:{click:function(n){e.selectServiceOption(s,t.govAgencyCode)}}},[n("v-list-tile-title",[e._v(e._s(s.optionName))])],1)})):e._e()],1)],1)],1)],1):e._e()}))],1):e._e()}))],1)],1)],1)}))],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=34.d5816201f269c4288f7d.js.map