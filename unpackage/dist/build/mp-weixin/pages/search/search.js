(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"110d":function(t,e,n){"use strict";n.r(e);var o=n("f5ba"),c=n("a728");for(var s in c)"default"!==s&&function(t){n.d(e,t,(function(){return c[t]}))}(s);n("1dfb");var a,i=n("f0c5"),u=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=u.exports},"1dfb":function(t,e,n){"use strict";var o=n("6116"),c=n.n(o);c.a},6116:function(t,e,n){},a728:function(t,e,n){"use strict";n.r(e);var o=n("dccb"),c=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=c.a},dccb:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[{username:"昵称1",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题",titlepic:"/static/demo/banner1.jpg",support:{type:"support",support_count:123,unsupport_count:0},comment_count:0,share_num:2},{username:"昵称2",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!0,title:"这是一个标题2",titlepic:"",support:{type:"unsupport",support_count:0,unsupport_count:5},comment_count:432,share_num:0},{username:"昵称3",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题2",titlepic:"/static/demo/banner3.jpg",support:{type:"",support_count:1,unsupport_count:5},comment_count:0,share_num:4},{username:"昵称4",userpic:"/static/default/defUser.png",newstime:"2020-05-24 上午 11:31",isFollow:!1,title:"这是一个标题4",titlepic:"/static/demo/banner2.jpg",support:{type:"",support_count:0,unsupport_count:0},comment_count:0,share_num:4}],c=[{avatar:"/static/default/defUser.png",username:"赵丽颖",sex:1,age:26,isFollow:!0},{avatar:"/static/default/defUser.png",username:"男爵",sex:2,age:14,isFollow:!1},{avatar:"/static/default/defUser.png",username:"赵丽颖",sex:1,age:26,isFollow:!0},{avatar:"/static/default/defUser.png",username:"男爵",sex:2,age:14,isFollow:!1},{avatar:"/static/default/defUser.png",username:"赵丽颖",sex:1,age:26,isFollow:!0},{avatar:"/static/default/defUser.png",username:"男爵",sex:2,age:14,isFollow:!1}],s=[{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/topicpic/1.jpeg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}],a=function(){n.e("components/common/news-item").then(function(){return resolve(n("56e0"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/common/topic-item").then(function(){return resolve(n("a8a7"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/common/friends-item").then(function(){return resolve(n("111f"))}.bind(null,n)).catch(n.oe)},r={components:{newsItem:a,topicItem:i,friendsItem:u},data:function(){return{historyList:["羊了个羊","iPhone 14灵动岛","俄乌冲突","微软Win11 22H2","卢克文工作室","司马南","U型锁","杭电"],searchRes:[],text:"",searchType:""}},onLoad:function(t){t.type&&(this.searchType=t.type);switch(this.searchType){case"user":"搜索用户";break;case"topic":"搜索话题";break;case"facelook":"在Facelook中搜索";break;default:"搜索帖子"}},onNavigationBarSearchInputChanged:function(t){this.text=t.text,""===this.text&&(this.searchRes=[])},onNavigationBarSearchInputConfirmed:function(t){this.searchEvent(this.text)},onNavigationBarButtonTap:function(t){0===t.index&&this.searchEvent(this.text)},methods:{searchEvent:function(e){var n=this;console.log(e),t.hideKeyboard(),this.historyList.includes(e)||this.historyList.unshift(e),t.showLoading({title:"加载中...",mask:!1}),setTimeout((function(){switch(t.hideLoading(),n.searchType){case"user":n.searchRes=c;break;case"topic":n.searchRes=s;break;case"facelook":n.searchRes=[1];break;default:n.searchRes=o}}),1500)}}};e.default=r}).call(this,n("543d")["default"])},f5ba:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var c=function(){var t=this,e=t.$createElement;t._self._c},s=[]},fa32:function(t,e,n){"use strict";(function(t){n("1676");o(n("66fd"));var e=o(n("110d"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["fa32","common/runtime","common/vendor"]]]);