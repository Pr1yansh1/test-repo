(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9225)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,o=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,c=void 0!==s&&s,g=e.priority,f=void 0!==g&&g,x=e.loading,N=e.lazyRoot,A=void 0===N?null:N,C=e.lazyBoundary,z=e.className,P=e.quality,L=e.width,R=e.height,M=e.style,T=e.objectFit,E=e.objectPosition,B=e.onLoadingComplete,O=e.placeholder,W=void 0===O?"empty":O,q=e.blurDataURL,F=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),G=d.useContext(m.ImageConfigContext),H=d.useMemo((function(){var e=j||G||u.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[G]),D=F,J=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(J=D.layout),delete D.layout);var U=S;if("loader"in D){if(D.loader){var V=D.loader;U=function(e){e.config;var t=l(e,["config"]);return V(t)}}delete D.loader}var Z="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var Y=y(t)?t.default:t;if(!Y.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(q=q||Y.blurDataURL,Z=Y.src,(!J||"fill"!==J)&&(R=R||Y.height,L=L||Y.width,!Y.height||!Y.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))}var K=!f&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:Z).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);b.has(t)&&(K=!1);w&&(c=!0);var X,Q=o(d.useState(!1),2),$=Q[0],ee=Q[1],te=o(p.useIntersection({rootRef:A,rootMargin:C||"200px",disabled:!K}),3),ne=te[0],ie=te[1],oe=te[2],re=!K||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:T,objectPosition:E},de=k(L),he=k(R),ue=k(P);0;var pe=Object.assign({},M,le),me="blur"!==W||$?{}:{backgroundSize:T||"cover",backgroundPosition:E||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===J)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof he){var ge=he/de,fe=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===J?(ae.display="block",ae.position="relative",ce=!0,se.paddingTop=fe):"intrinsic"===J?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,se.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(he,"%27/%3e")):"fixed"===J&&(ae.display="inline-block",ae.position="relative",ae.width=de,ae.height=he)}else 0;var we={src:v,srcSet:void 0,sizes:void 0};re&&(we=_({config:H,src:t,unoptimized:c,layout:J,width:de,quality:ue,sizes:n,loader:U}));var je=t;0;var be,ve="imagesrcset",xe="imagesizes";ve="imageSrcSet",xe="imageSizes";var ye=(i(be={},ve,we.srcSet),i(be,xe,we.sizes),be),_e=d.default.useLayoutEffect,ke=d.useRef(B),Se=d.useRef(t);d.useEffect((function(){ke.current=B}),[B]),_e((function(){Se.current!==t&&(oe(),Se.current=t)}),[oe,t]);var Ne=a({isLazy:K,imgAttributes:we,heightInt:he,widthInt:de,qualityInt:ue,layout:J,className:z,imgStyle:pe,blurStyle:me,loading:x,config:H,unoptimized:c,placeholder:W,loader:U,srcString:je,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ne,isVisible:re,noscriptSizes:n},D);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},ce?d.default.createElement("span",{style:se},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(I,Object.assign({},Ne))),f?d.default.createElement(h.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+we.src+we.srcSet+we.sizes,rel:"preload",as:"image",href:we.srcSet?void 0:we.src},ye))):null)};var a=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,d=c(n(7294)),h=s(n(5443)),u=n(9309),p=n(7190),m=n(9977),g=(n(3794),n(2392));var f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},w=f.experimentalUnoptimized,j={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t.path).concat(A(n))),a=r.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var o=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var d,h=.01*(d=Math).min.apply(d,r(l));return{widths:a.filter((function(e){return e>=o[0]*h})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,c),h=d.widths,u=d.kind,p=h.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:h.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:l({config:t,src:n,quality:s,width:h[p]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,i,o,r){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&r(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,o=e.layout,r=e.className,s=e.imgStyle,c=e.blurStyle,h=e.isLazy,u=e.placeholder,p=e.loading,m=e.srcString,g=e.config,f=e.unoptimized,w=e.loader,j=e.onLoadingCompleteRef,b=e.setBlurComplete,v=e.setIntersection,x=e.onLoad,y=e.onError,k=(e.isVisible,e.noscriptSizes),S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=h?"lazy":p,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":o,className:r,style:a({},s,c),ref:d.useCallback((function(e){v(e),(null==e?void 0:e.complete)&&N(e,m,0,u,j,b)}),[v,m,o,u,j,b]),onLoad:function(e){N(e.currentTarget,m,0,u,j,b),x&&x(e)},onError:function(e){"blur"===u&&b(!0),y&&y(e)}})),(h||"blur"===u)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,_({config:g,src:m,unoptimized:f,layout:o,width:n,quality:i,sizes:k,loader:w}),{decoding:"async","data-nimg":o,style:s,className:r,loading:p}))))};function A(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return le}});var i=n(5893),o=n(5675),r=n.n(o),a=n(1163),s=n(2522),c=n.n(s),l=function(e){var t=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[!e.local&&(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:c().inlineLink,children:(0,i.jsx)("span",{children:e.children})}),e.local&&(0,i.jsx)("a",{className:c().inlineLink,onClick:function(){t.push(e.href)},children:(0,i.jsx)("span",{children:e.children})})]})},d=n(2031),h=n.n(d),u=function(e){return(0,i.jsx)("div",{id:e.id,className:h().scrollTo})},p=n(8092),m=n.n(p),g=function(e){for(var t=e.list,n=e.numCols,o="",r=[],a=0;a<n;a++){o+="1fr",a!==n-1&&(o+=" ");for(var s=[],c=a;c<t.length;){var l="object"===typeof t[c]?JSON.stringify(t[c]):t[c];s.push((0,i.jsx)("li",{children:t[c]},l)),c+=n}r.push(s)}var d=Array.from(Array(n).keys()).map((function(e,t){return(0,i.jsx)("ul",{children:r[t]},t)}));return(0,i.jsx)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"".concat(o)},children:d})},f=n(7294),w=n(4583),j=n(9127),b=n.n(j),v=function(e){var t=(0,f.useContext)(w.Z),n=(0,f.useRef)(),o=(0,f.useState)(!1),r=o[0],a=o[1];return(0,f.useEffect)((function(){t.scrollLocation>=n.current.offsetTop-window.innerHeight/2&&a(!0)}),[t.scrollLocation]),(0,i.jsx)("div",{ref:n,className:"".concat(b().showOnScroll," ").concat(r?"":b().hide),children:e.children})},x=function(){return(0,i.jsx)(v,{children:(0,i.jsx)("div",{className:"layout ".concat(m().about),children:(0,i.jsxs)("div",{className:m().wrapper,children:[(0,i.jsx)(u,{id:"about"}),(0,i.jsx)("h2",{className:"section-header",children:"About Me"}),(0,i.jsxs)("div",{className:m().columns,children:[(0,i.jsxs)("div",{className:"border-highlight ".concat(m().text),children:[(0,i.jsxs)("p",{children:["I fell in love with coding after my first year of university, during a co-op term at a"," ",(0,i.jsx)(l,{href:"https://mach85.com/",children:"local startup"}),". It was the first time that I genuinely enjoyed going to work, and it made me realize that this is what I wanted to spend my professional life doing. But I didn't just want to spend it coding, I wanted to spend it getting ",(0,i.jsx)("em",{children:"good"})," at coding, and constantly learning new technologies."]}),(0,i.jsxs)("p",{children:["With this newfound motivation, I began investing my free time into expanding my skills through"," ",(0,i.jsx)(l,{href:"#personal-projects",local:!0,children:"personal projects"})," ","and"," ",(0,i.jsx)(l,{href:"https://udemy.com/",children:"online courses"}),". After interning at"," ",(0,i.jsx)(l,{href:"https://populusplus.com/",children:"another local startup"}),", I decided to transfer to a",(0,i.jsx)(l,{href:"https://uwaterloo.ca/",children:"larger university"})," ","out of province, in search of new opportunities."]}),(0,i.jsxs)("p",{children:["This led to my current internship at"," ",(0,i.jsx)(l,{href:"https://www.khanacademy.org/",children:"Khan Academy"}),", where I'm working to develop"," ",(0,i.jsx)(l,{href:"https://www.khanacademy.org/khan-labs",children:"Khanmigo"}),", an AI tutor chatbot powered by OpenAI's"," ",(0,i.jsx)(l,{href:"https://openai.com/gpt-4",children:"GPT-4"}),". I'm incredibly excited to get the chance to work with such cutting-edge technology as the wave of AI sweeps over our world!"]})]}),(0,i.jsxs)("div",{className:m().rightCol,children:[(0,i.jsx)("div",{className:"shadow-highlight ".concat(m().image),children:(0,i.jsx)(r(),{src:"\\me.jpg",alt:"Image Of Carter",layout:"fill",objectFit:"cover",loading:"eager"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:m().technologies,children:"Some technologies I've been using lately:"}),(0,i.jsx)(g,{list:["React","Go","Angular","Node.js","Express.js","MongoDB","TypeScript","JavaScript","CSS / Sass","Java / Spring Boot","C++","Android Studio"],numCols:2})]})]})]})]})})})},y=n(1962),_=n.n(y),k=function(){return(0,i.jsxs)("div",{className:_().footer,children:[(0,i.jsx)("a",{className:_().built,href:"https://github.com/carterjmoore/personal-website",target:"_blank",rel:"noopener noreferrer",children:"Built from scratch by Carter Moore"}),(0,i.jsxs)("p",{className:_().linkedIn,children:["Get in touch through"," ",(0,i.jsx)(l,{href:"https://www.linkedin.com/in/carterjmoore/",children:"LinkedIn"})]})]})},S=n(3110),N=n.n(S),I=function(){var e=(0,f.useState)(!1),t=e[0],n=e[1],o=(0,f.useState)(!1),r=o[0],a=o[1],s=(0,f.useState)(!1),c=s[0],d=s[1],h=(0,f.useState)(!1),p=h[0],m=h[1];return(0,f.useEffect)((function(){setTimeout((function(){return n(!0)}),2e3),setTimeout((function(){return a(!0)}),2800),setTimeout((function(){return d(!0)}),4200),setTimeout((function(){return m(!0)}),6200)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{id:"home"}),(0,i.jsx)("div",{className:N().home,children:(0,i.jsxs)("div",{className:"layout "+N()["home-textbox"],children:[(0,i.jsx)("h3",{className:"".concat(N().hi," ").concat(t?"":N().hide),children:"Hi, I'm"}),(0,i.jsx)("h1",{className:"".concat(N().carter," ").concat(r?"":N().hide),children:"Priyanshi Garg"}),(0,i.jsx)("h1",{className:"".concat(N().subheader," ").concat(c?"":N().hide),children:"A curious researcher, engineer and dancer."}),(0,i.jsxs)("p",{className:"".concat(N().paragraph," ").concat(p?"":N().hide),children:["Currently studying Computer Science at the"," ",(0,i.jsx)(l,{href:"https://www.cs.cmu.edu/",children:"Carnegie Mellon University"}),".I am passionate about AI ethics, learning theory as well as software engineering. In my free time, I like to learn new langauges (both cs and human!), dance, and cook!"]})]})})]})},A=n(7415),C=n.n(A),z=n(143),P=[{name:"SharePlace",github:"https://github.com/carterjmoore/share-place-backend",link:"https://shareplace.cartermoore.ca/",skills:["Node.js","Express.js","React","MongoDB","Mongoose","Google Maps API"],image:{src:"/shareplace.jpg",alt:"SharePlace landing page"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(l,{href:"https://shareplace.cartermoore.ca",children:"SharePlace"})," ","is a social media app for sharing places. View a list of users, and click a user to view the places they've shared. Each place is saved with an image and details about the place. SharePlace makes use of the"," ",(0,i.jsx)(l,{href:"https://developers.google.com/maps/documentation/geocoding",children:"Google Maps Geocoding API"})," ","to convert the place's address to coordinates, and then allows you to view that location on Google Maps in-app. You can also create an account, upload a unique profile picture, and share your own places!"]}),(0,i.jsxs)("p",{children:["SharePlace was built on the"," ",(0,i.jsx)(l,{href:"https://www.mongodb.com/mern-stack",children:"MERN stack"})," ","(MongoDB, Express.js, React.js, Node.js) with the purpose of growing my knowledge of these technologies. While I've done a fair bit of React development prior, this was my first major fullstack app using MongoDB, Express, and Node, so it was a great learning experience, and I can now say I'm very comfortable with this tech stack. The project also taught me about several other important topics like JWT authorization, password hashing, and file upload/storage on a backend."]}),(0,i.jsxs)("p",{children:["This project was created while following the"," ",(0,i.jsx)(l,{href:"https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide",children:"MERN Fullstack Guide"})," ","Udemy course by"," ",(0,i.jsx)(l,{href:"https://academind.com",children:"Academind"}),". I coded along and put my own spin on the implementation for many parts of the app, but credit for the overall design, code structure, and idea goes to them."]})]})},{name:"imglabs.io",github:"https://github.com/imglabs-io",link:"https://www.imglabs.io/",skills:["React","Next.js","Tailwind UI","Node.js","Supabase","Authentication"],image:{src:"/imglabs.jpg",alt:"imglabs.io landing page"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["ImgLabs is an image proxying service that I developed alongside two friends. We use a highly optimized serverless core to serve images with better performance than many competitors, and we plan on"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io/pricing",children:"marketing"})," ","the product soon."]}),(0,i.jsxs)("p",{children:["I mainly developed the"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io",children:"website"})," for the product, and focused on making it look as professional and modern as possible. Some interesting features of the site I developed are the"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io/#demo",children:"interactive demo"}),", the"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io/signup",children:"authentication"})," ","with"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io/request-reset",children:"password reset"})," ","functionality, and the"," ",(0,i.jsx)(l,{href:"https://www.imglabs.io/dashboard",children:"service dashboard"})," ","(you'll need to create a free account and sign in to check out the dashboard)."]})]})},{name:"Reflex Revolution",github:"https://github.com/fredy20501/reflex-revolution",link:"https://youtu.be/q1CD4dVF6Xs",skills:["Android Studio","Java"],image:{src:"/reflex-revolution.jpg",alt:"Several screens of Reflex Revolution"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["Reflex Revolution is a native Android app for a game similar to the toy"," ",(0,i.jsx)(l,{href:"https://en.wikipedia.org/wiki/Bop_It",children:"Bop It"})," ","by Hasbro. You must complete a series of random actions in increasingly shorter time frames, and aim for a high score. Running out of time or making one mistake means a game over."]}),(0,i.jsx)("p",{children:"The game features 6 game modes, each having a different set of actions, as well as 3 difficulty levels that make you run out of time faster. It also includes a how-to-play, settings menu, music, and voice narration for actions!"}),(0,i.jsxs)("p",{children:["Check out a"," ",(0,i.jsx)(l,{href:"https://youtu.be/q1CD4dVF6Xs",children:"gameplay demo"})," ","video here!"]})]})},{name:"Gun Time",github:"https://github.com/carterjmoore/Gun-Time",link:"https://play.unity.com/mg/other/webgl-dvj",skills:["Unity","C#"],image:{src:"/gun-time.jpg",alt:"Gun Time home screen"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Gun Time is a first-person platformer game with shooter and puzzler aspects. The player breaks into a facility to steal the Time Gun, which allows them to speed up or slow down time for whatever they shoot. The player must use the gun's powers on enemies and the environment to solve puzzles, and escape the facility alive."}),(0,i.jsx)("p",{children:"The game features seven levels, two enemy types, several types of interactive environmental objects, complex mechanics, and cool physics, all of which lead to tons of fun gameplay! It also incorporates sound effects, music, settings, home and pause screens, and much more."}),(0,i.jsxs)("p",{children:[(0,i.jsx)(l,{href:"https://play.unity.com/mg/other/webgl-dvj",children:"Try the game"})," ","in your browser, or check out a"," ",(0,i.jsx)(l,{href:"https://youtu.be/yO3kN4jicp4",children:"gameplay demo"})," ","here! If you're having a hard time understanding the mechanics, check out the"," ",(0,i.jsx)(l,{href:"https://github.com/carterjmoore/Gun-Time/blob/main/README.md",children:"GitHub README"})," ","for more instructions and some optional cheats."]})]})},{name:"Portfolio Website",github:"https://github.com/carterjmoore/personal-website",link:"#",skills:["React","Next.js","Sass","Vercel","Font Awesome"],image:{src:"/portfolio.jpg",alt:"Portfolio landing page"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Rather than using a template for my portfolio website, I decided to build it from scratch in order to improve my React and CSS skills. I tried to rely on dependencies as little as possible (other than for things like icons), so all components in this project were built completely from scratch by myself. The site is also fully responsive, and mobile-compatible."}),(0,i.jsxs)("p",{children:["I learned a lot of neat CSS techniques while building this website \u2013 I had mostly used CSS frameworks like Tailwind and PrimeNG in the past, so writing it all from scratch with Sass was a big change! Building this website also taught me about how to create cool, reusable components like"," ",(0,i.jsx)(l,{href:"#personal-projects",local:!0,children:"these links"}),", and how to approach creating larger, more complex components from scratch. I'm especially proud of how the"," ",(0,i.jsx)(l,{href:"#work",local:!0,children:"work experience"})," ","and"," ",(0,i.jsx)(l,{href:"#personal-projects",local:!0,children:"personal projects"})," ","components turned out!"]}),(0,i.jsx)("p",{children:"I plan on keeping the site updated with new projects and work experience as I grow in my career, so stay tuned!"})]})}],L=(n(7720),n(1417)),R=n(1436),M=n(2814),T=n(5711),E=n.n(T),B=function(e){return(0,i.jsx)("button",{className:E().button,style:e.style,onClick:e.onClick,children:e.children})},O=n(5792),W=n.n(O),q=function(e){var t=(0,f.useContext)(z.Z);return(0,i.jsxs)("div",{className:"border-highlight ".concat(W().container),children:[(0,i.jsxs)("div",{className:W().top,children:[(0,i.jsxs)("div",{className:W().heading,children:[(0,i.jsx)("h3",{children:e.project.name}),(e.project.github||e.project.links)&&(0,i.jsxs)("div",{className:W().links,children:[e.project.github&&(0,i.jsx)("a",{href:e.project.github,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(M.G,{icon:L.zhw,size:"2x"})}),e.project.link&&(0,i.jsx)("a",{href:e.project.link,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(M.G,{icon:R.nNP,size:"2x"})})]}),(0,i.jsx)("div",{className:W().skills,children:(0,i.jsx)(g,{list:e.project.skills,numCols:t.isMobile?2:3})})]}),(0,i.jsx)("div",{className:"shadow-highlight ".concat(W().image),children:(0,i.jsx)(r(),{src:e.project.image.src,alt:e.project.image.alt,layout:"fill",objectFit:e.project.image.objectFit?e.project.image.objectFit:"fill",objectPosition:e.project.image.objectPosition?e.project.image.objectPosition:"50% 50%",loading:"eager"})})]}),(0,i.jsx)("div",{className:W().content,children:e.project.content}),(0,i.jsxs)("div",{className:W().buttons,children:[(0,i.jsx)(B,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onPrev()},children:"\u2039"}),(0,i.jsx)(B,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onNext()},children:"\u203a"})]})]})},F=n(5556),G=n.n(F),H=function(){var e=(0,a.useRouter)(),t=(0,f.useContext)(z.Z),n=(0,f.useState)(0),o=n[0],r=n[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=function(){c||(p(),m(),r((function(e){return(e+1)%P.length})))},h=function(){c||(p(),m(),r((function(e){return 0!==e?e-1:P.length-1})))},u=function(e){return function(){c||(p(),m(),r(e))}},p=function(){l(!0),setTimeout((function(){l(!1)}),300)},m=function(){t.isMobile&&setTimeout((function(){e.push("#personal-projects")}),300)};return(0,i.jsxs)("div",{className:G().container,children:[(0,i.jsx)("div",{className:G().slider,style:{transform:"translateX(calc(".concat(o,"*(-100%)))")},children:P.map((function(e){return(0,i.jsx)(q,{project:e,onNext:d,onPrev:h},e.name)}))}),(0,i.jsx)("div",{className:G().progress,children:P.map((function(e,t){return(0,i.jsx)("div",{onClick:u(t),className:"".concat(G()["progress-circle"]," ").concat(t===o?G().selected:"")},"".concat(e.name,"Circle"))}))})]})},D=function(){return(0,i.jsx)(v,{children:(0,i.jsx)("div",{className:"layout ".concat(C().projects),children:(0,i.jsxs)("div",{className:C().wrapper,children:[(0,i.jsx)(u,{id:"personal-projects"}),(0,i.jsx)("h2",{className:"section-header ".concat(C().header),children:"Personal Projects"}),(0,i.jsx)(H,{})]})})})},J=n(138),U=n.n(J),V=function(e){return(0,i.jsx)("div",{onClick:function(){e.onClick(e.work)},className:"".concat(U()["select-button"]," ").concat(e.work.id===e.selectedId?U().selected:""),children:e.work.company},e.work.id)},Z=n(8467),Y=n.n(Z),K=function(e){return(0,i.jsxs)("div",{className:Y()["selected-work"],children:[(0,i.jsxs)("h3",{children:["".concat(e.work.title," - "),(0,i.jsx)(l,{href:e.work.href,children:e.work.company})]}),(0,i.jsx)("em",{children:e.work.date}),(0,i.jsx)("ul",{children:e.work.bullets.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},X=n(1297),Q=n.n(X),$=[{id:0,company:"Carnegie Mellon University",href:"https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html",title:"AI4ALL/AI Scholars Project Leader",date:"June -- July 2023",bullets:["Led the AI4ALL/AI Scholars pre-college program, overseeing project-based learning and lectures on computing and artificial intelligence for under-represented high school students in tech.","Contributed to curriculum development, creating slides, notes, and codebases for lectures, ensuring a comprehensive and engaging learning experience for participants.","Delivered lectures on fundamental ML topics, including Convolutional Neural Networks (CNNs), empowering students with essential knowledge in image classification techniques.","Mentored and guided two groups of five students each, fostering a hands-on learning environment where participants constructed their own image classification projects on architecture and flower-type classification.","Facilitated the presentation of group projects at the program\u2019s conclusion, celebrating the achievements of the students and showcasing their innovative solutions in AI and ML."]},{id:0,company:"Carnegie Mellon University",href:"https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html",title:"AI4ALL/AI Scholars Project Leader",date:"June -- July 2023",bullets:["Led the AI4ALL/AI Scholars pre-college program, overseeing project-based learning and lectures on computing and artificial intelligence for under-represented high school students in tech.","Contributed to curriculum development, creating slides, notes, and codebases for lectures, ensuring a comprehensive and engaging learning experience for participants.","Delivered lectures on fundamental ML topics, including Convolutional Neural Networks (CNNs), empowering students with essential knowledge in image classification techniques.","Mentored and guided two groups of five students each, fostering a hands-on learning environment where participants constructed their own image classification projects on architecture and flower-type classification.","Facilitated the presentation of group projects at the program\u2019s conclusion, celebrating the achievements of the students and showcasing their innovative solutions in AI and ML."]},{id:1,company:"Insanally Labs, University of Pittsburgh",href:"https://www.insanallylab.com/",title:"Research Developer",date:"June -- August 2023",bullets:["Developed an open-source Python package for a novel trial-by-trial, spike-timing-based Bayesian decoding algorithm, revolutionizing the understanding of non-classically responsive neurons\u2019 coding capacities in the brain.","Applied Object-Oriented Programming (OOP) principles and conducted rigorous unit and integration testing, resulting in a highly reliable and maintainable Python package that is now widely usable by the neuroscience community.","Writing a methods paper for publication, showcasing the efficacy of the decoding package and its significant impact on advancing neuroscientific research.","By making the decoding algorithm accessible through an easy to use package, contributed to the democratization of neuroscience research, enabling scientists worldwide to investigate neuron responsiveness with greater ease and accuracy."]},{id:2,company:"Delt4",href:"https://delt4.org/",title:"NLP/Machine Learning Engineer Intern",date:"June -- August 2023",bullets:["Conducted topic modeling on 100k+ chunks from research papers, creating robust models for efficient data organization and retrieval, setting the foundation for subsequent data-driven projects.","Utilized topic modeling outputs in conjunction with Large Language Models (LLMs) to perform advanced generation and precise answers for complex biotech queries, significantly enhancing productivity and information accessibility for the team.","Spearheaded the implementation of LLMs4PeerReview, showcasing leadership and initiative in improving the paper-selection and peer-review process within the biotech/AI startup.","Collaborated on a forecasting project employing state-of-the-art ML models to predict drug outcomes, contributing to data-driven decision-making in drug development at Delt4."]}].reverse(),ee=function(){var e=(0,f.useState)($[0]),t=e[0],n=e[1],o=(0,f.useState)($[0].id),r=o[0],a=o[1],s=(0,f.useState)(!1),c=s[0],d=s[1],h=(0,f.useState)(void 0),p=h[0],m=h[1],g=function(e){t!==e&&(clearTimeout(p),d(!0),a(e.id),m(setTimeout((function(){clearTimeout(p),n(e),d(!1)}),300)))};return(0,i.jsx)(v,{children:(0,i.jsx)("div",{className:"layout ".concat(Q().work),children:(0,i.jsxs)("div",{className:Q().wrapper,children:[(0,i.jsx)(u,{id:"work"}),(0,i.jsx)("h2",{className:"section-header ".concat(Q().workHeader),children:"Work Experience"}),(0,i.jsx)("p",{className:Q().recommendations,children:(0,i.jsx)(l,{href:"https://www.linkedin.com/in/carterjmoore/details/recommendations/",children:"View recommendations from my employers and colleagues"})}),(0,i.jsxs)("div",{className:"border-highlight ".concat(Q().container),children:[(0,i.jsx)("div",{className:Q().select,children:$.map((function(e){return(0,i.jsx)(V,{work:e,selectedId:r,onClick:g},e.id)}))}),(0,i.jsx)("div",{className:"".concat(Q().info," ").concat(c?Q().hide:""),style:{transition:"opacity ease-in-out ".concat(300,"ms")},children:(0,i.jsx)(K,{work:t})})]})]})})})},te=n(9008),ne=n.n(te),ie=n(1664),oe=n.n(ie),re=n(3040),ae=n(8994),se=n.n(ae),ce=function(){var e=(0,f.useContext)(re.Z),t=function(){e.hideModal()};return(0,i.jsx)("div",{onClick:t,className:"".concat(se().modal," ").concat(e.modalShown?se().showModal:""),children:(0,i.jsxs)("div",{className:se().relativeWrapper,children:[(0,i.jsx)(M.G,{onClick:t,className:se().closeButton,icon:R.YIN}),(0,i.jsxs)("div",{className:se().modalContents,children:[(0,i.jsx)(oe(),{href:"#home",children:"Home"}),(0,i.jsx)(oe(),{href:"#about",children:"About"}),(0,i.jsx)(oe(),{href:"#work",children:"Work"}),(0,i.jsx)(oe(),{href:"#personal-projects",children:"Personal Projects"})]})]})})};function le(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ne(),{children:[(0,i.jsx)("title",{children:"Priyanshi Garg's Portfolio"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{name:"description",content:"Priyanshi's personal portfolio website."})]}),(0,i.jsx)(ce,{}),(0,i.jsx)(I,{}),(0,i.jsx)(x,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(D,{}),(0,i.jsx)(k,{})]})}},8092:function(e){e.exports={about:"About_about__rkwrB",wrapper:"About_wrapper__6gu1b",columns:"About_columns__RRX_o",text:"About_text__BoxYP",rightCol:"About_rightCol__4abaG",image:"About_image__lnjLp",technologies:"About_technologies__lElQA"}},1962:function(e){e.exports={footer:"Footer_footer__GLL0J",built:"Footer_built___P5Jo",linkedIn:"Footer_linkedIn__vNcP7"}},3110:function(e){e.exports={home:"Home_home__Tcfrf","home-textbox":"Home_home-textbox__CcdqL",hi:"Home_hi__tslKG",carter:"Home_carter__E_IC5",subheader:"Home_subheader__MLFKy",paragraph:"Home_paragraph__eazRC",hide:"Home_hide___xYvS"}},5792:function(e){e.exports={projects:"ProjectSlide_projects__Sn6OP",header:"ProjectSlide_header__iDepj",wrapper:"ProjectSlide_wrapper__H5PEN",container:"ProjectSlide_container__y8qCB",top:"ProjectSlide_top__Emk2W",heading:"ProjectSlide_heading__jsTgU",links:"ProjectSlide_links__p8OjT",active:"ProjectSlide_active__7Y6qz",image:"ProjectSlide_image__2WYCb",content:"ProjectSlide_content__0Aq5B",buttons:"ProjectSlide_buttons__5CyuO"}},7415:function(e){e.exports={projects:"Projects_projects__VjjTN",header:"Projects_header__K7e0R",wrapper:"Projects_wrapper__FBwk8"}},5556:function(e){e.exports={projects:"Slider_projects__tpGce",header:"Slider_header__mjRHh",wrapper:"Slider_wrapper__zaR5N",container:"Slider_container__rKsWn",slider:"Slider_slider__TsQ2a",progress:"Slider_progress__xoEhq","progress-circle":"Slider_progress-circle__ahMij",selected:"Slider_selected__ZRp7h"}},5711:function(e){e.exports={button:"Button_button__jcCJJ"}},2522:function(e){e.exports={inlineLink:"InlineLink_inlineLink__jzbvO"}},8994:function(e){e.exports={modal:"Modal_modal__GRrbF",showModal:"Modal_showModal__Mf4Km",relativeWrapper:"Modal_relativeWrapper__wiKY6",closeButton:"Modal_closeButton__vWZzS",modalContents:"Modal_modalContents__qHWf0",active:"Modal_active__Tyxv4"}},2031:function(e){e.exports={scrollTo:"ScrollTo_scrollTo__u5leT"}},9127:function(e){e.exports={showOnScroll:"ShowOnScroll_showOnScroll__Y0g0H",hide:"ShowOnScroll_hide__aKDG1"}},138:function(e){e.exports={"select-button":"SelectButton_select-button__kw0HV",selected:"SelectButton_selected__ViZ5Z"}},8467:function(e){e.exports={"selected-work":"SelectedWork_selected-work__tppTF"}},1297:function(e){e.exports={work:"Work_work__ImslR",workHeader:"Work_workHeader__IYcEX",recommendations:"Work_recommendations__TOiVb",wrapper:"Work_wrapper__EIgxO",container:"Work_container__T4amM",select:"Work_select__x_f4s",info:"Work_info__xBgFJ",hide:"Work_hide__Y6Ipg"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);