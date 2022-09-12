"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93889],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96214:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"Using an External Ceph Driver",weight:10},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",title:"Using an External Ceph Driver",description:"These instructions are about using the external Ceph driver in an RKE2 cluster. If you are using RKE, additional steps are required. For details, refer to this section.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver.md",tags:[],version:"current",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Using an External Ceph Driver",weight:10},sidebar:"tutorialSidebar",previous:{title:"Dynamically Provisioning New Storage in Rancher",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},next:{title:"GlusterFS Volumes",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Using the Ceph Driver with RKE",id:"using-the-ceph-driver-with-rke",level:2},{value:"Installing the ceph-csi driver on an RKE2 cluster",id:"installing-the-ceph-csi-driver-on-an-rke2-cluster",level:2},{value:"Install the ceph-csi Driver Using Helm",id:"install-the-ceph-csi-driver-using-helm",level:2},{value:"Creating RBD Ceph Resources",id:"creating-rbd-ceph-resources",level:2},{value:"Configure RBD Ceph Access Secrets",id:"configure-rbd-ceph-access-secrets",level:2},{value:"User Account",id:"user-account",level:3},{value:"Admin Account",id:"admin-account",level:3},{value:"Create RBD Testing Resources",id:"create-rbd-testing-resources",level:2},{value:"Using RBD in Pods",id:"using-rbd-in-pods",level:3},{value:"Using RBD in Persistent Volumes",id:"using-rbd-in-persistent-volumes",level:3},{value:"Using RBD in Storage Classes",id:"using-rbd-in-storage-classes",level:3},{value:"RKE2 Server/Master Provisioning",id:"rke2-servermaster-provisioning",level:3},{value:"RKE2 Agent/Worker provisioning",id:"rke2-agentworker-provisioning",level:3},{value:"Tested Versions",id:"tested-versions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"These instructions are about using the external Ceph driver in an RKE2 cluster. If you are using RKE, additional steps are required. For details, refer to ",(0,s.kt)("a",{parentName:"p",href:"#using-the-ceph-driver-with-rke"},"this section.")),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Make sure ceph-common and xfsprogs packages are installed on SLE worker nodes."),(0,s.kt)("h2",{id:"using-the-ceph-driver-with-rke"},"Using the Ceph Driver with RKE"),(0,s.kt)("p",null,"The resources below are fully compatible with RKE based clusters, but there is a need to do an additional kubelet configuration for RKE."),(0,s.kt)("p",null,"On RKE clusters, the kubelet component is running in a Docker container and doesn't have access to the host's kernel modules as rbd and libceph by default."),(0,s.kt)("p",null,"To solve this limitation, you can either run ",(0,s.kt)("inlineCode",{parentName:"p"},"modprobe rbd")," on worker nodes, or configure the kubelet containers to automatically mount the ",(0,s.kt)("inlineCode",{parentName:"p"},"/lib/modules")," directory from the host into the container."),(0,s.kt)("p",null,"For the kubelet configuration, put the following lines into the ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file prior to RKE cluster provisioning. You can also modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.yml")," later in the Rancher UI by clicking on ",(0,s.kt)("strong",{parentName:"p"},"Edit Cluster > Edit as YAML")," and restarting the worker nodes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kubelet:\n    extra_binds:\n      - '/lib/modules:/lib/modules:ro'\n")),(0,s.kt)("p",null,"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"extra_binds")," directive, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/#extra-binds"},"this section.")),(0,s.kt)("h2",{id:"installing-the-ceph-csi-driver-on-an-rke2-cluster"},"Installing the ceph-csi driver on an RKE2 cluster"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"These steps are needed for dynamic RBD provisioning only."))),(0,s.kt)("p",null,"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd")," chart, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ceph/ceph-csi/blob/devel/charts/ceph-csi-rbd/README.md"},"this page.")),(0,s.kt)("p",null,"To get details about your SES cluster, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ceph mon dump\n")),(0,s.kt)("p",null,"Read its output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"dumped monmap epoch 3\nepoch 3\nfsid 79179d9d-98d8-4976-ab2e-58635caa7235\nlast_changed 2021-02-11T10:56:42.110184+0000\ncreated 2021-02-11T10:56:22.913321+0000\nmin_mon_release 15 (octopus)\n0: [v2:10.85.8.118:3300/0,v1:10.85.8.118:6789/0] mon.a\n1: [v2:10.85.8.123:3300/0,v1:10.85.8.123:6789/0] mon.b\n2: [v2:10.85.8.124:3300/0,v1:10.85.8.124:6789/0] mon.c\n")),(0,s.kt)("p",null,"Later you'll need the fsid and mon addresses values."),(0,s.kt)("h2",{id:"install-the-ceph-csi-driver-using-helm"},"Install the ceph-csi Driver Using Helm"),(0,s.kt)("p",null,"Run these commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm repo add ceph-csi https://ceph.github.io/csi-charts\nhelm repo update\nhelm search repo ceph-csi -l\nhelm inspect values ceph-csi/ceph-csi-rbd > ceph-csi-rbd-values.yaml\n")),(0,s.kt)("p",null,"Modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," file and keep there only the required changes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# ceph-csi-rbd-values.yaml\ncsiConfig:\n  - clusterID: "79179d9d-98d8-4976-ab2e-58635caa7235"\n    monitors:\n      - "10.85.8.118:6789"\n      - "10.85.8.123:6789"\n      - "10.85.8.124:6789"\nprovisioner:\n  name: provisioner\n  replicaCount: 2\n')),(0,s.kt)("p",null,"Make sure the ceph monitors are reachable from the RKE2 cluster, for example, by ping."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl create namespace ceph-csi-rbd\nhelm install --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\nkubectl rollout status deployment ceph-csi-rbd-provisioner -n ceph-csi-rbd\nhelm status ceph-csi-rbd -n ceph-csi-rbd\n")),(0,s.kt)("p",null,"in case you'd like to modify the configuration directly via Helm, you may adapt the ",(0,s.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," file and call:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"helm upgrade \\\n  --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\n")),(0,s.kt)("h2",{id:"creating-rbd-ceph-resources"},"Creating RBD Ceph Resources"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# Create a ceph pool:\nceph osd pool create myPool 64 64\n\n# Create a block device pool:\nrbd pool init myPool\n\n# Create a block device image:\nrbd create -s 2G myPool/image\n\n# Create a block device user and record the key:\nceph auth get-or-create-key client.myPoolUser mon \"allow r\" osd \"allow class-read object_prefix rbd_children, allow rwx pool=myPool\" | tr -d '\\n' | base64\nQVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\n\n# Encode the ceph user myPoolUser into a bash64 hash:\necho \"myPoolUser\" | tr -d '\\n' | base64\nbXlQb29sVXNlcg==\n\n# Create a block device admin user and record the key:\nceph auth get-or-create-key client.myPoolAdmin mds 'allow *' mgr 'allow *' mon 'allow *' osd 'allow * pool=myPool' | tr -d '\\n' | base64\nQVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\n\n# Encode the ceph user myPoolAdmin into a bash64 hash:\necho \"myPoolAdmin\" | tr -d '\\n' | base64\nbXlQb29sQWRtaW4=\n")),(0,s.kt)("h2",{id:"configure-rbd-ceph-access-secrets"},"Configure RBD Ceph Access Secrets"),(0,s.kt)("h3",{id:"user-account"},"User Account"),(0,s.kt)("p",null,"For static RBD provisioning (the image within the ceph pool must exist), run these commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cat > ceph-user-secret.yaml << EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-user\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sVXNlcg==\n  userKey: QVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\nEOF\n\nkubectl apply -f ceph-user-secret.yaml\n")),(0,s.kt)("h3",{id:"admin-account"},"Admin Account"),(0,s.kt)("p",null,"For dynamic RBD provisioning (used for automatic image creation within a given ceph pool), run these commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cat > ceph-admin-secret.yaml << EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-admin\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sQWRtaW4=\n  userKey: QVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\nEOF\n\nkubectl apply -f ceph-admin-secret.yaml\n")),(0,s.kt)("h2",{id:"create-rbd-testing-resources"},"Create RBD Testing Resources"),(0,s.kt)("h3",{id:"using-rbd-in-pods"},"Using RBD in Pods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod\ncat > ceph-rbd-pod-inline.yaml << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-inline\nspec:\n  containers:\n  - name: ceph-rbd-pod-inline\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    rbd:\n      monitors:\n      - 10.85.8.118:6789\n      - 10.85.8.123:6789\n      - 10.85.8.124:6789\n      pool: myPool\n      image: image\n      user: myPoolUser\n      secretRef:\n        name: ceph-user\n      fsType: ext4\n      readOnly: false\nEOF\n \nkubectl apply -f ceph-rbd-pod-inline.yaml\nkubectl get pod\nkubectl exec pod/ceph-rbd-pod-inline -- df -k | grep rbd\n')),(0,s.kt)("h3",{id:"using-rbd-in-persistent-volumes"},"Using RBD in Persistent Volumes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod-pvc-pv\ncat > ceph-rbd-pod-pvc-pv-allinone.yaml << EOF\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: ceph-rbd-pv\nspec:\n  capacity:\n    storage: 2Gi\n  accessModes:\n    - ReadWriteOnce\n  rbd:\n    monitors:\n    - 10.85.8.118:6789\n    - 10.85.8.123:6789\n    - 10.85.8.124:6789\n    pool: myPool \n    image: image\n    user: myPoolUser \n    secretRef:\n      name: ceph-user\n    fsType: ext4\n    readOnly: false\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-pvc\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-pv\nspec:\n  containers:\n  - name: ceph-rbd-pod-pvc-pv\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-pvc\nEOF\n \nkubectl apply -f ceph-rbd-pod-pvc-pv-allinone.yaml\nkubectl get pv,pvc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-pv -- df -k | grep rbd\n')),(0,s.kt)("h3",{id:"using-rbd-in-storage-classes"},"Using RBD in Storage Classes"),(0,s.kt)("p",null,"This example is for dynamic provisioning. The ceph-csi driver is needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod-pvc-sc\ncat > ceph-rbd-pod-pvc-sc-allinone.yaml <<EOF\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ceph-rbd-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: rbd.csi.ceph.com\nparameters:\n   clusterID: 79179d9d-98d8-4976-ab2e-58635caa7235\n   pool: myPool\n   imageFeatures: layering\n   csi.storage.k8s.io/provisioner-secret-name: ceph-admin\n   csi.storage.k8s.io/provisioner-secret-namespace: default\n   csi.storage.k8s.io/controller-expand-secret-name: ceph-admin\n   csi.storage.k8s.io/controller-expand-secret-namespace: default\n   csi.storage.k8s.io/node-stage-secret-name: ceph-admin\n   csi.storage.k8s.io/node-stage-secret-namespace: default\nreclaimPolicy: Delete\nallowVolumeExpansion: true\nmountOptions:\n   - discard\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-sc-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: ceph-rbd-sc\n---    \napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-sc\nspec:\n  containers:\n  - name:  ceph-rbd-pod-pvc-sc\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-sc-pvc\nEOF\n \nkubectl apply -f ceph-rbd-pod-pvc-sc-allinone.yaml\nkubectl get pv,pvc,sc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-sc -- df -k | grep rbd\n')),(0,s.kt)("h3",{id:"rke2-servermaster-provisioning"},"RKE2 Server/Master Provisioning"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo su\ncurl -sfL https://get.rke2.io | sh -\nsystemctl enable --now rke2-server\n\ncat > /root/.bashrc << EOF\nexport PATH=$PATH:/var/lib/rancher/rke2/bin/\nexport KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nEOF\n\ncat /var/lib/rancher/rke2/server/node-token\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\n")),(0,s.kt)("h3",{id:"rke2-agentworker-provisioning"},"RKE2 Agent/Worker provisioning"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'mkdir -p /etc/rancher/rke2/\n\ncat > /etc/rancher/rke2/config.yaml << EOF\nserver: https://10.100.103.23:9345\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\nEOF\n\ncurl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sh -\nsystemctl enable --now rke2-agent.service\n')),(0,s.kt)("p",null,"To import the cluster into Rancher, click ",(0,s.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),". Then on the ",(0,s.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,s.kt)("strong",{parentName:"p"},"Import Existing"),". Then run the provided kubectl command on the server/master node."),(0,s.kt)("h2",{id:"tested-versions"},"Tested Versions"),(0,s.kt)("p",null,"OS for running RKE2 nodes: JeOS SLE15-SP2 with installed kernel-default-5.3.18-24.49"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kubectl version\nClient Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.4", GitCommit:"c96aede7b5205121079932896c4ad89bb93260af", GitTreeState:"clean", BuildDate:"2020-06-22T12:00:00Z", GoVersion:"go1.13.11", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.7+rke2r1", GitCommit:"1dd5338295409edcfff11505e7bb246f0d325d15", GitTreeState:"clean", BuildDate:"2021-01-20T01:50:52Z", GoVersion:"go1.15.5b5", Compiler:"gc", Platform:"linux/amd64"}\n\nhelm version\nversion.BuildInfo{Version:"3.4.1", GitCommit:"c4e74854886b2efe3321e185578e6db9be0a6e29", GitTreeState:"clean", GoVersion:"go1.14.12"}\n')),(0,s.kt)("p",null,"Kubernetes version on RKE2 cluster: v1.19.7+rke2r1"),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"In case you are using SUSE's ceph-rook based on SES7, it might be useful to expose the monitors on hostNetwork by editing ",(0,s.kt)("inlineCode",{parentName:"p"},"rook-1.4.5/ceph/cluster.yaml")," and setting ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.network.hostNetwork=true"),"."),(0,s.kt)("p",null,"Also for operating the ceph-rook cluster, it is useful to deploy a toolbox on the Kubernetes cluster where ceph-rook is provisioned by ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl apply -f rook-1.4.5/ceph/toolbox.yaml")," Then all the ceph related commands can be executed in the toolbox pod, for example, by running ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl exec -it -n rook-ceph rook-ceph-tools-686d8b8bfb-2nvqp -- bash")),(0,s.kt)("p",null,"Operating with the ceph - basic commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ceph osd pool stats\nceph osd pool delete myPool myPool --yes-i-really-really-mean-it\nrbd list -p myPool\n> csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38\n> image\n")),(0,s.kt)("p",null,"Delete the image: ",(0,s.kt)("inlineCode",{parentName:"p"},"rbd rm csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38 -p myPool")),(0,s.kt)("p",null,"CephFS commands in rook toolbox:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ceph -s\nceph fs ls\nceph fs fail cephfs\nceph fs rm cephfs --yes-i-really-mean-it\nceph osd pool delete cephfs_data cephfs_data --yes-i-really-really-mean-it\nceph osd pool delete cephfs_metadata cephfs_metadata --yes-i-really-really-mean-it\n")),(0,s.kt)("p",null,"To prepare a cephfs filesystem, you can run this command on a rook cluster:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl apply -f rook-1.4.5/ceph/filesystem.yaml\n")))}m.isMDXComponent=!0}}]);