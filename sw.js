if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/alert-_yjTVxaW.js",revision:null},{url:"assets/alert-dialog-t7bV8T9s.js",revision:null},{url:"assets/AlertComponent-CFEAOD0a.js",revision:null},{url:"assets/AlertPage-BQ540sdx.js",revision:null},{url:"assets/Backdrop-BzWpEoOd.js",revision:null},{url:"assets/battery-full-De6KPDy9.js",revision:null},{url:"assets/browser-gArEEPw8.js",revision:null},{url:"assets/BuyPremium-DaMsQzC3.js",revision:null},{url:"assets/card-NKAo2gOV.js",revision:null},{url:"assets/clock-BgHAIC1G.js",revision:null},{url:"assets/Dashboard-CJ-KzOvo.css",revision:null},{url:"assets/Dashboard-DtPua4Jn.js",revision:null},{url:"assets/DeviceAdd-Cf20ThVa.js",revision:null},{url:"assets/DeviceFallDetected-OTyYDce3.js",revision:null},{url:"assets/DeviceOutOfRange-DIFAW1Tz.js",revision:null},{url:"assets/ElementTitleHeader-V0p94xgy.js",revision:null},{url:"assets/eye-Blzg0U6D.js",revision:null},{url:"assets/FieldContainerInput-DMfArYXo.js",revision:null},{url:"assets/FirstLogin-3iKq7z70.js",revision:null},{url:"assets/FirstLogin-Bsjj9snX.css",revision:null},{url:"assets/footprints-BobOJVTF.js",revision:null},{url:"assets/formatIncompletePhoneNumber-jKePwQXa.js",revision:null},{url:"assets/generateCategoricalChart-BjNX2lqn.js",revision:null},{url:"assets/Home-CAX3pfaH.js",revision:null},{url:"assets/HorizontalDivider-jrS7tDVf.js",revision:null},{url:"assets/index-7K9kjJY2.css",revision:null},{url:"assets/index-CB0EDHIT.js",revision:null},{url:"assets/index-D1nAdeZa.js",revision:null},{url:"assets/index-uSevEnuR.js",revision:null},{url:"assets/index-wZBUt5wN.js",revision:null},{url:"assets/index-yVTYpdoT.js",revision:null},{url:"assets/input-DFqmw2NU.js",revision:null},{url:"assets/Login-CnFpE2K1.js",revision:null},{url:"assets/module-BlgaK8wG.js",revision:null},{url:"assets/PasswordInput-BM3NYQmm.js",revision:null},{url:"assets/pencil-B4QKVji6.js",revision:null},{url:"assets/Profile-DMp2s1-0.js",revision:null},{url:"assets/pt-BR.json-Bqz2tW3U.js",revision:null},{url:"assets/react-C7sMpjI8.js",revision:null},{url:"assets/react-dom-ThsgQk-A.js",revision:null},{url:"assets/Register-Bq-znq40.js",revision:null},{url:"assets/settings-C4pXbsdI.js",revision:null},{url:"assets/share-2-Bl4qzHTF.js",revision:null},{url:"assets/SharedDeviceUsersList-DJUNcNkl.js",revision:null},{url:"assets/storage-CTEB2x24.js",revision:null},{url:"assets/Totems-9Ge3eHpz.js",revision:null},{url:"assets/TotemsEdit-DFNvzdKD.js",revision:null},{url:"assets/TotemsPairing-C2DDaTp4.js",revision:null},{url:"assets/TotemsView-BKJgR65Z.js",revision:null},{url:"assets/triangle-alert-qcmMMu7z.js",revision:null},{url:"assets/useDevices-DiR-4rP8.js",revision:null},{url:"assets/useWearable-D91cmmZS.js",revision:null},{url:"assets/WearableAvatar-B_wam0jm.js",revision:null},{url:"assets/WearableConnectionComponent-Ch6X4RzM.js",revision:null},{url:"assets/WearableRefreshRate-t8Iw_yqe.js",revision:null},{url:"assets/Wearables-hBs8LIHl.js",revision:null},{url:"assets/WearablesEdit-NeewmV38.js",revision:null},{url:"assets/WearablesView-BqD44ACx.js",revision:null},{url:"assets/wifi-4NXg21KJ.js",revision:null},{url:"assets/wifi-off-Gegr2pef.js",revision:null},{url:"firebase-messaging-sw.js",revision:"8cf40c9753e9ca32004a6e9b82c85c7c"},{url:"index.html",revision:"71bc442defa4d47170d711bb8cd6e90d"},{url:"registerSW.js",revision:"ee772ce40b8e7d8a109736bbdcda83d6"},{url:"favicon.ico",revision:"e37e20df4000ad117af2d3740c7a1bc8"},{url:"favicon.svg",revision:"de5c6fc52c1fcd11f0b6c4ac0d640b25"},{url:"icon192_maskable.png",revision:"1f7457d119f3beb7746d803cb408a4d1"},{url:"icon512_maskable.png",revision:"06f605b633229dfc3742330fa6fde1fd"},{url:"icon512_rounded.png",revision:"70349d2f372b2a6cfcd2b82d8adee488"},{url:"mask-icon.svg",revision:"de5c6fc52c1fcd11f0b6c4ac0d640b25"},{url:"manifest.webmanifest",revision:"baa671db81e3cc0bfb2fbffdcb8415b7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
