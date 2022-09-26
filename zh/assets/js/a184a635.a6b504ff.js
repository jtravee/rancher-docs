"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24494],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||p;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],o={title:"\u6982\u5ff5",weight:1},c=void 0,l={unversionedId:"reference-guides/pipelines/concepts",id:"reference-guides/pipelines/concepts",title:"\u6982\u5ff5",description:"\u672c\u6587\u89e3\u91ca\u4e0e\u6d41\u6c34\u7ebf\u76f8\u5173\u7684\u5e38\u89c1\u6982\u5ff5\u548c\u672f\u8bed\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/pipelines/concepts.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/concepts",permalink:"/zh/reference-guides/pipelines/concepts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/pipelines/concepts.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u6982\u5ff5",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u6c34\u7ebf",permalink:"/zh/pages-for-subheaders/pipelines"},next:{title:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference-guides/pipelines/pipeline-configuration"}},u={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u672c\u6587\u89e3\u91ca\u4e0e\u6d41\u6c34\u7ebf\u76f8\u5173\u7684\u5e38\u89c1\u6982\u5ff5\u548c\u672f\u8bed\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6d41\u6c34\u7ebf"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," ",(0,p.kt)("em",{parentName:"p"},"\u6d41\u6c34\u7ebf")," \u662f\u4e00\u4e2a\u8f6f\u4ef6\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u5b83\u88ab\u5206\u6210\u4e0d\u540c\u7684\u9636\u6bb5\u548c\u6b65\u9aa4\u3002\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u9ad8\u6548\u5730\u4e0a\u7ebf\u65b0\u8f6f\u4ef6\u3002Rancher \u652f\u6301\u7ed9\u6bcf\u4e2a\u9879\u76ee\u5355\u72ec\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u3002\u6d41\u6c34\u7ebf\u57fa\u4e8e\u7279\u5b9a\u7684\u4ed3\u5e93\u3002\u5b83\u5b9a\u4e49\u4e86\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u4ee3\u7801\u7684\u8fc7\u7a0b\u3002Rancher \u4f7f\u7528\u7684\u662f",(0,p.kt)("a",{parentName:"p",href:"https://jenkins.io/doc/book/pipeline-as-code/"},"\u6d41\u6c34\u7ebf\u5373\u4ee3\u7801"),"\u6a21\u578b\u3002\u5728\u6e90\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u6d41\u6c34\u7ebf\u914d\u7f6e\u4ee5\u6d41\u6c34\u7ebf\u6587\u4ef6\u8868\u793a\uff0c\u6587\u4ef6\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u9636\u6bb5"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u4e00\u4e2a\u6d41\u6c34\u7ebf\u9636\u6bb5\u7531\u591a\u4e2a\u6b65\u9aa4\u7ec4\u6210\u3002\u9636\u6bb5\u6309\u7167\u6d41\u6c34\u7ebf\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u987a\u5e8f\u6267\u884c\u3002\u4e00\u4e2a\u9636\u6bb5\u4e2d\u7684\u6b65\u9aa4\u662f\u540c\u65f6\u6267\u884c\u7684\u3002\u53ea\u6709\u4e0a\u4e00\u4e2a\u9636\u6bb5\u4e2d\u7684\u6240\u6709\u6b65\u9aa4\u90fd\u5b8c\u6210\u4e14\u6ca1\u6709\u5931\u8d25\u65f6\uff0c\u4e0b\u4e00\u4e2a\u9636\u6bb5\u624d\u4f1a\u5f00\u59cb\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6b65\u9aa4"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u6d41\u6c34\u7ebf\u6b65\u9aa4\u5728\u6307\u5b9a\u9636\u6bb5\u5185\u6267\u884c\u3002\u5982\u679c\u4e00\u4e2a\u6b65\u9aa4\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," \u4ee5\u5916\u7684\u4ee3\u7801\u9000\u51fa\uff0c\u5219\u8be5\u6b65\u9aa4\u5931\u8d25\u4e86\u3002\u5982\u679c\u67d0\u4e2a\u6b65\u9aa4\u4ee5\u6b64\u5931\u8d25\u4ee3\u7801\u9000\u51fa\uff0c\u5219\u6574\u4e2a\u6d41\u6c34\u7ebf\u5c06\u5931\u8d25\u5e76\u7ec8\u6b62\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u7a7a\u95f4"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u5de5\u4f5c\u7a7a\u95f4\u662f\u6240\u6709\u6d41\u6c34\u7ebf\u6b65\u9aa4\u5171\u4eab\u7684\u5de5\u4f5c\u76ee\u5f55\u3002\u5728\u6d41\u6c34\u7ebf\u5f00\u59cb\u65f6\uff0c\u6e90\u4ee3\u7801\u4f1a\u88ab\u68c0\u51fa\u5230\u5de5\u4f5c\u7a7a\u95f4\u3002\u6bcf\u4e2a\u6b65\u9aa4\u7684\u547d\u4ee4\u90fd\u4f1a\u5728\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u542f\u52a8\u3002\u5728\u6d41\u6c34\u7ebf\u6267\u884c\u671f\u95f4\uff0c\u4e0a\u4e00\u6b65\u9aa4\u7684\u5de5\u4ef6\u5c06\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u4f7f\u7528\u3002\u5de5\u4f5c\u76ee\u5f55\u662f\u4e00\u4e2a\u4e34\u65f6\u5377\uff0c\u5c06\u5728\u6d41\u6c34\u7ebf\u6267\u884c\u5b8c\u6210\u65f6\u4f7f\u7528 executor pod \u8fdb\u884c\u6e05\u7406\u3002"))),(0,p.kt)("p",null,"\u901a\u5e38\uff0c\u6d41\u6c34\u7ebf\u9636\u6bb5\u5305\u62ec\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Build"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u6bcf\u6b21\u5c06\u4ee3\u7801\u7b7e\u5165\u4ed3\u5e93\u65f6\uff0c\u6d41\u6c34\u7ebf\u90fd\u4f1a\u81ea\u52a8\u514b\u9686\u4ed3\u5e93\u5e76\u6784\u5efa\u8f6f\u4ef6\u7684\u65b0\u8fed\u4ee3\u3002\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u8f6f\u4ef6\u901a\u5e38\u901a\u8fc7\u81ea\u52a8\u5316\u6d4b\u8bd5\u8fdb\u884c\u5ba1\u67e5\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Publish"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u6784\u5efa\u5b8c\u6210\u540e\uff0c\u5c06\u6784\u5efa Docker \u955c\u50cf\u5e76\u5c06\u5176\u53d1\u5e03\u5230 Docker \u955c\u50cf\u4ed3\u5e93\uff0c\u6216\u53d1\u5e03\u5546\u5e97\u5e94\u7528\u6a21\u677f\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Deploy"),"\uff1a"),(0,p.kt)("p",{parentName:"li"}," \u53d1\u5e03\u5de5\u4ef6\u540e\uff0c\u4f60\u5c06\u53d1\u5e03\u4f60\u7684\u5e94\u7528\uff0c\u4ee5\u4fbf\u7528\u6237\u5f00\u59cb\u4f7f\u7528\u66f4\u65b0\u540e\u7684\u4ea7\u54c1\u3002"))))}f.isMDXComponent=!0}}]);