import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { typography } from "../../global/theme";

@customElement("r-summary")
export class ResumeSummary extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      text-align: justify;
      font-weight: ${typography.weight.light};
    }
  `;

  override render() {
    return html`
      <div class="container">
        Ma passion pour les nouvelles technologies ainsi que le soucis de livrer du code de qualité tout en appliquant les bonnes
        pratiques fait de moi un développeur polyvalent et réfléchit
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-summary": ResumeSummary;
  }
}
