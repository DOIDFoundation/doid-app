System.register(["./index-legacy.9178779a.js","./doid-symbol-legacy.ce5f0c23.js","./list-legacy.740c12c1.js","./vendor-legacy.b9eb6b11.js"],(function(e,s){"use strict";var t,r,a,i,n,c,d;return{setters:[e=>{t=e.T,r=e.g},e=>{a=e.s},null,e=>{i=e.b,n=e.y,c=e.m,d=e.e}],execute:function(){var s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=(e,t,r,a)=>{for(var i,n=a>1?void 0:a?o(t,r):t,c=e.length-1;c>=0;c--)(i=e[c])&&(n=(a?i(t,r,n):i(n))||n);return a&&n&&s(t,r,n),n};let h=e("ViewSearch",class extends(t("")){constructor(){super(...arguments),this.bindStore=new i(this,a),this.keyword="",this.search=async e=>{const s=e??this.keyword;s&&a.search(s)}}connectedCallback(){this.search(),super.connectedCallback()}onSearch(e){r(`/search/${e.detail}`),this.keyword=e.detail,this.search(e.detail)}goto(e){const{name:s,available:t}=a.names[e.detail-1];r(`/name/${s}/${t?"register":"details"}`)}render(){return n`<div class="view-search"><div class="dui-container"><dui-ns-search .text="${this.keyword}" @search="${this.onSearch}" placeholder="Search names or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search><doid-name-list .names="${a.names}" .pending="${a.pending}" .empty="${a.empty}"></doid-name-list></div></div>`}});l([c()],h.prototype,"keyword",2),e("ViewSearch",h=l([d("view-search")],h))}}}));
