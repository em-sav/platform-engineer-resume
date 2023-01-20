var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import "../shared/r-section-title";
let RSkills = class RSkills extends LitElement {
    render() {
        return html `
            <div class="container">
                <r-section-title>
                    Compétences
                </r-section-title>
                    <img width="90%" src="../../../assets/skills.png">

            </div>
    `;
    }
};
RSkills.styles = css `
        :host {
            display: flex;
        }
        
        .container {
            width: 100%;
            text-align: center;
        }
  `;
RSkills = __decorate([
    customElement('r-skills')
], RSkills);
export { RSkills };
//# sourceMappingURL=r-skills.js.map