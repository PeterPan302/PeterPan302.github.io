(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-keyboardPay-index"],{"1edd":function(t,e,a){"use strict";a.r(e);var i=a("4a43"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"36aa":function(t,e,a){"use strict";a.r(e);var i=a("92b1"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"4a43":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{show:!1,password:""}},onLoad:function(){},methods:{onChange:function(t){this.password.length<6&&(this.password+=t),this.password.length>=6&&this.pay()},onBackspace:function(t){this.password.length>0&&(this.password=this.password.substring(0,this.password.length-1))},pay:function(){var t=this;uni.showLoading({title:"支付中"}),setTimeout((function(){uni.hideLoading(),t.show=!1,uni.showToast({icon:"success",title:"支付成功"})}),2e3)},showPop:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.password="",this.show=t},finish:function(){t("log",11111," at pages/template/keyboardPay/index.vue:90")}}};e.default=a}).call(this,a("0de9")["log"])},"582b":function(t,e,a){"use strict";var i=a("d6d9"),n=a.n(i);n.a},"5a70":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.money[data-v-4efad234]{font-size:%?80?%;color:#f90;position:relative}.money .close[data-v-4efad234]{position:absolute;top:%?20?%;right:%?20?%;line-height:%?28?%;font-size:%?28?%}.tips[data-v-4efad234]{color:#909399}',""]),t.exports=e},"67ba":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uButton:a("ff14").default,uIcon:a("4820").default,uKeyboard:a("0745").default,uMessageInput:a("ccd2").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"u-padding-40"},[a("u-button",{attrs:{type:"success"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop(!0)}}},[a("u-icon",{attrs:{name:"red-packet"}}),a("v-uni-text",{staticClass:"u-padding-left-10"},[t._v("发送1.00元红包")])],1)],1),a("u-keyboard",{ref:"uKeyboard",attrs:{default:"",mode:"number",mask:!0,"mask-close-able":!1,"dot-enabled":!1,"safe-area-inset-bottom":!0,tooltip:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},backspace:function(e){arguments[0]=e=t.$handleEvent(e),t.onBackspace.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"u-text-center u-padding-20 money"},[a("v-uni-text",[t._v("1.00")]),a("v-uni-text",{staticClass:"u-font-20 u-padding-left-10"},[t._v("元")]),a("v-uni-view",{staticClass:"u-padding-10 close",attrs:{"data-flag":"false"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop(!1)}}},[a("u-icon",{attrs:{name:"close",color:"#333333",size:"28"}})],1)],1),a("v-uni-view",{staticClass:"u-flex u-row-center"},[a("u-message-input",{attrs:{mode:"box",maxlength:6,"dot-fill":!0,"disabled-keyboard":!0},on:{finish:function(e){arguments[0]=e=t.$handleEvent(e),t.finish.apply(void 0,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-uni-view",{staticClass:"u-text-center u-padding-top-10 u-padding-bottom-20 tips"},[t._v("支付键盘")])],1)],1)],1)},o=[]},7927:function(t,e,a){"use strict";a.r(e);var i=a("67ba"),n=a("1edd");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("582b");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4efad234",null,!1,i["a"],r);e["default"]=c.exports},"8e7b":function(t,e,a){var i=a("e758");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("23d7e1e2",i,!0,{sourceMap:!1,shadowMode:!1})},"92b1":function(t,e,a){"use strict";a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-message-input",props:{maxlength:{type:[Number,String],default:4},dotFill:{type:Boolean,default:!1},mode:{type:String,default:"box"},value:{type:[String,Number],default:""},breathe:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},fontSize:{type:[String,Number],default:60},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#606266"},width:{type:[Number,String],default:"80"},disabledKeyboard:{type:Boolean,default:!1}},watch:{value:{immediate:!0,handler:function(t){t=String(t),this.valueModel=t.substring(0,this.maxlength)}}},data:function(){return{valueModel:""}},computed:{animationClass:function(){var t=this;return function(e){return t.breathe&&t.charArr.length==e?"u-breathe":""}},charArr:function(){return this.valueModel.split("")},charArrLength:function(){return this.charArr.length},loopCharArr:function(){return new Array(this.maxlength)}},methods:{getVal:function(t){var e=t.detail.value;this.valueModel=e,String(e).length>this.maxlength||(this.$emit("change",e),String(e).length==this.maxlength&&this.$emit("finish",e))}}};e.default=i},ccd2:function(t,e,a){"use strict";a.r(e);var i=a("cd24"),n=a("36aa");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e1f9");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ab731c8c",null,!1,i["a"],r);e["default"]=c.exports},cd24:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-char-box"},[a("v-uni-view",{staticClass:"u-char-flex"},[a("v-uni-input",{staticClass:"u-input",attrs:{disabled:t.disabledKeyboard,value:t.valueModel,type:"number",focus:t.focus,maxlength:t.maxlength},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getVal.apply(void 0,arguments)}}}),t._l(t.loopCharArr,(function(e,i){return a("v-uni-view",{key:i},[a("v-uni-view",{class:[t.breathe&&t.charArrLength==i?"u-breathe":"","u-char-item",t.charArrLength===i&&"box"==t.mode?"u-box-active":"","box"===t.mode?"u-box":""],style:{fontWeight:t.bold?"bold":"normal",fontSize:t.fontSize+"rpx",width:t.width+"rpx",height:t.width+"rpx",color:t.inactiveColor,borderColor:t.charArrLength===i&&"box"==t.mode?t.activeColor:t.inactiveColor}},["middleLine"!==t.mode?a("v-uni-view",{staticClass:"u-placeholder-line",style:{display:t.charArrLength===i?"block":"none",height:.5*t.width+"rpx"}}):t._e(),"middleLine"===t.mode&&t.charArrLength<=i?a("v-uni-view",{staticClass:"u-middle-line",class:[t.breathe&&t.charArrLength==i?"u-breathe":"",t.charArrLength===i?"u-middle-line-active":""],style:{height:t.bold?"4px":"2px",background:t.charArrLength===i?t.activeColor:t.inactiveColor}}):t._e(),"bottomLine"===t.mode?a("v-uni-view",{staticClass:"u-bottom-line",class:[t.breathe&&t.charArrLength==i?"u-breathe":"",t.charArrLength===i?"u-buttom-line-active":""],style:{height:t.bold?"4px":"2px",background:t.charArrLength===i?t.activeColor:t.inactiveColor}}):t._e(),t.dotFill?[a("v-uni-text",{staticClass:"u-dot"},[t._v(t._s(t.charArr[i]?"●":""))])]:[t._v(t._s(t.charArr[i]?t.charArr[i]:""))]],2)],1)}))],2)],1)},o=[]},d6d9:function(t,e,a){var i=a("5a70");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7da66185",i,!0,{sourceMap:!1,shadowMode:!1})},e1f9:function(t,e,a){"use strict";var i=a("8e7b"),n=a.n(i);n.a},e758:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */@-webkit-keyframes breathe-data-v-ab731c8c{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}@keyframes breathe-data-v-ab731c8c{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}.u-char-box[data-v-ab731c8c]{text-align:center}.u-char-flex[data-v-ab731c8c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.u-input[data-v-ab731c8c]{position:absolute;top:0;left:-100%;width:200%;height:100%;text-align:left;z-index:9;opacity:0;background:none}.u-char-item[data-v-ab731c8c]{position:relative;width:%?90?%;height:%?90?%;margin:%?10?% %?10?%;font-size:%?60?%;font-weight:700;color:#303133;line-height:%?90?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-middle-line[data-v-ab731c8c]{border:none}.u-box[data-v-ab731c8c]{-webkit-box-sizing:border-box;box-sizing:border-box;border:%?2?% solid #ccc;border-radius:%?6?%}.u-box-active[data-v-ab731c8c]{overflow:hidden;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;border:%?2?% solid #2979ff}.u-middle-line-active[data-v-ab731c8c]{background:#2979ff}.u-breathe[data-v-ab731c8c]{-webkit-animation:breathe-data-v-ab731c8c 2s infinite ease;animation:breathe-data-v-ab731c8c 2s infinite ease}.u-placeholder-line[data-v-ab731c8c]{display:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?2?%;height:%?40?%;background:#333;-webkit-animation:twinkling 1.5s infinite ease;animation:twinkling 1.5s infinite ease}.u-animation-breathe[data-v-ab731c8c]{-webkit-animation-name:breathe-data-v-ab731c8c;animation-name:breathe-data-v-ab731c8c}.u-dot[data-v-ab731c8c]{font-size:%?34?%;line-height:%?34?%}.u-middle-line[data-v-ab731c8c]{height:4px;background:#000;width:80%;position:absolute;border-radius:2px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-buttom-line-active[data-v-ab731c8c]{background:#2979ff}.u-bottom-line[data-v-ab731c8c]{height:4px;background:#000;width:80%;position:absolute;border-radius:2px;bottom:0;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}',""]),t.exports=e}}]);