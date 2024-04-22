"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[168],{4934:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(9474),s=a(8923),r=a(2755),i=a(126),l=a(3787),o=a(3104),c=a(241),d=a(3178);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_Ap5e",sidebarItemTitle:"sidebarItemTitle_jdSn",sidebarItemList:"sidebarItemList_BFXL",sidebarItem:"sidebarItem_qsK0",sidebarItemLink:"sidebarItemLink_YTPz",sidebarItemLinkActive:"sidebarItemLinkActive_Yz_w"};var h=a(3274);function g(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,s.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,s.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,s.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(9829);function x(e){let{sidebar:t}=e;const a=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function f(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,h.jsx)(b,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function j(e){const{sidebar:t,toc:a,children:n,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.A,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(f,{sidebar:t}),(0,h.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},6538:(e,t,a)=>{a.d(t,{A:()=>I});a(9474);var n=a(8923),s=a(3024),r=a(3274);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(3787);const o={title:"title_PuJA"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,s.e)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(3104),m=a(4498),u=a(9365);const h={container:"container_FMoZ"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:a}=(0,s.e)(),{date:i,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(g,{readingTime:l})]})]});var c}function f(e){return e.href?(0,r.jsx)(l.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function j(e){let{author:t,className:a}=e;const{name:s,title:i,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(f,{href:d,children:(0,r.jsx)("span",{children:s})})}),i&&(0,r.jsx)("small",{className:"avatar__subtitle",children:i})]})]})}const v={authorCol:"authorCol_PcMD",imageOnlyAuthorRow:"imageOnlyAuthorRow_owUQ",imageOnlyAuthorCol:"imageOnlyAuthorCol_KGZW"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,s.e)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(b,{}),(0,r.jsx)(A,{})]})}var _=a(7481),U=a(6609);function y(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,s.e)();return(0,r.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(U.A,{children:t})})}var w=a(2120),k=a(1889),P=a(8442);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function B(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(T,{})})}function L(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:a})})}),e&&(0,r.jsx)(k.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,r.jsx)(P.A,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(B,{blogPostTitle:i,to:e.permalink})})]})}function I(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.A)(l,a),children:[(0,r.jsx)(N,{}),(0,r.jsx)(y,{children:t}),(0,r.jsx)(L,{})]})}},1889:(e,t,a)=>{a.d(t,{A:()=>x});a(9474);var n=a(8923),s=a(3104),r=a(2120),i=a(3787);const l={iconEdit:"iconEdit_v8i5"};var o=a(3274);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.A)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(i.A,{to:t,className:r.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var m=a(9365);function u(e){let{lastUpdatedAt:t}=e;const a=new Date(t),n=(0,m.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:n})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,o.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(u,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_a_NF"};function x(e){let{className:t,editUrl:a,lastUpdatedAt:s,lastUpdatedBy:r}=e;return(0,o.jsxs)("div",{className:(0,n.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(d,{editUrl:a})}),(0,o.jsx)("div",{className:(0,n.A)("col",p.lastUpdated),children:(s||r)&&(0,o.jsx)(g,{lastUpdatedAt:s,lastUpdatedBy:r})})]})}},8276:(e,t,a)=>{a.d(t,{A:()=>i});a(9474);var n=a(8923),s=a(3787),r=a(3274);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},8442:(e,t,a)=>{a.d(t,{A:()=>d});a(9474);var n=a(8923),s=a(3104),r=a(3787);const i={tag:"tag_QxeW",tagRegular:"tagRegular_t9ZT",tagWithCount:"tagWithCount_vvKW"};var l=a(3274);function o(e){let{permalink:t,label:a,count:s}=e;return(0,l.jsxs)(r.A,{href:t,className:(0,n.A)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const c={tags:"tags_QXby",tag:"tag__xWj"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(o,{label:t,permalink:a})},a)}))})]})}},3024:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>l});var n=a(9474),s=a(8557),r=a(3274);const i=n.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},9365:(e,t,a)=>{a.d(t,{i:()=>s});var n=a(707);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,n.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},7901:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(856),s=a(707),r=a(2292);var i=a(3024);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,h=n.image??s.image,g=s.keywords??[],p=`${t.url}${r.permalink}`,x=u?l(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:i,...x?{dateModified:x}:{},...o(r.authors),...c(h,a,d),...g?{keywords:g}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:m}=(0,n.h)(),{date:u,title:h,description:g,frontMatter:p,lastUpdatedAt:x}=a,b=t.image??p.image,f=p.keywords??[],j=x?l(x):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:h,name:h,description:g,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(b,m,h),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},4498:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(9474),s=a(707);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);