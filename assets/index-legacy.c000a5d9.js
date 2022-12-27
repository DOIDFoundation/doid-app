System.register(["./index-legacy.9178779a.js","./doid-symbol-legacy.ce5f0c23.js","./vendor-legacy.b9eb6b11.js"],(function(t,e){"use strict";var s,i,r,o,n,a,d,c,l,h,p,g,m,u,b,y,w,f,v,x,$,k,S,O,T,I,C,j,D,P,A,R,E,M,q,B;return{setters:[t=>{s=t.o,i=t.l,r=t.h,o=t.f,n=t.T,a=t.b,d=t.s,c=t.a,l=t.g,h=t.p,p=t.q,g=t.e,m=t.r,u=t.Z,b=t.t,y=t.w},t=>{w=t.g,f=t.t,v=t.a,x=t.b,$=t.c,k=t.o,S=t.n},t=>{O=t.E,T=t.b,I=t.y,C=t.m,j=t.e,D=t.n,P=t.q,A=t.k,R=t.v,E=t.j,M=t.$,q=t.u,B=t.c}],execute:function(){const e=async(t,e=localStorage,i=!1)=>{const r=async()=>{const r=await s(t,i),o=e.getItem(r);if(o)return JSON.parse(o)};let o=t=>{};return{get:r,set:async(o,{merge:n=!1}={})=>{const a=await s(t,i);n&&(o=Object.assign(await r()??{},o)),e.setItem(a,JSON.stringify(o))},remove:async()=>e.removeItem(await s(t,i)),on:t=>{o!=t&&(o=t),window.addEventListener("storage",o)},off:()=>{window.removeEventListener("storage",o)}}},N=()=>(new Date).getTime(),L=async t=>await e(`reg.${t}`,sessionStorage),Y="secret",V=async t=>(await L(t)).remove(),_=async t=>{const e=await(async(t,e=Y,s=[])=>{const i=await L(t),n=await i.get();if(n)return n;const a=await w(),d={secret:await a.makeCommitment(r(t),await o(),O(e),s),ts:N()};return await i.set(d,{merge:!0}),d})(t),s=await w(),[n,a]=["commit",{}],d=[e.secret];await i(a,s,n,d);const c=s[n](...d),l=await L(t);return new f(c,{errorCodes:"Resolver",seq:{type:"commit",title:"Commit",ts:N(),overrides:a},onSent:()=>l.set({ts:N()},{merge:!0}),onSuccess:()=>l.set({ts:N()},{merge:!0}),onError:()=>l.remove()})};var U=Object.defineProperty,H=Object.getOwnPropertyDescriptor,z=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?H(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&U(e,s,o),o};let F=class extends(n("")){constructor(){super(...arguments),this.bindBridge=new T(this,a)}get bridge(){return a.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return I`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${d(this.tx.hash)}</dui-link>`}};z([C({type:Object})],F.prototype,"tx",2),F=z([j("tx-view")],F);var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?J(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&G(e,s,o),o};let Z=class extends(n(".tx-state{display:flex;flex-direction:column;align-items:center;flex-grow:1}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{word-break:break-word;white-space:normal}\n")){constructor(){super(),this.bindBridge=new T(this,a),this.txType=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return a.bridge}get icons(){const[t='<i class="mdi mdi-check-all"></i>',e='<i class="mdi mdi-check"></i>',s='<i class="mdi mdi-close"></i>',i='<i class="mdi mdi-loading"></i>']=this.opts.icons??[];return{success:t,failed:s,wait:i,almostSuccess:e}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){let[t,e,s]=["","",""];const{state:i}=this.opts;switch(this.tx.status){case-1:[t,e,s]=[this.icons.wait,i?.wait||"Waiting for confirmation...","wait"];break;case 0:[t,e,s]=[this.icons.failed,this.tx.err?.message??"Something went wrong","failed"];break;case 1:[t,e,s]=[this.icons.success,i?.success||"Success","success"];break;case 2:[t,e]=[this.icons.wait,"Confirm the transaction."];break;case 4:[t,e,s]=[this.icons.almostSuccess,this.tx.err?.message||"Almost Success","warn"]}return this.hashOk&&([t,e,s]=[this.icons.success,i?.success||"Success","success"]),{icon:t,txt:e,css:s}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return I`<div class="tx-state m-4"><div class="tx-state-icon my-3 text-3xl mx-auto ${this.state.css}">${D(this.tx.pending&&!this.hashOk,(()=>I`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`),(()=>I`<span>${P(this.state.icon)}</span>`))}</div><div class="tx-state-msg my-4"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${D(this.tx.hash,(()=>I`${D(this.tx.success||this.tx.almostSuccess,(()=>I`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`),(()=>I`<tx-view .tx="${this.tx}"></tx-view>`))}`))}</div></div>`}};W([C({type:Object})],Z.prototype,"tx",2),W([C({type:Boolean})],Z.prototype,"txType",2),W([C({type:Boolean})],Z.prototype,"onlyAwaitHash",2),W([C({type:Object})],Z.prototype,"opts",2),Z=W([j("tx-state")],Z);var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?Q(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&K(e,s,o),o};let tt=class extends(n("")){constructor(){super(...arguments),this.bindBridge=new T(this,a),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await(async t=>{const e=await c("Locker",{account:await o()}),[s,r,n]=["claimDoid",{},[+t]];await i(r,e,s,n);const a=e[s](...n);return new f(a,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:(new Date).getTime(),overrides:r}})})(+this.passId),this.success=await this.tx.wait()}catch(t){if(4001===t.code)return this.close()}}}get name(){return this.nameInfo?.name}get passId(){return this.nameInfo?.id||0}get txPending(){return this.tx&&!this.tx?.ignored}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return I`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${D(this.dialog,(()=>I`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${D(!this.tx?.success,(()=>I`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${I`(Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.)`}</p></div>`))} ${D(this.txPending,(()=>I`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name} now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`),(()=>I`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`))}</div></dui-dialog>`))}`}};X([C({type:Object})],tt.prototype,"nameInfo",2),X([C({type:Boolean})],tt.prototype,"sm",2),X([A()],tt.prototype,"tx",2),X([A()],tt.prototype,"success",2),X([A()],tt.prototype,"dialog",2),tt=X([j("doid-claim-name")],tt);var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,it=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?st(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&et(e,s,o),o};let rt=class extends(n(".per{background:linear-gradient(90deg,rgba(96,184,100,1) 0%,rgba(76,175,80,1) 100%)}\n")){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.randomTo,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(this.randomProgress=this.percent,this.randomTimer=setInterval((()=>{this.randomProgress+=Math.floor(1.1*Math.random()+.1),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)}),200)):clearInterval(this.randomTimer)),!0}render(){return I`<div class="relative flex grow w-full items-center"><div class="bar bg-gray-300 relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all bg-green-600" style="${R({width:`${this.per}%`})}"></p></div></div>`}};it([C({type:Number})],rt.prototype,"percent",2),it([C({type:Number})],rt.prototype,"randomTo",2),it([C({type:Number})],rt.prototype,"precision",2),it([C({type:Boolean})],rt.prototype,"label",2),it([C({type:Boolean})],rt.prototype,"state",2),it([A()],rt.prototype,"pending",2),it([A()],rt.prototype,"randomProgress",2),it([A()],rt.prototype,"randomTimer",2),rt=it([j("progress-bar")],rt);var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,at=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?nt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&ot(e,s,o),o};let dt=class extends(n('ol{margin-top:1rem;margin-bottom:1rem;display:grid;grid-gap:1rem;gap:1rem}@media (min-width: 768px){ol{grid-template-columns:repeat(3,minmax(0,1fr))}}ol li{position:relative;display:inline-flex;flex-direction:column;gap:.5rem;border-radius:.375rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}ol li:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700}ol li.active,ol li.done{border-style:dashed;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}ol li.active:before,ol li.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(248,250,252,var(--tw-bg-opacity))}ol li.done{border-color:transparent}ol li.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}ol li>b{display:block}ol li>p{line-height:1.375}ol li:nth-child(1):before{content:"1"}ol li:nth-child(2):before{content:"2"}ol li:nth-child(3):before{content:"3"}\n')){constructor(){super(...arguments),this.name="",this.done=!1,this.pending=!1,this.err="",this.ts=0,this.step=1,this.tx=null,this.commitment={},this.cd=0,this.timer=null,this.goStep2=()=>{this.step=2,this.cd=60,this.timer=setInterval((()=>{--this.cd<=0&&this.goStep3()}),1e3)},this.goStep3=()=>{this.step=3,clearInterval(this.timer)},this.getCommitment=async()=>{this.commitment=await(async t=>{const e=await L(t),s=await e.get();if(!(s&&N()-s.ts>=864e5))return s;e.remove()})(this.name)||{}},this.get=async()=>{await this.getCommitment();const{secret:t,ts:e}=this.commitment;e&&N()-e>6e4?this.goStep3():t&&this.goStep2(),this.ts++},this.commit=async()=>{this.pending=!0,this.err="";try{this.tx=await _(this.name),await this.tx.wait(),this.goStep2()}catch(t){4001!==t.code&&/( IC)/.test(t.message)&&(this.err="This name is already committed by someone else, please try again later"),V(this.name),this.tx=null}finally{this.pending=!1}},this.register=async()=>{if(this.done)return l(`/name/${this.name}/details`);if(3!==this.step)return this.commit();this.pending=!0,this.err="";try{this.tx=await(async(t,e=Y,s=[])=>{const n=await w(),[a,d]=["register",{}],c=[r(t),await o(),O(e),s];await i(d,n,a,c);const l=n[a](...c);return new f(l,{errorCodes:"Resolver",seq:{type:"register",title:"Register",ts:N(),overrides:d}})})(this.name),this.done=await this.tx.wait(),V(this.name)}catch(t){4001!==t.code&&(this.err=t.message),this.tx=null}finally{this.pending=!1}},this.go2success=()=>{l(this.detailsLink)}}get btn(){return{disabled:this.err||this.pending||2===this.step,title:this.done?"Manage name":this.step>1?"Register":"Request to Register"}}get txSuccess(){return this.tx&&!this.tx.ignored}get lockedByMe(){const{locked:t,itsme:e}=this.nameInfo;return t&&e}get detailsLink(){return`/name/${this.name}/details`}get txPending(){return this.tx&&!this.tx?.ignored}get percent(){if(this.done)return 100;if(1===this.step){if(this.pending&&!this.tx)return 2;if(this.tx)return 5}if(2===this.step)return 35;if(3===this.step){if(this.pending&&!this.tx)return 70;if(this.tx)return 75}return 3===this.step?68:0}get randomTo(){return 1===this.step&&this.tx?35:2===this.step?68:3===this.step&&this.tx?99:0}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.nameInfo.available?this.lockedByMe?I`<div class="px-3"><h3 class="text-base mb-4">${`This DOID name is already locked by pass #${this.nameInfo.locked}`}</h3><doid-claim-name @success="${this.go2success}" .nameInfo="${this.nameInfo}">Claim this name</doid-claim-name></div>`:I`<div class="px-3"><h3 class="text-base">${this.done?"You’ve completed all the steps, manage your name now!":"Registering a name requires you to complete 3 steps"}</h3><ol><li class="${E({done:this.done||this.step>1,active:this.step>=1})}"><b>Request to register</b><p>Your wallet will open and you will be asked to confirm the first of two transactions required for registration. If the second transaction is not processed within 7 days of the first, you will need to start again from step 1.</p></li><li class="${E({done:this.done||this.step>2,active:this.step>=2})}"><b>Wait for ${this.cd||this.step>2?`${this.cd} seconds`:"1 minute"}</b><p>The waiting period is required to ensure another person hasn’t tried to register the same name and protect you after your request.</p></li><li class="${E({done:this.done,active:this.step>=3})}"><b>Complete Registration</b><p>Click ‘register’ and your wallet will re-open. Only after the 2nd transaction is confirmed you'll know if you got the name.</p></li></ol><progress-bar .percent="${this.percent}" .randomTo="${this.randomTo}" class="my-4"></progress-bar><div class="my-4 flex justify-center items-center h-9"><dui-button @click="${this.register}" ?disabled="${this.btn.disabled}" class="${E({secondary:this.done})}" ?pending="${this.pending}">${this.btn.title}${D(this.cd,(()=>I`<span class="ml-2">(${this.cd})</span>`),(()=>I`<i class="mdi ml-2 ${E(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i>`))}</dui-button></div><div class="text-center">${D(this.done,(()=>I`<p class="text-green-600">Success!</p>`))} ${D(this.err,(()=>I`<p class="text-red-500">${this.err}</p>`))}</div></div>`:I`${D(this.nameInfo.itsme,(()=>I`<div class="px-3"><dui-button class="secondary" href="${this.detailsLink}">Manage your name <i class="mdi mdi-chevron-right"></i></dui-button></div>`),(()=>I`<div class="px-3">This DOID name is already taken.<dui-link class="mx-1" href="${this.detailsLink}">See Details</dui-link></div>`))}`}};at([C()],dt.prototype,"name",2),at([C({type:Object})],dt.prototype,"nameInfo",2),at([A()],dt.prototype,"done",2),at([A()],dt.prototype,"pending",2),at([A()],dt.prototype,"err",2),at([A()],dt.prototype,"ts",2),at([A()],dt.prototype,"step",2),at([A()],dt.prototype,"tx",2),at([A()],dt.prototype,"commitment",2),at([A()],dt.prototype,"cd",2),at([A()],dt.prototype,"timer",2),dt=at([j("view-name-register")],dt);var ct=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ht=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?lt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&ct(e,s,o),o};let pt=class extends(n(".card{position:relative;display:flex;flex-direction:column;gap:1rem;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}.card:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700;content:attr(idx)}.card.active,.card.done{--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}.card.active:before,.card.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity))}.card.done{border-color:transparent}.card.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}\n")){constructor(){super(...arguments),this.class="",this.index=1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return I`<div class="card h-full ${E(this.$c([this.class]))}" idx="${this.index}"><slot name="title" part="step-title"></slot><slot name="description" part="step-desc"></slot></div>`}};ht([C({type:String})],pt.prototype,"class",2),ht([C({type:String})],pt.prototype,"index",2),pt=ht([j("dui-card")],pt);var gt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,ut=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?mt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&gt(e,s,o),o};let bt=class extends(n(h)){constructor(){super(...arguments),this.model=!1}async close(){this.model=!1,await p(200),this.remove(),this.emit("close")}render(){return setTimeout((()=>{this.model=!0})),I`<div part="dialog-container" class="relative !origin-center z-10 bg-white rounded-xl drop-shadow-lg ${this.model?"-mt-8 opacity-100 visible":"-mt-80 opacity-0 invisible"}" ${M({guard:()=>this.model,properties:["opacity","visibility","margin","transform"],keyframeOptions:{duration:233}})}><slot name="top"><i part="dialog-close" class="absolute flex justify-center items-center right-4 top-4 w-6 h-6 text-2xl cursor-pointer" @click="${this.close}"><i class="mdi mdi-close"></i></i><div part="dialog-header" class="w-full p-4 pr-8 flex justify-between items-center text-base"><slot name="header"></slot></div></slot><slot name="center"><div part="dialog-body" class="p-4"><slot></slot></div></slot><slot name="bottom"><div part="dialog-footer" class="p-4"><slot name="footer"></slot></div></slot></div><div part="dialog-overlay" class="z-0 absolute left-0 top-0 w-full h-full visible bg-black bg-opacity-75 ${this.model?"opacity-75":"opacity-0"}" ${M({guard:()=>this.model})}></div>`}};ut([A()],bt.prototype,"model",2),bt=ut([j("dui-prompt")],bt);var yt=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?wt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&yt(e,s,o),o};let vt=class extends(n(":host::part(dialog-container){min-height:40px}\n")){constructor(){super(...arguments),this.bindBridge=new T(this,a),this.owner=!1,this.coin={},this.name="",this.currentAddr="",this.step=1,this.signatureInfo={},this.pending=!1,this.err="",this.stored={},this.tx=null,this.success=!1,this.dialog=!1,this.showTip=()=>{this.dialog=!0},this.close=()=>{this.dialog=!1},this.getStorage=async()=>await e(`sign.${this.name}`,sessionStorage,!0),this.getStoredInfo=async()=>{const t=await this.getStorage(),e=await t.get();this.stored=e,this.stored?.signature&&(this.step=2)},this.getSignerMessage=async()=>{const t=this.account,e=this.coin.coinType,s=await v(this.name,t,e),i=await this.getStorage(),r={...this.stored,...s};i.set(r),this.stored=r},this.signMessage=async()=>{const t=await this.getStorage(),e=await x(this.msg),s={...this.stored,...e};t.set(s),this.stored=s},this.sign=async()=>{if(this.name&&this.ownerAddress&&this.coin.coinType&&this.account&&this.msg&&!this.isCurrentEqualToDest){this.pending=!0,this.err="";try{await this.signMessage(),this.step=2}catch(t){if(4001===t.code)return;this.err=t.message}finally{this.pending=!1}}},this.setAddr=async()=>{if(this.pending)return;this.pending=!0,this.err="",this.success=!1;const{name:t,coinType:e,dest:s,timestamp:i,nonce:r,signature:o}=this.stored,n=await this.getStorage();try{this.tx=await $(t,e,s,+i,r,o);const a=await this.tx.wait();n.remove(),this.success=a,this.step=3,this.emit("success")}catch(a){this.err=a.message}finally{this.pending=!1,n.remove()}},this.disconnectedCallback=()=>{super.disconnectedCallback(),this.step=1,this.dialog=!1}}get ownerAddress(){return this.stored.source}get dest(){return this.stored.dest}get msg(){return this.stored.message||""}get cookedMsg(){return this.msg.split("\n").map((t=>{const e=(t.match(/^(.+:\s)/)||[])[0]||"";return{title:e,content:t.replace(e,"")}}))}get account(){return a.bridge.account}get coinType(){return this.coin.coinType}get isStep1(){return 1===this.step}get signature(){return this.stored.signature||this.signatureInfo?.signature}get txPending(){return this.tx&&!this.tx?.ignored}get isCurrentEqualToDest(){return this.currentAddr===this.dest?.toLowerCase()}get btnSignDisabled(){return!!this.currentAddr&&(this.pending||this.err||this.isCurrentEqualToDest||this.txPending)}get btnSetDisabled(){return this.pending||this.err||!this.signature||!this.owner||this.txPending}async connectedCallback(){super.connectedCallback(),await this.getStoredInfo(),this.dest==this.account||this.signature||await this.getSignerMessage()}render(){return I`<div class="set-record border border-gray-300 border-dashed pt-2 pb-5 mt-2"><div class="px-3"><div class="border-b-2 flex my-4 px-3 pr-4 space-x-4 justify-between"><div>You are setting <b>${this.coin.name}</b> address to <b class="break-words break-all">${this.dest}</b></div>${D(this.isStep1,(()=>I`<div @click="${this.showTip}"><a href="javascript:void(0)" class="text-blue-400">Change address to set</a></div>${D(this.dialog,(()=>I`<dui-prompt class="min-h-fit" @close="${this.close}"><div class="text-base">Open your wallet and switch to the address you want to set.</div><span slot="bottom"></span></dui-prompt>`))}`))}</div><div>${D(this.pending&&!this.ownerAddress,(()=>I``),(()=>I`<div class="px-3"><h3 class="text-base">Setting an address requires you to complete 2 steps</h3><div class="grid md_grid-cols-2 gap-4 my-4"><dui-card index="1" class="rounded-md ${E({done:this.step>1,active:this.step>=1})}"><div slot="title"><b>SIGN A MESSAGE TO VERIFY YOUR ADDRESS</b></div><div slot="description" class="flex flex-col gap-2"><p>Your wallet will open and following message will be shown:</p><div class="break-words break-all">${D(this.msg,(()=>I`<span class="text-gray-500">Message:</span> ${q(this.cookedMsg,(t=>I`<p><b>${t.title}</b>${t.content}</p>`))}`))}</div></div></dui-card><dui-card index="2" class="rounded-md ${E({done:this.step>2,active:this.step>=2})}"><div slot="title"><b>Complete Setting</b></div><div slot="description" class="flex flex-col gap-2"><p class="break-words">You need to change your wallet back to ${D(!this.owner&&!this.isStep1,(()=>I`${this.ownerAddress}`),(()=>I`the address`))} that owns <b>${this.name}</b></p><p>Click 'set' and your wallet will re-open. Only after the transaction is confirmed your address will be set.</p></div></dui-card></div><div class="mt-4 text-center">${D(this.isStep1,(()=>I`<dui-button sm @click="${this.sign}" ?disabled="${this.btnSignDisabled}" ?pending="${this.pending}">Sign message<i class="mdi ml-2 ${E(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i></dui-button>`),(()=>I`<dui-button sm @click="${this.setAddr}" ?disabled="${this.btnSetDisabled}" ?pending="${this.pending}">Set<i class="mdi ml-2 ${E(this.$c([this.pending?"mdi-loading":""]))}"></i></dui-button>`))}</div></div>`))}</div></div></div>`}};ft([C({type:Boolean})],vt.prototype,"owner",2),ft([C({type:Object})],vt.prototype,"coin",2),ft([C({type:String})],vt.prototype,"name",2),ft([C({type:String})],vt.prototype,"currentAddr",2),ft([A()],vt.prototype,"step",2),ft([A()],vt.prototype,"signatureInfo",2),ft([A()],vt.prototype,"pending",2),ft([A()],vt.prototype,"err",2),ft([A()],vt.prototype,"stored",2),ft([A()],vt.prototype,"tx",2),ft([A()],vt.prototype,"success",2),ft([A()],vt.prototype,"dialog",2),vt=ft([j("doid-set-record-wallet")],vt);var xt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,kt=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?$t(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&xt(e,s,o),o};let St=class extends(n(".edit{margin-top:0;margin-bottom:0}.edit .addr_edit{width:14rem}@media (min-width: 1024px){.edit .addr_edit{width:24rem}}\n")){constructor(){super(...arguments),this.bindBridge=new T(this,a),this.item={},this.owner=!1,this.name="",this.tip={addr:""},this.err={addr:"",tx:""},this.pending=!1,this.addrValid=!1,this.mode="",this.stored={},this.storage={},this.listener=t=>{this.reset()},this.reset=(t=!1)=>{this.mode="",this.stored={},t&&this.storage.remove()},this.setAddr=async()=>{if(this.isEditing)return this.reset(!0);g.emit("addr-edit"),this.mode="edit",this.storage.set({...this.coinType,source:this.address||this.account}),m(),await this.checkEditInfo()},this.onSuccess=t=>{this.reset(),this.emit("success")},this.disconnectedCallback=async()=>{super.disconnectedCallback(),this.reset(),g.off("addr-edit",this.listener),this.storage.off()}}get account(){return a.bridge.account}get isOwner(){return 1==this.owner}get isEditing(){return"edit"===this.mode||this.isStored}get isStored(){return!!this.stored?.source&&this.stored?.coinType===this.coinType.coinType}get editDisabled(){return this.pending}get address(){return this.item.address}get coinType(){return{name:this.item.name,coinType:this.item.coinType}}async checkEditInfo(){const t=await this.storage.get();this.stored=t}async connectedCallback(){super.connectedCallback(),this.storage=await e(`sign.${this.name}`,sessionStorage,!0),await this.checkEditInfo(),g.on("addr-edit",this.listener),this.storage.on(this.listener)}render(){return I`<div class="flex items-center ${this.mode}"><div class="addr_name w-14 lg_w-16 text-gray-400">${this.coinType.name}</div><div class="grow flex items-center">${D(this.address,(()=>I`<dui-address avatar copy .address="${this.address}"></dui-address>`),(()=>I`<span class="text-gray-400">Not set</span>`))} ${D(this.isOwner,(()=>I`<dui-button @click="${this.setAddr}" sm icon class="ml-1" .disabled="${this.editDisabled}"><i class="mdi ${E({"mdi-pencil-off-outline":this.isEditing,"mdi-pencil-outline":!this.isEditing})}"></i></dui-button>`))}</div></div>${D(this.isEditing,(()=>I`<doid-set-record-wallet .name="${this.name}" .coin="${this.coinType}" .owner="${this.isOwner}" .currentAddr="${this.address}" @success="${this.onSuccess}"></doid-set-record-wallet>`))}`}};kt([C({type:Object})],St.prototype,"item",2),kt([C({type:Boolean})],St.prototype,"owner",2),kt([C({type:String})],St.prototype,"name",2),kt([A()],St.prototype,"tip",2),kt([A()],St.prototype,"err",2),kt([A()],St.prototype,"pending",2),kt([A()],St.prototype,"addrValid",2),kt([A()],St.prototype,"mode",2),kt([A()],St.prototype,"stored",2),St=kt([j("doid-addr-item")],St);var Ot=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,It=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?Tt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&Ot(e,s,o),o};let Ct=class extends(n(".infos:not(:first-child){margin-top:.5rem;border-top-width:1px;border-style:dashed;--tw-border-opacity: 1;border-color:rgba(209,213,219,var(--tw-border-opacity));padding-top:.5rem}.infos>li{display:flex;gap:1rem;padding-top:.5rem;padding-bottom:.5rem}.infos>li>strong{display:block;width:8rem;flex-shrink:0;font-weight:500;text-transform:uppercase}@media (min-width: 1024px){.infos>li>strong{width:9rem}}.infos>li .info-cnt{flex-shrink:1}.infos>li.single{align-items:center;padding-top:0;padding-bottom:0}.infos>li.single .info-cnt{display:flex;align-items:center}.infos>li.wrap{flex-wrap:wrap}@media (min-width: 1024px){.infos>li.wrap{flex-wrap:nowrap}}.infos>li.wrap>storng{width:100%}@media (min-width: 768px){.infos>li.wrap>storng{width:8rem}}@media (min-width: 1024px){.infos>li.wrap>storng{width:9rem}}\n")){constructor(){super(...arguments),this.bindBridge=new T(this,a),this.name="",this.pending=!1,this.ts=0,this.records=[],this.fetchRecords=async()=>{if(!this.notOwned){this.pending=!0;try{this.records=await k(this.info.name)}catch(t){}this.pending=!1,this.ts++}},this.onSuccess=()=>{this.fetchRecords()}}get account(){return a.bridge.account}get empty(){return this.ts&&!this.records?.length}get notOwned(){return this.info.owner===u}get details(){const t=this.info.owner;return[{title:"Registrant",address:t},{title:"Controller",address:t}].map((t=>(t.link=`/address/${t.address}`,t)))}connectedCallback(){super.connectedCallback(),this.fetchRecords()}render(){return I`<div class="px-3"><ul class="infos">${q(this.details,(t=>I`<li class="single"><strong>${t.title}</strong><div class="info-cnt">${D(this.notOwned,(()=>I`Not owned`),(()=>I`<dui-address avatar copy .address="${t.address}" href="${t.link}"></dui-address>`))}</div></li>`))}</ul><ul class="infos"><li class="wrap"><strong>Addresses</strong><div class="info-cnt">${D(this.notOwned,(()=>I`No address found`))} ${D(!this.ts&&this.pending,(()=>I`<i class="mdi mdi-loading"></i>`))} ${D(this.empty,(()=>I`<p class="text-red-500">Something went wrong</p>`),(()=>I`<div class="doid-addr-items -mt-1 flex justify-start items-start flex-col gap-4"></div>${q(this.records,(t=>I`${B(t.address,I`<doid-addr-item key="${t.coinType}" .item="${t}" .name="${this.name}" .owner="${this.info.itsme}" @success="${this.onSuccess}"></doid-addr-item>`)}`))}`))}</div></li></ul></div>`}};It([C({type:Object})],Ct.prototype,"info",2),It([C({type:String})],Ct.prototype,"name",2),It([A()],Ct.prototype,"pending",2),It([A()],Ct.prototype,"ts",2),It([A()],Ct.prototype,"records",2),Ct=It([j("view-name-details")],Ct);var jt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Pt=(t,e,s,i)=>{for(var r,o=i>1?void 0:i?Dt(e,s):e,n=t.length-1;n>=0;n--)(r=t[n])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&jt(e,s,o),o};let At=t("ViewName",class extends(n(":host::part(dui-nav){display:flex;margin-bottom:-2px}\n")){constructor(){super(...arguments),this.name="",this.action="",this.pending=!1,this.disconnected=!1,this.nameInfo=null,this.goto=()=>{b(`/name/${y(this.name)}/${this.action}`)},this.check=async(t,e=!1)=>{if(this.pending)return;if(await this.isDisconnected(e))return;this.pending=!0;const s=y(this.name);if(this.name!==s)this.name=s;else try{if(await this.isDisconnected(!0))return;if(this.nameInfo=await S(this.name),await this.isDisconnected(!0))return;this.action||(this.action=this.nameInfo.available?"register":"details")}catch(i){this.nameInfo=null}this.goto(),this.pending=!1}}get inReg(){return this.nameInfo&&"register"===this.action}get inDetails(){return this.nameInfo&&"details"===this.action}get empty(){return!this.name}connectedCallback(){super.connectedCallback(),this.check(null,!0),g.on("router-change",this.check)}disconnectedCallback(){super.disconnectedCallback(),g.off("router-change",this.check)}render(){return I`<div class="view-name"><div class="dui-container"><dui-ns-search .text="${this.name}" @search="${t=>l(`/search/${t.detail}`)}" placeholder="Search names"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${D(this.name,(()=>I`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between items-end"><div><b class="text-lg">${this.name}</b> ${D("doid"===this.name,(()=>I`<em>(Registrant)</em>`))}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`/name/${this.name}/register`}" alias="${`/name/${this.name}`}" exact nav>Register</dui-link><dui-link href="${`/name/${this.name}/details`}" exact nav>Details</dui-link></dui-nav></div></div>`))} ${D(this.inReg,(()=>I`<view-name-register .name="${this.name}" .nameInfo="${this.nameInfo}"></view-name-register>`))} ${D(this.inDetails,(()=>I`<view-name-details .name="${this.name}" .info="${this.nameInfo}"></view-name-details>`))}</div></div>`}});Pt([C()],At.prototype,"name",2),Pt([C()],At.prototype,"action",2),Pt([A()],At.prototype,"pending",2),Pt([A()],At.prototype,"disconnected",2),Pt([A()],At.prototype,"nameInfo",2),t("ViewName",At=Pt([j("view-name")],At))}}}));
