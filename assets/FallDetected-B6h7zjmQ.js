import{r,n,j as e,G as o,B as m}from"./index-LiKWjwXU.js";import{g as c,W as d}from"./wearables-BkS2u90B.js";import{E as s}from"./ElementTitleHeader-yy7CuZFf.js";import{T as x}from"./TotemConnectionComponent-C-rPC7oX.js";import{T as p}from"./triangle-alert-BdYwDyRK.js";import{P as u}from"./phone-call-BICNRPOK.js";import"./react-DDCWQfk_.js";import"./react-dom-DxV6jaKz.js";import"./link-DQ9kQ_Zm.js";const i=[{name:"Joana Santa Maria",wearableStatus:"inactive",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827}],f=[{name:"Sala",totemStatus:"active",lastPingTime:new Date,batteryLevel:40,connections:10}],z=()=>{r.useEffect(()=>{c()},[]);const l=n();return e.jsxs("div",{className:"space-y-4 z-10  ",children:[e.jsx(o,{isBlack:!0}),e.jsxs("div",{className:"flex flex-col items-start text-white z-10 ",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(s,{className:"text-white z-10 px-2 mb-6 mt-6 text-center",title:"Queda Detectada",titleAppend:e.jsx(p,{className:"stroke-black fill-red-600 animate-blink w-8 h-8"})})}),e.jsx("div",{className:"w-full z-10",children:i.map((t,a)=>e.jsx("div",{className:"flex justify-start",onClick:()=>l(`/dashboard/wearable/wearable-${a}`),children:e.jsx(d,{name:t.name,wearableStatus:t.wearableStatus,avatarUrl:t.avatarUrl,batteryLevel:t.batteryLevel,lastPingTime:t.lastPingTime,pedometer:t.pedometer})},`wearable-${a}`))}),e.jsx(s,{className:"text-white z-10 mt-6 text-left",title:"Localização estimada",description:`O totem a seguir recebeu o sinal de queda do usuário ${i[0].name}`}),e.jsx("div",{className:"h-44 flex gap-3 pb-4 px-2 mt-6",children:f.map((t,a)=>e.jsx("div",{className:"justify-center",children:e.jsx(x,{name:t.name,totemStatus:t.totemStatus,lastPingTime:t.lastPingTime,batteryLevel:t.batteryLevel,connections:t.connections})},`totem-${a}`))}),e.jsx("hr",{className:" z-10 "}),e.jsx(s,{className:"text-white z-10 px-2 mt-6 text-left",title:"Contato de Emergência",description:"Dique rápido para o contato de emergência cadastrado"}),e.jsxs(m,{variant:"secondary",className:"px-2 w-44 h-auto z-10 mt-6 mx-auto sm:mx-0 sm:w-64 flex justify-center items-center",onClick:()=>window.location.href="tel:+1234567890",children:[e.jsx(u,{}),e.jsx("span",{className:"sm:block z-10",children:"Discar Agora"})]})]})]})};export{z as default};
