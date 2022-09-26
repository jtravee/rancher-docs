"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,k=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",shortTitle:"Set up K3s for Rancher",weight:2},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",description:"This section describes how to install a Kubernetes cluster according to the best practices for the Rancher server environment.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/26/2022",frontMatter:{title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",shortTitle:"Set up K3s for Rancher",weight:2},sidebar:"tutorialSidebar",previous:{title:"About High-availability Installations",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs"},next:{title:"Setting up a High-availability RKE Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"}},c={},p=[{value:"1. Install Kubernetes and Set up the K3s Server",id:"1-install-kubernetes-and-set-up-the-k3s-server",level:3},{value:"2. Confirm that K3s is Running",id:"2-confirm-that-k3s-is-running",level:3},{value:"3. Save and Start Using the kubeconfig File",id:"3-save-and-start-using-the-kubeconfig-file",level:3},{value:"4. Check the Health of Your Cluster Pods",id:"4-check-the-health-of-your-cluster-pods",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how to install a Kubernetes cluster according to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations#environment-for-kubernetes-installations"},"best practices for the Rancher server environment.")),(0,s.kt)("p",null,"For systems without direct internet access, refer to the air gap installation instructions."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Single-node Installation Tip:"),"\nIn a single-node Kubernetes cluster, the Rancher server does not have high availability, which is important for running Rancher in production. However, installing Rancher on a single-node cluster can be useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path."),(0,s.kt)("p",{parentName:"blockquote"},"To set up a single-node K3s cluster, run the Rancher server installation command on just one node instead of two nodes."),(0,s.kt)("p",{parentName:"blockquote"},"In both single-node setups, Rancher can be installed with Helm on the Kubernetes cluster in the same way that it would be installed on any other cluster.")),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"These instructions assume you have set up two nodes, a load balancer, a DNS record, and an external MySQL database as described in ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},"this section.")),(0,s.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,s.kt)("h1",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,s.kt)("h3",{id:"1-install-kubernetes-and-set-up-the-k3s-server"},"1. Install Kubernetes and Set up the K3s Server"),(0,s.kt)("p",null,"When running the command to start the K3s Kubernetes API server, you will pass in an option to use the external datastore that you set up earlier."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Connect to one of the Linux nodes that you have prepared to run the Rancher server.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On the Linux node, run this command to start the K3s server and connect it to the external datastore:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("p",{parentName:"li"},"To specify the K3s version, use the INSTALL_K3S_VERSION environment variable:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -sfL https://get.k3s.io |  INSTALL_K3S_VERSION=vX.Y.Z sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("p",{parentName:"li"},"Note: The datastore endpoint can also be passed in using the environment variable ",(0,s.kt)("inlineCode",{parentName:"p"},"$K3S_DATASTORE_ENDPOINT"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Repeat the same command on your second K3s server node."))),(0,s.kt)("h3",{id:"2-confirm-that-k3s-is-running"},"2. Confirm that K3s is Running"),(0,s.kt)("p",null,"To confirm that K3s has been set up successfully, run the following command on either of the K3s server nodes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get nodes\n")),(0,s.kt)("p",null,"Then you should see two nodes with the master role:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo k3s kubectl get nodes\nNAME               STATUS   ROLES    AGE    VERSION\nip-172-31-60-194   Ready    master   44m    v1.17.2+k3s1\nip-172-31-63-88    Ready    master   6m8s   v1.17.2+k3s1  \n")),(0,s.kt)("p",null,"Then test the health of the cluster pods:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get pods --all-namespaces\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have successfully set up a K3s Kubernetes cluster."),(0,s.kt)("h3",{id:"3-save-and-start-using-the-kubeconfig-file"},"3. Save and Start Using the kubeconfig File"),(0,s.kt)("p",null,"When you installed K3s on each Rancher server node, a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,s.kt)("p",null,"To use this ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,s.kt)("li",{parentName:"ol"},"Copy the file at ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and save it to the directory ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,s.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,s.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,s.kt)("inlineCode",{parentName:"li"},"k3s.yaml"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your K3s cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,s.kt)("p",null,"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s documentation")," or the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,s.kt)("h3",{id:"4-check-the-health-of-your-cluster-pods"},"4. Check the Health of Your Cluster Pods"),(0,s.kt)("p",null,"Now that you have set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," to access the cluster from your local machine."),(0,s.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo kubectl get pods --all-namespaces\nNAMESPACE       NAME                                      READY   STATUS    RESTARTS   AGE\nkube-system     metrics-server-6d684c7b5-bw59k            1/1     Running   0          8d\nkube-system     local-path-provisioner-58fb86bdfd-fmkvd   1/1     Running   0          8d\nkube-system     coredns-d798c9dd-ljjnf                    1/1     Running   0          8d\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," You have confirmed that you can access the cluster with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and the K3s cluster is running successfully. Now the Rancher management server can be installed on the cluster."))}d.isMDXComponent=!0}}]);