(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a56f","chunk-b1ec","chunk-6739"],{"7vB5":function(t,e,o){"use strict";var l=o("MseL");o.n(l).a},BT33:function(t,e,o){"use strict";o.r(e);var l=o("PgpE"),a=o("hGjr"),s=o("jcYz"),n=o("BdM7"),i={components:{childProjectsDetails:l.default,childTable:s.default,childTable2:n.default},props:{detailsView:{type:Boolean,default:!1}},data:function(){return{details:!1,activeNamesTest:["1","2","3"],activeName:"项目",treelink:1,form:{name:"",type:"",moom1:"",moom2:"",moom3:"",money1:"",money2:"",businessSystem:"自服务系统"},list:["可行性研究报告.txt","中标通知书.pdf","项目申请批文件.pdf","合同及其附件.doc","招标文件.txt","投标文件.doc","开工申报.pdf","需求规格说明书.txt","详细说明书.pdf","投标文件.pdf","可行性研究报告.txt"],fiscalTable:[{index:1,time:"2020-09-26 14:05:28",number:"200"},{index:2,time:"2021-03-11 12:00:01",number:"160"}],fiscalTable2:[{name:"数据接口共享平台建设项目",one:"80",two:"50"},{name:"咨询服务建设",one:"40",two:"20"}],pageAll:[],pickerOptions:{shortcuts:[{text:"最近三个月",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-7776e6),t.$emit("pick",[o,e])}},{text:"最近半年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-157248e5),t.$emit("pick",[o,e])}},{text:"最近一年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-31536e6),t.$emit("pick",[o,e])}}]}}},computed:{},mounted:function(){this.pageAll=[a.projects[0],a.projects[1]]},activated:function(){},created:function(){},watch:{},methods:{goToView:function(t){this.$router.push(this.$router.push({name:"projectsView",params:{id:t.id}}))},handle:function(t,e,o){this.treelink=t.id,console.log(t.id,"ssss")}}},r=(o("RpDn"),o("ODrK"),o("KHd+")),c=Object(r.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"flexLayout_column;width:100%"},[o("el-col",{staticClass:"nb_static"},[o("el-row",{attrs:{gutter:5}},[o("el-col",{staticClass:"block",attrs:{span:7}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("项目数量统计")])]),t._v(" "),o("el-col",{attrs:{span:7}},[o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",[t._v("项目总数:")]),t._v(" "),o("span",[t._v("2个")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",[t._v("子项总数:")]),t._v(" "),o("span",[t._v("9个")])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",{staticStyle:{flex:"4"}},[t._v("建设类项目:")]),t._v(" "),o("span",{staticStyle:{flex:"1"}},[t._v("1个")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",{staticStyle:{flex:"4"}},[t._v("建设类子项:")]),t._v(" "),o("span",{staticStyle:{flex:"1"}},[t._v("5个")])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",{staticStyle:{flex:"4"}},[t._v("维护类项目:")]),t._v(" "),o("span",{staticStyle:{flex:"1"}},[t._v("1个")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row kkk"},[o("h3",{staticStyle:{flex:"4"}},[t._v("维护类子项:")]),t._v(" "),o("span",{staticStyle:{flex:"1"}},[t._v("4个")])])],1)],1)],1),t._v(" "),o("el-col",{staticClass:"block",attrs:{span:10}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("项目金额统计")])]),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("批复金额:")]),t._v(" "),o("span",[t._v("3488万")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("财政拨付:")]),t._v(" "),o("span",[t._v("1830万")])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("招标金额:")]),t._v(" "),o("span",[t._v("4200万")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("合同金额:")]),t._v(" "),o("span",[t._v("4000万")])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("支付总额:")]),t._v(" "),o("span",[t._v("1626万")])])],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("决算金额:")]),t._v(" "),o("span",[t._v("1234万")])])],1)],1)],1),t._v(" "),o("el-col",{staticClass:"block",attrs:{span:7}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("押金&保证金统计")])]),t._v(" "),o("el-col",{attrs:{span:13}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("已退还保证金:")]),t._v(" "),o("span",[t._v("300万")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("未退还保证金:")]),t._v(" "),o("span",[t._v("50万")])])],1),t._v(" "),o("el-col",{attrs:{span:11}},[o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("已退还押金:")]),t._v(" "),o("span",[t._v("30万")])]),t._v(" "),o("el-col",{staticClass:"flexLayout_row"},[o("h3",[t._v("未退还押金:")]),t._v(" "),o("span",[t._v("30万")])])],1)],1)],1)],1)],1),t._v(" "),o("el-col",{staticClass:"nb_projectsSearch"},[o("div",{staticClass:"filter-container"},[o("el-col",{staticStyle:{margin:"4px 0 4px 4px"},attrs:{span:24}},[o("el-button",{staticStyle:{padding:"5px"},attrs:{plain:"",type:"text"},on:{click:function(e){t.detailsView=!t.detailsView}}},[t._v(t._s(t.detailsView?"隐藏筛选":"高级筛选"))]),t._v(" "),o("el-button",{staticStyle:{padding:"5px"},attrs:{plain:"",type:"text"}},[t._v("导出")])],1)],1),t._v(" "),1==t.detailsView?o("div",{staticClass:"its_det",staticStyle:{margin:"0"}},[o("el-col",{staticClass:"its_form_row",staticStyle:{"padding-bottom":"6px"},attrs:{span:23}},[o("el-form",{attrs:{"label-width":"120px"}},[o("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[o("el-row",{staticClass:"its_card_body"},[o("div",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"项目名称"}},[o("itsnow-text",{model:{value:t.form.object,callback:function(e){t.$set(t.form,"object",e)},expression:"form.object"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"项目类型"}},[o("el-select",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"子项名称"}},[o("itsnow-text",{model:{value:t.form.object,callback:function(e){t.$set(t.form,"object",e)},expression:"form.object"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"子项阶段"}},[o("el-select",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"已退还保证金"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"未退还保证金"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"已退还押金"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"未退还押金"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"批复金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"拨付金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"招标金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"中标金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"合同金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"支付总额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"决算金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"结算金额(万)"}},[o("el-col",{staticClass:"flexLayout_row"},[o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1),t._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"-webkit-center",width:"35px"}},[t._v("至")]),t._v(" "),o("el-col",[o("itsnow-text",{model:{value:t.form.money1,callback:function(e){t.$set(t.form,"money1",e)},expression:"form.money1"}})],1)],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"采购时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom1,callback:function(e){t.$set(t.form,"moom1",e)},expression:"form.moom1"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"拨付时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom2,callback:function(e){t.$set(t.form,"moom2",e)},expression:"form.moom2"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"招标时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom1,callback:function(e){t.$set(t.form,"moom1",e)},expression:"form.moom1"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"开工时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom1,callback:function(e){t.$set(t.form,"moom1",e)},expression:"form.moom1"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"合同签订时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom1,callback:function(e){t.$set(t.form,"moom1",e)},expression:"form.moom1"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"支付时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom2,callback:function(e){t.$set(t.form,"moom2",e)},expression:"form.moom2"}})],1),t._v(" "),o("el-form-item",{staticClass:"sub_nb_moom",attrs:{label:"决算时间"}},[o("el-date-picker",{attrs:{size:"mini",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始","end-placeholder":"结束","picker-options":t.pickerOptions},model:{value:t.form.moom2,callback:function(e){t.$set(t.form,"moom2",e)},expression:"form.moom2"}})],1)],1)],1),t._v(" "),o("div",[o("el-col",{staticClass:"sub_search_btn",staticStyle:{padding:"0","padding-top":"6px"},attrs:{span:8}},[o("el-button",[t._v("重 置")]),t._v(" "),o("el-button",{attrs:{type:"primary"}},[t._v("查 找")])],1)],1)])],1)],1)],1)],1):t._e()]),t._v(" "),o("el-col",{attrs:{span:24}},[o("div",{staticStyle:{position:"relative","border-right":"1px solid #eee"}},[o("div",{staticClass:"its_table nb_table"},[o("el-table",{attrs:{data:t.pageAll,"highlight-current-row":"",border:""},on:{"row-click":t.handle}},[o("el-table-column",{attrs:{width:"55",prop:"id",label:"序号",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-col",{staticStyle:{"padding-left":"53px",background:"#eee"}},["建设类项目"==e.row.type?o("childTable"):t._e(),t._v(" "),"维护类项目"==e.row.type?o("childTable2"):t._e()],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{on:{click:function(o){return t.goToView(e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"type",label:"项目类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["维护类项目"==e.row.type?o("el-button",{staticStyle:{padding:"2px 4px","pointer-events":"none"},attrs:{size:"mini",type:"warning",plain:""}},[t._v("维护类项目")]):t._e(),t._v(" "),"建设类项目"==e.row.type?o("el-button",{staticStyle:{padding:"2px 4px","pointer-events":"none"},attrs:{size:"mini",type:"success",plain:""}},[t._v("建设类项目")]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"money1",label:"批复金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"money2",label:"拨付金额(万)","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{"popper-class":"sub_nb_pop",placement:"top-start",width:"350",trigger:"hover"}},[o("div",{staticClass:"its_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.fiscalTable}},[o("el-table-column",{attrs:{type:"index",label:"序号"}}),t._v(" "),o("el-table-column",{attrs:{label:"拨款时间",prop:"time"}}),t._v(" "),o("el-table-column",{attrs:{label:"拨付金额(万)",prop:"number"}})],1)],1),t._v(" "),o("a",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.money2))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"money1",label:"招标金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"money2",label:"合同金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"payfor",label:"支付总额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"money2",label:"决算金额(万)","min-width":"100"}})],1)],1)])]),t._v(" "),o("div",{staticClass:"block its_pagination",staticStyle:{border:"none",position:"fixed",bottom:"2px",left:"0"}},[o("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:4,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1)],1)},[],!1,null,"74831195",null);e.default=c.exports},BdM7:function(t,e,o){"use strict";o.r(e);var l=o("PgpE"),a=o("hGjr"),s={components:{childProjectsDetails:l.default},props:{detailsView:{type:Boolean,default:!1}},data:function(){return{details:!1,activeNamesTest:["1","2","3"],radio1:1,radio2:2,detailsView:!1,treelink:1,form:{name:"",type:"",moom1:"",moom2:"",money1:"",money2:"",businessSystem:"自服务系统"},list:["可行性研究报告.txt","中标通知书.pdf","子项申请批文件.pdf","合同及其附件.doc","招标文件.txt","投标文件.doc","开工申报.pdf","需求规格说明书.txt","详细说明书.pdf","投标文件.pdf","可行性研究报告.txt"],fiscalTable:[{index:1,time:"2020-09-26 14:05:28",number:"200"},{index:2,time:"2021-03-11 12:00:01",number:"160"}],fiscalTable2:[{name:"大数据分析子项",one:"200",two:"350"},{name:"业务系统运维子项",one:"410",two:"210"}],pageAll:[],pickerOptions:{shortcuts:[{text:"最近三个月",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-7776e6),t.$emit("pick",[o,e])}},{text:"最近半年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-157248e5),t.$emit("pick",[o,e])}},{text:"最近一年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-31536e6),t.$emit("pick",[o,e])}}]}}},computed:{},mounted:function(){this.pageAll=a.childProjects2},activated:function(){},created:function(){},watch:{},methods:{rowAction:function(t,e,o){"edit"===t&&this.$router.push(this.$router.push({name:"projectsEdit"}))},handle:function(t,e,o){this.treelink=t.id,console.log(t.id,"ssss")}}},n=(o("Yg70"),o("7vB5"),o("KHd+")),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",[o("el-table",{attrs:{data:t.pageAll,"highlight-current-row":"",border:""},on:{"row-click":t.handle}},[o("el-table-column",{attrs:{width:"55",type:"index",label:"序号",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"子项名称","min-width":"140","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{on:{click:function(e){t.details=!0}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"builder",label:"承建单位",width:"90","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"payfor",label:"中标金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"tender",label:"招标金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"contract",label:"合同金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"payfor",label:"支付总额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{label:"保证金(万)",prop:"one","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.two)+"\n                "),"20"==e.row.two?o("span",{staticClass:"nb_one_over"},[t._v("已退还")]):o("span",{staticClass:"nb_one_never"},[t._v("未退还")])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"押金(万)",prop:"two","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.two)+"\n                "),"20"==e.row.two?o("span",{staticClass:"nb_one_over"},[t._v("已退还")]):o("span",{staticClass:"nb_one_never"},[t._v("未退还")])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"子项阶段",prop:"status","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[200==e.row.tender?o("span",{staticStyle:{color:"#ffaf5b"}},[t._v("建设中")]):o("span",{staticStyle:{color:"#02bf08"}},[t._v("已验收")])]}}])})],1),t._v(" "),o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.details,title:"查看",width:"1200px",top:"5vh"},on:{"update:visible":function(e){t.details=e}}},[o("childProjectsDetails",{attrs:{projectsType:t.projectsType}}),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.details=!1}}},[t._v("取 消")])],1)],1)],1)},[],!1,null,"3eefedcc",null);e.default=i.exports},LxSe:function(t,e,o){"use strict";var l=o("O3rb");o.n(l).a},MseL:function(t,e,o){},O3rb:function(t,e,o){},ODrK:function(t,e,o){"use strict";var l=o("metM");o.n(l).a},RpDn:function(t,e,o){"use strict";var l=o("RrZ3");o.n(l).a},RrZ3:function(t,e,o){},Yg70:function(t,e,o){"use strict";var l=o("chTB");o.n(l).a},cbzA:function(t,e,o){},chTB:function(t,e,o){},gMmh:function(t,e,o){"use strict";var l=o("cbzA");o.n(l).a},jcYz:function(t,e,o){"use strict";o.r(e);var l=o("PgpE"),a=o("hGjr"),s={components:{childProjectsDetails:l.default},props:{detailsView:{type:Boolean,default:!1}},data:function(){return{details:!1,activeNamesTest:["1","2","3"],radio1:1,radio2:2,detailsView:!1,treelink:1,form:{name:"",type:"",moom1:"",moom2:"",money1:"",money2:"",businessSystem:"自服务系统"},list:["可行性研究报告.txt","中标通知书.pdf","子项申请批文件.pdf","合同及其附件.doc","招标文件.txt","投标文件.doc","开工申报.pdf","需求规格说明书.txt","详细说明书.pdf","投标文件.pdf","可行性研究报告.txt"],fiscalTable:[{index:1,time:"2020-09-26 14:05:28",number:"200"},{index:2,time:"2021-03-11 12:00:01",number:"160"}],fiscalTable2:[{name:"大数据分析子项",one:"200",two:"350"},{name:"业务系统运维子项",one:"410",two:"210"}],pageAll:[],pickerOptions:{shortcuts:[{text:"最近三个月",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-7776e6),t.$emit("pick",[o,e])}},{text:"最近半年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-157248e5),t.$emit("pick",[o,e])}},{text:"最近一年",onClick:function(t){var e=new Date,o=new Date;o.setTime(o.getTime()-31536e6),t.$emit("pick",[o,e])}}]}}},computed:{},mounted:function(){this.pageAll=a.childProjects},activated:function(){},created:function(){},watch:{},methods:{rowAction:function(t,e,o){"edit"===t&&this.$router.push(this.$router.push({name:"projectsEdit"}))},handle:function(t,e,o){this.treelink=t.id,console.log(t.id,"ssss")}}},n=(o("gMmh"),o("LxSe"),o("KHd+")),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",[o("el-table",{attrs:{data:t.pageAll,"highlight-current-row":"",border:""},on:{"row-click":t.handle}},[o("el-table-column",{attrs:{width:"55",type:"index",label:"序号",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"子项名称","min-width":"140","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{on:{click:function(e){t.details=!0}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"builder",label:"承建单位",width:"90","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"payfor",label:"中标金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"tender",label:"招标金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"contract",label:"合同金额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{prop:"payfor",label:"支付总额(万)","min-width":"100"}}),t._v(" "),o("el-table-column",{attrs:{label:"保证金(万)",prop:"one","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.two)+"\n                "),"20"==e.row.two?o("span",{staticClass:"nb_one_over"},[t._v("已退还")]):o("span",{staticClass:"nb_one_never"},[t._v("未退还")])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"押金(万)",prop:"two","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.two)+"\n                "),"20"==e.row.two?o("span",{staticClass:"nb_one_over"},[t._v("已退还")]):o("span",{staticClass:"nb_one_never"},[t._v("未退还")])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"子项阶段",prop:"status","min-width":"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[200==e.row.tender?o("span",{staticStyle:{color:"#ffaf5b"}},[t._v("建设中")]):o("span",{staticStyle:{color:"#02bf08"}},[t._v("已验收")])]}}])})],1),t._v(" "),o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.details,title:"查看",width:"1200px",top:"5vh"},on:{"update:visible":function(e){t.details=e}}},[o("childProjectsDetails",{attrs:{projectsType:t.projectsType}}),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.details=!1}}},[t._v("取 消")])],1)],1)],1)},[],!1,null,"76108158",null);e.default=i.exports},metM:function(t,e,o){}}]);