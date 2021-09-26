var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&o(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));"undefined"!=typeof require&&require;import{c as d,a as i,n as m,b as p,d as u,e as f,u as E,f as g,g as y,R as b,h as N,o as w,M as v,F as h,i as C,B as M,j as A,r as O,k as S,l as k,m as q,p as F,P as I}from"./vendor.fcffb3da.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const x=d({name:"apps",initialState:function(){try{const e=localStorage.getItem("apps");return null===e?[]:JSON.parse(e)}catch(e){return[]}}(),reducers:{appAdded:{reducer(e,t){e.push(s({},t.payload))},prepare:e=>({payload:c(s({},e),{id:m()})})},usersUpdated(e,t){e.find((e=>e.id===t.payload.id)).users=t.payload.users},downloadsUpdated(e,t){e.find((e=>e.id===t.payload.id)).downloads=t.payload.downloads},toggledFavourite(e,t){const a=e.find((e=>e.id===t.payload.id));a.favourite=!a.favourite},deletedApp:(e,t)=>e.filter((e=>e.id!==t.payload.id))}});function U(e){return+e.slice(0,e.length-1)*{m:10**6,b:10**9}[e[e.length-1].toLowerCase()]}const D=e=>e.apps;const j=i(D,(e=>e.filters),((e,t)=>function(e,t){return e.filter((e=>{let a=!0;for(const l in t)if(t[l]&&("name"===l||"catagory"===l?a=e[l].toLowerCase().includes(t[l].toLowerCase()):"downloadsMin"===l?a=U(e.downloads)>=U(t[l]):"downloadsMax"===l?a=U(e.downloads)<=U(t[l]):"usersMin"===l?a=U(e.users)>=U(t[l]):"usersMax"===l&&(a=U(e.users)<=U(t[l])),!a))break;return a}))}(e,t).map((e=>e.id)))),B=i(D,(e=>{const t=e.map((e=>e.catagory));return t.filter(((e,a)=>t.indexOf(e)===a))})),{appAdded:L,downloadsUpdated:P,usersUpdated:$,toggledFavourite:J,deletedApp:V}=x.actions;var K=x.reducer;const R=p({name:u().required("Name is required"),icon:u().url("Icon must be a valid url").required("Icon is required"),catagory:u().required("Catagory is required"),created:f().required(),downloads:u().matches(/^\d+(.\d+)?(B|M)$/i,"Invalid input").required("Downloads is required"),users:u().matches(/^\d+(.\d+)?(B|M)$/i,"Invalid input").required("Users is required")}),T=e=>{var t,a,l,r,n,o;const d=E(),i=g(B),{register:m,handleSubmit:p,reset:u,formState:{errors:f}}=y({resolver:w(R)}),{formOpen:v}=s({},e);return b.createElement("form",{className:N("add-app-form",{open:v}),onSubmit:p((e=>{d(L(e)),u()}))},b.createElement("label",null,"Name"),b.createElement("input",c(s({},m("name")),{placeholder:"Enter App's Name",autoComplete:"off"})),(null==(t=f.name)?void 0:t.message)&&b.createElement("p",{className:"warning"},f.name.message),b.createElement("label",null,"Icon"),b.createElement("input",c(s({},m("icon")),{placeholder:"Paste App's Icon Link",autoComplete:"off"})),(null==(a=f.icon)?void 0:a.message)&&b.createElement("p",{className:"warning"},f.icon.message),b.createElement("label",null,"Catagory"),b.createElement("input",c(s({},m("catagory")),{list:"catagories",placeholder:"Choose Or Enter A New Catagory",autoComplete:"off"})),(null==(l=f.catagory)?void 0:l.message)&&b.createElement("p",{className:"warning"},f.catagory.message),b.createElement("datalist",{id:"catagories"},i.map(((e,t)=>b.createElement("option",{value:e,key:t})))),b.createElement("label",null,"Created"),b.createElement("input",c(s({},m("created")),{placeholder:"Year Created",autoComplete:"off"})),(null==(r=f.created)?void 0:r.message)&&b.createElement("p",{className:"warning"},f.created.message),b.createElement("label",null,"Downloads"),b.createElement("input",c(s({},m("downloads")),{placeholder:"eg, 5B or 850M",autoComplete:"off"})),(null==(n=f.downloads)?void 0:n.message)&&b.createElement("p",{className:"warning"},f.downloads.message),b.createElement("label",null,"Users"),b.createElement("input",c(s({},m("users")),{placeholder:"eg, 5B or 850M",autoComplete:"off"})),(null==(o=f.users)?void 0:o.message)&&b.createElement("p",{className:"warning"},f.users.message),b.createElement("button",{className:"submit-button",type:"submit"},"ADD"))},Y=e=>{const{id:t}=e,a=E(),{name:l,icon:r,catagory:n,created:o,downloads:s,users:c,favourite:d}=g((e=>((e,t)=>e.find((e=>e.id===t)))(e.apps,t)));return b.createElement("tr",null,b.createElement("td",{className:"app-name"},b.createElement("img",{src:r,alt:"facebook-icon"}),b.createElement("p",null,l)),b.createElement("td",null,n),b.createElement("td",null,o,b.createElement(v,{className:"calender-icon"})),b.createElement("td",{className:"editable",onClick:()=>{const e=prompt("Enter users",c);e&&(/^\d+(.\d+)?(B|M)$/i.test(e)?a($({id:t,users:e})):alert("Invalid Value"))}},c,b.createElement(h,{className:"users-icon"})),b.createElement("td",{className:"editable",onClick:()=>{const e=prompt("Enter downloads",s);e&&(/^\d+(.\d+)?(B|M)$/i.test(e)?a(P({id:t,downloads:e})):alert("Invalid Value"))}},s,b.createElement(C,{className:"download-icon"})),b.createElement("td",null,b.createElement("button",{type:"button",className:N("favourite-button",{favourite:d}),onClick:()=>a(J({id:t}))},b.createElement(M,null))),b.createElement("td",null,b.createElement("button",{type:"button",className:"delete-button",onClick:()=>{confirm("Are you sure?")&&a(V({id:t}))}},b.createElement(A,null))))},z=()=>{const e=g(j);return b.createElement("table",{className:"apps"},b.createElement("thead",null,b.createElement("tr",null,b.createElement("th",null,"Name"),b.createElement("th",null,"Catagory"),b.createElement("th",null,"Created"),b.createElement("th",null,"Users"),b.createElement("th",null,"Downloads"),b.createElement("th",{colSpan:"2"}))),b.createElement("tbody",null,e.map((e=>b.createElement(Y,{id:e,key:e})))))},G=d({name:"filters",initialState:{},reducers:{updatedFilters:(e,t)=>s(s({},e),t.payload)}}),{updatedFilters:H}=G.actions;var Q=G.reducer;const W=e=>{const t=E(),{register:a,handleSubmit:l}=y(),{formOpen:r}=s({},e);return b.createElement("form",{className:N("apply-filters-form",{open:r}),onSubmit:l((e=>t(H(e))))},b.createElement("label",null,"Name"),b.createElement("input",c(s({},a("name")),{placeholder:"Enter App's Name",autoComplete:"off"})),b.createElement("label",null,"Catagory"),b.createElement("input",c(s({},a("catagory")),{placeholder:"Select Catagory",autoComplete:"off"})),b.createElement("div",{className:"min-max-div"},b.createElement("p",null,"Downloads"),b.createElement("div",null,b.createElement("label",null,"Min"),b.createElement("input",c(s({},a("downloadsMin")),{placeholder:"Min Downloads",autoComplete:"off"})),b.createElement("label",null,"Max"),b.createElement("input",c(s({},a("downloadsMax")),{placeholder:"Max Downloads",autoComplete:"off"})))),b.createElement("div",{className:"min-max-div"},b.createElement("p",null,"Users"),b.createElement("div",null,b.createElement("label",null,"Min"),b.createElement("input",c(s({},a("usersMin")),{placeholder:"Min Users",autoComplete:"off"})),b.createElement("label",null,"Max"),b.createElement("input",c(s({},a("usersMax")),{placeholder:"Max Users",autoComplete:"off"})))),b.createElement("button",{className:"submit-button",type:"submit"},"Apply"))},X=()=>{const[e,t]=O.exports.useState({addApp:!1,applyFilters:!1});return b.createElement("div",{className:"header"},b.createElement("p",{className:"title"},"Top Free Apps"),b.createElement("button",{className:N("add-app-toggle",{open:e.addApp}),type:"button",onClick:()=>t((({addApp:e})=>({applyFilters:!1,addApp:!e})))},b.createElement(S,{className:"add-icon"}),"Add Apps"),b.createElement(T,{formOpen:e.addApp}),b.createElement("button",{className:N("apply-filters-toggle",{open:e.applyFilters}),type:"button",onClick:()=>t((({applyFilters:e})=>({addApp:!1,applyFilters:!e})))},b.createElement(k,{className:"filter-icon"}),"Apply Filters"),b.createElement(W,{formOpen:e.applyFilters}))};function Z(){return b.createElement("div",{className:"App"},b.createElement(X,null),b.createElement(z,null))}const _=q({reducer:{apps:K,filters:Q}});_.subscribe((()=>function(e){try{const t=JSON.stringify(e.apps);localStorage.setItem("apps",t)}catch(t){}}(_.getState()))),F.render(b.createElement(b.StrictMode,null,b.createElement(I,{store:_},b.createElement(Z,null))),document.getElementById("root"));
