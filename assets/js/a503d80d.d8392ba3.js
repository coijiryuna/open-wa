"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[6813],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=s(a),c=r,N=k["".concat(l,".").concat(c)]||k[c]||m[c]||i;return a?n.createElement(N,o(o({ref:e},p),{},{components:a})):n.createElement(N,o({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2762:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"connect_socket.SocketClient",title:"Class: SocketClient",sidebar_label:"SocketClient",custom_edit_url:null},o=void 0,d={unversionedId:"api/classes/connect_socket.SocketClient",id:"api/classes/connect_socket.SocketClient",title:"Class: SocketClient",description:"connect/socket.SocketClient",source:"@site/docs/api/classes/connect_socket.SocketClient.md",sourceDirName:"api/classes",slug:"/api/classes/connect_socket.SocketClient",permalink:"/docs/api/classes/connect_socket.SocketClient",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"connect_socket.SocketClient",title:"Class: SocketClient",sidebar_label:"SocketClient",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SocketClient",permalink:"/docs/api/classes/connect.SocketClient"},next:{title:"LogToEvTransport",permalink:"/docs/api/classes/logging_custom_transport.LogToEvTransport"}},l={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"apiKey",id:"apikey",level:3},{value:"ev",id:"ev",level:3},{value:"listeners",id:"listeners",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"socket",id:"socket",level:3},{value:"url",id:"url",level:3},{value:"Methods",id:"methods",level:2},{value:"ask",id:"ask",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"createMessageCollector",id:"createmessagecollector",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"listen",id:"listen",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"stopListener",id:"stoplistener",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4}],p={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/connect_socket"},"connect/socket"),".SocketClient"),(0,r.kt)("p",null,"[ALPHA - API will 100% change in the near future. Don't say I didn't warn you.]"),(0,r.kt)("p",null,"An easy to use socket implementation that allows users to connect into remote instances of the EASY API."),(0,r.kt)("p",null,"How to use it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you're running an instance of the EASY API and make sure to start it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--socket")," flag"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    > docker run -e PORT=8080 -p 8080:8080 openwa/wa-automate:latest --socket\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use this in your code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    import { SocketClient } from "@open-wa/wa-automate";\n    \n    SocketClient.connect("http://localhost:8080").then(async client => {\n        //now you can use the client similar to how you would use the http express middleware.\n\n        //There are two main commands from this client\n\n        // 1. client.listen - use this for your listeners\n        \n        await client.listen("onMessage", message => {\n            ...\n        })\n\n        // 2. client.asj - ask the main host client to get things done\n\n        await client.ask("sendText", {\n            "to" : "44771234567@c.us",\n            "content": "hellow socket"\n        })\n\n        // or you can send the arguments in order as an array (or tuple, as the cool kids would say)\n        await client.ask("sendText", [\n            "44771234567@c.us",\n            "hellow socket"\n        ])\n\n    })\n')))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new SocketClient"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ev?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"apiKey?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ev?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"apikey"},"apiKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"apiKey"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ev"},"ev"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ev"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"EventEmitter2")),(0,r.kt)("p",null,"A local version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ev")," EventEmitter2"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listeners"},"listeners"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"listeners"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onAck")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onAddedToGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onAnyMessage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onBattery")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onBroadcast")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onButton")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onChatDeleted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onChatOpened")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onChatState")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onContactAdded")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onGlobalParticipantsChanged")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onIncomingCall")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onLabel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onLogout")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onMessage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onMessageDeleted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNewProduct")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onOrder")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onPlugged")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onReaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onRemovedFromGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onStateChanged")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onStory")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,r.kt)("inlineCode",{parentName:"td"},"[id: string]"),": (",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),";  }")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"socket"},"socket"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"socket"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Socket"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEventsMap"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"url"},"url"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"url"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"ask"},"ask"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"ask"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"P"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"args?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/api_Client.Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"P")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends [] ","|"," ","[fn: Function, queueOptions?: Options<default, DefaultAddOptions",">]"," ","|"," ","[fn: Function, priority?: number]"," ","|"," ","[reason: string]"," ","|"," ","[fn: Function, queueOptions?: Options<default, DefaultAddOptions",">]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[fn: Function]"," ","|"," ","[simpleListener?: SimpleListener]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[to: ChatId, url: string, filename: string, caption: Content, quotedMsgId?: MessageId, requestConfig: AxiosRequestConfig<any",">",", waitForId?: boolean, ptt?: boolean, withoutPreview?: boolean, hideTags?: boolean, viewOnce?: boolean]"," ","|"," ","[to: ChatId, url: string, text?: Content, thumbnail?: Base64]"," ","|"," ","[thumb: string, url: string, title: string, description: string, text: Content, chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[to: ChatId, file: DataURL ","|"," FilePath, filename: string, caption: Content, quotedMsgId?: MessageId, waitForId?: boolean, ptt?: boolean, withoutPreview?: boolean, hideTags?: boolean, viewOnce?: boolean]"," ","|"," ","[to: ChatId, file: DataURL ","|"," FilePath, filename: string, caption: Content, quotedMsgId?: MessageId, waitForId?: boolean, ptt?: boolean, withoutPreview?: boolean, hideTags?: boolean, viewOnce?: boolean]"," ","|"," ","[groupId: GroupChatId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[groupId: GroupChatId, image: DataURL]"," ","|"," ","[to: ChatId, image: string ","|"," Base64 ","|"," DataURL ","|"," Buffer, stickerMetadata?: StickerMetadata]"," ","|"," ","[to: ChatId, messageId: MessageId, webpBase64: Base64, animated: boolean]"," ","|"," ","[to: ChatId, webpBase64: Base64, animated: boolean]"," ","|"," ","[url: string]"," ","|"," ","[to: ChatId, emojiId: string, messageId?: MessageId]"," ","|"," ","[data: JsonObject, event: SimpleListener, extras?: JsonObject]"," ","|"," [c: ChatId ","|"," Message ","|"," Chat, filter: CollectorFilter<","[Message]",">",", options: CollectorOptions] ","|"," ","[message: MessageId ","|"," Message]"," ","|"," ","[to: ChatId, lat: string, lng: string, loc: string, address?: string, url?: string]"," ","|"," ","[to: ChatId, content: Content]"," ","|"," [to: ChatId, body: string ","|"," LocationButtonBody, buttons: Button[], title?: string, footer?: string] ","|"," ","[message?: string]"," ","|"," [url: string, events: SimpleListener[] ","|",' "all", requestConfig: AxiosRequestConfig<any',">",", concurrency: number] ","|"," ","[useSessionIdInPath: boolean]"," ","|"," ","[chatId: ChatId, payload: Object]"," ","|"," [c: ChatId ","|"," Message ","|"," Chat, filter: CollectorFilter<","[Message]",">",", options: AwaitMessagesOptions] ","|"," ","[listener: SimpleListener]"," ","|"," ","[url: string, optionsOverride: any]"," ","|"," ","[groupId: GroupChatId, fn: Function, legacy: boolean]"," ","|"," ","[chatId: ChatId, fn: Function]"," ","|"," ","[callbackToTest: SimpleListener, testData: any]"," ","|"," ","[available: boolean]"," ","|"," ","[newStatus: string]"," ","|"," ","[label: string]"," ","|"," ","[label: string, chatId: ChatId]"," ","|"," ","[label: string, chatId: ChatId]"," ","|"," ","[label: string]"," ","|"," ","[chatId: ChatId, vcard: string, contactName?: string, contactNumber?: string]"," ","|"," ","[newName: string]"," ","|"," ","[chatState: ChatState, chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," [to: ChatId, content: Content, hideTags?: boolean, mentions?: ContactId[]] ","|"," ","[to: ChatId, amount: number, currency: string, message?: string]"," ","|"," [to: ChatId, body: string ","|"," LocationButtonBody, buttons: AdvancedButton[], text: string, footer: string, filename: string] ","|"," ","[to: ChatId, base64: Base64]"," ","|"," [to: ChatId, sections: Section[], title: string, description: string, actionText: string] ","|"," [to: ChatId, content: Content, replyMessageId: MessageId, hideTags?: boolean, mentions?: ContactId[]] ","|"," ","[groupId: GroupChatId, content: Content, hideTags?: boolean, formatting?: string, messageBeforeTags?: boolean]"," ","|"," ","[userA?: string]"," ","|"," ","[to: ChatId, url: string, text: Content, thumbnail?: Base64]"," ","|"," ","[to: ChatId, content: Content, quotedMsgId: MessageId, sendSeen?: boolean]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[groupChatId: GroupChatId]"," ","|"," ","[to: ChatId, file: DataURL ","|"," FilePath, quotedMsgId: MessageId]"," ","|"," ","[to: ChatId, file: DataURL ","|"," FilePath, quotedMsgId?: MessageId]"," ","|"," ","[to: ChatId, file: DataURL ","|"," FilePath, filename: string, caption: Content, quotedMsgId?: MessageId, requestConfig: AxiosRequestConfig<any",">]"," ","|"," ","[to: ChatId, giphyMediaUrl: string, caption: Content]"," ","|"," ","[chatId?: ChatId]"," ","|"," ","[id: ContactId]"," ","|"," ","[to: ChatId, image: Base64, caption: Content, bizNumber: ContactId, productId: string]"," ","|"," ","[to: ChatId, image: DataURL, productData: CustomProduct]"," ","|"," [to: ChatId, contactId: ContactId ","|"," ContactId[]] ","|"," [to: ChatId, contactIds: ContactId[]] ","|"," ","[to: ChatId, on: boolean]"," ","|"," ","[to: ChatId, on: boolean]"," ","|"," ","[id: ChatId, archive: boolean]"," ","|"," ","[id: ChatId, pin: boolean]"," ","|"," ","[chatId: ChatId, muteDuration: ChatMuteDuration]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," [to: ChatId, messages: MessageId ","|"," MessageId[], skipMyMessages: boolean] ","|"," ","[to: ChatId, messageId: MessageId]"," ","|"," ","[preserveSessionData: boolean]"," ","|"," ","[withNewMessageOnly: boolean]"," ","|"," ","[withNewMessageOnly: boolean]"," ","|"," ","[withNewMessagesOnly: boolean]"," ","|"," ","[groupId: GroupChatId]"," ","|"," ","[link: string, returnChatObj?: boolean]"," ","|"," ","[id: ContactId]"," ","|"," ","[id: ChatId]"," ","|"," ","[id: ContactId]"," ","|"," ","[groupId: GroupChatId]"," ","|"," ","[msgId: MessageId]"," ","|"," ","[groupId: GroupChatId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[id: string ","|"," MessageId]"," ","|"," [name: string, price: number, currency: string, images: string[], description: string, url?: string, internalId?: string, isHidden?: boolean] ","|"," [productId: string, name?: string, price?: number, currency?: string, images?: DataURL[], description?: string, url?: string, internalId?: string, isHidden?: boolean] ","|"," ","[chatId: ChatId, productId: string]"," ","|"," ","[productId: string]"," ","|"," ","[chatId?: ChatId]"," ","|"," ","[chatId?: ChatId]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[messageId: MessageId, emoji: string]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[contactId: ContactId]"," ","|"," ","[contactId: ContactId, timestamp: number]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[chatId: ChatId]"," ","|"," ","[link: string]"," ","|"," ","[chatId: ChatId]"," ","|"," [chatId: ChatId, messageId: MessageId ","|"," MessageId[], onlyLocal: boolean] ","|"," ","[contactId: ContactId]"," ","|"," ","[includeMe: boolean, includeNotifications: boolean, use","_","unread","_","count: boolean]"," ","|"," ","[chatId: ChatId, includeMe: boolean, includeNotifications: boolean]"," ","|"," ","[chatId: ChatId, includeMe: boolean, includeNotifications: boolean]"," ","|"," [groupName: string, contacts: ContactId ","|"," ContactId[]] ","|"," ","[groupId: GroupChatId, participantId: ContactId]"," ","|"," ","[groupId: GroupChatId, url: string, requestConfig: AxiosRequestConfig<any",">]"," ","|"," [groupId: GroupChatId, participantId: ContactId ","|"," ContactId[]] ","|"," [groupId: GroupChatId, participantId: ContactId ","|"," ContactId[]] ","|"," [groupId: GroupChatId, participantId: ContactId ","|"," ContactId[]] ","|"," ","[groupId: GroupChatId, onlyAdmins: boolean]"," ","|"," ","[groupId: GroupChatId, onlyAdmins: boolean]"," ","|"," ","[groupId: GroupChatId, description: string]"," ","|"," ","[groupId: GroupChatId, title: string]"," ","|"," ","[groupId: GroupChatId]"," ","|"," ","[hex: string]"," ","|"," ","[activate: boolean]"," ","|"," ","[messageId: MessageId]"," ","|"," ","[to: ChatId, url: string, requestConfig: AxiosRequestConfig<any",">",", stickerMetadata?: StickerMetadata]"," ","|"," ","[to: ChatId, url: string, messageId: MessageId, requestConfig: AxiosRequestConfig<any",">",", stickerMetadata?: StickerMetadata]"," ","|"," ","[to: ChatId, image: string ","|"," Base64 ","|"," DataURL ","|"," Buffer, messageId: MessageId, stickerMetadata?: StickerMetadata]"," ","|"," ","[namespace: namespace, id: string, property: string]"," ","|"," ","[to: ChatId, file: string ","|"," Base64 ","|"," DataURL ","|"," Buffer, processOptions: Mp4StickerConversionProcessOptions, stickerMetadata?: StickerMetadata, messageId?: MessageId]"," ","|"," ","[chatId: ChatId, ephemeral: boolean ","|"," EphemeralDuration]"," ","|"," ","[to: ChatId, giphyMediaUrl: string ","|"," URL]"," ","|"," ","[text: Content, textRgba: string, backgroundRgba: string, font: number]"," ","|"," ","[data: DataURL, caption: Content]"," ","|"," ","[data: DataURL, caption: Content]"," ","|"," [statusesToDelete: string ","|"," string[]] ","|"," ","[id: string]"," ","|"," ","[ts?: number]"," ","|"," ","[startingFrom?: number]"," ","|"," ","[message: Message]"," ","|"," ","[data: DataURL]"," ","|"," ","[webhookId: string]"," ","|"," [webhookId: string, events: SimpleListener[] ","|",' "all"]')))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"),"[] ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"P")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"td"},"[k: string]"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),";  }")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createmessagecollector"},"createMessageCollector"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createMessageCollector"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/structures_MessageCollector.MessageCollector"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageCollector")),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/types/api_model_aliases.ChatId"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatId"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/api_model_message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/types/api_model_chat.Chat"},(0,r.kt)("inlineCode",{parentName:"a"},"Chat")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/types/structures_Collector.CollectorFilter"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectorFilter")),"<[",(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/api_model_message.Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),"]",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/structures_Collector.CollectorOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectorOptions")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/structures_MessageCollector.MessageCollector"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageCollector")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"listen"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Set a callback on a simple listener"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/enums/api_model_events.SimpleListener"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The listener name (e.g onMessage, onAnyMessage, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The callback you need to run on the selected listener")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The id of the callback"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stoplistener"},"stopListener"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stopListener"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"callbackId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Discard a callback"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/enums/api_model_events.SimpleListener"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleListener"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The listener name (e.g onMessage, onAnyMessage, etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callbackId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID from ",(0,r.kt)("inlineCode",{parentName:"td"},"listen"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"boolean - true if the callback was found and discarded, false if the callback is not found"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"connect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ev?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/connect_socket.SocketClient"},(0,r.kt)("inlineCode",{parentName:"a"},"SocketClient"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/api_Client.Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client")),">"),(0,r.kt)("p",null,"The main way to create the socket based client."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL of the socket server (i.e the EASY API instance address)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"apiKey?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional api key if set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ev?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/connect_socket.SocketClient"},(0,r.kt)("inlineCode",{parentName:"a"},"SocketClient"))," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/api_Client.Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client")),">"),(0,r.kt)("p",null,"SocketClient"))}m.isMDXComponent=!0}}]);