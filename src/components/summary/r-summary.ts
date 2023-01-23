import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { palette, typography } from "../../global/theme";

@customElement("r-summary")
export class ResumeSummary extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      text-align: justify;
      // color: ${palette.text.main};
      font-weight: ${typography.weight.light};
    }
  `;

  override render() {
    return html`
      <div>
        Ma passion pour les nouvelles technologies ainsi que mon souci de livrer du code de qualité tout en appliquant les bonnes
        pratiques font de moi un développeur polyvalent
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-summary": ResumeSummary;
  }
}
