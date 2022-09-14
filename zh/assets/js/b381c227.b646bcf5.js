"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63636],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(i,".").concat(p)]||d[p]||h[p]||s;return r?t.createElement(f,o(o({ref:n},l),{},{components:r})):t.createElement(f,o({ref:n},l))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43062:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var t=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],u={title:"Launching Kubernetes with Rancher",weight:4,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/"]},i=void 0,c={unversionedId:"pages-for-subheaders/launch-kubernetes-with-rancher",id:"version-2.5/pages-for-subheaders/launch-kubernetes-with-rancher",title:"Launching Kubernetes with Rancher",description:"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses Rancher Kubernetes Engine (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/launch-kubernetes-with-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/launch-kubernetes-with-rancher",permalink:"/zh/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/launch-kubernetes-with-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Launching Kubernetes with Rancher",weight:4,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/"]},sidebar:"tutorialSidebar",previous:{title:"Creating a Huawei CCE Cluster",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},next:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",permalink:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"}},l={},h=[{value:"Requirements",id:"requirements",level:3},{value:"Launching Kubernetes on New Nodes in an Infrastructure Provider",id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",level:3}],d={toc:h};function p(e){var n=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, it uses ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE), which is Rancher's own lightweight Kubernetes installer. It can launch Kubernetes on any computers, including:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Bare-metal servers"),(0,s.kt)("li",{parentName:"ul"},"On-premise virtual machines"),(0,s.kt)("li",{parentName:"ul"},"Virtual machines hosted by an infrastructure provider")),(0,s.kt)("p",null,"Rancher can install Kubernetes on existing nodes, or it can dynamically provision nodes in an infrastructure provider and install Kubernetes on them."),(0,s.kt)("p",null,"RKE clusters include clusters that Rancher launched on Windows nodes or other existing custom nodes, as well as clusters that Rancher launched with new nodes on Azure, Digital Ocean, EC2, or vSphere."),(0,s.kt)("h3",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"If you use RKE to set up a cluster, your nodes must meet the ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"requirements")," for nodes in downstream user clusters."),(0,s.kt)("h3",{id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider"},"Launching Kubernetes on New Nodes in an Infrastructure Provider"),(0,s.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your cloud providers."),(0,s.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"launching Kubernetes on new nodes.")),(0,s.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,s.kt)("p",null,"In this scenario, you want to install Kubernetes on bare-metal servers, on-prem virtual machines, or virtual machines that already exist in a cloud provider. With this option, you will run a Rancher agent Docker container on the machine."),(0,s.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-existing-nodes"},"custom nodes.")))}p.isMDXComponent=!0}}]);