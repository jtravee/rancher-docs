"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8644],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80697:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Default Alerts for Cluster Monitoring",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/alerts/default-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/cluster-alerts/default-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/default-alerts"]},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/cluster-alerts/default-alerts",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts",title:"Default Alerts for Cluster Monitoring",description:"When you create a cluster, some alert rules are predefined. These alerts notify you about signs that the cluster could be unhealthy. You can receive these alerts if you configure a notifier for them.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts.md",sourceDirName:"explanations/integrations-in-rancher/cluster-alerts",slug:"/explanations/integrations-in-rancher/cluster-alerts/default-alerts",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-alerts/default-alerts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662069450,formattedLastUpdatedAt:"2022/9/1",frontMatter:{title:"Default Alerts for Cluster Monitoring",weight:1,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/alerts/default-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/alerts/cluster-alerts/default-alerts","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-alerts/default-alerts"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Alerts",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},next:{title:"Integrating Rancher and Prometheus for Cluster Monitoring",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"}},u={},h=[],d={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When you create a cluster, some alert rules are predefined. These alerts notify you about signs that the cluster could be unhealthy. You can receive these alerts if you configure a ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifier")," for them."),(0,l.kt)("p",null,"Several of the alerts use Prometheus expressions as the metric that triggers the alert. For more information on how expressions work, you can refer to the Rancher ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression"},"documentation about Prometheus expressions")," or the Prometheus ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"documentation about querying metrics"),"."),(0,l.kt)("h1",{id:"alerts-for-etcd"},"Alerts for etcd"),(0,l.kt)("p",null,"Etcd is the key-value store that contains the state of the Kubernetes cluster. Rancher provides default alerts if the built-in monitoring detects a potential problem with etcd. You don't have to enable monitoring to receive these alerts."),(0,l.kt)("p",null,"A leader is the node that handles all client requests that need cluster consensus. For more information, you can refer to this ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2019/2019-01-29-what-is-etcd/#how-does-etcd-work"},"explanation of how etcd works.")),(0,l.kt)("p",null,"The leader of the cluster can change in response to certain events. It is normal for the leader to change, but too many changes can indicate a problem with the network or a high CPU load. With longer latencies, the default etcd configuration may cause frequent heartbeat timeouts, which trigger a new leader election."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alert"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A high number of leader changes within the etcd cluster are happening"),(0,l.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when the leader changes more than three times in one hour.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database usage close to the quota 500M"),(0,l.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when the size of etcd exceeds 500M.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Etcd is unavailable"),(0,l.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered when etcd becomes unavailable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Etcd member has no leader"),(0,l.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered when the etcd cluster does not have a leader for at least three minutes.")))),(0,l.kt)("h1",{id:"alerts-for-kubernetes-components"},"Alerts for Kubernetes Components"),(0,l.kt)("p",null,"Rancher provides alerts when core Kubernetes system components become unhealthy."),(0,l.kt)("p",null,"Controllers update Kubernetes resources based on changes in etcd. The ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"controller manager")," monitors the cluster desired state through the Kubernetes API server and makes the necessary changes to the current state to reach the desired state."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/"},"scheduler")," service is a core component of Kubernetes. It is responsible for scheduling cluster workloads to nodes, based on various configurations, metrics, resource requirements and workload-specific requirements."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alert"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controller Manager is unavailable"),(0,l.kt)("td",{parentName:"tr",align:null},"A critical warning is triggered when the cluster\u2019s controller-manager becomes unavailable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler is unavailable"),(0,l.kt)("td",{parentName:"tr",align:null},"A critical warning is triggered when the cluster\u2019s scheduler becomes unavailable.")))),(0,l.kt)("h1",{id:"alerts-for-events"},"Alerts for Events"),(0,l.kt)("p",null,"Kubernetes events are objects that provide insight into what is happening inside a cluster, such as what decisions were made by the scheduler or why some pods were evicted from the node. In the Rancher UI, from the project view, you can see events for each workload."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alert"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get warning deployment event"),(0,l.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered when a warning event happens on a deployment.")))),(0,l.kt)("h1",{id:"alerts-for-nodes"},"Alerts for Nodes"),(0,l.kt)("p",null,"Alerts can be triggered based on node metrics. Each computing resource in a Kubernetes cluster is called a node. Nodes can be either bare-metal servers or virtual machines."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alert"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High CPU load"),(0,l.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered if the node uses more than 100 percent of the node\u2019s available CPU seconds for at least three minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"High node memory utilization"),(0,l.kt)("td",{parentName:"tr",align:null},"A warning alert is triggered if the node uses more than 80 percent of its available memory for at least three minutes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node disk is running full within 24 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"A critical alert is triggered if the disk space on the node is expected to run out in the next 24 hours based on the disk growth over the last 6 hours.")))),(0,l.kt)("h1",{id:"project-level-alerts"},"Project-level Alerts"),(0,l.kt)("p",null,"When you enable monitoring for the project, some project-level alerts are provided. For details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/rancher-project-tools/project-alerts"},"section on project-level alerts.")))}p.isMDXComponent=!0}}]);