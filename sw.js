if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const n=e=>i(e,r),c={module:{uri:r},exports:d,require:n};s[r]=Promise.all(l.map((e=>c[e]||n(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1206696b73a992078811a777ca70a515"},{url:"assets/doid-symbol-b4fb6f8f.js",revision:"fa2eb44c53990a988fac6c682e89b30e"},{url:"assets/doid-symbol-legacy.4d1e261f.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-2b2122a3.js",revision:"8fc8f402afee70b0d0dbbacf1b5b4475"},{url:"assets/index-3435d869.js",revision:"b263adcc5bdd14879cf7d8405b088683"},{url:"assets/index-3496180d.js",revision:"57128e9a52ebdbd39f0722df0dec74bb"},{url:"assets/index-4defa9dd.js",revision:"991de9f497f3e071034c1abc2fcb1f26"},{url:"assets/index-5b049b88.js",revision:"5d369fe9862f20c8987e98feb63c983c"},{url:"assets/index-7f48263d.js",revision:"1a0ab2b21d4d768e0fbe819d49fbedb3"},{url:"assets/index-a7e8af1a.js",revision:"e847bb055f3f8420c90eacf2073f3415"},{url:"assets/index-b2c0327c.js",revision:"cefbbf6b13e0874064f7c826a3deb3c1"},{url:"assets/index-eb55aa12.js",revision:"690115653028488193c6550deea9f9be"},{url:"assets/index-legacy.0ca4f216.js",revision:null},{url:"assets/index-legacy.3cd4d411.js",revision:null},{url:"assets/index-legacy.4168378a.js",revision:null},{url:"assets/index-legacy.44cf9ae6.js",revision:null},{url:"assets/index-legacy.58357abe.js",revision:null},{url:"assets/index-legacy.7f09341e.js",revision:null},{url:"assets/index-legacy.91e043c8.js",revision:null},{url:"assets/index-legacy.a6e8c661.js",revision:null},{url:"assets/index-legacy.e4944f85.js",revision:null},{url:"assets/index.umd-a7a63994.js",revision:"7f1022cf3f068fdb51e9d0dc3e1ed181"},{url:"assets/index.umd-legacy.d3b1294f.js",revision:null},{url:"assets/list-b84a1b8b.js",revision:"d5abe53176f14949881aa456e4e99288"},{url:"assets/list-legacy.f7dde0d4.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.9b0b1562.js",revision:null},{url:"assets/Resolver-4b5654b6.js",revision:"0e9bf4b92859b8d0677d198e147577dd"},{url:"assets/Resolver-legacy.716f46bb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-7fa7464a.js",revision:"8c23be1968acfcfd506e7573c4acc5b0"},{url:"assets/vendor-legacy.b9eb6b11.js",revision:null},{url:"index.html",revision:"1206696b73a992078811a777ca70a515"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"acb17672abf0138b9efef4cdb4607236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
