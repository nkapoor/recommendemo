(this.webpackJsonprecommendemo=this.webpackJsonprecommendemo||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},52:function(e,t,c){},57:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(8),o=c.n(n);c(31);const i="cooltools-cold-breeze-873.fly.dev";var l={fetchDQsPick:"/all",fetchActionMovies:"/genres/action",fetchComedyMovies:"/genres/comedy",fetchHorrorMovies:"/genres/horror",fetchRomanceMovies:"/genres/romance"},r=(c(32),c(9)),d=c.n(r),j=c(20);var m=c.n(j).a.create({baseURL:i}),b=(c(52),c(1));var h=()=>{const[e,t]=Object(s.useState)([]);return Object(s.useEffect)((()=>{!async function(){const e=await m.get(l.fetchDQsPick,{headers:{"Access-Control-Allow-Origin":"*"}});t(e.data.result[Math.floor(Math.random()*e.data.result.length-1)])}()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===e||void 0===e?void 0:e.poster_path,'"\n                    )'),backgroundPosition:"top center",backgroundSize:"cover"},children:[Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)}),Object(b.jsx)("div",{className:"banner__buttons",children:Object(b.jsxs)("button",{className:"banner__button play",children:[Object(b.jsx)(d.a,{}),"Play"]})}),Object(b.jsx)("h1",{className:"banner__description",children:(c=null===e||void 0===e?void 0:e.overview,a=150,(null===c||void 0===c?void 0:c.length)>a?c.substr(0,a-1)+"...":c)})]}),Object(b.jsx)("div",{className:"banner--fadeBottom"})]});var c,a};c(57);var v=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>(window.addEventListener("scroll",(()=>{window.scrollY>50?t(!0):t(!1)})),()=>{window.removeEventListener("scroll",(()=>{}))})),[]),Object(b.jsxs)("nav",{className:"nav ".concat(e&&"nav__black"),children:[Object(b.jsx)("img",{alt:"DQflex logo",src:"https://i.ibb.co/svtr2tD/dqflex-logo.png",className:"nav__logo"}),Object(b.jsx)("img",{alt:"User logged",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",className:"nav__avatar"})]})},O=c(24),g=c.n(O),u=c(25),x=c.n(u),_=c(23),p=c.n(_),f=c(22),w=c.n(f);c(60);var N=e=>{let{poster_path:t,movieId:c,title:s,genres:a,url:n,rating_avg:o,rating_count:l,setModalVisibility:r,addRating:j}=e;return Object(b.jsx)("div",{className:"presentation",role:"presentation",children:Object(b.jsx)("div",{className:"wrapper-modal",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("span",{onClick:()=>r(!1),className:"modal-close",children:Object(b.jsx)(p.a,{})}),Object(b.jsxs)("div",{className:"modal__header",children:[Object(b.jsx)("img",{className:"modal__poster-img",src:"".concat(t),alt:"".concat(s)}),Object(b.jsxs)("div",{className:"modal__content",children:[Object(b.jsxs)("p",{className:"modal__details",children:[Object(b.jsx)("span",{className:"modal__user-perc",children:"Genre: "})," ",a.replaceAll("|"," | ")]}),Object(b.jsx)("h3",{className:"modal__title",children:s}),Object(b.jsxs)("p",{className:"modal__overview",children:["Vote Average: ",o.toFixed(2)]}),Object(b.jsxs)("p",{className:"modal__overview",children:["Vote Count: ",l]}),Object(b.jsxs)("div",{className:"modal__header",children:[Object(b.jsxs)("button",{className:"banner__button play",onClick:()=>{window.open(n)},children:[Object(b.jsx)(d.a,{}),"Detail"]}),Object(b.jsx)(w.a,{count:5,onChange:e=>{const t="".concat(c,":").concat(e);console.log(t),j(t),r(!1)},size:24,color2:"#ffd700"})]})]})]}),Object(b.jsx)(M,{title:"You may also like...",id:c,fetchUrl:"".concat(i,"/item-based/").concat(c)})]})})})};c(61);var M=e=>{let{title:t,fetchUrl:c,id:a,addRating:n}=e;const[o,i]=Object(s.useState)([]),[l,r]=Object(s.useState)(!1),[d,j]=Object(s.useState)({});Object(s.useEffect)((()=>{console.log(a,c),async function(){const e=await m.get(c,{headers:{"Access-Control-Allow-Origin":"*"}});i(e.data.result)}()}),[c]);return Object(b.jsxs)("section",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("div",{className:"slider",children:[Object(b.jsx)("div",{className:"slider__arrow-left",children:Object(b.jsx)("span",{className:"arrow",onClick:()=>{document.getElementById(a).scrollLeft-=window.innerWidth-80},children:Object(b.jsx)(g.a,{})})}),Object(b.jsx)("div",{id:a,className:"row__posters",children:o.map(((e,t)=>Object(b.jsx)("img",{onClick:()=>(e=>{r(!0),j(e)})(e),className:"row__poster row__posterLarge",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),loading:"lazy",alt:e.title},t)))}),Object(b.jsx)("div",{className:"slider__arrow-right",children:Object(b.jsx)("span",{className:"arrow",onClick:()=>{document.getElementById(a).scrollLeft+=window.innerWidth-80},children:Object(b.jsx)(x.a,{})})})]}),l&&Object(b.jsx)(N,{...d,setModalVisibility:r,addRating:n})]})};var y=()=>{const[e,t]=Object(s.useState)(i+"/all"),[c,a]=Object(s.useState)([]),n=e=>{c.push(e),a(c);const s=c.join("&params="),n="".concat(i,"/user-based/?params=").concat(s);t(n)};return Object(s.useEffect)((()=>{if(c.length>0){const e=c.join("&params="),s="".concat(i,"/user-based/?params=").concat(e);t(s)}console.log(e)})),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(v,{}),Object(b.jsx)(h,{}),Object(b.jsx)(M,{title:"Recommend For You",id:"RF",fetchUrl:e,addRating:n},e),Object(b.jsx)(M,{title:"DQ's Pick",id:"DP",fetchUrl:l.fetchDQsPick,addRating:n}),Object(b.jsx)(M,{title:"Action Movies",id:"AM",fetchUrl:l.fetchActionMovies,addRating:n}),Object(b.jsx)(M,{title:"Comedy Movies",id:"CM",fetchUrl:l.fetchComedyMovies,addRating:n}),Object(b.jsx)(M,{title:"Horror Movies",id:"HM",fetchUrl:l.fetchHorrorMovies,addRating:n}),Object(b.jsx)(M,{title:"Romance  Movies",id:"RM",fetchUrl:l.fetchRomanceMovies,addRating:n})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.e9c65cfd.chunk.js.map