"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88992:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"API Tokens",weight:1,aliases:["/rancher/v2.5/en/cluster-admin/api/api-tokens/","/rancher/v2.x/en/api/api-tokens/"]},p=void 0,s={unversionedId:"reference-guides/about-the-api/api-tokens",id:"version-2.5/reference-guides/about-the-api/api-tokens",title:"API Tokens",description:"By default, some cluster-level API tokens are generated with infinite time-to-live (ttl=0). In other words, API tokens with ttl=0 never expire unless you invalidate them. Tokens are not invalidated by changing a password.",source:"@site/versioned_docs/version-2.5/reference-guides/about-the-api/api-tokens.md",sourceDirName:"reference-guides/about-the-api",slug:"/reference-guides/about-the-api/api-tokens",permalink:"/v2.5/reference-guides/about-the-api/api-tokens",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/about-the-api/api-tokens.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"API Tokens",weight:1,aliases:["/rancher/v2.5/en/cluster-admin/api/api-tokens/","/rancher/v2.x/en/api/api-tokens/"]},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/v2.5/pages-for-subheaders/about-the-api"},next:{title:"Tools for Logging, Monitoring, and Visibility",permalink:"/v2.5/reference-guides/rancher-cluster-tools"}},u={},c=[{value:"Deleting tokens",id:"deleting-tokens",level:3},{value:"Setting TTL on Kubeconfig Tokens",id:"setting-ttl-on-kubeconfig-tokens",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. Tokens are not invalidated by changing a password."),(0,i.kt)("p",null,"You can deactivate API tokens by deleting them or by deactivating the user account."),(0,i.kt)("h3",{id:"deleting-tokens"},"Deleting tokens"),(0,i.kt)("p",null,"To delete a token,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the list of all tokens in the Rancher API view at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access the token you want to delete by its ID. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Delete.")))),(0,i.kt)("p",null,"Here is the complete list of tokens that are generated with ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Token"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubeconfig-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Kubeconfig token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubectl-shell-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Access to ",(0,i.kt)("inlineCode",{parentName:"td"},"kubectl")," shell in the browser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"agent-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Token for agent deployment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compose-token-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Token for compose")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"helm-token-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Token for Helm chart deployment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*-pipeline*")),(0,i.kt)("td",{parentName:"tr",align:null},"Pipeline token for project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"telemetry-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Telemetry token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"drain-node-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Token for drain (we use ",(0,i.kt)("inlineCode",{parentName:"td"},"kubectl")," for drain because there is no native Kubernetes API)")))),(0,i.kt)("h3",{id:"setting-ttl-on-kubeconfig-tokens"},"Setting TTL on Kubeconfig Tokens"),(0,i.kt)("p",null,"Admins can set a global TTL on Kubeconfig tokens. Once the token expires the kubectl command will require the user to authenticate to Rancher."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Disable the kubeconfig-generate-token setting in the Rancher API view at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-generate-token"),". This setting instructs Rancher to no longer automatically generate a token when a user clicks on download a kubeconfig file. The kubeconfig file will now provide a command to login to Rancher.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the setting and set the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to setting kubeconfig-token-ttl-minutes in the Rancher API view at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-token-ttl-minutes"),". By default, kubeconfig-token-ttl-minutes is 960 (16 hours).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the setting and set the value to desired duration in minutes.\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note:"))," This value cannot exceed max-ttl of API tokens.(",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/auth-token-max-ttl-minutes"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes")," is set to 1440 (24 hours) by default.  ",(0,i.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes would default to 0 allowing tokens to never expire"),"."))))}k.isMDXComponent=!0}}]);