(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-25a2","0G7c","z+MP"],{"0G7c":function(e,t,a){"use strict";a.r(t);var r=a("v0Ws");t.default={queryData:function(e,t,a){var n={formName:e,pageNo:t,pageSize:a};return Object(r.f)({url:"api/v2/formData",method:"get",params:n})},getData:function(e,t,a){null==a&&(a=0);var n={formRevision:a};return Object(r.f)({url:"api/v2/formData/"+e+"/"+t,method:"get",params:n})},createData:function(e,t){return Object(r.f)({url:"api/v2/formData/"+e,method:"post",data:t})},updateData:function(e,t){return Object(r.f)({url:"api/v2/formData/"+e,method:"put",data:t})},deleteData:function(e,t){return Object(r.f)({url:"api/v2/formData/"+e+"/"+t,method:"delete"})}}},Gu9F:function(e,t,a){"use strict";a.r(t);var r=a("Rx2V"),n=a("Ldxb"),o=(a("zX5h"),a("z+MP")),i=a("0G7c");function l(e){var t={};t.id=e.id,t.name=e.name,t.label=e.label,t.bindName=e.bindName,t.description=e.description,t.parent=e.parent,t.hidden=e.hidden,t.readonly=e.readonly,t.properties=e.properties,t.width=e.width;var a=r.default.getInfo(e.type);return t.type=e.type,t.editorView=a.editorView,t.setting=a.setting,t.view=a.view,t.children=[],t.height=50,null!=e.properties&&(t.properties=JSON.parse(e.properties)),t}var u={props:["formName"],components:{overviewPad:n.default},data:function(){return{name:"",form:{fields:[]},data:{backPath:""}}},created:function(){var e=this,t=this.$route.params.id,a="/edit/"+t;this.backPath=this.$route.path.replace(a,""),o.default.getForm(this.formName).then(function(a){i.default.getData(e.formName,t).then(function(t){e.data=t.data});var r=function(e){var t={};t.name=e.name,t.label=e.label,t.category=e.category,t.bindType="2",t.bindName=e.bindName,t.description=e.description,t.id=e.id,t.category=e.category,t.fields=[];for(var a=new Map,r=[],n=0;n<e.fields.length;n++){var o=e.fields[n],i=l(o);null==o.parent||""==o.parent?a.set(o.name,i):r.push(i)}for(var u=0;u<r.length;u++){var d=r[u].parent;a.get(d).children.push(r[u])}var f=!0,c=!1,s=void 0;try{for(var p,m=a.values()[Symbol.iterator]();!(f=(p=m.next()).done);f=!0){var h=p.value;t.fields.push(h)}}catch(e){c=!0,s=e}finally{try{!f&&m.return&&m.return()}finally{if(c)throw s}}return t}(a);e.form=r;var n=function(e){var t=new Map,a=!0,r=!1,n=void 0;try{for(var o,i=e.fields[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;null!=l.bindName&&""!=l.bindName&&t.set(l.bindName,{label:l.label,name:l.bindName})}}catch(e){r=!0,n=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw n}}return t}(e.form),o=[];if(null!=a.columns&&""!=a.columns){var u=JSON.parse(a.columns),d=!0,f=!1,c=void 0;try{for(var s,p=u[Symbol.iterator]();!(d=(s=p.next()).done);d=!0){var m=s.value,h=n.get(m.name);null!=h&&o.push(h)}}catch(e){f=!0,c=e}finally{try{!d&&p.return&&p.return()}finally{if(f)throw c}}}})},methods:{padStyle:function(e){var t="auto";return null!=e&&(t=e+"px"),{padding:"10px",background:"yellow",height:t}},saveData:function(){var e=this;i.default.updateData(this.formName,this.data).then(function(t){e.$message({message:"保存成功",type:"success"})})}},watch:{},computed:{}},d=a("KHd+"),f=Object(d.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("el-row",[a("router-link",{attrs:{to:e.backPath}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("返回")])],1)],1)],1),e._v(" "),a("el-main",[a("el-row",[a("el-col",{staticStyle:{"overflow-y":"auto","max-height":"650px",padding:"4px"}},e._l(e.form.fields,function(t,r){return a("el-col",{key:r,style:e.padStyle(t.properties.height),attrs:{span:t.width}},[a("overview-pad",{attrs:{label:t.label,value:e.data[t.bindName],field:t}})],1)}),1)],1)],1)],1)},[],!1,null,null,null);t.default=f.exports},"z+MP":function(e,t,a){"use strict";a.r(t);var r=a("v0Ws");t.default={queryForms:function(e,t,a){var n={name:e,pageNo:t,pageSize:a};return Object(r.f)({url:"api/v2/forms",method:"get",params:n})},getForm:function(e){return Object(r.f)({url:"api/v2/forms/"+e,method:"get"})},createForm:function(e){return Object(r.f)({url:"api/v2/forms",method:"post",data:e})},updateForm:function(e,t){return Object(r.f)({url:"api/v2/forms/"+e,method:"put",data:t})},deleteForm:function(e){return Object(r.f)({url:"api/v2/forms/"+e,method:"delete"})}}},zX5h:function(e,t,a){"use strict";a.r(t);var r={props:["form"],components:{overviewPad:a("Ldxb").default},data:function(){return{activeName:"form"}},methods:{padStyle:function(e){var t="auto";return null!=e&&(t=e+"px"),{padding:"0px",background:"#fff",height:t}}},watch:{},computed:{}},n=a("KHd+"),o=Object(n.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticStyle:{"overflow-y":"auto","max-height":"calc(100vh - 210px)"}},e._l(e.form.fields,function(t,r){return a("el-col",{key:r,style:e.padStyle(t.properties.height),attrs:{span:t.width}},[a("overview-pad",{attrs:{label:t.label,value:t.label,field:t}})],1)}),1)},[],!1,null,null,null);t.default=o.exports}}]);