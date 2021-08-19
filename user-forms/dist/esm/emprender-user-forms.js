import { p as promiseResolve, b as bootstrapLazy } from './index-e795c374.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["emprender-uf-financial-information",[[1,"emprender-uf-financial-information",{"model":[1040]}]]],["emprender-uf-personal-information",[[1,"emprender-uf-personal-information",{"model":[1040],"departments":[32]}]]],["emprender-uf-personal-information-2",[[1,"emprender-uf-personal-information-2",{"model":[16],"departments":[32]}]]],["emprender-uf-references",[[1,"emprender-uf-references",{"model":[1040]}]]],["emprender-uf-working-information",[[1,"emprender-uf-working-information",{"model":[16]}]]],["emprender-user-forms",[[1,"emprender-user-forms",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540]}]]]], options);
});