(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36751c7e"],{"08a1":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"es-container"},[l("el-col",{staticClass:"es-form header-bar"},[l("el-form",{attrs:{size:"small","label-width":"0"}},[l("el-col",{staticClass:"es-searchBar  flexLayout_row",staticStyle:{"justify-content":"space-between"}},[l("el-col",{staticClass:"flexLayout_row es-btn",staticStyle:{width:"auto"}},[l("el-col",{staticClass:"flexLayout_row selectGroup",staticStyle:{width:"164px","margin-right":"10px"}},[l("div",{staticStyle:{padding:"0 14px",color:"#909399",width:"77px","padding-right":"0"}},[t._v("状态")]),l("el-select",{attrs:{value:"全部",placeholder:"请选择"}},[l("el-option",{attrs:{label:"全部",value:"1"}}),l("el-option",{attrs:{label:"启用",value:"2"}}),l("el-option",{attrs:{label:"停用",value:"3"}})],1)],1),l("el-input",{staticStyle:{width:"auto","margin-right":"10px"},attrs:{placeholder:"名称/编号/联系信息...",clearable:"",value:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("el-button",{staticClass:"btnInfo",staticStyle:{padding:"7px","font-size":"15px"},attrs:{icon:"el-icon-search",size:"small"}})],1),l("el-col",{staticClass:"es-btn",staticStyle:{width:"auto"}},[l("div",{staticClass:"es-btn"},[l("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.dialogVisableOpen("添加供应商")}}},[t._v(" 添加供应商 ")]),l("el-button",{staticClass:"btnPrimary",attrs:{size:"small"}},[t._v("编辑")]),l("el-button",{staticClass:"btnDanger",attrs:{size:"small"}},[t._v("删除")])],1)])],1)],1)],1),l("el-main",{staticClass:"main-content",staticStyle:{padding:"14px"}},[l("el-col",{staticClass:"es-tableList"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"tooltip-effect":"light",data:t.tableData,stripe:"",height:"auto",fit:"",border:"",size:"small","highlight-current-row":""}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),l("el-table-column",{attrs:{prop:"classroom","show-overflow-tooltip":"",width:"160"}},[l("template",{slot:"header"},[l("span",[t._v("供应商编号")])])],2),l("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"供应商名称",width:"160"}}),l("el-table-column",{attrs:{prop:"status","show-overflow-tooltip":"",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["启用"==e.row.status?l("span",{staticStyle:{color:"#67c23a"}},[t._v("启用")]):"禁用"==e.row.status?l("span",{staticStyle:{color:"#ff4949"}},[t._v("禁用")]):t._e()]}}])}),l("el-table-column",{attrs:{prop:"person","show-overflow-tooltip":"",label:"联系人",width:"160"}},[[l("span",[t._v("印迪卡 13616886766")])]],2),l("el-table-column",{attrs:{prop:"telephone","show-overflow-tooltip":"",label:"供应商电话",width:"160"}}),l("el-table-column",{attrs:{prop:"Emaile","show-overflow-tooltip":"",label:"。。。","min-width":"160"}}),l("el-table-column",{attrs:{prop:"Emaile","show-overflow-tooltip":"",label:"地址","min-width":"210"}}),l("el-table-column",{attrs:{prop:"operation",width:"140",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{staticClass:"table-operation"},["禁用"==e.row.status?l("el-button",{staticClass:"table-operationBtn",attrs:{plain:"",type:"success"}},[t._v("启用")]):l("el-button",{staticClass:"table-operationBtn",attrs:{plain:"",type:"danger"}},[t._v("禁用")]),l("el-button",{staticClass:"table-operationBtn",attrs:{plain:"",type:"danger"}},[t._v("删除")]),l("el-button",{staticClass:"table-operationBtn",attrs:{plain:"",type:"primary"}},[t._v("下载")])],1)]}}])})],1)],1)],1),l("el-footer",{staticClass:"footer-bar",attrs:{height:"49px"}},[l("el-pagination",{attrs:{"current-page":1,"page-sizes":[25,50,80,100],"page-size":49,background:"",layout:"total, sizes, prev, pager, next, jumper",total:210}})],1),l("el-dialog",{attrs:{title:t.dialogTitle,"append-to-body":"",visible:t.dialogVisable,width:"777px",top:"9vh","custom-class":"es-dialog"},on:{"update:visible":function(e){t.dialogVisable=e}}},[l("el-row",{staticClass:"es-form"},[l("el-col",[l("el-scrollbar",{staticStyle:{height:"100%"}},[l("el-form",{attrs:{size:"small","label-width":"100px",rules:t.inforules}},[l("el-col",{attrs:{span:23}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"供应商编号"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{attrs:{label:"供应商级别"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),l("el-form-item",{attrs:{label:"联系人"}},[l("el-input",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),l("el-form-item",{attrs:{label:"邮件"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"供应商名称"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{attrs:{label:"供应商电话"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),l("el-form-item",{attrs:{label:"手机"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),l("el-form-item",{attrs:{label:"传真"}},[l("el-select",{attrs:{placeholder:"请数入"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1)],1),l("el-col",[l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{attrs:{label:"主营范畴"}},[l("el-select",{attrs:{multiple:"",filterable:"","allow-create":"",placeholder:"请输入"},model:{value:t.form.multiple,callback:function(e){t.$set(t.form,"multiple",e)},expression:"form.multiple"}})],1),l("el-form-item",{attrs:{label:"开户银行"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{attrs:{label:"汇款账户"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{attrs:{label:"备注"}},[l("el-input",{attrs:{autosize:"",type:"textarea",placeholder:"请输入"},model:{value:t.form.custom,callback:function(e){t.$set(t.form,"custom",e)},expression:"form.custom"}})],1),l("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"附件"}},[l("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:"",limit:3,"file-list":t.fileList}},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("提示：上传文件大小不超过50M")])],1)],1)],1)],1)],1)],1)],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"es-btn"},[l("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisable=!1}}},[t._v("取 消")]),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.dialogVisable=!1}}},[t._v("确 定")])],1)])],1)],1)},o=[],s={data:function(){return{fileList:[],dialogVisable:!1,dialogTitle:"",table:[{text:"栋号/单元号）",value:"position",width:"160",fixed:!0},{text:"电表编号",value:"electricmeterNo",width:"280"},{text:"倍率",value:"ratio",width:"60"},{text:"尖峰-初始",value:"jianFengNumber",width:"100"},{text:"峰-初始",value:"fengNumber",width:"100"},{text:"平-初始",value:"pingNumber",width:"100"},{text:"谷-初始",value:"guNumber",width:"100"},{text:"照明-初始",value:"mingNumber",width:"100"},{text:"空调-初始",value:"kongtiaoNumber",width:"100"},{text:"电表类型",value:"electricmeterType",typeId:"baseElectricmeterType",align:"center",width:"80"},{text:"是否独栋",value:"isCombination",typeId:"YesNo",align:"center",width:"80"},{text:"客户名称",value:"customerName",width:"320"},{text:"排序",value:"sequence",width:"80"}],tableData:[{id:1,position:" 3#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是",status:"启用"},{id:7,position:" 5#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是",status:"禁用"},{id:4,position:" 7#",electricmeterNo:"3203005288734",ratio:"49",isCombination:"是",status:"禁用"}],inforules:{site:[{required:!0,message:"请选择场地位置",trigger:"change"}],person:[{required:!0,message:"请选择场地联系人",trigger:"change"}],type:[{required:!0,message:"请选择活动类别",trigger:"change"}]},form:{name:"",number:"",position:"",type:"1",along:!1,custom:"",election:"",delete:"",multiple:["手机","电视","路由器"],a:1,b:0,c:0,d:0,e:0,desc:""}}},mounted:function(){},methods:{dialogVisableOpen:function(t){this.dialogVisable=!0,this.dialogTitle=t}}},i=s,r=(l("166c"),l("2877")),n=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=n.exports},"166c":function(t,e,l){"use strict";l("6f3e")},"6f3e":function(t,e,l){}}]);