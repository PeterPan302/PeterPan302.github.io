(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-divider-index"],{"01f3":function(t,e,i){var n=i("d7bc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("89d6066a",n,!0,{sourceMap:!1,shadowMode:!1})},"2b81":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{text:"没有更多了",bgColor:"#fafafa",halfWidth:150,borderColor:"#dcdfe6",type:"primary",color:"#909399",fontSize:"26"}},methods:{textChange:function(t){this.text=0==t?"没有更多了":"到底了"},halfWidthChange:function(t){this.halfWidth=0==t?50:1==t?150:250},borderColorChange:function(t){0==t?this.borderColor="#dcdfe6":(this.borderColor="",this.type=1==t?"primary":2==t?"error":3==t?"warning":"success")},contentChange:function(t){0==t?(this.color="#909399",this.fontSize=26):(this.color=this.$u.color["primary"],this.fontSize=30)},click:function(){t("log","click"," at pages/componentsB/divider/index.vue:73")}}};e.default=n}).call(this,i("0de9")["log"])},"30e8":function(t,e,i){var n=i("ac66");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("bb2730c2",n,!0,{sourceMap:!1,shadowMode:!1})},3192:function(t,e,i){"use strict";i.r(e);var n=i("4faa"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"341c":function(t,e,i){"use strict";i.r(e);var n=i("2b81"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"3ed6":function(t,e,i){"use strict";i.r(e);var n=i("7f95"),o=i("341c");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("7cbc");var a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"1be916cc",null,!1,n["a"],void 0);e["default"]=u.exports},"4faa":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975");var n={name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle:function(){var t={};return-1!=String(this.halfWidth).indexOf("%")?t.width=this.halfWidth:t.width=this.halfWidth+"rpx",this.borderColor&&(t.borderColor=this.borderColor),t}},methods:{click:function(){this.$emit("click")}}};e.default=n},"5a65":function(t,e,i){"use strict";i.r(e);var n=i("5e6f"),o=i("3192");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("fdaa");var a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"fec8ac4c",null,!1,n["a"],void 0);e["default"]=u.exports},"5e6f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-divider",style:{height:"auto"==t.height?"auto":t.height+"rpx",backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]}),t.useSlot?i("v-uni-view",{staticClass:"u-divider-text",style:{color:t.color,fontSize:t.fontSize+"rpx"}},[t._t("default")],2):t._e(),i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]})],1)},o=[]},6279:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-divider[data-v-fec8ac4c]{width:100%;position:relative;text-align:center;display:flex;flex-direction:row;justify-content:center;align-items:center;overflow:hidden;flex-direction:row}.u-divider-line[data-v-fec8ac4c]{border-bottom:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:center;transform-origin:center}.u-divider-line--bordercolor--primary[data-v-fec8ac4c]{border-color:#2979ff}.u-divider-line--bordercolor--success[data-v-fec8ac4c]{border-color:#19be6b}.u-divider-line--bordercolor--error[data-v-fec8ac4c]{border-color:#2979ff}.u-divider-line--bordercolor--info[data-v-fec8ac4c]{border-color:#909399}.u-divider-line--bordercolor--warning[data-v-fec8ac4c]{border-color:#f90}.u-divider-text[data-v-fec8ac4c]{white-space:nowrap;padding:0 %?16?%;display:inline-flex}',""]),t.exports=e},"7be1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},o=[]},"7cbc":function(t,e,i){"use strict";var n=i("30e8"),o=i.n(n);o.a},"7f95":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uDivider:i("5a65").default,uSubsection:i("fa67").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-divider",{attrs:{type:t.type,borderColor:t.borderColor,"bg-color":t.bgColor,"half-width":t.halfWidth,color:t.color,"font-size":t.fontSize},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("提示内容")]),i("u-subsection",{attrs:{list:["没有更多了","到底了"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.textChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("单边线宽")]),i("u-subsection",{attrs:{current:"1",list:["50","150","250"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.halfWidthChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("横线颜色")]),i("u-subsection",{attrs:{list:["#dcdfe6","primary","error","warning","success"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.borderColorChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("内容样式")]),i("u-subsection",{attrs:{list:["默认","自定义"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.contentChange.apply(void 0,arguments)}}})],1)],1)],1)},r=[]},"87fb":function(t,e,i){"use strict";i.r(e);var n=i("a077"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},a077:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("53ca"));i("a9e3"),i("d81d"),i("99af"),i("ac1f");var r={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=(0,o.default)(t)){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=r},ac66:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=e},b924:function(t,e,i){var n=i("6279");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("168f8167",n,!0,{sourceMap:!1,shadowMode:!1})},d7bc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-subsection[data-v-05edd86e]{display:flex;flex-direction:row;align-items:center;overflow:hidden;position:relative}.u-item[data-v-05edd86e]{flex:1;text-align:center;font-size:%?26?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-05edd86e]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-05edd86e]{border-right:none!important}.u-item-first[data-v-05edd86e]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-05edd86e]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-05edd86e]{transition:all .35s;color:#303133;display:flex;flex-direction:row;align-items:center;position:relative;z-index:3}',""]),t.exports=e},d833:function(t,e,i){"use strict";var n=i("01f3"),o=i.n(n);o.a},fa67:function(t,e,i){"use strict";i.r(e);var n=i("7be1"),o=i("87fb");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("d833");var a=i("f0c5"),u=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"05edd86e",null,!1,n["a"],void 0);e["default"]=u.exports},fdaa:function(t,e,i){"use strict";var n=i("b924"),o=i.n(n);o.a}}]);