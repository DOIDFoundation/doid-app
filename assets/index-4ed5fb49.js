import{T as h,g as f}from"./index-f8e31e8e.js";import{g as v}from"./list-65b36841.js";import{n as g}from"./doid-symbol-23db9cd0.js";import{y as d,k as l,e as m}from"./vendor-7fa7464a.js";const u="";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(i,t,a,s)=>{for(var e=s>1?void 0:s?b(t,a):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(e=(s?n(t,a,e):n(e))||e);return s&&e&&y(t,a,e),e};let o=class extends h(u){constructor(){super(...arguments),this.favorites=v(),this.names=[],this.pending=!1,this.ts=0,this.get=async()=>{this.pending=!0,this.favorites=v(),this.names=await g(this.favorites.map(t=>t.name)),this.pending=!1,this.ts++}}get empty(){return!this.pending&&!this.names.length}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.favorites.length?d`<doid-name-list @change="${this.get}" .names="${this.names}" .pending="${!this.ts&&this.pending}" .empty="${this.empty}"></doid-name-list>`:d`<div class="text-center my-4"><b class="block my-4"><i class="mdi mdi-heart-outline text-2xl text-gray-200"></i></b><p class="text-base">No names have been favorited</p><p>To add names to favorites, click the heart icon next to any desired name.</p></div>`}};p([l()],o.prototype,"favorites",2);p([l()],o.prototype,"names",2);p([l()],o.prototype,"pending",2);p([l()],o.prototype,"ts",2);o=p([m("doid-favorites")],o);const _="";var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,x=(i,t,a,s)=>{for(var e=s>1?void 0:s?$(t,a):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(e=(s?n(t,a,e):n(e))||e);return s&&e&&w(t,a,e),e};let c=class extends h(_){render(){return d`<div class="view-favorites"><div class="dui-container"><dui-ns-search @search="${i=>f(`/search/${i.detail}`)}" placeholder="Search names"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search><doid-favorites></doid-favorites></div></div>`}};c=x([m("view-favorites")],c);export{c as ViewFavorites};
