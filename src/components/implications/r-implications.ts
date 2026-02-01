import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item";
import "../shared/r-section-title";
import { originPath } from "../../global/config";

const educationItems = [
  {
    date: "2026",
    establishment: "Kubernetes",
    program: "1.36 Release Team",
    description: "Participation à la livraison de la version 1.36 de Kubernetes",
    image: originPath() + "assets/cncf.png"
  },
  {
    date: "2023-présent",
    establishment: "CNCF meetups",
    program: "Présentateur",
    description: "Organisation et présentations dans les meetups à Québec",
  },
  {
    date: "2021-2023",
    establishment: "Université Laval",
    program: "AEGLO / ASETIN",
    description: "Implication dans les commités étudiants d'informatique",
    image: originPath() + "assets/ulaval.png"
  },
];

@customElement("r-implications")
export class RImplications extends LitElement {
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
        <r-section-title> Implications </r-section-title>
        <div style="display: flex; align-items: start; padding-top: 42px"">
          <div class="container">
            <ul>
              ${map(
                educationItems,
                (item, index) =>
                  html`
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.establishment}
                      title=${item.program}
                      subTitle=${item.description}
                      last=${index === educationItems.length - 1}
                      image=${item.image}
                    >
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
    "r-implications": RImplications;
  }
}
