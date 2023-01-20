/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(s,t,e)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window,c=a.trustedTypes,d=c?c.emptyScript:"",h=a.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=v){var s;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const l=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:u).toAttribute(i,e.type);this._$El=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),l="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:u;this._$El=n,this[n]=l.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(o=a.reactiveElementVersions)&&void 0!==o?o:a.reactiveElementVersions=[]).push("1.6.1");const g=window,b=g.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,$=`<${w}>`,j=document,S=(t="")=>j.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,T=/>/g,E=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),_=/'/g,U=/"/g,D=/^(?:script|style|textarea|title)$/i,M=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),P=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),R=new WeakMap,I=j.createTreeWalker(j,129,null,!1),N=(t,i)=>{const e=t.length-1,s=[];let n,l=2===i?"<svg>":"",r=A;for(let i=0;i<e;i++){const e=t[i];let o,a,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,a=r.exec(e),null!==a);)d=r.lastIndex,r===A?"!--"===a[1]?r=C:void 0!==a[1]?r=T:void 0!==a[2]?(D.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=E):void 0!==a[3]&&(r=E):r===E?">"===a[0]?(r=null!=n?n:A,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,o=a[1],r=void 0===a[3]?E:'"'===a[3]?U:_):r===U||r===_?r=E:r===C||r===T?r=A:(r=E,n=void 0);const h=r===E&&t[i+1].startsWith("/>")?" ":"";l+=r===A?e+$:c>=0?(s.push(o),e.slice(0,c)+"$lit$"+e.slice(c)+x+h):e+x+(-2===c?(s.push(void 0),i):h)}const o=l+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(o):o,s]};class z{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,l=0;const r=t.length-1,o=this.parts,[a,c]=N(t,i);if(this.el=z.createElement(a,e),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=I.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(x)){const e=c[l++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(x),i=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?J:"?"===i[1]?V:"@"===i[1]?W:H})}else o.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(D.test(s.tagName)){const t=s.textContent.split(x),i=t.length-1;if(i>0){s.textContent=b?b.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],S()),I.nextNode(),o.push({type:2,index:++n});s.append(t[i],S())}}}else if(8===s.nodeType)if(s.data===w)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)o.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,i){const e=j.createElement("template");return e.innerHTML=t,e}}function q(t,i,e=t,s){var n,l,r,o;if(i===P)return i;let a=void 0!==s?null===(n=e._$Co)||void 0===n?void 0:n[s]:e._$Cl;const c=O(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(l=null==a?void 0:a._$AO)||void 0===l||l.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,e,s)),void 0!==s?(null!==(r=(o=e)._$Co)&&void 0!==r?r:o._$Co=[])[s]=a:e._$Cl=a),void 0!==a&&(i=q(t,a._$AS(t,i.values),a,s)),i}class G{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:j).importNode(e,!0);I.currentNode=n;let l=I.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let i;2===a.type?i=new B(l,l.nextSibling,this,t):1===a.type?i=new a.ctor(l,a.name,a.strings,this,t):6===a.type&&(i=new Z(l,this,t)),this.u.push(i),a=s[++o]}r!==(null==a?void 0:a.index)&&(l=I.nextNode(),r++)}return n}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class B{constructor(t,i,e,s){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=q(this,t,i),O(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==P&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==L&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(e);else{const t=new G(n,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new z(t)),i}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new B(this.O(S()),this.O(S()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class H{constructor(t,i,e,s,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let l=!1;if(void 0===n)t=q(this,t,i,0),l=!O(t)||t!==this._$AH&&t!==P,l&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=q(this,s[e+r],i,r),o===P&&(o=this._$AH[r]),l||(l=!O(o)||o!==this._$AH[r]),o===L?t=L:t!==L&&(t+=(null!=o?o:"")+n[r+1]),this._$AH[r]=o}l&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const K=b?b.emptyScript:"";class V extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class W extends H{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=q(this,t,i,0))&&void 0!==e?e:L)===P)return;const s=this._$AH,n=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,l=t!==L&&(s===L||n);n&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const F=g.litHtmlPolyfillSupport;null==F||F(z,B),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;class Y extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,n;const l=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=l._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;l._$litPart$=r=new B(i.insertBefore(S(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function st(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;var lt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let rt=class extends Y{render(){return M`
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Développeur Logiciel</h3>
                </div>
                <hr > 
            </header>
    `}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*ot(t,i){if(void 0!==t){let e=0;for(const s of t)yield i(s,e++)}}rt.styles=l`
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
  `,rt=lt([it("r-title")],rt);const at={main:l`#5f5c5c`,secondary:l`#b8b5b5`},ct={light:300,normal:400,bold:550,bolder:700};var dt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let ht=class extends Y{render(){return M`
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${void 0===this.href?M`<span class="contact-item">${this.value}</span>`:M`<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `}};ht.styles=l`
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
      margin-bottom: 2px;
      margin-left: 5px;
      font-weight: ${ct.light};
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `,dt([st()],ht.prototype,"value",void 0),dt([st()],ht.prototype,"path",void 0),dt([st()],ht.prototype,"href",void 0),ht=dt([it("r-contact-item")],ht);var ut=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};const pt=[{value:"emile.savard.21@gmail.com",path:"../../../assets/mail-enveloppe.svg",href:"mailto:emile.savard.21@gmail.com"},{value:"581-309-7373",path:"../../../assets/call.svg",href:"tel:581-309-7373"},{value:"linkedin",path:"../../../assets/linkedin.svg",href:"https://www.linkedin.com/in/%C3%A9mile-savard-341540192/"}];let vt=class extends Y{render(){return M`
      ${ot(pt,(t=>M` <r-contact-item value=${t.value} path=${t.path} href=${t.href}></r-contact-item> `))}
    `}};vt.styles=l`
    :host {
      display: flex;
      flex-direction: column;
    }
  `,vt=ut([it("r-contact")],vt);var ft=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let mt=class extends Y{render(){return M`
      <div class="container">
        Ma passion pour les nouvelles technologies ainsi que le soucis de livrer du code de qualité tout en appliquant les bonnes
        pratiques fait de moi un développeur polyvalent et réfléchit
      </div>
    `}};mt.styles=l`
    :host {
      display: flex;
      text-align: justify;
      font-weight: ${ct.light};
    }
  `,mt=ft([it("r-summary")],mt);var gt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let bt=class extends Y{render(){return M`
      <h1 class="title-fit">
        <slot />
      </h1>
      <hr />
    `}};bt.styles=l`
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
  `,bt=gt([it("r-section-title")],bt);var yt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let xt=class extends Y{constructor(){super(...arguments),this.last="false"}render(){return M`
      <li>
        ${"false"===this.last?M`<span class="line"></span>`:L}
        <span class="bullet"></span>
        ${void 0===this.underDate?M`
              <div class="section" style="width: 100%; color: ${at.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${ct.light}; text-align: justify;">${this.subTitle}</span>
              </div>
            `:M`
              <div class="info">
                <div class="section">
                  <span class="timeline-date-range">${this.date}</span>
                  <span style="font-weight: ${ct.normal}">${this.underDate}</span>
                </div>
                <div class="section right-part">
                  <span class="timeline-description-title">${this.title}</span>
                  <span style="font-weight: ${ct.light}; text-align: justify;">${this.subTitle}</span>
                </div>
              </div>
            `}
      </li>
    `}};xt.styles=l`
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
      color: ${at.main};
    }

    .right-part {
      max-width: 180px;
    }

    .timeline-date-range {
      font-weight: ${ct.bold};
    }

    .timeline-description-title {
      font-weight: ${ct.bolder};
    }
  `,yt([st()],xt.prototype,"date",void 0),yt([st()],xt.prototype,"underDate",void 0),yt([st()],xt.prototype,"title",void 0),yt([st()],xt.prototype,"subTitle",void 0),yt([st()],xt.prototype,"last",void 0),xt=yt([it("r-bullet-point-item")],xt);var wt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let $t=class extends Y{render(){return M`
      <div class="container">
        <ul>
          <r-bullet-point-item
            date="2019-2023"
            underDate="Université Laval"
            title="Génie Logiciel"
            subTitle="Baccalauréat en ingénierie logiciel"
          >
          </r-bullet-point-item>
          <r-bullet-point-item
            date="2019-2023"
            underDate="Université Laval"
            title="Génie Logiciel"
            subTitle="Baccalauréat en ingénierie logiciel"
          >
          </r-bullet-point-item>
          <r-bullet-point-item date="2023" title="Génie Logiciel" subTitle="Baccalauréat en ingénierie logiciel" last=${!0}>
          </r-bullet-point-item>
        </ul>
      </div>
    `}};$t.styles=l`
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
      display: flex;
      justify-content: start;
    }

    ul {
      width: 100%;
      list-style: none;
      padding: 0;
    }
  `,$t=wt([it("r-bullet-point")],$t);var jt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let St=class extends Y{render(){return M`
      <div class="container">
        <r-section-title>
          <slot />
        </r-section-title>
        <r-bullet-point></r-bullet-point>
      </div>
    `}};St.styles=l`
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }
  `,St=jt([it("r-section")],St);var Ot=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};const kt=[{date:"2019-2023",establishment:"Université Laval",program:"Génie logiciel",description:"Baccalauréat en ingénierie logiciel"},{date:"2016-2018",establishment:"Cégep Ste-Foy",program:"Science de la nature",description:"Diplôme d’étude collégiale (DEC)"}];let At=class extends Y{render(){return M`
      <div class="container">
        <r-section-title> Éducation </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(kt,((t,i)=>M`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.establishment}
                      title=${t.program}
                      subTitle=${t.description}
                      last=${i===kt.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};At.styles=l`
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
  `,At=Ot([it("r-education")],At);var Ct=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};const Tt=[{date:"2022-présent",type:"Temps partiel",title:"DevOps",description:"Soutien à la livraison des développeurs"},{date:"Été 2021",type:"Stage",title:"Développeur Java/Cobol",description:"Assurance vie et individuelle"},{date:"Été 2020",type:"Stage",title:"Développeur Powershell/PHP",description:"Sécurité informatique - GIA et SecOff"},{date:"2019-2022",type:"Temps Partiel",title:"Développeur Powershell/PHP",description:"Sécurité informatique - GIA"},{date:"2017-2019",type:"Temps Partiel",title:"Étudiant aux opérations TI",description:"Centre de repographie"}];let Et=class extends Y{render(){return M`
      <div class="container">
        <r-section-title> Expérience </r-section-title>
        <img src="../../../assets/beneva.png" class="beneva-logo" height="40px" />
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(Tt,((t,i)=>M`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.type}
                      title=${t.title}
                      subTitle=${t.description}
                      last=${i===Tt.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Et.styles=l`
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
  `,Et=Ct([it("r-experience")],Et);var _t=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};const Ut=[{date:"2021",title:"Bourse d'excellence en science de l'informatique",description:"Ministre de l'enseignement supérieur du Québec"}];let Dt=class extends Y{render(){return M`
      <div class="container">
        <r-section-title> Récompenses </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(Ut,(t=>M`
                    <r-bullet-point-item date=${t.date} title=${t.title} subTitle=${t.description} last=${!0}>
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Dt.styles=l`
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
  `,Dt=_t([it("r-awards")],Dt);var Mt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};const Pt=[{date:"2021-2023",establishment:"AEGLO",program:"Représentant génie logiciel",description:"Représente les étudiants en GLO sur le CA de l'ASETIN"},{date:"2022-2023",establishment:"ASETIN",program:"VP finissant",description:"Organisations des activités des finissants"}];let Lt=class extends Y{render(){return M`
      <div class="container">
        <r-section-title> Implications </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(Pt,((t,i)=>M`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.establishment}
                      title=${t.program}
                      subTitle=${t.description}
                      last=${i===Pt.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Lt.styles=l`
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
  `,Lt=Mt([it("r-implications")],Lt);var Rt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let It=class extends Y{render(){return M`
      <div class="container">
        <r-section-title> Compétences </r-section-title>
        <img width="90%" src="../../../assets/skills.png" />
      </div>
    `}};It.styles=l`
    :host {
      display: flex;
    }

    .container {
      width: 100%;
      text-align: center;
    }
  `,It=Rt([it("r-skills")],It);var Nt=function(t,i,e,s){for(var n,l=arguments.length,r=l<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(l<3?n(r):l>3?n(i,e,r):n(i,e))||r);return l>3&&r&&Object.defineProperty(i,e,r),r};let zt=class extends Y{render(){return M`
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
          <r-awards class="responsive reduce-gap fit-column-awards"></r-awards>
        </div>
        <div class="split-container" style>
          <r-implications class="middle-spacing responsive reduce-gap fit-column-implications"></r-implications>
          <div class="responsive copyrights">Copyright © 2023 Émile Savard</div>
        </div>
      </div>
    `}};zt.styles=l`
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
      text-align: end;
      font-weight: ${ct.light};
      margin-top: 5px;
    }

    .split-container {
      display: flex;
      margin-top: 18px;
    }

    .middle-spacing {
      padding-right: 48px;
    }

    .fit-column-skills {
      margin-top: -420px;
    }

    .fit-column-awards {
      margin-top: -70px;
    }

    .fit-column-implications {
      margin-top: -190px;
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
        text-align: center;
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
        margin-top: 10px;
      }

      .fit-column-implications {
        margin-top: -60px;
      }
    }
  `,zt=Nt([it("r-app")],zt);export{zt as RApp};
