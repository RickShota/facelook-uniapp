(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{21:function(n,e,t){"use strict";(function(n){t(5);o(t(4));var e=o(t(22));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},22:function(n,e,t){"use strict";t.r(e);var o=t(23),r=t(25);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t(27);var i,s=t(11),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"80842834",null,!1,o["components"],i);c.options.__file="pages/user/user.vue",e["default"]=c.exports},23:function(n,e,t){"use strict";t.r(e);var o=t(24);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},24:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return o}));var r=function(){var n=this,e=n.$createElement;n._self._c},u=!1,i=[];r._withStripped=!0},25:function(n,e,t){"use strict";t.r(e);var o=t(26),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},26:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){t.e("components/common/news-item").then(function(){return resolve(t(157))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/common/load-more").then(function(){return resolve(t(164))}.bind(null,t)).catch(t.oe)},u={components:{newsItem:o,loadMore:r},data:function(){return{isLog:!1,sos:!1,userName:"Rick Henry",loadMore:"上拉加载更多",tapList:["📚 学习","🍕️️ 吃货","🍨 美食","🎬 电影","🎠 骑马","👟 跑步","🎳 保龄球","⛳ 高尔夫","🕹 游戏"],myData:[{name:"帖子",num:9},{name:"动态",num:9},{name:"评论",num:1},{name:"粉丝",num:0}],myList:[{username:"Rick Henry",userpic:"/static/default/userImg.jpg",newstime:"2022-05-24 上午 11:31",isFollow:!1,title:"马上就要到圣诞节了，提前祝大家圣诞快乐！",titlepic:"/static/demo/banner1.jpg",content:"",support:{type:"support",support_count:123,unsupport_count:0},comment_count:0,share_num:2}]}},onShow:function(){try{var e=n.getStorageSync("token");"ok"===e?(console.log(e),this.isLog=!0):"sos"===e&&(this.isLog=!0,this.sos=!0)}catch(t){console.log(t.message)}},onNavigationBarButtonTap:function(){this.editUserInfo()},methods:{sendNew:function(){this.sos||n.navigateTo({url:"../add-input/add-input",animationType:"slide-in-bottom"})},editUserInfo:function(){n.navigateTo({url:"../user-userInfo/user-userInfo",animationType:"slide-in-bottom"})},gotoLogin:function(){n.navigateTo({url:"../login/login",animationType:"slide-in-bottom"})}}};e.default=u}).call(this,t(1)["default"])},27:function(n,e,t){"use strict";t.r(e);var o=t(28),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},28:function(n,e,t){}},[[21,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map