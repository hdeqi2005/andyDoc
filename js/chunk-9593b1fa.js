(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9593b1fa"],{"4ccc":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"search"},[s("span",{staticClass:"searchCriteria"},[t._v("搜索条件")]),s("vxe-form",{staticStyle:{"background-color":"#f2f5f7"},attrs:{data:t.formData,"title-width":"90",size:"mini","title-align":"right",span:"24"}},[s("vxe-form-item",{staticClass:"paddingNone",attrs:{title:"查询日期",field:"formData.startDate",span:"5","title-width":"60"}},[s("vxe-input",{attrs:{size:"mini",type:"datetime",placeholder:"请选择日期",clearable:""},on:{change:t.updateStatus},model:{value:t.formData.startDate,callback:function(a){t.$set(t.formData,"startDate",a)},expression:"formData.startDate"}})],1),s("vxe-form-item",{staticClass:"paddingNone",attrs:{title:" 到",field:"formData.endDate",span:"4","title-width":"20"}},[s("vxe-input",{attrs:{size:"mini",type:"datetime",placeholder:"请选择日期",clearable:""},on:{change:t.updateStatus},model:{value:t.formData.endDate,callback:function(a){t.$set(t.formData,"endDate",a)},expression:"formData.endDate"}})],1),s("vxe-form-item",{staticClass:"paddingNone formButtomList",attrs:{title:"",field:"",span:"4","title-width":"10"}},[s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"<<"},on:{click:function(a){return t.ubtractDate("day")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"本日"},on:{click:function(a){return t.ChangeDate("day")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:">>"},on:{click:function(a){return t.addDate("day")}}})],1),s("vxe-form-item",{staticClass:"paddingNone formButtomList",attrs:{title:"",field:"",span:"3","title-width":"10"}},[s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"<<"},on:{click:function(a){return t.ubtractDate("week")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"本周"},on:{click:function(a){return t.ChangeDate("week")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:">>"},on:{click:function(a){return t.addDate("week")}}})],1),s("vxe-form-item",{staticClass:"paddingNone formButtomList",attrs:{title:"",field:"",span:"3","title-width":"10"}},[s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"<<"},on:{click:function(a){return t.ubtractDate("month")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:"本月"},on:{click:function(a){return t.ChangeDate("month")}}}),s("vxe-button",{staticClass:"formButtom",attrs:{size:"mini",content:">>"},on:{click:function(a){return t.addDate("month")}}})],1)],1),s("vxe-button",{staticClass:"btn-t",attrs:{type:"submit",status:"primary"},on:{click:t.searchTableData}},[t._v("搜索")])],1),s("div",{staticClass:"box"},[s("div",{staticClass:"box-top"},[t._v(" 原纸购、用、存主要指示看板 "),s("span",[t._v("( "+t._s(t.successFormData.startDate)+" ~ "+t._s(t.successFormData.endDate)+" )")])]),s("div",{staticClass:"box-body"},[s("div",{staticClass:"box-body-item"},[s("div",{staticClass:"orderCardItem orderCardInfo blueColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(0),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.inSumWt)+" 千kg")])])]),s("div",{staticClass:"orderCardItem saleCardInfo blueColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(1),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.inSumTaxAmt)+" 万元")])])]),s("div",{staticClass:"orderCardItem saleCardInfo blueColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(2),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.inSumAvgPrice)+" 元/吨")])])]),s("div",{staticClass:"orderCardItem saleCardInfo blueColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(3),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.sumInStoreRatio)+" ")])])])])]),s("div",{staticClass:"box-body"},[s("div",{staticClass:"box-body-item"},[s("div",{staticClass:"orderCardItem orderCardInfo orangeColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(4),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.outSumWt)+" 千kg")])])]),s("div",{staticClass:"orderCardItem saleCardInfo orangeColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(5),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.outSumTaxAmt)+" 万元")])])]),s("div",{staticClass:"orderCardItem purchaseCardInfo orangeColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(6),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.outSumAvgPrice)+" 元/吨")])])]),s("div",{staticClass:"orderCardItem stockCardInfo orangeColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(7),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.sumStoreOutRatio))])])])])]),s("div",{staticClass:"box-body"},[s("div",{staticClass:"box-body-item"},[s("div",{staticClass:"orderCardItem orderCardInfo pinkColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(8),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.storeSumWt)+" 千kg")])])]),s("div",{staticClass:"orderCardItem saleCardInfo pinkColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(9),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.storeSumTaxAmt)+" 万元")])])]),s("div",{staticClass:"orderCardItem purchaseCardInfo pinkColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(10),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.storeSumAvgPrice)+" 元/吨")])])]),s("div",{staticClass:"orderCardItem stockCardInfo pinkColor"},[s("div",{staticClass:"cardFlexBox"},[t._m(11),s("div",{staticClass:"cardMoney"},[t._v(t._s(t.data.sumInOutRatio))])])])])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("入库重量")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("入库金额")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("入库总均价")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("总购存比")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("出仓重量")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("出仓金额")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("出仓总均价")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("总用存比")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("库存重量")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("库存金额")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("库存总均价")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cardFlexItem cardLeft"},[s("div",{staticClass:"cardTitle"},[t._v("总购用比")])])}],i=s("6abc"),c=s("1472"),o=s.n(c),d=s("6b6c"),n=(s("0f64"),{name:"reportSpaperMonthly",data:function(){return{formData:{startDate:o()().startOf("month").format("YYYY-MM-DD 00:00:00"),endDate:o()().format("YYYY-MM-DD 23:59:59")},successFormData:{},data:[]}},created:function(){this.searchTableData()},methods:{updateStatus:function(t){},ChangeDate:function(t,a){switch(t){case"day":this.formData.startDate=o()().format("YYYY-MM-DD 00:00:00");break;case"week":this.formData.startDate=o()().startOf("week").format("YYYY-MM-DD 00:00:00");break;case"month":this.formData.startDate=o()().startOf("month").format("YYYY-MM-DD 00:00:00");break;default:break}this.formData.endDate=o()().format("YYYY-MM-DD 23:59:59")},ubtractDate:function(t){switch(t){case"day":this.formData.startDate=o()(this.formData.startDate).subtract(1,"day").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).format("YYYY-MM-DD 23:59:59");break;case"week":this.formData.startDate=o()(this.formData.startDate).subtract(1,"week").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).add(1,"week").subtract(1,"day").format("YYYY-MM-DD 23:59:59");break;case"month":this.formData.startDate=o()(this.formData.startDate).subtract(1,"month").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).add(1,"month").format("YYYY-MM-DD 23:59:59");break;default:break}},addDate:function(t){switch(t){case"day":this.formData.startDate=o()(this.formData.startDate).add(1,"day").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).format("YYYY-MM-DD 23:59:59");break;case"week":this.formData.startDate=o()(this.formData.startDate).add(1,"week").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).add(1,"week").subtract(1,"day").format("YYYY-MM-DD 23:59:59");break;case"month":this.formData.startDate=o()(this.formData.startDate).add(1,"month").format("YYYY-MM-DD 00:00:00"),this.formData.endDate=o()(this.formData.startDate).add(1,"month").format("YYYY-MM-DD 23:59:59");break;default:break}},searchTableData:function(){var t=this;d["a"].post("/mrp/proc/list/spSPaperReportMonthly",Object(i["a"])({},this.formData)).then((function(a){200===a.list[1][0].code?(t.data=a.list[0][0],t.successFormData=Object.assign({},t.formData),t.$XModal.message({message:"查询成功!",status:"success"})):t.$XModal.message({message:a.list[1][0].message,status:"warning"}),console.log(t.data)})).catch((function(a){t.$XModal.message({message:"数据加载失败！",status:"warning"})}))}}}),l=n,m=(s("d368"),s("5d22")),f=Object(m["a"])(l,e,r,!1,null,"33be1f72",null);a["default"]=f.exports},d368:function(t,a,s){"use strict";s("db95")},db95:function(t,a,s){}}]);