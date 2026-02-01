/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$4=t$3.ShadowRoot&&(undefined===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&undefined===t){const e=undefined!==s&&1===s.length;e&&(t=o$6.get(s)),undefined===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$3("string"==typeof t?t:t+"",undefined,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;undefined!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$2,getOwnPropertySymbols:o$5,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);undefined!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),undefined!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$2(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(undefined!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);undefined!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else undefined!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?undefined:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():undefined}constructor(){super(),this._$Ep=undefined,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),undefined!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(undefined!==e&&true===i.reflect){const h=(undefined!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(undefined!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:undefined!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(undefined!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||undefined!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=undefined),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=undefined;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||undefined===e||this.C(s,undefined,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$2=t=>t,s$1=t$2.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):undefined,h="$lit$",o$4=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$4,r$1=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return undefined!==e$2?e$2.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:undefined!==u[1]?c=m:undefined!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):undefined!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):undefined===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=undefined===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=undefined);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$1:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$4+x):s+o$4+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$4),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$4)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$4),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$4,t+1));)d.push({type:7,index:l}),t+=o$4.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=undefined!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?undefined:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),undefined===o?h=undefined:(h=new o(t),h._$AT(t,s,e)),undefined!==e?(s._$Co??=[])[e]=h:s._$Cl=h),undefined!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=undefined,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;undefined!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) undefined!==s&&(undefined!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=undefined,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return undefined!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):undefined!==t._$litType$?this.$(t):undefined!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(undefined===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return undefined===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ undefined===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=undefined,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(undefined===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?undefined:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=undefined,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$2.litHtmlPolyfillSupport;B?.(S,k),(t$2.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(undefined===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,undefined,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=undefined;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$3=s.litElementPolyfillSupport;o$3?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{ undefined!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(undefined===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return undefined!==e&&this.C(o,undefined,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):undefined})(t,e,o)}

var __decorate$b = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RTitle = class RTitle extends i$1 {
    render() {
        return b `
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Ingénieur Platforme</h3>
                </div>
                <hr > 
            </header>
    `;
    }
};
RTitle.styles = i$4 `
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
    t$1("r-title")
], RTitle);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o$1(o,f){if(undefined!==o){let i=0;for(const t of o)yield f(t,i++);}}

const palette = {
    text: {
        main: i$4 `#5f5c5c`,
        secondary: i$4 `#b8b5b5`
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

var __decorate$a = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RContactItem = class RContactItem extends i$1 {
    render() {
        return b `
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${this.href === undefined
            ? b `<span class="contact-item">${this.value}</span>`
            : b `<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `;
    }
};
RContactItem.styles = i$4 `
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
    t$1("r-contact-item")
], RContactItem);

const originPath = () => {
    return window.location.origin + window.location.pathname;
};

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
let RContact = class RContact extends i$1 {
    render() {
        return b `
      ${o$1(contactItems, (item) => b ` <r-contact-item value=${item.value} path=${item.path} href=${item.href}></r-contact-item> `)}
    `;
    }
};
RContact.styles = i$4 `
    :host {
      display: flex;
      flex-direction: column;
    }
  `;
RContact = __decorate$9([
    t$1("r-contact")
], RContact);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ResumeSummary = class ResumeSummary extends i$1 {
    render() {
        return b `
      <div>
        Ma passion pour les nouvelles technologies ainsi que mon souci de livrer du code de qualité tout en appliquant les bonnes
        pratiques font de moi un développeur polyvalent
      </div>
    `;
    }
};
ResumeSummary.styles = i$4 `
    :host {
      display: flex;
      text-align: justify;
      // color: ${palette.text.main};
      font-weight: ${typography.weight.light};
    }
  `;
ResumeSummary = __decorate$8([
    t$1("r-summary")
], ResumeSummary);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this._t=undefined,this.it=r;if(r===E)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RBulletPointItem = class RBulletPointItem extends i$1 {
    constructor() {
        super(...arguments);
        this.last = "false";
    }
    render() {
        return b `
      <li>
        ${this.last === "false" ? b `<span class="line"></span>` : A}
        ${this.underDate === undefined || this.underDate === ""
            ? b `
              <span class="bullet" style="width: 10px"></span>
              <div class="section" style="width: 100%; color: ${palette.text.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${o(this.subTitle)}</span>
              </div>
            `
            : b `
              <span class="bullet" style="width: 10px"></span>
              <div class="section-container">
                ${this.image ? b `<img class="section-image" src="${this.image}" alt="" />` : A}
                <div class="info">
                  <div class="section section-with-image">
                    <span class="timeline-date-range">${this.date}</span>
                    <span style="font-weight: ${typography.weight.normal}">${this.underDate}</span>
                  </div>
                  <div class="section right-part">
                    <span class="timeline-description-title">${this.title}</span>
                    <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${o(this.subTitle)}</span>
                  </div>
                </div>
              </div>
            `}
      </li>
    `;
    }
};
RBulletPointItem.styles = i$4 `
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
      width: 100%;
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

    .section-with-image {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .section-image {
      max-height: 28px;
      object-fit: contain;
      margin-left: -16px;
      margin-top: -56px;
      padding-bottom: 28px;
    }

    .section-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    b,
    strong {
      font-weight: 800;
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
], RBulletPointItem.prototype, "image", undefined);
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
    t$1("r-bullet-point-item")
], RBulletPointItem);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RSectionTitle = class RSectionTitle extends i$1 {
    render() {
        return b `
      <h1 class="title-fit">
        <slot />
      </h1>
      <hr />
    `;
    }
};
RSectionTitle.styles = i$4 `
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
    t$1("r-section-title")
], RSectionTitle);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
let REducation = class REducation extends i$1 {
    render() {
        return b `
      <div class="container">
        <r-section-title> Formation </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o$1(educationItems$1, (item, index) => b `
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
REducation.styles = i$4 `
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
    t$1("r-education")
], REducation);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const benevaExperiences = [
    {
        date: "2023-présent",
        type: "Temps plein",
        title: "Ingénieur Platforme",
        description: "Platforme et DevEx pour l'appli. <b>FibeTV</b> / Crave",
        image: originPath() + "assets/bell.png"
    },
    {
        date: "2022-2023",
        type: "Temps partiel",
        title: "DevOps",
        description: "Soutien à la livraison des développeurs",
        image: originPath() + "assets/beneva.png"
    },
    {
        date: "2019-2022",
        type: "Stage/temps partiel",
        title: "Développeur Logiciel",
        description: "Sécurité informatique et aussurance individuelle"
    },
    {
        date: "2017-2019",
        type: "Temps partiel",
        title: "Étudiant aux opérations TI",
        description: "Centre de reprographie"
    }
];
let RExperience = class RExperience extends i$1 {
    render() {
        return b `
      <div class="container">
        <r-section-title> Expériences </r-section-title>
        <div style="display: flex; align-items: start; padding-top: 42px">
          <div class="container">
            <ul>
              ${o$1(benevaExperiences, (item, index) => b `
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.type}
                      title=${item.title}
                      subTitle=${item.description}
                      last=${index === benevaExperiences.length - 1}
                      image=${item.image}
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
RExperience.styles = i$4 `
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
    t$1("r-experience")
], RExperience);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const awardsItems = [
    {
        date: "2023 et 2024",
        title: "Bourses excellence et innovation",
        description: "Bell"
    },
    {
        date: "2021 et 2022",
        title: "Bourses d'étude en TI",
        description: "Beneva "
    }
];
let RAwards = class RAwards extends i$1 {
    render() {
        return b `
      <div class="container">
        <r-section-title> Mentions </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${o$1(awardsItems, (item, index) => b `
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
RAwards.styles = i$4 `
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
    t$1("r-awards")
], RAwards);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const educationItems = [
    {
        date: "2026",
        establishment: "Kubernetes",
        program: "1.36 Release Team",
        description: "Participation à la livraison de la version 1.36 de Kubernetes",
        image: originPath() + "assets/cncf.png"
    },
    {
        date: "2023-présent",
        establishment: "CNCF meetups",
        program: "Présentateur",
        description: "Organisation et présentations dans les meetups à Québec",
    },
    {
        date: "2021-2023",
        establishment: "Université Laval",
        program: "AEGLO / ASETIN",
        description: "Implication dans les commités étudiants d'informatique",
        image: originPath() + "assets/ulaval.png"
    },
];
let RImplications = class RImplications extends i$1 {
    render() {
        return b `
      <div class="container">
        <r-section-title> Implications </r-section-title>
        <div style="display: flex; align-items: start; padding-top: 42px"">
          <div class="container">
            <ul>
              ${o$1(educationItems, (item, index) => b `
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.establishment}
                      title=${item.program}
                      subTitle=${item.description}
                      last=${index === educationItems.length - 1}
                      image=${item.image}
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
RImplications.styles = i$4 `
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
    t$1("r-implications")
], RImplications);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RSkills = class RSkills extends i$1 {
    render() {
        return b `
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
RSkills.styles = i$4 `
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
    t$1("r-skills")
], RSkills);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const currentYear = new Date().getFullYear();
let RApp = class RApp extends i$1 {
    render() {
        return b `
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
RApp.styles = i$4 `
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
    t$1("r-app")
], RApp);

export { RApp };
