"use strict";(self["webpackChunkvue_x"]=self["webpackChunkvue_x"]||[]).push([[881],{6881:function(e,o,t){t.r(o),t.d(o,{default:function(){return d}});var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("van-nav-bar",{attrs:{title:"登录"}}),t("van-form",{ref:"from"},[t("van-field",{attrs:{rules:e.rules.mobile,label:"手机号",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(o){e.$set(e.form,"mobile",o)},expression:"form.mobile"}}),t("van-field",{attrs:{rules:e.rules.code,label:"验证码",placeholder:"请输入验证码"},model:{value:e.form.code,callback:function(o){e.$set(e.form,"code",o)},expression:"form.code"}})],1),t("div",{staticClass:"too"},[t("van-button",{attrs:{loading:e.loading,"loading-text":"加载中...",round:"",type:"info",block:""},on:{click:e.submit}},[e._v("点击登录")])],1)],1)},a=[],l=t(5972);function s(e){return(0,l.Z)({url:"/v1_0/authorizations",method:"post",notoken:!0,data:e})}var n={data(){return{loading:!1,form:{mobile:"16637046798",code:"246810"},rules:{mobile:[{required:!0,message:"必填",trigger:"onBlur"},{pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号",trigger:"onChange"}],code:[{required:!0,message:"必填",trigger:"onBlur"},{pattern:/^\d{6}$/,message:"请输入六位数验证码",trigger:"onChange"},{}]}}},methods:{submit(){this.$refs.from.validate().then((async()=>{console.log("通过"),this.loading=!0;try{const e=await s(this.form);console.log("接口返回值",e),this.$store.commit("setToken",e.data.data),this.$toast.success("登录成功"),this.$router.push(this.$route.query.back||"/")}catch(e){console.log(e)}finally{this.loading=!1}})).catch((()=>{console.log("失败")}))}}},i=n,c=t(1001),u=(0,c.Z)(i,r,a,!1,null,"c7e03c8e",null),d=u.exports}}]);
//# sourceMappingURL=881.69ba9e52.js.map