if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>i(s,l),t={module:{uri:l},exports:o,require:u};e[l]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/auth-CNDI26PT.js",revision:null},{url:"assets/browser-CNvEG-NZ.js",revision:null},{url:"assets/Dashboard-DpYSbhkJ.js",revision:null},{url:"assets/ElementTitleHeader-BM2eEuw4.js",revision:null},{url:"assets/FirstLogin-B-aDP71e.css",revision:null},{url:"assets/FirstLogin-DnQUeRDe.js",revision:null},{url:"assets/formatIncompletePhoneNumber-jKePwQXa.js",revision:null},{url:"assets/helpers-CMUWlmN2.js",revision:null},{url:"assets/Home-C_KHU_eW.js",revision:null},{url:"assets/index-B8egt-Fs.css",revision:null},{url:"assets/index-Bn0Fc-Xa.js",revision:null},{url:"assets/index-DjyQBUlH.js",revision:null},{url:"assets/index-DNypWd75.js",revision:null},{url:"assets/index-uSevEnuR.js",revision:null},{url:"assets/Login-CZ7n1JKX.js",revision:null},{url:"assets/NotAuthorized-BRg-_2-K.js",revision:null},{url:"assets/Pairing-DTuAtc-m.js",revision:null},{url:"assets/Profile-D9x3lEBu.js",revision:null},{url:"assets/react-dom-DOp_neaj.js",revision:null},{url:"assets/react-DxTR-FPg.js",revision:null},{url:"assets/Register-BRotzSCE.js",revision:null},{url:"index.html",revision:"57b1f6017675ed36f9eecc6c2acf5779"},{url:"registerSW.js",revision:"ee772ce40b8e7d8a109736bbdcda83d6"},{url:"favicon.ico",revision:"e37e20df4000ad117af2d3740c7a1bc8"},{url:"favicon.svg",revision:"6f45f06f28db28ef0228a1f0935f9921"},{url:"icon192_maskable.png",revision:"1f7457d119f3beb7746d803cb408a4d1"},{url:"icon512_maskable.png",revision:"06f605b633229dfc3742330fa6fde1fd"},{url:"icon512_rounded.png",revision:"70349d2f372b2a6cfcd2b82d8adee488"},{url:"mask-icon.svg",revision:"6f45f06f28db28ef0228a1f0935f9921"},{url:"manifest.webmanifest",revision:"09c2383e77b3cb3253a3319bc031cea4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
