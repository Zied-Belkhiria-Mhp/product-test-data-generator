"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[310],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,title:"Local Deployment"},s=void 0,p={unversionedId:"devops/local-deployment",id:"devops/local-deployment",title:"Local Deployment",description:"To deploy the testdata-generator with all its components on your local machine you need to ensure the following steps:",source:"@site/docs/devops/local-deployment.md",sourceDirName:"devops",slug:"/devops/local-deployment",permalink:"/product-test-data-generator/docs/devops/local-deployment",editUrl:"https://github.com/catenax-ng/product-test-data-generator/edit/main/docs/devops/local-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Local Deployment"},sidebar:"tutorialSidebar",previous:{title:"ArgoCD Operations",permalink:"/product-test-data-generator/docs/devops/argo-cd"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Process",id:"installation-process",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To deploy the testdata-generator with all its components on your local machine you need to ensure the following steps:"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working docker installation with standard permissions"),(0,o.kt)("li",{parentName:"ul"},"A few gb disc space left"),(0,o.kt)("li",{parentName:"ul"},"Internet connection to download docker images for tdg")),(0,o.kt)("h2",{id:"installation-process"},"Installation Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a local keycloak instance with the script under ",(0,o.kt)("em",{parentName:"p"},"'local-docker/keycloak.sh'."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the first lines of file ",(0,o.kt)("em",{parentName:"p"},"'deploy-local.sh'")," according to the parameters of your local machine (hint: use ip instead of hostname, don't use 127.0.0.1)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nexport repo="ghcr.io/catenax-ng/product-test-data-generator"\nexport hostname="<your main ip here>"\nexport realm="master"\nexport client="<client name for tdg goes here>"\nexport secret="<client secret goes here>"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run script ",(0,o.kt)("em",{parentName:"p"},"'./deploy-local.sh'")," to install the tdg completely local.\nThis might take a few minutes.\nIn some cases, docker will produce an error during the setup process (depending on your docker version). In that case, just run the script again and everything should work fine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your instance is ready now to use. You can reach the ui via port ",(0,o.kt)("em",{parentName:"p"},"8090")," and the swagger interface via ",(0,o.kt)("em",{parentName:"p"},"8080"),". The authentication api-key for the api is ",(0,o.kt)("em",{parentName:"p"},"SPEEDBOAT")," if not changed in the script.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) if you want to import test scenarios and templates, please open a docker-shell into your db-pod and enter the following:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /db-template\n./import.sh\n")),(0,o.kt)("p",null,"In case this doesn't work, try the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd /db-template\n\nmongoimport -p "admin" -u "admin" --authenticationDatabase "admin" -d tdg --collection test_data_scenario --file /db-template/test_data_scenario.json\nmongoimport -p "admin" -u "admin" --authenticationDatabase "admin" -d tdg --collection test_data_template --file /db-template/test_data_template.json\nmongoimport -p "admin" -u "admin" --authenticationDatabase "admin" -d tdg --collection test_meta_model    --file /db-template/test_meta_model.json\n')))}m.isMDXComponent=!0}}]);