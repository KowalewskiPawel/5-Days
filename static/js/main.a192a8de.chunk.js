(this.webpackJsonp5days=this.webpackJsonp5days||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var i,r,a,c,o,s,d,u,l,f,p,x,m=e(1),j=e.n(m),h=e(10),b=e.n(h),g=e(7),O=e.n(g),v=e(11),y=e(4),w=function(n){for(var t=[],e=0;e<n.list.length;e++)t.includes(n.list[e].dt_txt.split(" ")[0])||t.push(n.list[e].dt_txt.split(" ")[0]);return t},z=function(n,t){for(var e=[],i=function(i){e.push(n.list.filter((function(n){return n.dt_txt.split(" ")[0]===t[i]})))},r=0;r<5;r++)i(r);return e},k=e(2),_=e(3),D=_.b.h1(i||(i=Object(k.a)(['\n  font-family: "Pacifico", cursive;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 63px;\n  text-align: center;\n  letter-spacing: 0.07px;\n  margin: 1rem 0;\n\n  color: #dfdfe1;\n']))),P=e(0),T=function(){return Object(P.jsx)(D,{children:"Five Days"})},C=_.b.input(r||(r=Object(k.a)(["\n  display: block;\n  width: 317px;\n  height: 47px;\n  margin: 2rem auto 0;\n  z-index: 2;\n  background: none;\n  color: white;\n  padding: 10px;\n\n  border: 1px solid #83869c;\n  box-sizing: border-box;\n  border-radius: 16px;\n"]))),M=function(n){var t=n.setCityName;return Object(P.jsx)(C,{placeholder:"Enter city name",onChange:function(n){return t(n.target.value)}})},N=_.b.section(a||(a=Object(k.a)(["\n  width: 100%;\n  height: 39px;\n\n  margin: 2rem 0;\n\n  background: #464858;\n"]))),q=_.b.p(c||(c=Object(k.a)(['\n  font-family: "Palanquin";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  text-align: center;\n  letter-spacing: 0.07px;\n\n  color: #b1b3c5;\n']))),S=function(){var n=new Date;return new Intl.DateTimeFormat("en-GB").format(n).split("/").join(".")},F=function(){return Object(P.jsx)(N,{children:Object(P.jsxs)(q,{children:["Today is: ",S()]})})},A=_.b.h1(o||(o=Object(k.a)(['\n  font-family: "Pacifico", cursive;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  text-align: center;\n  letter-spacing: 0.07px;\n\n  color: #dfdfe1;\n']))),E=function(n){var t=n.cityName;return Object(P.jsx)(A,{children:t})},B=function(n){return(null===n||void 0===n?void 0:n.main.temp)?"".concat(Math.trunc(null===n||void 0===n?void 0:n.main.temp),"\xb0"):"Data Not Available"},I=_.b.div(s||(s=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 8rem;\n  margin: 4rem 2rem;\n\n  @media (max-width: 600px) {\n    gap: 1rem;\n  }\n"]))),J=_.b.div(d||(d=Object(k.a)(['\n  display: flex;\n  flex-direction: column;\n\n  & span {\n    font-family: "Palanquin";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    margin: 0.5rem;\n\n    color: #9b9ead;\n\n    & img {\n      padding-top: 1rem;\n    }\n\n    & span {\n      color: #ffff;\n    }\n  }\n\n  @media (max-width: 600px) {\n    & span {\n      font-size: 14px;\n    }\n  }\n']))),G=_.b.img(u||(u=Object(k.a)(["\n  width: 40px;\n  height: 40px;\n"]))),H=e.p+"static/media/cloud.736c978f.svg",K=e.p+"static/media/crescent.2d21af09.svg",L=e.p+"static/media/humidity.4d1cec5c.svg",Q=e.p+"static/media/sun.a3cc2609.svg",R=function(n){var t=n.day;if(!t)return Object(P.jsx)(P.Fragment,{});var e=t.find((function(n){return"06:00:00"===n.dt_txt.split(" ")[1]||"09:00:00"===n.dt_txt.split(" ")[1]})),i=t.find((function(n){return"12:00:00"===n.dt_txt.split(" ")[1]||"15:00:00"===n.dt_txt.split(" ")[1]})),r=t.find((function(n){return"21:00:00"===n.dt_txt.split(" ")[1]})),a=t.map((function(n){return n.main.humidity})).reduce((function(n,t){return n+t}))/t.length;return Object(P.jsxs)(I,{children:[Object(P.jsxs)(J,{children:[Object(P.jsxs)("span",{children:[Object(P.jsx)(G,{src:H})," Morning Temperature:"," ",Object(P.jsx)("span",{children:B(e)})," "]}),Object(P.jsxs)("span",{children:[Object(P.jsx)(G,{src:Q})," Day Temperature:"," ",Object(P.jsx)("span",{children:B(i)})," "]})]}),Object(P.jsxs)(J,{children:[Object(P.jsxs)("span",{children:[Object(P.jsx)(G,{src:K})," Night Temperature:"," ",Object(P.jsx)("span",{children:B(r)})," "]}),Object(P.jsxs)("span",{children:[Object(P.jsx)(G,{src:L})," Humidity:"," ",Object(P.jsxs)("span",{children:[Math.trunc(a),"%"]})]})]})]})},U=function(n){return n.map((function(n){var t=n.map((function(n){return n.main.temp})).reduce((function(n,t){return n+t})),e=n.map((function(n){return n.clouds.all})).reduce((function(n,t){return n+t}));return{averageTemp:Math.trunc(t/n.length),averageClouds:Math.trunc(e/n.length)}}))},V=_.b.section(l||(l=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 2rem;\n  margin: 4rem 0;\n\n  @media (max-width: 600px) {\n    gap: 1rem;\n  }\n"]))),W=_.b.div(f||(f=Object(k.a)(["\n  width: 100px;\n  height: 200px;\n\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  ",'\n\n  & p {\n    font-family: "Palanquin";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n\n    text-align: center;\n\n    color: #ffffff;\n    opacity: 0.5;\n\n    margin-top: 1rem;\n  }\n\n  & h4 {\n    font-family: "Palanquin";\n    font-style: normal;\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 0;\n    text-align: center;\n\n    color: #ffffff;\n  }\n\n  @media (max-width: 600px) {\n    width: 60px;\n    height: 140px;\n\n    & p {\n      font-size: 12px;\n    }\n\n    & h4 {\n      font-size: 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    width: 50px;\n    height: 140px;\n\n    & p {\n      font-size: 10px;\n    }\n\n    & h4 {\n      font-size: 14px;\n    }\n  }\n'])),(function(n){return n.isActive&&Object(_.a)(p||(p=Object(k.a)(["\n      background: rgba(255, 255, 255, 0.2);\n      border: 1px solid #ffffff;\n      box-sizing: border-box;\n      border-radius: 30px;\n    "])))})),X=_.b.img(x||(x=Object(k.a)(["\n  width: 80px;\n  height: 80px;\n  margin: 1rem 0.8rem;\n\n  @media (max-width: 600px) {\n    width: 40px;\n    height: 40px;\n  }\n\n  @media (max-width: 360px) {\n    width: 30px;\n    height: 30px;\n  }\n"]))),Y=function(n){var t,e=n.dates,i=n.days,r=n.setDay,a=Object(m.useState)(0),c=Object(y.a)(a,2),o=c[0],s=c[1];if(!e)return Object(P.jsx)(P.Fragment,{});i&&(t=U(i));return Object(P.jsx)(V,{children:e.slice(0,5).map((function(n,e){return Object(P.jsxs)(W,{onClick:function(){return s(n=e),void r(n);var n},isActive:o===e,children:[Object(P.jsx)("p",{children:n}),Object(P.jsx)(X,{src:(i=t[e].averageClouds,i<50?Q:i>80?L:H)}),Object(P.jsxs)("h4",{children:[t[e].averageTemp," \xb0"]})]},n);var i}))})},Z=function(n){return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(n,"&units=metric&appid=").concat("7afdd2d97bc20977739adeaa15dcc6a5")).then((function(n){return n.json()})).then((function(n){return n}))},$=(e(23),function(){var n,t=Object(m.useState)(""),e=Object(y.a)(t,2),i=e[0],r=e[1],a=Object(m.useState)(null),c=Object(y.a)(a,2),o=c[0],s=c[1],d=Object(m.useState)(0),u=Object(y.a)(d,2),l=u[0],f=u[1],p=[],x=[];return(null===o||void 0===o?void 0:o.list)&&(p=w(o),x=z(o,p)),Object(m.useEffect)((function(){var n=function(){var n=Object(v.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z(i);case 2:return t=n.sent,n.abrupt("return",s(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[i]),Object(P.jsxs)("main",{children:[Object(P.jsx)(T,{}),Object(P.jsx)(M,{setCityName:r}),Object(P.jsx)(F,{}),Object(P.jsx)(E,{cityName:(null===o||void 0===o||null===(n=o.city)||void 0===n?void 0:n.name)||"Please input correct name of the city"}),Object(P.jsx)(R,{day:x[l]}),Object(P.jsx)(Y,{dates:p,days:x,setDay:f})]})});b.a.render(Object(P.jsx)(j.a.StrictMode,{children:Object(P.jsx)($,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a192a8de.chunk.js.map