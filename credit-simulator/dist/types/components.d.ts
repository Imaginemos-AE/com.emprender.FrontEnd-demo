/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { Credit } from "./modules/credit-simulator.module";
export namespace Components {
    interface EmprenderCreditSimulator {
    }
    interface EmprenderCsItem {
        "space": boolean;
        "subText"?: string;
        "text": string;
        "value": number;
    }
    interface EmprenderCsSlider {
        "formatter"?: (value: number) => string;
        "label": string;
        "max": number;
        "maxLabel"?: string;
        "min": number;
        "minLabel"?: string;
        "step": number;
        "updateBoundaries": (min: number, max: number, step: number, minLabel: string, maxLabel: string, newValue?: number) => Promise<void>;
        "value": number;
    }
}
declare global {
    interface HTMLEmprenderCreditSimulatorElement extends Components.EmprenderCreditSimulator, HTMLStencilElement {
    }
    var HTMLEmprenderCreditSimulatorElement: {
        prototype: HTMLEmprenderCreditSimulatorElement;
        new (): HTMLEmprenderCreditSimulatorElement;
    };
    interface HTMLEmprenderCsItemElement extends Components.EmprenderCsItem, HTMLStencilElement {
    }
    var HTMLEmprenderCsItemElement: {
        prototype: HTMLEmprenderCsItemElement;
        new (): HTMLEmprenderCsItemElement;
    };
    interface HTMLEmprenderCsSliderElement extends Components.EmprenderCsSlider, HTMLStencilElement {
    }
    var HTMLEmprenderCsSliderElement: {
        prototype: HTMLEmprenderCsSliderElement;
        new (): HTMLEmprenderCsSliderElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-credit-simulator": HTMLEmprenderCreditSimulatorElement;
        "emprender-cs-item": HTMLEmprenderCsItemElement;
        "emprender-cs-slider": HTMLEmprenderCsSliderElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderCreditSimulator {
        "onCreditRequested"?: (event: CustomEvent<Credit>) => void;
    }
    interface EmprenderCsItem {
        "space"?: boolean;
        "subText"?: string;
        "text"?: string;
        "value"?: number;
    }
    interface EmprenderCsSlider {
        "formatter"?: (value: number) => string;
        "label"?: string;
        "max"?: number;
        "maxLabel"?: string;
        "min"?: number;
        "minLabel"?: string;
        "onSliderChange"?: (event: CustomEvent<{ value: number, formatedValue?: string }>) => void;
        "step"?: number;
        "value"?: number;
    }
    interface IntrinsicElements {
        "emprender-credit-simulator": EmprenderCreditSimulator;
        "emprender-cs-item": EmprenderCsItem;
        "emprender-cs-slider": EmprenderCsSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-credit-simulator": LocalJSX.EmprenderCreditSimulator & JSXBase.HTMLAttributes<HTMLEmprenderCreditSimulatorElement>;
            "emprender-cs-item": LocalJSX.EmprenderCsItem & JSXBase.HTMLAttributes<HTMLEmprenderCsItemElement>;
            "emprender-cs-slider": LocalJSX.EmprenderCsSlider & JSXBase.HTMLAttributes<HTMLEmprenderCsSliderElement>;
        }
    }
}
