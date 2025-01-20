import{c as n,r as o,j as s,P as m,i as c,z as p,B as h}from"./index-DzBXpUTP.js";import{I as f}from"./input-D4_Zb5yD.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var x="Label",i=o.forwardRef((e,r)=>s.jsx(m.label,{...e,ref:r,onMouseDown:a=>{var t;a.target.closest("button, input, select, textarea")||((t=e.onMouseDown)==null||t.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));i.displayName=x;var d=i;const b=p("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),j=o.forwardRef(({className:e,...r},a)=>s.jsx(d,{ref:a,className:c(b(),e),...r}));j.displayName=d.displayName;const v=({disabled:e=!1,className:r,inputClassName:a,name:l="password"})=>{const[t,u]=o.useState(!1);return s.jsxs("div",{className:c("relative",r),children:[s.jsx(f,{id:"password-police",name:l,type:t?"text":"password",required:!0,disabled:e,autoComplete:"password",className:a,minLength:6}),s.jsxs(h,{type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",onClick:()=>u(!t),children:[t?s.jsx(y,{className:"h-4 w-4",color:"white"}):s.jsx(w,{className:"h-4 w-4",color:"white"}),s.jsx("span",{className:"sr-only",children:t?"Ocultar senha":"Mostrar senha"})]})]})};export{j as L,v as P};
