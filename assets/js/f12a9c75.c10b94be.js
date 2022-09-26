"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73714],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Template Enforcement",weight:32,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/enforcement/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",title:"Template Enforcement",description:"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",tags:[],version:"2.5",lastUpdatedAt:1662794811,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Template Enforcement",weight:32,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/enforcement/"]},sidebar:"tutorialSidebar",previous:{title:"Creating and Revising Templates",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},next:{title:"Overriding Template Settings",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"}},c={},p=[{value:"Requiring New Clusters to Use an RKE Template",id:"requiring-new-clusters-to-use-an-rke-template",level:2},{value:"Disabling RKE Template Enforcement",id:"disabling-rke-template-enforcement",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template."),(0,i.kt)("p",null,"By default, any standard user in Rancher can create clusters. But when RKE template enforcement is turned on,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only an administrator has the ability to create clusters without a template."),(0,i.kt)("li",{parentName:"ul"},"All standard users must use an RKE template to create a new cluster."),(0,i.kt)("li",{parentName:"ul"},"Standard users cannot create a cluster without using a template.")),(0,i.kt)("p",null,"Users can only create new templates if the administrator ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions#allowing-a-user-to-create-templates"},"gives them permission.")),(0,i.kt)("p",null,"After a cluster is created with an RKE template, the cluster creator cannot edit settings that are defined in the template. The only way to change those settings after the cluster is created is to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#updating-a-cluster-created-with-an-rke-template"},"upgrade the cluster to a new revision")," of the same template. If cluster creators want to change template-defined settings, they would need to contact the template owner to get a new revision of the template. For details on how template revisions work, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"documentation on revising templates.")),(0,i.kt)("h2",{id:"requiring-new-clusters-to-use-an-rke-template"},"Requiring New Clusters to Use an RKE Template"),(0,i.kt)("p",null,"You might want to require new clusters to use a template to ensure that any cluster launched by a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard user")," will use the Kubernetes and/or Rancher settings that are vetted by administrators."),(0,i.kt)("p",null,"To require new clusters to use an RKE template, administrators can turn on RKE template enforcement with the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, click the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click the vertical ",(0,i.kt)("strong",{parentName:"li"},"\u22ee")," and click ",(0,i.kt)("strong",{parentName:"li"},"Edit.")),(0,i.kt)("li",{parentName:"ol"},"Set the value to ",(0,i.kt)("strong",{parentName:"li"},"True")," and click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," All clusters provisioned by Rancher must use a template, unless the creator is an administrator."),(0,i.kt)("h2",{id:"disabling-rke-template-enforcement"},"Disabling RKE Template Enforcement"),(0,i.kt)("p",null,"To allow new clusters to be created without an RKE template, administrators can turn off RKE template enforcement with the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Global")," view, click the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click the vertical ",(0,i.kt)("strong",{parentName:"li"},"\u22ee")," and click ",(0,i.kt)("strong",{parentName:"li"},"Edit.")),(0,i.kt)("li",{parentName:"ol"},"Set the value to ",(0,i.kt)("strong",{parentName:"li"},"False")," and click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," When clusters are provisioned by Rancher, they don't need to use a template."))}d.isMDXComponent=!0}}]);