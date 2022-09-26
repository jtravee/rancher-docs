"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72071],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?r.createElement(d,i(i({ref:a},p),{},{components:t})):r.createElement(d,i({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95092:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"Upgrading Cert-Manager",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager","/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager/helm-2-instructions","/rancher/v2.0-v2.4/en/installation/resources/encryption/upgrading-cert-manager"]},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/upgrade-cert-manager",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",title:"Upgrading Cert-Manager",description:"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662430127,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Upgrading Cert-Manager",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager","/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager/helm-2-instructions","/rancher/v2.0-v2.4/en/installation/resources/encryption/upgrading-cert-manager"]},sidebar:"tutorialSidebar",previous:{title:"About Custom CA Root Certificates",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},next:{title:"Upgrading Cert-Manager with Helm 2",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"}},p={},m=[{value:"Option A: Upgrade cert-manager with Internet Access",id:"option-a-upgrade-cert-manager-with-internet-access",level:3},{value:"Option B: Upgrade cert-manager in an Air Gap Environment",id:"option-b-upgrade-cert-manager-in-an-air-gap-environment",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Verify the Deployment",id:"verify-the-deployment",level:3},{value:"Cert-Manager API change and data migration",id:"cert-manager-api-change-and-data-migration",level:2}],u={toc:m};function g(e){var a=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"Cert-manager is deprecating and replacing the certificate.spec.acme.solvers field"),". This change has no exact deadline."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"Cert-manager is deprecating ",(0,o.kt)("inlineCode",{parentName:"a"},"v1alpha1")," API and replacing its API group"))),(0,o.kt)("p",null,"To address these changes, this guide will do two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Document the procedure for upgrading cert-manager"),(0,o.kt)("li",{parentName:"ol"},"Explain the cert-manager API changes and link to cert-manager's official documentation for migrating your data")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:"),"\nIf you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, you need to reinstall both of them:")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Take a one-time snapshot of your Kubernetes cluster running Rancher server"),(0,o.kt)("li",{parentName:"ol"},"Uninstall Rancher, cert-manager, and the CustomResourceDefinition for cert-manager"),(0,o.kt)("li",{parentName:"ol"},"Install the newer version of Rancher and cert-manager"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The reason is that when Helm upgrades Rancher, it will reject the upgrade and show error messages if the running Rancher app does not match the chart template used to install it. Because cert-manager changed its API group and we cannot modify released charts for Rancher, there will always be a mismatch on the cert-manager's API version, therefore the upgrade will be rejected.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For reinstalling Rancher with Helm, please check ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/upgrades"},"Option B: Reinstalling Rancher Chart")," under the upgrade Rancher section.")),(0,o.kt)("h1",{id:"upgrade-cert-manager"},"Upgrade Cert-Manager"),(0,o.kt)("p",null,"The namespace used in these instructions depends on the namespace cert-manager is currently installed in. If it is in kube-system use that in the instructions below. You can verify by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces")," and checking which namespace the cert-manager-","*"," pods are listed in. Do not change the namespace cert-manager is running in or this can cause issues."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These instructions have been updated for Helm 3. If you are still using Helm 2, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"},"these instructions."))),(0,o.kt)("p",null,"In order to upgrade cert-manager, follow these instructions:"),(0,o.kt)("h3",{id:"option-a-upgrade-cert-manager-with-internet-access"},"Option A: Upgrade cert-manager with Internet Access"),(0,o.kt)("details",{id:"normal"},(0,o.kt)("summary",null,"Click to expand"),"1. [Back up existing resources](https://cert-manager.io/docs/tutorials/backup/) as a precaution",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```plain\nkubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n```\n\n> **Important:**\n> If you are upgrading from a version older than 0.11.0, Update the apiVersion on all your backed up resources from `certmanager.k8s.io/v1alpha1` to `cert-manager.io/v1alpha2`. If you use any cert-manager annotations on any of your other resources, you will need to update them to reflect the new API group. For details, refer to the documentation on [additional annotation changes.](https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes)\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/uninstall/kubernetes/#uninstalling-with-helm"},"Uninstall existing deployment")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm uninstall cert-manager\n")),(0,o.kt)("p",{parentName:"li"},"Delete the CustomResourceDefinition using the link to the version vX.Y.Z you installed"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f https://github.com/jetstack/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nIf you are running Kubernetes v1.15 or below, you will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--validate=false")," flag to your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command above. Otherwise, you will receive a validation error relating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," field in cert-manager\u2019s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the namespace for cert-manager if needed"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Jetstack Helm repository"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your local Helm chart repository cache"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the new version of cert-manager"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version v0.12.0\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"Restore back up resources")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,o.kt)("h3",{id:"option-b-upgrade-cert-manager-in-an-air-gap-environment"},"Option B: Upgrade cert-manager in an Air Gap Environment"),(0,o.kt)("details",{id:"airgap"},(0,o.kt)("summary",null,"Click to expand"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can perform the upgrade, you must prepare your air gapped environment by adding the necessary container images to your private registry and downloading or rendering the required Kubernetes manifest files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the guide to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry"},"Prepare your Private Registry")," with the images needed for the upgrade.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From a system connected to the internet, add the cert-manager repo to Helm"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fetch the latest cert-manager chart available from the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},"Helm chart repository"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v0.12.0\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Render the cert manager template with the options you would like to use to install the chart. Remember to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"image.repository")," option to pull the image from your private registry. This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager")," directory with the Kubernetes manifest files."),(0,o.kt)("p",{parentName:"li"},"The Helm 3 command is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm template cert-manager ./cert-manager-v0.12.0.tgz --output-dir . \\\n--namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n")),(0,o.kt)("p",{parentName:"li"},"The Helm 2 command is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./cert-manager-v0.12.0.tgz --output-dir . \\\n--name cert-manager --namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the required CRD file for cert-manager (old and new)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager/cert-manager-crd.yaml https://raw.githubusercontent.com/jetstack/cert-manager/release-0.12/deploy/manifests/00-crds.yaml\ncurl -L -o cert-manager/cert-manager-crd-old.yaml https://raw.githubusercontent.com/jetstack/cert-manager/release-X.Y/deploy/manifests/00-crds.yaml\n")))),(0,o.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back up existing resources as a precaution"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:"),"\nIf you are upgrading from a version older than 0.11.0, Update the apiVersion on all your backed up resources from ",(0,o.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io/v1alpha1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1alpha2"),". If you use any cert-manager annotations on any of your other resources, you will need to update them to reflect the new API group. For details, refer to the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes"},"additional annotation changes.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the existing cert-manager installation"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager \\\ndelete deployment,sa,clusterrole,clusterrolebinding \\\n-l 'app=cert-manager' -l 'chart=cert-manager-v0.5.2'\n")),(0,o.kt)("p",{parentName:"li"},"Delete the CustomResourceDefinition using the link to the version vX.Y you installed"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f cert-manager/cert-manager-crd-old.yaml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nIf you are running Kubernetes v1.15 or below, you will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--validate=false")," flag to your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command above. Otherwise, you will receive a validation error relating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," field in cert-manager\u2019s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the namespace for cert-manager"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install cert-manager"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager apply -R -f ./cert-manager\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"Restore back up resources")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,o.kt)("h3",{id:"verify-the-deployment"},"Verify the Deployment"),(0,o.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the kube-system namespace for running pods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-5c6866597-zw7kh               1/1     Running   0          2m\ncert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m\ncert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m\n")),(0,o.kt)("h2",{id:"cert-manager-api-change-and-data-migration"},"Cert-Manager API change and data migration"),(0,o.kt)("p",null,"Cert-manager has deprecated the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate.spec.acme.solvers")," field and will drop support for it completely in an upcoming release."),(0,o.kt)("p",null,"Per the cert-manager documentation, a new format for configuring ACME certificate resources was introduced in v0.8. Specifically, the challenge solver configuration field was moved. Both the old format and new are supported as of v0.9, but support for the old format will be dropped in an upcoming release of cert-manager. The cert-manager documentation strongly recommends that after upgrading you update your ACME Issuer and Certificate resources to the new format."),(0,o.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"cert-manager v0.7 to v0.8 upgrade instructions"),"."),(0,o.kt)("p",null,"The v0.11 release marks the removal of the v1alpha1 API that was used in previous versions of cert-manager, as well as our API group changing to be cert-manager.io instead of certmanager.k8s.io."),(0,o.kt)("p",null,"We have also removed support for the old configuration format that was deprecated in the v0.8 release. This means you must transition to using the new solvers style configuration format for your ACME issuers before upgrading to v0.11. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"upgrading to v0.8 guide"),"."),(0,o.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"cert-manager v0.10 to v0.11 upgrade instructions"),"."),(0,o.kt)("p",null,"More info about ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/"},"cert-manager upgrade information"),"."))}g.isMDXComponent=!0}}]);