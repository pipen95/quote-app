(this["webpackJsonpquote-app"]=this["webpackJsonpquote-app"]||[]).push([[0],{21:function(t,e,n){t.exports=n(49)},26:function(t,e,n){},27:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),u=(n(26),n(27),n(14)),l=n(15),i=n(20),s=n(19),p=n(5),h=n(17),E=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).handleClick=function(e){t.props.fetchQuotes()},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchQuotes()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(h.Spring,{delay:3e3,from:{opacity:0},to:{opacity:1}},(function(e){var n=e.opacity;return o.a.createElement("div",{className:"quoteCard",style:{opacity:n}},o.a.createElement("div",{className:"quoteText"},o.a.createElement("p",null,t.props.quotes),o.a.createElement("small",null,t.props.author)),o.a.createElement("button",{type:"button",className:"btn btn-light",onClick:t.handleClick},"Next Quote"))})))}}]),n}(a.Component),f=Object(p.b)((function(t){return{quotes:t.quotes,author:t.author}}),{fetchQuotes:function(){return function(t){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_QUOTES",quote:e.content,author:e.author})}))}}})(E),m=n(3),d=n(18),b=n(9),v={quotes:[]},O=[d.a],y=Object(m.d)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_QUOTES":return Object(b.a)(Object(b.a)({},t),{},{quotes:e.quote,author:e.author});default:return t}}),{},Object(m.c)(m.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var _=function(){return o.a.createElement(p.a,{store:y},o.a.createElement("div",{className:"App"},o.a.createElement(f,null)))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0d53d5b3.chunk.js.map