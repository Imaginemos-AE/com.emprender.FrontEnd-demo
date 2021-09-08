/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { BankInformation, CompanyInformation, FinancialInformation, PersonalInformation, PersonalInformation2, References, UserForm, WorkingInformation } from "./module/models";
export namespace Components {
    interface EmprenderUfCompanyInformation {
        "model": CompanyInformation;
        "requiredData": string;
    }
    interface EmprenderUfFinancialInformation {
        "flow": any;
        "model": FinancialInformation;
        "requiredData": string;
    }
    interface EmprenderUfPersonalInformation {
        "model": PersonalInformation;
        "requiredData": string;
    }
    interface EmprenderUfPersonalInformation2 {
        "model": PersonalInformation2;
        "requiredData": string;
    }
    interface EmprenderUfPersonalInformation3 {
        "model": PersonalInformation;
        "model2": PersonalInformation2;
        "model3": BankInformation;
    }
    interface EmprenderUfReferences {
        "flow": any;
        "model": References;
        "requiredData": string;
        "viewRegistration": boolean;
    }
    interface EmprenderUfWorkingInformation {
        "model": WorkingInformation;
        "requiredData": string;
        "viewRegistration": boolean;
    }
    interface EmprenderUserForms {
        "flowType": 'employee' | 'independent';
        "loading": boolean;
        "step": number;
    }
    interface EmprenderUserProfile {
        "alarmUpgrade": boolean;
        "barState": string;
        "flowType": 'employee' | 'independent';
        "loading": boolean;
        "step": number;
    }
}
declare global {
    interface HTMLEmprenderUfCompanyInformationElement extends Components.EmprenderUfCompanyInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfCompanyInformationElement: {
        prototype: HTMLEmprenderUfCompanyInformationElement;
        new (): HTMLEmprenderUfCompanyInformationElement;
    };
    interface HTMLEmprenderUfFinancialInformationElement extends Components.EmprenderUfFinancialInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfFinancialInformationElement: {
        prototype: HTMLEmprenderUfFinancialInformationElement;
        new (): HTMLEmprenderUfFinancialInformationElement;
    };
    interface HTMLEmprenderUfPersonalInformationElement extends Components.EmprenderUfPersonalInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfPersonalInformationElement: {
        prototype: HTMLEmprenderUfPersonalInformationElement;
        new (): HTMLEmprenderUfPersonalInformationElement;
    };
    interface HTMLEmprenderUfPersonalInformation2Element extends Components.EmprenderUfPersonalInformation2, HTMLStencilElement {
    }
    var HTMLEmprenderUfPersonalInformation2Element: {
        prototype: HTMLEmprenderUfPersonalInformation2Element;
        new (): HTMLEmprenderUfPersonalInformation2Element;
    };
    interface HTMLEmprenderUfPersonalInformation3Element extends Components.EmprenderUfPersonalInformation3, HTMLStencilElement {
    }
    var HTMLEmprenderUfPersonalInformation3Element: {
        prototype: HTMLEmprenderUfPersonalInformation3Element;
        new (): HTMLEmprenderUfPersonalInformation3Element;
    };
    interface HTMLEmprenderUfReferencesElement extends Components.EmprenderUfReferences, HTMLStencilElement {
    }
    var HTMLEmprenderUfReferencesElement: {
        prototype: HTMLEmprenderUfReferencesElement;
        new (): HTMLEmprenderUfReferencesElement;
    };
    interface HTMLEmprenderUfWorkingInformationElement extends Components.EmprenderUfWorkingInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfWorkingInformationElement: {
        prototype: HTMLEmprenderUfWorkingInformationElement;
        new (): HTMLEmprenderUfWorkingInformationElement;
    };
    interface HTMLEmprenderUserFormsElement extends Components.EmprenderUserForms, HTMLStencilElement {
    }
    var HTMLEmprenderUserFormsElement: {
        prototype: HTMLEmprenderUserFormsElement;
        new (): HTMLEmprenderUserFormsElement;
    };
    interface HTMLEmprenderUserProfileElement extends Components.EmprenderUserProfile, HTMLStencilElement {
    }
    var HTMLEmprenderUserProfileElement: {
        prototype: HTMLEmprenderUserProfileElement;
        new (): HTMLEmprenderUserProfileElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-uf-company-information": HTMLEmprenderUfCompanyInformationElement;
        "emprender-uf-financial-information": HTMLEmprenderUfFinancialInformationElement;
        "emprender-uf-personal-information": HTMLEmprenderUfPersonalInformationElement;
        "emprender-uf-personal-information-2": HTMLEmprenderUfPersonalInformation2Element;
        "emprender-uf-personal-information-3": HTMLEmprenderUfPersonalInformation3Element;
        "emprender-uf-references": HTMLEmprenderUfReferencesElement;
        "emprender-uf-working-information": HTMLEmprenderUfWorkingInformationElement;
        "emprender-user-forms": HTMLEmprenderUserFormsElement;
        "emprender-user-profile": HTMLEmprenderUserProfileElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderUfCompanyInformation {
        "model"?: CompanyInformation;
        "onBack"?: (event: CustomEvent<CompanyInformation>) => void;
        "onInfoSaved"?: (event: CustomEvent<CompanyInformation>) => void;
        "requiredData"?: string;
    }
    interface EmprenderUfFinancialInformation {
        "flow"?: any;
        "model"?: FinancialInformation;
        "onBack"?: (event: CustomEvent<FinancialInformation>) => void;
        "onInfoSaved"?: (event: CustomEvent<FinancialInformation>) => void;
        "requiredData"?: string;
    }
    interface EmprenderUfPersonalInformation {
        "model"?: PersonalInformation;
        "onInfoSaved"?: (event: CustomEvent<PersonalInformation>) => void;
        "onSendInfo"?: (event: CustomEvent<PersonalInformation>) => void;
        "requiredData"?: string;
    }
    interface EmprenderUfPersonalInformation2 {
        "model"?: PersonalInformation2;
        "onBack"?: (event: CustomEvent<PersonalInformation2>) => void;
        "onInfoSaved"?: (event: CustomEvent<PersonalInformation2>) => void;
        "requiredData"?: string;
    }
    interface EmprenderUfPersonalInformation3 {
        "model"?: PersonalInformation;
        "model2"?: PersonalInformation2;
        "model3"?: BankInformation;
        "onInfoSaved"?: (event: CustomEvent<PersonalInformation>) => void;
        "onUpgradeInfo"?: (event: CustomEvent<[PersonalInformation,PersonalInformation2,BankInformation, string]>) => void;
    }
    interface EmprenderUfReferences {
        "flow"?: any;
        "model"?: References;
        "onBack"?: (event: CustomEvent<References>) => void;
        "onInfoSaved"?: (event: CustomEvent<References>) => void;
        "onUpgradeInfo"?: (event: CustomEvent<References>) => void;
        "requiredData"?: string;
        "viewRegistration"?: boolean;
    }
    interface EmprenderUfWorkingInformation {
        "model"?: WorkingInformation;
        "onBack"?: (event: CustomEvent<WorkingInformation>) => void;
        "onInfoSaved"?: (event: CustomEvent<WorkingInformation>) => void;
        "onUpgradeInfo"?: (event: CustomEvent<WorkingInformation>) => void;
        "requiredData"?: string;
        "viewRegistration"?: boolean;
    }
    interface EmprenderUserForms {
        "flowType"?: 'employee' | 'independent';
        "loading"?: boolean;
        "onBackSaved"?: (event: CustomEvent<UserForm>) => void;
        "onInfoSaved"?: (event: CustomEvent<UserForm>) => void;
        "step"?: number;
    }
    interface EmprenderUserProfile {
        "alarmUpgrade"?: boolean;
        "barState"?: string;
        "flowType"?: 'employee' | 'independent';
        "loading"?: boolean;
        "onBackSaved"?: (event: CustomEvent<UserForm>) => void;
        "onInfoSaved"?: (event: CustomEvent<UserForm>) => void;
        "step"?: number;
    }
    interface IntrinsicElements {
        "emprender-uf-company-information": EmprenderUfCompanyInformation;
        "emprender-uf-financial-information": EmprenderUfFinancialInformation;
        "emprender-uf-personal-information": EmprenderUfPersonalInformation;
        "emprender-uf-personal-information-2": EmprenderUfPersonalInformation2;
        "emprender-uf-personal-information-3": EmprenderUfPersonalInformation3;
        "emprender-uf-references": EmprenderUfReferences;
        "emprender-uf-working-information": EmprenderUfWorkingInformation;
        "emprender-user-forms": EmprenderUserForms;
        "emprender-user-profile": EmprenderUserProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-uf-company-information": LocalJSX.EmprenderUfCompanyInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfCompanyInformationElement>;
            "emprender-uf-financial-information": LocalJSX.EmprenderUfFinancialInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfFinancialInformationElement>;
            "emprender-uf-personal-information": LocalJSX.EmprenderUfPersonalInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfPersonalInformationElement>;
            "emprender-uf-personal-information-2": LocalJSX.EmprenderUfPersonalInformation2 & JSXBase.HTMLAttributes<HTMLEmprenderUfPersonalInformation2Element>;
            "emprender-uf-personal-information-3": LocalJSX.EmprenderUfPersonalInformation3 & JSXBase.HTMLAttributes<HTMLEmprenderUfPersonalInformation3Element>;
            "emprender-uf-references": LocalJSX.EmprenderUfReferences & JSXBase.HTMLAttributes<HTMLEmprenderUfReferencesElement>;
            "emprender-uf-working-information": LocalJSX.EmprenderUfWorkingInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfWorkingInformationElement>;
            "emprender-user-forms": LocalJSX.EmprenderUserForms & JSXBase.HTMLAttributes<HTMLEmprenderUserFormsElement>;
            "emprender-user-profile": LocalJSX.EmprenderUserProfile & JSXBase.HTMLAttributes<HTMLEmprenderUserProfileElement>;
        }
    }
}
