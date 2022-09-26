"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33084],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=g(t),h=o,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),o=t(86010),a="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(87462),o=t(67294),a=t(86010),i=t(72389),l=t(67392),s=t(7094),g=t(12466),u="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,h=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(n=null!=h?h:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),N=y.tabGroupChoices,C=y.setTabGroupChoices,x=(0,o.useState)(w),T=x[0],O=x[1],L=[],E=(0,g.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=N[m];null!=R&&R!==T&&k.some((function(e){return e.value===R}))&&O(R)}var I=function(e){var n=e.currentTarget,t=L.indexOf(n),r=k[t].value;r!==T&&(E(n),O(r),null!=m&&C(m,String(r)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,o=L.indexOf(e.currentTarget)+1;t=null!=(r=L[o])?r:L[0];break;case"ArrowLeft":var a,i=L.indexOf(e.currentTarget)-1;t=null!=(a=L[i])?a:L[L.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return L.push(e)},onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,a.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function h(e){var n=(0,i.Z)();return o.createElement(p,(0,r.Z)({key:String(n)},e))}},23867:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return h}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(65488),l=t(85162),s=["components"],g={title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15,aliases:["/rancher/v2.5/en/dashboard/logging","/rancher/v2.5/en/logging/v2.5","/rancher/v2.5/en/cluster-admin/tools/logging","/rancher/v2.x/en/logging/","/rancher/v2.x/en/logging/v2.5/"]},u=void 0,c={unversionedId:"pages-for-subheaders/logging",id:"version-2.5/pages-for-subheaders/logging",title:"Rancher Integration with Logging Services",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/logging",permalink:"/zh/v2.5/pages-for-subheaders/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/logging.md",tags:[],version:"2.5",lastUpdatedAt:1662794811,formattedLastUpdatedAt:"2022/9/10",frontMatter:{title:"Rancher Integration with Logging Services",shortTitle:"Logging",description:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",metaDescription:"Rancher integrates with popular logging services. Learn the requirements and benefits of integrating with logging services, and enable logging on your cluster.",weight:15,aliases:["/rancher/v2.5/en/dashboard/logging","/rancher/v2.5/en/logging/v2.5","/rancher/v2.5/en/cluster-admin/tools/logging","/rancher/v2.x/en/logging/","/rancher/v2.x/en/logging/v2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Longhorn - Cloud native distributed block storage for Kubernetes",permalink:"/zh/v2.5/explanations/integrations-in-rancher/longhorn"},next:{title:"Architecture",permalink:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"}},p={},h=[{value:"Enabling Logging",id:"enabling-logging",level:2},{value:"Uninstall Logging",id:"uninstall-logging",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Role-based Access Control",id:"role-based-access-control",level:2},{value:"Configuring Logging Custom Resources",id:"configuring-logging-custom-resources",level:2},{value:"Flows and ClusterFlows",id:"flows-and-clusterflows",level:3},{value:"Outputs and ClusterOutputs",id:"outputs-and-clusteroutputs",level:3},{value:"Configuring the Logging Helm Chart",id:"configuring-the-logging-helm-chart",level:2},{value:"Windows Support",id:"windows-support",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Working with Taints and Tolerations",id:"working-with-taints-and-tolerations",level:3},{value:"Logging V2 with SELinux",id:"logging-v2-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The <code>cattle-logging</code> Namespace Being Recreated",id:"the-cattle-logging-namespace-being-recreated",level:3}],d={toc:h};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," now powers Rancher's logging solution in place of the former, in-house solution."),(0,a.kt)("p",null,"For an overview of the changes in v2.5, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture#changes-in-rancher-v25"},"this section.")," For information about migrating from Logging V1, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"},"this page.")),(0,a.kt)("h2",{id:"enabling-logging"},"Enabling Logging"),(0,a.kt)("p",null,"You can enable the logging for a Rancher managed cluster by going to the Apps page and installing the logging app."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster where you want to install logging and click ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging")," app."),(0,a.kt)("li",{parentName:"ol"},"Scroll to the bottom of the Helm chart README and click ",(0,a.kt)("strong",{parentName:"li"},"Install"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The logging app is deployed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,a.kt)("h2",{id:"uninstall-logging"},"Uninstall Logging"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Explorer"),", click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," namespace and check the boxes for ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging-crd"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),"."),(0,a.kt)("li",{parentName:"ol"},"Confirm ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result")," ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-logging")," is uninstalled."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"For more information about how the logging application works, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-architecture"},"this section.")),(0,a.kt)("h2",{id:"role-based-access-control"},"Role-based Access Control"),(0,a.kt)("p",null,"Rancher logging has two roles, ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-view"),". For more information on how and when to use these roles, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/rbac-for-logging"},"this page.")),(0,a.kt)("h2",{id:"configuring-logging-custom-resources"},"Configuring Logging Custom Resources"),(0,a.kt)("p",null,"To manage ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows,")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", go to the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Explorer")," in the Rancher UI. In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"Cluster Explorer > Logging"),"."),(0,a.kt)("h3",{id:"flows-and-clusterflows"},"Flows and ClusterFlows"),(0,a.kt)("p",null,"For help with configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},"this page.")),(0,a.kt)("h3",{id:"outputs-and-clusteroutputs"},"Outputs and ClusterOutputs"),(0,a.kt)("p",null,"For help with configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},"this page.")),(0,a.kt)("h2",{id:"configuring-the-logging-helm-chart"},"Configuring the Logging Helm Chart"),(0,a.kt)("p",null,"For a list of options that can be configured when the logging application is installed or upgraded, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},"this page.")),(0,a.kt)("h3",{id:"windows-support"},"Windows Support"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,a.kt)("p",null,"As of Rancher v2.5.8, logging support for Windows clusters has been added and logs can be collected from Windows nodes."),(0,a.kt)("p",null,"For details on how to enable or disable Windows node logging, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabledisable-windows-node-logging"},"this section."))),(0,a.kt)(l.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,a.kt)("p",null,"Clusters with Windows workers support exporting logs from Linux nodes, but Windows node logs are currently unable to be exported.\nOnly Linux node logs are able to be exported."),(0,a.kt)("p",null,"To allow the logging pods to be scheduled on Linux nodes, tolerations must be added to the pods. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"Working with Taints and Tolerations")," section for details and an example."))),(0,a.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,a.kt)("p",null,"For details on using a custom Docker root directory, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#working-with-a-custom-docker-root-directory"},"this section.")),(0,a.kt)("h3",{id:"working-with-taints-and-tolerations"},"Working with Taints and Tolerations"),(0,a.kt)("p",null,"For information on how to use taints and tolerations with the logging application, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,a.kt)("h3",{id:"logging-v2-with-selinux"},"Logging V2 with SELinux"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,a.kt)("p",null,"For information on enabling the logging application for SELinux-enabled nodes, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#enabling-the-logging-application-to-work-with-selinux"},"this section.")),(0,a.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,a.kt)("p",null,"By default, Rancher collects logs for control plane components and node components for all cluster types. In some cases additional logs can be collected. For details, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/logging/logging-helm-chart-options#additional-logging-sources"},"this section.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"the-cattle-logging-namespace-being-recreated"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"cattle-logging")," Namespace Being Recreated"),(0,a.kt)("p",null,"If your cluster previously deployed logging from the Cluster Manager UI, you may encounter an issue where its ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace is continually being recreated."),(0,a.kt)("p",null,"The solution is to delete all ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterloggings.management.cattle.io")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"projectloggings.management.cattle.io")," custom resources from the cluster specific namespace in the management cluster.\nThe existence of these custom resources causes Rancher to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," namespace in the downstream cluster if it does not exist."),(0,a.kt)("p",null,"The cluster namespace matches the cluster ID, so we need to find the cluster ID for each cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your web browser, navigate to your cluster(s) in either the Cluster Manager UI or the Cluster Explorer UI."),(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion from one of the URLs below. The ",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," portion is the cluster namespace name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster Management UI\nhttps://<your-url>/c/<cluster-id>/\n\n# Cluster Explorer UI (Dashboard)\nhttps://<your-url>/dashboard/c/<cluster-id>/\n")),(0,a.kt)("p",null,"Now that we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," namespace, we can delete the CRs that cause ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," to be continually recreated.\n",(0,a.kt)("em",{parentName:"p"},"Warning:")," ensure that logging, the version installed from the Cluster Manager UI, is not currently in use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete clusterloggings.management.cattle.io -n <cluster-id>\nkubectl delete projectloggings.management.cattle.io -n <cluster-id>\n")))}m.isMDXComponent=!0}}]);