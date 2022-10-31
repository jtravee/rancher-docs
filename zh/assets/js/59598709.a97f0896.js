"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35398],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(k,c(c({ref:n},u),{},{components:t})):r.createElement(k,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74034:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),c=["components"],i={title:"\u5148\u51b3\u6761\u4ef6"},o=void 0,s={unversionedId:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",id:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",title:"\u5148\u51b3\u6761\u4ef6",description:"1. \u8bbe\u7f6e\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u548c\u8d2d\u4e70\u652f\u6301",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md",sourceDirName:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",permalink:"/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u5148\u51b3\u6761\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"AWS Marketplace \u96c6\u6210",permalink:"/zh/pages-for-subheaders/aws-cloud-marketplace"},next:{title:"\u5b89\u88c5 Adapter",permalink:"/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter"}},u={},p=[{value:"1. \u8bbe\u7f6e\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u548c\u8d2d\u4e70\u652f\u6301",id:"1-\u8bbe\u7f6e\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u548c\u8d2d\u4e70\u652f\u6301",level:3},{value:"2. \u521b\u5efa EKS \u96c6\u7fa4",id:"2-\u521b\u5efa-eks-\u96c6\u7fa4",level:3},{value:"3. \u5b89\u88c5 Rancher",id:"3-\u5b89\u88c5-rancher",level:3},{value:"4. \u521b\u5efa OIDC \u63d0\u4f9b\u7a0b\u5e8f",id:"4-\u521b\u5efa-oidc-\u63d0\u4f9b\u7a0b\u5e8f",level:3},{value:"5. \u521b\u5efa IAM \u89d2\u8272",id:"5-\u521b\u5efa-iam-\u89d2\u8272",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u8bbe\u7f6e\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u548c\u8d2d\u4e70\u652f\u6301"},"1. \u8bbe\u7f6e\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u548c\u8d2d\u4e70\u652f\u6301"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5b8c\u6210\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u8bbe\u7f6e\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/license-manager/latest/userguide/getting-started.html"},"\u7b2c\u4e00\u6b65"),"\u3002\n\u7136\u540e\uff0c\u8f6c\u5230 AWS Marketplace\u3002\u627e\u5230 \u201cRancher Premium Support Billing Container Starter Pack\u201d\u3002\u6700\u540e\uff0c\u8d2d\u4e70\u81f3\u5c11\u4e00\u9879 Entitlement\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u4f7f\u7528 \u201cRancher Setup\u201d AWS Marketplace \u4ea7\u54c1\u5b89\u88c5\u4e86 Rancher\uff0c\u8bf7\u8df3\u81f3",(0,l.kt)("a",{parentName:"p",href:"#4-%E5%88%9B%E5%BB%BA-oidc-%E6%8F%90%E4%BE%9B%E5%95%86"},"\u6b65\u9aa4 4"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6bcf\u9879 Entitlement \u90fd\u5bf9\u4e00\u5b9a\u6570\u91cf\u7684\u8282\u70b9\u6388\u4e88\u8bbf\u95ee\u652f\u6301\u7684\u6743\u9650\u3002\u4f60\u53ef\u4ee5\u540e\u7eed\u6839\u636e\u9700\u8981\u8d2d\u4e70\u66f4\u591a\u8bb8\u53ef\u8bc1\u3002")),(0,l.kt)("h3",{id:"2-\u521b\u5efa-eks-\u96c6\u7fa4"},"2. \u521b\u5efa EKS \u96c6\u7fa4"),(0,l.kt)("p",null,"\u6309\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},"Rancher \u6587\u6863"),"\u521b\u5efa EKS \u96c6\u7fa4\u3002\u8fdb\u884c\u5230",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#8-%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u5b89\u88c5 Rancher Helm Chart"),"\uff08\u6700\u540e\u4e00\u6b65\uff09\u65f6\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5e76\u8fd4\u56de\u6b64\u9875\u9762"),"\u3002\u8be5\u96c6\u7fa4\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EKS 1.22 \u7248\u672c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5305\u542b Rancher \u53ca\u5176\u76f8\u5173\u955c\u50cf\u7684\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5b58\u50a8 CSP Adapter \u7684 ECR \u4ed3\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbf\u95ee\u8bb8\u53ef\u8bc1\u7ba1\u7406\u5668\u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbf\u95ee STS \u670d\u52a1\u7684\u5168\u5c40\u7aef\u70b9\u3002")),(0,l.kt)("h3",{id:"3-\u5b89\u88c5-rancher"},"3. \u5b89\u88c5 Rancher"),(0,l.kt)("p",null,"\u9664\u4e86\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#8-%E5%AE%89%E8%A3%85-rancher-helm-chart"},"Rancher \u6587\u6863"),"\u4e2d\u6307\u5b9a\u7684 Rancher \u5b89\u88c5\u9009\u9879\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u542f\u7528\u5176\u5b83\u6307\u6807\u3002\n\u4f60\u53ef\u4ee5\u901a\u8fc7 Helm CLI \u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u6765\u5b8c\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'--set extraEnv\\[0\\].name="CATTLE_PROMETHEUS_METRICS" --set-string extraEnv\\[0\\].value=true\n')),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 values.yaml\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnv:\n  - name: "CATTLE_PROMETHEUS_METRICS"\n    value: "true"\n')),(0,l.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u5b89\u88c5 Rancher 2.6.7 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,l.kt)("h3",{id:"4-\u521b\u5efa-oidc-\u63d0\u4f9b\u7a0b\u5e8f"},"4. \u521b\u5efa OIDC \u63d0\u4f9b\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u6309\u7167 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html"},"AWS \u6587\u6863"),"\u4e3a\u4e0a\u4e00\u8282\u4e2d\u6307\u5b9a\u7684\u96c6\u7fa4\u521b\u5efa OIDC \u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"5-\u521b\u5efa-iam-\u89d2\u8272"},"5. \u521b\u5efa IAM \u89d2\u8272"),(0,l.kt)("p",null,"CSP Adapter \u9700\u8981 IAM \u89d2\u8272\u624d\u80fd\u7b7e\u5165/\u7b7e\u51fa Entitlement\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u914d\u7f6e\u5982\u4e0b\u7684\u4fe1\u4efb\u7b56\u7565\u3002\u4f60\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"MY_AWS_ACC")," \u66ff\u6362\u4e3a\u4f60\u7684 AWS \u5e10\u53f7\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"MY_AWS_REGION")," \u66ff\u6362\u4e3a\u4f60\u7684 AWS \u533a\u57df\uff0c\u5e76\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"MY_OIDC_PROVIDER")," \u66ff\u6362\u4e3a\u4f60\u7684 OIDC \u63d0\u4f9b\u5546 ID\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "Federated": "arn:aws:iam::${MY_AWS_ACC}:oidc-provider/oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}"\n            },\n            "Action": "sts:AssumeRoleWithWebIdentity",\n            "Condition": {\n                "StringEquals": {\n                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:sub": "system:serviceaccount:cattle-csp-adapter-system:rancher-csp-adapter",\n                    "oidc.eks.${MY_AWS_REGION}.amazonaws.com/id/${MY_OIDC_PROVIDER}:aud": "sts.amazonaws.com"\n                }\n            }\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4e3a\u5177\u6709\u4ee5\u4e0b\u6743\u9650\u7684\u89d2\u8272\u4f7f\u7528\u7b56\u7565\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "RancherCSPAdapterPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "license-manager:ListReceivedLicenses",\n                "license-manager:CheckoutLicense",\n                "license-manager:ExtendLicenseConsumption",\n                "license-manager:CheckInLicense",\n                "license-manager:GetLicense",\n                "license-manager:GetLicenseUsage"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u89d2\u8272\u7684\u540d\u79f0\u3002\u7a0d\u540e\u5b89\u88c5 CSP Adapter \u65f6\u5c06\u9700\u8981\u5b83\u3002"))}d.isMDXComponent=!0}}]);