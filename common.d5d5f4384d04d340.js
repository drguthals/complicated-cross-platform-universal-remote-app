"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(y,v,l)=>{l.d(v,{c:()=>a});var m=l(7205),p=l(7683),d=l(3139);const a=(i,n)=>{let t,e;const r=(c,f,_)=>{if(typeof document>"u")return;const w=document.elementFromPoint(c,f);w&&n(w)?w!==t&&(u(),s(w,_)):u()},s=(c,f)=>{t=c,e||(e=t);const _=t;(0,m.c)(()=>_.classList.add("ion-activated")),f()},u=(c=!1)=>{if(!t)return;const f=t;(0,m.c)(()=>f.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>r(c.currentX,c.currentY,p.a),onMove:c=>r(c.currentX,c.currentY,p.b),onEnd:()=>{u(!0),(0,p.h)(),e=void 0}})}},8685:(y,v,l)=>{l.d(v,{g:()=>m});const m=(n,t,e,r,s)=>d(n[1],t[1],e[1],r[1],s).map(u=>p(n[0],t[0],e[0],r[0],u)),p=(n,t,e,r,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+r*s))-n*Math.pow(s-1,3),d=(n,t,e,r,s)=>i((r-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(c=>c>=0&&c<=1),i=(n,t,e,r)=>{if(0===n)return((n,t,e)=>{const r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]})(t,e,r);const s=(3*(e/=n)-(t/=n)*t)/3,u=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===s)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-s),-Math.sqrt(-s)];const c=Math.pow(u/2,2)+Math.pow(s/3,3);if(0===c)return[Math.pow(u/2,.5)-t/3];if(c>0)return[Math.pow(-u/2+Math.sqrt(c),1/3)-Math.pow(u/2+Math.sqrt(c),1/3)-t/3];const f=Math.sqrt(Math.pow(-s/3,3)),_=Math.acos(-u/(2*Math.sqrt(Math.pow(-s/3,3)))),w=2*Math.pow(f,1/3);return[w*Math.cos(_/3)-t/3,w*Math.cos((_+2*Math.PI)/3)-t/3,w*Math.cos((_+4*Math.PI)/3)-t/3]}},5062:(y,v,l)=>{l.d(v,{i:()=>m});const m=p=>p&&""!==p.dir?"rtl"===p.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(y,v,l)=>{l.r(v),l.d(v,{startFocusVisible:()=>a});const m="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,r=i||document.body,s=E=>{n.forEach(h=>h.classList.remove(m)),E.forEach(h=>h.classList.add(m)),n=E},u=()=>{t=!1,s([])},c=E=>{t=d.includes(E.key),t||s([])},f=E=>{if(t&&E.composedPath){const h=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));s(h)}},_=()=>{e.activeElement===r&&s([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",f),e.addEventListener("focusout",_),e.addEventListener("touchstart",u),e.addEventListener("mousedown",u),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",f),e.removeEventListener("focusout",_),e.removeEventListener("touchstart",u),e.removeEventListener("mousedown",u)},setFocus:s}}},1878:(y,v,l)=>{l.d(v,{C:()=>i,a:()=>d,d:()=>a});var m=l(5861),p=l(3756);const d=function(){var n=(0,m.Z)(function*(t,e,r,s,u,c){var f;if(t)return t.attachViewToDom(e,r,u,s);if(!(c||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const _="string"==typeof r?null===(f=e.ownerDocument)||void 0===f?void 0:f.createElement(r):r;return s&&s.forEach(w=>_.classList.add(w)),u&&Object.assign(_,u),e.appendChild(_),yield new Promise(w=>(0,p.c)(_,w)),_});return function(e,r,s,u,c,f){return n.apply(this,arguments)}}(),a=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},i=()=>{let n,t;return{attachViewToDom:function(){var s=(0,m.Z)(function*(u,c,f={},_=[]){var w,E;if(n=u,c){const g="string"==typeof c?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(c):c;_.forEach(o=>g.classList.add(o)),Object.assign(g,f),n.appendChild(g),yield new Promise(o=>(0,p.c)(g,o))}else if(n.children.length>0){const g=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");_.forEach(o=>g.classList.add(o)),g.append(...n.children),n.appendChild(g)}const h=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),h.appendChild(n),n});return function(c,f){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(y,v,l)=>{l.d(v,{a:()=>d,b:()=>a,c:()=>p,d:()=>n,h:()=>i});const m={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:r})},notification(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},p=()=>{m.selection()},d=()=>{m.selectionStart()},a=()=>{m.selectionChanged()},i=()=>{m.selectionEnd()},n=t=>{m.impact(t)}},6465:(y,v,l)=>{l.d(v,{I:()=>i,a:()=>s,b:()=>n,c:()=>f,d:()=>w,f:()=>u,g:()=>r,i:()=>e,p:()=>_,r:()=>E,s:()=>c});var m=l(5861),p=l(3756),d=l(7208);const i="ion-content",n=".ion-content-scroll-host",t=`${i}, ${n}`,e=h=>h&&"ION-CONTENT"===h.tagName,r=function(){var h=(0,m.Z)(function*(g){return e(g)?(yield new Promise(o=>(0,p.c)(g,o)),g.getScrollElement()):g});return function(o){return h.apply(this,arguments)}}(),s=h=>h.querySelector(n)||h.querySelector(t),u=h=>h.closest(t),c=(h,g)=>e(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),f=(h,g,o,C)=>e(h)?h.scrollByPoint(g,o,C):Promise.resolve(h.scrollBy({top:o,left:g,behavior:C>0?"smooth":"auto"})),_=h=>(0,d.a)(h,i),w=h=>{if(e(h)){const o=h.scrollY;return h.scrollY=!1,o}return h.style.setProperty("overflow","hidden"),!0},E=(h,g)=>{e(h)?h.scrollY=g:h.style.removeProperty("overflow")}},7208:(y,v,l)=>{l.d(v,{a:()=>d,b:()=>p,p:()=>m});const m=a=>console.warn(`[Ionic Warning]: ${a}`),p=(a,...i)=>console.error(`[Ionic Error]: ${a}`,...i),d=(a,...i)=>console.error(`<${a.tagName.toLowerCase()}> must be used inside ${i.join(" or ")}.`)},3230:(y,v,l)=>{l.d(v,{a:()=>m,b:()=>u,c:()=>n,d:()=>c,e:()=>o,f:()=>d,g:()=>p,h:()=>h,i:()=>t,j:()=>r,k:()=>f,l:()=>e,m:()=>i,n:()=>a,o:()=>s,p:()=>_,q:()=>w,r:()=>E,s:()=>g});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(y,v,l)=>{l.d(v,{s:()=>m});const m=e=>{try{if(e instanceof class t{constructor(r){this.value=r}})return e.value;if(!a()||"string"!=typeof e||""===e)return e;const r=document.createDocumentFragment(),s=document.createElement("div");r.appendChild(s),s.innerHTML=e,n.forEach(_=>{const w=r.querySelectorAll(_);for(let E=w.length-1;E>=0;E--){const h=w[E];h.parentNode?h.parentNode.removeChild(h):r.removeChild(h);const g=d(h);for(let o=0;o<g.length;o++)p(g[o])}});const u=d(r);for(let _=0;_<u.length;_++)p(u[_]);const c=document.createElement("div");c.appendChild(r);const f=c.querySelector("div");return null!==f?f.innerHTML:c.innerHTML}catch(r){return console.error(r),""}},p=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const u=e.attributes.item(s),c=u.name;if(!i.includes(c.toLowerCase())){e.removeAttribute(c);continue}const f=u.value;null!=f&&f.toLowerCase().includes("javascript:")&&e.removeAttribute(c)}const r=d(e);for(let s=0;s<r.length;s++)p(r[s])},d=e=>null!=e.children?e.children:e.childNodes,a=()=>{var e;const s=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},i=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},1316:(y,v,l)=>{l.r(v),l.d(v,{KEYBOARD_DID_CLOSE:()=>p,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>g,keyboardDidClose:()=>_,keyboardDidOpen:()=>c,keyboardDidResize:()=>f,resetKeyboardAssist:()=>t,setKeyboardClose:()=>u,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const m="ionKeyboardDidShow",p="ionKeyboardDidHide";let a={},i={},n=!1;const t=()=>{a={},i={},n=!1},e=o=>{r(o),o.visualViewport&&(i=g(o.visualViewport),o.visualViewport.onresize=()=>{h(o),c()||f(o)?s(o):_(o)&&u(o)})},r=o=>{o.addEventListener("keyboardDidShow",C=>s(o,C)),o.addEventListener("keyboardDidHide",()=>u(o))},s=(o,C)=>{w(o,C),n=!0},u=o=>{E(o),n=!1},c=()=>!n&&a.width===i.width&&(a.height-i.height)*i.scale>150,f=o=>n&&!_(o),_=o=>n&&i.height===o.innerHeight,w=(o,C)=>{const D=new CustomEvent(m,{detail:{keyboardHeight:C?C.keyboardHeight:o.innerHeight-i.height}});o.dispatchEvent(D)},E=o=>{const C=new CustomEvent(p);o.dispatchEvent(C)},h=o=>{a=Object.assign({},i),i=g(o.visualViewport)},g=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},7741:(y,v,l)=>{l.d(v,{S:()=>p});const p={bubbles:{dur:1e3,circles:9,fn:(d,a,i)=>{const n=d*a/i-d+"ms",t=2*Math.PI*a/i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,a,i)=>{const n=a/i,t=d*n-d+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,a,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":d*a/i-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":d*a/i-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,a,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/i-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/i-d+"ms"}})}}},6546:(y,v,l)=>{l.r(v),l.d(v,{createSwipeBackGesture:()=>i});var m=l(3756),p=l(5062),d=l(3139);l(3509);const i=(n,t,e,r,s)=>{const u=n.ownerDocument.defaultView,c=(0,p.i)(n),_=o=>c?-o.deltaX:o.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:M}=o;return c?M>=u.innerWidth-50:M<=50})(o)&&t(),onStart:e,onMove:o=>{const M=_(o)/u.innerWidth;r(M)},onEnd:o=>{const C=_(o),M=u.innerWidth,D=C/M,x=(o=>c?-o.velocityX:o.velocityX)(o),O=x>=0&&(x>.2||C>M/2),L=(O?1-D:D)*M;let T=0;if(L>5){const b=L/Math.abs(x);T=Math.min(b,540)}s(O,D<=0?.01:(0,m.l)(0,D,.9999),T)}})}},2854:(y,v,l)=>{l.d(v,{c:()=>d,g:()=>i,h:()=>p,o:()=>t});var m=l(5861);const p=(e,r)=>null!==r.closest(e),d=(e,r)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},r):r,i=e=>{const r={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>r[s]=!0),r},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,m.Z)(function*(r,s,u,c){if(null!=r&&"#"!==r[0]&&!n.test(r)){const f=document.querySelector("ion-router");if(f)return s?.preventDefault(),f.push(r,u,c)}return!1});return function(s,u,c,f){return e.apply(this,arguments)}}()},4762:(y,v,l)=>{l.d(v,{Z:()=>p});var m=l(6738);let p=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(i){return new(i||d)},d.\u0275cmp=m.Xpm({type:d,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(i,n){1&i&&(m.TgZ(0,"div",0)(1,"strong"),m._uU(2),m.qZA(),m.TgZ(3,"p"),m._uU(4,"Explore "),m.TgZ(5,"a",1),m._uU(6,"UI Components"),m.qZA()()()),2&i&&(m.xp6(2),m.Oqu(n.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),d})()},581:(y,v,l)=>{l.d(v,{e:()=>i});var m=l(6895),p=l(4719),d=l(7479),a=l(6738);let i=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[m.ez,p.u5,d.Pc]}),n})()}}]);