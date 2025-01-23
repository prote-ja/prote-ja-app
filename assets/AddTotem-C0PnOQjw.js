import{r as u,F as w,o as v,u as N,j as e,B as b,q as r,K as T}from"./index-uK6KrvtY.js";import{I as C,T as E,M,H as S,s as y}from"./devices-DlUUTlbK.js";import{E as F}from"./ElementTitleHeader-BMIW-P1G.js";import{T as k}from"./totem_300-eE_nJRI7.js";import{$ as A}from"./module-BDisjovG.js";import{S as I}from"./satellite-dish-CL6hsMUz.js";import"./react-DDCWQfk_.js";import"./react-dom-DxV6jaKz.js";import"./input-B4bQcZNA.js";import"./Backdrop-BtNwZ8JP.js";import"./settings-X4DykvHX.js";const V=()=>{const[s,p]=u.useState(""),x=o=>{p(o)},[h]=w(),f=v(),g=h.get("to"),[m,n]=u.useState(!1),{user:c}=N(),j=async o=>{o.preventDefault();const d=new FormData(o.currentTarget),t=d.get("mac"),i=d.get("password");if(console.log(t,i),!t||!i){r.error("Preencha todos os campos");return}if(!T(t)){r.error("Endereço MAC inválido");return}if(!c){r.error("Usuário não encontrado");return}if(!s){r.error("Preencha o nome do Totem");return}if(s.length<4){r.error("O nome do Totem deve ter no mínimo 4 caracteres");return}try{n(!0);const a=await y(t,i,c.id);if(console.log(a),a.error){const l=await a.error.context.json();switch(console.log(l),l.error){case"Invalid credentials":r.error("Credenciais inválidas, verifique o endereço MAC e a senha");break;default:r.error("Erro ao adicionar totem");break}n(!1);return}r.success("Totem adicionado com sucesso"),f(g||"/dashboard")}catch(a){console.error(a),r.error("Erro ao adicionar totem, tente novamente mais tarde")}n(!1)};return e.jsx("form",{onSubmit:j,children:e.jsxs("div",{className:"space-y-4 max-w-lg mx-auto py-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(F,{className:"pb-2 text-white",title:"Totem",titleAppend:e.jsx("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7",children:e.jsx(I,{className:"stroke-white w-5 h-5"})})}),e.jsx("img",{src:k,alt:"Totem",className:"w-64 h-auto"})]}),e.jsx(C,{name:"Nome",children:e.jsx(E,{value:s,placeholder:"Nome do Totem",onChange:x,errorMessage:"Número de telefone inválido.",valid:!0,minLength:4})}),e.jsx(M,{name:"mac"}),e.jsx(S,{name:"password"}),e.jsx("div",{className:"flex flex-row-reverse w-full",children:e.jsx(b,{className:"bg-white text-primary",type:"submit",disabled:m,children:m?e.jsxs(e.Fragment,{children:[e.jsx(A,{ariaLabel:"submitting-spinner",strokeColor:"#7357FF"}),"Carregando..."]}):e.jsx(e.Fragment,{children:"Confirmar"})})})]})})};export{V as default};
