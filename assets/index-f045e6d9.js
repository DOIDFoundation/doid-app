import{T as h,g as l}from"./index-6e29754d.js";import{s as r}from"./doid-symbol-e6254a38.js";import"./list-a42d4092.js";import{c as m,y as p,m as v,e as u}from"./vendor-dd2d0584.js";const f="";var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(e,s,a,i)=>{for(var t=i>1?void 0:i?$(s,a):s,n=e.length-1,o;n>=0;n--)(o=e[n])&&(t=(i?o(s,a,t):o(t))||t);return i&&t&&w(s,a,t),t};let c=class extends h(f){constructor(){super(...arguments),this.bindStore=new m(this,r),this.keyword="",this.search=async e=>{const s=e!=null?e:this.keyword;s&&r.search(s)}}connectedCallback(){this.search(),super.connectedCallback()}onSearch(e){l(`/search/${e.detail}`),this.keyword=e.detail,this.search(e.detail)}goto(e){const{name:s,available:a}=r.names[e.detail-1];l(`/name/${s}/${a?"register":"details"}`)}render(){return p`<div class="view-search"><div class="dui-container"><dui-ns-search .default="${this.keyword}" @search="${this.onSearch}"></dui-ns-search><doid-name-list .names="${r.names}" .pending="${r.pending}" .empty="${r.empty}"></doid-name-list></div></div>`}};d([v()],c.prototype,"keyword",2);c=d([u("view-search")],c);export{c as ViewSearch};
