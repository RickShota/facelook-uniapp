(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/topic-list/topic-list"],{102:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(103));function o(t){return t&&t.__esModule?t:{default:t}}my.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},103:function(t,e,n){"use strict";n.r(e);var o=n(104),r=n(106);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var c,s=n(11),u=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);u.options.__file="pages/topic-list/topic-list.vue",e["default"]=u.exports},104:function(t,e,n){"use strict";n.r(e);var o=n(105);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},105:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=!1,c=[];r._withStripped=!0},106:function(t,e,n){"use strict";n.r(e);var o=n(107),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},107:function(t,e,n){"use strict";(function(t){function o(t){return s(t)||c(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}],p=function(){n.e("components/common/load-more").then(function(){return resolve(n(157))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/common/topic-item").then(function(){return resolve(n(175))}.bind(null,n)).catch(n.oe)},d={name:"topicList",components:{topicItem:l,loadMore:p},data:function(){return{newList:[],tabIndex:0,scrollH:800,scrollInto:"",tablist:[{name:"关注"},{name:"推荐"},{name:"体育"},{name:"热点"},{name:"财经"},{name:"娱乐"},{name:"军事"},{name:"历史"},{name:"本地"}]}},onLoad:function(){var e=this;t.getSystemInfo({success:function(n){e.scrollH=n.windowHeight-n.statusBarHeight-t.upx2px(100)}}),this.getDate()},methods:{loadmore:function(t){var e=this;"上拉加载更多..."===this.newList[t].loadMore&&(this.newList[t].loadMore="加载中...",setTimeout((function(){e.newList[t].list=[].concat(o(e.newList[t].list),o(e.newList[t].list)),e.newList[t].loadMore="上拉加载更多..."}),2e3))},getDate:function(){for(var t=[],e=0;e<this.tablist.length;e++){var n={list:[],loadMore:"上拉加载更多..."};e<2&&(n={list:a,loadMore:"上拉加载更多..."}),t.push(n)}this.newList=t},follow:function(e){this.newList[0].list[e].isFollow=!this.newList[0].list[e].isFollow,this.newList[0].list[e].isFollow?t.showToast({title:"关注成功"}):t.showToast({title:"已取消关注"})},doSupport:function(e){var n=this.newList[0].list[e.index];console.log();var o="support"===e.type?"点赞":"反对";""===n.support.type&&(n.support.type=e.type,n.support[e.type+"_count"]++),"support"===n.support.type&&"unsupport"===e.type?(n.support.support_count++,n.support.unsupport_count--):"unsupport"===n.support.type&&"support"===e.type&&(n.support.support_count--,n.support.unsupport_count++),n.support.type=e.type,t.showToast({title:o+"成功"})},changeTab:function(t){t!==this.tabIndex&&(this.tabIndex=t,this.scrollInto="tab"+t)},onChangeTab:function(t){this.changeTab(t.detail.current)},onNavigationBarButtonTap:function(){t.navigateTo({url:"../add-input/add-input"})}}};e.default=d}).call(this,n(1)["default"])}},[[102,"common/runtime","common/vendor"]]]);