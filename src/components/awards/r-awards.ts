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
        <r-section-title> Récompenses </r-section-title>
        <div style="display: flex; align-items: start">
          <div class="container">
            <ul>
              ${map(
                experienceItems,
                (item) =>
                  html`
                    <r-bullet-point-item date=${item.date} title=${item.title} subTitle=${item.description} last=${true}>
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
