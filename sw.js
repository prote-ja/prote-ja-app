if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddTotem-DY82kgLH.js",revision:null},{url:"assets/AddWearable-BnCe1y82.js",revision:null},{url:"assets/AlertComponent-CeuT7Jlm.js",revision:null},{url:"assets/AlertPage-Bh8JVJCb.js",revision:null},{url:"assets/browser-nFtbaKDj.js",revision:null},{url:"assets/card-BuVIwVaF.js",revision:null},{url:"assets/Dashboard-DOHHgt8X.js",revision:null},{url:"assets/EditWearable-D6co1JqC.js",revision:null},{url:"assets/ElementTitleHeader-CFm00Pzg.js",revision:null},{url:"assets/FallDetected-DQ-sEpD7.js",revision:null},{url:"assets/FirstLogin-Bsjj9snX.css",revision:null},{url:"assets/FirstLogin-JdMLw9JX.js",revision:null},{url:"assets/formatIncompletePhoneNumber-BA43GEh4.js",revision:null},{url:"assets/HardwarePassword-DcNYQR--.js",revision:null},{url:"assets/Home-DUgKLi9m.js",revision:null},{url:"assets/HorizontalDivider-aGF1irBr.js",revision:null},{url:"assets/index-BewlmIDh.js",revision:null},{url:"assets/index-BK2Vf_L8.js",revision:null},{url:"assets/index-D6r3sWpr.js",revision:null},{url:"assets/index-Dj4q9_lz.js",revision:null},{url:"assets/index-DkU7GfEn.js",revision:null},{url:"assets/index-TM_4dsJM.css",revision:null},{url:"assets/InformationContainer-vx0bCVWv.js",revision:null},{url:"assets/input-eV06ez5G.js",revision:null},{url:"assets/link-CF46fojA.js",revision:null},{url:"assets/Login-D98FjSGb.js",revision:null},{url:"assets/module-a2Q7emSC.js",revision:null},{url:"assets/NotAuthorized-DjEYx3tO.js",revision:null},{url:"assets/OutOfRange-hTQEd0vU.js",revision:null},{url:"assets/Pairing-DOUpdfkh.js",revision:null},{url:"assets/PasswordInput-BM7qx_sE.js",revision:null},{url:"assets/phone-call-CXa_dh-T.js",revision:null},{url:"assets/Profile-IYWWPbYO.js",revision:null},{url:"assets/pt-BR.json-Bqz2tW3U.js",revision:null},{url:"assets/react-DDCWQfk_.js",revision:null},{url:"assets/react-dom-DxV6jaKz.js",revision:null},{url:"assets/Register-NN8PiBmV.js",revision:null},{url:"assets/satellite-dish-B-dbuvNT.js",revision:null},{url:"assets/totem_300-eE_nJRI7.js",revision:null},{url:"assets/TotemConnectionComponent-C8PS0C2g.js",revision:null},{url:"assets/triangle-alert-xwfc4MM3.js",revision:null},{url:"assets/wearables-CxnwdmVF.js",revision:null},{url:"assets/WearableUser-BqNnieSI.js",revision:null},{url:"assets/wristband_300-D3ygo3tb.js",revision:null},{url:"index.html",revision:"0d06b610a0c0829ffc06bbce0a9fa3f4"},{url:"registerSW.js",revision:"ee772ce40b8e7d8a109736bbdcda83d6"},{url:"favicon.ico",revision:"e37e20df4000ad117af2d3740c7a1bc8"},{url:"favicon.svg",revision:"6f45f06f28db28ef0228a1f0935f9921"},{url:"icon192_maskable.png",revision:"1f7457d119f3beb7746d803cb408a4d1"},{url:"icon512_maskable.png",revision:"06f605b633229dfc3742330fa6fde1fd"},{url:"icon512_rounded.png",revision:"70349d2f372b2a6cfcd2b82d8adee488"},{url:"mask-icon.svg",revision:"6f45f06f28db28ef0228a1f0935f9921"},{url:"manifest.webmanifest",revision:"09c2383e77b3cb3253a3319bc031cea4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
