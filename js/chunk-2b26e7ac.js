(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b26e7ac"],{"0e4a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"column"===t.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[t.$slots.part1?n("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part1",[t._v("part1")])],2):t._e(),t.$slots.part2?n("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part2",[t._v("part2")])],2):t._e(),t.$slots.part3?n("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part3",[t._v("part3")])],2):t._e()])},i=[],s={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},a=s,r=(n("33bc"),n("5d22")),f=Object(r["a"])(a,o,i,!1,null,"550d1612",null);e["a"]=f.exports},"33bc":function(t,e,n){"use strict";n("c294")},4462:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bodyContentBox"},[n("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[n("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[n("nvxe-grid",{ref:"mainTable",attrs:{loading:t.listLoading,toolbarConfigShow:!0,isMainTable:!0,height:t.windowOffsetHeight,columnsFormName:t.requstConfig.mainFormName,dataUrl:t.requstConfig.modulePreUrl+"/"+t.mainPageSearchType}})]},proxy:!0}])})],1),n("editBox",{ref:"editBox",on:{submitSuccess:t.submitSuccess}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nvxe-modal",{attrs:{title:t.title,subTitle:t.subTitle,loading:t.vxeModalLoading},on:{confirm:function(e){return t.submitEvent()}},model:{value:t.showEditBox,callback:function(e){t.showEditBox=e},expression:"showEditBox"}},[n("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[n("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[n("formItemRender",{ref:"renderForm",attrs:{formValueChangeRes:t.formValueChangeRes,showEditBox:t.showEditBox,firstFormRules:t.requiredRule[t.requstConfig.mainFormName],firstFormData:t.firstFormData,formItemList:t.formItemList,mainFormName:t.requstConfig.mainFormName},on:{formItemValueEvent:t.formItemValueEvent}})]},proxy:!0}])})],1)])},a=[],r=n("5180"),f=n.n(r),d=n("cb39"),c=n("bf8c"),m={name:"edit-paperLimit",mixins:[c["a"]],components:{formItemRender:d["a"]},data:function(){return{requstConfig:{modulePreUrl:"/basic/paperLimit",mainFormName:"basicpaperlimitFm"}}},methods:{closeWindowAction:function(){this.firstFormData=f()(this.formDefaultDataObj)},setDefaultValue:function(t){this.firstFormData=f()(t)},submitEvent:function(){this.submitSingleTableEvent()}},created:function(){}},u=m,l=(n("e7db"),n("5d22")),w=Object(l["a"])(u,s,a,!1,null,"065253c5",null),p=w.exports,b=n("1b62"),h=n("2ddf"),g=n("0e4a"),x={name:"paperLimitList",components:{editBox:p,bodyContentDownItem:g["a"]},data:function(){return{requstConfig:{modulePreUrl:"/basic/paperLimit",mainFormName:"basicpaperlimitFm"}}},mixins:[b["a"],h["a"]],methods:{}},C=x,v=(n("e116"),Object(l["a"])(C,o,i,!1,null,"09d53bbc",null));e["default"]=v.exports},"96f6":function(t,e,n){},c294:function(t,e,n){},e116:function(t,e,n){"use strict";n("96f6")},e7db:function(t,e,n){"use strict";n("f492")},f492:function(t,e,n){}}]);