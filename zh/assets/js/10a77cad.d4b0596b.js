"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97138],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(t),k=o,f=d["".concat(l,".").concat(k)]||d[k]||c[k]||a;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23648:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],u={title:"\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d"},l=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",title:"\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d",description:"\u5728\u8c03\u8bd5\u6216\u5347\u7ea7\u4e0d\u987a\u5229\u65f6\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5c06\u5e94\u7528\u7a0b\u5e8f\u56de\u6eda\u5230\u5148\u524d\u7684\u7248\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u56de\u6eda\u5de5\u4f5c\u8d1f\u8f7d"},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},next:{title:"\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"}},p={},c=[],d={toc:c};function k(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8c03\u8bd5\u6216\u5347\u7ea7\u4e0d\u987a\u5229\u65f6\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5c06\u5e94\u7528\u7a0b\u5e8f\u56de\u6eda\u5230\u5148\u524d\u7684\u7248\u672c\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u56de\u6eda\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u7136\u540e\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u56de\u6eda"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u56de\u6eda\u5230\u7684\u4fee\u8ba2\u7248\u3002\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u56de\u6eda"),"\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5df2\u6062\u590d\u5230\u4f60\u9009\u62e9\u7684\u5148\u524d\u7248\u672c\u3002\u7b49\u5f85\u51e0\u5206\u949f\u5f85\u64cd\u4f5c\u5b8c\u6210\u3002"))}k.isMDXComponent=!0}}]);