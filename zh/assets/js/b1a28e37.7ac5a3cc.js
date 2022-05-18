"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1404],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={slug:"deadlock-caused-by-using-ants",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",authors:"warren",tags:["devlake","ants"]},l=void 0,c={permalink:"/zh/blog/deadlock-caused-by-using-ants",source:"@site/blog/2022-04-30-deadlock-caused-by-using-ants/index.md",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",description:"1. \u80cc\u666f",date:"2022-04-30T00:00:00.000Z",formattedDate:"2022\u5e744\u670830\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"ants",permalink:"/zh/blog/tags/ants"}],readingTime:5.616666666666666,truncated:!0,authors:[{name:"\u9648\u6620\u521d",title:"DevLake\u8d21\u732e\u8005",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"deadlock-caused-by-using-ants",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",authors:"warren",tags:["devlake","ants"]},prevItem:{title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",permalink:"/zh/blog/how-apache-devlake-runs"}},s={authorsImageUrls:[void 0]},p=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u9879\u76ee\u6709\u5927\u91cf\u7684api\u8bf7\u6c42\u7531goroutine\u5b8c\u6210\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5f15\u5165\u4e00\u4e2apool\u6765\u8282\u7701\u9891\u7e41\u521b\u5efagoroutine\u6240\u9020\u6210\u7684\u7684\u5f00\u9500\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u66f4\u7b80\u6613\u7684\u8c03\u5ea6goroutine\uff0c\u5728\u5bf9github\u4e0a\u591a\u4e2a\u534f\u7a0b\u6c60\u7684\u5bf9\u6bd4\u540e\uff0c\u6211\u4eec\u6700\u7ec8\u9009\u5b9a\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://github.com/panjf2000/ants"},"ants"),"\u4f5c\u4e3a\u6211\u4eec\u7684\u8c03\u5ea6\u7ba1\u7406pool\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6700\u8fd1\u5728\u6d4b\u8bd5\u4e2d\u5076\u7136\u53d1\u73b0\u7cfb\u7edf\u51fa\u73b0\u4e86\u201c\u6b7b\u9501\u201d\u7684\u60c5\u51b5\uff0c\u8fdb\u800c\u91c7\u53d6\u65ad\u7f51\u7684\u65b9\u5f0f\u53d1\u73b0\u201c\u6b7b\u9501\u201d\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u662f\u7a33\u5b9a\u51fa\u73b0\uff0c\u7ecf\u8fc7\u6ee1\u7bc7\u7684log\uff0cbreak\uff0c\u6700\u7ec8\u628a\u95ee\u9898\u5b9a\u4f4d\u5230\u4e86ants\u7684submit\u65b9\u6cd5\u3002\u8fd9\u4e2a\u95ee\u9898\u6765\u81ea\u4e8e\u5728\u4f7f\u7528ants pool\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u5b9e\u73b0\u91cd\u8bd5\uff0c\u6211\u4eec\u5728\u65b9\u6cd5\u4e2d\u53c8\u9012\u5f52\u8c03\u7528\u4e86\u65b9\u6cd5\u672c\u8eab\uff0c\u4e5f\u5c31\u662fsubmit task\u5185\u90e8\u53c8submit\u4e00\u4e2atask\uff0c\u4e0b\u9762\u662f\u7b80\u5316\u540e\u7684\u4ee3\u7801\uff1a")))}m.isMDXComponent=!0}}]);