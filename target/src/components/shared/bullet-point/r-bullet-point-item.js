var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { palette, typography } from "../../../global/theme";
let RBulletPointItem = class RBulletPointItem extends LitElement {
    constructor() {
        super(...arguments);
        this.last = "false";
    }
    render() {
        return html `
      <li>
        ${this.last === "false" ? html `<span class="line"></span>` : nothing}
        <span class="bullet"></span>
        ${this.underDate === undefined
            ? html `
              <div class="section" style="width: 100%; color: ${palette.text.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${typography.weight.light}; text-align: justify;">${this.subTitle}</span>
              </div>
            `
            : html `
              <div class="info">
                <div class="section">
                  <span class="timeline-date-range">${this.date}</span>
                  <span style="font-weight: ${typography.weight.normal}">${this.underDate}</span>
                </div>
                <div class="section right-part">
                  <span class="timeline-description-title">${this.title}</span>
                  <span style="font-weight: ${typography.weight.light}; text-align: justify;">${this.subTitle}</span>
                </div>
              </div>
            `}
      </li>
    `;
    }
};
RBulletPointItem.styles = css `
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
__decorate([
    property()
], RBulletPointItem.prototype, "date", void 0);
__decorate([
    property()
], RBulletPointItem.prototype, "underDate", void 0);
__decorate([
    property()
], RBulletPointItem.prototype, "title", void 0);
__decorate([
    property()
], RBulletPointItem.prototype, "subTitle", void 0);
__decorate([
    property()
], RBulletPointItem.prototype, "last", void 0);
RBulletPointItem = __decorate([
    customElement("r-bullet-point-item")
], RBulletPointItem);
export { RBulletPointItem };
//# sourceMappingURL=r-bullet-point-item.js.map