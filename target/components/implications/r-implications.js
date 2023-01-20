var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item";
import "../shared/r-section-title";
const educationItems = [
    {
        date: "2021-2023",
        establishment: "AEGLO",
        program: "Représentant génie logiciel",
        description: "Représente les étudiants en GLO sur le CA de l'ASETIN"
    },
    {
        date: "2022-2023",
        establishment: "ASETIN",
        program: "VP finissant",
        description: "Organisations des activités des finissants"
    }
];
let RImplications = class RImplications extends LitElement {
    render() {
        return html `
            <div class="container">
                <r-section-title>
                    Implications
                </r-section-title>
                <div style="display: flex; align-items: start">
                    <div class="container">
                        <ul>
                            ${map(educationItems, (item, index) => html `
                                        <r-bullet-point-item
                                                date=${item.date}
                                                underDate=${item.establishment}
                                                title=${item.program}
                                                subTitle=${item.description}
                                                last=${index === educationItems.length - 1}
                                        >
                                        </r-bullet-point-item>
                                    `)}
                        </ul>
                    </div> 
                </div>
            </div>
    `;
    }
};
RImplications.styles = css `
        :host {
            display: flex;
            align-items: start;
        }
        
        .container {
            width: 100%;
        }
        
        .items-container {
            width: 100%;
            display: flex;
            align-items: start;
            justify-content: start;
        }

        ul {
            width: 100%;
            list-style: none;
            padding: 0;
        }
  `;
RImplications = __decorate([
    customElement('r-implications')
], RImplications);
export { RImplications };
//# sourceMappingURL=r-implications.js.map