import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./r-bullet-point-item";

@customElement("r-bullet-point")
export class RBulletPoint extends LitElement {
  static override styles = css`
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

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    "r-bullet-point": RBulletPoint;
  }
}
