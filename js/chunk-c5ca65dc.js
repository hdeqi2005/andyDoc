(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ca65dc"],{"0e4a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"column"===e.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[e.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part1",[e._v("part1")])],2):e._e(),e.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part2",[e._v("part2")])],2):e._e(),e.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:e.config.windowOffsetWidth+"px"}},[e._t("part3",[e._v("part3")])],2):e._e()])},o=[],i={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},n=i,s=(a("33bc"),a("5d22")),c=Object(s["a"])(n,r,o,!1,null,"550d1612",null);t["a"]=c.exports},"0ee7":function(e,t,a){},"33bc":function(e,t,a){"use strict";a("c294")},"66b1":function(e,t,a){"use strict";a("69b9")},"69b9":function(e,t,a){},"79dc":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabsButtonListBox"},[a("div",{staticClass:"tabsButtonListItem leftItem"},[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[e._l(e.tabList,(function(t,r){return[a("vxe-radio-button",{key:r,staticClass:"borderRadio",attrs:{label:t.key,status:"my-purple",content:t.value},nativeOn:{click:function(a){return e.selectTabClick(t.key)}}})]}))],2)],1),a("div",{staticClass:"tabsButtonListItem rightItem"})])},o=[],i={props:{currentTab:{type:String,default:"tab1"}},data:function(){return{selectTab:"tab1"}},methods:{selectTabClick:function(e){this.selectTab=e,this.$emit("tabsChange",this.selectTab)}}},n=(a("5180"),{name:"tabs-formList",mixins:[i],props:{defaulttabList:{type:Array,default:function(){return[]}}},data:function(){return{tabList:[]}},mounted:function(){this.gettabList()},methods:{gettabList:function(){var e=this;if(0==this.defaulttabList.length){var t=[],a=this.$store.state.app.currentRouterName;if("sysFrom"!=a&&""!=a){var r=this.$store.state.app.tableColumnsInfo;if(r[a]){for(var o in r[a].listView)if("2"===r[a].listView[o].tableType){var i=r[a].listView[o].tableDesc,n=r[a].listView[o].formSort,s=r[a].listView[o].formSort;t.push({key:"tab"+n,value:i,formSort:s})}this.tabList=t.sort((function(e,t){return e.formSort-t.formSort}))}else setTimeout((function(){e.gettabList()}),300)}}else this.tabList=this.defaulttabList}}}),s=n,c=(a("e551"),a("5d22")),u=Object(c["a"])(s,r,o,!1,null,"19af0b3a",null);t["a"]=u.exports},8714:function(e,t,a){"use strict";a("e0eb")},"89c6":function(e,t,a){"use strict";a.r(t);var r,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[a("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,loading:e.listLoading,height:.6*e.windowOffsetHeight,columnsFormName:e.requstConfig.mainFormName,dataUrl:e.requstConfig.modulePreUrl+"/"+e.mainPageSearchType}})]},proxy:!0},{key:"part2",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"===e.selectTab,expression:"selectTab==='tab1'"}]},[a("nvxe-grid",{ref:"firstTable",attrs:{dataUrl:"/sale/paperRepPriceCarFee/paperRepPriceCarFeeItem/list",params:{pid:e.currentSelectRowItem.row.id,updateFlag:e.updateFlag},height:.4*e.windowOffsetHeight,columnsFormName:e.requstConfig.tab1FormName}},[a("template",{slot:"toolbar_buttons"},[a("tabsTool",{attrs:{currentTab:e.selectTab},on:{tabsChange:e.tabsChange}})],1)],2)],1)]},proxy:!0}])})],1),a("editBox",{ref:"editBox",on:{submitSuccess:e.submitSuccess}}),a("feeCopyFn",{ref:"feeCopyFn",on:{submitSuccess:e.submitSuccess}})],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nvxe-modal",{attrs:{title:"运费复制",width:"30%",height:"40%",subTitle:"",loading:e.vxeModalLoading},on:{confirm:function(t){return e.submitEvent()}},model:{value:e.showPopupBox,callback:function(t){e.showPopupBox=t},expression:"showPopupBox"}},[a("vxe-form",{ref:"firstForm",attrs:{data:e.formData,size:"small",span:"24",rules:e.formRules,"title-align":"right","title-width":"90"}},[a("vxe-form-item",{attrs:{title:"客户",field:"guestName"}},[a("popUpPullDown",{attrs:{matchField:e.popUpPullDownConfig.editRender.matchField,currentValue:e.formData.guestName,field:e.popUpPullDownConfig.field,paramsItem:e.popUpPullDownConfig},on:{popupChange:e.popupChange}})],1),a("vxe-form-item",{attrs:{title:"地区",field:"areaName"}},[a("regionInput",{attrs:{currentValueText:e.formData.areaName},on:{change:e.regionChange}})],1),a("vxe-form-item",{attrs:{title:"起始公里",field:"startKilometre"}},[a("vxe-input",{attrs:{type:"number",placeholder:"请输入起始公里"},model:{value:e.formData.startKilometre,callback:function(t){e.$set(e.formData,"startKilometre",t)},expression:"formData.startKilometre"}})],1),a("vxe-form-item",{attrs:{title:"结束公里",field:"endKilometre"}},[a("vxe-input",{attrs:{type:"number",placeholder:"请输入结束公里"},model:{value:e.formData.endKilometre,callback:function(t){e.$set(e.formData,"endKilometre",t)},expression:"formData.endKilometre"}})],1)],1)],1)},s=[],c=a("60b5"),u=(a("6a61"),a("6b6c")),l=a("f3f3"),f=a("de33"),m={id:"",guestName:"",guestCode:"",areaName:"",areaCode:"",startKilometre:"",endKilometre:""},p={name:"paperRepPriceCarFeeCopyFn",components:{popUpPullDown:l["a"],regionInput:f["a"]},provide:function(){var e=this;return{getPopupConfig:function(){return e.popupConfig}}},data:function(){return{popUpPullDownConfig:{field:"guestName",editRender:{defaultText:"",defaultValue:"",matchField:"guestCode:custCode,guestName:shortName",name:"popup",sourceKey:"customerSingleBox_nocommon"}},popupConfig:{},formRules:{guestName:[{required:!0,message:"请输入客户"}]},vxeModalLoading:!1,showPopupBox:!1,formData:Object.assign({},m)}},computed:{currentSelectRowItem:function(){var e=this.$store.state.app.currentSelectRowItem;return e}},watch:{showPopupBox:function(e,t){e?this.initData():this.formData=Object.assign({},m)}},methods:{initData:function(){var e=this.currentSelectRowItem.row;e&&(this.formData.id=e.id,this.formData.areaName=e.areaName,this.formData.areaCode=e.areaCode)},regionChange:function(e){this.formData.areaName=e.areaName,this.formData.areaCode=e.areaCode},popupChange:function(e){this.formData=Object.assign({},this.formData,e.matchField)},submitEvent:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a,r,o,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,a=t.$refs["firstForm"],!a){e.next=14;break}return e.prev=3,e.next=6,a.validate();case 6:e.sent,r="sale/paperRepPriceCarFee/copy",o={id:this.formData.id,custCode:this.formData.guestCode,areaCode:this.formData.areaCode,tranB:this.formData.startKilometre,tranE:this.formData.endKilometre},u["a"].post(r,o).then((function(e){i.showPopupBox=!1,i.$XModal.message({message:"操作成功!",status:"success"}),i.$emit("submitSuccess")})),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](3);case 14:case"end":return e.stop()}}),e,this,[[3,12]])})));function t(){return e.apply(this,arguments)}return t}()}},d=p,h=a("5d22"),b=Object(h["a"])(d,n,s,!1,null,"c9c27ebc",null),g=b.exports,w=a("79dc"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nvxe-modal",{attrs:{resize:"",remember:"",fullscreen:"",title:e.title,width:"80%",height:"88%",subTitle:e.subTitle,loading:e.vxeModalLoading},on:{confirm:function(t){return e.submitEvent()}},model:{value:e.showEditBox,callback:function(t){e.showEditBox=t},expression:"showEditBox"}},[a("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[a("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:e.windowOffsetHeight,windowOffsetWidth:e.windowOffsetWidth}},scopedSlots:e._u([{key:"part1",fn:function(){return[a("div",{staticStyle:{overflow:"auto"},style:{height:e.editBoxFormHeight+"px"}},[a("formItemRender",{ref:"renderForm",attrs:{showEditBox:e.showEditBox,formValueChangeRes:e.formValueChangeRes,firstFormRules:e.requiredRule[e.requstConfig.mainFormName],firstFormData:e.firstFormDataMaster,mainFormName:e.requstConfig.mainFormName,formItemList:e.formItemList},on:{formItemValueEvent:e.formItemValueEvent}})],1)]},proxy:!0},{key:"part2",fn:function(){return[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:e.selectTab,callback:function(t){e.selectTab=t},expression:"selectTab"}},[a("tabsTool",{attrs:{currentTab:e.selectTab},on:{tabsChange:e.tabsChange}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"==e.selectTab,expression:"selectTab == 'tab1'"}]},[a("nvxe-edit-grid",{ref:"firstTable",attrs:{"edit-rules":e.requiredRule[e.requstConfig.tab1FormName],height:e.windowOffsetHeight-e.defaultBorderHeight-e.editBoxFormHeight-e.tabHeight,columnsFormName:e.requstConfig.tab1FormName,data:e.firstTableData},on:{"cell-click":e.cellClickEvent}})],1)]},proxy:!0}])})],1)])},v=[],x=a("7dd6"),D=a("cb39"),F=a("5180"),y=a.n(F),T=(a("1472"),a("bf8c")),B={mapList:{paperRepPriceCarFeeItems:"firstTable"}},k={name:"edit-paperRepPriceCarFee",mixins:[T["a"]],components:{formItemRender:D["a"],tabsTool:w["a"]},provide:function(){var e=this;return{getPopupConfig:function(){return e.popupConfig}}},data:function(){var e=this;return{editBoxFormHeight:40,requstConfig:{modulePreUrl:"/sale/paperRepPriceCarFee",mainFormName:"salepaperreppricecarfeeFm",tab1FormName:"salepaperreppricecarfeeitemFm"},popupConfig:{ppcCS:{lbCode:""},lbCode:{getshowPopUpDown:function(){return e.getshowPopUpBox({field:"custName"})}}}}},methods:(r={cellClickEvent:function(e){var t=e.column.property;if("ppcCS"==t){var a=e.row["lbCode"];this.popupConfig.ppcCS.lbCode=a}},closeWindowAction:function(){this.firstFormDataMaster=y()(this.formDefaultDataObj),this.setTableDefaultData(B,[]),this.popupConfig.ppcCS.lbCode=""},setDefaultValue:function(e){e.master?(this.firstFormData=Object.assign({},B),this.firstFormDataMaster=y()(e.master),this.setTableDefaultData(B,e)):(this.firstFormData=Object.assign({},B),this.firstFormDataMaster=y()(e),this.setTableDefaultData(B,[]))}},Object(x["a"])(r,"closeWindowAction",(function(){})),Object(x["a"])(r,"submitEvent",function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a,r,o,i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,a=t.$refs["renderForm"].$refs["firstForm"],!a){e.next=33;break}return e.prev=3,e.next=6,a.validate();case 6:return e.sent,e.next=9,this.fullValidEvent("firstTable");case 9:e.sent,r=this.$refs.firstTable.getRecordset().insertRecords,o=0;case 12:if(!(o<r.length-1)){e.next=25;break}i=o+1;case 14:if(!(i<r.length)){e.next=22;break}if(r[o].lbCode!==r[i].lbCode||r[o].ppcCS!==r[i].ppcCS){e.next=19;break}return console.error("==".concat(this.subTitle,">>=====提交表单<<包含重复数据>>错误===========")),this.$XModal.message({message:"请勿添加重复数据!",status:"error"}),e.abrupt("return");case 19:i++,e.next=14;break;case 22:o++,e.next=12;break;case 25:n=this.getRecordset(this.firstFormData),s="".concat(this.requstConfig.modulePreUrl,"/saveOrUpdate"),this.request["update"](s,n).then((function(e){setTimeout((function(){t.showEditBox=!1}),1e3),t.$emit("submitSuccess",n)})),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](3),console.error("==".concat(this.subTitle,">>=====提交表单<<验证>>错误==========="));case 33:case"end":return e.stop()}}),e,this,[[3,30]])})));function t(){return e.apply(this,arguments)}return t}()),r)},O=k,R=(a("8714"),Object(h["a"])(O,C,v,!1,null,"488bcd54",null)),N=R.exports,P=a("1b62"),I=a("2ddf"),S=a("0e4a"),_={name:"paperRepPriceCarFee",components:{editBox:N,feeCopyFn:g,tabsTool:w["a"],bodyContentDownItem:S["a"]},data:function(){return{requstConfig:{modulePreUrl:"/sale/paperRepPriceCarFee",mainFormName:"salepaperreppricecarfeeFm",tab1FormName:"salepaperreppricecarfeeitemFm"}}},mixins:[P["a"],I["a"]],methods:{copyFn:function(){var e=this.$refs["feeCopyFn"];e&&(e.showPopupBox=!0)},extBtnFunction:function(e){switch(e){case"copyFn":this.copyFn();break;default:break}}}},$=_,E=(a("66b1"),Object(h["a"])($,o,i,!1,null,"624c6160",null));t["default"]=E.exports},c294:function(e,t,a){},e0eb:function(e,t,a){},e551:function(e,t,a){"use strict";a("0ee7")}}]);