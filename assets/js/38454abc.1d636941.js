(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9145],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9889:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(4034),o=n(9973),i=(n(7294),n(3905)),r={id:"privacy_settings",title:"Privacy Settings",sidebar_label:"Privacy Settings"},s={unversionedId:"using/privacy_settings",id:"using/privacy_settings",isDocsHomePage:!1,title:"Privacy Settings",description:"Beginning with version 8.0, Manifold is compliant with the expectations of the European Union\u2019s General Data Protection Regulation (GDPR) in its treatment of your data and in providing you options for what information you want to share with the system.",source:"@site/docs/using/privacy_settings.md",sourceDirName:"using",slug:"/using/privacy_settings",permalink:"/manifold-docusaurus/docs/using/privacy_settings",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/using/privacy_settings.md",version:"current",sidebar_label:"Privacy Settings",frontMatter:{id:"privacy_settings",title:"Privacy Settings",sidebar_label:"Privacy Settings"},sidebar:"docs",previous:{title:"Your Account",permalink:"/manifold-docusaurus/docs/using/your_account"},next:{title:"Manifold Projects",permalink:"/manifold-docusaurus/docs/using/manifold_projects"}},c=[],l={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Beginning with version 8.0, Manifold is compliant with the expectations of the European Union\u2019s General Data Protection Regulation (GDPR) in its treatment of your data and in providing you options for what information you want to share with the system."),(0,i.kt)("p",null,"When first navigating to an instance, a banner will display across the bottom of the page, prompting users to choose which, if any, tracking cookies they want to allow. Two options are provided: ",(0,i.kt)("strong",{parentName:"p"},"Accept All")," and ",(0,i.kt)("strong",{parentName:"p"},"Settings"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("strong",{parentName:"p"},"Accept All")," is chosen, Manifold will set tokens locally in the user\u2019s browser as a means to report anonymized ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/analytics"},"internal analytics information")," about what pages users access and how much time they spend on those pages. There is no personally identifiable information stored in relation to this usage data. For those users who have credentials to access the Manifold backend, the aggregated usage data is displayed in the various Analytics views therein."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Accept All")," option also allows instances that have ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/administering/configuring/integration_settings"},"configured Google Analytics")," to run on the site the ability for Google to record the user\u2019s anonymized interactions with the instance. Site administrators can access analytics that Google records in the ",(0,i.kt)("a",{parentName:"p",href:"https://analytics.google.com/analytics/web/#/"},"Google Analytics property")," they set up for integration with the instance."),(0,i.kt)("p",null,"If ",(0,i.kt)("strong",{parentName:"p"},"Settings")," is selected, the ribbon transforms into a more detailed view that allows a user to explicitly select, via check box, the option for either Internal or Google Analytics, for those instances that have integrated with Google Analytics. Once satisfied with their selection, users can click the ",(0,i.kt)("strong",{parentName:"p"},"Accept")," button to proceed to the instance. Alternatively, users can opt to ignore the check boxes and instead select the ",(0,i.kt)("strong",{parentName:"p"},"Decline All")," button, which will allow them to enter the site without having any information about their activity reported back to either Manifold or Google."),(0,i.kt)("p",null,"Users do not need to have a Manifold account to have their selection saved. Anonymous consent is stored in the user\u2019s browser locally in a cookie. However, users ",(0,i.kt)("em",{parentName:"p"},"will")," need to either clear their browser\u2019s cookies or create an account if they wish to adjust their selection. Users with accounts can access these privacy settings by selecting the user avatar on the right side of the site\u2019s menu bar and then selecting ",(0,i.kt)("strong",{parentName:"p"},"Privacy")," from the dropdown. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"A Word about Personally Identifiable Information (PII)")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manifold collects name and email information for all users. Manifold also collect passwords, which are fully encrypted, for all users\u2014except for those users who authenticate using a third party OAuth provider (Google, Facebook, Twitter). No other personal information is collected."),(0,i.kt)("p",{parentName:"div"},"That said, when you create a highlight, annotate a text, or add a comment, Manifold stores it in its database. Manifold also keeps track of content that you\u2019ve starred and stores basic information about each reading group, the content that has been collected in the group, and the group\u2019s members."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Options for Admin Users")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Users with Administrator accounts can adjust the language displayed to users in the views described here. The fields to adjust them can be found at the bottom of the ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/administering/configuring/theme_settings"},"Theme Settings")," section of the Manifold backend under the ",(0,i.kt)("strong",{parentName:"p"},"Content")," heading."),(0,i.kt)("p",{parentName:"div"},"The aim would not be to change the facts of how the system works but instead to adjust the tone of the messaging to match to your instance\u2019s voice, as well as to provide you the opportunity to adjust the amount of context you may want to provide."))))}d.isMDXComponent=!0}}]);