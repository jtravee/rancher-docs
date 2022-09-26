"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29738],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,h=g["".concat(i,".").concat(d)]||g[d]||p[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],c={title:"Registered clusters",weight:105,aliases:["/rancher/v2.x/en/troubleshooting/imported-clusters/"]},i=void 0,s={unversionedId:"troubleshooting/other-troubleshooting-tips/registered-clusters",id:"version-2.5/troubleshooting/other-troubleshooting-tips/registered-clusters",title:"Registered clusters",description:"The commands/steps listed on this page can be used to check clusters that you are registering or that are registered in Rancher.",source:"@site/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/registered-clusters.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/registered-clusters",permalink:"/v2.5/troubleshooting/other-troubleshooting-tips/registered-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/troubleshooting/other-troubleshooting-tips/registered-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Registered clusters",weight:105,aliases:["/rancher/v2.x/en/troubleshooting/imported-clusters/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher HA",permalink:"/v2.5/troubleshooting/other-troubleshooting-tips/rancher-ha"},next:{title:"Logging",permalink:"/v2.5/troubleshooting/other-troubleshooting-tips/logging"}},u={},p=[{value:"Rancher agents",id:"rancher-agents",level:3},{value:"cattle-node-agent",id:"cattle-node-agent",level:4},{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:4}],g={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The commands/steps listed on this page can be used to check clusters that you are registering or that are registered in Rancher."),(0,a.kt)("p",null,"Make sure you configured the correct kubeconfig (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kubeconfig_from_imported_cluster.yml"),")"),(0,a.kt)("h3",{id:"rancher-agents"},"Rancher agents"),(0,a.kt)("p",null,"Communication to the cluster (Kubernetes API via cattle-cluster-agent) and communication to the nodes is done through Rancher agents."),(0,a.kt)("p",null,"If the cattle-cluster-agent cannot connect to the configured ",(0,a.kt)("inlineCode",{parentName:"p"},"server-url"),", the cluster will remain in ",(0,a.kt)("strong",{parentName:"p"},"Pending")," state, showing ",(0,a.kt)("inlineCode",{parentName:"p"},"Waiting for full cluster configuration"),". "),(0,a.kt)("h4",{id:"cattle-node-agent"},"cattle-node-agent"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Starting in Rancher 2.5 cattle-node-agents are only present in clusters created in Rancher with RKE.")),(0,a.kt)("p",null,"Check if the cattle-node-agent pods are present on each node, have status ",(0,a.kt)("strong",{parentName:"p"},"Running")," and don't have a high count of Restarts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-agent -o wide\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                      READY     STATUS    RESTARTS   AGE       IP                NODE\ncattle-node-agent-4gc2p   1/1       Running   0          2h        x.x.x.x           worker-1\ncattle-node-agent-8cxkk   1/1       Running   0          2h        x.x.x.x           etcd-1\ncattle-node-agent-kzrlg   1/1       Running   0          2h        x.x.x.x           etcd-0\ncattle-node-agent-nclz9   1/1       Running   0          2h        x.x.x.x           controlplane-0\ncattle-node-agent-pwxp7   1/1       Running   0          2h        x.x.x.x           worker-0\ncattle-node-agent-t5484   1/1       Running   0          2h        x.x.x.x           controlplane-1\ncattle-node-agent-t8mtz   1/1       Running   0          2h        x.x.x.x           etcd-2\n")),(0,a.kt)("p",null,"Check logging of a specific cattle-node-agent pod or all cattle-node-agent pods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-agent\n")),(0,a.kt)("h4",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,a.kt)("p",null,"Check if the cattle-cluster-agent pod is present in the cluster, has status ",(0,a.kt)("strong",{parentName:"p"},"Running")," and doesn't have a high count of Restarts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-cluster-agent -o wide\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                    READY     STATUS    RESTARTS   AGE       IP           NODE\ncattle-cluster-agent-54d7c6c54d-ht9h4   1/1       Running   0          2h        x.x.x.x      worker-1\n")),(0,a.kt)("p",null,"Check logging of cattle-cluster-agent pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-cluster-agent\n")))}d.isMDXComponent=!0}}]);