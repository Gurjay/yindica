(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22a9"],{"+Ltu":function(t,e,o){"use strict";var n=o("gmEs");o.n(n).a},P3Uv:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{addform:{name:"A1",netblock:"",netblock2:"",action:"1"},add:!1,edasTable:[{name:"--",sent:"myInfo_public",get:"agent_info",type:"普通消息",desc:"--"},{name:"cloudInfo",sent:"cloud_Template",get:"service_mes",type:"全局顺序消息",desc:"--"}],boxShow:!0,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},l=(o("+Ltu"),o("KHd+")),a=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form_tool"},[o("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n      分布式存储\n      "),o("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):o("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?o("div",{staticClass:"its_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.edasTable,"max-height":"322px"}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"消息标识",prop:"name","min-width":"100px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("\n                          "+t._s(e.row.name)+"\n                      ")])]}}],null,!1,327731361)}),t._v(" "),o("el-table-column",{attrs:{label:"发送主题","min-width":"80px",prop:"sent","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{label:"接收主题","min-width":"80px",prop:"get","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{label:"消息类型",prop:"type","min-width":"100px"}}),t._v(" "),o("el-table-column",{attrs:{label:"用途",prop:"desc","min-width":"100px","show-overflow-tooltip":""}})],1)],1):t._e()])},[],!1,null,null,null);e.default=a.exports},gmEs:function(t,e,o){}}]);