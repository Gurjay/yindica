(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-027d"],{D8DF:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{activeName:["1","2","3"],addform:{name:"SQL1",netblock:"1",action:"1",type:"1"},add3:!1,cloudDataBaseTable:[{name:"SQL1",type:"数据库",databaseType:"MySql5.6(事务型)",netType:"公网链接",version:"5.7",netblock:"经典网络",white:"177.142.21.11-18,172.168.11.44",cpu:"4",memory:"6",cloud:"2C 8G",size:"500G",action:"新增",node:"2",desc:"--"},{name:"ADS2",type:"数据库",databaseType:"MySql5.6(分析型)",netType:"内网链接",version:"1.0",netblock:"公众区",white:"172.168.11.31-35",cpu:"8",cloud:"4C 8G",memory:"16",size:"750G",node:"58",action:"变更",desc:"--"},{name:"RDS1",type:"数据库",databaseType:"Redis2.8",netType:"集群",version:"2.8",netblock:"资源区",white:"188.162.10.2",cpu:"4",cloud:"4G主从高配版",memory:"16",size:"250G",action:"回收",node:"--",desc:"--"},{name:"RDS2",type:"分析型数据库",databaseType:"Redis4.0",netType:"内网链接",version:"--",netblock:"公众区",cloud:"8G主从高配版",white:"--",cpu:"16",memory:"64",size:"750G",node:"--",action:"新增",desc:"--"}],boxShow:!1,add:!1,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(l("c8GF"),l("KHd+")),s=Object(o.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form_tool"},[l("div",{staticClass:"form_tool_bar",on:{click:e.sentBoxShow}},[e._v("\n        云数据库\n        "),l("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[e.boxShow?l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:e.sentBoxShow}}):l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:e.sentBoxShow}})],1)]),e._v(" "),e.boxShow?l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:e.cloudDataBaseTable,"max-height":"322px"}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"数据库名称",prop:"name","min-width":"120px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v("\n                            "+e._s(t.row.name)+"\n                        ")])]}}],null,!1,3142312609)}),e._v(" "),l("el-table-column",{attrs:{label:"网络区域",prop:"netblock",width:"100px"}}),e._v(" "),l("el-table-column",{attrs:{label:"数据库类型",prop:"databaseType",width:"150px"}}),e._v(" "),l("el-table-column",{attrs:{label:"云服务器规格","min-width":"100px",prop:"cloud","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v("\n                            "+e._s(t.row.cloud)+"\n                        ")])]}}],null,!1,1427186711)}),e._v(" "),l("el-table-column",{attrs:{label:"存储空间",prop:"size","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.size))])]}}],null,!1,601952707)}),e._v(" "),l("el-table-column",{attrs:{label:"节点数",prop:"node","min-width":"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.node))])]}}],null,!1,73974118)}),e._v(" "),l("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px"}}),e._v(" "),l("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):e._e(),e._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.add3,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(t){e.add3=t}}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:e.addform,size:"mini","label-width":"120px",rules:e.rules}},[l("el-col",{attrs:{span:11}},["1"==e.addform.action?l("el-form-item",{attrs:{label:"数据库名称",prop:"name"}},[l("el-input",{attrs:{disabled:"",placeholder:"请输入"},model:{value:e.addform.name,callback:function(t){e.$set(e.addform,"name",t)},expression:"addform.name"}})],1):l("el-form-item",{attrs:{label:"数据库名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addform.name,callback:function(t){e.$set(e.addform,"name",t)},expression:"addform.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"网络区域"}},[l("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:e.addform.netblock,callback:function(t){e.$set(e.addform,"netblock",t)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"资源区",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"公众区",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"互联网",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"其他",value:"4"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"数据库类型"}},[l("el-select",{attrs:{placeholder:"请输入内容"},model:{value:e.addform.type,callback:function(t){e.$set(e.addform,"type",t)},expression:"addform.type"}},[l("el-option",{attrs:{label:"MySql5.6(事务型)",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"MySql5.6(海量数据)",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"MySql5.7(事务型)",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"MySql5.7(海量数据)",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"Redis2.8",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"Redis4.0",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"PostgerSQL_10",value:"7"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"云服务器规格"}},["5"!=e.addform.type&&"6"!=e.addform.type?l("el-select",{attrs:{placeholder:"请选择",value:1,size:"small"}},e._l(e.destArray,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[e._v(e._s(t.address||"--"))])])}),1):l("el-select",{attrs:{placeholder:"请选择",value:1,size:"small"}},e._l(e.destArray2,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#333","font-size":"12px","padding-right":"10px"}},[e._v(e._s(t.address||"--"))])])}),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"存储空间"}},["2"==e.addform.action?l("div",{staticClass:"flexLayout_row"},[l("el-select",{attrs:{value:"100G",placeholder:"请输入内容"}}),e._v(" "),l("div",{staticStyle:{padding:"0 5px","text-align":"center"}},[e._v("→")]),e._v(" "),l("el-select",{attrs:{value:"250G",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"100G",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"250G",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"400G",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"500G",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"750G",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"1T",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"2T",value:"7"}})],1)],1):l("el-select",{attrs:{value:"250G",placeholder:"请输入内容"}},[l("el-option",{attrs:{label:"100G",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"250G",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"400G",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"500G",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"750G",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"1T",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"2T",value:"7"}})],1)],1)],1),e._v(" "),"5"!=e.addform.type&&"6"!=e.addform.type?l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"节点数"}},["2"==e.addform.action?l("div",{staticClass:"flexLayout_row"},[l("el-input",{attrs:{value:"2",placeholder:"请输入内容"}}),e._v(" "),l("div",{staticStyle:{padding:"0 5px","text-align":"center"}},[e._v("→")]),e._v(" "),l("el-input",{attrs:{value:"15",placeholder:"请输入内容"}})],1):l("el-input",{attrs:{value:"2",placeholder:"请输入"}})],1)],1):e._e(),e._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",rows:2,disabled:"",placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add3=!1}}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add3=!1}}},[e._v("取 消")])],1)])],1)},[],!1,null,null,null);t.default=s.exports},c8GF:function(e,t,l){"use strict";var a=l("fxMO");l.n(a).a},fxMO:function(e,t,l){}}]);