"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87458],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Technical",weight:8006},l=void 0,c={unversionedId:"faq/technical-items",id:"faq/technical-items",title:"Technical",description:"How can I reset the administrator password?",source:"@site/docs/faq/technical-items.md",sourceDirName:"faq",slug:"/faq/technical-items",permalink:"/faq/technical-items",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/technical-items.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Technical",weight:8006},sidebar:"tutorialSidebar",previous:{title:"Dockershim",permalink:"/faq/dockershim"},next:{title:"Security",permalink:"/faq/security"}},d={},u=[{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3},{value:"I deleted/deactivated the last admin, how can I fix it?",id:"i-deleteddeactivated-the-last-admin-how-can-i-fix-it",level:3},{value:"How can I enable debug logging?",id:"how-can-i-enable-debug-logging",level:3},{value:"My ClusterIP does not respond to ping",id:"my-clusterip-does-not-respond-to-ping",level:3},{value:"Where can I manage Node Templates?",id:"where-can-i-manage-node-templates",level:3},{value:"Why is my Layer-4 Load Balancer in <code>Pending</code> state?",id:"why-is-my-layer-4-load-balancer-in-pending-state",level:3},{value:"Where is the state of Rancher stored?",id:"where-is-the-state-of-rancher-stored",level:3},{value:"How are the supported Docker versions determined?",id:"how-are-the-supported-docker-versions-determined",level:3},{value:"How can I access nodes created by Rancher?",id:"how-can-i-access-nodes-created-by-rancher",level:3},{value:"How can I automate task X in Rancher?",id:"how-can-i-automate-task-x-in-rancher",level:3},{value:"The IP address of a node changed, how can I recover?",id:"the-ip-address-of-a-node-changed-how-can-i-recover",level:3},{value:"How can I add additional arguments/binds/environment variables to Kubernetes components in a Rancher Launched Kubernetes cluster?",id:"how-can-i-add-additional-argumentsbindsenvironment-variables-to-kubernetes-components-in-a-rancher-launched-kubernetes-cluster",level:3},{value:"How do I check if my certificate chain is valid?",id:"how-do-i-check-if-my-certificate-chain-is-valid",level:3},{value:"How do I check <code>Common Name</code> and <code>Subject Alternative Names</code> in my server certificate?",id:"how-do-i-check-common-name-and-subject-alternative-names-in-my-server-certificate",level:3},{value:"Why does it take 5+ minutes for a pod to be rescheduled when a node has failed?",id:"why-does-it-take-5-minutes-for-a-pod-to-be-rescheduled-when-a-node-has-failed",level:3},{value:"Can I use keyboard shortcuts in the UI?",id:"can-i-use-keyboard-shortcuts-in-the-ui",level:3}],h={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,o.kt)("p",null,"Docker Install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,o.kt)("p",null,"Kubernetes install (Helm):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,o.kt)("h3",{id:"i-deleteddeactivated-the-last-admin-how-can-i-fix-it"},"I deleted/deactivated the last admin, how can I fix it?"),(0,o.kt)("p",null,"Docker Install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> ensure-default-admin\nNew default administrator (user-xxxxx)\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,o.kt)("p",null,"Kubernetes install (Helm):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl --kubeconfig $KUBECONFIG -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher | grep '1/1' | head -1 | awk '{ print $1 }') -- ensure-default-admin\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,o.kt)("h3",{id:"how-can-i-enable-debug-logging"},"How can I enable debug logging?"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/logging"},"Troubleshooting: Logging")),(0,o.kt)("h3",{id:"my-clusterip-does-not-respond-to-ping"},"My ClusterIP does not respond to ping"),(0,o.kt)("p",null,"ClusterIP is a virtual IP, which will not respond to ping. Best way to test if the ClusterIP is configured correctly, is by using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," to access the IP and port to see if it responds."),(0,o.kt)("h3",{id:"where-can-i-manage-node-templates"},"Where can I manage Node Templates?"),(0,o.kt)("p",null,"Node Templates can be accessed by opening your account menu (top right) and selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Node Templates"),"."),(0,o.kt)("h3",{id:"why-is-my-layer-4-load-balancer-in-pending-state"},"Why is my Layer-4 Load Balancer in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Pending")," state?"),(0,o.kt)("p",null,"The Layer-4 Load Balancer is created as ",(0,o.kt)("inlineCode",{parentName:"p"},"type: LoadBalancer"),". In Kubernetes, this needs a cloud provider or controller that can satisfy these requests, otherwise these will be in ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending")," state forever. More information can be found on ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-cloud-providers"},"Cloud Providers")," or ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"Create External Load Balancer")),(0,o.kt)("h3",{id:"where-is-the-state-of-rancher-stored"},"Where is the state of Rancher stored?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Install: in the embedded etcd of the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher/rancher")," container, located at ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher"),"."),(0,o.kt)("li",{parentName:"ul"},"Kubernetes install: in the etcd of the RKE cluster created to run Rancher.")),(0,o.kt)("h3",{id:"how-are-the-supported-docker-versions-determined"},"How are the supported Docker versions determined?"),(0,o.kt)("p",null,"We follow the validated Docker versions for upstream Kubernetes releases. The validated versions can be found under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG-1.10.md#external-dependencies"},"External Dependencies")," in the Kubernetes release CHANGELOG.md."),(0,o.kt)("h3",{id:"how-can-i-access-nodes-created-by-rancher"},"How can I access nodes created by Rancher?"),(0,o.kt)("p",null,"SSH keys to access the nodes created by Rancher can be downloaded via the ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," view. Choose the node which you want to access and click on the vertical \u22ee button at the end of the row, and choose ",(0,o.kt)("strong",{parentName:"p"},"Download Keys")," as shown in the picture below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Download Keys",src:n(45171).Z,width:"442",height:"426"})),(0,o.kt)("p",null,"Unzip the downloaded zip file, and use the file ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa")," to connect to you host. Be sure to use the correct username (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," for RancherOS, ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu")," for Ubuntu, ",(0,o.kt)("inlineCode",{parentName:"p"},"ec2-user")," for Amazon Linux)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ssh -i id_rsa user@ip_of_node\n")),(0,o.kt)("h3",{id:"how-can-i-automate-task-x-in-rancher"},"How can I automate task X in Rancher?"),(0,o.kt)("p",null,"The UI consists of static files, and works based on responses of the API. That means every action/task that you can execute in the UI, can be automated via the API. There are 2 ways to do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"https://your_rancher_ip/v3")," and browse the API options."),(0,o.kt)("li",{parentName:"ul"},"Capture the API calls when using the UI (Most commonly used for this is ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/#network"},"Chrome Developer Tools")," but you can use anything you like)")),(0,o.kt)("h3",{id:"the-ip-address-of-a-node-changed-how-can-i-recover"},"The IP address of a node changed, how can I recover?"),(0,o.kt)("p",null,"A node is required to have a static IP configured (or a reserved IP via DHCP). If the IP of a node has changed, you will have to remove it from the cluster and readd it. After it is removed, Rancher will update the cluster to the correct state. If the cluster is no longer in ",(0,o.kt)("inlineCode",{parentName:"p"},"Provisioning")," state, the node is removed from the cluster."),(0,o.kt)("p",null,"When the IP address of the node changed, Rancher lost connection to the node, so it will be unable to clean the node properly. See ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning cluster nodes")," to clean the node."),(0,o.kt)("p",null,"When the node is removed from the cluster, and the node is cleaned, you can readd the node to the cluster."),(0,o.kt)("h3",{id:"how-can-i-add-additional-argumentsbindsenvironment-variables-to-kubernetes-components-in-a-rancher-launched-kubernetes-cluster"},"How can I add additional arguments/binds/environment variables to Kubernetes components in a Rancher Launched Kubernetes cluster?"),(0,o.kt)("p",null,"You can add additional arguments/binds/environment variables via the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#cluster-config-file"},"Config File")," option in Cluster Options. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/"},"Extra Args, Extra Binds, and Extra Environment Variables")," in the RKE documentation or browse the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"Example Cluster.ymls"),"."),(0,o.kt)("h3",{id:"how-do-i-check-if-my-certificate-chain-is-valid"},"How do I check if my certificate chain is valid?"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl verify")," command to validate your certificate chain:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Configure ",(0,o.kt)("inlineCode",{parentName:"p"},"SSL_CERT_DIR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SSL_CERT_FILE")," to a dummy location to make sure the OS-installed certificates are not used when verifying manually."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SSL_CERT_DIR=/dummy SSL_CERT_FILE=/dummy openssl verify -CAfile ca.pem rancher.yourdomain.com.pem\nrancher.yourdomain.com.pem: OK\n")),(0,o.kt)("p",null,"If you receive the error ",(0,o.kt)("inlineCode",{parentName:"p"},"unable to get local issuer certificate"),", the chain is incomplete. This usually means that there is an intermediate CA certificate that issued your server certificate. If you already have this certificate, you can use it in the verification of the certificate like shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SSL_CERT_DIR=/dummy SSL_CERT_FILE=/dummy openssl verify -CAfile ca.pem -untrusted intermediate.pem rancher.yourdomain.com.pem\nrancher.yourdomain.com.pem: OK\n")),(0,o.kt)("p",null,"If you have successfully verified your certificate chain, you should include needed intermediate CA certificates in the server certificate to complete the certificate chain for any connection made to Rancher (for example, by the Rancher agent). The order of the certificates in the server certificate file should be first the server certificate itself (contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher.yourdomain.com.pem"),"), followed by intermediate CA certificate(s) (contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"intermediate.pem"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n%YOUR_CERTIFICATE%\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n%YOUR_INTERMEDIATE_CERTIFICATE%\n-----END CERTIFICATE-----\n")),(0,o.kt)("p",null,"If you still get errors during verification, you can retrieve the subject and the issuer of the server certificate using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl x509 -noout -subject -issuer -in rancher.yourdomain.com.pem\nsubject= /C=GB/ST=England/O=Alice Ltd/CN=rancher.yourdomain.com\nissuer= /C=GB/ST=England/O=Alice Ltd/CN=Alice Intermediate CA\n")),(0,o.kt)("h3",{id:"how-do-i-check-common-name-and-subject-alternative-names-in-my-server-certificate"},"How do I check ",(0,o.kt)("inlineCode",{parentName:"h3"},"Common Name")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Subject Alternative Names")," in my server certificate?"),(0,o.kt)("p",null,"Although technically an entry in ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," is required, having the hostname in both ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name")," and as entry in ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names")," gives you maximum compatibility with older browser/applications."),(0,o.kt)("p",null,"Check ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Name"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl x509 -noout -subject -in cert.pem\nsubject= /CN=rancher.my.org\n")),(0,o.kt)("p",null,"Check ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject Alternative Names"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl x509 -noout -in cert.pem -text | grep DNS\n                DNS:rancher.my.org\n")),(0,o.kt)("h3",{id:"why-does-it-take-5-minutes-for-a-pod-to-be-rescheduled-when-a-node-has-failed"},"Why does it take 5+ minutes for a pod to be rescheduled when a node has failed?"),(0,o.kt)("p",null,"This is due to a combination of the following default Kubernetes settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kubelet",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-status-update-frequency"),": Specifies how often kubelet posts node status to master (default 10s)"))),(0,o.kt)("li",{parentName:"ul"},"kube-controller-manager",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-monitor-period"),": The period for syncing NodeStatus in NodeController (default 5s)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-monitor-grace-period"),": Amount of time which we allow running Node to be unresponsive before marking it unhealthy (default 40s)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pod-eviction-timeout"),": The grace period for deleting pods on failed nodes (default 5m0s)")))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"},"Kubernetes: kubelet")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"Kubernetes: kube-controller-manager")," for more information on these settings."),(0,o.kt)("p",null,"In Kubernetes v1.13, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TaintBasedEvictions")," feature is enabled by default. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#taint-based-evictions"},"Kubernetes: Taint based Evictions")," for more information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kube-apiserver (Kubernetes v1.13 and up)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default-not-ready-toleration-seconds"),": Indicates the tolerationSeconds of the toleration for notReady:NoExecute that is added by default to every pod that does not already have such a toleration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default-unreachable-toleration-seconds"),": Indicates the tolerationSeconds of the toleration for unreachable:NoExecute that is added by default to every pod that does not already have such a toleration.")))),(0,o.kt)("h3",{id:"can-i-use-keyboard-shortcuts-in-the-ui"},"Can I use keyboard shortcuts in the UI?"),(0,o.kt)("p",null,"Yes, most parts of the UI can be reached using keyboard shortcuts. For an overview of the available shortcuts, press ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," anywhere in the UI."))}p.isMDXComponent=!0},45171:function(e,t,n){t.Z=n.p+"assets/images/downloadsshkeys-617979ebc3df306cf60b60325923b283.png"}}]);