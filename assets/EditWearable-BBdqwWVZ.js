import{c as b,r as d,j as e,B as h,a as w,b as N,s as v}from"./index-BF73LbLp.js";import{I as x,S as E}from"./InformationContainer-mxQmxhgD.js";import{E as S}from"./ElementTitleHeader-CVFSFfNi.js";import{I as k}from"./input-Dt1m2sWg.js";import{D as A}from"./DefaultInput-BPnqlh7s.js";import"./react-DxTR-FPg.js";import"./react-dom-DOp_neaj.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=b("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=b("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),I=()=>{const[a,o]=d.useState("DD/MM/YYYY"),[c,n]=d.useState(!1),u=r=>{if(!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(r))return!1;const t=parseInt(r.split("/")[2],10);return t>=1900&&t<=2025},f=r=>{let t=r.replace(/[^0-9]/g,"");return t.length>=3&&t.length<=4?t=`${t.substring(0,2)}/${t.substring(2)}`:t.length>=5&&t.length<=6?t=`${t.substring(0,2)}/${t.substring(2,4)}/${t.substring(4)}`:t.length>6&&(t=`${t.substring(0,2)}/${t.substring(2,4)}/${t.substring(4,8)}`),t},l=r=>{const i=f(r);o(i)},s=()=>n(!0),m=()=>{u(a)&&n(!1)};return e.jsx("div",{className:"space-y-4",children:e.jsx(x,{name:e.jsx("div",{className:"flex items-center gap-1",children:e.jsx("span",{children:"Data de Nascimento"})}),value:c?e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-1.5",children:[e.jsx(k,{value:a,onChange:r=>l(r.target.value),placeholder:"DD/MM/YYYY",className:"w-64 sm:w-64"}),e.jsx(h,{variant:"secondary",onClick:m,className:"w-full sm:w-auto",disabled:!u(a),children:"Salvar"}),!u(a)&&e.jsx("span",{className:"text-red-500 text-sm mt-2",children:"A data precisa estar no formato DD/MM/YYYY"})]}):e.jsx(h,{variant:"secondary",onClick:s,className:"w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap",title:a,children:a})})})},U=({textAreaRef:a,triggerAutoSize:o,maxHeight:c=Number.MAX_SAFE_INTEGER,minHeight:n=0})=>{const[u,f]=d.useState(!0);d.useEffect(()=>{const s=a.current;if(s){u&&(s.style.minHeight=`${n+6}px`,c>n&&(s.style.maxHeight=`${c}px`),f(!1)),s.style.height=`${n+6}px`;const m=s.scrollHeight;m>c?s.style.height=`${c}px`:s.style.height=`${m+6}px`}},[a.current,o])},j=d.forwardRef(({maxHeight:a=Number.MAX_SAFE_INTEGER,minHeight:o=52,className:c,onChange:n,value:u,...f},l)=>{const s=d.useRef(null),[m,r]=d.useState("");return U({textAreaRef:s,triggerAutoSize:m,maxHeight:a,minHeight:o}),d.useImperativeHandle(l,()=>({textArea:s.current,focus:()=>{var i;return(i=s==null?void 0:s.current)==null?void 0:i.focus()},maxHeight:a,minHeight:o})),d.useEffect(()=>{r(u)},[f==null?void 0:f.defaultValue,u]),e.jsx("textarea",{...f,value:u,ref:s,className:w("flex text-white w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",c),onChange:i=>{r(i.target.value),n==null||n(i)}})});j.displayName="AutosizeTextarea";const R=({onEdit:a,name:o,value:c})=>e.jsx(N,{square:!0,children:e.jsxs("div",{className:"flex flex-col py-2 px-3 text-white",children:[e.jsx("p",{className:"text-lg font-medium mb-4",children:o}),e.jsx("div",{className:"flex flex-col w-full gap-1.5",children:c}),a&&e.jsx(h,{onClick:a,className:"[&_svg]:size-5",size:"icon",variant:"secondary",children:e.jsx(E,{})})]})}),Y=({url:a,size:o,onUpload:c})=>{const[n,u]=d.useState(null),[f,l]=d.useState(!1);d.useEffect(()=>{a&&s(a)},[a]);async function s(r){try{const{data:i,error:t}=await v.storage.from("avatars").download(r);if(t)throw t;const p=URL.createObjectURL(i);u(p)}catch(i){console.log("Error downloading image: ",i.message)}}async function m(r){try{if(l(!0),!r.target.files||r.target.files.length===0)throw new Error("You must select an image to upload.");const i=r.target.files[0],t=i.name.split(".").pop(),g=`avatars/${`${Math.random()}.${t}`}`,{error:y}=await v.storage.from("avatars").upload(g,i);if(y)throw y;c(r,g)}catch(i){alert(i.message)}finally{l(!1)}}return e.jsxs("div",{children:[n?e.jsx("img",{src:n,alt:"Avatar",className:"avatar image",style:{height:o,width:o,borderRadius:"50%"}}):e.jsx("div",{className:"avatar no-image",style:{height:o,width:o,borderRadius:"50%"}}),e.jsx("div",{style:{width:o},children:e.jsx("input",{style:{visibility:"hidden",position:"absolute"},type:"file",id:"upload-avatar",accept:"image/*",onChange:m,disabled:f})})]})},z=()=>{const[a,o]=d.useState("Nome"),c=l=>{o(l)},[n,u]=d.useState(null),f=(l,s)=>{u(s),console.log("Arquivo enviado para o caminho:",s)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(S,{className:"pb-2 text-white",title:a}),n?e.jsx(Y,{url:n,size:160,onUpload:f}):e.jsx(B,{className:"w-64 h-auto stroke-white stroke-1"})]}),e.jsx(x,{name:"Usuário",value:e.jsx(A,{inputState:a,placeholder:"Nome",onSave:c})}),e.jsx(I,{}),e.jsx(x,{name:"Foto de Perfil",value:e.jsxs(h,{variant:"secondary",className:"w-32 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap",onClick:()=>{var l;return(l=document.getElementById("upload-avatar"))==null?void 0:l.click()},children:["Upload ",e.jsx($,{className:"stroke-white w-5 h-5"})]})}),e.jsx("input",{id:"upload-avatar",type:"file",accept:"image/*",style:{display:"none"},onChange:l=>{l.target.files&&f(l,URL.createObjectURL(l.target.files[0]))}}),e.jsx(R,{name:"Informações Adicionais",value:e.jsx(j,{placeholder:"Digite informações adicionais sobre o usuário",className:"w-full"})})]})};export{z as default};
