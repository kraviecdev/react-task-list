(this["webpackJsonpreact-task-list"]=this["webpackJsonpreact-task-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(8)),r=n(4),u=n(3),l=(n(14),n(0)),d=function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),a=s[0],o=s[1];return Object(l.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(a.trim()),o("")},children:[Object(l.jsx)("input",{value:a,type:"text",className:"form__input",placeholder:"What is to do?",onChange:function(t){return o(t.target.value)},autoFocus:!0}),Object(l.jsx)("button",{className:"form__button",type:"submit",children:"Add Task"})]})},j=(n(16),function(t){var e=t.title;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{className:"header__title",children:e})})}),b=(n(17),function(t){var e=t.year,n=t.name;return Object(l.jsxs)("footer",{className:"footer",children:["Coded by ",n," \xa9 ",e]})}),f=(n(18),function(t){var e=t.title,n=t.extraButtons,c=t.body;return Object(l.jsxs)("section",{className:"section",children:[Object(l.jsxs)("header",{className:"section__header",children:[Object(l.jsx)("h2",{className:"section__title",children:e}),n]}),c]})}),h=(n(19),function(t){var e=t.tasks,n=t.hideDoneTasks,c=t.removeTask,s=t.toggleDoneTask;return Object(l.jsx)("ul",{className:"list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"".concat(t.done&&n?"list__item--hidden":""," list__item"),children:[Object(l.jsx)("button",{onClick:function(){return s(t.id)},className:"".concat(t.done?"button--done":""," button button--complete"),children:Object(l.jsx)("i",{className:"material-icons md-24",children:"task_alt"})}),Object(l.jsx)("span",{className:"".concat(t.done?"list__text--done":""," list__text"),children:t.content}),Object(l.jsx)("button",{onClick:function(){return c(t.id)},className:"button button--delete",children:Object(l.jsx)("i",{className:"material-icons md-24",children:"delete"})})]},t.id)}))})}),m=(n(20),function(t){var e=t.tasks,n=t.hideDoneTasks,c=t.toggleHideDone,s=t.markAllTaskDone;return 0===e.length?null:Object(l.jsxs)("div",{className:"section__buttons",children:[Object(l.jsx)("button",{onClick:s,disabled:e.every((function(t){return t.done})),className:"button button--selectAll",children:"Mark all as done"}),Object(l.jsxs)("button",{onClick:c,className:"button button--hideDone",children:[e.some((function(t){return t.done}))&&n?"Show":"Hide"," done"]})]})}),O=(n(21),function(t){var e=t.children;return Object(l.jsx)("div",{className:"container",children:e})});var x=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)([]),o=Object(u.a)(a,2),x=o[0],k=o[1];return Object(l.jsxs)(O,{children:[Object(l.jsx)(j,{title:"Task List"}),Object(l.jsx)(f,{title:"Add task",body:Object(l.jsx)(d,{addNewTask:function(t){if(""!==t)return k((function(e){return[].concat(Object(i.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(l.jsx)(f,{title:"List of tasks",body:Object(l.jsx)(h,{toggleDoneTask:function(t){k((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))},removeTask:function(t){k((function(e){return e.filter((function(e){return e.id!==t}))}))},tasks:x,hideDoneTasks:n}),extraButtons:Object(l.jsx)(m,{tasks:x,hideDoneTasks:n,toggleHideDone:function(){s(n=!n)},markAllTaskDone:function(){k((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})}),Object(l.jsx)(b,{name:"Patryk Krawczyk",year:"2021"})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.7591b101.chunk.js.map