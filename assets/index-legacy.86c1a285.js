System.register(["./index-legacy.708ddd80.js","./doid-symbol-legacy.0a3494ca.js","./vendor-legacy.8b44c966.js"],(function(e,s){"use strict";var r,t,a,o;return{setters:[e=>{r=e.T,t=e.e},null,e=>{a=e.y,o=e.e}],execute:function(){var s=Object.defineProperty,n=Object.getOwnPropertyDescriptor;let i=e("ViewHome",class extends(r("")){constructor(){super(...arguments),this.goto=e=>{t.emit("router-goto",`/search/${e.detail}`)}}render(){return a`<div class="home"><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search name or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search></div></div></div>`}});e("ViewHome",i=((e,r,t,a)=>{for(var o,i=a>1?void 0:a?n(r,t):r,d=e.length-1;d>=0;d--)(o=e[d])&&(i=(a?o(r,t,i):o(i))||i);return a&&i&&s(r,t,i),i})([o("view-home")],i))}}}));
