'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fff3a53f.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-uf-company-information.cjs",[[1,"emprender-uf-company-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-company-profile.cjs",[[1,"emprender-uf-company-profile",{"model":[1040],"requiredData":[1537,"required-data"],"viewRegistration":[4,"view-registration"],"departments":[32]}]]],["emprender-uf-financial-company.cjs",[[1,"emprender-uf-financial-company",{"model":[1040],"requiredData":[1040]}]]],["emprender-uf-financial-information.cjs",[[1,"emprender-uf-financial-information",{"model":[1040],"requiredData":[1040]}]]],["emprender-uf-personal-information.cjs",[[1,"emprender-uf-personal-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information-2.cjs",[[1,"emprender-uf-personal-information-2",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information-3.cjs",[[1,"emprender-uf-personal-information-3",{"model":[1040],"model2":[1040],"model3":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-references.cjs",[[1,"emprender-uf-references",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"],"flow":[1544]}]]],["emprender-uf-working-information.cjs",[[1,"emprender-uf-working-information",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"]}]]],["emprender-user-forms.cjs",[[1,"emprender-user-forms",{"flowType":[1537,"flow-type"],"step":[1538],"loading":[1540]}]]],["emprender-user-profile.cjs",[[1,"emprender-user-profile",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540],"barState":[1537,"bar-state"],"alarmUpgrade":[1540,"alarm-upgrade"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
