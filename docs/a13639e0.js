const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var o;const a=window,c=a.trustedTypes,d=c?c.emptyScript:"",p=a.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:h).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:h;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:v}),(null!==(o=a.reactiveElementVersions)&&void 0!==o?o:a.reactiveElementVersions=[]).push("1.6.1");const m=window,y=m.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,_="?"+b,x=`<${_}>`,A=document,w=(t="")=>A.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),C=/'/g,T=/"/g,k=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),D=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),N=new WeakMap,M=A.createTreeWalker(A,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",l=O;for(let e=0;e<i;e++){const i=t[e];let o,a,c=-1,d=0;for(;d<i.length&&(l.lastIndex=d,a=l.exec(i),null!==a);)d=l.lastIndex,l===O?"!--"===a[1]?l=P:void 0!==a[1]?l=R:void 0!==a[2]?(k.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=j):void 0!==a[3]&&(l=j):l===j?">"===a[0]?(l=null!=n?n:O,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?j:'"'===a[3]?T:C):l===T||l===C?l=j:l===P||l===R?l=O:(l=j,n=void 0);const p=l===j&&t[e+1].startsWith("/>")?" ":"";r+=l===O?i+x:c>=0?(s.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+b+p):i+b+(-2===c?(s.push(void 0),e):p)}const o=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(o):o,s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const l=t.length-1,o=this.parts,[a,c]=L(t,e);if(this.el=z.createElement(a,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&o.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?J:"@"===e[1]?K:G})}else o.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(k.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),M.nextNode(),o.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===_)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)o.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var n,r,l,o;if(e===D)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=E(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(l=(o=i)._$Co)&&void 0!==l?l:o._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=B(t,a._$AS(t,e.values),a,s)),e}class I{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);M.currentNode=n;let r=M.nextNode(),l=0,o=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Z(r,this,t)),this.u.push(e),a=s[++o]}l!==(null==a?void 0:a.index)&&(r=M.nextNode(),l++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),E(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new I(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new z(t)),e}k(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=B(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const s=t;let l,o;for(t=n[0],l=0;l<n.length-1;l++)o=B(this,s[i+l],e,l),o===D&&(o=this._$AH[l]),r||(r=!E(o)||o!==this._$AH[l]),o===H?t=H:t!==H&&(t+=(null!=o?o:"")+n[l+1]),this._$AH[l]=o}r&&!s&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const W=y?y.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends G{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:H)===D)return;const s=this._$AH,n=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const F=m.litHtmlPolyfillSupport;null==F||F(z,q),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.6.1");var Q,X;class Y extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=r._$litPart$;if(void 0===l){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=l=new q(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const et=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;var rt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let lt=class extends Y{render(){return U`
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Développeur Logiciel</h3>
                </div>
                <hr > 
            </header>
    `}};function*ot(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}lt.styles=r`
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
  `,lt=rt([et("r-title")],lt);const at={main:r`#5f5c5c`,secondary:r`#b8b5b5`},ct={light:300,normal:400,bold:550,bolder:700};var dt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let pt=class extends Y{render(){return U`
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${void 0===this.href?U`<span class="contact-item">${this.value}</span>`:U`<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `}};pt.styles=r`
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
  `,dt([st()],pt.prototype,"value",void 0),dt([st()],pt.prototype,"path",void 0),dt([st()],pt.prototype,"href",void 0),pt=dt([et("r-contact-item")],pt);const ht=()=>window.location.href;var ut=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};const ft=[{value:"emile.savard.21@gmail.com",path:ht()+"assets/mail-enveloppe.svg",href:"mailto:emile.savard.21@gmail.com"},{value:"581-309-7373",path:ht()+"assets/call.svg",href:"tel:581-309-7373"},{value:"linkedin",path:ht()+"assets/linkedin.svg",href:"https://www.linkedin.com/in/%C3%A9mile-savard-341540192/"}];let vt=class extends Y{render(){return U`
      ${ot(ft,(t=>U` <r-contact-item value=${t.value} path=${t.path} href=${t.href}></r-contact-item> `))}
    `}};vt.styles=r`
    :host {
      display: flex;
      flex-direction: column;
    }
  `,vt=ut([et("r-contact")],vt);var gt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let mt=class extends Y{render(){return U`
      <div class="container">
        Ma passion pour les nouvelles technologies ainsi que le soucis de livrer du code de qualité tout en appliquant les bonnes
        pratiques fait de moi un développeur polyvalent et réfléchit
      </div>
    `}};mt.styles=r`
    :host {
      display: flex;
      text-align: justify;
      font-weight: ${ct.light};
    }
  `,mt=gt([et("r-summary")],mt);var yt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let $t=class extends Y{render(){return U`
      <h1 class="title-fit">
        <slot />
      </h1>
      <hr />
    `}};$t.styles=r`
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
  `,$t=yt([et("r-section-title")],$t);var bt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let _t=class extends Y{constructor(){super(...arguments),this.last="false"}render(){return U`
      <li>
        ${"false"===this.last?U`<span class="line"></span>`:H}
        <span class="bullet"></span>
        ${void 0===this.underDate?U`
              <div class="section" style="width: 100%; color: ${at.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${ct.light}; text-align: justify;">${this.subTitle}</span>
              </div>
            `:U`
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
    `}};_t.styles=r`
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
  `,bt([st()],_t.prototype,"date",void 0),bt([st()],_t.prototype,"underDate",void 0),bt([st()],_t.prototype,"title",void 0),bt([st()],_t.prototype,"subTitle",void 0),bt([st()],_t.prototype,"last",void 0),_t=bt([et("r-bullet-point-item")],_t);var xt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let At=class extends Y{render(){return U`
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
    `}};At.styles=r`
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
  `,At=xt([et("r-bullet-point")],At);var wt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let Et=class extends Y{render(){return U`
      <div class="container">
        <r-section-title>
          <slot />
        </r-section-title>
        <r-bullet-point></r-bullet-point>
      </div>
    `}};Et.styles=r`
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }
  `,Et=wt([et("r-section")],Et);var St=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};const Ot=[{date:"2019-2023",establishment:"Université Laval",program:"Génie logiciel",description:"Baccalauréat en ingénierie logiciel"},{date:"2016-2018",establishment:"Cégep Ste-Foy",program:"Science de la nature",description:"Diplôme d’étude collégiale (DEC)"}];let Pt=class extends Y{render(){return U`
      <div class="container">
        <r-section-title> Éducation </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(Ot,((t,e)=>U`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.establishment}
                      title=${t.program}
                      subTitle=${t.description}
                      last=${e===Ot.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Pt.styles=r`
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
  `,Pt=St([et("r-education")],Pt);var Rt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};const jt=[{date:"2022-présent",type:"Temps partiel",title:"DevOps",description:"Soutien à la livraison des développeurs"},{date:"Été 2021",type:"Stage",title:"Développeur Java/Cobol",description:"Assurance vie et individuelle"},{date:"Été 2020",type:"Stage",title:"Développeur Powershell/PHP",description:"Sécurité informatique - GIA et SecOff"},{date:"2019-2022",type:"Temps Partiel",title:"Développeur Powershell/PHP",description:"Sécurité informatique - GIA"},{date:"2017-2019",type:"Temps Partiel",title:"Étudiant aux opérations TI",description:"Centre de repographie"}];let Ct=class extends Y{render(){return U`
      <div class="container">
        <r-section-title> Expérience </r-section-title>
        <img src=${ht()+"assets/beneva.png"} class="beneva-logo" height="40px"  alt="beneva"/>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(jt,((t,e)=>U`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.type}
                      title=${t.title}
                      subTitle=${t.description}
                      last=${e===jt.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Ct.styles=r`
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
  `,Ct=Rt([et("r-experience")],Ct);var Tt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};const kt=[{date:"2021",title:"Bourse d'excellence en science de l'informatique",description:"Ministre de l'enseignement supérieur du Québec"}];let Ut=class extends Y{render(){return U`
      <div class="container">
        <r-section-title> Récompenses </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(kt,(t=>U`
                    <r-bullet-point-item date=${t.date} title=${t.title} subTitle=${t.description} last=${!0}>
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Ut.styles=r`
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
  `,Ut=Tt([et("r-awards")],Ut);var Dt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};const Ht=[{date:"2021-2023",establishment:"AEGLO",program:"Représentant génie logiciel",description:"Représente les étudiants en GLO sur le CA de l'ASETIN"},{date:"2022-2023",establishment:"ASETIN",program:"VP finissant",description:"Organisations des activités des finissants"}];let Nt=class extends Y{render(){return U`
      <div class="container">
        <r-section-title> Implications </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${ot(Ht,((t,e)=>U`
                    <r-bullet-point-item
                      date=${t.date}
                      underDate=${t.establishment}
                      title=${t.program}
                      subTitle=${t.description}
                      last=${e===Ht.length-1}
                    >
                    </r-bullet-point-item>
                  `))}
            </ul>
          </div>
        </div>
      </div>
    `}};Nt.styles=r`
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
  `,Nt=Dt([et("r-implications")],Nt);var Mt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let Lt=class extends Y{render(){return U`
      <div class="container">
        <r-section-title> Compétences </r-section-title>
        <img width="90%" src=${ht()+"assets/skills.png"}  alt="skills"/>
      </div>
    `}};Lt.styles=r`
    :host {
      display: flex;
    }

    .container {
      width: 100%;
      text-align: center;
    }
  `,Lt=Mt([et("r-skills")],Lt);var zt=function(t,e,i,s){var n,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(l=(r<3?n(l):r>3?n(e,i,l):n(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let Bt=class extends Y{render(){return U`
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
    `}};Bt.styles=r`
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
      margin-top: -14px;
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
      margin-top: -210px;
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
  `,Bt=zt([et("r-app")],Bt);
