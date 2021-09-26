var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&o(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));"undefined"!=typeof require&&require;import{c as d,a as i,b as p,d as u,u as m,e as f,f as E,R as y,g,o as b,M as w,F as N,h,B as v,i as C,r as M,j as A,k as O,l as S,m as k,n as q,P as F}from"./vendor.0c6649fa.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function I(e){return+e.slice(0,e.length-1)*{m:10**6,b:10**9}[e[e.length-1].toLowerCase()]}const x=e=>e.apps;const U=d(x,(e=>e.filters),((e,t)=>function(e,t){return e.filter((e=>{let a=!0;for(const l in t)if(t[l]&&("name"===l||"catagory"===l?a=e[l].toLowerCase().includes(t[l].toLowerCase()):"downloadsMin"===l?a=I(e.downloads)>=I(t[l]):"downloadsMax"===l?a=I(e.downloads)<=I(t[l]):"usersMin"===l?a=I(e.users)>=I(t[l]):"usersMax"===l&&(a=I(e.users)<=I(t[l])),!a))break;return a}))}(e,t).map((e=>e.id)))),D=d(x,(e=>{const t=e.map((e=>e.catagory));return t.filter(((e,a)=>t.indexOf(e)===a))})),j=i({name:p().required("Name is required"),icon:p().url("Icon must be a valid url").required("Icon is required"),catagory:p().required("Catagory is required"),created:u().required(),downloads:p().matches(/^\d+(.\d+)?(B|M)$/i,"Invalid input").required("Downloads is required"),users:p().matches(/^\d+(.\d+)?(B|M)$/i,"Invalid input").required("Users is required")}),B=e=>{var t,a,l,r,n,o;const d=m(),i=f(D),{register:p,handleSubmit:u,reset:w,formState:{errors:N}}=E({resolver:b(j)}),{formOpen:h}=s({},e);return y.createElement("form",{className:g("add-app-form",{open:h}),onSubmit:u((e=>{d({type:"apps/appAdded",payload:e}),w()}))},y.createElement("label",null,"Name"),y.createElement("input",c(s({},p("name")),{placeholder:"Enter App's Name",autoComplete:"off"})),(null==(t=N.name)?void 0:t.message)&&y.createElement("p",{className:"warning"},N.name.message),y.createElement("label",null,"Icon"),y.createElement("input",c(s({},p("icon")),{placeholder:"Paste App's Icon Link",autoComplete:"off"})),(null==(a=N.icon)?void 0:a.message)&&y.createElement("p",{className:"warning"},N.icon.message),y.createElement("label",null,"Catagory"),y.createElement("input",c(s({},p("catagory")),{list:"catagories",placeholder:"Choose Or Enter A New Catagory",autoComplete:"off"})),(null==(l=N.catagory)?void 0:l.message)&&y.createElement("p",{className:"warning"},N.catagory.message),y.createElement("datalist",{id:"catagories"},i.map(((e,t)=>y.createElement("option",{value:e,key:t})))),y.createElement("label",null,"Created"),y.createElement("input",c(s({},p("created")),{placeholder:"Year Created",autoComplete:"off"})),(null==(r=N.created)?void 0:r.message)&&y.createElement("p",{className:"warning"},N.created.message),y.createElement("label",null,"Downloads"),y.createElement("input",c(s({},p("downloads")),{placeholder:"eg, 5B or 850M",autoComplete:"off"})),(null==(n=N.downloads)?void 0:n.message)&&y.createElement("p",{className:"warning"},N.downloads.message),y.createElement("label",null,"Users"),y.createElement("input",c(s({},p("users")),{placeholder:"eg, 5B or 850M",autoComplete:"off"})),(null==(o=N.users)?void 0:o.message)&&y.createElement("p",{className:"warning"},N.users.message),y.createElement("button",{className:"submit-button",type:"submit"},"ADD"))},L=e=>{const{id:t}=e,a=m(),{name:l,icon:r,catagory:n,created:o,downloads:s,users:c,favourite:d}=f((e=>((e,t)=>e.find((e=>e.id===t)))(e.apps,t)));return y.createElement("tr",null,y.createElement("td",{className:"app-name"},y.createElement("img",{src:r,alt:"facebook-icon"}),y.createElement("p",null,l)),y.createElement("td",null,n),y.createElement("td",null,o,y.createElement(w,{className:"calender-icon"})),y.createElement("td",{className:"editable",onClick:()=>{const e=prompt("Enter users");e&&(/^\d+(.\d+)?(B|M)$/i.test(e)?a(function(e,t){return{type:"apps/usersUpdated",payload:{id:e,users:t}}}(t,e)):alert("Invalid Value"))}},c,y.createElement(N,{className:"users-icon"})),y.createElement("td",{className:"editable",onClick:()=>{const e=prompt("Enter downloads");e&&(/^\d+(.\d+)?(B|M)$/i.test(e)?a(function(e,t){return{type:"apps/downloadsUpdated",payload:{id:e,downloads:t}}}(t,e)):alert("Invalid Value"))}},s,y.createElement(h,{className:"download-icon"})),y.createElement("td",null,y.createElement("button",{type:"button",className:g("favourite-button",{favourite:d}),onClick:()=>a(function(e){return{type:"apps/toggledFavourite",payload:{id:e}}}(t))},y.createElement(v,null))),y.createElement("td",null,y.createElement("button",{type:"button",className:"delete-button",onClick:()=>{confirm("Are you sure?")&&a(function(e){return{type:"apps/deletedApp",payload:{id:e}}}(t))}},y.createElement(C,null))))},P=()=>{const e=f(U);return y.createElement("table",{className:"apps"},y.createElement("thead",null,y.createElement("tr",null,y.createElement("th",null,"Name"),y.createElement("th",null,"Catagory"),y.createElement("th",null,"Created"),y.createElement("th",null,"Users"),y.createElement("th",null,"Downloads"),y.createElement("th",{colSpan:"2"}))),y.createElement("tbody",null,e.map((e=>y.createElement(L,{id:e,key:e})))))};const $=e=>{const t=m(),{register:a,handleSubmit:l}=E(),{formOpen:r}=s({},e);return y.createElement("form",{className:g("apply-filters-form",{open:r}),onSubmit:l((e=>t({type:"filters/updatedFilters",payload:e})))},y.createElement("label",null,"Name"),y.createElement("input",c(s({},a("name")),{placeholder:"Enter App's Name",autoComplete:"off"})),y.createElement("label",null,"Catagory"),y.createElement("input",c(s({},a("catagory")),{placeholder:"Select Catagory",autoComplete:"off"})),y.createElement("div",{className:"min-max-div"},y.createElement("p",null,"Downloads"),y.createElement("div",null,y.createElement("label",null,"Min"),y.createElement("input",c(s({},a("downloadsMin")),{placeholder:"Min Downloads",autoComplete:"off"})),y.createElement("label",null,"Max"),y.createElement("input",c(s({},a("downloadsMax")),{placeholder:"Max Downloads",autoComplete:"off"})))),y.createElement("div",{className:"min-max-div"},y.createElement("p",null,"Users"),y.createElement("div",null,y.createElement("label",null,"Min"),y.createElement("input",c(s({},a("usersMin")),{placeholder:"Min Users",autoComplete:"off"})),y.createElement("label",null,"Max"),y.createElement("input",c(s({},a("usersMax")),{placeholder:"Max Users",autoComplete:"off"})))),y.createElement("button",{className:"submit-button",type:"submit"},"Apply"))},J=()=>{const[e,t]=M.exports.useState({addApp:!1,applyFilters:!1});return y.createElement("div",{className:"header"},y.createElement("p",{className:"title"},"Top Free Apps"),y.createElement("button",{className:g("add-app-toggle",{open:e.addApp}),type:"button",onClick:()=>t((({addApp:e})=>({applyFilters:!1,addApp:!e})))},y.createElement(A,{className:"add-icon"}),"Add Apps"),y.createElement(B,{formOpen:e.addApp}),y.createElement("button",{className:g("apply-filters-toggle",{open:e.applyFilters}),type:"button",onClick:()=>t((({applyFilters:e})=>({addApp:!1,applyFilters:!e})))},y.createElement(O,{className:"filter-icon"}),"Apply Filters"),y.createElement($,{formOpen:e.applyFilters}))};function V(){return y.createElement("div",{className:"App"},y.createElement(J,null),y.createElement(P,null))}const K=k(S({apps:function(e=[],t){var a;switch(t.type){case"apps/appAdded":const l=(null==(a=e[e.length-1])?void 0:a.id)+1||0;return console.log(l),[...e,c(s({},t.payload),{id:l})];case"apps/usersUpdated":return e.map((e=>e.id===t.payload.id?c(s({},e),{users:t.payload.users}):e));case"apps/downloadsUpdated":return e.map((e=>e.id===t.payload.id?c(s({},e),{downloads:t.payload.downloads}):e));case"apps/toggledFavourite":return e.map((e=>e.id===t.payload.id?c(s({},e),{favourite:!e.favourite}):e));case"apps/deletedApp":return e.filter((e=>e.id!==t.payload.id));default:return e}},filters:function(e={},t){switch(t.type){case"filters/updatedFilters":return s(s({},e),t.payload);default:return e}}}),function(){try{const e=localStorage.getItem("apps");if(null===e)return;return{apps:JSON.parse(e),filters:{}}}catch(e){return}}());K.subscribe((()=>function(e){try{const t=JSON.stringify(e.apps);localStorage.setItem("apps",t)}catch(t){}}(K.getState()))),q.render(y.createElement(y.StrictMode,null,y.createElement(F,{store:K},y.createElement(V,null))),document.getElementById("root"));
