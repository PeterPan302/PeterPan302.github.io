(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-tag-index"],{"01f3":function(t,e,i){var o=i("d7bc");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("89d6066a",o,!0,{sourceMap:!1,shadowMode:!1})},"0ae2":function(t,e,i){var o=i("4e59");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("3c8db3bc",o,!0,{sourceMap:!1,shadowMode:!1})},"209e":function(t,e,i){"use strict";var o=i("36c2"),n=i.n(o);n.a},"21b0":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var t={};return this.color&&(t.color=this.color),this.bgColor&&(t.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?t.borderColor=this.color:t.borderColor=this.borderColor,t},iconStyle:function(){if(this.closeable){var t={};return"mini"==this.size?t.fontSize="20rpx":t.fontSize="22rpx","plain"==this.mode||"light"==this.mode?t.color=this.type:"dark"==this.mode&&(t.color="#ffffff"),this.closeColor&&(t.color=this.closeColor),t}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};e.default=o},"34aa":function(t,e,i){"use strict";i.r(e);var o=i("44e9"),n=i("c96c");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("6b53");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"392eb0dd",null,!1,o["a"],r);e["default"]=c.exports},"36c2":function(t,e,i){var o=i("d579");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("7f5e42b6",o,!0,{sourceMap:!1,shadowMode:!1})},"3f66":function(t,e,i){"use strict";i.r(e);var o=i("f015"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"44cf":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uIcon:i("b783").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-tag",class:[t.disabled?"u-disabled":"","u-size-"+t.size,"u-shape-"+t.shape,"u-mode-"+t.mode+"-"+t.type],style:[t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTag.apply(void 0,arguments)}}},[t._v(t._s(t.text)),i("v-uni-view",{staticClass:"u-icon-wrap",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[t.closeable?i("u-icon",{staticClass:"u-close-icon",style:[t.iconStyle],attrs:{size:"22",color:t.closeIconColor,name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1):t._e()},a=[]},"44e9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uToast:i("5143").default,uTag:i("852c").default,uSubsection:i("fa67").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-toast",{ref:"uToast"}),i("u-tag",{attrs:{text:t.text,type:t.type,shape:t.shape,closeable:t.closeable,mode:t.mode,show:t.show,size:t.size},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("模式选择")]),i("u-subsection",{attrs:{list:["light","dark","plain"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("显示内容")]),i("u-subsection",{attrs:{list:["蒹葭苍苍","白露为霜","在水一方"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.textChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("主题选择")]),i("u-subsection",{attrs:{current:"2",list:["primary","success","error","warning","info"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("形状")]),i("u-subsection",{attrs:{list:["square","circle","circleLeft","circleRight"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.shapeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("尺寸")]),i("u-subsection",{attrs:{list:["default","mini"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sizeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("关闭图标")]),i("u-subsection",{attrs:{list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.closeableChange.apply(void 0,arguments)}}})],1)],1)],1)},a=[]},"4cb1":function(t,e,i){"use strict";var o=i("a4a8"),n=i.n(o);n.a},"4e59":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=e},5143:function(t,e,i){"use strict";i.r(e);var o=i("63fb"),n=i("3f66");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("209e");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"36307caf",null,!1,o["a"],r);e["default"]=c.exports},5612:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-tag[data-v-0cf9d257]{box-sizing:border-box;align-items:center;border-radius:%?6?%;display:inline-block;line-height:1}.u-size-default[data-v-0cf9d257]{font-size:%?22?%;padding:%?12?% %?22?%}.u-size-mini[data-v-0cf9d257]{font-size:%?20?%;padding:%?6?% %?12?%}.u-mode-light-primary[data-v-0cf9d257]{background-color:#ecf5ff;color:#2979ff;border:1px solid #a0cfff}.u-mode-light-success[data-v-0cf9d257]{background-color:#dbf1e1;color:#19be6b;border:1px solid #71d5a1}.u-mode-light-error[data-v-0cf9d257]{background-color:#fef0f0;color:#fa3534;border:1px solid #fab6b6}.u-mode-light-warning[data-v-0cf9d257]{background-color:#fdf6ec;color:#f90;border:1px solid #fcbd71}.u-mode-light-info[data-v-0cf9d257]{background-color:#f4f4f5;color:#909399;border:1px solid #c8c9cc}.u-mode-dark-primary[data-v-0cf9d257]{background-color:#2979ff;color:#fff}.u-mode-dark-success[data-v-0cf9d257]{background-color:#19be6b;color:#fff}.u-mode-dark-error[data-v-0cf9d257]{background-color:#fa3534;color:#fff}.u-mode-dark-warning[data-v-0cf9d257]{background-color:#f90;color:#fff}.u-mode-dark-info[data-v-0cf9d257]{background-color:#909399;color:#fff}.u-mode-plain-primary[data-v-0cf9d257]{background-color:#fff;color:#2979ff;border:1px solid #2979ff}.u-mode-plain-success[data-v-0cf9d257]{background-color:#fff;color:#19be6b;border:1px solid #19be6b}.u-mode-plain-error[data-v-0cf9d257]{background-color:#fff;color:#fa3534;border:1px solid #fa3534}.u-mode-plain-warning[data-v-0cf9d257]{background-color:#fff;color:#f90;border:1px solid #f90}.u-mode-plain-info[data-v-0cf9d257]{background-color:#fff;color:#909399;border:1px solid #909399}.u-disabled[data-v-0cf9d257]{opacity:.55}.u-shape-circle[data-v-0cf9d257]{border-radius:%?100?%}.u-shape-circleRight[data-v-0cf9d257]{border-radius:0 %?100?% %?100?% 0}.u-shape-circleLeft[data-v-0cf9d257]{border-radius:%?100?% 0 0 %?100?%}.u-close-icon[data-v-0cf9d257]{margin-left:%?14?%;font-size:%?22?%;color:#19be6b}.u-icon-wrap[data-v-0cf9d257]{display:inline-flex;-webkit-transform:scale(.86);transform:scale(.86)}',""]),t.exports=e},"63fb":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uIcon:i("b783").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},"6b53":function(t,e,i){"use strict";var o=i("0ae2"),n=i.n(o);n.a},7253:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{text:"蒹葭苍苍",mode:"light",type:"error",size:"default",shape:"square",closeable:!0,show:!0}},methods:{modeChange:function(t){this.mode=0==t?"light":1==t?"dark":"plain"},textChange:function(t){this.text=0==t?"蒹葭苍苍":1==t?"白露为霜":"在水一方"},typeChange:function(t){this.type=0==t?"primary":1==t?"success":2==t?"error":3==t?"warning":"info"},shapeChange:function(t){this.shape=0==t?"square":1==t?"circle":2==t?"circleLeft":"circleRight"},sizeChange:function(t){this.size=0==t?"default":"mini"},closeableChange:function(t){this.closeable=0==t},click:function(t){this.$refs.uToast.show({title:"第".concat(t+1,"个标签被点击"),type:"success"})},close:function(t){this.$refs.uToast.show({title:"关闭图标被点击",type:"success"})}}};e.default=o},"7be1":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,o){return i("v-uni-view",{key:o,staticClass:"u-item u-line-1",class:[t.noBorderRight(o),"u-item-"+o],style:[t.itemStyle(o)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(o)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(o)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},a=[]},"852c":function(t,e,i){"use strict";i.r(e);var o=i("44cf"),n=i("d764");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("4cb1");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"0cf9d257",null,!1,o["a"],r);e["default"]=c.exports},"87fb":function(t,e,i){"use strict";i.r(e);var o=i("a077"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},a077:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,o){o<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=o},a4a8:function(t,e,i){var o=i("5612");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("fc398a4e",o,!0,{sourceMap:!1,shadowMode:!1})},c96c:function(t,e,i){"use strict";i.r(e);var o=i("7253"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},d579:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},d764:function(t,e,i){"use strict";i.r(e);var o=i("21b0"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},d7bc:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,i){"use strict";var o=i("01f3"),n=i.n(o);n.a},f015:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=o},fa67:function(t,e,i){"use strict";i.r(e);var o=i("7be1"),n=i("87fb");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d833");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"05edd86e",null,!1,o["a"],r);e["default"]=c.exports}}]);