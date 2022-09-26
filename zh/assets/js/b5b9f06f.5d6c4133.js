"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40300],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,d=k["".concat(i,".").concat(m)]||k[m]||c[m]||o;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},58699:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),u=["components"],l={title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",weight:2},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",description:"\u4f7f\u7528 Azure \u4e91\u63d0\u4f9b\u5546\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u529f\u80fd\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e Amazon \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon"},next:{title:"\u8bbe\u7f6e Google Compute Engine \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"}},s={},c=[{value:"1. \u8bbe\u7f6e Azure \u79df\u6237 ID",id:"1-\u8bbe\u7f6e-azure-\u79df\u6237-id",level:3},{value:"2. \u8bbe\u7f6e Azure \u5ba2\u6237\u7aef ID \u548c Azure \u5ba2\u6237\u7aef\u5bc6\u7801",id:"2-\u8bbe\u7f6e-azure-\u5ba2\u6237\u7aef-id-\u548c-azure-\u5ba2\u6237\u7aef\u5bc6\u7801",level:3},{value:"3. \u914d\u7f6e\u5e94\u7528\u6ce8\u518c\u6743\u9650",id:"3-\u914d\u7f6e\u5e94\u7528\u6ce8\u518c\u6743\u9650",level:3},{value:"4. \u8bbe\u7f6e Azure \u7f51\u7edc\u5b89\u5168\u7ec4\u540d\u79f0",id:"4-\u8bbe\u7f6e-azure-\u7f51\u7edc\u5b89\u5168\u7ec4\u540d\u79f0",level:3}],k={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure")," \u4e91\u63d0\u4f9b\u5546\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\uff1a\u5728\u7279\u5b9a\u7f51\u7edc\u5b89\u5168\u7ec4\u4e2d\u542f\u52a8 Azure \u8d1f\u8f7d\u5747\u8861\u5668\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6301\u4e45\u5377"),"\uff1a\u652f\u6301\u5c06 Azure Blob \u78c1\u76d8\u548c Azure \u6258\u7ba1\u78c1\u76d8\u4e0e\u6807\u51c6\u548c\u9ad8\u7ea7 Storage Account \u4e00\u8d77\u4f7f\u7528\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5b58\u50a8"),"\uff1a\u901a\u8fc7 CIFS \u6302\u8f7d\u652f\u6301 Azure \u6587\u4ef6\u3002"))),(0,o.kt)("p",null,"Azure \u8ba2\u9605\u4e0d\u652f\u6301\u4ee5\u4e0b\u8d26\u53f7\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5355\u79df\u6237\u8d26\u53f7\uff08\u5373\u6ca1\u6709\u8ba2\u9605\u7684\u8d26\u53f7\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u8ba2\u9605\u8d26\u53f7\u3002")),(0,o.kt)("h1",{id:"rke-\u548c-rke2-\u7684\u5148\u51b3\u6761\u4ef6"},"RKE \u548c RKE2 \u7684\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u8981\u4e3a RKE \u548c RKE2 \u8bbe\u7f6e Azure \u4e91\u63d0\u4f9b\u5546\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u51ed\u8bc1\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-%E8%AE%BE%E7%BD%AE-azure-%E7%A7%9F%E6%88%B7-id"},"\u8bbe\u7f6e Azure \u79df\u6237 ID")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-%E8%AE%BE%E7%BD%AE-azure-%E5%AE%A2%E6%88%B7%E7%AB%AF-id-%E5%92%8C-azure-%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%AF%86%E7%A0%81"},"\u8bbe\u7f6e Azure \u5ba2\u6237\u7aef ID \u548c Azure \u5ba2\u6237\u7aef\u5bc6\u7801")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-%E9%85%8D%E7%BD%AE%E5%BA%94%E7%94%A8%E6%B3%A8%E5%86%8C%E6%9D%83%E9%99%90"},"\u914d\u7f6e\u5e94\u7528\u6ce8\u518c\u6743\u9650")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-%E8%AE%BE%E7%BD%AE-azure-%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E7%BB%84%E5%90%8D%E7%A7%B0"},"\u8bbe\u7f6e Azure \u7f51\u7edc\u5b89\u5168\u7ec4\u540d\u79f0"))),(0,o.kt)("h3",{id:"1-\u8bbe\u7f6e-azure-\u79df\u6237-id"},"1. \u8bbe\u7f6e Azure \u79df\u6237 ID"),(0,o.kt)("p",null,"\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure \u95e8\u6237"),"\uff0c\u767b\u5f55\u5e76\u8f6c\u5230 ",(0,o.kt)("strong",{parentName:"p"},"Azure Active Directory"),"\uff0c\u7136\u540e\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"Properties"),"\u3002\u4f60\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Directory ID")," \u662f\u4f60\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Tenant ID")," (tenantID)\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528 Azure CLI\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"az account show")," \u547d\u4ee4\u6765\u83b7\u53d6\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"2-\u8bbe\u7f6e-azure-\u5ba2\u6237\u7aef-id-\u548c-azure-\u5ba2\u6237\u7aef\u5bc6\u7801"},"2. \u8bbe\u7f6e Azure \u5ba2\u6237\u7aef ID \u548c Azure \u5ba2\u6237\u7aef\u5bc6\u7801"),(0,o.kt)("p",null,"\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure \u95e8\u6237"),"\uff0c\u767b\u5f55\u5e76\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa ",(0,o.kt)("strong",{parentName:"p"},"App Registration")," \u548c\u5bf9\u5e94\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Azure Client ID")," (aadClientId) \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"Azure Client Secret")," (aadClientSecret)\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Azure Active Directory"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"App registrations"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"New application registration"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Name"),"\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Web app/API")," \u4f5c\u4e3a ",(0,o.kt)("strong",{parentName:"li"},"Application Type"),"\uff0c\u5e76\u9009\u62e9\u4efb\u610f ",(0,o.kt)("strong",{parentName:"li"},"Sign-on URL"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Create"),"\u3002")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"App registrations")," \u89c6\u56fe\u4e2d\uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u4f60\u521b\u5efa\u7684\u5e94\u7528\u6ce8\u518c\u3002",(0,o.kt)("strong",{parentName:"p"},"APPLICATION ID")," \u5217\u4e2d\u663e\u793a\u7684\u503c\u662f\u9700\u8981\u7528\u4f5c ",(0,o.kt)("strong",{parentName:"p"},"Azure Client ID")," \u7684\u503c\u3002"),(0,o.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u751f\u6210 ",(0,o.kt)("strong",{parentName:"p"},"Azure Client Secret"),"\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u4f60\u521b\u5efa\u7684\u5e94\u7528\u6ce8\u518c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Settings")," \u89c6\u56fe\u4e2d\uff0c\u6253\u5f00 ",(0,o.kt)("strong",{parentName:"li"},"Keys"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,o.kt)("strong",{parentName:"li"},"Key description"),"\uff0c\u9009\u62e9\u8fc7\u671f\u65f6\u95f4\uff0c\u7136\u540e\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Save"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Value")," \u5217\u4e2d\u663e\u793a\u7684\u751f\u6210\u503c\u662f\u9700\u8981\u7528\u4f5c ",(0,o.kt)("strong",{parentName:"li"},"Azure Client Secret")," \u7684\u503c\u3002\u8be5\u503c\u53ea\u4f1a\u663e\u793a\u4e00\u6b21\u3002")),(0,o.kt)("h3",{id:"3-\u914d\u7f6e\u5e94\u7528\u6ce8\u518c\u6743\u9650"},"3. \u914d\u7f6e\u5e94\u7528\u6ce8\u518c\u6743\u9650"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u4e3a\u4f60\u7684\u5e94\u7528\u6ce8\u518c\u5206\u914d\u9002\u5f53\u7684\u6743\u9650\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,o.kt)("strong",{parentName:"li"},"More services"),"\uff0c\u641c\u7d22 ",(0,o.kt)("strong",{parentName:"li"},"Subscriptions")," \u5e76\u6253\u5f00\u5b83\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,o.kt)("strong",{parentName:"li"},"Access control (IAM)"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Add"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Role")," \u4e2d\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Contributor"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("strong",{parentName:"li"},"Select")," \u4e2d\u9009\u62e9\u4f60\u521b\u5efa\u7684\u5e94\u7528\u6ce8\u518c\u7684\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Save"),"\u3002")),(0,o.kt)("h3",{id:"4-\u8bbe\u7f6e-azure-\u7f51\u7edc\u5b89\u5168\u7ec4\u540d\u79f0"},"4. \u8bbe\u7f6e Azure \u7f51\u7edc\u5b89\u5168\u7ec4\u540d\u79f0"),(0,o.kt)("p",null,"\u8981\u4f7f Azure \u8d1f\u8f7d\u5747\u8861\u5668\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u9700\u8981\u81ea\u5b9a\u4e49\u4e00\u4e2a Azure \u7f51\u7edc\u5b89\u5168\u7ec4 (securityGroupName)\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Rancher Machine Azure \u9a71\u52a8\u6765\u914d\u7f6e\u4e3b\u673a\uff0c\u5219\u9700\u8981\u624b\u52a8\u7f16\u8f91\u4e3b\u673a\uff0c\u4ece\u800c\u5c06\u4e3b\u673a\u5206\u914d\u7ed9\u6b64\u7f51\u7edc\u5b89\u5168\u7ec4\u3002"),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u5728\u914d\u7f6e\u671f\u95f4\u5c06\u81ea\u5b9a\u4e49\u4e3b\u673a\u5206\u914d\u7ed9\u6b64\u7f51\u7edc\u5b89\u5168\u7ec4\u3002"),(0,o.kt)("p",null,"\u53ea\u6709\u9700\u8981\u6210\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u540e\u7aef\u7684\u4e3b\u673a\u624d\u9700\u8981\u5206\u914d\u5230\u8be5\u7ec4\u3002"),(0,o.kt)("h1",{id:"rancher-\u4e2d\u7684-rke2-\u96c6\u7fa4\u8bbe\u7f6e"},"Rancher \u4e2d\u7684 RKE2 \u96c6\u7fa4\u8bbe\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u914d\u7f6e"),"\u4e2d\u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e91\u63d0\u4f9b\u5546"),"\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"Azure"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e91\u63d0\u4f9b\u5546\u3002\u8bf7\u6ce8\u610f\uff0cRancher \u4f1a\u81ea\u52a8\u521b\u5efa\u65b0\u7684\u7f51\u7edc\u5b89\u5168\u7ec4\u3001\u8d44\u6e90\u7ec4\u3001\u53ef\u7528\u6027\u96c6\u3001\u5b50\u7f51\u548c\u865a\u62df\u7f51\u7edc\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u5176\u4e2d\u7684\u4e00\u90e8\u5206\u6216\u5168\u90e8\uff0c\u5219\u9700\u8981\u5728\u521b\u5efa\u96c6\u7fa4\u4e4b\u524d\u6307\u5b9a\u5b83\u4eec\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u4ee5\u67e5\u770b\u66f4\u591a\u81ea\u52a8\u751f\u6210\u7684\u540d\u79f0\uff0c\u5e76\u5728\u9700\u8981\u7684\u65f6\u5019\u66f4\u65b0\u5b83\u4eec\u3002\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\u914d\u7f6e",(0,o.kt)("strong",{parentName:"li"},"\u5fc5\u987b"),"\u4e0e",(0,o.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u6c60"),"\u4e2d\u7684\u5b57\u6bb5\u5339\u914d\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a\u6c60\uff0c\u5b83\u4eec\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u8d44\u6e90\u7ec4\u3001\u53ef\u7528\u6027\u96c6\u3001\u5b50\u7f51\u3001\u865a\u62df\u7f51\u7edc\u548c\u7f51\u7edc\u5b89\u5168\u7ec4\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002")))),(0,o.kt)("details",{id:"v2.6.0-cloud-provider-config-file"},(0,o.kt)("summary",null,"\u4e91\u63d0\u4f9b\u5546\u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "cloud":"AzurePublicCloud",\n    "tenantId": "YOUR TENANTID HERE",\n    "aadClientId": "YOUR AADCLIENTID HERE",\n    "aadClientSecret": "YOUR AADCLIENTSECRET HERE",\n    "subscriptionId": "YOUR SUBSCRIPTIONID HERE",\n    "resourceGroup": "docker-machine",\n    "location": "westus",\n    "subnetName": "docker-machine",\n    "securityGroupName": "rancher-managed-KA4jV9V2",\n    "securityGroupResourceGroup": "docker-machine",\n    "vnetName": "docker-machine-vnet",\n    "vnetResourceGroup": "docker-machine",\n    "primaryAvailabilitySetName": "docker-machine",\n    "routeTableResourceGroup": "docker-machine",\n    "cloudProviderBackoff": false,\n    "useManagedIdentityExtension": false,\n    "useInstanceMetadata": true\n}\n'))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u914d\u7f6e > \u9ad8\u7ea7\u9009\u9879"),"\u3001\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u8865\u5145\u7684 Controller Manager \u53c2\u6570"),"\u4e0b\u7684",(0,o.kt)("strong",{parentName:"p"},"\u6dfb\u52a0"),"\uff0c\u5e76\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--configure-cloud-routes=false")," \u6807\u5fd7\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u6309\u94ae\u6765\u63d0\u4ea4\u8868\u5355\u5e76\u521b\u5efa\u96c6\u7fa4\u3002"))))}m.isMDXComponent=!0}}]);