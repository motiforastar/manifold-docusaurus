"use strict";(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[2759],{23476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(74848),i=n(28453),a=n(11470),r=n(19365);const s={id:"integration_settings",title:"Integration Settings",sidebar_label:"Integration Settings"},l=void 0,c={id:"administering/configuring/integration_settings",title:"Integration Settings",description:"The fields discussed in this section can be accessed from the Manifold backend by selecting Settings from the main menu and then Ingestion Settings in the submenu.",source:"@site/docs/administering/configuring/integration_settings.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/integration_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings",draft:!1,unlisted:!1,editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/integration_settings.md",tags:[],version:"current",frontMatter:{id:"integration_settings",title:"Integration Settings",sidebar_label:"Integration Settings"},sidebar:"docs",previous:{title:"Theme Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/theme_settings"},next:{title:"Ingestion Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/ingestion_settings"}},d={},u=[{value:"Facebook and Twitter",id:"facebook-and-twitter",level:2},{value:"Google Services Integration",id:"google-services-integration",level:2},{value:"Google OAuth",id:"google-oauth",level:2},{value:"Google Analytics",id:"google-analytics",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.admonition,{type:"location",children:[(0,o.jsxs)(t.p,{children:["The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,o.jsx)(t.strong,{children:"Settings"})," from the main menu and then ",(0,o.jsx)(t.strong,{children:"Ingestion Settings"})," in the submenu."]}),(0,o.jsxs)(t.p,{children:["Only users logged in with ",(0,o.jsx)(t.strong,{children:"Admin"})," credentials can access this view."]})]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Integrations"})," menu is where Manifold administrators store application tokens and values from existing Facebook, Twitter, or Google properties so that new and existing readers can log into Manifold, make use of its social sharing functionalities, and Project editors can ingest Texts from Google and integrate their Projects with Twitter."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Manifold does not require that you use a specific Facebook, Twitter, or Google property for these integrations. If you don\u2019t want to use your or your organization\u2019s existing accounts, you can create dedicated accounts for integrating these services with Manifold."})}),"\n",(0,o.jsx)(t.h2,{id:"facebook-and-twitter",children:"Facebook and Twitter"}),"\n",(0,o.jsxs)(t.p,{children:["When values for the Facebook/Twitter fields are supplied, Manifold will include ",(0,o.jsx)(t.strong,{children:"Log in with Facebook"})," or ",(0,o.jsx)(t.strong,{children:"Log in with Twitter"})," buttons on the login page, and the system will be able to authenticate users against their existing Facebook/Twitter accounts: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Facebook/Twitter credentials. Additionally, users will be able to share Texts and Resources directly to their Facebook/Twitter accounts from Manifold."]}),"\n",(0,o.jsxs)(t.p,{children:["To integrate Facebook or Twitter with Manifold, you will first need to have a Facebook/Twitter account, register for a developer account, and then create an app in the Facebook/Twitter interface. See the ",(0,o.jsx)(t.a,{href:"https://developers.facebook.com/docs/apps/register#developer-account",children:"Facebook Developer Docs"})," or ",(0,o.jsx)(t.a,{href:"https://apps.twitter.com",children:"Twitter App Interface"})," to initiate and complete those processes."]}),"\n",(0,o.jsx)(t.p,{children:"As you create the app, both Facebook and Twitter will ask you to supply a pathway for OAuth callbacks, which the Manifold API handles. Use the tabs below to locate your OAuth callbacks and complete the Facebook/Twitter integration process."}),"\n",(0,o.jsxs)(a.A,{groupId:"oauth-callbacks",defaultValue:"facebook",values:[{label:"Facebook",value:"facebook"},{label:"Twitter",value:"twitter"}],children:[(0,o.jsxs)(r.A,{value:"facebook",children:[(0,o.jsxs)(t.p,{children:["The Facebook callback route is located at ",(0,o.jsx)(t.code,{children:"/auth/facebook/callback"}),". The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is ",(0,o.jsx)(t.code,{children:"manifoldapp.org"}),", the callback URL would be ",(0,o.jsx)(t.code,{children:"http://manifoldapp.org/auth/facebook/callback"}),". Enter your Manifold API callback in your Facebook app\u2019s ",(0,o.jsx)(t.strong,{children:"Valid OAuth redirect URIs"})," field."]}),(0,o.jsxs)(t.p,{children:["Once your Facebook app is created, enter your Facebook App ID and App Secret values in Manifold, using the ",(0,o.jsx)(t.strong,{children:"Facebook App ID"})," and ",(0,o.jsx)(t.strong,{children:"Facebook App Secret"})," fields respectively."]}),(0,o.jsxs)(t.p,{children:["These settings can also be ",(0,o.jsx)(t.a,{href:"/docs/administering/configuring/managing_settings#from-the-environment",children:"managed from environment variables"}),"."]})]}),(0,o.jsxs)(r.A,{value:"twitter",children:[(0,o.jsxs)(t.p,{children:["The Twitter callback route is located at ",(0,o.jsx)(t.code,{children:"/auth/twitter/callback"}),". The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is ",(0,o.jsx)(t.code,{children:"manifoldapp.org"}),", the callback URL would be ",(0,o.jsx)(t.code,{children:"http://manifoldapp.org/auth/twitter/callback"}),"."]}),(0,o.jsxs)(t.p,{children:["After the callback URL has been supplied to the Twitter app, save the Consumer Key (API Key), Consumer Secret (API Secret), Access Token, and Access Token Secret the app generates into Manifold in the ",(0,o.jsx)(t.strong,{children:"Twitter Consumer Key"}),", ",(0,o.jsx)(t.strong,{children:"Twitter Consumer Secret"}),", ",(0,o.jsx)(t.strong,{children:"Twitter Access Token"}),", and ",(0,o.jsx)(t.strong,{children:"Twitter Access Token Secret"})," fields, respectively."]}),(0,o.jsxs)(t.p,{children:["These settings can also be ",(0,o.jsx)(t.a,{href:"/docs/administering/configuring/managing_settings#from-the-environment",children:"managed from environment variables"}),"."]}),(0,o.jsxs)(t.p,{children:["As you complete your Twitter app, it should be configured to be ",(0,o.jsx)(t.strong,{children:"Read Only"}),", ",(0,o.jsx)(t.strong,{children:"Request email addresses from users"}),", with ",(0,o.jsx)(t.strong,{children:"3-legged OAuth enabled"}),"."]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"google-services-integration",children:"Google Services Integration"}),"\n",(0,o.jsx)(t.p,{children:"Configuring Google Services to integrate with Manifold is a prerequisite for allowing readers to log into Manifold using their Google credentials and also enables Resources to be bulk imported into existing Projects via Google Drive."}),"\n",(0,o.jsxs)(t.p,{children:["To configure Google Services for Manifold, you will first need to create a Manifold Google project through the ",(0,o.jsx)(t.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project",children:"Google Developer Console"})," and from there secure a ",(0,o.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",children:"JSON Service Account key"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Once the Google project has been created, you will need to enable the following Google APIs in the Google Cloud Console:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Google Drive API"}),"\n",(0,o.jsx)(t.li,{children:"Google Sheets API"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Manifold uses the Google Drive API when ingesting texts from Google Docs and when importing resources from a Google Drive folder. It uses the Google Sheets API when bulk ingesting resources from a Google sheet. If these APIs are not enabled, these features will not function as expected. For instructions on enabled Google APIs for your Google Cloud Project, please ",(0,o.jsx)(t.a,{href:"https://cloud.google.com/endpoints/docs/openapi/enable-api",children:"consult the Google Cloud documentation"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Console"})," tab in Google\u2019s step-by-step docs refers to the Google Cloud web interface, and is what most users will want to follow."]}),"\n",(0,o.jsxs)(t.p,{children:["When the Service Account Key has been saved to your system, you can load it into the ",(0,o.jsx)(t.strong,{children:"Google Service Config File"})," field in Manifold, which will automatically populate the rest of the required fields to complete the Google integration."]}),"\n",(0,o.jsxs)(t.p,{children:["These settings can also be ",(0,o.jsx)(t.a,{href:"/docs/administering/configuring/managing_settings#from-the-environment",children:"managed from environment variables"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"google-oauth",children:"Google OAuth"}),"\n",(0,o.jsxs)(t.p,{children:["When values for the Google OAuth fields are supplied, Manifold will include ",(0,o.jsx)(t.strong,{children:"Log in with Google"})," button on the login page, and the system will be able to authenticate users against their existing Google account: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Google credentials."]}),"\n",(0,o.jsx)(t.p,{children:"To enable Google OAuth on your instance, you will first need to complete the Google Services Integration described above."}),"\n",(0,o.jsxs)(t.p,{children:["The Manifold API handles OAuth callbacks. For Google, the callback route is located at ",(0,o.jsx)(t.code,{children:"/auth/google/callback"}),". For your installation of Manifold, the callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is manifoldapp.org, the callback URL would be ",(0,o.jsx)(t.code,{children:"http://manifoldapp.org/auth/google/callback"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Manifold Google OAuth requires ",(0,o.jsx)(t.strong,{children:"Setup Consent"})," configured with your email, your authorized Manifold domain, and the callback URL entered in the ",(0,o.jsx)(t.strong,{children:"Authorized redirect URIs"})," field. The Manifold Integration page has fields to input both ",(0,o.jsx)(t.strong,{children:"Client ID"})," and ",(0,o.jsx)(t.strong,{children:"Client secret"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["These settings can also be ",(0,o.jsx)(t.a,{href:"/docs/administering/configuring/managing_settings#from-the-environment",children:"managed from environment variables"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"google-analytics",children:"Google Analytics"}),"\n",(0,o.jsxs)(t.p,{children:["Manifold ships with its own ",(0,o.jsx)(t.a,{href:"/manifold-docusaurus/docs/backend/analytics",children:"built-in analytics reporting tool"}),", independent of third party systems. However, if you would like to secure usage data from Google as well, you can set up an analytics property in the Google Console. That property will enable Google to return usage information about your instance in the Google Analytics interface."]}),"\n",(0,o.jsxs)(t.p,{children:["To enable this functionality, you will first need to complete the Google Services Integration described above. Once that is complete, ",(0,o.jsx)(t.a,{href:"https://support.google.com/analytics/answer/10269537",children:"set up a Universal Authorization property"}),". The Tracking ID that results from that process should be saved to the ",(0,o.jsx)(t.strong,{children:"Google Analytics Tracking ID"})," field in Manifold, complete with the the ",(0,o.jsx)(t.code,{children:"UA-"})," prefix."]}),"\n",(0,o.jsxs)(t.p,{children:["These settings can also be ",(0,o.jsx)(t.a,{href:"/docs/administering/configuring/managing_settings#from-the-environment",children:"managed from environment variables"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var o=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(96540),i=n(34164),a=n(23104),r=n(56347),s=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:i}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=c??p;return g({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function w(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==o&&(c(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(w,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);