import{F as h,o as f,r as g,u as j,j as e,B as b,q as r,K as w}from"./index-BjEqcz90.js";import{E as v}from"./ElementTitleHeader-CQ_EJJPK.js";import{M as N,C,s as F}from"./devices-bkV-YEvq.js";import{$ as S}from"./module-6w6WfhFR.js";import{F as E}from"./Backdrop-CK07mcxY.js";import{F as T}from"./FieldContainerInput-07y0Zw38.js";import{S as y}from"./satellite-dish-Bzs8Jyek.js";import"./react-DDCWQfk_.js";import"./react-dom-DxV6jaKz.js";import"./alert-dialog-CdNjwzJA.js";import"./input-TL92MuFp.js";const A="/prote-ja-app/assets/totem_300-C9pbtFuo.png",K=()=>{const[d]=h(),p=f(),u=d.get("to"),[n,t]=g.useState(!1),{user:i}=j(),x=async c=>{c.preventDefault();const m=new FormData(c.currentTarget),s=m.get("mac"),o=m.get("password");if(console.log(s,o),!s||!o){r.error("Preencha todos os campos");return}if(!w(s)){r.error("Endereço MAC inválido");return}if(!i){r.error("Usuário não encontrado");return}try{t(!0);const a=await F(s,o,i.id);if(console.log(a),a.error){const l=await a.error.context.json();switch(console.log(l),l.error){case"Invalid credentials":r.error("Credenciais inválidas, verifique o endereço MAC e a senha");break;default:r.error("Erro ao adicionar totem");break}t(!1);return}r.success("Totem adicionado com sucesso"),p(u||"/dashboard")}catch(a){console.error(a),r.error("Erro ao adicionar totem, tente novamente mais tarde")}t(!1)};return e.jsx("form",{onSubmit:x,children:e.jsxs("div",{className:"space-y-4 mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(v,{className:"pb-2 text-white",title:"Totem",titleAppend:e.jsx("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium leading-none h-7",children:e.jsx(y,{className:"stroke-white w-5 h-5"})})}),e.jsx("img",{src:A,alt:"Totem",className:"w-64 h-auto"})]}),e.jsx(N,{name:"mac"}),e.jsx(E,{title:e.jsxs("div",{className:"flex items-center gap-1",children:["Senha",e.jsx(C,{size:14,className:"mb-4"})]}),tooltip:"A senha precisa conter exatamente 6 caracteres alfanuméricos (letras e números).",children:e.jsx(T,{type:"text",placeholder:"Digite sua Senha",name:"password",required:!0,maxLength:6,minLength:6,closedSize:"sm"})}),e.jsx("div",{className:"flex flex-row-reverse w-full",children:e.jsx(b,{className:"bg-white text-primary",type:"submit",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(S,{ariaLabel:"submitting-spinner",strokeColor:"#7357FF"}),"Carregando..."]}):e.jsx(e.Fragment,{children:"Confirmar"})})})]})})};export{K as default};
