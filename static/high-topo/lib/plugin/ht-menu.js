!function(u,A){"use strict";var Y="ht",f=u[Y],E="innerHTML",y="className",p=null,k="px",s=f.Default,P=s.getInternal(),m="0",N=function(){return document},G=function(a){return N().createElement(a)},I=function(){return G("canvas")},D=function(d,Q,N){d.style.setProperty(Q,N,p)},W=function(Y,y,N){s.def(f.widget[Y],y,N)},r=function(m,N){m.appendChild(N)},i=function(G,l){G.removeChild(l)},q=s.eventListenerOptionsFalse,w=(s.eventListenerOptionsTrue,function(u,H,G,Y){u.addEventListener(H,G,Y?q:q)}),g=function(z,l,g,S){z.removeEventListener(l,g,S?q:q)},J=s.isTouchable;P.addMethod(s,{menuLabelFont:(J?"16":"13")+"px arial, sans-serif",menuLabelColor:"#000",menuBackground:"#F0EFEE",menuHoverBackground:"#648BFE",menuHoverLabelColor:"#fff",menuSeparatorWidth:1,menuSeparatorColor:"#999"},!0),f.widget.Menu=function(e){var Z=this,I=Z._view=P.createView(null,Z),H=Z.$1g=new f.widget.ContextMenu,z=G("ul");H._r=!0,H._view[y]+=" ht-widget-dropdownmenu",I[y]="ht-widget-menu",z[y]="header",D(I,"margin",m),D(I,"padding",m),D(I,"background",s.menuBackground),D(I,"-webkit-user-select","none"),D(I,"-moz-user-select","none"),D(I,"user-select","none"),D(I,"text-align","left"),D(I,"border-bottom",s.menuSeparatorWidth+"px solid "+s.menuSeparatorColor),D(I,"cursor","default"),D(I,"overflow","auto"),D(I,"white-space","nowrap"),D(I,"font",s.menuLabelFont),D(I,"color",s.menuLabelColor),D(I,"box-sizing","border-box"),D(I,"-moz-box-sizing","border-box"),D(z,"list-style","none"),D(z,"margin",m),D(z,"padding",m),D(z,"display","inline-block"),r(I,z),Z.setItems(e),Z.$2g=function(y){Z.$3g(y)},Z.$4g=function(P){Z.$5g(P)},Z.$6g=function(l){Z.$7g(l)},Z.$8g=function(R){Z.$9g(R)},Z.$9b=function(K){Z.$10g(K)},Z._autoShow=!0,Z.setAutoShow(!1),H.afterHide=function(){Z.$11g()},H.afterShow=function(){Z.$12g()},g(N(),"keydown",H.$3b),Z.$3b=function(M){Z.$13g(M)},Z.invalidate()},W("Menu",A,{_items:p,$14g:s.menuHoverBackground,$15g:s.menuHoverLabelColor,$16g:{},_enableGlobalKey:!1,ms_v:1,$21g:"smallicons",$22g:0,$23g:0,$24g:"left",getDropDownMenu:function(){return this.$1g},setLayout:function(p){var K=this;if(K.$21g=p,K.setItems(K._items),"largeicons"===p){for(var S=K._view.querySelectorAll(".header-item"),X=0,t=0;t<S.length;t++){var J=S[t];X=Math.max(X,J.clientWidth)}for(var t=0;t<S.length;t++){var J=S[t];D(J,"min-width",X+k)}}this.invalidate()},getLayout:function(){return this.$21g},setHeaderItemHGap:function(x){this.$22g=x;for(var K=this._view.querySelectorAll(".header-item"),l=0;l<K.length;l++){var I=K[l];D(I,"margin-left",x+k),D(I,"margin-right",x+k)}},getHeaderItemHGap:function(){return this.$22g},setHeaderItemVGap:function(i){this.$23g=i;for(var e=this._view.querySelectorAll(".header-item"),j=0;j<e.length;j++){var c=e[j];D(c,"margin-top",i+k),D(c,"margin-bottom",i+k)}},getHeaderItemVGap:function(){return this.$24g},setHeaderItemAlign:function(k){this.$24g=k,D(this._view,"text-align",k)},getHeaderItemAlign:function(){return this.$23g},enableGlobalKey:function(){var P=this,x=P._enableGlobalKey;x===!1&&(w(N(),"keydown",P.$3b),P._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,g(N(),"keydown",this.$3b)},setHoverBackground:function(Y){this.$14g=Y},setHoverColor:function(U){this.$15g=U},setItems:function(R){var m=this,C=m._view,z=m.$21g;if(m._items=R,C.children[0][E]="",m.$16g={},R&&R.length){for(var l=C.children[0],e=0,W=N().createDocumentFragment();e<R.length;e++){var f=R[e],X=G("li"),a=G("span");if(f.icon){var K=I();K[y]="menu-item-icon","smallicons"===z?(D(K,"height","1.2em"),D(K,"width","1.2em"),D(K,"vertical-align","middle")):(D(K,"height","32px"),D(K,"width","32px"),D(K,"display","block"),D(K,"margin","0 auto")),K.$20g=f.icon,r(X,K)}X[y]="header-item",D(X,"display","inline-block"),D(X,"vertical-align","top"),D(X,"padding","0 1.2em"),D(X,"line-height","1.8em"),"largeicons"===z&&D(X,"text-align","center"),D(X,"background-color","rgba(0,0,0,0)"),X.setAttribute("data-index",e),m.$16g[e]=f.items,a[E]=f.label,"iconsonly"!==z&&r(X,a),r(W,X)}r(l,W)}},showDropdownMenu:function(S){var n=this,g=n.$16g[S],t=n.$1g,l=n._view.children[0].children[S],$=n.$17g;if(l&&l!==$){$&&n.hideDropdownMenu();var h=l.getBoundingClientRect(),m=s.getWindowInfo();n.$17g=l,t.setItems(g),t.show(h.left+m.left,h.top+h.height+m.top,!1)}},hideDropdownMenu:function(){this.$1g.hide()},getItemByProperty:function(i,b){var X=this,$=X._items;return $&&0!==$.length?X.$1g.getItemByProperty(i,b,$):p},$12g:function(){var g=this,C=g.$17g;C.style.background=g.$14g,C.style.color=g.$15g,g._autoShow||w(N(),J?"touchstart":"mousedown",g.$9b)},$11g:function(){var u=this,y=u.$17g;y&&(y.style.background="",y.style.color="",u.$17g=p),g(N(),J?"touchstart":"mousedown",u.$9b)},$10g:function(j){var d=this,n=d._view,E=d.$1g,c=n.children[0];!N().body.contains(n)||c.contains(j.target)||E._view.contains(j.target)||d.hideDropdownMenu()},$13g:function(c){var m=this,I=m.$1g;N().body.contains(m._view)&&I.$13b.$4b.call(I.$13b,c,m._items)},setAutoShow:function(h){var $=this,z=$.$1g,E=$._view;$._autoShow!==h&&($._autoShow?(g(E,"mouseover",$.$2g),g(E,"mouseout",$.$4g),g(z._view,"mouseout",$.$4g),J||(w(E,"mouseover",$.$8g),w(E,"mouseout",$.$8g)),w(E,J?"touchstart":"mousedown",$.$6g)):(g(E,"mouseover",$.$8g),g(E,"mouseout",$.$8g),g(E,J?"touchstart":"mousedown",$.$6g),g(N(),J?"touchstart":"mousedown",$.$9b),J||(w(E,"mouseover",$.$2g),w(E,"mouseout",$.$4g),w(z._view,"mouseout",$.$4g))),$._autoShow=h)},$3g:function(t){var T=this,e=T._view.children[0],g=t.target;if(e!==g&&e.contains(g)){for(;"header-item"!==g[y];)g=g.parentNode;T.showDropdownMenu(g.getAttribute("data-index"))}},$5g:function(U){var H=this,x=H._view.children[0],O=H.$1g,V=U.target,k=U.relatedTarget;!x.contains(V)&&!O._view.contains(V)||x.contains(k)||O._view.contains(k)||H.hideDropdownMenu()},$7g:function(x){x.preventDefault();var F=this,u=F._view.children[0],R=F.$1g,U=x.target;if(s.isLeftButton(x)&&u!==U&&u.contains(U))if(J){for(;"header-item"!==U[y];)U=U.parentNode;var h=U.getAttribute("data-index"),R=F.$1g,L=F._view.children[0].children[h],w=F.$17g;R.isShowing()&&F.hideDropdownMenu(),L!==w&&F.showDropdownMenu(h)}else if(R.isShowing())F.hideDropdownMenu();else{for(;"header-item"!==U[y];)U=U.parentNode;F.showDropdownMenu(U.getAttribute("data-index"))}},$9g:function(D){var a=this,T=a._view,S=a.$1g,J=D.target;if(T.contains(J)){for(var N=T.querySelectorAll(".header-item"),v=p,o=0;o<N.length;o++){var B=N[o];B.style.background="",B.style.color="","mouseover"===D.type?B.contains(J)&&(v=B):"mouseout"===D.type&&S.isShowing()&&a.$17g===B&&(v=B)}S.isShowing()&&(v||(v=a.$17g),a.showDropdownMenu(v.getAttribute("data-index"))),v&&(v.style.background=a.$14g,v.style.color=a.$15g)}},getShowingMenuIndex:function(){var y=this.$17g;return y?y.getAttribute("data-index"):-1},addTo:function(x){var w=this,F=w._view;r(x,F),w.invalidate()},dispose:function(){var s=this,I=s._view,c=s.$1g;I&&(s._autoShow?(g(I,"mouseover",s.$2g),g(I,"mouseout",s.$4g),g(c._view,"mouseout",s.$4g)):(g(I,"mouseover",s.$8g),g(I,"mouseout",s.$8g),g(I,J?"touchstart":"mousedown",s.$6g),g(N(),J?"touchstart":"mousedown",s.$9b)),g(N(),"keydown",s.$3b),c.dispose(),I.parentNode&&i(I.parentNode,I),s._view=s.$1g=s.$16g=s._items=s.$17g=s.$2g=s.$4g=s.$6g=s.$8g=s.$9b=s.$3b=p)},$19g:function(_,C,o,r){var L=P.initContext(_);P.translateAndScale(L,0,0,1),L.clearRect(0,0,o,r),s.drawStretchImage(L,s.getImage(C),"fill",0,0,o,r),L.restore()},validateImpl:function(){var d,m,T,G=this,F=G._view,q=F.querySelectorAll(".menu-item-icon");for(T=0;T<q.length;T++){var a=q[T];d=a.clientWidth,m=a.clientHeight,d&&m&&(P.setCanvas(a,d,m),G.$19g(a,s.getImage(a.$20g),d,m))}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);