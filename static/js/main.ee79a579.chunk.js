(this.webpackJsonpandraya=this.webpackJsonpandraya||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(14),c=a.n(i),r=(a(19),a(20),a(21),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))}),l=a(3),o=a(4),j=a(6),d=a(5),b=a.p+"static/media/moon-image.0c034b75.jpeg",h=a.p+"static/media/engagement.af4b5974.jpeg",m=a(8),u=a(0),O=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"text-center my-5",children:[Object(u.jsx)("h2",{className:"mb-3",children:"It was written in the stars..."}),Object(u.jsx)(m.b,{className:"nav-link",to:"/",children:"Home"}),Object(u.jsx)(m.b,{className:"nav-link",to:"/about",children:"About"}),Object(u.jsx)(m.b,{className:"nav-link",to:"/gallery",children:"Gallery"}),Object(u.jsx)(m.b,{className:"nav-link",to:"/Registry",children:"Registry"}),Object(u.jsx)(m.b,{className:"nav-link",to:"/timeline",children:"Timeline"})]})}}]),a}(n.Component),p=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("main",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(u.jsx)("img",{src:h,height:"400rem",className:"my-5"}),Object(u.jsxs)("div",{className:"d-flex justify-content-center align-items-center my-5",children:[Object(u.jsx)("img",{src:b,height:"240rem",alt:"moon"}),Object(u.jsx)("h1",{className:"mb-1",children:"Andraya Sanchez & Gabriel Talavera"})]}),Object(u.jsxs)("div",{className:"date-location text-center my-5",children:[Object(u.jsx)("p",{className:"mb-3",children:"Huntington Beach, California"}),Object(u.jsx)("p",{className:"mb-3",children:"August 6, 2022"})]})]})]})}}]),a}(n.Component),x=a(11),g=[{date:"08/06/2018",description:"We match and start communicating on OkCupid and set a date for the next day."},{date:"08/07/2018",description:"We had first date. We watch Mission: Impossible - Fallout. The air is electric."},{date:"08/13/2018",description:"A date to the LACMA museum. It is a memorable one in our relationship and the connection is strong."},{date:"11/11/2018",description:"We have a trip to the Grand Canyon, our first major trip"},{date:"02/14/2019",description:"Our first valentine's together."},{date:"06/01/2019",description:"We move in together, joining our family together."},{date:"08/07/2021",description:"Gabriel proposes to Andraya at Griffith Observatory. Our love is written in the stars."}],f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:this.props.date}),Object(u.jsx)("p",{children:this.props.description})]})}}]),a}(n.Component),y=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=g.map((function(e,t){return Object(u.jsx)(f,Object(x.a)({},e),t)}));return Object(u.jsxs)("div",{className:"star-background",children:[Object(u.jsx)(O,{}),Object(u.jsx)("main",{children:Object(u.jsx)("div",{className:"history",children:e})}),Object(u.jsx)("div",{id:"stars"}),Object(u.jsx)("div",{id:"stars2"}),Object(u.jsx)("div",{id:"stars3"})]})}}]),a}(n.Component),v=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("main",{className:"text-center mx-auto",children:Object(u.jsx)("p",{className:"blocktext",children:"On August 6th 2022, Gabriel Talavera is going to marry Andraya Sanchez. They will marry in Andraya's hometown of Huntington Beach California. They first started speaking on August 6th 2018 and had their first date the very next day. 3 years exactly after their first date Gabriel asked Andraya to marry him. Now exactly 4 years after they initially started talking they will be married and expect to start their 4 year anniversary as a married couple."})})]})}}]),a}(n.Component),N=a(10),k=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(l.a)(this,a);return(n=t.call(this,e)).state={openModal:!1,imageSrc:"https://raw.githubusercontent.com/gabrieltal/andraya/main/src/assets/images/"+n.props.filename},n.toggleModal=n.toggleModal.bind(Object(N.a)(n)),n.toggleClickOutsideModalContent=n.toggleClickOutsideModalContent.bind(Object(N.a)(n)),n}return Object(o.a)(a,[{key:"toggleModal",value:function(){this.setState({openModal:!0!==this.state.openModal})}},{key:"toggleClickOutsideModalContent",value:function(e){e.target.className.split(" ").includes("modal")&&this.toggleModal()}},{key:"render",value:function(){var e=!0===this.state.openModal?"is-open":"is-closed";return Object(u.jsxs)("div",{className:"gallery-item",children:[Object(u.jsx)("img",{className:"gallery-image",onClick:this.toggleModal,src:this.state.imageSrc}),Object(u.jsx)("div",{className:"modal "+e,onClick:this.toggleClickOutsideModalContent,children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsx)("div",{className:"modal-header",children:Object(u.jsxs)("button",{className:"close",children:["\xd7",Object(u.jsx)("span",{className:"visually-hidden",children:"Close"})]})}),Object(u.jsx)("div",{className:"modal-body container",children:Object(u.jsx)("a",{href:this.state.imageSrc,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{className:"modal-image",src:this.state.imageSrc})})})]})})]})}}]),a}(n.Component),C=[{filename:"logo.svg"},{filename:"cute-couple.JPG"},{filename:"moon.png"}],M=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=C.map((function(e,t){return Object(u.jsx)(k,Object(x.a)({},e),t)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("main",{className:"container",children:Object(u.jsx)("div",{className:"gallery mx-auto",children:e})})]})}}]),a}(n.Component),w=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("main",{className:"text-center mx-auto",children:Object(u.jsxs)("p",{children:["If you wish to send us a wedding gift, please visit ",Object(u.jsx)("a",{className:"page-link",target:"_blank",href:"https://plantperson.info",rel:"noopener noreferrer nofollow",children:"our registry here"})]})})]})}}]),a}(n.Component),A=a(2);var S=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(m.a,{children:Object(u.jsxs)(A.c,{children:[Object(u.jsx)(A.a,{path:"/",element:Object(u.jsx)(p,{})}),Object(u.jsx)(A.a,{path:"/about",element:Object(u.jsx)(v,{})}),Object(u.jsx)(A.a,{path:"/gallery",element:Object(u.jsx)(M,{})}),Object(u.jsx)(A.a,{path:"/registry",element:Object(u.jsx)(w,{})}),Object(u.jsx)(A.a,{path:"/timeline",element:Object(u.jsx)(y,{})})]})})})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),r()}},[[23,1,2]]]);
//# sourceMappingURL=main.ee79a579.chunk.js.map