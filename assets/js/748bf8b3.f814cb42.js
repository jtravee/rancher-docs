"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91859],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),l=n(86010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),l=n(67294),r=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(w,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!w.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),C=N.tabGroupChoices,y=N.setTabGroupChoices,F=(0,l.useState)(b),O=F[0],x=F[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=C[h];null!=M&&M!==O&&w.some((function(e){return e.value===M}))&&x(M)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),a=w[n].value;a!==O&&(E(t),x(a),null!=h&&y(h,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=T.indexOf(e.currentTarget)+1;n=null!=(a=T[l])?a:T[0];break;case"ArrowLeft":var r,o=T.indexOf(e.currentTarget)-1;n=null!=(r=T[o])?r:T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},w.map((function(e){var t=e.value,n=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:_,onClick:_},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},56042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(65488),i=n(85162),s=["components"],u={title:"Flows and ClusterFlows",weight:1},c=void 0,p={unversionedId:"explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",id:"version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",title:"Flows and ClusterFlows",description:"For the full details on configuring Flows and ClusterFlows, see the Banzai Cloud Logging operator documentation.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",sourceDirName:"explanations/integrations-in-rancher/logging/custom-resource-configuration",slug:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",permalink:"/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",tags:[],version:"2.5",lastUpdatedAt:1662794811,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Flows and ClusterFlows",weight:1},sidebar:"tutorialSidebar",previous:{title:"Custom Resource Configuration",permalink:"/v2.5/pages-for-subheaders/custom-resource-configuration"},next:{title:"Outputs and ClusterOutputs",permalink:"/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"}},d={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Changes in v2.5.8",id:"changes-in-v258",level:2},{value:"Flows",id:"flows",level:2},{value:"Matches",id:"matches",level:3},{value:"Filters",id:"filters",level:3},{value:"Outputs",id:"outputs",level:3},{value:"ClusterFlows",id:"clusterflows",level:2},{value:"Flows",id:"flows-1",level:2},{value:"Matches",id:"matches-1",level:3},{value:"Filters",id:"filters-1",level:3},{value:"Outputs",id:"outputs-1",level:3},{value:"ClusterFlows",id:"clusterflows-1",level:2},{value:"YAML Example",id:"yaml-example",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the full details on configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},"Banzai Cloud Logging operator documentation.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#yaml-example"},"YAML Example"))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flows-2-5-8"},"Flows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#matches-2-5-8"},"Matches")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#filters-2-5-8"},"Filters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#outputs-2-5-8"},"Outputs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusterflows-2-5-8"},"ClusterFlows"))),(0,r.kt)("h2",{id:"changes-in-v258"},"Changes in v2.5.8"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," can now be configured by filling out forms in the Rancher UI."),(0,r.kt)("a",{id:"flows-2-5-8"}),(0,r.kt)("h2",{id:"flows"},"Flows"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," defines which logs to collect and filter and which output to send the logs to."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, which means logs will only be collected from the namespace that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is deployed in."),(0,r.kt)("p",null,"For more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/flow_types/"},"FlowSpec.")),(0,r.kt)("a",{id:"matches-2-5-8"}),(0,r.kt)("h3",{id:"matches"},"Matches"),(0,r.kt)("p",null,"Match statements are used to select which containers to pull logs from."),(0,r.kt)("p",null,"You can specify match statements to select or exclude logs according to Kubernetes labels, container and host names. Match statements are evaluated in the order they are defined and processed only until the first matching select or exclude rule applies."),(0,r.kt)("p",null,"Matches can be configured by filling out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,r.kt)("p",null,"For detailed examples on using the match statement, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"official documentation on log routing.")),(0,r.kt)("a",{id:"filters-2-5-8"}),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("p",null,"You can define one or more filters within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),". Filters can perform various actions on the logs, for example, add additional data, transform the logs, or parse values from the records. The filters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," are applied in the order in the definition."),(0,r.kt)("p",null,"For a list of filters supported by the Banzai Cloud Logging operator, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"this page.")),(0,r.kt)("p",null,"Filters need to be configured in YAML."),(0,r.kt)("a",{id:"outputs-2-5-8"}),(0,r.kt)("h3",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," will receive logs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),". Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," must reside in same namespace as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," can be referenced when filling out the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,r.kt)("a",{id:"clusterflows-2-5-8"}),(0,r.kt)("h2",{id:"clusterflows"},"ClusterFlows"),(0,r.kt)("p",null,"Matches, filters and ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," in the same way that they are configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows"),". The key difference is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," is scoped at the cluster level and can configure log collection across all namespaces."),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," selects logs from all namespaces in the cluster, logs from the cluster will be collected and logged to the selected ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),".")),(0,r.kt)(i.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flows-2-5-0"},"Flows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#matches-2-5-0"},"Matches")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#filters-2-5-0"},"Filters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#outputs-2-5-0"},"Outputs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusterflows-2-5-0"},"ClusterFlows"))),(0,r.kt)("a",{id:"flows-2-5-0"}),(0,r.kt)("h2",{id:"flows-1"},"Flows"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," defines which logs to collect and filter and which ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," to send the logs to. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, which means logs will only be collected from the namespace that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is deployed in."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," need to be defined in YAML."),(0,r.kt)("p",null,"For more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/flow_types/"},"FlowSpec.")),(0,r.kt)("a",{id:"matches-2-5-0"}),(0,r.kt)("h3",{id:"matches-1"},"Matches"),(0,r.kt)("p",null,"Match statements are used to select which containers to pull logs from."),(0,r.kt)("p",null,"You can specify match statements to select or exclude logs according to Kubernetes labels, container and host names. Match statements are evaluated in the order they are defined and processed only until the first matching select or exclude rule applies."),(0,r.kt)("p",null,"For detailed examples on using the match statement, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"official documentation on log routing.")),(0,r.kt)("a",{id:"filters-2-5-0"}),(0,r.kt)("h3",{id:"filters-1"},"Filters"),(0,r.kt)("p",null,"You can define one or more filters within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),". Filters can perform various actions on the logs, for example, add additional data, transform the logs, or parse values from the records. The filters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," are applied in the order in the definition."),(0,r.kt)("p",null,"For a list of filters supported by the Banzai Cloud Logging operator, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"this page.")),(0,r.kt)("a",{id:"outputs-2-5-0"}),(0,r.kt)("h3",{id:"outputs-1"},"Outputs"),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," will receive logs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," must reside in same namespace as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("a",{id:"clusterflows-2-5-0"}),(0,r.kt)("h2",{id:"clusterflows-1"},"ClusterFlows"),(0,r.kt)("p",null,"Matches, filters and ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are also configured for ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),". The only difference is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," is scoped at the cluster level and can configure log collection across all namespaces."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," selects logs from all namespaces in the cluster. Logs from the cluster will be collected and logged to the selected ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," need to be defined in YAML."))),(0,r.kt)("h2",{id:"yaml-example"},"YAML Example"),(0,r.kt)("p",null,"The following example ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," transforms the log messages from the default namespace and sends them to an S3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: flow-sample\n  namespace: default\nspec:\n  filters:\n    - parser:\n        remove_key_name_field: true\n        parse:\n          type: nginx\n    - tag_normaliser:\n        format: ${namespace_name}.${pod_name}.${container_name}\n  localOutputRefs:\n    - s3-output\n  match:\n    - select:\n        labels:\n          app: nginx\n")))}h.isMDXComponent=!0}}]);