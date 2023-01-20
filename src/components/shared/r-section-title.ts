import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('r-section-title')
export class RSectionTitle extends LitElement {
    static override styles = css`
        :host {
            display: flex;
            width: 100%;
            align-items: center;
            flex: 1;
            margin-bottom: 20px;
        }
        
        hr {
            flex-grow: 1;
            border-bottom-color: black;
            border-style: hidden;
            border-bottom-style: solid;
            border-width: 2.5px;
            height: 6px;
            margin-left: 8px;
            
        }

        .title-fit {
            margin-bottom: 0;
            margin-top: 0;
            margin-left: -3px;
            display: flex;
        }
  `;

    override render() {
        return html`
            <h1 class="title-fit">
                <slot/>
            </h1>
            <hr/>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'r-section-title': RSectionTitle;
    }
}
