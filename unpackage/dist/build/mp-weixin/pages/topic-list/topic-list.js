(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic-list/topic-list"],{3561:function(t,o,e){"use strict";e.r(o);var n=e("8a71"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o["default"]=i.a},"5f47":function(t,o,e){"use strict";(function(t){e("1676");n(e("66fd"));var o=n(e("7aa5"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("543d")["createPage"])},"7aa5":function(t,o,e){"use strict";e.r(o);var n=e("8b66"),i=e("3561");for(var r in i)"default"!==r&&function(t){e.d(o,t,(function(){return i[t]}))}(r);var c,s=e("f0c5"),a=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);o["default"]=a.exports},"8a71":function(t,o,e){"use strict";(function(t){function n(t){return s(t)||c(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,o){if(t){if("string"===typeof t)return a(t,o);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,o):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return a(t)}function a(t,o){(null==o||o>t.length)&&(o=t.length);for(var e=0,n=new Array(o);e<o;e++)n[e]=t[e];return n}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var u=[{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}],p=function(){e.e("components/common/load-more").then(function(){return resolve(e("1f53"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/common/topic-item").then(function(){return resolve(e("a8a7"))}.bind(null,e)).catch(e.oe)},d={name:"topicList",components:{topicItem:l,loadMore:p},data:function(){return{newList:[],tabIndex:0,scrollH:800,scrollInto:"",tablist:[{name:"关注"},{name:"推荐"},{name:"体育"},{name:"热点"},{name:"财经"},{name:"娱乐"},{name:"军事"},{name:"历史"},{name:"本地"}]}},onLoad:function(){var o=this;t.getSystemInfo({success:function(e){o.scrollH=e.windowHeight-e.statusBarHeight-t.upx2px(100)}}),this.getDate()},methods:{loadmore:function(t){var o=this;"上拉加载更多..."===this.newList[t].loadMore&&(this.newList[t].loadMore="加载中...",setTimeout((function(){o.newList[t].list=[].concat(n(o.newList[t].list),n(o.newList[t].list)),o.newList[t].loadMore="上拉加载更多..."}),2e3))},getDate:function(){for(var t=[],o=0;o<this.tablist.length;o++){var e={list:[],loadMore:"上拉加载更多..."};o<2&&(e={list:u,loadMore:"上拉加载更多..."}),t.push(e)}this.newList=t},follow:function(o){this.newList[0].list[o].isFollow=!this.newList[0].list[o].isFollow,this.newList[0].list[o].isFollow?t.showToast({title:"关注成功"}):t.showToast({title:"已取消关注"})},doSupport:function(o){var e=this.newList[0].list[o.index];console.log();var n="support"===o.type?"点赞":"反对";""===e.support.type&&(e.support.type=o.type,e.support[o.type+"_count"]++),"support"===e.support.type&&"unsupport"===o.type?(e.support.support_count++,e.support.unsupport_count--):"unsupport"===e.support.type&&"support"===o.type&&(e.support.support_count--,e.support.unsupport_count++),e.support.type=o.type,t.showToast({title:n+"成功"})},changeTab:function(t){t!==this.tabIndex&&(this.tabIndex=t,this.scrollInto="tab"+t)},onChangeTab:function(t){this.changeTab(t.detail.current)},onNavigationBarButtonTap:function(){t.navigateTo({url:"../add-input/add-input"})}}};o.default=d}).call(this,e("543d")["default"])},"8b66":function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return r})),e.d(o,"a",(function(){return n}));var i=function(){var t=this,o=t.$createElement;t._self._c},r=[]}},[["5f47","common/runtime","common/vendor"]]]);