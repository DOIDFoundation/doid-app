import{T as l,g as d}from"./index-e5cedc02.js";import"./doid-symbol-c3d52cb9.js";import{y as c,e as p}from"./vendor-7fa7464a.js";const m="";var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,u=(e,a,o,r)=>{for(var s=r>1?void 0:r?v(a,o):a,t=e.length-1,n;t>=0;t--)(n=e[t])&&(s=(r?n(a,o,s):n(s))||s);return r&&s&&h(a,o,s),s};let i=class extends l(m){constructor(){super(...arguments),this.goto=e=>{d(`/search/${e.detail}`)}}render(){return c`<div class="home"><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search names or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search></div></div></div>`}};i=u([p("view-home")],i);export{i as ViewHome};
