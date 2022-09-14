"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70807],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return a?r.createElement(d,o(o({ref:t},h),{},{components:a})):r.createElement(d,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49661:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],l={title:"Helm Charts in Rancher",weight:11,aliases:["/rancher/v2.x/en/helm-charts/apps-marketplace","/rancher/v2.5/en/catalog/","/rancher/v2.5/en/catalog/apps","/rancher/v2.5/en/catalog/launching-apps","/rancher/v2.x/en/helm-charts/","/rancher/v2.x/en/helm-charts/legacy-catalogs/","/rancher/v2.x/en/helm-charts/legacy-catalogs/launching-apps/","/rancher/v2.x/en/helm-charts/legacy-catalogs/adding-catalogs/","/rancher/v2.x/en/helm-charts/legacy-catalogs/globaldns/","/rancher/v2.x/en/helm-charts/legacy-catalogs/built-in/","/rancher/v2.x/en/helm-charts/legacy-catalogs/creating-apps/","/rancher/v2.x/en/helm-charts/apps-marketplace/","/rancher/v2.x/en/helm-charts/legacy-catalogs/tutorial/","/rancher/v2.x/en/helm-charts/legacy-catalogs/managing-apps/","/rancher/v2.x/en/helm-charts/legacy-catalogs/catalog-config/","/rancher/v2.x/en/helm-charts/legacy-catalogs/multi-cluster-apps/"]},i=void 0,c={unversionedId:"pages-for-subheaders/helm-charts-in-rancher",id:"version-2.5/pages-for-subheaders/helm-charts-in-rancher",title:"Helm Charts in Rancher",description:"In this section, you'll learn how to manage Helm chart repositories and applications in Rancher.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/helm-charts-in-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm-charts-in-rancher",permalink:"/zh/v2.5/pages-for-subheaders/helm-charts-in-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/helm-charts-in-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Helm Charts in Rancher",weight:11,aliases:["/rancher/v2.x/en/helm-charts/apps-marketplace","/rancher/v2.5/en/catalog/","/rancher/v2.5/en/catalog/apps","/rancher/v2.5/en/catalog/launching-apps","/rancher/v2.x/en/helm-charts/","/rancher/v2.x/en/helm-charts/legacy-catalogs/","/rancher/v2.x/en/helm-charts/legacy-catalogs/launching-apps/","/rancher/v2.x/en/helm-charts/legacy-catalogs/adding-catalogs/","/rancher/v2.x/en/helm-charts/legacy-catalogs/globaldns/","/rancher/v2.x/en/helm-charts/legacy-catalogs/built-in/","/rancher/v2.x/en/helm-charts/legacy-catalogs/creating-apps/","/rancher/v2.x/en/helm-charts/apps-marketplace/","/rancher/v2.x/en/helm-charts/legacy-catalogs/tutorial/","/rancher/v2.x/en/helm-charts/legacy-catalogs/managing-apps/","/rancher/v2.x/en/helm-charts/legacy-catalogs/catalog-config/","/rancher/v2.x/en/helm-charts/legacy-catalogs/multi-cluster-apps/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Registry and Docker Registry",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},next:{title:"Deploying Applications across Clusters",permalink:"/zh/v2.5/pages-for-subheaders/deploy-apps-across-clusters"}},h={},p=[{value:"Changes in Rancher v2.5",id:"changes-in-rancher-v25",level:3},{value:"Charts",id:"charts",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Helm Compatibility",id:"helm-compatibility",level:3},{value:"Deployment and Upgrades",id:"deployment-and-upgrades",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this section, you'll learn how to manage Helm chart repositories and applications in Rancher."),(0,s.kt)("h3",{id:"changes-in-rancher-v25"},"Changes in Rancher v2.5"),(0,s.kt)("p",null,"In Rancher v2.5, the Apps and Marketplace feature replaced the catalog system."),(0,s.kt)("p",null,"In the cluster manager, Rancher uses a catalog system to import bundles of charts and then uses those charts to either deploy custom helm applications or Rancher's tools such as Monitoring or Istio. The catalog system is still available in the cluster manager in Rancher v2.5, but it is deprecated."),(0,s.kt)("p",null,"Now in the Cluster Explorer, Rancher uses a similar but simplified version of the same system. Repositories can be added in the same way that catalogs were, but are specific to the current cluster. Rancher tools come as pre-loaded repositories which deploy as standalone helm charts."),(0,s.kt)("h3",{id:"charts"},"Charts"),(0,s.kt)("p",null,"From the top-left menu select ",(0,s.kt)("em",{parentName:"p"},'"Apps & Marketplace"')," and you will be taken to the Charts page."),(0,s.kt)("p",null,"The charts page contains all Rancher, Partner, and Custom Charts."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Rancher tools such as Logging or Monitoring are included under the Rancher label"),(0,s.kt)("li",{parentName:"ul"},"Partner charts reside under the Partners label"),(0,s.kt)("li",{parentName:"ul"},"Custom charts will show up under the name of the repository")),(0,s.kt)("p",null,"All three types are deployed and managed in the same way."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Apps managed by the Cluster Manager should continue to be managed only by the Cluster Manager, and apps managed with the Cluster Explorer must be managed only by the Cluster Explorer.")),(0,s.kt)("h3",{id:"repositories"},"Repositories"),(0,s.kt)("p",null,"From the left sidebar select ",(0,s.kt)("em",{parentName:"p"},'"Repositories"'),"."),(0,s.kt)("p",null,"These items represent helm repositories, and can be either traditional helm endpoints which have an index.yaml, or git repositories which will be cloned and can point to a specific branch. In order to use custom charts, simply add your repository here and they will become available in the Charts tab under the name of the repository."),(0,s.kt)("p",null,"To add a private CA for Helm Chart repositories:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"HTTP-based chart repositories"),": You must add a base64 encoded copy of the CA certificate in DER format to the spec.caBundle field of the chart repo, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"openssl x509 -outform der -in ca.pem | base64 -w0"),". Click ",(0,s.kt)("strong",{parentName:"p"},"Edit YAML")," for the chart repo and set, as in the following example:",(0,s.kt)("br",null)),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"[...]\nspec:\n  caBundle:\nMIIFXzCCA0egAwIBAgIUWNy8WrvSkgNzV0zdWRP79j9cVcEwDQYJKoZIhvcNAQELBQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRQwEgYDVQQKDAtNeU9yZywgSW5jLjENMAsGA1UEAwwEcm9vdDAeFw0yMTEyMTQwODMyMTdaFw0yNDEwMDMwODMyMT\n...\nnDxZ/tNXt/WPJr/PgEB3hQdInDWYMg7vGO0Oz00G5kWg0sJ0ZTSoA10ZwdjIdGEeKlj1NlPyAqpQ+uDnmx6DW+zqfYtLnc/g6GuLLVPamraqN+gyU8CHwAWPNjZonFN9Vpg0PIk1I2zuOc4EHifoTAXSpnjfzfyAxCaZsnTptimlPFJJqAMj+FfDArGmr4=\n[...]\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Git-based chart repositories"),": It is not currently possible to add a private CA. For git-based chart repositories with a certificate signed by a private CA, you must disable TLS verification. Click ",(0,s.kt)("strong",{parentName:"p"},"Edit YAML")," for the chart repo, and add the key/value pair as follows:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"[...]\nspec:\n  insecureSkipTLSVerify: true\n[...]\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Helm chart repositories with authentication"),(0,s.kt)("p",{parentName:"blockquote"},"As of Rancher v2.5.12, a new value ",(0,s.kt)("inlineCode",{parentName:"p"},"disableSameOriginCheck")," has been added to the Repo.Spec. This allows users to bypass the same origin checks, sending the repository Authentication information as a Basic Auth Header with all API calls. This is not recommended but can be used as a temporary solution in cases of non-standard Helm chart repositories such as those that have redirects to a different origin URL."),(0,s.kt)("p",{parentName:"blockquote"},"To use this feature for an existing Helm chart repository, click ",(0,s.kt)("b",null,"\u22ee > Edit YAML"),". On the ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," portion of the YAML file, add ",(0,s.kt)("inlineCode",{parentName:"p"},"disableSameOriginCheck")," and set it to ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\nspec:\n  disableSameOriginCheck: true\n[...]\n"))),(0,s.kt)("h3",{id:"helm-compatibility"},"Helm Compatibility"),(0,s.kt)("p",null,"The Cluster Explorer only supports Helm 3 compatible charts."),(0,s.kt)("h3",{id:"deployment-and-upgrades"},"Deployment and Upgrades"),(0,s.kt)("p",null,"From the ",(0,s.kt)("em",{parentName:"p"},'"Charts"')," tab select a Chart to install. Rancher and Partner charts may have extra configurations available through custom pages or questions.yaml files, but all chart installations can modify the values.yaml and other basic settings. Once you click install, a Helm operation job is deployed, and the console for the job is displayed."),(0,s.kt)("p",null,"To view all recent changes, go to the ",(0,s.kt)("em",{parentName:"p"},'"Recent Operations"')," tab. From there you can view the call that was made, conditions, events, and logs."),(0,s.kt)("p",null,"After installing a chart, you can find it in the ",(0,s.kt)("em",{parentName:"p"},'"Installed Apps"')," tab. In this section you can upgrade or delete the installation, and see further details. When choosing to upgrade, the form and values presented will be the same as installation."),(0,s.kt)("p",null,"Most Rancher tools have additional pages located in the toolbar below the ",(0,s.kt)("em",{parentName:"p"},'"Apps & Marketplace"')," section to help manage and use the features. These pages include links to dashboards, forms to easily add Custom Resources, and additional information."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you are upgrading your chart using ",(0,s.kt)("em",{parentName:"p"},'"Customize Helm options before upgrade"')," , please be aware that using the ",(0,s.kt)("em",{parentName:"p"},'"--force"')," option may result in errors if your chart has immutable fields. This is because some objects in Kubernetes cannot be changed once they are created. To ensure you do not get this error you can:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"use the default upgrade option ( i.e do not use ",(0,s.kt)("em",{parentName:"li"},'"--force"')," option )"),(0,s.kt)("li",{parentName:"ul"},"uninstall the existing chart and install the upgraded chart"),(0,s.kt)("li",{parentName:"ul"},"delete the resources with immutable fields from the cluster before performing the ",(0,s.kt)("em",{parentName:"li"},'"--force"')," upgrade"))))}m.isMDXComponent=!0}}]);