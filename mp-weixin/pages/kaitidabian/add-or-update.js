(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kaitidabian/add-or-update"],{"0480":function(e,t,i){},"09c4":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i,n,a,r,u){try{var o=e[r](u),s=o.value}catch(c){return void i(c)}o.done?t(s):Promise.resolve(s).then(n,a)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var u=e.apply(t,i);function o(e){r(u,n,a,o,s,"next",e)}function s(e){r(u,n,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},s=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",jiaoshixingming:"",renzhixuexiao:"",lianxidianhua:"",xuehao:"",xueshengxingming:"",xueshengshouji:"",jiuduxuexiao:"",yuanxi:"",zhuanye:"",kaitimingcheng:"",baogaotupian:"",kaitishijian:"",kaitibaogao:""},user:{},ro:{jiaoshigonghao:!1,jiaoshixingming:!1,renzhixuexiao:!1,lianxidianhua:!1,xuehao:!1,xueshengxingming:!1,xueshengshouji:!1,jiuduxuexiao:!1,yuanxi:!1,zhuanye:!1,kaitimingcheng:!1,baogaotupian:!1,kaitishijian:!1,kaitibaogao:!1}}},components:{wPicker:o,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(n.default.mark((function t(i){var a,r,u,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.kaitishijian=this.$utils.getCurDate(),a=e.getStorageSync("nowTable"),t.next=4,this.$api.session(a);case 4:if(r=t.sent,this.user=r.data,this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=14;break}return this.ruleForm.id=i.id,t.next=12,this.$api.info("kaitidabian",this.ruleForm.id);case 12:r=t.sent,this.ruleForm=r.data;case 14:if(this.cross=i.cross,!i.cross){t.next=78;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=78;break}if(o=t.t1.value,"jiaoshigonghao"!=o){t.next=24;break}return this.ruleForm.jiaoshigonghao=u[o],this.ro.jiaoshigonghao=!0,t.abrupt("continue",18);case 24:if("jiaoshixingming"!=o){t.next=28;break}return this.ruleForm.jiaoshixingming=u[o],this.ro.jiaoshixingming=!0,t.abrupt("continue",18);case 28:if("renzhixuexiao"!=o){t.next=32;break}return this.ruleForm.renzhixuexiao=u[o],this.ro.renzhixuexiao=!0,t.abrupt("continue",18);case 32:if("lianxidianhua"!=o){t.next=36;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,t.abrupt("continue",18);case 36:if("xuehao"!=o){t.next=40;break}return this.ruleForm.xuehao=u[o],this.ro.xuehao=!0,t.abrupt("continue",18);case 40:if("xueshengxingming"!=o){t.next=44;break}return this.ruleForm.xueshengxingming=u[o],this.ro.xueshengxingming=!0,t.abrupt("continue",18);case 44:if("xueshengshouji"!=o){t.next=48;break}return this.ruleForm.xueshengshouji=u[o],this.ro.xueshengshouji=!0,t.abrupt("continue",18);case 48:if("jiuduxuexiao"!=o){t.next=52;break}return this.ruleForm.jiuduxuexiao=u[o],this.ro.jiuduxuexiao=!0,t.abrupt("continue",18);case 52:if("yuanxi"!=o){t.next=56;break}return this.ruleForm.yuanxi=u[o],this.ro.yuanxi=!0,t.abrupt("continue",18);case 56:if("zhuanye"!=o){t.next=60;break}return this.ruleForm.zhuanye=u[o],this.ro.zhuanye=!0,t.abrupt("continue",18);case 60:if("kaitimingcheng"!=o){t.next=64;break}return this.ruleForm.kaitimingcheng=u[o],this.ro.kaitimingcheng=!0,t.abrupt("continue",18);case 64:if("baogaotupian"!=o){t.next=68;break}return this.ruleForm.baogaotupian=u[o].split(",")[0],this.ro.baogaotupian=!0,t.abrupt("continue",18);case 68:if("kaitishijian"!=o){t.next=72;break}return this.ruleForm.kaitishijian=u[o],this.ro.kaitishijian=!0,t.abrupt("continue",18);case 72:if("kaitibaogao"!=o){t.next=76;break}return this.ruleForm.kaitibaogao=u[o],this.ro.kaitibaogao=!0,t.abrupt("continue",18);case 76:t.next=18;break;case 78:this.styleChange();case 79:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{kaitibaogaoChange:function(e){this.ruleForm.kaitibaogao=e},styleChange:function(){this.$nextTick((function(){}))},kaitishijianChange:function(e){this.ruleForm.kaitishijian=e.target.value,this.$forceUpdate()},baogaotupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.baogaotupian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(n.default.mark((function t(){var i,a,r,u,o,s,c,h,l,g;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.kaitimingcheng){t.next=3;break}return this.$utils.msg("开题名称不能为空"),t.abrupt("return");case 3:if(!this.cross){t.next=19;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=19;break}if(i||(i=e.getStorageSync("crossObj")),o.startsWith("[")){t.next=15;break}for(c in i)c==o&&(i[c]=s);return h=e.getStorageSync("crossTable"),t.next=13,this.$api.update("".concat(h),i);case 13:t.next=19;break;case 15:a=Number(e.getStorageSync("userid")),r=i["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!r||!a){t.next=41;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:a,crossrefid:r},t.next=25,this.$api.list("kaitidabian",l);case 25:if(g=t.sent,!(g.data.total>=u)){t.next=31;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!this.ruleForm.id){t.next=36;break}return t.next=34,this.$api.update("kaitidabian",this.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,this.$api.add("kaitidabian",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!this.ruleForm.id){t.next=46;break}return t.next=44,this.$api.update("kaitidabian",this.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,this.$api.add("kaitidabian",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,i("543d")["default"])},"1bbf":function(e,t,i){"use strict";i.r(t);var n=i("09c4"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},2212:function(e,t,i){"use strict";var n={"xia-editor":()=>i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.ruleForm.baogaotupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:i}})},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},b6ca:function(e,t,i){"use strict";(function(e){i("6cdc"),i("921b");n(i("66fd"));var t=n(i("c719"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},c719:function(e,t,i){"use strict";i.r(t);var n=i("2212"),a=i("1bbf");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("fcd3");var u,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0f1393e8",null,!1,n["a"],u);t["default"]=s.exports},fcd3:function(e,t,i){"use strict";var n=i("0480"),a=i.n(n);a.a}},[["b6ca","common/runtime","common/vendor"]]]);