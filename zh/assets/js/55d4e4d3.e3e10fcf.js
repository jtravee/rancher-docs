"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,f=m["".concat(s,".").concat(g)]||m[g]||l[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"ConfigMap",weight:3061},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",title:"ConfigMap",description:"\u5927\u591a\u6570 Kubernetes \u5bc6\u6587\u7528\u4e8e\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u4f46\u662f ConfigMap \u4f1a\u5b58\u50a8\u4e00\u822c\u914d\u7f6e\u4fe1\u606f\uff0c\u4f8b\u5982\u4e00\u7ec4\u914d\u7f6e\u6587\u4ef6\u3002\u7531\u4e8e ConfigMap \u4e0d\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u56e0\u6b64 ConfigMap \u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\uff0c\u4e0d\u9700\u8981\u5728\u66f4\u65b0\u540e\u91cd\u542f\u5176\u5bb9\u5668\uff08\u5176\u4ed6\u7c7b\u578b\u7684\u5bc6\u6587\u5927\u591a\u9700\u8981\u624b\u52a8\u66f4\u65b0\u548c\u91cd\u542f\u5bb9\u5668\u540e\u624d\u80fd\u751f\u6548\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"ConfigMap",weight:3061},sidebar:"tutorialSidebar",previous:{title:"\u52a0\u5bc6 HTTP \u901a\u4fe1",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},next:{title:"\u5bc6\u6587",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"}},c={},l=[{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}],m={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5927\u591a\u6570 Kubernetes \u5bc6\u6587\u7528\u4e8e\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u4f46\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"ConfigMap")," \u4f1a\u5b58\u50a8\u4e00\u822c\u914d\u7f6e\u4fe1\u606f\uff0c\u4f8b\u5982\u4e00\u7ec4\u914d\u7f6e\u6587\u4ef6\u3002\u7531\u4e8e ConfigMap \u4e0d\u5b58\u50a8\u654f\u611f\u4fe1\u606f\uff0c\u56e0\u6b64 ConfigMap \u53ef\u4ee5\u81ea\u52a8\u66f4\u65b0\uff0c\u4e0d\u9700\u8981\u5728\u66f4\u65b0\u540e\u91cd\u542f\u5176\u5bb9\u5668\uff08\u5176\u4ed6\u7c7b\u578b\u7684\u5bc6\u6587\u5927\u591a\u9700\u8981\u624b\u52a8\u66f4\u65b0\u548c\u91cd\u542f\u5bb9\u5668\u540e\u624d\u80fd\u751f\u6548\uff09\u3002"),(0,o.kt)("p",null,"ConfigMap \u63a5\u53d7\u5e38\u89c1\u5b57\u7b26\u4e32\u683c\u5f0f\u7684\u952e\u503c\u5bf9\uff0c\u4f8b\u5982\u914d\u7f6e\u6587\u4ef6\u6216 JSON Blob\u3002\u4e0a\u4f20\u914d\u7f6e\u6620\u5c04\u540e\uff0c\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u53ef\u4ee5\u5c06\u5176\u5f15\u7528\u4e3a\u73af\u5883\u53d8\u91cf\u6216\u5377\u6302\u8f7d\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u5177\u6709\u8981\u5f15\u7528 ConfigMap \u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > ConfigMaps"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165 ConfigMap \u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Kubernetes \u5c06 ConfigMap \u5f52\u7c7b\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"\u5bc6\u6587"),"\uff0c\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5bc6\u6587\u4e0d\u80fd\u91cd\u540d\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d\u51b2\u7a81\uff0cConfigMap \u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u8bc1\u4e66\u3001\u955c\u50cf\u4ed3\u5e93\u548c\u5bc6\u6587\u4e0d\u4e00\u6837\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u6dfb\u52a0 ConfigMap \u7684",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u6570\u636e"),"\u9009\u9879\u5361\u4e0a\uff0c\u5c06\u952e\u503c\u5bf9\u6dfb\u52a0\u5230\u4f60\u7684 ConfigMap\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u4efb\u610f\u6570\u91cf\u7684\u503c\u3002\u901a\u8fc7\u590d\u5236\u548c\u7c98\u8d34\u7684\u65b9\u5f0f\u5c06\u591a\u4e2a\u952e\u503c\u5bf9\u6dfb\u52a0\u5230 ConfigMap\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u6765\u6dfb\u52a0\u6570\u636e\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u8981\u5b58\u50a8\u654f\u611f\u6570\u636e\uff0c\u8bf7",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"\u4f7f\u7528\u5bc6\u6587"),"\uff0c\u4e0d\u8981\u4f7f\u7528 ConfigMap\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 ConfigMap \u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u7684",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6e90 > ConfigMaps")," \u89c6\u56fe\u4e2d\u67e5\u770b\u5b83\u3002"),(0,o.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u5c06 ConfigMap \u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230\u539f\u59cb\u547d\u540d\u7a7a\u95f4\u90e8\u7f72\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ConfigMap \u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5b89\u88c5\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5377\u7684\u53c2\u6570\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u5c06 ConfigMap \u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"))}g.isMDXComponent=!0}}]);