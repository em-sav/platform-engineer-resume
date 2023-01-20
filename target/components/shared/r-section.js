var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./r-section-title";
import "./bullet-point/r-bullet-point";
let RSection = class RSection extends LitElement {
    render() {
        return html `
      <div class="container">
        <r-section-title>
          <slot />
        </r-section-title>
        <r-bullet-point></r-bullet-point>
      </div>
    `;
    }
};
RSection.styles = css `
    :host {
      display: flex;
      align-items: start;
    }

    .container {
      width: 100%;
    }
  `;
RSection = __decorate([
    customElement("r-section")
], RSection);
export { RSection };
//# sourceMappingURL=r-section.js.map