(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meniu/meniu"],{"2f92":function(n,t,e){"use strict";e.r(t);var o=e("39e7"),i=e("f5ae");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("f10b");var a,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=r.exports},"39e7":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"24b2"))},uniCollapse:function(){return e.e("uni_modules/uni-collapse/components/uni-collapse/uni-collapse").then(e.bind(null,"d673"))},uniCollapseItem:function(){return e.e("uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item").then(e.bind(null,"f6cd"))}},i=function(){var n=this,t=n.$createElement;n._self._c},u=[]},8529:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("24b2"))}.bind(null,e)).catch(e.oe)},i={components:{uniNavBar:o},data:function(){return{isLog:!1,userImg:"/static/default/userImg.jpg"}},onShow:function(){try{var t=n.getStorageSync("token");"ok"===t&&(console.log(t),this.isLog=!0)}catch(e){console.log(e.message)}},onNavigationBarButtonTap:function(t){switch(t.index){case 0:n.navigateTo({url:"../search/search?type=facelook",animationType:"fade-in"});break;case 1:n.showToast({title:"该功能正在开发",duration:2e3,icon:"error"});break}},methods:{gotoNews:function(){n.switchTab({url:"../news/news"})},gotoMy:function(){this.isLog?n.switchTab({url:"../user/user"}):n.navigateTo({url:"../login/login",animationType:"slide-in-bottom"})},gotoFreinds:function(){n.navigateTo({url:"../friends-list/friends-list"})},gotoSession:function(){n.navigateTo({url:"../session-list/session-list"})},gotoTopic:function(){n.navigateTo({url:"../topic/topic"})},gotoClear:function(){var t=n.getStorageInfoSync().currentSize,e=t<1024?t+"kb":(t/1024).toFixed(2)+"Mb";n.showToast({icon:"success",title:"已清除".concat(e,"缓存")}),n.clearStorageSync()},gotoEmpty:function(){n.showToast({title:"该功能正在开发",duration:2e3,icon:"error"})},logout:function(){var t=this;n.showActionSheet({title:"确定退出？",itemList:["退出"],itemColor:"#c80104",success:function(e){try{n.removeStorageSync("token"),t.isLog=!1,t.onShow()}catch(o){console.log(o.message)}},fail:function(n){console.log(n.errMsg)}})}}};t.default=i}).call(this,e("543d")["default"])},d4bb:function(n,t,e){},e2c8:function(n,t,e){"use strict";(function(n){e("1676");o(e("66fd"));var t=o(e("2f92"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},f10b:function(n,t,e){"use strict";var o=e("d4bb"),i=e.n(o);i.a},f5ae:function(n,t,e){"use strict";e.r(t);var o=e("8529"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a}},[["e2c8","common/runtime","common/vendor"]]]);