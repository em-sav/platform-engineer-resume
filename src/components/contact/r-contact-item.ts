import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { palette, typography } from "../../global/theme";

@customElement("r-contact-item")
export class RContactItem extends LitElement {
  static override styles = css`
    :host {
      display: flex;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    .contact-item {
      color: ${palette.text.main};
      margin-left: 5px;
      font-weight: ${typography.weight.light};
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;

  @property()
  value!: string;

  @property()
  path!: string;

  @property()
  href!: string;

  override render() {
    return html`
      <div class="container">
        <img width="15px" src=${this.path} alt="mail" />
        ${this.href === undefined
          ? html`<span class="contact-item">${this.value}</span>`
          : html`<a class="contact-item" href=${this.href}>${this.value}</a>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-contact-item": RContactItem;
  }
}
