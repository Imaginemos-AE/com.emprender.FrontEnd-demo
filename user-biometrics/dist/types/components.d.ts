/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface EmprenderUbHome {
    }
    interface EmprenderUserBiometrics {
    }
}
declare global {
    interface HTMLEmprenderUbHomeElement extends Components.EmprenderUbHome, HTMLStencilElement {
    }
    var HTMLEmprenderUbHomeElement: {
        prototype: HTMLEmprenderUbHomeElement;
        new (): HTMLEmprenderUbHomeElement;
    };
    interface HTMLEmprenderUserBiometricsElement extends Components.EmprenderUserBiometrics, HTMLStencilElement {
    }
    var HTMLEmprenderUserBiometricsElement: {
        prototype: HTMLEmprenderUserBiometricsElement;
        new (): HTMLEmprenderUserBiometricsElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-ub-home": HTMLEmprenderUbHomeElement;
        "emprender-user-biometrics": HTMLEmprenderUserBiometricsElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderUbHome {
    }
    interface EmprenderUserBiometrics {
    }
    interface IntrinsicElements {
        "emprender-ub-home": EmprenderUbHome;
        "emprender-user-biometrics": EmprenderUserBiometrics;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-ub-home": LocalJSX.EmprenderUbHome & JSXBase.HTMLAttributes<HTMLEmprenderUbHomeElement>;
            "emprender-user-biometrics": LocalJSX.EmprenderUserBiometrics & JSXBase.HTMLAttributes<HTMLEmprenderUserBiometricsElement>;
        }
    }
}
