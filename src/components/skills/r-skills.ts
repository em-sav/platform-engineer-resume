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
    
    .diagram {
      display: flex;
    }
    
    .skills-text {
      margin-left: 8px; 
      font-size: 12px;
      font-weight: ${typography.weight.light};
      color: ${palette.text.main};
    }

    @media only screen and (max-width: 800px) {
      .skills-text {
        font-size: 16px;
        margin-left: 0;
        margin-top: 12px;
      }
      
      .diagram{
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  override render() {
    return html`
      <div class="container">
        <r-section-title> Compétences </r-section-title>
        <div class="diagram">
          <img style="max-width: 278px;" src=${originPath() + "assets/skills.png"} alt="skills" />
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
