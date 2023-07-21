import{v as Ce,J as ye}from"../chunks/index.52abe46f.js";import{S as Ge,a as Ke,I as q,g as qe,f as Fe,b as we,c as le,s as H,i as _e,d as Q,e as G,P as He,h as Qe}from"../chunks/singletons.a5f86ac7.js";function et(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function tt(t){return t.split("%25").map(decodeURI).join("%25")}function nt(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const at=["href","pathname","search","searchParams","toString","toJSON"];function rt(t,o){const l=new URL(t);for(const c of at){let f=l[c];Object.defineProperty(l,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return ot(l),l}function ot(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const it="/__data.json";function st(t){return t.replace(/\/$/,"")+it}function ze(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Me(t,o){const l=JSON.stringify(o);try{sessionStorage[t]=l}catch{}}function ct(...t){let o=5381;for(const l of t)if(typeof l=="string"){let c=l.length;for(;c;)o=o*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(Se(t)),fe(t,o));const te=new Map;function lt(t,o){const l=Se(t,o),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:f,...d}=JSON.parse(c.textContent),k=c.getAttribute("data-ttl");return k&&te.set(l,{body:f,init:d,ttl:1e3*Number(k)}),Promise.resolve(new Response(f,d))}return fe(t,o)}function ft(t,o,l){if(te.size>0){const c=Se(t,l),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(f.body,f.init);te.delete(c)}}return fe(o,l)}function Se(t,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${ct(...f)}"]`}return c}const ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function dt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ht(t).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const k=c.split(/\[(.+?)\](?!\])/);return"/"+k.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return ve(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ve(String.fromCharCode(...w.slice(2).split("-").map(A=>parseInt(A,16))));const p=ut.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,$,S,U]=p;return o.push({name:S,matcher:U,optional:!!N,rest:!!$,chained:$?y===1&&k[0]==="":!1}),$?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(w)}).join("")}).join("")}/?$`),params:o}}function pt(t){return!/^\([^)]+\)$/.test(t)}function ht(t){return t.slice(1).split("/").filter(pt)}function gt(t,o,l){const c={},f=t.slice(1);let d=0;for(let k=0;k<o.length;k+=1){const u=o[k],w=f[k-d];if(u.chained&&u.rest&&d){c[u.name]=f.slice(k-d,k+1).filter(y=>y).join("/"),d=0;continue}if(w===void 0){u.rest&&(c[u.name]="");continue}if(!u.matcher||l[u.matcher](w)){c[u.name]=w;const y=o[k+1],p=f[k+1];y&&!y.rest&&y.optional&&p&&(d=0);continue}if(u.optional&&u.chained){d++;continue}return}if(!d)return c}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function mt({nodes:t,server_loads:o,dictionary:l,matchers:c}){const f=new Set(o);return Object.entries(l).map(([u,[w,y,p]])=>{const{pattern:N,params:$}=dt(u),S={id:u,exec:U=>{const A=N.exec(U);if(A)return gt(A,$,c)},errors:[1,...p||[]].map(U=>t[U]),layouts:[0,...y||[]].map(k),leaf:d(w)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function d(u){const w=u<0;return w&&(u=~u),[w,t[u]]}function k(u){return u===void 0?u:[f.has(u),t[u]]}}let ee=class{constructor(o,l){this.status=o,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Je=class{constructor(o,l){this.status=o,this.location=l}};async function yt(t){var o;for(const l in t)if(typeof((o=t[l])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,f])=>[c,await f])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const wt=-1,_t=-2,vt=-3,bt=-4,Et=-5,St=-6;function kt(t,o){if(typeof t=="number")return f(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const l=t,c=Array(l.length);function f(d,k=!1){if(d===wt)return;if(d===vt)return NaN;if(d===bt)return 1/0;if(d===Et)return-1/0;if(d===St)return-0;if(k)throw new Error("Invalid input");if(d in c)return c[d];const u=l[d];if(!u||typeof u!="object")c[d]=u;else if(Array.isArray(u))if(typeof u[0]=="string"){const w=u[0],y=o==null?void 0:o[w];if(y)return c[d]=y(f(u[1]));switch(w){case"Date":c[d]=new Date(u[1]);break;case"Set":const p=new Set;c[d]=p;for(let S=1;S<u.length;S+=1)p.add(f(u[S]));break;case"Map":const N=new Map;c[d]=N;for(let S=1;S<u.length;S+=2)N.set(f(u[S]),f(u[S+1]));break;case"RegExp":c[d]=new RegExp(u[1],u[2]);break;case"Object":c[d]=Object(u[1]);break;case"BigInt":c[d]=BigInt(u[1]);break;case"null":const $=Object.create(null);c[d]=$;for(let S=1;S<u.length;S+=2)$[u[S]]=f(u[S+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(u.length);c[d]=w;for(let y=0;y<u.length;y+=1){const p=u[y];p!==_t&&(w[y]=f(p))}}else{const w={};c[d]=w;for(const y in u){const p=u[y];w[y]=f(p)}}return c[d]}return f(0)}function ke(t){const o=new Set(t);function l(c,f){if(c)for(const d in c){if(d[0]==="_"||o.has(d))continue;const k=Rt(d,f==null?void 0:f.slice(f.lastIndexOf(".")))??`valid exports are ${t.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${f?` in ${f}`:""} (${k})`)}}return l}function Rt(t,o=".js"){let l=[];if(Be.includes(t)&&l.push(`+page${o}`),Ye.includes(t)&&l.push(`+page.server${o}`),We.includes(t)&&l.push(`+server${o}`),l.length>0)return`'${t}' is a valid export in ${l.join(" or ")}`}const Be=["load","prerender","csr","ssr","trailingSlash","config"],Ye=["load","prerender","csr","ssr","actions","trailingSlash","config"],We=["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config"];ke(Be);ke(Ye);ke(We);function It(t){return t.filter(o=>o!=null)}const K=ze(Ge)??{},Z=ze(Ke)??{};function be(t){K[t]=Q()}function Lt(t,o){var Te;const l=mt(t),c=t.nodes[0],f=t.nodes[1];c(),f();const d=document.documentElement,k=[],u=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},N=!1,$=!1,S=!0,U=!1,A=!1,z=!1,M=!1,F,x=(Te=history.state)==null?void 0:Te[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const ue=K[x];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let J,ne,ae;async function Re(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);w=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);F.$set(a.props)}}function Ie(e){u.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=u.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,i;(i=(s=u[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Oe(){be(x),Me(Ge,K),Ie(x),Me(Ke,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,g){return typeof e=="string"&&(e=new URL(e,qe(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:g,accepted:()=>{i&&(M=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return w={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function oe(...e){const r=l.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Ae(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),J=e.props.page,F=new t.root({target:o,props:{...e.props,stores:H,components:u},hydrate:!0}),Le(x);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),$=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:i,form:h}){let g="never";for(const v of r)(v==null?void 0:v.slash)!==void 0&&(g=v.slash);e.pathname=et(e.pathname,g),e.search=e.search;const b={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:i},props:{constructors:It(r).map(v=>v.node.component)}};h!==void 0&&(b.props.form=h);let m={},R=!J,O=0;for(let v=0;v<Math.max(r.length,p.branch.length);v+=1){const _=r[v],j=p.branch[v];(_==null?void 0:_.data)!==(j==null?void 0:j.data)&&(R=!0),_&&(m={...m,..._.data},R&&(b.props[`data_${O}`]=m),O+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||h!==void 0&&h!==J.form||R)&&(b.props.page={error:s,params:n,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(e),form:h??null,data:R?m:J.data}),b}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:i}){var m,R,O;let h=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((m=b.universal)!=null&&m.load){let P=function(..._){for(const j of _){const{href:D}=new URL(j,r);g.dependencies.add(D)}};const v={route:{get id(){return g.route=!0,s.id}},params:new Proxy(a,{get:(_,j)=>(g.params.add(j),_[j])}),data:(i==null?void 0:i.data)??null,url:rt(r,()=>{g.url=!0}),async fetch(_,j){let D;_ instanceof Request?(D=_.url,j={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...j}):D=_;const C=new URL(D,r);return P(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),$?ft(D,C.href,j):lt(D,j)},setHeaders:()=>{},depends:P,parent(){return g.parent=!0,n()}};h=await b.universal.load.call(null,v)??null,h=h?await yt(h):null}return{node:b,loader:e,server:i,universal:(R=b.universal)!=null&&R.load?{type:"data",data:h,uses:g}:null,data:h??(i==null?void 0:i.data)??null,slash:((O=b.universal)==null?void 0:O.trailingSlash)??(i==null?void 0:i.slash)}}function $e(e,n,r,a,s){if(M)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(k.some(h=>h(new URL(i))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:i,layouts:h,leaf:g}=s,b=[...h,g];i.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let m=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,O=p.route?s.id!==p.route.id:!1;let P=!1;const v=b.map((E,L)=>{var V;const I=p.branch[L],T=!!(E!=null&&E[0])&&((I==null?void 0:I.loader)!==E[1]||$e(P,O,R,(V=I.server)==null?void 0:V.uses,a));return T&&(P=!0),T});if(v.some(Boolean)){try{m=await Ve(r,v)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(m.type==="redirect")return m}const _=m==null?void 0:m.nodes;let j=!1;const D=b.map(async(E,L)=>{var ge;if(!E)return;const I=p.branch[L],T=_==null?void 0:_[L];if((!T||T.type==="skip")&&E[1]===(I==null?void 0:I.loader)&&!$e(j,O,R,(ge=I.universal)==null?void 0:ge.uses,a))return I;if(j=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var De;const Ne={};for(let me=0;me<L;me+=1)Object.assign(Ne,(De=await D[me])==null?void 0:De.data);return Ne},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?I==null?void 0:I.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<b.length;E+=1)if(b[E])try{C.push(await D[E])}catch(L){if(L instanceof Je)return{type:"redirect",location:L.location};let I=500,T;if(_!=null&&_.includes(L))I=L.status??I,T=L.error;else if(L instanceof ee)I=L.status,T=L.body;else{if(await H.updated.check())return await B(r);T=await X(L,{params:a,url:r,route:{id:s.id}})}const V=await Ue(E,C,i);return V?await Y({url:r,params:a,branch:C.slice(0,V.idx).concat(V.node),status:I,error:T,route:s}):await je(r,{id:s.id},T,I)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let i=null;if(t.server_loads[0]===0)try{const m=await Ve(r,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;i=m.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||N)&&await B(r)}const g=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),b={node:await f(),loader:f,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[g,b],status:e,error:n,route:null})}function W(e,n){if(_e(e,G))return;const r=se(e);for(const a of l){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:nt(s),url:e}}}function se(e){return tt(e.pathname.slice(G.length)||"/")}function xe({url:e,type:n,intent:r,delta:a}){var g,b;let s=!1;const i={from:{params:p.params,route:{id:((g=p.route)==null?void 0:g.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return A||y.before_navigate.forEach(m=>m(h)),s?null:i}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:g={},accepted:b,blocked:m}){var D,C,E;const R=W(e,!1),O=xe({url:e,type:i,delta:h,intent:R});if(!O){m();return}const P=x;b(),A=!0,$&&H.navigating.set(O),ne=g;let v=R&&await he(R);if(!v){if(_e(e,G))return await B(e);v=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==g)return!1;if(v.type==="redirect")if(a.length>10||a.includes(e.pathname))v=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(v.location,e).href,{},[...a,e.pathname],g),!1;else((D=v.props.page)==null?void 0:D.status)>=400&&await H.updated.check()&&await B(e);if(k.length=0,M=!1,U=!0,be(P),Ie(P),(C=v.props.page)!=null&&C.url&&v.props.page.url.pathname!==e.pathname&&(e.pathname=(E=v.props.page)==null?void 0:E.url.pathname),s){const L=s.replaceState?0:1;if(s.state[q]=x+=L,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let I=x+1;for(;Z[I]||K[I];)delete Z[I],delete K[I],I+=1}}w=null,$?(p=v.state,v.props.page&&(v.props.page.url=e),F.$set(v.props)):Ae(v);const{activeElement:_}=document;if(await ye(),S){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const j=document.activeElement!==_&&document.activeElement!==document.body;!r&&!j&&await Ee(),S=!0,v.props.page&&(J=v.props.page),A=!1,y.after_navigate.forEach(L=>L(O)),H.navigating.set(null),U=!1}async function je(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!N?await ie({status:a,error:r,url:e,route:n}):await B(e)}function B(e){return location.href=e.href,new Promise(()=>{})}function Ze(){let e;d.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(i){a(i.composedPath()[0],1)}d.addEventListener("mousedown",n),d.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const g=Fe(i,d);if(!g)return;const{url:b,external:m,download:R}=we(g,G);if(m||R)return;const O=le(g);if(!O.reload)if(h<=O.preload_data){const P=W(b,!1);P&&Pe(P)}else h<=O.preload_code&&oe(se(b))}function s(){r.disconnect();for(const i of d.querySelectorAll("a")){const{url:h,external:g,download:b}=we(i,G);if(g||b)continue;const m=le(i);m.reload||(m.preload_code===He.viewport&&r.observe(i),m.preload_code===He.eager&&oe(se(h)))}}y.after_navigate.push(s),s()}function X(e,n){return e instanceof ee?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ce(()=>(y.after_navigate.push(e),()=>{const n=y.after_navigate.indexOf(e);y.after_navigate.splice(n,1)}))},before_navigate:e=>{Ce(()=>(y.before_navigate.push(e),()=>{const n=y.before_navigate.indexOf(e);y.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(U||!$)&&(S=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")k.push(e);else{const{href:n}=new URL(e,location.href);k.push(r=>r.href===n)}return Re()},invalidateAll:()=>(M=!0,Re()),preload_data:async e=>{const n=new URL(e,qe(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Pe(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const i=await Y({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=i.state,F.$set(i.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...J,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Oe(),!A){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(e=navigator.connection)!=null&&e.saveData||Ze(),d.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Fe(n.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:i,download:h}=we(r,G);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const g=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(s||g.reload){xe({url:a,type:"link"})?A=!0:n.preventDefault();return}const[m,R]=a.href.split("#");if(R!==void 0&&m===location.href.split("#")[0]){if(z=!0,be(x),p.url=a,H.page.set({...J,url:a}),H.page.notify(),!g.replace_state)return;z=!1,n.preventDefault()}ce({url:a,scroll:g.noscroll?Q():null,keepfocus:g.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:g.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),d.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(i,G))return;const h=n.target,{keep_focus:g,noscroll:b,reload:m,replace_state:R}=le(h);if(m)return;n.preventDefault(),n.stopPropagation();const O=new FormData(h),P=a==null?void 0:a.getAttribute("name");P&&O.append(P,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(O).toString(),ce({url:i,scroll:b?Q():null,keepfocus:g??!1,redirect_chain:[],details:{state:{},replaceState:R??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===x)return;const a=K[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){K[x]=Q(),x=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-x;let i=!1;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=n.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Le(x)}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:h})=>{N=!0;const g=new URL(location.href);({params:a={},route:s={id:null}}=W(g,!1)||{});let b;try{const m=r.map(async(R,O)=>{const P=i[O];return P!=null&&P.uses&&(P.uses=Xe(P.uses)),de({loader:t.nodes[R],url:g,params:a,route:s,parent:async()=>{const v={};for(let _=0;_<O;_+=1)Object.assign(v,(await m[_]).data);return v},server_data_node:pe(P)})});b=await Y({url:g,params:a,branch:await Promise.all(m),status:e,error:n,form:h,route:l.find(({id:R})=>R===s.id)??null})}catch(m){if(m instanceof Je){await B(new URL(m.location,location.href));return}b=await ie({status:m instanceof ee?m.status:500,error:await X(m,{url:g,params:a,route:s}),url:g,route:s})}Ae(b)}}}async function Ve(t,o){const l=new URL(t);l.pathname=st(t.pathname),l.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await fe(l.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var p;const d=new Map,k=c.body.getReader(),u=new TextDecoder;function w(N){return kt(N,{Promise:$=>new Promise((S,U)=>{d.set($,{fulfil:S,reject:U})})})}let y="";for(;;){const{done:N,value:$}=await k.read();if(N&&!y)break;for(y+=!$&&y?`
`:u.decode($);;){const S=y.indexOf(`
`);if(S===-1)break;const U=JSON.parse(y.slice(0,S));if(y=y.slice(S+1),U.type==="redirect")return f(U);if(U.type==="data")(p=U.nodes)==null||p.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Xe(A.uses),A.data=w(A.data))}),f(U);else if(U.type==="chunk"){const{id:A,data:z,error:M}=U,F=d.get(A);d.delete(A),M?F.reject(w(M)):F.fulfil(w(z))}}}})}function Xe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,l=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function Ut(t,o,l){const c=Lt(t,o);Qe({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Ut as start};
