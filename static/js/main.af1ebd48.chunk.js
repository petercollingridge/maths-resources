(this["webpackJsonpmaths-resources"]=this["webpackJsonpmaths-resources"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),u=a(9),i=a(6);var o=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/triangular-grids"},"Grids")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/cipher"},"Ciphers")))},m=a(4),s=(a(28),function(e){return function(t){t.target.validity.valid&&e(t.target.value)}}),h={Rectangle:function(e,t,a,n,l){return r.a.createElement("rect",{className:"tile",key:e,x:t-n/2,y:a-l/2,width:n,height:l})},Circle:function(e,t,a,n){return r.a.createElement("circle",{className:"tile",key:e,cx:t,cy:a,r:n/2})},Hexagon:function(e,t,a,n){for(var l=Math.PI/3,c=n*Math.sqrt(3)/3,u="",i=0;i<6;i++){u+=(i?"L":"M")+(t+c*Math.sin(i*l))+" "+(a+c*Math.cos(i*l))}return r.a.createElement("path",{className:"tile",key:e,d:u+"z"})}},E=function(){var e=Array.from(Object.keys(h)),t=Object(n.useState)(10),a=Object(m.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(20),i=Object(m.a)(u,2),o=i[0],E=i[1],f=Object(n.useState)(20),p=Object(m.a)(f,2),d=p[0],v=p[1],g=Object(n.useState)(e[0]),b=Object(m.a)(g,2),y=b[0],O=b[1],j=l*o,w=l*d,N=h[y],k=function(e,t,a,n){for(var r=[],l=0;l<e;l++)for(var c=(l+.5)*n+1,u=0;u<=l;u++){var i=(t-l*a)/2+u*a+1;r.push({x:i,y:c})}return r}(l,j,o,d).map((function(e,t){var a=e.x,n=e.y;return N(t,a,n,o,d)}));return r.a.createElement("article",null,r.a.createElement("section",{className:"options"},r.a.createElement("h2",null,"Triangular grid"),r.a.createElement("form",null,r.a.createElement("label",null,"Tile shape:",r.a.createElement("select",{value:y,onChange:function(e){return O(e.target.value)}},e.map((function(e){return r.a.createElement("option",{key:e},e)})))),r.a.createElement("label",null,"Grid size:",r.a.createElement("input",{type:"number",min:"1",max:"32",value:l,onChange:s(c)})),r.a.createElement("label",null,"Tile width:",r.a.createElement("input",{type:"number",min:"10",max:"100",value:o,onChange:s(E)})),r.a.createElement("label",null,"Tile height:",r.a.createElement("input",{type:"number",min:"10",max:"100",value:d,onChange:s(v)}))),r.a.createElement("button",{onClick:window.print},"Print")),r.a.createElement("section",{className:"image"},r.a.createElement("svg",{className:"grid",width:j+2,height:w+2},k)))};function f(e){var t=e.letters,a=e.hiddenLetterState,n=e.startIndex,l=void 0===n?0:n,c=Object(m.a)(a,2),u=c[0],i=c[1];return r.a.createElement("table",{className:"cipher-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",{key:e,onClick:function(){return function(e){u.has(e)?u.delete(e):u.add(e),i(new Set(u))}(e)}},u.has(e)?" ":e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("td",{key:e},t+l+1)})))))}var p=function(e){var t=e.letters,a=Object(n.useState)(new Set),l=Math.floor(t.length/2),c=t.slice(0,l),u=t.slice(l);return r.a.createElement("div",null,r.a.createElement(f,{letters:c,hiddenLetterState:a}),r.a.createElement(f,{letters:u,hiddenLetterState:a,startIndex:l}))};function d(e){return" "!==e&&!isNaN(e)}function v(e){var t=e.characters;return r.a.createElement("span",{className:"cipher-word"},t.map((function(e,t){var a=d(e)?"cipher-code":null;return r.a.createElement("span",{key:t,className:"cipher-character"},r.a.createElement("span",{className:a},e))})))}var g=function(e){var t=function(e){var t=[],a=[],n=!1;return e.forEach((function(e){var r=d(e);n&&r&&a.length>0&&(t.push(a),a=[],n=!1),n=!r,a.push(e)})),a.length>0&&t.push(a),t}(e.message);return r.a.createElement("div",{className:"cipher-message"},t.map((function(e,t){return r.a.createElement(v,{key:t,characters:e})})))};function b(e){for(var t=(e=e.slice(0)).length;t--;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}a(29);var y=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),O=new Set(y);function j(e,t){return Array.from(e).map((function(e){var a=t.indexOf(e);return-1===a?e:a+1}))}Array.from(" .?!,()[]:;\"'").forEach((function(e){return O.add(e)}));var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(m.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(b(y)),h=Object(m.a)(s,2),E=h[0],f=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Code"),r.a.createElement("div",{className:"no-print"},r.a.createElement("button",{onClick:function(){var e=b(y);f(e),o(j(a,e))}},"New code")),r.a.createElement(p,{letters:E}),r.a.createElement("div",{className:"no-print"},r.a.createElement("h2",null,"Message"),r.a.createElement("p",null,"Type your message. (It can't include any numbers)"),r.a.createElement("textarea",{className:"cipher-message-box",value:a,onChange:function(e){var t=function(e){return e=e.toUpperCase(),Array.from(e).filter((function(e){return O.has(e)})).join("")}(e.target.value);l(t),o(j(t,E))},placeholder:"Type your message"})),r.a.createElement("h2",null,"Coded message"),r.a.createElement(g,{message:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);var N=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Maths Resources")),r.a.createElement("main",null,r.a.createElement(u.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/triangular-grids",component:E}),r.a.createElement(i.a,{path:"/cipher",component:w}),r.a.createElement(i.a,{path:"/",component:o})))))};c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.af1ebd48.chunk.js.map