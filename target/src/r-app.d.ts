import { LitElement } from "lit";
import "./components/title/r-title";
import "./components/contact/r-contact";
import "./components/summary/r-summary";
import "./components/shared/r-section";
import "./components/education/r-education";
import "./components/experience/r-experience";
import "./components/awards/r-awards";
import "./components/implications/r-implications";
import "./components/skills/r-skills";
export declare class RApp extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "r-app": RApp;
    }
}
//# sourceMappingURL=r-app.d.ts.map