"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80781],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),p=r,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84307:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Configure Active Directory (AD)",weight:1112},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory",title:"Configure Active Directory (AD)",description:"If your organization uses Microsoft Active Directory as central user repository, you can configure Rancher to communicate with an Active Directory server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the Active Directory, while allowing end-users to authenticate with their AD credentials when logging in to the Rancher UI.",source:"@site/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory.md",tags:[],version:"current",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Configure Active Directory (AD)",weight:1112},sidebar:"tutorialSidebar",previous:{title:"Configure Google OAuth",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-google-oauth"},next:{title:"Configure FreeIPA",permalink:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"Open Active Directory Configuration",id:"open-active-directory-configuration",level:3},{value:"Configure Active Directory Server Settings",id:"configure-active-directory-server-settings",level:3},{value:"Configure User/Group Schema",id:"configure-usergroup-schema",level:3},{value:"User Schema",id:"user-schema",level:4},{value:"Group Schema",id:"group-schema",level:4},{value:"Test Authentication",id:"test-authentication",level:3},{value:"Annex: Identify Search Base and Schema using ldapsearch",id:"annex-identify-search-base-and-schema-using-ldapsearch",level:2},{value:"Identify Search Base",id:"identify-search-base",level:3},{value:"Identify User Schema",id:"identify-user-schema",level:3},{value:"Identify Group Schema",id:"identify-group-schema",level:3},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2}],m={toc:d};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses Microsoft Active Directory as central user repository, you can configure Rancher to communicate with an Active Directory server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the Active Directory, while allowing end-users to authenticate with their AD credentials when logging in to the Rancher UI."),(0,i.kt)("p",null,"Rancher uses LDAP to communicate with the Active Directory server. The authentication flow for Active Directory is therefore the same as for the ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/configure-openldap"},"OpenLDAP authentication")," integration."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before you start, please familiarise yourself with the concepts of ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You'll need to create or obtain from your AD administrator a new AD user to use as service account for Rancher. This user must have sufficient permissions to perform LDAP searches and read attributes of users and groups under your AD domain."),(0,i.kt)("p",null,"Usually a (non-admin) ",(0,i.kt)("strong",{parentName:"p"},"Domain User")," account should be used for this purpose, as by default such user has read-only privileges for most objects in the domain partition."),(0,i.kt)("p",null,"Note however, that in some locked-down Active Directory configurations this default behaviour may not apply. In such case you will need to ensure that the service account user has at least ",(0,i.kt)("strong",{parentName:"p"},"Read")," and ",(0,i.kt)("strong",{parentName:"p"},"List Content")," permissions granted either on the Base OU (enclosing users and groups) or globally for the domain."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Using TLS?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the certificate used by the AD server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upon an upgrade to v2.6.0, authenticating via Rancher against an active directory using TLS can fail if the certificates on the AD server do not support SAN attributes. This is a check enabled by default in Go v1.15. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'The error received is "Error creating SSL connection: LDAP Result Code 200 "Network Error": x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0". ')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To resolve the error, update or replace the certificates on the AD server with new ones that support the SAN attribute. Alternatively, this error can be ignored by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"GODEBUG=x509ignoreCN=0")," as an environment variable to Rancher server container."))))))),(0,i.kt)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,i.kt)("h3",{id:"open-active-directory-configuration"},"Open Active Directory Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log into the Rancher UI using the initial local ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," account."),(0,i.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"ActiveDirectory"),". The ",(0,i.kt)("strong",{parentName:"li"},"Authentication Provider: ActiveDirectory")," form will be displayed."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form. For help, refer to the details on configuration options below."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enable"),".")),(0,i.kt)("h3",{id:"configure-active-directory-server-settings"},"Configure Active Directory Server Settings"),(0,i.kt)("p",null,"In the section titled ",(0,i.kt)("inlineCode",{parentName:"p"},"1. Configure an Active Directory server"),",   complete the fields with the information specific to your Active Directory server. Please refer to the following table for detailed information on the required values for each parameter."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are unsure about the correct values to enter in the  user/group Search Base field, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 1: AD Server parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Hostname"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specify the hostname or IP address of the AD server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specify the port at which the Active Directory server is listening for connections. Unencrypted LDAP normally uses the standard port of 389, while LDAPS uses port 636.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TLS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Check this box to enable LDAP over SSL/TLS (commonly known as LDAPS).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Connection Timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The duration in number of seconds that Rancher waits before considering the AD server unreachable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Service Account Username"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enter the username of an AD account with read-only access to your domain partition (see ",(0,i.kt)("a",{parentName:"td",href:"#prerequisites"},"Prerequisites"),'). The username can be entered in NetBIOS format (e.g. "DOMAIN\\serviceaccount") or UPN format (e.g. "',(0,i.kt)("a",{parentName:"td",href:"mailto:serviceaccount@domain.com"},"serviceaccount@domain.com"),'").')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Service Account Password"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The password for the service account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Default Login Domain"),(0,i.kt)("td",{parentName:"tr",align:"left"},'When you configure this field with the NetBIOS name of your AD domain, usernames entered without a domain (e.g. "jdoe") will automatically be converted to a slashed,  NetBIOS logon (e.g. "LOGIN_DOMAIN\\jdoe") when binding to the AD server. If your users authenticate with the UPN (e.g. "',(0,i.kt)("a",{parentName:"td",href:"mailto:jdoe@acme.com"},"jdoe@acme.com"),'") as username then this field ',(0,i.kt)("strong",{parentName:"td"},"must")," be left empty.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Search Base"),(0,i.kt)("td",{parentName:"tr",align:"left"},'The Distinguished Name of the node in your directory tree from which to start searching for user objects. All users must be descendents of this base DN. For example: "ou=people,dc=acme,dc=com".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Search Base"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If your groups live under a different node than the one configured under ",(0,i.kt)("inlineCode",{parentName:"td"},"User Search Base"),' you will need to provide the Distinguished Name here. Otherwise leave it empty. For example: "ou=groups,dc=acme,dc=com".')))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"configure-usergroup-schema"},"Configure User/Group Schema"),(0,i.kt)("p",null,"In the section titled ",(0,i.kt)("inlineCode",{parentName:"p"},"2. Customize Schema")," you must provide Rancher with a correct mapping of user and group attributes corresponding to the schema used in your directory."),(0,i.kt)("p",null,"Rancher uses LDAP queries to search for and retrieve information about users and groups within the Active Directory. The attribute mappings configured in this section are used to construct search filters and resolve group membership. It is therefore paramount that the provided settings reflect the reality of your AD domain."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are unfamiliar with the schema used in your Active Directory domain, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch")," to determine the correct configuration values."))),(0,i.kt)("h4",{id:"user-schema"},"User Schema"),(0,i.kt)("p",null,"The table below details the parameters for the user schema section configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 2: User schema configuration parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for user objects in your domain. If defined, only specify the name of the object class - ",(0,i.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Username Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The user attribute whose value is suitable as a display name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Login Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},'The attribute whose value matches the username part of credentials entered by your users when logging in to Rancher. If your users authenticate with their UPN (e.g. "',(0,i.kt)("a",{parentName:"td",href:"mailto:jdoe@acme.com"},"jdoe@acme.com"),'") as username then this field must normally be set to ',(0,i.kt)("inlineCode",{parentName:"td"},"userPrincipalName"),'. Otherwise for the old, NetBIOS-style logon names (e.g. "jdoe") it\'s usually ',(0,i.kt)("inlineCode",{parentName:"td"},"sAMAccountName"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Member Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute containing the groups that a user is a member of.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},'When a user enters text to add users or groups in the UI, Rancher queries the AD server and attempts to match users by the attributes provided in this setting. Multiple attributes can be specified by separating them with the pipe ("',"|",'") symbol. To match UPN usernames (e.g. ',(0,i.kt)("a",{parentName:"td",href:"mailto:jdoe@acme.com"},"jdoe@acme.com"),") you should usually set the value of this field to ",(0,i.kt)("inlineCode",{parentName:"td"},"userPrincipalName"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Filter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This filter gets applied to the list of users that is searched when Rancher attempts to add users to a site access list or tries to add members to clusters or projects. For example, a user search filter could be ",(0,i.kt)("code",null,"(","|","(memberOf=CN=group1,CN=Users,DC=testad,DC=rancher,DC=io)(memberOf=CN=group2,CN=Users,DC=testad,DC=rancher,DC=io))"),". Note: If the search filter does not use ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax"},"valid AD search syntax,")," the list of users will be empty.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Enabled Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute containing an integer value representing a bitwise enumeration of user account flags. Rancher uses this to determine if a user account is disabled. You should normally leave this set to the AD standard ",(0,i.kt)("inlineCode",{parentName:"td"},"userAccountControl"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Disabled Status Bitmask"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"User Enabled Attribute"),' designating a disabled user account. You should normally leave this set to the default value of "2" as specified in the Microsoft Active Directory schema (see ',(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/windows/desktop/adschema/a-useraccountcontrol#remarks"},"here"),").")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"group-schema"},"Group Schema"),(0,i.kt)("p",null,"The table below details the parameters for the group schema configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 3: Group schema configuration parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for group objects in your domain. If defined, only specify the name of the object class - ",(0,i.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The group attribute whose value is suitable for a display name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Member User Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the ",(0,i.kt)("strong",{parentName:"td"},"user attribute")," whose format matches the group members in the ",(0,i.kt)("inlineCode",{parentName:"td"},"Group Member Mapping Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Member Mapping Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute containing the members of a group.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Attribute used to construct search filters when adding groups to clusters or projects. See description of user schema ",(0,i.kt)("inlineCode",{parentName:"td"},"Search Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Filter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This filter gets applied to the list of groups that is searched when Rancher attempts to add groups to a site access list or tries to add groups to clusters or projects. For example, a group search filter could be ",(0,i.kt)("code",null,"(","|","(cn=group1)(cn=group2))"),". Note: If the search filter does not use ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax"},"valid AD search syntax,")," the list of groups will be empty.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group DN Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute whose format matches the values in the user attribute describing a the user's memberships. See  ",(0,i.kt)("inlineCode",{parentName:"td"},"User Member Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Nested Group Membership"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This settings defines whether Rancher should resolve nested group memberships. Use only if your organization makes use of these nested memberships (i.e., you have groups that contain other groups as members. We advise avoiding nested groups when possible to avoid potential performance issues when there is a large amount of nested memberships).")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"test-authentication"},"Test Authentication"),(0,i.kt)("p",null,"Once you have completed the configuration, proceed by testing the connection to the AD server ",(0,i.kt)("strong",{parentName:"p"},"using your AD admin account"),". If the test is successful, authentication with the configured Active Directory will be enabled implicitly with the account you test with set as admin."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The AD user pertaining to the credentials entered in this step will be mapped to the local principal account and assigned administrator privileges in Rancher. You should therefore make a conscious decision on which AD account you use to perform this step."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"username")," and ",(0,i.kt)("strong",{parentName:"li"},"password")," for the AD account that should be mapped to the local principal account."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Authenticate with Active Directory")," to finalise the setup.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Active Directory authentication has been enabled."),(0,i.kt)("li",{parentName:"ul"},"You have been signed into Rancher as administrator using the provided AD credentials.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will still be able to login using the locally configured ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," account and password in case of a disruption of LDAP services."))),(0,i.kt)("h2",{id:"annex-identify-search-base-and-schema-using-ldapsearch"},"Annex: Identify Search Base and Schema using ldapsearch"),(0,i.kt)("p",null,"In order to successfully configure AD authentication it is crucial that you provide the correct configuration pertaining to the hierarchy and schema of your AD server."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"http://manpages.ubuntu.com/manpages/artful/man1/ldapsearch.1.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ldapsearch"))," tool allows you to query your AD server to learn about the schema used for user and group objects."),(0,i.kt)("p",null,"For the purpose of the example commands provided below we will assume:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Active Directory server has a hostname of ",(0,i.kt)("inlineCode",{parentName:"li"},"ad.acme.com")),(0,i.kt)("li",{parentName:"ul"},"The server is listening for unencrypted connections on port ",(0,i.kt)("inlineCode",{parentName:"li"},"389")),(0,i.kt)("li",{parentName:"ul"},"The Active Directory domain is ",(0,i.kt)("inlineCode",{parentName:"li"},"acme")),(0,i.kt)("li",{parentName:"ul"},"You have a valid AD account with the username ",(0,i.kt)("inlineCode",{parentName:"li"},"jdoe")," and password ",(0,i.kt)("inlineCode",{parentName:"li"},"secret"))),(0,i.kt)("h3",{id:"identify-search-base"},"Identify Search Base"),(0,i.kt)("p",null,"First we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"ldapsearch")," to identify the Distinguished Name (DN) of the parent node(s) for users and groups:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ldapsearch -x -D "acme\\jdoe" -w "secret" -p 389 \\\n-h ad.acme.com -b "dc=acme,dc=com" -s sub "sAMAccountName=jdoe"\n')),(0,i.kt)("p",null,"This command performs an LDAP search with the search base set to the domain root (",(0,i.kt)("inlineCode",{parentName:"p"},'-b "dc=acme,dc=com"'),") and a filter targeting the user account (",(0,i.kt)("inlineCode",{parentName:"p"},"sAMAccountNam=jdoe"),"), returning the attributes for said user:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(88560).Z,width:"500",height:"287"})),(0,i.kt)("p",null,"Since in this case the user's DN is ",(0,i.kt)("inlineCode",{parentName:"p"},"CN=John Doe,CN=Users,DC=acme,DC=com")," ","[5]",", we should configure the ",(0,i.kt)("strong",{parentName:"p"},"User Search Base")," with the parent node DN ",(0,i.kt)("inlineCode",{parentName:"p"},"CN=Users,DC=acme,DC=com"),"."),(0,i.kt)("p",null,"Similarly, based on the DN of the group referenced in the ",(0,i.kt)("strong",{parentName:"p"},"memberOf")," attribute ","[4]",", the correct value for the ",(0,i.kt)("strong",{parentName:"p"},"Group Search Base")," would be the parent node of that value, i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"OU=Groups,DC=acme,DC=com"),"."),(0,i.kt)("h3",{id:"identify-user-schema"},"Identify User Schema"),(0,i.kt)("p",null,"The output of the above ",(0,i.kt)("inlineCode",{parentName:"p"},"ldapsearch")," query also allows to determine the correct values to use in the user schema configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Object Class"),": ",(0,i.kt)("strong",{parentName:"li"},"person")," ","[1]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Username Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"name")," ","[2]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Login Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"sAMAccountName")," ","[3]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"User Member Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"memberOf")," ","[4]")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the AD users in our organization were to authenticate with their UPN (e.g. ",(0,i.kt)("a",{parentName:"p",href:"mailto:jdoe@acme.com"},"jdoe@acme.com"),") instead of the short logon name, then we would have to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Login Attribute")," to ",(0,i.kt)("strong",{parentName:"p"},"userPrincipalName")," instead."))),(0,i.kt)("p",null,"We'll also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Search Attribute")," parameter to ",(0,i.kt)("strong",{parentName:"p"},"sAMAccountName|name"),". That way users can be added to clusters/projects in the Rancher UI either by entering their username or full name."),(0,i.kt)("h3",{id:"identify-group-schema"},"Identify Group Schema"),(0,i.kt)("p",null,"Next, we'll query one of the groups associated with this user, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"CN=examplegroup,OU=Groups,DC=acme,DC=com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ldapsearch -x -D "acme\\jdoe" -w "secret" -p 389 \\\n-h ad.acme.com -b "ou=groups,dc=acme,dc=com" \\\n-s sub "CN=examplegroup"\n')),(0,i.kt)("p",null,"This command will inform us on the attributes used for group objects:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(30882).Z,width:"500",height:"295"})),(0,i.kt)("p",null,"Again, this allows us to determine the correct values to enter in the group schema configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Object Class"),": ",(0,i.kt)("strong",{parentName:"li"},"group")," ","[1]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"name")," ","[2]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Group Member Mapping Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"member")," ","[3]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Search Attribute"),": ",(0,i.kt)("strong",{parentName:"li"},"sAMAccountName")," ","[4]")),(0,i.kt)("p",null,"Looking  at the value of the  ",(0,i.kt)("strong",{parentName:"p"},"member")," attribute, we can see that it contains the DN of the referenced user. This  corresponds to the ",(0,i.kt)("strong",{parentName:"p"},"distinguishedName")," attribute in our user object. Accordingly will have to set the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Group Member User Attribute")," parameter to this attribute."),(0,i.kt)("p",null,"In the same way, we can observe that the value in the ",(0,i.kt)("strong",{parentName:"p"},"memberOf")," attribute in the user object corresponds to the ",(0,i.kt)("strong",{parentName:"p"},"distinguishedName")," ","[5]"," of the group. We therefore need to set the value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Group DN Attribute")," parameter to this attribute."),(0,i.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,i.kt)("p",null,"If you are experiencing issues while testing the connection to the Active Directory server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}p.isMDXComponent=!0},30882:function(e,t,a){t.Z=a.p+"assets/images/ldapsearch-group-5add611aa83e6ba6a6865fa1d90cc1d3.png"},88560:function(e,t,a){t.Z=a.p+"assets/images/ldapsearch-user-65e5a8ef30c2753904db1bdd42c20d2a.png"}}]);