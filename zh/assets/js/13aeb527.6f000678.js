"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63953],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(t),k=a,d=h["".concat(s,".").concat(k)]||h[k]||l[k]||o;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78715:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={title:"Backing up Rancher"},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",title:"Backing up Rancher",description:"In this section, you'll learn how to back up Rancher running on any Kubernetes cluster. To backup Rancher installed with Docker, refer to the instructions for single node backups.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Backing up Rancher"},sidebar:"tutorialSidebar",previous:{title:"Backups and Disaster Recovery",permalink:"/zh/v2.5/pages-for-subheaders/backup-restore-and-disaster-recovery"},next:{title:"Restoring Rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install the <code>rancher-backup</code> operator",id:"1-install-the-rancher-backup-operator",level:3},{value:"2. Perform a Backup",id:"2-perform-a-backup",level:3}],h={toc:l};function k(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to back up Rancher running on any Kubernetes cluster. To backup Rancher installed with Docker, refer to the instructions for ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"single node backups"),"."),(0,o.kt)("p",null,"The backup-restore operator needs to be installed in the local cluster, and only backs up the Rancher app. The backup and restore operations are performed only in the local Kubernetes cluster."),(0,o.kt)("p",null,"Note that the rancher-backup operator version 1.x.x is for Rancher v2.5.x."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When restoring a backup into a new Rancher setup, the version of the new setup should be the same as the one where the backup is made. The Kubernetes version should also be considered when restoring a backup, since the supported apiVersion in the cluster and in the backup file could be different.")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Rancher version must be v2.5.0 and up"),(0,o.kt)("h3",{id:"1-install-the-rancher-backup-operator"},"1. Install the ",(0,o.kt)("inlineCode",{parentName:"h3"},"rancher-backup")," operator"),(0,o.kt)("p",null,"The backup storage location is an operator-level setting, so it needs to be configured when ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," is installed or upgraded."),(0,o.kt)("p",null,"Backups are created as .tar.gz files. These files can be pushed to S3 or Minio, or they can be stored in a persistent volume."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer")," view for the local cluster."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apps.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Rancher Backups.")),(0,o.kt)("li",{parentName:"ol"},"Configure the default storage location. For help, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration"},"storage configuration section."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," There are two known issues in Fleet that occur after performing a restoration using the backup-restore-operator: Fleet agents are inoperable and clientSecretName and helmSecretName are not included in Fleet gitrepos. Refer ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#troubleshooting"},"here")," for workarounds.")),(0,o.kt)("h3",{id:"2-perform-a-backup"},"2. Perform a Backup"),(0,o.kt)("p",null,"To perform a backup, a custom resource of type Backup must be created."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," go to the dropdown menu in the upper left corner and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Backup."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Backup with the form, or with the YAML editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For configuring the Backup details using the form, click ",(0,o.kt)("strong",{parentName:"p"},"Create")," and refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/backup-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/examples#backup"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For using the YAML editor, we can click ",(0,o.kt)("strong",{parentName:"p"},"Create > Create from YAML.")," Enter the Backup YAML. This example Backup custom resource would create encrypted recurring backups in S3. The app uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"credentialSecretNamespace")," value to determine where to look for the S3 backup secret:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-recurring-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," When creating the Backup resource using YAML editor, the ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceSetName")," must be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-resource-set"))),(0,o.kt)("p",{parentName:"li"},"For help configuring the Backup, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/backup-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/examples#backup"},"examples.")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator doesn't save the EncryptionConfiguration file. The contents of the EncryptionConfiguration file must be saved when an encrypted backup is created, and the same file must be used when restoring from this backup."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The backup file is created in the storage location configured in the Backup custom resource. The name of this file is used when performing a restore."))}k.isMDXComponent=!0}}]);