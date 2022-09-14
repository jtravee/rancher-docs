"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80757],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],l={title:"Roles-based Access Control",shortTitle:"RBAC",weight:3},o=void 0,c={unversionedId:"explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans",id:"explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans",title:"Roles-based Access Control",description:"This section describes the permissions required to use the rancher-cis-benchmark App.",source:"@site/docs/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans.md",sourceDirName:"explanations/integrations-in-rancher/cis-scans",slug:"/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans",permalink:"/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cis-scans/rbac-for-cis-scans.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Roles-based Access Control",shortTitle:"RBAC",weight:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/explanations/integrations-in-rancher/cis-scans/configuration-reference"},next:{title:"Skipped and Not Applicable Tests",permalink:"/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"}},u={},p=[{value:"Cluster-Admin Access",id:"cluster-admin-access",level:2},{value:"Summary of Default Permissions for Kubernetes Default Roles",id:"summary-of-default-permissions-for-kubernetes-default-roles",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes the permissions required to use the rancher-cis-benchmark App."),(0,s.kt)("p",null,"The rancher-cis-benchmark is a cluster-admin only feature by default."),(0,s.kt)("p",null,"However, the ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," chart installs these two default ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"cis-admin"),(0,s.kt)("li",{parentName:"ul"},"cis-view")),(0,s.kt)("p",null,"In Rancher, only cluster owners and global administrators have ",(0,s.kt)("inlineCode",{parentName:"p"},"cis-admin")," access by default. "),(0,s.kt)("p",null,"Note: If you were using the ",(0,s.kt)("inlineCode",{parentName:"p"},"cis-edit")," role added in Rancher v2.5 setup, it has now been removed since\nRancher v2.5.2 because it essentially is same as ",(0,s.kt)("inlineCode",{parentName:"p"},"cis-admin"),". If you happen to create any clusterrolebindings\nfor ",(0,s.kt)("inlineCode",{parentName:"p"},"cis-edit"),", please update them to use ",(0,s.kt)("inlineCode",{parentName:"p"},"cis-admin")," ClusterRole instead."),(0,s.kt)("h2",{id:"cluster-admin-access"},"Cluster-Admin Access"),(0,s.kt)("p",null,"Rancher CIS Scans is a cluster-admin only feature by default.\nThis means only the Rancher global admins, and the cluster\u2019s cluster-owner can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install/Uninstall the rancher-cis-benchmark App"),(0,s.kt)("li",{parentName:"ul"},"See the navigation links for CIS Benchmark CRDs - ClusterScanBenchmarks, ClusterScanProfiles, ClusterScans"),(0,s.kt)("li",{parentName:"ul"},"List the default ClusterScanBenchmarks and ClusterScanProfiles"),(0,s.kt)("li",{parentName:"ul"},"Create/Edit/Delete new ClusterScanProfiles"),(0,s.kt)("li",{parentName:"ul"},"Create/Edit/Delete a new ClusterScan to run the CIS scan on the cluster"),(0,s.kt)("li",{parentName:"ul"},"View and Download the ClusterScanReport created after the ClusterScan is complete")),(0,s.kt)("h2",{id:"summary-of-default-permissions-for-kubernetes-default-roles"},"Summary of Default Permissions for Kubernetes Default Roles"),(0,s.kt)("p",null,"The rancher-cis-benchmark creates three ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," and adds the CIS Benchmark CRD access to the following default K8s ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ClusterRole created by chart"),(0,s.kt)("th",{parentName:"tr",align:null},"Default K8s ClusterRole"),(0,s.kt)("th",{parentName:"tr",align:null},"Permissions given with Role"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"cis-admin")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"admin")),(0,s.kt)("td",{parentName:"tr",align:null},"Ability to CRUD clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"cis-view")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"view ")),(0,s.kt)("td",{parentName:"tr",align:null},"Ability to List(R) clusterscanbenchmarks, clusterscanprofiles, clusterscans, clusterscanreports CR")))),(0,s.kt)("p",null,"By default only cluster-owner role will have ability to manage and use ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," feature."),(0,s.kt)("p",null,"The other Rancher roles (cluster-member, project-owner, project-member) do not have any default permissions to manage and use rancher-cis-benchmark resources."),(0,s.kt)("p",null,"But if a cluster-owner wants to delegate access to other users, they can do so by creating ClusterRoleBindings between these users and the above CIS ClusterRoles manually.\nThere is no automatic role aggregation supported for the ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," ClusterRoles."))}m.isMDXComponent=!0}}]);