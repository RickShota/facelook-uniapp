(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"3e1d":function(t,n,e){"use strict";e.r(n);var o=e("ef30"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a},4562:function(t,n,e){"use strict";(function(t){e("1676");o(e("66fd"));var n=o(e("ff03"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"6db1":function(t,n,e){"use strict";var o=e("8e3e"),u=e.n(o);u.a},"867a":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var o={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"24b2"))}},u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"8e3e":function(t,n,e){},ef30:function(t,n,e){"use strict";(function(t){function o(t){return s(t)||i(t)||r(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return c(t)}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("24b2"))}.bind(null,e)).catch(e.oe)},p=[{username:"Assassin~雷古",userpic:"/static/default/defUser.png",newstime:"2022-05-24 上午 11:31",isFollow:!1,title:"马上就要到圣诞节了，提前祝大家圣诞快乐！",titlepic:"/static/demo/banner1.jpg",content:"",support:{type:"support",support_count:123,unsupport_count:0},comment_count:0,share_num:2},{username:"违规用户",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!0,title:"为什么，啊啊啊，真的服了",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:5},comment_count:432,share_num:0},{username:"昵称3",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题2",titlepic:"/static/demo/demo2.jpg",support:{type:"",support_count:1,unsupport_count:5},comment_count:0,share_num:4},{username:"昵称4",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题4",titlepic:"/static/demo/banner2.jpg",support:{type:"",support_count:0,unsupport_count:0},comment_count:0,share_num:4}],l=function(){e.e("components/common/news-item").then(function(){return resolve(e("56e0"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/common/load-more").then(function(){return resolve(e("1f53"))}.bind(null,e)).catch(e.oe)},d={components:{newsItem:l,loadMore:f,uniNavBar:a},data:function(){return{tabIndex:1,scrollInto:"",scrollH:600,loadMore:"上拉加载更多",newsList:[]}},onNavigationBarButtonTap:function(n){1===n.index?t.navigateTo({url:"../search/search",animationType:"fade-in",success:function(t){},fail:function(){},complete:function(){}}):this.gotoTopic()},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){n.scrollH=t.windowHeight}}),this.getData()},methods:{gotoTopic:function(){t.navigateTo({url:"../topic/topic",animationType:"slide-in-right",success:function(t){},fail:function(){},complete:function(){}})},shareNews:function(){t.navigateTo({url:"../add-input/add-input",animationType:"slide-in-bottom",success:function(t){},fail:function(){},complete:function(){}})},getData:function(){this.newsList=p},onfollow:function(t){this.newsList[t].isFollow=!this.newsList[t].isFollow},doSupport:function(t){var n=this.newsList[t.index];if(n.support.support_count>=0&&n.support.unsupport_count>=0)switch(n.support.type){case"":n.support.type=t.type,n.support[t.type+"_count"]++;break;case"support":"unsupport"===t.type?(n.support.type="unsupport",n.support.support_count--,n.support.unsupport_count++):(n.support.type="",n.support.support_count--);break;case"unsupport":"support"===t.type?(n.support.type="support",n.support.support_count++,n.support.unsupport_count--):(n.support.type="",n.support.unsupport_count--);break}},loadmore:function(){var t=this;"上拉加载更多"===this.loadMore&&(this.loadMore="加载中...",setTimeout((function(){t.newsList=[].concat(o(t.newsList),o(t.newsList)),t.loadMore="上拉加载更多"}),2e3))}}};n.default=d}).call(this,e("543d")["default"])},ff03:function(t,n,e){"use strict";e.r(n);var o=e("867a"),u=e("3e1d");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("6db1");var i,s=e("f0c5"),c=Object(s["a"])(u["default"],o["b"],o["c"],!1,null,"026fa12c",null,!1,o["a"],i);n["default"]=c.exports}},[["4562","common/runtime","common/vendor"]]]);