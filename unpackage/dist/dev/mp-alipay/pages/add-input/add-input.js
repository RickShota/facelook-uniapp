(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/add-input/add-input"],{53:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(54));function r(e){return e&&e.__esModule?e:{default:e}}my.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},54:function(e,t,n){"use strict";n.r(t);var r=n(55),i=n(57);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n(74);var s,a=n(11),o=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"2796b904",null,!1,r["components"],s);o.options.__file="pages/add-input/add-input.vue",t["default"]=o.exports},55:function(e,t,n){"use strict";n.r(t);var r=n(56);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},56:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return r}));try{r={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,187))},uniFilePicker:function(){return Promise.resolve().then(n.bind(null,59))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement;e._self._c},u=!1,s=[];i._withStripped=!0},57:function(e,t,n){"use strict";n.r(t);var r=n(58),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},58:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(59));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n(187))}.bind(null,n)).catch(n.oe)},u={components:{uniNavBar:i},data:function(){return{text:"",imageList:[]}},onLaunch:function(){},onLoad:function(){var t=this;e.getStorage({key:"add-input",success:function(e){if(e.data){var n=JSON.parse(e.data);t.text=n.content,t.imageList=n.imageList}}})},methods:{checkKeyboard:function(){e.hideKeyboard()}}};t.default=u}).call(this,n(1)["default"])},59:function(e,t,n){"use strict";n.r(t);var r=n(60),i=n(62);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n(72);var s,a=n(11),o=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);o.options.__file="uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue",t["default"]=o.exports},60:function(e,t,n){"use strict";n.r(t);var r=n(61);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},61:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},u=!1,s=[];i._withStripped=!0},62:function(e,t,n){"use strict";n.r(t);var r=n(63),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},63:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(65)),u=n(70),s=n(71);function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return d(e)||f(e)||l(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t,n,r,i,u,s){try{var a=e[u](s),o=a.value}catch(c){return void n(c)}a.done?t(o):Promise.resolve(o).then(r,i)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function s(e){v(u,r,i,s,a,"next",e)}function a(e){v(u,r,i,s,a,"throw",e)}s(void 0)}))}}var y=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(n(194))}.bind(null,n)).catch(n.oe)},x=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(n(201))}.bind(null,n)).catch(n.oe)},k={name:"uniFilePicker",components:{uploadImage:y,uploadFile:x},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=u.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,n){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var n=this;return g(i.default.mark((function t(){var r,u,s,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=function(){var e=g(i.default.mark((function e(t){var r,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=/cloud:\/\/([\w.]+\/?)\S*/,u="",u=t.fileID?t.fileID:t.url,!r.test(u)){e.next=8;break}return t.fileID=u,e.next=7,n.getTempFileURL(u);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==n.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,r(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),u=0;case 12:if(!(u<e.length)){t.next=19;break}return s=e[u],t.next=16,r(s);case 16:u++,t.next=12;break;case 19:n.localValue=e,n.form&&n.formItem&&!n.is_reset&&(n.is_reset=!1,n.formItem.setValue(n.localValue)),a=Object.keys(e).length>0?e:[],n.files=[].concat(a);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?r.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,n=(0,s.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:n.length>0?n:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return g(i.default.mark((function n(){var r,u,a,o,c,l,f,d;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=(0,s.get_extname)(t.fileExtname),u=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,u&&(t.files=[]),a=(0,s.get_files_and_is_max)(e,r),o=a.filePaths,c=a.files,r&&r.length>0||(o=e.tempFilePaths,c=e.tempFiles),l=[],f=0;case 7:if(!(f<c.length)){n.next=21;break}if(!(t.limitLength-t.files.length<=0)){n.next=10;break}return n.abrupt("break",21);case 10:return c[f].uuid=Date.now(),n.next=13,(0,s.get_file_data)(c[f],t.fileMediatype);case 13:d=n.sent,d.progress=0,d.status="ready",t.files.push(d),l.push(m(m({},d),{},{file:c[f]}));case 18:f++,n.next=7;break;case 21:t.$emit("select",{tempFiles:l,tempFilePaths:o}),e.tempFiles=c,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),u.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var n=this;return g(i.default.mark((function t(){var r,u,s,a,o,c,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=[],u=[],s=[],a=[],o=i.default.mark((function t(o){var c,l,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=e[o],l=c.uuid?n.files.findIndex((function(e){return e.uuid===c.uuid})):c.index,-1!==l&&n.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==c.errMsg){t.next=12;break}n.files[l].url=c.path,n.files[l].status="error",n.files[l].errMsg=c.errMsg,u.push(n.files[l]),a.push(n.files[l].url),t.next=26;break;case 12:if(n.files[l].errMsg="",n.files[l].fileID=c.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(c.url)){t.next=21;break}return t.next=18,n.getTempFileURL(c.url);case 18:n.files[l].url=t.sent,t.next=22;break;case 21:n.files[l].url=c.url;case 22:n.files[l].status="success",n.files[l].progress+=1,r.push(n.files[l]),s.push(n.files[l].fileID);case 26:case"end":return t.stop()}}),t)})),c=0;case 6:if(!(c<e.length)){t.next=14;break}return t.delegateYield(o(c),"t0",8);case 8:if(l=t.t0,"break"!==l){t.next=11;break}return t.abrupt("break",14);case 11:c++,t.next=6;break;case 14:r.length>0&&(n.setEmit(),n.$emit("success",{tempFiles:n.backObject(r),tempFilePaths:s})),u.length>0&&n.$emit("fail",{tempFiles:n.backObject(u),tempFilePaths:a});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,n){this.files.length;var r=Math.round(100*e.loaded/e.total),i=t;n||(i=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==i&&this.files[i]&&(this.files[i].progress=r-1,this.$emit("progress",{index:i,progress:parseInt(r),tempFile:this.files[i]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),n=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,n)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=o(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return g(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={fileList:[].concat(t)},n.next=3,e.getTempFileURL(t);case 3:return r=n.sent,n.abrupt("return",r.fileList[0].tempFileURL||"");case 5:case"end":return n.stop()}}),n)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=k}).call(this,n(64)["default"],n(1)["default"])},72:function(e,t,n){"use strict";n.r(t);var r=n(73),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(75),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},75:function(e,t,n){}},[[53,"common/runtime","common/vendor"]]]);