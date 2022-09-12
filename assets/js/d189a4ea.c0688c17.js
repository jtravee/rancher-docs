"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27987],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Logging Best Practices",weight:1,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-managed/logging","/rancher/v2.x/en/best-practices/v2.5/rancher-managed/logging/"]},s=void 0,c={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",id:"version-2.5/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",title:"Logging Best Practices",description:"In this guide, we recommend best practices for cluster-level logging and application logging.",source:"@site/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices.md",tags:[],version:"2.5",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Logging Best Practices",weight:1,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-managed/logging","/rancher/v2.x/en/best-practices/v2.5/rancher-managed/logging/"]},sidebar:"tutorialSidebar",previous:{title:"Best Practices for Rancher Managed Clusters",permalink:"/v2.5/pages-for-subheaders/rancher-managed-clusters"},next:{title:"Monitoring Best Practices",permalink:"/v2.5/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"}},g={},p=[{value:"Changes in Logging in Rancher v2.5",id:"changes-in-logging-in-rancher-v25",level:2},{value:"Cluster-level Logging",id:"cluster-level-logging",level:2},{value:"Cluster-wide Scraping",id:"cluster-wide-scraping",level:3},{value:"Kubernetes Components",id:"kubernetes-components",level:3},{value:"Application Logging",id:"application-logging",level:2},{value:"Specific Log Files",id:"specific-log-files",level:3},{value:"General Best Practices",id:"general-best-practices",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide, we recommend best practices for cluster-level logging and application logging."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#changes-in-logging-in-rancher-v2-5"},"Changes in Logging in Rancher v2.5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-level-logging"},"Cluster-level Logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#application-logging"},"Application Logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#general-best-practices"},"General Best Practices"))),(0,i.kt)("h2",{id:"changes-in-logging-in-rancher-v25"},"Changes in Logging in Rancher v2.5"),(0,i.kt)("p",null,"Before Rancher v2.5, logging in Rancher has historically been a pretty static integration. There were a fixed list of aggregators to choose from (ElasticSearch, Splunk, Kafka, Fluentd and Syslog), and only two configuration points to choose (Cluster-level and Project-level)."),(0,i.kt)("p",null,"Logging in 2.5 has been completely overhauled to provide a more flexible experience for log aggregation. With the new logging feature, administrators and users alike can deploy logging that meets fine-grained collection criteria while offering a wider array of destinations and configuration options. "),(0,i.kt)("p",null,'"Under the hood", Rancher logging uses the Banzai Cloud logging operator. We provide manageability of this operator (and its resources), and tie that experience in with managing your Rancher clusters. '),(0,i.kt)("h2",{id:"cluster-level-logging"},"Cluster-level Logging"),(0,i.kt)("h3",{id:"cluster-wide-scraping"},"Cluster-wide Scraping"),(0,i.kt)("p",null,"For some users, it is desirable to scrape logs from every container running in the cluster. This usually coincides with your security team's request (or requirement) to collect all logs from all points of execution."),(0,i.kt)("p",null,"In this scenario, it is recommended to create at least two ",(0,i.kt)("em",{parentName:"p"},"ClusterOutput")," objects - one for your security team (if you have that requirement), and one for yourselves, the cluster administrators. When creating these objects take care to choose an output endpoint that can handle the significant log traffic coming from the entire cluster. Also make sure to choose an appropriate index to receive all these logs."),(0,i.kt)("p",null,"Once you have created these ",(0,i.kt)("em",{parentName:"p"},"ClusterOutput")," objects, create a ",(0,i.kt)("em",{parentName:"p"},"ClusterFlow")," to collect all the logs. Do not define any ",(0,i.kt)("em",{parentName:"p"},"Include")," or ",(0,i.kt)("em",{parentName:"p"},"Exclude")," rules on this flow. This will ensure that all logs from across the cluster are collected. If you have two ",(0,i.kt)("em",{parentName:"p"},"ClusterOutputs"),", make sure to send logs to both of them. "),(0,i.kt)("h3",{id:"kubernetes-components"},"Kubernetes Components"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ClusterFlows")," have the ability to collect logs from all containers on all hosts in the Kubernetes cluster. This works well in cases where those containers are part of a Kubernetes pod; however, RKE containers exist outside of the scope of Kubernetes."),(0,i.kt)("p",null,"Currently (as of v2.5.1) the logs from RKE containers are collected, but are not able to easily be filtered. This is because those logs do not contain information as to the source container (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"). "),(0,i.kt)("p",null,"A future release of Rancher will include the source container name which will enable filtering of these component logs. Once that change is made, you will be able to customize a ",(0,i.kt)("em",{parentName:"p"},"ClusterFlow")," to retrieve ",(0,i.kt)("strong",{parentName:"p"},"only")," the Kubernetes component logs, and direct them to an appropriate output."),(0,i.kt)("h2",{id:"application-logging"},"Application Logging"),(0,i.kt)("p",null,"Best practice not only in Kubernetes but in all container-based applications is to direct application logs to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"stderr"),". The container runtime will then trap these logs and do ",(0,i.kt)("strong",{parentName:"p"},"something")," with them - typically writing them to a file. Depending on the container runtime (and its configuration), these logs can end up in any number of locations."),(0,i.kt)("p",null,"In the case of writing the logs to a file, Kubernetes helps by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," directory on each host. This directory symlinks the log files to their actual destination (which can differ based on configuration or container runtime). "),(0,i.kt)("p",null,"Rancher logging will read all log entries in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/containers"),", ensuring that all log entries from all containers (assuming a default configuration) will have the opportunity to be collected and processed. "),(0,i.kt)("h3",{id:"specific-log-files"},"Specific Log Files"),(0,i.kt)("p",null,"Log collection only retrieves ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," logs from pods in Kubernetes. But what if we want to collect logs from other files that are generated by applications? Here, a log streaming sidecar (or two) may come in handy."),(0,i.kt)("p",null,"The goal of setting up a streaming sidecar is to take log files that are written to disk, and have their contents streamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),". This way, the Banzai Logging Operator can pick up those logs and send them to your desired output. "),(0,i.kt)("p",null,"To set this up, edit your workload resource (e.g. Deployment) and add the following sidecar definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\ncontainers:\n- args:\n  - -F\n  - /path/to/your/log/file.log\n  command:\n  - tail\n  image: busybox\n  name: stream-log-file-[name]\n  volumeMounts:\n  - mountPath: /path/to/your/log\n    name: mounted-log\n...\n")),(0,i.kt)("p",null,"This will add a container to your workload definition that will now stream the contents of (in this example) ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your/log/file.log")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,i.kt)("p",null,"This log stream is then automatically collected according to any ",(0,i.kt)("em",{parentName:"p"},"Flows")," or ",(0,i.kt)("em",{parentName:"p"},"ClusterFlows")," you have setup. You may also wish to consider creating a ",(0,i.kt)("em",{parentName:"p"},"Flow")," specifically for this log file by targeting the name of the container. See example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  match:\n  - select:\n      container_names:\n      - stream-log-file-name\n...\n")),(0,i.kt)("h2",{id:"general-best-practices"},"General Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where possible, output structured log entries (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"syslog"),", JSON). This makes handling of the log entry easier as there are already parsers written for these formats. "),(0,i.kt)("li",{parentName:"ul"},"Try to provide the name of the application that is creating the log entry, in the entry itself. This can make troubleshooting easier as Kubernetes objects do not always carry the name of the application as the object name. For instance, a pod ID may be something like ",(0,i.kt)("inlineCode",{parentName:"li"},"myapp-098kjhsdf098sdf98")," which does not provide much information about the application running inside the container. "),(0,i.kt)("li",{parentName:"ul"},"Except in the case of collecting all logs cluster-wide, try to scope your ",(0,i.kt)("em",{parentName:"li"},"Flow")," and ",(0,i.kt)("em",{parentName:"li"},"ClusterFlow")," objects tightly. This makes it easier to troubleshoot when problems arise, and also helps ensure unrelated log entries do not show up in your aggregator. An example of tight scoping would be to constrain a ",(0,i.kt)("em",{parentName:"li"},"Flow")," to a single ",(0,i.kt)("em",{parentName:"li"},"Deployment")," in a namespace, or perhaps even a single container within a ",(0,i.kt)("em",{parentName:"li"},"Pod"),"."),(0,i.kt)("li",{parentName:"ul"},"Keep the log verbosity down except when troubleshooting. High log verbosity poses a number of issues, chief among them being ",(0,i.kt)("strong",{parentName:"li"},"noise"),": significant events can be drowned out in a sea of ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG")," messages. This is somewhat mitigated with automated alerting and scripting, but highly verbose logging still places an inordinate amount of stress on the logging infrastructure. "),(0,i.kt)("li",{parentName:"ul"},"Where possible, try to provide a transaction or request ID with the log entry. This can make tracing application activity across multiple log sources easier, especially when dealing with distributed applications.")))}h.isMDXComponent=!0}}]);