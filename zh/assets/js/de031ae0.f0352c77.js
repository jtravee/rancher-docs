"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45169],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61982:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Helm Version Requirements"},l=void 0,u={unversionedId:"getting-started/installation-and-upgrade/resources/helm-version-requirements",id:"version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements",title:"Helm Version Requirements",description:"This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/helm-version-requirements",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Helm Version Requirements"},sidebar:"tutorialSidebar",previous:{title:"Choosing a Rancher Version",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},next:{title:"Adding TLS Secrets",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/resources/add-tls-secrets"}},c={},d=[],p={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section contains the requirements for Helm, which is the tool used to install Rancher on a high-availability Kubernetes cluster."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The installation instructions have been updated for Helm 3. For migration of installs started with Helm 2, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 Migration Docs.")," ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"This section")," provides a copy of the older high-availability Rancher installation instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm v3.2.x or higher is required to install or upgrade Rancher v2.5."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.16.0 or higher is required for Kubernetes v1.16. For the default Kubernetes version, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke/releases"},"release notes")," for the version of RKE that you are using."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.15.0 should not be used, because of an issue with converting/comparing numbers."),(0,a.kt)("li",{parentName:"ul"},"Helm v2.12.0 should not be used, because of an issue with ",(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager"),".")))}m.isMDXComponent=!0}}]);