"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10215],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=o(t),f=a,d=h["".concat(u,".").concat(f)]||h[f]||l[f]||c;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=h;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},81070:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),i=["components"],s={title:"Rancher \u8fd0\u884c\u6280\u5de7",weight:100},u=void 0,o={unversionedId:"reference-guides/best-practices/rancher-server/tips-for-running-rancher",id:"reference-guides/best-practices/rancher-server/tips-for-running-rancher",title:"Rancher \u8fd0\u884c\u6280\u5de7",description:"\u672c\u6307\u5357\u9002\u7528\u4e8e\u4f7f\u7528 Rancher \u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684\u7528\u4f8b\u3002\u9ad8\u53ef\u7528\u8bbe\u7f6e\u53ef\u4ee5\u9632\u6b62 Rancher Server \u4e0d\u53ef\u7528\u65f6\u65e0\u6cd5\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher",permalink:"/zh/reference-guides/best-practices/rancher-server/tips-for-running-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Rancher \u8fd0\u884c\u6280\u5de7",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher \u90e8\u7f72\u7b56\u7565",permalink:"/zh/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},next:{title:"Rancher \u7ba1\u7406\u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/pages-for-subheaders/rancher-managed-clusters"}},p={},l=[{value:"\u5728\u5355\u72ec\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c Rancher",id:"\u5728\u5355\u72ec\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c-rancher",level:3},{value:"\u786e\u4fdd Kubernetes \u8282\u70b9\u914d\u7f6e\u6b63\u786e",id:"\u786e\u4fdd-kubernetes-\u8282\u70b9\u914d\u7f6e\u6b63\u786e",level:3},{value:"\u4f7f\u7528 RKE \u65f6\uff1a\u5907\u4efd\u72b6\u6001\u6587\u4ef6\uff08Statefile\uff09",id:"\u4f7f\u7528-rke-\u65f6\u5907\u4efd\u72b6\u6001\u6587\u4ef6statefile",level:3},{value:"\u5728\u540c\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9",id:"\u5728\u540c\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9",level:3},{value:"\u4fdd\u8bc1\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u7684\u76f8\u4f3c\u6027",id:"\u4fdd\u8bc1\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u7684\u76f8\u4f3c\u6027",level:3},{value:"\u76d1\u63a7\u96c6\u7fa4\u4ee5\u89c4\u5212\u5bb9\u91cf",id:"\u76d1\u63a7\u96c6\u7fa4\u4ee5\u89c4\u5212\u5bb9\u91cf",level:3}],h={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u6307\u5357\u9002\u7528\u4e8e\u4f7f\u7528 Rancher \u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684\u7528\u4f8b\u3002\u9ad8\u53ef\u7528\u8bbe\u7f6e\u53ef\u4ee5\u9632\u6b62 Rancher Server \u4e0d\u53ef\u7528\u65f6\u65e0\u6cd5\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"\u9ad8\u53ef\u7528 Rancher \u5b89\u88c5\u6307\u5c06 Rancher \u5b89\u88c5\u5230\u81f3\u5c11\u6709\u4e09\u4e2a\u8282\u70b9\u7684 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u9002\u7528\u4e8e\u6240\u6709\u751f\u4ea7\u73af\u5883\u4ee5\u53ca\u91cd\u8981\u7684\u5b89\u88c5\u573a\u666f\u3002\u5728\u591a\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u591a\u4e2a Rancher \u5b9e\u4f8b\u80fd\u591f\u5b9e\u73b0\u5355\u8282\u70b9\u5b89\u88c5\u65e0\u6cd5\u63d0\u4f9b\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher\uff0c\u8bf7\u53c2\u89c1",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"\u6700\u4f73\u5b9e\u8df5\u6587\u6863"),"\u3002"),(0,c.kt)("p",null,"\u5728\u8bbe\u7f6e\u9ad8\u53ef\u7528 Rancher \u5b89\u88c5\u65f6\uff0c\u8bf7\u8003\u8651\u4ee5\u4e0b\u4e8b\u9879\u3002"),(0,c.kt)("h3",{id:"\u5728\u5355\u72ec\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c-rancher"},"\u5728\u5355\u72ec\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c Rancher"),(0,c.kt)("p",null,"\u4e0d\u8981\u5728\u5b89\u88c5\u4e86 Rancher \u7684 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u6216\u5fae\u670d\u52a1\u3002"),(0,c.kt)("h3",{id:"\u786e\u4fdd-kubernetes-\u8282\u70b9\u914d\u7f6e\u6b63\u786e"},"\u786e\u4fdd Kubernetes \u8282\u70b9\u914d\u7f6e\u6b63\u786e"),(0,c.kt)("p",null,"\u5728\u90e8\u7f72\u8282\u70b9\u65f6\uff0c\u8bf7\u9075\u5faa K8s \u548c etcd \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5176\u4e2d\u5305\u62ec\u7981\u7528 swap\uff0c\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u4e3b\u673a\u4e4b\u95f4\u662f\u5426\u6709\u826f\u597d\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u4e3a\u6bcf\u4e2a\u8282\u70b9\u4f7f\u7528\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3001MAC \u5730\u5740\u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"product_uuids"),"\uff0c\u68c0\u67e5\u6240\u9700\u7aef\u53e3\u662f\u5426\u5df2\u7ecf\u6253\u5f00\uff0c\u5e76\u4f7f\u7528\u914d\u7f6e SSD \u7684 etcd \u8fdb\u884c\u90e8\u7f72\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin"},"kubernetes \u5b98\u65b9\u6587\u6863"),"\u548c ",(0,c.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4/op-guide/performance/"},"etcd \u6027\u80fd\u64cd\u4f5c\u6307\u5357"),"\u3002"),(0,c.kt)("h3",{id:"\u4f7f\u7528-rke-\u65f6\u5907\u4efd\u72b6\u6001\u6587\u4ef6statefile"},"\u4f7f\u7528 RKE \u65f6\uff1a\u5907\u4efd\u72b6\u6001\u6587\u4ef6\uff08Statefile\uff09"),(0,c.kt)("p",null,"RKE \u5c06\u96c6\u7fa4\u72b6\u6001\u8bb0\u5f55\u5728\u4e00\u4e2a\u540d\u4e3a ",(0,c.kt)("inlineCode",{parentName:"p"},"cluster.rkestate")," \u7684\u6587\u4ef6\u4e2d\uff0c\u8be5\u6587\u4ef6\u5bf9\u96c6\u7fa4\u7684\u6062\u590d\u548c/\u6216\u901a\u8fc7 RKE \u7ef4\u62a4\u96c6\u7fa4\u975e\u5e38\u91cd\u8981\u3002\u7531\u4e8e\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u8bc1\u4e66\u6750\u6599\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u5728\u5907\u4efd\u524d\u5bf9\u8be5\u6587\u4ef6\u8fdb\u884c\u52a0\u5bc6\u3002\u8bf7\u5728\u6bcf\u6b21\u8fd0\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"rke up")," \u540e\u5907\u4efd\u72b6\u6001\u6587\u4ef6\u3002"),(0,c.kt)("h3",{id:"\u5728\u540c\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9"},"\u5728\u540c\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9"),(0,c.kt)("p",null,"\u4e3a\u8fbe\u5230\u6700\u4f73\u6027\u80fd\uff0c\u8bf7\u5728\u540c\u4e00\u5730\u7406\u6570\u636e\u4e2d\u5fc3\u8fd0\u884c\u6240\u6709\u4e09\u4e2a\u8282\u70b9\u3002\u5982\u679c\u4f60\u5728\u4e91\uff08\u5982 AWS\uff09\u4e0a\u8fd0\u884c\u8282\u70b9\uff0c\u8bf7\u5728\u4e0d\u540c\u7684\u53ef\u7528\u533a\uff08AZ\uff09\u4e2d\u8fd0\u884c\u8fd9\u4e09\u4e2a\u8282\u70b9\u3002\u4f8b\u5982\uff0c\u5728 us-west-2a \u4e2d\u8fd0\u884c\u8282\u70b9 1\uff0c\u5728 us-west-2b \u4e2d\u8fd0\u884c\u8282\u70b9 2\uff0c\u5728 us-west-2c \u4e2d\u8fd0\u884c\u8282\u70b9 3\u3002"),(0,c.kt)("h3",{id:"\u4fdd\u8bc1\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u7684\u76f8\u4f3c\u6027"},"\u4fdd\u8bc1\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u7684\u76f8\u4f3c\u6027"),(0,c.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u4e3a\u8fd0\u884c Rancher \u7684 Kubernetes \u96c6\u7fa4\u914d\u5907 \u201cstaging\u201d \u6216 \u201cpre-production\u201d \u73af\u5883\u3002\u8fd9\u4e2a\u73af\u5883\u7684\u8f6f\u4ef6\u548c\u786c\u4ef6\u914d\u7f6e\u5e94\u8be5\u5c3d\u53ef\u80fd\u63a5\u8fd1\u4f60\u7684\u751f\u4ea7\u73af\u5883\u3002"),(0,c.kt)("h3",{id:"\u76d1\u63a7\u96c6\u7fa4\u4ee5\u89c4\u5212\u5bb9\u91cf"},"\u76d1\u63a7\u96c6\u7fa4\u4ee5\u89c4\u5212\u5bb9\u91cf"),(0,c.kt)("p",null,"Rancher Server \u7684 Kubernetes \u96c6\u7fa4\u5e94\u8be5\u5c3d\u53ef\u80fd\u6ee1\u8db3",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u7cfb\u7edf\u548c\u786c\u4ef6\u8981\u6c42"),"\u3002\u8d8a\u504f\u79bb\u7cfb\u7edf\u548c\u786c\u4ef6\u8981\u6c42\uff0c\u4f60\u53ef\u80fd\u9762\u4e34\u7684\u98ce\u9669\u5c31\u8d8a\u5927\u3002"),(0,c.kt)("p",null,"\u4f46\u662f\uff0c\u5df2\u53d1\u5e03\u7684\u8981\u6c42\u5df2\u7ecf\u8003\u8651\u4e86\u5404\u79cd\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\uff0c\u56e0\u6b64\uff0c\u57fa\u4e8e\u6307\u6807\u6765\u89c4\u5212\u5bb9\u91cf\u5e94\u8be5\u662f\u6269\u5c55 Rancher \u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 Rancher \u96c6\u6210\u4e1a\u754c\u9886\u5148\u7684\u5f00\u6e90\u76d1\u63a7\u89e3\u51b3\u65b9\u6848 Prometheus \u4ee5\u53ca\u80fd\u53ef\u89c6\u5316 Prometheus \u6307\u6807\u7684 Grafana\uff0c\u6765\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u72b6\u6001\u548c\u8fc7\u7a0b\u3002"),(0,c.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"\u542f\u7528\u76d1\u63a7"),"\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u544a\u8b66\u901a\u77e5\uff0c\u6765\u4e86\u89e3\u96c6\u7fa4\u5bb9\u91cf\u7684\u4f7f\u7528\u60c5\u51b5\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 Prometheus \u548c Grafana \u76d1\u63a7\u6846\u67b6\uff0c\u5728\u4f60\u6269\u5bb9\u65f6\u5efa\u7acb\u5173\u952e\u6307\u6807\u7684\u57fa\u7ebf\u3002"))}f.isMDXComponent=!0}}]);