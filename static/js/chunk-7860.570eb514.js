(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7860","y8XQ"],{AV7s:function(t,e,l){"use strict";l.r(e);var n=l("t2rG"),a=l.n(n),s=l("Rx2V"),i=l("y8XQ"),o={components:{dragPad:l("2PMj").default,detail:i.default,draggable:a.a},props:["form"],data:function(){return{layoutList:s.default.layoutList,itemList:s.default.itemList,dialogVisible:!1,selectItem:null}},methods:{onChoose:function(t){var e=t.oldIndex,l=this.form.fields[e];this.selectItem=l},onSelectItem:function(t){this.selectItem=t},removeItem:function(t){for(var e=-1,l=0;l<this.form.fields.length;l++)if(this.form.fields[l].name==t.name){e=l;break}this.form.fields.splice(e,1),this.selectItem=null},handleReset:function(){this.form.fields=[]},clone:function(t){for(var e=s.default.getItem(t.example),l=1;;){if(null==this.getFieldByName(e.name+l))break;l++}return e.name=e.name+l,e},getFieldByName:function(t){var e=!0,l=!1,n=void 0;try{for(var a,s=this.form.fields[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;if(i.name==t)return i;if(null!=i.children&&i.children.length>0){var o=!0,r=!1,c=void 0;try{for(var u,f=i.children[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var m=u.value;if(m.name==t)return m}}catch(t){r=!0,c=t}finally{try{!o&&f.return&&f.return()}finally{if(r)throw c}}}}}catch(t){l=!0,n=t}finally{try{!e&&s.return&&s.return()}finally{if(l)throw n}}return null},padStyle:function(t){var e="auto";return null!=t&&(e=t+"px"),{padding:"0px",background:"#fff0",height:e}}},watch:{},computed:{layoutOptions:function(){return{animation:0,ghostClass:"ghost",group:{name:"layout",pull:"clone",put:!1,revertClone:!1},sort:!1}},itemOptions:function(){return{animation:0,ghostClass:"ghost",group:{name:"item",pull:"clone",put:!1,revertClone:!1},sort:!1}},dragOptions:function(){return{animation:0,ghostClass:"ghost",group:{name:"aaa",put:["layout","item","aaa"]}}}}},r=(l("VIFa"),l("Zzwf"),l("KHd+")),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-row",{staticClass:"row-bg"},[l("el-col",{staticClass:"flex_components",attrs:{span:3}},[t._l(t.layoutList,function(e){return l("el-row",[l("el-col",{staticClass:"title"},[t._v(t._s(e.label))]),t._v(" "),l("el-col",{staticClass:"flex_list"},[l("draggable",{attrs:{clone:t.clone,list:e.items,options:t.layoutOptions}},[l("transition-group",{attrs:{type:"transition",name:"flip-list",tag:"div"}},t._l(e.items,function(e,n){return l("div",{key:n,staticClass:"its_comp",attrs:{name:e.name,example:e.example}},[l("div",{staticClass:"list_node"},[t._v(t._s(e.label))])])}),0)],1)],1)],1)}),t._v(" "),t._l(t.itemList,function(e){return l("el-row",[l("el-col",{staticClass:"title"},[t._v(t._s(e.label))]),t._v(" "),l("el-col",{staticClass:"flex_list"},[l("draggable",{attrs:{clone:t.clone,list:e.items,options:t.itemOptions}},[l("transition-group",{attrs:{type:"transition",name:"flip-list",tag:"div"}},t._l(e.items,function(e,n){return l("div",{key:n,staticClass:"its_comp",attrs:{name:e.name,example:e.example}},[l("div",{staticClass:"list_node"},[t._v(t._s(e.label))])])}),0)],1)],1)],1)})],2),t._v(" "),l("el-col",{staticClass:"flex_content",attrs:{span:16}},[l("el-row",[l("draggable",t._b({on:{choose:t.onChoose},model:{value:t.form.fields,callback:function(e){t.$set(t.form,"fields",e)},expression:"form.fields"}},"draggable",t.dragOptions,!1),[l("transition-group",{staticClass:"form_Row",staticStyle:{padding:"4px"},attrs:{type:"transition",name:"flip-list",tag:"div"}},t._l(t.form.fields,function(e,n){return l("el-col",{key:n,style:t.padStyle(e.properties.height),attrs:{span:e.width}},[l("dragPad",{tag:"component",attrs:{label:e.label,value:e.label,field:e},on:{selectItem:t.onSelectItem,removeItem:t.removeItem}})],1)}),1)],1)],1)],1),t._v(" "),l("el-col",{staticClass:"flex_setting",attrs:{span:5}},[null!=t.selectItem?l("div",[l("detail",{tag:"component",staticClass:"flex_list",attrs:{selectItem:t.selectItem,bindClass:t.form.bindName}})],1):t._e()])],1)},[],!1,null,null,null);e.default=c.exports},VIFa:function(t,e,l){"use strict";var n=l("wX6H");l.n(n).a},Zzwf:function(t,e,l){"use strict";var n=l("qVjn");l.n(n).a},qVjn:function(t,e,l){},wX6H:function(t,e,l){},y8XQ:function(t,e,l){"use strict";l.r(e);var n={components:{},props:{bindClass:{required:!1},selectItem:{required:!1}}},a=l("KHd+"),s=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row"),this._v(" "),e("el-row",[e(this.selectItem.setting,{tag:"component",attrs:{field:this.selectItem,bindClass:this.bindClass}})],1)],1)},[],!1,null,null,null);e.default=s.exports}}]);