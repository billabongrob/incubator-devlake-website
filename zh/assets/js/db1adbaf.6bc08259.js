"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3502],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"Architecture",linkTitle:"Architecture",description:"Understand the architecture of Apache DevLake.\n"},l=void 0,u={unversionedId:"Overview/Architecture",id:"Overview/Architecture",title:"Architecture",description:"Understand the architecture of Apache DevLake.\n",source:"@site/docs/01-Overview/02-Architecture.md",sourceDirName:"01-Overview",slug:"/Overview/Architecture",permalink:"/zh/docs/Overview/Architecture",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/01-Overview/02-Architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Architecture",linkTitle:"Architecture",description:"Understand the architecture of Apache DevLake.\n"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/zh/docs/Overview/WhatIsDevLake"},next:{title:"Roadmap",permalink:"/zh/docs/Overview/Roadmap"}},p={},s=[{value:"Stack (from low to high)",id:"stack-from-low-to-high",level:2},{value:"Rules",id:"rules",level:2}],d={toc:s};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"devlake-architecture",src:r(5652).Z,width:"1678",height:"918"})),(0,o.kt)("p",{align:"center"},"Architecture Diagram (data-flow perspective)"),(0,o.kt)("h2",{id:"stack-from-low-to-high"},"Stack (from low to high)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"config"),(0,o.kt)("li",{parentName:"ol"},"logger"),(0,o.kt)("li",{parentName:"ol"},"models"),(0,o.kt)("li",{parentName:"ol"},"plugins"),(0,o.kt)("li",{parentName:"ol"},"services"),(0,o.kt)("li",{parentName:"ol"},"api / cli")),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Higher layer calls lower layer, not the other way around"),(0,o.kt)("li",{parentName:"ol"},"Whenever lower layer neeeds something from higher layer, a interface should be introduced for decoupling"),(0,o.kt)("li",{parentName:"ol"},"Components should be initialized in a low to high order during bootstraping",(0,o.kt)("br",null))))}f.isMDXComponent=!0},5652:function(e,t,r){t.Z=r.p+"assets/images/arch-dataflow-c306f6d68990c80c3dc6648c23b97c22.svg"}}]);