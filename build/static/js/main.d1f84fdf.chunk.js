(this.webpackJsonpBooksReact=this.webpackJsonpBooksReact||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){e.exports=a(42)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),l=a.n(c),o=a(8),u=a(7),s=a(2),m=(a(18),function(e){var t=e.title,a=e.author,c=e.pages;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,c))}),i=(a(19),a(13)),p=a(26),h=a(25),E=function(e){var t=e.books,a=e.deleteBook;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,r.a.createElement(m,{title:e.title,author:e.author,pages:e.pages}),r.a.createElement("span",{className:"goTrashcan"},r.a.createElement(i.b,{className:"goTrashcanIcon",onClick:function(){return a(e)}})),r.a.createElement("span",{className:"faLink"},r.a.createElement(u.b,{to:"/book/".concat(e.bookId)},r.a.createElement(h.a,{className:"faLinkIcon"}))),r.a.createElement("span",{className:"grFormAdd"},r.a.createElement(u.b,{to:"/addChapter/".concat(e.bookId)},r.a.createElement(p.a,{className:"addIcon"}))),r.a.createElement("span",{className:"goList"},r.a.createElement(u.b,{to:"/chapterList/".concat(e.bookId)},r.a.createElement(i.a,{className:"goListIcon"}))))})))},f=(a(22),function(e){var t=e.books,a=e.deleteBook,c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],s=l[1],m=Object(n.useState)("title"),i=Object(o.a)(m,2),p=i[0],h=i[1],f=t.filter((function(e){return e[p].toLowerCase().includes(u.toLowerCase())}));return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"search",className:"search",placeholder:"Search",value:u,onChange:function(e){return s(e.target.value)}}),r.a.createElement("select",{className:"select",onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:"title"},"title"),r.a.createElement("option",{value:"author"},"author")),r.a.createElement(E,{books:f,deleteBook:a}))}),d=a(27),b=(a(38),function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement(u.b,{to:"/"},r.a.createElement(d.a,{style:{color:"#fff"}}))))}),g=(a(39),function(e){var t=e.title,a=e.author,c=e.pages;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"detail-book"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,c)))}),k=a(11),v=a.n(k),N=(a(40),function(e){var t=e.books,a=e.bookId,c=e.addChapter,l=Object(n.useState)(""),u=Object(o.a)(l,2),s=u[0],m=u[1],i=Object(n.useState)(0),p=Object(o.a)(i,2),h=p[0],E=p[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var n={chapterId:v()(),chapterTitle:s,pages:h};t.map((function(e){if(e.bookId===a)if(e.hasOwnProperty("chapters"))e.chapters.push(n);else{var t=[];t.push(n),e.chapters=t}return e})),c(t),m(""),E(0)}(e)},className:"form-add-chapter"},r.a.createElement("input",{className:"submit-title",type:"text",placeholder:"Chapter title",value:s,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{className:"submit-pages",type:"number",placeholder:"Pages",value:h,onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{className:"submit-chapter",type:"submit",value:"Submit",name:"submit"})))}),I=function(e){var t=e.title,a=e.pages;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))},j=function(e){var t=e.chapters;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,r.a.createElement(I,{title:e.chapterTitle,pages:e.pages}))})))},O=a(28),C=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("./bookList.json").then((function(e){return e.json()})).then((function(e){e.map((function(e){return e.bookId=v()()})),c(e)}))}),[]);var l=function(e){var t=Object(O.without)(a,e);c(t)},m=function(e){return c(e)};return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement("div",{className:"main"},r.a.createElement("header",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"left"}),r.a.createElement("div",{className:"center"},r.a.createElement(s.a,{path:"/addChapter/:bookId",render:function(e){return r.a.createElement(N,{addChapter:m,books:a,bookId:e.location.pathname.replace("/addChapter/","")})}}),r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,{books:a,deleteBook:l})}}),r.a.createElement(s.a,{exact:"/chapterList/:bookId",render:function(e){var t,n=e.location.pathname.replace("/chapterList/","");return a.forEach((function(e){return e.bookId===n&&(t=e.hasOwnProperty("chapters")?e.chapters:""),e})),t&&r.a.createElement(j,{chapters:t})}}),r.a.createElement(s.a,{path:"/book/:bookId",render:function(e){var t,n=e.location.pathname.replace("/book/","");return a.forEach((function(e){return e.bookId===n&&(t=e),e})),r.a.createElement(g,{title:t.title,author:t.author,pages:t.pages})}})),r.a.createElement("div",{className:"right"}),r.a.createElement("footer",{className:"footer"})))))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d1f84fdf.chunk.js.map