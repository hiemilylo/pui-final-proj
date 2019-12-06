(this["webpackJsonpfinal-proj"]=this["webpackJsonpfinal-proj"]||[]).push([[0],{143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),s=a.n(c),o=(a(70),a(18)),i={home:"/",projects:"/projects"},l=a(13),m=a(14),g=a(16),A=a(15),u=a(17),k=a(19),E=(a(71),a(72),function(e){function t(){return Object(l.a)(this,t),Object(g.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{id:"navigation-bar",style:{opacity:1},className:"navbar navbar-expand-lg navbar-dark my-stuck"},r.a.createElement("div",{className:"container"},r.a.createElement(k.b,{className:"navbar-brand",to:i.home},"Emily Lo"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{className:"nav-link",to:i.home,exact:!0},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.b,{className:"nav-link",to:i.projects},"Projects")))))))}}]),t}(n.Component)),d=(a(77),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={hasBack:!0},a.vantaEffect=null,a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.state.hasBack?this.vantaEffect=window.VANTA.NET({el:"#background-gl",color:7301740,backgroundColor:0,maxDistance:22}):this.vantaEffect.destroy()}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"toggleBackground",value:function(){var e=!this.state.hasBack;this.setState({hasBack:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"background-gl",style:{display:this.state.hasBack?"block":"none"}})}}]),t}(n.Component)),I=(a(78),a(29)),p=a.n(I),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={currentScrollHeight:0},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container my-container"},r.a.createElement(p.a,{transitionDuration:1e3},r.a.createElement("h3",{className:"home-name",style:{opacity:1}},"Emily Lo"),['I\'m a software engineer born and raised in California. I study CS at <a href="https://www.cs.cmu.edu/">Carnegie Mellon</a>.',"My goal is to enable diverse communities through the intersection between software engineering and design.",'Previously, I interned at <a href="https://www.amazonfutureengineer.com/">Amazon</a>, <a href="https://azure.microsoft.com/en-us/services/active-directory/">Microsoft</a>, and <a href="https://www.squarespace.com/">Squarespace</a>.','This March, I\'m stoked to join <a href="https://www.affirm.com/">Affirm</a>.'].map((function(e,t){return r.a.createElement("h5",{className:"home-text",key:t,style:{opacity:1},dangerouslySetInnerHTML:{__html:e}})}))))}}]),t}(n.Component),B=a(28),f=a(59),y=a(60),J=a.n(y),h=a(61),v=a.n(h),N=a(30),b=a(31),w=a.n(b),O=a(62),D=a.n(O),Q=a(63),j=a.n(Q),C=a(64),x=a.n(C),T=(a(143),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r))))._didMount=!1,a.timer=null,a.state={progress:0,currBackground:w.a,nextBackground:w.a},a.flyEye=v.a.find((function(e){return"flyeye"===e.name})),a.changeBckgnd=function(e){return function(){console.log(e);var t=document.querySelector(".section-container");switch(e){case 1:a.setState({nextBackground:w.a}),t.style.color="none";break;case 2:a.setState({nextBackground:D.a}),t.style.color="none";break;case 3:a.setState({nextBackground:j.a}),t.style.color="none";break;default:t.style.background="white"}if(a._didMount&&a.state.currBackground!==a.state.nextBackground){if(console.log("START"),a.timer){for(;a.state.progress<=1;){var n=a.state.progress+.04;a.setState({progress:n})}a.setState({progress:0,currBackground:a.state.nextBackground}),clearInterval(a.timer)}a.timer=setInterval((function(){for(;a.state.progress>=1;)a.setState({progress:0,currBackground:a.state.nextBackground}),clearInterval(a.timer),a.timer=null,console.log("END");var e=a.state.progress+.02;a.setState({progress:e})}),20)}}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._didMount=!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"scroll-container container"},r.a.createElement(p.a,{transitionDuration:1e3},r.a.createElement("div",{className:"parent"},r.a.createElement(f.Surface,{width:600,height:400},this.state.progress>0?r.a.createElement(J.a,{from:this.state.currBackground,to:this.state.nextBackground,transition:this.flyEye,progress:this.state.progress}):r.a.createElement(B.LinearCopy,null,this.state.currBackground)),r.a.createElement("div",{className:"section-container"},r.a.createElement("div",{className:"section-waypoint"},r.a.createElement(N.a,{onEnter:this.changeBckgnd(1)},r.a.createElement("section",{id:"section-1"},r.a.createElement("h3",null,"Section 1")))),r.a.createElement("div",{className:"section-waypoint"},r.a.createElement(N.a,{onEnter:this.changeBckgnd(2)},r.a.createElement("section",{id:"section-2"},r.a.createElement("h3",null,"Section 2")))),r.a.createElement("div",{className:"section-waypoint"},r.a.createElement(N.a,{onEnter:this.changeBckgnd(3)},r.a.createElement("section",{id:"section-3"},r.a.createElement("h3",null,"Section 3"))))))),r.a.createElement("div",{className:"scroll-indicator-container"},r.a.createElement("img",{className:"scroll-indicator",src:x.a})))}}]),t}(n.Component));var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"MainContent"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:i.home},r.a.createElement(S,null),r.a.createElement(d,null)),r.a.createElement(o.a,{exact:!0,path:i.projects},r.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=r.a.createElement(k.a,null,r.a.createElement(H,null));s.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,a){e.exports=a.p+"static/media/1.26612236.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/2.1922a8b2.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/p3.b518bc2a.jpg"},64:function(e,t){e.exports="data:image/png;base64,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"},65:function(e,t,a){e.exports=a(144)},70:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.333d30ca.chunk.js.map