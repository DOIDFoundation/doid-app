System.register(["./index-legacy.69536e66.js","./doid-symbol-legacy.6475184e.js","./vendor-legacy.25bbea8c.js"],(function(t,e){"use strict";var s,i,r,n,o,a,d,c,h,l,p,g,m,u,y,b,w,f,v,x,$,k,S,O,C,T,I,j,D,P,A,E,B,M,R,N;return{setters:[t=>{s=t.o,i=t.l,r=t.h,n=t.f,o=t.T,a=t.b,d=t.s,c=t.a,h=t.D,l=t.g,p=t.e,g=t.p,m=t.Z,u=t.r,y=t.w},t=>{b=t.g,w=t.t,f=t.a,v=t.b,x=t.c,$=t.o,k=t.n},t=>{S=t.E,O=t.c,C=t.y,T=t.m,I=t.e,j=t.j,D=t.n,P=t.q,A=t.k,E=t.v,B=t.A,M=t.D,R=t.u,N=t.d}],execute:function(){const e=()=>(new Date).getTime(),q=async(t,{store:i=localStorage,withoutEnv:r=!1,ttl:n=0}={})=>{const o=n>0;let a=null;const d=async()=>{const n=await s(t,r);if(a=i.getItem(n),a&&(a=JSON.parse(a),o)){const{ex:t,data:s}=a;return e>t?(c(),null):s}return a},c=async()=>i.removeItem(await s(t,r));let h;return{get:d,set:async(a,{merge:c=!1}={})=>{const h=await s(t,r);c&&(a=Object.assign(await d()??{},a));const l=o?{data:a,ex:e()+n}:a;i.setItem(h,JSON.stringify(l))},remove:c,on:t=>{h!=t&&(h=t),window.addEventListener("storage",h)},off:()=>{h&&window.removeEventListener("storage",h)}}},L=()=>(new Date).getTime(),Y=async t=>await q(`reg.${t}`,{store:sessionStorage}),V="secret",_=async t=>(await Y(t)).remove(),U=async t=>{const e=await(async(t,e=V,s=[])=>{const i=await Y(t),o=await i.get();if(o)return o;const a=await b(),d={secret:await a.makeCommitment(r(t),await n(),S(e),s),ts:L()};return await i.set(d,{merge:!0}),d})(t),s=await b(),[o,a]=["commit",{}],d=[e.secret];await i(a,s,o,d);const c=s[o](...d),h=await Y(t);return new w(c,{errorCodes:"Resolver",seq:{type:"commit",title:"Commit",ts:L(),overrides:a},onSent:()=>h.set({ts:L(),sent:!0},{merge:!0}),onSuccess:()=>h.set({ts:L(),success:!0},{merge:!0}),onError:()=>h.remove()})};var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?H(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&F(e,s,n),n};let z=class extends(o("")){constructor(){super(...arguments),this.bindBridge=new O(this,a)}get bridge(){return a.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return C`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${d(this.tx.hash)}</dui-link>`}};W([T({type:Object})],z.prototype,"tx",2),z=W([I("tx-view")],z);var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,Z=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?J(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&G(e,s,n),n};let K=class extends(o(".tx-state{flex-grow:1;align-items:center}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{white-space:normal;word-wrap:break-word}\n")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.txType=!1,this.inline=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return a.bridge}get icons(){const[t='<i class="mdi mdi-check-all"></i>',e='<i class="mdi mdi-check"></i>',s='<i class="mdi mdi-close"></i>',i='<i class="mdi mdi-loading"></i>']=this.opts.icons??[];return{success:t,failed:s,wait:i,almostSuccess:e}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){let[t,e,s]=["","",""];const{state:i}=this.opts;switch(this.tx.status){case-1:[t,e,s]=[this.icons.wait,i?.wait||"Waiting for confirmation...","wait"];break;case 0:[t,e,s]=[this.icons.failed,this.tx.err?.message??"Something went wrong","failed"];break;case 1:[t,e,s]=[this.icons.success,i?.success||"Success","success"];break;case 2:[t,e]=[this.icons.wait,"Confirm the transaction..."];break;case 4:[t,e,s]=[this.icons.almostSuccess,this.tx.err?.message||"Almost Success","warn"]}return this.hashOk&&([t,e,s]=[this.icons.success,i?.success||"Success","success"]),{icon:t,txt:e,css:s}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return C`<div class="tx-state ${j(this.$c([this.inline?"inline-flex flex-wrap":"flex flex-col m-4"]))}"><div class="tx-state-icon mx-auto ${j(this.$c([this.inline?"mr-2":"text-3xl my-3",this.state.css]))}">${D(this.tx.pending&&!this.hashOk,(()=>C`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`),(()=>C`<span>${P(this.state.icon)}</span>`))}</div><div class="tx-state-msg grow ${j(this.$c([this.inline?"":"my-4"]))}"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${D(this.tx.hash,(()=>C`${D(this.tx.success||this.tx.almostSuccess,(()=>C`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`),(()=>C`<tx-view .tx="${this.tx}"></tx-view>`))}`))}</div></div>`}};Z([T({type:Object})],K.prototype,"tx",2),Z([T({type:Boolean})],K.prototype,"txType",2),Z([T({type:Boolean,attribute:!0})],K.prototype,"inline",2),Z([T({type:Boolean})],K.prototype,"onlyAwaitHash",2),Z([T({type:Object})],K.prototype,"opts",2),K=Z([I("tx-state")],K);var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?X(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Q(e,s,n),n};let et=class extends(o("")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await(async t=>{const e=await c("Locker",{account:await n()}),[s,r,o]=["claimDoid",{},[+t]];await i(r,e,s,o);const a=e[s](...o);return new w(a,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:(new Date).getTime(),overrides:r}})})(+this.passId),this.success=await this.tx.wait()}catch(t){if(4001===t.code)return this.close()}}}get name(){return r(this.nameInfo?.name)}get passId(){return this.nameInfo?.id||0}get txPending(){return this.tx&&!this.tx?.ignored}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return C`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${D(this.dialog,(()=>C`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${D(!this.tx?.success,(()=>C`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${C`Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.`}</p></div>`))} ${D(this.txPending,(()=>C`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name}.doid now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`),(()=>C`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`))}</div></dui-dialog>`))}`}};tt([T({type:Object})],et.prototype,"nameInfo",2),tt([T({type:Boolean})],et.prototype,"sm",2),tt([A()],et.prototype,"tx",2),tt([A()],et.prototype,"success",2),tt([A()],et.prototype,"dialog",2),et=tt([I("doid-claim-name")],et);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,rt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?it(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&st(e,s,n),n};let nt=class extends(o(".per{background:linear-gradient(90deg,rgb(96,184,100) 0%,rgb(76,175,80) 100%)}\n")){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.percent,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(clearInterval(this.randomTimer),this.randomProgress=this.percent,this.randomTimer=setInterval((()=>{this.randomProgress+=Math.floor(1.09*Math.random()+.01),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)}),200)):clearInterval(this.randomTimer)),!0}render(){return C`<div class="relative flex grow w-full items-center"><div class="bar bg-gray-300 relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all bg-green-600" style="${E({width:`${this.per}%`})}"></p></div></div>`}};rt([T({type:Number})],nt.prototype,"percent",2),rt([T({type:Number})],nt.prototype,"randomTo",2),rt([T({type:Number})],nt.prototype,"precision",2),rt([T({type:Boolean})],nt.prototype,"label",2),rt([T({type:Boolean})],nt.prototype,"state",2),rt([A()],nt.prototype,"pending",2),rt([A()],nt.prototype,"randomProgress",2),rt([A()],nt.prototype,"randomTimer",2),nt=rt([I("dui-progress-bar")],nt);var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,dt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?at(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ot(e,s,n),n};let ct=class extends(o(":host{position:relative;display:block;height:100%;width:100%;--bg: #d2d5db;--fg: #4caf50}circle{height:100%;width:100%;fill:none;transform-origin:50% 50%;transition:stroke-dashoffset .3s;transform:rotate(-90deg)}circle.b{stroke:var(--bg)}circle.f{stroke:var(--fg)}circle.p{stroke:rgba(9,253,70,.05)}.text{position:absolute;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center}.text.done,.text.active{color:var(--fg)}\n")){constructor(){super(...arguments),this.el$=B(),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.stroke=2,this.randomProgress=this.randomTo,this.width=32}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}get stat(){return 100===this.progress?"active done":this.progress?"active":""}get radius(){return this.width/2}get r(){return this.radius-this.stroke/2}get ring(){const t=2*Math.PI*this.r;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":""+(t-this.progress/100*t)}}get r2(){return this.radius-this.radius/2}get pie(){const t=2*Math.PI*this.r2;return{"stroke-dasharray":`${t} ${t}`,"stroke-dashoffset":""+(t-this.progress/100*t)}}fit(){this.el$.value&&(this.width=this.el$.value.clientWidth)}connectedCallback(){super.connectedCallback(),this.fit()}render(){return C`<svg ${M(this.el$)} viewBox="${`0 0 ${this.width} ${this.width}`}"><g stroke-width="${this.radius}"><circle class="p" cx="${this.radius}" cy="${this.radius}" r="${this.r2}" style="${E(this.pie)}"/></g><g stroke-width="${this.stroke}"><circle class="b" cx="${this.radius}" cy="${this.radius}" r="${this.r}"/><circle class="f" cx="${this.radius}" cy="${this.radius}" r="${this.r}" style="${E(this.ring)}"/></g></svg><div class="text ${j(this.$c([this.stat]))}"><slot></slot></div>`}};dt([T({type:Number})],ct.prototype,"percent",2),dt([T({type:Number})],ct.prototype,"randomTo",2),dt([T({type:Number})],ct.prototype,"precision",2),dt([T({type:Boolean})],ct.prototype,"label",2),dt([T({type:Boolean})],ct.prototype,"state",2),dt([T({type:Number})],ct.prototype,"stroke",2),dt([A()],ct.prototype,"randomProgress",2),dt([A()],ct.prototype,"width",2),ct=dt([I("dui-progress-ring")],ct);var ht=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,pt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?lt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&ht(e,s,n),n};let gt=class extends(o([h.styles,":host::part(dialog-container){padding-left:1rem;padding-right:1rem;padding-top:.5rem;font-size:1rem;line-height:1.5rem;min-height:100px}\n"])){constructor(){super(...arguments),this.button=!1,this.el$=B()}onClose(){this.emit("close")}refClose(){this.el$.value?.close()}render(){return C`<dui-dialog ${M(this.el$)} @close="${this.onClose}"><slot></slot>${D(this.button,(()=>C`<div slot="footer" class="w-full flex justify-between gap-4"><div></div><div><dui-button @click="${this.refClose}" class="minor">Close</dui-button></div></div>`))}</dui-dialog>`}};pt([T({type:Boolean})],gt.prototype,"button",2),gt=pt([I("dui-prompt")],gt);var mt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,yt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?ut(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&mt(e,s,n),n};let bt=class extends(o("")){constructor(){super(...arguments),this.model=!1}show(){this.model=!0}onClose(){this.model=!1}render(){return C`<dui-button @click="${this.show}" sm icon><i class="text-base mdi mdi-help-circle-outline cursor-pointer"></i></dui-button>${D(this.model,(()=>C`<dui-prompt @close="${this.onClose}"><slot></slot></dui-prompt>`))}`}};yt([A()],bt.prototype,"model",2),bt=yt([I("dui-tip")],bt);var wt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?ft(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&wt(e,s,n),n};let xt=class extends(o("ol{margin-bottom:1rem;margin-top:2rem;display:grid;grid-gap:1rem;gap:1rem}@media (min-width: 768px){ol{grid-template-columns:repeat(3,minmax(0,1fr))}}ol li{position:relative;display:inline-flex;flex-direction:column;gap:.5rem;border-radius:.375rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 4rem;min-height:6.25rem}ol li dui-progress-ring{position:absolute;left:1rem;top:1rem;display:inline-block;height:2.5rem;width:2.5rem;font-weight:700;--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}ol li.active,ol li.done{border-style:dashed;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}ol li.done{border-color:transparent;--tw-bg-opacity: 1;background-color:rgba(241,245,249,var(--tw-bg-opacity))}ol li>b{display:flex;align-items:center;gap:.25rem}ol li>b .mdi{font-size:1rem;line-height:1.5rem}ol li .desc{line-height:1.375}\n")){constructor(){super(...arguments),this.name="",this.done=!1,this.pending=!1,this.err="",this.ts=0,this.step=1,this.tx=null,this.commitment={},this.cd=0,this.timer=null,this.goStep2=()=>{this.tx=null,this.step=2,this.cd=60,this.timer=setInterval((()=>{--this.cd<=0&&this.goStep3()}),1e3)},this.goStep3=()=>{this.step=3,clearInterval(this.timer)},this.getCommitment=async()=>{this.commitment=await(async t=>{const e=await Y(t),s=await e.get();if(!s||s.sent&&!(L()-s.ts>=864e5))return s;e.remove()})(this.name)||{}},this.get=async()=>{await this.getCommitment();const{secret:t,ts:e}=this.commitment;e&&L()-e>6e4?this.goStep3():t&&this.goStep2(),this.ts++},this.commit=async()=>{this.pending=!0,this.err="";try{this.tx=await U(this.name),await this.tx.wait(),this.goStep2()}catch(t){4001!==t.code&&(/( IC)/.test(t.message)?this.err="Duplicate registration request, please try again":this.err=t.message,_(this.name)),this.tx=null}finally{this.pending=!1}},this.register=async()=>{if(this.done)return l(`/name/${this.name}/details`);if(3!==this.step)return this.commit();this.pending=!0,this.err="";try{this.tx=await(async(t,e=V,s=[])=>{const o=await b(),[a,d]=["register",{}],c=[r(t),await n(),S(e),s];await i(d,o,a,c);const h=o[a](...c);return new w(h,{errorCodes:"Resolver",seq:{type:"register",title:"Register",ts:L(),overrides:d}})})(this.name),this.done=await this.tx.wait(),_(this.name)}catch(t){4001!==t.code&&(this.err=t.message,_(this.name))}finally{this.pending=!1,this.tx=null}},this.go2success=()=>{l(this.detailsLink)}}get btn(){return{disabled:this.err||this.pending||2===this.step,title:this.done?"Manage name":this.step>1?"Register":"Request to Register"}}get txSuccess(){return this.tx&&!this.tx.ignored}get lockedByMe(){const{locked:t,itsme:e}=this.nameInfo;return t&&e}get detailsLink(){return`/name/${this.name}/details`}get txPending(){return this.tx&&!this.tx?.ignored}get percent(){if(this.done)return 100;if(1===this.step){if(this.pending&&!this.tx)return 2;if(this.tx)return 5}return 2===this.step?35:3===this.step?this.pending&&!this.tx?70:this.tx?75:68:0}get randomTo(){return 1===this.step&&this.tx?35:2===this.step?68:3===this.step&&this.tx?99:0}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.nameInfo.available?this.lockedByMe?C`<div class="px-3"><h3 class="text-base mb-4">${`This DOID name is already locked by pass #${this.nameInfo.locked}`}</h3><doid-claim-name @success="${this.go2success}" .nameInfo="${this.nameInfo}">Claim this name</doid-claim-name></div>`:C`<div class="px-3"><h3 class="text-base">${this.done?"You’ve completed all the steps, manage your name now!":"Registering a name requires you to complete 3 steps"}</h3><ol><li class="${j({done:this.done||this.step>1,active:this.step>=1})}"><dui-progress-ring state .percent="${this.step>1?100:this.percent?50:0}" .randomTo="100">${D(this.step>1,(()=>C`<i class="mdi mdi-check text-lg"></i>`),(()=>1))}</dui-progress-ring><b>Request to register<dui-tip>Your wallet will open and you will be asked to confirm the first of two transactions required for registration. If the second transaction is not processed within 7 days of the first, you will need to start again from step 1.</dui-tip></b><div class="desc">${D(1===this.step,(()=>C`${D(this.tx&&!this.tx.ignored,(()=>C`<tx-state .tx="${this.tx}" inline></tx-state>`))}`))}</div></li><li class="${j({done:this.done||this.step>2,active:this.step>=2})}"><dui-progress-ring state .percent="${this.step>2?100:this.timer?100*(60-this.cd)/60:0}" .randomTo="100">${D(this.step>2,(()=>C`<i class="mdi mdi-check text-lg"></i>`),(()=>2))}</dui-progress-ring><b>Wait for 1 minute<dui-tip>The waiting period is required to ensure another person hasn’t tried to register the same name and protect you after your request.</dui-tip></b><div class="cnt">${D(2===this.step&&this.timer,(()=>C`${this.cd} seconds remaining`))}</div></li><li class="${j({done:this.done,active:this.step>=3})}"><dui-progress-ring state .percent="${this.done?100:this.percent>68?this.tx?66:33:0}" .randomTo="100">3</dui-progress-ring><b>Complete Registration<dui-tip>Click ‘register’ and your wallet will re-open. Only after the 2nd transaction is confirmed you'll know if you got the name.</dui-tip></b><div class="cnt">${D(3===this.step,(()=>C`${D(this.tx&&!this.tx.ignored,(()=>C`<tx-state .tx="${this.tx}" inline></tx-state>`))}`))}</div></li></ol><dui-progress-bar .percent="${this.percent}" .randomTo="${this.randomTo}" class="my-4"></dui-progress-bar><div class="my-4 flex justify-center items-center h-9"><dui-button @click="${this.register}" ?disabled="${this.btn.disabled}" class="${j({secondary:this.done})}" ?pending="${this.pending}">${this.btn.title}${D(this.cd,(()=>C`<span class="ml-2">(${this.cd})</span>`),(()=>C`<i class="mdi ml-2 ${j(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i>`))}</dui-button></div><div class="text-center">${D(this.done,(()=>C`<p class="text-green-600">Success!</p>`))} ${D(this.err,(()=>C`<p class="text-red-500">${this.err}</p>`))}</div></div>`:C`${D(this.nameInfo.itsme,(()=>C`<div class="px-3"><dui-button class="secondary" href="${this.detailsLink}">Manage your name <i class="mdi mdi-chevron-right"></i></dui-button></div>`),(()=>C`<div class="px-3">This DOID name is already taken.<dui-link class="mx-1" href="${this.detailsLink}">See Details</dui-link></div>`))}`}};vt([T()],xt.prototype,"name",2),vt([T({type:Object})],xt.prototype,"nameInfo",2),vt([A()],xt.prototype,"done",2),vt([A()],xt.prototype,"pending",2),vt([A()],xt.prototype,"err",2),vt([A()],xt.prototype,"ts",2),vt([A()],xt.prototype,"step",2),vt([A()],xt.prototype,"tx",2),vt([A()],xt.prototype,"commitment",2),vt([A()],xt.prototype,"cd",2),vt([A()],xt.prototype,"timer",2),xt=vt([I("view-name-register")],xt);var $t=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?kt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&$t(e,s,n),n};let Ot=class extends(o(".card{position:relative;display:flex;flex-direction:column;gap:1rem;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}.card:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700;content:attr(idx)}.card.active,.card.done{--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}.card.active:before,.card.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity))}.card.done{border-color:transparent}.card.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}\n")){constructor(){super(...arguments),this.class="",this.index=1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return C`<div class="card h-full ${j(this.$c([this.class]))}" idx="${this.index}"><slot name="title" part="step-title"></slot><slot name="description" part="step-desc"></slot></div>`}};St([T({type:String})],Ot.prototype,"class",2),St([T({type:String})],Ot.prototype,"index",2),Ot=St([I("dui-card")],Ot);var Ct=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,It=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Tt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Ct(e,s,n),n};let jt=class extends(o(":host::part(dialog-container){min-height:40px}\n")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.owner=!1,this.coin={},this.name="",this.currentAddr="",this.step=1,this.signatureInfo={},this.pending=!1,this.err="",this.stored={},this.tx=null,this.success=!1,this.dialog=!1,this.showTip=()=>{this.dialog=!0},this.close=()=>{this.dialog=!1},this.getStorage=async()=>await q(`sign.${this.name}`,{store:sessionStorage,withoutEnv:!0}),this.getStoredInfo=async()=>{const t=await this.getStorage(),e=await t.get();this.stored=e,this.stored?.signature&&(this.step=2)},this.getSignerMessage=async()=>{const t=this.account,e=this.coin.coinType,s=await f(this.name,t,e),i=await this.getStorage(),r={...this.stored,...s};i.set(r),this.stored=r},this.signMessage=async()=>{const t=await this.getStorage(),e=await v(this.msg),s={...this.stored,...e};t.set(s),this.stored=s},this.sign=async()=>{if(this.name&&this.ownerAddress&&this.coin.coinType&&this.account&&this.msg&&!this.isCurrentEqualToDest){this.pending=!0,this.err="";try{await this.signMessage(),this.step=2}catch(t){if(4001===t.code)return;this.err=t.message}finally{this.pending=!1}}},this.setAddr=async()=>{if(this.pending)return;this.pending=!0,this.err="",this.success=!1;const{name:t,coinType:e,dest:s,timestamp:i,nonce:r,signature:n}=this.stored,o=await this.getStorage();try{this.tx=await x(t,e,s,+i,r,n);const a=await this.tx.wait();o.remove(),this.success=a,this.step=3,this.emit("success")}catch(a){this.err=a.message}finally{this.pending=!1,o.remove()}},this.disconnectedCallback=()=>{super.disconnectedCallback(),this.step=1,this.dialog=!1}}get ownerAddress(){return this.stored.source}get dest(){return this.stored.dest}get msg(){return this.stored.message||""}get cookedMsg(){return this.msg.split("\n").map((t=>{const e=(t.match(/^(.+:\s)/)||[])[0]||"";return{title:e,content:t.replace(e,"")}}))}get account(){return a.bridge.account}get coinType(){return this.coin.coinType}get isStep1(){return 1===this.step}get signature(){return this.stored.signature||this.signatureInfo?.signature}get txPending(){return this.tx&&!this.tx?.ignored}get isCurrentEqualToDest(){return this.currentAddr===this.dest?.toLowerCase()}get btnSignDisabled(){return!!this.currentAddr&&(this.pending||this.err||this.isCurrentEqualToDest||this.txPending)}get btnSetDisabled(){return this.pending||this.err||!this.signature||!this.owner||this.txPending}async connectedCallback(){super.connectedCallback(),await this.getStoredInfo(),this.dest==this.account||this.signature||await this.getSignerMessage()}render(){return C`<div class="set-record border border-gray-300 border-dashed pt-2 pb-5 mt-2 mb-4"><div class="px-3"><div class="border-b-2 flex my-4 px-3 pr-4 space-x-4 justify-between"><div>You are setting <b>${this.coin.name}</b> address to <b class="break-words break-all">${this.dest}</b></div>${D(this.isStep1,(()=>C`<div @click="${this.showTip}"><a href="javascript:void(0)" class="text-blue-400">Change address to set</a></div>${D(this.dialog,(()=>C`<dui-prompt @close="${this.close}"><div class="text-base">Open your wallet and switch to the address you want to set.</div></dui-prompt>`))}`))}</div><div>${D(this.pending&&!this.ownerAddress,(()=>C``),(()=>C`<div class="px-3"><h3 class="text-base">Setting an address requires you to complete 2 steps</h3><div class="grid md_grid-cols-2 gap-4 my-4"><dui-card index="1" class="rounded-md ${j({done:this.step>1,active:this.step>=1})}"><div slot="title"><b>SIGN A MESSAGE TO VERIFY YOUR ADDRESS</b></div><div slot="description" class="flex flex-col gap-2"><p>Your wallet will open and following message will be shown:</p><div class="break-words break-all">${D(this.msg,(()=>C`<span class="text-gray-500">Message:</span> ${R(this.cookedMsg,(t=>C`<p><b>${t.title}</b>${t.content}</p>`))}`))}</div></div></dui-card><dui-card index="2" class="rounded-md ${j({done:this.step>2,active:this.step>=2})}"><div slot="title"><b>Complete Setting</b></div><div slot="description" class="flex flex-col gap-2"><p class="break-words">You need to change your wallet back to ${D(!this.owner&&!this.isStep1,(()=>C`${this.ownerAddress}`),(()=>C`the address`))} that owns <b>${this.name}</b></p><p>Click 'set' and your wallet will re-open. Only after the transaction is confirmed your address will be set.</p></div></dui-card></div><div class="mt-4 text-center">${D(this.isStep1,(()=>C`<dui-button sm @click="${this.sign}" ?disabled="${this.btnSignDisabled}" ?pending="${this.pending}">Sign message<i class="mdi ml-2 ${j(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i></dui-button>`),(()=>C`<dui-button sm @click="${this.setAddr}" ?disabled="${this.btnSetDisabled}" ?pending="${this.pending}">Set<i class="mdi ml-2 ${j(this.$c([this.pending?"mdi-loading":""]))}"></i></dui-button>`))}</div></div>`))}</div></div></div>`}};It([T({type:Boolean})],jt.prototype,"owner",2),It([T({type:Object})],jt.prototype,"coin",2),It([T({type:String})],jt.prototype,"name",2),It([T({type:String})],jt.prototype,"currentAddr",2),It([A()],jt.prototype,"step",2),It([A()],jt.prototype,"signatureInfo",2),It([A()],jt.prototype,"pending",2),It([A()],jt.prototype,"err",2),It([A()],jt.prototype,"stored",2),It([A()],jt.prototype,"tx",2),It([A()],jt.prototype,"success",2),It([A()],jt.prototype,"dialog",2),jt=It([I("doid-set-record-wallet")],jt);var Dt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Pt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Dt(e,s,n),n};let Et=class extends(o(".edit{margin-top:0;margin-bottom:0}.edit .addr_edit{width:14rem}@media (min-width: 1024px){.edit .addr_edit{width:24rem}}\n")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.item={},this.owner=!1,this.name="",this.tip={addr:""},this.err={addr:"",tx:""},this.pending=!1,this.addrValid=!1,this.mode="",this.stored={},this.storage={},this.listener=t=>{this.reset()},this.reset=(t=!1)=>{this.mode="",this.stored={},t&&this.storage.remove()},this.setAddr=async()=>{if(this.isEditing)return this.reset(!0);p.emit("addr-edit"),this.mode="edit",this.storage.set({...this.coinType,source:this.address||this.account}),g(),await this.checkEditInfo()},this.onSuccess=t=>{this.reset(),this.emit("success")},this.disconnectedCallback=async()=>{super.disconnectedCallback(),this.reset(),p.off("addr-edit",this.listener),this.storage.off()}}get account(){return a.bridge.account}get isOwner(){return 1==this.owner}get isEditing(){return"edit"===this.mode||this.isStored}get isStored(){return!!this.stored?.source&&this.stored?.coinType===this.coinType.coinType}get editDisabled(){return this.pending}get address(){return this.item.address}get coinType(){return{name:this.item.name,coinType:this.item.coinType}}async checkEditInfo(){const t=await this.storage.get();this.stored=t}async connectedCallback(){super.connectedCallback(),this.storage=await q(`sign.${this.name}`,{store:sessionStorage,withoutEnv:!0}),await this.checkEditInfo(),p.on("addr-edit",this.listener),this.storage.on(this.listener)}render(){return C`<div class="flex items-center ${this.mode}"><div class="addr_name w-14 lg_w-16 text-gray-400">${this.coinType.name}</div><div class="grow flex items-center h-8">${D(this.address,(()=>C`<dui-address avatar copy .address="${this.address}"></dui-address>`),(()=>C`<span class="text-gray-400 mr-1">Not set</span>`))} ${D(this.isOwner,(()=>C`<dui-button @click="${this.setAddr}" sm icon .disabled="${this.editDisabled}"><i class="mdi ${j({"mdi-pencil-off-outline":this.isEditing,"mdi-pencil-outline":!this.isEditing})}"></i></dui-button>`))}</div></div>${D(this.isEditing,(()=>C`<doid-set-record-wallet .name="${this.name}" .coin="${this.coinType}" .owner="${this.isOwner}" .currentAddr="${this.address}" @success="${this.onSuccess}" class="mt-4"></doid-set-record-wallet>`))}`}};At([T({type:Object})],Et.prototype,"item",2),At([T({type:Boolean})],Et.prototype,"owner",2),At([T({type:String})],Et.prototype,"name",2),At([A()],Et.prototype,"tip",2),At([A()],Et.prototype,"err",2),At([A()],Et.prototype,"pending",2),At([A()],Et.prototype,"addrValid",2),At([A()],Et.prototype,"mode",2),At([A()],Et.prototype,"stored",2),Et=At([I("doid-addr-item")],Et);var Bt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Mt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&Bt(e,s,n),n};let Nt=class extends(o(".infos:not(:first-child){margin-top:.5rem;border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding-top:.5rem}.infos>li{display:flex;gap:1rem;padding-top:.5rem;padding-bottom:.5rem}.infos>li>strong{display:block;width:8rem;flex-shrink:0;font-weight:500;text-transform:uppercase}@media (min-width: 1024px){.infos>li>strong{width:9rem}}.infos>li .info-cnt{flex-shrink:1}.infos>li.single{align-items:center;padding-top:0;padding-bottom:0}.infos>li.single .info-cnt{display:flex;align-items:center}.infos>li.wrap{flex-wrap:wrap}@media (min-width: 1024px){.infos>li.wrap{flex-wrap:nowrap}}.infos>li.wrap>storng{width:100%}@media (min-width: 768px){.infos>li.wrap>storng{width:8rem}}@media (min-width: 1024px){.infos>li.wrap>storng{width:9rem}}\n")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.name="",this.pending=!1,this.ts=0,this.records=[],this.fetchRecords=async()=>{if(!this.notOwned){this.pending=!0;try{this.records=await $(this.info.name)}catch{}this.pending=!1,this.ts++}},this.onSuccess=()=>{this.fetchRecords()}}get account(){return a.bridge.account}get empty(){return this.ts&&!this.records?.length}get notOwned(){return this.info.owner===m}get details(){const t=this.info.owner;return[{title:"Registrant",registrant:!0,address:t},{title:"Controller",address:t}].map((t=>(t.link=`/address/${t.address}`,t)))}connectedCallback(){super.connectedCallback(),this.fetchRecords()}render(){return C`<div class="px-3"><ul class="infos">${R(this.details,(t=>C`<li class="single"><strong>${t.title}</strong><div class="info-cnt">${D(this.notOwned&&!t.registrant,(()=>C`Not owned`),(()=>C`<dui-address avatar copy .address="${t.address}" href="${t.link}"></dui-address>`))}</div></li>`))}</ul><ul class="infos"><li class="wrap"><strong>Addresses</strong><div class="info-cnt">${D(this.notOwned,(()=>C`No address found`))} ${D(!this.ts&&this.pending,(()=>C`<i class="mdi mdi-loading"></i>`))} ${D(this.empty,(()=>C`<p class="text-red-500">Something went wrong</p>`),(()=>C`<div class="doid-addr-items -mt-1 flex justify-start items-start flex-col gap-4"></div>${R(this.records,(t=>C`${N(t.address,C`<doid-addr-item key="${t.coinType}" .item="${t}" .name="${this.name}" .owner="${this.info.itsme}" @success="${this.onSuccess}"></doid-addr-item>`)}`))}`))}</div></li></ul></div>`}};Rt([T({type:Object})],Nt.prototype,"info",2),Rt([T({type:String})],Nt.prototype,"name",2),Rt([A()],Nt.prototype,"pending",2),Rt([A()],Nt.prototype,"ts",2),Rt([A()],Nt.prototype,"records",2),Nt=Rt([I("view-name-details")],Nt);var qt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Yt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?Lt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&qt(e,s,n),n};let Vt=t("ViewName",class extends(o(":host::part(dui-nav){display:flex;margin-bottom:-2px}\n")){constructor(){super(...arguments),this.bindBridge=new O(this,a),this.name="",this.action="",this.pending=!1,this.disconnected=!1,this.nameInfo=null,this.goto=()=>{u(`/name/${y(this.name)}/${this.action}`)},this.check=async(t,e=!1)=>{if(this.pending)return;if(await this.isDisconnected(e))return;this.pending=!0;const s=y(this.name);if(this.name!==s)this.name=s;else try{if(await this.isDisconnected(!0))return;if(this.nameInfo=await k(this.name),await this.isDisconnected(!0))return;this.action||(this.action=this.nameInfo.available?"register":"details")}catch(i){this.nameInfo=null}this.goto(),this.pending=!1}}get inReg(){return!a.noAccount&&this.nameInfo&&"register"===this.action}get inDetails(){return!a.noAccount&&this.nameInfo&&"details"===this.action}get empty(){return!this.name}connectedCallback(){super.connectedCallback(),this.check(null,!0),p.on("router-change",this.check)}disconnectedCallback(){super.disconnectedCallback(),p.off("router-change",this.check)}render(){return C`<div class="view-name"><div class="dui-container"><dui-ns-search .default="${this.name}" @search="${t=>l(`/search/${t.detail}`)}" placeholder="Search DOID names"></dui-ns-search>${D(this.name,(()=>C`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between items-end"><div><b class="text-lg">${this.name}</b> ${D("doid"===this.name,(()=>C`<em>(Registrant)</em>`))}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`/name/${this.name}/register`}" alias="${`/name/${this.name}`}" exact nav>Register</dui-link><dui-link href="${`/name/${this.name}/details`}" exact nav>Details</dui-link></dui-nav></div></div>`))} ${D(a.noAccount,(()=>C`<p class="my-8 text-center"><connect-wallet-btn></connect-wallet-btn></p>`))} ${D(this.inReg,(()=>C`<view-name-register .name="${this.name}" .nameInfo="${this.nameInfo}"></view-name-register>`))} ${D(this.inDetails,(()=>C`<view-name-details .name="${this.name}" .info="${this.nameInfo}"></view-name-details>`))}</div></div>`}});Yt([T({type:String})],Vt.prototype,"name",2),Yt([T()],Vt.prototype,"action",2),Yt([A()],Vt.prototype,"pending",2),Yt([A()],Vt.prototype,"disconnected",2),Yt([A()],Vt.prototype,"nameInfo",2),t("ViewName",Vt=Yt([I("view-name")],Vt))}}}));
