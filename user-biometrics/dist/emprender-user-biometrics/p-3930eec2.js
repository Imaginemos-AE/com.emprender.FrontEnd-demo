import{a as e,f as t}from"./p-32e27a42.js";const s=e=>!("isConnected"in e)||e.isConnected,o=(()=>{let e;return(...t)=>{e&&clearTimeout(e),e=setTimeout((()=>{e=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(s))})(...t)}),2e3)}})(),{state:n}=(()=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const o={dispose:[],get:[],set:[],reset:[]},n=()=>{s=new Map(Object.entries(null!=e?e:{})),o.reset.forEach((e=>e()))},r=e=>(o.get.forEach((t=>t(e))),s.get(e)),a=(e,n)=>{const r=s.get(e);t(n,r,e)&&(s.set(e,n),o.set.forEach((t=>t(e,n,r))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>r(t),ownKeys:()=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(a(t,s),!0)}),i=(e,t)=>(o[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(o[e],t)});return{state:c,get:r,set:a,on:i,onChange:(t,s)=>{const o=i("set",((e,o)=>{e===t&&s(o)})),n=i("reset",(()=>s(e[t])));return()=>{o(),n()}},use:(...e)=>e.forEach((e=>{e.set&&i("set",e.set),e.get&&i("get",e.get),e.reset&&i("reset",e.reset)})),dispose:()=>{o.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=s.get(e);o.set.forEach((s=>s(e,t,t)))}}})({adoCofiguration:null},void 0);return(({on:s})=>{const n=new Map;"function"==typeof e&&(s("dispose",(()=>{n.clear()})),s("get",(t=>{const s=e();s&&((e,t,s)=>{const o=e.get(t);o?o.includes(s)||o.push(s):e.set(t,[s])})(n,t,s)})),s("set",(e=>{const s=n.get(e);s&&n.set(e,s.filter(t)),o(n)})),s("reset",(()=>{n.forEach((e=>e.forEach(t))),o(n)})))})(s),s})();export{n as s}