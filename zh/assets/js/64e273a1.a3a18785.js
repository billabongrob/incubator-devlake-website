"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6805],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(a),h=n,m=f["".concat(p,".").concat(h)]||f[h]||s[h]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6315:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],c={slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},p=void 0,i={permalink:"/zh/blog/how-apache-devlake-runs",source:"@site/blog/2022-05-18-how-apache-devlake-runs/index.md",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",description:"Apache DevLake \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002",date:"2022-05-18T00:00:00.000Z",formattedDate:"2022\u5e745\u670818\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"apache",permalink:"/zh/blog/tags/apache"}],readingTime:4.8,truncated:!0,authors:[{name:"\u9648\u6620\u521d",title:"DevLake\u8d21\u732e\u8005",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"how-apache-devlake-runs",title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",authors:"warren",tags:["devlake","apache"]},prevItem:{title:"DevLake \u52a0\u5165 Apache \u5b75\u5316\u5668\uff0c\u6765\u548c\u6211\u4eec\u4e00\u8d77\u73a9\u5f00\u6e90\uff01",permalink:"/zh/blog/apache-welcomes-devlake"},nextItem:{title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",permalink:"/zh/blog/deadlock-caused-by-using-ants"}},u={authorsImageUrls:[void 0]},s=[{value:"Apache DevLake \u67b6\u6784\u6982\u8ff0",id:"apache-devlake-\u67b6\u6784\u6982\u8ff0",level:3}],f={toc:s};function h(e){var t=e.components,c=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"Apache DevLake")," \u662f\u4e00\u4e2aDevOps\u6570\u636e\u6536\u96c6\u548c\u6574\u5408\u5de5\u5177\uff0c\u901a\u8fc7 Grafana \u4e3a\u5f00\u53d1\u56e2\u961f\u5448\u73b0\u51fa\u4e0d\u540c\u9636\u6bb5\u7684\u6570\u636e\uff0c\u8ba9\u56e2\u961f\u80fd\u591f\u4ee5\u6570\u636e\u4e3a\u9a71\u52a8\u6539\u8fdb\u5f00\u53d1\u6d41\u7a0b\u3002"),(0,o.kt)("h3",{id:"apache-devlake-\u67b6\u6784\u6982\u8ff0"},"Apache DevLake \u67b6\u6784\u6982\u8ff0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5de6\u8fb9\u662f",(0,o.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/DataModels/DataSupport"},"\u53ef\u96c6\u6210\u7684DevOps\u6570\u636e\u63d2\u4ef6"),"\uff0c\u76ee\u524d\u5df2\u6709\u7684\u63d2\u4ef6\u5305\u62ec Github\uff0cGitlab\uff0cJIRA\uff0cJenkins\uff0cTapd\uff0cFeishu \u4ee5\u53ca\u601d\u7801\u9038\u4e3b\u6253\u7684\u4ee3\u7801\u5206\u6790\u5f15\u64ce"),(0,o.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u662f\u4e3b\u4f53\u6846\u67b6\uff0c\u901a\u8fc7\u4e3b\u4f53\u6846\u67b6\u8fd0\u884c\u63d2\u4ef6\u4e2d\u7684\u5b50\u4efb\u52a1\uff0c\u5b8c\u6210\u6570\u636e\u7684\u6536\u96c6\uff0c\u6269\u5c55\uff0c\u5e76\u8f6c\u6362\u5230\u9886\u57df\u5c42\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 config-ui \u6216\u8005 api \u8c03\u7528\u7684\u5f62\u5f0f\u6765\u89e6\u53d1\u4efb\u52a1"),(0,o.kt)("li",{parentName:"ul"},"RMDBS \u76ee\u524d\u652f\u6301 Mysql \u548c PostgreSQL\uff0c\u540e\u671f\u8fd8\u4f1a\u7ee7\u7eed\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,o.kt)("li",{parentName:"ul"},"Grafana \u53ef\u4ee5\u901a\u8fc7sql\u8bed\u53e5\u751f\u6210\u56e2\u961f\u9700\u8981\u7684\u5404\u79cd\u6570\u636e")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generated",src:a(2324).Z,width:"567",height:"310"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u8be6\u7ec6\u804a\u4e00\u804a\u7cfb\u7edf\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684\u3002")))}h.isMDXComponent=!0},2324:function(e,t,a){t.Z=a.p+"assets/images/Aspose.Words.093a76ac-457b-4498-a472-7dbea580bca9.001-9fe996eee294ce1843bc3f126a1a7b89.png"}}]);