import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item";
import "../shared/r-section-title";

const awardsItems = [
  {
    date: "2021",
    title: "Bourse d'excellence en science de l'informatique",
    description: "Ministre de l'enseignement supérieur du Québec"
  },
  {
    date: "2021 et 2022",
    title: "Bourse d'étude en TI",
    description: "Beneva "
  }
];

@customElement("r-awards")
export class RAwards extends LitElement {
  static override styles = css`
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

  override render() {
    return html`
      <div class="container">
        <r-section-title> Mentions </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${map(
                  awardsItems,
                (item, index) =>
                  html`
                    <r-bullet-point-item date=${item.date} title=${item.title} subTitle=${item.description} last=${index === awardsItems.length - 1}>
                    </r-bullet-point-item>
                  `
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-awards": RAwards;
  }
}
