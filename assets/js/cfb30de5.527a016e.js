"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83969],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(a),g=r,m=c["".concat(u,".").concat(g)]||c[g]||p[g]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),u=a(7094),o=a(12466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,g=e.defaultValue,m=e.values,k=e.groupId,N=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===g?g:null!=(t=null!=g?g:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:h[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,T=(0,r.useState)(v),E=T[0],O=T[1],R=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=w[k];null!=A&&A!==E&&f.some((function(e){return e.value===A}))&&O(A)}var P=function(e){var t=e.currentTarget,a=R.indexOf(t),n=f[a].value;n!==E&&(x(t),O(n),null!=k&&C(k,String(n)))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=R.indexOf(e.currentTarget)+1;a=null!=(n=R[r])?n:R[0];break;case"ArrowLeft":var l,i=R.indexOf(e.currentTarget)-1;a=null!=(l=R[i])?l:R[R.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return R.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function g(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},32405:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(89352),s=["components"],u={title:"Cluster Administration"},o=void 0,d={unversionedId:"pages-for-subheaders/manage-clusters",id:"version-2.5/pages-for-subheaders/manage-clusters",title:"Cluster Administration",description:"After you provision a cluster in Rancher, you can begin using powerful Kubernetes features to deploy and scale your containerized applications in development, testing, or production environments.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/manage-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/manage-clusters",permalink:"/v2.5/pages-for-subheaders/manage-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/manage-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Cluster Administration"},sidebar:"tutorialSidebar",previous:{title:"Configuring a Global Default Private Registry",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"},next:{title:"Cluster Access",permalink:"/v2.5/pages-for-subheaders/access-clusters"}},p={},c=[{value:"Switching between Clusters",id:"switching-between-clusters",level:2},{value:"Managing Clusters in Rancher",id:"managing-clusters-in-rancher",level:2},{value:"Configuring Tools",id:"configuring-tools",level:2}],g={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"After you provision a cluster in Rancher, you can begin using powerful Kubernetes features to deploy and scale your containerized applications in development, testing, or production environments."),(0,l.kt)("p",null,"This page covers the following topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#switching-between-clusters"},"Switching between clusters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#managing-clusters-in-rancher"},"Managing clusters in Rancher")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuring-tools"},"Configuring tools"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/kubernetes-concepts"},"concepts")," page.")),(0,l.kt)("h2",{id:"switching-between-clusters"},"Switching between Clusters"),(0,l.kt)("p",null,"To switch between clusters, use the drop-down available in the navigation bar."),(0,l.kt)("p",null,"Alternatively, you can switch between projects and clusters directly in the navigation bar. Open the ",(0,l.kt)("strong",{parentName:"p"},"Global")," view and select ",(0,l.kt)("strong",{parentName:"p"},"Clusters")," from the main menu. Then select the name of the cluster you want to open."),(0,l.kt)("h2",{id:"managing-clusters-in-rancher"},"Managing Clusters in Rancher"),(0,l.kt)("p",null,"After clusters have been ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provisioned into Rancher"),", ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owners")," will need to manage these clusters. There are many different options of how to manage your cluster."),(0,l.kt)(i.ZP,{mdxType:"ClusterCapabilitiesTable"}),(0,l.kt)("h2",{id:"configuring-tools"},"Configuring Tools"),(0,l.kt)("p",null,"Rancher contains a variety of tools that aren't included in Kubernetes to assist in your DevOps operations. Rancher can integrate with external services to help your clusters run more efficiently. Tools are divided into following categories:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alerts"),(0,l.kt)("li",{parentName:"ul"},"Notifiers"),(0,l.kt)("li",{parentName:"ul"},"Logging"),(0,l.kt)("li",{parentName:"ul"},"Monitoring"),(0,l.kt)("li",{parentName:"ul"},"Istio Service Mesh"),(0,l.kt)("li",{parentName:"ul"},"OPA Gatekeeper")))}m.isMDXComponent=!0},89352:function(e,t,a){a.d(t,{ZP:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(65488),s=a(85162),u=["components"],o={toc:[]};function d(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Rancher Launched Kubernetes Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"EKS and GKE Clusters",(0,l.kt)("sup",null,"1")),(0,l.kt)("th",{parentName:"tr",align:null},"Other Hosted Kubernetes Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Non-EKS or GKE Registered Clusters"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/helm-charts-in-rancher/"},"Using App Catalogs")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/cis-scans"},"Running Security Scans")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Use existing configuration to create additional clusters")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ability to ",(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"backup")," and ",(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"restore")," Rancher-launched clusters"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Registered GKE and EKS clusters have the same options available as GKE and EKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#additional-features-for-registered-eks-and-gke-clusters"},"it is not destroyed."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Cluster configuration options can't be edited for registered clusters, except for ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s and RKE2 clusters."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery.")))),(0,l.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Rancher Launched Kubernetes Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Hosted Kubernetes Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Registered EKS Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"All Other Registered Clusters"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/pages-for-subheaders/helm-charts-in-rancher"},"Using App Catalogs")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"security/security-scan/"},"Running Security Scans")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Use existing configuration to create additional clusters")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ability to ",(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"backup")," and ",(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"restore")," Rancher-launched clusters"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713",(0,l.kt)("sup",null,"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"cluster-provisioning/rke-clusters/options/#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Cluster configuration options can't be edited for registered clusters, except for ",(0,l.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s and RKE2 clusters."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery."))))))}d.isMDXComponent=!0}}]);