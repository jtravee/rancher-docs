"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],c={title:"\u6dfb\u52a0 TLS \u5bc6\u6587",weight:2},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"\u6dfb\u52a0 TLS \u5bc6\u6587",description:"\u6211\u4eec\u4f7f\u7528\u8bc1\u4e66\u548c\u5bc6\u94a5\u5c06 cattle-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 tls-rancher-ingress \u5bc6\u6587\u914d\u7f6e\u597d\u540e\uff0cKubernetes \u4f1a\u4e3a Rancher \u521b\u5efa\u5bf9\u8c61\u548c\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u6dfb\u52a0 TLS \u5bc6\u6587",weight:2},sidebar:"tutorialSidebar",previous:{title:"Helm \u7248\u672c\u8981\u6c42",permalink:"/zh/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66",permalink:"/zh/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u8bc1\u4e66\u548c\u5bc6\u94a5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\u914d\u7f6e\u597d\u540e\uff0cKubernetes \u4f1a\u4e3a Rancher \u521b\u5efa\u5bf9\u8c61\u548c\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u9700\u7684\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt"),"\u7684\u6587\u4ef6\u4e2d\u3002\u5c06\u8bc1\u4e66\u5bc6\u94a5\u590d\u5236\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," \u6587\u4ef6\u4e2d\u63d0\u4f9b\u670d\u52a1\u5668\u8bc1\u4e66\u548c CA \u94fe\u3002\n\u8bf7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," \u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.crt"),"\uff0c\u5c06\u8bc1\u4e66\u5bc6\u94a5\u6587\u4ef6\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.key"),"\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," \u7c7b\u578b\u7684\u5bc6\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u9700\u66ff\u6362\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," \u6765\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\uff0c\u7136\u540e\u8fd0\u884c\u4e0a\u65b9\u547d\u4ee4\u6765\u6dfb\u52a0\u65b0\u7684\u5bc6\u6587\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA \u7b7e\u540d\u8bc1\u4e66\uff0c\u4ec5\u5f53\u65b0\u8bc1\u4e66\u4e0e\u5f53\u524d\u8bc1\u4e66\u662f\u7531\u540c\u4e00\u4e2a CA \u7b7e\u53d1\u7684\uff0c\u624d\u53ef\u4ee5\u66ff\u6362\u3002"))),(0,i.kt)("h1",{id:"\u4f7f\u7528\u79c1\u6709-ca-\u7b7e\u540d\u8bc1\u4e66"},"\u4f7f\u7528\u79c1\u6709 CA \u7b7e\u540d\u8bc1\u4e66"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA\uff0cRancher \u9700\u8981\u4f60\u63d0\u4f9b CA \u8bc1\u4e66\u7684\u526f\u672c\uff0c\u7528\u6765\u6821\u9a8c Rancher Agent \u4e0e Server \u7684\u8fde\u63a5\u3002"),(0,i.kt)("p",null,"\u5c06 CA \u8bc1\u4e66\u62f7\u8d1d\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u7684\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rancher \u542f\u52a8\u65f6\u4f1a\u68c0\u7d22\u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\u3002\u5982\u679c Rancher \u5728\u8fd0\u884c\u4e2d\uff0c\u66f4\u65b0\u7684 CA \u4f1a\u5728\u65b0\u7684 Rancher Pod \u542f\u52a8\u540e\u751f\u6548\u3002"))),(0,i.kt)("h1",{id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66"},"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66"),(0,i.kt)("p",null,"\u6309\u7167",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"\u6b65\u9aa4"),"\u66f4\u65b0 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Rancher \u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5"),"\u4e2d\u7684 Ingress\uff0c\u6216\u4ece\u9ed8\u8ba4\u81ea\u7b7e\u540d\u8bc1\u4e66\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u8bc1\u4e66\u3002"))}m.isMDXComponent=!0}}]);