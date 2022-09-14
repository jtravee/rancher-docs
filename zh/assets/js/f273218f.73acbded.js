"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39645],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return o}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),k=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=k(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=k(a),o=r,c=d["".concat(u,".").concat(o)]||d[o]||m[o]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91383:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return o},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"\u5b89\u88c5\u8981\u6c42",description:"\u5982\u679c Rancher \u914d\u7f6e\u5728 Docker \u6216 Kubernetes \u4e2d\u8fd0\u884c\u65f6\uff0c\u4e86\u89e3\u8fd0\u884c Rancher Server \u7684\u6bcf\u4e2a\u8282\u70b9\u7684\u8282\u70b9\u8981\u6c42",weight:1},u=void 0,k={unversionedId:"pages-for-subheaders/installation-requirements",id:"pages-for-subheaders/installation-requirements",title:"\u5b89\u88c5\u8981\u6c42",description:"\u5982\u679c Rancher \u914d\u7f6e\u5728 Docker \u6216 Kubernetes \u4e2d\u8fd0\u884c\u65f6\uff0c\u4e86\u89e3\u8fd0\u884c Rancher Server \u7684\u6bcf\u4e2a\u8282\u70b9\u7684\u8282\u70b9\u8981\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/installation-requirements.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-requirements",permalink:"/zh/pages-for-subheaders/installation-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/installation-requirements.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u5b89\u88c5\u8981\u6c42",description:"\u5982\u679c Rancher \u914d\u7f6e\u5728 Docker \u6216 Kubernetes \u4e2d\u8fd0\u884c\u65f6\uff0c\u4e86\u89e3\u8fd0\u884c Rancher Server \u7684\u6bcf\u4e2a\u8282\u70b9\u7684\u8282\u70b9\u8981\u6c42",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5/\u5347\u7ea7 Rancher",permalink:"/zh/pages-for-subheaders/installation-and-upgrade"},next:{title:"\u5b89\u88c5 Docker",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/install-docker"}},s={},m=[{value:"RKE \u8981\u6c42",id:"rke-\u8981\u6c42",level:3},{value:"K3s \u8981\u6c42",id:"k3s-\u8981\u6c42",level:3},{value:"RKE2 \u8981\u6c42",id:"rke2-\u8981\u6c42",level:3},{value:"\u5b89\u88c5 Docker",id:"\u5b89\u88c5-docker",level:3},{value:"RKE \u548c\u6258\u7ba1 Kubernetes",id:"rke-\u548c\u6258\u7ba1-kubernetes",level:3},{value:"K3s Kubernetes",id:"k3s-kubernetes",level:3},{value:"RKE2 Kubernetes",id:"rke2-kubernetes",level:3},{value:"Docker",id:"docker",level:3},{value:"\u8282\u70b9 IP \u5730\u5740",id:"\u8282\u70b9-ip-\u5730\u5740",level:3},{value:"\u7aef\u53e3\u8981\u6c42",id:"\u7aef\u53e3\u8981\u6c42",level:3}],d={toc:m};function o(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u5bf9\u9700\u8981\u5b89\u88c5 Rancher Server \u7684\u8282\u70b9\u7684\u8f6f\u4ef6\u3001\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42\u3002Rancher Server \u53ef\u4ee5\u5b89\u88c5\u5728\u5355\u4e2a\u8282\u70b9\u6216\u9ad8\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9700\u8981\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\uff0c\u8be5\u8282\u70b9\u7684\u8981\u6c42\u4e0e\u7528\u4e8e\u8fd0\u884c\u5e94\u7528\u548c\u670d\u52a1\u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"\u4e0b\u6e38\u96c6\u7fa4\u7684\u8282\u70b9\u8981\u6c42"),"\u4e0d\u540c\u3002"))),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u5b89\u88c5 Rancher Server \u7684\u8282\u70b9\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%92%8C%E5%AE%B9%E5%99%A8%E8%BF%90%E8%A1%8C%E6%97%B6%E8%A6%81%E6%B1%82"},"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-%E8%A6%81%E6%B1%82"},"RKE \u8981\u6c42")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-%E8%A6%81%E6%B1%82"},"K3s \u8981\u6c42")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-%E8%A6%81%E6%B1%82"},"RKE2 \u8981\u6c42")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%89%E8%A3%85-docker"},"\u5b89\u88c5 Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82"},"\u786c\u4ef6\u8981\u6c42")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cpu-%E5%92%8C%E5%86%85%E5%AD%98"},"CPU \u548c\u5185\u5b58"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke-%E5%92%8C%E6%89%98%E7%AE%A1-kubernetes"},"RKE \u548c\u6258\u7ba1 Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#k3s-kubernetes"},"K3s Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#rke2-kubernetes"},"RKE2 Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#docker"},"Docker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ingress"},"Ingress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A3%81%E7%9B%98"},"\u78c1\u76d8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BD%91%E7%BB%9C%E8%A6%81%E6%B1%82"},"\u7f51\u7edc\u8981\u6c42"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%8A%82%E7%82%B9-ip-%E5%9C%B0%E5%9D%80"},"\u8282\u70b9 IP \u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AB%AF%E5%8F%A3%E8%A6%81%E6%B1%82"},"\u7aef\u53e3\u8981\u6c42")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dockershim-%E6%94%AF%E6%8C%81"},"Dockershim \u652f\u6301"))),(0,l.kt)("p",null,"\u5982\u9700\u83b7\u53d6\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c Rancher Server \u7684\u6700\u4f73\u5b9e\u8df5\u5217\u8868\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,l.kt)("p",null,"Rancher UI \u5728 Firefox \u6216 Chrome \u4e2d\u6548\u679c\u66f4\u4f73\u3002"),(0,l.kt)("h1",{id:"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42"},"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42"),(0,l.kt)("p",null,"Rancher \u517c\u5bb9\u5f53\u524d\u6240\u6709\u7684\u4e3b\u6d41 Linux \u53d1\u884c\u7248\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c RKE Kubernetes \u96c6\u7fa4\u7684\u8282\u70b9\u9700\u8981\u5b89\u88c5 Docker\u3002Kubernetes \u5b89\u88c5\u4e0d\u9700\u8981 Docker\u3002"),(0,l.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u4e86\u89e3\u4f60\u4f7f\u7528\u7684 Rancher \u7248\u672c\u652f\u6301\u54ea\u4e9b Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5404\u4e2a Rancher \u7248\u672c\u901a\u8fc7\u4e86\u54ea\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u548c Docker \u7248\u672c\u6d4b\u8bd5\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u548c\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u652f\u6301\u7684\u64cd\u4f5c\u7cfb\u7edf\u90fd\u4f7f\u7528 64-bit x86 \u67b6\u6784\u3002"),(0,l.kt)("p",null,"\u8bf7\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ntp"),"\uff08Network Time Protocol\uff09\uff0c\u4ee5\u9632\u6b62\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7531\u4e8e\u65f6\u95f4\u4e0d\u540c\u6b65\u9020\u6210\u7684\u8bc1\u4e66\u9a8c\u8bc1\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u67d0\u4e9b Linux \u53d1\u884c\u7248\u7684\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\u53ef\u80fd\u4f1a\u963b\u6b62\u4e0e Helm \u7684\u901a\u4fe1\u3002\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f7f\u7528\u7684\u662f Kubernetes 1.19\uff0c1.20 \u6216 1.21\uff0c\u5219\u5fc5\u987b\u5173\u95ed firewalld\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u592a\u60f3\u8fd9\u6837\u505a\u7684\u8bdd\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840"},"\u76f8\u5173\u95ee\u9898"),"\u4e2d\u7684\u5efa\u8bae\u3002\u67d0\u4e9b\u7528\u6237\u5df2\u80fd\u6210\u529f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840#issuecomment-787404822"},"\u4f7f\u7528 ACCEPT \u7b56\u7565 \u4e3a Pod CIDR \u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684 firewalld \u533a\u57df"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728 ARM64 \u4e0a\u4f7f\u7528 Rancher\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"\u5728 ARM64\uff08\u5b9e\u9a8c\u529f\u80fd\uff09\u4e0a\u8fd0\u884c Rancher"),"\u3002"),(0,l.kt)("h3",{id:"rke-\u8981\u6c42"},"RKE \u8981\u6c42"),(0,l.kt)("p",null,"\u5bb9\u5668\u8fd0\u884c\u65f6\u65b9\u9762\uff0cRKE \u53ef\u4ee5\u517c\u5bb9\u5f53\u524d\u7684\u6240\u6709 Docker \u7248\u672c\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5fc5\u987b\u5e94\u7528\u4ee5\u4e0b sysctl \u8bbe\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"net.bridge.bridge-nf-call-iptables=1\n")),(0,l.kt)("h3",{id:"k3s-\u8981\u6c42"},"K3s \u8981\u6c42"),(0,l.kt)("p",null,"\u5bb9\u5668\u8fd0\u884c\u65f6\u65b9\u9762\uff0cK3s \u53ef\u4ee5\u517c\u5bb9\u5f53\u524d\u7684\u6240\u6709 Docker \u7248\u672c\u3002"),(0,l.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u4e86\u89e3\u4f60\u4f7f\u7528\u7684 Rancher \u7248\u672c\u652f\u6301\u54ea\u4e9b Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002\u5982\u9700\u6307\u5b9a K3s \u7248\u672c\uff0c\u8bf7\u5728\u8fd0\u884c K3s \u5b89\u88c5\u811a\u672c\u65f6\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_VERSION")," \u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Raspbian Buster")," \u5728 K3s \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\uff0c\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5207\u6362\u5230\u65e7\u7248 iptables\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Alpine Linux \u7684 K3s \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\uff0c\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"\u8fd9\u4e9b\u6b65\u9aa4")," \u8fdb\u884c\u5176\u4ed6\u8bbe\u7f6e\u3002"),(0,l.kt)("h3",{id:"rke2-\u8981\u6c42"},"RKE2 \u8981\u6c42"),(0,l.kt)("p",null,"\u5982\u9700\u4e86\u89e3 RKE2 \u901a\u8fc7\u4e86\u54ea\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u7684\u6d4b\u8bd5\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u548c\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,l.kt)("p",null,"RKE2 \u5b89\u88c5\u4e0d\u9700\u8981 Docker\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5-docker"},"\u5b89\u88c5 Docker"),(0,l.kt)("p",null,"Docker \u662f Helm Chart \u5b89\u88c5\u6240\u5fc5\u987b\u7684\u3002\u4f60\u53ef\u4ee5\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u4e2d\u7684\u6b65\u9aa4\u8fdb\u884c\u5b89\u88c5\u3002Rancher \u4e5f\u63d0\u4f9b\u4f7f\u7528\u5355\u6761\u547d\u4ee4\u5b89\u88c5 Docker \u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/install-docker"},"\u811a\u672c"),"\u3002"),(0,l.kt)("h1",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,l.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5b89\u88c5 Rancher Server \u7684\u8282\u70b9\u7684 CPU\u3001\u5185\u5b58\u548c\u78c1\u76d8\u8981\u6c42\u3002"),(0,l.kt)("h1",{id:"cpu-\u548c\u5185\u5b58"},"CPU \u548c\u5185\u5b58"),(0,l.kt)("p",null,"\u786c\u4ef6\u8981\u6c42\u6839\u636e\u4f60\u7684 Rancher \u90e8\u7f72\u89c4\u6a21\u800c\u5b9a\u3002\u8bf7\u6839\u636e\u8981\u6c42\u914d\u7f6e\u6bcf\u4e2a\u8282\u70b9\u3002\u901a\u8fc7\u5355\u8282\u70b9\u5bb9\u5668\u5b89\u88c5 Rancher\uff0c\u548c\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u8981\u6c42\u6709\u6240\u4e0d\u540c\u3002"),(0,l.kt)("h3",{id:"rke-\u548c\u6258\u7ba1-kubernetes"},"RKE \u548c\u6258\u7ba1 Kubernetes"),(0,l.kt)("p",null,"\u8fd9\u4e9b CPU \u548c\u5185\u5b58\u8981\u6c42\u9002\u7528\u4e8e\u6bcf\u4e2a\u5b89\u88c5 Rancher Server \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u4e3b\u673a\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u8981\u6c42\u9002\u7528\u4e8e RKE Kubernetes \u96c6\u7fa4\u4ee5\u53ca\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\uff0c\u4f8b\u5982 EKS\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u89c4\u6a21"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 150 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 1500 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 300 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 3,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 500 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 5,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 1,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 10,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 2,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 20,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7528\u4f8b\u548c\u73af\u5883\u90fd\u662f\u4e0d\u540c\u7684\u3002\u8bf7",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"\u8054\u7cfb Rancher")," \u6765\u5ba1\u6838\u4f60\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h3",{id:"k3s-kubernetes"},"K3s Kubernetes"),(0,l.kt)("p",null,"\u8fd9\u4e9b CPU \u548c\u5185\u5b58\u8981\u6c42\u9002\u7528\u4e8e\u6bcf\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5b89\u88c5 Rancher Server \u7684 Kubernetes \u96c6\u7fa4"),"\u4e2d\u7684\u4e3b\u673a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u89c4\u6a21"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5927\u5c0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 150 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 1500 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838\uff0c4 GB + 1,000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 300 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 3,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838\uff0c4 GB + 1,000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 500 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 5,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838\uff0c4 GB + 1,000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 1,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 10,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838\uff0c4 GB + 1,000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u5927"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 2,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 20,000 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 \u6838\uff0c4 GB + 1,000 IOPS")))),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7528\u4f8b\u548c\u73af\u5883\u90fd\u662f\u4e0d\u540c\u7684\u3002\u8bf7",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"\u8054\u7cfb Rancher")," \u6765\u5ba1\u6838\u4f60\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h3",{id:"rke2-kubernetes"},"RKE2 Kubernetes"),(0,l.kt)("p",null,"\u8fd9\u4e9b CPU \u548c\u5185\u5b58\u8981\u6c42\u9002\u7528\u4e8e\u5b89\u88c5\u4e86 RKE2 \u7684\u6bcf\u4e2a\u5b9e\u4f8b\u3002\u6700\u4f4e\u914d\u7f6e\u8981\u6c42\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u89c4\u6a21"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 5 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 50 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 15 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 200 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9 GB")))),(0,l.kt)("h3",{id:"docker"},"Docker"),(0,l.kt)("p",null,"\u8fd9\u4e9b CPU \u548c\u5185\u5b58\u8981\u6c42\u9002\u7528\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"\u5355\u8282\u70b9"),"\u5b89\u88c5 Rancher \u7684\u4e3b\u673a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u89c4\u6a21"),(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8282\u70b9"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 5 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 50 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 15 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a 200 \u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")))),(0,l.kt)("h1",{id:"ingress"},"Ingress"),(0,l.kt)("p",null,"\u5b89\u88c5 Rancher \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u8be5\u8fd0\u884c\u4e00\u4e2a Ingress\u3002"),(0,l.kt)("p",null,"Ingress \u9700\u8981\u90e8\u7f72\u4e3a DaemonSet \u4ee5\u786e\u4fdd\u8d1f\u8f7d\u5747\u8861\u5668\u80fd\u6210\u529f\u628a\u6d41\u91cf\u8f6c\u53d1\u5230\u5404\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f RKE \u548c K3s \u5b89\u88c5\uff0c\u4f60\u4e0d\u9700\u8981\u624b\u52a8\u5b89\u88c5 Ingress\uff0c\u56e0\u4e3a\u5b83\u662f\u9ed8\u8ba4\u5b89\u88c5\u7684\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u6258\u7ba1 Kubernetes \u96c6\u7fa4\uff08EKS\u3001GKE\u3001AKS\uff09\u548c RKE2 Kubernetes \u5b89\u88c5\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e Ingress\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Amazon EKS"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher \u4ee5\u53ca\u5982\u4f55\u5b89\u88c5 Ingress \u4ee5\u8bbf\u95ee Rancher Server"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AKS"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"},"\u4f7f\u7528 Azure Kubernetes \u670d\u52a1\u5b89\u88c5 Rancher \u4ee5\u53ca\u5982\u4f55\u5b89\u88c5 Ingress \u4ee5\u8bbf\u95ee Rancher Server"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GKE"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},"\u4f7f\u7528 GKE \u5b89\u88c5 Rancher \u4ee5\u53ca\u5982\u4f55\u5b89\u88c5 Ingress \u4ee5\u8bbf\u95ee Rancher Server"),"\u3002")),(0,l.kt)("h1",{id:"\u78c1\u76d8"},"\u78c1\u76d8"),(0,l.kt)("p",null,"etcd \u5728\u96c6\u7fa4\u4e2d\u7684\u6027\u80fd\u51b3\u5b9a\u4e86 Rancher \u7684\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u901f\u5ea6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 SSD \u78c1\u76d8\u6765\u652f\u6301 Rancher \u7ba1\u7406\u7684 Kubernetes \u96c6\u7fa4\u3002\u5728\u4e91\u63d0\u4f9b\u5546\u4e0a\uff0c\u4f60\u8fd8\u9700\u4f7f\u7528\u80fd\u83b7\u5f97\u6700\u5927 IOPS \u7684\u6700\u5c0f\u5927\u5c0f\u3002\u5728\u8f83\u5927\u7684\u96c6\u7fa4\u4e2d\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u4e13\u7528\u5b58\u50a8\u8bbe\u5907\u5b58\u50a8 etcd \u6570\u636e\u548c wal \u76ee\u5f55\u3002"),(0,l.kt)("h1",{id:"\u7f51\u7edc\u8981\u6c42"},"\u7f51\u7edc\u8981\u6c42"),(0,l.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u4e86\u5b89\u88c5 Rancher Server \u7684\u8282\u70b9\u7684\u7f51\u7edc\u8981\u6c42\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u5305\u542b Rancher \u7684\u670d\u52a1\u5668\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-Frame-Options=DENY")," \u6807\u5934\uff0c\u5728\u5347\u7ea7\u65e7\u7248 UI \u4e4b\u540e\uff0cRancher UI \u4e2d\u7684\u67d0\u4e9b\u9875\u9762\u53ef\u80fd\u65e0\u6cd5\u6e32\u67d3\u3002\u8fd9\u662f\u56e0\u4e3a\u67d0\u4e9b\u65e7\u7248\u9875\u9762\u5728\u65b0 UI \u4e2d\u662f\u4ee5 iFrames \u6a21\u5f0f\u5d4c\u5165\u7684\u3002"))),(0,l.kt)("h3",{id:"\u8282\u70b9-ip-\u5730\u5740"},"\u8282\u70b9 IP \u5730\u5740"),(0,l.kt)("p",null,"\u65e0\u8bba\u4f60\u662f\u5728\u5355\u4e2a\u8282\u70b9\u8fd8\u662f\u9ad8\u53ef\u7528\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u914d\u7f6e\u4e00\u4e2a\u9759\u6001 IP\u3002\u5982\u679c\u4f7f\u7528 DHCP\uff0c\u5219\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a DHCP \u9884\u7559\uff0c\u4ee5\u786e\u4fdd\u8282\u70b9\u5206\u914d\u5230\u76f8\u540c\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("h3",{id:"\u7aef\u53e3\u8981\u6c42"},"\u7aef\u53e3\u8981\u6c42"),(0,l.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u80fd\u6b63\u5e38\u8fd0\u884c\uff0cRancher \u9700\u8981\u5728 Rancher \u8282\u70b9\u548c\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u8282\u70b9\u4e0a\u5f00\u653e\u4e00\u4e9b\u7aef\u53e3\u3002\u4e0d\u540c\u96c6\u7fa4\u7c7b\u578b\u7684 Rancher \u548c\u4e0b\u6e38\u96c6\u7fa4\u7684\u6240\u6709\u5fc5\u8981\u7aef\u53e3\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"\u7aef\u53e3\u8981\u6c42"),"\u3002"),(0,l.kt)("h1",{id:"dockershim-\u652f\u6301"},"Dockershim \u652f\u6301"),(0,l.kt)("p",null,"\u6709\u5173 Dockershim \u652f\u6301\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/dockershim"},"\u6b64\u9875\u9762"),"\u3002"))}o.isMDXComponent=!0}}]);