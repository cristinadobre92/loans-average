(this["webpackJsonploans-average"]=this["webpackJsonploans-average"]||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),s=n.n(i),l=n(13),o=n(14),c=n(2),u=n(17),d=n(16),m=n(15),f=n.n(m),h=(n(40),[{id:"1",name:.0299},{id:"2",name:.0399},{id:"3",name:.0499},{id:"4",name:.0599},{id:"5",name:.0699},{id:"6",name:.0849},{id:"7",name:.0949},{id:"8",name:.1099},{id:"9",name:.1349},{id:"10",name:.1549},{id:"11",name:.1999}]),p=new Map,v=[],k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleClick=function(t){var n=[];n="All"===t?e.state.loans:e.state.loans.filter((function(e){return e.interestRate===t||p.get(e.interestRate)})),!0===p.get(t)?p.set(t,!1):p.set(t,!0),e.setState({activeButtons:p}),e.setState({filterLoans:n})},e.state={loans:[],filterLoans:[],activeButtons:new Map},e.wrapperRef=r.a.createRef(),e.setWrapperRef=e.setWrapperRef.bind(Object(c.a)(e)),e.handleClickOutside=e.handleClickOutside.bind(Object(c.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/loans/marketplace").then((function(t){var n=t.data;e.setState({loans:n,filterLoan:e.state.loans})})).catch((function(e){console.log(e.message)})),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&(v=[],this.setState({filterLoans:v}))}},{key:"render",value:function(){var e=this,t=this.state.filterLoans.map((function(e){return r.a.createElement("li",{key:e.id},e.amount)}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Select the interest rate"),r.a.createElement("div",{ref:this.wrapperRef,className:"button"},h.map((function(t){var n=t.name,a=t.id;return r.a.createElement("button",{key:a,value:n,onClick:e.handleClick.bind(e,n,a),className:p.get(n)?"button-active":"button"},Math.round(1e4*n)/100)}))),r.a.createElement("h2",null,"Loans made with the selected interest:"),r.a.createElement("p",null,0===t.length?"No loans found for this interest rate":t),r.a.createElement("h3",null,"Average amount for the interest rate selected: "),r.a.createElement("p",{className:"average"},0===this.state.filterLoans.length?"No loans found for this interest rate":Math.round(this.state.filterLoans.reduce((function(e,t){return e+t.amount}),0)/this.state.filterLoans.length)))}}]),n}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fd18dfbe.chunk.js.map