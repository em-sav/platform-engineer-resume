var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
let RSectionTitle = class RSectionTitle extends LitElement {
    render() {
        return html `
      <h1 class="title-fit">
        <slot />
      </h1>
      <hr />
    `;
    }
};
RSectionTitle.styles = css `
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
RSectionTitle = __decorate([
    customElement("r-section-title")
], RSectionTitle);
export { RSectionTitle };
//# sourceMappingURL=r-section-title.js.map