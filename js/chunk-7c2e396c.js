(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c2e396c"],{"0e4a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"column"===t.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[t.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part1",[t._v("part1")])],2):t._e(),t.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part2",[t._v("part2")])],2):t._e(),t.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part3",[t._v("part3")])],2):t._e()])},o=[],r={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},s=r,n=(a("33bc"),a("5d22")),l=Object(n["a"])(s,i,o,!1,null,"550d1612",null);e["a"]=l.exports},"0ee7":function(t,e,a){},"287a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("nvxe-grid",{ref:"mainTable",attrs:{isMainTable:!0,loading:t.listLoading,height:.6*t.windowOffsetHeight,columnsFormName:t.requstConfig.mainFormName,dataUrl:t.requstConfig.modulePreUrl+"/"+t.mainPageSearchType}})]},proxy:!0},{key:"part2",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"===t.selectTab,expression:"selectTab==='tab1'"}]},[a("nvxe-grid",{ref:"firstTable",attrs:{dataUrl:"/prod/prodRe/item/list",params:{pid:t.currentSelectRowItem.row.id,updateFlag:t.updateFlag},height:.4*t.windowOffsetHeight,columnsFormName:t.requstConfig.tab1FormName}},[a("template",{slot:"toolbar_buttons"},[a("tabsTool",{attrs:{currentTab:t.selectTab},on:{tabsChange:t.tabsChange}})],1)],2)],1)]},proxy:!0}])})],1),a("editBox",{ref:"editBox",on:{submitSuccess:t.submitSuccess}})],1)},o=[],r=a("79dc"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nvxe-modal",{attrs:{remember:"",fullscreen:"",title:t.title,subTitle:t.subTitle,loading:t.vxeModalLoading},on:{confirm:function(e){return t.submitEvent()}},model:{value:t.showEditBox,callback:function(e){t.showEditBox=e},expression:"showEditBox"}},[a("div",{ref:"editBoxBodyContent",staticClass:"editBoxBodyContentDefaultHW"},[a("editBoxContentPartition",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("div",{staticStyle:{overflow:"auto"},style:{height:t.editBoxFormHeight+"px"}},[a("formItemRender",{ref:"renderForm",attrs:{formValueChangeRes:t.formValueChangeRes,firstFormRules:t.requiredRule[t.requstConfig.mainFormName],showEditBox:t.showEditBox,firstFormData:t.firstFormDataMaster,mainFormName:t.requstConfig.mainFormName,formItemList:t.formItemList},on:{formItemValueEvent:t.formItemValueEvent}})],1)]},proxy:!0},{key:"part2",fn:function(){return[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:t.selectTab,callback:function(e){t.selectTab=e},expression:"selectTab"}},[a("tabsTool",{attrs:{currentTab:t.selectTab},on:{tabsChange:t.tabsChange}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"tab1"==t.selectTab,expression:"selectTab == 'tab1'"}]},[a("nvxe-edit-grid",{ref:"firstTable",attrs:{"edit-rules":t.requiredRule[t.requstConfig.tab1FormName],height:t.windowOffsetHeight-t.defaultBorderHeight-t.editBoxFormHeight-t.tabHeight,isMainTable:!0,columnsFormName:t.requstConfig.tab1FormName,data:t.firstTableData},on:{"cell-click":t.cellClickEvent,"edit-closed":t.editClosedEvent}})],1)]},proxy:!0}])})],1)])},n=[],l=(a("3bae"),a("1d43"),a("cb39")),f=a("5180"),d=a.n(f),u=(a("1472"),a("bf8c")),c={mapList:{prodReItems:"firstTable"}},m={name:"edit-prodRe",mixins:[u["a"]],components:{formItemRender:l["a"],tabsTool:r["a"]},data:function(){return{editBoxFormHeight:80,requstConfig:{modulePreUrl:"/prod/prodRe",mainFormName:"prodreFm",tab1FormName:"prodreItemFm"},popupModalConfig:{firstTable:{title:"辅料编号列表",mainFormName:"prodReWorkFm",fieldName:"prods",requstTab1Config:{isStoredProcedure:!0,modulePreUrl:"/proc/prod/page/spProdRePop",filterName:"batchNo",params:{},subformName:"prodReItemWorkFm"}}}}},provide:function(){var t=this;return{getPopupModalConfig:function(){return t.popupModalConfig}}},methods:{popupModalDataResEvent:function(t,e){var a=this,i=this.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData;this.getMasterField("reQty",i,"totalQty"),i.forEach((function(o,r){r>=t&&r<=e&&(a.getTableTotal(["taxPrice","reQty"],"taxAmt",i[r]),a.getTableTotal(["price","reQty"],"amt",i[r]))})),this.getMasterField("refQty",i,"totalfQty")},editClosedEvent:function(t){var e=t.column,a=t.$rowIndex,i=this.$refs.firstTable.$refs.originEditTalbe.getTableData().fullData,o=this;switch(e.property){case"reQty":o.getMasterField("reQty",i,"totalQty"),o.getTableTotal(["taxPrice","reQty"],"taxAmt",i[a]),o.getTableTotal(["price","reQty"],"amt",i[a]);break;case"refQty":o.getMasterField("refQty",i,"totalfQty");break;default:break}},cellClickEvent:function(t){t.column.editRender&&"popupModal"==t.column.editRender.name&&this.setFirstTableFilterList()},setFirstTableFilterList:function(){try{var t=this.$refs["firstTable"].$refs["originEditTalbe"];if(t){var e=t.getTableData().tableData,a="",i=this.popupModalConfig.firstTable.requstTab1Config.filterName;e.forEach((function(t){t[i]&&(""==a?a=t[i]:a+=","+t[i])})),this.popupModalConfig.firstTable.requstTab1Config.params.filterList=a}}catch(o){console.warn("====setFirstTableFilterList=====")}},closeWindowAction:function(){this.firstFormDataMaster=d()(this.formDefaultDataObj),this.setTableDefaultData(c,[])},setDefaultValue:function(t){t.master?(this.firstFormData=Object.assign({},c),this.firstFormDataMaster=d()(t.master),this.setTableDefaultData(c,t)):(this.firstFormData=Object.assign({},c),this.firstFormDataMaster=d()(t),this.setTableDefaultData(c,[]))}}},b=m,p=(a("7d6e"),a("5d22")),h=Object(p["a"])(b,s,n,!1,null,"6c8b0118",null),g=h.exports,w=a("1b62"),T=a("2ddf"),v=a("0e4a"),y={name:"prodReList",components:{editBox:g,tabsTool:r["a"],bodyContentDownItem:v["a"]},data:function(){return{requstConfig:{modulePreUrl:"/prod/prodRe",mainFormName:"prodreFm",tab1FormName:"prodreItemFm"}}},mixins:[w["a"],T["a"]],methods:{}},C=y,x=(a("db25"),Object(p["a"])(C,i,o,!1,null,"39a5d76f",null));e["default"]=x.exports},"2fd7":function(t,e,a){},"33bc":function(t,e,a){"use strict";a("c294")},"79dc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabsButtonListBox"},[a("div",{staticClass:"tabsButtonListItem leftItem"},[a("vxe-radio-group",{attrs:{size:"mini"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t._l(t.tabList,(function(e,i){return[a("vxe-radio-button",{key:i,staticClass:"borderRadio",attrs:{label:e.key,status:"my-purple",content:e.value},nativeOn:{click:function(a){return t.selectTabClick(e.key)}}})]}))],2)],1),a("div",{staticClass:"tabsButtonListItem rightItem"})])},o=[],r={props:{currentTab:{type:String,default:"tab1"}},data:function(){return{selectTab:"tab1"}},methods:{selectTabClick:function(t){this.selectTab=t,this.$emit("tabsChange",this.selectTab)}}},s=(a("5180"),{name:"tabs-formList",mixins:[r],props:{defaulttabList:{type:Array,default:function(){return[]}}},data:function(){return{tabList:[]}},mounted:function(){this.gettabList()},methods:{gettabList:function(){var t=this;if(0==this.defaulttabList.length){var e=[],a=this.$store.state.app.currentRouterName;if("sysFrom"!=a&&""!=a){var i=this.$store.state.app.tableColumnsInfo;if(i[a]){for(var o in i[a].listView)if("2"===i[a].listView[o].tableType){var r=i[a].listView[o].tableDesc,s=i[a].listView[o].formSort,n=i[a].listView[o].formSort;e.push({key:"tab"+s,value:r,formSort:n})}this.tabList=e.sort((function(t,e){return t.formSort-e.formSort}))}else setTimeout((function(){t.gettabList()}),300)}}else this.tabList=this.defaulttabList}}}),n=s,l=(a("e551"),a("5d22")),f=Object(l["a"])(n,i,o,!1,null,"19af0b3a",null);e["a"]=f.exports},"7d6e":function(t,e,a){"use strict";a("bfd1")},bfd1:function(t,e,a){},c294:function(t,e,a){},db25:function(t,e,a){"use strict";a("2fd7")},e551:function(t,e,a){"use strict";a("0ee7")}}]);