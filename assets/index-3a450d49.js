import{T as c}from"./index-2e37d9cf.js";import{g as d}from"./btn-b0b87068.js";import{g as m}from"./doid-symbol-31dc89e3.js";import{y as n,j as b,t as u,e as f}from"./vendor-f2fce57d.js";const g="";var h=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(o,t,r,s)=>{for(var e=s>1?void 0:s?x(t,r):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(s?a(t,r,e):a(e))||e);return s&&e&&h(t,r,e),e};let v=class extends c(g){constructor(){super(...arguments),this.favorites=d()}get(){this.favorites=d()}render(){return this.favorites.length?n`${b(this.favorites,t=>n`<div @click="${()=>m(`/name/${t.name}`)}" class="flex justify-between items-center gap-4 border my-2 p-3 shadow-sm cursor-pointer hover_bg-gray-100 rounded-md"><b>${t.name}</b><div class="flex gap-4 items-center"><span class="text-green-500">Available</span><doid-favorites-btn .name="${t.name}" @change="${this.get}"></doid-favorites-btn></div></div>`)}`:n`<div class="text-center"><b><i class="mdi mdi-heart-outline text-2xl text-gray-200"></i></b><p class="text-base">No names have been saved</p><p>To add names to favourites, click the heart icon next to any desired name.</p></div>`}};p([u()],v.prototype,"favorites",2);v=p([f("doid-favorites")],v);const _="";var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,y=(o,t,r,s)=>{for(var e=s>1?void 0:s?$(t,r):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(s?a(t,r,e):a(e))||e);return s&&e&&w(t,r,e),e};let l=class extends c(_){render(){return n`<div class="view-favorites"><div class="dui-container px-3 my-8"><doid-favorites></doid-favorites></div></div>`}};l=y([f("view-favorites")],l);export{l as ViewFavorites};
