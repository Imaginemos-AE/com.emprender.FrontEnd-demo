import{r as e,h as n,H as o}from"./p-9e6592f3.js";import{l as t,a as i}from"./p-0af3cd17.js";const a=class{constructor(n){e(this,n),this.documentId=""}async componentWillLoad(){await t("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap"),await i("https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js","emprender-components-library","module"),this.userInformation=await async function(e){const n=await async function(e){const n=new Headers;n.append("Access-Control-Allow-Origin","*"),n.append("Access-Control-Allow-Credentials","true"),n.append("Content-Type","application/json"),console.log(e);try{const o=await fetch(`https://credito.muii.com.co/api/DataManager/${e}/`,{method:"GET",headers:n,mode:"cors",redirect:"follow"});if(200===o.status)return o.json();if(404===o.status)return null}catch(e){console.log(e)}}(e);if(n){const e=null==n?void 0:n.tipoCliente,t={firstName:(o=n).primerNombre,middleName:o.segundoNombre,surName:o.primerApellido,secondSurName:o.segundoApellido,documentType:o.tipoDocumento,documentNumber:o.documento,expeditionDate:o.fechaExpedicion,birthDate:o.fechaNacimiento,nationality:o.nacionalidad,departmentOfBirth:o.departamentoNacimiento,cityOfBirth:o.ciudadNacimiento,expeditionDepartment:o.departamentoExpedicion,expeditionCity:o.municipioExpedicion,telefono:o.telefono,mobilePhone:o.celular,email:o.correo,gender:o.genero},i=function(e){return{familyContactName:e.nombreContactoFamiliar,familyContactPhone:e.celularContactoFamiliar,familyContactRelationship:e.relacionContactoFamiliar,friendContactName:e.nombreContactoAmigo,friendContactPhone:e.celularContactoAmigo,friendContactRelationship:e.relacionContactoAmigo}}(n.infoReferencias),a=function(e){return{academicLevel:e.nivelAcademico,childrenNumber:e.numHijos,dependents:e.personasACargo,civilState:e.estadoCivil,departmentOfResidence:e.departamentoResidencia,cityOfResidence:e.municipioRecidencia,address:e.direccion,place:e.torre_Apt,stratus:e.estrato,dwellingType:e.tipoVivienda,residenceTime:e.tiempo,employment:e.ocupacion}}(n.infoSocioDemografica),s=function(e){return e?{salaryIncome:e.ingresosSalario,otherIncomes:e.ingresosOtros,variableSalaryIncome:e.ingresosSalarioVariable,otherIncomesDescription:e.descripcionIngresos,personalExpenses:e.egresos,rentExpenses:e.arriendo,debtExpenses:e.egresosDeudas,otherExpenses:e.otrosEgresos,otherExpensesDescription:e.descripcionEgresos,totalAssets:e.activos,totalLiabilities:e.pasivos,totalIncomes:e.totalIngresos,totalExpenses:e.totalGastos}:""}(n.infoEconomica),r=function(e){return e?{salesIncome:e.ingresosVentas,ingresosActividad:e.ingresosActividad,otherIncomes:e.activityIncome,otherIncomesDescription:e.descripcionIngresos,incomeSupport:e.soporte,businessExpenses:e.egresosGastosNegocio,egresosArriendo:e.rentExpenses,egresosDeudas:e.debtExpenses,personalExpenses:e.egresosPersonal,otherExpenses:e.otrosEgresos,otherExpensesDescription:e.descripcionEgresos,totalAssets:e.activos,totalLiabilities:e.pasivos,totalIncomes:e.totalIngresos,totalExpenses:e.totalGastos}:""}(n.infoEconomicaCompania),l=function(e){return e?{nombreBanco:e.bankName,accountType:e.tipoCuenta,accountNumber:e.numeroCuenta}:""}(n.infoBancaria);return{personalInformation:t,personalInformation2:a,companyInformation:function(e){var n,o;return e?{companyName:e.nombreCompania,companyLocation:e.ubicacionCompania,address:e.direccion,place:e.barrio,departmentOfResidence:e.departamentoResidencia,cityOfResidence:e.ciudadResidencia,stratus:null!==(n=e.estrato)&&void 0!==n?n:0,dwellingType:e.tipoVivienda,rent:null!==(o=parseFloat(e.renta))&&void 0!==o?o:0,companyType:e.tipoCompania,nit:e.nit,foundatingDate:e.fechaExposito,companyActivity:e.actividadCompania,point:e.punto,onlineShop:e.tiendaOnline,salePercentage:e.porcentajeVentas,employees:e.empleado,destiny:e.destino,otherDestiny:e.otroDestino}:""}(n.infoCompania),references:i,bankInformation:l,financialInformation:s,financialCompanyInformation:r,flow:e}}return n;var o}(this.documentId)}getResponse(){var e,t,i,a,s,r,l,c,d,m;return this.userInformation?n(o,null,n("emprender-uf-personal-information-3",{model:null===(e=this.userInformation)||void 0===e?void 0:e.personalInformation,model2:null===(t=this.userInformation)||void 0===t?void 0:t.personalInformation2,model3:null===(i=this.userInformation)||void 0===i?void 0:i.bankInformation,adminZone:!0}),"employee"===(null===(a=this.userInformation)||void 0===a?void 0:a.flow)||n("emprender-uf-company-profile",{model:null===(s=this.userInformation)||void 0===s?void 0:s.companyInformation,adminZone:!0}),"independent"===(null===(r=this.userInformation)||void 0===r?void 0:r.flow)?n("emprender-uf-financial-company",{adminZone:!0,model:null===(l=this.userInformation)||void 0===l?void 0:l.financialCompanyInformation}):n("emprender-uf-financial-information",{adminZone:!0,model:null===(c=this.userInformation)||void 0===c?void 0:c.financialInformation}),n("emprender-uf-references",{model:null===(d=this.userInformation)||void 0===d?void 0:d.references,flow:null===(m=this.userInformation)||void 0===m?void 0:m.flow,viewRegistration:!1,adminZone:!0})):null}render(){return this.getResponse()}};a.style="";export{a as emprender_user_administrative}