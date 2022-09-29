"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49239],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Windows \u652f\u6301"},p=void 0,c={unversionedId:"explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",id:"explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",title:"Windows \u652f\u6301",description:"\u5728 Rancher 2.5.6 \u4e4b\u524d\uff0cagent \u5728\u5177\u6709 Windows \u8282\u70b9\u7684\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u6ca1\u6709\u539f\u751f\u7684 Windows \u6e05\u5355\u3002\u8fd9\u5c06\u5bfc\u81f4\u96c6\u7fa4\u7684 agent pod \u5931\u8d25\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support.md",sourceDirName:"explanations/integrations-in-rancher/fleet-gitops-at-scale",slug:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",permalink:"/zh/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Windows \u652f\u6301"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"},next:{title:"\u5728\u4ee3\u7406\u540e\u4f7f\u7528 Fleet",permalink:"/zh/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"}},s={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Rancher 2.5.6 \u4e4b\u524d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"agent")," \u5728\u5177\u6709 Windows \u8282\u70b9\u7684\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u6ca1\u6709\u539f\u751f\u7684 Windows \u6e05\u5355\u3002\u8fd9\u5c06\u5bfc\u81f4\u96c6\u7fa4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"agent")," pod \u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4ece\u65e7\u7248\u672c\u7684 Rancher \u5347\u7ea7\u5230 2.5.6+\uff0c\u4f60\u53ef\u4ee5\u5728",(0,o.kt)("em",{parentName:"p"},"\u4e0b\u6e38\u96c6\u7fa4"),"\u4e2d\u90e8\u7f72\u5177\u6709\u4ee5\u4e0b\u5de5\u4f5c\u6d41\u7684\u5de5\u4f5c ",(0,o.kt)("inlineCode",{parentName:"p"},"agent"),"\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c01\u9501\u6240\u6709 Windows \u8282\u70b9\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"agent")," \u5de5\u4f5c\u8d1f\u8f7d\u5e94\u7528\u4ee5\u4e0b\u5bb9\u5fcd\u5ea6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53d6\u6d88\u6240\u6709 Windows \u8282\u70b9\u7684\u5c01\u9501\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5220\u9664\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"agent")," pod\u3002\u4f7f\u7528\u65b0\u7684\u5bb9\u5fcd\u5ea6\u6765\u521b\u5efa\u65b0 pod\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"agent")," pod \u8fd0\u884c\u5e76\u4e3a Fleet \u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\u540e\uff0c\u5b83\u4eec\u4f1a\u66f4\u65b0\u5230\u4e0e Windows \u517c\u5bb9\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"agent")," \u7248\u672c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n- effect: NoSchedule\n  key: cattle.io/os\n  operator: Equal\n  value: linux\n")))}f.isMDXComponent=!0}}]);