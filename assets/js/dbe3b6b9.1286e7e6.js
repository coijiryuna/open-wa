"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[6041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="Best Practice",i={unversionedId:"advanced/best-practices",id:"advanced/best-practices",title:"Best Practice",description:"Since this is not an officially sanctioned solution it is temperamental to say the least. Here are some best practices:",source:"@site/docs/advanced/best-practices.md",sourceDirName:"advanced",slug:"/advanced/best-practices",permalink:"/docs/advanced/best-practices",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multiple Sessions",permalink:"/docs/configuration/multiple-sessions"},next:{title:"Creating an API",permalink:"/docs/how-to/create-api"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"best-practice"},"Best Practice"),(0,r.kt)("p",null,"Since this is not an officially sanctioned solution it is temperamental to say the least. Here are some best practices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Keep the session alive"),(0,r.kt)("li",{parentName:"ol"},"Offload most work off of your @open-wa/wa-automate setup (i.e forward all events to a pubsub or something)"),(0,r.kt)("li",{parentName:"ol"},"Keep the phone nearby just in case you need to reauthenticate"),(0,r.kt)("li",{parentName:"ol"},"Use a chrome instance instead of the default chromium instance"),(0,r.kt)("li",{parentName:"ol"},"Use headless: false for easy & quick visual debugging"),(0,r.kt)("li",{parentName:"ol"},"Implement the unread messages functionality on creation of a session so you don't miss any messages upon any downtime."),(0,r.kt)("li",{parentName:"ol"},"Implement a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/p-queue"},"promise-queue")),(0,r.kt)("li",{parentName:"ol"},"Use a unique and valid custom user-agent"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"await")," all @open-wa/wa-automate methods just in case"),(0,r.kt)("li",{parentName:"ol"},"Do not run your s@open-wa/wa-automate instance on a Windows machine."),(0,r.kt)("li",{parentName:"ol"},"Always ",(0,r.kt)("a",{parentName:"li",href:"https://open-wa.github.io/wa-automate-nodejs/classes/client.html#kill"},"kill the session safely")," upon error or SIGINT."),(0,r.kt)("li",{parentName:"ol"},"Regularly restart your process to manage memory consumption"),(0,r.kt)("li",{parentName:"ol"},"If memory leaks continue to be an issue then use ",(0,r.kt)("inlineCode",{parentName:"li"},"cacheEnabled:false")," in the config to disable the cache on the page.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { create, Client} from '@open-wa/wa-automate';\nconst { default: PQueue } = require(\"p-queue\");\n\nconst queue = new PQueue({\n  concurrency: 4,\n  autoStart:false\n   });\n\nconst proc = async message => {\n  //do something with the message here\n    console.log(message)\n    return true;\n}\n\nconst processMessage = message => queue.add(()=>proc(message));\n\nasync function start(client: Client) {\n  const unreadMessages = await client.getAllUnreadMessages();\n  unreadMessages.forEach(processMessage)\n  ...\n  await client.onMessage(processMessage);\n  queue.start();\n}\n\ncreate().then(client => start(client));\n\n//create takes 1 argument and that is the config object :\n// https://docs.openwa.dev/interfaces/api_model_config.ConfigObject.html\n\ncreate({\n  // For Mac:\n  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',\n  // For Windows:\n  // executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',\n  headless: false,\n  autoRefresh:true,\n  cacheEnabled:false,\n  customUserAgent: 'some custom user agent'\n})\n.then(client => start(client));\n")))}p.isMDXComponent=!0}}]);