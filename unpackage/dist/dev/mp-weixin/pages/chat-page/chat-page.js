(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat-page/chat-page"],{108:function(e,t,n){"use strict";(function(e){n(5);a(n(4));var t=a(n(109));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},109:function(e,t,n){"use strict";n.r(t);var a=n(110),r=n(112);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(114);var s,u=n(11),c=Object(u["default"])(r["default"],a["render"],a["staticRenderFns"],!1,null,"6ad717e0",null,!1,a["components"],s);c.options.__file="pages/chat-page/chat-page.vue",t["default"]=c.exports},110:function(e,t,n){"use strict";n.r(t);var a=n(111);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},111:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return a}));try{a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,227))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},i=!1,s=[];r._withStripped=!0},112:function(e,t,n){"use strict";n.r(t);var a=n(113),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},113:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){Promise.all([n.e("common/vendor"),n.e("components/common/chat-item")]).then(function(){return resolve(n(235))}.bind(null,n)).catch(n.oe)},r={components:{chatItem:a},data:function(){return{scrollInto:"",content:"",list:[{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"你好啊!",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"你好",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"有什么事吗",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"嗯？？？",type:"text",create_time:1624590418},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"是这样的，最近在投资一个项目，手头有点缺票子，想跟兄弟借一点",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"你想借多少",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"我最近手头也不宽裕啊",type:"text",create_time:1624590418},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"20万吧，最迟6个月后就还你",type:"text",create_time:1624590418},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"连本带利",type:"text",create_time:1624590418},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"哥，还在吗",type:"text",create_time:1624590987},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"兄弟在吗兄弟？要不先借10万吧",type:"text",create_time:1624590418},{user_id:2,avatar:"/static/default/defUser.png",username:"昵称",data:"求求你了",type:"text",create_time:1624590418},{user_id:1,avatar:"/static/default/defUser.png",username:"昵称",data:"不好意思，我不认识你",type:"text",create_time:1624590418}]}},props:["username"],onReady:function(){this.pageToBottom()},onLoad:function(e){e.username&&this.__init(e.username)},methods:{pageToBottom:function(){var e=this.list.length-1;e<0||(this.scrollInto="chat"+e)},__init:function(t){e.setNavigationBarTitle({title:t})},submit:function(){var t=this,n={user_id:1,avatar:"/static/default/defUser.png",username:"昵称",type:"text",data:this.content,create_time:(new Date).getTime()};if(""===this.content)return e.showToast({title:"信息不能为空",icon:"none"});this.list.push(n),this.content="",this.$nextTick((function(){t.pageToBottom()}))}}};t.default=r}).call(this,n(1)["default"])},114:function(e,t,n){"use strict";n.r(t);var a=n(115),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},115:function(e,t,n){}},[[108,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat-page/chat-page.js.map