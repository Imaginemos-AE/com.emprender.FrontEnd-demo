import{g as e,f as t,r as n,c as i,h as s,H as o}from"./p-8ee631ca.js";import{g as r,s as a}from"./p-225b6562.js";import{l,a as d}from"./p-0af3cd17.js";const f=e=>!("isConnected"in e)||e.isConnected,p=(()=>{let e;return(...t)=>{e&&clearTimeout(e),e=setTimeout((()=>{e=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(f))})(...t)}),2e3)}})(),{state:c}=(()=>{const n=((e,t=((e,t)=>e!==t))=>{let n=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},s=()=>{n=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},o=e=>(i.get.forEach((t=>t(e))),n.get(e)),r=(e,s)=>{const o=n.get(e);t(s,o,e)&&(n.set(e,s),i.set.forEach((t=>t(e,s,o))))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>o(t),ownKeys:()=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>n.has(t),set:(e,t,n)=>(r(t,n),!0)}),l=(e,t)=>(i[e].push(t),()=>{((e,t)=>{const n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)})(i[e],t)});return{state:a,get:o,set:r,on:l,onChange:(t,n)=>{const i=l("set",((e,i)=>{e===t&&n(i)})),s=l("reset",(()=>n(e[t])));return()=>{i(),s()}},use:(...e)=>e.forEach((e=>{e.set&&l("set",e.set),e.get&&l("get",e.get),e.reset&&l("reset",e.reset)})),dispose:()=>{i.dispose.forEach((e=>e())),s()},reset:s,forceUpdate:e=>{const t=n.get(e);i.set.forEach((n=>n(e,t,t)))}}})({currentUserInformation:{}},void 0);return(({on:n})=>{const i=new Map;"function"==typeof e&&(n("dispose",(()=>{i.clear()})),n("get",(t=>{const n=e();n&&((e,t,n)=>{const i=e.get(t);i?i.includes(n)||i.push(n):e.set(t,[n])})(i,t,n)})),n("set",(e=>{const n=i.get(e);n&&i.set(e,n.filter(t)),p(i)})),n("reset",(()=>{i.forEach((e=>e.forEach(t))),p(i)})))})(n),n})();function m(e,t){c.currentUserInformation=Object.assign(Object.assign({},c.currentUserInformation),{[e]:t}),a(c.currentUserInformation)}const h=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"working-information",field:"workingInformation"},{tag:"financial-information",field:"financialInformation"},{tag:"references",field:"references"}],g=[{tag:"personal-information",field:"personalInformation"},{tag:"personal-information-2",field:"personalInformation2"},{tag:"working-information",field:"workingInformation"},{tag:"financial-information",field:"financialInformation"},{tag:"references",field:"references"}],u=class{constructor(e){n(this,e),this.infoSaved=i(this,"infoSaved",7),this.backSaved=i(this,"backSaved",7),this.flowType="employee",this.step=0,this.loading=!1,this._getFlow=()=>"employee"===this.flowType?h:g,this._getData=e=>{var t;return(null!==(t=c.currentUserInformation)&&void 0!==t?t:{})[e]},this.getLoadingGif=()=>s("div",{class:"lds-dual-ring"})}async componentWillLoad(){await l("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap"),await d("https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js","emprender-components-library","module"),c.currentUserInformation=r()}isLoading(){setTimeout((()=>this.loading=!0),800)}_renderCurrentStep(){if(this.step>=0&&this.step<this._getFlow().length){const{tag:e,field:t}=this._getFlow()[this.step];return s(`emprender-uf-${e}`,{model:this._getData(t),flow:this.flowType,onInfoSaved:e=>this.saveInfo(t,e.detail),onBack:e=>this.onBackPressed(t,e.detail)})}}_updateStep(e){if(this.loading=!1,"up"===e){const e=this._getFlow().length-1;this.step=this.step<e?this.step+1:e}else this.step=0!=this.step?this.step-1:0}saveInfo(e,t){m(e,t),this._updateStep("up"),this.infoSaved.emit(c.currentUserInformation)}onBackPressed(e,t){m(e,t),this._updateStep("down"),this.backSaved.emit(c.currentUserInformation)}componentWillRender(){this.isLoading()}render(){return s(o,null,s("div",{class:"prueba"},this.loading?this._renderCurrentStep():this.getLoadingGif()))}};u.style=':host{display:block}.prueba{min-height:50VH;position:relative}.lds-dual-ring{display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:80px;height:80px}.lds-dual-ring:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #51215b;border-color:#51215b transparent #51215b transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';export{u as emprender_user_forms}