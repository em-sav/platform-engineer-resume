import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('r-title')
export class RTitle extends LitElement {
    static override styles = css`
    .flex-space-between {
        display: flex;
        justify-content: space-between;
    }
        
    .header-container {
        width: 100%;
    }
    
    hr {
        border-color: black;
        border-width: 2px;
        margin-bottom: 0;
        background-color: black;
    }
        
    h1 {
        font-size: 36px;
        margin-left: -3px;
    }
        
    .title-fit {
        margin-bottom: 0;
        margin-top: 0;
        display: flex;
        align-items: end;
    }

    @media only screen and (max-width: 600px) {
        h3 {
            text-align: end;
        }
    }
  `;

    override render() {
        return html`
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Développeur Logiciel</h3>
                </div>
                <hr > 
            </header>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'r-title': RTitle;
    }
}
