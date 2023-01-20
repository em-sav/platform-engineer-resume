import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import "./r-section-title"
import "./bullet-point/r-bullet-point"

@customElement('r-section')
export class RSection extends LitElement {
    static override styles = css`
        :host {
            display: flex;
            align-items: start;
        }
        
        .container {
            width: 100%;
        }
        
  `;

    override render() {
        return html`
            <div class="container">
                <r-section-title>
                    <slot/>
                </r-section-title>
                <r-bullet-point></r-bullet-point>
            </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'r-section': RSection;
    }
}
