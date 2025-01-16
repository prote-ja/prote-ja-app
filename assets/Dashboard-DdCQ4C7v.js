import{c as be,r as l,b as pe,d as E,j as n,P as A,e as U,f as y,g as P,h as ve,a as te,L as J,B as $}from"./index-BeSOpQzK.js";import{g as Se,W as we,T as ge}from"./TotemConnectionComponent-CRWG2jwm.js";import{E as Q}from"./ElementTitleHeader-BVHjFyHV.js";import{L as xe}from"./link-CKsOoNy1.js";import{S as Pe}from"./satellite-dish-cI6Nq4-D.js";import"./react-DxTR-FPg.js";import"./react-dom-DOp_neaj.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var ye=l.createContext(void 0);function Ce(e){const r=l.useContext(ye);return e||r||"ltr"}function Te(e,[r,t]){return Math.min(t,Math.max(r,e))}function Ee(e,r){return l.useReducer((t,a)=>r[t][a]??t,e)}var B="ScrollArea",[re,Fe]=pe(B),[Re,S]=re(B),oe=l.forwardRef((e,r)=>{const{__scopeScrollArea:t,type:a="hover",dir:o,scrollHideDelay:s=600,...i}=e,[c,d]=l.useState(null),[m,u]=l.useState(null),[h,f]=l.useState(null),[b,v]=l.useState(null),[R,X]=l.useState(null),[x,j]=l.useState(0),[Y,D]=l.useState(0),[N,L]=l.useState(!1),[_,M]=l.useState(!1),p=E(r,C=>d(C)),w=Ce(o);return n.jsx(Re,{scope:t,type:a,dir:w,scrollHideDelay:s,scrollArea:c,viewport:m,onViewportChange:u,content:h,onContentChange:f,scrollbarX:b,onScrollbarXChange:v,scrollbarXEnabled:N,onScrollbarXEnabledChange:L,scrollbarY:R,onScrollbarYChange:X,scrollbarYEnabled:_,onScrollbarYEnabledChange:M,onCornerWidthChange:j,onCornerHeightChange:D,children:n.jsx(A.div,{dir:w,...i,ref:p,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":Y+"px",...e.style}})})});oe.displayName=B;var ne="ScrollAreaViewport",ae=l.forwardRef((e,r)=>{const{__scopeScrollArea:t,children:a,nonce:o,...s}=e,i=S(ne,t),c=l.useRef(null),d=E(r,c,i.onViewportChange);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),n.jsx(A.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:n.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});ae.displayName=ne;var g="ScrollAreaScrollbar",V=l.forwardRef((e,r)=>{const{forceMount:t,...a}=e,o=S(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=o,c=e.orientation==="horizontal";return l.useEffect(()=>(c?s(!0):i(!0),()=>{c?s(!1):i(!1)}),[c,s,i]),o.type==="hover"?n.jsx(Le,{...a,ref:r,forceMount:t}):o.type==="scroll"?n.jsx(Ae,{...a,ref:r,forceMount:t}):o.type==="auto"?n.jsx(le,{...a,ref:r,forceMount:t}):o.type==="always"?n.jsx(q,{...a,ref:r}):null});V.displayName=g;var Le=l.forwardRef((e,r)=>{const{forceMount:t,...a}=e,o=S(g,e.__scopeScrollArea),[s,i]=l.useState(!1);return l.useEffect(()=>{const c=o.scrollArea;let d=0;if(c){const m=()=>{window.clearTimeout(d),i(!0)},u=()=>{d=window.setTimeout(()=>i(!1),o.scrollHideDelay)};return c.addEventListener("pointerenter",m),c.addEventListener("pointerleave",u),()=>{window.clearTimeout(d),c.removeEventListener("pointerenter",m),c.removeEventListener("pointerleave",u)}}},[o.scrollArea,o.scrollHideDelay]),n.jsx(U,{present:t||s,children:n.jsx(le,{"data-state":s?"visible":"hidden",...a,ref:r})})}),Ae=l.forwardRef((e,r)=>{const{forceMount:t,...a}=e,o=S(g,e.__scopeScrollArea),s=e.orientation==="horizontal",i=I(()=>d("SCROLL_END"),100),[c,d]=Ee("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return l.useEffect(()=>{if(c==="idle"){const m=window.setTimeout(()=>d("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(m)}},[c,o.scrollHideDelay,d]),l.useEffect(()=>{const m=o.viewport,u=s?"scrollLeft":"scrollTop";if(m){let h=m[u];const f=()=>{const b=m[u];h!==b&&(d("SCROLL"),i()),h=b};return m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[o.viewport,s,d,i]),n.jsx(U,{present:t||c!=="hidden",children:n.jsx(q,{"data-state":c==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:y(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:y(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),le=l.forwardRef((e,r)=>{const t=S(g,e.__scopeScrollArea),{forceMount:a,...o}=e,[s,i]=l.useState(!1),c=e.orientation==="horizontal",d=I(()=>{if(t.viewport){const m=t.viewport.offsetWidth<t.viewport.scrollWidth,u=t.viewport.offsetHeight<t.viewport.scrollHeight;i(c?m:u)}},10);return T(t.viewport,d),T(t.content,d),n.jsx(U,{present:a||s,children:n.jsx(q,{"data-state":s?"visible":"hidden",...o,ref:r})})}),q=l.forwardRef((e,r)=>{const{orientation:t="vertical",...a}=e,o=S(g,e.__scopeScrollArea),s=l.useRef(null),i=l.useRef(0),[c,d]=l.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=ue(c.viewport,c.content),u={...a,sizes:c,onSizesChange:d,hasThumb:m>0&&m<1,onThumbChange:f=>s.current=f,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:f=>i.current=f};function h(f,b){return We(f,i.current,c,b)}return t==="horizontal"?n.jsx(je,{...u,ref:r,onThumbPositionChange:()=>{if(o.viewport&&s.current){const f=o.viewport.scrollLeft,b=K(f,c,o.dir);s.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollLeft=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollLeft=h(f,o.dir))}}):t==="vertical"?n.jsx(De,{...u,ref:r,onThumbPositionChange:()=>{if(o.viewport&&s.current){const f=o.viewport.scrollTop,b=K(f,c);s.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:f=>{o.viewport&&(o.viewport.scrollTop=f)},onDragScroll:f=>{o.viewport&&(o.viewport.scrollTop=h(f))}}):null}),je=l.forwardRef((e,r)=>{const{sizes:t,onSizesChange:a,...o}=e,s=S(g,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),m=E(r,d,s.onScrollbarXChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),n.jsx(ie,{"data-orientation":"horizontal",...o,ref:m,sizes:t,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":O(t)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,h)=>{if(s.viewport){const f=s.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),me(f,h)&&u.preventDefault()}},onResize:()=>{d.current&&s.viewport&&i&&a({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:z(i.paddingLeft),paddingEnd:z(i.paddingRight)}})}})}),De=l.forwardRef((e,r)=>{const{sizes:t,onSizesChange:a,...o}=e,s=S(g,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),m=E(r,d,s.onScrollbarYChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),n.jsx(ie,{"data-orientation":"vertical",...o,ref:m,sizes:t,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":O(t)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,h)=>{if(s.viewport){const f=s.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),me(f,h)&&u.preventDefault()}},onResize:()=>{d.current&&s.viewport&&i&&a({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:z(i.paddingTop),paddingEnd:z(i.paddingBottom)}})}})}),[Ne,se]=re(g),ie=l.forwardRef((e,r)=>{const{__scopeScrollArea:t,sizes:a,hasThumb:o,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:c,onThumbPositionChange:d,onDragScroll:m,onWheelScroll:u,onResize:h,...f}=e,b=S(g,t),[v,R]=l.useState(null),X=E(r,p=>R(p)),x=l.useRef(null),j=l.useRef(""),Y=b.viewport,D=a.content-a.viewport,N=P(u),L=P(d),_=I(h,10);function M(p){if(x.current){const w=p.clientX-x.current.left,C=p.clientY-x.current.top;m({x:w,y:C})}}return l.useEffect(()=>{const p=w=>{const C=w.target;(v==null?void 0:v.contains(C))&&N(w,D)};return document.addEventListener("wheel",p,{passive:!1}),()=>document.removeEventListener("wheel",p,{passive:!1})},[Y,v,D,N]),l.useEffect(L,[a,L]),T(v,_),T(b.content,_),n.jsx(Ne,{scope:t,scrollbar:v,hasThumb:o,onThumbChange:P(s),onThumbPointerUp:P(i),onThumbPositionChange:L,onThumbPointerDown:P(c),children:n.jsx(A.div,{...f,ref:X,style:{position:"absolute",...f.style},onPointerDown:y(e.onPointerDown,p=>{p.button===0&&(p.target.setPointerCapture(p.pointerId),x.current=v.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),M(p))}),onPointerMove:y(e.onPointerMove,M),onPointerUp:y(e.onPointerUp,p=>{const w=p.target;w.hasPointerCapture(p.pointerId)&&w.releasePointerCapture(p.pointerId),document.body.style.webkitUserSelect=j.current,b.viewport&&(b.viewport.style.scrollBehavior=""),x.current=null})})})}),W="ScrollAreaThumb",ce=l.forwardRef((e,r)=>{const{forceMount:t,...a}=e,o=se(W,e.__scopeScrollArea);return n.jsx(U,{present:t||o.hasThumb,children:n.jsx(_e,{ref:r,...a})})}),_e=l.forwardRef((e,r)=>{const{__scopeScrollArea:t,style:a,...o}=e,s=S(W,t),i=se(W,t),{onThumbPositionChange:c}=i,d=E(r,h=>i.onThumbChange(h)),m=l.useRef(void 0),u=I(()=>{m.current&&(m.current(),m.current=void 0)},100);return l.useEffect(()=>{const h=s.viewport;if(h){const f=()=>{if(u(),!m.current){const b=ze(h,c);m.current=b,c()}};return c(),h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[s.viewport,u,c]),n.jsx(A.div,{"data-state":i.hasThumb?"visible":"hidden",...o,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:y(e.onPointerDownCapture,h=>{const b=h.target.getBoundingClientRect(),v=h.clientX-b.left,R=h.clientY-b.top;i.onThumbPointerDown({x:v,y:R})}),onPointerUp:y(e.onPointerUp,i.onThumbPointerUp)})});ce.displayName=W;var F="ScrollAreaCorner",de=l.forwardRef((e,r)=>{const t=S(F,e.__scopeScrollArea),a=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&a?n.jsx(Me,{...e,ref:r}):null});de.displayName=F;var Me=l.forwardRef((e,r)=>{const{__scopeScrollArea:t,...a}=e,o=S(F,t),[s,i]=l.useState(0),[c,d]=l.useState(0),m=!!(s&&c);return T(o.scrollbarX,()=>{var h;const u=((h=o.scrollbarX)==null?void 0:h.offsetHeight)||0;o.onCornerHeightChange(u),d(u)}),T(o.scrollbarY,()=>{var h;const u=((h=o.scrollbarY)==null?void 0:h.offsetWidth)||0;o.onCornerWidthChange(u),i(u)}),m?n.jsx(A.div,{...a,ref:r,style:{width:s,height:c,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function z(e){return e?parseInt(e,10):0}function ue(e,r){const t=e/r;return isNaN(t)?0:t}function O(e){const r=ue(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-t)*r;return Math.max(a,18)}function We(e,r,t,a="ltr"){const o=O(t),s=o/2,i=r||s,c=o-i,d=t.scrollbar.paddingStart+i,m=t.scrollbar.size-t.scrollbar.paddingEnd-c,u=t.content-t.viewport,h=a==="ltr"?[0,u]:[u*-1,0];return fe([d,m],h)(e)}function K(e,r,t="ltr"){const a=O(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,s=r.scrollbar.size-o,i=r.content-r.viewport,c=s-a,d=t==="ltr"?[0,i]:[i*-1,0],m=Te(e,d);return fe([0,i],[0,c])(m)}function fe(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(e[1]-e[0]);return r[0]+a*(t-e[0])}}function me(e,r){return e>0&&e<r}var ze=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},a=0;return function o(){const s={left:e.scrollLeft,top:e.scrollTop},i=t.left!==s.left,c=t.top!==s.top;(i||c)&&r(),t=s,a=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(a)};function I(e,r){const t=P(e),a=l.useRef(0);return l.useEffect(()=>()=>window.clearTimeout(a.current),[]),l.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(t,r)},[t,r])}function T(e,r){const t=P(r);ve(()=>{let a=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(a),o.unobserve(e)}}},[e,t])}var he=oe,He=ae,Ue=de;const k=l.forwardRef(({className:e,children:r,...t},a)=>n.jsxs(he,{ref:a,className:te("relative overflow-hidden",e),...t,children:[n.jsx(He,{className:"h-full w-full rounded-[inherit]",children:r}),n.jsx(H,{}),n.jsx(Ue,{})]}));k.displayName=he.displayName;const H=l.forwardRef(({className:e,orientation:r="vertical",...t},a)=>n.jsx(V,{ref:a,orientation:r,className:te("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:n.jsx(ce,{className:"relative flex-1 rounded-full bg-border"})}));H.displayName=V.displayName;const Z=[{name:"Joana Santa Maria",wearableStatus:"inactive",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"inactive",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827},{name:"Joana Santa Maria",wearableStatus:"active",avatarUrl:"https://images.unsplash.com/photo-1644551012443-00cfd90f9640?q=80&w=255&auto=format&fit=crop&ixlib=rb-4.0.3",batteryLevel:40,lastPingTime:new Date,pedometer:23827}],ee=[{name:"Sala",totemStatus:"active",lastPingTime:new Date,batteryLevel:40,connections:10},{name:"Cozinha",totemStatus:"active",lastPingTime:new Date,batteryLevel:99,connections:7},{name:"Quarto",totemStatus:"inactive",lastPingTime:new Date,batteryLevel:0,connections:2},{name:"Sala",totemStatus:"active",lastPingTime:new Date,batteryLevel:40,connections:10},{name:"Cozinha",totemStatus:"active",lastPingTime:new Date,batteryLevel:99,connections:7},{name:"Quarto",totemStatus:"inactive",lastPingTime:new Date,batteryLevel:0,connections:2}],Je=()=>(l.useEffect(()=>{Se()},[]),n.jsxs("div",{className:"relative w-full max-w-screen-xl flex flex-col h-[calc(100dvh-4rem)] mx-auto text-white",children:[n.jsx(Q,{className:"p-2",title:"Pulseiras",titleAppend:n.jsxs("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium",children:[Z.length,n.jsx(xe,{className:"w-5 h-5"})]}),endElement:n.jsx(J,{to:"/dashboard/add-wearable",children:n.jsxs($,{variant:"secondary",size:"sm",children:["Registrar ",n.jsx(G,{})]})})}),n.jsxs(k,{scrollHideDelay:500,children:[n.jsx("div",{className:"grid px-2 gap-3 w-full max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:Z.map((e,r)=>n.jsx("div",{className:"flex justify-center",children:n.jsx(we,{name:e.name,wearableStatus:e.wearableStatus,avatarUrl:e.avatarUrl,batteryLevel:e.batteryLevel,lastPingTime:e.lastPingTime,pedometer:e.pedometer})},r))}),n.jsx(H,{})]}),n.jsxs("div",{className:"flex flex-col justify-between p-2 pb-0",children:[n.jsx(Q,{className:"pb-2",title:"Totems",titleAppend:n.jsxs("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium",children:[ee.length,n.jsx(Pe,{className:"w-5 h-5"})]}),endElement:n.jsx(J,{to:"/dashboard/add-totem",children:n.jsxs($,{variant:"secondary",size:"sm",children:["Registrar ",n.jsx(G,{})]})})}),n.jsxs(k,{children:[n.jsx("div",{className:"h-44 flex gap-3 pb-4",children:ee.map((e,r)=>n.jsx("div",{className:"justify-center",children:n.jsx(ge,{name:e.name,totemStatus:e.totemStatus,lastPingTime:e.lastPingTime,batteryLevel:e.batteryLevel,connections:e.connections})},r))}),n.jsx(H,{orientation:"horizontal"})]})]})]}));export{Je as default};
