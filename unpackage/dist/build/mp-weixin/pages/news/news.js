(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"03c4":function(t,n,e){"use strict";(function(t){function o(t){return i(t)||s(t)||r(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return a(t)}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("24b2"))}.bind(null,e)).catch(e.oe)},p=[{username:"昵称1",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题",titlepic:"/static/demo/banner1.jpg",support:{type:"support",support_count:123,unsupport_count:0},comment_count:0,share_num:2},{username:"昵称2",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!0,title:"这是一个标题2",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:5},comment_count:432,share_num:0},{username:"昵称3",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题2",titlepic:"/static/demo/demo2.jpg",support:{type:"",support_count:1,unsupport_count:5},comment_count:0,share_num:4},{username:"昵称4",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题4",titlepic:"/static/demo/banner2.jpg",support:{type:"",support_count:0,unsupport_count:0},comment_count:0,share_num:4}],l=function(){e.e("components/common/news-item").then(function(){return resolve(e("56e0"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/common/load-more").then(function(){return resolve(e("1f53"))}.bind(null,e)).catch(e.oe)},d={components:{newsItem:l,loadMore:f,uniNavBar:c},data:function(){return{tabIndex:0,scrollInto:"",scrollH:560,newsList:[],tabBars:[{name:"全部"},{name:"特别关注"},{name:"好友"},{name:"小组"},{name:"公共主页"}]}},onNavigationBarButtonTap:function(n){t.navigateTo({url:"../search/search",animationType:"fade-in",success:function(t){},fail:function(){},complete:function(){}})},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){n.scrollH=t.windowHeight-30}}),this.getData()},methods:{getData:function(){for(var t=[],n=0;n<this.tabBars.length;n++){var e={loadMore:"上拉加载更多",list:p};n>3&&(e={loadMore:"",list:[]}),t.push(e)}this.newsList=t},onfollow:function(t){this.newsList[1].list[t].isFollow=!this.newsList[1].list[t].isFollow},doSupport:function(t){var n=this.newsList[1].list[t.index];if(n.support.support_count>=0&&n.support.unsupport_count>=0)switch(n.support.type){case"":n.support.type=t.type,n.support[t.type+"_count"]++;break;case"support":"unsupport"===t.type?(n.support.type="unsupport",n.support.support_count--,n.support.unsupport_count++):(n.support.type="",n.support.support_count--);break;case"unsupport":"support"===t.type?(n.support.type="support",n.support.support_count++,n.support.unsupport_count--):(n.support.type="",n.support.unsupport_count--);break}},onChangeTab:function(t){this.changeTab(t.detail.current)},changeTab:function(t){t!==this.tabIndex&&(this.tabIndex=t,this.scrollInto="tab"+t)},loadmore:function(t){var n=this.newsList[t];"上拉加载更多"===n.loadMore&&(n.loadMore="加载中...",setTimeout((function(){n.list=[].concat(o(n.list),o(n.list)),n.loadMore="上拉加载更多"}),2e3))}}};n.default=d}).call(this,e("543d")["default"])},"3a86":function(t,n,e){},"428c":function(t,n,e){"use strict";(function(t){e("1676");o(e("66fd"));var n=o(e("a8c1"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"6bb7":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var o={uniNavBar:function(){return e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"24b2"))}},u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"756b":function(t,n,e){"use strict";e.r(n);var o=e("03c4"),u=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a},a8c1:function(t,n,e){"use strict";e.r(n);var o=e("6bb7"),u=e("756b");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("f055");var s,i=e("f0c5"),a=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"b212a100",null,!1,o["a"],s);n["default"]=a.exports},f055:function(t,n,e){"use strict";var o=e("3a86"),u=e.n(o);u.a}},[["428c","common/runtime","common/vendor"]]]);