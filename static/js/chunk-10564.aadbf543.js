(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-10564"],{"3CVR":function(t,e,l){"use strict";var a=l("4dys");l.n(a).a},"4dys":function(t,e,l){},NG7F:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,add3:!1,edasTable:[{name:"--",sent:"myInfo_public",get:"agent_info",type:"普通消息",desc:"--",action:"新增"},{name:"cloudInfo",sent:"cloud_Template",get:"service_mes",type:"全局顺序消息",desc:"--",action:"变更"},{name:"getSet",sent:"public_info",get:"service_mes",type:"全局顺序消息",desc:"--",action:"回收"}],boxShow:!0,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},o=(l("3CVR"),l("KHd+")),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"form_tool"},[l("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n     分布式存储\n       "),l("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):l("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?l("div",{staticClass:"its_table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.edasTable,"max-height":"322px"}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"消息标识",prop:"name","min-width":"100px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[l("span",[t._v("\n                         "+t._s(e.row.name)+"\n                     ")])]}}],null,!1,4029909921)}),t._v(" "),l("el-table-column",{attrs:{label:"发送主题","min-width":"80px",prop:"sent","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"接收主题","min-width":"80px",prop:"get","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"消息类型",prop:"type","min-width":"100px"}}),t._v(" "),l("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"}})],1)],1):t._e(),t._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:t.add3,title:"编辑",width:"1040px",top:"5vh"},on:{"update:visible":function(e){t.add3=e}}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{attrs:{model:t.addform,size:"mini","label-width":"120px",rules:t.rules}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"动作"}},[l("el-select",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.addform.action,callback:function(e){t.$set(t.addform,"action",e)},expression:"addform.action"}},[l("el-option",{attrs:{label:"新增",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"变更",value:"2"}}),t._v(" "),l("el-option",{attrs:{label:"回收",value:"3"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"消息类型"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addform.netblock,callback:function(e){t.$set(t.addform,"netblock",e)},expression:"addform.netblock"}},[l("el-option",{attrs:{label:"普通消息",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"全局顺序消息",value:"2"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"消息标识"}},[l("el-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11,offset:1}},[l("el-form-item",{attrs:{label:"发送主题"}},[l("el-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"接收主题"}},[l("el-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:23}},[l("el-form-item",{attrs:{label:"用途",prop:"name"}},[l("el-input",{attrs:{type:"textarea",disabled:"",rows:2,placeholder:"请填写此次申请的业务用途，如：用于部署此系统的WEB应用"}})],1)],1)],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.add3=!1}}},[t._v("取 消")])],1)])],1)},[],!1,null,null,null);e.default=s.exports}}]);