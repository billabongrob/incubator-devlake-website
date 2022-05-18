"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1777],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"RefDiff",description:"RefDiff Plugin\n"},u="RefDiff",s={unversionedId:"Plugins/refdiff",id:"Plugins/refdiff",title:"RefDiff",description:"RefDiff Plugin\n",source:"@site/docs/03-Plugins/refdiff.md",sourceDirName:"03-Plugins",slug:"/Plugins/refdiff",permalink:"/zh/docs/Plugins/refdiff",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/03-Plugins/refdiff.md",tags:[],version:"current",frontMatter:{title:"RefDiff",description:"RefDiff Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jira",permalink:"/zh/docs/Plugins/jira"},next:{title:"How to use Grafana",permalink:"/zh/docs/UserManuals/GRAFANA"}},c={},f=[{value:"Summary",id:"summary",level:2},{value:"Important Note",id:"important-note",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Development",id:"development",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"MacOs",id:"macos",level:3}],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refdiff"},"RefDiff"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"For development workload analysis, we often need to know how many commits have been created between 2 releases. This plugin offers the ability to calculate the commits of difference between 2 Ref(branch/tag), and the result will be stored back into database for further analysis."),(0,a.kt)("h2",{id:"important-note"},"Important Note"),(0,a.kt)("p",null,"You need to run gitextractor before the refdiff plugin. The gitextractor plugin should create records in the ",(0,a.kt)("inlineCode",{parentName:"p"},"refs")," table in your DB before this plugin can be run."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This is a enrichment plugin based on Domain Layer data, no configuration needed"),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"In order to trigger the enrichment, you need to insert a new task into your pipeline."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," are collected into your database, ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," table should contain records like following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id                                            ref_type\ngithub:GithubRepo:384111310:refs/tags/0.3.5   TAG\ngithub:GithubRepo:384111310:refs/tags/0.3.6   TAG\ngithub:GithubRepo:384111310:refs/tags/0.5.0   TAG\ngithub:GithubRepo:384111310:refs/tags/v0.0.1  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.2.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.3.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.4.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.1  TAG\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"If you want to run calculateIssuesDiff, please configure GITHUB_PR_BODY_CLOSE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,a.kt)("li",{parentName:"ol"},"If you want to run calculatePrCherryPick, please configure GITHUB_PR_TITLE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,a.kt)("li",{parentName:"ol"},"And then, trigger a pipeline like following, you can also define sub tasks, calculateRefDiff will calculate commits between two ref, and creatRefBugStats will create a table to show bug list between two ref:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -v -XPOST http://localhost:8080/pipelines --data @- <<\'JSON\'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:384111310",\n                    "pairs": [\n                       { "newRef": "refs/tags/v0.6.0", "oldRef": "refs/tags/0.5.0" },\n                       { "newRef": "refs/tags/0.5.0", "oldRef": "refs/tags/0.4.0" }\n                    ],\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\nJSON\n')),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"This plugin depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 in order to run and debug this plugin on your local\nmachine."),(0,a.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install cmake\ngit clone https://github.com/libgit2/libgit2.git\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,a.kt)("h3",{id:"macos"},"MacOs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,a.kt)("p",null,"Troubleshooting (MacOS)"),(0,a.kt)("p",null,"Q: I got an error saying: ",(0,a.kt)("inlineCode",{parentName:"p"},'pkg-config: exec: "pkg-config": executable file not found in $PATH')),(0,a.kt)("p",null,"A:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure you have pkg-config installed:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"brew install pkg-config"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure your pkg config path covers the installation: "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}d.isMDXComponent=!0}}]);