(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-900b"],{"9ami":function(t,e,a){"use strict";var l=a("mJPN");a.n(l).a},Q4Zx:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,add3:!1,transferDataBaseTable:[{name:"DTS1",databaseType:"MySql5.6(事务型)",dataBase:"msql_op",databaseType2:"MySql5.6(事务型)",dataBase2:"new_data1",action:"新增",serviceType:"数据迁移"},{name:"DTS2",databaseType:"PostgreSQL10",dataBase:"post_nb",databaseType2:"PostgreSQL10",dataBase2:"new_post_nb",action:"变更",serviceType:"数据订阅"},{name:"DTS3",databaseType:"MySql5.6(分析型)",dataBase:"new_sql_nb",databaseType2:"MySql5.6(分析型)",dataBase2:"new_sql_nb",action:"回收",serviceType:"数据同步"}],boxShow:!1,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(a("9ami"),a("KHd+")),s=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_tool"},[a("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        数据传输\n         "),a("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?a("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):a("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?a("div",{staticClass:"its_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.transferDataBaseTable,"max-height":"322px"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",border:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"源数据库类型",prop:"databaseType","min-width":"100px"}}),t._v(" "),a("el-table-column",{attrs:{label:"源数据库名称",prop:"dataBase","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s(e.row.dataBase)+"\n                        ")]}}],null,!1,940214776)}),t._v(" "),a("el-table-column",{attrs:{label:"目标数据库类型",prop:"databaseType2","min-width":"100px"}}),t._v(" "),a("el-table-column",{attrs:{label:"目标数据库名称",prop:"dataBase2","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            "+t._s(e.row.dataBase2)+"\n                        ")]}}],null,!1,4063513194)}),t._v(" "),a("el-table-column",{attrs:{label:"服务类型",prop:"serviceType","min-width":"80px"}}),t._v(" "),a("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px","show-overflow-tooltip":""}},[[a("span",[t._v("\n                            --\n                        ")])]],2),t._v(" "),a("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):t._e(),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add3,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add3=e}}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"动作"}},[a("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.addform.action,callback:function(e){t.$set(t.addform,"action",e)},expression:"addform.action"}},[a("el-option",{attrs:{label:"新增",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"变更",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"回收",value:"3"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"服务类型"}},[a("el-select",{attrs:{placeholder:"请输入内容"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[a("el-option",{attrs:{label:"数据迁移",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"数据订阅",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"数据同步",value:"3"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"源数据库",prop:"name"}},[a("el-col",{attrs:{span:9}},[a("el-select",{attrs:{placeholder:"请选择数据类型"},model:{value:t.addform.type,callback:function(e){t.$set(t.addform,"type",e)},expression:"addform.type"}},[a("el-option",{attrs:{label:"MySql5.6(事务型)",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.6(海量数据)",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.7(事务型)",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.7(海量数据)",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"Redis2.8",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"Redis4.0",value:"6"}}),t._v(" "),a("el-option",{attrs:{label:"PostgerSQL_10",value:"7"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入数据库名称"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"目标数据库",prop:"name"}},[a("el-col",{attrs:{span:9}},[a("el-select",{attrs:{placeholder:"请选择数据类型"},model:{value:t.addform.type2,callback:function(e){t.$set(t.addform,"type2",e)},expression:"addform.type2"}},[a("el-option",{attrs:{label:"MySql5.6(事务型)",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.6(海量数据)",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.7(事务型)",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"MySql5.7(海量数据)",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"Redis2.8",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"Redis4.0",value:"6"}}),t._v(" "),a("el-option",{attrs:{label:"PostgerSQL_10",value:"7"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"padding-left":"5px"},attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入数据库名称"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"用途",prop:"name"}},[a("el-input",{attrs:{type:"textarea",disabled:"",rows:2,placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=s.exports},mJPN:function(t,e,a){}}]);