webpackJsonp([13,29],{212:function(e,t,i){var s=i(137)(i(655),i(657),null,null);s.options.__file="/Users/binhth/Documents/git_opencps/20-8-2018/frontend-opencps-v2.1/onegate_21_fe/src/components/TiepNhan/TiepNhanHoSo_ThanhPhanHoSo.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] TiepNhanHoSo_ThanhPhanHoSo.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},241:function(e,t,i){var s=i(137)(i(730),i(735),null,null);s.options.__file="/Users/binhth/Documents/git_opencps/20-8-2018/frontend-opencps-v2.1/onegate_21_fe/src/components/HoanThienBoSungHoSoDetail.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] HoanThienBoSungHoSoDetail.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},655:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__=__webpack_require__(139),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__),__WEBPACK_IMPORTED_MODULE_1_jquery__=__webpack_require__(36),__WEBPACK_IMPORTED_MODULE_1_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__),__WEBPACK_IMPORTED_MODULE_2_toastr__=__webpack_require__(141),__WEBPACK_IMPORTED_MODULE_2_toastr___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_toastr__);__webpack_exports__.default={props:{onlyView:{type:Boolean,default:function(){return!1}},id:{type:String,default:function(){return"nm"}},partTypes:{type:Array,default:function(){return[1,3]}},checkInput:{type:Number,default:function(){return 0}}},data:function(){return{dossierTemplateItems:[],dossierMarksItems:[],dossierFilesItems:[],thongTinHoSo:{},valid:!0,stateView:!1,dialogAddOtherTemp:!1,loadingAddOther:!1,otherDossierTemplate:"",sheet:!1,partView:"",dossierFileIdView:"",stateEdit:!1,progressUploadPart:"",dialogPDF:!1,dialogPDFLoading:!0,stateAddFileOther:!1,dossierTemplatesItemSelect:{},fileViews:[],sampleCount:0,serviceInfoId:0,fileMarkItems:[{text:"Không có",value:0},{text:"Bản chụp",value:1},{text:"Bản sao",value:2},{text:"Bản gốc",value:3}],fileCheckItems:[{text:"Chưa kiểm tra",value:0},{text:"Đạt",value:1},{text:"Không đạt",value:2}],fileTemplateItems:[],stateViewResult:!0}},computed:{loading:function(){return this.$store.getters.loading},originality:function(){return this.getOriginality()},initDataResource:function(){return this.$store.getters.loadingInitData}},mounted:function(){var e=this;e.page=1,e.$nextTick(function(){})},methods:{resetCounterTemplate:function(e,t){e.commit,e.state;this.dossierTemplateItems.forEach(function(e){e.partNo===t.partNo&&(e.hasForm?e.count=1:e.count=0)})},recountFileTemplates:function(){var e=this;e.dossierTemplateItems.forEach(function(t){t.count=0,e.dossierFilesItems.forEach(function(e){t.partNo!==e.dossierPartNo||e.eForm||t.count++})})},initData:function(e){var t=this,i=[];null!==e.sampleCount&&void 0!==e.sampleCount&&"undefined"!==e.sampleCount&&(t.sampleCount=e.sampleCount),i.push(t.$store.dispatch("loadDossierTemplates",e)),i.push(t.$store.dispatch("loadDossierMark",e)),i.push(t.$store.dispatch("loadDossierFiles",e.dossierId)),i.push(t.$store.dispatch("getServiceInfo",{serviceInfoId:e.serviceCode})),t.thongTinHoSo=e,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(i).then(function(e){var i=e[0],s=e[1],o=e[2],a=[];e[3].hasOwnProperty("serviceInfoId")&&(t.serviceInfoId=e[3].serviceInfoId),e[3].fileTemplates&&(Array.isArray(e[3].fileTemplates)?a=e[3].fileTemplates:a.push(e[3].fileTemplates));var n=t.mergeDossierTemplateVsDossierFiles(i,o);n=t.mergeDossierTemplateVsDossierMark(n,s),n=t.mergeDossierTemplateVsFileTemplates(n,a),t.dossierFilesItems=o,t.dossierMarksItems=s,t.fileTemplateItems=a,t.dossierTemplateItems=n,t.changeStateViewResult(),setTimeout(function(e){t.genAllAlpacaForm(o,n),t.recountFileTemplates()},500)}).catch(function(e){})},genAllAlpacaForm:function(e,t){var i=this;if(e.length>0){var s=e.filter(function(e){return e.eForm}),o=t.filter(function(e){return e.hasForm&&i.partTypes.includes(e.partType)});s.length>0?s.forEach(function(e){e.eForm&&i.$store.dispatch("loadAlpcaForm",e)}):t.forEach(function(e){e.hasForm&&i.partTypes.includes(e.partType)&&(e.templateFileNo=i.thongTinHoSo.dossierTemplateNo,i.showAlpacaJSFORM(e))}),o.length!==s.length&&o.forEach(function(e){-1===s.findIndex(function(t){return e.partNo===t.dossierPartNo})&&(e.templateFileNo=i.thongTinHoSo.dossierTemplateNo,i.showAlpacaJSFORM(e))})}else t.forEach(function(e){e.hasForm&&i.partTypes.includes(e.partType)&&(e.templateFileNo=i.thongTinHoSo.dossierTemplateNo,i.showAlpacaJSFORM(e))})},postDossierMark:function(e,t){var i=this;e.dossierId=i.thongTinHoSo.dossierId,i.$store.dispatch("postDossierMark",e).then(function(e){}).catch(function(e){})},mergeDossierTemplateVsDossierFiles:function(e,t){var i=this;return 0!==t.length?e.forEach(function(e){e.daKhai=!1;var s=t.find(function(t){return e.partNo===t.dossierPartNo&&i.partTypes.includes(e.partType)&&t.eForm});s?e.daKhai=!0:!s&&e.hasForm&&(e.daKhai=!1),t.forEach(function(t){e.partNo!==t.dossierPartNo||t.eForm||e.hasForm||(e.daKhai=!0)})}):e.forEach(function(e){e.hasForm&&(e.daKhai=!1)}),e},mergeDossierTemplateVsDossierMark:function(e,t){return 0!==t.length?e.map(function(e){e.count=0,e.stateEditFileCheck=!1;var i=t.find(function(t){return t.dossierPartNo===e.partNo});return null!==i&&void 0!==i?(e.fileMark=i.fileMark,e.fileComment=i.fileComment,e.fileCheck=i.fileCheck):(e.fileMark=0,e.fileComment="",e.fileCheck=0),e}):e&&e.forEach(function(e){e.stateEditFileCheck=!1,e.count=0,e.fileMark=0,e.fileComment="",e.fileCheck=0,e.stateEditFileCheck=!1}),e},mergeDossierTemplateVsFileTemplates:function(e,t){return 0!==t.length?e.map(function(e){var i=t.find(function(t){return t.fileTemplateNo===e.fileTemplateNo});return e.hasFileTemp=null!==i&&void 0!==i?i.fileTemplateNo:"",e}):e&&e.forEach(function(e){e.hasFileTemp=""}),e},showAlpacaJSFORM:function showAlpacaJSFORM(item){var vm=this;item.dossierId=vm.thongTinHoSo.dossierId,vm.$store.dispatch("loadFormScript",item).then(function(resScript){vm.$store.dispatch("loadFormData",item).then(function(resData){__WEBPACK_IMPORTED_MODULE_1_jquery___default()("#formAlpaca"+item.partNo+vm.id).empty();var formScript,formData;formScript=resScript?eval("("+resScript+")"):{},formData=resData?eval("("+resData+")"):{},formScript.data=formData,__WEBPACK_IMPORTED_MODULE_1_jquery___default()("#formAlpaca"+item.partNo+vm.id).alpaca(formScript)})})},saveAlpacaForm:function(e,t){var i=this,s=i.dossierFilesItems.find(function(t){return t.dossierPartNo===e.partNo&&t.eForm});s?(s.dossierId=i.thongTinHoSo.dossierId,s.id=i.id,i.$store.dispatch("putAlpacaForm",s).then(function(e){}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error("Yêu cầu của bạn được thực hiện thất bại.")})):(e.dossierId=i.thongTinHoSo.dossierId,e.id=i.id,i.$store.dispatch("postEform",e).then(function(e){i.dossierTemplateItems[t].daKhai=!0,i.$store.dispatch("loadDossierFiles",i.thongTinHoSo.dossierId).then(function(e){i.dossierFilesItems=e}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error("Yêu cầu của bạn được thực hiện thất bại.")})}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error("Yêu cầu của bạn được thực hiện thất bại.")}))},onDeleteAttackFiles:function(e){var t=this;console.log("delete"),confirm("Bạn có muốn xóa toàn bộ file trong thành phần hồ sơ này?")&&t.dossierFilesItems.forEach(function(i){i.dossierPartNo===e.partNo&&(i.dossierId=t.thongTinHoSo.dossierId,t.$store.dispatch("deleteAttackFiles",i).then(function(i){t.resetCounterTemplate(e),t.$store.dispatch("loadDossierFiles",t.thongTinHoSo.dossierId)}).catch(function(e){}))})},pickFile:function(e){this.stateAddFileOther=!1,document.getElementById("file"+e.partNo).click()},onUploadSingleFile:function(e,t,i){var s=this;if(s.dossierTemplatesItemSelect=t,s.progressUploadPart=t.partNo,t.dossierId=s.thongTinHoSo.dossierId,t.dossierTemplateNo=s.thongTinHoSo.dossierTemplateNo,s.dossierTemplateItems[i].daKhai=!0,3!==t.partType)s.$store.dispatch("uploadSingleFile",t).then(function(e){s.progressUploadPart="",s.$store.dispatch("loadDossierFiles",s.thongTinHoSo.dossierId).then(function(e){s.dossierFilesItems=e,s.recountFileTemplates()})}).catch(function(e){s.progressUploadPart=""});else{if(0===__WEBPACK_IMPORTED_MODULE_1_jquery___default()("#file"+t.partNo)[0].files.length)return void(s.progressUploadPart="");s.partView=t.partNo,s.stateView=!0,s.dialogAddOtherTemp=!0}},loadAlpcaForm:function(e){var t=this,i=t.dossierFilesItems.find(function(t){return t.dossierPartNo===e.partNo&&t.eForm});i?(i.id=t.id,t.$store.dispatch("loadAlpcaForm",i)):t.dossierTemplateItems.forEach(function(i){i.hasForm&&e.partNo===i.partNo&&(i.templateFileNo=t.thongTinHoSo.dossierTemplateNo,t.showAlpacaJSFORM(i))})},deleteSingleFileEform:function(e,t){var i=this;confirm("Bạn có muốn xóa?")&&(i.dossierFilesItems.forEach(function(t){t.dossierPartNo===e.partNo&&t.eForm&&(t.dossierId=i.thongTinHoSo.dossierId,i.$store.dispatch("deleteDossierFile",t).then(function(t){console.log("success!"),i.$store.dispatch("loadDossierFiles",i.thongTinHoSo.dossierId).then(function(t){i.dossierFilesItems=t,i.recountFileTemplates();var s=i.dossierFilesItems.filter(function(t){return t.dossierPartNo===e.partNo&&!t.eForm});s&&(i.fileViews=s)})}))}),i.dossierTemplateItems[t].daKhai=!1)},previewFileEfom:function(e,t){var i=this;i.dossierFilesItems.forEach(function(t){t.dossierPartNo===e.partNo&&t.eForm&&(t.dossierId=i.thongTinHoSo.dossierId,i.dialogPDFLoading=!0,i.dialogPDF=!0,i.onlyView?i.$store.dispatch("viewFile",t).then(function(e){i.dialogPDFLoading=!1,document.getElementById("dialogPDFPreview"+i.id).src=e}):(t.id=i.id,i.$store.dispatch("putAlpacaForm",t).then(function(e){setTimeout(function(){i.$store.dispatch("viewFile",t).then(function(e){i.dialogPDFLoading=!1,document.getElementById("dialogPDFPreview"+i.id).src=e})},1e3)}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error("Yêu cầu của bạn được thực hiện thất bại.")})))})},deleteSingleFile:function(e,t){var i=this;confirm("Bạn có muốn xóa?")&&(e.dossierId=i.thongTinHoSo.dossierId,i.$store.dispatch("deleteDossierFile",e).then(function(s){i.fileViews.splice(t,1),i.stateView=!0,i.partView=e.dossierPartNo,i.$store.dispatch("loadDossierFiles",i.thongTinHoSo.dossierId).then(function(e){i.dossierFilesItems=e,i.setDaKhai(i.dossierFilesItems)})}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error("Yêu cầu của bạn được thực hiện thất bại.")}))},viewFile:function(e){var t=this,i=this;i.dossierFilesItems.forEach(function(s){s.dossierId=i.thongTinHoSo.dossierId,s.dossierPartNo===e.partNo&&t.$store.dispatch("viewFile",s)})},setDaKhai:function(e){var t=this;if(-1===t.dossierFilesItems.findIndex(function(t){return t.dossierPartNo===e.dossierPartNo}))for(var i=0;i<t.dossierTemplateItems.length;i++)if(t.dossierTemplateItems[i].partNo===e.dossierPartNo&&!t.dossierTemplateItems[i].hasForm){t.dossierTemplateItems[i].daKhai=!1;break}},checkPartType3:function(){var e=this;if(0!==e.dossierTemplateItems.length)for(var t=0;t<e.dossierTemplateItems.length;t++)if(3===e.dossierTemplateItems[t].partType)return!0;return!1},viewFile2:function(e){var t=this;if(0!==e.fileSize)if("doc"===e.fileType||"docx"===e.fileType||"xlsx"===e.fileType||"xls"===e.fileType||"zip"===e.fileType||"rar"===e.fileType){var i=t.initDataResource.dossierApi+"/"+t.thongTinHoSo.dossierId+"/files/"+e.referenceUid;window.open(i)}else t.dialogPDFLoading=!0,t.dialogPDF=!0,e.dossierId=t.thongTinHoSo.dossierId,t.$store.dispatch("viewFile",e).then(function(e){t.dialogPDFLoading=!1,document.getElementById("dialogPDFPreview"+t.id).src=e})},viewFileWithPartNo:function(e){var t=this;if(t.dossierFilesItems){var i=t.dossierFilesItems.filter(function(t){return t.dossierPartNo===e.partNo&&!t.eForm});if(!i)return;t.fileViews=i,t.partView!==e.partNo?(t.stateView=!0,t.partView=e.partNo):(t.stateView=!t.stateView,t.partView=e.partNo)}},saveMark:function(){var e=this;e.dossierTemplateItems&&e.dossierTemplateItems.forEach(function(t,i){1===t.partType&&(t.dossierId=e.thongTinHoSo.dossierId,e.$store.dispatch("postDossierMark",t))})},changeFileMark:function(e,t){var i=this;console.log("event=====",e);var s=i.dossierTemplateItems[t];s.dossierId=i.thongTinHoSo.dossierId,s.fileMark=e,s.checkInput=i.checkInput,console.log("item-mark-------",s),i.$store.dispatch("postDossierMark",s),i.dossierTemplateItems[t].fileMark=e},changeFileCheck:function(e,t){var i=this;console.log("event=====",e);var s=i.dossierTemplateItems[t];if(s.dossierId=i.thongTinHoSo.dossierId,s.fileCheck=e,s.checkInput=i.checkInput,2===e)return void(s.stateEditFileCheck=!0);s.fileComment="",console.log("item-check-------",s),i.$store.dispatch("postDossierMark",s),i.dossierTemplateItems[t].fileCheck=e},changeFileComment:function(e,t){var i=this;console.log("item-------",e),null!==e.fileComment&&void 0!==e.fileComment&&""!==e.fileComment&&(e.dossierId=i.thongTinHoSo.dossierId,e.fileComment=e.fileComment,e.checkInput=i.checkInput,e.stateEditFileCheck=!e.stateEditFileCheck,console.log("item-comment-------",e),i.$store.dispatch("postDossierMark",e),i.dossierTemplateItems[t].fileComment=e.fileComment)},checkStyle:function(e){var t=this;if(1===t.checkInput)return"calc(100% - 140px)";var i=0;return 1===t.originality||1!==e.partType||t.thongTinHoSo.online||1===t.checkInput||(i+=140),e.fileCheck>0&&!t.thongTinHoSo.online&&(i+=20),e.fileCheck>0&&t.thongTinHoSo.online&&(i+=40),t.onlyView||(i+=90),"calc(100% - "+i+"px)"},checkVisibleTemp:function(e,t){var i=this;if(!i.onlyView)return!0;if(3===e.partType){if(i.dossierFilesItems.length>0){return-1!==i.dossierFilesItems.findIndex(function(t){return t.dossierPartNo===e.partNo})}return!1}return!0},changeStateViewResult:function(){var e=this;if(e.dossierFilesItems.length>0){-1!==e.dossierFilesItems.findIndex(function(e){return 2===e.dossierPartType})?e.$emit("tp:change-state-view-result",!0):e.$emit("tp:change-state-view-result",!1)}else e.partTypes.includes(2)&&e.$emit("tp:change-state-view-result",!1)},changeOtherDossierTemp:function(e){var t=this;if(3===t.originality&&t.stateAddFileOther)t.loadingAddOther=!0,t.$store.dispatch("uploadSingleOtherFile",{dossierId:t.thongTinHoSo.dossierId,displayName:e,partNo:t.dossierTemplatesItemSelect.partNo}).then(function(e){t.loadingAddOther=!1,t.dialogAddOtherTemp=!1,t.$store.dispatch("loadDossierFiles",t.thongTinHoSo.dossierId).then(function(e){t.dossierFilesItems=e})}).catch(function(e){t.loadingAddOther=!1});else{console.log("dossierTemplatesItemSelect ",t.dossierTemplatesItemSelect);var i=t.dossierTemplatesItemSelect;i.dossierId=t.thongTinHoSo.dossierId,i.displayName=e,i.dossierTemplateNo=t.thongTinHoSo.dossierTemplateNo,t.$store.dispatch("uploadSingleFile",i).then(function(e){t.progressUploadPart="",t.dialogAddOtherTemp=!1,console.log("success!!!!!!!!!!!!!!"),t.$store.dispatch("loadDossierFiles",t.thongTinHoSo.dossierId).then(function(e){if(t.dossierFilesItems=e,t.recountFileTemplates(),t.stateView&&t.dossierFilesItems){var i=t.dossierFilesItems.filter(function(e){return e.dossierPartNo===t.dossierTemplatesItemSelect.partNo&&!e.eForm});i&&(t.fileViews=i)}})}).catch(function(e){t.progressUploadPart=""})}},downloadFileTemplate:function(e,t){var i=this;if(i.fileTemplateItems.length>0){var s=i.fileTemplateItems.find(function(t){return e.fileTemplateNo===t.fileTemplateNo});if(s){var o=i.initDataResource.serviceInfoApi+"/"+i.serviceInfoId+"/filetemplates/"+s.fileTemplateNo;window.open(o)}else console.log("ko thay file")}},addOtherTemplate:function(){var e=this;e.$refs.form.validate()&&(console.log("add"),e.changeOtherDossierTemp(e.otherDossierTemplate))},editDisplayName:function(e,t){var i=this;i.dossierFileIdView!==e.dossierFileId?(i.dossierFileIdView=e.dossierFileId,i.stateEdit=!0):(i.dossierFileIdView=e.dossierFileId,i.stateEdit=!i.stateEdit)},cancelDialog:function(){var e=this;e.dialogAddOtherTemp=!1,e.progressUploadPart=""},addFileOther:function(e){var t=this;t.dialogAddOtherTemp=!0,t.stateAddFileOther=!0,t.dossierTemplatesItemSelect=e},validDossierTemplate:function(){var e=this;if(e.dossierTemplateItems.length>0){for(var t=0;t<e.dossierTemplateItems.length;t++)if(e.dossierTemplateItems[t].required&&!e.dossierTemplateItems[t].daKhai&&e.partTypes.includes(e.dossierTemplateItems[t].partType)){var i="Chú ý :"+e.dossierTemplateItems[t].partName+" là thành phần bắt buộc!";return __WEBPACK_IMPORTED_MODULE_2_toastr___default.a.error(i),!1}return!0}return!0},changeDisplayName:function(e,t){var i=this,s={dossierId:i.thongTinHoSo.dossierId,value:value};i.$store.dispatch("changeDisplayNameFile",s).then(function(e){i.fileViews[t].displayName=e.displayName,i.stateEdit=!1}).catch(function(e){console.log("error")})}}}},657:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-card",[e._l(e.dossierTemplateItems,function(t,s){return e.partTypes.includes(t.partType)&&e.checkVisibleTemp(t,s)?i("div",{key:t.partNo,staticClass:"form_alpaca",staticStyle:{position:"relative"}},[i("v-expansion-panel",{staticClass:"expaned__list__data"},[i("v-expansion-panel-content",{attrs:{"hide-actions":"",value:!1}},[i("div",{staticStyle:{"background-color":"#fff"},attrs:{slot:"header"},on:{click:function(t){e.stateView=!1}},slot:"header"},[i("div",{staticStyle:{"align-items":"center","min-height":"38px",background:"#fff","padding-left":"15px"},style:{width:e.checkStyle(t)}},[i("div",{staticClass:"mr-2",staticStyle:{"min-width":"18px",display:"flex","min-height":"38px"},on:{click:function(i){e.loadAlpcaForm(t)}}},[i("div",{staticClass:"header__tphs"},[i("span",{staticClass:"text-bold"},[e._v(e._s(s+1)+".")]),e._v("  ")]),e._v(" "),i("div",{staticClass:"header__tphs"},[e._v("\n                  "+e._s(t.partName)+"  "),t.required?i("span",{staticStyle:{color:"red"}},[e._v(" (*) ")]):e._e(),e._v("\n                    \n                  "),t.hasForm&&t.daKhai?i("v-tooltip",{attrs:{top:""}},[i("i",{staticClass:"fa fa-file-text-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator","aria-hidden":"true"},slot:"activator"}),e._v(" "),i("span",[e._v("Biểu mẫu trực tuyến (Đã khai)")])]):e._e(),e._v(" "),t.hasForm&&!t.daKhai?i("v-tooltip",{attrs:{top:""}},[i("i",{staticClass:"fa fa-file-o",staticStyle:{color:"#0d71bb","font-size":"13px"},attrs:{slot:"activator"},slot:"activator"}),e._v(" "),i("span",[e._v("Biểu mẫu trực tuyến (Chưa khai)")])]):e._e(),e._v("\n                    \n                  "),!t.hasForm&&t.hasFileTemp?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticStyle:{color:"#0d71bb"},attrs:{slot:"activator",size:"16",color:"primary"},on:{click:function(i){i.stopPropagation(),e.downloadFileTemplate(t,s)}},slot:"activator"},[e._v("save_alt")]),e._v(" "),i("span",[e._v("Biểu mẫu điền thủ công")])],1):e._e()],1)]),e._v(" "),i("div",{staticStyle:{display:"flex"}},[1===e.checkInput&&2===t.fileCheck&&t.stateEditFileCheck?i("v-text-field",{attrs:{placeholder:"Nhập lý do",rules:[function(e){return!!e||"Bạn phải nhập lý do trước khi gửi"}],required:""},on:{click:function(e){e.stopPropagation()},keyup:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.changeFileComment(t,s)}},model:{value:t.fileComment,callback:function(i){e.$set(t,"fileComment",i)},expression:"item.fileComment"}}):e._e(),e._v(" "),1===e.checkInput&&2===t.fileCheck&&t.stateEditFileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){i.stopPropagation(),e.changeFileComment(t,s)}},slot:"activator"},[i("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[e._v("send")])],1),e._v(" "),i("span",[e._v("Gửi")])],1):e._e()],1),e._v(" "),t.fileComment&&!t.stateEditFileCheck?i("i",{staticStyle:{"font-size":"12px",color:"#0d71bb","margin-left":"10px"}},[e._v(e._s(t.fileComment))]):e._e(),e._v(" "),t.fileComment&&!t.stateEditFileCheck&&1===e.checkInput?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticStyle:{"font-size":"13px",color:"#0d71bb","margin-left":"10px",cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(e){e.stopPropagation(),t.stateEditFileCheck=!t.stateEditFileCheck}},slot:"activator"},[e._v("edit")]),e._v(" "),i("span",[e._v("Chỉnh sửa ý kiến")])],1):e._e(),e._v(" "),e._l(e.dossierFilesItems,function(s,o){return t.partNo!==s.dossierPartNo||s.eForm?e._e():i("div",{key:o},[i("div",{style:{width:"calc(100% - 370px)",display:"flex","align-items":"center",background:"#fff","padding-left":"15px","font-size":"12px","margin-bottom":e.onlyView?"5px":"0px"}},[i("span",{staticClass:"ml-3",staticStyle:{cursor:"pointer"},on:{click:function(t){t.stopPropagation(),e.viewFile2(s)}}},[0!==s.fileSize?i("v-icon",[e._v("attach_file")]):e._e(),e._v("\n                    "+e._s(s.displayName)+" - \n                    "),i("i",[e._v(e._s(s.modifiedDate))])],1),e._v(" "),e.onlyView||1===e.checkInput?e._e():i("v-btn",{staticClass:"mx-0 my-0",attrs:{icon:"",ripple:""},on:{click:function(t){t.stopPropagation(),e.deleteSingleFile(s,o)}}},[i("v-icon",{staticStyle:{color:"red"}},[e._v("delete_outline")])],1)],1)])})],2)]),e._v(" "),t.hasForm?i("v-card",[i("v-card-text",{staticStyle:{"background-color":"rgba(244, 247, 213, 0.19)"}},[i("v-layout",{attrs:{wrap:""}},[e.stateView?e._e():i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[t.hasForm&&!e.onlyView&&1!==e.checkInput?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){e.saveAlpacaForm(t,s)}}},[e._v("Lưu lại")]):e._e(),e._v(" "),t.daKhai&&t.hasForm&&!e.onlyView&&1!==e.checkInput?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){e.deleteSingleFileEform(t,s)}}},[e._v("Xóa")]):e._e(),e._v(" "),t.daKhai&&t.hasForm?i("v-btn",{attrs:{color:"primary"},on:{click:function(i){e.previewFileEfom(t,s)}}},[e._v("In")]):e._e(),e._v(" "),!e.onlyView||t.daKhai?i("div",{class:{no_acction__event:e.onlyView},attrs:{id:"formAlpaca"+t.partNo+e.id}}):e._e()],1)],1)],1)],1):e._e()],1)],1),e._v(" "),i("div",{staticClass:"absolute__btn group__thanh_phan pr-3 mr-1"},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-layout",{attrs:{row:"",wrap:""}},[1===e.originality||1!==t.partType||e.thongTinHoSo.online||1===e.checkInput?e._e():i("v-flex",{staticClass:"layout wrap",staticStyle:{width:"110px"}},[i("v-select",{attrs:{items:e.fileMarkItems,disabled:e.onlyView},on:{change:function(t){e.changeFileMark(t,s)}},model:{value:e.dossierTemplateItems[s].fileMark,callback:function(t){e.$set(e.dossierTemplateItems[s],"fileMark",t)},expression:"dossierTemplateItems[index].fileMark"}})],1),e._v(" "),1===e.checkInput?i("v-flex",{staticClass:"layout wrap",staticStyle:{width:"120px"}},[i("v-select",{attrs:{items:e.fileCheckItems,"item-text":"text","item-value":"value"},on:{change:function(t){e.changeFileCheck(t,s)}},model:{value:e.dossierTemplateItems[s].fileCheck,callback:function(t){e.$set(e.dossierTemplateItems[s],"fileCheck",t)},expression:"dossierTemplateItems[index].fileCheck"}})],1):t.fileCheck>0?i("v-flex",{staticClass:"layout wrap",style:{width:"20px","align-items":"center","margin-left":"10px","margin-top":e.thongTinHoSo.online?"10px":"0px"}},[1===t.fileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[e._v("done")]),e._v(" "),i("span",[e._v("Đạt")])],1):2===t.fileCheck?i("v-tooltip",{attrs:{top:""}},[i("v-icon",{staticClass:"mx-0",attrs:{slot:"activator",size:"16",color:"primary"},slot:"activator"},[e._v("close")]),e._v(" "),i("span",[e._v("Không đạt")])],1):e._e()],1):e._e(),e._v(" "),1!==e.checkInput?i("v-flex",{class:{"text-xs-center":!e.onlyView,"text-xs-right":e.onlyView},style:{width:e.onlyView?"auto":"90px"}},[i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"+t.partNo},on:{change:function(i){e.onUploadSingleFile(i,t,s)}}}),e._v(" "),3!==t.partType||3!==e.originality||e.onlyView?e._e():i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){e.addFileOther(t)}},slot:"activator"},[i("v-icon",{staticClass:"mx-0",attrs:{size:"16",color:"primary"}},[e._v("add")])],1),e._v(" "),i("span",[e._v("Thêm giấy tờ khác")])],1),e._v(" "),e.progressUploadPart===t.partNo?i("v-progress-circular",{attrs:{width:2,size:25,color:"green",indeterminate:""}}):e.progressUploadPart===t.partNo||e.onlyView?e._e():i("v-tooltip",{attrs:{top:""}},[i("v-btn",{staticClass:"mx-0 my-0",attrs:{slot:"activator",icon:""},on:{click:function(i){e.pickFile(t)}},slot:"activator"},[i("v-badge",[i("v-icon",{attrs:{size:"16",color:"primary"}},[e._v("cloud_upload")])],1)],1),e._v(" "),i("span",[e._v("Tải file lên")])],1)],1):e._e()],1)],1)],1):e._e()}),e._v(" "),i("v-dialog",{attrs:{"max-width":"400",transition:"fade-transition",persistent:""},model:{value:e.dialogAddOtherTemp,callback:function(t){e.dialogAddOtherTemp=t},expression:"dialogAddOtherTemp"}},[i("v-card",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-card-title",{staticClass:"headline"},[e._v("Tên giấy tờ")]),e._v(" "),i("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(t){return e.cancelDialog(t)}}},[i("v-icon",[e._v("clear")])],1),e._v(" "),e.loadingAddOther?i("v-progress-linear",{staticClass:"my-0",attrs:{indeterminate:!0}}):e._e(),e._v(" "),i("v-card-text",{staticClass:"pb-0 pt-4"},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"px-2 pb-3",attrs:{xs12:""}},[i("v-text-field",{attrs:{label:"Tên giấy tờ:",rules:[function(e){return!!e||"Bạn phải điền tên giấy tờ."}],required:""},model:{value:e.otherDossierTemplate,callback:function(t){e.otherDossierTemplate=t},expression:"otherDossierTemplate"}})],1)],1)],1),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{attrs:{color:"red darken-3",flat:"flat"},nativeOn:{click:function(t){return e.cancelDialog(t)}}},[e._v("\n              Quay lại\n            ")]),e._v(" "),i("v-btn",{attrs:{color:"primary",flat:"flat",loading:e.loadingAddOther},nativeOn:{click:function(t){return e.addOtherTemplate(t)}}},[e._v("\n            Đồng ý\n            "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])])],1)],1)],1)],1)],2),e._v(" "),i("v-dialog",{staticStyle:{overflow:"hidden"},attrs:{"max-width":"900",transition:"fade-transition"},model:{value:e.dialogPDF,callback:function(t){e.dialogPDF=t},expression:"dialogPDF"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v("File đính kèm")]),e._v(" "),i("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.dialogPDF=!1}}},[i("v-icon",[e._v("clear")])],1),e._v(" "),e.dialogPDFLoading?i("div",{staticStyle:{"min-height":"600px","text-align":"center",margin:"auto",padding:"25%"}},[i("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1):e._e(),e._v(" "),i("iframe",{directives:[{name:"show",rawName:"v-show",value:!e.dialogPDFLoading,expression:"!dialogPDFLoading"}],staticStyle:{overflow:"auto","min-height":"600px"},attrs:{id:"dialogPDFPreview"+e.id,src:"",type:"application/pdf",width:"100%",height:"100%",frameborder:"0"}})],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},730:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(139),o=i.n(s),a=i(37),n=i(212),r=i.n(n);t.default={props:["index","id"],data:function(){return{dialog_addTHPHS:!1,loadingAction:!1,thongTinChiTietHoSo:{},btnDossierDynamics:[],visibleBtnNextAction:!0}},computed:{loading:function(){return this.$store.getters.loading}},components:{"thanh-phan-ho-so":r.a},created:function(){var e=this;e.initData(e.id),e.getNextActions(e.id)},watch:{},methods:{initData:function(e){var t=this;t.$store.dispatch("getDetailDossier",e).then(function(e){t.thongTinChiTietHoSo=e,t.$refs.thanhphanhoso.initData(e)})},goBack:function(){window.history.back()},getNextActions:function(e){var t=this,i={dossierId:e};t.$store.dispatch("pullNextactions",i).then(function(e){t.btnDossierDynamics=e})},nextAction:function(e,t){console.log("Đã bổ sung");var i=this;console.log("luu Ho So--------------------"),i.$store.commit("setPrintPH",!1);var s=this.$refs.thanhphanhoso.dossierTemplateItems,n=i.$refs.thanhphanhoso.dossierFilesItems,r=s,l=[],c=[];r&&(r.forEach(function(e,t){1===e.partType&&(e.dossierId=i.thongTinChiTietHoSo.dossierId,c.push(i.$store.dispatch("postDossierMark",e)))}),0!==n.length?n.forEach(function(e,t){e.eForm&&(e.dossierId=i.thongTinChiTietHoSo.dossierId,l.push(i.$store.dispatch("putAlpacaForm",e)))}):r.forEach(function(e,t){1===e.partType&&e.hasForm&&(e.dossierId=i.thongTinChiTietHoSo.dossierId,l.push(i.$store.dispatch("postEform",e)))})),o.a.all(c).then(function(e){}).catch(function(e){}),o.a.all(l).then(function(t){console.log(t);var s={dossierId:i.thongTinChiTietHoSo.dossierId,actionCode:e.actionCode},o=i.$router.history.current.query;i.loadingActionProcess=!0,i.$store.dispatch("processDossierRouter",s).then(function(e){i.visibleBtnNextAction=!1,a.a.push({path:i.$router.history.current.path,query:{recount:Math.floor(100*Math.random())+1,renew:Math.floor(100*Math.random())+1,q:o.q}})})}).catch(function(e){console.log("reject=============",e)})}}}},735:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"row-header"},[i("div",{staticClass:"background-triangle-big"},[e._v(" HOÀN THIỆN BỔ SUNG HỒ SƠ ")]),e._v(" "),i("div",{staticClass:"layout row wrap header_tools row-blue"},[i("div",{staticClass:"flex xs8 sm10 pl-3 text-ellipsis text-bold"},[e._v("\n        "+e._s(e.thongTinChiTietHoSo.serviceName)+"\n      ")]),e._v(" "),i("div",{staticClass:"flex xs4 sm2 text-right",staticStyle:{"margin-left":"auto"}},[i("v-btn",{staticClass:"my-0 mx-0 btn-border-left",attrs:{flat:"","active-class":"temp_active"},on:{click:e.goBack}},[e._v("\n        Quay lại  \n          "),i("v-icon",{attrs:{size:"16"}},[e._v("undo")])],1)],1)])]),e._v(" "),i("v-expansion-panel",{staticClass:"expansion-p0",attrs:{expand:""}},[i("v-expansion-panel-content",{attrs:{value:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"background-triangle-small"},[e._v("I. ")]),e._v("THÔNG TIN HỒ SƠ\n      ")]),e._v(" "),i("v-card",{staticClass:"mb-2"},[i("v-card-text",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Loại hồ sơ: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[i("v-chip",{staticClass:"pl-0 mx-0 my-0",attrs:{small:""}},[e._v(" Hồ sơ trực tuyến ")])],1)],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Mã hồ sơ: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.dossierIdCTN))])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Ngày tiếp nhận: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.receiveDate))])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Chủ hồ sơ: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.applicantName))])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Địa chỉ: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm10:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.address))])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Người nộp: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.delegateName))])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):i("v-subheader",{staticClass:"pl-0 text-header"},[e._v("Số CMND: ")])],1),e._v(" "),i("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?i("content-placeholders",{staticClass:"mt-1"},[i("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),i("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[e._v(e._s(e.thongTinChiTietHoSo.applicantIdNo))])],1)],1)],1)],1)],1)],1),e._v(" "),i("v-expansion-panel",{staticClass:"expansion-p0",staticStyle:{position:"relative"},attrs:{expand:""}},[i("v-expansion-panel-content",{attrs:{value:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"background-triangle-small"},[e._v("II. ")]),e._v("THÀNH PHẦN HỒ SƠ\n      ")]),e._v(" "),i("thanh-phan-ho-so",{ref:"thanhphanhoso"})],1)],1),e._v(" "),i("div",{staticClass:"text-center mt-2"},[e._l(e.btnDossierDynamics,function(t,s){return e.visibleBtnNextAction?i("v-btn",{key:s,attrs:{color:"primary"},on:{click:function(i){e.nextAction(t,s)}}},[e._v("\n      "+e._s(t.actionName)+"\n      "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])]):e._e()}),e._v(" "),i("v-btn",{attrs:{color:"primary",loading:e.loadingAction,disabled:e.loadingAction},nativeOn:{click:function(t){return e.goBack(t)}}},[i("v-icon",[e._v("undo")]),e._v("  \n      Quay lại\n      "),i("span",{attrs:{slot:"loader"},slot:"loader"},[e._v("Loading...")])],1)],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=13.753b238d725ad92494b7.js.map