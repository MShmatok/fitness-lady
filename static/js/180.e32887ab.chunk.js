"use strict";(self.webpackChunkfitness_lady=self.webpackChunkfitness_lady||[]).push([[180],{676:function(n,e,t){t.d(e,{z:function(){return a}});var i,o=t(168),r=t(7924),c=t(630),a=r.ZP.button(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 18px;\n  line-height: calc(26 / 18);\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n  width: 100%;\n  padding: 12px;\n  letter-spacing: 0.2px;\n\n  outline: none;\n  border: none;\n  border-radius: 10px;\n\n  opacity: 1;\n  background-color: ",";\n  transition: all ",";\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n  &:active {\n    box-shadow: none;\n  }\n  &:disabled {\n    opacity: 0.3;\n\n    cursor: not-allowed;\n  }\n"])),c.Z.colors.primaryLight,c.Z.colors.green,c.Z.animation.cubicBezier)},3530:function(n,e,t){t.d(e,{OU:function(){return u},U3:function(){return s},WC:function(){return d}});var i,o,r,c=t(168),a=t(7924),l=t(630),s=a.ZP.h1(i||(i=(0,c.Z)(["\n  color: ",";\n  font-size: 24px;\n  text-align: center;\n\n  font-weight: 700;\n  line-height: calc(36 / 24);\n  letter-spacing: 0.25px;\n"])),l.Z.colors.secondDark),d=a.ZP.p(o||(o=(0,c.Z)(["\n  color: ",";\n\n  text-align: center;\n  font-size: 14px;\n  line-height: calc(24 / 14);\n  letter-spacing: 0.25px;\n"])),l.Z.colors.primaryGray),u=a.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"])))},5180:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,o,r,c,a=t(2791),l=t(7689),s=t(4831),d=t(3530),u=t(3433),h=t(9439),p=t(168),x=t(7924),f=t(630),g=x.ZP.form(i||(i=(0,p.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n  button {\n    margin-top: 136px;\n  }\n"]))),v=x.ZP.label(o||(o=(0,p.Z)(["\n  input:checked + div {\n    border: 2px solid ",";\n    scale: 1.03;\n  }\n"])),f.Z.colors.green),Z=x.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 172px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 15px;\n  border: 1px solid ",";\n  background: ",";\n  padding: 0 30px 0 15px;\n\n  cursor: pointer;\n  h3 {\n    font-size: 12px;\n    line-height: calc(18 / 12);\n    letter-spacing: 0.3px;\n    font-weight: 400;\n  }\n"])),f.Z.colors.secondGrey,f.Z.colors.primaryLight),b=t(3833),m=t(184),y=function(n){var e=n.title,t=n.icon,i=n.handleInputChange,o=n.checkIncludes;return(0,m.jsxs)(v,{children:[(0,m.jsx)("input",{type:"checkbox",name:"inputGroup",className:"visually-hidden",value:e,checked:o(e)||!1,onChange:i}),(0,m.jsxs)(Z,{children:[(0,m.jsx)("div",{children:(0,m.jsx)(b.Z,{name:t,width:"30px",height:"30px"})}),(0,m.jsx)("h3",{children:e})]})]})},j=t(676),w=function(n){var e=n.data,t=n.handlerSubmit,i=(0,a.useState)([]),o=(0,h.Z)(i,2),r=o[0],c=o[1],l=function(n){var t=n.target.value;t===e[e.length-1].title||r.includes(e[e.length-1].title)?c([t]):c((function(n){return n.includes(t)?n.filter((function(n){return n!==t})):[].concat((0,u.Z)(n),[t])}))},s=function(n){return r.includes(n)};return(0,m.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(r)},children:[e.map((function(n){return(0,m.jsx)(y,{title:n.title,icon:n.icon,checkIncludes:s,handleInputChange:l},n.Behavior)})),(0,m.jsx)(j.z,{type:"submit",disabled:!r.length,children:"Continue"})]})},k=x.ZP.section(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 15px 0;\n  gap: 15px;\n"]))),z=[{Behavior:"1",title:"I don't rest enough",icon:"moon"},{Behavior:"2",title:"I have a sweet tooth",icon:"donut"},{Behavior:"3",title:"I have too much soda",icon:"soda"},{Behavior:"4",title:"I eat many salty foods",icon:"salt"},{Behavior:"5",title:"I enjoy midnight snacks",icon:"pizza"},{Behavior:"6",title:"None of the above",icon:"cross"}],I=function(){var n=(0,s.D)().updateData,e=(0,l.s0)();return(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)(k,{children:[(0,m.jsxs)(d.OU,{children:[(0,m.jsx)(d.U3,{children:"Destructive behaviors"}),(0,m.jsx)(d.WC,{children:"We all have them! Which are yours?"})]}),(0,m.jsx)(w,{data:z,handlerSubmit:function(t){n({behaviors:t}),e("/exercise",{replace:!0})}})]})})}}}]);
//# sourceMappingURL=180.e32887ab.chunk.js.map