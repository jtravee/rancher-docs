"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83470],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39380:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Background Information on HPAs",weight:3027,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/hpa-background"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",title:"Background Information on HPAs",description:"The Horizontal Pod Autoscaler (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down. This section provides explanation on how HPA works with Kubernetes.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Background Information on HPAs",weight:3027,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/hpa-background"]},sidebar:"tutorialSidebar",previous:{title:"Manual HPA Installation for Clusters Created Before Rancher v2.0.7",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7"},next:{title:"Managing HPAs with the Rancher UI",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"}},c={},p=[{value:"Why Use Horizontal Pod Autoscaler?",id:"why-use-horizontal-pod-autoscaler",level:2},{value:"How HPA Works",id:"how-hpa-works",level:2},{value:"Horizontal Pod Autoscaler API Objects",id:"horizontal-pod-autoscaler-api-objects",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler")," (HPA) is a Kubernetes feature that allows you to configure your cluster to automatically scale the services it's running up or down. This section provides explanation on how HPA works with Kubernetes."),(0,a.kt)("h2",{id:"why-use-horizontal-pod-autoscaler"},"Why Use Horizontal Pod Autoscaler?"),(0,a.kt)("p",null,"Using HPA, you can automatically scale the number of pods within a replication controller, deployment, or replica set up or down. HPA automatically scales the number of pods that are running for maximum efficiency. Factors that affect the number of pods include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A minimum and maximum number of pods allowed to run, as defined by the user."),(0,a.kt)("li",{parentName:"ul"},"Observed CPU/memory use, as reported in resource metrics."),(0,a.kt)("li",{parentName:"ul"},"Custom metrics provided by third-party metrics application like Prometheus, Datadog, etc.")),(0,a.kt)("p",null,"HPA improves your services by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Releasing hardware resources that would otherwise be wasted by an excessive number of pods."),(0,a.kt)("li",{parentName:"ul"},"Increase/decrease performance as needed to accomplish service level agreements.")),(0,a.kt)("h2",{id:"how-hpa-works"},"How HPA Works"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HPA Schema",src:r(5276).Z,width:"1200",height:"862"})),(0,a.kt)("p",null,"HPA is implemented as a control loop, with a period controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," flags below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flag"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-sync-period")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"30s")),(0,a.kt)("td",{parentName:"tr",align:null},"How often HPA audits resource/custom metrics in a deployment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-downscale-delay")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5m0s")),(0,a.kt)("td",{parentName:"tr",align:null},"Following completion of a downscale operation, how long HPA must wait before launching another downscale operations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--horizontal-pod-autoscaler-upscale-delay")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3m0s")),(0,a.kt)("td",{parentName:"tr",align:null},"Following completion of an upscale operation, how long HPA must wait before launching another upscale operation.")))),(0,a.kt)("p",null,"For full documentation on HPA, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Kubernetes Documentation"),"."),(0,a.kt)("h2",{id:"horizontal-pod-autoscaler-api-objects"},"Horizontal Pod Autoscaler API Objects"),(0,a.kt)("p",null,"HPA is an API resource in the Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling")," API group. The current stable version is ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v1"),", which only includes support for CPU autoscaling. To get additional support for scaling based on memory and custom metrics, use the beta version instead: ",(0,a.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta1"),"."),(0,a.kt)("p",null,"For more information about the HPA API object, see the ",(0,a.kt)("a",{parentName:"p",href:"https://git.k8s.io/community/contributors/design-proposals/autoscaling/horizontal-pod-autoscaler.md#horizontalpodautoscaler-object"},"HPA GitHub Readme"),"."))}h.isMDXComponent=!0},5276:function(e,t,r){t.Z=r.p+"assets/images/horizontal-pod-autoscaler-73e94153b61adc40a276899a326addc9.jpg"}}]);