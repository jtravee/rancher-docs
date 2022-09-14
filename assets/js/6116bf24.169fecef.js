"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76709],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=s,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),a=["components"],o={title:"Skip Tests"},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",title:"Skip Tests",description:"You can define a set of tests that will be skipped by the CIS scan when the next report is generated.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Skip Tests"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan Periodically on a Schedule",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule"},next:{title:"Configure Alerts for Periodic Scan on a Schedule",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/cis-scan-guides/configure-alerts-for-periodic-scan-on-a-schedule"}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can define a set of tests that will be skipped by the CIS scan when the next report is generated."),(0,i.kt)("p",null,"These tests will be skipped for subsequent CIS scans, including both manually triggered and scheduled scans, and the tests will be skipped with any profile."),(0,i.kt)("p",null,"The skipped tests will be listed alongside the test profile name in the cluster configuration options when a test profile is selected for a recurring cluster scan. The skipped tests will also be shown every time a scan is triggered manually from the Rancher UI by clicking ",(0,i.kt)("strong",{parentName:"p"},"Run Scan.")," The display of skipped tests allows you to know ahead of time which tests will be run in each scan."),(0,i.kt)("p",null,"To skip tests, you will need to define them in a Kubernetes ConfigMap resource. Each skipped CIS scan test is listed in the ConfigMap alongside the version of the CIS benchmark that the test belongs to."),(0,i.kt)("p",null,"To skip tests by editing a ConfigMap resource,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"security-scan")," namespace.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ConfigMap named ",(0,i.kt)("inlineCode",{parentName:"p"},"security-scan-cfg"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the skip information under the key ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," in the following format:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "skip": {\n    "rke-cis-1.4": [\n      "1.1.1",\n      "1.2.2"\n    ]\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In the example above, the CIS benchmark version is specified alongside the tests to be skipped for that version."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," These tests will be skipped on subsequent scans that use the defined CIS Benchmark version."))}f.isMDXComponent=!0}}]);