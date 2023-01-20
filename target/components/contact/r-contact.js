var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import "./r-contact-item";
const contactItems = [
    {
        value: "emile.savard.21@gmail.com",
        path: "../../../assets/mail-enveloppe.svg",
        href: "mailto:emile.savard.21@gmail.com"
    },
    {
        value: "581-309-7373",
        path: "../../../assets/call.svg",
        href: "tel:581-309-7373"
    },
    {
        value: "linkedin",
        path: "../../../assets/linkedin.svg",
        href: "https://www.linkedin.com/in/%C3%A9mile-savard-341540192/"
    }
];
let RContact = class RContact extends LitElement {
    render() {
        return html `
                ${map(contactItems, (item) => html `
                            <r-contact-item value=${item.value} path=${item.path} href=${item.href}></r-contact-item>
                        `)}
    `;
    }
};
RContact.styles = css `
        :host {
            display: flex;
            flex-direction: column;
        }
  `;
RContact = __decorate([
    customElement('r-contact')
], RContact);
export { RContact };
//# sourceMappingURL=r-contact.js.map