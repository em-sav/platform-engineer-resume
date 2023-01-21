import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/title/r-title";
import "./components/contact/r-contact";
import "./components/summary/r-summary";
import "./components/education/r-education";
import "./components/experience/r-experience";
import "./components/awards/r-awards";
import "./components/implications/r-implications";
import "./components/skills/r-skills";
import { typography } from "./global/theme";

@customElement("r-app")
export class RApp extends LitElement {
  static override styles = css`
    :host {
      font-family: Montserrat, sans-serif;
    }

    .responsive {
      width: 50%;
    }

    .container {
      max-width: 832px;
      margin: 0 auto;
      padding: 24px;
    }

    .copyrights {
      text-align: end;
      font-weight: ${typography.weight.light};
      margin-top: -14px;
    }

    .split-container {
      display: flex;
      margin-top: 18px;
    }

    .middle-spacing {
      padding-right: 48px;
    }

    .fit-column-skills {
      margin-top: -420px;
    }

    .fit-column-awards {
      margin-top: -70px;
    }

    .fit-column-implications {
      margin-top: -210px;
    }

    @media only screen and (max-width: 600px) {
      .container {
        padding: 6px;
      }

      .responsive {
        width: 100%;
      }

      .reduce-gap {
        margin-top: -60px;
      }

      .copyrights {
        text-align: center;
      }

      .split-container {
        flex-direction: column;
      }

      .middle-spacing {
        padding-right: 0;
      }

      .fit-column-skills {
        margin-top: -70px;
      }

      .fit-column-awards {
        margin-top: 10px;
      }

      .fit-column-implications {
        margin-top: -60px;
      }
    }
  `;

  override render() {
    return html`
      <div class="container">
        <r-title></r-title>
        <div class="split-container">
          <r-contact class="middle-spacing responsive"></r-contact>
          <r-summary class="responsive"></r-summary>
        </div>
        <div class="split-container">
          <r-education class="middle-spacing responsive"></r-education>
          <r-experience class="responsive reduce-gap"></r-experience>
        </div>
        <div class="split-container">
          <r-skills class="middle-spacing responsive fit-column-skills"></r-skills>
          <r-awards class="responsive reduce-gap fit-column-awards"></r-awards>
        </div>
        <div class="split-container">
          <r-implications class="middle-spacing responsive reduce-gap fit-column-implications"></r-implications>
          <div class="responsive copyrights">Copyright © 2023 Émile Savard</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "r-app": RApp;
  }
}
