(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-044f8124"],{"0e4a":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:"column"===e.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[e.$slots.part1?o("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part1",[e._v("part1")])],2):e._e(),e.$slots.part2?o("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part2",[e._v("part2")])],2):e._e(),e.$slots.part3?o("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part3",[e._v("part3")])],2):e._e()])},r=[],n={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},i=n,s=(o("33bc"),o("5d22")),c=Object(s["a"])(i,a,r,!1,null,"550d1612",null);t["a"]=c.exports},2954:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bodyContentBox"},[o("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[o("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[o("div",{staticClass:"otherMoneyBox"},[o("div",{staticClass:"otherMoneyItem firstItem"},[o("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.badDebtsType,callback:function(t){e.badDebtsType=t},expression:"badDebtsType"}},[o("vxe-radio-button",{attrs:{label:"1",content:"应收呆账"}}),o("vxe-radio-button",{attrs:{label:"2",content:"应收呆账查询"}})],1)],1),o("div",{staticClass:"otherMoneyItem secondItem"},[o("div",{directives:[{name:"show",rawName:"v-show",value:"1"==e.badDebtsType,expression:"badDebtsType=='1'"}]},[o("nvxe-grid",{ref:"mainTable",attrs:{"sync-resize":e.badDebtsType,loading:e.listLoading,toolbarConfigShow:!0,isMainTable:!0,height:e.windowOffsetHeight-27,columnsFormName:e.requstConfig.mainFormName,dataUrl:e.requstConfig.modulePreUrl+"/"+e.mainPageSearchType}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"2"==e.badDebtsType,expression:"badDebtsType=='2'"}]},[o("div",{staticClass:"otherMoneySearchBox",style:{height:e.windowOffsetHeight-27+"px"}},[o("div",{staticClass:"otherMoneySearchItem upItem"},[o("div",{staticClass:"filterDataBox"},[o("div",{staticClass:"filterDataItem leftItem"},[o("vxe-form",{attrs:{size:"mini","title-align":"right","title-width":"60",data:e.searchForm}},[o("vxe-form-item",{attrs:{span:"4",title:"开始时间",field:"startDate"}},[o("vxe-input",{attrs:{transfer:"",type:"date"},model:{value:e.searchForm.startDate,callback:function(t){e.$set(e.searchForm,"startDate",t)},expression:"searchForm.startDate"}})],1),o("vxe-form-item",{attrs:{span:"4",title:"结束时间",field:"endDate"}},[o("vxe-input",{attrs:{transfer:"",type:"date"},model:{value:e.searchForm.endDate,callback:function(t){e.$set(e.searchForm,"endDate",t)},expression:"searchForm.endDate"}})],1),o("vxe-form-item",{attrs:{span:"3",title:"",field:"custCode"}},[o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"<<"},on:{click:function(t){return e.setDate("day","subtract")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"本日"},on:{click:function(t){return e.setDate("day","day")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:">>"},on:{click:function(t){return e.setDate("day","add")}}})],1),o("vxe-form-item",{attrs:{span:"3",title:"",field:"custCode"}},[o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"<<"},on:{click:function(t){return e.setDate("week","subtract")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"本周"},on:{click:function(t){return e.setDate("week","week")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:">>"},on:{click:function(t){return e.setDate("week","add")}}})],1),o("vxe-form-item",{attrs:{span:"3",title:"",field:"custCode"}},[o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"<<"},on:{click:function(t){return e.setDate("month","subtract")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:"本月"},on:{click:function(t){return e.setDate("month","month")}}}),o("vxe-button",{staticStyle:{margin:"0px"},attrs:{size:"mini",content:">>"},on:{click:function(t){return e.setDate("month","add")}}})],1),o("vxe-form-item",{attrs:{span:"4",title:""}}),o("vxe-form-item",{attrs:{span:"4",title:"客户编号",field:"custCode"}},[o("popUpPullDown",{ref:"popUpPullDownRef_custCode",attrs:{returnSelectedRow:!0,size:"mini",matchField:e.popUpPullDownConfig_custCode.editRender.matchField,currentValue:e.searchForm.custCode,field:e.popUpPullDownConfig_custCode.field,paramsItem:e.popUpPullDownConfig_custCode},on:{popupChange:e.popupChange_custCode}})],1),o("vxe-form-item",{attrs:{span:"4",title:"业务员",field:"workerCode"}},[o("popUpPullDown",{ref:"popUpPullDownRef_workerCode",attrs:{returnSelectedRow:!0,size:"mini",matchField:e.popUpPullDownConfig_workerCode.editRender.matchField,currentValue:e.searchForm.workerCode,field:e.popUpPullDownConfig_workerCode.field,paramsItem:e.popUpPullDownConfig_workerCode},on:{popupChange:e.popupChange_workerCode}})],1),o("vxe-form-item",{attrs:{span:"4",title:"呆账类型",field:"bdType"}},[o("selectOption",{ref:"inputRef",attrs:{size:"mini",paramsItem:e.selectOptionConfig_bdType,currentValue:e.searchForm.bdType,field:e.selectOptionConfig_bdType.field},on:{selectChange:e.formItemValueEvent_bdType}})],1),o("vxe-form-item",{attrs:{span:"5","title-width":"40",title:"状态",field:"invoice"}},[o("vxe-radio-group",{model:{value:e.searchForm.invoice,callback:function(t){e.$set(e.searchForm,"invoice",t)},expression:"searchForm.invoice"}},[o("vxe-radio",{attrs:{label:"0",content:"全部"}}),o("vxe-radio",{attrs:{label:"1",content:"未开票"}}),o("vxe-radio",{attrs:{label:"2",content:"已开票"}})],1)],1),o("vxe-form-item",{attrs:{span:"5","title-width":"60",title:"客户类型",field:"vType"}},[o("vxe-radio-group",{model:{value:e.searchForm.vType,callback:function(t){e.$set(e.searchForm,"vType",t)},expression:"searchForm.vType"}},[o("vxe-radio",{attrs:{label:"0",content:"全部"}}),o("vxe-radio",{attrs:{label:"1",content:"纸箱"}}),o("vxe-radio",{attrs:{label:"2",content:"纸板"}})],1)],1)],1)],1),o("div",{staticClass:"filterDataItem rightItem"},[o("vxe-button",{attrs:{size:"mini",status:"primary",content:"查询"},on:{click:function(t){return e.searchData()}}})],1)])]),o("div",{staticClass:"otherMoneySearchItem downItem"},[o("div",{staticClass:"dataListBox"},[o("div",{staticClass:"dataListItem upItem"},[o("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.searchForm.searchType,callback:function(t){e.$set(e.searchForm,"searchType",t)},expression:"searchForm.searchType"}},[o("vxe-radio-button",{attrs:{label:"1",content:"客户汇总"}}),o("vxe-radio-button",{attrs:{label:"2",content:"业务员汇总"}}),o("vxe-radio-button",{attrs:{label:"0",content:"明细信息"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"1"==e.searchForm.searchType,expression:"searchForm.searchType=='1'"}]},[o("nvxe-grid",{ref:"firstTable",attrs:{toolbarConfigShow:!1,loading:e.loading_firstTable,"sync-resize":e.searchForm.searchType&&e.badDebtsType,height:e.windowOffsetHeight-80-27-27,columnsFormName:e.requstConfig.tab1FormName,"pager-config":e.pagerConfig_firstTable,"show-footer":"","footer-method":e.footerMethod,"footer-cell-style":e.footerCellStyle},on:{"page-change":e.handlePageChange}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"2"==e.searchForm.searchType,expression:"searchForm.searchType=='2'"}]},[o("nvxe-grid",{ref:"secondTable",attrs:{toolbarConfigShow:!1,loading:e.loading_secondTable,"sync-resize":e.searchForm.searchType,height:e.windowOffsetHeight-80-27-27,columnsFormName:e.requstConfig.tab2FormName,"pager-config":e.pagerConfig_secondTable,"show-footer":"","footer-method":e.footerMethod,"footer-cell-style":e.footerCellStyle},on:{"page-change":e.handlePageChange}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:"0"==e.searchForm.searchType,expression:"searchForm.searchType=='0'"}]},[o("nvxe-grid",{ref:"thirdTable",attrs:{toolbarConfigShow:!1,loading:e.loading_thirdTable,"sync-resize":e.searchForm.searchType,height:e.windowOffsetHeight-80-27-27,columnsFormName:e.requstConfig.tab3FormName,"pager-config":e.pagerConfig_thirdTable,"show-footer":"","footer-method":e.footerMethod,"footer-cell-style":e.footerCellStyle},on:{"page-change":e.handlePageChange}})],1)],1),o("div",{staticClass:"dataListItem downItem"})])])])])])])]},proxy:!0}])})],1),o("editBox",{ref:"editBox",on:{submitSuccess:e.submitSuccess}})],1)},r=[],n=(o("3337"),o("b3b0"),o("a5f8"),o("3bae"),o("24a8"),o("c276"),o("1472")),i=o.n(n),s=o("4d16"),c=o("f3f3"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nvxe-modal",{attrs:{title:e.title,subTitle:e.subTitle,loading:e.vxeModalLoading},on:{confirm:function(t){return e.submitEvent()}},model:{value:e.showEditBox,callback:function(t){e.showEditBox=t},expression:"showEditBox"}},[o("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[o("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[o("formItemRender",{ref:"renderForm",attrs:{formValueChangeRes:e.formValueChangeRes,showEditBox:e.showEditBox,firstFormRules:e.requiredRule[e.requstConfig.mainFormName],firstFormData:e.firstFormData,formItemList:e.formItemList,mainFormName:e.requstConfig.mainFormName},on:{formItemValueEvent:e.formItemValueEvent}})]},proxy:!0}])})],1)])},d=[],m=o("5180"),u=o.n(m),f=o("cb39"),p=o("bf8c"),h={name:"edit-badDebts",mixins:[p["a"]],components:{formItemRender:f["a"]},data:function(){return{requstConfig:{modulePreUrl:"/account/badDebts",mainFormName:"accountbaddebtsFm"}}},methods:{closeWindowAction:function(){this.firstFormData=u()(this.formDefaultDataObj)},setDefaultValue:function(e){this.firstFormData=u()(e)},submitEvent:function(){this.submitSingleTableEvent()},inputValueChange:function(e){if("bdAmt"==e.field){var t=Number(this.firstFormData["bdAmt"])-Number(this.firstFormData["invoicedAmt"]);this.firstFormData["notInvoicedAmt"]=this.formatAmountByCustom(t)}}},created:function(){}},b=h,g=(o("6410"),o("5d22")),C=Object(g["a"])(b,l,d,!1,null,"583a2d93",null),v=C.exports,w=o("1b62"),y=o("2ddf"),x=o("0e4a"),D=o("f1c9"),T={total:0,currentPage:1,pageSize:20,orderField:"",align:"right",layouts:["PrevPage","Jump","PageCount","NextPage"]},F={name:"badDebts",components:{editBox:v,bodyContentDownItem:x["a"],selectOption:s["a"],popUpPullDown:c["a"]},provide:function(){var e=this;return{getPopupConfig:function(){return e.popupConfig},getPopupModalConfig:function(){return e.popupModalConfig}}},data:function(){return{listA:[],loading_firstTable:!1,loading_secondTable:!1,loading_thirdTable:!1,currentRefTableName:"firstTable",currentDateType:"",badDebtsType:"1",dataListType:"1",pagerConfig_firstTable:Object.assign({},T),pagerConfig_secondTable:Object.assign({},T),pagerConfig_thirdTable:Object.assign({},T),searchForm:{custCode:"",workerCode:"",startDate:i()().subtract(1,"month").format("YYYY-MM-DD"),endDate:i()().format("YYYY-MM-DD"),invoice:"0",vType:"0",bdType:"",searchType:"1"},popUpPullDownConfig_custCode:{field:"coCustCode",editRender:{defaultText:"",defaultValue:"",matchField:"coCustCode:custCode,coCustName:shortName,coIsSsize,coAreaCode,coAreaName,coUnitIdW,coUnitIdL,coDeliAddr,coSaleCode,coFollowCode,coSalseType:iisPaperSpaer,coIsAsize:iisPaperSize,coIsAmtAreaModel:iisPaperAmt,coHSIsZT,prepRate,prepOrderQty,priceDot,priceWay,amtDot,amtWay",name:"popup",sourceKey:"customerMultiBox"}},popUpPullDownConfig_workerCode:{field:"workerCode",editRender:{defaultText:"",defaultValue:"",matchField:"workerCode,workerName",name:"popup",sourceKey:"workerMultiBox"}},selectOptionConfig_bdType:{field:"bdType",editRender:{sourceKey:"accBizType"}},requstConfig:{modulePreUrl:"/account/badDebts",mainFormName:"accountbaddebtsFm",tab1FormName:"accountserchbaddebtscustFm",tab2FormName:"accountserchbaddebtssaleFm",tab3FormName:"accountserchbaddebtsitemFm"}}},mixins:[w["a"],y["a"]],watch:{"searchForm.searchType":function(e,t){this.getCurrentTabInfo(e),this.resetConfig()}},methods:{getCurrentTabInfo:function(e){switch(e){case"0":this.currentRefTableName="thirdTable";break;case"1":this.currentRefTableName="firstTable";break;case"2":this.currentRefTableName="secondTable";break;default:break}},footerMethod:function(e){var t=e.columns,o=e.data,a=this,r=[];switch(this.currentRefTableName){case"firstTable":case"secondTable":case"thirdTable":r=["omAmt","disAmt","invoicedAmt","notInvoicedAmt"];break;default:break}var n=[t.map((function(e,t){return 0===t?"当前":r.includes(e.property)?D.sum(o,e.property):null})),t.map((function(e,t){return 0===t?"全部":a.listA.length>0&&r.includes(e.property)&&a.listA[0].hasOwnProperty(e.property)?a.listA[0][e.property]:null}))];return n},footerColspanMethod:function(e){var t=e._columnIndex,o=e.$rowIndex;if(0===o){if(0===t)return{rowspan:1,colspan:3};if(1===t)return{rowspan:0,colspan:0};if(2===t)return{rowspan:0,colspan:0}}},footerCellStyle:function(e){var t=e.$rowIndex,o=(e.column,e.$columnIndex);if(0===o)return 0===t?{"background-color":"#68A6F3",color:"#ffffff"}:{"background-color":"#2779aa",color:"#ffffff"}},resetConfig:function(){},setDate:function(e,t){var o="YYYY-MM-DD";this.currentDateType!=e||["day","week","month"].includes(t)?(this.searchForm.startDate=i()().startOf(e).format(o),this.searchForm.endDate=i()().endOf(e).format(o)):["add","subtract"].includes(t)&&(this.searchForm.startDate=i()(this.searchForm.startDate)[t](1,e).format(o),this.searchForm.endDate=i()(this.searchForm.endDate)[t](1,e).format(o)),this.currentDateType=e},searchData:function(){this.loadTableDataByPName()},handlePageChange:function(e){this["pagerConfig_"+this.currentRefTableName].currentPage=e.currentPage,this.loadTableDataByPName()},popupChange_custCode:function(e){var t=this;this.searchForm.custCode="",e&&e.length>0&&e.forEach((function(e){""==t.searchForm.custCode?t.searchForm.custCode=e.custCode:t.searchForm.custCode=t.searchForm.custCode+","+e.custCode}))},popupChange_workerCode:function(e){var t=this;this.searchForm.workerCode="",e&&e.length>0&&e.forEach((function(e){""==t.searchForm.workerCode?t.searchForm.workerCode=e.workerCode:t.searchForm.workerCode=t.searchForm.workerCode+","+e.workerCode}))},formItemValueEvent_bdType:function(e){this.searchForm.bdType=e.value},loadTableDataByPName:function(){var e=this;this["loading_"+this.currentRefTableName]=!0;var t="spAccountSerchBadDebtsInfo";this.tableData=[];var o="/common/proc/pageMulti/".concat(t),a=this.searchForm;a=this.getSPPageParams(a),this.request["post"](o,a).then((function(t){e["loading_"+e.currentRefTableName]=!1,e.tableData=t.pageList.records,e.listA=t.listA;var o=e.$refs[e.currentRefTableName].$refs["originListTalbe"];o.loadData(e.tableData),e["pagerConfig_"+e.currentRefTableName].total=Number(t.pageList.total)})).catch((function(t){e["loading_"+e.currentRefTableName]=!1}))},getSPPageParams:function(e){var t={};return this.currentRefTableName&&(t={pageNumber:this["pagerConfig_"+this.currentRefTableName].currentPage,pageSize:this["pagerConfig_"+this.currentRefTableName].pageSize}),t=Object.assign({},t,e),t}}},k=F,_=(o("c626"),Object(g["a"])(k,a,r,!1,null,"447b1e16",null));t["default"]=_.exports},"33bc":function(e,t,o){"use strict";o("c294")},6410:function(e,t,o){"use strict";o("a260")},a260:function(e,t,o){},a5ca:function(e,t,o){},c294:function(e,t,o){},c626:function(e,t,o){"use strict";o("a5ca")}}]);