import{o as L,l as G,h as J,f as K,T as u,b as p,s as dt,a as lt,D as ht,g as V,e as M,p as pt,Z as gt,r as mt,w as et}from"./index-f2fa5274.js";import{g as Z,t as Q,a as ut,b as ft,c as bt,o as wt,n as yt}from"./doid-symbol-dcee26ec.js";import{E as st,c as I,y as a,m as l,e as f,j as h,n as d,q as vt,k as c,v as U,A as it,D as rt,u as W,d as $t}from"./vendor-dd2d0584.js";const X=async(t,s=localStorage,r=!1)=>{const i=async()=>{const n=await L(t,r),o=s.getItem(n);if(o)return JSON.parse(o)};let e=n=>{};return{get:i,set:async(n,{merge:o=!1}={})=>{var E;const y=await L(t,r);o&&(n=Object.assign((E=await i())!=null?E:{},n)),s.setItem(y,JSON.stringify(n))},remove:async()=>s.removeItem(await L(t,r)),on:n=>{e!=n&&(e=n),window.addEventListener("storage",e)},off:()=>{window.removeEventListener("storage",e)}}},C=()=>new Date().getTime(),q=async t=>await X(`reg.${t}`,sessionStorage),nt="secret",xt=async t=>{const s=await q(t),r=await s.get();if(r&&(!r.sent||C()-r.ts>=86400*1e3)){s.remove();return}return r},Y=async t=>(await q(t)).remove(),Ot=async(t,s=nt,r=[])=>{const i=await q(t),e=await i.get();if(e)return e;const o={secret:await(await Z()).makeCommitment(J(t),await K(),st(s),r),ts:C()};return await i.set(o,{merge:!0}),o},_t=async t=>{const s=await Ot(t),r=await Z(),[i,e]=["commit",{}],n=[s.secret];await G(e,r,i,n);const o=r[i](...n),y=await q(t);return new Q(o,{errorCodes:"Resolver",seq:{type:"commit",title:"Commit",ts:C(),overrides:e},onSent:()=>y.set({ts:C(),sent:!0},{merge:!0}),onSuccess:()=>y.set({ts:C(),success:!0},{merge:!0}),onError:()=>y.remove()})},St=async(t,s=nt,r=[])=>{const i=await Z(),[e,n]=["register",{}],o=[J(t),await K(),st(s),r];await G(n,i,e,o);const y=i[e](...o);return new Q(y,{errorCodes:"Resolver",seq:{type:"register",title:"Register",ts:C(),overrides:n}})},Ct="";var Pt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,ot=(t,s,r,i)=>{for(var e=i>1?void 0:i?Dt(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Pt(s,r,e),e};let F=class extends u(Ct){constructor(){super(...arguments),this.bindBridge=new I(this,p)}get bridge(){return p.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return a`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${dt(this.tx.hash)}</dui-link>`}};ot([l({type:Object})],F.prototype,"tx",2);F=ot([f("tx-view")],F);const Tt=`.tx-state{flex-grow:1;align-items:center}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{white-space:normal;word-wrap:break-word}
`;var kt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,j=(t,s,r,i)=>{for(var e=i>1?void 0:i?It(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&kt(s,r,e),e};let P=class extends u(Tt){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.txType=!1,this.inline=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return p.bridge}get icons(){var e;const[t='<i class="mdi mdi-check-all"></i>',s='<i class="mdi mdi-check"></i>',r='<i class="mdi mdi-close"></i>',i='<i class="mdi mdi-loading"></i>']=(e=this.opts.icons)!=null?e:[];return{success:t,failed:r,wait:i,almostSuccess:s}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){var e,n,o;let[t,s,r]=["","",""];const{state:i}=this.opts;switch(this.tx.status){case-1:[t,s,r]=[this.icons.wait,(i==null?void 0:i.wait)||"Waiting for confirmation...","wait"];break;case 0:[t,s,r]=[this.icons.failed,(n=(e=this.tx.err)==null?void 0:e.message)!=null?n:"Something went wrong","failed"];break;case 1:[t,s,r]=[this.icons.success,(i==null?void 0:i.success)||"Success","success"];break;case 2:[t,s]=[this.icons.wait,"Confirm the transaction..."];break;case 4:[t,s,r]=[this.icons.almostSuccess,((o=this.tx.err)==null?void 0:o.message)||"Almost Success","warn"];break}return this.hashOk&&([t,s,r]=[this.icons.success,(i==null?void 0:i.success)||"Success","success"]),{icon:t,txt:s,css:r}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return a`<div class="tx-state ${h(this.$c([this.inline?"inline-flex flex-wrap":"flex flex-col m-4"]))}"><div class="tx-state-icon mx-auto ${h(this.$c([this.inline?"mr-2":"text-3xl my-3",this.state.css]))}">${d(this.tx.pending&&!this.hashOk,()=>a`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`,()=>a`<span>${vt(this.state.icon)}</span>`)}</div><div class="tx-state-msg grow ${h(this.$c([this.inline?"":"my-4"]))}"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${d(this.tx.hash,()=>a`${d(this.tx.success||this.tx.almostSuccess,()=>a`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`,()=>a`<tx-view .tx="${this.tx}"></tx-view>`)}`)}</div></div>`}};j([l({type:Object})],P.prototype,"tx",2);j([l({type:Boolean})],P.prototype,"txType",2);j([l({type:Boolean,attribute:!0})],P.prototype,"inline",2);j([l({type:Boolean})],P.prototype,"onlyAwaitHash",2);j([l({type:Object})],P.prototype,"opts",2);P=j([f("tx-state")],P);var jt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,A=(t,s,r,i)=>{for(var e=i>1?void 0:i?At(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&jt(s,r,e),e};const Rt=async t=>{const s=await lt("Locker",{account:await K()}),[r,i,e]=["claimDoid",{},[+t]];await G(i,s,r,e);const n=s[r](...e);return new Q(n,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:new Date().getTime(),overrides:i}})};let D=class extends u(""){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await Rt(+this.passId),this.success=await this.tx.wait()}catch(t){if(t.code===4001)return this.close()}}}get name(){var t;return J((t=this.nameInfo)==null?void 0:t.name)}get passId(){var t;return((t=this.nameInfo)==null?void 0:t.id)||0}get txPending(){var t;return this.tx&&!((t=this.tx)!=null&&t.ignored)}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return a`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${d(this.dialog,()=>{var t;return a`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${d(!((t=this.tx)!=null&&t.success),()=>a`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${a`Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.`}</p></div>`)} ${d(this.txPending,()=>a`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name}.doid now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`,()=>a`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`)}</div></dui-dialog>`})}`}};A([l({type:Object})],D.prototype,"nameInfo",2);A([l({type:Boolean})],D.prototype,"sm",2);A([c()],D.prototype,"tx",2);A([c()],D.prototype,"success",2);A([c()],D.prototype,"dialog",2);D=A([f("doid-claim-name")],D);const Bt=`.per{background:linear-gradient(90deg,rgb(96,184,100) 0%,rgb(76,175,80) 100%)}
`;var Mt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,_=(t,s,r,i)=>{for(var e=i>1?void 0:i?Et(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Mt(s,r,e),e};let $=class extends u(Bt){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.percent,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(clearInterval(this.randomTimer),this.randomProgress=this.percent,this.randomTimer=setInterval(()=>{this.randomProgress+=Math.floor(Math.random()*(.1-.01+1)+.01),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)},200)):clearInterval(this.randomTimer)),!0}render(){return a`<div class="relative flex grow w-full items-center"><div class="bar bg-gray-300 relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all bg-green-600" style="${U({width:`${this.per}%`})}"></p></div></div>`}};_([l({type:Number})],$.prototype,"percent",2);_([l({type:Number})],$.prototype,"randomTo",2);_([l({type:Number})],$.prototype,"precision",2);_([l({type:Boolean})],$.prototype,"label",2);_([l({type:Boolean})],$.prototype,"state",2);_([c()],$.prototype,"pending",2);_([c()],$.prototype,"randomProgress",2);_([c()],$.prototype,"randomTimer",2);$=_([f("dui-progress-bar")],$);const Nt=`:host{position:relative;display:block;height:100%;width:100%;--bg: #d2d5db;--fg: #4caf50}circle{height:100%;width:100%;fill:none;transform-origin:50% 50%;transition:stroke-dashoffset .3s;transform:rotate(-90deg)}circle.b{stroke:var(--bg)}circle.f{stroke:var(--fg)}circle.p{stroke:rgba(9,253,70,.05)}.text{position:absolute;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center}.text.done,.text.active{color:var(--fg)}
`;var qt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,S=(t,s,r,i)=>{for(var e=i>1?void 0:i?Lt(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&qt(s,r,e),e};let x=class extends u(Nt){constructor(){super(...arguments),this.el$=it(),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.stroke=2,this.randomProgress=this.randomTo,this.width=32}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}get stat(){return this.progress===100?"active done":this.progress?"active":""}get radius(){return this.width/2}get r(){return this.radius-this.stroke/2}get ring(){const t=2*Math.PI*this.r;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":`${t-this.progress/100*t}`}}get r2(){return this.radius-this.radius/2}get pie(){const t=2*Math.PI*this.r2;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":`${t-this.progress/100*t}`}}fit(){this.el$.value&&(this.width=this.el$.value.clientWidth)}connectedCallback(){super.connectedCallback(),this.fit()}render(){return a`<svg ${rt(this.el$)} viewBox="${`0 0 ${this.width} ${this.width}`}"><g stroke-width="${this.radius}"><circle class="p" cx="${this.radius}" cy="${this.radius}" r="${this.r2}" style="${U(this.pie)}"/></g><g stroke-width="${this.stroke}"><circle class="b" cx="${this.radius}" cy="${this.radius}" r="${this.r}"/><circle class="f" cx="${this.radius}" cy="${this.radius}" r="${this.r}" style="${U(this.ring)}"/></g></svg><div class="text ${h(this.$c([this.stat]))}"><slot></slot></div>`}};S([l({type:Number})],x.prototype,"percent",2);S([l({type:Number})],x.prototype,"randomTo",2);S([l({type:Number})],x.prototype,"precision",2);S([l({type:Boolean})],x.prototype,"label",2);S([l({type:Boolean})],x.prototype,"state",2);S([l({type:Number})],x.prototype,"stroke",2);S([c()],x.prototype,"randomProgress",2);S([c()],x.prototype,"width",2);x=S([f("dui-progress-ring")],x);const Yt=`:host::part(dialog-container){padding-left:1rem;padding-right:1rem;padding-top:.5rem;font-size:1rem;line-height:1.5rem;min-height:100px}
`;var Vt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,at=(t,s,r,i)=>{for(var e=i>1?void 0:i?Ut(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Vt(s,r,e),e};let H=class extends u([ht.styles,Yt]){constructor(){super(...arguments),this.button=!1,this.el$=it()}onClose(){this.emit("close")}refClose(){this.el$.value.close()}render(){return a`<dui-dialog ${rt(this.el$)} @close="${this.onClose}"><slot></slot>${d(this.button,()=>a`<div slot="footer" class="w-full flex justify-between gap-4"><div></div><div><dui-button @click="${this.refClose}" class="minor">Close</dui-button></div></div>`)}</dui-dialog>`}};at([l({type:Boolean})],H.prototype,"button",2);H=at([f("dui-prompt")],H);var Wt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ct=(t,s,r,i)=>{for(var e=i>1?void 0:i?Ft(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Wt(s,r,e),e};let z=class extends u(""){constructor(){super(...arguments),this.model=!1}show(){this.model=!0}onClose(){this.model=!1}render(){return a`<dui-button @click="${this.show}" sm icon><i class="text-base mdi mdi-help-circle-outline cursor-pointer"></i></dui-button>${d(this.model,()=>a`<dui-prompt @close="${this.onClose}"><slot></slot></dui-prompt>`)}`}};ct([c()],z.prototype,"model",2);z=ct([f("dui-tip")],z);const Ht=`ol{margin-bottom:1rem;margin-top:2rem;display:grid;grid-gap:1rem;gap:1rem}@media (min-width: 768px){ol{grid-template-columns:repeat(3,minmax(0,1fr))}}ol li{position:relative;display:inline-flex;flex-direction:column;gap:.5rem;border-radius:.375rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 4rem;min-height:6.25rem}ol li dui-progress-ring{position:absolute;left:1rem;top:1rem;display:inline-block;height:2.5rem;width:2.5rem;font-weight:700;--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}ol li.active,ol li.done{border-style:dashed;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}ol li.done{border-color:transparent;--tw-bg-opacity: 1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}ol li>b{display:flex;align-items:center;gap:.25rem}ol li>b .mdi{font-size:1rem;line-height:1.5rem}ol li .desc{line-height:1.375}
`;var zt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,w=(t,s,r,i)=>{for(var e=i>1?void 0:i?Gt(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&zt(s,r,e),e};let m=class extends u(Ht){constructor(){super(...arguments),this.name="",this.done=!1,this.pending=!1,this.err="",this.ts=0,this.step=1,this.tx=null,this.commitment={},this.cd=0,this.timer=null,this.goStep2=()=>{this.tx=null,this.step=2;const t=60;this.cd=t,this.timer=setInterval(()=>{--this.cd<=0&&this.goStep3()},1e3)},this.goStep3=()=>{this.step=3,clearInterval(this.timer)},this.getCommitment=async()=>{this.commitment=await xt(this.name)||{}},this.get=async()=>{await this.getCommitment();const{secret:t,ts:s}=this.commitment;s&&C()-s>60*1e3?this.goStep3():t&&this.goStep2(),this.ts++},this.commit=async()=>{this.pending=!0,this.err="";try{this.tx=await _t(this.name),await this.tx.wait(),this.goStep2()}catch(t){t.code!==4001&&(/( IC)/.test(t.message)&&(this.err="This name is already committed by someone else, please try again later"),this.err=t.message,Y(this.name)),this.tx=null}finally{this.pending=!1}},this.register=async()=>{if(this.done)return V(`/name/${this.name}/details`);if(this.step!==3)return this.commit();this.pending=!0,this.err="";try{this.tx=await St(this.name),this.done=await this.tx.wait(),Y(this.name)}catch(t){t.code!==4001&&(this.err=t.message,Y(this.name))}finally{this.pending=!1,this.tx=null}},this.go2success=()=>{V(this.detailsLink)}}get btn(){return{disabled:this.err||this.pending||this.step===2,title:this.done?"Manage name":this.step>1?"Register":"Request to Register"}}get txSuccess(){return this.tx&&!this.tx.ignored}get lockedByMe(){const{locked:t,itsme:s}=this.nameInfo;return t&&s}get detailsLink(){return`/name/${this.name}/details`}get txPending(){var t;return this.tx&&!((t=this.tx)!=null&&t.ignored)}get percent(){if(this.done)return 100;if(this.step===1){if(this.pending&&!this.tx)return 2;if(this.tx)return 5}return this.step===2?35:this.step===3?this.pending&&!this.tx?70:this.tx?75:68:0}get randomTo(){return this.step===1&&this.tx?35:this.step===2?68:this.step===3&&this.tx?99:0}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.nameInfo.available?this.lockedByMe?a`<div class="px-3"><h3 class="text-base mb-4">${`This DOID name is already locked by pass #${this.nameInfo.locked}`}</h3><doid-claim-name @success="${this.go2success}" .nameInfo="${this.nameInfo}">Claim this name</doid-claim-name></div>`:a`<div class="px-3"><h3 class="text-base">${this.done?"You’ve completed all the steps, manage your name now!":"Registering a name requires you to complete 3 steps"}</h3><ol><li class="${h({done:this.done||this.step>1,active:this.step>=1})}"><dui-progress-ring state .percent="${this.step>1?100:this.percent?50:0}" .randomTo="100">${d(this.step>1,()=>a`<i class="mdi mdi-check text-lg"></i>`,()=>1)}</dui-progress-ring><b>Request to register<dui-tip>Your wallet will open and you will be asked to confirm the first of two transactions required for registration. If the second transaction is not processed within 7 days of the first, you will need to start again from step 1.</dui-tip></b><div class="desc">${d(this.step===1,()=>a`${d(this.tx&&!this.tx.ignored,()=>a`<tx-state .tx="${this.tx}" inline></tx-state>`)}`)}</div></li><li class="${h({done:this.done||this.step>2,active:this.step>=2})}"><dui-progress-ring state .percent="${this.step>2?100:this.timer?(60-this.cd)*100/60:0}" .randomTo="100">${d(this.step>2,()=>a`<i class="mdi mdi-check text-lg"></i>`,()=>2)}</dui-progress-ring><b>Wait for 1 minute<dui-tip>The waiting period is required to ensure another person hasn’t tried to register the same name and protect you after your request.</dui-tip></b><div class="cnt">${d(this.step===2&&this.timer,()=>a`${this.cd} seconds remaining`)}</div></li><li class="${h({done:this.done,active:this.step>=3})}"><dui-progress-ring state .percent="${this.done?100:this.percent>68?this.tx?66:33:0}" .randomTo="100">3</dui-progress-ring><b>Complete Registration<dui-tip>Click ‘register’ and your wallet will re-open. Only after the 2nd transaction is confirmed you'll know if you got the name.</dui-tip></b><div class="cnt">${d(this.step===3,()=>a`${d(this.tx&&!this.tx.ignored,()=>a`<tx-state .tx="${this.tx}" inline></tx-state>`)}`)}</div></li></ol><dui-progress-bar .percent="${this.percent}" .randomTo="${this.randomTo}" class="my-4"></dui-progress-bar><div class="my-4 flex justify-center items-center h-9"><dui-button @click="${this.register}" ?disabled="${this.btn.disabled}" class="${h({secondary:this.done})}" ?pending="${this.pending}">${this.btn.title}${d(this.cd,()=>a`<span class="ml-2">(${this.cd})</span>`,()=>a`<i class="mdi ml-2 ${h(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i>`)}</dui-button></div><div class="text-center">${d(this.done,()=>a`<p class="text-green-600">Success!</p>`)} ${d(this.err,()=>a`<p class="text-red-500">${this.err}</p>`)}</div></div>`:a`${d(this.nameInfo.itsme,()=>a`<div class="px-3"><dui-button class="secondary" href="${this.detailsLink}">Manage your name <i class="mdi mdi-chevron-right"></i></dui-button></div>`,()=>a`<div class="px-3">This DOID name is already taken.<dui-link class="mx-1" href="${this.detailsLink}">See Details</dui-link></div>`)}`}};w([l()],m.prototype,"name",2);w([l({type:Object})],m.prototype,"nameInfo",2);w([c()],m.prototype,"done",2);w([c()],m.prototype,"pending",2);w([c()],m.prototype,"err",2);w([c()],m.prototype,"ts",2);w([c()],m.prototype,"step",2);w([c()],m.prototype,"tx",2);w([c()],m.prototype,"commitment",2);w([c()],m.prototype,"cd",2);w([c()],m.prototype,"timer",2);m=w([f("view-name-register")],m);const Jt=`.card{position:relative;display:flex;flex-direction:column;gap:1rem;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}.card:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700;content:attr(idx)}.card.active,.card.done{--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}.card.active:before,.card.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity))}.card.done{border-color:transparent}.card.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}
`;var Kt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,tt=(t,s,r,i)=>{for(var e=i>1?void 0:i?Zt(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Kt(s,r,e),e};let N=class extends u(Jt){constructor(){super(...arguments),this.class="",this.index=1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return a`<div class="card h-full ${h(this.$c([this.class]))}" idx="${this.index}"><slot name="title" part="step-title"></slot><slot name="description" part="step-desc"></slot></div>`}};tt([l({type:String})],N.prototype,"class",2);tt([l({type:String})],N.prototype,"index",2);N=tt([f("dui-card")],N);const Qt=`:host::part(dialog-container){min-height:40px}
`;var Xt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,b=(t,s,r,i)=>{for(var e=i>1?void 0:i?te(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&Xt(s,r,e),e};let g=class extends u(Qt){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.owner=!1,this.coin={},this.name="",this.currentAddr="",this.step=1,this.signatureInfo={},this.pending=!1,this.err="",this.stored={},this.tx=null,this.success=!1,this.dialog=!1,this.showTip=()=>{this.dialog=!0},this.close=()=>{this.dialog=!1},this.getStorage=async()=>await X(`sign.${this.name}`,sessionStorage,!0),this.getStoredInfo=async()=>{var r;const s=await(await this.getStorage()).get();this.stored=s,(r=this.stored)!=null&&r.signature&&(this.step=2)},this.getSignerMessage=async()=>{const t=this.account,s=this.coin.coinType,r=await ut(this.name,t,s),i=await this.getStorage(),e={...this.stored,...r};i.set(e),this.stored=e},this.signMessage=async()=>{const t=await this.getStorage(),s=await ft(this.msg),r={...this.stored,...s};t.set(r),this.stored=r},this.sign=async()=>{if(!(!this.name||!this.ownerAddress||!this.coin.coinType||!this.account||!this.msg)&&!this.isCurrentEqualToDest){this.pending=!0,this.err="";try{await this.signMessage(),this.step=2}catch(t){if(t.code===4001)return;this.err=t.message}finally{this.pending=!1}}},this.setAddr=async()=>{if(this.pending)return;this.pending=!0,this.err="",this.success=!1;const{name:t,coinType:s,dest:r,timestamp:i,nonce:e,signature:n}=this.stored,o=await this.getStorage();try{this.tx=await bt(t,s,r,+i,e,n);const y=await this.tx.wait();o.remove(),this.success=y,this.step=3,this.emit("success")}catch(y){this.err=y.message}finally{this.pending=!1,o.remove()}},this.disconnectedCallback=()=>{super.disconnectedCallback(),this.step=1,this.dialog=!1}}get ownerAddress(){return this.stored.source}get dest(){return this.stored.dest}get msg(){return this.stored.message||""}get cookedMsg(){return this.msg.split(`
`).map(t=>{const s=(t.match(/^(.+:\s)/)||[])[0]||"";return{title:s,content:t.replace(s,"")}})}get account(){return p.bridge.account}get coinType(){return this.coin.coinType}get isStep1(){return this.step===1}get signature(){var t;return this.stored.signature||((t=this.signatureInfo)==null?void 0:t.signature)}get txPending(){var t;return this.tx&&!((t=this.tx)!=null&&t.ignored)}get isCurrentEqualToDest(){var t;return this.currentAddr===((t=this.dest)==null?void 0:t.toLowerCase())}get btnSignDisabled(){return this.currentAddr?this.pending||this.err||this.isCurrentEqualToDest||this.txPending:!1}get btnSetDisabled(){return this.pending||this.err||!this.signature||!this.owner||this.txPending}async connectedCallback(){super.connectedCallback(),await this.getStoredInfo(),!(this.dest==this.account||this.signature)&&await this.getSignerMessage()}render(){return a`<div class="set-record border border-gray-300 border-dashed pt-2 pb-5 mt-2 mb-4"><div class="px-3"><div class="border-b-2 flex my-4 px-3 pr-4 space-x-4 justify-between"><div>You are setting <b>${this.coin.name}</b> address to <b class="break-words break-all">${this.dest}</b></div>${d(this.isStep1,()=>a`<div @click="${this.showTip}"><a href="javascript:void(0)" class="text-blue-400">Change address to set</a></div>${d(this.dialog,()=>a`<dui-prompt @close="${this.close}"><div class="text-base">Open your wallet and switch to the address you want to set.</div></dui-prompt>`)}`)}</div><div>${d(this.pending&&!this.ownerAddress,()=>a``,()=>a`<div class="px-3"><h3 class="text-base">Setting an address requires you to complete 2 steps</h3><div class="grid md_grid-cols-2 gap-4 my-4"><dui-card index="1" class="rounded-md ${h({done:this.step>1,active:this.step>=1})}"><div slot="title"><b>SIGN A MESSAGE TO VERIFY YOUR ADDRESS</b></div><div slot="description" class="flex flex-col gap-2"><p>Your wallet will open and following message will be shown:</p><div class="break-words break-all">${d(this.msg,()=>a`<span class="text-gray-500">Message:</span> ${W(this.cookedMsg,t=>a`<p><b>${t.title}</b>${t.content}</p>`)}`)}</div></div></dui-card><dui-card index="2" class="rounded-md ${h({done:this.step>2,active:this.step>=2})}"><div slot="title"><b>Complete Setting</b></div><div slot="description" class="flex flex-col gap-2"><p class="break-words">You need to change your wallet back to ${d(!this.owner&&!this.isStep1,()=>a`${this.ownerAddress}`,()=>a`the address`)} that owns <b>${this.name}</b></p><p>Click 'set' and your wallet will re-open. Only after the transaction is confirmed your address will be set.</p></div></dui-card></div><div class="mt-4 text-center">${d(this.isStep1,()=>a`<dui-button sm @click="${this.sign}" ?disabled="${this.btnSignDisabled}" ?pending="${this.pending}">Sign message<i class="mdi ml-2 ${h(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i></dui-button>`,()=>a`<dui-button sm @click="${this.setAddr}" ?disabled="${this.btnSetDisabled}" ?pending="${this.pending}">Set<i class="mdi ml-2 ${h(this.$c([this.pending?"mdi-loading":""]))}"></i></dui-button>`)}</div></div>`)}</div></div></div>`}};b([l({type:Boolean})],g.prototype,"owner",2);b([l({type:Object})],g.prototype,"coin",2);b([l({type:String})],g.prototype,"name",2);b([l({type:String})],g.prototype,"currentAddr",2);b([c()],g.prototype,"step",2);b([c()],g.prototype,"signatureInfo",2);b([c()],g.prototype,"pending",2);b([c()],g.prototype,"err",2);b([c()],g.prototype,"stored",2);b([c()],g.prototype,"tx",2);b([c()],g.prototype,"success",2);b([c()],g.prototype,"dialog",2);g=b([f("doid-set-record-wallet")],g);const ee=`.edit{margin-top:0;margin-bottom:0}.edit .addr_edit{width:14rem}@media (min-width: 1024px){.edit .addr_edit{width:24rem}}
`;var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,O=(t,s,r,i)=>{for(var e=i>1?void 0:i?ie(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&se(s,r,e),e};let v=class extends u(ee){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.item={},this.owner=!1,this.name="",this.tip={addr:""},this.err={addr:"",tx:""},this.pending=!1,this.addrValid=!1,this.mode="",this.stored={},this.storage={},this.listener=t=>{this.reset()},this.reset=(t=!1)=>{this.mode="",this.stored={},t&&this.storage.remove()},this.setAddr=async()=>{if(this.isEditing)return this.reset(!0);M.emit("addr-edit"),this.mode="edit",this.storage.set({...this.coinType,source:this.address||this.account}),pt(),await this.checkEditInfo()},this.onSuccess=t=>{this.reset(),this.emit("success")},this.disconnectedCallback=async()=>{super.disconnectedCallback(),this.reset(),M.off("addr-edit",this.listener),this.storage.off()}}get account(){return p.bridge.account}get isOwner(){return this.owner==!0}get isEditing(){return this.mode==="edit"||this.isStored}get isStored(){var t,s;return!!((t=this.stored)!=null&&t.source)&&((s=this.stored)==null?void 0:s.coinType)===this.coinType.coinType}get editDisabled(){return this.pending}get address(){return this.item.address}get coinType(){return{name:this.item.name,coinType:this.item.coinType}}async checkEditInfo(){const t=await this.storage.get();this.stored=t}async connectedCallback(){super.connectedCallback(),this.storage=await X(`sign.${this.name}`,sessionStorage,!0),await this.checkEditInfo(),M.on("addr-edit",this.listener),this.storage.on(this.listener)}render(){return a`<div class="flex items-center ${this.mode}"><div class="addr_name w-14 lg_w-16 text-gray-400">${this.coinType.name}</div><div class="grow flex items-center h-8">${d(this.address,()=>a`<dui-address avatar copy .address="${this.address}"></dui-address>`,()=>a`<span class="text-gray-400 mr-1">Not set</span>`)} ${d(this.isOwner,()=>a`<dui-button @click="${this.setAddr}" sm icon .disabled="${this.editDisabled}"><i class="mdi ${h({"mdi-pencil-off-outline":this.isEditing,"mdi-pencil-outline":!this.isEditing})}"></i></dui-button>`)}</div></div>${d(this.isEditing,()=>a`<doid-set-record-wallet .name="${this.name}" .coin="${this.coinType}" .owner="${this.isOwner}" .currentAddr="${this.address}" @success="${this.onSuccess}"></doid-set-record-wallet>`)}`}};O([l({type:Object})],v.prototype,"item",2);O([l({type:Boolean})],v.prototype,"owner",2);O([l({type:String})],v.prototype,"name",2);O([c()],v.prototype,"tip",2);O([c()],v.prototype,"err",2);O([c()],v.prototype,"pending",2);O([c()],v.prototype,"addrValid",2);O([c()],v.prototype,"mode",2);O([c()],v.prototype,"stored",2);v=O([f("doid-addr-item")],v);const re=`.infos:not(:first-child){margin-top:.5rem;border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding-top:.5rem}.infos>li{display:flex;gap:1rem;padding-top:.5rem;padding-bottom:.5rem}.infos>li>strong{display:block;width:8rem;flex-shrink:0;font-weight:500;text-transform:uppercase}@media (min-width: 1024px){.infos>li>strong{width:9rem}}.infos>li .info-cnt{flex-shrink:1}.infos>li.single{align-items:center;padding-top:0;padding-bottom:0}.infos>li.single .info-cnt{display:flex;align-items:center}.infos>li.wrap{flex-wrap:wrap}@media (min-width: 1024px){.infos>li.wrap{flex-wrap:nowrap}}.infos>li.wrap>storng{width:100%}@media (min-width: 768px){.infos>li.wrap>storng{width:8rem}}@media (min-width: 1024px){.infos>li.wrap>storng{width:9rem}}
`;var ne=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,R=(t,s,r,i)=>{for(var e=i>1?void 0:i?oe(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&ne(s,r,e),e};let T=class extends u(re){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.name="",this.pending=!1,this.ts=0,this.records=[],this.fetchRecords=async()=>{if(!this.notOwned){this.pending=!0;try{this.records=await wt(this.info.name)}catch(t){}this.pending=!1,this.ts++}},this.onSuccess=()=>{this.fetchRecords()}}get account(){return p.bridge.account}get empty(){var t;return this.ts&&!((t=this.records)!=null&&t.length)}get notOwned(){return this.info.owner===gt}get details(){const t=this.info.owner;return[{title:"Registrant",registrant:!0,address:t},{title:"Controller",address:t}].map(s=>(s.link=`/address/${s.address}`,s))}connectedCallback(){super.connectedCallback(),this.fetchRecords()}render(){return a`<div class="px-3"><ul class="infos">${W(this.details,t=>a`<li class="single"><strong>${t.title}</strong><div class="info-cnt">${d(this.notOwned&&!t.registrant,()=>a`Not owned`,()=>a`<dui-address avatar copy .address="${t.address}" href="${t.link}"></dui-address>`)}</div></li>`)}</ul><ul class="infos"><li class="wrap"><strong>Addresses</strong><div class="info-cnt">${d(this.notOwned,()=>a`No address found`)} ${d(!this.ts&&this.pending,()=>a`<i class="mdi mdi-loading"></i>`)} ${d(this.empty,()=>a`<p class="text-red-500">Something went wrong</p>`,()=>a`<div class="doid-addr-items -mt-1 flex justify-start items-start flex-col gap-4"></div>${W(this.records,t=>a`${$t(t.address,a`<doid-addr-item key="${t.coinType}" .item="${t}" .name="${this.name}" .owner="${this.info.itsme}" @success="${this.onSuccess}"></doid-addr-item>`)}`)}`)}</div></li></ul></div>`}};R([l({type:Object})],T.prototype,"info",2);R([l({type:String})],T.prototype,"name",2);R([c()],T.prototype,"pending",2);R([c()],T.prototype,"ts",2);R([c()],T.prototype,"records",2);T=R([f("view-name-details")],T);const ae=`:host::part(dui-nav){display:flex;margin-bottom:-2px}
`;var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,B=(t,s,r,i)=>{for(var e=i>1?void 0:i?de(s,r):s,n=t.length-1,o;n>=0;n--)(o=t[n])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&ce(s,r,e),e};let k=class extends u(ae){constructor(){super(...arguments),this.bindBridge=new I(this,p),this.name="",this.action="",this.pending=!1,this.disconnected=!1,this.nameInfo=null,this.goto=()=>{mt(`/name/${et(this.name)}/${this.action}`)},this.check=async(t,s=!1)=>{if(this.pending||await this.isDisconnected(s))return;this.pending=!0;const r=et(this.name);if(this.name!==r)this.name=r;else try{if(await this.isDisconnected(!0)||(this.nameInfo=await yt(this.name),await this.isDisconnected(!0)))return;this.action||(this.action=this.nameInfo.available?"register":"details")}catch(i){this.nameInfo=null}this.goto(),this.pending=!1}}get inReg(){return!p.noAccount&&this.nameInfo&&this.action==="register"}get inDetails(){return!p.noAccount&&this.nameInfo&&this.action==="details"}get empty(){return!this.name}connectedCallback(){super.connectedCallback(),this.check(null,!0),M.on("router-change",this.check)}disconnectedCallback(){super.disconnectedCallback(),M.off("router-change",this.check)}render(){return a`<div class="view-name"><div class="dui-container"><dui-ns-search .default="${this.name}" @search="${t=>V(`/search/${t.detail}`)}" placeholder="Search DOID names"></dui-ns-search>${d(this.name,()=>a`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between items-end"><div><b class="text-lg">${this.name}</b> ${d(this.name==="doid",()=>a`<em>(Registrant)</em>`)}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`/name/${this.name}/register`}" alias="${`/name/${this.name}`}" exact nav>Register</dui-link><dui-link href="${`/name/${this.name}/details`}" exact nav>Details</dui-link></dui-nav></div></div>`)} ${d(p.noAccount,()=>a`<p class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></p>`)} ${d(this.inReg,()=>a`<view-name-register .name="${this.name}" .nameInfo="${this.nameInfo}"></view-name-register>`)} ${d(this.inDetails,()=>a`<view-name-details .name="${this.name}" .info="${this.nameInfo}"></view-name-details>`)}</div></div>`}};B([l({type:String})],k.prototype,"name",2);B([l()],k.prototype,"action",2);B([c()],k.prototype,"pending",2);B([c()],k.prototype,"disconnected",2);B([c()],k.prototype,"nameInfo",2);k=B([f("view-name")],k);export{k as ViewName};
