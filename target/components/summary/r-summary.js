var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { typography } from "../../global/theme";
let ResumeSummary = class ResumeSummary extends LitElement {
    render() {
        return html `
      <div class="container">
        Ma passion pour les nouvelles technologies ainsi que le soucis de livrer du code de qualité tout en appliquant les bonnes
        pratiques fait de moi un développeur polyvalent et réfléchit
      </div>
    `;
    }
};
ResumeSummary.styles = css `
    :host {
      display: flex;
      text-align: justify;
      font-weight: ${typography.weight.light};
    }
  `;
ResumeSummary = __decorate([
    customElement("r-summary")
], ResumeSummary);
export { ResumeSummary };
//# sourceMappingURL=r-summary.js.map