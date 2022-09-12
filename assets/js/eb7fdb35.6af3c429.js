"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93369],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(o),p=n,g=m["".concat(u,".").concat(p)]||m[p]||l[p]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},17987:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],s={title:"Setting up Monitoring for a Workload",weight:4},u=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",title:"Setting up Monitoring for a Workload",description:"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",tags:[],version:"2.5",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Setting up Monitoring for a Workload",weight:4},sidebar:"tutorialSidebar",previous:{title:"Uninstall Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},next:{title:"Customizing Grafana Dashboards",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"}},c={},l=[{value:"Display CPU and Memory Metrics for a Workload",id:"display-cpu-and-memory-metrics-for-a-workload",level:3},{value:"Setting up Metrics Beyond CPU and Memory",id:"setting-up-metrics-beyond-cpu-and-memory",level:3}],m={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default."),(0,i.kt)("p",null,"The steps for setting up monitoring for workloads depend on whether you want basic metrics such as CPU and memory for the workload, or whether you want to scrape custom metrics from the workload."),(0,i.kt)("p",null,"If you only need CPU and memory time series for the workload, you don't need to deploy a ServiceMonitor or PodMonitor because the monitoring application already collects metrics data on resource usage by default. The resource usage time series data is in Prometheus's local time series database."),(0,i.kt)("p",null,"Grafana shows the data in aggregate, but you can see the data for the individual workload by using a PromQL query that extracts the data for that workload. Once you have the PromQL query, you can execute the query individually in the Prometheus UI and see the time series visualized there, or you can use the query to customize a Grafana dashboard to display the workload metrics. For examples of PromQL queries for workload metrics, see ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/monitoring-alerting/configuration/expression/#workload-metrics"},"this section.")),(0,i.kt)("p",null,"To set up custom metrics for your workload, you will need to set up an exporter and create a new ServiceMonitor custom resource to configure Prometheus to scrape metrics from your exporter."),(0,i.kt)("h3",{id:"display-cpu-and-memory-metrics-for-a-workload"},"Display CPU and Memory Metrics for a Workload"),(0,i.kt)("p",null,"By default, the monitoring application already scrapes CPU and memory."),(0,i.kt)("p",null,"To get some fine-grained detail for a particular workload, you can customize a Grafana dashboard to display the metrics for a particular workload."),(0,i.kt)("h3",{id:"setting-up-metrics-beyond-cpu-and-memory"},"Setting up Metrics Beyond CPU and Memory"),(0,i.kt)("p",null,"For custom metrics, you will need to expose the metrics on your application in a format supported by Prometheus."),(0,i.kt)("p",null,"Then we recommend that you should create a new ServiceMonitor custom resource. When this resource is created, the Prometheus custom resource will be automatically updated so that its scrape configuration includes the new custom metrics endpoint. Then Prometheus will begin scraping metrics from the endpoint."),(0,i.kt)("p",null,"You can also create a PodMonitor to expose the custom metrics endpoint, but ServiceMonitors are more appropriate for the majority of use cases."))}p.isMDXComponent=!0}}]);