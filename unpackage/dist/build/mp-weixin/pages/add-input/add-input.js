(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add-input/add-input"],{"029a":function(e,t,n){"use strict";n.r(t);var i=n("ae3e"),r=n("8b7d");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("e3ff");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=o.exports},"068e":function(e,t,n){"use strict";var i=n("5d56"),r=n.n(i);r.a},"4ba7":function(e,t,n){"use strict";n.r(t);var i=n("f75b"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"5d56":function(e,t,n){},"8b7d":function(e,t,n){"use strict";n.r(t);var i=n("e81b"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},9065:function(e,t,n){"use strict";n.r(t);var i=n("dc94"),r=n("4ba7");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("068e");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"5d4a1a16",null,!1,i["a"],s);t["default"]=o.exports},"9e98":function(e,t,n){},ae3e:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},cefb:function(e,t,n){"use strict";(function(e){n("1676");i(n("66fd"));var t=i(n("9065"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},dc94:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"24b2"))},uniFilePicker:function(){return Promise.resolve().then(n.bind(null,"029a"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},e3ff:function(e,t,n){"use strict";var i=n("9e98"),r=n.n(i);r.a},e81b:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),a=n("def7"),s=n("5459");function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return d(e)||f(e)||c(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return h(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,i,r,a,s){try{var u=e[a](s),o=u.value}catch(l){return void n(l)}u.done?t(o):Promise.resolve(o).then(i,r)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){g(a,i,r,s,u,"next",e)}function u(e){g(a,i,r,s,u,"throw",e)}s(void 0)}))}}var y=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(n("608d"))}.bind(null,n)).catch(n.oe)},x=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(n("4114"))}.bind(null,n)).catch(n.oe)},k={name:"uniFilePicker",components:{uploadImage:y,uploadFile:x},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=a.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,n){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var n=this;return v(r.default.mark((function t(){var i,a,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=function(){var e=v(r.default.mark((function e(t){var i,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=/cloud:\/\/([\w.]+\/?)\S*/,a="",a=t.fileID?t.fileID:t.url,!i.test(a)){e.next=8;break}return t.fileID=a,e.next=7,n.getTempFileURL(a);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==n.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,i(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),a=0;case 12:if(!(a<e.length)){t.next=19;break}return s=e[a],t.next=16,i(s);case 16:a++,t.next=12;break;case 19:n.localValue=e,n.form&&n.formItem&&!n.is_reset&&(n.is_reset=!1,n.formItem.setValue(n.localValue)),u=Object.keys(e).length>0?e:[],n.files=[].concat(u);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?i.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,n=(0,s.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:n.length>0?n:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return v(r.default.mark((function n(){var i,a,u,o,l,c,f,d;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=(0,s.get_extname)(t.fileExtname),a=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,a&&(t.files=[]),u=(0,s.get_files_and_is_max)(e,i),o=u.filePaths,l=u.files,i&&i.length>0||(o=e.tempFilePaths,l=e.tempFiles),c=[],f=0;case 7:if(!(f<l.length)){n.next=21;break}if(!(t.limitLength-t.files.length<=0)){n.next=10;break}return n.abrupt("break",21);case 10:return l[f].uuid=Date.now(),n.next=13,(0,s.get_file_data)(l[f],t.fileMediatype);case 13:d=n.sent,d.progress=0,d.status="ready",t.files.push(d),c.push(m(m({},d),{},{file:l[f]}));case 18:f++,n.next=7;break;case 21:t.$emit("select",{tempFiles:c,tempFilePaths:o}),e.tempFiles=l,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),a.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var n=this;return v(r.default.mark((function t(){var i,a,s,u,o,l,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],a=[],s=[],u=[],o=r.default.mark((function t(o){var l,c,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(l=e[o],c=l.uuid?n.files.findIndex((function(e){return e.uuid===l.uuid})):l.index,-1!==c&&n.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==l.errMsg){t.next=12;break}n.files[c].url=l.path,n.files[c].status="error",n.files[c].errMsg=l.errMsg,a.push(n.files[c]),u.push(n.files[c].url),t.next=26;break;case 12:if(n.files[c].errMsg="",n.files[c].fileID=l.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(l.url)){t.next=21;break}return t.next=18,n.getTempFileURL(l.url);case 18:n.files[c].url=t.sent,t.next=22;break;case 21:n.files[c].url=l.url;case 22:n.files[c].status="success",n.files[c].progress+=1,i.push(n.files[c]),s.push(n.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),l=0;case 6:if(!(l<e.length)){t.next=14;break}return t.delegateYield(o(l),"t0",8);case 8:if(c=t.t0,"break"!==c){t.next=11;break}return t.abrupt("break",14);case 11:l++,t.next=6;break;case 14:i.length>0&&(n.setEmit(),n.$emit("success",{tempFiles:n.backObject(i),tempFilePaths:s})),a.length>0&&n.$emit("fail",{tempFiles:n.backObject(a),tempFilePaths:u});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,n){this.files.length;var i=Math.round(100*e.loaded/e.total),r=t;n||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=i-1,this.$emit("progress",{index:r,progress:parseInt(i),tempFile:this.files[r]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),n=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,n)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=o(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return v(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={fileList:[].concat(t)},n.next=3,e.getTempFileURL(t);case 3:return i=n.sent,n.abrupt("return",i.fileList[0].tempFileURL||"");case 5:case"end":return n.stop()}}),n)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=k}).call(this,n("a9ff")["default"],n("543d")["default"])},f75b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("029a"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("24b2"))}.bind(null,n)).catch(n.oe)},a={components:{uniNavBar:r},data:function(){return{text:"",imageList:[]}},onLaunch:function(){},onLoad:function(){var t=this;e.getStorage({key:"add-input",success:function(e){if(e.data){var n=JSON.parse(e.data);t.text=n.content,t.imageList=n.imageList}}})},methods:{select:function(e){console.log("选择文件：",e)},progress:function(e){console.log("上传进度：",e)},success:function(e){console.log("上传成功")},fail:function(e){console.log("上传失败：",e)},back:function(){var t=this;""!==this.text||this.imageList.length>0?e.showModal({content:"是否保存为草稿？",showCancel:!0,cancelText:"不保存",confirmText:"保存",success:function(n){n.confirm?t.saveStore():(e.navigateBack({animationType:"slide-out-bottom"}),e.removeStorage({key:"add-input"}))}}):e.navigateBack({animationType:"slide-out-bottom"})},send:function(){console.log("发送内容：",this.text,this.imageList)},saveStore:function(){var t={content:this.text,imageList:this.imageList};e.setStorage({key:"add-input",data:JSON.stringify(t)})},checkImg:function(){this.$refs.choosePic.choose()},checkLocation:function(){e.getLocation({type:"wgs84",success:function(e){console.log("当前位置的经度："+e.longitude),console.log("当前位置的纬度："+e.latitude)}})},checkKeyboard:function(){e.hideKeyboard()}}};t.default=a}).call(this,n("543d")["default"])}},[["cefb","common/runtime","common/vendor"]]]);