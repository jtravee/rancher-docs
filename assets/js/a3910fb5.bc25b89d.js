"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42316],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,g=d["".concat(c,".").concat(p)]||d[p]||l[p]||i;return t?n.createElement(g,a(a({ref:r},f),{},{components:t})):n.createElement(g,a({ref:r},f))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59108:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205},c=void 0,u={unversionedId:"pages-for-subheaders/configure-microsoft-ad-federation-service-saml",id:"version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",title:"Configuring Microsoft Active Directory Federation Service (SAML)",description:"Available as of v2.0.7",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",permalink:"/v2.0-v2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-microsoft-ad-federation-service-saml.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",weight:1205},sidebar:"tutorialSidebar",previous:{title:"Configuring Okta (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"},next:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"}},f={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Outline",id:"setup-outline",level:2},{value:"Next: Configuring Microsoft AD FS for Rancher",id:"next-configuring-microsoft-ad-fs-for-rancher",level:3}],d={toc:l};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.0.7")),(0,i.kt)("p",null,"If your organization uses Microsoft Active Directory Federation Services (AD FS) for user authentication, you can configure Rancher to allow your users to log in using their AD FS credentials."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You must have Rancher installed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain your Rancher Server URL. During AD FS configuration, substitute this URL for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<RANCHER_SERVER>")," placeholder."),(0,i.kt)("li",{parentName:"ul"},"You must have a global administrator account on your Rancher installation.")),(0,i.kt)("p",null,"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services"},"Microsoft AD FS Server")," configured."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain your AD FS Server IP/DNS name. During AD FS configuration, substitute this IP/DNS name for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<AD_SERVER>")," placeholder."),(0,i.kt)("li",{parentName:"ul"},"You must have access to add ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/create-a-relying-party-trust"},"Relying Party Trusts")," on your AD FS Server.")),(0,i.kt)("h2",{id:"setup-outline"},"Setup Outline"),(0,i.kt)("p",null,"Setting up Microsoft AD FS with Rancher Server requires configuring AD FS on your Active Directory server, and configuring Rancher to utilize your AD FS server. The following pages serve as guides for setting up Microsoft AD FS authentication on your Rancher installation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"1. Configuring Microsoft AD FS for Rancher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},"2. Configuring Rancher for Microsoft AD FS"))),(0,i.kt)("p",null,"{{< saml_caveats >}}"),(0,i.kt)("h3",{id:"next-configuring-microsoft-ad-fs-for-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"Next: Configuring Microsoft AD FS for Rancher")))}p.isMDXComponent=!0}}]);