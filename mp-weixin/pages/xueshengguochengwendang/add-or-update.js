(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xueshengguochengwendang/add-or-update"],{1537:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},s=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{xuehao:"",xueshengxingming:"",yuanxi:"",guochengbiaoti:"",tianjiashijian:"",guochengtupian:"",guochengneirong:""},user:{},ro:{xuehao:!1,xueshengxingming:!1,yuanxi:!1,guochengbiaoti:!1,tianjiashijian:!1,guochengtupian:!1,guochengneirong:!1}}},components:{wPicker:o,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.ruleForm.tianjiashijian=this.$utils.getCurDate(),r=e.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:if(a=n.sent,this.user=a.data,this.ruleForm.xuehao=this.user.xuehao,this.ro.xuehao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.yuanxi=this.user.yuanxi,this.ro.yuanxi=!0,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=20;break}return this.ruleForm.id=t.id,n.next=18,this.$api.info("xueshengguochengwendang",this.ruleForm.id);case 18:a=n.sent,this.ruleForm=a.data;case 20:if(this.cross=t.cross,!t.cross){n.next=56;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 24:if((n.t1=n.t0()).done){n.next=56;break}if(o=n.t1.value,"xuehao"!=o){n.next=30;break}return this.ruleForm.xuehao=u[o],this.ro.xuehao=!0,n.abrupt("continue",24);case 30:if("xueshengxingming"!=o){n.next=34;break}return this.ruleForm.xueshengxingming=u[o],this.ro.xueshengxingming=!0,n.abrupt("continue",24);case 34:if("yuanxi"!=o){n.next=38;break}return this.ruleForm.yuanxi=u[o],this.ro.yuanxi=!0,n.abrupt("continue",24);case 38:if("guochengbiaoti"!=o){n.next=42;break}return this.ruleForm.guochengbiaoti=u[o],this.ro.guochengbiaoti=!0,n.abrupt("continue",24);case 42:if("tianjiashijian"!=o){n.next=46;break}return this.ruleForm.tianjiashijian=u[o],this.ro.tianjiashijian=!0,n.abrupt("continue",24);case 46:if("guochengtupian"!=o){n.next=50;break}return this.ruleForm.guochengtupian=u[o].split(",")[0],this.ro.guochengtupian=!0,n.abrupt("continue",24);case 50:if("guochengneirong"!=o){n.next=54;break}return this.ruleForm.guochengneirong=u[o],this.ro.guochengneirong=!0,n.abrupt("continue",24);case 54:n.next=24;break;case 56:this.styleChange();case 57:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{guochengneirongChange:function(e){this.ruleForm.guochengneirong=e},styleChange:function(){this.$nextTick((function(){}))},tianjiashijianChange:function(e){this.ruleForm.tianjiashijian=e.target.value,this.$forceUpdate()},guochengtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.guochengtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){var t,r,a,u,o,s,c,h,g,l;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.guochengbiaoti){n.next=3;break}return this.$utils.msg("过程标题不能为空"),n.abrupt("return");case 3:if(!this.cross){n.next=19;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){n.next=19;break}if(t||(t=e.getStorageSync("crossObj")),o.startsWith("[")){n.next=15;break}for(c in t)c==o&&(t[c]=s);return h=e.getStorageSync("crossTable"),n.next=13,this.$api.update("".concat(h),t);case 13:n.next=19;break;case 15:r=Number(e.getStorageSync("userid")),a=t["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!a||!r){n.next=41;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,g={page:1,limit:10,crossuserid:r,crossrefid:a},n.next=25,this.$api.list("xueshengguochengwendang",g);case 25:if(l=n.sent,!(l.data.total>=u)){n.next=31;break}return this.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 31:if(!this.ruleForm.id){n.next=36;break}return n.next=34,this.$api.update("xueshengguochengwendang",this.ruleForm);case 34:n.next=38;break;case 36:return n.next=38,this.$api.add("xueshengguochengwendang",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:n.next=49;break;case 41:if(!this.ruleForm.id){n.next=46;break}return n.next=44,this.$api.update("xueshengguochengwendang",this.ruleForm);case 44:n.next=48;break;case 46:return n.next=48,this.$api.add("xueshengguochengwendang",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},3117:function(e,n,t){"use strict";t.r(n);var i=t("1537"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},7009:function(e,n,t){"use strict";var i={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.ruleForm.guochengtupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:t}})},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"72d2":function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");i(t("66fd"));var n=i(t("988e"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"821f":function(e,n,t){},"988e":function(e,n,t){"use strict";t.r(n);var i=t("7009"),r=t("3117");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("cef6");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"2173b70c",null,!1,i["a"],u);n["default"]=s.exports},cef6:function(e,n,t){"use strict";var i=t("821f"),r=t.n(i);r.a}},[["72d2","common/runtime","common/vendor"]]]);