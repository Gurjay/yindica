(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b1d4"],{G4Kx:function(e,t,l){"use strict";var a=l("jZ8V");l.n(a).a},gk9z:function(e,t,l){"use strict";l.r(t);var a=l("54jj"),r={data:function(){return{activeNames:["1","2","3","4","5","6"],reporterTime:"2019-10-02 12:00:00",resourceType:[],urgentLevel:"中",affectLevel:"中",flowStatus:"待处理",rules:{number:[{trigger:"blur",required:!0}],reporter:[{trigger:"blur",required:!0}],law:[{trigger:"blur",required:!0}],reporterTime:[{trigger:"blur",required:!0}],theme:[{trigger:"blur",required:!0}],content:[{trigger:"blur",required:!0}],processInfo:[{trigger:"blur",required:!0}],reportDepartment:[{trigger:"blur",required:!0}],reportUser:[{trigger:"blur",required:!0}],reportTime:[{trigger:"blur",required:!0}],faultInfo:[{trigger:"blur",required:!0}],metroLine:[{trigger:"blur",required:!0}]},urgentOptions:[{label:"低",value:1},{label:"中",value:2},{label:"高",value:3}],affectOptions:[{label:"低",value:1},{label:"中",value:2},{label:"高",value:3}],statusOptions:[{label:"待处理",value:1},{label:"已处理",value:2},{label:"已终止",value:3}],dialogVisible:!1}},mounted:function(){this.resourceType=a.resourceType},methods:{visible:function(){this.hardware_operation=!0},invisible:function(){this.hardware_operation=!1},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})}}},s=(l("G4Kx"),l("KHd+")),i=Object(s.a)(r,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",{staticClass:"app-container ilayout-container"},[l("el-container",{staticClass:"cmdb_details sub"},[l("el-header",{},[l("div",{staticClass:"its_button"},[l("router-link",{attrs:{to:"/itsm/itsmRequest"}},[l("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("返回")])],1),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("保存")])],1)]),e._v(" "),l("el-main",[l("el-collapse",{staticClass:"its_collapse",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:e.rules}},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("el-row",{staticClass:"its_card_body"},[l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"流水号",prop:"number"}},[l("itsnow-text",{attrs:{value:"Lank_00001",readonly:""}})],1),e._v(" "),l("el-form-item",{attrs:{label:"流程状态",prop:"law"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.flowStatus,callback:function(t){e.flowStatus=t},expression:"flowStatus"}},e._l(e.statusOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"创建人"}},[l("itsnow-text",{attrs:{value:"依赐诺_张三",readonly:""}})],1),e._v(" "),l("el-form-item",{attrs:{label:"处理人"}},[l("el-autocomplete",{attrs:{value:"依赐诺_李四",placeholder:"请选择"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"its_det"},[l("el-row",{staticClass:"its_form_row"},[l("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px",rules:e.rules}},[l("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[l("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[l("el-collapse-item",{attrs:{title:"报告信息",name:"2"}},[l("div",{staticClass:"clearfix its_card_header"}),e._v(" "),l("el-row",{staticClass:"its_card_body"},[l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"报告人",prop:"reporter"}},[l("el-col",{staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[null==e.refObj?l("el-autocomplete",{attrs:{value:"依赐诺_张三",placeholder:"请选择"}}):e._e(),e._v(" "),null!=e.refObj?l("el-tag",{key:e.refObj.label,staticStyle:{width:"100%"},attrs:{closable:""},on:{close:e.removeSelectClass}},[e._v("\n                                                          "+e._s(e.refObj.label)+"\n                                                        ")]):e._e()],1),e._v(" "),l("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus"},on:{click:function(t){e.showAdd=!0}}})],1)],1),e._v(" "),l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"报告时间",prop:"reporterTime"}},[l("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",disabled:""},model:{value:e.reporterTime,callback:function(t){e.reporterTime=t},expression:"reporterTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:21,offset:1}},[l("el-form-item",{attrs:{label:"主题",prop:"theme"}},[l("itsnow-text",{attrs:{value:"主机类型问题"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"内容",prop:"content"}},[l("itsnow-textarea",{attrs:{value:"这里是内容的具体详情"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"资源",prop:"user"}},[l("el-col",{staticClass:"form_tool"},[l("el-col",{staticClass:"form_tool_bar"},[l("el-button",{attrs:{size:"mini",type:"text",plain:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增")])],1),e._v(" "),l("div",{staticClass:"its_table",staticStyle:{"padding-top":"0"}},[l("el-table",{ref:"resourceType",staticStyle:{width:"100%"},attrs:{data:e.resourceType,stripe:"",border:""}},[l("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"resourceName",label:"配置项名称","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("a",{staticClass:"link-type"},[l("router-link",{attrs:{to:"/configuration/ciDB/view"}},[e._v(e._s(t.row.resourceName))])],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"resourceType",label:"配置项类型",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"description",label:"描述",width:"300"}}),e._v(" "),l("el-table-column",{attrs:{prop:"IP",label:"IP地址",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"mini"}},[e._v("\n                                                                      删除\n                                                                    ")])]}}])})],1)],1)],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"紧急度"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.urgentLevel,callback:function(t){e.urgentLevel=t},expression:"urgentLevel"}},e._l(e.urgentOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"优先级"}},[l("itsnow-text",{attrs:{value:"中",readonly:""}})],1)],1),e._v(" "),l("el-col",{attrs:{span:10,offset:1}},[l("el-form-item",{attrs:{label:"影响度"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.affectLevel,callback:function(t){e.affectLevel=t},expression:"affectLevel"}},e._l(e.affectOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:21,offset:1}},[l("el-form-item",{attrs:{label:"附件"}},[l("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[l("i",{staticClass:"el-icon-upload"}),e._v(" "),l("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),l("em",[e._v("点击上传")])])])],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"新增",visible:e.dialogVisible,width:"920px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticClass:"its_table"},[l("el-table",{ref:"resourceType",staticStyle:{width:"100%"},attrs:{data:e.resourceType,stripe:"",border:""}},[l("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"resourceName",label:"配置项名称","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("a",{staticClass:"link-type"},[l("router-link",{attrs:{to:"/configuration/ciDB/view"}},[e._v(e._s(t.row.resourceName))])],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"resourceType",label:"配置项类型",width:"100"}}),e._v(" "),l("el-table-column",{attrs:{prop:"applicability",label:"监控状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["true"==t.row.applicability?l("i",{staticClass:"el-icon-check",staticStyle:{height:"20px",width:"20px","border-radius":"20px","border-color":"rgb(88, 255, 19)",background:"radial-gradient(circle at 50% 30%,#98ffae,#00e014 56%,#ffffff 100%)",padding:"0",color:"#fff","line-height":"20px"}}):e._e(),e._v(" "),"false"==t.row.applicability?l("i",{staticClass:"el-icon-close",staticStyle:{height:"20px",width:"20px","border-radius":"20px","border-color":"rgba(255, 0, 0, 0.15)",background:"radial-gradient(circle at 50% 30%,#ff5d5d,#ea0000 56%,#ffffff 100%)",padding:"0",color:"#fff","line-height":"20px"}}):e._e()]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"IP",label:"IP地址",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"description",label:"描述",width:"150"}}),e._v(" "),l("el-table-column",{attrs:{prop:"date",label:"更新时间","min-width":"160"}})],1)],1),e._v(" "),l("div",{staticClass:"block its_pagination"},[l("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"page-sizes":[10,25,50,80,100],"page-size":25,total:6,background:"",layout:"total, sizes, prev, pager, next, jumper"}})],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)])],1)],1)],1)],1)},[],!1,null,null,null);t.default=i.exports},jZ8V:function(e,t,l){}}]);