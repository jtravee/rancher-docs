"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17670],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68021:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={title:"Advanced Options for Docker Installs",weight:5},l=void 0,s={unversionedId:"reference-guides/single-node-rancher-in-docker/advanced-options",id:"version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options",title:"Advanced Options for Docker Installs",description:"When installing Rancher, there are several advanced options that can be enabled:",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/advanced-options",permalink:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/single-node-rancher-in-docker/advanced-options.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662225549,formattedLastUpdatedAt:"2022/9/3",frontMatter:{title:"Advanced Options for Docker Installs",weight:5},sidebar:"tutorialSidebar",previous:{title:"HTTP Proxy Configuration",permalink:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},next:{title:"Installation References",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/installation-references"}},d={},p=[{value:"Custom CA Certificate",id:"custom-ca-certificate",level:3},{value:"API Audit Log",id:"api-audit-log",level:3},{value:"TLS settings",id:"tls-settings",level:3},{value:"Air Gap",id:"air-gap",level:3},{value:"Persistent Data",id:"persistent-data",level:3},{value:"Running <code>rancher/rancher</code> and <code>rancher/rancher-agent</code> on the Same Node",id:"running-rancherrancher-and-rancherrancher-agent-on-the-same-node",level:3}],u={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When installing Rancher, there are several ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/resources"},"advanced options")," that can be enabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-ca-certificate"},"Custom CA Certificate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#api-audit-log"},"API Audit Log")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tls-settings"},"TLS Settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#air-gap"},"Air Gap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#persistent-data"},"Persistent Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-rancher-rancher-and-rancher-rancher-agent-on-the-same-node"},"Running ",(0,i.kt)("inlineCode",{parentName:"a"},"rancher/rancher")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"rancher/rancher-agent")," on the Same Node"))),(0,i.kt)("h3",{id:"custom-ca-certificate"},"Custom CA Certificate"),(0,i.kt)("p",null,"If you want to configure Rancher to use a CA root certificate to be used when validating services, you would start the Rancher container sharing the directory that contains the CA root certificate."),(0,i.kt)("p",null,"Use the command example to start a Rancher container with your private CA certificates mounted."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The volume flag (",(0,i.kt)("inlineCode",{parentName:"li"},"-v"),") should specify the host directory containing the CA root certificates."),(0,i.kt)("li",{parentName:"ul"},"The environment variable flag (",(0,i.kt)("inlineCode",{parentName:"li"},"-e"),") in combination with ",(0,i.kt)("inlineCode",{parentName:"li"},"SSL_CERT_DIR")," and directory declares an environment variable that specifies the mounted CA root certificates directory location inside the container."),(0,i.kt)("li",{parentName:"ul"},"Passing environment variables to the Rancher container can be done using ",(0,i.kt)("inlineCode",{parentName:"li"},"-e KEY=VALUE")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--env KEY=VALUE"),"."),(0,i.kt)("li",{parentName:"ul"},"Mounting a host directory inside the container can be done using ",(0,i.kt)("inlineCode",{parentName:"li"},"-v host-source-directory:container-destination-directory")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"--volume host-source-directory:container-destination-directory"),".")),(0,i.kt)("p",null,"The example below is based on having the CA root certificates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/host/certs")," directory on the host and mounting this directory on ",(0,i.kt)("inlineCode",{parentName:"p"},"/container/certs")," inside the Rancher container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /host/certs:/container/certs \\\n  -e SSL_CERT_DIR="/container/certs" \\\n  rancher/rancher:latest\n')),(0,i.kt)("h3",{id:"api-audit-log"},"API Audit Log"),(0,i.kt)("p",null,"The API Audit Log records all the user and system transactions made through Rancher server."),(0,i.kt)("p",null,"The API Audit Log writes to ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/auditlog")," inside the rancher container by default. Share that directory as a volume and set your ",(0,i.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," to enable the log."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"API Audit Log")," for more information and options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /var/log/rancher/auditlog:/var/log/auditlog \\\n  -e AUDIT_LEVEL=1 \\\n  rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"tls-settings"},"TLS settings"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.1.7")),(0,i.kt)("p",null,"To set a different TLS configuration, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_MIN_VERSION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_CIPHERS")," environment variables. For example, to configure TLS 1.0 as minimum accepted TLS version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e CATTLE_TLS_MIN_VERSION="1.0" \\\n  rancher/rancher:latest\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/installation-references/tls-settings"},"TLS settings")," for more information and options."),(0,i.kt)("h3",{id:"air-gap"},"Air Gap"),(0,i.kt)("p",null,"If you are visiting this page to complete an air gap installation, you must prepend your private registry URL to the server tag when running the installation command in the option that you choose. Add ",(0,i.kt)("inlineCode",{parentName:"p"},"<REGISTRY.DOMAIN.COM:PORT>")," with your private registry URL in front of ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"persistent-data"},"Persistent Data"),(0,i.kt)("p",null,"Rancher uses etcd as a datastore. When Rancher is installed with Docker, the embedded etcd is being used. The persistent data is at the following path in the container: ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher"),"."),(0,i.kt)("p",null,"You can bind mount a host volume to this location to preserve data on the host it is running on:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"running-rancherrancher-and-rancherrancher-agent-on-the-same-node"},"Running ",(0,i.kt)("inlineCode",{parentName:"h3"},"rancher/rancher")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"rancher/rancher-agent")," on the Same Node"),(0,i.kt)("p",null,"In the situation where you want to use a single node to run Rancher and to be able to add the same node to a cluster, you have to adjust the host ports mapped for the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,i.kt)("p",null,"If a node is added to a cluster, it deploys the nginx ingress controller which will use port 80 and 443. This will conflict with the default ports we advise to expose for the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,i.kt)("p",null,"Please note that this setup is not recommended for production use, but can be convenient for development/demo purposes."),(0,i.kt)("p",null,"To change the host ports mapping, replace the following part ",(0,i.kt)("inlineCode",{parentName:"p"},"-p 80:80 -p 443:443")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"-p 8080:80 -p 8443:443"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 8080:80 -p 8443:443 \\\n  rancher/rancher:latest\n")))}h.isMDXComponent=!0}}]);