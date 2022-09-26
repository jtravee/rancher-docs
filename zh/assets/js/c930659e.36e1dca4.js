"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95126],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return n?t.createElement(m,u(u({ref:r},p),{},{components:n})):t.createElement(m,u({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38952:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),u=["components"],o={title:"SELinux RPM",weight:4},c=void 0,s={unversionedId:"pages-for-subheaders/selinux-rpm",id:"pages-for-subheaders/selinux-rpm",title:"SELinux RPM",description:"\u5b89\u5168\u589e\u5f3a\u578b Linux (SELinux) \u662f\u5bf9 Linux \u7684\u5b89\u5168\u589e\u5f3a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/selinux-rpm.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/selinux-rpm",permalink:"/zh/pages-for-subheaders/selinux-rpm",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/selinux-rpm.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"SELinux RPM",weight:4},sidebar:"tutorialSidebar",previous:{title:"RKE2 CIS 1.6 Benchmark - \u81ea\u6211\u8bc4\u4f30\u6307\u5357 - Rancher 2.6",permalink:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"},next:{title:"\u5173\u4e8e rancher-selinux",permalink:"/zh/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"}},p={},l=[],f={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"\u5b89\u5168\u589e\u5f3a\u578b Linux (SELinux)")," \u662f\u5bf9 Linux \u7684\u5b89\u5168\u589e\u5f3a\u3002"),(0,i.kt)("p",null,"\u5b83\u7531 Red Hat \u5f00\u53d1\uff0c\u662f Linux \u4e0a MAC\uff08mandatory access controls\uff0c\u5f3a\u5236\u8bbf\u95ee\u63a7\u5236\uff09\u7684\u5b9e\u73b0\u3002\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u4f7f\u7528 MAC \u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\u548c\u7528\u6237\u662f\u5982\u4f55\u8bbf\u95ee\u4e0d\u540c\u8d44\u6e90\u7684\uff0c\u4f8b\u5982\u6587\u4ef6\u3001\u8bbe\u5907\u3001\u7f51\u7edc\u548c\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\u3002SELinux \u8fd8\u901a\u8fc7\u9ed8\u8ba4\u9650\u5236\u64cd\u4f5c\u7cfb\u7edf\u6765\u589e\u5f3a\u5b89\u5168\u6027\u3002"),(0,i.kt)("p",null,"\u88ab\u653f\u5e9c\u673a\u6784\u4f7f\u7528\u4e4b\u540e\uff0cSELinux \u5df2\u6210\u4e3a\u884c\u4e1a\u6807\u51c6\uff0c\u5e76\u5728 CentOS 7 \u548c 8 \u4e0a\u9ed8\u8ba4\u542f\u7528\u3002\u8981\u68c0\u67e5 SELinux \u662f\u5426\u5728\u4f60\u7684\u7cfb\u7edf\u4e0a\u542f\u7528\u548c\u6267\u884c\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getenforce"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# getenforce\nEnforcing\n")),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"},(0,i.kt)("inlineCode",{parentName:"a"},"rancher-selinux"))," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},(0,i.kt)("inlineCode",{parentName:"a"},"rke2-selinux"))," \u4e24\u4e2a RPM\uff08Red Hat \u8f6f\u4ef6\u5305\uff09\uff0c\u8ba9 Rancher \u4ea7\u54c1\u80fd\u591f\u5728 SELinux \u4e3b\u673a\u4e0a\u6b63\u5e38\u8fd0\u884c\u3002"))}d.isMDXComponent=!0}}]);