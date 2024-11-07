(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[8200],{67088:(e,r,t)=>{const s=t(86284),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=t(93590),{safeRe:a,t:o}=t(50090),E=t(99055),{compareIdentifiers:l}=t(24807);class u{constructor(e,r){if(r=E(r),e instanceof u){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);s("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const t=e.trim().match(r.loose?a[o.LOOSE]:a[o.FULL]);if(!t)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const r=+e;if(r>=0&&r<i)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const t=this.prerelease[r],n=e.prerelease[r];if(s("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return l(t,n)}while(++r)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let r=0;do{const t=this.build[r],n=e.build[r];if(s("build compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return l(t,n)}while(++r)}inc(e,r,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,t),this.inc("pre",r,t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r,t),this.inc("pre",r,t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{const e=Number(t)?1:0;if(!r&&!1===t)throw new Error("invalid increment argument: identifier is empty");if(0===this.prerelease.length)this.prerelease=[e];else{let s=this.prerelease.length;for(;--s>=0;)"number"==typeof this.prerelease[s]&&(this.prerelease[s]++,s=-2);if(-1===s){if(r===this.prerelease.join(".")&&!1===t)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(r){let s=[r,e];!1===t&&(s=[r]),0===l(this.prerelease[0],r)?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=u},38313:(e,r,t)=>{const s=t(67088);e.exports=(e,r,t)=>{const n=new s(e,t),i=new s(r,t);return n.compare(i)||n.compareBuild(i)}},87507:(e,r,t)=>{const s=t(38313);e.exports=(e,r)=>e.sort(((e,t)=>s(e,t,r)))},93590:e=>{const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:r,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},86284:e=>{const r="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r},24807:e=>{const r=/^[0-9]+$/,t=(e,t)=>{const s=r.test(e),n=r.test(t);return s&&n&&(e=+e,t=+t),e===t?0:s&&!n?-1:n&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:t,rcompareIdentifiers:(e,r)=>t(r,e)}},99055:e=>{const r=Object.freeze({loose:!0}),t=Object.freeze({});e.exports=e=>e?"object"!=typeof e?r:e:t},50090:(e,r,t)=>{const{MAX_SAFE_COMPONENT_LENGTH:s,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=t(93590),a=t(86284),o=(r=e.exports={}).re=[],E=r.safeRe=[],l=r.src=[],u=r.t={};let c=0;const h="[a-zA-Z0-9-]",I=[["\\s",1],["\\d",i],[h,n]],p=(e,r,t)=>{const s=(e=>{for(const[r,t]of I)e=e.split(`${r}*`).join(`${r}{0,${t}}`).split(`${r}+`).join(`${r}{1,${t}}`);return e})(r),n=c++;a(e,n,r),u[e]=n,l[n]=r,o[n]=new RegExp(r,t?"g":void 0),E[n]=new RegExp(s,t?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","\\d+"),p("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),p("MAINVERSION",`(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${l[u.NUMERICIDENTIFIER]}|${l[u.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${l[u.NUMERICIDENTIFIERLOOSE]}|${l[u.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER",`${h}+`),p("BUILD",`(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`),p("FULL",`^${l[u.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`),p("LOOSE",`^${l[u.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${l[u.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`),p("XRANGE",`^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`),p("COERCEPLAIN",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`),p("COERCE",`${l[u.COERCEPLAIN]}(?:$|[^\\d])`),p("COERCEFULL",l[u.COERCEPLAIN]+`(?:${l[u.PRERELEASE]})?`+`(?:${l[u.BUILD]})?(?:$|[^\\d])`),p("COERCERTL",l[u.COERCE],!0),p("COERCERTLFULL",l[u.COERCEFULL],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${l[u.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",p("TILDE",`^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${l[u.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",p("CARET",`^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},19365:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{"use strict";t.d(r,{A:()=>$});var s=t(96540),n=t(34164),i=t(23104),a=t(56347),o=t(205),E=t(57485),l=t(31682),u=t(70679);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function I(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,E.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function N(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=h(e),[a,E]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!I({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[l,c]=p({queryString:t,groupId:n}),[N,R]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,u.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),L=(()=>{const e=l??N;return I({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{L&&E(L)}),[L]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!I({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);E(e),c(e),R(e)}),[c,R,i]),tabValues:i}}var R=t(92303);const L={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var d=t(74848);function A(e){let{className:r,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const E=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const r=e.currentTarget,t=E.indexOf(r),n=o[t].value;n!==s&&(l(r),a(n))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}r?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>E.push(e),onKeyDown:c,onClick:u,...i,className:(0,n.A)("tabs__item",L.tabItem,i?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function f(e){let{lazy:r,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function m(e){const r=N(e);return(0,d.jsxs)("div",{className:(0,n.A)("tabs-container",L.tabList),children:[(0,d.jsx)(A,{...r,...e}),(0,d.jsx)(f,{...r,...e})]})}function $(e){const r=(0,R.A)();return(0,d.jsx)(m,{...e,children:c(e.children)},String(r))}}}]);