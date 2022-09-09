"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=n(13683),o=["components"],l={title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters",weight:7,aliases:["/rancher/v2.0-v2.4/en/concepts/clusters/","/rancher/v2.0-v2.4/en/concepts/clusters/cluster-providers/","/rancher/v2.0-v2.4/en/tasks/clusters/"]},u=void 0,c={unversionedId:"pages-for-subheaders/kubernetes-clusters-in-rancher-setup",id:"version-2.0-2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",permalink:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Setting up Kubernetes Clusters in Rancher",description:"Provisioning Kubernetes Clusters",weight:7,aliases:["/rancher/v2.0-v2.4/en/concepts/clusters/","/rancher/v2.0-v2.4/en/concepts/clusters/cluster-providers/","/rancher/v2.0-v2.4/en/tasks/clusters/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Amazon ELB Network Load Balancer",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},next:{title:"Node Requirements for Rancher Managed Clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"}},d={},p=[{value:"Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider",id:"launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",level:3},{value:"Importing and Editing K3s Clusters",id:"importing-and-editing-k3s-clusters",level:3}],h={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Rancher simplifies the creation of clusters by allowing you to create them through the Rancher UI rather than more complex alternatives. Rancher provides multiple options for launching a cluster. Use the option that best fits your use case."),(0,s.kt)("p",null,"This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/kubernetes-concepts"},"concepts")," page."),(0,s.kt)("p",null,"For a conceptual overview of how the Rancher server provisions clusters and what tools it uses to provision them, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture"},"architecture")," page."),(0,s.kt)("p",null,"This section covers the following topics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#setting-up-clusters-in-a-hosted-kubernetes-provider"},"Setting up clusters in a hosted Kubernetes provider"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#launching-kubernetes-with-rancher"},"Launching Kubernetes with Rancher")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider"},"Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#importing-existing-clusters"},"Importing Existing Clusters")))),(0,s.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,s.kt)(i.ZP,{mdxType:"ClusterCapabilitiesTable"}),(0,s.kt)("h1",{id:"setting-up-clusters-in-a-hosted-kubernetes-provider"},"Setting up Clusters in a Hosted Kubernetes Provider"),(0,s.kt)("p",null,"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service."),(0,s.kt)("p",null,"If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes clusters.")),(0,s.kt)("h1",{id:"launching-kubernetes-with-rancher"},"Launching Kubernetes with Rancher"),(0,s.kt)("p",null,"Rancher uses the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine (RKE)")," as a library when provisioning Kubernetes on your own nodes. RKE is Rancher\u2019s own lightweight Kubernetes installer."),(0,s.kt)("p",null,"In RKE clusters, Rancher manages the deployment of Kubernetes. These clusters can be deployed on any bare metal server, cloud provider, or virtualization platform."),(0,s.kt)("p",null,"These nodes can be dynamically provisioned through Rancher's UI, which calls ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," to launch nodes on various cloud providers."),(0,s.kt)("p",null,"If you already have a node that you want to add to an RKE cluster, you can add it to the cluster by running a Rancher agent container on it."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters.")),(0,s.kt)("h3",{id:"launching-kubernetes-and-provisioning-nodes-in-an-infrastructure-provider"},"Launching Kubernetes and Provisioning Nodes in an Infrastructure Provider"),(0,s.kt)("p",null,"Rancher can dynamically provision nodes in infrastructure providers such as Amazon EC2, DigitalOcean, Azure, or vSphere, then install Kubernetes on them."),(0,s.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This template defines the parameters used to launch nodes in your cloud providers."),(0,s.kt)("p",null,"One benefit of using nodes hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically replace it, thus maintaining the expected cluster configuration."),(0,s.kt)("p",null,"The cloud providers available for creating a node template are decided based on the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-drivers"},"node drivers")," active in the Rancher UI."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes hosted by an infrastructure provider")),(0,s.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,s.kt)("p",null,"When setting up this type of cluster, Rancher installs Kubernetes on existing ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom nodes,")," which creates a custom cluster."),(0,s.kt)("p",null,"You can bring any nodes you want to Rancher and use them to create a cluster."),(0,s.kt)("p",null,"These nodes include on-prem bare metal servers, cloud-hosted virtual machines, or on-prem virtual machines."),(0,s.kt)("h1",{id:"importing-existing-clusters"},"Importing Existing Clusters"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available from Rancher v2.0.x-v2.4.x")),(0,s.kt)("p",null,"In this type of cluster, Rancher connects to a Kubernetes cluster that has already been set up. Therefore, Rancher does not provision Kubernetes, but only sets up the Rancher agents to communicate with the cluster."),(0,s.kt)("p",null,"Note that Rancher does not automate the provisioning, scaling, or upgrade of imported clusters. Other Rancher features, including management of cluster, role-based access control, policy, and workloads, are available for imported clusters."),(0,s.kt)("p",null,"For all imported Kubernetes clusters except for K3s clusters, the configuration of an imported cluster still has to be edited outside of Rancher. Some examples of editing the cluster include adding and removing nodes, upgrading the Kubernetes version, and changing Kubernetes component parameters."),(0,s.kt)("p",null,"In Rancher v2.4, it became possible to import a K3s cluster and upgrade Kubernetes by editing the cluster in the Rancher UI."),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"importing existing clusters.")),(0,s.kt)("h3",{id:"importing-and-editing-k3s-clusters"},"Importing and Editing K3s Clusters"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of Rancher v2.4.0")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution. K3s Kubernetes clusters can now be imported into Rancher."),(0,s.kt)("p",null,"When a K3s cluster is imported, Rancher will recognize it as K3s, and the Rancher UI will expose the following features in addition to the functionality for other imported clusters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ability to upgrade the K3s version"),(0,s.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the K3s cluster's configuration arguments and environment variables used to launch each node in the cluster.")),(0,s.kt)("p",null,"For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"imported K3s clusters.")))}g.isMDXComponent=!0},13683:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={toc:[]};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Action"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes Clusters")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Kubernetes Clusters")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Clusters")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"*")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher/"},"Using App Catalogs")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Cloning Clusters")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"Ability to back up your Kubernetes Clusters")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"Ability to recover and restore etcd")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cis-scans"},"Running Security Scans")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("p",null,"*"," Cluster configuration options can't be edited for imported clusters, except for K3s clusters."))}l.isMDXComponent=!0}}]);