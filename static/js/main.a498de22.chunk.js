(this["webpackJsonppoke-react-v2"]=this["webpackJsonppoke-react-v2"]||[]).push([[0],{147:function(n,e){},149:function(n,e){},159:function(n,e){},161:function(n,e){},188:function(n,e){},189:function(n,e){},194:function(n,e){},196:function(n,e){},203:function(n,e){},222:function(n,e){},259:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,l,d,u=t(0),p=t.n(u),m=t(67),f=t.n(m),b=t(31),h=t.n(b),g=t(35),x=t(137),j=t(11),v=t(5),w=t(4),O={bug:"#90C12C",dark:"#5A5366",dragon:"#0A6DC4",electric:"#F3D23B",fairy:"#EC8FE6",fighting:"#CE4069",fire:"#FF9C54",flying:"#8FA8DD",ghost:"#5269AC",grass:"#63BB5B",ground:"#D97746",ice:"#74CEC0",normal:"#9099A2",poison:"#AB6AC8",psychic:"#F97176",rock:"#C7B78B",steel:"#5A8EA1",water:"#4D90D5"},y=Object(w.e)(a||(a=Object(v.a)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, -3px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n"]))),k=w.d.span(r||(r=Object(v.a)(["\n  height: 22px;\n  width: 22px;\n  position: relative;\n\n  img {\n    height: 22px;\n    width: 22px;\n  }\n\n  &&:hover:after {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    animation: "," 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);\n    z-index: 10;\n\n    content: '","';\n    display: flex;\n    padding: 5px;\n    padding-top: 0;\n    padding-bottom: 4px;\n    align-content: center;\n    text-align: center;\n    vertical-align: middle;\n    text-transform: uppercase;\n    border-radius: 5px;\n    font-size: 22px;\n    background-color: ",";\n  }\n"])),y,(function(n){var e=n.typeName;return"".concat(e)}),(function(n){var e=n.typeName;return O[e]})),C=t(1),E=function(n){var e=n.typeName,t=n.src;return Object(C.jsx)(k,{typeName:e,children:Object(C.jsx)("img",{src:t,alt:"".concat(e," type")})})},F={bug:t.p+"static/media/Bug.1b2c4259.webp",dark:t.p+"static/media/Dark.6f62a09d.webp",dragon:t.p+"static/media/Dragon.3d635c1d.webp",electric:t.p+"static/media/Electric.d5a6ca1f.webp",fairy:t.p+"static/media/Fairy.0b6d5022.webp",fighting:t.p+"static/media/Fighting.e745c3c4.webp",fire:t.p+"static/media/Fire.fcbbf57c.webp",flying:t.p+"static/media/Flying.75062c1a.webp",ghost:t.p+"static/media/Ghost.ff326ea7.webp",grass:t.p+"static/media/Grass.5b4b93b2.webp",ground:t.p+"static/media/Ground.b69d3cd5.webp",ice:t.p+"static/media/Ice.d5fe9ce1.webp",normal:t.p+"static/media/Normal.90a95003.webp",poison:t.p+"static/media/Poison.7cb3461f.webp",psychic:t.p+"static/media/Psychic.bc098f75.webp",rock:t.p+"static/media/Rock.51daeec9.webp",steel:t.p+"static/media/Steel.889b6c7a.webp",water:t.p+"static/media/Water.ae63a167.webp"},D=function(n){return F[n]},S=function(n){switch(n){default:return n.replace(/^\w/,(function(n){return n.toUpperCase()}));case"leafgreen":return"Leaf Green";case"firered":return"Fire Red";case"heartgold":return"Heart Gold";case"soulsilver":return"Soul Silver";case"black-2":return"Black 2";case"white-2":return"White 2";case"omega-ruby":return"Omega Ruby";case"alpha-sapphire":return"Alpha Sapphire";case"lets-go-pikachu":return"Let's Go, Pikachu!";case"lets-go-eevee":return"Let's Go, Eevee!"}},B=function(n){switch(n){default:return n.toUpperCase();case"ja-Hrkt":return"JA<k>";case"zh-Hant":return"ZH<t>";case"zh-Hans":return"ZH<s>"}},z=w.d.select(o||(o=Object(v.a)(["\n  display: flex;\n  border: 1px #00000000;\n  list-style-type: none;\n  justify-content: space-between;\n  background-color: ",";\n  color: ",";\n  font-family: 'FireRed', sans-serif;\n  font-size: 20px;\n  transition: background-color 200ms ease-out;\n\n  &&:focus {\n    outline: none;\n    background-color: ",";\n    border-width: 1px;\n  }\n\n  .listElement {\n    color: ",";\n    background-color: ",";\n    box-shadow: none;\n    border-radius: 5px;\n    border: none;\n    max-height: 20px;\n    margin: 5px;\n  }\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.vibrant}),(function(n){return n.theme.colors.lightContrast}),(function(n){return n.theme.colors.vibrant}),(function(n){return n.theme.colors.bg})),I=function(n){var e=n.data,t=n.onChange,a=n.defaultFlavor,r=e.filter((function(n,t){return e.indexOf(n)===t}));return Object(C.jsx)(z,{onChange:function(n){return t(n.target.value)},children:r.map((function(n){return Object(C.jsx)("option",{className:"listElement",value:"".concat(n.language.name,"\u2014").concat(n.version.name),selected:n.language.name===a.lang&&n.version.name===a.ver,children:"".concat(B(n.language.name)," \u2014 ").concat(S(n.version.name))},"".concat(n.language.name,"\u2014").concat(n.version.name))}))})},N=t(262),R=t(263),L=Object(w.d)(N.a)(i||(i=Object(v.a)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),A=Object(w.d)(R.a)(c||(c=Object(v.a)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),H=w.d.div(s||(s=Object(v.a)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  transition: all 500ms ease-out;\n  overflow: visible;\n  margin-bottom: 25px;\n\n  border-radius: 20px;\n  background-color: ",";\n  border: 2px solid ","30;\n  box-shadow: 0px 8px 10px\n    rgba(\n      29,\n      29,\n      29,\n      ","\n    );\n  max-width: 50vw;\n  width: 900px;\n  min-height: 150px;\n  // height: 150px;\n  padding: 10px 20px;\n\n  h1 {\n    font-weight: normal;\n  }\n\n  .sprite {\n    // transform: scale(1.3);\n    margin-right: 20px;\n  }\n\n  select {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n\n  svg {\n    position: absolute;\n    left: 94%;\n    transform: translateX(150%);\n    opacity: 0.1;\n    transition: 100ms all ease-out;\n  }\n\n  svg:hover {\n    opacity: 0.5;\n    cursor: pointer;\n  }\n\n  @media (max-width: 1060px) {\n    height: 400px;\n    width: 300px;\n    max-width: 90vw;\n\n    flex-direction: column-reverse;\n    justify-content: space-between;\n\n    select {\n      // display: none;\n      position: relative;\n      margin-left: 20px;\n    }\n    svg {\n      position: absolute;\n      left: 80%;\n      bottom: 2px;\n      transform: none;\n      height: 40px;\n    }\n  }\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.lightContrast}),(function(n){return"dark"===n.theme.title?"0.699":"0.3"})),T=w.d.div(l||(l=Object(v.a)(["\n  position: relative;\n  p.number {\n    position: absolute;\n    color: ",";\n  }\n\n  p.mobileDescription {\n    display: none;\n  }\n\n  @media (max-width: 1060px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 65%;\n    transform: translateY(-20px);\n\n    img.sprite {\n      margin: 0;\n      width: 80%;\n    }\n\n    p.mobileDescription {\n      display: initial;\n    }\n  }\n"])),(function(n){return n.theme.colors.details})),_=w.d.div(d||(d=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n\n  h1 {\n    font-size: 4rem;\n    margin-bottom: 5px;\n    text-transform: uppercase;\n\n    span {\n      margin-left: 5px;\n    }\n  }\n\n  p {\n    font-size: 2.6rem;\n  }\n\n  @media (max-width: 1060px) {\n    p {\n      display: none;\n    }\n\n    height: min-content;\n  }\n"]))),M=function(n){var e,t,a,r=n.name,o=n.number,i=n.types,c=n.sprite,s=n.flavorData,l=n.saved,d=n.onToggleSave,p=Object(u.useState)({lang:"en",ver:null===(e=s.find((function(n){return"en"===n.language.name})))||void 0===e?void 0:e.version.name}),m=Object(j.a)(p,2),f=m[0],b=m[1];Object(u.useEffect)((function(){var n;return b({lang:"en",ver:null===(n=s.find((function(n){return"en"===n.language.name})))||void 0===n?void 0:n.version.name})}),[s]);var h=function(n){return n.replace(String.fromCharCode(12)," ")};return Object(C.jsxs)(H,{children:[Object(C.jsxs)(T,{children:[Object(C.jsx)("img",{src:c,alt:"".concat(r,"'s sprite"),className:"sprite"}),Object(C.jsx)("p",{className:"number",children:"#".concat(o)}),Object(C.jsx)("p",{className:"mobileDescription",children:h("".concat(null===(t=s.find((function(n){return n.language.name===f.lang&&n.version.name===f.ver})))||void 0===t?void 0:t.flavor_text))})]}),Object(C.jsxs)(_,{children:[Object(C.jsxs)("h1",{children:[r,i.map((function(n){return Object(C.jsx)(E,{typeName:n,src:D(n)})}))]}),Object(C.jsx)("p",{children:h("".concat(null===(a=s.find((function(n){return n.language.name===f.lang&&n.version.name===f.ver})))||void 0===a?void 0:a.flavor_text))})]}),Object(C.jsx)(I,{data:s,onChange:function(n){var e=n.split("\u2014"),t=Object(j.a)(e,2),a=t[0],r=t[1];b({lang:a,ver:r})},defaultFlavor:f}),d&&!l&&Object(C.jsx)(L,{onClick:function(){return d({name:r,number:o,types:i,sprite:c,flavorData:s})}}),d&&l&&Object(C.jsx)(A,{onClick:function(){return d({name:r,number:o,types:i,sprite:c,flavorData:s})}})]})};M.defaultProps={saved:!0};var P,G,J,U,W,K,Z,X,Y,q=M,Q=t.p+"static/media/logo.695c2334.png",V=w.d.div(P||(P=Object(v.a)(["\n  height: 90px;\n  display: flex;\n  place-content: center;\n  place-items: center;\n  padding: 10px 0px;\n  border-bottom: 10px solid #a30000;\n\n  background-color: #cc0000;\n  margin-bottom: 30px;\n\n  img {\n    max-width: 70vw;\n    max-height: 165vw;\n\n    user-drag: none;\n    user-select-none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n  }\n\n  @media (min-width: 400px) {\n    height: 120px;\n  }\n"]))),$=function(){return Object(C.jsx)(V,{children:Object(C.jsx)("img",{src:Q,alt:"header logo"})})},nn=t(34),en=t.n(nn),tn=t(69),an=t(136),rn=t(135),on=t.n(rn).a.create({baseURL:"https://pokeapi.co/api/v2"}),cn=w.d.div(G||(G=Object(v.a)(["\n  border: 2px solid ","60;\n  border-radius: 50px;\n  height: 50px;\n  width: 400px;\n  max-width: 70vw;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6vh;\n  transition: all 300ms ease-out;\n\n  &&:focus-within {\n    border: 2px solid ",";\n\n    .searchIcon {\n      color: ",";\n    }\n\n    .searchBox {\n      color: ",";\n    }\n  }\n\n  .searchBox {\n    background-color: ","00;\n    border: none;\n    height: 100%;\n    width: 100%;\n    padding: 0px 15px 4.5px;\n    border-radius: 50px;\n    font-size: 33px;\n    font-family: 'FireRed', sans-serif;\n    color: ","80;\n    transition: all 300ms ease-out;\n  }\n\n  .searchBox:focus {\n    outline: none;\n  }\n\n  .searchBox::placeholder {\n    color: ","70;\n  }\n\n  .searchIcon {\n    color: ","60;\n    height: 80%;\n    width: 10%;\n    margin-top: 2.5px;\n    margin-right: 15px;\n    margin-left: 10px;\n    transition: all 300ms ease-out;\n  }\n\n  .searchIcon:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.details})),sn=function(n){var e,t=n.onChange,a=n.isFetching,r=Object(u.useState)(""),o=Object(j.a)(r,2),i=o[0],c=o[1],s=Object(u.useState)(),l=Object(j.a)(s,2),d=l[0],p=l[1],m=Object(u.useState)(!0),f=Object(j.a)(m,2),b=f[0],h=f[1],g=["Pika?","PikaPika?","Looking for...","Type your search here...","I choose..."];return Object(u.useEffect)((function(){(function(){var n=Object(tn.a)(en.a.mark((function n(){return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===i){n.next=12;break}return p({number:-666,name:"",types:[],sprite:"",flavorData:[]}),h(!1),n.prev=3,n.next=6,on.get("/pokemon/".concat(i.toLowerCase())).then(function(){var n=Object(tn.a)(en.a.mark((function n(e){return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===e.data.name){n.next=3;break}return n.next=3,on.get("/pokemon-species/".concat(e.data.name)).then((function(n){p({number:e.data.id,name:e.data.name,types:e.data.types.map((function(n){return n.type.name})),sprite:e.data.sprites.front_default,flavorData:n.data.flavor_text_entries})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 6:a(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(){return n.apply(this,arguments)}})()()}),[i]),Object(C.jsxs)(cn,{children:[Object(C.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex"},children:[Object(C.jsx)("input",{id:"searchBox",className:"searchBox",type:"text",placeholder:b?g[Math.floor(Math.random()*g.length)]:"",onChange:function(n){return t=n.target.value,clearTimeout(e),a(!0),void(e=setTimeout((function(){c(t),a(!1)}),1e3));var t}}),Object(C.jsx)(an.a,{className:"searchIcon"})]}),d&&t(d,i)&&a(!1)]})},ln=t.p+"static/media/loader.811a9c74.png",dn={title:"dark",colors:{bg:"#252525",text:"#FFFFFF",lightContrast:"#323232",details:"#838383",vibrant:"#E7E7DA"}},un={title:"default",colors:{bg:"#E0E0E0",text:"#000000",lightContrast:"#C8C8C8",details:"#3D3D3D",vibrant:"#131313"}},pn=t.p+"static/media/darkmodeIcon.075714ce.png",mn=t.p+"static/media/defaultmodeIcon.d37ca294.png",fn=t.p+"static/media/pokemon_fire_red.3e4af322.otf",bn=Object(w.c)(J||(J=Object(v.a)(["\n  @font-face {\n    font-family: 'FireRed';\n    font-style: normal;\n    font-weight: normal;\n    src: local('FireRed'), url(",");\n  }\n"])),fn),hn=Object(w.b)(U||(U=Object(v.a)(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n    ::-webkit-scrollbar-track {\n      background: transparent;\n    }\n    ::-webkit-scrollbar {\n      width: 4px;\n      border-radius: 10px;\n      background: transparent;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: #dad7d7;\n      border-radius: 10px;\n    }\n  }\n  html {\n    font-size: 10px;\n  }\n  html, body {\n    min-height: 100%;\n    height:100%;\n\n  }\n  body {\n    width: 100%;\n    display: block;\n\n    background-color: ",";\n\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    font-family: 'FireRed', sans-serif;\n    font-weight: 400;\n    font-size: 2.2rem;\n    color: ",";\n    overflow-x: hidden;]\n\n    input, textarea, select {\n      -webkit-appearance: none;\n    }\n  }\n\n  p.noResult {\n    color: ",";\n    font-size: 25px;\n    margin-bottom: 31px;\n  }\n"])),bn,(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.details})),gn=Object(w.e)(W||(W=Object(v.a)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, -3px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n"]))),xn=(w.d.div(K||(K=Object(v.a)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  font-family: 'FireRed', sans-serif;\n  font-size: 25px;\n  color: ",";\n  border-radius: 20px;\n  background-color: ",";\n  box-shadow: 0px 8px 10px rgba(29, 29, 29, 0.699);\n  max-width: 50vw;\n  min-height: 150px;\n  // height: 150px;\n  padding: 10px 20px;\n\n  h1 {\n    font-weight: normal;\n  }\n\n  select {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n"])),(function(n){return n.theme.colors.details}),(function(n){return n.theme.colors.bg})),w.d.div(Z||(Z=Object(v.a)(["\n  .spinner {\n    width: 50px;\n    height: 50px;\n    animation: 0.65s loader infinite ease-in-out;\n  }\n\n  @keyframes loader {\n    from {\n      transform: rotate(19deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])))),jn=w.d.div(X||(X=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  height: 50px;\n  width: 50px;\n  margin-left: 20px;\n  border-radius: 100px;\n  align-items: center;\n  opacity: 0.95;\n  background-color: ","30;\n  box-shadow: 0px 8px 10px\n    rgba(\n      29,\n      29,\n      29,\n      ","\n    );\n  transition: all 200ms ease-out;\n  transform: scale(1);\n\n  :hover {\n    opacity: 1;\n    cursor: pointer;\n    box-shadow: 0px 8px 10px\n      rgba(\n        29,\n        29,\n        29,\n        ","\n      );\n    transform: scale(1.02);\n  }\n\n  :after {\n    position: absolute;\n    bottom: 40px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    content: '"," mode';\n    width: max-content;\n    display: flex;\n    padding: 5px;\n    padding-top: 0;\n    padding-bottom: 4px;\n    align-content: center;\n    text-align: center;\n    vertical-align: middle;\n    border-radius: 5px;\n    font-size: 22px;\n    background-color: ","70;\n    visibility: hidden;\n  }\n\n  :hover:after {\n    animation: "," 300ms cubic-bezier(0.16, 0.79, 0.58, 0.97);\n    visibility: visible;\n  }\n\n  img {\n    height: 50%;\n    width: 50%;\n  }\n\n  .dark {\n    height: 40%;\n    width: 40%;\n  }\n\n  @media (max-width: 560px) {\n    margin-left: 15px;\n  }\n"])),(function(n){return n.theme.colors.lightContrast}),(function(n){return"dark"===n.theme.title?"0.699":"0.4"}),(function(n){return"dark"===n.theme.title?"0.4":"0.2"}),(function(n){return"dark"===n.theme.title?"light":"dark"}),(function(n){return n.theme.colors.lightContrast}),gn),vn=function(){var n=Object(u.useState)(),e=Object(j.a)(n,2),t=e[0],a=e[1],r=Object(u.useState)(""),o=Object(j.a)(r,2),i=o[0],c=o[1],s=Object(u.useState)(!1),l=Object(j.a)(s,2),d=l[0],p=l[1],m=Object(u.useState)(un),f=Object(j.a)(m,2),b=f[0],v=f[1];Object(u.useEffect)((function(){}),[i]),Object(u.useEffect)((function(){var n=function(){var n,e;null!=(null===(n=document.getElementById("root"))||void 0===n?void 0:n.innerHTML)&&localStorage.setItem("@lastKnown_".concat(window.location.href),h.a.encode(null===(e=document.getElementById("root"))||void 0===e?void 0:e.innerHTML,"123456"))};return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)}}),[]);var O=Object(u.useState)([]),y=Object(j.a)(O,2),k=y[0],E=y[1],F=function(n){E((function(e){return e.filter((function(e){return e.name!==n.name}))}))};return Object(u.useEffect)((function(){return console.log("saved cards: ",k)}),[k]),Object(C.jsxs)(w.a,{theme:b,children:[Object(C.jsx)(hn,{}),Object(C.jsx)($,{}),Object(C.jsxs)("div",{style:{display:"flex",flexDirection:"column",placeContent:"center",placeItems:"center"},children:[Object(C.jsxs)("div",{style:{display:"flex",maxWidth:"90vw"},children:[Object(C.jsx)(sn,{onChange:function(n,e){return function(n,e){a(n),c(e)}(n,e)},isFetching:function(n){return p(n)}}),Object(C.jsx)(jn,{onClick:function(){"default"===b.title?v(dn):v(un)},children:"dark"===b.title?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("img",{className:"default",src:mn,alt:"default theme selector"})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("img",{className:"dark",src:pn,alt:"dark theme selector"})})})]}),""!==i&&!d&&t&&!k.find((function(n){return t.name===n.name}))&&!(-666===(null===t||void 0===t?void 0:t.number))&&Object(u.createElement)(q,Object(g.a)(Object(g.a)({},t),{},{saved:!1,onToggleSave:function(n){E((function(e){return[].concat(Object(x.a)(e),[n])}))},key:"".concat(t.name,"-f")})),""!==i&&d&&Object(C.jsx)(xn,{children:Object(C.jsx)("img",{className:"spinner",src:ln,alt:"loading..."})}),""!==i&&!d&&-666===(null===t||void 0===t?void 0:t.number)&&Object(C.jsx)("p",{className:"noResult",children:"No Pok\xe9Dex matches"}),k.map((function(n){return Object(u.createElement)(q,Object(g.a)(Object(g.a)({},n),{},{saved:!0,onToggleSave:F,key:"".concat(n.name,"-t")}))}))]})]})},wn=localStorage.getItem("@lastKnown_".concat(window.location.href)),On="123456";wn&&"undefined"!==wn&&(console.log(h.a.decode(wn,On)),null!==(null===(Y=document.getElementById("root"))||void 0===Y?void 0:Y.innerHTML)&&(document.getElementById("root").innerHTML=h.a.decode(wn,On),window.hasRestoredState=!0));window.hasRestoredState?f.a.hydrate(Object(C.jsx)(p.a.StrictMode,{children:Object(C.jsx)(vn,{})}),document.getElementById("root")):f.a.render(Object(C.jsx)(p.a.StrictMode,{children:Object(C.jsx)(vn,{})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.a498de22.chunk.js.map