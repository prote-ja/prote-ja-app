import{c as Re,a as P,r as i,b as h,j as t,P as A,f as v,e as j,S as _e,U as Ee,V as be,W as Oe,X as Pe,Y as we,Z as Te,$ as Ie,l as Se,m as C,a0 as Me,i as p,a1 as w,q as $e,T as Fe,M as ke,O as Le,Q as We,B as O,C as ze}from"./index-BRmxdem8.js";import{I as Ge}from"./input-DXMXB5md.js";import{$ as Ve}from"./module-CA0SzDSm.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=Re("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var R="Dialog",[T,I]=P(R),[qe,f]=T(R),S=e=>{const{__scopeDialog:a,children:o,open:r,defaultOpen:s,onOpenChange:n,modal:l=!0}=e,c=i.useRef(null),u=i.useRef(null),[d=!1,g]=Se({prop:r,defaultProp:s,onChange:n});return t.jsx(qe,{scope:a,triggerRef:c,contentRef:u,contentId:C(),titleId:C(),descriptionId:C(),open:d,onOpenChange:g,onOpenToggle:i.useCallback(()=>g(y=>!y),[g]),modal:l,children:o})};S.displayName=R;var M="DialogTrigger",$=i.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,s=f(M,o),n=h(a,s.triggerRef);return t.jsx(A.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":b(s.open),...r,ref:n,onClick:v(e.onClick,s.onOpenToggle)})});$.displayName=M;var _="DialogPortal",[He,F]=T(_,{forceMount:void 0}),k=e=>{const{__scopeDialog:a,forceMount:o,children:r,container:s}=e,n=f(_,a);return t.jsx(He,{scope:a,forceMount:o,children:i.Children.map(r,l=>t.jsx(j,{present:o||n.open,children:t.jsx(Ie,{asChild:!0,container:s,children:l})}))})};k.displayName=_;var N="DialogOverlay",L=i.forwardRef((e,a)=>{const o=F(N,e.__scopeDialog),{forceMount:r=o.forceMount,...s}=e,n=f(N,e.__scopeDialog);return n.modal?t.jsx(j,{present:r||n.open,children:t.jsx(Ye,{...s,ref:a})}):null});L.displayName=N;var Ye=i.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,s=f(N,o);return t.jsx(_e,{as:Ee,allowPinchZoom:!0,shards:[s.contentRef],children:t.jsx(A.div,{"data-state":b(s.open),...r,ref:a,style:{pointerEvents:"auto",...r.style}})})}),x="DialogContent",W=i.forwardRef((e,a)=>{const o=F(x,e.__scopeDialog),{forceMount:r=o.forceMount,...s}=e,n=f(x,e.__scopeDialog);return t.jsx(j,{present:r||n.open,children:n.modal?t.jsx(Ue,{...s,ref:a}):t.jsx(Ze,{...s,ref:a})})});W.displayName=x;var Ue=i.forwardRef((e,a)=>{const o=f(x,e.__scopeDialog),r=i.useRef(null),s=h(a,o.contentRef,r);return i.useEffect(()=>{const n=r.current;if(n)return be(n)},[]),t.jsx(z,{...e,ref:s,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,n=>{var l;n.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,n=>{const l=n.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&n.preventDefault()}),onFocusOutside:v(e.onFocusOutside,n=>n.preventDefault())})}),Ze=i.forwardRef((e,a)=>{const o=f(x,e.__scopeDialog),r=i.useRef(!1),s=i.useRef(!1);return t.jsx(z,{...e,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,n),n.defaultPrevented||(r.current||(c=o.triggerRef.current)==null||c.focus(),n.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:n=>{var u,d;(u=e.onInteractOutside)==null||u.call(e,n),n.defaultPrevented||(r.current=!0,n.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const l=n.target;((d=o.triggerRef.current)==null?void 0:d.contains(l))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&s.current&&n.preventDefault()}})}),z=i.forwardRef((e,a)=>{const{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:n,...l}=e,c=f(x,o),u=i.useRef(null),d=h(a,u);return Oe(),t.jsxs(t.Fragment,{children:[t.jsx(Pe,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:n,children:t.jsx(we,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":b(c.open),...l,ref:d,onDismiss:()=>c.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Qe,{titleId:c.titleId}),t.jsx(Je,{contentRef:u,descriptionId:c.descriptionId})]})]})}),E="DialogTitle",G=i.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,s=f(E,o);return t.jsx(A.h2,{id:s.titleId,...r,ref:a})});G.displayName=E;var V="DialogDescription",B=i.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,s=f(V,o);return t.jsx(A.p,{id:s.descriptionId,...r,ref:a})});B.displayName=V;var q="DialogClose",H=i.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,s=f(q,o);return t.jsx(A.button,{type:"button",...r,ref:a,onClick:v(e.onClick,()=>s.onOpenChange(!1))})});H.displayName=q;function b(e){return e?"open":"closed"}var Y="DialogTitleWarning",[Ke,U]=Te(Y,{contentName:x,titleName:E,docsSlug:"dialog"}),Qe=({titleId:e})=>{const a=U(Y),o=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(o))},[o,e]),null},Xe="DialogDescriptionWarning",Je=({contentRef:e,descriptionId:a})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${U(Xe).contentName}}.`;return i.useEffect(()=>{var n;const s=(n=e.current)==null?void 0:n.getAttribute("aria-describedby");a&&s&&(document.getElementById(a)||console.warn(r))},[r,e,a]),null},et=S,tt=$,at=k,ot=L,rt=W,st=G,nt=B,Z=H,K="AlertDialog",[it,jt]=P(K,[I]),m=I(),Q=e=>{const{__scopeAlertDialog:a,...o}=e,r=m(a);return t.jsx(et,{...r,...o,modal:!0})};Q.displayName=K;var lt="AlertDialogTrigger",ct=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,s=m(o);return t.jsx(tt,{...s,...r,ref:a})});ct.displayName=lt;var dt="AlertDialogPortal",X=e=>{const{__scopeAlertDialog:a,...o}=e,r=m(a);return t.jsx(at,{...r,...o})};X.displayName=dt;var ut="AlertDialogOverlay",J=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,s=m(o);return t.jsx(ot,{...s,...r,ref:a})});J.displayName=ut;var D="AlertDialogContent",[ft,gt]=it(D),ee=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,children:r,...s}=e,n=m(o),l=i.useRef(null),c=h(a,l),u=i.useRef(null);return t.jsx(Ke,{contentName:D,titleName:te,docsSlug:"alert-dialog",children:t.jsx(ft,{scope:o,cancelRef:u,children:t.jsxs(rt,{role:"alertdialog",...n,...s,ref:c,onOpenAutoFocus:v(s.onOpenAutoFocus,d=>{var g;d.preventDefault(),(g=u.current)==null||g.focus({preventScroll:!0})}),onPointerDownOutside:d=>d.preventDefault(),onInteractOutside:d=>d.preventDefault(),children:[t.jsx(Me,{children:r}),t.jsx(mt,{contentRef:l})]})})})});ee.displayName=D;var te="AlertDialogTitle",ae=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,s=m(o);return t.jsx(st,{...s,...r,ref:a})});ae.displayName=te;var oe="AlertDialogDescription",re=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,s=m(o);return t.jsx(nt,{...s,...r,ref:a})});re.displayName=oe;var pt="AlertDialogAction",se=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,s=m(o);return t.jsx(Z,{...s,...r,ref:a})});se.displayName=pt;var ne="AlertDialogCancel",ie=i.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...r}=e,{cancelRef:s}=gt(ne,o),n=m(o),l=h(a,s);return t.jsx(Z,{...n,...r,ref:l})});ie.displayName=ne;var mt=({contentRef:e})=>{const a=`\`${D}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${D}\` by passing a \`${oe}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${D}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{var r;document.getElementById((r=e.current)==null?void 0:r.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},xt=Q,vt=X,le=J,ce=ee,de=se,ue=ie,fe=ae,ge=re;const Dt=xt,ht=vt,pe=i.forwardRef(({className:e,...a},o)=>t.jsx(le,{className:p("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:o}));pe.displayName=le.displayName;const me=i.forwardRef(({className:e,...a},o)=>t.jsxs(ht,{children:[t.jsx(pe,{}),t.jsx(ce,{ref:o,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));me.displayName=ce.displayName;const xe=({className:e,...a})=>t.jsx("div",{className:p("flex flex-col space-y-2 text-center sm:text-left",e),...a});xe.displayName="AlertDialogHeader";const ve=({className:e,...a})=>t.jsx("div",{className:p("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});ve.displayName="AlertDialogFooter";const De=i.forwardRef(({className:e,...a},o)=>t.jsx(fe,{ref:o,className:p("text-lg font-semibold text-primary",e),...a}));De.displayName=fe.displayName;const he=i.forwardRef(({className:e,...a},o)=>t.jsx(ge,{ref:o,className:p("text-sm text-gray-600",e),...a}));he.displayName=ge.displayName;const Ae=i.forwardRef(({className:e,...a},o)=>t.jsx(de,{ref:o,className:p(w(),e),...a}));Ae.displayName=de.displayName;const Ne=i.forwardRef(({className:e,...a},o)=>t.jsx(ue,{ref:o,className:p(w({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));Ne.displayName=ue.displayName;const At=({onClose:e,confirm:a,zIndex:o=10})=>{const[r,s]=i.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed top-0 left-0 bg-black/50 w-full h-full fade-in transition-all duration-200",style:{zIndex:o},onClick:()=>{a?(console.log("confirm"),s(!0)):e()}}),t.jsx(Dt,{onOpenChange:s,open:r,children:t.jsxs(me,{children:[t.jsxs(xe,{children:[t.jsx(De,{children:"Tem certeza que deseja fechar?"}),t.jsx(he,{children:"Suas alterações serão perdidas."})]}),t.jsxs(ve,{children:[t.jsx(Ne,{onClick:n=>{n.preventDefault(),s(!1)},children:"Cancelar"}),t.jsx(Ae,{onClick:n=>{n.preventDefault(),e(),s(!1)},children:"Continuar"})]})]})})]})},Rt=({onEdit:e,name:a,value:o,tooltip:r,children:s})=>{const[n,l]=i.useState(!1),[c,u]=i.useState(o??""),[d,g]=i.useState(!1),y=()=>{l(!0)},ye=()=>{e?(g(!0),e(c).finally(()=>{l(!1),g(!1)})):l(!1)},Ce=()=>{l(!1),u(o??"")};return t.jsxs(t.Fragment,{children:[n&&t.jsx(At,{onClose:Ce,open:n,confirm:o!==c}),t.jsx($e,{border:!0,className:"relative",children:t.jsxs("div",{className:"flex justify-between items-center text-white py-2 px-3 ",children:[t.jsx("div",{className:"text-lg font-medium",children:r?t.jsxs(Fe,{children:[t.jsx(ke,{disabled:!0,children:a}),t.jsxs(Le,{className:"max-w-[200px]",children:[r,t.jsx(We,{className:"stroke-white fill-white"})]})]}):t.jsx(t.Fragment,{children:a})}),t.jsxs("div",{className:p("text-lg flex items-center",n?"rounded-md gap-2 z-[20]":"gap-4"),children:[n?t.jsx(Ge,{value:c,onChange:je=>u(je.target.value)}):t.jsxs(t.Fragment,{children:[o,s]}),e&&(n?t.jsx(O,{onClick:ye,className:"[&_svg]:size-5 aspect-square",size:"icon",variant:"positive",disabled:d,children:d?t.jsx(Ve,{strokeColor:"white"}):t.jsx(ze,{})}):t.jsx(O,{onClick:y,className:"[&_svg]:size-5",size:"icon",variant:"secondary",children:t.jsx(Be,{})}))]})]})})]})};export{Rt as I,Be as S};
