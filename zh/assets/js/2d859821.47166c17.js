"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91405],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,u=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||u;return t?n.createElement(h,o(o({ref:r},l),{},{components:t})):n.createElement(h,o({ref:r},l))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var u=t.length,o=new Array(u);o[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<u;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1919:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=t(87462),s=t(63366),u=(t(67294),t(3905)),o=["components"],a={title:"\u901a\u8fc7\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u8bbe\u7f6e\u96c6\u7fa4",weight:3},i=void 0,c={unversionedId:"pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",id:"pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",title:"\u901a\u8fc7\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u8bbe\u7f6e\u96c6\u7fa4",description:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cRancher \u4e0d\u4f1a\u914d\u7f6e Kubernetes\uff0c\u56e0\u4e3a\u5b83\u662f\u7531 Google Kubernetes Engine (GKE)\u3001Amazon Elastic Container Service for Kubernetes \u6216 Azure Kubernetes Service \u7b49\u63d0\u4f9b\u5546\u5b89\u88c5\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",permalink:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u901a\u8fc7\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u8bbe\u7f6e\u96c6\u7fa4",weight:3},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u4e2d\u8282\u70b9\u7684\u89d2\u8272",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},next:{title:"\u7ba1\u7406 GKE \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"}},l={},p=[{value:"\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u7684\u8eab\u4efd\u9a8c\u8bc1",id:"\u6258\u7ba1-kubernetes-\u63d0\u4f9b\u5546\u7684\u8eab\u4efd\u9a8c\u8bc1",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,s.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cRancher \u4e0d\u4f1a\u914d\u7f6e Kubernetes\uff0c\u56e0\u4e3a\u5b83\u662f\u7531 Google Kubernetes Engine (GKE)\u3001Amazon Elastic Container Service for Kubernetes \u6216 Azure Kubernetes Service \u7b49\u63d0\u4f9b\u5546\u5b89\u88c5\u7684\u3002"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Kubernetes \u63d0\u4f9b\u5546\uff0c\u4f8b\u5982 Google GKE\uff0cRancher \u5c06\u4e0e\u5bf9\u5e94\u7684\u4e91 API \u96c6\u6210\uff0c\u5141\u8bb8\u4f60\u4ece Rancher UI \u4e3a\u6258\u7ba1\u96c6\u7fa4\u521b\u5efa\u548c\u7ba1\u7406 RBAC\u3002"),(0,u.kt)("p",null,"\u5728\u8fd9\u4e2a\u7528\u4f8b\u4e2d\uff0cRancher \u4f7f\u7528\u63d0\u4f9b\u5546\u7684 API \u5411\u6258\u7ba1\u63d0\u4f9b\u5546\u53d1\u9001\u8bf7\u6c42\u3002\u7136\u540e\uff0c\u63d0\u4f9b\u5546\u4f1a\u4e3a\u4f60\u914d\u7f6e\u548c\u6258\u7ba1\u96c6\u7fa4\u3002\u96c6\u7fa4\u521b\u5efa\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u50cf\u7ba1\u7406\u672c\u5730\u96c6\u7fa4\u6216\u4e91\u4e0a\u96c6\u7fa4\u4e00\u6837\uff0c\u901a\u8fc7 Rancher UI \u5bf9\u96c6\u7fa4\u8fdb\u884c\u7ba1\u7406\u3002"),(0,u.kt)("p",null,"Rancher \u652f\u6301\u4ee5\u4e0b Kubernetes \u63d0\u4f9b\u5546\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/"},"Google GKE (Google Kubernetes Engine)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks/"},"Amazon EKS (Amazon Elastic Container Service for Kubernetes)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Microsoft AKS (Azure Kubernetes Service)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba ACK (Alibaba Cloud Container Service for Kubernetes)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://intl.cloud.tencent.com/product/tke"},"Tencent TKE (Tencent Kubernetes Engine)")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.huaweicloud.com/en-us/product/cce.html"},"Huawei CCE (Huawei Cloud Container Engine)"))),(0,u.kt)("h2",{id:"\u6258\u7ba1-kubernetes-\u63d0\u4f9b\u5546\u7684\u8eab\u4efd\u9a8c\u8bc1"},"\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u7684\u8eab\u4efd\u9a8c\u8bc1"),(0,u.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa\u7531\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u96c6\u7fa4\u65f6\uff0c\u4f60\u9700\u8981\u8f93\u5165\u8eab\u4efd\u9a8c\u8bc1\u4fe1\u606f\u3002Rancher \u4f1a\u4f7f\u7528\u9a8c\u8bc1\u4fe1\u606f\u6765\u8bbf\u95ee\u4e91\u5382\u5546\u7684 API\u3002\u6709\u5173\u5982\u4f55\u83b7\u53d6\u6b64\u4fe1\u606f\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},"\u521b\u5efa GKE \u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/amazon-eks-permissions"},"\u521b\u5efa EKS \u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"},"\u521b\u5efa AKS \u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"},"\u521b\u5efa ACK \u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"},"\u521b\u5efa TKE \u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},"\u521b\u5efa CCE \u96c6\u7fa4"))))}f.isMDXComponent=!0}}]);