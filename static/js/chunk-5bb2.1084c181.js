(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bb2"],{"6W7V":function(e,t,a){},"9X1y":function(e,t,a){"use strict";var i=a("6W7V");a.n(i).a},AYOz:function(e,t,a){"use strict";var i=a("LV8l");a.n(i).a},LV8l:function(e,t,a){},wyfe:function(e,t,a){"use strict";a.r(t);var i=a("54jj"),l={data:function(){return{source:"1",tagBlock:0,childP:!1,editable:!1,addable:!1,activeNames:["1","2","3","4","5"],scriptManage:[],highS:!1,dynamicValidateForm:{domains2:"",domains:[{value:"",compare:""}]},formInline:{user:"",region:""},isAble:!1,ruleForm:{date:"",template:["172.16.126.321"],name:"",codeLanguage:"",plug:"",app:"1",description:"",tab:"自定义",label:"",resourceType:"主机",sourceType:"",type:"2",unit:"",otherLabel:"",dataType:"1",calculationType:"1",configureItem:"1",performanceItem:"1",lableRules:"",soleKey:"2"},rules:{identification:[{required:!0,trigger:"blur"}],label:[{required:!0,trigger:"blur"}],indicatorItems:[{required:!0,trigger:"blur"}],lableRules:[{required:!0,trigger:"blur"}]},dialogVisible:!1,dialogVisibleScript:!1,identificationData:[{label:"本地时长",date:"2016-05-03 10:12:36",otherLabel:"--",key:"2",ci:"2",per:"2",num:"计算",identification:"localtime",codeLanguage:"oid",typeData:"字符型",description:"这是对总管的描述",unit:"B"}]}},watch:{},created:function(){"virtualHostView"==this.$route.name&&(this.editable=!0),"virtualHostAdd"==this.$route.name&&(this.editable=!1),"virtualHostEdit"==this.$route.name&&(this.editable=!0);var e=this.$route.params.data.name;this.ruleForm.name=e;var t=this.$route.params.data.label;this.ruleForm.label=t},mounted:function(){this.scriptManage=i.scriptManage},methods:{test:function(e){this.ruleForm.app,2==e?(this.isAble=!0,this.ruleForm.type="2"):(this.isAble=!1,this.ruleForm.type="1"),console.log(this.ruleForm.type)}}},r=(a("9X1y"),a("AYOz"),a("KHd+")),o=Object(r.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container ilayout-container"},[a("el-container",{staticClass:"sub"},[a("el-header",[a("el-row",[a("router-link",{attrs:{to:"/resource/virtualResourceManagement/virtualTemplate"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("返回")])],1),e._v(" "),e.editable?a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("上一条")]):e._e(),e._v(" "),e.editable?a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("下一条")]):e._e(),e._v(" "),e.editable?e._e():a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.editable}},[e._v("保存")]),e._v(" "),e.editable?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.editable=!1}}},[e._v("编辑")]):e._e(),e._v(" "),a("router-link",{attrs:{to:"/resource/virtualResourceManagement/virtualHost/add"}},["virtualHostAdd"!=this.$route.name?a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("新增")]):e._e()],1)],1)],1),e._v(" "),a("el-main",[a("el-collapse",{staticClass:"its_collapse",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"100px",rules:e.rules,model:e.form}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"基本信息",name:"1"}},[a("div",{staticClass:"clearfix its_card_header"}),e._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"模板标识",prop:"identification"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:e.editable},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模板名称"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.label,callback:function(t){e.$set(e.ruleForm,"label",t)},expression:"ruleForm.label"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"主机"}},[a("el-col",{staticClass:"itsTypeLink",staticStyle:{width:"calc(100% - 32px)"},attrs:{span:24}},[a("el-select",{staticClass:"its_multiple_select ",attrs:{disabled:e.editable,filterable:"","allow-create":"",remote:"",size:"mini","popper-class":"its_multipleSelect_dropDown",multiple:"",placeholder:"请选择"},model:{value:e.ruleForm.template,callback:function(t){e.$set(e.ruleForm,"template",t)},expression:"ruleForm.template"}})],1),e._v(" "),a("el-button",{staticClass:"inputBtn",attrs:{type:"primary",plain:"",size:"mini",icon:"iconfont icontable"},on:{click:function(t){e.dialogVisible=!0}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"来源"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}},[a("el-option",{attrs:{label:"VMware",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"Openstack",value:"2"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:21,offset:1}},[a("el-form-item",{attrs:{label:"描述"}},[a("itsnow-textarea",{attrs:{type:"textarea",readonly:!1},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"its_det"},[a("el-row",{staticClass:"its_form_row"},[a("el-form",{attrs:{"label-width":"100px",rules:e.rules,model:e.form}},[a("el-col",{staticClass:"its_card_form",attrs:{span:24,offset:0}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"naver"}},[a("el-collapse-item",{attrs:{title:"配置信息",name:"2"}},[a("div",{staticClass:"clearfix its_card_header"}),e._v(" "),a("el-row",{staticClass:"its_card_body"},[a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"CPU"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内存"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"硬盘"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{label:"适配器"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"光驱"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"显卡"}},[a("itsnow-text",{attrs:{placeholder:"请输入",readonly:!1},model:{value:e.ruleForm.identification,callback:function(t){e.$set(e.ruleForm,"identification",t)},expression:"ruleForm.identification"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)]),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{visible:e.dialogVisible,title:"指标项",width:"860px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("vmTemplate"),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)],1)},[],!1,null,"25e599b8",null);t.default=o.exports}}]);