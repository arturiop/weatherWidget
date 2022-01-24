(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{112:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),i=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},o=(n(112),n(6)),d=n(77),u=n(19),l=n(15),j=n(42),b=n(23),h="cities",p=function(e){var t=(e-273.15).toFixed(0);return"".concat(t,"\xb0")},f=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},O=function(e){return"http://openweathermap.org/img/w/".concat(e,".png")},x=Object(j.b)({name:"weather",initialState:{citiesWeather:[],forecast:{},isLoading:!1,error:""},reducers:{deleteCity:function(e,t){var n=t.payload,r=e.citiesWeather.filter((function(e){return e.name!==n}));e.citiesWeather=r},setCity:function(e,t){var n=t.payload;e.isLoading=!1,e.error="",function(e){var t=JSON.parse(localStorage.getItem(h)||"[]"),n=[e].concat(t);localStorage.setItem(h,JSON.stringify(n))}(n.name),e.citiesWeather=[n].concat(e.citiesWeather)},setCityFromLS:function(e,t){var n=t.payload;e.isLoading=!1,e.error="",e.citiesWeather=[n].concat(e.citiesWeather)},setErrorAxiosError:function(e,t){var n=t.payload;e.isLoading=!1,e.error=n.response?n.response.data.message:"Unknown error"},setError:function(e,t){var n=t.payload;e.error=n},toggleLoading:function(e,t){var n=t.payload;e.isLoading=n},updateCityData:function(e,t){var n=t.payload;e.isLoading=!1,e.error="",e.citiesWeather=e.citiesWeather.map((function(e){return e.id===n.id?n:e}))},setForecastCity:function(e,t){var n=t.payload;e.isLoading=!1,e.error="";var r=n.list.filter((function(e){return"5"===e.dt_txt[12]}));e.forecast=Object(b.a)(Object(b.a)({},n),{},{list:r})}}}),g=x.actions,m=g.deleteCity,v=(g.setCity,g.toggleLoading,g.setError),y=(g.updateCityData,x.reducer),C=Object(j.a)({reducer:{weather:y}}),w=n(60),S=n(28),_=n(64),E=n(65),L=n(29),A=n(17),W=n.n(A),k=n(70),T=n.n(k).a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/weatherWidget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL)});T.interceptors.request.use((function(e){var t={q:e.params.city,appid:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/weatherWidget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY)};return Object(b.a)(Object(b.a)({},e),{},{params:t})}),(function(e){return e}));var R=function(e){return T.get("weather",{params:{city:e}})},z=function(e){return T.get("forecast",{params:{city:e}})},P=n(3),D=function(){var e=Object(r.useState)(""),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(S.a)(a,2),s=i[0],o=i[1],d=Object(u.b)(),l=function(){var e;o((function(){return!0})),d((e=n,function(){var t=Object(L.a)(W.a.mark((function t(n){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(x.actions.toggleLoading(!0)),t.next=4,R(e);case 4:r=t.sent,JSON.parse(localStorage.getItem(h)||"[]").includes(r.data.name)?n(x.actions.updateCityData(r.data)):n(x.actions.setCity(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(x.actions.setErrorAxiosError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),c(""),o((function(){return!1}))};return Object(P.jsx)(w.a,{children:Object(P.jsxs)(w.b,{children:[Object(P.jsx)(w.a,{borderLeftRadius:"xl",bgColor:"gray.300",children:Object(P.jsx)(_.a,{size:"sm",color:"gray.700",borderRightRadius:"none",placeholder:"City Name",value:n,onChange:function(e){c(e.target.value)}})}),Object(P.jsx)(E.a,{size:"sm",color:"gray.700",borderLeftRadius:"none",onClick:function(){return n.length<2?d(v("city name too short")):l()},disabled:s,children:"search"})]})})},N=function(){return Object(P.jsxs)(w.b,{paddingX:["1","6"],paddingY:["1","2","none"],bgColor:"#262624",color:"#c7c3b9",justify:"space-between",align:"center",children:[Object(P.jsx)(w.a,{display:["none","block"],children:Object(P.jsx)(w.d,{isExternal:!0,href:"https://cv.djinni.co/fe/19ab4e344c6c49451e5ae4dabbe56a/PiloianCV.pdf",children:"toCV"})}),Object(P.jsx)(w.c,{size:"md",padding:"1%",align:"center",children:"Weather"}),Object(P.jsx)(D,{})]})},I=function(e){var t=e.children;return Object(P.jsxs)(w.a,{bgColor:"#d9d6d0",minW:"280px",minH:"100vh",children:[Object(P.jsx)(w.a,{as:"header",position:"sticky",top:"0",zIndex:"9999",children:Object(P.jsx)(N,{})}),Object(P.jsx)(w.a,{as:"main",children:t})]})},F=u.c,J=n(67),M=n(66),U=n(40),H=n.n(U),K=function(e){var t=e.dayWeather,n=e.index,r=t.main,c=r.temp_min,a=r.temp_max,i=H()(t.dt_txt.substring(0,10)).format("dddd"),s=p(c),o=p(a),d=f(t.weather[0].description),u=t.weather[0].icon,l=O(u);return Object(P.jsxs)(w.b,{paddingX:"2",bgColor:n%2===0?"#d9d6d0":"",justify:"space-between",align:"center",children:[Object(P.jsxs)(w.a,{children:[Object(P.jsx)(w.c,{size:"sm",children:i}),Object(P.jsx)(w.e,{fontSize:"0.75rem",color:"gray.700",children:d})]}),Object(P.jsx)(w.a,{children:Object(P.jsx)(M.a,{h:"100%",src:l,alt:d})}),Object(P.jsxs)(w.a,{children:[Object(P.jsx)(w.e,{children:o}),Object(P.jsx)(w.e,{children:s})]})]})},V=function(e){var t=e.data;Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[t]);var n=t.list.map((function(e,t){return Object(P.jsx)(K,{index:t,dayWeather:e},e.dt_txt)})),c=Object(r.useMemo)((function(){return n}),[t.list]);return Object(P.jsx)(J.a,{initialScale:.8,in:!0,children:Object(P.jsx)(w.a,{minW:["none",null,"400px"],children:Object(P.jsxs)(w.a,{borderRadius:"md",borderColor:"gray.700",border:"1px",bgColor:"white",margin:"2",padding:"2",children:[Object(P.jsxs)(w.c,{textAlign:"center",size:"md",children:["Forecast"," ",t.city.name]}),c]})})})},Y=function(){var e=F((function(e){return e.weather.error}));return Object(P.jsx)(w.a,{display:e?"block":"none",children:Object(P.jsx)(w.c,{textDecoration:"underline",textAlign:"center",size:"sm",color:"red.500",children:e})})},q=n(30),B=Object(q.b)({displayName:"DropIcon",viewBox:"0 0 20 20",path:Object(P.jsxs)("g",{children:[Object(P.jsx)("path",{fillRule:"evenodd",d:"M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"}),Object(P.jsx)("path",{fillRule:"evenodd",d:"M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"})]})}),X=function(e){var t=e.feelsLike,n=e.speed,r=e.humidity,c="Feels like: ".concat(p(t)),a="Wind: ".concat(n," m/sec"),i="".concat(r," %");return Object(P.jsxs)(w.b,{marginTop:"1",padding:["2","4"],borderRadius:"xl",bgColor:"#404040",justify:"space-between",children:[Object(P.jsxs)(w.b,{align:"center",children:[Object(P.jsx)(B,{}),Object(P.jsx)(w.e,{fontSize:["xs","md"],children:i})]}),Object(P.jsx)(w.e,{fontSize:["xs","md"],children:a}),Object(P.jsx)(w.e,{fontSize:["xs","md"],children:c})]})},Q=function(e){var t=e.city,n=e.update,c=e.deleteCity,a=e.forecastCity,i=Object(r.useState)(!1),s=Object(S.a)(i,2),o=s[0],d=s[1],u=t.main,l=u.temp,j=u.humidity,b=u.feels_like,h=t.weather,x=t.name,g=t.sys,m=t.wind,v=H()().utcOffset(t.timezone/60),y=v.format("dddd"),C=v.format("DD MMM YYYY"),_=p(l),A=f(h.map((function(e){return e.description})).join(", ")),k=O(h[0].icon),T=function(){var e=Object(L.a)(W.a.mark((function e(n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.stopPropagation(),a(t.name);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(w.a,{minW:["280px","none","400px","550px"],children:Object(P.jsxs)(w.b,{color:"#e8e3e3",borderRadius:"2xl",onClick:function(){return d(!o)},margin:"2",padding:"4",flexDirection:"column",bgColor:"#242323",children:[Object(P.jsxs)(w.a,{padding:"4",borderRadius:"xl",bgColor:"#404040",children:[Object(P.jsxs)(w.b,{direction:["column","row"],justify:"space-between",children:[Object(P.jsxs)(w.a,{align:"center",children:[Object(P.jsx)(w.c,{isTruncated:!0,children:x}),Object(P.jsx)(w.e,{children:g.country})]}),Object(P.jsx)(w.a,{display:["none","block"],children:Object(P.jsx)(M.a,{h:"100%",src:k,alt:A})}),Object(P.jsxs)(w.a,{align:"center",children:[Object(P.jsx)(w.c,{size:"lg",children:y}),Object(P.jsx)(w.e,{children:C})]})]}),Object(P.jsx)(w.b,{justify:"space-around",alignItems:"center",children:Object(P.jsx)(w.c,{size:"2xl",children:_})}),Object(P.jsx)(w.c,{isTruncated:!0,size:"md",textAlign:"center",children:A})]}),o?Object(P.jsx)(X,{speed:m.speed,feelsLike:b,humidity:j}):null,Object(P.jsxs)(w.b,{color:"#242323",marginTop:"2",justify:"space-around",align:"center",children:[Object(P.jsx)(E.a,{onClick:T,children:"forecast"}),Object(P.jsx)(E.a,{marginX:"2",onClick:function(e){e.stopPropagation(),n(x)},children:"update"}),Object(P.jsx)(E.a,{onClick:function(e){e.stopPropagation(),c(t.name)},colorScheme:"red",children:"delete"})]})]})})},G=Object(r.memo)(Q),Z=function(){var e=F((function(e){return e.weather.citiesWeather})),t=Object(u.b)(),n=function(e){var n;t((n=e,function(){var e=Object(L.a)(W.a.mark((function e(t){var r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(x.actions.toggleLoading(!0)),e.next=4,R(n);case 4:r=e.sent,t(x.actions.toggleLoading(!0)),t(x.actions.updateCityData(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(x.actions.setError(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},c=function(e){t(m(e)),function(e,t){var n=JSON.parse(localStorage.getItem(h)||"[]").filter((function(e){return e!==t}));localStorage.setItem(e,JSON.stringify(n))}(h,e)},a=function(e){t(function(e){return function(){var t=Object(L.a)(W.a.mark((function t(n){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(x.actions.toggleLoading(!0)),t.next=4,z(e);case 4:r=t.sent,n(x.actions.setForecastCity(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(x.actions.setErrorAxiosError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))},i=e.map((function(e){return Object(P.jsx)(J.a,{initialScale:.8,in:!0,children:Object(P.jsx)(G,{deleteCity:c,update:n,city:e,forecastCity:a},e.id)},"scale_".concat(e.id))})),s=Object(r.useMemo)((function(){return i}),[e]);return Object(P.jsx)(w.a,{maxW:["100%","100%","500px"],children:s})},$=n(72),ee=n.n($),te=function(){return Object(P.jsxs)("div",{className:ee.a.ldsRing,children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{}),Object(P.jsx)("div",{}),Object(P.jsx)("div",{})]})},ne=n(73),re=n(74),ce=n(75),ae=n(78),ie=function(e){Object(ce.a)(n,e);var t=Object(ae.a)(n);function n(e){return Object(ne.a)(this,n),t.call(this,e)}return Object(re.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.botName,n=e.buttonSize,r=e.cornerRadius,c=e.requestAccess,a=e.usePic,i=e.dataOnauth,s=e.dataAuthUrl,o=e.lang,d=e.widgetVersion;window.TelegramLoginWidget={dataOnauth:function(e){return i(e)}};var u=document.createElement("script");u.src="https://telegram.org/js/telegram-widget.js?".concat(d),u.setAttribute("data-telegram-login",t),u.setAttribute("data-size",n),void 0!==r&&u.setAttribute("data-radius",r),u.setAttribute("data-request-access",c),u.setAttribute("data-userpic",a),u.setAttribute("data-lang",o),void 0!==s?u.setAttribute("data-auth-url",s):u.setAttribute("data-onauth","TelegramLoginWidget.dataOnauth(user)"),u.async=!0,this.instance.appendChild(u)}},{key:"render",value:function(){var e=this;return Object(P.jsx)("div",{className:this.props.className,ref:function(t){e.instance=t},children:this.props.children})}}]),n}(c.a.Component);ie.defaultProps={botName:"SCHart_bot",dataOnauth:function(){},buttonSize:"large",requestAccess:"write",usePic:!0,lang:"en",widgetVersion:9};var se=ie,oe=function(){var e=F((function(e){return e.weather})),t=e.forecast,n=e.isLoading,c=Object(r.useState)(n),a=Object(S.a)(c,2),i=a[0],s=a[1],o=Object(u.b)();Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(h)||"[]");e.length&&e.map((function(e){return o(function(e){return function(){var t=Object(L.a)(W.a.mark((function t(n){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(x.actions.toggleLoading(!0)),t.next=4,R(e);case 4:r=t.sent,n(x.actions.setCityFromLS(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(x.actions.setErrorAxiosError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}))}),[]),Object(r.useEffect)((function(){n&&(s(!0),setTimeout((function(){return s(!1)}),500))}),[n]);return Object(P.jsxs)(w.a,{children:[Object(P.jsx)(se,{dataOnauth:function(e){console.log(e)}}),Object(P.jsx)(w.b,{position:"fixed",top:["12","20"],right:"2",zIndex:"999",children:Object(P.jsx)(Y,{})}),Object(P.jsx)(w.a,{w:"100%",position:"fixed",top:"20",left:"40%",zIndex:"999",children:i?Object(P.jsx)(te,{}):null}),Object(P.jsxs)(w.b,{direction:["column",null,"row"],justify:"space-around",children:[Object(P.jsx)(w.a,{maxW:["100%",null,"550px"],children:"{}"!==JSON.stringify(t)?Object(P.jsx)(V,{data:t}):null}),Object(P.jsx)(Z,{})]})]})},de=function(){return Object(P.jsx)(I,{children:Object(P.jsxs)(o.d,{children:[Object(P.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)(o.a,{to:"/weather-widgets"})}}),Object(P.jsx)(o.b,{path:"/weather-widgets",render:function(){return Object(P.jsx)(oe,{})}})]})})},ue=function(){return Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(l.a,{children:Object(P.jsx)(d.a,{children:Object(P.jsx)(u.a,{store:C,children:Object(P.jsx)(de,{})})})})})};i.a.render(Object(P.jsx)(ue,{}),document.getElementById("root")),s()},72:function(e,t,n){e.exports={ldsRing:"preloader_ldsRing__LoOns","lds-ring":"preloader_lds-ring__1VxQT"}}},[[140,1,2]]]);
//# sourceMappingURL=main.45541e11.chunk.js.map