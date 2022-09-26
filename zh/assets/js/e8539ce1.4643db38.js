"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72841],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"\u914d\u7f6e\u9ad8\u53ef\u7528\u7684 RKE Kubernetes \u96c6\u7fa4",shortTitle:"\u914d\u7f6e RKE Kubernetes",weight:3},o=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",id:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",title:"\u914d\u7f6e\u9ad8\u53ef\u7528\u7684 RKE Kubernetes \u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u3002\u8be5\u96c6\u7fa4\u5e94\u4e13\u7528\u4e8e\u8fd0\u884c Rancher Server\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u914d\u7f6e\u9ad8\u53ef\u7528\u7684 RKE Kubernetes \u96c6\u7fa4",shortTitle:"\u914d\u7f6e RKE Kubernetes",weight:3},sidebar:"tutorialSidebar",previous:{title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528 K3s Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"},next:{title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528\u7684 RKE2 Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher"}},p={},u=[{value:"\u6240\u9700\u7684 CLI \u5de5\u5177",id:"\u6240\u9700\u7684-cli-\u5de5\u5177",level:3},{value:"1. \u521b\u5efa\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",id:"1-\u521b\u5efa\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",level:3},{value:"2. \u8fd0\u884c RKE",id:"2-\u8fd0\u884c-rke",level:3},{value:"3. \u6d4b\u8bd5\u96c6\u7fa4",id:"3-\u6d4b\u8bd5\u96c6\u7fa4",level:3},{value:"4. \u68c0\u67e5\u96c6\u7fa4 Pod \u7684\u5065\u5eb7\u72b6\u51b5",id:"4-\u68c0\u67e5\u96c6\u7fa4-pod-\u7684\u5065\u5eb7\u72b6\u51b5",level:3},{value:"5. \u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",id:"5-\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u3002\u8be5\u96c6\u7fa4\u5e94\u4e13\u7528\u4e8e\u8fd0\u884c Rancher Server\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rancher \u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u7684 Kubernetes\uff0c\u4f8b\u5982 Amazon EKS\u3002\u4ee5\u4e0b\u8bf4\u660e\u53ea\u662f\u5b89\u88c5 Kubernetes \u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u79bb\u7ebf\u73af\u5883\uff1aKubernetes \u5b89\u88c5"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5355\u8282\u70b9\u5b89\u88c5\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u5355\u8282\u70b9 Kubernetes \u96c6\u7fa4\u4e2d\uff0cRancher Server \u4e0d\u5177\u5907\u9ad8\u53ef\u7528\u6027\uff0c\u800c\u9ad8\u53ef\u7528\u6027\u5bf9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c Rancher \u975e\u5e38\u91cd\u8981\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u8981\u77ed\u671f\u5185\u4f7f\u7528\u5355\u8282\u70b9\u8282\u7701\u8d44\u6e90\uff0c\u540c\u65f6\u53c8\u4fdd\u7559\u9ad8\u53ef\u7528\u6027\u8fc1\u79fb\u8def\u5f84\uff0c\u628a Rancher \u5b89\u88c5\u5230\u5355\u8282\u70b9\u96c6\u7fa4\u4e5f\u662f\u5408\u9002\u7684\u3002"),(0,i.kt)("p",{parentName:"div"},"\u8981\u8bbe\u7f6e\u5355\u8282\u70b9 RKE \u96c6\u7fa4\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u4e2d\u914d\u7f6e\u4e00\u4e2a\u8282\u70b9\u3002\u8be5\u8282\u70b9\u9700\u5177\u5907\u6240\u6709\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"etcd"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"worker"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5728\u8fd9\u4e24\u79cd\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\uff0cRancher \u53ef\u4ee5\u4e0e Helm \u4e00\u8d77\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e0e\u5b89\u88c5\u5230\u5176\u4ed6\u96c6\u7fa4\u4e0a\u4e00\u6837\u3002"))),(0,i.kt)("h1",{id:"\u5b89\u88c5-kubernetes"},"\u5b89\u88c5 Kubernetes"),(0,i.kt)("h3",{id:"\u6240\u9700\u7684-cli-\u5de5\u5177"},"\u6240\u9700\u7684 CLI \u5de5\u5177"),(0,i.kt)("p",null,"\u5b89\u88c5 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl"),"\u3002"),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE"),"\uff08Rancher Kubernetes Engine\uff0c\u662f\u4e00\u4e2a Kubernetes \u53d1\u884c\u7248\u548c\u547d\u4ee4\u884c\u5de5\u5177\uff09\u3002"),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},"1. \u521b\u5efa\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u5728\u8fd9\u90e8\u5206\uff0c\u4f60\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"\u7684 Kubernetes \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002\u5728\u540e\u7eed\u4f7f\u7528 RKE \u547d\u4ee4\u8bbe\u7f6e\u96c6\u7fa4\u7684\u6b65\u9aa4\u4e2d\uff0c\u6b64\u6587\u4ef6\u4f1a\u7528\u4e8e\u5728\u8282\u70b9\u4e0a\u5b89\u88c5 Kubernetes\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u793a\u4f8b\u4f5c\u4e3a\u6307\u5357\uff0c\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," \u6587\u4ef6\u3002\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," \u5217\u8868\u4e2d\u7684 IP \u5730\u5740\u66ff\u6362\u4e3a\u4f60\u521b\u5efa\u7684 3 \u4e2a\u8282\u70b9\u7684 IP \u5730\u5740\u6216 DNS \u540d\u79f0\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u8282\u70b9\u6709\u516c\u5171\u5730\u5740\u548c\u5185\u90e8\u5730\u5740\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address:")," \u4ee5\u4fbf Kubernetes \u4f7f\u7528\u5b83\u5b9e\u73b0\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5f15\u7528\u5b89\u5168\u7ec4\u6216\u9632\u706b\u5899\uff0c\u67d0\u4e9b\u670d\u52a1\uff08\u5982 AWS EC2\uff09\u8981\u6c42\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address:"),"\u3002"),(0,i.kt)("p",null,"RKE \u9700\u8981\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u6bcf\u4e2a\u8282\u70b9\uff0c\u5b83\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),"\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u67e5\u627e\u79c1\u94a5\u3002\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u7684\u79c1\u94a5\u4e0d\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u4e2d\uff0c\u4f60\u8fd8\u9700\u8981\u4e3a\u8be5\u8282\u70b9\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," \u9009\u9879\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n  - address: 165.227.114.63\n    internal_address: 172.16.22.12\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.116.167\n    internal_address: 172.16.32.37\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.127.226\n    internal_address: 172.16.42.73\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\n# Required for external TLS termination with\n# ingress-nginx v0.22+\ningress:\n  provider: nginx\n  options:\n    use-forwarded-headers: "true"\n')),(0,i.kt)("figcaption",null,"\u901a\u7528 RKE \u8282\u70b9\u9009\u9879"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u516c\u5171 DNS \u6216 IP \u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u8fd0\u884c docker \u547d\u4ee4\u7684\u7528\u6237")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"role")),(0,i.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u8282\u70b9\u7684 Kubernetes \u89d2\u8272\u5217\u8868")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u96c6\u7fa4\u6d41\u91cf\u7684\u79c1\u6709 DNS \u6216 IP \u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u9a8c\u8bc1\u8282\u70b9\u7684 SSH \u79c1\u94a5\u6587\u4ef6\u8def\u5f84\uff08\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),"\uff09")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u9ad8\u7ea7\u914d\u7f6e\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RKE \u63d0\u4f9b\u5927\u91cf\u914d\u7f6e\u9009\u9879\uff0c\u7528\u4e8e\u9488\u5bf9\u4f60\u7684\u73af\u5883\u8fdb\u884c\u81ea\u5b9a\u4e49\u5b89\u88c5\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u9700\u4e86\u89e3\u9009\u9879\u548c\u529f\u80fd\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u8981\u4e3a\u5927\u89c4\u6a21 Rancher \u5b89\u88c5\u4f18\u5316 etcd \u96c6\u7fa4\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},"etcd \u8bbe\u7f6e\u6307\u5357"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u6709\u5173 Dockershim \u652f\u6301\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/dockershim"},"\u6b64\u9875\u9762"),"\u3002"))),(0,i.kt)("h3",{id:"2-\u8fd0\u884c-rke"},"2. \u8fd0\u884c RKE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,i.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u7ed3\u675f\u884c\u5e94\u8be5\u662f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Finished build Kubernetes cluster succeeded"),"\u3002"),(0,i.kt)("h3",{id:"3-\u6d4b\u8bd5\u96c6\u7fa4"},"3. \u6d4b\u8bd5\u96c6\u7fa4"),(0,i.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e\u5de5\u4f5c\u533a\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u4e0e\u6b64\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff0c\u4f60\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u53ef\u8bbf\u95ee\u7684\u4f4d\u7f6e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u5305\u542b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8bbf\u95ee\u96c6\u7fa4\u6240\u9700\u7684\u51ed\u8bc1\u3002"),(0,i.kt)("p",null,"\u4f60\u5728\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"rke up")," \u65f6\uff0cRKE \u5e94\u8be5\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),"\u7684\u51ed\u8bc1\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u7684\u6587\u4ef6\u540d\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"\uff0ckubeconfig \u6587\u4ef6\u5c06\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_<FILE_NAME>.yml"),"\u3002"))),(0,i.kt)("p",null,"\u5c06\u6b64\u6587\u4ef6\u79fb\u52a8\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\u3002\u5982\u679c\u4f60\u4f7f\u7528\u591a\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml")," \u7684\u8def\u5f84:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_cluster.yml\n")),(0,i.kt)("p",null,"\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6d4b\u8bd5\u4f60\u7684\u8fde\u63a5\u6027\uff0c\u5e76\u67e5\u770b\u4f60\u7684\u6240\u6709\u8282\u70b9\u662f\u5426\u90fd\u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Ready")," \u72b6\u6001\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get nodes\n\nNAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.13.5\n")),(0,i.kt)("h3",{id:"4-\u68c0\u67e5\u96c6\u7fa4-pod-\u7684\u5065\u5eb7\u72b6\u51b5"},"4. \u68c0\u67e5\u96c6\u7fa4 Pod \u7684\u5065\u5eb7\u72b6\u51b5"),(0,i.kt)("p",null,"\u68c0\u67e5\u6240\u6709\u9700\u8981\u7684 Pod \u548c\u5bb9\u5668\u662f\u5426\u5065\u5eb7\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pod \u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"Completed")," \u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READY")," \u8868\u793a\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"STATUS")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," \u7684 Pod \u7684\u6240\u6709\u5bb9\u5668\uff08\u4f8b\u5982\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"3/3"),"\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STATUS")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Completed")," \u7684 Pod \u662f\u4e00\u6b21\u8fd0\u884c\u7684 Job\u3002\u8fd9\u4e9b Pod ",(0,i.kt)("inlineCode",{parentName:"li"},"READY")," \u5217\u7684\u503c\u5e94\u8be5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0/1"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n\nNAMESPACE       NAME                                      READY     STATUS      RESTARTS   AGE\ningress-nginx   nginx-ingress-controller-tnsn4            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-tw2ht            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-v874b            1/1       Running     0          30s\nkube-system     canal-jp4hz                               3/3       Running     0          30s\nkube-system     canal-z2hg8                               3/3       Running     0          30s\nkube-system     canal-z6kpw                               3/3       Running     0          30s\nkube-system     kube-dns-7588d5b5f5-sf4vh                 3/3       Running     0          30s\nkube-system     kube-dns-autoscaler-5db9bbb766-jz2k6      1/1       Running     0          30s\nkube-system     metrics-server-97bc649d5-4rl2q            1/1       Running     0          30s\nkube-system     rke-ingress-controller-deploy-job-bhzgm   0/1       Completed   0          30s\nkube-system     rke-kubedns-addon-deploy-job-gl7t4        0/1       Completed   0          30s\nkube-system     rke-metrics-addon-deploy-job-7ljkc        0/1       Completed   0          30s\nkube-system     rke-network-plugin-deploy-job-6pbgj       0/1       Completed   0          30s\n")),(0,i.kt)("p",null,"\u8fd9\u8868\u793a\u4f60\u5df2\u6210\u529f\u5b89\u88c5\u4e86\u53ef\u8fd0\u884c Rancher Server \u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,i.kt)("h3",{id:"5-\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"},"5. \u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ef4\u62a4\u3001\u6392\u9664\u95ee\u9898\u548c\u5347\u7ea7\u96c6\u7fa4\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u6587\u4ef6\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u8fd9\u4e9b\u6587\u4ef6\uff1a"))),(0,i.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6587\u4ef6\u7684\u526f\u672c\u4fdd\u5b58\u5728\u5b89\u5168\u4f4d\u7f6e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),"\uff1aRKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),"\uff1a\u96c6\u7fa4\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig \u6587\u4ef6"),"\u3002\u8be5\u6587\u4ef6\u5305\u542b\u53ef\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),"\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes \u72b6\u6001\u6587\u4ef6"),"\u3002\u6b64\u6587\u4ef6\u5305\u62ec\u7528\u4e8e\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"li"},"Kubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6\u4ec5\u5728 RKE \u7248\u672c\u662f 0.2.0 \u6216\u66f4\u9ad8\u7248\u672c\u65f6\u751f\u6210\u3002"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u540e\u4e24\u4e2a\u6587\u4ef6\u540d\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster")," \u90e8\u5206\u53d6\u51b3\u4e8e\u4f60\u547d\u540d RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u3002"))),(0,i.kt)("h3",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,i.kt)("p",null,"\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"\u6545\u969c\u6392\u9664"),"\u9875\u9762\u3002"),(0,i.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5b89\u88c5 Rancher")))}m.isMDXComponent=!0}}]);