"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17379],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=i,m=l["".concat(c,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},83800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"6. \u751f\u6210\u548c\u67e5\u770b\u6d41\u91cf",weight:7},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"6. \u751f\u6210\u548c\u67e5\u770b\u6d41\u91cf",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b Istio \u7ba1\u7406\u7684\u6d41\u91cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"6. \u751f\u6210\u548c\u67e5\u770b\u6d41\u91cf",weight:7},sidebar:"tutorialSidebar",previous:{title:"5. \u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS \u626b\u63cf\u6307\u5357",permalink:"/zh/pages-for-subheaders/cis-scan-guides"}},d={},p=[],l={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b Istio \u7ba1\u7406\u7684\u6d41\u91cf\u3002"),(0,a.kt)("h1",{id:"kiali-\u6d41\u91cf\u56fe"},"Kiali \u6d41\u91cf\u56fe"),(0,a.kt)("p",null,"Istio \u6982\u89c8\u9875\u9762\u63d0\u4f9b\u4e86 Kiali \u4eea\u8868\u677f\u7684\u94fe\u63a5\u3002\u5728 Kiali \u4eea\u8868\u677f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u56fe\u3002Kiali \u56fe\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f3a\u5927\u7684\u65b9\u5f0f\u6765\u53ef\u89c6\u5316 Istio \u670d\u52a1\u7f51\u683c\u7684\u62d3\u6251\u3002\u5b83\u663e\u793a\u4e86\u670d\u52a1\u4e4b\u95f4\u76f8\u4e92\u901a\u4fe1\u7684\u60c5\u51b5\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8981\u663e\u793a\u6d41\u91cf\u56fe\uff0c\u8bf7\u786e\u4fdd\u4f60\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5\u4e86 Prometheus\u3002Rancher-istio \u5b89\u88c5\u4e86\u9ed8\u8ba4\u914d\u7f6e\u7684 Kiali \u6765\u4e0e rancher-monitoring Chart \u4e00\u8d77\u5de5\u4f5c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 rancher-monitoring \u6216\u5b89\u88c5\u81ea\u5df1\u7684\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"\u9009\u62e9\u5668 & \u6293\u53d6\u914d\u7f6e"),"\u9009\u9879\u6765\u66f4\u6539\u6570\u636e\u6293\u53d6\u7684\u914d\u7f6e\uff08\u53ef\u9009\uff09\u3002"))),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u6d41\u91cf\u56fe\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5b89\u88c5\u4e86 Istio \u7684\u96c6\u7fa4\u4e2d\uff0c\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"li"},"Istio"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Kiali")," \u94fe\u63a5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4fa7\u5bfc\u822a\u4e2d\u7684",(0,a.kt)("strong",{parentName:"li"},"\u56fe"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u66f4\u6539\u547d\u540d\u7a7a\u95f4\u4ee5\u67e5\u770b\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u6d41\u91cf\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u591a\u6b21\u5237\u65b0 BookInfo \u5e94\u7528\u7684 URL\uff0c\u4f60\u5c06\u80fd\u591f\u5728 Kiali \u56fe\u4e0a\u770b\u5230\u7eff\u8272\u7bad\u5934\uff0c\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"reviews")," \u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"v3")," \u7684\u6d41\u91cf\u3002\u56fe\u53f3\u4fa7\u7684\u63a7\u5236\u9762\u677f\u53ef\u7528\u4e8e\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u5e94\u5728\u56fe\u4e0a\u663e\u793a\u591a\u5c11\u5206\u949f\u7684\u6700\u65b0\u6d41\u91cf\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u5de5\u5177\u548c\u53ef\u89c6\u5316\uff0c\u4f60\u53ef\u4ee5\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u76d1\u63a7")," > ",(0,a.kt)("strong",{parentName:"p"},"\u6982\u89c8"),"\u9875\u9762\u8f6c\u5230 Grafana \u548c Prometheus \u4eea\u8868\u677f\u3002"))}f.isMDXComponent=!0}}]);