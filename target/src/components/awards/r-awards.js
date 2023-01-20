var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item";
import "../shared/r-section-title";
const experienceItems = [
    {
        date: "2021",
        title: "Bourse d'excellence en science de l'informatique",
        description: "Ministre de l'enseignement supérieur du Québec"
    }
];
let RAwards = class RAwards extends LitElement {
    render() {
        return html `
      <div class="container">
        <r-section-title> Récompenses </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${map(experienceItems, (item) => html `
                    <r-bullet-point-item date=${item.date} title=${item.title} subTitle=${item.description} last=${true}>
                    </r-bullet-point-item>
                  `)}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
};
RAwards.styles = css `
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
RAwards = __decorate([
    customElement("r-awards")
], RAwards);
export { RAwards };
//# sourceMappingURL=r-awards.js.map