(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/session-list/session-list"],{4026:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"eab8"))}},u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"4cef":function(e,t,n){"use strict";n.r(t);var a=n("ab07"),u=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=u.a},ab07:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{avatar:"/static/default/defUser.png",username:"马化腾",update_time:1661152170,data:"快点回来吃饭",noread:1},{avatar:"/static/default/defUser.png",username:"马云",update_time:1663830570,data:"知道了",noread:1},{avatar:"/static/default/defUser.png",username:"郭富城",update_time:1661152170,data:"你在干嘛",noread:99},{avatar:"/static/default/defUser.png",username:"Tim Cook",update_time:1663830570,data:"Hey my honey,how is it goning The new iPhone is on the way!",noread:2},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4}],u=function(){Promise.all([n.e("common/vendor"),n.e("components/common/msg-item")]).then(function(){return resolve(n("5aac"))}.bind(null,n)).catch(n.oe)},i={components:{msgItem:u},data:function(){return{list:[]}},onLoad:function(){},onPullDownRefresh:function(){this.refresh()},onNavigationBarButtonTap:function(t){switch(t.index){case 0:e.navigateTo({url:"../friends-list/friends-list",success:function(e){},fail:function(){},complete:function(){}});break;case 1:this.$refs.popup.open();break}},methods:{refresh:function(){var t=this;setTimeout((function(){t.list=a,e.stopPullDownRefresh()}),2e3)},popupEvent:function(e){switch(e){case"readAll":this.readAll();break;case"empty":this.list=[];break}this.$refs.popup.close()},readAll:function(){var e=this;this.list.map((function(e,t){e.noread=0}));setTimeout((function(){e.list=a}),2e3)}}};t.default=i}).call(this,n("543d")["default"])},c7a4:function(e,t,n){"use strict";n.r(t);var a=n("4026"),u=n("4cef");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);var o,s=n("f0c5"),r=Object(s["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=r.exports},e479:function(e,t,n){"use strict";(function(e){n("1676");a(n("66fd"));var t=a(n("c7a4"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["e479","common/runtime","common/vendor"]]]);