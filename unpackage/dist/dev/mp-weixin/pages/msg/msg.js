(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{37:function(e,t,n){"use strict";(function(e){n(5);a(n(4));var t=a(n(38));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},38:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(41);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n(43);var u,s=n(11),i=Object(s["default"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"202c6a0a",null,!1,a["components"],u);i.options.__file="pages/msg/msg.vue",t["default"]=i.exports},39:function(e,t,n){"use strict";n.r(t);var a=n(40);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},40:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return a}));try{a={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,150))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,169))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},o=!1,u=[];r._withStripped=!0},41:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},42:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{avatar:"/static/default/defUser.png",username:"马化腾",update_time:1661152170,data:"快点回来吃饭",noread:0},{avatar:"/static/default/defUser.png",username:"马云",update_time:1663830570,data:"知道了",noread:1},{avatar:"/static/default/defUser.png",username:"郭富城",update_time:1661152170,data:"你在干嘛",noread:99},{avatar:"/static/default/defUser.png",username:"Tim Cook",update_time:1663830570,data:"Hey my honey,how is it goning The new iPhone is on the way!",noread:2},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4},{avatar:"/static/default/defUser.png",username:"小冰",update_time:1624437713,data:"需要什么帮助吗主任",noread:4}],r=function(){n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n(150))}.bind(null,n)).catch(n.oe)},o=function(){Promise.all([n.e("common/vendor"),n.e("components/common/msg-item")]).then(function(){return resolve(n(176))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/common/load-more").then(function(){return resolve(n(164))}.bind(null,n)).catch(n.oe)},s={components:{msgItem:o,loadMore:u,uniNavBar:r},data:function(){return{tabIndex:0,scrollInto:"",scrollH:600,newsList:[],tabBars:[{name:"全部"},{name:"未读"}]}},onNavigationBarButtonTap:function(t){switch(t.index){case 0:e.navigateTo({url:"../friends-list/friends-list",success:function(e){},fail:function(){},complete:function(){}});break;case 1:this.$refs.popup.open();break}},onPullDownRefresh:function(){this.refresh()},onLoad:function(){var t=this;e.getSystemInfo({success:function(n){t.scrollH=n.windowHeight-e.upx2px(110)}}),this.getData()},methods:{getData:function(){for(var e=[],t=0;t<this.tabBars.length;t++){var n={list:a};t>0&&(n={list:[]}),e.push(n)}this.newsList=e},changeTab:function(e){e!==this.tabIndex&&(this.tabIndex=e,this.scrollInto="tab"+e)},onChangeTab:function(e){this.changeTab(e.detail.current)},refresh:function(){var t=this;setTimeout((function(){t.getData(),e.stopPullDownRefresh()}),2e3)},popupEvent:function(e){switch(e){case"readAll":this.readAll();break;case"empty":this.newsList=[];break}this.$refs.popup.close()},readAll:function(){var e=this,t=this.newsList[0].list.map((function(e,t){e.noread=0}));setTimeout((function(){e.newsList=t}),2e3)}}};t.default=s}).call(this,n(1)["default"])},43:function(e,t,n){"use strict";n.r(t);var a=n(44),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},44:function(e,t,n){}},[[37,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/msg/msg.js.map