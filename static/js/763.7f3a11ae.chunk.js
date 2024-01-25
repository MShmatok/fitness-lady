"use strict";(self.webpackChunkfitness_lady=self.webpackChunkfitness_lady||[]).push([[763],{7763:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,r,o,a,c,l,s,h=t(9439),u=t(6705),d=t(2791),g=t(168),p=t(7924),x=t(8825),f=p.ZP.section(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 15px 0;\n  gap: 15px;\n"]))),m=p.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n\n  border-radius: 10px;\n  border: 1px solid ",";\n  overflow: hidden;\n\n  button {\n    width: 50%;\n    height: 32px;\n    color: ",";\n    text-align: center;\n\n    font-size: 12px;\n    font-weight: 800;\n    line-height: normal;\n    letter-spacing: 2.5px;\n    text-transform: uppercase;\n\n    background: #fff;\n  }\n\n  .active {\n    background: rgba(95, 203, 57, 0.2);\n  }\n"])),x.Z.colors.green,x.Z.colors.green),b=t(6727),Z=b.Ry().shape({height:b.Rx().min(0).max(300).required(),currentWeight:b.Rx().min(0).max(300).required()}),y=t(5705),j=p.ZP.form(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ",";\n  width: 100%;\n\n  button {\n    margin-top: 136px;\n  }\n"])),(function(n){return n.$gap||"16px"})),v=p.ZP.label(a||(a=(0,g.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: calc(20 / ",");\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  width: 100%;\n"])),(function(n){return n.$fontSize||"16px"}),(function(n){return n.$fontWeight||"400"}),(function(n){return parseInt(n.$fontSize,10)||"16"}),x.Z.colors.primaryDark),W=p.ZP.input(c||(c=(0,g.Z)(["\n  color: ",";\n  font-size: 14px;\n  line-height: calc(24 / 14);\n  letter-spacing: 0.25px;\n  padding: 19px 13px;\n\n  border-radius: 10px;\n  border: 1px solid ",";\n  background: ",";\n\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: ",";\n  }\n"])),x.Z.colors.secondDark,x.Z.colors.secondGrey,x.Z.colors.primaryLight,x.Z.colors.secondDark),k=p.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 14px;\n  line-height: calc(18 / 14);\n  color: ",";\n"])),x.Z.colors.red),w=p.ZP.button(s||(s=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 18px;\n  line-height: calc(26 / 18);\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n  width: 100%;\n  padding: 12px;\n  letter-spacing: 0.2px;\n\n  outline: none;\n  border: none;\n  border-radius: 10px;\n\n  opacity: 1;\n  background-color: ",";\n  transition: all ",";\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n  &:active {\n    box-shadow: none;\n  }\n  &:disabled {\n    opacity: 0.3;\n\n    cursor: not-allowed;\n  }\n"])),x.Z.colors.primaryLight,x.Z.colors.green,x.Z.animation.cubicBezier),C=t(184),z=function(n){var e=n.units,t=n.handlerClick,i=n.dataInitial,r=(0,y.TA)({initialValues:{height:i.height,currentWeight:i.currentWeight},validationSchema:Z,onSubmit:function(n){t(n.height,n.currentWeight)}}),o=r.values,a=r.touched,c=r.errors,l=r.handleSubmit,s=r.handleChange,h=r.isValid,u=r.handleBlur;return(0,C.jsxs)(j,{onSubmit:l,children:[(0,C.jsxs)(v,{children:[(0,C.jsx)(W,{type:"number",step:"0.001",name:"height",value:o.height,onChange:s,onBlur:u,placeholder:e?"Height(ft)":"Height(m)",error:a.height&&c.height}),a.height&&c.height&&(0,C.jsx)(k,{children:c.height})]}),(0,C.jsxs)(v,{children:[(0,C.jsx)(W,{type:"number",step:"0.001",name:"currentWeight",value:o.currentWeight,onChange:s,onBlur:u,placeholder:e?"Current Weight(lb)":"Current Weight(kg)",error:a.currentWeight&&c.currentWeight}),a.currentWeight&&c.currentWeight&&(0,C.jsx)(k,{children:c.currentWeight})]}),(0,C.jsx)(w,{type:"submit",disabled:!h||!o.height&&!o.currentWeight,children:"Continue"})]})},P=t(7689),S=t(4831),I=function(){var n=(0,S.D)(),e=n.data,t=n.updateData;console.log(e);var i=(0,d.useState)((function(){return"Imperial"===e.units||!e.units})),r=(0,h.Z)(i,2),o=r[0],a=r[1],c=(0,P.s0)(),l=function(n){"active"!==n.currentTarget.className&&a(!o)};return(0,C.jsx)("div",{className:"container",children:(0,C.jsxs)(f,{children:[(0,C.jsxs)(u.OU,{children:[(0,C.jsx)(u.U3,{children:"Measure Yourself"}),(0,C.jsx)(u.WC,{children:"What are your height and body weight?"})]}),(0,C.jsxs)(m,{children:[(0,C.jsx)("button",{onClick:l,className:o?"active":"",children:"Imperial"}),(0,C.jsx)("button",{onClick:l,className:o?"":"active",children:"Metric"})]}),(0,C.jsx)(z,{units:o,handlerClick:function(n,e){t({height:n,currentWeight:e,units:o?"Imperial":"Metric"}),c("/behaviors",{replace:!1})},dataInitial:e})]})})}}}]);
//# sourceMappingURL=763.7f3a11ae.chunk.js.map