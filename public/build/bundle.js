var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,n,e){t.$$.on_destroy.push(c(n,e))}function a(t,n,e,o){if(t){const s=d(t,n,e,o);return t[0](s)}}function d(t,e,o,s){return t[1]&&s?n(o.ctx.slice(),t[1](s(e))):o.ctx}function u(t,n,e,o,s,i,r){const c=function(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}(n,o,s,i);if(c){const s=d(n,e,o,r);t.p(s,c)}}function p(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function E(){return w("")}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function S(t,n,e){t.classList[e?"add":"remove"](n)}let j;function x(t){j=t}function y(){if(!j)throw new Error("Function called outside component initialization");return j}function O(t){y().$$.on_mount.push(t)}function I(t,n){y().$$.context.set(t,n)}function N(t){return y().$$.context.get(t)}const T=[],v=[],C=[],k=[],R=Promise.resolve();let A=!1;function D(t){C.push(t)}let L=!1;const P=new Set;function M(){if(!L){L=!0;do{for(let t=0;t<T.length;t+=1){const n=T[t];x(n),H(n.$$)}for(x(null),T.length=0;v.length;)v.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];P.has(n)||(P.add(n),n())}C.length=0}while(T.length);for(;k.length;)k.pop()();A=!1,L=!1,P.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const U=new Set;let K;function Y(){K={r:0,c:[],p:K}}function F(){K.r||s(K.c),K=K.p}function G(t,n){t&&t.i&&(U.delete(t),t.i(n))}function z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),K.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const B="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function V(t,n){const e={},o={},s={$$scope:1};let i=t.length;for(;i--;){const r=t[i],c=n[i];if(c){for(const t in r)t in c||(o[t]=1);for(const t in c)s[t]||(e[t]=c[t],s[t]=1);t[i]=c}else for(const t in r)s[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function J(t,n,o){const{fragment:r,on_mount:c,on_destroy:l,after_update:a}=t.$$;r&&r.m(n,o),D((()=>{const n=c.map(e).filter(i);l?l.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(D)}function q(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Q(t,n){-1===t.$$.dirty[0]&&(T.push(t),A||(A=!0,R.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Z(n,e,i,r,c,l,a=[-1]){const d=j;x(n);const u=e.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let f=!1;if(p.ctx=i?i(n,u,((t,e,...o)=>{const s=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),f&&Q(n,t)),e})):[],p.update(),f=!0,s(p.before_update),p.fragment=!!r&&r(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();e.intro&&G(n.$$.fragment),J(n,e.target,e.anchor),M()}x(d)}class tt{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function et(n,e=t){let o;const s=[];function i(t){if(r(n,t)&&(n=t,o)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const e=s[t];e[1](),nt.push(e,n)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(r,c=t){const l=[r,c];return s.push(l),1===s.length&&(o=e(i)||t),r(n),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function ot(n,e,o){const r=!Array.isArray(n),l=r?[n]:n,a=e.length<2;return{subscribe:et(o,(n=>{let o=!1;const d=[];let u=0,p=t;const f=()=>{if(u)return;p();const o=e(r?d[0]:d,n);a?n(o):p=i(o)?o:t},_=l.map(((t,n)=>c(t,(t=>{d[n]=t,u&=~(1<<n),o&&f()}),(()=>{u|=1<<n}))));return o=!0,f(),function(){s(_),p()}})).subscribe}}const st={},it={};function rt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const ct=function(t,n){const e=[];let o=rt(t);return{get location(){return o},listen(n){e.push(n);const s=()=>{o=rt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",s),()=>{t.removeEventListener("popstate",s);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:s,replace:i=!1}={}){s={...s,key:Date.now()+""};try{i?t.history.replaceState(s,null,n):t.history.pushState(s,null,n)}catch(e){t.location[i?"replace":"assign"](n)}o=rt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,s,i){const[r,c=""]=i.split("?");n++,e.push({pathname:r,search:c}),o.push(t)},replaceState(t,s,i){const[r,c=""]=i.split("?");e[n]={pathname:r,search:c},o[n]=t}}}}()),lt=/^:(.+)/;function at(t){return"*"===t[0]}function dt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function ut(t){return t.replace(/(^\/+|\/+$)/g,"")}function pt(t,n){return{route:t,score:t.default?0:dt(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return lt.test(t)}(n)?at(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function ft(t,n){let e,o;const[s]=n.split("?"),i=dt(s),r=""===i[0],c=function(t){return t.map(pt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,s=c.length;t<s;t++){const s=c[t].route;let l=!1;if(s.default){o={route:s,params:{},uri:n};continue}const a=dt(s.path),d={},u=Math.max(i.length,a.length);let p=0;for(;p<u;p++){const t=a[p],n=i[p];if(void 0!==t&&at(t)){d["*"===t?"*":t.slice(1)]=i.slice(p).map(decodeURIComponent).join("/");break}if(void 0===n){l=!0;break}let e=lt.exec(t);if(e&&!r){const t=decodeURIComponent(n);d[e[1]]=t}else if(t!==n){l=!0;break}}if(!l){e={route:s,params:d,uri:"/"+i.slice(0,p).join("/")};break}}return e||o||null}function _t(t,n){return`${ut("/"===n?t:`${ut(t)}/${ut(n)}`)}/`}function ht(t){let n;const e=t[9].default,o=a(e,t,t[8],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[n]){o&&o.p&&256&n&&u(o,e,t,t[8],n,null,null)},i(t){n||(G(o,t),n=!0)},o(t){z(o,t),n=!1},d(t){o&&o.d(t)}}}function mt(t,n,e){let o,s,i,{$$slots:r={},$$scope:c}=n,{basepath:a="/"}=n,{url:d=null}=n;const u=N(st),p=N(it),f=et([]);l(t,f,(t=>e(7,i=t)));const _=et(null);let h=!1;const m=u||et(d?{pathname:d}:ct.location);l(t,m,(t=>e(6,s=t)));const g=p?p.routerBase:et({path:a,uri:a});l(t,g,(t=>e(5,o=t)));const w=ot([g,_],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:s}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:s}}));return u||(O((()=>ct.listen((t=>{m.set(t.location)})))),I(st,m)),I(it,{activeRoute:_,base:g,routerBase:w,registerRoute:function(t){const{path:n}=o;let{path:e}=t;if(t._path=e,t.path=_t(n,e),"undefined"==typeof window){if(h)return;const n=function(t,n){return ft([t],n)}(t,s.pathname);n&&(_.set(n),h=!0)}else f.update((n=>(n.push(t),n)))},unregisterRoute:function(t){f.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,a=t.basepath),"url"in t&&e(4,d=t.url),"$$scope"in t&&e(8,c=t.$$scope)},t.$$.update=()=>{if(32&t.$$.dirty){const{path:t}=o;f.update((n=>(n.forEach((n=>n.path=_t(t,n._path))),n)))}if(192&t.$$.dirty){const t=ft(i,s.pathname);_.set(t)}},[f,m,g,a,d,o,s,i,c,r]}class gt extends tt{constructor(t){super(),Z(this,t,mt,ht,r,{basepath:3,url:4})}}const wt=t=>({params:4&t,location:16&t}),bt=t=>({params:t[2],location:t[4]});function Et(t){let n,e,o,s;const i=[St,$t],r=[];function c(t,n){return null!==t[0]?0:1}return n=c(t),e=r[n]=i[n](t),{c(){e.c(),o=E()},m(t,e){r[n].m(t,e),_(t,o,e),s=!0},p(t,s){let l=n;n=c(t),n===l?r[n].p(t,s):(Y(),z(r[l],1,1,(()=>{r[l]=null})),F(),e=r[n],e?e.p(t,s):(e=r[n]=i[n](t),e.c()),G(e,1),e.m(o.parentNode,o))},i(t){s||(G(e),s=!0)},o(t){z(e),s=!1},d(t){r[n].d(t),t&&h(o)}}}function $t(t){let n;const e=t[10].default,o=a(e,t,t[9],bt);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,n){o&&o.p&&532&n&&u(o,e,t,t[9],n,wt,bt)},i(t){n||(G(o,t),n=!0)},o(t){z(o,t),n=!1},d(t){o&&o.d(t)}}}function St(t){let e,o,s;const i=[{location:t[4]},t[2],t[3]];var r=t[0];function c(t){let e={};for(let t=0;t<i.length;t+=1)e=n(e,i[t]);return{props:e}}return r&&(e=new r(c())),{c(){e&&X(e.$$.fragment),o=E()},m(t,n){e&&J(e,t,n),_(t,o,n),s=!0},p(t,n){const s=28&n?V(i,[16&n&&{location:t[4]},4&n&&W(t[2]),8&n&&W(t[3])]):{};if(r!==(r=t[0])){if(e){Y();const t=e;z(t.$$.fragment,1,0,(()=>{q(t,1)})),F()}r?(e=new r(c()),X(e.$$.fragment),G(e.$$.fragment,1),J(e,o.parentNode,o)):e=null}else r&&e.$set(s)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&h(o),e&&q(e,t)}}}function jt(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&Et(t);return{c(){o&&o.c(),n=E()},m(t,s){o&&o.m(t,s),_(t,n,s),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&G(o,1)):(o=Et(t),o.c(),G(o,1),o.m(n.parentNode,n)):o&&(Y(),z(o,1,1,(()=>{o=null})),F())},i(t){e||(G(o),e=!0)},o(t){z(o),e=!1},d(t){o&&o.d(t),t&&h(n)}}}function xt(t,e,o){let s,i,{$$slots:r={},$$scope:c}=e,{path:a=""}=e,{component:d=null}=e;const{registerRoute:u,unregisterRoute:f,activeRoute:_}=N(it);l(t,_,(t=>o(1,s=t)));const h=N(st);l(t,h,(t=>o(4,i=t)));const m={path:a,default:""===a};let g={},w={};var b;return u(m),"undefined"!=typeof window&&(b=()=>{f(m)},y().$$.on_destroy.push(b)),t.$$set=t=>{o(13,e=n(n({},e),p(t))),"path"in t&&o(8,a=t.path),"component"in t&&o(0,d=t.component),"$$scope"in t&&o(9,c=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&s&&s.route===m&&o(2,g=s.params);{const{path:t,component:n,...s}=e;o(3,w=s)}},e=p(e),[d,s,g,w,i,_,h,m,a,c,r]}class yt extends tt{constructor(t){super(),Z(this,t,xt,jt,r,{path:8,component:0})}}const Ot=[{text:"Start",style:"font-size: 52px; top: 8%; left: 15%;"},{text:"Creating",style:"font-size: 40px; top: 18%; left: 10%;"},{text:"Games.",style:"font-size: 46px; top: 14%; left: 12%;"}];function It(n){let e,o,s,i,r;return{c(){e=g("main"),o=g("section"),s=w(n[1]),$(o,"class","sign-text svelte-16xh9m2"),$(o,"style",n[2]),$(e,"class","direciton-sign-component svelte-16xh9m2"),S(e,"active",n[0])},m(t,c){var l,a,d,u;_(t,e,c),f(e,o),f(o,s),i||(l=e,a="click",d=n[6],l.addEventListener(a,d,u),r=()=>l.removeEventListener(a,d,u),i=!0)},p(t,[n]){1&n&&S(e,"active",t[0])},i:t,o:t,d(t){t&&h(e),i=!1,r()}}}function Nt(t,n,e){let o,s,{index:i=-1}=n,{text:r,style:c}=Ot[i]||{},{selectedIndex:a}=N("sign-select");return l(t,a,(t=>e(5,s=t))),t.$$set=t=>{"index"in t&&e(4,i=t.index)},t.$$.update=()=>{48&t.$$.dirty&&e(0,o=i===s)},[o,r,c,a,i,s,function(n){!function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}(t,n)}]}class Tt extends tt{constructor(t){super(),Z(this,t,Nt,It,r,{index:4})}}function vt(n){let e;return{c(){e=g("main"),$(e,"class","svelte-32eov7")},m(t,n){_(t,e,n)},p:t,i:t,o:t,d(t){t&&h(e)}}}class Ct extends tt{constructor(t){super(),Z(this,t,null,vt,r,{})}}const kt=[{intro:"with a fresh Discord server.",list:["Give it a name.",'<a href="https://discord.com/oauth2/authorize?client_id=791862018113798154&scope=bot&permissions=93264" target="_blank">Invite the bot</a> to your new server.',"Celebrate! You took the 1st step 🎉"],marginTop:"-1%"},{intro:"a project is a breeze with bot commands",list:['<span class="command">$start</span> creates the text channels you need','<strike><span class="command">$example</span> provides some MoonScript, images, and sounds to play with</strike> (Under construction!)','<span class="command">$howl</span> shares a link of your current werewolf.dev project'],marginTop:"5%"},{intro:'You just created one. <span style="color: white">You took the 1st step.\n    Everything else is secondary. Finishing is secondary. Starting is an achievement.\n    Be proud 💜</span>',marginTop:"11%"}];function Rt(t,n,e){const o=t.slice();return o[8]=n[e],o}function At(n){let e,o=n[8]+"";return{c(){e=g("li"),$(e,"class","svelte-5gh3nz")},m(t,n){_(t,e,n),e.innerHTML=o},p:t,d(t){t&&h(e)}}}function Dt(n){let e,o,s,i,r,c,l=n[3],a=[];for(let t=0;t<l.length;t+=1)a[t]=At(Rt(n,l,t));return{c(){e=g("main"),o=g("section"),s=g("span"),i=b(),r=g("div"),c=g("ol");for(let t=0;t<a.length;t+=1)a[t].c();$(s,"class","intro svelte-5gh3nz"),$(c,"class","svelte-5gh3nz"),$(r,"class","list svelte-5gh3nz"),$(o,"class","sign-text svelte-5gh3nz"),$(e,"class","wooden-sign-component svelte-5gh3nz"),$(e,"style",n[1]),S(e,"active",n[0])},m(t,l){_(t,e,l),f(e,o),f(o,s),s.innerHTML=n[2],f(o,i),f(o,r),f(r,c);for(let t=0;t<a.length;t+=1)a[t].m(c,null)},p(t,[n]){if(8&n){let e;for(l=t[3],e=0;e<l.length;e+=1){const o=Rt(t,l,e);a[e]?a[e].p(o,n):(a[e]=At(o),a[e].c(),a[e].m(c,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=l.length}2&n&&$(e,"style",t[1]),1&n&&S(e,"active",t[0])},i:t,o:t,d(t){t&&h(e),m(a,t)}}}function Lt(t,n,e){let o,s,i,{index:r=-1}=n,{intro:c,list:a=[],marginTop:d}=kt[r]||{},{selectedIndex:u}=N("sign-select");return l(t,u,(t=>e(6,i=t))),t.$$set=t=>{"index"in t&&e(5,r=t.index)},t.$$.update=()=>{96&t.$$.dirty&&e(0,o=r===i)},e(1,s=`margin-top: ${d}`),[o,s,c,a,u,r,i]}class Pt extends tt{constructor(t){super(),Z(this,t,Lt,Dt,r,{index:5})}}function Mt(t,n,e){const o=t.slice();return o[4]=n[e],o[6]=e,o}function Ht(t,n,e){const o=t.slice();return o[4]=n[e],o[6]=e,o}function Ut(t){let n,e,o,s;return e=new Tt({props:{index:t[6]}}),e.$on("click",(function(){return t[2](t[6])})),{c(){n=g("div"),X(e.$$.fragment),o=b(),$(n,"class","direction-sign-wrapper svelte-1phgwxu")},m(t,i){_(t,n,i),J(e,n,null),f(n,o),s=!0},p(n,e){t=n},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){t&&h(n),q(e)}}}function Kt(n){let e,o;return e=new Pt({props:{index:n[6]}}),{c(){X(e.$$.fragment)},m(t,n){J(e,t,n),o=!0},p:t,i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){q(e,t)}}}function Yt(t){let n,e,o,s,i,r,c;e=new Ct({});let l=Ot,a=[];for(let n=0;n<l.length;n+=1)a[n]=Ut(Ht(t,l,n));const d=t=>z(a[t],1,1,(()=>{a[t]=null}));let u=kt,p=[];for(let n=0;n<u.length;n+=1)p[n]=Kt(Mt(t,u,n));return{c(){n=g("main"),X(e.$$.fragment),o=b(),s=g("section"),i=g("div");for(let t=0;t<a.length;t+=1)a[t].c();r=b();for(let t=0;t<p.length;t+=1)p[t].c();$(i,"class","direction-signs"),$(s,"class","all-the-signs svelte-1phgwxu")},m(t,l){_(t,n,l),J(e,n,null),f(n,o),f(n,s),f(s,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null);f(s,r);for(let t=0;t<p.length;t+=1)p[t].m(s,null);c=!0},p(t,[n]){if(2&n){let e;for(l=Ot,e=0;e<l.length;e+=1){const o=Ht(t,l,e);a[e]?(a[e].p(o,n),G(a[e],1)):(a[e]=Ut(o),a[e].c(),G(a[e],1),a[e].m(i,null))}for(Y(),e=l.length;e<a.length;e+=1)d(e);F()}},i(t){if(!c){G(e.$$.fragment,t);for(let t=0;t<l.length;t+=1)G(a[t]);for(let t=0;t<u.length;t+=1)G(p[t]);c=!0}},o(t){z(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)z(a[t]);p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)z(p[t]);c=!1},d(t){t&&h(n),q(e),m(a,t),m(p,t)}}}function Ft(t,n,e){let o,s=et(0);function i(t){!function(t,n,e=n){t.set(e)}(s,o=t,o)}l(t,s,(t=>e(3,o=t))),I("sign-select",{selectedIndex:s});return[s,i,t=>i(t)]}class Gt extends tt{constructor(t){super(),Z(this,t,Ft,Yt,r,{})}}document.addEventListener("spawn",(t=>{const n={...t.detail,...sceneObjectTemplate},e="__press_",o=Object.keys(n).filter((t=>t.startsWith(e))),s=o.map((t=>t.split(e)[1]));window.HAS_PRESS=o.length>0,window.KEYS=s,window.ID=n.id,window.add_keys(),refSceneObjects.push(n),window._create&&_create(n)})),document.addEventListener("destroy",(t=>{const n=t.detail.id-1,e=refSceneObjects[n],o=refSceneObjects.pop();refSceneObjects.length&&(o.id=t.detail.id,refSceneObjects[n]=o),e._img&&e._img.destroy(),e._text&&e._text.destroy()})),window.mirrorSprite=()=>{const t=window.MIRROR_ID-1,n=refSceneObjects[t];n._img&&(n._img.flipX=window.MIRROR_X)},window.flipSprite=()=>{const t=window.FLIP_ID-1,n=refSceneObjects[t];n._img&&(n._img.flipY=window.FLIP_Y)},window.animateSprite=()=>{const t=window.ANIMATE_ID-1,n=refSceneObjects[t];n._img&&n._img.anims&&n._img.anims.play(window.ANIMATE_NAME)},window.unanimateSprite=()=>{const t=window.UNANIMATE_ID-1,n=refSceneObjects[t];n._img&&n._img.anims&&(n._img.anims.pause(),n._img.anims.setProgress(0))},window.applyThrust=()=>{const t=window.THRUST_ID-1,n=refSceneObjects[t];if(n._img){const t="Up"===window.THRUST_DIRECTION?"Left":"Down"===window.THRUST_DIRECTION?"Right":"Left"===window.THRUST_DIRECTION?"Back":"Right"===window.THRUST_DIRECTION?"":null;if(null!==t){const e=window.THRUST_AMOUNT;n._img[`thrust${t}`](e)}}},window._isKinematic=t=>{const{_collide_name:n}=t;return n&&n.startsWith("KINEMATIC")},window._collideUsesPointer=t=>{const{_collide_name:n}=t;return n&&n.endsWith("POINTER")},window._overlapUsesPointer=t=>{const{_overlap_name:n}=t;return n&&n.endsWith("POINTER")},window.playSound=()=>{const t=window.SOUND_NAME.toLowerCase();phaserContext.sound.setVolume(.25),soundObjects[t].play()},window.pauseSound=()=>{const t=window.SOUND_NAME.toLowerCase();soundObjects[t].pause()},window.resumeSound=()=>{const t=window.SOUND_NAME.toLowerCase();phaserContext.sound.setVolume(.25),soundObjects[t].resume()},window.stopSound=()=>{const t=window.SOUND_NAME.toLowerCase();soundObjects[t].stop()},window.drawLine=()=>{const{x1:t=0,y1:n=0,x2:e=t,y2:o=n,thickness:s=1,color:i=43775,opacity:r=1}=window.LINE_CONFIG;graphics.lineStyle(s,i,r),graphics.lineBetween(t,n,e,o)},window.drawRectangle=()=>{const{x:t=0,y:n=0,width:e=1,height:o=1,thickness:s=1,color:i=43775,opacity:r=1,stroke:c}=window.RECTANGLE_CONFIG;graphics.lineStyle(s,c,r),graphics.fillStyle(i,r),graphics.fillRect(t,n,e,o),c&&graphics.strokeRect(t,n,e,o)},window.drawEllipse=()=>{const{x:t=0,y:n=0,radius:e=1,thickness:o=1,color:s=43775,opacity:i=1,height:r,stroke:c}=window.ELLIPSE_CONFIG;graphics.lineStyle(o,c,i),graphics.fillStyle(s,i),r?(graphics.fillEllipse(t,n,e,r),c&&graphics.strokeEllipse(t,n,e,r)):(graphics.fillCircle(t,n,e),c&&graphics.strokeCircle(t,n,e))},window._create=t=>{const{x:n,y:e,angle:o,_class_name:s,id:i}=t,r=s.toLowerCase();let c=_isKinematic(t),l="STATIC"===t._collide_name||c;const a=!_collideUsesPointer(t)&&!_overlapUsesPointer(t),d=!!t._overlap_name,u=i-1;if(t._is_text){const{content:s,font:i,size:r,color:p}=t,f=p.toString(16);let _="";for(let t=0;t<6-f.length;t++)_+="0";const h="#"+_+f;let m=phaserContext.add.text(n,e,s,{fontFamily:i,fontSize:r,fill:h});if(t._collide_name){let t=phaserContext.matter.add.gameObject(m,{isSensor:d,ignorePointer:a}).setStatic(l).setIgnoreGravity(d||c).setAngle(o);refSceneObjects[u]._text=t}else refSceneObjects[u]._text=m}else if(t._is_timer){const{rate:n,count:e}=t,o={delay:n,callbackScope:phaserContext,callback:()=>{t.fire()}};e>0?o.repeat=e-1:o.loop=!0,phaserContext.time.addEvent(o)}else{const s=spriteTypeRefs[r];let i=phaserContext.matter.add[s](n,e,r,null,{ignorePointer:a,isSensor:d}).setAngle(o);"__MISSING"===i.texture.key?(i.destroy(),i=null):(i.setStatic(l),i.setIgnoreGravity(d||c||!t._collide_name)),refSceneObjects[u]._img=i}t._has_hover&&(refSceneObjects[u]._hover=!1,t._pointer_down=!1)};const{document:zt}=B;function Bt(n){let e,o,s,i,r,c;return{c(){e=g("script"),s=g("script"),r=g("script"),e.src!==(o="/fengari-web.js")&&$(e,"src","/fengari-web.js"),$(e,"type","text/javascript"),s.src!==(i="/phaser.min.js")&&$(s,"src","/phaser.min.js"),r.src!==(c="/moonscript/index.js")&&$(r,"src","/moonscript/index.js")},m(t,n){f(zt.head,e),f(zt.head,s),f(zt.head,r)},p:t,i:t,o:t,d(t){h(e),h(s),h(r)}}}function Vt(t,n,e){let{server64:o}=n;return window.sceneObjectTemplate={x:0,y:0,angle:0},window.refSceneObjects=[],window.spriteTypeRefs={},window.soundObjects={},O((async()=>{const t=await fetch("https://wwd-site-bot.uc.r.appspot.com/"+o),n=await t.json(),{moonscriptSegments:e,assets:s}=n,i=function(t){return`\n-- Core\nexport TYPE = "__class"\nexport NAME = "__name"\nexport SCENE = {}\n\n-- Physics\nexport class KINEMATIC\nexport class STATIC\nexport class POINTER\nexport class KINEMATIC_POINTER\n\nexport UP = "Up"\nexport DOWN = "Down"\nexport LEFT = "Left"\nexport RIGHT = "Right"\n\n-- Input\nexport class HOLD\nexport class ONCE\n\nexport PRESS_HOLD = {}\nexport PRESS_HOLD_KEYS = {}\n\nexport CLICK_HOLD = {}\nexport HOVER_HOLD = {}\nexport KEYS = {}\n\n-- Sprites\nexport ANIMATED = {}\n\n\n-- Scene objects\nexport class Scene_Object\n\t@count: 0\n\tnew: =>\n\t\t@@count += 1\n\t\t@x = 0\n\t\t@y = 0\n\t\t@angle = 0\n\n\nexport class Text\n\tnew: =>\n\t\t@content = ""\n\t\t@size = 16\n\t\t@font = "Arial"\n\t\t@color = 0x00aaff\n\t\t@_is_text = true\n\toverlap: =>\n\nexport class Physics_Text\n\tnew: =>\n\t\t@content = ""\n\t\t@size = 16\n\t\t@font = "Arial"\n\t\t@color = 0x00aaff\n\t\t@_is_text = true\n\tcollide: =>\n\nexport class Static_Text extends Physics_Text\n\tcollide: => STATIC\n\nexport class Kinematic_Text extends Physics_Text\n\tcollide: => KINEMATIC\n\nexport class Pointer_Text extends Physics_Text\n\tcollide: => POINTER\n\nexport class Kinematic_Pointer_Text extends Physics_Text\n\tcollide: => KINEMATIC_POINTER\n\n\nexport class Timer\n\tnew: =>\n\t\t@fire = -> nil\n\t\t@rate = 1000\n\t\t@count = 1\n\t\t@_is_timer = true\n\n\nexport spawn = (archetype, config = {}) ->\n\tinstance = with archetype!\n\t\t[TYPE].__base[k] = v for k,v in pairs Scene_Object!\n\t\t[k] = v for k,v in pairs config\n\t\t.id = Scene_Object.count\n\t\t._class_name = archetype[NAME]\n\t\t._has_click = .click ~= nil\n\t\t._has_unclick = .unclick ~= nil\n\t\t._has_hover = .hover ~= nil\n\t\t._has_unhover = .unhover ~= nil\n\t\t._has_draw = .draw ~= nil\n\t\tif .collide\n\t\t\tcollide_obj = \\collide {}\n\t\t\tif collide_obj then ._collide_name = collide_obj[NAME] else ._collide_name = "GRAVITY"\n\t\tif .overlap\n\t\t\toverlap_obj = \\overlap {}\n\t\t\tif overlap_obj then ._overlap_name = overlap_obj[NAME] else ._overlap_name = "GHOST"\n\t\n\tfor k,v in pairs instance[TYPE].__base\n\t\tinstance["__" .. k] = v\n\t\t\n\tSCENE[instance.id] = instance\n\tupdate_scene!\n\t_document\\dispatchEvent(js.new(_custom_event, "spawn", Object({\n\t\tdetail: Object(instance)\n\t})))\n\treturn instance\n    \n\n-- TODO: Remove most of this function?\nexport destroy = (instance) ->\n\tlast_scene_object = table.remove(SCENE)\n\tScene_Object.count -= 1\n\t\n\tif #SCENE > 0\n\t\tlast_scene_object.id = instance.id\n\t\tSCENE[instance.id] = last_scene_object\n\t\t\n\tupdate_scene!\n\t\n\t_document\\dispatchEvent(js.new(_custom_event, "destroy", Object({\n\t\tdetail: Object(instance)\n\t})))\n\t\n\n\nexport mirror = (instance) ->\n\tjs.global.MIRROR_ID = instance.id\n\tjs.global.MIRROR_X = true\n\tjs.global.mirrorSprite!\n\nexport unmirror = (instance) ->\n\tjs.global.MIRROR_ID = instance.id\n\tjs.global.MIRROR_X = false\n\tjs.global.mirrorSprite!\n\n\nexport flip = (instance) ->\n\tjs.global.FLIP_ID = instance.id\n\tjs.global.FLIP_Y = true\n\tjs.global.flipSprite!\n\nexport unflip = (instance) ->\n\tjs.global.FLIP_ID = instance.id\n\tjs.global.FLIP_Y = false\n\tjs.global.flipSprite!\n\n\nexport animate = (instance, name) ->\n\tif ANIMATED[instance.id] == nil\n\t\tjs.global.ANIMATE_ID = instance.id\n\t\tjs.global.ANIMATE_NAME = name\n\t\tjs.global.animateSprite!\n\t\tANIMATED[instance.id] = name\n\nexport unanimate = (instance) ->\n\tif ANIMATED[instance.id]\n\t\tjs.global.UNANIMATE_ID = instance.id\n\t\tjs.global.UNANIMATE_NAME = ANIMATED[instance.id]\n\t\tjs.global.unanimateSprite!\n\t\tANIMATED[instance.id] = nil\n\n\nexport thrust = (instance, direction, amount) ->\n\tjs.global.THRUST_ID = instance.id\n\tjs.global.THRUST_DIRECTION = direction\n\tjs.global.THRUST_AMOUNT = amount\n\tjs.global.applyThrust!\n\n\nexport play = (sound_name) ->\n\tjs.global.SOUND_NAME = sound_name\n\tjs.global.playSound!\n\nexport pause = (sound_name) ->\n\tjs.global.SOUND_NAME = sound_name\n\tjs.global.pauseSound!\n\nexport resume = (sound_name) ->\n\tjs.global.SOUND_NAME = sound_name\n\tjs.global.resumeSound!\n\t\nexport stop = (sound_name) ->\n\tjs.global.SOUND_NAME = sound_name\n\tjs.global.stopSound!\n\t\n\t\nexport line = (config) ->\n\tjs.global.LINE_CONFIG = Object(config)\n\tjs.global.drawLine!\n\nexport rectangle = (config) ->\n\tjs.global.RECTANGLE_CONFIG = Object(config)\n\tjs.global.drawRectangle!\n\nexport ellipse = (config) ->\n\tjs.global.ELLIPSE_CONFIG = Object(config)\n\tjs.global.drawEllipse!\n\n\n${t.create}\n`}(e).trim(),r={create:await window.MoonScript.compile(i),update:await window.MoonScript.compile(e.update)},c=/^return/gm;r.create=r.create.replaceAll(c,""),r.update=r.update.replaceAll(c,"");const l=function(t){return`\njs = require "js"\n\nfunction Object(t)\n\tlocal o = js.new(js.global.Object)\n\tfor k, v in pairs(t) do\n\t\to[k] = v\n\tend\n\treturn o\nend\n\n_document = js.global.document\n_custom_event = js.global.CustomEvent\n\nfunction update_scene()\n\tjs.global.SCENE = js.global:Array()\n\tfor key,value in pairs(SCENE) do\n\t\tjs.global.SCENE:push(Object(value))\n\tend\nend\n\njs.global.set_position = function()\n\tlocal id = js.global._SET_POSITION_ID\n\tlocal x = js.global._SET_POSITION_X\n\tlocal y = js.global._SET_POSITION_Y\n\t\n\tSCENE[id].x = x\n\tSCENE[id].y = y\nend\n\njs.global.add_keys = function()\n\tlocal id = js.global.ID\n\tlocal has_press = js.global.HAS_PRESS\n\tSCENE[id]._has_press = has_press\n\t\n\tSCENE[id]._keys = {}\n\tfor k,v in pairs(js.global.KEYS) do\n\t\tSCENE[id]._keys[v] = true\n\tend\nend\n\n\njs.global.run_press = function()\n\tlocal key = js.global.KEY\n\tlocal press_callback_name = "press_" .. key\n\t\n\tPRESS_HOLD_KEYS[key] = {}\n\t\n\tfor id, scene_object in pairs(SCENE) do\n\t\tif scene_object[press_callback_name] then\n\t\t\tlocal result = scene_object[press_callback_name](scene_object)\n\t\t\t\n\t\t\tif (result and result[NAME] ~= "ONCE") or result == nil then\n\t\t\t\tPRESS_HOLD_KEYS[key][id] = scene_object\n\t\t\tend\n\t\tend\n\tend\n\t\nend\n\njs.global.run_unpress = function()\n\tlocal key = js.global.KEY\n\tlocal unpress_callback_name = "unpress_" .. key\n\t\n\tfor id, scene_object in pairs(SCENE) do\n\t\tif scene_object[unpress_callback_name] then\n\t\t\tscene_object[unpress_callback_name](scene_object)\n\t\tend\n\tend\n\t\n\tPRESS_HOLD_KEYS[key] = {}\nend\n\n\njs.global.run_hover = function()\n\tlocal id = js.global.ID\n\tlocal hover_object = SCENE[id]:hover()\n\t\n\tif hover_object and hover_object[NAME] == "HOLD" then\n\t\tHOVER_HOLD[id] = SCENE[id]\n\tend\nend\n\njs.global.run_unhover = function()\n\tlocal id = js.global.ID\n\t\n\tif SCENE[id].unhover then\n\t\tSCENE[id]:unhover()\n\tend\n\t\n\tHOVER_HOLD = {}\nend\n\n\njs.global.run_click = function()\n\tlocal id = js.global.ID\n\tlocal click_object = SCENE[id]:click()\n\tif click_object and click_object[NAME] == "HOLD" then\n\t\tCLICK_HOLD[id] = SCENE[id]\n\tend\nend\n\njs.global.run_unclick = function()\n\tlocal id = js.global.ID\n\t\t\n\tif SCENE[id].unclick then\n\t\tSCENE[id]:unclick()\n\tend\n\n\tCLICK_HOLD = {}\nend\n\n\njs.global.run_draw = function()\n\tlocal id = js.global.DRAW_ID\n\t\n\tif SCENE[id].draw then\n\t\tSCENE[id]:draw()\n\tend\nend\n\n\njs.global.run_collide = function()\n\tlocal id1 = js.global.COLLIDE_ID1\n\tlocal id2 = js.global.COLLIDE_ID2\n\tSCENE[id1]:collide(SCENE[id2])\n\tSCENE[id2]:collide(SCENE[id1])\nend\n\njs.global.run_overlap = function()\n\tlocal id1 = js.global.OVERLAP_ID1\n\tlocal id2 = js.global.OVERLAP_ID2\n\tSCENE[id1]:overlap(SCENE[id2])\n\tSCENE[id2]:overlap(SCENE[id1])\nend\n\n\n${t.create}\n\njs.global.game_update = function()\n\t${t.update}\n\t\n\tfor input_key, v in pairs(PRESS_HOLD_KEYS) do\n\t\tlocal press_callback_name = "press_" .. input_key\n\t\t\n\t\tfor id, scene_object in pairs(PRESS_HOLD_KEYS[input_key]) do\n\t\t\tif scene_object[press_callback_name] then\n\t\t\t\tscene_object[press_callback_name](scene_object)\n\t\t\tend\n\t\tend\n\tend\n\t\n\t\n\tfor id, scene_object in pairs(HOVER_HOLD) do\n\t\tif scene_object and scene_object.hover then\n\t\t\tscene_object:hover()\n\t\tend\n\tend\n\n\tfor id, scene_object in pairs(CLICK_HOLD) do\n\t\tif scene_object and scene_object.click then\n\t\t\tscene_object:click()\n\t\tend\n\tend\n\t\n\tupdate_scene()\nend\n\nupdate_scene()\n`}(r);let a={type:Phaser.AUTO,physics:{default:"matter"},scene:{preload:function(){for(let t of s){const n=t.name.toLowerCase(),{url:e}=t;if(t.animations.length){const{frameWidth:o,frameHeight:s}=t;this.load.spritesheet(n,e,{frameWidth:o,frameHeight:s})}else"sound"===t.type?this.load.audio(n,[e]):this.load.image(n,e)}},create:function(){window.phaserContext=this,window.graphics=this.add.graphics(),this.matter.world.autoUpdate=!1,this.matter.world.setBounds(),this.matter.add.pointerConstraint({length:1,stiffness:1});for(let t of s){const n=t.name.toLowerCase(),{animations:e,frameRate:o,type:s}=t;spriteTypeRefs[n]=e.length?"sprite":"image";for(let t of e){const[e]=Object.keys(t),s=t[e],i=s.pop();let r=1;"string"==typeof i&&"loop"===i.toLowerCase()?r=-1:s.push(i),this.anims.create({key:e,frames:this.anims.generateFrameNumbers(n,{frames:s}),frameRate:o,repeat:r})}if("sound"===s){const t=this.sound.add(n);soundObjects[n]=t}}this.matter.world.on("collisionstart",((t,n,e)=>{let o=refSceneObjects.filter((t=>t._collide_name)),s=o.find((t=>(t._img||t._text).body===n)),i=o.find((t=>(t._img||t._text).body===e));s&&s.id&&i&&i.id&&(window.COLLIDE_ID1=s.id,window.COLLIDE_ID2=i.id,window.run_collide());let r=refSceneObjects.filter((t=>t._overlap_name)),c=r.find((t=>(t._img||t._text).body===n)),l=r.find((t=>(t._img||t._text).body===e));c&&c.id&&l&&l.id&&(window.OVERLAP_ID1=c.id,window.OVERLAP_ID2=l.id,window.run_collide())})),document.addEventListener("keydown",(t=>{if(t.repeat)return;const n=t.key.trim()?t.key.toUpperCase():t.code.toUpperCase();window.KEY=n,window.run_press()})),document.addEventListener("keyup",(t=>{if(t.repeat)return;const n=t.key.toUpperCase();window.KEY=n,window.run_unpress()})),window.POINTER_OBJECTS={},this.input.on("pointermove",(t=>{const{worldX:n,worldY:e}=t;refSceneObjects.filter((t=>t._has_hover&&(t._img||t._text))).forEach((t=>{const o=t._img||t._text;if(this.matter.containsPoint(o.body,n,e)){!!window.POINTER_OBJECTS[t.id]||(window.POINTER_OBJECTS[t.id]=t,window.ID=t.id,window.run_hover())}else window.POINTER_OBJECTS[t.id]&&(t._pointer_down=!1,window.ID=t.id,window.run_unhover(),t._has_unclick&&window.run_unclick(),delete window.POINTER_OBJECTS[t.id])}));refSceneObjects.filter((t=>t._pointer_down&&"KINEMATIC_POINTER"===t._collide_name)).forEach((t=>{(t._img||t._text).setStatic(!1)}))})),this.input.on("pointerdown",(t=>{const{worldX:n,worldY:e}=t;refSceneObjects.filter((t=>t._has_click||"KINEMATIC_POINTER"===t._collide_name)).forEach((t=>{const{body:o}=t._img||t._text;this.matter.containsPoint(o,n,e)&&(t._pointer_down=!0,window.ID=t.id,window.run_click())}))})),this.input.on("pointerup",(t=>{const{worldX:n,worldY:e}=t;refSceneObjects.filter((t=>t._has_click)).forEach((t=>{const{body:o}=t._img||t._text;this.matter.containsPoint(o,n,e)&&(window.ID=t.id,window.run_unclick())}));refSceneObjects.filter((t=>t._pointer_down&&"KINEMATIC_POINTER"===t._collide_name)).forEach((t=>{t._pointer_down=!1;(t._img||t._text).setStatic(!0)}))})),window.fengari.load(l)()},update:function(t,n){window.game_update(),window.SCENE.forEach(((t,n)=>{if("STATIC"!==t._collide_name){const{x:e,y:o}=t,s=refSceneObjects[n],i=s._img||s._text;i&&(i.x=e,i.y=o)}})),this.matter.world.step(n),refSceneObjects.forEach((t=>{const n=t._img||t._text;n&&(_isKinematic(t)&&n.isStatic()||(window._SET_POSITION_ID=t.id,window._SET_POSITION_X=n.x,window._SET_POSITION_Y=n.y,window.set_position()),_isKinematic(t)&&n.setAngularVelocity(0))})),graphics.clear(),refSceneObjects.filter((t=>t._has_draw)).forEach((t=>{window.DRAW_ID=t.id,window.run_draw()}))}}};window.game=new Phaser.Game(a)})),t.$$set=t=>{"server64"in t&&e(0,o=t.server64)},[o]}class Wt extends tt{constructor(t){super(),Z(this,t,Vt,Bt,r,{server64:0})}}function Xt(t){let n,e;return n=new Gt({}),{c(){X(n.$$.fragment)},m(t,o){J(n,t,o),e=!0},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){q(n,t)}}}function Jt(t){let e,o;const s=[t[0]];let i={};for(let t=0;t<s.length;t+=1)i=n(i,s[t]);return e=new Wt({props:i}),{c(){X(e.$$.fragment)},m(t,n){J(e,t,n),o=!0},p(t,n){const o=1&n?V(s,[W(t[0])]):{};e.$set(o)},i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){q(e,t)}}}function qt(t){let n,e,o,s;return n=new yt({props:{path:"/",$$slots:{default:[Xt]},$$scope:{ctx:t}}}),o=new yt({props:{path:"/:server64",$$slots:{default:[Jt,({params:t})=>({0:t}),({params:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){X(n.$$.fragment),e=b(),X(o.$$.fragment)},m(t,i){J(n,t,i),_(t,e,i),J(o,t,i),s=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const i={};3&e&&(i.$$scope={dirty:e,ctx:t}),o.$set(i)},i(t){s||(G(n.$$.fragment,t),G(o.$$.fragment,t),s=!0)},o(t){z(n.$$.fragment,t),z(o.$$.fragment,t),s=!1},d(t){q(n,t),t&&h(e),q(o,t)}}}function Qt(t){let n,e;return n=new gt({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){X(n.$$.fragment)},m(t,o){J(n,t,o),e=!0},p(t,[e]){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){q(n,t)}}}return new class extends tt{constructor(t){super(),Z(this,t,null,Qt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map