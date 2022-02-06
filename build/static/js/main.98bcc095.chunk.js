(this["webpackJsonpuser-management-app-using-redux-react"]=this["webpackJsonpuser-management-app-using-redux-react"]||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(11),n=c.n(s),r=c(10),l=c(2),d=c(7),i=c(5),o=c(9),j=c(14),b=c.n(j),u="https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data",m="GET_ERRORS",h="ADD_USER",O="USER_LOADING",x="DELETE_USER",p="GET_USER",f="GET_USERS",v="UPDATE_USER",N=function(){return function(e){e(y()),b.a.get(u).then((function(t){return e({type:f,payload:t.data})})).catch((function(t){return e({type:f,payload:null})}))}},y=function(){return{type:O}},g=function(){return{type:"CLEAR_ERRORS"}},E=c(1),U=Object(o.b)((function(e){return{users:e.users.users}}),{addUser:function(e){return function(t){t(g()),b.a.post(u,e).then((function(e){return t({type:h,payload:e.data})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.users,c=e.addUser,s=Object(a.useState)(""),n=Object(i.a)(s,2),r=n[0],o=n[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),u=b[0],m=b[1],h=Object(a.useState)(""),O=Object(i.a)(h,2),x=O[0],p=O[1],f=Object(a.useState)(""),v=Object(i.a)(f,2),N=v[0],y=v[1],g=Object(l.e)();return Object(E.jsx)("div",{className:"container my-5",children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("div",{className:"card-header text-center bg-dark text-white",children:"Dashboard"}),Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsx)("h1",{className:"p-4",children:"Dashboard"}),Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("div",{className:"card-header",children:"Form"}),Object(E.jsx)("div",{className:"card-body",children:Object(E.jsx)("div",{className:"col-md-12 mx-auto p-5",children:Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=t.filter((function(e){return e.email===x?e:null}));if(!x||!r||!u||!N)return d.b.warning("Please fill in all fields!!");if(a.length>0)return d.b.error("This email already exists!!");var s={id:t.length>0?t[t.length-1].id+1:0,email:x,username:u,name:r,address:{city:N}};c(s),d.b.success("User added successfully!!"),g.push("/")},children:[Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Name"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",type:"text",placeholder:"Full name",value:r,onChange:function(e){return o(e.target.value)},required:!0})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Username"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",type:"text",placeholder:"Username",value:u,onChange:function(e){return m(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Email"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",value:x,onChange:function(e){return p(e.target.value)},required:!0})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"City"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",type:"text",placeholder:"City",value:N,onChange:function(e){return y(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group d-flex justify-content-end my-2",children:[Object(E.jsx)("button",{type:"button",className:"btn btn-outline-danger mr-4",onClick:function(){return g.push("/")},children:"cancel"}),Object(E.jsx)("button",{type:"submit",className:"btn btn-success",children:"submit"})]})]})})})]})]})]})})})),w=Object(o.b)((function(e){return{users:e.users.users}}),{updateUser:function(e,t){return function(c){c(g()),b.a.put("".concat(u,"/").concat(e),t).then((function(e){200===e.status&&c(N()),c({type:v,payload:e.data})})).catch((function(e){return c({type:m,payload:e.response.data})}))}}})((function(e){var t=e.users,c=e.updateUser,s=Object(l.f)().id,n=Object(l.e)(),r=t.find((function(e){return e.id===parseInt(s)})),o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],u=j[1],m=Object(a.useState)(""),h=Object(i.a)(m,2),O=h[0],x=h[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),v=f[0],N=f[1],y=Object(a.useState)(""),g=Object(i.a)(y,2),U=g[0],w=g[1];Object(a.useEffect)((function(){var e;u(r.name),x(r.username),N(r.email),w(null===(e=r.address)||void 0===e?void 0:e.city)}),[r]);return Object(E.jsx)("div",{className:"container my-5",children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("div",{className:"card-header text-center bg-dark text-white",children:"Dashboard"}),Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsx)("h1",{className:"p-4",children:"Dashboard"}),Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("div",{className:"card-header",children:"Form"}),Object(E.jsx)("div",{className:"card-body",children:Object(E.jsx)("div",{className:"col-md-12 mx-auto p-5",children:r?Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=t.filter((function(e){return e.email===v&&e.id!==r.id?e:null})),s=t.filter((function(e){return e.username===O&&e.id!==r.id?e:null})),l=t.filter((function(e){return e.city===U&&e.id!==r.id?e:null}));if(""===v||""===O||""===b||""===U)return d.b.warning("Please fill in all fields!!");if(s.length>0)return d.b.error("This username already exists!!");if(a.length>0)return d.b.error("This email already exists!!");if(l.length>0)return d.b.error("This city already exists!!");var i={id:r.id,name:b,username:O,email:v,city:U};console.log(i),c(i),d.b.success("User updated successfully!!"),n.push("/")},children:[Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Name"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",value:b,placeholder:"Name",onChange:function(e){return u(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Username"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",value:O,placeholder:"Username",onChange:function(e){return x(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Email"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",value:v,placeholder:"Email",onChange:function(e){return N(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group row",children:[Object(E.jsx)("label",{htmlFor:"name",className:"col-sm-2 col-form-label",children:"City"}),Object(E.jsx)("div",{className:"col-sm-10",children:Object(E.jsx)("input",{className:"form-control",value:U,placeholder:"City",onChange:function(e){return w(e.target.value)}})})]}),Object(E.jsxs)("div",{className:"form-group d-flex justify-content-end my-2",children:[Object(E.jsx)("button",{type:"submit",className:"btn btn-success",children:"Update User"}),Object(E.jsx)("button",{type:"button",className:"btn btn-outline-danger ml-4",onClick:function(){return n.push("/")},children:"cancel"})]})]}):Object(E.jsx)("h1",{className:"text-center",children:"No User Found"})})})]})]})]})})})),C=c(37),S=(c(67),function(){return Object(E.jsxs)("div",{className:"lds-ripple",children:[Object(E.jsx)("div",{}),Object(E.jsx)("div",{})]})}),D=function(e){var t=e.title,c=e.bodyText,a=e.action,s=e.userId,n=e.onDeleteClick;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(E.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(E.jsxs)("div",{className:"modal-content",children:[Object(E.jsxs)("div",{className:"modal-header",children:[Object(E.jsx)("h5",{className:"modal-title",id:"exampleModalCenterTitle",children:t}),Object(E.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(E.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(E.jsx)("div",{className:"modal-body",children:c}),Object(E.jsxs)("div",{className:"modal-footer",children:[Object(E.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(E.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return n(s)},children:a})]})]})})})})},_=Object(o.b)((function(e){return{users:e.users.users,loading:e.users.loading}}),{getUsers:N,deletUser:function(e){return function(t){b.a.delete("".concat(u,"/").concat(e)).then((function(c){return t({type:x,payload:e})})).catch((function(e){return t({type:m,payload:e.response.data})}))}}})((function(e){var t=e.users,c=e.getUsers,s=e.deletUser,n=e.loading,l=Object(a.useState)(null),d=Object(i.a)(l,2),o=d[0],j=d[1],b=Object(a.useState)("asc"),u=Object(i.a)(b,2),m=u[0],h=u[1];Object(a.useEffect)((function(){c()}),[]);var O=t.sort((function(e,t){return("asc"===m?1:-1)*e.username.localeCompare(t.name)}));return n?Object(E.jsx)(S,{}):Object(E.jsx)("div",{className:"container",children:Object(E.jsx)("div",{className:"row d-flex",children:Object(E.jsx)("div",{className:"col-md-12 mx-auto my-4",children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsxs)("div",{className:"card-header bg-dark text-white  d-flex flex-row  align-items-center justify-content-between p-0 m-0",children:[Object(E.jsx)("span",{className:"ml-4",style:{fontSize:"2rem"},children:Object(E.jsx)(C.a,{})}),Object(E.jsx)("p",{className:"mt-3",children:"Dashboard"}),Object(E.jsx)("p",{})]}),Object(E.jsxs)("div",{className:"card-body",children:[Object(E.jsx)("h1",{children:"Dashboard"}),Object(E.jsx)("button",{type:"button",onClick:function(){return h(!m)},className:"btn btn-primary mb-4",children:"Sort By Username"}),Object(E.jsx)(D,{title:"Delete",bodyText:"Do you want to delete this user",action:"Delete",onDeleteClick:function(e){s(e)},userId:o}),Object(E.jsxs)("div",{className:"card text-center",children:[Object(E.jsx)("div",{className:"card-header",children:Object(E.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(E.jsx)("p",{children:"User list"}),Object(E.jsx)(r.b,{to:"/add",className:"btn btn-primary",children:"Add new"})]})}),Object(E.jsx)("div",{className:"card-body",children:(null===t||void 0===t?void 0:t.length)>0?Object(E.jsx)("div",{className:"table-responsive",children:Object(E.jsxs)("table",{className:"table table-hover",children:[Object(E.jsx)("thead",{className:"table-header",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{scope:"col",children:"Id"}),Object(E.jsx)("th",{scope:"col",children:"Name"}),Object(E.jsx)("th",{scope:"col",children:"Username"}),Object(E.jsx)("th",{scope:"col",children:"Email"}),Object(E.jsx)("th",{scope:"col",children:"City"}),Object(E.jsx)("th",{scope:"col"})]})}),Object(E.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)>0?null===O||void 0===O?void 0:O.map((function(e,t){var c;return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t}),Object(E.jsx)("td",{children:e.name}),Object(E.jsx)("td",{children:e.username}),Object(E.jsx)("td",{children:e.email}),Object(E.jsx)("td",{children:null===(c=e.address)||void 0===c?void 0:c.city}),Object(E.jsxs)("td",{children:[Object(E.jsx)(r.b,{to:"/edit/".concat(e.id),className:"btn btn-sm btn-warning mr-1",children:"Edit"}),Object(E.jsx)("button",{type:"button",onClick:function(){return j(e.id)},className:"btn btn-sm btn-danger","data-toggle":"modal","data-target":"#exampleModalCenter",children:"Delete"})]})]},t)})):Object(E.jsx)("tr",{children:!t&&Object(E.jsx)(SkeletonUsers,{})})})]})}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("p",{children:"Oops! No users users found, add a new user thanks \ud83d\ude22"})})})]})]})]})})})})})),k=function(){return Object(E.jsx)("div",{className:"col-md-12 bg-dark py-2",children:Object(E.jsx)("nav",{className:"navbar bg-dark navbar-dark text-center",children:Object(E.jsx)(r.b,{to:"/",className:"navbar-brand ml-5",children:"Dashboard"})})})},T=(c(68),function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(d.a,{}),Object(E.jsx)(k,{}),Object(E.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(E.jsx)(_,{})}}),Object(E.jsx)(l.a,{exact:!0,path:"/add",component:function(){return Object(E.jsx)(U,{})}}),Object(E.jsx)(l.a,{exact:!0,path:"/edit/:id",component:function(){return Object(E.jsx)(w,{})}})]})}),R=(c(69),c(70),c(13)),F=c(36),I=c(24),A=c(6),L={users:[],user:{},loading:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case f:return Object(A.a)(Object(A.a)({},e),{},{users:t.payload,loading:!1});case p:return Object(A.a)(Object(A.a)({},e),{},{user:t.payload,loading:!1});case v:return Object(A.a)(Object(A.a)({},e),{},{user:[].concat(Object(I.a)(e.user),[t.payload])});case h:return console.log(t.payload),Object(A.a)(Object(A.a)({},e),{},{users:[].concat(Object(I.a)(e.users),[t.payload])});case x:return Object(A.a)(Object(A.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});default:return e}},M=Object(R.b)({users:G}),X=[F.a],P=Object(R.d)(M,{},Object(R.c)(R.a.apply(void 0,X),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),q=document.getElementById("root");n.a.render(Object(E.jsx)(o.a,{store:P,children:Object(E.jsx)(r.a,{children:Object(E.jsx)(T,{})})}),q)}},[[71,1,2]]]);
//# sourceMappingURL=main.98bcc095.chunk.js.map