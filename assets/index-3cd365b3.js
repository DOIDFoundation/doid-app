import{T as h,g as l}from"./index-8bf6d720.js";import{s as r}from"./doid-symbol-85c4d290.js";import"./list-08f8cb13.js";import{b as p,y as m,m as v,e as u}from"./vendor-7fa7464a.js";const f="";var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(e,s,t,i)=>{for(var a=i>1?void 0:i?$(s,t):s,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(i?o(s,t,a):o(a))||a);return i&&a&&w(s,t,a),a};let c=class extends h(f){constructor(){super(...arguments),this.bindStore=new p(this,r),this.keyword="",this.search=async e=>{const s=e!=null?e:this.keyword;s&&r.search(s)}}connectedCallback(){this.search(),super.connectedCallback()}onSearch(e){l(`/search/${e.detail}`),this.keyword=e.detail,this.search(e.detail)}goto(e){const{name:s,available:t}=r.names[e.detail-1];l(`/name/${s}/${t?"register":"details"}`)}render(){return m`<div class="view-search"><div class="dui-container"><dui-ns-search .text="${this.keyword}" @search="${this.onSearch}" placeholder="Search names or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search><doid-name-list .names="${r.names}" .pending="${r.pending}" .empty="${r.empty}"></doid-name-list></div></div>`}};d([v()],c.prototype,"keyword",2);c=d([u("view-search")],c);export{c as ViewSearch};
