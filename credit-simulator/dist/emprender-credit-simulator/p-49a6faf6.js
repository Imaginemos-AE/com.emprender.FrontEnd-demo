import{g as t,f as e}from"./p-e0a6c048.js";function n(t,e=!1){return`$${e?" ":""}${t.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.")}`}function r(t){return"string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}function o(t,e,n){return new Promise((r=>{document.body.appendChild(Object.assign(document.createElement("script"),{type:n,async:!0,defer:!0,id:e,src:t,onload:r}))}))}function c(t){return new Promise((e=>{const n=document.getElementsByTagName("link");if(Array.from(n).some((e=>e.href===t)))e(!0);else{const n=document.createElement("link");n.onload=e,n.href=t,n.rel="stylesheet",document.head.appendChild(n)}}))}const i=t=>!("isConnected"in t)||t.isConnected,s=(()=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(i))})(...e)}),2e3)}})();function a(t){return{minAmount:Math.min(...t.Rates.map((t=>t.MinAmount))),maxAmount:Math.max(...t.Rates.map((t=>t.MaxAmount)))}}function u(t,e){const n=e.Rates.find((e=>t>=e.MinAmount&&t<=e.MaxAmount)),r=n.MinTerm;return{minTerm:r,maxTerm:n.Maxterm,typeOfTerm:r<30?"daily":"monthly"}}const[d,f]=["muiiCurentCofiguration","muiiCurrentCreditInfo"],{state:l}=(()=>{const n=((t,e=((t,e)=>t!==e))=>{let n=new Map(Object.entries(null!=t?t:{}));const r={dispose:[],get:[],set:[],reset:[]},o=()=>{n=new Map(Object.entries(null!=t?t:{})),r.reset.forEach((t=>t()))},c=t=>(r.get.forEach((e=>e(t))),n.get(t)),i=(t,o)=>{const c=n.get(t);e(o,c,t)&&(n.set(t,o),r.set.forEach((e=>e(t,o,c))))},s="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>c(e),ownKeys:()=>Array.from(n.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>n.has(e),set:(t,e,n)=>(i(e,n),!0)}),a=(t,e)=>(r[t].push(e),()=>{((t,e)=>{const n=t.indexOf(e);n>=0&&(t[n]=t[t.length-1],t.length--)})(r[t],e)});return{state:s,get:c,set:i,on:a,onChange:(e,n)=>{const r=a("set",((t,r)=>{t===e&&n(r)})),o=a("reset",(()=>n(t[e])));return()=>{r(),o()}},use:(...t)=>t.forEach((t=>{t.set&&a("set",t.set),t.get&&a("get",t.get),t.reset&&a("reset",t.reset)})),dispose:()=>{r.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=n.get(t);r.set.forEach((n=>n(t,e,e)))}}})({configurations:[],currentCofiguration:null,currentCreditInfo:{creditTypeId:1,creditAmount:1e6,creditTerm:60,creditTotal:0}},void 0);return(({on:n})=>{const r=new Map;"function"==typeof t&&(n("dispose",(()=>{r.clear()})),n("get",(e=>{const n=t();n&&((t,e,n)=>{const r=t.get(e);r?r.includes(n)||r.push(n):t.set(e,[n])})(r,e,n)})),n("set",(t=>{const n=r.get(t);n&&r.set(t,n.filter(e)),s(r)})),n("reset",(()=>{r.forEach((t=>t.forEach(e))),s(r)})))})(n),n})();async function m(){try{l.configurations=(await fetch("https://run.mocky.io/v3/a7659037-7ee8-4e2f-9b7c-65331fdd9a28").then((t=>t.json()))).CreditLines}catch(t){l.configurations=[]}}function p(){const[t,e]=[d,f].map((t=>localStorage.getItem(t)));l.currentCofiguration=t?JSON.parse(t):l.configurations.length>0?l.configurations[0]:null,e?l.currentCreditInfo=JSON.parse(e):y({})}function y(t){const e=Object.assign(Object.assign({},l.currentCreditInfo),t),{creditAmount:n,creditTerm:r}=e,o=l.currentCofiguration.Rates.find((t=>n>=t.MinAmount&&n<=t.MaxAmount));l.currentCreditInfo=Object.assign(Object.assign({},e),function(t,e,n){const r=e<=30,o=r?1:Math.ceil(e/30),c=t*(n.MonthlyEffectiveRate/100),i=r?c+t:function(t,e,n){const r=Math.pow(1+t,e);return n*(t*r/(r-1))}(n.MonthlyEffectiveRate/100,o,t),s=r?t:i-c,a=t*(n.GuarateeRate/100)/o,u=r?t/1e6*n.LifeInsuranceRate/(30/e):t/1e6*n.LifeInsuranceRate/o,d=r?n.PlattformUseFee*e:n.PlattformUseFee,f=n.AdministrationFee/o,l=(d+f+a)*(n.TaxesRate/100);return{creditInterest:c,creditPMT:i,creditFirstCapital:s,creditGuarantee:a,creditLifeInsurance:u,creditPlatform:d,creditAdmin:f,creditTaxes:l,creditTotal:s+a+u+c+d+f+l,creditAmount:t,creditAnualEffectiverate:n.AnualEffectiverate,creditMonthlyEffectiverate:n.MonthlyEffectiveRate}}(n,r,o)),localStorage.setItem(f,JSON.stringify(l.currentCreditInfo))}function g(t){l.currentCofiguration=l.configurations.find((e=>e.id===t)),localStorage.setItem(d,JSON.stringify(l.currentCofiguration)),y({creditTypeId:l.currentCofiguration.id,creditTypeLabel:l.currentCofiguration.Name,creditAmount:l.currentCofiguration.Rates[0].MinAmount,creditTerm:l.currentCofiguration.Rates[0].MinTerm})}function T(t){return l.configurations.find((e=>e.id===t))}export{c as a,o as b,r as c,y as d,g as e,n as f,m as g,T as h,a as i,u as j,p as l,l as s}