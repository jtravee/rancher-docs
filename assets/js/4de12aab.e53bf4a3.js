"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25438],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,g=e.defaultValue,h=e.values,m=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,R=w.setTabGroupChoices,K=(0,r.useState)(y),E=K[0],T=K[1],x=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var U=N[m];null!=U&&U!==E&&b.some((function(e){return e.value===U}))&&T(U)}var O=function(e){var t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==E&&(I(t),T(a),null!=m&&R(m,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;n=null!=(o=x[i])?o:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function g(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},78866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],u={title:"Upgrading and Rolling Back Kubernetes",weight:70},d=void 0,p={unversionedId:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",id:"version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",title:"Upgrading and Rolling Back Kubernetes",description:"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Upgrading and Rolling Back Kubernetes",weight:70},sidebar:"tutorialSidebar",previous:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/local-system-charts"},next:{title:"Upgrading Kubernetes without Upgrading Rancher",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"}},c={},g=[{value:"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI",id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui",level:3},{value:"Enabling Draining Nodes During Upgrades from the Rancher UI",id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Configuring the Upgrade Strategy in the cluster.yml",id:"configuring-the-upgrade-strategy-in-the-clusteryml",level:3}],h={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes."),(0,o.kt)("p",null,"Rancher calls RKE (Rancher Kubernetes Engine) as a library when provisioning and editing RKE clusters. For more information on configuring the upgrade strategy for RKE clusters, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE documentation"),"."),(0,o.kt)("h1",{id:"new-features"},"New Features"),(0,o.kt)("p",null,"As of Rancher v2.3.0, the Kubernetes metadata feature was added, which allows Rancher to ship Kubernetes patch versions without upgrading Rancher. For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"},"section on Kubernetes metadata.")),(0,o.kt)("p",null,"As of Rancher v2.4.0,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ability to import K3s Kubernetes clusters into Rancher was added, along with the ability to upgrade Kubernetes when editing those clusters. For details, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"section on imported clusters.")),(0,o.kt)("li",{parentName:"ul"},"New advanced options are exposed in the Rancher UI for configuring the upgrade strategy of an RKE cluster: ",(0,o.kt)("strong",{parentName:"li"},"Maximum Worker Nodes Unavailable")," and ",(0,o.kt)("strong",{parentName:"li"},"Drain nodes.")," These options leverage the new cluster upgrade process of RKE v1.1.0, in which worker nodes are upgraded in batches, so that applications can remain available during cluster upgrades, under ",(0,o.kt)("a",{parentName:"li",href:"#maintaining-availability-for-applications-during-upgrades"},"certain conditions."))),(0,o.kt)("h1",{id:"tested-kubernetes-versions"},"Tested Kubernetes Versions"),(0,o.kt)("p",null,"Before a new version of Rancher is released, it's tested with the latest minor versions of Kubernetes to ensure compatibility. For details on which versions of Kubernetes were tested on each Rancher version, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.4.17/"},"support maintenance terms.")),(0,o.kt)("h1",{id:"how-upgrades-work"},"How Upgrades Work"),(0,o.kt)("p",null,"RKE v1.1.0 changed the way that clusters are upgraded."),(0,o.kt)("p",null,"In this section of the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/how-upgrades-work"},"RKE documentation,")," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."),(0,o.kt)("h1",{id:"recommended-best-practice-for-upgrades"},"Recommended Best Practice for Upgrades"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.4+",mdxType:"TabItem"},(0,o.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,o.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,o.kt)("li",{parentName:"ol"},"If the upgrade fails, revert the cluster to the pre-upgrade Kubernetes version. This is achieved by selecting the ",(0,o.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version")," option. This will return your cluster to the pre-upgrade kubernetes version before restoring the etcd snapshot.")),(0,o.kt)("p",null,"The restore operation will work on a cluster that is not in a healthy or active state.")),(0,o.kt)(l.Z,{value:"Rancher before v2.4",mdxType:"TabItem"},(0,o.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,o.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,o.kt)("li",{parentName:"ol"},"If the upgrade fails, restore the cluster from the etcd snapshot.")),(0,o.kt)("p",null,"The cluster cannot be downgraded to a previous Kubernetes version."))),(0,o.kt)("h1",{id:"upgrading-the-kubernetes-version"},"Upgrading the Kubernetes Version"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The options below are available only for ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched RKE Kubernetes clusters")," and imported/registered K3s Kubernetes clusters."),(0,o.kt)("li",{parentName:"ul"},"Before upgrading Kubernetes, ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"back up your cluster.")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, find the cluster for which you want to upgrade Kubernetes. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes Version")," drop-down, choose the version of Kubernetes that you want to use for the cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Kubernetes begins upgrading for the cluster."),(0,o.kt)("h1",{id:"rolling-back"},"Rolling Back"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.4")),(0,o.kt)("p",null,"A cluster can be restored to a backup in which the previous Kubernetes version was used. For more information, refer to the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#how-snapshots-work"},"Backing up a cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd#restoring-a-cluster-from-a-snapshot"},"Restoring a cluster from backup"))),(0,o.kt)("h1",{id:"configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,o.kt)("p",null,"As of RKE v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade if certain ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability"},"conditions and requirements")," are met."),(0,o.kt)("p",null,"The upgrade strategy can be configured in the Rancher UI, or by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". More advanced options are available by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,o.kt)("h3",{id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui"},"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI"),(0,o.kt)("p",null,"From the Rancher UI, the maximum number of unavailable worker nodes can be configured. During a cluster upgrade, worker nodes will be upgraded in batches of this size."),(0,o.kt)("p",null,"By default, the maximum number of unavailable worker is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,o.kt)("p",null,"To change the default number or percentage of worker nodes,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Advanced Options")," section, go to the ",(0,o.kt)("strong",{parentName:"li"},"Maxiumum Worker Nodes Unavailable")," field. Enter the percentage of worker nodes that can be upgraded in a batch. Optionally, select ",(0,o.kt)("strong",{parentName:"li"},"Count")," from the drop-down menu and enter the maximum unavailable worker nodes as an integer."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,o.kt)("h3",{id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui"},"Enabling Draining Nodes During Upgrades from the Rancher UI"),(0,o.kt)("p",null,"By default, RKE ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#manual-node-administration"},"cordons")," each node before upgrading it. ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"Draining")," is disabled during upgrades by default. If draining is enabled in the cluster configuration, RKE will both cordon and drain the node before it is upgraded."),(0,o.kt)("p",null,"To enable draining each node during a cluster upgrade,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Advanced Options")," section, go to the ",(0,o.kt)("strong",{parentName:"li"},"Drain nodes")," field and click ",(0,o.kt)("strong",{parentName:"li"},"Yes.")),(0,o.kt)("li",{parentName:"ol"},"Choose a safe or aggressive drain option. For more information about each option, refer to ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools#aggressive-and-safe-draining-options"},"this section.")),(0,o.kt)("li",{parentName:"ol"},"Optionally, configure a grace period. The grace period is the timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. Pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If this value is negative, the default value specified in the pod will be used."),(0,o.kt)("li",{parentName:"ol"},"Optionally, configure a timeout, which is the amount of time the drain should continue to wait before giving up."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," As of Rancher v2.4.0, there is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25478"},"known issue")," in which the Rancher UI doesn't show state of etcd and controlplane as drained, even though they are being drained.")),(0,o.kt)("h3",{id:"maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v1.1.0")),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability/"},"this section of the RKE documentation,")," you'll learn the requirements to prevent downtime for your applications when upgrading the cluster."),(0,o.kt)("h3",{id:"configuring-the-upgrade-strategy-in-the-clusteryml"},"Configuring the Upgrade Strategy in the cluster.yml"),(0,o.kt)("p",null,"More advanced upgrade strategy configuration options are available by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,o.kt)("p",null,"For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/configuring-strategy"},"Configuring the Upgrade Strategy")," in the RKE documentation. The section also includes an example ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," for configuring the upgrade strategy."),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If a node doesn't come up after an upgrade, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up")," command errors out."),(0,o.kt)("p",null,"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."),(0,o.kt)("p",null,"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."),(0,o.kt)("p",null,"A failed node could be in many different states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Powered off"),(0,o.kt)("li",{parentName:"ul"},"Unavailable"),(0,o.kt)("li",{parentName:"ul"},"User drains a node while upgrade is in process, so there are no kubelets on the node"),(0,o.kt)("li",{parentName:"ul"},"The upgrade itself failed")),(0,o.kt)("p",null,"If the max unavailable number of nodes is reached during an upgrade, Rancher user clusters will be stuck in updating state and not move forward with upgrading any other control plane nodes. It will continue to evaluate the set of unavailable nodes in case one of the nodes becomes available. If the node cannot be fixed, you must remove the node in order to continue the upgrade."))}m.isMDXComponent=!0}}]);