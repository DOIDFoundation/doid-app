System.register(["./index-legacy.c927572b.js","./doid-symbol-legacy.3f4f548d.js","./btn-legacy.48778edf.js","./vendor-legacy.d49bb3de.js"],(function(e,s){"use strict";var a,t,r,i,n,c,d,o,l;return{setters:[e=>{a=e.T},e=>{t=e.s,r=e.g},null,e=>{i=e.b,n=e.y,c=e.n,d=e.j,o=e.f,l=e.e}],execute:function(){var s=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(e,a,t,r)=>{for(var i,n=r>1?void 0:r?h(a,t):a,c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r?i(a,t,n):i(n))||n);return r&&n&&s(a,t,n),n};let p=e("ViewSearch",class extends(a("")){constructor(){super(...arguments),this.bindStore=new i(this,t),this.keyword="",this.search=async e=>{const s=e??this.keyword;s&&t.search(s)}}connectedCallback(){this.search(),super.connectedCallback()}onSearch(e){r(`/search/${e.detail}`),this.keyword=e.detail,this.search(e.detail)}goto(e){const{name:s,available:a}=t.names[e.detail-1];r(`/name/${s}/${a?"register":"details"}`)}render(){return n`<div class="view-search"><div class="dui-container"><dui-ns-search .text="${this.keyword}" @search="${this.onSearch}" placeholder="Search name or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${c(t.pending,(()=>n`<i class="mdi mdi-loading"></i> Searching...`))} ${c(t.empty,(()=>n`No Data`))} ${d(t.names,(e=>n`<div @click="${this.goto}" class="flex justify-between items-center gap-4 border p-3 shadow-sm cursor-pointer hover_bg-gray-100 rounded-md"><b>${e.name}</b><div class="flex gap-4 items-center"><span class="text-green-500">Available</span><doid-favorites-btn .name="${e.name}"></doid-favorites-btn></div></div>`))}</div></div>`}});g([o()],p.prototype,"keyword",2),e("ViewSearch",p=g([l("view-search")],p))}}}));
