"use strict";(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[3611],{12788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(74848),i=n(28453);const a={id:"ingestion_settings",title:"Ingestion Settings",sidebar_label:"Ingestion Settings"},o=void 0,r={id:"administering/configuring/ingestion_settings",title:"Ingestion Settings",description:"The fields discussed in this section can be accessed from the Manifold backend by selecting Settings from the main menu and then Ingestion Settings in the submenu.",source:"@site/docs/administering/configuring/ingestion_settings.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/ingestion_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/ingestion_settings",draft:!1,unlisted:!1,editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/ingestion_settings.md",tags:[],version:"current",frontMatter:{id:"ingestion_settings",title:"Ingestion Settings",sidebar_label:"Ingestion Settings"},sidebar:"docs",previous:{title:"Integration Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings"},next:{title:"Manage Subjects",permalink:"/manifold-docusaurus/docs/administering/configuring/project_subjects"}},l={},d=[{value:"Global Ingestion Styles",id:"global-ingestion-styles",level:2},{value:"Mammoth Style Map",id:"mammoth-style-map",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"location",children:[(0,s.jsxs)(t.p,{children:["The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,s.jsx)(t.strong,{children:"Settings"})," from the main menu and then ",(0,s.jsx)(t.strong,{children:"Ingestion Settings"})," in the submenu."]}),(0,s.jsxs)(t.p,{children:["Only users logged in with ",(0,s.jsx)(t.strong,{children:"Admin"})," credentials can access this view."]})]}),"\n",(0,s.jsx)(t.h2,{id:"global-ingestion-styles",children:"Global Ingestion Styles"}),"\n",(0,s.jsxs)(t.p,{children:["Styles entered into this code editor are applied to each new Text at the time of ingestion, regardless of the Text\u2019s source format, and saved to the resulting Text record as a User Created stylesheet labelled \u201cGlobal Styles\u201d (see ",(0,s.jsx)(t.a,{href:"/manifold-docusaurus/docs/backend/texts#styles",children:"Styles"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"The \u201cGlobal\u201d stylesheets that are associated with a Text are updated during the reingest process to match the values saved here. Additional User Created stylesheets saved to Text records maintain their same relative order of precedence and are applied last, unless they are manually reordered."}),"\n",(0,s.jsx)(t.h2,{id:"mammoth-style-map",children:"Mammoth Style Map"}),"\n",(0,s.jsxs)(t.p,{children:["During Text ingestion, Manifold relies on a javascript library called ",(0,s.jsx)(t.a,{href:"https://github.com/mwilliamson/mammoth.js",children:"Mammoth"})," to convert Word\u2019s DOCX format to HTML, which the system renders in the Reader. By default, the conversion process transforms headings, character styles, tables, lists, notes, and links that have been styled using Word\u2019s built-in Styles panel to basic HTML."]}),"\n",(0,s.jsxs)(t.p,{children:["Using this code editor, it is possible to refine those transformations and map custom Word styles to HTML class attributes, which will then be styled according to the rules defined by the ",(0,s.jsx)(t.strong,{children:"Global Ingestion Styles"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s consider a simple example of a Word document that uses the paragraph style ",(0,s.jsx)(t.code,{children:"paft"})," to describe paragraphs that follow headings and the character style ",(0,s.jsx)(t.code,{children:"tnw"})," to refer to proper titles or names of works. The ",(0,s.jsx)(t.strong,{children:"Mammoth Style Map"})," would include these two lines:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"p[style-name='paft'] => p.paft\nr[style-name='tnw'] => span.tnw\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"p"})," and ",(0,s.jsx)(t.code,{children:"r"})," at the start of those lines refer to paragraph and character styles (or \u201druns\u201d), respectively. They are followed by the name of the style as it is in the Word document, and then by the HTML attribute they are to be mapped, in this case a paragraph with a class value of ",(0,s.jsx)(t.code,{children:"paft"})," and a span with a class of ",(0,s.jsx)(t.code,{children:"tnw"}),", resulting in HTML that would look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<p class="paft">John Wyndam begins <span class="tnw">The Day of \nthe Triffids</span> perfectly: \u201cWhen a day that you happen to \nknow is Wednesday starts off by sounding like Sunday, there \nis something seriously wrong somewhere.\u201d</p>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With style rules for ",(0,s.jsx)(t.code,{children:".paft"})," and ",(0,s.jsx)(t.code,{children:".tnw"})," in the ",(0,s.jsx)(t.strong,{children:"Global Ingestion Styles"}),", the rendering of these elements can be specifically controlled."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/mammoth#writing-style-maps",children:"Mammoth\u2019s documentation"})," for more detailed information about the formatting and structure of Style Maps."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);