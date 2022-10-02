
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/user/user","pages/news/news","pages/msg/msg","pages/search/search","pages/add-input/add-input","pages/meniu/meniu","pages/session-list/session-list","pages/friends-list/friends-list","pages/topic/topic","pages/topic-list/topic-list","pages/chat-page/chat-page","pages/news-detail/news-detail","pages/user-userInfo/user-userInfo","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"facelook","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","dynamicRpx":true},"tabBar":{"color":"#2b2b2b","selectedColor":"#1676f1","backgroundColor":"#ffffff","borderStyle":"#e5e5e5","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"},{"pagePath":"pages/user/user","text":"个人主页","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/usered.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/msg/msg","text":"通知","iconPath":"static/tabbar/msg.png","selectedIconPath":"static/tabbar/msged.png"},{"pagePath":"pages/meniu/meniu","text":"菜单","iconPath":"static/tabbar/meniu.png","selectedIconPath":"static/tabbar/meniued.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"FaceLook","compilerVersion":"3.6.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"facelook","enablePullDownRefresh":false,"backgroundColor":"#eee","titleNView":{"titleColor":"#1676f1","titleSize":"50rpx","titleAlign":"left","splitLine":true,"buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"55rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"},{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"45rpx","fontWeight":"bold","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的主页","enablePullDownRefresh":false,"titleNView":{"splitLine":{"color":"#e4e5e4","height":"1px"},"titleSize":"40rpx","titleAlign":"center","buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"40rpx","fontWeight":"bold","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"动态","enablePullDownRefresh":false,"titleNView":{"titleSize":"40rpx","titleAlign":"left","buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"40rpx","fontWeight":"bold","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通知","enablePullDownRefresh":true,"titleNView":{"titleSize":"40rpx","titleAlign":"left","buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"55rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"},{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"45rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"splitLine":{"color":"#e4e5e4","height":"1px"},"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"15px","placeholder":"搜索帖子","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#1676f1","float":"right","fontSize":"16px","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false,"softinputMode":"adjustResize"}},{"path":"/pages/meniu/meniu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"菜单","enablePullDownRefresh":false,"backgroundColor":"#f0f2f5","titleNView":{"titleSize":"50rpx","titleAlign":"left","backgroundColor":"#f0f2f5","splitLine":true,"buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"40rpx","fontWeight":"bold","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"},{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"40rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/session-list/session-list","meta":{},"window":{"navigationBarTitleText":"聊天","enablePullDownRefresh":true,"titleNView":{"autoBackButton":true,"titleSize":"40rpx","titleAlign":"center","splitLine":true,"buttons":[{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"50rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"},{"color":"#000","colorPressed":"#1676f1","background":"#e4e6eb","float":"right","fontSize":"45rpx","fontSrc":"/static/icon/iconfont.ttf","text":"","width":"50px"}]}}},{"path":"/pages/friends-list/friends-list","meta":{},"window":{"navigationBarTitleText":"好友列表","enablePullDownRefresh":false,"animationType":"slide-in-right","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"15px","disabled":true,"placeholder":"搜索用户","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#1676f1","float":"right","fontSize":"15px","text":"取消"}]}}},{"path":"/pages/topic/topic","meta":{},"window":{"navigationBarTitleText":"话题","enablePullDownRefresh":false}},{"path":"/pages/topic-list/topic-list","meta":{},"window":{"navigationBarTitleText":"话题分类","enablePullDownRefresh":false}},{"path":"/pages/chat-page/chat-page","meta":{},"window":{"navigationBarTitleText":"聊天","softinputMode":"adjustResize","titleNView":{"splitLine":{"color":"#e4e5e4","height":"1px"},"buttons":[{"color":"#333333","colorPressed":"#1676f1","float":"right","fontSize":"20px","fontSrc":"/static/icon/iconfont.ttf","text":""}]}}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationBarTitleText":"facelook","enablePullDownRefresh":false,"titleNView":{"titleColor":"#1676f1","titleSize":"40rpx","titleAlign":"center","splitLine":true,"buttons":[{"color":"#333333","colorPressed":"#1676f1","type":"menu","float":"right"}]}}},{"path":"/pages/user-userInfo/user-userInfo","meta":{},"window":{"navigationBarTitleText":"编辑资料","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
