"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[267],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),k=a,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91466:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],s={title:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4",weight:2050},u=void 0,i={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",title:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4",description:"\u4f60\u53ef\u4ee5\u8f7b\u677e\u5907\u4efd\u548c\u6062\u590d Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u7684 etcd\u3002etcd \u6570\u636e\u5e93\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5728 etcd \u8282\u70b9\u6216 S3 \u517c\u5bb9\u76ee\u6807\u4e0a\u3002\u914d\u7f6e S3 \u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u6240\u6709 etcd \u8282\u70b9\u90fd\u4e22\u5931\u4e86\uff0c\u4f60\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5230\u8fdc\u7aef\u5e76\u80fd\u7528\u4e8e\u6062\u590d\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4",weight:2050},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd\u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},next:{title:"\u9ad8\u7ea7\u7528\u6237\u6307\u5357",permalink:"/zh/pages-for-subheaders/advanced-user-guides"}},l={},p=[{value:"\u67e5\u770b\u53ef\u7528\u5feb\u7167",id:"\u67e5\u770b\u53ef\u7528\u5feb\u7167",level:2},{value:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",level:2},{value:"\u5728\u6ca1\u6709\u5feb\u7167\u7684\u60c5\u51b5\u4e0b\u6062\u590d etcd",id:"\u5728\u6ca1\u6709\u5feb\u7167\u7684\u60c5\u51b5\u4e0b\u6062\u590d-etcd",level:2}],d={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u8f7b\u677e\u5907\u4efd\u548c\u6062\u590d ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),"\u7684 etcd\u3002etcd \u6570\u636e\u5e93\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5728 etcd \u8282\u70b9\u6216 S3 \u517c\u5bb9\u76ee\u6807\u4e0a\u3002\u914d\u7f6e S3 \u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u6240\u6709 etcd \u8282\u70b9\u90fd\u4e22\u5931\u4e86\uff0c\u4f60\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5230\u8fdc\u7aef\u5e76\u80fd\u7528\u4e8e\u6062\u590d\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"Rancher \u5efa\u8bae\u542f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#%E9%85%8D%E7%BD%AE%E5%AE%9A%E6%9C%9F%E5%BF%AB%E7%85%A7"},"etcd \u5b9a\u671f\u5feb\u7167\u7684\u529f\u80fd"),"\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#%E5%8D%95%E6%AC%A1%E5%BF%AB%E7%85%A7"},"\u4e00\u6b21\u6027\u5feb\u7167"),"\u3002Rancher \u5141\u8bb8\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8%E5%BF%AB%E7%85%A7%E6%81%A2%E5%A4%8D%E9%9B%86%E7%BE%A4"},"\u4fdd\u5b58\u7684\u5feb\u7167"),"\u8fdb\u884c\u6062\u590d\u3002\u5982\u679c\u4f60\u6ca1\u6709\u4efb\u4f55\u5feb\u7167\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E6%B2%A1%E6%9C%89%E5%BF%AB%E7%85%A7%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E6%81%A2%E5%A4%8D-etcd"},"\u6062\u590d etcd"),"\u3002"),(0,o.kt)("p",null,"\u96c6\u7fa4\u4e5f\u53ef\u4ee5\u6062\u590d\u5230\u4e4b\u524d\u7684 Kubernetes \u7248\u672c\u548c\u96c6\u7fa4\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u67e5\u770b\u53ef\u7528\u5feb\u7167"},"\u67e5\u770b\u53ef\u7528\u5feb\u7167"),(0,o.kt)("p",null,"Rancher UI \u4e2d\u63d0\u4f9b\u4e86\u96c6\u7fa4\u6240\u6709\u53ef\u7528\u5feb\u7167\u7684\u5217\u8868\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8f6c\u5230\u8981\u67e5\u770b\u5feb\u7167\u7684\u96c6\u7fa4\u5e76\u70b9\u51fb\u96c6\u7fa4\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5feb\u7167"),"\u9009\u9879\u5361\u3002\u5217\u51fa\u7684\u5feb\u7167\u5305\u62ec\u521b\u5efa\u65f6\u95f4\u7684\u65f6\u95f4\u6233\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4"},"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684 Kubernetes \u96c6\u7fa4\u5df2\u635f\u574f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5feb\u7167\u6765\u6062\u590d\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u5feb\u7167\u7531 etcd \u4e2d\u7684\u96c6\u7fa4\u6570\u636e\u3001Kubernetes \u7248\u672c\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u4e2d\u7684\u96c6\u7fa4\u914d\u7f6e\u7ec4\u6210\u3002\u6709\u4e86\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u5728\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4\u65f6\u9009\u62e9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4ec5\u6062\u590d etcd \u5185\u5bb9"),"\uff1a\u7c7b\u4f3c\u4e8e\u5728 Rancher v2.4.0 \u4e4b\u524d\u7248\u672c\u4e2d\u7684\u4f7f\u7528\u5feb\u7167\u6062\u590d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6062\u590d etcd \u548c Kubernetes \u7248\u672c"),"\uff1a\u5982\u679c Kubernetes \u5347\u7ea7\u5bfc\u81f4\u96c6\u7fa4\u5931\u8d25\uff0c\u5e76\u4e14\u4f60\u6ca1\u6709\u66f4\u6539\u4efb\u4f55\u96c6\u7fa4\u914d\u7f6e\uff0c\u5219\u5e94\u4f7f\u7528\u6b64\u9009\u9879\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6062\u590d etcd\u3001Kubernetes \u7248\u672c\u548c\u96c6\u7fa4\u914d\u7f6e"),"\uff1a\u5982\u679c\u4f60\u5728\u5347\u7ea7\u65f6\u540c\u65f6\u66f4\u6539\u4e86 Kubernetes \u7248\u672c\u548c\u96c6\u7fa4\u914d\u7f6e\uff0c\u5219\u5e94\u4f7f\u7528\u6b64\u9009\u9879\u3002")),(0,o.kt)("p",null,"\u56de\u6eda\u5230\u4e4b\u524d\u7684 Kubernetes \u7248\u672c\u65f6\uff0c",(0,o.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes#%E9%85%8D%E7%BD%AE%E5%8D%87%E7%BA%A7%E7%AD%96%E7%95%A5"},"\u5347\u7ea7\u7b56\u7565\u9009\u9879"),"\u4f1a\u88ab\u5ffd\u7565\u3002\u5728\u6062\u590d\u5230\u65e7 Kubernetes \u7248\u672c\u4e4b\u524d\uff0cWorker \u8282\u70b9\u4e0d\u4f1a\u88ab\u5c01\u9501\u6216\u6e05\u7a7a\uff0c\u56e0\u6b64\u53ef\u4ee5\u66f4\u5feb\u5730\u5c06\u4e0d\u5065\u5eb7\u7684\u96c6\u7fa4\u6062\u590d\u5230\u5065\u5eb7\u72b6\u6001\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8981\u6062\u590d S3 \u4e2d\u7684\u5feb\u7167\uff0c\u9700\u8981\u5c06\u96c6\u7fa4\u914d\u7f6e\u4e3a",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#%E9%85%8D%E7%BD%AE%E5%AE%9A%E6%9C%9F%E5%BF%AB%E7%85%A7"},"\u5728 S3 \u4e0a\u521b\u5efa\u5b9a\u671f\u5feb\u7167"),"\u3002"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8f6c\u5230\u8981\u67e5\u770b\u5feb\u7167\u7684\u96c6\u7fa4\u5e76\u70b9\u51fb\u96c6\u7fa4\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5feb\u7167"),"\u9009\u9879\u5361\u6765\u67e5\u770b\u5df2\u4fdd\u5b58\u5feb\u7167\u7684\u5217\u8868\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6062\u590d\u7684\u5feb\u7167\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u8fd8\u539f\u5feb\u7167"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u8fd8\u539f"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u96c6\u7fa4\u5c06\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"updating")," \u72b6\u6001\uff0c\u7136\u540e\u5c06\u5f00\u59cb\u4f7f\u7528\u5feb\u7167\u6062\u590d ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," \u8282\u70b9\u3002\u96c6\u7fa4\u4f1a\u5728\u8fd4\u56de\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," \u72b6\u6001\u540e\u88ab\u6062\u590d\u3002"),(0,o.kt)("h2",{id:"\u5728\u6ca1\u6709\u5feb\u7167\u7684\u60c5\u51b5\u4e0b\u6062\u590d-etcd"},"\u5728\u6ca1\u6709\u5feb\u7167\u7684\u60c5\u51b5\u4e0b\u6062\u590d etcd"),(0,o.kt)("p",null,"\u5982\u679c etcd \u8282\u70b9\u7ec4\u5931\u53bb\u4e86\u4ef2\u88c1\uff08quorum\uff09\uff0c\u7531\u4e8e\u6ca1\u6709\u64cd\u4f5c\uff08\u4f8b\u5982\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\uff09\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u6267\u884c\uff0cKubernetes \u96c6\u7fa4\u5c06\u62a5\u544a\u5931\u8d25\u3002\u96c6\u7fa4\u9700\u8981\u6709\u4e09\u4e2a etcd \u8282\u70b9\u4ee5\u9632\u6b62\u4ef2\u88c1\u4e22\u5931\u3002\u5982\u679c\u4f60\u60f3\u6062\u590d\u4f60\u7684 etcd \u8282\u70b9\u96c6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5220\u9664\u6240\u6709\u5176\u4ed6 etcd \u8282\u70b9\uff0c\u4ece\u800c\u4ec5\u5728\u96c6\u7fa4\u4e2d\u4fdd\u7559\u4e00\u4e2a etcd \u8282\u70b9\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5269\u4f59\u7684\u5355\u4e2a etcd \u8282\u70b9\u4e0a\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd\n")),(0,o.kt)("p",{parentName:"li"},"\u6b64\u547d\u4ee4\u4f1a\u8f93\u51fa etcd \u8981\u8fd0\u884c\u7684\u547d\u4ee4\uff0c\u8bf7\u4fdd\u5b58\u6b64\u547d\u4ee4\u4ee5\u5907\u540e\u7528\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u505c\u6b62\u4f60\u5728\u4e0a\u4e00\u6b65\u4e2d\u542f\u52a8\u7684 etcd \u5bb9\u5668\uff0c\u5e76\u5c06\u5176\u91cd\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd-old"),"\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ docker stop etcd\n$ docker rename etcd etcd-old\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539\u6b65\u9aa4 2 \u4e2d\u83b7\u53d6\u4fdd\u5b58\u7684\u547d\u4ee4\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6700\u521d\u6709\u8d85\u8fc7 1 \u4e2a etcd \u8282\u70b9\uff0c\u5219\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"--initial-cluster")," \u66f4\u6539\u4e3a\u4ec5\u5305\u542b\u5269\u4f59\u7684\u5355\u4e2a\u8282\u70b9\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"li"},"--force-new-cluster")," \u6dfb\u52a0\u5230\u547d\u4ee4\u7684\u672b\u5c3e\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4fee\u6539\u540e\u7684\u547d\u4ee4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5355\u4e2a\u8282\u70b9\u542f\u52a8\u5e76\u8fd0\u884c\u540e\uff0cRancher \u5efa\u8bae\u5411\u4f60\u7684\u96c6\u7fa4\u6dfb\u52a0\u989d\u5916\u7684 etcd \u8282\u70b9\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-existing-nodes"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4"),"\uff0c\u5e76\u4e14\u60f3\u8981\u590d\u7528\u65e7\u8282\u70b9\uff0c\u5219\u9700\u8981\u5148",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"\u6e05\u7406\u8282\u70b9"),"\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u5c06\u5b83\u4eec\u91cd\u65b0\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"))),(0,o.kt)("h1",{id:"\u4e3a\u4f7f\u7528-rancher-v220-\u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd"},"\u4e3a\u4f7f\u7528 Rancher v2.2.0 \u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4f7f\u7528 v2.2.0 \u4e4b\u524d\u7248\u672c\u521b\u5efa\u7684 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5347\u7ea7 Rancher \u540e\uff0c\u4f60\u5fc5\u987b",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u96c6\u7fa4"),"\u5e76 ",(0,o.kt)("em",{parentName:"p"},"\u4fdd\u5b58")," \u5b83\uff0c\u4ee5\u542f\u7528\u66f4\u65b0\u7684\u5feb\u7167\u529f\u80fd\u3002\u5373\u4f7f\u4f60\u5df2\u7ecf\u5728 v2.2.0 \u4e4b\u524d\u521b\u5efa\u4e86\u5feb\u7167\uff0c\u4f60\u4e5f\u5fc5\u987b\u6267\u884c\u6b64\u6b65\u9aa4\uff0c\u56e0\u4e3a\u65e7\u7684\u5feb\u7167\u5c06\u65e0\u6cd5\u7528\u4e8e",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"\u901a\u8fc7 UI \u5907\u4efd\u548c\u6062\u590d etcd"),"\u3002"))}k.isMDXComponent=!0}}]);