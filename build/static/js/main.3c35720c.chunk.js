(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{220:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(81),s=n.n(a),r=n(0),c=n(249),o=n(43),i=n(19),l=(n(219),n(220),n(17)),j=n(44),u=n(196),d=n(4),b={user:null};if(localStorage.getItem("jwtToken")){var m=Object(u.a)(localStorage.getItem("jwtToken"));1e3*m.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=m}var O=Object(r.createContext)({user:null,login:function(e){},logout:function(){}});function h(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});default:return e}}function p(e){var t=Object(r.useReducer)(h,b),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(d.jsx)(O.Provider,Object(j.a)({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),s({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),s({type:"LOGOUT"})}}},e))}var x,g,f,v,C,y,I,w,k,P=n(206),S=function(e){var t=e.component,n=Object(P.a)(e,["component"]),a=Object(r.useContext)(O).user;return Object(d.jsx)(i.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return a?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)(t,Object(j.a)({},e))}}))},$=n(252),A=function(){var e=Object(r.useContext)(O),t=e.user,n=e.logout,a=window.location.pathname,s="/"===a?"home":a.substr(1),c=Object(r.useState)(s),i=Object(l.a)(c,2),j=i[0],u=i[1],b=function(e,t){var n=t.name;return u(n)};return t?Object(d.jsxs)($.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(d.jsx)($.a.Item,{name:t.username,active:!0,as:o.b,to:"/"}),Object(d.jsx)($.a.Menu,{position:"right",children:Object(d.jsx)($.a.Item,{name:"logout",onClick:n})})]}):Object(d.jsxs)($.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(d.jsx)($.a.Item,{name:"home",active:"home"===j,onClick:b,as:o.b,to:"/"}),Object(d.jsxs)($.a.Menu,{position:"right",children:[Object(d.jsx)($.a.Item,{name:"login",active:"login"===j,onClick:b,as:o.b,to:"/login"}),Object(d.jsx)($.a.Item,{name:"register",active:"register"===j,onClick:b,as:o.b,to:"/register"})]})]})},N=n(18),L=n(258),D=n(253),E=n(255),M=n(204),Q=n(256),q=n(111),T=n(152),R=n(118),U=n.n(R),z=n(250),G=function(e){var t=e.content,n=e.children;return Object(d.jsx)(z.a,{inverted:!0,content:t,trigger:n})},B=n(30),H=n(29),F=Object(H.a)(x||(x=Object(B.a)(["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId) {\n      id\n      likes {\n        id\n        username\n      }\n      likeCount\n    }\n  }\n"]))),J=function(e){var t=e.user,n=e.post,a=n.id,s=n.likes,c=n.likeCount,i=Object(r.useState)(!1),j=Object(l.a)(i,2),u=j[0],b=j[1];Object(r.useEffect)((function(){t&&s.find((function(e){return e.username===t.username}))?b(!0):b(!1)}),[t,s]);var m=Object(N.useMutation)(F,{variables:{postId:a},onError:function(e){return e}}),O=Object(l.a)(m,1)[0],h=t?u?Object(d.jsx)(Q.a,{color:"blue",children:Object(d.jsx)(q.a,{name:"heart"})}):Object(d.jsx)(Q.a,{color:"blue",basic:!0,children:Object(d.jsx)(q.a,{name:"heart"})}):Object(d.jsx)(Q.a,{as:o.b,to:"/login",color:"blue",basic:!0,children:Object(d.jsx)(q.a,{name:"heart"})});return Object(d.jsxs)(Q.a,{as:"div",labelPosition:"right",onClick:O,children:[Object(d.jsx)(G,{content:u?"Unlike":"Like",children:h}),Object(d.jsx)(T.a,{basic:!0,color:"blue",pointing:"left",children:c})]})},V=n(254),K=Object(H.a)(g||(g=Object(B.a)(["\n{\n  getPosts {\n    id\n    body\n    createdAt\n    username\n    likeCount\n    likes {\n      username\n    }\n    commentCount\n    comments {\n      id\n      username\n      createdAt\n      body\n    }\n  }\n}\n"]))),W=Object(H.a)(f||(f=Object(B.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]))),X=Object(H.a)(v||(v=Object(B.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n      commentCount\n    }\n  }\n"]))),Y=function(e){var t=e.postId,n=e.commentId,a=e.callback,s=n?X:W,c=Object(r.useState)(!1),o=Object(l.a)(c,2),i=o[0],j=o[1],u=Object(N.useMutation)(s,{update:function(e){if(j(!1),!n){var s=e.readQuery({query:K}).getPosts.filter((function(e){return e.id!==t}));e.writeQuery({query:K,data:{getPosts:s}})}a&&a()},variables:{postId:t,commentId:n},onError:function(e){}}),b=Object(l.a)(u,1)[0];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{content:n?"Delete comment":"Delete post",children:Object(d.jsx)(Q.a,{as:"div",color:"red",floated:"right",onClick:function(){return j(!0)},children:Object(d.jsx)(q.a,{name:"trash",style:{margin:0}})})}),Object(d.jsx)(V.a,{open:i,onCancel:function(){return j(!1)},onConfirm:b})]})},Z=function(e){var t=e.post,n=t.id,a=t.body,s=t.createdAt,c=t.username,i=t.likeCount,l=t.commentCount,j=t.likes,u=Object(r.useContext)(O).user;return Object(d.jsxs)(E.a,{fluid:!0,children:[Object(d.jsxs)(E.a.Content,{children:[Object(d.jsx)(M.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"}),Object(d.jsx)(E.a.Header,{children:c}),Object(d.jsx)(E.a.Meta,{as:o.b,to:"/posts/".concat(n),children:U()(s).fromNow(!0)}),Object(d.jsx)(E.a.Description,{children:a})]}),Object(d.jsxs)(E.a.Content,{extra:!0,children:[Object(d.jsx)(J,{post:{id:n,likes:j,likeCount:i},user:u}),Object(d.jsx)(G,{content:"Comment on post",children:Object(d.jsxs)(Q.a,{labelPosition:"right",as:o.b,to:"/posts/".concat(n),children:[Object(d.jsx)(Q.a,{color:"black",basic:!0,children:Object(d.jsx)(q.a,{name:"comments"})}),Object(d.jsx)(T.a,{basic:!0,color:"black",pointing:"left",children:l})]})}),u&&u.username===c&&Object(d.jsx)(Y,{postId:n})]})]})},_=n(205),ee=n(251),te=n(129),ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(t),a=Object(l.a)(n,2),s=a[0],c=a[1],o=function(e){c(Object(j.a)(Object(j.a)({},s),{},Object(te.a)({},e.target.name,e.target.value)))},i=function(t){t.preventDefault(),e()};return{handleChange:o,onSubmit:i,values:s}},ae=Object(H.a)(C||(C=Object(B.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]))),se=function(){var e=ne((function(){c()}),{body:""}),t=e.onSubmit,n=e.handleChange,a=e.values,s=Object(N.useMutation)(ae,{variables:a,update:function(e,t){var n=e.readQuery({query:K}),s=[t.data.createPost].concat(Object(_.a)(n.getPosts));e.writeQuery({query:K,data:{getPosts:s}}),a.body=""},onError:function(e){}}),r=Object(l.a)(s,2),c=r[0],o=r[1].error;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(ee.a,{onSubmit:t,children:[Object(d.jsx)("h2",{children:"Create post:"}),Object(d.jsxs)(ee.a.Field,{children:[Object(d.jsx)(ee.a.Input,{placeholder:"Post App",name:"body",onChange:n,value:a.body,error:!!o}),Object(d.jsx)(Q.a,{type:"submit",color:"teal",children:"Submit"})]})]}),o&&Object(d.jsx)("div",{className:"ui error message",style:{marginBottom:20},children:Object(d.jsx)("ul",{className:"list",children:Object(d.jsx)("li",{children:o.graphQLErrors[0].message})})})]})},re=function(){var e=Object(r.useContext)(O).user,t=Object(N.useQuery)(K),n=t.loading,a=t.data;return Object(d.jsxs)(L.a,{columns:3,children:[Object(d.jsx)(L.a.Row,{className:"page-title",children:Object(d.jsx)("h1",{children:"Recent Post"})}),Object(d.jsxs)(L.a.Row,{children:[e&&Object(d.jsx)(L.a.Column,{children:Object(d.jsx)(se,{})}),n?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsx)(D.a.Group,{children:a.getPosts&&a.getPosts.map((function(e){return Object(d.jsx)(L.a.Column,{children:Object(d.jsx)(Z,{post:e})},e.id)}))})]})]})},ce=Object(N.gql)(y||(y=Object(B.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]))),oe=function(e){var t=Object(r.useContext)(O),n=Object(r.useState)({}),a=Object(l.a)(n,2),s=a[0],c=a[1],o=ne((function(){h()}),{username:"",password:""}),i=o.handleChange,j=o.onSubmit,u=o.values,b=Object(N.useMutation)(ce,{update:function(n,a){var s=a.data.login;t.login(s),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:u}),m=Object(l.a)(b,2),h=m[0],p=m[1].loading;return Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsxs)(ee.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)(ee.a.Input,{type:"text",label:"Username",name:"username",placeholder:"Username..",value:u.username,onChange:i,error:!!s.username}),Object(d.jsx)(ee.a.Input,{type:"password",label:"Password",name:"password",placeholder:"Password..",value:u.password,onChange:i,error:!!s.password}),Object(d.jsx)(Q.a,{type:"submit",primary:!0,children:"Login"})]}),Object.keys(s).length>0?Object(d.jsx)("div",{className:"ui error message",children:Object(d.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(d.jsx)("li",{children:e},e)}))})}):null]})},ie=Object(N.gql)(I||(I=Object(B.a)(["\n  mutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ) {\n    register(\n      registerInput: {\n        username: $username\n        email: $email\n        password: $password\n        confirmPassword: $confirmPassword\n      }\n    ) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]))),le=function(e){var t=Object(r.useContext)(O),n=Object(r.useState)({}),a=Object(l.a)(n,2),s=a[0],c=a[1],o=ne((function(){h()}),{username:"",email:"",password:"",confirmPassword:""}),i=o.handleChange,j=o.onSubmit,u=o.values,b=Object(N.useMutation)(ie,{update:function(n,a){var s=a.data.register;t.login(s),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:u}),m=Object(l.a)(b,2),h=m[0],p=m[1].loading;return Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsxs)(ee.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(d.jsx)("h1",{children:"Register"}),Object(d.jsx)(ee.a.Input,{type:"text",label:"Username",name:"username",placeholder:"Username..",value:u.username,onChange:i,error:!!s.username}),Object(d.jsx)(ee.a.Input,{type:"email",label:"Email",name:"email",placeholder:"Email..",value:u.email,onChange:i,error:!!s.email}),Object(d.jsx)(ee.a.Input,{type:"password",label:"Password",name:"password",placeholder:"Password..",value:u.password,onChange:i,error:!!s.password}),Object(d.jsx)(ee.a.Input,{type:"password",label:"Confirm Password",name:"confirmPassword",placeholder:"Confirm Password..",value:u.confirmPassword,onChange:i,error:!!s.confirmPassword}),Object(d.jsx)(Q.a,{type:"submit",primary:!0,children:"Register"})]}),Object.keys(s).length>0?Object(d.jsx)("div",{className:"ui error message",children:Object(d.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(d.jsx)("li",{children:e},e)}))})}):null]})},je=Object(H.a)(w||(w=Object(B.a)(["\n  mutation($postId: String!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        createdAt\n        username\n      }\n      commentCount\n    }\n  }\n"]))),ue=Object(H.a)(k||(k=Object(B.a)(["\n  query($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]))),de=function(e){var t,n=Object(r.useContext)(O).user,a=Object(r.useState)(""),s=Object(l.a)(a,2),c=s[0],o=s[1],i=e.match.params.postId,j=Object(N.useQuery)(ue,{variables:{postId:i}}).data,u=Object(N.useMutation)(je,{update:function(){o("")},variables:{postId:i,body:c}}),b=Object(l.a)(u,1)[0];if(j){var m=j.getPost,h=m.id,p=m.username,x=m.body,g=m.createdAt,f=m.likeCount,v=m.likes,C=m.comments,y=m.commentCount;t=Object(d.jsx)(L.a,{children:Object(d.jsxs)(L.a.Row,{children:[Object(d.jsx)(L.a.Column,{width:2,children:Object(d.jsx)(M.a,{floated:"right",size:"small",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"})}),Object(d.jsxs)(L.a.Column,{width:10,children:[Object(d.jsxs)(E.a,{fluid:!0,children:[Object(d.jsxs)(E.a.Content,{children:[Object(d.jsx)(E.a.Header,{children:p}),Object(d.jsx)(E.a.Meta,{children:U()(g).fromNow()}),Object(d.jsx)(E.a.Description,{children:x})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(E.a.Content,{extra:!0,children:[Object(d.jsx)(J,{user:n,post:{id:h,likeCount:f,likes:v}}),Object(d.jsxs)(Q.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Button on post")},children:[Object(d.jsx)(Q.a,{basic:!0,color:"blue",children:Object(d.jsx)(q.a,{name:"comments"})}),Object(d.jsx)(T.a,{basic:!0,color:"blue",pointing:"left",children:y})]}),n&&n.username===p&&Object(d.jsx)(Y,{postId:h,callback:function(){e.history.push("/")}})]})]}),n&&Object(d.jsx)(E.a,{fluid:!0,children:Object(d.jsxs)(E.a.Content,{children:[Object(d.jsx)("p",{children:"Post a comment"}),Object(d.jsx)(ee.a,{children:Object(d.jsxs)("div",{className:"ui action input fluid",children:[Object(d.jsx)("input",{type:"text",name:"comment",value:c,placeholder:"Comment..",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)(Q.a,{type:"submit",className:"ui button blue",disabled:""===c.trim(),onClick:b,children:"Submit"})]})})]})}),C.map((function(e){return Object(d.jsx)(E.a,{fluid:!0,children:Object(d.jsxs)(E.a.Content,{children:[n&&n.username===e.username&&Object(d.jsx)(Y,{postId:h,commentId:e.id}),Object(d.jsx)(E.a.Header,{children:e.username}),Object(d.jsx)(E.a.Meta,{children:U()(e.createdAt).fromNow}),Object(d.jsx)(E.a.Description,{children:e.body})]})},e.id)}))]})]})})}else t=Object(d.jsx)("p",{children:"Loading..."});return t};var be=function(){return Object(d.jsx)(p,{children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(c.a,{children:[Object(d.jsx)(A,{}),Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/posts/:postId",component:de}),Object(d.jsx)(S,{path:"/login",component:oe}),Object(d.jsx)(S,{path:"/register",component:le}),Object(d.jsx)(i.b,{exact:!0,path:"/",component:re})]})]})})})},me=n(203),Oe=Object(N.createHttpLink)({uri:"http://localhost:5000/graphql"}),he=Object(me.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),pe=new N.ApolloClient({link:he.concat(Oe),cache:new N.InMemoryCache}),xe=Object(d.jsx)(N.ApolloProvider,{client:pe,children:Object(d.jsx)(be,{})});s.a.render(xe,document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.3c35720c.chunk.js.map