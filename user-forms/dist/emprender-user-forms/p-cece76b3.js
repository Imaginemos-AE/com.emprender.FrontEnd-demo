import{g as o,f as e}from"./p-9e6592f3.js";import{g as t,s as a}from"./p-39699f1e.js";const n=o=>!("isConnected"in o)||o.isConnected,r=(()=>{let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{o=0,(o=>{for(let e of o.keys())o.set(e,o.get(e).filter(n))})(...e)}),2e3)}})(),{state:i}=(()=>{const t=((o,e=((o,e)=>o!==e))=>{let t=new Map(Object.entries(null!=o?o:{}));const a={dispose:[],get:[],set:[],reset:[]},n=()=>{t=new Map(Object.entries(null!=o?o:{})),a.reset.forEach((o=>o()))},r=o=>(a.get.forEach((e=>e(o))),t.get(o)),i=(o,n)=>{const r=t.get(o);e(n,r,o)&&(t.set(o,n),a.set.forEach((e=>e(o,n,r))))},s="undefined"==typeof Proxy?{}:new Proxy(o,{get:(o,e)=>r(e),ownKeys:()=>Array.from(t.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(o,e)=>t.has(e),set:(o,e,t)=>(i(e,t),!0)}),c=(o,e)=>(a[o].push(e),()=>{((o,e)=>{const t=o.indexOf(e);t>=0&&(o[t]=o[o.length-1],o.length--)})(a[o],e)});return{state:s,get:r,set:i,on:c,onChange:(e,t)=>{const a=c("set",((o,a)=>{o===e&&t(a)})),n=c("reset",(()=>t(o[e])));return()=>{a(),n()}},use:(...o)=>o.forEach((o=>{o.set&&c("set",o.set),o.get&&c("get",o.get),o.reset&&c("reset",o.reset)})),dispose:()=>{a.dispose.forEach((o=>o())),n()},reset:n,forceUpdate:o=>{const e=t.get(o);a.set.forEach((t=>t(o,e,e)))}}})({currentUserInformation:{}},void 0);return(({on:t})=>{const a=new Map;"function"==typeof o&&(t("dispose",(()=>{a.clear()})),t("get",(e=>{const t=o();t&&((o,e,t)=>{const a=o.get(e);a?a.includes(t)||a.push(t):o.set(e,[t])})(a,e,t)})),t("set",(o=>{const t=a.get(o);t&&a.set(o,t.filter(e)),r(a)})),t("reset",(()=>{a.forEach((o=>o.forEach(e))),r(a)})))})(t),t})();function s(){i.currentUserInformation=t()}function c(o,e){i.currentUserInformation=Object.assign(Object.assign({},i.currentUserInformation),{[o]:e}),a(i.currentUserInformation)}function l(o){!function(o,e){let t,a=function(o,e){return{primerNombre:o.firstName,segundoNombre:o.middleName,primerApellido:o.surName,segundoApellido:o.secondSurName,tipoDocumento:o.documentType,documento:o.documentNumber,fechaExpedicion:o.expeditionDate,fechaNacimiento:o.birthDate,nacionalidad:o.nationality,departamentoNacimiento:o.departmentOfBirth,ciudadNacimiento:o.cityOfBirth,departamentoExpedicion:o.expeditionDepartment,municipioExpedicion:o.expeditionCity,telefono:o.mobilePhone,celular:o.phone,correo:o.email,genero:o.gender,tipoCliente:e}}(o.personalInformation,e),n=function(o){return{nombreContactoFamiliar:o.familyContactName,celularContactoFamiliar:o.familyContactPhone,relacionContactoFamiliar:o.familyContactRelationship,nombreContactoAmigo:o.friendContactName,celularContactoAmigo:o.friendContactPhone,relacionContactoAmigo:o.friendContactRelationship}}(o.references),r=function(o){var e,t;return{nivelAcademico:o.academicLevel,numHijos:o.childrenNumber,personasACargo:o.dependents,estadoCivil:o.civilState,departamentoResidencia:o.departmentOfResidence,municipioRecidencia:o.cityOfResidence,direccion:o.address,torre_Apt:o.place,estrato:null!==(e=o.stratus)&&void 0!==e?e:0,tipoVivienda:o.dwellingType,arriendo:null!==(t=parseFloat(o.rent))&&void 0!==t?t:0,tiempo:o.residenceTime,ocupacion:o.employment}}(o.personalInformation2);if("employee"===e){let e=function(o){return{ingresosSalario:parseFloat(o.salaryIncome),ingresosOtros:""===o.otherIncomes||null===o.otherIncomes?0:parseFloat(o.otherIncomes),ingresosSalarioVariable:""===o.variableSalaryIncome||null===o.variableSalaryIncome?0:parseFloat(o.variableSalaryIncome),descripcionIngresos:o.otherIncomesDescription,egresos:parseFloat(o.personalExpenses),arriendo:parseFloat(o.rentExpenses),egresosDeudas:parseFloat(o.debtExpenses),otrosEgresos:""===o.otherExpenses||null===o.otherExpenses?0:parseFloat(o.otherExpenses),descripcionEgresos:o.otherExpensesDescription,activos:parseFloat(o.totalAssets),pasivos:parseFloat(o.totalLiabilities),totalIngresos:parseFloat(o.totalIncomes),totalGastos:parseFloat(o.totalExpenses)}}(o.financialInformation),i=function(o){return{nombreEmpresa:o.companyName,cargo:o.position,esPublica:o.companyType,antiguedad:o.companySeniority,tipoontrato:o.contractType,actividad:o.companyActivity,destinoPrestamo:o.creditDestination,telefono:o.companyPhone,otroNumero:o.otherPhone,extencion:o.companyPhoneExtension}}(o.workingInformation);t=Object.assign(Object.assign({},a),{infoReferencias:n,infoEconomica:e,infoSocioDemografica:r,infoLaboral:i})}else{let e=function(o){var e,t;return{nombreCompania:o.companyName,ubicacionCompania:o.companyLocation,direccion:o.address,barrio:o.place,departamentoResidencia:o.departmentOfResidence,ciudadResidencia:o.cityOfResidence,estrato:null!==(e=o.stratus)&&void 0!==e?e:0,tipoVivienda:o.dwellingType,renta:null!==(t=parseFloat(o.rent))&&void 0!==t?t:0,tipoCompania:o.companyType,nit:o.nit,fechaExposito:o.foundatingDate,actividadCompania:o.companyActivity,punto:o.point,tiendaOnline:o.onlineShop,porcentajeVentas:o.salePercentage,empleado:o.employees,destino:o.destiny,otroDestino:o.otherDestiny}}(o.companyInformation),i=function(o){return{ingresosVentas:parseFloat(o.salesIncome),ingresosArriendo:parseFloat(o.rentIncome),ingresosActividad:parseFloat(o.activityIncome),ingresosOtros:""===o.otherIncomes||null===o.otherIncomes?0:parseFloat(o.otherIncomes),descripcionIngresos:o.otherIncomesDescription,soporte:o.incomeSupport,egresosGastosNegocio:parseFloat(o.businessExpenses),egresosArriendo:parseFloat(o.rentExpenses),egresosDeudas:parseFloat(o.debtExpenses),egresosPersonal:parseFloat(o.personalExpenses),otrosEgresos:""===o.otherExpenses||null===o.otherExpenses?0:parseFloat(o.otherExpenses),descripcionEgresos:o.otherExpensesDescription,activos:parseFloat(o.totalAssets),pasivos:parseFloat(o.totalLiabilities),totalIngresos:parseFloat(o.totalIncomes),totalGastos:parseFloat(o.totalExpenses)}}(o.financialCompany);t=Object.assign(Object.assign({},a),{infoReferencias:n,infoEconomicaCompania:i,infoCompania:e,infoSocioDemografica:r})}console.log(t);var i=new Headers;i.append("Access-Control-Allow-Origin","*"),i.append("Access-Control-Allow-Credentials","true"),i.append("GET","POST"),i.append("Content-Type","application/json");var s=JSON.stringify(t);fetch("https://credito.muii.com.co/api/DataManager/",{method:"POST",headers:i,body:s,redirect:"follow"}).then((o=>console.log(o)))}(i.currentUserInformation,o)}function p(o){c("bankInformation",o)}export{p as a,c as b,l as c,s as l,i as s}