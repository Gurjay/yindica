(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f98aa496"],{"016d":function(t,e,l){},"070e":function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"es-container"},[l("el-col",{staticClass:"es-form header-bar"},[l("el-form",{attrs:{size:"small","label-width":"0"}},[l("el-col",{staticClass:"es-searchBar  flexLayout_row",staticStyle:{"justify-content":"space-between"}},[l("el-col",{staticClass:"flexLayout_row",staticStyle:{width:"21%"}},[l("el-input",{attrs:{placeholder:"水表编号/客户编号/客户名称...",clearable:"",value:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),l("el-col",{staticClass:"es-btn",staticStyle:{width:"auto"}},[l("div",{staticClass:"es-btn"},[l("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.dialogVisableOpen("添加水表")}}},[t._v(" 添加水表 ")]),l("el-button",{staticClass:"btnPrimary",attrs:{size:"small"}},[t._v("编辑")]),l("el-button",{staticClass:"btnDanger",attrs:{size:"small"}},[t._v("删除")])],1)])],1)],1)],1),l("el-main",{staticClass:"main-content",staticStyle:{padding:"14px"}},[l("el-col",{staticClass:"es-tableList"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"tooltip-effect":"light",data:t.tableData,stripe:"",height:"auto",fit:"",border:"",size:"small","highlight-current-row":""}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",label:"水表编号",width:"210"}}),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",width:"210"}},[l("template",{slot:"header"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"供水公司客户编号",placement:"top-start"}},[l("span",[t._v("客户编号 "),l("i",{staticClass:"el-icon-info"})])])],1)],2),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",label:"客户名称",width:"210"}}),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",label:"。。。",width:"160"}}),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",label:"","min-width":"160"}})],1)],1)],1),l("el-dialog",{attrs:{title:t.dialogTitle,"append-to-body":"",visible:t.dialogVisable,width:"490px",top:"9vh","custom-class":"es-dialog"},on:{"update:visible":function(e){t.dialogVisable=e}}},[l("el-row",{staticClass:"es-form"},[l("el-col",[l("el-scrollbar",{staticStyle:{height:"100%"}},[l("el-form",{attrs:{size:"small","label-width":"85px",rules:t.inforules}},[l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"水表编号"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",[l("template",{slot:"label"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"供水公司客户编号",placement:"top-start"}},[l("span",[l("i",{staticClass:"el-icon-info"}),t._v(" 客户编号")])])],1),l("el-input",{attrs:{placeholder:"请数入"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],2),l("el-form-item",{attrs:{label:"客户名称"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),l("el-form-item",{attrs:{label:"单元"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),l("el-form-item",{attrs:{label:"初始读数"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1)],1)],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"es-btn"},[l("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisable=!1}}},[t._v("取 消")]),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.dialogVisable=!1}}},[t._v("确 定")])],1)])],1)],1)},o=[],a={data:function(){return{dialogVisable:!1,dialogTitle:"",table:[{text:"栋号/单元号）",value:"position",width:"160",fixed:!0},{text:"电表编号",value:"electricmeterNo",width:"280"},{text:"倍率",value:"ratio",width:"60"},{text:"尖峰-初始",value:"jianFengNumber",width:"100"},{text:"峰-初始",value:"fengNumber",width:"100"},{text:"平-初始",value:"pingNumber",width:"100"},{text:"谷-初始",value:"guNumber",width:"100"},{text:"照明-初始",value:"mingNumber",width:"100"},{text:"空调-初始",value:"kongtiaoNumber",width:"100"},{text:"电表类型",value:"electricmeterType",typeId:"baseElectricmeterType",align:"center",width:"80"},{text:"是否独栋",value:"isCombination",typeId:"YesNo",align:"center",width:"80"},{text:"客户名称",value:"customerName",width:"320"},{text:"排序",value:"sequence",width:"80"}],tableData:[{id:1,position:" 3#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是",children:[{id:2,position:"3#A",electricmeterNo:"3203005288734",ratio:"210",isCombination:"否"},{id:3,electricmeterNo:"3203005288734",position:"3#B",isCombination:"否"}]},{id:7,position:" 5#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是"},{id:4,position:" 7#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是",children:[{id:5,position:"7#A",electricmeterNo:"3203005288734",ratio:"210",isCombination:"否"},{id:6,electricmeterNo:"3203005288734",position:"7#B",isCombination:"否"}]}],inforules:{site:[{required:!0,message:"请选择场地位置",trigger:"change"}],person:[{required:!0,message:"请选择场地联系人",trigger:"change"}],type:[{required:!0,message:"请选择活动类别",trigger:"change"}]},form:{name:"",number:"",position:"",type:"1",along:!1,custom:"",election:"",delete:"",multiple:["3203005301038苏春工业坊4A","3203005301038苏春工业坊4B","3203005301038苏春工业坊4C"],a:1,b:0,c:0,d:0,e:0,desc:""}}},mounted:function(){},methods:{dialogVisableOpen:function(t){this.dialogVisable=!0,this.dialogTitle=t}}},s=a,r=(l("8e82"),l("2877")),n=Object(r["a"])(s,i,o,!1,null,null,null);e["default"]=n.exports},"8e82":function(t,e,l){"use strict";l("016d")}}]);