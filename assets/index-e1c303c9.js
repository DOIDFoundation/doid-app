import{T as v,b as c,q as l,s as b,g as f}from"./index-6e29754d.js";import{d as w}from"./doid-symbol-e6254a38.js";import"./list-a42d4092.js";import{c as m,y as h,n as g,m as u,k as p,e as y}from"./vendor-dd2d0584.js";const $=`:host::part(dui-nav){display:flex;margin-bottom:-2px}
`;var x=Object.defineProperty,C=Object.getOwnPropertyDescriptor,t=(i,r,a,d)=>{for(var s=d>1?void 0:d?C(r,a):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(d?o(r,a,s):o(s))||s);return d&&s&&x(r,a,s),s};let e=class extends v($){constructor(){super(...arguments),this.bindBridge=new m(this,c),this.bindScreen=new m(this,l),this.address="",this.action="",this.names=[],this.pending=!1,this.ts=0,this.get=async()=>{this.pending=!0,this.names=await w(this.address),this.pending=!1,this.ts++}}get bridge(){return c.bridge}get empty(){return this.ts&&!this.pending&&!this.names.length}get scan(){return this.bridge.network.current.scan}get itsme(){return this.bridge.account.toLowerCase()===this.address.toLowerCase()}get shortAddr(){return b(this.address)}connectedCallback(){this.get(),super.connectedCallback()}render(){return h`<div class="view-address"><div class="dui-container"><dui-ns-search .default="${this.address}" @search="${i=>f(`/address/${i.detail}`)}" placeholder="Search addresses"></dui-ns-search>${g(this.address,()=>h`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between"><div><b>${l.isMobi?this.shortAddr:this.address}</b>${g(this.itsme,()=>h`<span class="mx-1">(me)</span>`)}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`${this.scan}/address/${this.address}`}">View on Explorer</dui-link></dui-nav></div></div>`)}<doid-name-list @change="${this.get}" .names="${this.names}" .pending="${!this.ts&&this.pending}" .empty="${this.empty}"></doid-name-list></div></div>`}};t([u()],e.prototype,"address",2);t([u()],e.prototype,"action",2);t([p()],e.prototype,"names",2);t([p()],e.prototype,"pending",2);t([p()],e.prototype,"ts",2);e=t([y("view-address")],e);export{e as ViewAddress};
