var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./r-bullet-point-item";
let RBulletPoint = class RBulletPoint extends LitElement {
    render() {
        return html `
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
          <r-bullet-point-item date="2023" title="Génie Logiciel" subTitle="Baccalauréat en ingénierie logiciel" last=${true}>
          </r-bullet-point-item>
        </ul>
      </div>
    `;
    }
};
RBulletPoint.styles = css `
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
  `;
RBulletPoint = __decorate([
    customElement("r-bullet-point")
], RBulletPoint);
export { RBulletPoint };
//# sourceMappingURL=r-bullet-point.js.map