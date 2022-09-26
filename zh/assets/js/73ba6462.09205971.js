"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92440],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"5. \u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6",weight:6},p=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",id:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",title:"5. \u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6",description:"Istio \u4e2d\u6d41\u91cf\u7ba1\u7406\u7684\u4e00\u4e2a\u6838\u5fc3\u4f18\u52bf\u662f\u5141\u8bb8\u52a8\u6001\u8bf7\u6c42\u8def\u7531\u3002\u52a8\u6001\u8bf7\u6c42\u8def\u7531\u901a\u5e38\u5e94\u7528\u4e8e\u91d1\u4e1d\u96c0\u90e8\u7f72\u548c\u84dd/\u7eff\u90e8\u7f72\u7b49\u3002Istio \u6d41\u91cf\u7ba1\u7406\u4e2d\u7684\u4e24\u4e2a\u5173\u952e\u8d44\u6e90\u662f\u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"5. \u8bbe\u7f6e Istio \u7684\u6d41\u91cf\u7ba1\u7406\u7ec4\u4ef6",weight:6},sidebar:"tutorialSidebar",previous:{title:"4. \u8bbe\u7f6e Istio Gateway",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},next:{title:"6. \u751f\u6210\u548c\u67e5\u770b\u6d41\u91cf",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"}},u={},c=[{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Istio \u4e2d\u6d41\u91cf\u7ba1\u7406\u7684\u4e00\u4e2a\u6838\u5fc3\u4f18\u52bf\u662f\u5141\u8bb8\u52a8\u6001\u8bf7\u6c42\u8def\u7531\u3002\u52a8\u6001\u8bf7\u6c42\u8def\u7531\u901a\u5e38\u5e94\u7528\u4e8e\u91d1\u4e1d\u96c0\u90e8\u7f72\u548c\u84dd/\u7eff\u90e8\u7f72\u7b49\u3002Istio \u6d41\u91cf\u7ba1\u7406\u4e2d\u7684\u4e24\u4e2a\u5173\u952e\u8d44\u6e90\u662f",(0,i.kt)("em",{parentName:"p"},"\u865a\u62df\u670d\u52a1"),"\u548c",(0,i.kt)("em",{parentName:"p"},"\u76ee\u6807\u89c4\u5219"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"\u865a\u62df\u670d\u52a1"),"\uff1a\u62e6\u622a\u5e76\u5c06\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u4f60\u7684 Kubernetes Service \u4e0a\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u5c06\u90e8\u5206\u8bf7\u6c42\u6d41\u91cf\u5206\u914d\u5230\u4e0d\u540c\u7684\u670d\u52a1\u4e0a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u670d\u52a1\u6765\u5b9a\u4e49\u4e00\u7ec4\u8def\u7531\u89c4\u5219\uff0c\u7528\u4e8e\u4e3b\u673a\u5bfb\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/"},"\u76ee\u6807\u89c4\u5219"),"\uff1a\u4f5c\u4e3a\u552f\u4e00\u53ef\u4fe1\u6765\u6e90\uff0c\u8868\u660e\u54ea\u4e9b\u670d\u52a1\u7248\u672c\u53ef\u7528\u4e8e\u63a5\u6536\u865a\u62df\u670d\u52a1\u7684\u6d41\u91cf\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u6765\u5b9a\u4e49\u7b56\u7565\uff0c\u8fd9\u4e9b\u7b56\u7565\u9002\u7528\u4e8e\u8def\u7531\u53d1\u751f\u540e\u7528\u4e8e\u670d\u52a1\u7684\u6d41\u91cf\u3002")),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u793a\u4f8b BookInfo \u5e94\u7528\u4e2d\u6dfb\u52a0\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," \u5fae\u670d\u52a1\u5bf9\u5e94\u7684\u865a\u62df\u670d\u52a1\u793a\u4f8b\u3002\u6b64\u670d\u52a1\u7684\u76ee\u7684\u662f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," \u670d\u52a1\u7684\u4e24\u4e2a\u7248\u672c\u4e4b\u95f4\u5212\u5206\u6d41\u91cf\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u6d41\u91cf\u5e26\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," \u670d\u52a1\u4e2d\u5e76\u62e6\u622a\u6d41\u91cf\uff0c\u8fd9\u6837\uff0c50% \u7684\u6d41\u91cf\u4f1a\u6d41\u5411\u670d\u52a1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),"\uff0c\u53e6\u5916 50% \u7684\u6d41\u91cf\u4f1a\u6d41\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"v2 "),"\u3002"),(0,i.kt)("p",null,"\u90e8\u7f72\u8fd9\u4e2a\u865a\u62df\u670d\u52a1\u540e\uff0c\u6211\u4eec\u5c06\u751f\u6210\u6d41\u91cf\uff0c\u5e76\u901a\u8fc7 Kiali \u53ef\u89c6\u5316\u770b\u5230\u6d41\u91cf\u5e73\u5747\u8def\u7531\u5230\u670d\u52a1\u7684\u4e24\u4e2a\u7248\u672c\u4e2d\u3002"),(0,i.kt)("p",null,"\u8981\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," \u670d\u52a1\u90e8\u7f72\u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230\u5b89\u88c5\u4e86 Istio \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5b89\u88c5\u4e86 Istio \u7684\u96c6\u7fa4\u4e2d\uff0c\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Istio > DestinationRules"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u590d\u5236\u5e76\u7c98\u8d34\u4e0b\u9762\u7684 DestinationRule YAML\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u5e76\u4f7f\u7528\u6b64\u914d\u7f6e\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: reviews\nspec:\n  host: reviews\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n  - name: v2\n    labels:\n      version: v2\n  - name: v3\n    labels:\n      version: v3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u90e8\u7f72\u63d0\u4f9b\u5229\u7528 DestinationRule \u7684\u6d41\u91cf\u8def\u7531\u7684 VirtualService\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"li"},"VirtualService"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u590d\u5236\u5e76\u7c98\u8d34\u4e0b\u9762\u7684 VirtualService YAML\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n  - reviews\n  http:\n  - route:\n    - destination:\n        host: reviews\n        subset: v1\n      weight: 50\n    - destination:\n        host: reviews\n        subset: v3\n      weight: 50\n---\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u751f\u6210\u6d41\u5230\u8be5\u670d\u52a1\u7684\u6d41\u91cf\u65f6\uff08\u4f8b\u5982\uff0c\u5237\u65b0 Ingress Gateway URL\uff09\uff0c\u4f60\u53ef\u4ee5\u5728 Kiali \u6d41\u91cf\u56fe\u4e2d\u770b\u5230\u6d41\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," \u670d\u52a1\u7684\u6d41\u91cf\u88ab\u5e73\u5747\u5206\u914d\u5230\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"v3"),"\u3002"),(0,i.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"\u751f\u6210\u548c\u67e5\u770b\u6d41\u91cf")))}m.isMDXComponent=!0}}]);