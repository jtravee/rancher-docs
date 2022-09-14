"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50506],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=s,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48807:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={title:"Setting up Clusters from Hosted Kubernetes Providers",weight:3},u=void 0,l={unversionedId:"pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",id:"version-2.0-2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",title:"Setting up Clusters from Hosted Kubernetes Providers",description:"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",permalink:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Setting up Clusters from Hosted Kubernetes Providers",weight:3},sidebar:"tutorialSidebar",previous:{title:"Roles for Nodes in Kubernetes",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},next:{title:"Creating a GKE Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"}},c={},p=[{value:"Hosted Kubernetes Provider Authentication",id:"hosted-kubernetes-provider-authentication",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service."),(0,o.kt)("p",null,"If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI."),(0,o.kt)("p",null,"In this use case, Rancher sends a request to a hosted provider using the provider's API. The provider then provisions and hosts the cluster for you. When the cluster finishes building, you can manage it from the Rancher UI along with clusters you've provisioned that are hosted on-prem or in an infrastructure provider."),(0,o.kt)("p",null,"Rancher supports the following Kubernetes providers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes Providers"),(0,o.kt)("th",{parentName:"tr",align:null},"Available as of"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/kubernetes-engine/"},"Google GKE (Google Kubernetes Engine)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.0.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/eks/"},"Amazon EKS (Amazon Elastic Container Service for Kubernetes)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.0.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Microsoft AKS (Azure Kubernetes Service)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.0.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba ACK (Alibaba Cloud Container Service for Kubernetes)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://intl.cloud.tencent.com/product/tke"},"Tencent TKE (Tencent Kubernetes Engine)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.huaweicloud.com/en-us/product/cce.html"},"Huawei CCE (Huawei Cloud Container Engine)")),(0,o.kt)("td",{parentName:"tr",align:null},"v2.2.0")))),(0,o.kt)("h2",{id:"hosted-kubernetes-provider-authentication"},"Hosted Kubernetes Provider Authentication"),(0,o.kt)("p",null,"When using Rancher to create a cluster hosted by a provider, you are prompted for authentication information. This information is required to access the provider's API. For more information on how to obtain this information, see the following procedures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},"Creating a GKE Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions"},"Creating an EKS Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"},"Creating an AKS Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"},"Creating an ACK Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"},"Creating a TKE Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},"Creating a CCE Cluster"))))}h.isMDXComponent=!0}}]);