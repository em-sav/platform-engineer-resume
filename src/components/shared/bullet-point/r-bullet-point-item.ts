import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { palette, typography } from "../../../global/theme";

@customElement("r-bullet-point-item")
export class RBulletPointItem extends LitElement {
  static override styles = css`
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
      width: 100%;
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

    .section-with-image {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .section-image {
      max-height: 28px;
      object-fit: contain;
      margin-left: -16px;
      margin-top: -56px;
      padding-bottom: 28px;
    }

    .section-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    b,
    strong {
      font-weight: 800;
    }
  `;

  @property()
  date!: string;

  @property()
  underDate!: string;

  @property()
  image!: string;

  @property()
  override title!: string;

  @property()
  subTitle!: string;

  @property()
  last = "false";

  override render() {
    return html`
      <li>
        ${this.last === "false" ? html`<span class="line"></span>` : nothing}
        ${this.underDate === undefined || this.underDate === ""
          ? html`
              <span class="bullet" style="width: 10px"></span>
              <div class="section" style="width: 100%; color: ${palette.text.main}">
                <div style="display: flex; justify-content: space-between">
                  <span class="timeline-description-title">${this.title}</span>
                  <span class="timeline-description-title">${this.date}</span>
                </div>
                <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${unsafeHTML(this.subTitle)}</span>
              </div>
            `
          : html`
              <span class="bullet" style="width: 10px"></span>
              <div class="section-container">
                ${this.image ? html`<img class="section-image" src="${this.image}" alt="" />` : nothing}
                <div class="info">
                  <div class="section section-with-image">
                    <span class="timeline-date-range">${this.date}</span>
                    <span style="font-weight: ${typography.weight.normal}">${this.underDate}</span>
                  </div>
                  <div class="section right-part">
                    <span class="timeline-description-title">${this.title}</span>
                    <span style="font-weight: ${typography.weight.light}; text-align: start; font-size: 14px">${unsafeHTML(this.subTitle)}</span>
                  </div>
                </div>
              </div>
            `}
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-bullet-point-item": RBulletPointItem;
  }
}
