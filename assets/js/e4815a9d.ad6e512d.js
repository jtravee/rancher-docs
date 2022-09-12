"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73679],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45550:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={title:"3. Add Deployments and Services with the Istio Sidecar",weight:4},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",id:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",title:"3. Add Deployments and Services with the Istio Sidecar",description:"To enable Istio for a workload, the cluster and namespace must have the Istio app installed.",source:"@site/docs/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"3. Add Deployments and Services with the Istio Sidecar",weight:4},sidebar:"tutorialSidebar",previous:{title:"2. Enable Istio in a Namespace",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},next:{title:"4. Set up the Istio Gateway",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"}},c={},d=[{value:"Add Deployments and Services",id:"add-deployments-and-services",level:3},{value:"Example Deployments and Services",id:"example-deployments-and-services",level:3},{value:"Resource YAML",id:"resource-yaml",level:3},{value:"Next: Set up the Istio Gateway",id:"next-set-up-the-istio-gateway",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To enable Istio for a workload, the cluster and namespace must have the Istio app installed.  "))),(0,o.kt)("p",null,"Enabling Istio in a namespace only enables automatic sidecar injection for new workloads. To enable the Envoy sidecar for existing workloads, you need to enable it manually for each workload."),(0,o.kt)("p",null,"To inject the Istio sidecar on an existing workload in the namespace,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the workload where you want to inject the Istio sidecar and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Redeploy"),". When the workload is redeployed, it will have the Envoy sidecar automatically injected.")),(0,o.kt)("p",null,"Wait a few minutes for the workload to upgrade to have the istio sidecar. Click it and go to the Containers section. You should be able to see ",(0,o.kt)("inlineCode",{parentName:"p"},"istio-proxy")," alongside your original workload. This means the Istio sidecar is enabled for the workload. Istio is doing all the wiring for the sidecar envoy. Now Istio can do all the features automatically if you enable them in the yaml."),(0,o.kt)("h3",{id:"add-deployments-and-services"},"Add Deployments and Services"),(0,o.kt)("p",null,"There are a few ways to add new ",(0,o.kt)("strong",{parentName:"p"},"Deployments")," in your namespace:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Deployment"),"."),(0,o.kt)("li",{parentName:"ol"},"Fill out the form, or ",(0,o.kt)("strong",{parentName:"li"},"Edit as Yaml"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),". ")),(0,o.kt)("p",null,"To add a ",(0,o.kt)("strong",{parentName:"p"},"Service")," to your namespace:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery > Services"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the type of service that you want."),(0,o.kt)("li",{parentName:"ol"},"Fill out the form, or ",(0,o.kt)("strong",{parentName:"li"},"Edit as Yaml"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create")," ")),(0,o.kt)("p",null,"You can also create deployments and services using the kubectl ",(0,o.kt)("strong",{parentName:"p"},"shell")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/deployment file>.yaml")," if your file is stored locally in the cluster"),(0,o.kt)("li",{parentName:"ol"},"Or run ",(0,o.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),", paste the file contents into the terminal, then run ",(0,o.kt)("inlineCode",{parentName:"li"},"EOF")," to complete the command. ")),(0,o.kt)("h3",{id:"example-deployments-and-services"},"Example Deployments and Services"),(0,o.kt)("p",null,"Next we add the Kubernetes resources for the sample deployments and services for the BookInfo app in Istio's documentation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the top navigation bar, open the kubectl shell."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -")),(0,o.kt)("li",{parentName:"ol"},"Copy the below resources into the the shell."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"EOF"))),(0,o.kt)("p",null,"This will set up the following sample resources from Istio's example BookInfo app:"),(0,o.kt)("p",null,"Details service and deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"details")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-details")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"details-v1")," Deployment")),(0,o.kt)("p",null,"Ratings service and deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"ratings")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-ratings")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"ratings-v1")," Deployment")),(0,o.kt)("p",null,"Reviews service and deployments (three versions):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-reviews")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v1")," Deployment"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v2")," Deployment"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v3")," Deployment")),(0,o.kt)("p",null,"Productpage service and deployment:"),(0,o.kt)("p",null,"This is the main page of the app, which will be visible from a web browser. The other services will be called from this page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"productpage")," service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-productpage")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"productpage-v1")," Deployment")),(0,o.kt)("h3",{id:"resource-yaml"},"Resource YAML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Copyright 2017 Istio Authors\n#\n#   Licensed under the Apache License, Version 2.0 (the "License");\n#   you may not use this file except in compliance with the License.\n#   You may obtain a copy of the License at\n#\n#       http://www.apache.org/licenses/LICENSE-2.0\n#\n#   Unless required by applicable law or agreed to in writing, software\n#   distributed under the License is distributed on an "AS IS" BASIS,\n#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n#   See the License for the specific language governing permissions and\n#   limitations under the License.\n\n##################################################################################################\n# Details service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: details\n  labels:\n    app: details\n    service: details\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: details\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-details\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details-v1\n  labels:\n    app: details\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: details\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: details\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-details\n      containers:\n      - name: details\n        image: docker.io/istio/examples-bookinfo-details-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Ratings service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: ratings\n  labels:\n    app: ratings\n    service: ratings\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: ratings\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-ratings\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ratings-v1\n  labels:\n    app: ratings\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ratings\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: ratings\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-ratings\n      containers:\n      - name: ratings\n        image: docker.io/istio/examples-bookinfo-ratings-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Reviews service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: reviews\n  labels:\n    app: reviews\n    service: reviews\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: reviews\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-reviews\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v1\n  labels:\n    app: reviews\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v2\n  labels:\n    app: reviews\n    version: v2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v2\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v2\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v2:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v3\n  labels:\n    app: reviews\n    version: v3\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v3\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v3\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Productpage services\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: productpage\n  labels:\n    app: productpage\n    service: productpage\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: productpage\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-productpage\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: productpage-v1\n  labels:\n    app: productpage\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: productpage\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: productpage\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-productpage\n      containers:\n      - name: productpage\n        image: docker.io/istio/examples-bookinfo-productpage-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n')),(0,o.kt)("h3",{id:"next-set-up-the-istio-gateway"},(0,o.kt)("a",{parentName:"h3",href:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Next: Set up the Istio Gateway")))}u.isMDXComponent=!0}}]);