import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { map } from "lit/directives/map.js";
import "../shared/bullet-point/r-bullet-point-item"
import "../shared/r-section-title"

const experienceItems = [
    {
        date: "2022-présent",
        type: "Temps partiel",
        title: "DevOps",
        description: "Soutien à la livraison des développeurs"
    },
    {
        date: "Été 2021",
        type: "Stage",
        title: "Développeur Java/Cobol",
        description: "Assurance vie et individuelle"
    },
    {
        date: "Été 2020",
        type: "Stage",
        title: "Développeur Powershell/PHP",
        description: "Sécurité informatique - GIA et SecOff"
    },
    {
        date: "2019-2022",
        type: "Temps Partiel",
        title: "Développeur Powershell/PHP",
        description: "Sécurité informatique - GIA"
    },
    {
        date: "2017-2019",
        type: "Temps Partiel",
        title: "Étudiant aux opérations TI",
        description: "Centre de repographie"
    }
]

@customElement('r-experience')
export class RExperience extends LitElement {
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
        
        .beneva-logo {
            margin-left: -14px;
        }
  `;

    override render() {
        return html`
            <div class="container">
                <r-section-title>
                    Expérience
                </r-section-title>
                <img src="../../../assets/beneva.png" class="beneva-logo" height="40px">
                <div style="display: flex; align-items: start">
                    <div class="container">
                        <ul>
                            ${map(experienceItems, (item, index) =>
            html`
                                        <r-bullet-point-item
                                                date=${item.date}
                                                underDate=${item.type}
                                                title=${item.title}
                                                subTitle=${item.description}
                                                last=${index === experienceItems.length - 1}
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
        'r-experience': RExperience;
    }
}
