(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-346d"],{"/a+1":function(t,e,n){"use strict";n.r(e);var a={data:function(){return{addform:{name:"ess1",action:"1",netblock:"1",cloud:"A3",number:"10",min:"2",max:"10",desc:"--"},add:!1,ipTable:[{name:"A1",ip:"10.74.37.36",dx:"115.231.59.124",yd:"--",lt:"--",desc:"--",action:"新增",type:"云服务器"},{name:"A2",ip:"10.74.37.37",dx:"--",yd:"112.16.191.24",lt:"--",desc:"--",action:"回收",type:"云服务器"},{name:"slb4",ip:"11.73.61.12",dx:"--",yd:"--",lt:"--",desc:"--",action:"新增",type:"负载均衡"}],boxShow:!0,rules:{name:[{required:!0,message:"请输入"}]}}},methods:{sentBoxShow:function(){this.boxShow=!this.boxShow}}},l=(n("PRI5"),n("KHd+")),o=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_tool"},[n("div",{staticClass:"form_tool_bar",on:{click:t.sentBoxShow}},[t._v("\n        互联网地址\n          "),n("div",{staticStyle:{width:"auto",float:"right","padding-right":"8px",height:"25px"}},[t.boxShow?n("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-down"},on:{click:t.sentBoxShow}}):n("el-button",{staticStyle:{padding:"5px","padding-right":"0",margin:"2px 0",height:"26px",color:"#000"},attrs:{type:"text",icon:"el-icon-arrow-right"},on:{click:t.sentBoxShow}})],1)]),t._v(" "),t.boxShow?n("div",{staticClass:"its_table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{"header-row-class-name":"its_table_header",border:"",data:t.ipTable,"max-height":"322px"}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"55px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"映射资源",prop:"name","min-width":"120px","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v("\n                        "+t._s(e.row.name)+"\n                    ")])]}}],null,!1,1887514273)}),t._v(" "),n("el-table-column",{attrs:{label:"内网IP",prop:"ip","min-width":"100px"}}),t._v(" "),n("el-table-column",{attrs:{label:"电信IP",prop:"dx",width:"160px"}}),t._v(" "),n("el-table-column",{attrs:{label:"动作",prop:"action",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return["A1"==e.row.name?n("span",[t._v("关闭")]):n("span",[t._v("开通")])]}}],null,!1,807510991)}),t._v(" "),n("el-table-column",{attrs:{label:"移动IP",prop:"yd",width:"160px"}}),t._v(" "),n("el-table-column",{attrs:{label:"动作",prop:"action",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return["A2"==e.row.name?n("span",[t._v("关闭")]):n("span",[t._v("--")])]}}],null,!1,1762512726)}),t._v(" "),n("el-table-column",{attrs:{label:"联通IP",prop:"lt",width:"160px"}}),t._v(" "),n("el-table-column",{attrs:{label:"动作",prop:"action",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v("开通")])]}}],null,!1,4059036753)})],1)],1):t._e()])},[],!1,null,null,null);e.default=o.exports},N29Z:function(t,e,n){},PRI5:function(t,e,n){"use strict";var a=n("N29Z");n.n(a).a}}]);