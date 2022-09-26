"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43804],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80651:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"\u5bc6\u6587",weight:3062},p=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",title:"\u5bc6\u6587",description:"\u5bc6\u6587\uff08secret\uff09\u5b58\u50a8\u654f\u611f\u6570\u636e\uff0c\u4f8b\u5982\u5bc6\u7801\u3001\u4ee4\u724c\u6216\u5bc6\u94a5\u3002\u5b83\u4eec\u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u952e\u503c\u5bf9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u5bc6\u6587",weight:3062},sidebar:"tutorialSidebar",previous:{title:"ConfigMap",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},next:{title:"Kubernetes \u955c\u50cf\u4ed3\u5e93\u548c Docker \u955c\u50cf\u4ed3\u5e93",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"}},l={},u=[],m={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets"},"\u5bc6\u6587\uff08secret\uff09"),"\u5b58\u50a8\u654f\u611f\u6570\u636e\uff0c\u4f8b\u5982\u5bc6\u7801\u3001\u4ee4\u724c\u6216\u5bc6\u94a5\u3002\u5b83\u4eec\u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u952e\u503c\u5bf9\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4ecb\u7ecd\u5bc6\u6587\u7684\u6982\u8ff0\u3002\u6709\u5173\u8bbe\u7f6e\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"\u955c\u50cf\u4ed3\u5e93"),"\u3002"))),(0,o.kt)("p",null,"\u914d\u7f6e\u5de5\u4f5c\u8d1f\u8f7d\u65f6\uff0c\u4f60\u80fd\u591f\u9009\u62e9\u8981\u5305\u542b\u7684\u5bc6\u6587\u3002\u4e0e ConfigMap \u4e00\u6837\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u5c06\u5bc6\u6587\u5f15\u7528\u4e3a\u73af\u5883\u53d8\u91cf\u6216\u5377\u6302\u8f7d\u3002"),(0,o.kt)("p",null,"\u9664\u975e\u4f5c\u4e3a\u5b50\u8def\u5f84\u5377\u6302\u8f7d\uff0c\u5426\u5219\u6302\u8f7d\u7684\u5bc6\u6587\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002\u6709\u5173\u5982\u4f55\u4f20\u64ad\u66f4\u65b0\u7684\u5bc6\u6587\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes \u6587\u6863"),"\u3002"),(0,o.kt)("h1",{id:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u5bc6\u6587"},"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u5bc6\u6587"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u5bc6\u6587\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u5bfc\u822a\u5230\u5bc6\u6587\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u521b\u5efa\u7684\u5bc6\u6587\u7c7b\u578b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u5bc6\u6587\u9009\u62e9\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u5bc6\u6587\u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Kubernetes \u5c06\u5bc6\u6587\u3001\u8bc1\u4e66\u548c\u955c\u50cf\u4ed3\u5e93\u90fd\u5f52\u7c7b\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587"),"\uff0c\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5bc6\u6587\u540d\u79f0\u4e0d\u80fd\u91cd\u590d\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u51b2\u7a81\uff0c\u5bc6\u6587\u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u5bc6\u6587\u4e0d\u4e00\u6837\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u6570\u636e"),"\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u6dfb\u52a0"),"\u4ee5\u6dfb\u52a0\u952e\u503c\u5bf9\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u4efb\u610f\u6570\u91cf\u7684\u503c\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u590d\u5236\u548c\u7c98\u8d34\u7684\u65b9\u5f0f\u5c06\u591a\u4e2a\u952e\u503c\u5bf9\u6dfb\u52a0\u5230\u5bc6\u6587\u4e2d\u3002"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(3684).Z,width:"1316",height:"618"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5bc6\u6587\u5df2\u6dfb\u52a0\u5230\u4f60\u9009\u62e9\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u6765\u67e5\u770b\u5bc6\u6587\u3002"),(0,o.kt)("p",null,"\u9664\u975e\u4f5c\u4e3a\u5b50\u8def\u5f84\u5377\u6302\u8f7d\uff0c\u5426\u5219\u6302\u8f7d\u7684\u5bc6\u6587\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002\u6709\u5173\u5982\u4f55\u4f20\u64ad\u66f4\u65b0\u7684\u5bc6\u6587\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#mounted-secrets-are-updated-automatically"},"Kubernetes \u6587\u6863"),"\u3002"),(0,o.kt)("h1",{id:"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u5bc6\u6587"},"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u5bc6\u6587"),(0,o.kt)("p",null,"\u5728 Rancher 2.6 \u4e4b\u524d\uff0c\u5bc6\u6587\u5fc5\u987b\u521b\u5efa\u5728\u9879\u76ee\u7ea7\u522b\u3002\u73b0\u5728\u4e0d\u518d\u9700\u8981\u9879\u76ee\u7ea7\u522b\uff0c\u4f60\u53ef\u4ee5\u91c7\u7528\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u3002\u56e0\u6b64\uff0cRancher UI \u8fdb\u884c\u4e86\u66f4\u65b0\u4ee5\u53cd\u6620\u8fd9\u4e00\u65b0\u529f\u80fd\u3002\u4f46\u662f\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u6309\u7167\u9700\u8981\u521b\u5efa\u9879\u76ee\u7ea7\u522b\u7684\u5bc6\u6587\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u5fc5\u987b\u5148\u542f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u65e7\u7248"),"\u529f\u80fd\u5f00\u5173\u5e76\u67e5\u770b\u5355\u4e2a\u9879\u76ee\u3002\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u8bbe\u7f6e\u4f60\u7684\u9879\u76ee\u7ea7\u522b\u5bc6\u6587\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5f00\u5173"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,o.kt)("inlineCode",{parentName:"li"},"\u65e7\u7248\u5e94\u7528"),"\u529f\u80fd\u5f00\u5173\u5e76\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u6fc0\u6d3b"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4e0a\u89d2\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u65e7\u7248 > \u9879\u76ee"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\u8fdb\u884c\u8fc7\u6ee4\uff0c\u4ece\u800c\u4ec5\u67e5\u770b\u4e00\u4e2a\u9879\u76ee\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5bc6\u6587"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5bc6\u6587"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5bc6\u6587\u5df2\u6dfb\u52a0\u5230\u4f60\u9009\u62e9\u7684\u9879\u76ee\u4e2d\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5bc6\u6587"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u6765\u67e5\u770b\u5bc6\u6587\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"local \u96c6\u7fa4\u4e0a\u7684\u9879\u76ee\u7ea7\u522b\u5bc6\u6587\u4ec5\u5728\u9009\u62e9\u5355\u4e2a\u9879\u76ee\u65f6\u53ef\u89c1\u3002"))),(0,o.kt)("h1",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u5c06\u5bc6\u6587\u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u90e8\u7f72\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u5c06\u5bc6\u6587\u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"))}d.isMDXComponent=!0},3684:function(e,t,n){t.Z=n.p+"assets/images/bulk-key-values-3ff8dab5306d78392fed06d2040b2377.gif"}}]);