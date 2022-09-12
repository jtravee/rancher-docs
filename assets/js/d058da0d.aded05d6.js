"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74111],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34725:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"AWS Marketplace Integration",weight:1},s="Overview",u={unversionedId:"pages-for-subheaders/aws-cloud-marketplace",id:"pages-for-subheaders/aws-cloud-marketplace",title:"AWS Marketplace Integration",description:"Rancher offers an integration with the AWS Marketplace which allows users to purchase a support contract with SUSE. This integration allows you easily adjust your support needs as you start to support more clusters.",source:"@site/docs/pages-for-subheaders/aws-cloud-marketplace.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/aws-cloud-marketplace",permalink:"/pages-for-subheaders/aws-cloud-marketplace",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/aws-cloud-marketplace.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"AWS Marketplace Integration",weight:1},sidebar:"tutorialSidebar",previous:{title:"Cloud Marketplace Integration",permalink:"/pages-for-subheaders/cloud-marketplace"},next:{title:"Installing the Adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"}},c={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Rancher offers an integration with the AWS Marketplace which allows users to purchase a support contract with SUSE. This integration allows you easily adjust your support needs as you start to support more clusters."),(0,o.kt)("h1",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must be running Rancher v2.6.7 or higher"),(0,o.kt)("li",{parentName:"ul"},"Rancher must be deployed with additional metrics enabled."),(0,o.kt)("li",{parentName:"ul"},"Rancher must be installed on an EKS cluster."),(0,o.kt)("li",{parentName:"ul"},"You must purchase at least one entitlement to Rancher support through AWS Marketplace."),(0,o.kt)("li",{parentName:"ul"},"You may need additional setup to support proxy/airgap use cases. See the ",(0,o.kt)("a",{parentName:"li",href:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements"},"prerequisites")," for more information.")),(0,o.kt)("h1",{id:"how-to-use"},"How to Use"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Complete the ",(0,o.kt)("a",{parentName:"li",href:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements"},"prerequisite steps"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"},"Install the CSP Adapter"),".")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Can I purchase support for more nodes later on?")),(0,o.kt)("p",null,"Yes. Simply go to the AWS Marketplace entry that you used to initially purchase support and increase the number of entitlements."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Can I use multiple instances of Rancher in the same AWS account?")),(0,o.kt)("p",null,"Yes. However, each cluster that Rancher is installed in will need to adhere to the prerequisites."),(0,o.kt)("p",null,"In addition, keep in mind that a given entitlement can only be used by one Rancher management server at a time."))}m.isMDXComponent=!0}}]);