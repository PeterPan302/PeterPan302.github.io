(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-noticeBar-index"],{"01f3":function(t,e,i){var n=i("d7bc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("89d6066a",n,!0,{sourceMap:!1,shadowMode:!1})},"0673":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-notice-bar-wrap[data-v-6d40148c]{overflow:hidden}.u-notice-bar[data-v-6d40148c]{padding:%?18?% %?24?%;overflow:hidden}.u-direction-row[data-v-6d40148c]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-left-icon[data-v-6d40148c]{display:flex;flex-direction:row;align-items:center}.u-notice-box[data-v-6d40148c]{flex:1;display:flex;flex-direction:row;overflow:hidden;margin-left:%?12?%}.u-right-icon[data-v-6d40148c]{margin-left:%?12?%;display:flex;flex-direction:row;align-items:center}.u-notice-content[data-v-6d40148c]{line-height:1;white-space:nowrap;font-size:%?26?%;-webkit-animation:u-loop-animation-data-v-6d40148c 10s linear infinite both;animation:u-loop-animation-data-v-6d40148c 10s linear infinite both;text-align:right;padding-left:100%}@-webkit-keyframes u-loop-animation-data-v-6d40148c{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-6d40148c{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},"073b":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},direction:{type:String,default:"row"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},duration:{type:[Number,String],default:2e3},volumeSize:{type:[Number,String],default:34},speed:{type:Number,default:160},isCircular:{type:Boolean,default:!0},mode:{type:String,default:"horizontal"},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},padding:{type:[Number,String],default:"18rpx 24rpx"}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},vertical:function(){return"horizontal"!=this.mode},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},data:function(){return{}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},change:function(t){var e=t.detail.current;e==this.list.length-1&&this.$emit("end")}}};e.default=n},"0af2":function(t,e,i){"use strict";var n=i("55b6"),o=i.n(n);o.a},"209e":function(t,e,i){"use strict";var n=i("36c2"),o=i.n(n);o.a},"29d9":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-notice-bar",props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},volumeSize:{type:[Number,String],default:34},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},mode:{type:String,default:"horizontal"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},duration:{type:[Number,String],default:2e3},speed:{type:[Number,String],default:160},isCircular:{type:Boolean,default:!0},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},padding:{type:[Number,String],default:"18rpx 24rpx"},noListHidden:{type:Boolean,default:!0}},computed:{isShow:function(){return 0!=this.show&&(1!=this.noListHidden||0!=this.list.length)}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},end:function(){this.$emit("end")}}};e.default=n},"36c2":function(t,e,i){var n=i("d579");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7f5e42b6",n,!0,{sourceMap:!1,shadowMode:!1})},3887:function(t,e,i){"use strict";i.r(e);var n=i("6f16"),o=i("4415");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("0af2");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"6d40148c",null,!1,n["a"],r);e["default"]=u.exports},"3f66":function(t,e,i){"use strict";i.r(e);var n=i("f015"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},4415:function(t,e,i){"use strict";i.r(e);var n=i("29d9"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"4c76":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.item[data-v-25000590]{margin-top:30px}',""]),t.exports=e},5143:function(t,e,i){"use strict";i.r(e);var n=i("63fb"),o=i("3f66");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("209e");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"36307caf",null,!1,n["a"],r);e["default"]=u.exports},"55b6":function(t,e,i){var n=i("0673");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5e5fbdb3",n,!0,{sourceMap:!1,shadowMode:!1})},"63fb":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b783").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},6805:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-notice-bar[data-v-7f352c32]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:nowrap;padding:%?18?% %?24?%;overflow:hidden}.u-swiper[data-v-7f352c32]{font-size:%?26?%;height:%?32?%;display:flex;flex-direction:row;align-items:center;flex:1;margin-left:%?12?%}.u-swiper-item[data-v-7f352c32]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.u-news-item[data-v-7f352c32]{overflow:hidden}.u-right-icon[data-v-7f352c32]{margin-left:%?12?%;display:inline-flex;align-items:center}.u-left-icon[data-v-7f352c32]{display:inline-flex;align-items:center}',""]),t.exports=e},"6f16":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uRowNotice:i("e9cc").default,uColumnNotice:i("99f3").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("v-uni-view",{staticClass:"u-notice-bar-wrap",style:{borderRadius:t.borderRadius+"rpx"}},["horizontal"==t.mode&&t.isCircular?[i("u-row-notice",{attrs:{type:t.type,color:t.color,bgColor:t.bgColor,list:t.list,volumeIcon:t.volumeIcon,moreIcon:t.moreIcon,volumeSize:t.volumeSize,closeIcon:t.closeIcon,mode:t.mode,fontSize:t.fontSize,speed:t.speed,playState:t.playState,padding:t.padding},on:{getMore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})]:t._e(),"vertical"==t.mode||"horizontal"==t.mode&&!t.isCircular?[i("u-column-notice",{attrs:{type:t.type,color:t.color,bgColor:t.bgColor,list:t.list,volumeIcon:t.volumeIcon,moreIcon:t.moreIcon,closeIcon:t.closeIcon,mode:t.mode,volumeSize:t.volumeSize,"disable-touch":t.disableTouch,fontSize:t.fontSize,duration:t.duration,playState:t.playState,padding:t.padding},on:{getMore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)},end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)}}})]:t._e()],2):t._e()},a=[]},"76b2":function(t,e,i){"use strict";var n=i("af48"),o=i.n(n);o.a},"7be1":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},a=[]},"7ece":function(t,e,i){"use strict";i("a9e3"),i("d3b7"),i("ac1f"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},volumeSize:{type:[Number,String],default:34},speed:{type:[Number,String],default:160},playState:{type:String,default:"play"},padding:{type:[Number,String],default:"18rpx 24rpx"}},data:function(){return{textWidth:0,boxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}},watch:{list:{immediate:!0,handler:function(t){var e=this;this.showText=t.join("，"),this.$nextTick((function(){e.initSize()}))}},playState:function(t){this.animationPlayState="play"==t?"running":"paused"},speed:function(t){this.initSize()}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this,e=[],i=new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#u-notice-content").boundingClientRect().exec((function(i){t.textWidth=i[0].width,e()}))}));e.push(i),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/uni.upx2px(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){"play"==t.playState&&t.autoplay&&(t.animationPlayState="running")}),10)}))},click:function(t){this.$emit("click")},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")}}};e.default=n},"87fb":function(t,e,i){"use strict";i.r(e);var n=i("a077"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"99f3":function(t,e,i){"use strict";i.r(e);var n=i("ff74"),o=i("ef456");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("e921");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7f352c32",null,!1,n["a"],r);e["default"]=u.exports},a077:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},af48:function(t,e,i){var n=i("4c76");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("601b7fa8",n,!0,{sourceMap:!1,shadowMode:!1})},b3c3:function(t,e,i){var n=i("dbe5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("61b17400",n,!0,{sourceMap:!1,shadowMode:!1})},b885:function(t,e,i){"use strict";var n=i("b3c3"),o=i.n(n);o.a},bf29:function(t,e,i){"use strict";i.r(e);var n=i("c2e3"),o=i("e24f");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("76b2");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"25000590",null,!1,n["a"],r);e["default"]=u.exports},c2e3:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uToast:i("5143").default,uNoticeBar:i("3887").default,uSubsection:i("fa67").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-toast",{ref:"uToast",attrs:{type:t.type}}),i("u-notice-bar",{attrs:{autoplay:t.autoplay,playState:t.playState,speed:t.speed,mode:t.mode,show:t.show,type:t.type,list:t.list,moreIcon:t.moreIcon,volumeIcon:t.volumeIcon,duration:t.duration,isCircular:t.isCircular},on:{getMore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)},end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("主题")]),i("u-subsection",{attrs:{current:3,list:["primary","success","error","warning","none"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.typeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("滚动模式")]),i("u-subsection",{attrs:{current:t.current,list:["水平","垂直"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.modeChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("是否衔接(水平模式有效)")]),i("u-subsection",{attrs:{list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.isCircularChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),i("u-subsection",{attrs:{list:["播放","暂停"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.playStateChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("速度")]),i("u-subsection",{attrs:{current:1,list:["慢","正常","快"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.speedChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("图标")]),i("u-subsection",{attrs:{list:["显示","隐藏"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.iconChange.apply(void 0,arguments)}}})],1)],1)],1)},a=[]},d579:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},d761:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{show:!0,autoplay:!1,type:"warning",list:["锦瑟无端五十弦，一弦一柱思华年","庄生晓梦迷蝴蝶，望帝春心托杜鹃","沧海月明珠有泪，蓝田日暖玉生烟"],mode:"horizontal",playState:"play",speed:160,duration:2e3,moreIcon:!0,volumeIcon:!0,isCircular:!0,current:0}},onLoad:function(){},methods:{typeChange:function(t){var e=["primary","success","error","warning","none"];this.type=e[t]},modeChange:function(t){this.current=t,this.mode=0==t?"horizontal":"vertical"},playStateChange:function(t){this.playState=0==t?"play":"paused"},speedChange:function(t){var e=this;0==t?this.$nextTick((function(){e.speed=50,e.duration=6e3})):1==t?this.$nextTick((function(){e.speed=160,e.duration=2e3})):this.$nextTick((function(){e.speed=350,e.duration=400}))},iconChange:function(t){0==t?(this.moreIcon=!0,this.volumeIcon=!0):(this.moreIcon=!1,this.volumeIcon=!1)},isCircularChange:function(t){this.isCircular=0==t,this.current=0,this.mode="horizontal"},close:function(){this.toast("点击了关闭图标")},click:function(t){"horizontal"==this.mode&&this.isCircular?this.toast("此模式无法获取Index值"):this.toast("点击了第".concat(t+1,"条消息"))},getMore:function(){this.toast("点击了更多图标")},toast:function(t){this.$refs.uToast.show({title:t,type:"warning"})},end:function(){}}};e.default=n},d7bc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,i){"use strict";var n=i("01f3"),o=i.n(n);o.a},dbe5:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-notice-bar[data-v-7391f9b3]{padding:%?18?% %?24?%;overflow:hidden}.u-direction-row[data-v-7391f9b3]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-left-icon[data-v-7391f9b3]{display:inline-flex;align-items:center}.u-notice-box[data-v-7391f9b3]{flex:1;display:flex;flex-direction:row;overflow:hidden;margin-left:%?12?%}.u-right-icon[data-v-7391f9b3]{margin-left:%?12?%;display:inline-flex;align-items:center}.u-notice-content[data-v-7391f9b3]{-webkit-animation:u-loop-animation-data-v-7391f9b3 10s linear infinite both;animation:u-loop-animation-data-v-7391f9b3 10s linear infinite both;text-align:right;padding-left:100%;display:flex;flex-direction:row;flex-wrap:nowrap}.u-notice-text[data-v-7391f9b3]{font-size:%?26?%;word-break:keep-all;white-space:nowrap}@-webkit-keyframes u-loop-animation-data-v-7391f9b3{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-7391f9b3{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},de76:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b783").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-notice-bar",class:[t.type?"u-type-"+t.type+"-light-bg":""],style:{background:t.computeBgColor,padding:t.padding}},[i("v-uni-view",{staticClass:"u-direction-row"},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.volumeIcon?i("u-icon",{staticClass:"u-left-icon",attrs:{name:"volume-fill",size:t.volumeSize,color:t.computeColor}}):t._e()],1),i("v-uni-view",{staticClass:"u-notice-box",attrs:{id:"u-notice-box"}},[i("v-uni-view",{staticClass:"u-notice-content",style:{animationDuration:t.animationDuration,animationPlayState:t.animationPlayState},attrs:{id:"u-notice-content"}},[i("v-uni-text",{staticClass:"u-notice-text",class:["u-type-"+t.type],style:[t.textStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1)],1),i("v-uni-view",{staticClass:"u-icon-wrap"},[t.moreIcon?i("u-icon",{staticClass:"u-right-icon",attrs:{name:"arrow-right",size:26,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}):t._e(),t.closeIcon?i("u-icon",{staticClass:"u-right-icon",attrs:{name:"close",size:24,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)],1):t._e()},a=[]},e078:function(t,e,i){var n=i("6805");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("af37ada6",n,!0,{sourceMap:!1,shadowMode:!1})},e24f:function(t,e,i){"use strict";i.r(e);var n=i("d761"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e921:function(t,e,i){"use strict";var n=i("e078"),o=i.n(n);o.a},e9cc:function(t,e,i){"use strict";i.r(e);var n=i("de76"),o=i("f375");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("b885");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7391f9b3",null,!1,n["a"],r);e["default"]=u.exports},ef456:function(t,e,i){"use strict";i.r(e);var n=i("073b"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f015:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=n},f375:function(t,e,i){"use strict";i.r(e);var n=i("7ece"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},fa67:function(t,e,i){"use strict";i.r(e);var n=i("7be1"),o=i("87fb");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("d833");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],r);e["default"]=u.exports},ff74:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b783").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-notice-bar",class:[t.type?"u-type-"+t.type+"-light-bg":""],style:{background:t.computeBgColor,padding:t.padding}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.volumeIcon?i("u-icon",{staticClass:"u-left-icon",attrs:{name:"volume-fill",size:t.volumeSize,color:t.computeColor}}):t._e()],1),i("v-uni-swiper",{staticClass:"u-swiper",attrs:{"disable-touch":t.disableTouch,autoplay:t.autoplay&&"play"==t.playState,vertical:t.vertical,circular:!0,interval:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-news-item u-line-1",class:["u-type-"+t.type],style:[t.textStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[t._v(t._s(e))])],1)})),1),i("v-uni-view",{staticClass:"u-icon-wrap"},[t.moreIcon?i("u-icon",{staticClass:"u-right-icon",attrs:{name:"arrow-right",size:26,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}):t._e(),t.closeIcon?i("u-icon",{staticClass:"u-right-icon",attrs:{name:"close",size:24,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)},a=[]}}]);