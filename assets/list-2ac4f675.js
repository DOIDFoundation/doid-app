import{T as v,g as O}from"./index-e5cedc02.js";import{y as r,j as $,k as P,m as d,e as h,n as u,u as I}from"./vendor-7fa7464a.js";const b="doid.favors",m=()=>JSON.parse(localStorage.getItem(b)||"[]"),y=t=>localStorage.setItem(b,JSON.stringify(t)),D=t=>{const s=_(t,!0),i=typeof t=="string"?{name:t}:t;if(!s){const a=m();a.push(i),y(a)}},_=(t,s=!1)=>{const i=m(),a=i.some((e,n)=>{const o=e.name===t;return s&&o&&i.splice(n,1),o});return s&&a&&y(i),a},w=`.favored{color:#f9167f}
`;var j=Object.defineProperty,N=Object.getOwnPropertyDescriptor,g=(t,s,i,a)=>{for(var e=a>1?void 0:a?N(s,i):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(a?o(s,i,e):o(e))||e);return a&&e&&j(s,i,e),e};let f=class extends v(w){constructor(){super(...arguments),this.name="",this.favorites=m(),this.favor=t=>{t.stopImmediatePropagation(),D(this.name),this.favorites=m(),this.emit("change")}}get favored(){return _(this.name)}render(){return this.name?r`<dui-button icon sm part="dui-button" @click="${this.favor}"><i class="mdi ${$(this.$c([this.favored?"mdi-heart":"mdi-heart-outline",{favored:this.favored}]))}"></i></dui-button>`:""}};g([d()],f.prototype,"name",2);g([P()],f.prototype,"favorites",2);f=g([h("doid-favorites-btn")],f);const C="";var S=Object.defineProperty,F=Object.getOwnPropertyDescriptor,x=(t,s,i,a)=>{for(var e=a>1?void 0:a?F(s,i):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(a?o(s,i,e):o(e))||e);return a&&e&&S(s,i,e),e};let p=class extends v(C){goto(){const{name:t,available:s}=this.nameInfo;O(`/name/${t}/${s?"register":"details"}`)}change(){this.emit("change")}render(){return r`<div class="doid-name-item"><div @click="${this.goto}" class="flex justify-between items-center gap-4 border p-3 shadow-sm cursor-pointer bg-gray-50 hover_bg-gray-100 rounded-md"><b>${this.nameInfo.name}</b><div class="flex gap-4 items-center"><span class="${$(this.$c([this.nameInfo.available?"text-green-500":this.nameInfo.registered?"opacity-75":"text-red-500"]))}">${this.nameInfo.stat}</span><doid-favorites-btn @change="${this.change}" .name="${this.nameInfo.name}"></doid-favorites-btn></div></div></div>`}};x([d()],p.prototype,"nameInfo",2);p=x([h("doid-name-item")],p);const J="";var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,l=(t,s,i,a)=>{for(var e=a>1?void 0:a?B(s,i):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(a?o(s,i,e):o(e))||e);return a&&e&&T(s,i,e),e};let c=class extends v(J){constructor(){super(...arguments),this.names=[],this.pending=!1,this.empty=!1}change(){this.emit("change")}connectedCallback(){super.connectedCallback()}render(){return r`<div class="doid-name-list">${u(this.pending,()=>r`<i class="mdi mdi-loading"></i> Searching...`)} ${u(this.empty,()=>r`<p class="px-3">No Data</p>`)}<div class="flex flex-col gap-2">${I(this.names,t=>r`<doid-name-item @change="${this.change}" .nameInfo="${t}"></doid-name-item>`)}</div></div>`}};l([d()],c.prototype,"names",2);l([d()],c.prototype,"pending",2);l([d()],c.prototype,"empty",2);c=l([h("doid-name-list")],c);export{m as g};
