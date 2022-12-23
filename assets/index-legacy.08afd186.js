System.register(["./index-legacy.e8a62154.js","./doid-symbol-legacy.5f19597e.js","./vendor-legacy.69b4e889.js"],(function(t,e){"use strict";var s,i,r,a,n,o,d,c,h,l,p,m,u,g,y,b,v,w,x,f,$,k,S,O,j,I,C,T,q,D,P,R;return{setters:[t=>{s=t.c,i=t.u,r=t.d,a=t.n,n=t.e,o=t._,d=t.f,c=t.h,h=t.i,l=t.b,p=t.T,m=t.s,u=t.a,g=t.g,y=t.r},t=>{b=t.g,v=t.b,w=t.u,x=t.w,f=t.n},t=>{$=t.p,k=t.S,S=t.z,O=t.b,j=t.y,I=t.h,C=t.e,T=t.n,q=t.j,D=t.f,P=t.m,R=t.d}],execute:function(){var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor;class E extends k{constructor(t){super(),this.key="",this.key=t}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}((t,e,s,i)=>{for(var r,a=i>1?void 0:i?B(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);i&&a&&A(e,s,a)})([$({value:[]})],E.prototype,"queue",2);class N{constructor(t){this.provider=i().bridgeStore.bridge.provider,this.store=new E(`evm.txs.${t||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(t){if(!t.chainId){const{network:e}=this.provider;t.chainId=e.chainId,t.scan=e.scan}t.pending=!0,this.queue.unshift(t),this.store.save(),this.provider.nonce=+t.nonce+1}delDelay(t,e=0){setTimeout((()=>this.del(t)),e)}del(t){const e=t.hash??t.ts??t;this.queue.some(((t,s)=>{if([t.hash,t.ts,t].includes(e)){0===s&&(this.provider.nonce=0);const t=this.queue.splice(s,1);return this.store.save(),t}}))}async check(t){this.queue.forEach((async(e,s)=>{if(t&&0===s){const t=await r(this.provider.account),s=+e.nonce;this.provider.nonce=s>t?s+1:t}if(e.done||(new Date).getTime()-e.ts>=72e5)return this.del(e);if(!e.err&&(t||!e.pending)){e.pending=!0;try{const t=await this.provider.waitForTransaction(e.hash),{status:s}=t;e.status=s,1===s?(e.done=!0,this.del(e)):e.err=!0}catch(i){e.err=i}e.pending=!1}})),this.store.save()}}const _={},L=(t=s.bridge.account)=>_[t]||(_[t]=new N(t));class M{constructor(t,{errorCodes:e="",seq:s,delay:i=0,allowAlmostSuccess:r=!1,onSent:a=(()=>{}),onSuccess:n=(()=>{}),onError:o=(()=>{})}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=r,this.txPromise=t,this.err=void 0,this.hash="",this.errorCodes=e,this.seq=s,this.delay=i,this.onSent=a,this.onSuccess=n,this.onError=o}get success(){return 1===this.status}get processing(){return 2===this.status}get almostSuccess(){return 4===this.status}get ignored(){return 3===this.status}async wait(t=!1){return(async()=>{let s=!1;const i=await(async t=>t?"object"==typeof t?t:await o(Object.assign({"./abi/Locker.codes.json":()=>d((()=>e.import("./Locker.codes-legacy.d5ca7e1e.js")),void 0),"./abi/Resolver.codes.json":()=>d((()=>e.import("./Resolver.codes-legacy.77c566ca.js")),void 0)}),`./abi/${t}.codes.json`):{})(this.errorCodes);try{const e=await this.txPromise;this.onSent(e);const{hash:r,nonce:a}=e;this.seq.nonce=a,this.seq&&(delete this.seq.overrides,L().add(Object.assign(this.seq,{hash:r}))),this.hash=r,this.status=2;const o=async()=>{const{status:t,events:s}=await e.wait(1);if(1!==t)throw this.seq&&(this.seq.err=!0),new Error("Failed");s.some((({event:t,args:e}={})=>{if("Failure"===t){let{info:t,detail:s,error:r}=e;const a=r.toString(),n=i[r],o={code:a,message:n,error:r,info:t?.toString(),detail:s?.toString()};this.seq&&(this.seq.err=!0);const d=new Error(n);throw Object.assign(d,{code:a,raw:o}),this.allowAlmostSuccess&&(this.status=4),d}})),this.status=1,this.seq&&(this.seq.done=!0),this.delay?L().delDelay(r,this.delay):L().del(r)};t?(s=!0,o()):await o(),this.onSuccess(e)}catch(r){throw await a(r),4001===r.code?this.status=3:4!==this.status&&(this.status=0),this.err=r,this.onError(r),r}finally{this.pending=!1;const t=1===this.status;n.emit("tx-status",this.hash),t&&n.emit("tx-success",this.hash),s=t}return s})()}}const V=()=>(new Date).getTime(),H=async t=>await(async(t,e=localStorage)=>{const s=async()=>{const s=e.getItem(await c(t));if(s)return JSON.parse(s)};return{get:s,set:async(i,{merge:r=!1}={})=>{const a=await c(t);r&&(i=Object.assign(await s()??{},i)),e.setItem(a,JSON.stringify(i))},remove:async()=>e.removeItem(await c(t))}})(`reg.${t}`,sessionStorage),F="secret",U=async t=>{const e=await(async(t,e=F,s=[])=>{const i=await H(t),r=await i.get();if(r)return r;const a=await b(),n={secret:await a.makeCommitment(v(t),await l(),S(e),s),ts:V()};return await i.set(n,{merge:!0}),n})(t),s=await b(),[i,r]=["commit",{}],a=[e.secret];await h(r,s,i,a);const n=s[i](...a),o=await H(t);return new M(n,{errorCodes:"Resolver",seq:{type:"commit",title:"Commit",ts:V(),overrides:r},onSent:()=>o.set({ts:V()},{merge:!0}),onSuccess:()=>o.set({ts:V()},{merge:!0}),onError:()=>o.remove()})};var Y=Object.defineProperty,J=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?J(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Y(e,s,a),a};let z=class extends(p("")){constructor(){super(...arguments),this.bindBridge=new O(this,s)}get bridge(){return s.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return j`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${m(this.tx.hash)}</dui-link>`}};W([I({type:Object})],z.prototype,"tx",2),z=W([C("tx-view")],z);var K=Object.defineProperty,G=Object.getOwnPropertyDescriptor,Q=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?G(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&K(e,s,a),a};let X=class extends(p(".tx-state{display:flex;flex-direction:column;align-items:center;flex-grow:1}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{word-break:break-word;white-space:normal}\n")){constructor(){super(),this.bindBridge=new O(this,s),this.txType=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return s.bridge}get icons(){const[t='<i class="mdi mdi-check-all"></i>',e='<i class="mdi mdi-check"></i>',s='<i class="mdi mdi-close"></i>',i='<i class="mdi mdi-loading"></i>']=this.opts.icons??[];return{success:t,failed:s,wait:i,almostSuccess:e}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){let[t,e,s]=["","",""];const{state:i}=this.opts;switch(this.tx.status){case-1:[t,e,s]=[this.icons.wait,i?.wait||"Waiting for confirmation...","wait"];break;case 0:[t,e,s]=[this.icons.failed,this.tx.err?.message??"Something went wrong","failed"];break;case 1:[t,e,s]=[this.icons.success,i?.success||"Success","success"];break;case 2:[t,e]=[this.icons.wait,"Confirm the transaction."];break;case 4:[t,e,s]=[this.icons.almostSuccess,this.tx.err?.message||"Almost Success","warn"]}return this.hashOk&&([t,e,s]=[this.icons.success,i?.success||"Success","success"]),{icon:t,txt:e,css:s}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return j`<div class="tx-state m-4"><div class="tx-state-icon my-3 text-3xl mx-auto ${this.state.css}">${T(this.tx.pending&&!this.hashOk,(()=>j`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`),(()=>j`<span>${q(this.state.icon)}</span>`))}</div><div class="tx-state-msg my-4"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${T(this.tx.hash,(()=>j`${T(this.tx.success||this.tx.almostSuccess,(()=>j`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`),(()=>j`<tx-view .tx="${this.tx}"></tx-view>`))}`))}</div></div>`}};Q([I({type:Object})],X.prototype,"tx",2),Q([I({type:Boolean})],X.prototype,"txType",2),Q([I({type:Boolean})],X.prototype,"onlyAwaitHash",2),Q([I({type:Object})],X.prototype,"opts",2),X=Q([C("tx-state")],X);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?tt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Z(e,s,a),a};let st=class extends(p("")){constructor(){super(...arguments),this.bindBridge=new O(this,s),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await(async t=>{const e=await u("Locker",{account:await l()}),[s,i,r]=["claimDoid",{},[+t]];await h(i,e,s,r);const a=e[s](...r);return new M(a,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:(new Date).getTime(),overrides:i}})})(+this.passId),this.success=await this.tx.wait()}catch(t){if(4001===t.code)return this.close()}}}get name(){return this.nameInfo?.name}get passId(){return this.nameInfo?.id||0}get txPending(){return this.tx&&!this.tx?.ignored}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return j`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${T(this.dialog,(()=>j`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${T(!this.tx?.success,(()=>j`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${j`(Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.)`}</p></div>`))} ${T(this.txPending,(()=>j`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name} now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`),(()=>j`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`))}</div></dui-dialog>`))}`}};et([I({type:Object})],st.prototype,"nameInfo",2),et([I({type:Boolean})],st.prototype,"sm",2),et([D()],st.prototype,"tx",2),et([D()],st.prototype,"success",2),et([D()],st.prototype,"dialog",2),st=et([C("doid-claim-name")],st);var it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,at=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?rt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&it(e,s,a),a};let nt=class extends(p(".per{background:linear-gradient(90deg,rgba(96,184,100,1) 0%,rgba(76,175,80,1) 100%)}\n")){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.randomTo,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(this.randomProgress=this.percent,this.randomTimer=setInterval((()=>{this.randomProgress+=Math.floor(1.4*Math.random()+.1),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)}),200)):clearInterval(this.randomTimer)),!0}render(){return j`<div class="relative flex grow w-full items-center"><div class="bar bg-gray-300 relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all bg-green-600" style="${P({width:`${this.per}%`})}"></p></div></div>`}};at([I({type:Number})],nt.prototype,"percent",2),at([I({type:Number})],nt.prototype,"randomTo",2),at([I({type:Number})],nt.prototype,"precision",2),at([I({type:Boolean})],nt.prototype,"label",2),at([I({type:Boolean})],nt.prototype,"state",2),at([D()],nt.prototype,"pending",2),at([D()],nt.prototype,"randomProgress",2),at([D()],nt.prototype,"randomTimer",2),nt=at([C("progress-bar")],nt);var ot=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,ct=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?dt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&ot(e,s,a),a};let ht=class extends(p('ol{margin-top:1rem;margin-bottom:1rem;display:grid;grid-gap:1rem;gap:1rem}@media (min-width: 768px){ol{grid-template-columns:repeat(3,minmax(0,1fr))}}ol li{position:relative;display:inline-flex;flex-direction:column;gap:.5rem;border-radius:.375rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}ol li:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700}ol li.active,ol li.done{border-style:dashed;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}ol li.active:before,ol li.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(248,250,252,var(--tw-bg-opacity))}ol li.done{border-color:transparent}ol li.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}ol li>b{display:block}ol li>p{line-height:1.375}ol li:nth-child(1):before{content:"1"}ol li:nth-child(2):before{content:"2"}ol li:nth-child(3):before{content:"3"}\n')){constructor(){super(...arguments),this.name="",this.done=!1,this.pending=!1,this.err="",this.ts=0,this.step=1,this.tx=null,this.commitment={},this.cd=0,this.timer=null,this.goStep2=()=>{this.step=2,this.cd=60,this.timer=setInterval((()=>{this.cd--<=0&&this.goStep3()}),1e3)},this.goStep3=()=>{this.step=3,clearInterval(this.timer)},this.getCommitment=async()=>{this.commitment=await(async t=>{const e=await H(t),s=await e.get();if(!(s&&V()-s.ts>=864e5))return s;e.remove()})(this.name)||{}},this.get=async()=>{await this.getCommitment();const{secret:t,ts:e}=this.commitment;e&&V()-e>6e4?this.goStep3():t&&this.goStep2(),this.ts++},this.commit=async()=>{this.pending=!0,this.err="";try{this.tx=await U(this.name),await this.tx.wait(),this.goStep2()}catch(t){4001!==t.code&&/( IC)/.test(t.message)&&(this.err="This name is already committed by someone else, please try again later"),(async t=>{(await H(t)).remove()})(this.name),this.tx=null}finally{this.pending=!1}},this.register=async()=>{if(this.done)return g(`/name/${this.name}/details`);if(3!==this.step)return this.commit();this.pending=!0,this.err="";try{this.tx=await(async(t,e=F,s=[])=>{const i=await b(),[r,a]=["register",{}],n=[v(t),await l(),S(e),s];await h(a,i,r,n);const o=i[r](...n);return new M(o,{errorCodes:"Resolver",seq:{type:"register",title:"Register",ts:V(),overrides:a}})})(this.name),this.done=await this.tx.wait()}catch(t){4001!==t.code&&(this.err=t.message),this.tx=null}finally{this.pending=!1}},this.go2success=()=>{g(this.detailsLink)}}get btn(){return{disabled:this.err||this.pending||2===this.step,title:this.done?"Manage name":this.step>1?"Register":"Request to Register"}}get txSuccess(){return this.tx&&!this.tx.ignored}get lockedByMe(){const{locked:t,itsme:e}=this.nameInfo;return t&&e}get detailsLink(){return`/name/${this.name}/details`}get txPending(){return this.tx&&!this.tx?.ignored}get percent(){if(this.done)return 100;if(1===this.step){if(this.pending&&!this.tx)return 2;if(this.tx)return 5}if(2===this.step)return 35;if(3===this.step){if(this.pending&&!this.tx)return 70;if(this.tx)return 75}return 3===this.step?68:0}get randomTo(){return 1===this.step&&this.tx?35:2===this.step?68:3===this.step&&this.tx?99:0}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.nameInfo.available?this.lockedByMe?j`<div class="px-3"><h3 class="text-base mb-4">${`This DOID name is already locked by pass #${this.nameInfo.locked}`}</h3><doid-claim-name @success="${this.go2success}" .nameInfo="${this.nameInfo}">Claim this name</doid-claim-name></div>`:j`<div class="px-3"><h3 class="text-base">${this.done?"You’ve completed all the steps, manage your name now!":"Registering a name requires you to complete 3 steps"}</h3><ol><li class="${R({done:this.done||this.step>1,active:this.step>=1})}"><b>Request to register</b><p>Your wallet will open and you will be asked to confirm the first of two transactions required for registration. If the second transaction is not processed within 7 days of the first, you will need to start again from step 1.</p></li><li class="${R({done:this.done||this.step>2,active:this.step>=2})}"><b>Wait for ${this.cd?`${this.cd} seconds`:"1 minute"}</b><p>The waiting period is required to ensure another person hasn’t tried to register the same name and protect you after your request.</p></li><li class="${R({done:this.done,active:this.step>=3})}"><b>Complete Registration</b><p>Click ‘register’ and your wallet will re-open. Only after the 2nd transaction is confirmed you'll know if you got the name.</p></li></ol><progress-bar .percent="${this.percent}" .randomTo="${this.randomTo}" class="my-4"></progress-bar><div class="my-4 flex justify-center items-center h-9"><dui-button @click="${this.register}" ?disabled="${this.btn.disabled}" class="${R({secondary:this.done})}" ?pending="${this.pending}">${this.btn.title}${T(this.cd,(()=>j`<span class="ml-2">(${this.cd})</span>`),(()=>j`<i class="mdi ml-2 ${R(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i>`))}</dui-button></div><div class="text-center">${T(this.done,(()=>j`<p class="text-green-600">Success!</p>`))} ${T(this.err,(()=>j`<p class="text-red-500">${this.err}</p>`))}</div></div>`:j`${T(this.nameInfo.itsme,(()=>j`<div class="px-3"><dui-button class="secondary" href="${this.detailsLink}">Manage your name <i class="mdi mdi-chevron-right"></i></dui-button></div>`),(()=>j`<div class="px-3">This DOID name is already taken.<dui-link class="mx-1" href="${this.detailsLink}">See Details</dui-link></div>`))}`}};ct([I()],ht.prototype,"name",2),ct([I({type:Object})],ht.prototype,"nameInfo",2),ct([D()],ht.prototype,"done",2),ct([D()],ht.prototype,"pending",2),ct([D()],ht.prototype,"err",2),ct([D()],ht.prototype,"ts",2),ct([D()],ht.prototype,"step",2),ct([D()],ht.prototype,"tx",2),ct([D()],ht.prototype,"commitment",2),ct([D()],ht.prototype,"cd",2),ct([D()],ht.prototype,"timer",2),ht=ct([C("view-name-register")],ht);var lt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,mt=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?pt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&lt(e,s,a),a};let ut=class extends(p(".addr_name{min-width:100px;max-width:140px}.edit{margin-top:0;margin-bottom:0}.edit .addr_edit{width:14rem}@media (min-width: 1024px){.edit .addr_edit{width:24rem}}@media (max-width: 1024px){.addr_name{min-width:50px;max-width:60px}}\n")){constructor(){super(...arguments),this.type="ETH",this.address="",this.tip={addr:""},this.err={addr:"",tx:""},this.pending={addr:!1,tx:!1},this.addr="",this.addrValid=!1,this.mode="",this.validate=()=>(this.addr?this.err={...this.err,addr:""}:this.err={...this.err,addr:"Required"},!this.inputErr),this.validAddrByType=(t=this.type)=>{this.err={...this.err,addr:""};const e=w(this.addr);this.addrValid=!1,"ETH"===t?42!=e&&(this.err={...this.err,addr:"Invalid address"}):e<32&&(this.err={...this.err,addr:"Invalid address"}),this.addrValid=!this.err.addr},this.onInputAddr=t=>{this.addr=t.detail,this.err={...this.err,addr:"",tx:""},this.validAddrByType()},this.saveAddr=()=>{this.validate()&&this.addrValid&&(console.info(`save addr of ${this.type}: ${this.addr}`),setTimeout((()=>this.mode="")))},this.cancel=()=>{this.mode="",this.err={...this.err,addr:""},this.pending={...this.pending,addr:!1}},this.disconnectedCallback=()=>{super.disconnectedCallback()}}get inputErr(){for(let t in this.err)if("tx"!==t&&this.err[t])return!0;return!1}connectedCallback(){super.connectedCallback(),this.addr=this.address}render(){return j`<div class="flex justify-start items-center my-3 ${this.mode}"><div class="addr_name text-gray-400">${this.type}</div><div class="grow flex items-center"><div class="addr_edit">${T("edit"===this.mode,(()=>j`<dui-input-text value="${this.addr}" class="sm" @input="${this.onInputAddr}" ?disabled="${this.pending.tx}"><span slot="msg">${T(this.err.addr,(()=>j`<span class="text-red-500">${this.err.addr}</span>`),(()=>j``))}</span></dui-input-text>`),(()=>j`${T(this.address,(()=>j`${this.address}<dui-copy .value="${this.address}" sm icon><span slot="copied" class="text-green-500"><i class="mdi mdi-check-circle-outline"></i> </span><span slot="copy"><i class="mdi mdi-content-copy"></i></span></dui-copy>`),(()=>j`<span class="text-gray-400">No set</span>`))}`))}</div>${T("edit"===this.mode,(()=>j`<dui-button sm text class="ml-1 outlined" @click="${this.saveAddr}">Save</dui-button><dui-button sm text class="ml-1 outlined" @click="${this.cancel}">Cancel</dui-button>`),(()=>j`<dui-button sm icon class="ml-1"><i class="mdi mdi-pencil-outline" @click="${()=>this.mode="edit"}"></i></dui-button>`))}</div></div>`}};mt([I({type:String})],ut.prototype,"type",2),mt([I({type:String})],ut.prototype,"address",2),mt([D()],ut.prototype,"tip",2),mt([D()],ut.prototype,"err",2),mt([D()],ut.prototype,"pending",2),mt([D()],ut.prototype,"addr",2),mt([D()],ut.prototype,"addrValid",2),mt([D()],ut.prototype,"mode",2),ut=mt([C("edit-addr-inline")],ut);var gt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,bt=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?yt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&gt(e,s,a),a};let vt=class extends(p(".item_key{width:13rem;font-weight:500;min-width:140px;max-width:180px}\n")){constructor(){super(...arguments),this.name="",this.pending=!1,this.ts=0,this.get=async()=>{this.ts++}}get empty(){return!1}connectedCallback(){this.get(),super.connectedCallback()}render(){return j`<div class="px-3 py-4"><div class="flex justify-start items-center mb-3"><div class="item_key">PARENT</div><div><a href="/name/doid/details" class="text-blue-500">doid</a></div></div><hr class="mb-3 border-t border-dashed border-gray-300"><div class="flex flex-col lg_flex-row justify-start items-start mb-3"><div class="item_key">ADDRESS</div><div class="flex flex-col"><edit-addr-inline address=""></edit-addr-inline><edit-addr-inline type="BSC"></edit-addr-inline><edit-addr-inline type="OKC"></edit-addr-inline></div></div></div>`}};bt([I()],vt.prototype,"name",2),bt([D()],vt.prototype,"pending",2),bt([D()],vt.prototype,"ts",2),vt=bt([C("view-name-details")],vt);var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var r,a=i>1?void 0:i?xt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&wt(e,s,a),a};let $t=t("ViewName",class extends(p(":host::part(dui-nav){display:flex;margin-bottom:-2px}\n")){constructor(){super(...arguments),this.name="",this.action="",this.pending=!1,this.disconnected=!1,this.nameInfo=null,this.goto=()=>{y(`/name/${x(this.name)}/${this.action}`)},this.check=async(t,e=!1)=>{if(this.pending)return;if(await this.isDisconnected(e))return;this.pending=!0;const s=x(this.name);if(this.name!==s)this.name=s;else try{if(await this.isDisconnected(!0))return;if(this.nameInfo=await f(this.name),await this.isDisconnected(!0))return;this.action||(this.action=this.nameInfo.available?"register":"details")}catch(i){this.nameInfo=null}this.goto(),this.pending=!1}}get inReg(){return this.nameInfo&&!this.pending&&"register"===this.action}get inDetails(){return this.nameInfo&&!this.pending&&"details"===this.action}get empty(){return!this.name}connectedCallback(){super.connectedCallback(),this.check(null,!0),n.on("router-change",this.check)}disconnectedCallback(){super.disconnectedCallback(),n.off("router-change",this.check)}render(){return j`<div class="view-name"><div class="dui-container"><dui-ns-search .text="${this.name}" @search="${t=>g(`/search/${t.detail}`)}" placeholder="Search names"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${T(this.name,(()=>j`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between items-end"><div><b class="text-lg">${this.name}</b> ${T("doid"===this.name,(()=>j`<em>(Registrant)</em>`))}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`/name/${this.name}/register`}" alias="${`/name/${this.name}`}" exact nav>Register</dui-link><dui-link href="${`/name/${this.name}/details`}" exact nav>Details</dui-link></dui-nav></div></div>`))} ${T(this.pending,(()=>j`<i class="mdi mdi-loading"></i> Loading...`))} ${T(this.inReg,(()=>j`<view-name-register .name="${this.name}" .nameInfo="${this.nameInfo}"></view-name-register>`))} ${T(this.inDetails,(()=>j`<view-name-details .name="${this.name}"></view-name-details>`))}</div></div>`}});ft([I()],$t.prototype,"name",2),ft([I()],$t.prototype,"action",2),ft([D()],$t.prototype,"pending",2),ft([D()],$t.prototype,"disconnected",2),ft([D()],$t.prototype,"nameInfo",2),t("ViewName",$t=ft([C("view-name")],$t))}}}));
