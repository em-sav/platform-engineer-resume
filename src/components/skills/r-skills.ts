import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../shared/r-section-title";
import { originPath } from "../../global/config";
import { palette, typography } from "../../global/theme";

@customElement("r-skills")
export class RSkills extends LitElement {
  static override styles = css`
    :host {
      display: flex;
    }

    .container {
      width: 100%;
      text-align: start;
    }
    
    .skills-text {
      margin-left: 8px; 
      font-size: 14px;
      font-weight: ${typography.weight.light};
    }
  `;

  override render() {
    return html`
      <div class="container">
        <r-section-title> Compétences </r-section-title>
        <div style="display: flex">
          <img width="71%" src=${originPath() + "assets/skills.png"} alt="skills" />
          <div class="skills-text">
            Tout au long de mon parcours universitaire et professionnel, j'ai eu la chance de découvrir, d'apprendre et de maîtriser certaines technologies clé de l'industrie
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-skills": RSkills;
  }
}
