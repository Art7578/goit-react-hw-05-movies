"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{573:function(n,e,t){t.d(e,{Hq:function(){return d},XT:function(){return v},fU:function(){return g},l2:function(){return h},sv:function(){return k}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="8e49cbba380ebc6498ddfc781ac5e247";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",i="/search/movie",p="/movie",f="/credits",l="/reviews",v=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(o,"&page=").concat(e,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(i,"?api_key=").concat(o,"&page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e).concat(f,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(e).concat(l,"?api_key=").concat(o,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},186:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(689),i=t(573),p=t(184);e.default=function(){var n=(0,s.UO)().movieId,e=(0,o.useState)([]),t=(0,a.Z)(e,2),c=t[0],f=t[1],l=(0,o.useState)(null),v=(0,a.Z)(l,2),d=v[0],h=v[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.sv)(n);case 3:t=e.sent,console.log(t),f(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)("div",{children:d}),(0,p.jsx)("ul",{children:c.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})]})}}}]);
//# sourceMappingURL=186.33324d94.chunk.js.map