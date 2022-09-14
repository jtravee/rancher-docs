"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37493],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(k,s(s({ref:t},u),{},{components:r})):a.createElement(k,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},93404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],p={title:"vSphere \u5b58\u50a8",weight:3055},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",title:"vSphere \u5b58\u50a8",description:"\u8981\u4e3a\u6709\u72b6\u6001\u7684\u5de5\u4f5c\u8d1f\u8f7d\u63d0\u4f9b vSphere \u5b58\u50a8\uff0c\u6211\u4eec\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a vSphereVolume StorageClass\u3002\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u901a\u8fc7 PersistentVolumeClaim \u8bf7\u6c42\u5377\u65f6\uff0c\u8fd9\u79cd\u505a\u6cd5\u4f1a\u52a8\u6001\u8c03\u914d vSphere \u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"vSphere \u5b58\u50a8",weight:3055},sidebar:"tutorialSidebar",previous:{title:"NFS \u5b58\u50a8",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/nfs-storage"},next:{title:"\u4f7f\u7528 Rancher \u7684\u9879\u76ee\u548c Kubernetes \u547d\u540d\u7a7a\u95f4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"}},u={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u521b\u5efa\u4e00\u4e2a StorageClass",id:"\u521b\u5efa\u4e00\u4e2a-storageclass",level:3},{value:"\u521b\u5efa\u4f7f\u7528 vSphere \u5377\u7684\u5de5\u4f5c\u8d1f\u8f7d",id:"\u521b\u5efa\u4f7f\u7528-vsphere-\u5377\u7684\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"\u9a8c\u8bc1\u5377\u7684\u6301\u4e45\u6027",id:"\u9a8c\u8bc1\u5377\u7684\u6301\u4e45\u6027",level:3},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 StatefulSet \u66ff\u4ee3 Deployment",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-statefulset-\u66ff\u4ee3-deployment",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:3}],c={toc:m};function d(e){var t=e.components,p=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8981\u4e3a\u6709\u72b6\u6001\u7684\u5de5\u4f5c\u8d1f\u8f7d\u63d0\u4f9b vSphere \u5b58\u50a8\uff0c\u6211\u4eec\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a vSphereVolume StorageClass\u3002\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u901a\u8fc7 PersistentVolumeClaim \u8bf7\u6c42\u5377\u65f6\uff0c\u8fd9\u79cd\u505a\u6cd5\u4f1a\u52a8\u6001\u8c03\u914d vSphere \u5b58\u50a8\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5728 vSphere \u4e2d\u52a8\u6001\u8c03\u914d\u5b58\u50a8\uff0c\u5fc5\u987b",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/vsphere-cloud-provider"},"\u542f\u7528 vSphere \u63d0\u4f9b\u5546"),"\u3002"),(0,o.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Kubernetes Engine (RKE)")," \u96c6\u7fa4\u4e2d\u914d\u7f6e vSphere \u5377\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere"},"vSphere cloud provider")," \u5fc5\u987b\u5728",(0,o.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"\u96c6\u7fa4\u9009\u9879"),"\u4e2d\u663e\u5f0f\u542f\u7528\u3002"),(0,o.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-storageclass"},"\u521b\u5efa\u4e00\u4e2a StorageClass"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u6765\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"\u5173\u4e8e\u6301\u4e45\u5377\u7684 Kubernetes \u6587\u6863"),"\u3002"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u914d\u7f6e vSphere \u5b58\u50a8\u7684\u96c6\u7fa4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5b58\u50a8 > \u5b58\u50a8\u7c7b"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u5b58\u50a8\u7c7b\u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Provisioner"),"\u4e0b\uff0c\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"VMWare vSphere \u5377"),"\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(55792).Z,width:"750",height:"473"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u9009\u5730\uff0c\u4f60\u53ef\u4ee5\u5728",(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"\u4e0b\u6307\u5b9a\u5b58\u50a8\u7c7b\u7684\u5176\u4ed6\u5c5e\u6027\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/storageclass.html"},"vSphere \u5b58\u50a8\u6587\u6863"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("h3",{id:"\u521b\u5efa\u4f7f\u7528-vsphere-\u5377\u7684\u5de5\u4f5c\u8d1f\u8f7d"},"\u521b\u5efa\u4f7f\u7528 vSphere \u5377\u7684\u5de5\u4f5c\u8d1f\u8f7d"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"StatefulSet"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5377\u58f0\u660e\u6a21\u677f"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u58f0\u660e\u6a21\u677f"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6301\u4e45\u5377\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5b58\u50a8\u7c7b"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u4f60\u521b\u5efa\u7684 vSphere \u5b58\u50a8\u7c7b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u6240\u9700\u7684",(0,o.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\u3002\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\u6307\u5b9a\u8def\u5f84\u3002\u8fd9\u662f\u5377\u5c06\u5b89\u88c5\u5728\u5bb9\u5668\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u5b8c\u6574\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"/persistent"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("h3",{id:"\u9a8c\u8bc1\u5377\u7684\u6301\u4e45\u6027"},"\u9a8c\u8bc1\u5377\u7684\u6301\u4e45\u6027"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d > Pod"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u4f60\u521a\u521a\u521b\u5efa\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u6267\u884c\u547d\u4ee4\u884c"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\u5377\u5df2\u6302\u8f7d\u5230\u7684\u6839\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/persistent"),"\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u6267\u884c\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"touch /<volumeMountPoint>/data.txt")," \u5728\u5377\u4e2d\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5173\u95ed shell \u7a97\u53e3\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540d\u79f0\u4ee5\u663e\u793a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u5220\u9664"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u89c2\u5bdf pod \u662f\u5426\u88ab\u5220\u9664\u3002\u4e3a\u4e86\u8ba9\u5de5\u4f5c\u8d1f\u8f7d\u7ef4\u6301\u5728\u6240\u914d\u7f6e\u7684\u5355\u4e2a\u6709\u72b6\u6001 pod \u7684\u89c4\u6a21\uff0c\u4e4b\u540e\u4f1a\u8c03\u5ea6\u4e00\u4e2a\u65b0\u7684 Pod \u6765\u66ff\u6362\u8be5 Pod\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u66ff\u6362\u7684 pod \u8fd0\u884c\u540e\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u6267\u884c\u547d\u4ee4\u884c"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -l /<volumeMountPoint>")," \u4ee5\u68c0\u67e5\u5377\u6240\u6302\u8f7d\u7684\u76ee\u5f55\u7684\u5185\u5bb9\u3002\u8bf7\u6ce8\u610f\uff0c\u4f60\u4e4b\u524d\u521b\u5efa\u7684\u6587\u4ef6\u4ecd\u7136\u5b58\u5728\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"workload-persistent-data",src:r(62803).Z,width:"750",height:"508"})))),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-statefulset-\u66ff\u4ee3-deployment"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 StatefulSet \u66ff\u4ee3 Deployment"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6d88\u8017 vSphere \u5b58\u50a8\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4f60\u5e94\u8be5\u59cb\u7ec8\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets"),"\uff0c\u56e0\u4e3a\u8fd9\u79cd\u8d44\u6e90\u7c7b\u578b\u65e8\u5728\u89e3\u51b3 VMDK \u5757\u5b58\u50a8\u8b66\u544a\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e vSphere \u5377\u7531 VMDK \u5757\u5b58\u50a8\u652f\u6301\uff0c\u56e0\u6b64\u5b83\u4eec\u4ec5\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadWriteOnce")," \u7684",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"\u8bbf\u95ee\u6a21\u5f0f"),"\u3002\u6b64\u8bbe\u7f6e\u9650\u5236\u5377\uff0c\u4f7f\u5176\u4e00\u6b21\u53ea\u80fd\u6302\u8f7d\u5230\u4e00\u4e2a pod\uff08\u9664\u975e\u4f7f\u7528\u8be5\u5377\u7684\u6240\u6709 pod \u4f4d\u4e8e\u540c\u4e00\u8282\u70b9\u4e0a\uff09\u3002\u5982\u679c deployment \u8d44\u6e90\u6d88\u8017 vSphere \u5377\uff0c\u5219 deployment \u8d44\u6e90\u65e0\u6cd5\u7528\u4e8e\u6269\u5c55\u5230\u8d85\u51fa\u5355\u4e2a\u526f\u672c\u3002"),(0,o.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4ec5\u5177\u6709\u5355\u4e2a\u526f\u672c\u7684 deployment \u8d44\u6e90\u4e5f\u53ef\u80fd\u5728\u66f4\u65b0 deployment \u65f6\u51fa\u73b0\u6b7b\u9501\u60c5\u51b5\u3002\u5982\u679c\u66f4\u65b0\u7684 pod \u88ab\u8c03\u5ea6\u5230\u4e0d\u540c\u7684\u8282\u70b9\uff0c\u7531\u4e8e VMDK \u4ecd\u7136\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9\uff0c\u56e0\u6b64 pod \u5c06\u65e0\u6cd5\u542f\u52a8\u3002"),(0,o.kt)("h3",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vmware.github.io/vsphere-storage-for-kubernetes/documentation/"},"\u7528\u4e8e Kubernetes \u7684 vSphere \u5b58\u50a8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Kubernetes \u6301\u4e45\u5377"))))}d.isMDXComponent=!0},55792:function(e,t,r){t.Z=r.p+"assets/images/vsphere-storage-class-c509e79beccf22b63a7d65c4d72ad247.png"},62803:function(e,t,r){t.Z=r.p+"assets/images/workload-persistent-data-5a49807c13b871ee5026e3f8123075a1.png"}}]);