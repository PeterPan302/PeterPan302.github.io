(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-alertTips-index"],{"01f3":function(t,e,i){var n=i("d7bc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("89d6066a",n,!0,{sourceMap:!1,shadowMode:!1})},1235:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b783").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-alert-tips",class:[t.show?"":"u-close-alert-tips",t.type?"u-alert-tips--bg--"+t.type+"-light":"",t.type?"u-alert-tips--border--"+t.type+"-disabled":""],style:{backgroundColor:t.bgColor,borderColor:t.borderColor}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.showIcon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.uIcon,size:t.description?40:32,color:t.uIconType,"custom-style":t.iconStyle}}):t._e()],1),i("v-uni-view",{staticClass:"u-alert-content",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-alert-title",style:[t.uTitleStyle]},[t._v(t._s(t.title))]),t.description?i("v-uni-view",{staticClass:"u-alert-desc",style:[t.descStyle]},[t._v(t._s(t.description))]):t._e()],1),i("v-uni-view",{staticClass:"u-icon-wrap"},[t.closeAble&&!t.closeText?i("u-icon",{staticClass:"u-close-icon",style:{top:t.description?"18rpx":"24rpx"},attrs:{hoverClass:"u-type-error-hover-color",name:"close",color:"#c0c4cc",size:22},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1),t.closeAble&&t.closeText?i("v-uni-text",{staticClass:"u-close-text",style:{top:t.description?"18rpx":"24rpx"}},[t._v(t._s(t.closeText))]):t._e()],1):t._e()},a=[]},1549:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a4d3"),i("e01a"),i("b64b");var n={name:"u-alert-tips",props:{title:{type:String,default:""},type:{type:String,default:"warning"},description:{type:String,default:""},closeAble:{type:Boolean,default:!1},closeText:{type:String,default:""},showIcon:{type:Boolean,default:!1},color:{type:String,default:""},bgColor:{type:String,default:""},borderColor:{type:String,default:""},show:{type:Boolean,default:!0},icon:{type:String,default:""},iconStyle:{type:Object,default:function(){return{}}},titleStyle:{type:Object,default:function(){return{}}},descStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{uTitleStyle:function(){var t={};return t.fontWeight=this.description?500:"normal",this.$u.deepMerge(t,this.titleStyle)},uIcon:function(){return this.icon?this.icon:this.$u.type2icon(this.type)},uIconType:function(){return Object.keys(this.iconStyle).length?"":this.type}},methods:{click:function(){this.$emit("click")},close:function(){this.$emit("close")}}};e.default=n},"1b98":function(t,e,i){"use strict";var n=i("a9bd"),o=i.n(n);o.a},"1e8e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-alert-tips[data-v-438c502a]{display:flex;flex-direction:row;align-items:center;padding:%?16?% %?30?%;border-radius:%?8?%;position:relative;transition:all .3s linear;border:1px solid #fff}.u-alert-tips--bg--primary-light[data-v-438c502a]{background-color:#ecf5ff}.u-alert-tips--bg--info-light[data-v-438c502a]{background-color:#f4f4f5}.u-alert-tips--bg--success-light[data-v-438c502a]{background-color:#dbf1e1}.u-alert-tips--bg--warning-light[data-v-438c502a]{background-color:#fdf6ec}.u-alert-tips--bg--error-light[data-v-438c502a]{background-color:#fef0f0}.u-alert-tips--border--primary-disabled[data-v-438c502a]{border-color:#a0cfff}.u-alert-tips--border--success-disabled[data-v-438c502a]{border-color:#71d5a1}.u-alert-tips--border--error-disabled[data-v-438c502a]{border-color:#fab6b6}.u-alert-tips--border--warning-disabled[data-v-438c502a]{border-color:#fcbd71}.u-alert-tips--border--info-disabled[data-v-438c502a]{border-color:#c8c9cc}.u-close-alert-tips[data-v-438c502a]{opacity:0;visibility:hidden}.u-icon[data-v-438c502a]{margin-right:%?16?%}.u-alert-title[data-v-438c502a]{font-size:%?28?%;color:#303133}.u-alert-desc[data-v-438c502a]{font-size:%?26?%;text-align:left;color:#606266}.u-close-icon[data-v-438c502a]{position:absolute;top:%?20?%;right:%?20?%}.u-close-hover[data-v-438c502a]{color:red}.u-close-text[data-v-438c502a]{font-size:%?24?%;color:#909399;position:absolute;top:%?20?%;right:%?20?%;line-height:1}',""]),t.exports=e},"209e":function(t,e,i){"use strict";var n=i("36c2"),o=i.n(n);o.a},"31cd7":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uToast:i("5143").default,uAlertTips:i("c001").default,uSubsection:i("fa67").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-toast",{ref:"uToast"}),i("u-alert-tips",{attrs:{closeAble:t.closeAble,show:t.show,type:t.type,title:t.title,description:t.description,showIcon:t.showIcon},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("左侧图标")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.showIconChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("关闭图标")]),i("u-subsection",{attrs:{current:"1",list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAbleChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("主题")]),i("u-subsection",{attrs:{current:"3",list:["primary","success","error","warning","info"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),i("u-subsection",{attrs:{current:t.current,list:["开启","关闭"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.showChange.apply(void 0,arguments)}}})],1)],1)],1)},a=[]},"348a":function(t,e,i){"use strict";i.r(e);var n=i("31cd7"),o=i("3fd4");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1b98");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"5b8e9c8c",null,!1,n["a"],void 0);e["default"]=s.exports},"36c2":function(t,e,i){var n=i("d579");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7f5e42b6",n,!0,{sourceMap:!1,shadowMode:!1})},"3f66":function(t,e,i){"use strict";i.r(e);var n=i("f015"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"3fd4":function(t,e,i){"use strict";i.r(e);var n=i("c203"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},5143:function(t,e,i){"use strict";i.r(e);var n=i("63fb"),o=i("3f66");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("209e");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"36307caf",null,!1,n["a"],void 0);e["default"]=s.exports},"63fb":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b783").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},"7b00":function(t,e,i){var n=i("1e8e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7be1867c",n,!0,{sourceMap:!1,shadowMode:!1})},"7be1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},o=[]},"87fb":function(t,e,i){"use strict";i.r(e);var n=i("a077"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"88b3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.wrap[data-v-5b8e9c8c]{padding:%?24?%}.item[data-v-5b8e9c8c]{margin:%?30?% 0}',""]),t.exports=e},a077:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("53ca"));i("a9e3"),i("d81d"),i("99af"),i("ac1f");var a={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=(0,o.default)(t)){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=a},a9bd:function(t,e,i){var n=i("88b3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("53c4a936",n,!0,{sourceMap:!1,shadowMode:!1})},c001:function(t,e,i){"use strict";i.r(e);var n=i("1235"),o=i("c64e");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("cd57");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"438c502a",null,!1,n["a"],void 0);e["default"]=s.exports},c203:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{title:"大漠孤烟直，长河落日圆",description:"月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。飞流直下三千尺，疑是银河落九天！",show:!0,closeAble:!1,showIcon:!1,type:"warning"}},computed:{current:function(){return this.show?0:1}},methods:{showIconChange:function(t){this.showIcon=0==t},showChange:function(t){this.show=0==t},closeAbleChange:function(t){this.closeAble=0==t},typeChange:function(t){this.type=0==t?"primary":1==t?"success":2==t?"error":3==t?"warning":"info"},close:function(){this.show=!1,this.$refs.uToast.show({type:"warning",title:"点击关闭按钮"})},click:function(){this.$refs.uToast.show({type:"warning",title:"点击内容"})}}}},c64e:function(t,e,i){"use strict";i.r(e);var n=i("1549"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},cd57:function(t,e,i){"use strict";var n=i("7b00"),o=i.n(n);o.a},d579:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},d7bc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,i){"use strict";var n=i("01f3"),o=i.n(n);o.a},f015:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975"),i("b64b"),i("ac1f"),i("00b4");var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=n},fa67:function(t,e,i){"use strict";i.r(e);var n=i("7be1"),o=i("87fb");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("d833");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],void 0);e["default"]=s.exports}}]);