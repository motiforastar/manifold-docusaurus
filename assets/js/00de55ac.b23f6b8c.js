"use strict";(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9208],{46547:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(74848),o=i(28453);const r={slug:"thisweekinmanifoldprojectdetailimprovements",title:"This Week in Manifold: Project Detail Improvements"},s=void 0,a={permalink:"/manifold-docusaurus/blog/thisweekinmanifoldprojectdetailimprovements",source:"@site/blog/2016-10-24-this-week-in-manifold-project-detail-improvements.md",title:"This Week in Manifold: Project Detail Improvements",description:"Welcome to a new regular feature on the Building Manifold blog: \"This Week in Manifold.\" As we move toward a beta version of Manifold (scheduled for March, 2017), I'll be releasing a Manifold build to our staging server every Friday afternoon. Each release will be accompanied by a blog post explaining what the development team accomplished in the sprint leading up to the release. This post comes a few days late. When the Internet broke last week, our ability to release builds from Github was impacted, which delayed things a bit. I expect we'll be back on schedule this week, with our next build going out on Friday, October 28.",date:"2016-10-24T00:00:00.000Z",tags:[],readingTime:3.49,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"thisweekinmanifoldprojectdetailimprovements",title:"This Week in Manifold: Project Detail Improvements"},unlisted:!1,prevItem:{title:"Joining Manifold",permalink:"/manifold-docusaurus/blog/joiningmanifold"},nextItem:{title:"Starting Points with the Manifold Digital Projects Editor",permalink:"/manifold-docusaurus/blog/startingpointswiththemanifolddigitalprojectseditor"}},l={authorsImageUrls:[]},d=[{value:"Refactoring",id:"refactoring",level:2},{value:"Features and Improvements",id:"features-and-improvements",level:2},{value:"Tooling and Libraries",id:"tooling-and-libraries",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:['Welcome to a new regular feature on the Building Manifold blog: "This Week in Manifold." As we move toward a beta version of Manifold (scheduled for March, 2017), I\'ll be releasing a Manifold build to our staging server every Friday afternoon. Each release will be accompanied by a blog post explaining what the development team accomplished in the sprint leading up to the release. This post comes a few days late. When the ',(0,n.jsx)(t.a,{href:"http://www.nytimes.com/2016/10/22/business/internet-problems-attack.html?_r=0",children:"Internet broke last week"}),", our ability to release builds from Github was impacted, which delayed things a bit. I expect we'll be back on schedule this week, with our next build going out on Friday, October 28."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Nota Bene"}),": Our staging instance of Manifold is currently on a private server. However, we'll be opening it up to the public in a few weeks, as soon as we're able to load an initial set of texts with open access rights onto the platform. Once that happens, it will be possible for readers of this blog to check out our weekly builds for themselves. Our last development sprint focused on tightening up existing code, mainly around the project detail view. Notable changes included the following:"]}),"\n",(0,n.jsx)(t.h2,{id:"refactoring",children:"Refactoring"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Refactored login overlay CSS for improved reusability"}),"\n",(0,n.jsxs)(t.li,{children:["Refactored the authentication ",(0,n.jsx)(t.a,{href:"http://redux.js.org/docs/basics/Reducers.html",children:"reducer"})]}),"\n",(0,n.jsx)(t.li,{children:"Significantly reorganized client frontend components for easier readability and reusability"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"features-and-improvements",children:"Features and Improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Exposed "published" boolean attribute on Texts in the API'}),"\n",(0,n.jsx)(t.li,{children:"Stubbed markup and styles for the resource collection detail component"}),"\n",(0,n.jsx)(t.li,{children:"Stubbed markup and styles for the collection list component"}),"\n",(0,n.jsx)(t.li,{children:"Stubbed markup and styles for the resource list component"}),"\n",(0,n.jsx)(t.li,{children:"Improved client application exception handling"}),"\n",(0,n.jsxs)(t.li,{children:["Upgraded ",(0,n.jsx)(t.a,{href:"https://facebook.github.io/react/",children:"React"})," to ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react/tree/v15.4.0-rc.3",children:"15.4.0-RC3"})]}),"\n",(0,n.jsx)(t.li,{children:"Implemented project importer that imports projects, texts, and resources from json manifest"}),"\n",(0,n.jsx)(t.li,{children:"Expanded project API to expose all data shown in the comps"}),"\n",(0,n.jsx)(t.li,{children:"Adjusted component to show project creator names below project thumbnails"}),"\n",(0,n.jsx)(t.li,{children:"Adjusted component to show actual project dates below project thumbnails"}),"\n",(0,n.jsx)(t.li,{children:"Stubbed markup and styles for project events (on project detail, and stand-alone), aka activity"}),"\n",(0,n.jsx)(t.li,{children:"Added mobile styles for event lists"}),"\n",(0,n.jsxs)(t.li,{children:["Added metadata ",(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/9.4/static/datatype-json.html",children:"JSONB field type"})," to projects and expose via API"]}),"\n",(0,n.jsx)(t.li,{children:"Implemented actual project metadata in the project detail component"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tooling-and-libraries",children:"Tooling and Libraries"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Switched Manifold client testing framework to ",(0,n.jsx)(t.a,{href:"https://facebook.github.io/jest/",children:"Jest"})]}),"\n",(0,n.jsx)(t.li,{children:"Updated all client NPM modules"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",children:"DRY'd"})," up client application ",(0,n.jsx)(t.a,{href:"https://webpack.github.io/",children:"Webpack"})," configuration"]}),"\n",(0,n.jsx)(t.li,{children:"Reorganized and improved build and server scripts for client application"}),"\n",(0,n.jsxs)(t.li,{children:["Improved API application ",(0,n.jsx)(t.a,{href:"http://puma.io/",children:"Puma"})," configuration"]}),"\n",(0,n.jsxs)(t.li,{children:["Switched client from ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/",children:"NPM"})," to ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn"})," for deterministic dependency resolution (and speed)"]}),"\n",(0,n.jsxs)(t.li,{children:["Removed ",(0,n.jsx)(t.a,{href:"https://github.com/gaearon/redux-devtools",children:"redux-devtools component"}),"; replace with ",(0,n.jsx)(t.a,{href:"http://zalmoxisus.github.io/redux-devtools-extension/",children:"similar Chrome extension"})]}),"\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.a,{href:"http://momentjs.com/",children:"moment"})," module for handling dates and times"]}),"\n",(0,n.jsx)(t.li,{children:"Updated global and API Rubies to version 2.3.1"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Corrected login overlay view state"}),"\n",(0,n.jsx)(t.li,{children:"Removed randomness from stubbed resource components (breaks universal rendering)"}),"\n",(0,n.jsx)(t.li,{children:'Added code to prevent client application from requesting "page" entities on every route change'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In addition to these changes, the Manifold team also touched base last week during our recurring (bi-monthly) meeting. The group discussed text and project metadata requirements, the overall project roadmap, the agenda for our in-person Portland meeting in mid-November, among other things. Joining that call for the first time was ",(0,n.jsx)(t.a,{href:"https://twitter.com/jojokarlin",children:"Jojo Karlin"}),", a Doctoral student in English at the CUNY Graduate Center who is working with ",(0,n.jsx)(t.a,{href:"https://twitter.com/mkgold",children:"Matt Gold"})," on this project. You'll be hearing more from Jojo in the coming weeks as she works to share Manifold updates and progress via this blog."]}),"\n",(0,n.jsxs)(t.p,{children:["This week's development sprint will be focused on a few main goals. ",(0,n.jsx)(t.a,{href:"https://twitter.com/naomiyaki",children:"Naomi"})," will be finishing up markup and UX for the resource collection slideshow. ",(0,n.jsx)(t.a,{href:"https://twitter.com/zdavis",children:"Zach"})," will be focused on the initial modeling of project resources and project resource collections in the API, and wiring that data up to the client. He'll also be improving the project importer\u2014delivered in last week's release\u2014to pull in sample resources for our demonstration projects and texts."]}),"\n",(0,n.jsxs)(t.p,{children:["All work and no play makes for dull developers, and so I will leave you with a screenshot of Manifold's new error screen (only visible in development mode), inspired by the first computer Zach ever owned, the illustrious ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Commodore_64",children:"Commodore 64"}),"."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:i(45974).A,alt:""}),(0,n.jsx)("figcaption",{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},45974:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Screen-Shot-2016-10-24-at-6.33.08-AM-1024x766-4f3792c96915dea1a2d7e535f9b71bda.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);