(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[1727],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),u=s,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2924:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},5350:function(e,t,n){"use strict";var a=n(7294),s=n(2924);t.Z=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1232:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),s=n(6010),r={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},i=n(5350),o=function(e){var t=void 0===e?props:e,n=t.title,o=t.subtitle,c=t.items,l=t.children,d=(0,i.Z)();d.isDarkTheme,d.setLightTheme,d.setDarkTheme;return a.createElement("div",{className:(0,s.Z)(r.specContainer)},n&&a.createElement("div",{className:(0,s.Z)(r.specTitleWrapper)},a.createElement("span",{className:(0,s.Z)(r.specTitle)},n),o&&a.createElement("span",{className:(0,s.Z)(r.specSubtitle)},o)),c&&a.createElement("div",{className:(0,s.Z)(r.specTable)},a.createElement("table",{width:"100%"},a.createElement("tbody",null,c.map((function(e,t){return a.createElement("tr",{key:e.key},a.createElement("th",{className:(0,s.Z)(r.specKey)},e.key),a.createElement("td",{className:(0,s.Z)(r.specValue)},e.value))}))))),l?a.createElement("div",{className:(0,s.Z)(r.specContent)},l):null)}},7942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var a=n(4034),s=n(9973),r=(n(7294),n(3905)),i=(n(1232),{id:"analytics",title:"Analytics",sidebar_label:"Analytics"}),o={unversionedId:"backend/analytics",id:"backend/analytics",isDocsHomePage:!1,title:"Analytics",description:"The Analytics dashboard is accessed in the Manifold backend from the main menu heading of the same name.",source:"@site/docs/backend/analytics.md",sourceDirName:"backend",slug:"/backend/analytics",permalink:"/manifold-docusaurus/docs/backend/analytics",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/backend/analytics.md",version:"current",sidebar_label:"Analytics",frontMatter:{id:"analytics",title:"Analytics",sidebar_label:"Analytics"},sidebar:"docs",previous:{title:"Pending Entitlements",permalink:"/manifold-docusaurus/docs/backend/entitlements"},next:{title:"Metadata",permalink:"/manifold-docusaurus/docs/backend/metadata"}},c=[{value:"How Do Manifold Analytics Work?",id:"how-do-manifold-analytics-work",children:[]},{value:"Interface Overview",id:"interface-overview",children:[]},{value:"Configuring Constraints",id:"configuring-constraints",children:[]},{value:"Reports",id:"reports",children:[]}],l={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-location"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"location")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"Analytics")," dashboard is accessed in the Manifold backend from the main menu heading of the same name."),(0,r.kt)("p",{parentName:"div"},"Only users logged in with ",(0,r.kt)("strong",{parentName:"p"},"Admin"),", ",(0,r.kt)("strong",{parentName:"p"},"Editor"),", or ",(0,r.kt)("strong",{parentName:"p"},"Marketeer")," roles can access these views and reports."))),(0,r.kt)("h2",{id:"how-do-manifold-analytics-work"},"How Do Manifold Analytics Work?"),(0,r.kt)("p",null,"Manifold includes a built-in analytics reporting system that functions independent of Google or other third-party providers. Our approach is founded in privacy while striving to provide meaningful usage and reporting data."),(0,r.kt)("p",null,"When Manifold tracks events, there is no connection in stored data between those events and specific user accounts. The system is intentionally designed so that it\u2019s impossible to track an individual user\u2019s activity. As part of that effort, the system masks IP addresses so that the IP of users accessing content is not maintained in Manifold and thus not part of any analytics reporting. Instead, Manifold stores a token to identify the visitor and their visit in a cookie. We need to store these tokens to avoid relying on a user\u2019s authenticated session to identify them."),(0,r.kt)("p",null,"Manifold ",(0,r.kt)("em",{parentName:"p"},"does")," store a user\u2019s browser, operating system, device type, and user agent so that we can, in a later iteration of this feature, report on what devices people are using."),(0,r.kt)("p",null,"The system maintains three different analytics views: one for Instance-wide engagement, detailed in this section; another for engagement with specific Projects (see ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#analytics"},"Project Analytics"),"); and a final view for individual Texts and Text sections (see ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/texts#analytics"},"Text Analytics"),") ."),(0,r.kt)("h2",{id:"interface-overview"},"Interface Overview"),(0,r.kt)("p",null,"This view displays global engagement, aggregating user activity from across the instance into eight reports, which can be configured to return information for specific periods of time."),(0,r.kt)("h2",{id:"configuring-constraints"},"Configuring Constraints"),(0,r.kt)("p",null,"At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values."),(0,r.kt)("h4",{id:"start-and-end-date"},"Start and End Date"),(0,r.kt)("p",null,"These two fields are a means to manually set a specific range of time the system will report engagement."),(0,r.kt)("p",null,"Dates can be entered here manually in the month, date, year format (MM/DD/YYYY) or selected from the date picker that appears when your cursor lands in this field."),(0,r.kt)("h4",{id:"choose-a-range-preset"},"Choose a Range Preset"),(0,r.kt)("p",null,"This field comprises four button options that will adjust the reports to pre-defined date ranges: ",(0,r.kt)("strong",{parentName:"p"},"Last week"),", which corresponds to the Sunday through Saturday before the current span of days; ",(0,r.kt)("strong",{parentName:"p"},"Last month"),"; ",(0,r.kt)("strong",{parentName:"p"},"Last 7 days"),", which includes the current day as the seventh; and ",(0,r.kt)("strong",{parentName:"p"},"Last 30 days"),", which does likewise\u2014day 30 is the current day."),(0,r.kt)("h2",{id:"reports"},"Reports"),(0,r.kt)("p",null,"Following the date constraint options, the system displays eight usage reports, some with multiple data points, reflecting user activity across the instance during the defined time span."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exports")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At present there is no mechanism to export analytics data or mask from tracking the activity of specific users."))),(0,r.kt)("h4",{id:"visitors"},"Visitors"),(0,r.kt)("p",null,"Rendered in a line chart, the ",(0,r.kt)("strong",{parentName:"p"},"Visitors")," report shows the number of ",(0,r.kt)("em",{parentName:"p"},"unique")," visitors accessing any page on the instance during the set timespan."),(0,r.kt)("p",null,"Visits are tied to a user\u2019s browser. Thus, a user working in one browser with multiple tabs open to the site will be counted only once. But if the same user accesses an instance from two different browsers, they will be recorded as two different visitors."),(0,r.kt)("h4",{id:"return-visits"},"Return Visits"),(0,r.kt)("p",null,"Manifold tracks user visits with tokens, which are tied to both the user\u2019s browser and the instance\u2019s domain."),(0,r.kt)("p",null,"Each user is given two tokens when they first access an instance: a ",(0,r.kt)("strong",{parentName:"p"},"Visitor")," token and a ",(0,r.kt)("strong",{parentName:"p"},"Visit")," token. The former expires after 365 days; the latter after 1 day."),(0,r.kt)("p",null,"Manifold calculates return visits by aggregating, for the set time period, the number of expired ",(0,r.kt)("strong",{parentName:"p"},"Visit")," tokens for all users who have active ",(0,r.kt)("strong",{parentName:"p"},"Visitor")," tokens."),(0,r.kt)("p",null,"There are pitfalls in this approach: Users who change browsers will not be tracked accurately; some users may have browser extensions that prevent tokens from being set, and users who close and open the site multiple times a day (using the same browser) won't be tracked as a return visitor until their ",(0,r.kt)("strong",{parentName:"p"},"Visit")," token expires."),(0,r.kt)("h4",{id:"average-visit"},"Average Visit"),(0,r.kt)("p",null,"Using the hour and minute metric, ",(0,r.kt)("strong",{parentName:"p"},"Average Visit")," captures the average amount of time visitors have spent on an instance. Because visits are tied to the browser, a user with multiple tabs open will be accurately recorded. But a single user who has different browsers open to the site will be tracked as two different visitors with different visit times."),(0,r.kt)("h4",{id:"engagement"},"Engagement"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Engagement")," report displays the percentage of an instance\u2019s visitors who have left an annotation, comment, or highlight on the instance. Those three actions are what Manifold considers engagement."),(0,r.kt)("p",null,"When a visitor engages with the instance, the system records an event and associates it with their visit token."),(0,r.kt)("p",null,"The figure in this report then is calculated by comparing visits in the set time period that have an associated engagement event against the total number of visits in that span."),(0,r.kt)("h4",{id:"followed"},"Followed"),(0,r.kt)("p",null,"This report looks at the number of users in the system who are following projects and provides here a rounded average for the number of projects those users are following."),(0,r.kt)("h4",{id:"site-statistics"},"Site Statistics"),(0,r.kt)("p",null,"The data in the ",(0,r.kt)("strong",{parentName:"p"},"Site Statistics")," report are ",(0,r.kt)("em",{parentName:"p"},"not")," constrained by the set date values. Instead, this section reports the sum total for each listed category: ",(0,r.kt)("strong",{parentName:"p"},"Projects"),", ",(0,r.kt)("strong",{parentName:"p"},"Texts"),", ",(0,r.kt)("strong",{parentName:"p"},"Resources"),", ",(0,r.kt)("strong",{parentName:"p"},"Users"),", ",(0,r.kt)("strong",{parentName:"p"},"Annotations"),", and ",(0,r.kt)("strong",{parentName:"p"},"Comments"),"."),(0,r.kt)("p",null,"Of particular note, the total number of Users corresponds to the number of User listings under the Records menu (see ",(0,r.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users"),"), and the Annotations count ",(0,r.kt)("em",{parentName:"p"},"does not")," include the number Resource Annotations that have been placed in the Reader."),(0,r.kt)("p",null,"Because the system caches some information for performance reasons, the values that appear in this report are accurate to within a day."),(0,r.kt)("h4",{id:"most-viewed-projects"},"Most Viewed Projects"),(0,r.kt)("p",null,"Rendered in an expandable list, the ",(0,r.kt)("strong",{parentName:"p"},"Most Viewed Projects")," report aggregates the total number of times a Project homepage is viewed during the set timespan. The system ",(0,r.kt)("em",{parentName:"p"},"does not")," include views of pages nested within a Project in this report."),(0,r.kt)("p",null,"Each time a visitor lands on a Project\u2019s homepage, the system gives their browser a token associated with the Project. The system calculates the values it displays here by adding together the total number of tokens associated with the project from all the visitors who have accessed it."),(0,r.kt)("p",null,"Data in this report are accurate to within a few moments, and titles in the list link directly to the Analytics view for the respective Project."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"See All")," button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted."),(0,r.kt)("h4",{id:"top-searches"},"Top Searches"),(0,r.kt)("p",null,"Manifold caches the complete content of any search request made from the Manifold frontend. This report returns those results in a list view, ordered by the number of times each search was requested. The displayed counts are accurate to within a few moments."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"See All")," button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted."))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(s&&(s+=" "),s+=t);return s}n.d(t,{Z:function(){return s}})}}]);