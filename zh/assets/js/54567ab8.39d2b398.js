"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66575],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64086:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Example Scenarios"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",title:"Example Scenarios",description:"These example scenarios describe how an organization could use templates to standardize cluster creation.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Example Scenarios"},sidebar:"tutorialSidebar",previous:{title:"RKE Templates and Infrastructure",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"},next:{title:"Pod Security Policies",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"}},c={},p=[{value:"Enforcing a Template Setting for Everyone",id:"enforcing-a-template-setting-for-everyone",level:2},{value:"Templates for Basic and Advanced Users",id:"templates-for-basic-and-advanced-users",level:2},{value:"Updating Templates and Clusters Created with Them",id:"updating-templates-and-clusters-created-with-them",level:2},{value:"Allowing Other Users to Control and Share a Template",id:"allowing-other-users-to-control-and-share-a-template",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"These example scenarios describe how an organization could use templates to standardize cluster creation."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Enforcing templates:")," Administrators might want to ",(0,s.kt)("a",{parentName:"li",href:"#enforcing-a-template-setting-for-everyone"},"enforce one or more template settings for everyone")," if they want all new Rancher-provisioned clusters to have those settings."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sharing different templates with different users:")," Administrators might give ",(0,s.kt)("a",{parentName:"li",href:"#templates-for-basic-and-advanced-users"},"different templates to basic and advanced users,")," so that basic users have more restricted options and advanced users have more discretion when creating clusters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Updating template settings:")," If an organization's security and DevOps teams decide to embed best practices into the required settings for new clusters, those best practices could change over time. If the best practices change, ",(0,s.kt)("a",{parentName:"li",href:"#updating-templates-and-clusters-created-with-them"},"a template can be updated to a new revision")," and clusters created from the template can upgrade to the new version of the template."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sharing ownership of a template:")," When a template owner no longer wants to maintain a template, or wants to delegate ownership of the template, this scenario describes how ",(0,s.kt)("a",{parentName:"li",href:"#allowing-other-users-to-control-and-share-a-template"},"template ownership can be shared."))),(0,s.kt)("h2",{id:"enforcing-a-template-setting-for-everyone"},"Enforcing a Template Setting for Everyone"),(0,s.kt)("p",null,"Let's say there is an organization in which the administrators decide that all new clusters should be created with Kubernetes version 1.14."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"First, an administrator creates a template which specifies the Kubernetes version as 1.14 and marks all other settings as ",(0,s.kt)("strong",{parentName:"li"},"Allow User Override"),"."),(0,s.kt)("li",{parentName:"ol"},"The administrator makes the template public."),(0,s.kt)("li",{parentName:"ol"},"The administrator turns on template enforcement.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Results:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All Rancher users in the organization have access to the template."),(0,s.kt)("li",{parentName:"ul"},"All new clusters created by ",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard users")," with this template will use Kubernetes 1.14 and they are unable to use a different Kubernetes version. By default, standard users don't have permission to create templates, so this template will be the only template they can use unless more templates are shared with them."),(0,s.kt)("li",{parentName:"ul"},"All standard users must use a cluster template to create a new cluster. They cannot create a cluster without using a template.")),(0,s.kt)("p",null,"In this way, the administrators enforce the Kubernetes version across the organization, while still allowing end users to configure everything else."),(0,s.kt)("h2",{id:"templates-for-basic-and-advanced-users"},"Templates for Basic and Advanced Users"),(0,s.kt)("p",null,"Let's say an organization has both basic and advanced users. Administrators want the basic users to be required to use a template, while the advanced users and administrators create their clusters however they want."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"First, an administrator turns on ",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates#requiring-new-clusters-to-use-an-rke-template"},"RKE template enforcement.")," This means that every ",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard user")," in Rancher will need to use an RKE template when they create a cluster."),(0,s.kt)("li",{parentName:"ol"},"The administrator then creates two templates:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"One template for basic users, with almost every option specified except for access keys"),(0,s.kt)("li",{parentName:"ul"},"One template for advanced users, which has most or all options has ",(0,s.kt)("strong",{parentName:"li"},"Allow User Override")," turned on")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The administrator shares the advanced template with only the advanced users."),(0,s.kt)("li",{parentName:"ol"},"The administrator makes the template for basic users public, so the more restrictive template is an option for everyone who creates a Rancher-provisioned cluster.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," All Rancher users, except for administrators, are required to use a template when creating a cluster. Everyone has access to the restrictive template, but only advanced users have permission to use the more permissive template. The basic users are more restricted, while advanced users have more freedom when configuring their Kubernetes clusters."),(0,s.kt)("h2",{id:"updating-templates-and-clusters-created-with-them"},"Updating Templates and Clusters Created with Them"),(0,s.kt)("p",null,"Let's say an organization has a template that requires clusters to use Kubernetes v1.14. However, as time goes on, the administrators change their minds. They decide they want users to be able to upgrade their clusters to use newer versions of Kubernetes."),(0,s.kt)("p",null,"In this organization, many clusters were created with a template that requires Kubernetes v1.14. Because the template does not allow that setting to be overridden, the users who created the cluster cannot directly edit that setting."),(0,s.kt)("p",null,"The template owner has several options for allowing the cluster creators to upgrade Kubernetes on their clusters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Specify Kubernetes v1.15 on the template:")," The template owner can create a new template revision that specifies Kubernetes v1.15. Then the owner of each cluster that uses that template can upgrade their cluster to a new revision of the template. This template upgrade allows the cluster creator to upgrade Kubernetes to v1.15 on their cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Allow any Kubernetes version on the template:")," When creating a template revision, the template owner can also mark the the Kubernetes version as ",(0,s.kt)("strong",{parentName:"li"},"Allow User Override")," using the switch near that setting on the Rancher UI. This will allow clusters that upgrade to this template revision to use any version of Kubernetes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Allow the latest minor Kubernetes version on the template:")," The template owner can also create a template revision in which the Kubernetes version is defined as ",(0,s.kt)("strong",{parentName:"li"},"Latest v1.14 (Allows patch version upgrades).")," This means clusters that use that revision will be able to get patch version upgrades, but major version upgrades will not be allowed.")),(0,s.kt)("h2",{id:"allowing-other-users-to-control-and-share-a-template"},"Allowing Other Users to Control and Share a Template"),(0,s.kt)("p",null,"Let's say Alice is a Rancher administrator. She owns an RKE template that reflects her organization's agreed-upon best practices for creating a cluster."),(0,s.kt)("p",null,"Bob is an advanced user who can make informed decisions about cluster configuration. Alice trusts Bob to create new revisions of her template as the best practices get updated over time. Therefore, she decides to make Bob an owner of the template."),(0,s.kt)("p",null,"To share ownership of the template with Bob, Alice ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-ownership-of-templates"},"adds Bob as an owner of her template.")),(0,s.kt)("p",null,"The result is that as a template owner, Bob is in charge of version control for that template. Bob can now do all of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"Revise the template")," when the best practices change"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#disabling-a-template-revision"},"Disable outdated revisions")," of the template so that no new clusters can be created with it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#deleting-a-template"},"Delete the whole template")," if the organization wants to go in a different direction"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#setting-a-template-revision-as-default"},"Set a certain revision as default")," when users create a cluster with it. End users of the template will still be able to choose which revision they want to create the cluster with."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"Share the template")," with specific users, make the template available to all Rancher users, or share ownership of the template with another user.")))}h.isMDXComponent=!0}}]);