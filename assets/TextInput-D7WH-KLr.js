import{c as p,r as x,j as s,T as m,H as u,a as d,I as g,J as j,B as f}from"./index-BeSOpQzK.js";import{I as T}from"./input-DwFZEkWT.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),k=({value:r,onChange:n,placeholder:l,className:i,errorMessage:c,onSave:a,valid:e})=>{const[o,t]=x.useState(!1);return s.jsxs("div",{className:"relative flex",children:[s.jsxs(m,{open:!e&&!o,children:[s.jsx(u,{children:s.jsx(T,{value:r,onChange:h=>n(h.target.value),placeholder:l,className:d("w-52",i),onFocus:()=>{t(!0)},onBlur:()=>{t(!1)}})}),s.jsxs(g,{children:[!e&&s.jsx("span",{className:"text-red-500 text-sm mt-2",children:c}),s.jsx(j,{className:"stroke-white fill-white "})]})]}),o&&s.jsx(s.Fragment,{children:s.jsx(f,{onClick:()=>{t(!1),a&&a()},disabled:!e,type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",children:s.jsx(w,{className:"h-4 w-4 horizontal-grow z-10",color:"white"})})})]})};export{w as C,k as T};
