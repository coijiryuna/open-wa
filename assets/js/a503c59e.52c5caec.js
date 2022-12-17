"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[1862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"api_model_chat.GroupChatCreationResponse",title:"Interface: GroupChatCreationResponse",sidebar_label:"GroupChatCreationResponse",custom_edit_url:null},i=void 0,p={unversionedId:"api/interfaces/api_model_chat.GroupChatCreationResponse",id:"api/interfaces/api_model_chat.GroupChatCreationResponse",title:"Interface: GroupChatCreationResponse",description:"api/model/chat.GroupChatCreationResponse",source:"@site/docs/api/interfaces/api_model_chat.GroupChatCreationResponse.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/api_model_chat.GroupChatCreationResponse",permalink:"/docs/api/interfaces/api_model_chat.GroupChatCreationResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_model_chat.GroupChatCreationResponse",title:"Interface: GroupChatCreationResponse",sidebar_label:"GroupChatCreationResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GroupChatCreationParticipantAddResponse",permalink:"/docs/api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse"},next:{title:"LiveLocationChangedEvent",permalink:"/docs/api/interfaces/api_model_chat.LiveLocationChangedEvent"}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"gid",id:"gid",level:3},{value:"participants",id:"participants",level:3},{value:"status",id:"status",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/api_model_chat"},"api/model/chat"),".GroupChatCreationResponse"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"gid"},"gid"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"gid"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/types/api_model_aliases.GroupChatId"},(0,n.kt)("inlineCode",{parentName:"a"},"GroupChatId"))),(0,n.kt)("p",null,"The group chat id"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"participants"},"participants"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"participants"),": { ",(0,n.kt)("inlineCode",{parentName:"p"},"ContactId?"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/interfaces/api_model_chat.GroupChatCreationParticipantAddResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"GroupChatCreationParticipantAddResponse")),"  }[]"),(0,n.kt)("p",null,"The initial requested participants and their corresponding add responses"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"status"},"status"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"status"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"200")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"400")),(0,n.kt)("p",null,"The resultant status code of the group chat creation."),(0,n.kt)("p",null,"200 if the group was created successfully."),(0,n.kt)("p",null,"400 if the initial participant does not exist"))}u.isMDXComponent=!0}}]);