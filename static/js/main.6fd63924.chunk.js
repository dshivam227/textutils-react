(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}function s(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,e.heading," "),l.a.createElement("textarea",{className:"form-control",id:"myBox",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white"},rows:"8"}),l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted to uppercase","success")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var e=r.toLowerCase();c(e)}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){c(r)}},"Convert to Italic"),l.a.createElement("button",{className:"btn btn-primary ",onClick:function(){c("")}},"Clear")),l.a.createElement("div",{className:"container my-2"},l.a.createElement("h3",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words,",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes read")))}var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.type)," ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],g=function(e,a){b({msg:e,type:a}),setTimeout(function(){b("null")},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Shivam Dubey",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="gray",g("dark mode has been enable","success")):(r("light"),document.body.style.backgroundColor="white")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:g,heading:"Enter your text to analyse!",mode:t})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.6fd63924.chunk.js.map