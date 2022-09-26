"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85804],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"\u4f7f\u7528 kubectl \u6d4b\u8bd5 HPA",weight:3031},c=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",title:"\u4f7f\u7528 kubectl \u6d4b\u8bd5 HPA",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6269\u7f29 HPA \u540e\u68c0\u67e5 HPA \u7684\u72b6\u6001\u3002\u6709\u5173\u4f7f\u7528 Rancher UI\uff08\u6700\u4f4e\u7248\u672c 2.3.x\uff09\u68c0\u67e5\u72b6\u6001\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl.md",tags:[],version:"current",lastUpdatedAt:1663258277,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u4f7f\u7528 kubectl \u6d4b\u8bd5 HPA",weight:3031},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"},next:{title:"\u5728 Rancher \u4e2d\u8bbe\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u548c Ingress Controller",permalink:"/zh/pages-for-subheaders/load-balancer-and-ingress-controller"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6269\u7f29 HPA \u540e\u68c0\u67e5 HPA \u7684\u72b6\u6001\u3002\u6709\u5173\u4f7f\u7528 Rancher UI\uff08\u6700\u4f4e\u7248\u672c 2.3.x\uff09\u68c0\u67e5\u72b6\u6001\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"},"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA"),"\u3002"),(0,o.kt)("p",null,"\u8981\u8ba9 HPA \u6b63\u5e38\u5de5\u4f5c\uff0c\u670d\u52a1\u90e8\u7f72\u5e94\u8be5\u5177\u6709\u5bb9\u5668\u7684\u8d44\u6e90\u8bf7\u6c42\u5b9a\u4e49\u3002\u6309\u7167\u4ee5\u4e0b hello-world \u793a\u4f8b\u6d4b\u8bd5 HPA \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8fde\u63a5\u5230\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u590d\u5236\u4e0b\u65b9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-world")," \u90e8\u7f72\u6e05\u5355\u3002"),(0,o.kt)("details",{id:"hello-world"},(0,o.kt)("summary",null,"Hello World \u6e05\u5355"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  labels:\n    app: hello-world\n  name: hello-world\n  namespace: default\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - image: rancher/hello-world\n        imagePullPolicy: Always\n        name: hello-world\n        resources:\n          requests:\n            cpu: 500m\n            memory: 64Mi\n        ports:\n        - containerPort: 80\n          protocol: TCP\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: hello-world\n")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u5176\u90e8\u7f72\u5230\u4f60\u7684\u96c6\u7fa4\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl create -f <HELLO_WORLD_MANIFEST>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6839\u636e\u4f60\u4f7f\u7528\u7684\u6307\u6807\u7c7b\u578b\u590d\u5236\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a HPA\uff1a"),(0,o.kt)("details",{id:"service-deployment-resource-metrics"},(0,o.kt)("summary",null,"Hello World HPA\uff1a\u8d44\u6e90\u6307\u6807"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 1000Mi\n"))),(0,o.kt)("details",{id:"service-deployment-custom-metrics"},(0,o.kt)("summary",null,"Hello World HPA\uff1a\u81ea\u5b9a\u4e49\u6307\u6807"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hello-world\n  namespace: default\nspec:\n  scaleTargetRef:\n    apiVersion: extensions/v1beta1\n    kind: Deployment\n    name: hello-world\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      targetAverageUtilization: 50\n  - type: Resource\n    resource:\n      name: memory\n      targetAverageValue: 100Mi\n  - type: Pods\n    pods:\n      metricName: cpu_system\n      targetAverageValue: 20m\n")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u67e5\u770b HPA \u4fe1\u606f\u548c\u63cf\u8ff0\u3002\u786e\u8ba4\u663e\u793a\u7684\u6307\u6807\u6570\u636e\u3002"),(0,o.kt)("details",{id:"hpa-info-resource-metrics"},(0,o.kt)("summary",null,"\u8d44\u6e90\u6307\u6807"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get hpa\nNAME          REFERENCE                TARGETS                     MINPODS   MAXPODS   REPLICAS   AGE\nhello-world   Deployment/hello-world   1253376 / 100Mi, 0% / 50%   1         10        1          6m\n# kubectl describe hpa\nName:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Mon, 23 Jul 2018 20:21:16 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             1253376 / 100Mi\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           <none>\n"))))),(0,o.kt)("details",{id:"hpa-info-custom-metrics"},(0,o.kt)("summary",null,"\u81ea\u5b9a\u4e49\u6307\u6807"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"You should receive the output that follows.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Tue, 24 Jul 2018 18:36:28 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             3514368 / 100Mi\n  "cpu_system" on pods:                                0 / 20m\n  resource cpu on pods  (as a percentage of request):  0% (0) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    ReadyForNewScale    the last scale time was sufficiently old as to warrant a new scale\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:           <none>\n')))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u670d\u52a1\u751f\u6210\u8d1f\u8f7d\uff0c\u4ece\u800c\u6d4b\u8bd5\u4f60\u7684 pod \u662f\u5426\u6309\u9884\u671f\u8fdb\u884c\u4e86\u81ea\u52a8\u6269\u7f29\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\uff08Hey\u3001Gatling \u7b49\uff09\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"Hey"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6d4b\u8bd5 pod \u81ea\u52a8\u6269\u7f29\u662f\u5426\u6309\u9884\u671f\u5de5\u4f5c\u3002",(0,o.kt)("br",null),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8d44\u6e90\u6307\u6807\u6d4b\u8bd5\u81ea\u52a8\u6269\u7f29\uff1a")),(0,o.kt)("details",{id:"observe-upscale-2-pods-cpu"},(0,o.kt)("summary",null,"\u6269\u5c55\u5230\u4e24\u4e2a Pod\uff1aCPU \u7528\u91cf\u8fbe\u5230\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"},"  \u4f7f\u7528\u4f60\u7684\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6839\u636e CPU \u4f7f\u7528\u60c5\u51b5\u6269\u5c55\u5230\u4e24\u4e2a Pod\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u4f60\u7684 HPA\u3002",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Name:                                                  hello-world\nNamespace:                                             default\nLabels:                                                <none>\nAnnotations:                                           <none>\nCreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\nReference:                                             Deployment/hello-world\nMetrics:                                               ( current / target )\n  resource memory on pods:                             10928128 / 100Mi\n  resource cpu on pods  (as a percentage of request):  56% (280m) / 50%\nMin replicas:                                          1\nMax replicas:                                          10\nConditions:\n  Type            Status  Reason              Message\n  ----            ------  ------              -------\n  AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\nEvents:\n  Type    Reason             Age   From                       Message\n  ----    ------             ----  ----                       -------\n  Normal  SuccessfulRescale  13s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n"))),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u4f60\u5df2\u6269\u5c55\u5230\u4e24\u4e2a pod\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"   NAME                                                     READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-k8ph2                             1/1       Running   0          1m\n   hello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n"))))),(0,o.kt)("details",{id:"observe-upscale-3-pods-cpu-cooldown"},(0,o.kt)("summary",null,"\u6269\u5c55\u5230\u4e09\u4e2a Pod\uff1aCPU \u7528\u91cf\u8fbe\u5230\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"},"  \u4f7f\u7528\u4f60\u7684\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6839\u636e CPU \u7528\u91cf\u6269\u5c55\u5230\u4e09\u4e2a Pod\uff0c\u5e76\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"horizo\u200b\u200bntal-pod-autoscaler-upscale-delay")," \u8bbe\u7f6e\u4e3a 3 \u5206\u949f\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                <none>\n   Annotations:                                           <none>\n   CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             9424896 / 100Mi\n     resource cpu on pods  (as a percentage of request):  66% (333m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  4m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n"))),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u4e09\u4e2a pod \u6b63\u5728\u8fd0\u884c\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                                                     READY     STATUS    RESTARTS   AGE\nhello-world-54764dfbf8-f46kh                             0/1       Running   0          1m\nhello-world-54764dfbf8-k8ph2                             1/1       Running   0          5m\nhello-world-54764dfbf8-q6l4v                             1/1       Running   0          3h\n"))))),(0,o.kt)("details",{id:"observe-downscale-1-pod"},(0,o.kt)("summary",null,"\u7f29\u51cf\u5230 1 \u4e2a Pod\uff1a\u6240\u6709\u6307\u6807\u5747\u4f4e\u4e8e\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"}," \u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay")," \u7684\u6240\u6709\u6307\u6807\u5747\u4f4e\u4e8e\u76ee\u6807\uff08\u9ed8\u8ba4\u4e3a 5 \u5206\u949f\uff09\u65f6\uff0c\u4f7f\u7528\u4f60\u7684\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u7f29\u51cf\u5230 1 \u4e2a pod\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Mon, 23 Jul 2018 22:22:04 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             10070016 / 100Mi\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  6m    horizontal-pod-autoscaler  New size: 3; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  1s    horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n"))))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u6307\u6807\u6d4b\u8bd5\u81ea\u52a8\u7f29\u653e\uff1a")),(0,o.kt)("details",{id:"custom-observe-upscale-2-pods-cpu"},(0,o.kt)("summary",null,"\u6269\u5c55\u5230\u4e24\u4e2a Pod\uff1aCPU \u7528\u91cf\u8fbe\u5230\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"},"  \u4f7f\u7528\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6839\u636e CPU \u7528\u91cf\u6269\u5c55\u5230\u4e24\u4e2a Pod\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  # kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'  Name:                                                  hello-world\n  Namespace:                                             default\n  Labels:                                                <none>\n  Annotations:                                           <none>\n  CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n  Reference:                                             Deployment/hello-world\n  Metrics:                                               ( current / target )\n    resource memory on pods:                             8159232 / 100Mi\n    "cpu_system" on pods:                                7m / 20m\n    resource cpu on pods  (as a percentage of request):  64% (321m) / 50%\n  Min replicas:                                          1\n  Max replicas:                                          10\n  Conditions:\n    Type            Status  Reason              Message\n    ----            ------  ------              -------\n    AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 2\n    ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n    ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n  Events:\n    Type    Reason             Age   From                       Message\n    ----    ------             ----  ----                       -------\n    Normal  SuccessfulRescale  16s   horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n'))),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u4e24\u4e2a pod \u6b63\u5728\u8fd0\u884c\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  # kubectl get pods\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"      NAME                           READY     STATUS    RESTARTS   AGE\n      hello-world-54764dfbf8-5pfdr   1/1       Running   0          3s\n      hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,o.kt)("details",{id:"observe-upscale-3-pods-cpu-cooldown-2"},(0,o.kt)("summary",null,"\u6269\u5c55\u5230\u4e09\u4e2a Pod\uff1aCPU \u7528\u91cf\u8fbe\u5230\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"}," \u5f53 cpu_system \u7528\u91cf\u8fbe\u5230\u76ee\u6807\u65f6\uff0c\u4f7f\u7528\u4f60\u7684\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6269\u5c55\u5230\u4e09\u4e2a Pod\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'   Name:                                                  hello-world\n   Namespace:                                             default\n   Labels:                                                <none>\n   Annotations:                                           <none>\n   CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n   Reference:                                             Deployment/hello-world\n   Metrics:                                               ( current / target )\n     resource memory on pods:                             8374272 / 100Mi\n     "cpu_system" on pods:                                27m / 20m\n     resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n   Min replicas:                                          1\n   Max replicas:                                          10\n   Conditions:\n     Type            Status  Reason              Message\n     ----            ------  ------              -------\n     AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n     ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n     ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n   Events:\n     Type    Reason             Age   From                       Message\n     ----    ------             ----  ----                       -------\n     Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n     Normal  SuccessfulRescale  3s    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n'))),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u4e09\u4e2a pod \u6b63\u5728\u8fd0\u884c\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"   # kubectl get pods\n   NAME                           READY     STATUS    RESTARTS   AGE\n   hello-world-54764dfbf8-5pfdr   1/1       Running   0          3m\n   hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n   hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,o.kt)("details",{id:"observe-upscale-4-pods"},(0,o.kt)("summary",null,"\u6269\u5c55\u5230\u56db\u4e2a Pod\uff1aCPU \u7528\u91cf\u8fbe\u5230\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"},"   \u4f7f\u7528\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6839\u636e CPU \u7528\u91cf\u6269\u5c55\u5230\u56db\u4e2a Pod\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-upscale-delay")," \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a 3 \u5206\u949f\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),(0,o.kt)("p",{parentName:"li"},"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8374272 / 100Mi\n      "cpu_system" on pods:                                27m / 20m\n      resource cpu on pods  (as a percentage of request):  71% (357m) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 3\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  3m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  4s    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u56db\u4e2a pod \u6b63\u5728\u8fd0\u884c\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get pods\n")),(0,o.kt)("p",{parentName:"li"}," \u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  NAME                           READY     STATUS    RESTARTS   AGE\n  hello-world-54764dfbf8-2p9xb   1/1       Running   0          5m\n  hello-world-54764dfbf8-5pfdr   1/1       Running   0          2m\n  hello-world-54764dfbf8-m2hrl   1/1       Running   0          1s\n  hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))),(0,o.kt)("details",{id:"custom-metrics-observe-downscale-1-pod"},(0,o.kt)("summary",null,"\u7f29\u51cf\u5230 1 \u4e2a Pod\uff1a\u6240\u6709\u6307\u6807\u5747\u4f4e\u4e8e\u76ee\u6807"),(0,o.kt)("p",{parentName:"li"},"  \u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal-pod-autoscaler-downscale-delay")," \u7684\u6240\u6709\u6307\u6807\u5747\u4f4e\u4e8e\u76ee\u6807\u65f6\uff0c\u4f7f\u7528\u4f60\u7684\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u7f29\u51cf\u5230 1 \u4e2a pod\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl describe hpa\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'    Name:                                                  hello-world\n    Namespace:                                             default\n    Labels:                                                <none>\n    Annotations:                                           <none>\n    CreationTimestamp:                                     Tue, 24 Jul 2018 18:01:11 +0200\n    Reference:                                             Deployment/hello-world\n    Metrics:                                               ( current / target )\n      resource memory on pods:                             8101888 / 100Mi\n      "cpu_system" on pods:                                8m / 20m\n      resource cpu on pods  (as a percentage of request):  0% (0) / 50%\n    Min replicas:                                          1\n    Max replicas:                                          10\n    Conditions:\n      Type            Status  Reason              Message\n      ----            ------  ------              -------\n      AbleToScale     True    SucceededRescale    the HPA controller was able to update the target scale to 1\n      ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from memory resource\n      ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range\n    Events:\n      Type    Reason             Age   From                       Message\n      ----    ------             ----  ----                       -------\n      Normal  SuccessfulRescale  10m    horizontal-pod-autoscaler  New size: 2; reason: cpu resource utilization (percentage of request) above target\n      Normal  SuccessfulRescale  8m    horizontal-pod-autoscaler  New size: 3; reason: pods metric cpu_system above target\n      Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target\n      Normal   SuccessfulRescale             13s               horizontal-pod-autoscaler  New size: 1; reason: All metrics below target\n'))),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u5355\u4e2a pod \u6b63\u5728\u8fd0\u884c\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"    # kubectl get pods\n")),"\u4f60\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"    NAME                           READY     STATUS    RESTARTS   AGE\n    hello-world-54764dfbf8-q6l82   1/1       Running   0          6h\n"))))))))}m.isMDXComponent=!0}}]);