(this["webpackJsonptailwind-demo"]=this["webpackJsonptailwind-demo"]||[]).push([[0],{172:function(e,t,c){},173:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(61),r=c.n(a),i=c(3),l=c(0),d=function(e){var t=e.dataList,c=e.select;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex mb-2",children:[Object(l.jsx)("div",{className:"dark:text-white",children:"Topic"}),Object(l.jsx)("div",{className:"ml-auto dark:text-white",children:"Replies"})]}),Object(l.jsx)("hr",{className:"mb-2"}),t&&t.map((function(e,t){return Object(l.jsxs)("div",{className:"",onClick:function(){return c(t)},children:[Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{className:"dark:text-white mt-2",children:e.title}),Object(l.jsx)("div",{className:"ml-auto mr-5 dark:text-white mt-2",children:e.reply?e.reply.length:0})]}),Object(l.jsx)("div",{className:"mb-1",children:e.catagory&&e.catagory.map((function(e,t){return Object(l.jsx)("span",{className:"m-1 bg-gray-300 ml-0 pl-3 pr-3 rounded-lg text-gray-500 dark:text-black",children:e.name},t)}))}),Object(l.jsx)("hr",{})]},t)}))]})},o=function(){var e=Object(n.useState)(localStorage.getItem("theme")),t=Object(i.a)(e,2),c=t[0],s=t[1],a="dark"===c?"light":"dark";return Object(n.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(a),localStorage.setItem("theme",c),e.classList.add(c)}),[c,a]),[a,s]},j=function(e){var t=e.toggleNewToggle,c=o(),n=Object(i.a)(c,2),s=n[0],a=n[1];return Object(l.jsxs)("div",{className:"flex  absolute top-0 bg-blue-100 w-full p-2 ",children:[Object(l.jsx)("div",{className:" ",children:Object(l.jsx)("span",{onClick:function(){return a(s)},className:"w-10 h-10 bg-indigo-500 block rounded-full shadow-lg  cursor-pointer text-white  items-center justify-center",children:"light"===s?Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}):Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}),Object(l.jsx)("div",{onClick:function(){return t()},className:"ml-auto bg-gray-400 text-indigo-50 dark:text-black dark:bg-white pl-3 pr-3 pb-0 pt-2 rounded-lg mr-3",children:"+ Create New Topic"})]})},b=c(4),m=c(5),u=function(e){var t=e.children,c=e.onClose,s=e.visible,a=e.modalStyles,r=e.bodyStyles;return Object(n.useEffect)((function(){var e=function(e){27===e.keyCode&&c()};return document.addEventListener("keyup",e,!1),function(){document.removeEventListener("keyup",e,!1)}}),[]),Object(l.jsx)(l.Fragment,{children:s&&Object(l.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto  bg-opacity-25 ",children:Object(l.jsxs)("div",{className:"flex items-center justify-center min-h-screen p-0 ".concat(a),children:[Object(l.jsx)("div",{className:"fixed inset-0 transition-opacity ","aria-hidden":"true",onClick:c,children:Object(l.jsx)("div",{className:"absolute inset-0 bg-gray-400 opacity-25"})}),Object(l.jsx)("div",{className:"bg-white rounded-lg overflow-hidden\n               shadow-xl transform transition-all sm:my-8 sm:align-middle\n                sm:max-w-5xl sm:w-1/2 px-8 py-6 ".concat(r),role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:t})]})})})},x=function(e){var t=e.newTopicToggle,c=e.toggleNewToggle,n=e.save,s=m.b({title:m.c().required("Please Enter Title"),catagory:m.a().of(m.b().shape({name:m.c().required("Name required")})).required("Please Enter Catagory"),description:m.c().required("Please Enter Description")});return Object(l.jsx)("div",{children:Object(l.jsxs)(u,{visible:t,onClose:function(){return c()},children:[Object(l.jsx)("h1",{className:"text-2xl p-2 pb-3 pl-0",children:"Create New Topic"}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsx)(b.d,{initialValues:{title:"",catagory:[],description:""},validationSchema:s,onSubmit:function(e){return n(e)},enableReinitialize:!0,children:function(e){e.values;var t=e.setFieldValue;return Object(l.jsxs)(b.c,{children:[Object(l.jsx)("div",{className:"grid-cols-1 ",children:Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)(b.b,{type:"text",name:"title",placeholder:"Type title, or paste a link here",className:"w-full mt-2 p-2 border-gray-400 border-2"}),Object(l.jsx)("span",{className:"text-red-500 mt-0",children:Object(l.jsx)(b.a,{name:"title"})})]})}),Object(l.jsx)("div",{className:"grid-cols-1 ",children:Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{children:"Catagory"}),Object(l.jsxs)(b.b,{as:"select",name:"catagory",placeholder:"Select Catagory",className:"w-full bg-transparent mt-2 p-2 border-gray-400 border-2",defaultValue:"",onChange:function(e){return t("catagory",[{name:e.target.value}])},children:[Object(l.jsx)("option",{value:"",disabled:!0,children:"Select Catagory"}),Object(l.jsx)("option",{value:"texterLoader",children:"Texter Loader"}),Object(l.jsx)("option",{value:"objLoader",children:"OBJ Loader"}),Object(l.jsx)("option",{value:"fbxLoader",children:"FBX Loader"})]}),Object(l.jsx)("span",{className:"text-red-500 mt-0",children:Object(l.jsx)(b.a,{name:"catagory[0].name"})})]})}),Object(l.jsx)("div",{className:"grid-cols-1 ",children:Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)(b.b,{type:"textarea",name:"description",placeholder:"Description",className:"w-full mt-2  p-2 border-gray-400 border-2",rows:"6"}),Object(l.jsx)("span",{className:"text-red-500 mt-0",children:Object(l.jsx)(b.a,{name:"description"})})]})}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"m-2 bg-blue-500 p-2 text-white rounded-lg",type:"submit",children:"Submit"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"m-2 bg-gray-500 p-2 text-white rounded-lg",type:"button",onClick:function(){return c()},children:"Cancel"})})]})]})}})]})})},h=function(e){var t=e.data,c=e.save,s=e.closeCommentFlag,a=Object(n.useState)(!1),r=Object(i.a)(a,2),d=r[0],o=r[1],j=m.b({description:m.c().required("Please Enter Description")});return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"m-2 ml-0 bg-gray-500 p-2 text-white rounded-lg w-1/12",type:"button",onClick:function(){s()},children:"Back"})}),Object(l.jsx)("h1",{className:"text-3xl dark:text-white ",children:t.title}),Object(l.jsx)("div",{className:"mb-1",children:t.catagory&&t.catagory.map((function(e,t){return Object(l.jsx)("span",{className:"m-1 bg-gray-300 ml-0 pl-3 pr-3  text-gray-500 dark:text-black ",children:e.name},t)}))}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"bg-gray-300",children:Object(l.jsx)("div",{className:"m-4",children:t.description})}),Object(l.jsx)("div",{className:"flex",children:Object(l.jsxs)("div",{className:"flex bg-gray-300 ml-auto",onClick:function(){return o(!d)},children:[Object(l.jsx)("div",{className:"w-5 h-5 ml-auto  mr-2",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})})}),Object(l.jsx)("span",{className:"",children:"reply"})]})}),d&&Object(l.jsx)(b.d,{initialValues:{description:""},validationSchema:j,onSubmit:function(e){return function(e){var n=Object.assign({},t);n.reply.push({des:e.description}),c(n)}(e)},enableReinitialize:!0,children:function(e){e.values;var t=e.setFieldValue;return Object(l.jsxs)(b.c,{children:[Object(l.jsx)("div",{className:"grid-cols-1 ",children:Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)(b.b,{type:"textarea",name:"description",placeholder:"Description",className:"w-full mt-2  p-2 border-gray-400 border-2",rows:"6",onChange:function(e){t("description",e.target.value)}}),Object(l.jsx)("span",{className:"text-red-500 mt-0",children:Object(l.jsx)(b.a,{name:"description"})})]})}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"m-2 bg-blue-500 p-2 text-white rounded-lg",type:"submit",children:"Reply"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"m-2 bg-gray-500 p-2 text-white rounded-lg",type:"button",onClick:function(){t("description",""),o(!d)},children:"Cancel"})})]})]})}}),t.reply&&t.reply.map((function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"m-3 bg-gray-200 p-3",children:e.des},t),Object(l.jsx)("hr",{})]})}))]})},g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([{title:"lorem",catagory:[{name:"a"},{name:"b"}],description:"asfsdfsfsfsf",reply:[{des:"sdf"}]}]),r=Object(i.a)(a,2),o=r[0],b=r[1],m=Object(n.useState)(),u=Object(i.a)(m,2),g=u[0],O=u[1],p=Object(n.useState)(!1),v=Object(i.a)(p,2),f=v[0],y=v[1],N=function(){s(!c)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:" min-h-screen dark:bg-black transition duration-500",children:[Object(l.jsx)(j,{toggleNewToggle:function(){return N()}}),Object(l.jsx)("div",{className:"m-16 p-0",children:f?Object(l.jsx)(h,{data:o[g],save:function(e){return y(!1),void O("")},closeCommentFlag:function(){return y(!1),void O("")}}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{dataList:o,select:function(e){return function(e){y(!0),O(e)}(e)}}),c&&Object(l.jsx)(x,{newTopicToggle:c,toggleNewToggle:function(){return N()},save:function(e){return function(e){var t=Object.assign([],o);t.push(e),b(t),N()}(e)}})]})})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,174)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(172);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),O()}},[[173,1,2]]]);
//# sourceMappingURL=main.0ef7c617.chunk.js.map