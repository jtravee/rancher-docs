"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14168],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(r),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],u={title:"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d",weight:3028},p=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",title:"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d",description:"\u5982\u679c Docker Hub \u53d1\u5e03\u65b0\u7248\u672c\u7684\u5e94\u7528\u7a0b\u5e8f\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd0\u884c\u65e7\u7248\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5347\u7ea7\u5230\u65b0\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d",weight:3028},sidebar:"tutorialSidebar",previous:{title:"\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},next:{title:"\u6dfb\u52a0 Sidecar",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"}},l={},d=[],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c Docker Hub \u53d1\u5e03\u65b0\u7248\u672c\u7684\u5e94\u7528\u7a0b\u5e8f\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd0\u884c\u65e7\u7248\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5347\u7ea7\u5230\u65b0\u7248\u672c\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u5347\u7ea7\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u66f4\u65b0",(0,a.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u955c\u50cf"),"\u548c\u8981\u66f4\u6539\u7684\u9009\u9879\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u548c\u7f16\u8f91\u5de5\u4f5c\u8d1f\u8f7d\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6269\u5c55/\u5347\u7ea7\u7b56\u7565"),"\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u9009\u9879\u80fd\u63a7\u5236\u5347\u7ea7\u5982\u4f55\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e2d\u8fdb\u884c\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u53ef\u6269\u5c55\u7684 deployment\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u8981\u5728\u90e8\u7f72\u65b0 Pod \u4e4b\u524d\u505c\u6b62\u65e7 Pod\uff0c\u4ee5\u53ca\u9009\u62e9\u5347\u7ea7\u7684\u6279\u6570\u91cf\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u6839\u636e\u4f60\u7684\u8bbe\u7f6e\u6765\u5347\u7ea7\u5bb9\u5668\u3002\u8bf7\u6ce8\u610f\uff0c\u6269\u5c55 deployment \u6216\u66f4\u65b0\u5347\u7ea7/\u6269\u5c55\u7b56\u7565\u4e0d\u4f1a\u5bfc\u81f4 Pod \u91cd\u65b0\u521b\u5efa\u3002"))}m.isMDXComponent=!0}}]);