(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{27:function(e,t,a){e.exports={backdrop:"Settings_backdrop__rxI95",modal:"Settings_modal__2oYPj",title:"Settings_title__36Gac"}},28:function(e,t,a){e.exports={backdrop:"Info_backdrop__1a16J",modal:"Info_modal__2Qtp7",title:"Info_title__2g7qw"}},42:function(e,t,a){e.exports=a.p+"static/media/tr.6afbdbf6.png"},45:function(e,t,a){e.exports={btn:"SettingsBtn_btn__1RRa9"}},48:function(e,t,a){e.exports={test:"Timer_test__SQMef"}},49:function(e,t,a){e.exports=a.p+"static/media/bell.525320df.flac"},50:function(e,t,a){e.exports={btn:"InfoBtn_btn__2zw5b",icon:"InfoBtn_icon__2qaiX"}},61:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),c=(a(66),a(67),a(42)),i=a.n(c),u=(a(68),function(){return o.a.createElement("header",{className:"logo-title"},o.a.createElement("img",{src:i.a}),o.a.createElement("i",null,"Pomodora"),o.a.createElement("p",null,"\xa9 2021 Argen Duishobekov"))}),s=a(11),m=(a(69),function(e){var t=480*Math.PI,a=t-e.progress/100*t;return o.a.createElement("div",{className:"TimeDisplay"},o.a.createElement("svg",{width:"100%",viewBox:"0 0 ".concat(560," ").concat(560)},o.a.createElement("circle",{stroke:"#D9534F",fill:"#fff",strokeWidth:20,r:240,cx:280,cy:280}),o.a.createElement("circle",{stroke:"#ddd",fill:"transparent",strokeWidth:20,strokeDasharray:t+" "+t,style:{strokeDashoffset:a},r:240,cx:280,cy:280})),o.a.createElement("div",null,o.a.createElement("p",null,"Remaining time"),o.a.createElement("div",{className:"Sikl"}),e.children))}),d=a(45),f=a.n(d),b=a(46),v=a.n(b),p=function(e){return o.a.createElement("button",{onClick:e.onclick,className:f.a.btn},o.a.createElement(v.a,{fontSize:"large"}))},E=a(27),g=a.n(E);var h=function(e){var t=e.title,a=e.active,n=e.children;return e.onChange,a?o.a.createElement("div",{className:g.a.backdrop},o.a.createElement("div",{className:g.a.modal},t&&o.a.createElement("h2",{className:g.a.title},t),o.a.createElement("div",{className:g.a.content},n))):null},k=a(48),O=a.n(k),j=a(49),C=a.n(j),S=a(34),_=a.n(S),w=a(50),y=a.n(w),B=a(51),N=a.n(B),x=function(e){return o.a.createElement("button",{onClick:e.onclick,className:y.a.btn},o.a.createElement(N.a,{fontSize:"large"}))},I=a(28),P=a.n(I);var T=function(e){var t=e.title,a=e.active,n=e.children;return e.onChange,a?o.a.createElement("div",{className:P.a.backdrop},o.a.createElement("div",{className:P.a.modal},t&&o.a.createElement("h2",{className:P.a.title},t),o.a.createElement("div",{className:P.a.content},n))):null},A=a(105),q=a(108),z=a(107),W=a(106),L=a(26);var D=function(){var e=Object(L.c)((function(e){return e})),t=Object(L.b)();Object(n.useEffect)((function(){localStorage.setItem("pomodorState",JSON.stringify(e))}),[e]);var a=Object(n.useState)(e.workTime),r=Object(s.a)(a,2),l=r[0],c=r[1],i=Object(n.useState)(e.shortBreak),u=Object(s.a)(i,2),d=u[0],f=u[1],b=Object(n.useState)(e.longBreak),v=Object(s.a)(b,2),E=v[0],g=v[1],k=Object(n.useState)(e.pomodoros),j=Object(s.a)(k,2),S=j[0],w=j[1],y=Object(n.useState)(!0),B=Object(s.a)(y,2),N=B[0],I=B[1],P=Object(n.useState)(new Audio(C.a)),D=Object(s.a)(P,1)[0],J=Object(n.useState)(60*l),R=Object(s.a)(J,2),G=R[0],K=R[1],M=Object(n.useState)(1),Q=Object(s.a)(M,2),H=Q[0],F=Q[1],U=Object(n.useState)(!1),X=Object(s.a)(U,2),Y=X[0],$=X[1],V=Object(n.useState)("Pause"),Z=Object(s.a)(V,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(s.a)(ae,2),oe=ne[0],re=ne[1],le=Object(n.useState)(!1),ce=Object(s.a)(le,2),ie=ce[0],ue=ce[1],se=Object(n.useState)(!1),me=Object(s.a)(se,2),de=me[0],fe=me[1],be=Object(n.useState)(l),ve=Object(s.a)(be,2),pe=ve[0],Ee=ve[1];Object(n.useEffect)((function(){oe&&"Pause"===ee&&(0!==G?setTimeout((function(){K(G-1)}),1e3):(D.play(),function(){var e,t,a=H;H<S&&!Y?(e=d,t=!0,Ee(d),!0===N&&_.a.fire({title:"Time to have a rest",allowOutsideClick:!1,onOpen:function(){te("Continue")},onClose:function(){te("Pause"),je()},allowEnterKey:!0,confirmButtonColor:"red"})):H<S&&Y?(a=H+1,e=l,t=!1,Ee(l),!0===N&&_.a.fire({title:"Time to work",allowOutsideClick:!1,onOpen:function(){te("Continue")},onClose:function(){te("Pause"),Ce()},allowEnterKey:!0,confirmButtonColor:"blue"})):H>=S&&(a=1,e=E,t=!0,Ee(E),je(),!0===N&&_.a.fire({title:"Time to have the longest break",allowOutsideClick:!1,onOpen:function(){te("Continue")},onClose:function(){te("Pause")},allowEnterKey:!0,confirmButtonColor:"red"}));F(a),K(60*e),$(t)}()))}));var ge=Math.floor(G/60),he=G-60*ge,ke=function(){return ue(!0)},Oe=function(){return fe(!0)},je=function(){document.body.classList.remove("restout"),document.body.classList.add("workout")},Ce=function(){document.body.classList.remove("workout"),document.body.classList.add("restout")};return o.a.createElement("div",null,o.a.createElement(x,{onclick:Oe}),o.a.createElement(p,{onclick:ke}),o.a.createElement(m,{time:l,progress:function(){var e=60*pe;return(e-G)/e*100}()},o.a.createElement("h2",{className:O.a.test},ge<10?"0".concat(ge):ge," :"," ",he<10?"0".concat(he):he)),o.a.createElement("br",null),oe?o.a.createElement("div",null,o.a.createElement(A.a,{size:"large",variant:"outlined",onClick:function(){te("Pause"===ee?"Continue":"Pause")}},ee),o.a.createElement(A.a,{size:"large",title:"Click <Pause> to reset",onClick:function(){"Continue"===ee&&(re(!1),$(!1),K(60*pe),te("Pause"))}},"Reset")):o.a.createElement(A.a,{variant:"outlined",onClick:function(){console.log("test"),re(!0)},size:"large"},"Start"),o.a.createElement(h,{active:ie,onChange:ke},o.a.createElement("h3",null,"Settings"),o.a.createElement("div",null,"Pomodoro"),o.a.createElement(W.a,{id:"standard-basic",variant:"outlined",type:"number",fullWidth:!0,value:l,onChange:function(e){c(e.target.value),K(60*e.target.value),Ee(e.target.value)}}),o.a.createElement("div",null,"Short Break"),o.a.createElement(W.a,{id:"standard-basic",variant:"outlined",fullWidth:!0,value:d,onChange:function(e){return f(e.target.value)},type:"number"}),o.a.createElement("div",null,"Long Break"),o.a.createElement(W.a,{id:"standard-basic",variant:"outlined",fullWidth:!0,value:E,onChange:function(e){return g(e.target.value)},type:"number"}),o.a.createElement("div",null,"Pomodoro Count"),o.a.createElement(W.a,{id:"standard-basic",variant:"outlined",fullWidth:!0,value:S,onChange:function(e){w(e.target.value),console.log("count")},type:"number"}),o.a.createElement(q.a,{control:o.a.createElement(z.a,{checked:N,onChange:function(){return I(!N)},value:"checkedA"}),label:"Auto Play without push notifications"}),o.a.createElement("br",null),o.a.createElement(A.a,{variant:"outlined",size:"large",color:"primary",onClick:function(){t({type:"CHANGE_STATE",obj:{pomodoroInterval:l,longBrake:E,shortBrake:d,pomodoros:S}}),ue(!1)}},"All ok")),o.a.createElement(T,{active:de,onChange:Oe},o.a.createElement("h2",null,"About Pomodoro Technique"),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore sit quas nam repellat perspiciatis autem, distinctio suscipit ex, quae in fuga?",o.a.createElement("h2",null,"Use Experience"),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid cupiditate fugiat velit? Quam explicabo consequuntur, odio non qui recusandae vitae dolore nam odit eius maxime maiores voluptate quaerat provident?",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(A.a,{variant:"outlined",size:"large",onClick:function(){fe(!1),F(1)}},"Close")))};var J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null),o.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(53),G=JSON.parse(localStorage.getItem("pomodorState")),K={workTime:25,shortBreak:5,longBreak:10,pomodoros:4},M=a(54),Q=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G||K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STATE":return Object(R.a)({},e,{workTime:parseInt(t.obj.pomodoroInterval),shortBreak:parseInt(t.obj.shortBrake),longBreak:parseInt(t.obj.longBrake),pomodoros:parseInt(t.obj.pomodoros)});default:return e}}));l.a.render(o.a.createElement(L.a,{store:Q},o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.a46dbb67.chunk.js.map