webpackJsonp([2],{133:function(t,e,a){var n=a(55)(a(94),a(136),null,null);t.exports=n.exports},134:function(t,e,a){var n=a(55)(a(95),a(135),null,null);t.exports=n.exports},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},staticRenderFns:[]}},136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-chitiet"},[a("div",{staticClass:"row-header"},[t._m(0),t._v(" "),a("div",{staticClass:"layout row wrap header_tools row-blue"},[a("div",{staticClass:"flex xs12 pl-3 text-ellipsis text-bold"},[a("v-layout",{staticClass:"chart__report",attrs:{wrap:""}},[t.isDVC?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm2:""}},[a("v-select",{attrs:{items:t.agencyLists,autocomplete:"","item-text":"itemName","item-value":"itemCode","return-object":"","hide-selected":!0},on:{change:t.changeGov},model:{value:t.govAgency,callback:function(e){t.govAgency=e},expression:"govAgency"}})],1):t._e(),t._v(" "),"REPORT_01"===t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm2:""}},[a("v-select",{attrs:{items:t.years,autocomplete:"","item-text":"name","item-value":"value","hide-selected":!0},on:{change:t.changeYear},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1):t._e(),t._v(" "),"REPORT_01"===t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm2:""}},[a("v-select",{attrs:{items:t.months,autocomplete:"","item-text":"name","item-value":"value","hide-selected":!0},on:{change:t.changeMonth},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e(),t._v(" "),"REPORT_01"!==t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm1:""}},[a("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Từ ngày: ")])],1):t._e(),t._v(" "),"REPORT_01"!==t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm2:""}},[a("v-menu",{ref:"menufromDate",attrs:{"close-on-content-click":!1,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.menufromDate,callback:function(e){t.menufromDate=e},expression:"menufromDate"}},[a("v-text-field",{attrs:{slot:"activator","append-icon":"event"},on:{blur:function(e){t.fromDate=t.parseDate(t.fromDateFormatted)}},slot:"activator",model:{value:t.fromDateFormatted,callback:function(e){t.fromDateFormatted=e},expression:"fromDateFormatted"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:t.changeFromDate},model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}})],1)],1):t._e(),t._v(" "),"REPORT_01"!==t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm1:""}},[a("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Đến ngày: ")])],1):t._e(),t._v(" "),"REPORT_01"!==t.documentTYPE?a("v-flex",{staticClass:"px-2",attrs:{xs6:"",sm2:""}},[a("v-menu",{ref:"menutoDate",attrs:{"close-on-content-click":!1,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.menutoDate,callback:function(e){t.menutoDate=e},expression:"menutoDate"}},[a("v-text-field",{attrs:{slot:"activator","append-icon":"event"},on:{blur:function(e){t.toDate=t.parseDate(t.toDateFormatted)}},slot:"activator",model:{value:t.toDateFormatted,callback:function(e){t.toDateFormatted=e},expression:"toDateFormatted"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:t.changeToDate},model:{value:t.toDate,callback:function(e){t.toDate=e},expression:"toDate"}})],1)],1):t._e(),t._v(" "),a("v-flex",{staticClass:"px-2 text-right"},[a("v-btn",{staticClass:"mx-0 my-0",attrs:{flat:""},nativeOn:{click:function(e){return t.doExcelFunc(e)}}},[t._v("\n              Xuất Excel\n            ")])],1)],1)],1)])]),t._v(" "),a("div",[null!==t.pdfBlob&&void 0!==t.pdfBlob&&""!==t.pdfBlob?a("vue-friendly-iframe",{attrs:{src:t.pdfBlob}}):t.isShowLoading?t._e():a("div",[a("v-alert",{attrs:{value:!0,outline:"",color:"info",icon:"info"}},[t._v("\n        Không có dữ liệu báo cáo.\n      ")])],1),t._v(" "),t.isShowLoading?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-triangle-big"},[a("span",[t._v("BÁO CÁO")])])}]}},137:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"report__chart"},[a("v-navigation-drawer",{attrs:{app:"",clipped:"",floating:"",width:"240"}},[a("v-list",{staticClass:"py-0 nav_trang_thai_ho_so"},t._l(t.danhSachBaoCao,function(e,n){return a("v-list-group",{key:n,ref:"listGroupCustom",refInFor:!0,attrs:{"prepend-icon":"description","append-icon":"","no-action":""},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},[a("v-list-tile",{attrs:{slot:"activator"},on:{click:function(a){t.toTableIndexing(e,n)}},slot:"activator"},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)],1)}))],1),t._v(" "),a("v-content",[a("router-view")],1)],1)},staticRenderFns:[]}},193:function(t,e){},216:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(66),o=(a.n(n),a(65)),r=(a.n(o),a(67)),i=(a.n(r),a(37)),s=a.n(i),c=a(68),u=a.n(c),l=a(32),d=a(91),m=a.n(d),f=a(64),h=a(90),v=a(89),p=(a.n(v),a(57));a.n(p).a.defaults.headers.common.Token=window.Liferay.authToken,s.a.use(h.default),s.a.use(m.a),s.a.config.productionTip=!1,s.a.mixin({methods:{getReportCongDVC:function(){return!1}}}),new s.a({el:"#app",router:l.a,store:f.a,render:function(t){return t(u.a)}})},32:function(t,e,a){"use strict";var n=a(37),o=a.n(n),r=a(197),i=a(133),s=a.n(i),c=a(134),u=a.n(c),l=[{path:"/bao-cao/:index",name:"Landing",component:s.a,props:!0},{path:"*",name:"NotFound",component:u.a}];o.a.use(r.a);var d=new r.a({routes:l});e.a=d},63:function(t,e){t.exports={initData:{},renderURLInit:"?p_p_id=FrontendWebReports&p_p_lifecycle=2&p_p_state=exclusive&p_p_mode=view&p_p_resource_id=renderURLInit",trangThaiHoSoList:[{code:"0",document:"REPORT_01",active:!1,type:"thong_ke",title:"TÌNH HÌNH GIẢI QUYẾT TTHC"},{code:"2",document:"REPORT_03",active:!1,type:"dossier",title:"CHI TIẾT TIẾP NHẬN HỒ SƠ"},{code:"4",document:"REPORT_05",active:!1,type:"dossier",title:"CHI TIẾT TRẢ KẾT QUẢ"},{code:"8",document:"REPORT_09",active:!1,type:"dossier",title:"CHI TIẾT HỒ SƠ ĐÃ GIẢI QUYẾT"},{code:"9",document:"REPORT_10",active:!1,type:"dossier",title:"CHI TIẾT HỒ SƠ ĐANG XỬ LÝ"}],fakeReport:[{betimesCount:22,cancelledCount:10,deniedCount:50,domainCode:"YTE ",domainName:"Y Tế ",doneCount:40,govAgencyCode:"TPT",govAgencyName:"UBND Tỉnh Phú Thọ",interoperatingCount:0,month:1,onlineCount:30,ontimeCount:10,ontimePercentage:85,overdueCount:5,overtimeCount:5,overtimeInside:0,overtimeOutside:0,processCount:30,processingCount:0,receivedCount:40,releaseCount:10,releasingCount:11,remainingCount:10,reporting:!0,totalCount:100,undueCount:5,unresolvedCount:11,waitingCount:21,year:2018,onegateCount:12},{betimesCount:22,cancelledCount:11,deniedCount:51,domainCode:"YTE ",domainName:"Y Tế ",doneCount:41,govAgencyCode:"TPT2",govAgencyName:"UBND Tỉnh Phú Thọ 2",interoperatingCount:0,month:2,onlineCount:31,ontimeCount:15,ontimePercentage:80,overdueCount:5,overtimeCount:6,overtimeInside:0,overtimeOutside:0,processCount:31,processingCount:0,receivedCount:41,releaseCount:11,releasingCount:12,remainingCount:11,reporting:!0,totalCount:150,undueCount:5,unresolvedCount:15,waitingCount:12,year:2018,onegateCount:12}]}},64:function(t,e,a){"use strict";a.d(e,"a",function(){return m});var n=a(143),o=a.n(n),r=a(37),i=a.n(r),s=a(198),c=a(57),u=a.n(c),l=a(63),d=a.n(l);i.a.use(s.a);var m=new s.a.Store({state:{initData:d.a.initData,loading:!1,index:0},actions:{loadInitResource:function(t){var e=(t.commit,t.state);return new o.a(function(t,a){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData.groupId=window.themeDisplay.getScopeGroupId(),e.initData.user={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData.groupId=0,e.initData.user={userName:"",userEmail:"",userId:20103}),t(e.initData)})},getAgencyLists:function(t,e){var a=(t.commit,t.state);return new o.a(function(t,e){m.dispatch("loadInitResource").then(function(n){var o={headers:{groupId:a.initData.groupId,Accept:"application/json"}};u.a.get("/o/rest/v2/dictcollections/GOVERNMENT_AGENCY/dictitems",o).then(function(e){var a=e.data;if(a.data){var n=a.data;n.unshift({itemCode:"all",itemName:"toàn bộ"}),t(n)}else t(null)}).catch(function(t){e(t)})})})},getAgencyReportLists:function(t,e){var a=(t.commit,t.state);return new o.a(function(t,n){m.dispatch("loadInitResource").then(function(o){var r={headers:{groupId:a.initData.groupId,Accept:"application/json"},params:{year:e.year,month:e.month,group:e.group,reporting:!1,agency:e.agency}},i="";"REPORT_01"===e.document?(i="/o/rest/statistics",u.a.get(i,r).then(function(e){var a=e.data;if(a.data){var n={data:a.data};t(n)}else t(null)}).catch(function(t){n(t)})):(i="/o/rest/v2/dossiers",r.params.sort="domainCode","REPORT_05"===e.document?(r.params.fromFinishDate=e.fromDate,r.params.toFinishDate=e.toDate):"REPORT_09"===e.document?(r.params.fromReleaseDate=e.fromDate,r.params.toReleaseDate=e.toDate):(r.params.fromReceiveDate=e.fromDate,r.params.toReceiveDate=e.toDate),u.a.get(i,r).then(function(e){var a=e.data;if(a.data){t(a)}else t(null)}).catch(function(t){n(t)}))})})},doStatisticReportPrint:function(t,e){var a=(t.commit,t.state);return new o.a(function(t,n){m.dispatch("loadInitResource").then(function(o){u()({method:"PUT",url:"/o/rest/v2_1/statistics/report/"+e.document,headers:{groupId:a.initData.groupId},responseType:"blob",data:e.data}).then(function(e){var a=e.data,n=window.URL.createObjectURL(a);t(n)}).catch(function(t){n(t)})})})}},mutations:{setLoading:function(t,e){t.loading=e},setMenuConfigToDo:function(t,e){t.trangThaiHoSoList=e},setIndex:function(t,e){t.index=e},setInitData:function(t,e){t.initData=e}},getters:{loading:function(t){return t.loading},index:function(t){return t.index},loadingMenuConfigToDo:function(t){return d.a.trangThaiHoSoList}}})},65:function(t,e){},66:function(t,e){},67:function(t,e){},68:function(t,e,a){var n=a(55)(a(93),a(137),null,null);t.exports=n.exports},93:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(32);e.default={data:function(){return{danhSachBaoCao:[],isCallBack:!0}},computed:{currentIndex:function(){return this.$store.getters.index},loadingMenuConfigToDo:function(){return this.$store.getters.loadingMenuConfigToDo}},created:function(){var t=this;t.$nextTick(function(){t.danhSachBaoCao=t.loadingMenuConfigToDo})},updated:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current.params;t.$router.history.current.query;if(t.isCallBack){t.isCallBack=!1;var a=0;e.hasOwnProperty("index")&&(a=e.index),n.a.push({path:"/bao-cao/"+a,query:{renew:Math.floor(100*Math.random())+1}})}})},watch:{$route:function(t,e){t.params,t.query}},methods:{toTableIndexing:function(t,e){this.$store.commit("setIndex",e),n.a.push({path:"/bao-cao/"+e,query:{renew:Math.floor(100*Math.random())+1,q:t.queryParams}})},filterSteps:function(t){}}}},94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(144),o=a.n(n),r=a(32),i=a(196),s=a.n(i),c=a(63);a.n(c);e.default={props:["index","id"],components:{"vue-friendly-iframe":s.a},data:function(){return{isDVC:!1,isCallBack:!0,fromDate:null,menufromDate:!1,fromDateFormatted:null,toDate:null,menutoDate:!1,toDateFormatted:null,danhSachBaoCaos:[],years:[{value:"",name:"Lọc theo năm"},{value:"2017",name:"năm 2017"},{value:"2018",name:"năm 2018"},{value:"2019",name:"năm 2019"}],year:(new Date).getFullYear()+"",months:[{value:"0",name:"Cả năm"},{value:"1",name:"tháng 1"},{value:"2",name:"tháng 2"},{value:"3",name:"tháng 3"},{value:"4",name:"tháng 4"},{value:"5",name:"tháng 5"},{value:"6",name:"tháng 6"},{value:"7",name:"tháng 7"},{value:"8",name:"tháng 8"},{value:"9",name:"tháng 9"},{value:"10",name:"tháng 10"},{value:"11",name:"tháng 11"},{value:"12",name:"tháng 12"}],month:(new Date).getMonth()+1+"",agencyLists:[],govAgency:null,danhSachBaoCao:[],pdfBlob:null,isShowLoading:!1,documentTYPE:"REPORT_01"}},computed:{loadingMenuConfigToDo:function(){return this.$store.getters.loadingMenuConfigToDo}},created:function(){var t=this;t.$nextTick(function(){t.isDVC=t.getReportCongDVC(),t.danhSachBaoCao=t.loadingMenuConfigToDo;var e=t.$router.history.current.query;e.hasOwnProperty("fromDate")?t.fromDateFormatted=e.fromDate:t.fromDateFormatted=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-3).toLocaleDateString("vi-VN"),e.hasOwnProperty("toDate")?t.toDateFormatted=e.toDate:t.toDateFormatted=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).toLocaleDateString("vi-VN"),t.isDVC?t.$store.dispatch("getAgencyLists").then(function(e){t.agencyLists=e,null!==t.agencyLists&&void 0!==t.agencyLists&&t.agencyLists.length>0&&(t.govAgency=t.agencyLists[0],t.doPrintReport())}):t.doPrintReport()})},updated:function(){var t=this;t.$nextTick(function(){if(t.isCallBack){t.isCallBack=!1,t.danhSachBaoCao=t.loadingMenuConfigToDo;var e=(t.$router.history.current.params,t.$router.history.current.query);t.isCallBack&&(t.isCallBack=!1,t.documentTYPE=t.danhSachBaoCao[t.index].document,e.hasOwnProperty("fromDate")?t.fromDateFormatted=e.fromDate:t.fromDateFormatted=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-3).toLocaleDateString("vi-VN"),e.hasOwnProperty("toDate")?t.toDateFormatted=e.toDate:t.toDateFormatted=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).toLocaleDateString("vi-VN"))}})},watch:{$route:function(t,e){var a=this;t.query;a.doPrintReport()},fromDate:function(t){this.fromDateFormatted=this.formatDate(this.fromDate)},toDate:function(t){this.toDateFormatted=this.formatDate(this.toDate)}},methods:{doExcelFunc:function(){var t=this;t.documentTYPE=t.danhSachBaoCao[t.index].document;var e={document:t.documentTYPE,year:t.year,month:t.month,fromDate:t.fromDateFormatted,toDate:t.toDateFormatted};t.isDVC&&t.govAgency&&(e.agency=t.govAgency.itemCode),t.$store.dispatch("getAgencyReportLists",e).then(function(a){var n={};if(null!==a&&void 0!==a){n=a,"all"!==e.agency&&e.agency?n.flagAgency=0:n.flagAgency=1,"REPORT_01"===t.documentTYPE?(n.year=t.year,n.month=t.month):(n.fromDate=t.fromDateFormatted,n.toDate=t.toDateFormatted),n.reportType="excel";var o={document:t.documentTYPE,data:n};t.$store.dispatch("doStatisticReportPrint",o).then(function(t){window.open(t,"_blank")})}})},doPrintReport:function(){var t=this;t.documentTYPE=t.danhSachBaoCao[t.index].document;var e={document:t.documentTYPE,year:t.year,month:t.month,fromDate:t.fromDateFormatted,toDate:t.toDateFormatted};t.isDVC&&t.govAgency&&(e.agency=t.govAgency.itemCode),t.pdfBlob=null,t.isShowLoading=!0,t.$store.dispatch("getAgencyReportLists",e).then(function(a){var n={};if(null!==a&&void 0!==a){n=a,"all"!==e.agency&&e.agency?n.flagAgency=0:n.flagAgency=1,"REPORT_01"===t.documentTYPE?(n.year=t.year,n.month=t.month):(n.fromDate=t.fromDateFormatted,n.toDate=t.toDateFormatted);var o={document:t.documentTYPE,data:n};t.$store.dispatch("doStatisticReportPrint",o).then(function(e){t.pdfBlob=e,t.isShowLoading=!1})}else t.isShowLoading=!1})},changeYear:function(t){var e=this;e.year=t,r.a.push({path:"/bao-cao/"+e.index,query:{year:e.year,month:e.month,fromDate:e.fromDate,toDate:e.toDate,renew:Math.floor(100*Math.random())+1}})},changeMonth:function(t){var e=this;e.month=t,r.a.push({path:"/bao-cao/"+e.index,query:{year:e.year,month:e.month,fromDate:e.fromDate,toDate:e.toDate,renew:Math.floor(100*Math.random())+1}})},changeGov:function(t){var e=this;e.govAgency=t,r.a.push({path:"/bao-cao/"+e.index,query:{year:e.year,month:e.month,fromDate:e.fromDate,toDate:e.toDate,renew:Math.floor(100*Math.random())+1}})},changeFromDate:function(){var t=this;t.menufromDate=!1,t.fromDateFormatted=t.formatDate(t.fromDate),r.a.push({path:"/bao-cao/"+t.index,query:{year:t.year,month:t.month,fromDate:t.fromDateFormatted,toDate:t.toDateFormatted,renew:Math.floor(100*Math.random())+1}})},changeToDate:function(){var t=this;t.menutoDate=!1,t.toDateFormatted=t.formatDate(t.toDate),r.a.push({path:"/bao-cao/"+t.index,query:{year:t.year,month:t.month,fromDate:t.fromDateFormatted,toDate:t.toDateFormatted,renew:Math.floor(100*Math.random())+1}})},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=o()(e,3),n=a[0],r=a[1];return a[2]+"/"+r+"/"+n},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=o()(e,3),n=a[0],r=a[1];return a[2]+"-"+r.padStart(2,"0")+"-"+n.padStart(2,"0")}}}},95:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}}},[216]);
//# sourceMappingURL=app.js.map