import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "./r-contact-item";
import { originPath } from "../../global/config";

const contactItems = [
  {
    value: "emile.savard.21@gmail.com",
    path: originPath() + "assets/mail-enveloppe.svg",
    href: "mailto:emile.savard.21@gmail.com"
  },
  {
    value: "581-309-7373",
    path: originPath() + "assets/call.svg",
    href: "tel:581-309-7373"
  },
  {
    value: "linkedin",
    path: originPath() + "assets/linkedin.svg",
    href: "https://www.linkedin.com/in/%C3%A9mile-savard-341540192/"
  }
];

@customElement("r-contact")
export class RContact extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  override render() {
    return html`
      ${map(
        contactItems,
        (item) => html` <r-contact-item value=${item.value} path=${item.path} href=${item.href}></r-contact-item> `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-contact": RContact;
  }
}
