function s(){const s=sessionStorage.getItem("muiiUserFormInfo");return JSON.parse(s)}function o(o){const a=s(),e=Object.assign(Object.assign({},a),o);sessionStorage.setItem("muiiUserFormInfo",JSON.stringify(e))}const a={mask:Number,scale:2,signed:!1,thousandsSeparator:".",padFractionalZeros:!1,normalizeZeros:!0,radix:",",mapToRadix:[","],min:0};export{a as F,s as g,o as s}