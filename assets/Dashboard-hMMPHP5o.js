import{c as be,r as l,a as y,b as ve,j as t,d as xe,P as j,e as I,f as S,g as T,h as Ue,i as k,k as Q,l as Ge,m as Ke,n as ge,R as qe,I as Je,D as Ze,u as $e,o as et,L as ee,B as te,p as tt,q as rt}from"./index-CxArh08o.js";import{B as ot,W as re}from"./WearableConnectionComponent-D-VH51An.js";import{W as nt,a as st}from"./WearableAvatar-rvCZVOTk.js";import{E as oe}from"./ElementTitleHeader-CqljC8GH.js";import{H as lt}from"./HorizontalDivider-DaHi1kv6.js";import{$ as ne}from"./module-BADDJToX.js";import{A as se,a as le,b as ae,c as ie,d as ce,e as de,f as ue,g as at}from"./alert-dialog-KPJe3LZZ.js";import{P as fe}from"./plus-Bkn7D4WW.js";import"./react-DDCWQfk_.js";import"./react-dom-DZBigVa_.js";import"./storage-r39ZYS7Q.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=be("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=be("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);function ct(e,[o,n]){return Math.min(n,Math.max(o,e))}function dt(e,o){return l.useReducer((n,s)=>o[n][s]??n,e)}var G="ScrollArea",[Se,Yt]=xe(G),[ut,g]=Se(G),Ae=l.forwardRef((e,o)=>{const{__scopeScrollArea:n,type:s="hover",dir:r,scrollHideDelay:a=600,...i}=e,[c,d]=l.useState(null),[f,u]=l.useState(null),[h,m]=l.useState(null),[b,p]=l.useState(null),[v,_]=l.useState(null),[C,M]=l.useState(0),[F,z]=l.useState(0),[B,R]=l.useState(!1),[O,V]=l.useState(!1),x=y(o,P=>d(P)),w=ve(r);return t.jsx(ut,{scope:n,type:s,dir:w,scrollHideDelay:a,scrollArea:c,viewport:f,onViewportChange:u,content:h,onContentChange:m,scrollbarX:b,onScrollbarXChange:p,scrollbarXEnabled:B,onScrollbarXEnabledChange:R,scrollbarY:v,onScrollbarYChange:_,scrollbarYEnabled:O,onScrollbarYEnabledChange:V,onCornerWidthChange:M,onCornerHeightChange:z,children:t.jsx(j.div,{dir:w,...i,ref:x,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":F+"px",...e.style}})})});Ae.displayName=G;var je="ScrollAreaViewport",Ce=l.forwardRef((e,o)=>{const{__scopeScrollArea:n,children:s,nonce:r,...a}=e,i=g(je,n),c=l.useRef(null),d=y(o,c,i.onViewportChange);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),t.jsx(j.div,{"data-radix-scroll-area-viewport":"",...a,ref:d,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:t.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});Ce.displayName=je;var A="ScrollAreaScrollbar",K=l.forwardRef((e,o)=>{const{forceMount:n,...s}=e,r=g(A,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:i}=r,c=e.orientation==="horizontal";return l.useEffect(()=>(c?a(!0):i(!0),()=>{c?a(!1):i(!1)}),[c,a,i]),r.type==="hover"?t.jsx(ft,{...s,ref:o,forceMount:n}):r.type==="scroll"?t.jsx(ht,{...s,ref:o,forceMount:n}):r.type==="auto"?t.jsx(Te,{...s,ref:o,forceMount:n}):r.type==="always"?t.jsx(q,{...s,ref:o}):null});K.displayName=A;var ft=l.forwardRef((e,o)=>{const{forceMount:n,...s}=e,r=g(A,e.__scopeScrollArea),[a,i]=l.useState(!1);return l.useEffect(()=>{const c=r.scrollArea;let d=0;if(c){const f=()=>{window.clearTimeout(d),i(!0)},u=()=>{d=window.setTimeout(()=>i(!1),r.scrollHideDelay)};return c.addEventListener("pointerenter",f),c.addEventListener("pointerleave",u),()=>{window.clearTimeout(d),c.removeEventListener("pointerenter",f),c.removeEventListener("pointerleave",u)}}},[r.scrollArea,r.scrollHideDelay]),t.jsx(I,{present:n||a,children:t.jsx(Te,{"data-state":a?"visible":"hidden",...s,ref:o})})}),ht=l.forwardRef((e,o)=>{const{forceMount:n,...s}=e,r=g(A,e.__scopeScrollArea),a=e.orientation==="horizontal",i=X(()=>d("SCROLL_END"),100),[c,d]=dt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return l.useEffect(()=>{if(c==="idle"){const f=window.setTimeout(()=>d("HIDE"),r.scrollHideDelay);return()=>window.clearTimeout(f)}},[c,r.scrollHideDelay,d]),l.useEffect(()=>{const f=r.viewport,u=a?"scrollLeft":"scrollTop";if(f){let h=f[u];const m=()=>{const b=f[u];h!==b&&(d("SCROLL"),i()),h=b};return f.addEventListener("scroll",m),()=>f.removeEventListener("scroll",m)}},[r.viewport,a,d,i]),t.jsx(I,{present:n||c!=="hidden",children:t.jsx(q,{"data-state":c==="hidden"?"hidden":"visible",...s,ref:o,onPointerEnter:S(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:S(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),Te=l.forwardRef((e,o)=>{const n=g(A,e.__scopeScrollArea),{forceMount:s,...r}=e,[a,i]=l.useState(!1),c=e.orientation==="horizontal",d=X(()=>{if(n.viewport){const f=n.viewport.offsetWidth<n.viewport.scrollWidth,u=n.viewport.offsetHeight<n.viewport.scrollHeight;i(c?f:u)}},10);return E(n.viewport,d),E(n.content,d),t.jsx(I,{present:s||a,children:t.jsx(q,{"data-state":a?"visible":"hidden",...r,ref:o})})}),q=l.forwardRef((e,o)=>{const{orientation:n="vertical",...s}=e,r=g(A,e.__scopeScrollArea),a=l.useRef(null),i=l.useRef(0),[c,d]=l.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),f=Re(c.viewport,c.content),u={...s,sizes:c,onSizesChange:d,hasThumb:f>0&&f<1,onThumbChange:m=>a.current=m,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:m=>i.current=m};function h(m,b){return gt(m,i.current,c,b)}return n==="horizontal"?t.jsx(mt,{...u,ref:o,onThumbPositionChange:()=>{if(r.viewport&&a.current){const m=r.viewport.scrollLeft,b=he(m,c,r.dir);a.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:m=>{r.viewport&&(r.viewport.scrollLeft=m)},onDragScroll:m=>{r.viewport&&(r.viewport.scrollLeft=h(m,r.dir))}}):n==="vertical"?t.jsx(pt,{...u,ref:o,onThumbPositionChange:()=>{if(r.viewport&&a.current){const m=r.viewport.scrollTop,b=he(m,c);a.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:m=>{r.viewport&&(r.viewport.scrollTop=m)},onDragScroll:m=>{r.viewport&&(r.viewport.scrollTop=h(m))}}):null}),mt=l.forwardRef((e,o)=>{const{sizes:n,onSizesChange:s,...r}=e,a=g(A,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),f=y(o,d,a.onScrollbarXChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),t.jsx(Ne,{"data-orientation":"horizontal",...r,ref:f,sizes:n,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,h)=>{if(a.viewport){const m=a.viewport.scrollLeft+u.deltaX;e.onWheelScroll(m),Le(m,h)&&u.preventDefault()}},onResize:()=>{d.current&&a.viewport&&i&&s({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:W(i.paddingLeft),paddingEnd:W(i.paddingRight)}})}})}),pt=l.forwardRef((e,o)=>{const{sizes:n,onSizesChange:s,...r}=e,a=g(A,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),f=y(o,d,a.onScrollbarYChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),t.jsx(Ne,{"data-orientation":"vertical",...r,ref:f,sizes:n,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,h)=>{if(a.viewport){const m=a.viewport.scrollTop+u.deltaY;e.onWheelScroll(m),Le(m,h)&&u.preventDefault()}},onResize:()=>{d.current&&a.viewport&&i&&s({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:W(i.paddingTop),paddingEnd:W(i.paddingBottom)}})}})}),[bt,Pe]=Se(A),Ne=l.forwardRef((e,o)=>{const{__scopeScrollArea:n,sizes:s,hasThumb:r,onThumbChange:a,onThumbPointerUp:i,onThumbPointerDown:c,onThumbPositionChange:d,onDragScroll:f,onWheelScroll:u,onResize:h,...m}=e,b=g(A,n),[p,v]=l.useState(null),_=y(o,x=>v(x)),C=l.useRef(null),M=l.useRef(""),F=b.viewport,z=s.content-s.viewport,B=T(u),R=T(d),O=X(h,10);function V(x){if(C.current){const w=x.clientX-C.current.left,P=x.clientY-C.current.top;f({x:w,y:P})}}return l.useEffect(()=>{const x=w=>{const P=w.target;(p==null?void 0:p.contains(P))&&B(w,z)};return document.addEventListener("wheel",x,{passive:!1}),()=>document.removeEventListener("wheel",x,{passive:!1})},[F,p,z,B]),l.useEffect(R,[s,R]),E(p,O),E(b.content,O),t.jsx(bt,{scope:n,scrollbar:p,hasThumb:r,onThumbChange:T(a),onThumbPointerUp:T(i),onThumbPositionChange:R,onThumbPointerDown:T(c),children:t.jsx(j.div,{...m,ref:_,style:{position:"absolute",...m.style},onPointerDown:S(e.onPointerDown,x=>{x.button===0&&(x.target.setPointerCapture(x.pointerId),C.current=p.getBoundingClientRect(),M.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),V(x))}),onPointerMove:S(e.onPointerMove,V),onPointerUp:S(e.onPointerUp,x=>{const w=x.target;w.hasPointerCapture(x.pointerId)&&w.releasePointerCapture(x.pointerId),document.body.style.webkitUserSelect=M.current,b.viewport&&(b.viewport.style.scrollBehavior=""),C.current=null})})})}),H="ScrollAreaThumb",Ee=l.forwardRef((e,o)=>{const{forceMount:n,...s}=e,r=Pe(H,e.__scopeScrollArea);return t.jsx(I,{present:n||r.hasThumb,children:t.jsx(vt,{ref:o,...s})})}),vt=l.forwardRef((e,o)=>{const{__scopeScrollArea:n,style:s,...r}=e,a=g(H,n),i=Pe(H,n),{onThumbPositionChange:c}=i,d=y(o,h=>i.onThumbChange(h)),f=l.useRef(void 0),u=X(()=>{f.current&&(f.current(),f.current=void 0)},100);return l.useEffect(()=>{const h=a.viewport;if(h){const m=()=>{if(u(),!f.current){const b=wt(h,c);f.current=b,c()}};return c(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[a.viewport,u,c]),t.jsx(j.div,{"data-state":i.hasThumb?"visible":"hidden",...r,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:S(e.onPointerDownCapture,h=>{const b=h.target.getBoundingClientRect(),p=h.clientX-b.left,v=h.clientY-b.top;i.onThumbPointerDown({x:p,y:v})}),onPointerUp:S(e.onPointerUp,i.onThumbPointerUp)})});Ee.displayName=H;var J="ScrollAreaCorner",ye=l.forwardRef((e,o)=>{const n=g(J,e.__scopeScrollArea),s=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&s?t.jsx(xt,{...e,ref:o}):null});ye.displayName=J;var xt=l.forwardRef((e,o)=>{const{__scopeScrollArea:n,...s}=e,r=g(J,n),[a,i]=l.useState(0),[c,d]=l.useState(0),f=!!(a&&c);return E(r.scrollbarX,()=>{var h;const u=((h=r.scrollbarX)==null?void 0:h.offsetHeight)||0;r.onCornerHeightChange(u),d(u)}),E(r.scrollbarY,()=>{var h;const u=((h=r.scrollbarY)==null?void 0:h.offsetWidth)||0;r.onCornerWidthChange(u),i(u)}),f?t.jsx(j.div,{...s,ref:o,style:{width:a,height:c,position:"absolute",right:r.dir==="ltr"?0:void 0,left:r.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function W(e){return e?parseInt(e,10):0}function Re(e,o){const n=e/o;return isNaN(n)?0:n}function Y(e){const o=Re(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,s=(e.scrollbar.size-n)*o;return Math.max(s,18)}function gt(e,o,n,s="ltr"){const r=Y(n),a=r/2,i=o||a,c=r-i,d=n.scrollbar.paddingStart+i,f=n.scrollbar.size-n.scrollbar.paddingEnd-c,u=n.content-n.viewport,h=s==="ltr"?[0,u]:[u*-1,0];return De([d,f],h)(e)}function he(e,o,n="ltr"){const s=Y(o),r=o.scrollbar.paddingStart+o.scrollbar.paddingEnd,a=o.scrollbar.size-r,i=o.content-o.viewport,c=a-s,d=n==="ltr"?[0,i]:[i*-1,0],f=ct(e,d);return De([0,i],[0,c])(f)}function De(e,o){return n=>{if(e[0]===e[1]||o[0]===o[1])return o[0];const s=(o[1]-o[0])/(e[1]-e[0]);return o[0]+s*(n-e[0])}}function Le(e,o){return e>0&&e<o}var wt=(e,o=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},s=0;return function r(){const a={left:e.scrollLeft,top:e.scrollTop},i=n.left!==a.left,c=n.top!==a.top;(i||c)&&o(),n=a,s=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(s)};function X(e,o){const n=T(e),s=l.useRef(0);return l.useEffect(()=>()=>window.clearTimeout(s.current),[]),l.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(n,o)},[n,o])}function E(e,o){const n=T(o);Ue(()=>{let s=0;if(e){const r=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(s),r.unobserve(e)}}},[e,n])}var Ie=Ae,St=Ce,At=ye;const D=l.forwardRef(({className:e,children:o,...n},s)=>t.jsxs(Ie,{ref:s,className:k("relative overflow-hidden",e),...n,children:[t.jsx(St,{className:"h-full w-full rounded-[inherit]",children:o}),t.jsx(N,{}),t.jsx(At,{})]}));D.displayName=Ie.displayName;const N=l.forwardRef(({className:e,orientation:o="vertical",...n},s)=>t.jsx(K,{ref:s,orientation:o,className:k("flex touch-none select-none transition-colors",o==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",o==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:t.jsx(Ee,{className:"relative flex-1 rounded-full bg-border"})}));N.displayName=K.displayName;const jt="data:image/png;base64,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",me=({totem:e})=>{const o=e.data??!1;return t.jsx(Q,{title:e.name??"Sem nome",titleBackground:!0,border:!0,className:"h-full w-40 relative",preIcon:t.jsx("img",{src:jt,alt:"wearable-icon",className:"w-8 h-8"}),clickable:!0,children:t.jsxs("div",{className:"flex flex-col w-full items-center px-2",children:[t.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[o?t.jsx(nt,{className:"w-8 h-8 text-positive"}):t.jsx(st,{className:"w-8 h-8 text-destructive"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-white",children:o?"Conectado":"Desconectado"}),e.timestamp&&t.jsxs("p",{className:"text-sm text-muted",children:["Ping: ",new Date(e.timestamp).toLocaleTimeString()]})]})]}),t.jsxs("div",{className:"flex items-center justify-between w-full px-2 gap-1 h-12 text-white absolute bottom-0",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(we,{size:18}),2]}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(ot,{}),t.jsx("p",{className:"text-white font-medium",children:"%"})]})]})]})})};var Z="Tabs",[Ct,Xt]=xe(Z,[ge]),ke=ge(),[Tt,$]=Ct(Z),Me=l.forwardRef((e,o)=>{const{__scopeTabs:n,value:s,onValueChange:r,defaultValue:a,orientation:i="horizontal",dir:c,activationMode:d="automatic",...f}=e,u=ve(c),[h,m]=Ge({prop:s,onChange:r,defaultProp:a});return t.jsx(Tt,{scope:n,baseId:Ke(),value:h,onValueChange:m,orientation:i,dir:u,activationMode:d,children:t.jsx(j.div,{dir:u,"data-orientation":i,...f,ref:o})})});Me.displayName=Z;var ze="TabsList",Be=l.forwardRef((e,o)=>{const{__scopeTabs:n,loop:s=!0,...r}=e,a=$(ze,n),i=ke(n);return t.jsx(qe,{asChild:!0,...i,orientation:a.orientation,dir:a.dir,loop:s,children:t.jsx(j.div,{role:"tablist","aria-orientation":a.orientation,...r,ref:o})})});Be.displayName=ze;var Oe="TabsTrigger",Ve=l.forwardRef((e,o)=>{const{__scopeTabs:n,value:s,disabled:r=!1,...a}=e,i=$(Oe,n),c=ke(n),d=Ye(i.baseId,s),f=Xe(i.baseId,s),u=s===i.value;return t.jsx(Je,{asChild:!0,...c,focusable:!r,active:u,children:t.jsx(j.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":f,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:d,...a,ref:o,onMouseDown:S(e.onMouseDown,h=>{!r&&h.button===0&&h.ctrlKey===!1?i.onValueChange(s):h.preventDefault()}),onKeyDown:S(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&i.onValueChange(s)}),onFocus:S(e.onFocus,()=>{const h=i.activationMode!=="manual";!u&&!r&&h&&i.onValueChange(s)})})})});Ve.displayName=Oe;var He="TabsContent",We=l.forwardRef((e,o)=>{const{__scopeTabs:n,value:s,forceMount:r,children:a,...i}=e,c=$(He,n),d=Ye(c.baseId,s),f=Xe(c.baseId,s),u=s===c.value,h=l.useRef(u);return l.useEffect(()=>{const m=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(m)},[]),t.jsx(I,{present:r||u,children:({present:m})=>t.jsx(j.div,{"data-state":u?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!m,id:f,tabIndex:0,...i,ref:o,style:{...e.style,animationDuration:h.current?"0s":void 0},children:m&&a})})});We.displayName=He;function Ye(e,o){return`${e}-trigger-${o}`}function Xe(e,o){return`${e}-content-${o}`}var Pt=Me,_e=Be,Fe=Ve,Qe=We;const pe=Pt,U=l.forwardRef(({className:e,...o},n)=>t.jsx(_e,{ref:n,className:k("inline-flex h-9 items-center justify-center rounded-md bg-black/20 p-1 text-muted-foreground",e),...o}));U.displayName=_e.displayName;const L=l.forwardRef(({className:e,...o},n)=>t.jsx(Fe,{ref:n,className:k("w-full h-7 inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-[#6A5AC4] data-[state=active]:font-bold data-[state=active]:shadow-sm",e),...o}));L.displayName=Fe.displayName;const Nt=l.forwardRef(({className:e,...o},n)=>t.jsx(Qe,{ref:n,className:k("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...o}));Nt.displayName=Qe.displayName;const Et=()=>{const e=l.useContext(Ze);if(!e)throw new Error("useTotem must be used within a TotemProvider");return e},yt=()=>{const[e,o]=l.useState(Notification.permission!=="granted");return Notification.permission==="granted"?null:Notification.permission==="denied"?t.jsx(se,{open:e,children:t.jsxs(le,{children:[t.jsxs(ae,{children:[t.jsx(ie,{children:"Atenção, você está desprotegido(a)"}),t.jsx(ce,{children:"Parece que você negou a permissão de notificações. Ative as notificações do aplicativo no seu dispositivo."})]}),t.jsx(de,{children:t.jsx(ue,{onClick:()=>o(!1),children:"Entendi, vou corrigir."})})]})}):t.jsx(se,{open:e,children:t.jsxs(le,{children:[t.jsxs(ae,{children:[t.jsx(ie,{children:"Atenção, você está desprotegido(a)"}),t.jsx(ce,{children:"Precisamos de permissão para enviar notificações."})]}),t.jsxs(de,{children:[t.jsx(at,{onClick:()=>o(!1),children:"Ignorar"}),t.jsx(ue,{onClick:()=>o(!1),children:"Já Permiti"})]})]})})},_t=()=>{const[e,o]=l.useState("personal"),[n,s]=l.useState("personal"),{user:r,loading:a,setUser:i}=$e(),c=et(),{wearables:d,totems:f}=Et(),u=l.useMemo(()=>d.filter(p=>p.owner!==(r==null?void 0:r.id)),[d,r]),h=l.useMemo(()=>d.filter(p=>p.owner===(r==null?void 0:r.id)),[d,r]),m=l.useMemo(()=>f.filter(p=>p.owner!==(r==null?void 0:r.id)),[f,r]),b=l.useMemo(()=>f.filter(p=>p.owner===(r==null?void 0:r.id)),[f,r]);return l.useEffect(()=>{(async()=>{if(r&&r.first_login)try{const v=await tt(r.id,{first_login:!1});if(v.error)throw new Error(v.error.message);console.log("return from edit",v.data[0]),console.log("user before set",r),i(v.data[0]),c("/first-login",{replace:!0})}catch(v){console.error(v),rt.error("Erro ao atualizar status de primeiro login")}})()},[r]),t.jsxs("div",{className:"relative w-full flex flex-col min-h-[38rem] h-[calc(100dvh-4.2rem)] md:h-[calc(100dvh-11rem)] md:-my-1 -my-6 text-white pt-3 sm:pt-5 md:pt-0",children:[t.jsx(yt,{}),t.jsx(oe,{className:"pb-2",title:"Pulseiras",titleAppend:t.jsxs("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium",children:[d.length,t.jsx(we,{className:"w-5 h-5"})]}),endElement:t.jsx(ee,{to:"/dashboard/add-device",children:t.jsxs(te,{variant:"secondary",size:"sm",children:["Registrar ",t.jsx(fe,{})]})})}),t.jsx(pe,{defaultValue:"personal",onValueChange:p=>{o(p==="personal"||p==="shared"?p:"personal")},value:e,className:"pb-2",children:t.jsxs(U,{className:"w-full flex justify-center",children:[t.jsx(L,{value:"personal",children:"Minhas"}),t.jsx(L,{value:"shared",children:"Compartilhados"})]})}),e==="personal"?t.jsxs(D,{scrollHideDelay:500,className:"h-full",children:[t.jsx("div",{className:"grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2",children:a?t.jsx(Q,{title:"Carregando...",children:t.jsxs("div",{className:"flex items-center p-4 gap-4",children:["Aguarde"," ",t.jsx(ne,{ariaLabel:"loading-spinner",strokeColor:"white",width:"24"})]})}):t.jsx(t.Fragment,{children:h.map((p,v)=>t.jsx(re,{wearable:p},`persona-wearable-${v}`))})}),t.jsx(N,{})]}):t.jsxs(D,{scrollHideDelay:500,className:"h-full",children:[t.jsx("div",{className:"grid gap-2 sm:gap-3 grid-cols-1 p-1 sm:grid-cols-1 md:grid-cols-2",children:a?t.jsx(Q,{title:"Carregando...",children:t.jsxs("div",{className:"flex items-center p-4 gap-4",children:["Aguarde"," ",t.jsx(ne,{ariaLabel:"loading-spinner",strokeColor:"white",width:"24"})]})}):t.jsx(t.Fragment,{children:u.map((p,v)=>t.jsx(re,{wearable:p},`wearableShared-${v}`))})}),t.jsx(N,{})]}),t.jsx(lt,{className:"my-3"}),t.jsxs("div",{className:"flex flex-col justify-between",children:[t.jsx(oe,{className:"pb-2",title:"Totems",titleAppend:t.jsxs("div",{className:"flex gap-2 border rounded-md px-2 items-center text-lg font-medium",children:[f.length,t.jsx(it,{className:"w-5 h-5"})]}),endElement:t.jsx(ee,{to:"/dashboard/add-device",children:t.jsxs(te,{variant:"secondary",size:"sm",children:["Registrar ",t.jsx(fe,{})]})})}),t.jsx(pe,{defaultValue:"personal",onValueChange:p=>{s(p==="personal"||p==="shared"?p:"personal")},value:n,className:"pb-2",children:t.jsxs(U,{className:"w-full flex justify-center",children:[t.jsx(L,{value:"personal",children:"Meus"}),t.jsx(L,{value:"shared",children:"Compartilhados"})]})}),n==="personal"?t.jsxs(D,{children:[t.jsx("div",{className:"h-40 sm:h-44 flex gap-2 sm:gap-3 p-1 pb-4",children:b.map((p,v)=>t.jsx("div",{className:"justify-center",children:t.jsx(me,{totem:p})},`totem-${v}`))}),t.jsx(N,{orientation:"horizontal"})]}):t.jsxs(D,{children:[t.jsx("div",{className:"h-40 sm:h-44 flex gap-2 sm:gap-3 p-1 pb-4",children:m.map((p,v)=>t.jsx("div",{className:"justify-center",children:t.jsx(me,{totem:p})},`totemShared-${v}`))}),t.jsx(N,{orientation:"horizontal"})]})]})]})};export{_t as default};
