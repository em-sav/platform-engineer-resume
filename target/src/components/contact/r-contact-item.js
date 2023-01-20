var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { typography } from "../../global/theme";
let RContactItem = class RContactItem extends LitElement {
    render() {
        return html `
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${this.href === undefined
            ? html `<span class="contact-item">${this.value}</span>`
            : html `<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `;
    }
};
RContactItem.styles = css `
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
      font-weight: ${typography.weight.light};
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;
__decorate([
    property()
], RContactItem.prototype, "value", void 0);
__decorate([
    property()
], RContactItem.prototype, "path", void 0);
__decorate([
    property()
], RContactItem.prototype, "href", void 0);
RContactItem = __decorate([
    customElement("r-contact-item")
], RContactItem);
export { RContactItem };
//# sourceMappingURL=r-contact-item.js.map