(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1fa4837a"],{7293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={props:{fields:{type:Array,default:[]},initdata:{type:Object,default:null}},data:function(){return{registro:{}}},methods:{hasCondition:function hasCondition(f){return!f.condition||!!eval(f.condition)},isVisible:function(e){if(e.detail)return!(!this.initdata&&e.hideIfNew)},setcolclass:function(e){var i=void 0===e?6:e,o=i<=3?2*e:12;return"col-"+o+" col-sm-"+i}},mounted:function(){this.registro=this.initdata?this.initdata:{}}}},8589:function(e,i,o){"use strict";var a=[{id:"1230",base:"Base 1",numeroEconomico:"123",placas:"UMS 160",nombre:"Chevrolet MRZ"},{id:"531",base:"Base 3",numeroEconomico:"530",placas:"ABC 194",nombre:"Ford MA"}],t=[{id:"1230",base:"Base 1",numeroEconomico:"123",placas:"UMS 160",iso:"1213",kilometraje:"1049900",estatus:"ACTIVO"},{id:"1242",base:"Base 3",numeroEconomico:"66",placas:"XMM 160",iso:"11144",kilometraje:"333574",estatus:"ACTIVO"}],n=[{id:"1230",base:"Base 1",nombre:"OCOTE",tipo:"T3 - S2",placas:"UMS 160",kilometraje:"1049900",fechaModificacion:"2018/04/04",estatus:"ACTIVO"},{id:"132",base:"Base 2",nombre:"ALAMO",tipo:"T3 - S3",placas:"104 ERR",kilometraje:"123455",fechaModificacion:"2018/02/01",estatus:"ACTIVO"}],s=[{id:"1230",rfc:"RAEI1293239",razonSocial:"RAE Comercial CV",nombreComercial:"RAE",descripcionServicios:"Taller",telefono:"1049900",correo:"rae@rae.com",vendedor:"Raul Martínez",condiciones:"30",moneda:"MXN"},{id:"234",rfc:"FOA193030",razonSocial:"FOA Comercial SA",nombreComercial:"FOA Comer",descripcionServicios:"Refaccones",telefono:"12392320",correo:"foa@gmail.com",vendedor:"Javier",condiciones:"16",moneda:"MXN"}],l=[{id:"1230",nombre:"Ramón Raúl Ro",ubicacion:"B1",puesto:"Operador",estatus:"ACTIVO"},{id:"103",nombre:"Joaquin Jimenez",ubicacion:"B2",puesto:"Gerente",estatus:"ACTIVO"}],r=[{id:"112",nombre:"Ecopack con cianuro",un:"1232"},{id:"653",nombre:"Siper sacos con cianuro",un:"1457"}],c=[{id:"112",nombre:"Minera Penmont",base:"B1",kmsTotales:"1232312",dotacionDiesel:"399"},{id:"22",nombre:"Coyer",base:"B2",kmsTotales:"11224",dotacionDiesel:"1000"}],d=[{id:"2",razonSocial:"The Chemours",rfc:"CEEN1223",direccion:"Lago Zurich 243423 , aompliacion granada"},{id:"3",razonSocial:"The Quimicos",rfc:"QUI393929",direccion:"Lago  243423 , Ampliación Grande"}],u=[{id:"1",nombre:"Hermosillo",responsable:"Gerardo Judas VElarde",ubicacion:"Av. Fusion final..."},{id:"2",nombre:"San Luis",responsable:"José Miguel",ubicacion:"Eje 120 #500"}];i["a"]={unidadesutilitarias:a,unidadesdearrastre:t,unidadmotriz:n,proveedores:s,empleados:l,mercancia:r,servicios:c,clientes:d,bases:u}},ab06:function(e,i,o){"use strict";var a=function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("q-card-section",[o("q-form"),o("div",{staticClass:"row q-col-gutter-md"},[e._l(e.fields,(function(i){return e.isVisible(i)?[i.separator&&e.hasCondition(i)?o("div",{staticClass:"col-12"},[i.toolbar?[o("q-toolbar",{staticClass:"text-primary"},[o("q-toolbar-title",[e._v(e._s(i.title))])],1)]:[o("q-separator")]],2):i.image&&e.hasCondition(i)?o("div",{staticClass:"col-12"},[o("img",{staticClass:"full-width",attrs:{src:i.image}})]):e.hasCondition(i)?o("div",{class:e.setcolclass(i.col)},["select"===i.inputType?o("q-select",{attrs:{dense:"",label:i.label,options:i.inputOptions,readonly:i.readonly},scopedSlots:e._u([i.icon?{key:"before",fn:function(){return[o("q-icon",{attrs:{name:i.icon,size:"xs"}})]},proxy:!0}:null],null,!0),model:{value:e.registro[i.field],callback:function(o){e.$set(e.registro,i.field,o)},expression:"registro[f.field]"}}):"file"===i.inputType?o("q-uploader",{attrs:{label:i.label,color:"white","text-color":"grey"},model:{value:e.registro[i.field],callback:function(o){e.$set(e.registro,i.field,o)},expression:"registro[f.field]"}}):"toggle"===i.inputType?o("q-toggle",{attrs:{"false-value":"No","true-value":"Sí","left-label":"",label:i.label},model:{value:e.registro[i.field],callback:function(o){e.$set(e.registro,i.field,o)},expression:"registro[f.field]"}}):o("q-input",{attrs:{dense:"",label:i.label,type:i.inputType,readonly:i.readonly},scopedSlots:e._u([i.icon?{key:"before",fn:function(){return[o("q-icon",{attrs:{name:i.icon,size:"xs"}})]},proxy:!0}:null],null,!0),model:{value:e.registro[i.field],callback:function(o){e.$set(e.registro,i.field,o)},expression:"registro[f.field]"}})],1):e._e()]:e._e()})),o("div",{staticClass:"col-12 text-center"},[o("q-separator"),e.initdata?e._e():o("q-btn",{staticClass:"q-my-lg",attrs:{type:"submit",color:"secondary",push:""}},[e._v("Añadir registro")]),e.initdata?o("q-btn",{staticClass:"q-my-lg",attrs:{type:"submit",color:"secondary",push:""}},[e._v("Actualizar registro")]):e._e()],1)],2)],1)},t=[],n=o("7293"),s=n["a"],l=(o("f94f"),o("2877")),r=Object(l["a"])(s,a,t,!1,null,"5e964dfd",null);i["a"]=r.exports},e74b:function(e,i,o){"use strict";o.r(i);var a=function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("q-page",{attrs:{padding:""}},[o("div",[o("q-table",{attrs:{title:"Bases",data:e.datos,columns:e.fields,filter:e.filter,"row-key":"name",visibleColumns:e.fieldsOnTable},scopedSlots:e._u([{key:"top-right",fn:function(i){return[o("q-input",{attrs:{placeholder:"Filtrar",debounce:"300"},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"fas fa-search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(i){e.filter=i},expression:"filter"}}),o("q-btn",{staticClass:"q-ml-md",attrs:{push:"","text-color":"primary",color:"white",fab:"",icon:"fas fa-plus"},on:{click:function(i){e.newDialog=!0}}})]}},{key:"body-cell-acciones",fn:function(i){return[o("q-td",{attrs:{props:i}},[o("q-btn",{staticClass:"q-mr-xs",attrs:{icon:"fas fa-info","text-color":"info",color:"white",push:"",size:"sm"},on:{click:function(o){e.selectedItem=i.row,e.infoDialog=!0}}},[o("q-tooltip",[e._v("Información")])],1),o("q-btn",{attrs:{icon:"fas fa-times",color:"negative",push:"",size:"xs"},on:{click:function(i){return e.deleteItem()}}},[o("q-tooltip",[e._v("Eliminar")])],1)],1)]}}])}),o("q-dialog",{model:{value:e.newDialog,callback:function(i){e.newDialog=i},expression:"newDialog"}},[o("q-card",[o("q-toolbar",{staticClass:"bg-white"},[o("q-toolbar-title",[e._v("Nuevo")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{push:"","text-color":"negative",icon:"fas fa-times",size:"sm"}})],1),o("FormView",{attrs:{fields:e.fields}})],1)],1),o("q-dialog",{model:{value:e.infoDialog,callback:function(i){e.infoDialog=i},expression:"infoDialog"}},[o("q-card",[o("q-toolbar",{staticClass:"bg-white"},[o("q-toolbar-title",[e._v("Información")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{push:"","text-color":"negative",icon:"fas fa-times",size:"sm"}})],1),o("q-card-section",[o("FormView",{attrs:{fields:e.fields,initdata:e.selectedItem}})],1)],1)],1)],1)])},t=[],n=o("ab06"),s=o("8589"),l={components:{FormView:n["a"]},data:function(){return{infoDialog:!1,newDialog:!1,selectedItem:{},filter:"",fieldsOnTable:["id","nombre","responsable","ubicacion","acciones"],fields:[{name:"acciones",align:"left"},{name:"id",label:"ID",field:"id",detail:!0,readonly:!0,hideIfNew:!0,inputType:"text",icon:"fas fa-qrcode",col:12},{name:"nombre",label:"Nombre",field:"nombre",detail:!0,inputType:"text",icon:"fas fa-building",col:12},{name:"responsable",label:"Responsable",field:"responsable",detail:!0,inputType:"text",icon:"fas fa-building",col:12},{name:"ubicacion",label:"Ubicación",field:"ubicacion",detail:!0,inputType:"textarea",icon:"fas fa-building",col:12},{name:"telefono",label:"Teléfono",field:"telefono",detail:!0,inputType:"text",icon:"fas fa-building"}],datos:s["a"].bases}},methods:{deleteItem:function(){this.$q.dialog({title:"¿Desea eliminar este registro?",cancel:"No",ok:"Sí"})}}},r=l,c=o("2877"),d=Object(c["a"])(r,a,t,!1,null,null,null);i["default"]=d.exports},f94f:function(e,i,o){"use strict";var a=o("ff46"),t=o.n(a);t.a},ff46:function(e,i,o){}}]);