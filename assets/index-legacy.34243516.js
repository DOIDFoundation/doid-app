System.register(["./index-legacy.708ddd80.js","./btn-legacy.be51a7b5.js","./index-legacy.4a555685.js","./doid-symbol-legacy.0a3494ca.js","./vendor-legacy.8b44c966.js"],(function(e,t){"use strict";var r,s,i,a,n,o,d;return{setters:[e=>{r=e.T},e=>{s=e.g},e=>{i=e.g},null,e=>{a=e.y,n=e.j,o=e.t,d=e.e}],execute:function(){var t=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(e,r,s,i)=>{for(var a,n=i>1?void 0:i?v(r,s):r,o=e.length-1;o>=0;o--)(a=e[o])&&(n=(i?a(r,s,n):a(n))||n);return i&&n&&t(r,s,n),n};let l=class extends(r("")){constructor(){super(...arguments),this.favorites=s()}get(){this.favorites=s()}render(){return this.favorites.length?a`${n(this.favorites,(e=>a`<div @click="${()=>i(`/name/${e.name}`)}" class="flex justify-between items-center gap-4 border my-2 p-3 shadow-sm cursor-pointer hover_bg-gray-100 rounded-md"><b>${e.name}</b><div class="flex gap-4 items-center"><span class="text-green-500">Available</span><doid-favorites-btn .name="${e.name}" @change="${this.get}"></doid-favorites-btn></div></div>`))}`:a`<div class="text-center"><b><i class="mdi mdi-heart-outline text-2xl text-gray-200"></i></b><p class="text-base">No names have been saved</p><p>To add names to favourites, click the heart icon next to any desired name.</p></div>`}};c([o()],l.prototype,"favorites",2),l=c([d("doid-favorites")],l);var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor;let p=e("ViewFavorites",class extends(r("")){render(){return a`<div class="view-favorites"><div class="dui-container px-3 my-8"><doid-favorites></doid-favorites></div></div>`}});e("ViewFavorites",p=((e,t,r,s)=>{for(var i,a=s>1?void 0:s?g(t,r):t,n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&f(t,r,a),a})([d("view-favorites")],p))}}}));
