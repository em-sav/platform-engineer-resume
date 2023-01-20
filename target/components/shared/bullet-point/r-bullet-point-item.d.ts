import { LitElement } from "lit";
export declare class RBulletPointItem extends LitElement {
    static styles: import("lit").CSSResult;
    date: string;
    underDate: string;
    title: string;
    subTitle: string;
    last: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "r-bullet-point-item": RBulletPointItem;
    }
}
//# sourceMappingURL=r-bullet-point-item.d.ts.map