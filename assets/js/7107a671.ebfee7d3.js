"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[1124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"controllers_initializer.create",title:"Function: create",sidebar_label:"create",custom_edit_url:null},o=void 0,l={unversionedId:"api/functions/controllers_initializer.create",id:"api/functions/controllers_initializer.create",title:"Function: create",description:"controllers/initializer.create",source:"@site/docs/api/functions/controllers_initializer.create.md",sourceDirName:"api/functions",slug:"/api/functions/controllers_initializer.create",permalink:"/docs/api/functions/controllers_initializer.create",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"controllers_initializer.create",title:"Function: create",sidebar_label:"create",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"setupDataDirWatcher",permalink:"/docs/api/functions/controllers_data_dir_watcher.setupDataDirWatcher"},next:{title:"timeout",permalink:"/docs/api/functions/controllers_initializer.timeout"}},c={},s=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/controllers_initializer"},"controllers/initializer"),".create"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"create"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/api_Client.Client"},(0,a.kt)("inlineCode",{parentName:"a"},"Client")),">"),(0,a.kt)("p",null,"Used to initialize the client session."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note")," It is required to set all config variables as ",(0,a.kt)("a",{parentName:"p",href:"https://open-wa.github.io/wa-automate-nodejs/interfaces/configobject.html"},"ConfigObject")," that includes both ",(0,a.kt)("a",{parentName:"p",href:"https://open-wa.github.io/wa-automate-nodejs/interfaces/configobject.html#sessionId"},"sessionId"),". Setting the session id as the first variable is no longer valid"),(0,a.kt)("p",null,"e.g"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"create({\nsessionId: 'main',\ncustomUserAgent: ' 'WhatsApp/2.16.352 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15',\nblockCrashLogs true,\n...\n})....\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/api/interfaces/api_model_config.ConfigObject"},(0,a.kt)("inlineCode",{parentName:"a"},"ConfigObject"))," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/types/api_model_config.AdvancedConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"AdvancedConfig"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"AdvancedConfig The extended custom configuration")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/classes/api_Client.Client"},(0,a.kt)("inlineCode",{parentName:"a"},"Client")),">"))}u.isMDXComponent=!0}}]);