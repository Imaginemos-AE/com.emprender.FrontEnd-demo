function n(n,e=!1){return`$${e?" ":""}${null==n?void 0:n.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.")}`}function e(n,e,t){return new Promise((o=>{document.body.appendChild(Object.assign(document.createElement("script"),{type:t,async:!0,defer:!0,id:e,src:n,onload:o}))}))}function t(n){return new Promise((e=>{const t=document.getElementsByTagName("link");if(Array.from(t).some((e=>e.href===n)))e(!0);else{const t=document.createElement("link");t.onload=e,t.href=n,t.rel="stylesheet",document.head.appendChild(t)}}))}export{e as a,n as f,t as l}