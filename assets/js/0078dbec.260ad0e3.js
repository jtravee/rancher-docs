"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39552],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,v=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77192:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"1. Get Started",weight:25,aliases:["/rancher/v2.x/en/v1.6-migration/get-started/"]},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",title:"1. Get Started",description:"Get started with your migration to Rancher v2.x by installing Rancher and configuring your new Rancher environment.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"1. Get Started",weight:25,aliases:["/rancher/v2.x/en/v1.6-migration/get-started/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Introduction",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction"},next:{title:"2. Migrate Your Services",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"}},c={},p=[{value:"Outline",id:"outline",level:2},{value:"A. Install Rancher v2.x",id:"a-install-rancher-v2x",level:2},{value:"B. Configure Authentication",id:"b-configure-authentication",level:2},{value:"Local Users",id:"local-users",level:3},{value:"SAML Authentication Providers",id:"saml-authentication-providers",level:3},{value:"C. Provision a Cluster and Project",id:"c-provision-a-cluster-and-project",level:2},{value:"Clusters",id:"clusters",level:3},{value:"Projects",id:"projects",level:3},{value:"D. Create Stacks",id:"d-create-stacks",level:2},{value:"Next: Migrate Your Services",id:"next-migrate-your-services",level:3}],d={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Get started with your migration to Rancher v2.x by installing Rancher and configuring your new Rancher environment."),(0,o.kt)("h2",{id:"outline"},"Outline"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a-install-rancher-v2-x"},"A. Install Rancher v2.x")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#b-configure-authentication"},"B. Configure Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#c-provision-a-cluster-and-project"},"C. Provision a Cluster and Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#d-create-stacks"},"D. Create Stacks"))),(0,o.kt)("h2",{id:"a-install-rancher-v2x"},"A. Install Rancher v2.x"),(0,o.kt)("p",null,"The first step in migrating from v1.6 to v2.x is to install the Rancher v2.x Server side-by-side with your v1.6 Server, as you'll need your old install during the migration process. Due to the architecture changes between v1.6 and v2.x, there is no direct path for upgrade. You'll have to install v2.x independently and then migrate your v1.6 services to v2.x."),(0,o.kt)("p",null,"New for v2.x, all communication to Rancher Server is encrypted. The procedures below instruct you not only on installation of Rancher, but also creation and installation of these certificates."),(0,o.kt)("p",null,"Before installing v2.x, provision one host or more to function as your Rancher Server(s). You can find the requirements for these hosts in ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Server Requirements"),"."),(0,o.kt)("p",null,"After provisioning your node(s), install Rancher:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Install")),(0,o.kt)("p",{parentName:"li"},"  For development environments, Rancher can be installed on a single node using Docker. This installation procedure deploys a single Rancher container to your host.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes Install")),(0,o.kt)("p",{parentName:"li"},"  For production environments where your user base requires constant access to your cluster, we recommend installing Rancher in a high availability Kubernetes installation. This installation procedure provisions a three-node cluster and installs Rancher on each node using a Helm chart."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important Difference:")," Although you could install Rancher v1.6 in a high-availability Kubernetes configuration using an external database and a Docker command on each node, Rancher v2.x in a Kubernetes install requires an existing Kubernetes cluster. Review ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes Install")," for full requirements.")))),(0,o.kt)("h2",{id:"b-configure-authentication"},"B. Configure Authentication"),(0,o.kt)("p",null,"After your Rancher v2.x Server is installed, we recommend configuring external authentication (like Active Directory or GitHub) so that users can log into Rancher using their single sign-on. For a full list of supported authentication providers and instructions on how to configure them, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication"},"Authentication"),"."),(0,o.kt)("figcaption",null,"Rancher v2.x Authentication"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rancher v2.x Authentication",src:r(80796).Z,width:"854",height:"595"})),(0,o.kt)("h3",{id:"local-users"},"Local Users"),(0,o.kt)("p",null,"Although we recommend using an external authentication provider, Rancher v1.6 and v2.x both offer support for users local to Rancher. However, these users cannot be migrated from Rancher v1.6 to v2.x. If you used local users in Rancher v1.6 and want to continue this practice in v2.x, you'll need to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication"},"manually recreate these user accounts")," and assign them access rights."),(0,o.kt)("p",null,"As a best practice, you should use a hybrid of external ",(0,o.kt)("em",{parentName:"p"},"and")," local authentication. This practice provides access to Rancher should your external authentication experience an interruption, as you can still log in using a local user account. Set up a few local accounts as administrative users of Rancher."),(0,o.kt)("h3",{id:"saml-authentication-providers"},"SAML Authentication Providers"),(0,o.kt)("p",null,"In Rancher v1.6, we encouraged our SAML users to use Shibboleth, as it was the only SAML authentication option we offered. However, to better support their minor differences, we've added more fully tested SAML providers for v2.x: Ping Identity, Microsoft ADFS, and FreeIPA."),(0,o.kt)("h2",{id:"c-provision-a-cluster-and-project"},"C. Provision a Cluster and Project"),(0,o.kt)("p",null,"Begin work in Rancher v2.x by using it to provision a new Kubernetes cluster, which is similar to an environment in v1.6. This cluster will host your application deployments."),(0,o.kt)("p",null,"A cluster and project in combined together in Rancher v2.x is equivalent to a v1.6 environment. A ",(0,o.kt)("em",{parentName:"p"},"cluster")," is the compute boundary (i.e., your hosts) and a ",(0,o.kt)("em",{parentName:"p"},"project")," is an administrative boundary (i.e., a grouping of namespaces used to assign access rights to users)."),(0,o.kt)("p",null,"There's more basic info on provisioning clusters in the headings below, but for full information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"Provisioning Kubernetes Clusters"),"."),(0,o.kt)("h3",{id:"clusters"},"Clusters"),(0,o.kt)("p",null,"In Rancher v1.6, compute nodes were added to an ",(0,o.kt)("em",{parentName:"p"},"environment"),". Rancher v2.x eschews the term ",(0,o.kt)("em",{parentName:"p"},"environment")," for ",(0,o.kt)("em",{parentName:"p"},"cluster"),", as Kubernetes uses this term for a team of computers instead of ",(0,o.kt)("em",{parentName:"p"},"environment"),"."),(0,o.kt)("p",null,"Rancher v2.x lets you launch a Kubernetes cluster anywhere. Host your cluster using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes provider"),"."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"pool of nodes from an infrastructure provider"),". Rancher launches Kubernetes on the nodes."),(0,o.kt)("li",{parentName:"ul"},"Any ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom node(s)"),". Rancher can launch Kubernetes on the nodes, be they bare metal servers, virtual machines, or cloud hosts on a less popular infrastructure provider.")),(0,o.kt)("h3",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Additionally, Rancher v2.x introduces ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),", which are objects that divide clusters into different application groups that are useful for applying user permissions. This model of clusters and projects allow for multi-tenancy because hosts are owned by the cluster, and the cluster can be further divided into multiple projects where users can manage their apps, but not those of others."),(0,o.kt)("p",null,"When you create a cluster, two projects are automatically created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"System")," project, which includes system namespaces where important Kubernetes resources are running (like ingress controllers and cluster dns services)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Default")," project.")),(0,o.kt)("p",null,"However, for production environments, we recommend ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces#creating-projects"},"creating your own project")," and giving it a descriptive name."),(0,o.kt)("p",null,"After provisioning a new cluster and project, you can authorize your users to access and use project resources. Similarly to Rancher v1.6 environments, Rancher v2.x allows you to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/manage-projects"},"assign users to projects"),". By assigning users to projects, you can limit what applications and resources a user can access."),(0,o.kt)("h2",{id:"d-create-stacks"},"D. Create Stacks"),(0,o.kt)("p",null,"In Rancher v1.6, ",(0,o.kt)("em",{parentName:"p"},"stacks")," were used to group together the services that belong to your application. In v2.x, you need to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"create namespaces"),", which are the v2.x equivalent of stacks, for the same purpose."),(0,o.kt)("p",null,"In Rancher v2.x, namespaces are child objects to projects. When you create a project, a ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace is added to the project, but you can create your own to parallel your stacks from v1.6."),(0,o.kt)("p",null,"During migration, if you don't explicitly define which namespace a service should be deployed to, it's deployed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace."),(0,o.kt)("p",null,"Just like v1.6, Rancher v2.x supports service discovery within and across namespaces (we'll get to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"},"service discovery")," soon)."),(0,o.kt)("h3",{id:"next-migrate-your-services"},(0,o.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"},"Next: Migrate Your Services")))}h.isMDXComponent=!0},80796:function(e,t,r){t.Z=r.p+"assets/images/auth-providers-229300d4372b6e528deb5046871c1a44.svg"}}]);