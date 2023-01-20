import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item"
import "../shared/r-section-title"

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
]

@customElement('r-implications')
export class RImplications extends LitElement {
    static override styles = css`
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

    override render() {
        return html`
            <div class="container">
                <r-section-title>
                    Implications
                </r-section-title>
                <div style="display: flex; align-items: start">
                    <div class="container">
                        <ul>
                            ${map(educationItems, (item, index) =>
            html`
                                        <r-bullet-point-item
                                                date=${item.date}
                                                underDate=${item.establishment}
                                                title=${item.program}
                                                subTitle=${item.description}
                                                last=${index === educationItems.length - 1}
                                        >
                                        </r-bullet-point-item>
                                    `
        )}
                        </ul>
                    </div> 
                </div>
            </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'r-implications': RImplications;
    }
}
