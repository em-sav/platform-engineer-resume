/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(undefined===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&undefined===t){const e=undefined!==s&&1===s.length;e&&(t=o$4.get(s)),undefined===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",undefined,s$1),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$1)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;undefined!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=false),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);undefined!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),undefined!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(undefined!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);undefined!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else undefined!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?undefined:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():undefined}constructor(){super(),this._$Ep=undefined,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),undefined!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(undefined!==e&&true===i.reflect){const r=(undefined!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(undefined!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:undefined!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(undefined!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),true===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=undefined;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t) true!==i.wrapped||this._$AL.has(s)||undefined===this[s]||this.P(s,this[s],i);}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=false,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):undefined,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return undefined!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:undefined!==u[1]?c=_:undefined!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):undefined!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):undefined===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=undefined===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=undefined);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$2)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=undefined!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?undefined:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),undefined===o?h=undefined:(h=new o(t),h._$AT(t,s,e)),undefined!==e?(s._$Co??=[])[e]=h:s._$Cl=h),undefined!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=undefined,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;undefined!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV) undefined!==s&&(undefined!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=undefined,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return undefined!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):undefined!==t._$litType$?this.$(t):undefined!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(undefined===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return undefined===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ undefined===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=undefined,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(undefined===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?undefined:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=undefined,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.2.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(undefined===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,undefined,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r$1 = class r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=undefined;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(s,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}};r$1._$litElement$=true,r$1["finalized"]=true,globalThis.litElementHydrateSupport?.({LitElement:r$1});const i=globalThis.litElementPolyfillSupport;i?.({LitElement:r$1});(globalThis.litElementVersions??=[]).push("4.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ undefined!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(undefined===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return undefined!==e&&this.P(o,undefined,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:true}:t),r?Object.getOwnPropertyDescriptor(e,o):undefined})(t,e,o)}

var __decorate$b = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RTitle = class RTitle extends r$1 {
    render() {
        return x `
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Développeur Logiciel</h3>
                </div>
                <hr > 
            </header>
    `;
    }
};
RTitle.styles = i$3 `
    .flex-space-between {
      display: flex;
      justify-content: space-between;
    }

    .header-container {
      width: 100%;
    }

    hr {
      border-color: black;
      border-width: 2px;
      margin-bottom: 0;
      background-color: black;
    }

    h1 {
      font-size: 36px;
      margin-left: -3px;
    }

    .title-fit {
      margin-bottom: 0;
      margin-top: 0;
      display: flex;
      align-items: end;
    }

    @media only screen and (max-width: 600px) {
      h3 {
        text-align: end;
      }
    }
  `;
RTitle = __decorate$b([
    t("r-title")
], RTitle);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o(o,f){if(undefined!==o){let i=0;for(const t of o)yield f(t,i++);}}

const palette = {
    text: {
        main: i$3 `#5f5c5c`,
        secondary: i$3 `#b8b5b5`
    }
};
const typography = {
    size: {
        normal: 18
    },
    weight: {
        light: 300,
        normal: 400,
        bold: 550,
        bolder: 700
    }
};

var __decorate$a = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RContactItem = class RContactItem extends r$1 {
    render() {
        return x `
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${this.href === undefined
            ? x `<span class="contact-item">${this.value}</span>`
            : x `<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `;
    }
};
RContactItem.styles = i$3 `
    :host {
      display: flex;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    .contact-item {
      color: ${palette.text.main};
      margin-left: 5px;
      font-weight: ${typography.weight.light};
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;
__decorate$a([
    n()
], RContactItem.prototype, "value", undefined);
__decorate$a([
    n()
], RContactItem.prototype, "path", undefined);
__decorate$a([
    n()
], RContactItem.prototype, "href", undefined);
RContactItem = __decorate$a([
    t("r-contact-item")
], RContactItem);

const originPath = () => {
    return window.location.origin + window.location.pathname;
};

var __decorate$9 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const contactItems = [
    {
        value: "emile.savard.21@gmail.com",
        path: originPath() + "assets/mail-enveloppe.svg",
        href: "mailto:emile.savard.21@gmail.com"
    },
    {
        value: "581-309-7373",
        path: originPath() + "assets/call.svg",
        href: "tel:581-309-7373"
    },
    {
        value: "linkedin",
        path: originPath() + "assets/linkedin.svg",
        href: "https://www.linkedin.com/in/%C3%A9mile-savard-341540192/"
    }
];
let RContact = class RContact extends r$1 {
    render() {
        return x `
      ${o(contactItems, (item) => x ` <r-contact-item value=${item.value} path=${item.path} href=${item.href}></r-contact-item> `)}
    `;
    }
};
RContact.styles = i$3 `
    :host {
      display: flex;
      flex-direction: column;
    }
  `;
RContact = __decorate$9([
    t("r-contact")
], RContact);

var __decorate$8 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ResumeSummary = class ResumeSummary extends r$1 {
    render() {
        return x `
      <div>
        Ma passion pour les nouvelles technologies ainsi que mon souci de livrer du code de qualité tout en appliquant les bonnes
        pratiques font de moi un développeur polyvalent
      </div>
    `;
    }
};
ResumeSummary.styles = i$3 `
    :host {
      display: flex;
      text-align: justify;
      // color: ${palette.text.main};
      font-weight: ${typography.weight.light};
    }
  `;
ResumeSummary = __decorate$8([
    t("r-summary")
], ResumeSummary);

var __decorate$7 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RBulletPointItem = class RBulletPointItem extends r$1 {
    constructor() {
        super(...arguments);
        this.last = "false";
    }
    render() {
        return x `
      <li>
        ${this.last === "false" ? x `<span class="line"></span>` : E}
        ${this.underDate === undefined || this.underDate === ""
            ? x `
              <span class="bullet" style="width: 10px"></span>
              <div class="section" style="width: 100%; color: ${palette.text.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${this.subTitle}</span>
              </div>
            `
            : x `
              <span class="bullet"></span>
              <div class="info">
                <div class="section">
                  <span class="timeline-date-range">${this.date}</span>
                  <span style="font-weight: ${typography.weight.normal}">${this.underDate}</span>
                </div>
                <div class="section right-part">
                  <span class="timeline-description-title">${this.title}</span>
                  <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${this.subTitle}</span>
                </div>
              </div>
            `}
      </li>
    `;
    }
};
RBulletPointItem.styles = i$3 `
    li {
      width: 100%;
      display: flex;
      flex-flow: row;
      min-height: 100px;
      position: relative;
    }
    li span.bullet {
      margin-right: 30px;
      text-align: center;
      width: 9px;
      height: 9px;
      background-color: #a09d9d;
      border-radius: 50%;
      z-index: 1;
      -webkit-print-color-adjust: exact;
    }
    li span.line {
      position: absolute;
      height: 99%;
      border: solid #cfcece 0.5pt;
      top: 0.5px;
      left: 3.75px;
    }

    @media print {
      span.line {
        left: 3.5px; //print pdf
      }
    }

    li div.section {
      display: flex;
      flex-direction: column;
      margin-top: -16px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      flex: 1;
      color: ${palette.text.main};
    }

    .right-part {
      max-width: 180px;
    }

    .timeline-date-range {
      font-weight: ${typography.weight.bold};
    }

    .timeline-description-title {
      font-weight: ${typography.weight.bolder};
    }
  `;
__decorate$7([
    n()
], RBulletPointItem.prototype, "date", undefined);
__decorate$7([
    n()
], RBulletPointItem.prototype, "underDate", undefined);
__decorate$7([
    n()
], RBulletPointItem.prototype, "title", undefined);
__decorate$7([
    n()
], RBulletPointItem.prototype, "subTitle", undefined);
__decorate$7([
    n()
], RBulletPointItem.prototype, "last", undefined);
RBulletPointItem = __decorate$7([
    t("r-bullet-point-item")
], RBulletPointItem);

var __decorate$6 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RSectionTitle = class RSectionTitle extends r$1 {
    render() {
        return x `
      <h1 class="title-fit">
        <slot />
      </h1>
      <hr />
    `;
    }
};
RSectionTitle.styles = i$3 `
    :host {
      display: flex;
      width: 100%;
      align-items: center;
      flex: 1;
      margin-bottom: 20px;
    }

    hr {
      flex-grow: 1;
      border-bottom-color: black;
      border-style: hidden;
      border-bottom-style: solid;
      border-width: 2.5px;
      height: 6px;
      margin-left: 8px;
    }

    .title-fit {
      margin-bottom: 0;
      margin-top: 0;
      margin-left: -3px;
      display: flex;
    }
  `;
RSectionTitle = __decorate$6([
    t("r-section-title")
], RSectionTitle);

var __decorate$5 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const educationItems$1 = [
    {
        date: "2019-2023",
        establishment: "Université Laval",
        program: "Ingénierie logicielle",
        description: "Baccalauréat en génie logiciel"
    },
    {
        date: "2016-2018",
        establishment: "Cégep de Sainte-Foy",
        program: "Sciences de la nature",
        description: "Diplôme d’études collégiales"
    }
];
let REducation = class REducation extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-section-title> Formation </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o(educationItems$1, (item, index) => x `
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.establishment}
                      title=${item.program}
                      subTitle=${item.description}
                      last=${index === educationItems$1.length - 1}
                    >
                    </r-bullet-point-item>
                  `)}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
};
REducation.styles = i$3 `
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }

    .items-container {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
    }
  `;
REducation = __decorate$5([
    t("r-education")
], REducation);

var __decorate$4 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const experienceItems = [
    {
        date: "2022-présent",
        type: "Temps partiel",
        title: "DevOps",
        description: "Soutien à la livraison des développeurs"
    },
    {
        date: "Été 2021",
        type: "Stage",
        title: "Développeur Java/Cobol",
        description: "Assurance vie et individuelle"
    },
    {
        date: "2019-2022",
        type: "Stage/temps partiel",
        title: "Développeur Powershell/PHP",
        description: "Sécurité informatique - GIA et SecOff"
    },
    {
        date: "2017-2019",
        type: "Temps partiel",
        title: "Étudiant aux opérations TI",
        description: "Centre de reprographie"
    }
];
let RExperience = class RExperience extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-section-title> Expériences </r-section-title>
        <img src=${originPath() + "assets/beneva.png"} class="beneva-logo" height="40px" alt="beneva" />
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o(experienceItems, (item, index) => x `
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.type}
                      title=${item.title}
                      subTitle=${item.description}
                      last=${index === experienceItems.length - 1}
                    >
                    </r-bullet-point-item>
                  `)}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
};
RExperience.styles = i$3 `
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }

    .items-container {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
    }

    .beneva-logo {
      margin-left: -14px;
    }
  `;
RExperience = __decorate$4([
    t("r-experience")
], RExperience);

var __decorate$3 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const awardsItems = [
    {
        date: "2021",
        title: "Bourse d'excellence en science de l'informatique",
        description: "Ministre de l'enseignement supérieur du Québec"
    },
    {
        date: "2021 et 2022",
        title: "Bourse d'étude en TI",
        description: "Beneva "
    }
];
let RAwards = class RAwards extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-section-title> Mentions </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o(awardsItems, (item, index) => x `
                    <r-bullet-point-item date=${item.date} title=${item.title} subTitle=${item.description} last=${index === awardsItems.length - 1}>
                    </r-bullet-point-item>
                  `)}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
};
RAwards.styles = i$3 `
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }

    .items-container {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
    }
  `;
RAwards = __decorate$3([
    t("r-awards")
], RAwards);

var __decorate$2 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const educationItems = [
    {
        date: "2021-2023",
        establishment: "AEGLO",
        program: "Rep. génie logiciel",
        description: "Représente les étudiants en génie logiciel sur le CA de l'ASETIN"
    },
    {
        date: "2022-2023",
        establishment: "ASETIN",
        program: "VP finissants",
        description: "Organisation des activités des finissants"
    },
    {
        program: "Loisirs et sports",
        description: "Membre des équipes de basketball et volleyball collégiales; participation dans divers activités de plein-air"
    }
];
let RImplications = class RImplications extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-section-title> Implications </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o(educationItems, (item, index) => x `
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.establishment}
                      title=${item.program}
                      subTitle=${item.description}
                      last=${index === educationItems.length - 1}
                    >
                    </r-bullet-point-item>
                  `)}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
};
RImplications.styles = i$3 `
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }

    .items-container {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
    }
  `;
RImplications = __decorate$2([
    t("r-implications")
], RImplications);

var __decorate$1 = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RSkills = class RSkills extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-section-title> Compétences </r-section-title>
        <div class="diagram">
          <img style="max-width: 278px;" src=${originPath() + "assets/skills.png"} alt="skills" />
          <div class="skills-text">
            Tout au long de mon parcours universitaire et professionnel, j'ai eu la chance de découvrir, d'apprendre et de maîtriser certaines technologies clé de l'industrie
          </div>
        </div>
      </div>
    `;
    }
};
RSkills.styles = i$3 `
    :host {
      display: flex;
    }

    .container {
      width: 100%;
      text-align: start;
    }
    
    .diagram {
      display: flex;
    }
    
    .skills-text {
      margin-left: 8px; 
      font-size: 12px;
      font-weight: ${typography.weight.light};
      color: ${palette.text.main};
    }

    @media only screen and (max-width: 800px) {
      .skills-text {
        font-size: 16px;
        margin-left: 0;
        margin-top: 12px;
      }
      
      .diagram{
        flex-direction: column;
        align-items: center;
      }
    }
  `;
RSkills = __decorate$1([
    t("r-skills")
], RSkills);

var __decorate = ('this' && 'this'.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const currentYear = new Date().getFullYear();
let RApp = class RApp extends r$1 {
    render() {
        return x `
      <div class="container">
        <r-title></r-title>
        <div class="split-container">
          <r-contact class="middle-spacing responsive"></r-contact>
          <r-summary class="responsive"></r-summary>
        </div>
        <div class="split-container">
          <r-education class="middle-spacing responsive"></r-education>
          <r-experience class="responsive reduce-gap"></r-experience>
        </div>
        <div class="split-container">
          <r-skills class="middle-spacing responsive fit-column-skills"></r-skills>
          <r-implications class="responsive reduce-gap fit-column-implications"></r-implications>
        </div>
        <div class="split-container">
          <r-awards class="middle-spacing responsive fit-column-awards"></r-awards>
          <div class="responsive reduce-gap"></div>
        </div>
          <div class="responsive copyrights">Copyright © ${currentYear} Émile Savard</div>         
      </div>
    `;
    }
};
RApp.styles = i$3 `
    :host {
      font-family: Montserrat, sans-serif;
    }

    .responsive {
      width: 50%;
    }

    .container {
      max-width: 832px;
      margin: 0 auto;
      padding: 24px;
    }

    .copyrights {
      font-size: 12px;
      text-align: start;
      font-weight: ${typography.weight.light};
      color: ${palette.text.secondary};
      margin-top: -96px;
    }

    .split-container {
      display: flex;
      margin-top: 18px;
    }

    .middle-spacing {
      padding-right: 48px;
    }

    .fit-column-skills {
      margin-top: -330px;
    }

    .fit-column-awards {
      margin-top: -320px;
    }

    .fit-column-implications {
      margin-top: -70px;
    }

    @media only screen and (max-width: 800px) {
      .copyrights {
        margin-top: -50px;
      }
      
      .fit-column-awards {
        margin-top: -192px;
      }
    }

    @media only screen and (max-width: 600px) {
      .container {
        padding: 6px;
      }

      .responsive {
        width: 100%;
      }

      .reduce-gap {
        margin-top: -60px;
      }

      .copyrights {
        font-size: 16px;
        text-align: center;
        margin-top: 40px;
      }

      .split-container {
        flex-direction: column;
      }

      .middle-spacing {
        padding-right: 0;
      }

      .fit-column-skills {
        margin-top: -70px;
      }

      .fit-column-awards {
        margin-top: -70px;
      }

      .fit-column-implications {
        margin-top: 16px;
      }
    }
  `;
RApp = __decorate([
    t("r-app")
], RApp);

export { RApp };
