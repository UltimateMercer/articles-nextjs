(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(878)}])},6899:function(e,t,r){"use strict";var a=r(5893),n=r(7294);r(5675);var s=r(1664),i=r.n(s),c=r(9145),l=r(8453);let o=e=>{let{document:t,authors:r,isFeatured:s=!1}=e,[o,d]=(0,n.useState)(!1);return(0,n.useEffect)(()=>d(!0),[]),(0,a.jsxs)("div",{className:"card card-background hover:hover-card !rounded-2xl hover:hover-card-uv hover:dark:hover-card-neon-yellow",children:[(0,a.jsx)("img",{src:t.cover?t.cover:t.imageHeader,className:"!rounded-2xl ".concat(t.filter," ").concat(s?"card-background-image-featured":"card-background-image"),alt:"".concat(t.title," image")}),(0,a.jsxs)("div",{className:"card-img-overlay flex flex-col justify-end",children:[(0,a.jsx)("div",{className:"flex items-center mb-2 leading-normal !text-base",children:(0,a.jsx)("span",{className:"marker-line !py-1 bg-dark text-light capitalize font-medium",children:t.channel})}),(0,a.jsx)(i(),{className:"",href:"/articles/".concat(t.slug),children:(0,a.jsx)("h3",{className:"card-title text-2xl",children:(0,a.jsx)("span",{className:"marker-line bg-dark text-light !py-1 hover:underline underline-offset-1",children:t.title})})}),(0,a.jsxs)("div",{className:"flex",children:[r.map(e=>(0,a.jsx)("div",{className:"flex items-center my-1",children:(0,a.jsxs)("div",{className:"flex-shrink-0",children:[(0,a.jsx)("img",{id:"anchor-".concat(e.slug,"-").concat(t.slug),src:e.avatar,className:"w-10 h-10 object-cover rounded-full border border-dark mr-2",alt:"".concat(e.name," avatar")}),o&&(0,a.jsx)(c.u,{anchorId:"anchor-".concat(e.slug,"-").concat(t.slug),content:"Por: ".concat(e.name),place:"right"})]})},e.name)),(0,a.jsx)("div",{className:"flex items-center my-1",children:(0,a.jsx)("span",{className:"text-light text-base font-medium bg-dark capitalize tracking-wide !py-1",children:(0,a.jsx)("span",{className:"marker-line",children:(0,a.jsx)(l.Z,{date:t.date})})})}),(0,a.jsx)("div",{className:"flex flex-1 items-center",children:(0,a.jsx)(i(),{className:"ml-auto",href:"/articles/".concat(t.slug),children:(0,a.jsx)("button",{className:"tracking-wider text-light dark:text-dark bg-uv-500 dark:bg-neon-yellow-500 hover:ring-2 ring-uv-300 dark:ring-neon-yellow-200 py-1 px-3 rounded font-medium transition-all !text-base",children:"Ler mais..."})})})]})]})]})};t.Z=o},8453:function(e,t,r){"use strict";var a=r(5893);r(7294);var n=r(3621),s=r(9081);let i=e=>{let{date:t,fulldate:r=!1,fulltimestamp:i=!1}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("span",{children:[r&&(0,n.Z)(new Date(t),"dd 'de' MMMM 'de' yyyy'",{locale:s.Z})," ",i&&(0,n.Z)(new Date(t),"dd 'de' MMMM 'de' yyyy', \xe0s' H:mm",{locale:s.Z}),!r&&!i&&(0,n.Z)(new Date(t),"dd MMM yyyy",{locale:s.Z})]})})};t.Z=i},2815:function(e,t,r){"use strict";var a=r(5893),n=r(1664),s=r.n(n);let i=e=>{let{href:t,...r}=e,n=t&&t.startsWith("/"),i=t&&t.startsWith("#");return n?(0,a.jsx)(s(),{href:t,children:(0,a.jsx)("a",{...r})}):i?(0,a.jsx)("a",{href:t,...r}):(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...r})};t.Z=i},6200:function(e,t,r){"use strict";r.d(t,{TQ:function(){return d},es:function(){return m}});var a=r(5893),n=r(9008),s=r.n(n),i=r(1163),c=r(1576),l=r.n(c);let o=e=>{let{title:t,description:r,ogType:n,ogImage:c,twImage:o,canonicalUrl:d}=e,m=(0,i.useRouter)();return(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(l().siteUrl).concat(m.asPath)}),(0,a.jsx)("meta",{property:"og:type",content:n}),(0,a.jsx)("meta",{property:"og:site_name",content:l().title}),(0,a.jsx)("meta",{property:"og:description",content:r}),(0,a.jsx)("meta",{property:"og:title",content:t}),"Array"===c.constructor.name?c.map(e=>{let{url:t}=e;return(0,a.jsx)("meta",{property:"og:image",content:t},t)}):(0,a.jsx)("meta",{property:"og:image",content:c},c),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:l().twitter}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:r}),(0,a.jsx)("meta",{name:"twitter:image",content:o}),(0,a.jsx)("link",{rel:"canonical",href:d||"".concat(l().siteUrl).concat(m.asPath)})]})},d=e=>{let{title:t,description:r}=e,n=l().siteUrl+l().socialBanner,s=l().siteUrl+l().socialBanner;return(0,a.jsx)(o,{title:t,description:r,ogType:"website",ogImage:n,twImage:s})},m=e=>{let t,{authorDetails:r,title:n,description:c,date:d,modifiedDate:m,url:u,images:x=[],cover:g,canonicalUrl:h}=e;(0,i.useRouter)();let p=new Date(d).toISOString(),j=new Date(m||d).toISOString(),y=0===x.length?[l().socialBanner]:"string"==typeof x?[x]:x,f=y.map(e=>({"@type":"ImageObject",url:e.includes("http")?e:l().siteUrl+e}));t=r?r.map(e=>({"@type":"Person",name:e.name})):{"@type":"Person",name:l().author};let b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:n,image:f,datePublished:p,dateModified:j,author:t,publisher:{"@type":"Organization",name:l().author,logo:{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(l().siteLogo)}},description:c},v=f[0].url;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{title:n,description:c,ogType:"article",ogImage:f,twImage:v,canonicalUrl:h}),(0,a.jsxs)(s(),{children:[d&&(0,a.jsx)("meta",{property:"article:published_time",content:p}),m&&(0,a.jsx)("meta",{property:"article:modified_time",content:j}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},6720:function(e,t,r){"use strict";r(5893),r(1664),r(9671)},1576:function(e){"use strict";e.exports={title:"Ultimate Mercer - Articles NextJS",author:"Ultimate Mercer",headerTitle:"Ultimate Mercer - Articles NextJS",description:"Testing NextJS",language:"pt-BR",theme:"system",siteUrl:"https://ultimatemercer.com/articles-nextjs/",siteLogo:"/images/ultimate-mercer-thumb.jpg",image:"/images/ultimate-mercer-thumb.jpg",socialBanner:"/images/ultimate-mercer-thumb.jpg",email:"address@yoursite.com",github:"https://github.com",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"pt-BR"}},878:function(e,t,r){"use strict";r.r(t),r.d(t,{ARTICLES_PER_PAGE:function(){return m},__N_SSG:function(){return d},default:function(){return x}});var a=r(5893);r(9008),r(5675),r(1664);var n=r(6200);r(2010);var s=r(6899);r(2815),r(6720);var i=r(1576),c=r.n(i),l=r(7294);let o=e=>{let{documents:t,initialDisplayDocuments:r=[],pagination:n}=e,[i,c]=(0,l.useState)(""),o=t.filter(e=>{let t=e.document.title+e.document.description;return t.toLowerCase().includes(i.toLowerCase())}),d=r.length>0&&!i?r:o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"space-y-2 pb-8 md:space-y-5",children:(0,a.jsx)("div",{className:"flex justify-center mb-4",children:(0,a.jsxs)("div",{className:"relative max-w-lg flex-1",children:[(0,a.jsx)("input",{"aria-label":"Pesquisar artigos",type:"text",onChange:e=>c(e.target.value),placeholder:"Pesquisar artigos",className:"block w-full rounded-md border border-gray-300 bg-light px-4 py-2 text-dark focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,a.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})})}),(0,a.jsxs)("div",{className:"px-10 pb-6",children:[!o.length&&(0,a.jsx)("h1",{className:"text-center font-bold text-7xl my-14",children:"Nenhum artigo encontrado!"}),(0,a.jsx)("div",{className:"grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4",children:d.map(e=>(0,a.jsx)(s.Z,{document:e.document,authors:e.authorDetails,isFeatured:!0},e.document.slug))})]})]})};var d=!0;let m=25,u=e=>{let{documents:t,initialDisplayDocuments:r,pagination:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.TQ,{title:c().title,description:c().description}),(0,a.jsxs)("section",{className:"background-texture",children:[(0,a.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.jsx)("h1",{className:"text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-7xl md:leading-14",children:"Articles"})}),(0,a.jsx)(o,{documents:t,initialDisplayDocuments:r,pagination:s})]})]})};var x=u}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);