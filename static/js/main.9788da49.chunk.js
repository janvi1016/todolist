(this.webpackJsonptodoreact=this.webpackJsonptodoreact||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),l=(n(13),n(8)),o=n(6),d=n(3),r=n.p+"static/media/todo.975e4dd4.svg",j=(n(14),n(0)),u=function(){var t=Object(c.useState)(),e=Object(d.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(function(){var t=localStorage.getItem("listData");return console.log(t),t?JSON.parse(localStorage.getItem("listData")):[]}()),s=Object(d.a)(i,2),u=s[0],b=s[1],f=Object(c.useState)(!0),m=Object(d.a)(f,2),O=m[0],h=m[1],g=Object(c.useState)(null),x=Object(d.a)(g,2),v=x[0],p=x[1],I=function(){if(n)if(n&&!O)b(u.map((function(t){return t.id===v?Object(o.a)(Object(o.a)({},t),{},{name:n}):t}))),a(""),p(null),h(!0);else{var t={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[t])),a("")}else alert("input Some Data")};return Object(c.useEffect)((function(){localStorage.setItem("listData",JSON.stringify(u))}),[u]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:r,alt:"todologo"}),Object(j.jsx)("figcaption",{children:"Add Your List Here \ud83d\udd90"})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u270d Add Item",value:n,onChange:function(t){a(t.target.value)}}),O?Object(j.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:I}):Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Update Item",onClick:I})]}),Object(j.jsx)("div",{className:"showItems",children:u.map((function(t){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Item",onClick:function(){return function(t){var e=u.find((function(e){return e.id===t}));console.log(e),h(!1),a(e.name),p(t)}(t.id)}}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return function(t){var e=u.filter((function(e){return e.id!==t}));b(e)}(t.id)}})]})]},t.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:Object(j.jsx)("span",{children:" CHECK LIST"})})})]})})})};var b=function(){return Object(j.jsx)(u,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.9788da49.chunk.js.map