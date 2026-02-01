import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item";
import "../shared/r-section-title";
import { originPath } from "../../global/config";


const benevaExperiences = [
  {
    date: "2023-présent",
    type: "Temps plein",
    title: "Ingénieur Platforme",
    description: "Platforme et DevEx pour FibeTV / Crave",
    image: originPath() + "assets/bell.png"
  },
  {
    date: "2022-2023",
    type: "Temps partiel",
    title: "DevOps",
    description: "Soutien à la livraison des développeurs",
    image: originPath() + "assets/beneva.png"
  },
  {
    date: "2019-2022",
    type: "Stage/temps partiel",
    title: "Développeur Logiciel",
    description: "Sécurité informatique et aussurance individuelle"
  },
  {
    date: "2017-2019",
    type: "Temps partiel",
    title: "Étudiant aux opérations TI",
    description: "Centre de reprographie"
  }
];

@customElement("r-experience")
export class RExperience extends LitElement {
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

    .beneva-logo {
      margin-left: -14px;
    }
  `;

  override render() {
    return html`
      <div class="container">
        <r-section-title> Expériences </r-section-title>
        <div style="display: flex; align-items: start; padding-top: 42px">
          <div class="container">
            <ul>
              ${map(
                benevaExperiences,
                (item, index) =>
                  html`
                    <r-bullet-point-item
                      date=${item.date}
                      underDate=${item.type}
                      title=${item.title}
                      subTitle=${item.description}
                      last=${index === benevaExperiences.length - 1}
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
    "r-experience": RExperience;
  }
}
