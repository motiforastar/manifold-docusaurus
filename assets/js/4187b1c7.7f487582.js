"use strict";(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9644],{15101:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,defaultImageFormats:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=i(74848),s=i(28453),o=i(45321);const a={id:"theme_settings",title:"Theme Settings",sidebar_label:"Theme Settings"},r=void 0,d={id:"administering/configuring/theme_settings",title:"Theme Settings",description:"The fields discussed in this section can be accessed from the Manifold backend by selecting Settings from the main menu and then Theme in the submenu.",source:"@site/docs/administering/configuring/theme_settings.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/theme_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/theme_settings",draft:!1,unlisted:!1,editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/theme_settings.md",tags:[],version:"current",frontMatter:{id:"theme_settings",title:"Theme Settings",sidebar_label:"Theme Settings"},sidebar:"docs",previous:{title:"Properties",permalink:"/manifold-docusaurus/docs/administering/configuring/properties"},next:{title:"Integration Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings"}},l={},c="GIF, JPEG, JPG, PNG",h=[{value:"Branding",id:"branding",level:2},{value:"Website URL",id:"website-url",level:3},{value:"Header Logo",id:"header-logo",level:3},{value:"Mobile Header Logo",id:"mobile-header-logo",level:3},{value:"Footer Logo",id:"footer-logo",level:3},{value:"Favicon",id:"favicon",level:3},{value:"Logo Styles",id:"logo-styles",level:3},{value:"Header Navigation Offset",id:"header-navigation-offset",level:3},{value:"Accent Color",id:"accent-color",level:3},{value:"Header Colors",id:"header-colors",level:3},{value:"Header Foreground Color",id:"header-foreground-color",level:4},{value:"Header Foreground Active Color",id:"header-foreground-active-color",level:4},{value:"Header Background Color",id:"header-background-color",level:4},{value:"Typography",id:"typography",level:2},{value:"Typekit ID",id:"typekit-id",level:3},{value:"Custom Fonts",id:"custom-fonts",level:3},{value:"Top Bar",id:"top-bar",level:2},{value:"Text",id:"text",level:3},{value:"Color",id:"color",level:3},{value:"URL",id:"url",level:3},{value:"Top Bar Display Mode",id:"top-bar-display-mode",level:3},{value:"Content",id:"content",level:2},{value:"Signup",id:"signup",level:3},{value:"Account Data",id:"account-data",level:3},{value:"Cookies",id:"cookies",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"location",children:[(0,n.jsxs)(t.p,{children:["The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,n.jsx)(t.strong,{children:"Settings"})," from the main menu and then ",(0,n.jsx)(t.strong,{children:"Theme"})," in the submenu."]}),(0,n.jsxs)(t.p,{children:["Only users logged in with ",(0,n.jsx)(t.strong,{children:"Admin"})," credentials can access this view."]})]}),"\n",(0,n.jsx)(t.h2,{id:"branding",children:"Branding"}),"\n",(0,n.jsx)(t.p,{children:"Manifold allows you to adjust the logos and colors of your instance as a means to match your existing visual identity on the web."}),"\n",(0,n.jsx)(t.p,{children:"The options described in this section globally affect your instance. More localized opportunities for branding are possible within individual Projects, Project Collections, Pages, and Features."}),"\n",(0,n.jsx)(t.h3,{id:"website-url",children:"Website URL"}),"\n",(0,n.jsx)(t.p,{children:"This field works in concert with the Footer Logo described below. When a URL is entered here, the Footer Logo opens a new browser tab to that location. If this field is left blank, the Footer Logo will render as a static graphic."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"When there is no Footer Logo present, the URL described here will have no effect."})}),"\n",(0,n.jsx)(t.h3,{id:"header-logo",children:"Header Logo"}),"\n",(0,n.jsx)(t.p,{children:"This field is intended to capture your primary logo or brand mark. The image saved here replaces the default Manifold icon that appears on the left side of the Manifold Header."}),"\n",(0,n.jsx)(o.A,{title:"Header Logo Specs",items:[{key:"Width",value:"flexible"},{key:"Max-Height",value:"60px"},{key:"Format",value:c}]}),"\n",(0,n.jsx)(t.h3,{id:"mobile-header-logo",children:"Mobile Header Logo"}),"\n",(0,n.jsx)(t.p,{children:"The logo saved to this space serves the same function as the Header Logo; in this case, however, it is expected to be formatted for viewing on mobile devices and systems with smaller screens."}),"\n",(0,n.jsx)(t.p,{children:"When a reader\u2019s viewport is less than 760 px wide, the image saved here will replace the Header Logo in the Manifold Header."}),"\n",(0,n.jsx)(o.A,{title:"Mobile Header Logo Specs",items:[{key:"Max-Width",value:"175px"},{key:"Max-Height",value:"26px"},{key:"Format",value:c}]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Mobile Logos are best prepared as graphic-only elements, without text, in a 1:1 ratio, though Manifold does not restrict files to those recommendations."})}),"\n",(0,n.jsx)(t.h3,{id:"footer-logo",children:"Footer Logo"}),"\n",(0,n.jsx)(t.p,{children:"The Footer Logo appears on the right side of the Manifold Footer. This logo can replicate the Header Logo or serve as a distinct branding element."}),"\n",(0,n.jsx)(o.A,{title:"Footer Logo Specs",items:[{key:"Max-Width",value:"325px"},{key:"Max-Height",value:"200px"},{key:"Format",value:c}]}),"\n",(0,n.jsx)(t.h3,{id:"favicon",children:"Favicon"}),"\n",(0,n.jsx)(t.p,{children:"The favicon is the square icon that appears in your browser\u2019s title bar or the page\u2019s tab. This icon can mimic that of the Mobile Header Logo or be of its own distinct design."}),"\n",(0,n.jsx)(o.A,{title:"Favicon Specs",items:[{key:"Dimensions",value:"1:1"},{key:"Format",value:c}]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["We suggest designing your favicon at either 16 \xd7 16 px or 32 \xd7 32 px and seeing which works best. It is important to note that ",(0,n.jsx)(t.strong,{children:"Manifold will crop the favicon to a square."})]})}),"\n",(0,n.jsx)(t.h3,{id:"logo-styles",children:"Logo Styles"}),"\n",(0,n.jsx)(t.p,{children:"You can adjust the placement of the Header Logo by entering a JSON style object in this field. This gives you the ability to visually balance the logo with the navigation elements of the Manifold Header."}),"\n",(0,n.jsxs)(o.A,{title:"Logo Styles Syntax",children:[(0,n.jsx)(t.p,{children:"The instruction should be surrounded by braces, with the parameters enclosed in quote marks and separated by a comma. Units are in pixels, with both positive and negative values accepted."}),(0,n.jsxs)(t.p,{children:["For example,\xa0",(0,n.jsx)(t.code,{children:'{"left": 100, "top": 100}'}),"\xa0would push the logo 100 pixels to the right and 100 pixels down from its default location in the header."]})]}),"\n",(0,n.jsx)(t.h3,{id:"header-navigation-offset",children:"Header Navigation Offset"}),"\n",(0,n.jsx)(t.p,{children:"The Manifold header comprises the Header Logo and a series of navigational elements, beginning with the home link and continuing toward the right through the user avatar."}),"\n",(0,n.jsx)(t.p,{children:"Those nav elements all maintain the same vertical position. By entering a numeric value in this field, you can adjust how close or far away they are from the top of the page."}),"\n",(0,n.jsx)(t.p,{children:"This control is meant to provide you with another means to adjust the visual balance of the items contained in the Header."}),"\n",(0,n.jsx)(o.A,{title:"Header Navigation Offset Syntax",children:(0,n.jsxs)(t.p,{children:["An entry of\xa0",(0,n.jsx)(t.code,{children:"5"}),"\xa0will move the nav elements down five pixels. Entering\xa0",(0,n.jsx)(t.code,{children:"-5"})," will move them them up five pixels from their default position."]})}),"\n",(0,n.jsx)(t.h3,{id:"accent-color",children:"Accent Color"}),"\n",(0,n.jsxs)(t.p,{children:["The Accent Color is your instance\u2019s primary color and the base upon which secondary colors in the application are derived. By default the value is Manifold green: ",(0,n.jsx)(t.code,{children:"#52E3AC"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can override that here and use a color that matches your existing visual identity. When you do so, links, icons, and buttons throughout the instance will change to either match the accent color you input exactly or, for the sake of contrast, be selected by the system to pair well with your choice."}),"\n",(0,n.jsx)(o.A,{title:"Accepted Color Formats",subtitle:"Color values can be supplied in one of the following formats.",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Format"}),(0,n.jsx)(t.th,{children:"Example Input"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CSS Color Keyword"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Red"}),", ",(0,n.jsx)(t.code,{children:"Green"}),", ",(0,n.jsx)(t.code,{children:"Blue"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Hexadecimal"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"#00FF00"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RGB"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"rgb(0,0,255)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RGBA"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"rgba(255, 99, 71, 0.8)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HSL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hsl(0, 100%, 25%)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HSLA"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hsla(9, 100%, 64%, 0.6)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HWB"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hwb(50, 35%, 2%)"})})]})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"header-colors",children:"Header Colors"}),"\n",(0,n.jsx)(t.p,{children:"You can adjust the colors of the links, icons, and background of the Manifold header using the same syntax as the Accent Color, described above."}),"\n",(0,n.jsx)(t.h4,{id:"header-foreground-color",children:"Header Foreground Color"}),"\n",(0,n.jsxs)(t.p,{children:["The colors of the links and icons in the Header display the color assigned here. By default they will render as light gray with the value ",(0,n.jsx)(t.code,{children:"#696969"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"header-foreground-active-color",children:"Header Foreground Active Color"}),"\n",(0,n.jsxs)(t.p,{children:["The text of the page name (Home, Projects, Following) a reader is currently viewing ",(0,n.jsx)(t.em,{children:"or"})," hovering over displays with the color assigned here. The default is dark gray with the value ",(0,n.jsx)(t.code,{children:"#363636"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If no value is entered here, the hover color for links in the Header defaults to the Accent Color value."})}),"\n",(0,n.jsx)(t.h4,{id:"header-background-color",children:"Header Background Color"}),"\n",(0,n.jsxs)(t.p,{children:["The Header Background defaults to white, ",(0,n.jsx)(t.code,{children:"ffffff"}),". The color saved here will span the entire width of the Header."]}),"\n",(0,n.jsx)(t.h2,{id:"typography",children:"Typography"}),"\n",(0,n.jsx)(t.h3,{id:"typekit-id",children:"Typekit ID"}),"\n",(0,n.jsx)(t.p,{children:"Manifold was designed to employ two specific TypeKit fonts throughout the application:\xa0Freight Text Pro\xa0and\xa0Sofia Pro."}),"\n",(0,n.jsx)(t.p,{children:"If you have a valid Typekit account, select the following options from your Typekit dashboard and then save your Typekit ID to this field."}),"\n",(0,n.jsxs)(o.A,{title:"Typekit Account Settings",children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Font"}),(0,n.jsx)(t.th,{children:"Font Selection"}),(0,n.jsx)(t.th,{children:"Character Set"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Freight Text Pro"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Light"}),", ",(0,n.jsx)(t.code,{children:"Book"}),", ",(0,n.jsx)(t.code,{children:"Book Italic"})]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Default"}),", ",(0,n.jsx)(t.code,{children:"OpenType Features"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sofia Pro"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Light"}),", ",(0,n.jsx)(t.code,{children:"Regular"}),", ",(0,n.jsx)(t.code,{children:"Medium"}),", ",(0,n.jsx)(t.code,{children:"Semi Bold"}),", ",(0,n.jsx)(t.code,{children:"Bold"})]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Default"}),", ",(0,n.jsx)(t.code,{children:"OpentType Features"})]})]})]})]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Diacritics"}),". Selecting ",(0,n.jsx)(t.code,{children:"All Characters"}),"\xa0instead of\xa0",(0,n.jsx)(t.code,{children:"Default"}),"\xa0will make available to Manifold the full range of diacritical characters included in each font. This will cause pages to load slower, but in most cases the effect will be negligible."]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"When this field is left blank, Manifold will default to the open SIL fonts Trueno and Aleo."})}),"\n",(0,n.jsx)(t.h3,{id:"custom-fonts",children:"Custom Fonts"}),"\n",(0,n.jsx)(t.p,{children:"There are currently no means to load custom fonts into the application."}),"\n",(0,n.jsx)(t.h2,{id:"top-bar",children:"Top Bar"}),"\n",(0,n.jsx)(t.p,{children:"The Top Bar is an optional navigation element that sits atop the Header. The Bar is made up of a ribbon that spans the width of the screen and one line of text, all of which functions as a hyperlink. You can configure the Bar to display generally throughout your instance, for only select Projects, or for those Projects configured for Standalone Mode."}),"\n",(0,n.jsx)(t.p,{children:"You can use the Top Bar to point readers to a policy page, a Project Collection, a class syllabus, a sale on your website, your Manifold homepage, site news\u2014wherever you want to call special attention."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The Top Bar won't display unless both the text and URL are provided."})}),"\n",(0,n.jsx)(t.h3,{id:"text",children:"Text"}),"\n",(0,n.jsxs)(t.p,{children:["What text you enter here will serve as the default Top Bar message for your instance. This text can be altered on a Project-by-Project basis in cases where this general notice may not suit. See the ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/backend/projects",children:"Project settings"})," page for more."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This field is\xa0",(0,n.jsx)(t.em,{children:"not"}),"\xa0Markdown/HTML enabled and only accepts one line of text."]})}),"\n",(0,n.jsx)(t.h3,{id:"color",children:"Color"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize the color of the Top Bar using the same syntax described above for the ",(0,n.jsx)(t.code,{children:"Accent Color"}),": CSS color keyword, Hexadecimal, RGB, RGBA, HSL, HSLA, or HWB. When left blank the color will revert to the default, Manifold green: ",(0,n.jsx)(t.code,{children:"#H2E3AC"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Unlike the text, the Top Bar's color value ",(0,n.jsx)(t.em,{children:"cannot"})," be adjusted for individual projects."]})}),"\n",(0,n.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(t.p,{children:"The Top Bar is meant to function as a hyperlink. The URL you enter here will serve as the target link for any reader who clicks on the Bar."}),"\n",(0,n.jsx)(t.p,{children:"Like the Top Bar text, the URL entered here can be adjusted on a per-Project basis."}),"\n",(0,n.jsx)(t.h3,{id:"top-bar-display-mode",children:"Top Bar Display Mode"}),"\n",(0,n.jsx)(t.p,{children:"This dropdown is where you configure if and where the Top Bar will display on your instance."}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Disabled"})," state the Top Bar will not display. However you can override this setting and set the Top Bar to appear for individual projects."]}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.strong,{children:"Always Visible"})," is selected, so long as ",(0,n.jsx)(t.em,{children:"both"})," the text and URL have been provided, the Top Bar will display throughout your instance. Project-level Top Bar settings will override the settings entered here."]}),"\n",(0,n.jsxs)(t.p,{children:["The Top Bar will appear on just those projects that are enabled for\xa0",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/backend/projects",children:"Standalone Mode"})," when ",(0,n.jsx)(t.strong,{children:"Only Visible in Standalone Mode"})," is chosen. Project-level overrides are still possible with this setting selected."]}),"\n",(0,n.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,n.jsxs)(t.p,{children:["Manifold displays information about what information it collects from users when they first come to an instance (or in fresh sessions) and on the site\u2019s ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/using/privacy_settings",children:"Privacy page"}),". From this view you can adjust the copy the system displays in those views to better match the tone of your instance or to provide additional context."]}),"\n",(0,n.jsx)(t.h3,{id:"signup",children:"Signup"}),"\n",(0,n.jsxs)(t.p,{children:["The first three fields in this section provide the means to adust the body text that appears in the Manifold account signup modal, which displays for users who select ",(0,n.jsx)(t.code,{children:"Need to sign up?"})," from the ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/using/your_account",children:"Log In screen"}),". That view can also be directly accessed at ",(0,n.jsx)(t.code,{children:"https://{instance-domain}/signup"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"These fields are plain-text only; none of them accepts Markdown syntax. The format is also somewhat rigid, with a heading and two paragraphs expected."}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Signup Terms and Conditions View Header"}),(0,n.jsx)("dd",{children:"This is the heading for the section. The system default reads, \u201cFirst things first...\u201d."}),(0,n.jsx)("dt",{children:"Signup Terms and Conditions View First Paragraph"}),(0,n.jsx)("dd",{children:"Our approach is to use this space to briefly detail what information the system collects. Some instances may prefer to provide more information to their users. The system default reads, \u201cWhen you create an account, we will collect and store your name and email address for account management purposes.\u201d"}),(0,n.jsx)("dt",{children:"Signup Terms and Conditions View Second Paragraph"}),(0,n.jsxs)("dd",{children:["The final paragraph displayed on the signup screen discusses various user interactions and how they are stored. The configuration settings mentioned in the last sentence refer to whether an instance has its ",(0,n.jsx)("a",{href:"/manifold-docusaurus/docs/administering/configuring/properties#disable-internal-analytics",children:"internal analytics enabled"}),". The system default reads, \u201cThis site will also store the annotations and highlights you create on texts, and it will keep track of content that you've starred. Depending on its configuration, this site may store anonymous data on how the site is being used.\u201d"]})]}),"\n",(0,n.jsx)(t.p,{children:"The frontend view where this information displays also includes a checkbox for users to confirm that in creating an account on your instance they are also agreeing to your privacy policy and terms and conditions, with links to each of those pages on your instance."}),"\n",(0,n.jsxs)(t.p,{children:["The content of your privacy policy and terms and conditions can be adjusted through the ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/backend/pages",children:"Pages view in the Records section"})," of the Manifold backend."]}),"\n",(0,n.jsx)(t.h3,{id:"account-data",children:"Account Data"}),"\n",(0,n.jsxs)(t.p,{children:["The second two fields under the Content header concern user account data and display on the site\u2019s Data Use page, accessible from a user\u2019s ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/using/privacy_settings",children:"Privacy settings page"})," or directly from: ",(0,n.jsx)(t.code,{children:"https://{instance-domain}/data-use"}),"."]}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Account Data Use Header"}),(0,n.jsx)("dd",{children:"Text entered into this field serves as the heading for this section and is meant to convey to users what data Manifold collects from them. The system default reads \u201cWhat data does Manifold store about me?\u201d"}),(0,n.jsx)("dt",{children:"Account Data Use Copy (Markdown)"}),(0,n.jsx)("dd",{children:"By default the system describes the information it collects from users in three sections, each with their own heading. Here you can adjust the order and form of that content to better meet the needs of your users, either in expanding on this information or stressing certain elements that may be of particular interest. Currently the base text reads as follows: \u201cManifold stores anonymous data about what pages users access and how much time they spend on those pages. There is no personally identifiable information stored in relation to usage data. When you create a highlight, annotate a text, or write a comment, Manifold stores it in the database. Manifold stores basic information about each reading group, the content that has been collected in the group, and the group's members.\u201d This text box, as the field label suggests, does accept Markdown syntax."})]}),"\n",(0,n.jsx)(t.h3,{id:"cookies",children:"Cookies"}),"\n",(0,n.jsxs)(t.p,{children:["On a user\u2019s first visit to an instance\u2014or on a fresh load\u2014Manifold will provide options for which cookies, if any, the user is willing to accept. The details of those options, discussed in the ",(0,n.jsx)(t.a,{href:"/manifold-docusaurus/docs/using/privacy_settings",children:"Privacy Settings section of our documentation"}),", appear to users in a ribbon at the bottom of the instance\u2019s homepage or a directly-accessed project landing page."]}),"\n",(0,n.jsx)(t.p,{children:"The last two fields in this section allow you to adjust the text that displays in that ribbon. This gives you the means to add context for your readers to better understand the choices the system is offering."}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{children:"Cookies Banner Header"}),(0,n.jsx)("dd",{children:"This field is used to adjust the heading for the ribbon, which by default reads as \u201cManifold uses cookies.\u201d"}),(0,n.jsx)("dt",{children:"Cookies Banner Body (Markdown)"}),(0,n.jsxs)("dd",{children:["This field ",(0,n.jsx)("em",{children:"briefly"})," describes how Manifold uses cookies for the purpose of analytics. We suggest keeping the descriptions in this space short. For users who are unsure if they are okay with such use, they can use the ",(0,n.jsx)("b",{children:"Settings"})," button to configure or decline all cookies. The link to the Privacy Settings page in the default description takes users to their own specific user settings, accessible from the User dropdown in the Manifold top menu; it is not meant to link to the instance\u2019s privacy policy. If you feel additional information is necessary, you could build it into the Data Use page (discussed in the previous section), which a user\u2019s Privacy Settings page links to. The default message for this fields reads in full, \u201cWe use cookies to analyze our traffic. Please decide if you are willing to accept cookies from our website. You can change this setting anytime in Privacy Settings.\u201d"]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},45321:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(34164);const s={specContainer:"specContainer_R31d",specTitleWrapper:"specTitleWrapper_BDYd",specTitle:"specTitle_XtzR",specSubtitle:"specSubtitle_aF9x",specContent:"specContent_OrJb",specTable:"specTable_ebTy"};var o=i(74848);const a=e=>{let{title:t,subtitle:i,items:a,children:r}=e;return(0,o.jsxs)("div",{className:(0,n.A)(s.specContainer),children:[t&&(0,o.jsxs)("div",{className:(0,n.A)(s.specTitleWrapper),children:[(0,o.jsx)("span",{className:(0,n.A)(s.specTitle),children:t}),i&&(0,o.jsx)("span",{className:(0,n.A)(s.specSubtitle),children:i})]}),a&&(0,o.jsx)("div",{className:(0,n.A)(s.specTable),children:(0,o.jsx)("table",{width:"100%",children:(0,o.jsx)("tbody",{children:a.map(((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:(0,n.A)(s.specKey),children:e.key}),(0,o.jsx)("td",{className:(0,n.A)(s.specValue),children:e.value})]},e.key)))})})}),r?(0,o.jsx)("div",{className:(0,n.A)(s.specContent),children:r}):null]})}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);