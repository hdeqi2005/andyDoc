(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3cfc6ec"],{"00ac":function(t,e,a){},"0d80":function(t,e,a){"use strict";a("d888")},"0e4a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"column"===t.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[t.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part1",[t._v("part1")])],2):t._e(),t.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part2",[t._v("part2")])],2):t._e(),t.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part3",[t._v("part3")])],2):t._e()])},i=[],o={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},s=o,n=(a("33bc"),a("5d22")),c=Object(n["a"])(s,r,i,!1,null,"550d1612",null);e["a"]=c.exports},"0ee7":function(t,e,a){},1422:function(t,e,a){},3398:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("div",{staticStyle:{display:"flex"},style:{width:t.windowOffsetWidth+"px"}},[a("div",{staticClass:"leftBox",style:{width:t.windowOffsetWidth/2.8+"px"}},[a("div",{staticClass:"titleBox"},[t._v("原纸价设定")]),a("nvxe-grid",{ref:"paperPirceTables",attrs:{loading:t.isloading,toolbarConfigShow:!1,columnsFormName:t.requstConfig.tab1FormName,height:.65*t.windowOffsetHeight,data:t.paperPirce},on:{"cell-click":t.cellClickEvent}}),a("div",{staticClass:"titleBox"},[t._v("坑别利率设定")]),a("nvxe-grid",{ref:"holeProfitTables",attrs:{loading:t.isloading,toolbarConfigShow:!1,columnsFormName:t.requstConfig.tab2FormName,height:.29*t.windowOffsetHeight,data:t.holeProfit},on:{"cell-click":t.cellClickEvent}})],1),a("div",{staticClass:"leftBox",style:{width:t.windowOffsetWidth/3.3+"px"}},[a("div",{staticClass:"titleBox title"},[t._v("报价纸质")]),a("vxe-form",{ref:"firstForm",attrs:{span:"23",size:"mini","title-align":"right","title-width":"60","title-overflow":!0,data:t.autoAccReceFormData}},[a("vxe-form-item",{staticStyle:{"padding-right":"0"},attrs:{"title-width":"60",span:"22",title:"净利",field:"profit"}},[a("vxe-input",{attrs:{content:""},model:{value:t.autoAccReceFormData.profit,callback:function(e){t.$set(t.autoAccReceFormData,"profit",e)},expression:"autoAccReceFormData.profit"}}),a("span")],1),a("vxe-form-item",{attrs:{span:"1","title-width":"1",title:"%",field:""}}),a("vxe-form-item",{attrs:{title:"计算单位",field:"countUnit"}},[a("selectOption",{attrs:{isLoadDataNow:!0,size:"mini",paramsItem:t.selectOptionConfig_dataSource,currentValue:t.autoAccReceFormData.countUnit,field:t.selectOptionConfig_dataSource.field},on:{selectChange:t.selectChange_dataSource}})],1),a("vxe-form-item",{attrs:{"title-width":"10",span:"7",title:" ",field:""}},[a("vxe-button",{attrs:{status:"primary",content:"设置默认楞别"},on:{click:t.setLbCodeEvent}})],1),a("vxe-form-item",{attrs:{"title-width":"50",span:"7",title:" ",field:"countUnit"}},[a("vxe-button",{attrs:{status:"primary",content:"调用报价纸质"},on:{click:t.paperArtEvent}})],1)],1),a("nvxe-grid",{ref:"paperArtTables",attrs:{loading:t.tab3Isloading,toolbarConfigShow:!1,columnsFormName:t.requstConfig.tab3FormName,height:.65*t.windowOffsetHeight-113,data:t.paperArt},on:{"cell-click":t.cellClickEvent}}),a("div",{staticClass:"titleBox"},[t._v("加工费设定")]),a("nvxe-grid",{ref:"processCostTables",attrs:{loading:t.isloading,toolbarConfigShow:!1,columnsFormName:t.requstConfig.tab4FormName,height:.29*t.windowOffsetHeight+1,data:t.processCost},on:{"cell-click":t.cellClickEvent}})],1),a("div",{staticClass:"rightBox"},[a("div",[a("vxe-form",{ref:"firstForm",staticClass:"form",attrs:{span:"9",size:"mini","title-align":"right","title-width":"90","title-overflow":!0,data:t.autoFormData}},[a("vxe-form-item",{attrs:{span:"2","title-width":"25",title:" ",field:""}},[a("vxe-button",{attrs:{status:"danger",content:"清除客户"},on:{click:t.purgeClientEvent}})],1),a("vxe-form-item",{attrs:{title:"客户",field:"custCodeList"}},[a("popUpPullDown",{ref:"popUpPullDownRef_custCode",attrs:{size:"mini",matchField:t.popUpPullDownConfig_custCode.editRender.matchField,currentValue:t.autoFormData.custCode,field:t.popUpPullDownConfig_custCode.field,paramsItem:t.popUpPullDownConfig_custCode},on:{popupChange:t.popupChange_custCode}})],1),a("vxe-form-item",{attrs:{"title-width":"10",span:"3",title:" ",field:""}},[a("vxe-button",{attrs:{status:"primary",content:"生成报价预览"},on:{click:t.sproducePriceEvent}})],1),a("vxe-form-item",{attrs:{"title-width":"40",span:"3",title:" ",field:"countUnit"}},[a("vxe-button",{attrs:{status:"primary",content:"报价模板预览"},on:{click:t.quotedPriceEvent}})],1)],1),a("nvxe-edit-grid",{ref:"mainTable",attrs:{toolbarConfigShow:!1,loading:t.listLoading,columnsFormName:t.requstConfig.tabFormName,height:t.windowOffsetHeight-80,data:t.clientInfo},on:{"edit-closed":t.editClosedEvent}}),t._m(0)],1)])])]),a("setLbCodeModel",{ref:"setLbCode"}),a("quotedPriceModel",{ref:"quotedPrice"}),a("priceTempletModel",{ref:"priceTemplet",attrs:{priceTempletData:t.priceTempletData,params:t.params}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"texts"},[a("span",[t._v("计算公式:(总原纸成本+加工成本)*(1+净利+税率+利润加减+运费+付款+回扣)*(1+业务)")])])}],o=a("7d75"),s=o["a"],n=(a("0d80"),a("5d22")),c=Object(n["a"])(s,r,i,!1,null,"12bfef5a",null);e["default"]=c.exports},"33bc":function(t,e,a){"use strict";a("c294")},"3a12":function(t,e,a){},"67e7":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nvxe-modal",{staticClass:"popupModalWindow",attrs:{title:"材质默认楞别设置",top:"30",width:"25%",height:"45%",subTitle:""},on:{confirm:function(e){return t.submitEvent()}},scopedSlots:t._u([{key:"footer",fn:function(){return[a("vxe-button",{attrs:{status:"primary",size:"medium",content:"添加"},on:{click:t.addEvent}}),a("vxe-button",{attrs:{status:"danger",size:"medium",content:"删除"},on:{click:t.delRowAction}}),a("vxe-button",{attrs:{status:"success",size:"medium",content:"确定"},on:{click:t.submitEvent}}),a("vxe-button",{attrs:{status:"info",size:"medium",content:"取消"},on:{click:t.cancel}})]},proxy:!0}]),model:{value:t.showPopupBox,callback:function(e){t.showPopupBox=e},expression:"showPopupBox"}},[a("nvxe-edit-grid",{ref:"discountModeRef",staticClass:"discountModeGrid",attrs:{toolbarConfigShow:!1,showContextMenu:!1,checkboxColumnShow:!1,height:t.windowOffsetHeight-260,columns:t.firstTableColumn,data:t.firstTableData},on:{"cell-click":t.cellClickEvent,"edit-closed":t.editClosedEvent}})],1)},i=[],o=a("301b"),s=a("e9c6"),n=a("caff"),c=a("cb47");function u(t){return Object(o["a"])(t)||Object(s["a"])(t)||Object(n["a"])(t)||Object(c["a"])()}var l=a("60b5"),_=(a("6a61"),a("5180"),a("6b6c")),d=a("2ddf"),m={mixins:[d["a"]],props:{},data:function(){return{requstConfig:{modulePreUrl:"1"},showPopupBox:!1,firstTableColumn:[{field:"layersNum",title:"层数",headerAlign:"center",align:"right",width:"100",editRender:{name:"$input",autoselect:!0,props:{type:"number"}}},{field:"lbCode",title:"楞别",width:"100",headerAlign:"center",align:"left",editRender:{name:"$input",autoselect:!0}}],firstTableData:[],row:{}}},watch:{showPopupBox:function(t,e){t&&this.getLoadCarSet()}},methods:{cellClickEvent:function(t){this.row=t.row},editClosedEvent:function(){},getLoadCarSet:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="/basic/lengdef/list",a={},t.next=4,_["a"]["post"](e,a);case 4:r=t.sent,this.firstTableData=r,this.$refs.discountModeRef.$refs.originEditTalbe.setCurrentRow(this.firstTableData[0]),this.row=this.firstTableData[0];case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addEvent:function(){var t=this.$refs["discountModeRef"].$refs["originEditTalbe"];t.insertAt({id:1,layersNum:0,lbCode:""},-1)},cancel:function(){this.showPopupBox=!1},submitEvent:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=this.$refs["discountModeRef"].$refs["originEditTalbe"].getTableData().tableData,r="/basic/lengdef/save",{data:a},t.next=5,_["a"]["post"](r,(e=a,u(e),e));case 5:i=t.sent,console.log(i),this.$XModal.message({message:"操作成功!",status:"success"}),this.showPopupBox=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),delRowAction:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$XModal.confirm({status:"warning",message:"是否删除当前记录？"}).then((function(t){if("confirm"===t){var a="/basic/lengdef/detail?id="+e.row.id,r={};_["a"]["post"](a,r).then((function(t){e.$refs["discountModeRef"].$refs["originEditTalbe"].remove(e.row),e.$XModal.message({message:"删除成功!",status:"success"})}))}}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},f=m,p=(a("e4ad"),a("5d22")),h=Object(p["a"])(f,r,i,!1,null,"3ddd6184",null);e["a"]=h.exports},7812:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nvxe-modal",{attrs:{title:"报价模板预览",width:"65%",height:"65%",subTitle:"",loading:t.vxeModalLoading},model:{value:t.showPopupBox,callback:function(e){t.showPopupBox=e},expression:"showPopupBox"}},[a("template",{slot:"footer"},[a("vxe-button",{attrs:{status:"success",content:"生成订单模块"},on:{click:t.submitEvent}}),a("vxe-button",{attrs:{status:"info",content:"取消"},on:{click:t.closeEvent}})],1),a("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[a("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("div",{staticStyle:{overflow:"auto"},style:{height:t.editBoxFormHeight+"px"}},[a("formItemRender",{ref:"renderForm",attrs:{formValueChangeRes:t.formValueChangeRes,showEditBox:t.showEditBox,firstFormRules:t.requiredRule[t.requstConfig.mainFormName],firstFormData:t.firstFormDataMaster,mainFormName:t.requstConfig.mainFormName,formItemList:t.formItemList},on:{formItemValueEvent:t.formItemValueEvent}})],1)]},proxy:!0},{key:"part2",fn:function(){return[a("div",[a("nvxe-edit-grid",{ref:"firstTable",attrs:{toolbarConfigShow:!1,"edit-rules":t.requiredRule[t.requstConfig.tab1FormName],height:t.windowOffsetHeight-t.defaultBorderHeight-t.editBoxFormHeight-t.tabHeight,columnsFormName:t.requstConfig.tab1FormName,data:t.firstTableData}})],1)]},proxy:!0}])})],1)],2)},i=[],o=a("60b5"),s=(a("6a61"),a("79dc")),n=a("cb39"),c=a("5180"),u=a.n(c),l=a("1472"),_=a.n(l),d=a("6b6c"),m=a("bf8c"),f={mapList:{lbAddPriceItems:"firstTable"}},p={name:"priceTempletModel",mixins:[m["a"]],components:{formItemRender:n["a"],tabsTool:s["a"]},data:function(){return{editBoxFormHeight:40,requstConfig:{modulePreUrl:"/sale/lbAddPrice",mainFormName:"spModelPriceAutoPreviewFm",tab1FormName:"spModelPriceAutoPreviewItemFm"},showPopupBox:!1,firstTableData:[]}},props:{priceTempletData:{type:Array,default:[]},params:{type:Object,default:function(){return{}}}},watch:{showPopupBox:function(t,e){t?this.getContentWindowWidthHeight():(this.firstTableData=[],this.firstFormDataMaster=u()({}))},priceTempletData:function(t,e){this.firstTableData=t}},methods:{_openAction:function(){this.loadColumnsByName(this.requstConfig.mainFormName)},closeWindowAction:function(){this.firstFormDataMaster=u()(this.formDefaultDataObj),this.setTableDefaultData(f,[])},setDefaultValue:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.firstFormDataMaster.effectiveDate=_()().format("YYYY-MM-DD HH:mm:ss");case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),closeEvent:function(){this.showPopupBox=!1},submitEvent:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.firstFormDataMaster.modelName){t.next=3;break}return this.$XModal.message({message:"请填写模板名称！",status:"warning"}),t.abrupt("return");case 3:return e="/common/proc/list/spSalePaperModelAutoCalc",a={custList:this.params.custList,baseML:this.params.baseML,unit:this.params.unit,pactName:this.firstFormDataMaster.modelName,stratDate:this.firstFormDataMaster.effectiveDate,remark:this.firstFormDataMaster.remark},t.next=7,d["a"]["post"](e,a);case 7:t.sent,this.$XModal.message({message:"生成成功！",status:"success"}),this.showPopupBox=!1;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=p,b=(a("ca32"),a("5d22")),g=Object(b["a"])(h,r,i,!1,null,"7e97780a",null);e["a"]=g.exports},"79dc":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabsButtonListBox"},[a("div",{staticClass:"tabsButtonListItem leftItem"},[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t._l(t.tabList,(function(e,r){return[a("vxe-radio-button",{key:r,staticClass:"borderRadio",attrs:{label:e.key,status:"my-purple",content:e.value},nativeOn:{click:function(a){return t.selectTabClick(e.key)}}})]}))],2)],1),a("div",{staticClass:"tabsButtonListItem rightItem"})])},i=[],o={props:{currentTab:{type:String,default:"tab1"}},data:function(){return{selectTab:"tab1"}},methods:{selectTabClick:function(t){this.selectTab=t,this.$emit("tabsChange",this.selectTab)}}},s=(a("5180"),{name:"tabs-formList",mixins:[o],props:{defaulttabList:{type:Array,default:function(){return[]}}},data:function(){return{tabList:[]}},mounted:function(){this.gettabList()},methods:{gettabList:function(){var t=this;if(0==this.defaulttabList.length){var e=[],a=this.$store.state.app.currentRouterName;if("sysFrom"!=a&&""!=a){var r=this.$store.state.app.tableColumnsInfo;if(r[a]){for(var i in r[a].listView)if("2"===r[a].listView[i].tableType){var o=r[a].listView[i].tableDesc,s=r[a].listView[i].formSort,n=r[a].listView[i].formSort;e.push({key:"tab"+s,value:o,formSort:n})}this.tabList=e.sort((function(t,e){return t.formSort-e.formSort}))}else setTimeout((function(){t.gettabList()}),300)}}else this.tabList=this.defaulttabList}}}),n=s,c=(a("e551"),a("5d22")),u=Object(c["a"])(n,r,i,!1,null,"19af0b3a",null);e["a"]=u.exports},"7d75":function(module,__webpack_exports__,__webpack_require__){"use strict";var E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("60b5"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6a61"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("3bae"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("3337"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("a037"),core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_4__),_extendFn_priceTempletModel_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("7812"),_extendFn_quotedPriceModel_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("e7b7"),_extendFn_setLbCodeModel_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("67e7"),_libs_request__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("6b6c"),dayjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("1472"),dayjs__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__),_platformSettings_tabs_tabs_common_vue__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("79dc"),_edit_edit_calculator_vue__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("f5c9"),_mixins__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("1b62"),_views_mixins__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("2ddf"),_components_baseContents_bodyContentDownItem_vue__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("0e4a"),delay=function(){var t=0;return function(e,a){clearTimeout(t),t=setTimeout(e,a)}}();__webpack_exports__["a"]={name:"calculator",components:{editBox:_edit_edit_calculator_vue__WEBPACK_IMPORTED_MODULE_11__["a"],tabsTool:_platformSettings_tabs_tabs_common_vue__WEBPACK_IMPORTED_MODULE_10__["a"],bodyContentDownItem:_components_baseContents_bodyContentDownItem_vue__WEBPACK_IMPORTED_MODULE_14__["a"],setLbCodeModel:_extendFn_setLbCodeModel_vue__WEBPACK_IMPORTED_MODULE_7__["a"],quotedPriceModel:_extendFn_quotedPriceModel_vue__WEBPACK_IMPORTED_MODULE_6__["a"],priceTempletModel:_extendFn_priceTempletModel_vue__WEBPACK_IMPORTED_MODULE_5__["a"]},provide:function(){var t=this;return{getPopupConfig:function(){return t.popupConfig},getPopupModalConfig:function(){return t.popupModalConfig}}},data:function(){return{requstConfig:{modulePreUrl:"/stockPaperOut",tabFormName:"calculatorCustFm",tab1FormName:"spGetSPaperPirceSetFm",tab2FormName:"BasicHoleProfitFm",tab3FormName:"T_SPaperArtSetFm",tab4FormName:"costPaperMacQueryFm"},clientInfo:[],paperPirce:[],holeProfit:[],paperArt:[],processCost:[],isloading:!1,tab3Isloading:!1,autoAccReceFormData:{profit:0,countUnit:"0"},autoFormData:{custCode:""},selectOptionConfig_dataSource:{field:"countUnit",editRender:{sourceKey:"artUnit"}},popUpPullDownConfig_custCode:{field:"custCode",editRender:{defaultText:"",defaultValue:"",matchField:"custCode:custCode,custCodeName:custCodeName,workerCodeName:workerCodeName,areaCodeName:areaCodeName,custLevel:custLevel,rate:taxRate",name:"popup",sourceKey:"custCalculatorBox"}},row:{},priceTempletData:[],params:{}}},mixins:[_mixins__WEBPACK_IMPORTED_MODULE_12__["a"],_views_mixins__WEBPACK_IMPORTED_MODULE_13__["a"]],watch:{},mounted:function(){var t=this;setTimeout((function(){t.getAllTableData(),t.getPaperPirce()}),1e3)},methods:{cellClickEvent:function(){},starClickEvent:function(){},editClosedEvent:function editClosedEvent(data){var column=data.column,$rowIndex=data.$rowIndex,row=data.row,_url="/sale/customer/update",params={id:row.id};eval("params."+column.property+"="+row[column.property]),delay((function(){_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](_url,params).then((function(t){}))}),1e3)},quotedPriceEvent:function(){var t=Object(E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$refs.mainTable.$refs.originEditTalbe.getCheckboxRecords(),!(e.length>0)){t.next=18;break}if(a=this.$refs["priceTemplet"],!a){t.next=16;break}return a.showPopupBox=!0,a._openAction(),r="",e.forEach((function(t){""==r?r=t.custCode:r+=","+t.custCode})),i="/common/proc/list/spModelPriceAutoPreview",o={baseML:this.autoAccReceFormData.profit,unit:this.autoAccReceFormData.countUnit},o.custList=r,this.params=o,t.next=14,_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](i,o);case 14:s=t.sent,this.priceTempletData=s.list;case 16:t.next=19;break;case 18:this.$XModal.message({message:"请勾选数据!",status:"warning"});case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sproducePriceEvent:function(){var t=Object(E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$refs.mainTable.$refs.originEditTalbe.getCheckboxRecords(),!(e.length>0)){t.next=14;break}return a=this.$refs["quotedPrice"],a&&(a.showPopupBox=!0),r="",e.forEach((function(t){""==r?r=t.custCode:r+=","+t.custCode})),i="/common/proc/list/spCreatePricePreview",o={baseML:this.autoAccReceFormData.profit,unit:this.autoAccReceFormData.countUnit},o.custList=r,t.next=11,_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](i,o);case 11:t.sent,t.next=15;break;case 14:this.$XModal.message({message:"请勾选数据!",status:"warning"});case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),popupChange_custCode:function(t){var e=this,a=this.$refs.popUpPullDownRef_custCode.$refs.refPopUpPullDownTable.getCheckboxRecords();a.map((function(t){e.clientInfo.push(t)}));var r={};this.clientInfo=this.clientInfo.reduce((function(t,e){return!r[e.id]&&(r[e.id]=t.push(e)),t}),[]),a.length>0&&this.$nextTick((function(){e.$refs.mainTable.$refs.originEditTalbe.setAllCheckboxRow(!0)}))},purgeClientEvent:function(){var t=this,e=this.$refs.mainTable.$refs.originEditTalbe.getCheckboxRecords();this.$refs.mainTable.$refs.originEditTalbe.remove(e),this.$nextTick((function(){t.clientInfo=t.$refs.mainTable.$refs.originEditTalbe.getTableData().visibleData}))},paperArtEvent:function(){var t=Object(E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.tab3Isloading=!0,e="/common/proc/list/spCreateSPaperArtSetByArtPriceSet",a={},t.next=5,_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](e,a);case 5:r=t.sent,this.paperArt=r.list,this.tab3Isloading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPaperPirce:function(){var t=Object(E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isloading=!0,e="/common/proc/list/spGetSPaperPirceSet",a={},t.next=5,_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](e,a);case 5:r=t.sent,r.list.length>0&&(this.paperPirce=r.list,this.$refs.paperPirceTables.$refs.originListTalbe.setCurrentRow(this.paperPirce[0])),this.isloading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setLbCodeEvent:function(){var t=this.$refs["setLbCode"];t&&(t.showPopupBox=!0)},getAllTableData:function(){var t=Object(E_cl_vue_erp_vue_pc_node_modules_babel_runtime_7_13_10_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isloading=!0,e="/common/proc/list/spGetSPaperArtAutoPriceSet",a={},t.next=5,_libs_request__WEBPACK_IMPORTED_MODULE_8__["a"]["post"](e,a);case 5:r=t.sent,this.processCost=r.list[2],this.holeProfit=r.list[1],this.paperArt=r.list[0],this.$refs.processCostTables.$refs.originListTalbe.setCurrentRow(this.processCost[0]),this.$refs.holeProfitTables.$refs.originListTalbe.setCurrentRow(this.holeProfit[0]),this.$refs.paperArtTables.$refs.originListTalbe.setCurrentRow(this.paperArt[0]),this.isloading=!1;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),selectChange_dataSource:function(t){this.autoAccReceFormData.countUnit=t.value}}}},bcbd:function(t,e,a){},c294:function(t,e,a){},ca32:function(t,e,a){"use strict";a("00ac")},d888:function(t,e,a){},e4ad:function(t,e,a){"use strict";a("1422")},e551:function(t,e,a){"use strict";a("0ee7")},e7b7:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nvxe-modal",{staticClass:"popupModalWindow",attrs:{resize:"",remember:"",fullscreen:"",title:"报价预览",width:"100%",height:"100%",subTitle:""},on:{confirm:function(e){return t.submitEvent()}},model:{value:t.showPopupBox,callback:function(e){t.showPopupBox=e},expression:"showPopupBox"}},[a("template",{slot:"footer"},[a("div")]),a("vxe-form",{ref:"firstForm",attrs:{data:t.formData,size:"small",span:"6","title-align":"right","title-width":"65"}},[a("vxe-form-item",{attrs:{span:"3",title:""}},[a("vxe-radio",{attrs:{name:"n1",label:"1",content:"客户原报价纸质",size:"medium"},model:{value:t.formData.isArt,callback:function(e){t.$set(t.formData,"isArt",e)},expression:"formData.isArt"}})],1),a("vxe-form-item",{attrs:{span:"3",title:""}},[a("vxe-radio",{attrs:{name:"n1",label:"0",content:"本次设定纸质",size:"medium"},model:{value:t.formData.isArt,callback:function(e){t.$set(t.formData,"isArt",e)},expression:"formData.isArt"}})],1),a("vxe-form-item",{attrs:{title:"生效日期"}},[a("vxe-input",{attrs:{disabled:"",placeholder:"日期选择",type:"datetime"},model:{value:t.formData.datetime,callback:function(e){t.$set(t.formData,"datetime",e)},expression:"formData.datetime"}})],1),a("vxe-form-item",{attrs:{"title-width":"20",span:"3",title:" ",field:""}},[a("vxe-button",{attrs:{status:"primary",content:"生成报价"},on:{click:t.sproducePriceEvent}})],1)],1),a("div",{staticStyle:{display:"flex"}},[a("div",{style:{width:t.windowOffsetWidth+"px"}},[a("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,loading:t.listLoading,height:1.36*t.windowOffsetHeight,columnsFormName:t.requstConfig.mainFormName,dataUrl:t.requstConfig.modulePreUrl+"/"+t.mainPageSearchType}})],1),a("div",{staticClass:"gridLeft"},[a("nvxe-grid",{ref:"firstTable",attrs:{toolbarConfig:t.toolbarConfig,toolbarConfigShow:!1,dataUrl:"/sale/calculatorTemp/item/list",params:{pid:t.currentSelectRowItem.row.id,updateFlag:t.updateFlag,sType:t.formData.isArt},height:1.36*t.windowOffsetHeight,columnsFormName:t.requstConfig.tab1FormName}})],1)])],2)},i=[],o=a("60b5"),s=(a("6a61"),a("3bae"),a("1472")),n=a.n(s),c=(a("5180"),a("6b6c")),u=a("2ddf"),l={mixins:[u["a"]],provide:function(){var t=this;return{getCenterBtnConfig:function(){return t.centerBtnConfig}}},props:{autoAccReceFormData:{type:Object,default:function(){return{}}}},data:function(){return{toolbarConfig:{zoom:!1,export:!1,print:!1,custom:!1,slots:{buttons:"toolbar_buttons"}},centerBtnConfig:{iisEnable:!1,iisAdd:!1,iisEdit:!1,iisDel:!1,iisDisabled:!1,iisAudit:!1,iisNotAudit:!1,iisPrint:!1},requstConfig:{modulePreUrl:"/sale/calculatorTemp",mainFormName:"saleCalculatorTempFm",tab1FormName:"saleCalculatorTempItemFm"},formData:{isArt:"1",datetime:n()().format("YYYY-MM-DD HH:mm:ss")},showPopupBox:!1,firstTableData1:[],firstTableData2:[],bool:!1}},watch:{showPopupBox:function(t,e){t?(this.getTreeData(),this.formData.datetime=n()().format("YYYY-MM-DD HH:mm:ss"),this.bool&&this.$refs.mainTable.loadDataByUrl()):this.bool=!0}},methods:{sproducePriceEvent:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$refs.mainTable.$refs.originListTalbe.getTableData().visibleData,!(e.length>0)){t.next=12;break}return a="",e.forEach((function(t){""==a?a=t.custCode:a+=","+t.custCode})),r="/common/proc/list/spSalePaperArtAutoCalc",i={baseML:this.autoAccReceFormData.profit,unit:this.autoAccReceFormData.countUnit,starDate:this.formData.datetime,sType:this.formData.isArt},i.custList=a,t.next=9,c["a"]["post"](r,i);case 9:o=t.sent,""==o.list[0].CustError?this.$XModal.message({message:"生成成功！",status:"success"}):this.$XModal.message({message:o.list[0].CustError,status:"warning"});case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),submitEvent:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showPopupBox=!1;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTreeData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},_=l,d=(a("f30b"),a("ec9f"),a("5d22")),m=Object(d["a"])(_,r,i,!1,null,"7f562467",null);e["a"]=m.exports},ec9f:function(t,e,a){"use strict";a("bcbd")},f30b:function(t,e,a){"use strict";a("3a12")},f5c9:function(t,e,a){"use strict";var r,i,o=a("5d22"),s={},n=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=n.exports}}]);