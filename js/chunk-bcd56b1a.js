(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcd56b1a"],{"0e4a":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"column"===e.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[e.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part1",[e._v("part1")])],2):e._e(),e.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part2",[e._v("part2")])],2):e._e(),e.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part3",[e._v("part3")])],2):e._e()])},r=[],i={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},s=i,n=(a("33bc"),a("5d22")),l=Object(n["a"])(s,o,r,!1,null,"550d1612",null);t["a"]=l.exports},"0ee7":function(e,t,a){},2628:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[a("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,loading:e.listLoading,height:.6*e.windowOffsetHeight,columnsFormName:e.requstConfig.mainFormName,dataUrl:e.requstConfig.modulePreUrl+"/"+e.mainPageSearchType}})]},proxy:!0},{key:"part2",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"===e.selectTab,expression:"selectTab==='tab1'"}]},[a("nvxe-grid",{ref:"firstTable",attrs:{dataUrl:"/sale/paperSpecialOffer/paperSpecialOfferItem/list",params:{pid:e.currentSelectRowItem.row.id,updateFlag:e.updateFlag},height:.4*e.windowOffsetHeight,columnsFormName:e.requstConfig.tab1FormName}},[a("template",{slot:"toolbar_buttons"},[a("tabsTool",{attrs:{currentTab:e.selectTab},on:{tabsChange:e.tabsChange}})],1)],2)],1)]},proxy:!0}])})],1),a("editBox",{ref:"editBox",on:{submitSuccess:e.submitSuccess}}),a("paperArtPriceCopyFn",{ref:"paperCopy",attrs:{copyType:e.copyType,title:e.title},on:{submitSuccess:e.submitSuccess}})],1)},r=[],i=a("c23f"),s=a("79dc"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nvxe-modal",{attrs:{resize:"",remember:"",fullscreen:"",title:e.title,width:"80%",height:"88%",subTitle:e.subTitle,loading:e.vxeModalLoading},on:{confirm:function(t){return e.submitEvent()}},model:{value:e.showEditBox,callback:function(t){e.showEditBox=t},expression:"showEditBox"}},[a("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[a("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[a("div",{staticStyle:{overflow:"auto"},style:{height:e.editBoxFormHeight+"px"}},[a("formItemRender",{ref:"renderForm",attrs:{formValueChangeRes:e.formValueChangeRes,firstFormRules:e.requiredRule[e.requstConfig.mainFormName],showEditBox:e.showEditBox,firstFormData:e.firstFormDataMaster,mainFormName:e.requstConfig.mainFormName,formItemList:e.formItemList},on:{formItemValueEvent:e.formItemValueEvent}})],1)]},proxy:!0},{key:"part2",fn:function(){return[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.selectTab,callback:function(t){e.selectTab=t},expression:"selectTab"}},[a("tabsTool",{attrs:{currentTab:e.selectTab},on:{tabsChange:e.tabsChange}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"==e.selectTab,expression:"selectTab == 'tab1'"}]},[a("nvxe-edit-grid",{ref:"firstTable",attrs:{"edit-rules":e.requiredRule[e.requstConfig.tab1FormName],height:e.windowOffsetHeight-e.defaultBorderHeight-e.editBoxFormHeight-e.tabHeight,columnsFormName:e.requstConfig.tab1FormName,data:e.firstTableData}})],1)]},proxy:!0}])})],1)])},l=[],f=(a("3337"),a("5d08"),a("529f"),a("24a8"),a("cb39")),c=a("5180"),u=a.n(c),p=a("1472"),m=a.n(p),d=a("bf8c"),b=a("6b6c"),h={mapList:{specialOfferItems:"firstTable"}},w={name:"edit-paperSpecialOffer",mixins:[d["a"]],components:{formItemRender:f["a"],tabsTool:s["a"]},data:function(){var e=this;return{editBoxFormHeight:80,requstConfig:{modulePreUrl:"/sale/paperSpecialOffer",mainFormName:"salepaperspecialofferFm",tab1FormName:"salepaperspecialofferitemFm"},custCode:"",popupConfig:{artCode:{getshowPopUpDown:function(){return e.getshowPopUpBox({field:"custName"})}}}}},methods:{closeWindowAction:function(){this.firstFormDataMaster=u()(this.formDefaultDataObj),this.setTableDefaultData(h,[])},setDefaultValue:function(e){if(e.master)this.firstFormData=Object.assign({},h),this.firstFormDataMaster=u()(e.master),this.setTableDefaultData(h,e);else{e.approvalDate="";var t=this.$store.getters.loginUserInfo_getter,a=m()(e.beginDate).add(t.sysParams.SpecPriceDay,"day");e.endDate=m()(a).format("YYYY-MM-DD HH:mm:ss"),this.firstFormData=Object.assign({},h),this.firstFormDataMaster=u()(e),this.setTableDefaultData(h,[])}},popupChange:function(e){var t=this;if(this.$refs.firstTable.$refs.originEditTalbe.remove(),e.matchField){var a="/sale/paperSpecialOffer/getLastSpecialOffer";this.custCode=e.matchField.custCode;var o={custCode:e.matchField.custCode};b["a"]["post"](a,o).then((function(e){e&&e.map((function(e){t.$refs.firstTable.$refs.originEditTalbe.insert(e)}))}))}},popUpTableChange:function(e){var t=this;setTimeout((function(){var a=t.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData,o=!1;if(1!=a.length){var r=a.slice(0,a.length-1);o=r.some((function(e){return a[a.length-1].artCode===e.artCode}))}if(o)t.$XModal.message({message:"纸质+楞别相同了",status:"error"}),a[e.tableInfo.$rowIndex].artCode="",a[e.tableInfo.$rowIndex].lbCode="";else{var i="/sale/paperSpecialOffer/getSpecialOfferItemPrice",s={custCode:this.custCode,artCode:e.resParams.matchField.artCode,lbCode:e.resParams.matchField.lbCode};b["a"]["post"](i,s).then((function(t){t.quotePrice?a[e.tableInfo.$rowIndex].oldQuotePrice=t.quotePrice:a[e.tableInfo.$rowIndex].oldQuotePrice=0,t.costPrice?a[e.tableInfo.$rowIndex].costPrice=t.costPrice:a[e.tableInfo.$rowIndex].costPrice=0,t.oldSpecialPrice?a[e.tableInfo.$rowIndex].oldSpecialPrice=t.oldSpecialPrice:a[e.tableInfo.$rowIndex].oldSpecialPrice=0,t.lessStyle?(a[e.tableInfo.$rowIndex].lessStyle=t.lessStyle,a[e.tableInfo.$rowIndex].lessStyleStr=t.lessStyleStr,a[e.tableInfo.$rowIndex].lessStyleJson=t.lessStyleJson):(a[e.tableInfo.$rowIndex].lessStyle="",a[e.tableInfo.$rowIndex].lessStyleStr="",a[e.tableInfo.$rowIndex].lessStyleJson=""),e.tableInfo.row.oldQuotePrice>0&&e.tableInfo.row.costPrice>0?e.tableInfo.row.spaperRate=parseFloat((Number(e.tableInfo.row.costPrice)/Number(e.tableInfo.row.oldQuotePrice)).toFixed(4)):e.tableInfo.row.spaperRate=0}))}}),500)}}},g=w,v=(a("e989"),a("5d22")),x=Object(v["a"])(g,n,l,!1,null,"16598b1d",null),C=x.exports,D=a("1b62"),y=a("2ddf"),I=a("0e4a"),T={name:"paperSpecialOffer",components:{editBox:C,tabsTool:s["a"],bodyContentDownItem:I["a"],paperArtPriceCopyFn:i["a"]},data:function(){return{requstConfig:{modulePreUrl:"/sale/paperSpecialOffer",mainFormName:"salepaperspecialofferFm",tab1FormName:"salepaperspecialofferitemFm"},title:"纸板特价复制",copyType:"offer"}},mixins:[D["a"],y["a"]],methods:{extBtnFunction:function(e){switch(e){case"copyFn":this.copyFn();break;default:break}},copyFn:function(){var e=this.$refs["paperCopy"];e&&(e.showPopupBox=!0)}}},F=T,S=(a("3c93"),Object(v["a"])(F,o,r,!1,null,"b2ccad1c",null));t["default"]=S.exports},3046:function(e,t,a){},"33bc":function(e,t,a){"use strict";a("c294")},"3c93":function(e,t,a){"use strict";a("ec50")},"79dc":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabsButtonListBox"},[a("div",{staticClass:"tabsButtonListItem leftItem"},[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[e._l(e.tabList,(function(t,o){return[a("vxe-radio-button",{key:o,staticClass:"borderRadio",attrs:{label:t.key,status:"my-purple",content:t.value},nativeOn:{click:function(a){return e.selectTabClick(t.key)}}})]}))],2)],1),a("div",{staticClass:"tabsButtonListItem rightItem"})])},r=[],i={props:{currentTab:{type:String,default:"tab1"}},data:function(){return{selectTab:"tab1"}},methods:{selectTabClick:function(e){this.selectTab=e,this.$emit("tabsChange",this.selectTab)}}},s=(a("5180"),{name:"tabs-formList",mixins:[i],props:{defaulttabList:{type:Array,default:function(){return[]}}},data:function(){return{tabList:[]}},mounted:function(){this.gettabList()},methods:{gettabList:function(){var e=this;if(0==this.defaulttabList.length){var t=[],a=this.$store.state.app.currentRouterName;if("sysFrom"!=a&&""!=a){var o=this.$store.state.app.tableColumnsInfo;if(o[a]){for(var r in o[a].listView)if("2"===o[a].listView[r].tableType){var i=o[a].listView[r].tableDesc,s=o[a].listView[r].formSort,n=o[a].listView[r].formSort;t.push({key:"tab"+s,value:i,formSort:n})}this.tabList=t.sort((function(e,t){return e.formSort-t.formSort}))}else setTimeout((function(){e.gettabList()}),300)}}else this.tabList=this.defaulttabList}}}),n=s,l=(a("e551"),a("5d22")),f=Object(l["a"])(n,o,r,!1,null,"19af0b3a",null);t["a"]=f.exports},c23f:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nvxe-modal",{attrs:{title:e.title,width:"30%",height:"40%",subTitle:"",loading:e.vxeModalLoading},on:{confirm:function(t){return e.submitEvent()}},model:{value:e.showPopupBox,callback:function(t){e.showPopupBox=t},expression:"showPopupBox"}},[a("vxe-form",{ref:"firstForm",attrs:{data:e.formData,size:"small",span:"24",rules:e.formRules,"title-align":"right","title-width":"90"}},["offer"==e.copyType?a("vxe-form-item",{attrs:{title:"特价单号",field:"billNo"}},[a("vxe-input",{attrs:{disabled:"",placeholder:"特价单号"},model:{value:e.formData.billNo,callback:function(t){e.$set(e.formData,"billNo",t)},expression:"formData.billNo"}})],1):a("vxe-form-item",{attrs:{title:"合同编号",field:"pactNo"}},[a("vxe-input",{attrs:{disabled:"",placeholder:"合同编号"},model:{value:e.formData.pactNo,callback:function(t){e.$set(e.formData,"pactNo",t)},expression:"formData.pactNo"}})],1),a("vxe-form-item",{attrs:{title:"客户编号",field:"custCode"}},[a("popUpPullDown",{attrs:{matchField:e.popUpPullDownConfig.editRender.matchField,currentValue:e.formData.custCode,field:e.popUpPullDownConfig.field,paramsItem:e.popUpPullDownConfig},on:{popupChange:e.popupChange}})],1),a("vxe-form-item",{attrs:{title:"生效日期",field:"effectiveDate"}},[a("vxe-input",{attrs:{placeholder:"请选择日期",type:"date",transfer:""},model:{value:e.formData.effectiveDate,callback:function(t){e.$set(e.formData,"effectiveDate",t)},expression:"formData.effectiveDate"}})],1),a("vxe-form-item",{attrs:{title:"备注",field:"remark"}},[a("vxe-input",{attrs:{placeholder:"请输入备注"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1)],1)},r=[],i=a("60b5"),s=(a("6a61"),a("1472")),n=a.n(s),l=a("6b6c"),f=a("f3f3"),c={billNo:"",pactNo:"",custCode:"",effectiveDate:n()().format("YYYY-MM-DD"),remark:"",kbType:""},u={name:"paperRepPriceCarFeeCopyFn",components:{popUpPullDown:f["a"]},provide:function(){var e=this;return{getPopupConfig:function(){return e.popupConfig}}},props:{title:{type:String,default:""},copyType:{type:String,default:""}},data:function(){return{popUpPullDownConfig:{field:"custCode",editRender:{defaultText:"",defaultValue:"",matchField:"custCode:custCode",name:"popup",sourceKey:"customerMultiBox_nocommon"}},popupConfig:{},formRules:{custCode:[{required:!0,message:"请输入客户编号"}]},vxeModalLoading:!1,showPopupBox:!1,formData:Object.assign({},c)}},computed:{currentSelectRowItem:function(){var e=this.$store.state.app.currentSelectRowItem;return e}},watch:{showPopupBox:function(e,t){e?this.initData():this.formData=Object.assign({},c)}},methods:{initData:function(){var e=this.currentSelectRowItem.row;e&&(this.formData.pactNo=e.pactNo,this.formData.kbType=e.kbType,this.formData.billNo=e.billNo)},popupChange:function(e){this.formData=Object.assign({},this.formData,e.matchField)},submitEvent:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,o,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,a=t.$refs["firstForm"],!a){e.next=13;break}return e.prev=3,e.next=6,a.validate();case 6:e.sent,"offer"==this.copyType?(o="sale/paperSpecialOffer/copy",r={billNo:t.formData.billNo,custCode:t.formData.custCode,billDate:t.formData.effectiveDate+" "+n()().format("HH:mm:ss"),remark:t.formData.remark}):(o="sale/paperArtPrice/copy",r={pactNo:t.formData.pactNo,custCode:t.formData.custCode,effectiveDate:t.formData.effectiveDate+" "+n()().format("HH:mm:ss"),remark:t.formData.remark,kbType:t.formData.kbType}),l["a"].post(o,r).then((function(e){i.showPopupBox=!1,i.$XModal.message({message:"操作成功!",status:"success"}),i.$emit("submitSuccess")})),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](3);case 13:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(){return e.apply(this,arguments)}return t}()}},p=u,m=a("5d22"),d=Object(m["a"])(p,o,r,!1,null,"616a00a0",null);t["a"]=d.exports},c294:function(e,t,a){},e551:function(e,t,a){"use strict";a("0ee7")},e989:function(e,t,a){"use strict";a("3046")},ec50:function(e,t,a){}}]);