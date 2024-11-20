import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as D}from"./headers-CJxyjWvY.js";import{d as O,b as y,N as C,O as g,P as f,i as _,e as z,u as P,j as R,l as k,o as v,I as B,a as b,Q as S,C as H,D as L,E as e,F as l,G as t,_ as j}from"./index-BK1kHPWn.js";import{N as E,_ as F}from"./a-Cu7j9yr-.js";import{_ as I}from"./p-DXR4WiKb.js";import{_ as M}from"./Tag-CtEYpnsM.js";function W(s){const{textColor1:n,dividerColor:u,fontWeightStrong:a}=s;return{textColor:n,color:u,fontWeight:a}}const A={name:"Divider",common:O,self:W},G=y("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[C("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[C("no-title",`
 display: flex;
 align-items: center;
 `)]),g("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),f("title-position-left",[g("line",[f("left",{width:"28px"})])]),f("title-position-right",[g("line",[f("right",{width:"28px"})])]),f("dashed",[g("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),f("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),g("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),C("dashed",[g("line",{backgroundColor:"var(--n-color)"})]),f("dashed",[g("line",{borderColor:"var(--n-color)"})]),f("vertical",{backgroundColor:"var(--n-color)"})]),Q=Object.assign(Object.assign({},_.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),U=z({name:"Divider",props:Q,setup(s){const{mergedClsPrefixRef:n,inlineThemeDisabled:u}=P(s),a=_("Divider","-divider",G,A,s,n),d=R(()=>{const{common:{cubicBezierEaseInOut:r},self:{color:o,textColor:p,fontWeight:m}}=a.value;return{"--n-bezier":r,"--n-color":o,"--n-text-color":p,"--n-font-weight":m}}),i=u?k("divider",void 0,d,s):void 0;return{mergedClsPrefix:n,cssVars:u?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s;const{$slots:n,titlePlacement:u,vertical:a,dashed:d,cssVars:i,mergedClsPrefix:r}=this;return(s=this.onRender)===null||s===void 0||s.call(this),v("div",{role:"separator",class:[`${r}-divider`,this.themeClass,{[`${r}-divider--vertical`]:a,[`${r}-divider--no-title`]:!n.default,[`${r}-divider--dashed`]:d,[`${r}-divider--title-position-${u}`]:n.default&&u}],style:i},a?null:v("div",{class:`${r}-divider__line ${r}-divider__line--left`}),!a&&n.default?v(B,null,v("div",{class:`${r}-divider__title`},this.$slots),v("div",{class:`${r}-divider__line ${r}-divider__line--right`})):null)}}),$=b("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),w=[b("&:first-child",`
 margin-top: 0;
 `),b("&:last-child",`
 margin-bottom: 0;
 `)],q=b([y("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[f("align-text",{paddingLeft:0}),$,w]),y("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[f("align-text",{paddingLeft:0}),$,w])]),J=Object.assign(Object.assign({},_.props),{alignText:Boolean}),K=z({name:"Ul",props:J,setup(s){const{mergedClsPrefixRef:n,inlineThemeDisabled:u}=P(s),a=_("Typography","-xl",q,S,s,n),d=R(()=>{const{common:{cubicBezierEaseInOut:r},self:{olPadding:o,ulPadding:p,liMargin:m,liTextColor:x,liLineHeight:T,liFontSize:V}}=a.value;return{"--n-bezier":r,"--n-font-size":V,"--n-line-height":T,"--n-text-color":x,"--n-li-margin":m,"--n-ol-padding":o,"--n-ul-padding":p}}),i=u?k("ul",void 0,d,s):void 0;return{mergedClsPrefix:n,cssVars:u?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s;const{mergedClsPrefix:n}=this;return(s=this.onRender)===null||s===void 0||s.call(this),v("ul",{class:[`${n}-ul`,this.themeClass,this.alignText&&`${n}-ul--align-text`],style:this.cssVars},this.$slots)}}),X=z({name:"Li",render(){return v("li",null,this.$slots)}}),Y={};function Z(s,n){const u=E,a=F,d=D,i=I,r=U,o=X,p=K,m=M,x=j;return H(),L(B,null,[e(a,{title:"往期活动",type:"info"},{default:l(()=>[e(u,{href:"https://ilikewhotao.github.io/splatoon/dist/",target:"_blank"},{default:l(()=>n[0]||(n[0]=[t(" 斯普拉遁 - 小白杯 ")])),_:1})]),_:1}),e(d,{prefix:"bar"},{default:l(()=>n[1]||(n[1]=[t(" 活动报名 ")])),_:1}),e(i,null,{default:l(()=>n[2]||(n[2]=[t(" 需要玩家提供好友编号、游戏名称。（活动期间尽量不要修改游戏名称） ")])),_:1}),e(r),e(d,{prefix:"bar"},{default:l(()=>n[3]||(n[3]=[t(" 活动时间 ")])),_:1}),e(p,null,{default:l(()=>[e(o,null,{default:l(()=>n[4]||(n[4]=[t(" 开始时间：2024-11-23（周六）")])),_:1}),e(o,null,{default:l(()=>n[5]||(n[5]=[t(" 结束时间：2024-12-13（周五）")])),_:1})]),_:1}),e(r),e(d,{prefix:"bar"},{default:l(()=>n[6]||(n[6]=[t(" 活动内容 ")])),_:1}),e(p,null,{default:l(()=>[e(o,null,{default:l(()=>n[7]||(n[7]=[t(" 需要提前报名的玩家才能够参加本次活动 ")])),_:1}),e(o,null,{default:l(()=>n[8]||(n[8]=[t(" 一场比赛分为4局对战，游戏采用150cc，地图采用随机，车辆不限 ")])),_:1}),e(o,null,{default:l(()=>n[9]||(n[9]=[t(" 每场比赛需要至少有9名玩家才能够开始比赛，并且比赛最终结算时玩家数不少于9名，中途不允许额外玩家加入补位等 ")])),_:1})]),_:1}),e(r),e(d,{prefix:"bar"},{default:l(()=>n[10]||(n[10]=[t(" 注意事项 ")])),_:1}),e(p,null,{default:l(()=>[e(o,null,{default:l(()=>n[11]||(n[11]=[t(" 禁止选择随机以外地图 ")])),_:1}),e(o,null,{default:l(()=>n[12]||(n[12]=[t(" 禁止一场比赛中途加入补位 ")])),_:1}),e(o,null,{default:l(()=>n[13]||(n[13]=[t(" 禁止使用未报名的账号参与活动 ")])),_:1})]),_:1}),e(i,null,{default:l(()=>n[14]||(n[14]=[t(" 包括但不限以上情况，如有发现对局视为无效；情节严重者取消资格。 ")])),_:1}),e(r),e(d,{prefix:"bar"},{default:l(()=>n[15]||(n[15]=[t(" 记分规则 ")])),_:1}),e(p,null,{default:l(()=>[e(o,null,{default:l(()=>n[16]||(n[16]=[t(" 有效对局每人基础分 +1 ")])),_:1}),e(o,null,{default:l(()=>[n[18]||(n[18]=t(" 单场排名第1追加 ")),e(m,{bordered:!1,type:"error",size:"small"},{default:l(()=>n[17]||(n[17]=[t(" 🥇+4 ")])),_:1}),n[19]||(n[19]=t(" 金牌分 "))]),_:1}),e(o,null,{default:l(()=>[n[21]||(n[21]=t(" 单场排名第2追加 ")),e(m,{bordered:!1,type:"warning",size:"small"},{default:l(()=>n[20]||(n[20]=[t(" 🥈+3 ")])),_:1}),n[22]||(n[22]=t(" 银牌分 "))]),_:1}),e(o,null,{default:l(()=>[n[24]||(n[24]=t(" 单场排名第3追加 ")),e(m,{bordered:!1,type:"info",size:"small"},{default:l(()=>n[23]||(n[23]=[t(" 🥉+2 ")])),_:1}),n[25]||(n[25]=t(" 铜牌分 "))]),_:1}),e(o,null,{default:l(()=>[n[27]||(n[27]=t(" 单场排名第4-9追加 ")),e(m,{bordered:!1,type:"success",size:"small"},{default:l(()=>n[26]||(n[26]=[t(" 🍀+6 ")])),_:1}),n[28]||(n[28]=t(" 随机幸运分 "))]),_:1}),e(o,null,{default:l(()=>[n[30]||(n[30]=t(" 单场排名第10-12追加 ")),e(m,{bordered:!1,type:"default",size:"small"},{default:l(()=>n[29]||(n[29]=[t(" 🍄+1 ")])),_:1}),n[31]||(n[31]=t(" 鼓励分 "))]),_:1})]),_:1}),e(i,null,{default:l(()=>n[32]||(n[32]=[t(" 如果存在玩家掉线，导致游戏结算时玩家数少于9名或中途有玩家加入，本场比赛都视为无效。 ")])),_:1}),e(i,null,{default:l(()=>n[33]||(n[33]=[t(" 最终会从玩家所有比赛中随机选出10局，合计得出最终得分。 ")])),_:1}),e(r),e(d,{prefix:"bar"},{default:l(()=>n[34]||(n[34]=[t(" 活动奖励 ")])),_:1}),e(i,null,{default:l(()=>[n[36]||(n[36]=t(" 本活动由 ")),e(x,{type:"success"},{default:l(()=>n[35]||(n[35]=[t(" 小白 ")])),_:1}),n[37]||(n[37]=t(" 独家赞助💰 "))]),_:1}),e(p,null,{default:l(()=>[e(o,null,{default:l(()=>n[38]||(n[38]=[t(" 累计得分第1名 💰60元* ")])),_:1}),e(o,null,{default:l(()=>n[39]||(n[39]=[t(" 累计得分第2名 💰40元 ")])),_:1}),e(o,null,{default:l(()=>n[40]||(n[40]=[t(" 累计得分第3名 💰20元 ")])),_:1}),e(o,null,{default:l(()=>n[41]||(n[41]=[t(" 累计得分第4-10名 💰10元 ")])),_:1})]),_:1}),e(i,null,{default:l(()=>[n[43]||(n[43]=t(" * 第1名可额外获得由 ")),e(x,{type:"success"},{default:l(()=>n[42]||(n[42]=[t(" 汐岚 ")])),_:1}),n[44]||(n[44]=t(" 独家赞助刻有自定义字符或图案的3D打印手办一个 "))]),_:1})],64)}const on=N(Y,[["render",Z]]);export{on as default};
