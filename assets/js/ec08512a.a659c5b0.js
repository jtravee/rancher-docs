"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41974],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92349:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Amazon ALB Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/ha-server-install-external-lb/alb/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/layer-7-lb/alb","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/layer-7-lb/alb/"]},p=void 0,s={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb",title:"Amazon ALB Configuration",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Amazon ALB Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/ha-server-install-external-lb/alb/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/layer-7-lb/alb","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/layer-7-lb/alb/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Install with External Load Balancer (HTTPS/Layer 7)",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-7-lb"},next:{title:"NGINX Configuration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx"}},d={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Create Target Group",id:"create-target-group",level:2},{value:"Target Group (HTTP)",id:"target-group-http",level:3},{value:"Register Targets",id:"register-targets",level:2},{value:"Create Your ALB",id:"create-your-alb",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Kubernetes Rancher. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("h2",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,"Configuring an Amazon ALB is a multistage process. We've broken it down into multiple tasks so that it's easy to follow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#create-target-group"},"Create Target Group")),(0,o.kt)("p",{parentName:"li"},"Begin by creating one target group for the http protocol. You'll add your Linux nodes to this group.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#register-targets"},"Register Targets")),(0,o.kt)("p",{parentName:"li"},"Add your Linux nodes to the target group.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#create-your-alb"},"Create Your ALB")),(0,o.kt)("p",{parentName:"li"},"Use Amazon's Wizard to create an Application Load Balancer. As part of this process, you'll add the target groups you created in ",(0,o.kt)("strong",{parentName:"p"},"1. Create Target Groups"),"."))),(0,o.kt)("h2",{id:"create-target-group"},"Create Target Group"),(0,o.kt)("p",null,"Your first ALB configuration step is to create one target group for HTTP."),(0,o.kt)("p",null,"Log into the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS Console")," to get started."),(0,o.kt)("p",null,"The document below will guide you through this process. Use the data in the tables below to complete the procedure."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-target-group.html"},"Amazon Documentation: Create a Target Group")),(0,o.kt)("h3",{id:"target-group-http"},"Target Group (HTTP)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Target Group Name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"rancher-http-80"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"80"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Target type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"instance"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VPC"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose your VPC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Protocol",(0,o.kt)("br",null),"(Health Check)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTTP"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Path",(0,o.kt)("br",null),"(Health Check)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/healthz"))))),(0,o.kt)("h2",{id:"register-targets"},"Register Targets"),(0,o.kt)("p",null,"Next, add your Linux nodes to your target group."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-register-targets.html"},"Amazon Documentation: Register Targets with Your Target Group")),(0,o.kt)("h3",{id:"create-your-alb"},"Create Your ALB"),(0,o.kt)("p",null,"Use Amazon's Wizard to create an Application Load Balancer. As part of this process, you'll add the target group you created in ",(0,o.kt)("a",{parentName:"p",href:"#create-target-group"},"Create Target Group"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your web browser, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon EC2 Console"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the navigation pane, choose ",(0,o.kt)("strong",{parentName:"p"},"LOAD BALANCING")," > ",(0,o.kt)("strong",{parentName:"p"},"Load Balancers"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Load Balancer"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Application Load Balancer"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Step 1: Configure Load Balancer")," form."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Basic Configuration")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-http")),(0,o.kt)("li",{parentName:"ul"},"Scheme: ",(0,o.kt)("inlineCode",{parentName:"li"},"internet-facing")),(0,o.kt)("li",{parentName:"ul"},"IP address type: ",(0,o.kt)("inlineCode",{parentName:"li"},"ipv4")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Listeners")),(0,o.kt)("p",{parentName:"li"},"  Add the ",(0,o.kt)("strong",{parentName:"p"},"Load Balancer Protocols")," and ",(0,o.kt)("strong",{parentName:"p"},"Load Balancer Ports")," below."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTP"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"80")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"443")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Availability Zones")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select Your ",(0,o.kt)("strong",{parentName:"li"},"VPC")," and ",(0,o.kt)("strong",{parentName:"li"},"Availability Zones"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Step 2: Configure Security Settings")," form."),(0,o.kt)("p",{parentName:"li"},"Configure the certificate you want to use for SSL termination.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Step 3: Configure Security Groups")," form.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Step 4: Configure Routing")," form."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Target Group")," drop-down, choose ",(0,o.kt)("strong",{parentName:"p"},"Existing target group"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add target group ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-http-80"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete ",(0,o.kt)("strong",{parentName:"p"},"Step 5: Register Targets"),". Since you registered your targets earlier, all you have to do it click ",(0,o.kt)("strong",{parentName:"p"},"Next: Review"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete ",(0,o.kt)("strong",{parentName:"p"},"Step 6: Review"),". Look over the load balancer details and click ",(0,o.kt)("strong",{parentName:"p"},"Create")," when you're satisfied.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After AWS creates the ALB, click ",(0,o.kt)("strong",{parentName:"p"},"Close"),"."))))}c.isMDXComponent=!0}}]);