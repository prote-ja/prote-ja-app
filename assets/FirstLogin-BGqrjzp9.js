import{c as w,i as j,j as e,B as n,l as u,a as v,v as b,r as m,w as y,L as h,A as C,x as T}from"./index-BkFj3RSV.js";import{W as P}from"./wristband_300-D3ygo3tb.js";import"./react-DxTR-FPg.js";import"./react-dom-DOp_neaj.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=w("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),L=({onSkip:t,children:r,totalSteps:s,currentStep:o,title:c,showTitleOrnament:l,description:i,footer:a,showLogo:f})=>{const g=j(),N=x=>{g(`?step=${x}`)};return e.jsxs("div",{className:"relative w-full max-w-screen-xl flex flex-col max-h-[60rem] h-[calc(100dvh-4rem)] md:h-[calc(100dvh-10rem)] text-white -mx-2 md:mx-0",children:[e.jsx("div",{className:"px-2 md:px-0 ",children:e.jsxs("div",{className:"flex w-full justify-between h-24",children:[t&&e.jsx(n,{onClick:t,variant:"outline",children:"Pular Tutorial"}),e.jsx("div",{className:"flex-1"}),f&&e.jsx("img",{src:u,alt:"Proteja",className:"object-contain max-h-full aspect-square logo-animation"})]})}),e.jsxs("div",{className:"mt-14",children:[l&&e.jsx("hr",{className:"border-white"}),e.jsx("h1",{className:"text-3xl font-bold text-center p-4 title-animation",children:c},`tutorial-step-${o}`),l&&e.jsx("hr",{className:"border-white"})]}),e.jsx("div",{children:r}),e.jsx("div",{className:"p-4",children:i&&e.jsx("div",{className:"p-2 bg-background rounded-md font-medium logo-animation",children:e.jsx("p",{className:"description-animation",children:i},`tutorial-description-${o}`)})}),e.jsxs("div",{className:"absolute bottom-0 w-full flex h-44 flex-col justify-between",children:[e.jsx("div",{children:e.jsx("div",{className:"flex justify-center items-center h-12",children:e.jsx("div",{className:"flex items-center gap-2",children:[...Array(s)].map((x,d)=>e.jsx("div",{className:v("w-2 h-2 rounded-full transition-all duration-100",o===d+1?"bg-white":"bg-white/30 hover:bg-white/60 hover:cursor-pointer"),onClick:()=>N(d+1)},d))})})}),a]})]})},p=({handleNext:t,handleBack:r})=>e.jsxs("div",{className:v("flex px-4",r&&t?"justify-between":"justify-end"),children:[r&&e.jsx(n,{onClick:r,variant:"secondary",borderless:!0,children:"Anterior"}),t&&e.jsx(n,{onClick:t,variant:"secondary",borderless:!0,children:"Próximo"})]}),O="/prote-ja-app/assets/totem_300-C9pbtFuo.png",A="/prote-ja-app/assets/totem_area-LCypHGfJ.png",$=()=>{const[t]=b(),r=j(),s=m.useMemo(()=>parseInt(t.get("step")??"1"),[t]),o=()=>{s!==6&&r(`?step=${s+1}`)},c=()=>{s!==1&&r(`?step=${s-1}`)},l=()=>{r("?step=6")},i=m.useMemo(()=>[{title:"Bem-vindo ao",children:e.jsxs("div",{className:"flex flex-col items-center py-4",children:[e.jsx("img",{src:u,alt:"Center Proteja-logo",className:"h-40"}),e.jsx("img",{src:y,alt:"Center Proteja-name",className:"h-16"})]}),footerOverride:e.jsx(p,{handleNext:o})},{title:"Sobre o ProteJá",description:"Criado para garantir a segurança de grupos de risco, como crianças e idosos, ProteJá funciona detectando eventos críticos, como quedas ou afastamento de uma área segura, e envia alertas em tempo real para os responsáveis.",children:e.jsx("div",{className:"flex flex-col items-center py-4 animated-container",children:e.jsx("img",{src:u,alt:"Center Totem",className:"h-60"})},`tutorial-children-${s}`),showTitleOrnaments:!0,showLogo:!0},{title:"Como Funciona",description:"O sistema Proteja usa uma pulseira inteligente e um totem de monitoramento. A pulseira detecta quedas e saídas da área segura, enviando dados ao totem, que alerta o responsável em tempo real em caso de risco.",children:e.jsx("div",{className:"flex flex-col items-center py-4 animated-container",children:e.jsx("img",{src:A,alt:"Center Totem",className:"h-60"})},`tutorial-children-${s}`),showTitleOrnaments:!0,showLogo:!0},{title:"Totem",description:"O Totem permite que você estabeleça uma área de segurança. Se um usuário ultrapassar os limites dessa área, você receberá um alerta instantâneo.",children:e.jsx("div",{className:"flex flex-col items-center py-4 animated-container",children:e.jsx("img",{src:O,alt:"Center Totem",className:"h-60"})},`tutorial-children-${s}`),showTitleOrnaments:!0,showLogo:!0},{title:"Pulseira",description:"A Pulseira está conectada ao Totem. O usuário que estiver usando a pulseira será monitorado, e, em caso de quedas, você receberá um alerta imediatamente.",children:e.jsx("div",{className:"flex flex-col items-center py-4 animated-container",children:e.jsx("img",{src:P,alt:"Center Totem",className:"h-60"})},`tutorial-children-${s}`),showTitleOrnaments:!0,showLogo:!0},{title:"Hora de começar",description:"Cadastre o Totem e associe as Pulseiras. Cada usuário deverá fornecer suas informações pessoais, que serão utilizadas para gerar dicas personalizadas.",footerOverride:e.jsxs("div",{className:"flex justify-center flex-col gap-3",children:[e.jsx(h,{to:"/add-totem?first_setup=true",className:"mx-auto",children:e.jsx(n,{onClick:()=>console.log("Next"),variant:"default",className:"mx-auto bg-white text-primary",children:"Adicionar Dispositivo"})}),e.jsx(h,{to:"/dashboard",className:"mx-auto",children:e.jsx(n,{onClick:()=>console.log("Next"),variant:"outline",children:"Agora não"})})]}),disableSkip:!0,children:e.jsx("div",{className:"flex flex-col items-center py-4 animated-container",children:e.jsx(k,{size:150})},`tutorial-children-${s}`),showTitleOrnaments:!0,showLogo:!0}],[s]),a=m.useMemo(()=>i[s-1],[s]);return e.jsx(L,{totalSteps:i.length,currentStep:s,title:a.title,showLogo:a.showLogo,description:a.description,onSkip:a.disableSkip?void 0:l,showTitleOrnament:a.showTitleOrnaments,footer:a.footerOverride?a.footerOverride:e.jsx(p,{handleNext:o,handleBack:c}),children:a.children})},B=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(T,{children:e.jsx($,{})})]});export{B as default};
