(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{44:function(e,a,t){e.exports=t(86)},49:function(e,a,t){},51:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),s=(t(49),t(8)),m=(t(50),t(51),t(14)),o=t(7),i=t(15),u=(t(52),t(17)),p=t.n(u),E=(t(55),t(18)),d=t.n(E),b=t(19),g=t(20),f=t.n(g),h=t(93),v=t(94),w=t(95),x=t(96),N=t(97),y=t(112),O=t(98),j=t(89),S=t(90),k=function(e){var a=e.user;return r.a.createElement(j.a,{className:"text-center mt-3 mb-4"},r.a.createElement("img",{alt:"",src:a.avatar_url,className:"img_thumbnail"}),r.a.createElement(S.a,null,r.a.createElement("div",{className:"text-primary"},a.name),r.a.createElement("div",{className:"text-primary"},a.email),r.a.createElement("div",{className:"text-primary"},a.bio),r.a.createElement("div",{className:"text-primary"},"Public repos: ",a.public_repos),r.a.createElement("div",{className:"text-primary"},"Followers: ",a.followers)))},C=t(91),I=t(92),P=function(e){var a=e.repos_url,t=Object(n.useState)([]),c=Object(s.a)(t,2),l=c[0],m=c[1],o=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(a);case 2:t=e.sent,n=t.data,m(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[a]),r.a.createElement(C.a,null,l.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement("div",{className:"text-success"},"Repo Name:",r.a.createElement("span",{className:"text-info"},e.name," ")),r.a.createElement("div",null,r.a.createElement("a",{href:e.clone_url,target:"_blank"},r.a.createElement("span",{className:"text-success"}," Click here to open repo "))),r.a.createElement("div",{className:"text-success"},"Description: ",r.a.createElement("span",{className:"text-info"}," ",e.description," ")),r.a.createElement("div",{className:"text-success"},"Language: ",r.a.createElement("span",{className:"text-info"}," ",e.language," ")),r.a.createElement("div",{className:"text-success"},""===e.homepage?"":r.a.createElement("a",{href:e.homepage,target:"_blank"},"Open Website")))})))},U=Object(n.createContext)(),_=function(){var e,a=Object(n.useContext)(U),t=Object(n.useState)(""),c=Object(s.a)(t,2),l=c[0],m=c[1],u=Object(n.useState)(null),p=Object(s.a)(u,2),E=p[0],g=p[1],j=function(){var e=Object(b.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.github.com/users/".concat(l));case 3:a=e.sent,t=a.data,g(t),console.log({data:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(i.b)("Not able to find user !",{type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(h.a,null,r.a.createElement(v.a,{className:" mt-3"},r.a.createElement(w.a,{md:"5"},r.a.createElement(x.a,null,r.a.createElement(N.a,{type:"text",value:l,onChange:function(e){return m(e.target.value)},placeholder:"Please provide the username"}),r.a.createElement(y.a,{addonType:"append"},r.a.createElement(O.a,{onClick:j,color:"danger"},"Fetch User"))),E?r.a.createElement(k,{user:E}):null),r.a.createElement(w.a,{md:"7"},E?r.a.createElement(P,{repos_url:E.repos_url}):null))):r.a.createElement(o.a,{to:"/Signin"})},W=t(99),A=t(100),B=t(101),D=t(102),F=t(103),L=function(){var e,a=Object(n.useContext)(U),t=Object(n.useState)(""),c=Object(s.a)(t,2),l=c[0],m=c[1],u=Object(n.useState)(""),E=Object(s.a)(u,2),d=E[0],b=E[1];return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(o.a,{to:"/"}):r.a.createElement(h.a,{className:"text-center"},r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(j.a,{className:"bg-info"},r.a.createElement(W.a,{className:"text-white",onSubmit:function(e){e.preventDefault(),p.a.auth().signInWithEmailAndPassword(l,d).then((function(e){console.log(e),a.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(i.b)(e.message,{type:"error"})}))}},r.a.createElement(A.a,{className:""},"SignIn here"),r.a.createElement(S.a,null,r.a.createElement(B.a,{row:!0},r.a.createElement(D.a,{for:"email",sm:3},"Email"),r.a.createElement(w.a,{sm:9},r.a.createElement(N.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:l,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(B.a,{row:!0},r.a.createElement(D.a,{for:"password",sm:3},"Password"),r.a.createElement(w.a,{sm:9},r.a.createElement(N.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return b(e.target.value)}})))),r.a.createElement(F.a,null,r.a.createElement(O.a,{type:"submit",block:!0,color:"warning"},"Sign In")))))))},G=function(){var e,a=Object(n.useContext)(U),t=Object(n.useState)(""),c=Object(s.a)(t,2),l=c[0],m=c[1],u=Object(n.useState)(""),E=Object(s.a)(u,2),d=E[0],b=E[1];return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(o.a,{to:"/"}):r.a.createElement(h.a,{className:"text-center"},r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(j.a,{className:"bg-info"},r.a.createElement(W.a,{className:"text-white",onSubmit:function(e){e.preventDefault(),p.a.auth().createUserWithEmailAndPassword(l,d).then((function(e){console.log(e),a.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(i.b)(e.message,{type:"error"})}))}},r.a.createElement(A.a,{className:""},"SignUp here"),r.a.createElement(S.a,null,r.a.createElement(B.a,{row:!0},r.a.createElement(D.a,{for:"email",sm:3},"Email"),r.a.createElement(w.a,{sm:9},r.a.createElement(N.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:l,onChange:function(e){return m(e.target.value)}}))),r.a.createElement(B.a,{row:!0},r.a.createElement(D.a,{for:"password",sm:3},"Password"),r.a.createElement(w.a,{sm:9},r.a.createElement(N.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return b(e.target.value)}})))),r.a.createElement(F.a,null,r.a.createElement(O.a,{type:"submit",block:!0,color:"success"},"Sign Up")))))))},K=function(){return r.a.createElement(h.a,{fluid:!0,tag:"footer",className:"text-center bg-dark text-white text-uppercase fixed-bottom p-3"},"Github User Search APP with Firebase !")},R=t(104),V=t(105),q=t(106),z=t(107),J=t(111),T=t(108),Q=t(109),Z=t(110),$=function(){var e,a,t=Object(n.useContext)(U),c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],i=l[1];return r.a.createElement(R.a,{color:"dark",light:!0,expand:"md"},r.a.createElement(V.a,null,r.a.createElement(m.b,{to:"/",className:"text-white"},"GIT Fire App")),r.a.createElement(q.a,{className:"text-white"},(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""),r.a.createElement(z.a,{onClick:function(){return i(!o)}}),r.a.createElement(J.a,{isOpen:o,navbar:!0},r.a.createElement(T.a,{className:"ml-auto",navbar:!0},(null===(a=t.user)||void 0===a?void 0:a.email)?r.a.createElement(Q.a,null,r.a.createElement(Z.a,{onClick:function(){t.setUser(null)},className:"text-white"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,r.a.createElement(Z.a,{tag:m.b,to:"/Signin",className:"text-white"},"Signin")),r.a.createElement(Q.a,null,r.a.createElement(Z.a,{tag:m.b,to:"/Signup",className:"text-white"},"Signup"))))))};p.a.initializeApp({apiKey:"AIzaSyBSpw8841yVeW3DLqKb1P_qvPVKSReWL8I",authDomain:"mygitapp-c148c.firebaseapp.com",databaseURL:"https://mygitapp-c148c.firebaseio.com",projectId:"mygitapp-c148c",storageBucket:"mygitapp-c148c.appspot.com",messagingSenderId:"381606163409",appId:"1:381606163409:web:cc261f44768280b74b66f0",measurementId:"G-ZCBQ02G2VW"});var H=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement(m.a,null,r.a.createElement(i.a,null),r.a.createElement(U.Provider,{value:{user:t,setUser:c}},r.a.createElement($,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:_}),r.a.createElement(o.b,{exact:!0,path:"/Signin",component:L}),r.a.createElement(o.b,{exact:!0,path:"/Signup",component:G}),r.a.createElement(o.b,{exact:!0,path:"*",component:G})),r.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.75b9092d.chunk.js.map