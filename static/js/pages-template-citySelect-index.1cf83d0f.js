(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-citySelect-index"],{"078d":function(t,e,a){var i=a("e9d5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9e2c5206",i,!0,{sourceMap:!1,shadowMode:!1})},"08a6":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("ba29")),r={components:{citySelect:n.default},data:function(){return{height:30,bgColor:this.$u.color.bgColor,marginTop:30,marginBottom:30,value:!1,input:""}},methods:{cityChange:function(t){this.input=t.province.label+"-"+t.city.label+"-"+t.area.label}}};e.default=r},"13ac":function(t,e,a){"use strict";var i=a("1630"),n=a.n(i);n.a},1630:function(t,e,a){var i=a("595e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("32ecc498",i,!0,{sourceMap:!1,shadowMode:!1})},1995:function(t,e,a){"use strict";a.r(e);var i=a("d92c"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},2424:function(t,e,a){"use strict";var i=a("4f67"),n=a.n(i);n.a},"2f09":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-btn[data-v-1ea4ff2e]::after{border:none}.u-btn[data-v-1ea4ff2e]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-1ea4ff2e]{border:1px solid #fff}.u-btn--default[data-v-1ea4ff2e]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-1ea4ff2e]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-1ea4ff2e]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-1ea4ff2e]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-1ea4ff2e]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-1ea4ff2e]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-1ea4ff2e]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-1ea4ff2e]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-1ea4ff2e]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-1ea4ff2e]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-1ea4ff2e]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-1ea4ff2e]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-1ea4ff2e]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-1ea4ff2e]{border-radius:%?100?%}.u-round-circle[data-v-1ea4ff2e]::after{border-radius:%?100?%}.u-loading[data-v-1ea4ff2e]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-1ea4ff2e]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-1ea4ff2e]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-1ea4ff2e]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-1ea4ff2e]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-1ea4ff2e]{background:#18b566!important;color:#fff}.u-info-hover[data-v-1ea4ff2e]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-1ea4ff2e]{background:#f29100!important;color:#fff}.u-error-hover[data-v-1ea4ff2e]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"30be":function(t,e,a){"use strict";var i=a("8505"),n=a.n(i);n.a},"37fd":function(t,e,a){var i=a("971e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1938e13a",i,!0,{sourceMap:!1,shadowMode:!1})},3836:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uPopup:a("0e8a").default,uTabs:a("50aa").default,uCellGroup:a("7a36").default,uCellItem:a("1530").default,uIcon:a("b783").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-popup",{attrs:{mode:"bottom",popup:!1,mask:!0,closeable:!0,"safe-area-inset-bottom":!0,"close-icon-color":"#ffffff","z-index":t.uZIndex,maskCloseAble:t.maskCloseAble},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t.value?a("u-tabs",{ref:"tabs",attrs:{list:t.genTabsList,"is-scroll":!0,current:t.tabsIndex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"area-box"},[a("v-uni-view",{staticClass:"u-flex",class:{change:t.isChange}},[a("v-uni-view",{staticClass:"area-item"},[a("v-uni-view",{staticClass:"u-padding-10 u-bg-gray",staticStyle:{height:"100%"}},[a("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":!0}},[a("u-cell-group",t._l(t.provinces,(function(e,i){return a("u-cell-item",{key:i,attrs:{title:e.label,arrow:!1,index:i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.provinceChange.apply(void 0,arguments)}}},[t.isChooseP&&t.province===i?a("u-icon",{attrs:{slot:"right-icon",size:"34",name:"checkbox-mark"},slot:"right-icon"}):t._e()],1)})),1)],1)],1)],1),a("v-uni-view",{staticClass:"area-item"},[a("v-uni-view",{staticClass:"u-padding-10 u-bg-gray",staticStyle:{height:"100%"}},[a("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":!0}},[t.isChooseP?a("u-cell-group",t._l(t.citys,(function(e,i){return a("u-cell-item",{key:i,attrs:{title:e.label,arrow:!1,index:i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cityChange.apply(void 0,arguments)}}},[t.isChooseC&&t.city===i?a("u-icon",{attrs:{slot:"right-icon",size:"34",name:"checkbox-mark"},slot:"right-icon"}):t._e()],1)})),1):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"area-item"},[a("v-uni-view",{staticClass:"u-padding-10 u-bg-gray",staticStyle:{height:"100%"}},[a("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":!0}},[t.isChooseC?a("u-cell-group",t._l(t.areas,(function(e,i){return a("u-cell-item",{key:i,attrs:{title:e.label,arrow:!1,index:i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.areaChange.apply(void 0,arguments)}}},[t.isChooseA&&t.area===i?a("u-icon",{attrs:{slot:"right-icon",size:"34",name:"checkbox-mark"},slot:"right-icon"}):t._e()],1)})),1):t._e()],1)],1)],1)],1)],1)],1)},r=[]},"3c25":function(t,e,a){"use strict";a.r(e);var i=a("08a6"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"45e2":function(t,e,a){"use strict";a.r(e);var i=a("60a1"),n=a("66fd");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("13ac");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"095e3b7e",null,!1,i["a"],o);e["default"]=u.exports},"4f67":function(t,e,a){var i=a("c027");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f0050c94",i,!0,{sourceMap:!1,shadowMode:!1})},"50aa":function(t,e,a){"use strict";a.r(e);var i=a("8676"),n=a("743b");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("ea1c");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"09bb0a1e",null,!1,i["a"],o);e["default"]=u.exports},"595e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-badge[data-v-095e3b7e]{display:inline-flex;justify-content:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-095e3b7e]{background-color:#2979ff}.u-badge--bg--error[data-v-095e3b7e]{background-color:#fa3534}.u-badge--bg--success[data-v-095e3b7e]{background-color:#19be6b}.u-badge--bg--info[data-v-095e3b7e]{background-color:#909399}.u-badge--bg--warning[data-v-095e3b7e]{background-color:#f90}.u-badge-dot[data-v-095e3b7e]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-095e3b7e]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-095e3b7e]{background-color:#909399;color:#fff}',""]),t.exports=e},"60a1":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},r=[]},"66fd":function(t,e,a){"use strict";a.r(e);var i=a("c395"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"6d39":function(t,e,a){"use strict";var i=a("37fd"),n=a.n(i);n.a},7140:function(t,e,a){"use strict";a.r(e);var i=a("b7bd"),n=a("1995");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("30be");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1ea4ff2e",null,!1,i["a"],o);e["default"]=u.exports},"743b":function(t,e,a){"use strict";a.r(e);var i=a("950d"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},8505:function(t,e,a){var i=a("2f09");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3e6bd545",i,!0,{sourceMap:!1,shadowMode:!1})},8676:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uBadge:a("45e2").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[a("v-uni-view",{attrs:{id:t.id}},[a("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[a("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(i)],attrs:{id:"u-tab-item-"+i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(i)}}},[a("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?a("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},r=[]},"950d":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var a=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){a.init()}))},current:{immediate:!0,handler:function(t,e){var a=this;this.$nextTick((function(){a.currentIndex=t,a.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx",opacity:this.barFirstTimeMove?0:1,"border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var a={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(a.fontWeight="bold"),e==t.currentIndex?(a.color=t.activeColor,a=Object.assign(a,t.activeItemStyle)):a.color=t.inactiveColor,a}}},methods:{init:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:a=e.sent,t.parentLeft=a.left,t.componentWidth=a.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var a=e.width,i=e.left-this.parentLeft,n=i-(this.componentWidth-a)/2;this.scrollLeft=n<0?0:n;var r=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=r-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=r},"971e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.area-box[data-v-2bf4010e]{width:100%;overflow:hidden;height:%?800?%}.area-box > uni-view[data-v-2bf4010e]{width:150%;transition:-webkit-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;-webkit-transform:translateX(0);transform:translateX(0)}.area-box > uni-view.change[data-v-2bf4010e]{-webkit-transform:translateX(-33.33333%);transform:translateX(-33.33333%)}.area-box .area-item[data-v-2bf4010e]{width:33.3333333%;height:%?800?%}',""]),t.exports=e},"9f1d":function(t,e,a){"use strict";var i=a("4ea4");a("d81d"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("306c")),r=i(a("8395")),o=i(a("ce9f")),s={name:"u-city-select",props:{value:{type:Boolean,default:!1},defaultRegion:{type:Array,default:function(){return[]}},areaCode:{type:Array,default:function(){return[]}},maskCloseAble:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:0}},data:function(){return{cityValue:"",isChooseP:!1,province:0,provinces:n.default,isChooseC:!1,city:0,citys:r.default[0],isChooseA:!1,area:0,areas:o.default[0][0],tabsIndex:0}},mounted:function(){this.init()},computed:{isChange:function(){return this.tabsIndex>1},genTabsList:function(){var t=[{name:"请选择"}];return this.isChooseP&&(t[0]["name"]=this.provinces[this.province]["label"],t[1]={name:"请选择"}),this.isChooseC&&(t[1]["name"]=this.citys[this.city]["label"],t[2]={name:"请选择"}),this.isChooseA&&(t[2]["name"]=this.areas[this.area]["label"]),t},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{init:function(){3==this.areaCode.length?(this.setProvince("",this.areaCode[0]),this.setCity("",this.areaCode[1]),this.setArea("",this.areaCode[2])):3==this.defaultRegion.length&&(this.setProvince(this.defaultRegion[0],""),this.setCity(this.defaultRegion[1],""),this.setArea(this.defaultRegion[2],""))},setProvince:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.provinces.map((function(i,n){(a?i.value==a:i.label==e)&&t.provinceChange(n)}))},setCity:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.citys.map((function(i,n){(a?i.value==a:i.label==e)&&t.cityChange(n)}))},setArea:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.areas.map((function(i,n){(a?i.value==a:i.label==e)&&(t.isChooseA=!0,t.area=n)}))},close:function(){this.$emit("input",!1)},tabsChange:function(t){this.tabsIndex=t},provinceChange:function(t){this.isChooseP=!0,this.isChooseC=!1,this.isChooseA=!1,this.province=t,this.citys=r.default[t],this.tabsIndex=1},cityChange:function(t){this.isChooseC=!0,this.isChooseA=!1,this.city=t,this.areas=o.default[this.province][t],this.tabsIndex=2},areaChange:function(t){this.isChooseA=!0,this.area=t;var e={};e.province=this.provinces[this.province],e.city=this.citys[this.city],e.area=this.areas[this.area],this.$emit("city-change",e),this.close()}}};e.default=s},b67f:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uButton:a("7140").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-demo"},[a("v-uni-view",{staticClass:"u-demo-wrap"},[a("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),a("v-uni-view",{staticClass:"u-demo-area"},[a("city-select",{on:{"city-change":function(e){arguments[0]=e=t.$handleEvent(e),t.cityChange.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("v-uni-view",{staticClass:"u-demo-result-line"},[t._v(t._s(t.input?t.input:"Picker值"))])],1)],1),a("v-uni-view",{staticClass:"u-config-wrap"},[a("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),a("v-uni-view",{staticClass:"u-config-item"},[a("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),a("u-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.value=!0}}},[t._v("打开Picker")])],1)],1)],1)},r=[]},b7bd:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},r=[]},ba29:function(t,e,a){"use strict";a.r(e);var i=a("3836"),n=a("f1ad");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("6d39");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2bf4010e",null,!1,i["a"],o);e["default"]=u.exports},c027:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".btn-wrap[data-v-9cfffcb4]{margin:%?100?% %?30?%}",""]),t.exports=e},c395:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=i},cba8:function(t,e,a){"use strict";a.r(e);var i=a("b67f"),n=a("3c25");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("2424");var o,s=a("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"9cfffcb4",null,!1,i["a"],o);e["default"]=u.exports},d92c:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var n="",r="";n=t.touches[0].clientX,r=t.touches[0].clientY,e.rippleTop=r-i.top-i.targetWidth/2,e.rippleLeft=n-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i},e9d5:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-view[data-v-09bb0a1e],\nuni-scroll-view[data-v-09bb0a1e]{box-sizing:border-box}[data-v-09bb0a1e]::-webkit-scrollbar,[data-v-09bb0a1e]::-webkit-scrollbar,[data-v-09bb0a1e]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-09bb0a1e]{position:relative}uni-scroll-view[data-v-09bb0a1e]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-09bb0a1e]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-09bb0a1e]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color}.u-tab-bar[data-v-09bb0a1e]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-09bb0a1e]{display:flex;flex-direction:row;justify-content:space-between}',""]),t.exports=e},ea1c:function(t,e,a){"use strict";var i=a("078d"),n=a.n(i);n.a},f1ad:function(t,e,a){"use strict";a.r(e);var i=a("9f1d"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);