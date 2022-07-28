(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e017952"],{"0d5c":function(e,t,n){"use strict";n("680b")},"4c4b":function(e,t,n){},"680b":function(e,t,n){},"87e0":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("documentation",{on:{gologin:e.gologin}}),s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-tooltip",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")]),s("div",{staticClass:"rightLink",style:{width:e.sizeBig?"100px":"",height:e.sizeBig?"100px":"",border:e.sizeBig?"1px solid #ffb523":"","box-shadow":e.sizeBig?"0px 0px 10px 1px #ff921d82":""},on:{click:e.handleLogin,mouseenter:function(t){e.sizeBig=!0},mouseleave:function(t){e.sizeBig=!1}}},[s("el-tooltip",{attrs:{content:"前往部分前端与产品工作内容展示",placement:"bottom",effect:"light"}},[s("el-image",{staticStyle:{width:"88%","border-radius":"4px",display:"block",margin:"auto"},attrs:{src:n("b858"),fit:"contain"}})],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{position:"relative","text-align":"center"}},[s("div",{staticClass:"tips"},[s("span",[e._v("Username : yindica")]),s("span",[e._v("Password : 随便")])])])],1),s("el-dialog",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{title:"Or connect with",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v(" Can not be simulated on local, so please combine you own business simulation! ! ! "),s("br"),s("br"),s("br"),s("social-sign")],1)],1)},o=[],i=(n("13d5"),n("d3b7"),n("b64b"),n("3c34")),a=n("61f7"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v(" WeChat ")]),n("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v(" QQ ")])])},c=[],l={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},u=l,d=(n("bfec"),n("2877")),p=Object(d["a"])(u,r,c,!1,null,"7309fbbb",null),g=p.exports,f={name:"Login",components:{SocialSign:g,documentation:i["default"]},model:{event:"gologin"},data:function(){var e=function(e,t,n){Object(a["d"])(t)?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{sizeBig:!1,loginForm:{username:"yindica",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{gologin:function(e){this.handleLogin(),console.log(e)},checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"./",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,n){return"redirect"!==n&&(t[n]=e[n]),t}),{})}}},m=f,h=(n("b084"),n("0d5c"),Object(d["a"])(m,s,o,!1,null,"0ab523b2",null));t["default"]=h.exports},b084:function(e,t,n){"use strict";n("4c4b")},b858:function(e,t,n){e.exports=n.p+"static/img/mini.1f7f2b29.png"},bfec:function(e,t,n){"use strict";n("87e0")}}]);