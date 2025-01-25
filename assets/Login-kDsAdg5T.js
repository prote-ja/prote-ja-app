import{r as g,o as h,j as e,k as u,s as f,B as p,t as j,L as b,v as w,q as s,w as v}from"./index-DGag4-Ak.js";import{L as l,P as N}from"./PasswordInput-K3MuE5uY.js";import{I as F}from"./input-CyQODV8E.js";import{$ as L}from"./module-y6owmL3F.js";import"./react-DDCWQfk_.js";import"./react-dom-DxV6jaKz.js";import"./eye-B3WQQTTn.js";const $=()=>{const[a,t]=g.useState(!1),n=h(),m=async o=>{o.preventDefault();const i=new FormData(o.currentTarget),c=i.get("email"),d=i.get("password");t(!0);let r;try{r=await w(c,d),console.log(r)}catch(x){console.error(x),s.error("Erro ao fazer login.")}if(!r){console.error("Erro ao fazer login."),s.error("Erro ao fazer login."),t(!1);return}r.error&&(s.error(v(r.error)),console.error(r.error)),!r.error&&r.data&&(console.log(r.data),s.success("Login com sucesso."),n("/dashboard")),t(!1)};return e.jsx(u,{border:!0,className:"p-4",children:e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6 w-full",children:[e.jsx("img",{src:f,alt:"proteja-logo",className:"max-h-24"}),e.jsx("h2",{className:"mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white",children:"Faça login em sua conta"}),e.jsxs("form",{className:"mt-2 space-y-4 w-full text-white",onSubmit:m,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",className:"block text-sm font-medium leading-6",children:"Email"}),e.jsx(F,{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,disabled:a,className:"bg-white/10 placeholder-white/50 border-white/20 mt-1"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"password",className:"block text-sm font-medium leading-6",children:"Senha"}),e.jsx(N,{className:"mt-1",disabled:a,name:"password"}),e.jsx("p",{className:"mt-1 text-sm text-muted",children:"A senha deve conter no mínimo 6 caracteres."})]}),e.jsx("div",{children:e.jsx(p,{type:"submit",className:"w-full bg-[#fff] text-[#7357FF] hover:bg-[#c2c2c2c2] mt-1",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx(L,{ariaLabel:"submitting-spinner",strokeColor:"#7357FF"}),"Fazendo login..."]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{}),"Entrar"]})})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-muted",children:["É novo aqui?"," ",e.jsx(b,{to:"/register",className:"font-bold leading-6 text-[#fff] hover:text-primary/20 hover:border-b border-primary/20",viewTransition:!0,children:"Registre-se agora"})]})]})})};export{$ as default};
