System.register(["./index-legacy.cfc006ee.js","./doid-symbol-legacy.1a016e77.js","./list-legacy.9b27fd4e.js","./vendor-legacy.b9eb6b11.js"],(function(s,e){"use strict";var t,i,d,r,n,a,h,o,c,p,l,g;return{setters:[s=>{t=s.T,i=s.b,d=s.v,r=s.s,n=s.g},s=>{a=s.d},null,s=>{h=s.b,o=s.y,c=s.n,p=s.m,l=s.k,g=s.e}],execute:function(){var e=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=(s,t,i,d)=>{for(var r,n=d>1?void 0:d?u(t,i):t,a=s.length-1;a>=0;a--)(r=s[a])&&(n=(d?r(t,i,n):r(n))||n);return d&&n&&e(t,i,n),n};let v=s("ViewAddress",class extends(t(":host::part(dui-nav){display:flex;margin-bottom:-2px}\n")){constructor(){super(...arguments),this.bindBridge=new h(this,i),this.bindScreen=new h(this,d),this.address="",this.action="",this.names=[],this.pending=!1,this.ts=0,this.get=async()=>{this.pending=!0,this.names=await a(this.address),this.pending=!1,this.ts++}}get bridge(){return i.bridge}get empty(){return this.ts&&!this.pending&&!this.names.length}get scan(){return this.bridge.network.current.scan}get itsme(){return this.bridge.account.toLowerCase()===this.address.toLowerCase()}get shortAddr(){return r(this.address)}connectedCallback(){this.get(),super.connectedCallback()}render(){return o`<div class="view-address"><div class="dui-container"><dui-ns-search .text="${this.address}" @search="${s=>n(`/address/${s.detail}`)}" placeholder="Search addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${c(this.address,(()=>o`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between"><div><b>${d.isMobi?this.shortAddr:this.address}</b>${c(this.itsme,(()=>o`<span class="mx-1">(me)</span>`))}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`${this.scan}/address/${this.address}`}">View on Explorer</dui-link></dui-nav></div></div>`))}<doid-name-list @change="${this.get}" .names="${this.names}" .pending="${!this.ts&&this.pending}" .empty="${this.empty}"></doid-name-list></div></div>`}});m([p()],v.prototype,"address",2),m([p()],v.prototype,"action",2),m([l()],v.prototype,"names",2),m([l()],v.prototype,"pending",2),m([l()],v.prototype,"ts",2),s("ViewAddress",v=m([g("view-address")],v))}}}));
