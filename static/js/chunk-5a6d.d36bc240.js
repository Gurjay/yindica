(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a6d","d98f","3K/k"],{"3K/k":function(t,e,a){"use strict";a.r(e);var o=a("v0Ws");e.default={queryForms:function(t,e,a){var r={name:t,pageNo:e,pageSize:a};return Object(o.f)({url:"api/v2/forms",method:"get",params:r})},getForm:function(t){return Object(o.f)({url:"api/v2/forms/"+t,method:"get"})},createForm:function(t){return Object(o.f)({url:"api/v2/forms",method:"post",data:t})},updateForm:function(t,e){return Object(o.f)({url:"api/v2/forms/"+t,method:"put",data:e})},deleteForm:function(t){return Object(o.f)({url:"api/v2/forms/"+t,method:"delete"})}}},d98f:function(t,e,a){"use strict";a.r(e);var o=a("v0Ws");e.default={queryData:function(t,e,a){var r={formName:t,pageNo:e,pageSize:a};return Object(o.f)({url:"api/v2/formData",method:"get",params:r})},getData:function(t,e,a){null==a&&(a=0);var r={formRevision:a};return Object(o.f)({url:"api/v2/formData/"+t+"/"+e,method:"get",params:r})},createData:function(t,e){return Object(o.f)({url:"api/v2/formData/"+t,method:"post",data:e})},updateData:function(t,e){return Object(o.f)({url:"api/v2/formData/"+t,method:"put",data:e})},deleteData:function(t,e){return Object(o.f)({url:"api/v2/formData/"+t+"/"+e,method:"delete"})}}},mXDD:function(t,e,a){"use strict";a.r(e);var o=a("3K/k"),r=a("d98f"),n={components:{ElRow:a("Lgs+").a},props:["form","name"],data:function(){return{addPath:"",listModel:{config:{selectionMode:"selection",readonly:!1,columns:[],actions:[{name:"edit",label:"编辑"},{name:"delete",label:"删除"}],pageSize:10,total:0}}}},created:function(){var t=this;this.addPath=this.$route.path+"/add",o.default.getForm(this.form).then(function(e){if(null!=e.columns&&""!=e.columns){var a=JSON.parse(e.columns),o=!0,r=!1,n=void 0;try{for(var i,u=a[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var l=i.value,f={name:l.name,label:l.label,width:"200"};t.listModel.config.columns.push(f)}}catch(t){r=!0,n=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw n}}}else t.listModel.config.columns=[]})},mounted:function(){},methods:{loadData:function(t,e){var a=this;r.default.queryData(this.form,t,e).then(function(o){var r=a.listModel.config;r.pageSize=e,r.pageIndex=t,r.total=o.data.total;var n={config:r,page:o.data.rows};a.listModel=n})},rowAction:function(t,e,a){var o=this;if("delete"==t)r.default.deleteData(this.form,a.id).then(function(t){o.$message({message:"删除成功",type:"success"}),o.loadData(1,10)});else if("edit"==t){var n=this.name+"edit";this.$router.push({name:n,params:{id:a.id}})}}}},i=a("KHd+"),u=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("el-container",{staticStyle:{height:"auto"}})},[],!1,null,null,null);e.default=u.exports}}]);