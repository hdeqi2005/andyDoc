(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0ac940"],{"02e21":function(t,e,a){"use strict";a("5349")},"0e4a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"column"===t.flexDirection?"bodyContentDownBox-V":"bodyContentDownBox-H"},[t.$slots.part1?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part1",[t._v("part1")])],2):t._e(),t.$slots.part2?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part2",[t._v("part2")])],2):t._e(),t.$slots.part3?a("div",{staticClass:"bodyContentDownItem",style:{width:t.config.windowOffsetWidth+"px"}},[t._t("part3",[t._v("part3")])],2):t._e()])},o=[],i={name:"bodyContentDownItem",props:{flexDirection:{type:String,default:"column"},config:{type:Object,default:function(){return{windowOffsetHeight:0,windowOffsetWidth:0}}}},data:function(){return{}},methods:{}},s=i,r=(a("33bc"),a("5d22")),u=Object(r["a"])(s,n,o,!1,null,"550d1612",null);e["a"]=u.exports},"33bc":function(t,e,a){"use strict";a("c294")},"3cd7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bodyContentBox"},[a("div",{ref:"refBodyContent",staticClass:"bodyContentItem lastItem"},[a("bodyContentDownItem",{attrs:{config:{windowOffsetHeight:t.windowOffsetHeight,windowOffsetWidth:t.windowOffsetWidth}},scopedSlots:t._u([{key:"part1",fn:function(){return[a("nvxe-grid",{ref:"firstTable",attrs:{"footer-method":t.footerMethod,showFooter:!0,isMainTable:!1,loading:t.loading,toolbarConfigShow:!1,height:t.windowOffsetHeight,data:t.data,columns:t.columns}})]},proxy:!0}])})],1)])},o=[],i=a("58c8"),s=(a("16ca"),a("6b6c")),r=a("1b62"),u=a("2ddf"),c=a("0e4a"),l={name:"reportSpaperAdjustPrice",components:{bodyContentDownItem:c["a"]},data:function(){return{requstConfig:{modulePreUrl:".",mainFormName:"."},countData:null,ageData:null,loading:!1,columns:null,data:null,seqColumn:[{showOverflow:!0,default:"operate",fixed:"left",type:"seq",visible:!0,title:"#",headerAlign:"center",align:"center",width:38}]}},mixins:[r["a"],u["a"]],created:function(){this.getSpspaperreportavgpriceFm()},methods:{footerMethod:function(){return null!==this.countData&&null!==this.ageData?[["和值","","",this.countData.lastStoreSumWt,this.countData.lastStoreSumTaxAmt,this.countData.lastStoreSumAvgPrice,this.countData.inSumWt,this.countData.inSumTaxAmt,this.countData.inSumAvgPrice,this.countData.inSumAvgPrice,this.countData.snDescStoreSumWt,this.countData.curStoreSumWt,this.countData.curSpendStoreSumWt,this.countData.curStoreSumAvgPrice,this.countData.curSpendStoreSumTaxAmt,this.countData.curStoreSumTaxAmt,this.countData.endStoreSumAvgPrice,this.countData.usePaperRatio,this.countData.preFeedRatio,this.countData.preFeedNum],["平均","","",this.ageData.lastStoreSumWt,this.ageData.lastStoreSumTaxAmt,this.ageData.lastStoreSumAvgPrice,this.ageData.inSumWt,this.ageData.inSumTaxAmt,this.ageData.inSumAvgPrice,this.ageData.inSumAvgPrice,this.ageData.snDescStoreSumWt,this.ageData.curStoreSumWt,this.ageData.curSpendStoreSumWt,this.ageData.curStoreSumAvgPrice,this.ageData.curSpendStoreSumTaxAmt,this.ageData.curStoreSumTaxAmt,this.ageData.endStoreSumAvgPrice,this.ageData.usePaperRatio,this.ageData.preFeedRatio,this.ageData.preFeedNum]]:[]},getTableData:function(){var t=this;this.loading=!0,s["a"].post("/mrp/proc/list/spSPaperReportAdjustPrice",{}).then((function(e){t.data=e.list[0],t.countData=e.list[1][0],t.ageData=e.list[2][0],t.loading=!1})).catch((function(e){t.$XModal.message({message:"数据加载失败！",status:"warning"}),t.loading=!1}))},getSpspaperreportavgpriceFm:function(){var t=this;this.loading=!0,s["a"].get("/sys/form/init/spspaperreportadjustpriceFm",{}).then((function(e){t.setTableColumns(e.columns.spspaperreportadjustpriceFm.listColumns),t.getTableData(),t.loading=!1})).catch((function(e){t.$XModal.message({message:"获取表头数据失败",status:"warning"}),t.loading=!1}))},setTableColumns:function(t){var e=this.$refs.firstTable.$refs.originListTalbe;if(e)e.loadColumn([].concat(Object(i["a"])(t),Object(i["a"])(this.seqColumn)))}}},d=l,m=(a("02e21"),a("5d22")),h=Object(m["a"])(d,n,o,!1,null,"57f1aa1a",null);e["default"]=h.exports},5349:function(t,e,a){},c294:function(t,e,a){}}]);