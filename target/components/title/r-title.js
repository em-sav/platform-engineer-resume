var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let RTitle = class RTitle extends LitElement {
    render() {
        return html `
            <header class="header-container">
                <div class="flex-space-between">
                    <h1 class="title-fit">Émile Savard</h1>
                    <h3 class="title-fit"">Développeur Logiciel</h3>
                </div>
                <hr > 
            </header>
    `;
    }
};
RTitle.styles = css `
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
RTitle = __decorate([
    customElement('r-title')
], RTitle);
export { RTitle };
//# sourceMappingURL=r-title.js.map