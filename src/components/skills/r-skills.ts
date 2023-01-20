import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "../shared/r-section-title"

@customElement('r-skills')
export class RSkills extends LitElement {
    static override styles = css`
        :host {
            display: flex;
        }
        
        .container {
            width: 100%;
            text-align: center;
        }
  `;

    override render() {
        return html`
            <div class="container">
                <r-section-title>
                    Compétences
                </r-section-title>
                    <img width="90%" src="../../../assets/skills.png">

            </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'r-skills': RSkills;
    }
}
