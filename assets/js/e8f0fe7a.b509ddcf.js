(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[5859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6156:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var a=n(4034),r=n(9973),l=(n(7294),n(3905)),o={id:"local_development",title:"Developing Locally",sidebar_label:"Developing Locally"},i={unversionedId:"developers/local_development",id:"developers/local_development",isDocsHomePage:!1,title:"Developing Locally",description:"Your first step toward contributing to Manifold should be to setup a development environment. Manifold requires a number of services for it to run correctly, so getting setup will require a little bit of work.",source:"@site/docs/developers/local_development.md",sourceDirName:"developers",slug:"/developers/local_development",permalink:"/manifold-docusaurus/docs/developers/local_development",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/developers/local_development.md",version:"current",sidebar_label:"Developing Locally",frontMatter:{id:"local_development",title:"Developing Locally",sidebar_label:"Developing Locally"},sidebar:"docs",previous:{title:"Metadata",permalink:"/manifold-docusaurus/docs/backend/metadata"},next:{title:"API",permalink:"/manifold-docusaurus/docs/developers/api"}},s=[{value:"Step 1: Install dependencies",id:"step-1-install-dependencies",children:[{value:"Install Homebrew and XCode command line tools",id:"install-homebrew-and-xcode-command-line-tools",children:[]},{value:"Update your PATH variable",id:"update-your-path-variable",children:[]},{value:"Install rbenv and Ruby",id:"install-rbenv-and-ruby",children:[]},{value:"Install nodenv, Node, and yarn",id:"install-nodenv-node-and-yarn",children:[]},{value:"Install Postgres",id:"install-postgres",children:[]},{value:"Install Redis",id:"install-redis",children:[]},{value:"Ensure Java is present",id:"ensure-java-is-present",children:[]},{value:"Install additional libraries",id:"install-additional-libraries",children:[]}]},{value:"Step 2: Clone Manifold source",id:"step-2-clone-manifold-source",children:[]},{value:"Step 3: Install API dependencies and setup the database.",id:"step-3-install-api-dependencies-and-setup-the-database",children:[]},{value:"Step 4: Setup .env file.",id:"step-4-setup-env-file",children:[]},{value:"Step 5: Create the database.",id:"step-5-create-the-database",children:[]},{value:"Step 6: Install client dependencies",id:"step-6-install-client-dependencies",children:[]},{value:"Step 7: Install ElasticSearch",id:"step-7-install-elasticsearch",children:[]},{value:"Step 8: Start Manifold",id:"step-8-start-manifold",children:[]},{value:"Step 9: Open Manifold in your browser",id:"step-9-open-manifold-in-your-browser",children:[]},{value:"You did it!",id:"you-did-it",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Your first step toward contributing to Manifold should be to setup a development environment. Manifold requires a number of services for it to run correctly, so getting setup will require a little bit of work."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"These instructions may be a little bit out-of-date, and your mileage may vary. We're hoping to circle back soon to update, and would love a pull request to our documentation with improvements to this page."))),(0,l.kt)("h2",{id:"step-1-install-dependencies"},"Step 1: Install dependencies"),(0,l.kt)("h3",{id:"install-homebrew-and-xcode-command-line-tools"},"Install Homebrew and XCode command line tools"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is by far the easiest way to get the underlying dependencies in place for Manifold. Follow the instructions on the ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew Website")," to install Homebrew. As of January 2020, the command to install Homebrew is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("h3",{id:"update-your-path-variable"},"Update your PATH variable"),(0,l.kt)("p",null,"Manifold relies on a number of binstubs. To simplify development, ensure that ",(0,l.kt)("inlineCode",{parentName:"p"},"./bin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin")," are both in your $PATH."),(0,l.kt)("p",null,"On MacOS 10.15 (Catalina) the default terminal shell was changed form bash to zsh. ",(0,l.kt)("strong",{parentName:"p"},"Zsh and bash are similar, but are not interchangable"),". If you don't already know which shell you are using, this next command will tell you."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"echo $0\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"$0"),' responded with "zsh" then we are going to save our zsh configuration file to a variable called "profile"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"profile=~/.zshrc\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"$0"),' responded with "bash", then we are going to save our bash configuration file to a variable called "profile"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"profile=~/.bash_profile\n")),(0,l.kt)("p",null,"Now we will modify our path using that profile variable we created earlier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"touch $profile\necho 'export PATH=./bin:$PATH' >> $profile\necho 'export PATH=./node_modules/.bin:$PATH' >> $profile\nsource $profile\n")),(0,l.kt)("h3",{id:"install-rbenv-and-ruby"},"Install rbenv and Ruby"),(0,l.kt)("p",null,"Rbenv is a tool for managing the available Ruby versions on your computer. If you prefer .rvm or another mechanism for managing ruby versions, by all means use it, as long as you can get the correct version of Ruby installed."),(0,l.kt)("p",null,"As of January 2020, Manifold runs on Ruby 2.6.3. The version changes relatively frequently, as new versions of Ruby are released. We store the current ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/blob/master/.ruby-version"},"required ruby version")," in a ",(0,l.kt)("inlineCode",{parentName:"p"},".ruby-version")," file in the project root. Manifold should work with version 2.6 or higher."),(0,l.kt)("p",null,"First, install rbenv."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install rbenv\n")),(0,l.kt)("p",null,"Second, adjust your profile so that rbenv is initialized when you open a new terminal session. Follow the directions given from running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rbenv init\n")),(0,l.kt)("p",null,"Third, install Ruby."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source $profile\nrbenv install 2.6.3\n")),(0,l.kt)("h3",{id:"install-nodenv-node-and-yarn"},"Install nodenv, Node, and yarn"),(0,l.kt)("p",null,"We prefer nodenv for running different versions of Node. If you have a preferred means of installing node, go for it."),(0,l.kt)("p",null,"As of January 2020, Manifold runs on Node 12.14.0. The version changes relatively frequently, as new versions of Node are released. We store the current ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/blob/master/.node-version"},"required node version")," in a ",(0,l.kt)("inlineCode",{parentName:"p"},".node-version")," file in the project root."),(0,l.kt)("p",null,"The Manifold development team uses ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"Yarn")," rather than ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," to manage javascript dependencies."),(0,l.kt)("p",null,"First, install nodenv."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install nodenv\n")),(0,l.kt)("p",null,"Second, adjust your profile so that nodenv is initialized when you open a new terminal session. Follow the directions given from running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nodenv init\n")),(0,l.kt)("p",null,"Third, install Node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nodenv install 12.14.0\n")),(0,l.kt)("p",null,"Fourth, install Yarn."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source $profile\nbrew install yarn\n")),(0,l.kt)("h3",{id:"install-postgres"},"Install Postgres"),(0,l.kt)("p",null,"Manifold stores most data in a PotsgreSQL database."),(0,l.kt)("p",null,"As of January 2020, our Manifold packages include Postgres 12.1. This version changes periodically. The current minimum version is recorded in our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/omnibus-manifold/blob/master/config/software/postgresql.rb#L18"},"Omnibus packaging repository"),"."),(0,l.kt)("p",null,"First, install PostgreSQL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install postgres\n")),(0,l.kt)("p",null,"Second, use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-services"},"Homebrew Services")," to run PostgreSQL in the background."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew services start postgresql\n")),(0,l.kt)("h3",{id:"install-redis"},"Install Redis"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis")," is an open source (BSD licensed), in-memory data structure store, used primarily by Manifold as a cache and message broker. Manifold is compatible with Redis v3, v4 and v5."),(0,l.kt)("p",null,"First, install Redis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install redis\n")),(0,l.kt)("p",null,"Second, use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-services"},"Homebrew Services")," to run Redis in the background."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew services start redis\n")),(0,l.kt)("h3",{id:"ensure-java-is-present"},"Ensure Java is present"),(0,l.kt)("p",null,"Java is needed for ElasticSearch. We'll use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Homebrew/homebrew-cask"},"Homebrew Cask")," to install it. You will likely be prompted for your password."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew tap homebrew/cask-versions\nbrew cask install java\n")),(0,l.kt)("h3",{id:"install-additional-libraries"},"Install additional libraries"),(0,l.kt)("p",null,"Manifold uses Imagemagick (or Graphicsmagick) for resizing images. It uses Pandoc for Word document ingestion."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install imagemagick pandoc\n")),(0,l.kt)("h2",{id:"step-2-clone-manifold-source"},"Step 2: Clone Manifold source"),(0,l.kt)("p",null,"At ",(0,l.kt)("a",{parentName:"p",href:"https://castironcoding.com"},"Cast Iron"),", we typically store our projects in a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/src")," directory. For the purposes of these instructions, we'll assume you're doing the same."),(0,l.kt)("p",null,"First, make a directory at ",(0,l.kt)("inlineCode",{parentName:"p"},"/Users/yourUserName/src")," and enter it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p ~/src\ncd ~/src\n")),(0,l.kt)("p",null,"Second, clone the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/manifoldScholar/manifold"},"Manifold source code")," with git and enter the source directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/ManifoldScholar/manifold.git manifold\ncd ~/src/manifold\n")),(0,l.kt)("h2",{id:"step-3-install-api-dependencies-and-setup-the-database"},"Step 3: Install API dependencies and setup the database."),(0,l.kt)("p",null,"Next, install Bundler and Manifold's gem dependencies. There is a Gemfile in the root of the repository, which includes dependencies related to Manifold's tooling. There is also a Gemfile in the ",(0,l.kt)("inlineCode",{parentName:"p"},"api")," directory, which is the root of the Rails application that is Manifold's API backend. You'll need to install both sets of gems."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold\ngem install bundler\nbundle install\ncd ~/src/manifold/api\nbundle install\n")),(0,l.kt)("h2",{id:"step-4-setup-env-file"},"Step 4: Setup .env file."),(0,l.kt)("p",null,"Generate a secret key and store it. You'll add it to the environment file below, where it says ",(0,l.kt)("inlineCode",{parentName:"p"},"ENTER_YOUR_SECRET_KEY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold/api\nrails secret\n")),(0,l.kt)("p",null,"Copy that key to your clipboard. Create a file at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/src/manifold/.env")," with the following contents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DOMAIN=localhost\nAPI_PORT=3020\nAPI_CABLE_PORT=3021\nCLIENT_SERVER_PORT=3010\nCLIENT_URL=http://localhost:3010\nCLIENT_BROWSER_API_URL=http://localhost:3020\nCLIENT_BROWSER_API_CABLE_URL=ws://localhost:3021/cable\nCLIENT_SERVER_API_URL=http://localhost:3020\nCLIENT_SERVER_PROXIES=true\nNODE_ENV=development\nRAILS_ENV=development\nRAILS_SECRET_KEY=ENTER_YOUR_SECRET_KEY\nRAILS_DB_NAME=manifold_development\nELASTICSEARCH_URL=http://127.0.0.1:29200\n")),(0,l.kt)("h2",{id:"step-5-create-the-database"},"Step 5: Create the database."),(0,l.kt)("p",null,"The API is a Rails application, and you'll use standard Rails commands to manage the database. The following commands create the database, loads the schema, and add seed data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold/api\nrails db:create\nrails db:schema:load\nrails db:seed\n")),(0,l.kt)("p",null,"While you're at it, go ahead and create an admin user. Be sure to replace the values in the command below with your email, password, first name, and last name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rails manifold:user:create:admin\\["email@email.com","password","FirstName","LastName"\\]\n')),(0,l.kt)("h2",{id:"step-6-install-client-dependencies"},"Step 6: Install client dependencies"),(0,l.kt)("p",null,"Now it's time to install Manifold's javascript dependencies. There is a package.json file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," directory, which contains Manifold's client application."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold/client\nyarn install\n")),(0,l.kt)("h2",{id:"step-7-install-elasticsearch"},"Step 7: Install ElasticSearch"),(0,l.kt)("p",null,"Manifold includes a command line tool that helps with some development tasks at ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/manifold"),". You can use this tool to install ElasticSearch in the top level ",(0,l.kt)("inlineCode",{parentName:"p"},"services")," folder. As of January 2020, Manifold uses ElasticSearch version 7.5.1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold\nmanifold install elasticsearch\n")),(0,l.kt)("h2",{id:"step-8-start-manifold"},"Step 8: Start Manifold"),(0,l.kt)("p",null,"The first time you start Manifold, it will be a little bit slower than usual. Start all services with the ",(0,l.kt)("inlineCode",{parentName:"p"},"manifold start")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/src/manifold\nmanifold start\n")),(0,l.kt)("h2",{id:"step-9-open-manifold-in-your-browser"},"Step 9: Open Manifold in your browser"),(0,l.kt)("p",null,"Open a web browser and go to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:3010"},"http://localhost:3010"),". If all went according to plan, you can now interact with the instance of Manifold running locally. You should now be able to login to the backend with the user you setup earlier."),(0,l.kt)("h2",{id:"you-did-it"},"You did it!"),(0,l.kt)("p",null,"You should now have a functioning Manifold development environment. We use Webpack for the client application, and changing most files in the client directory will cause assets to be rebuild. We also have hot module reloading in place for the client application, so any changes you make to a component will cause the component to be re-rendered in your browser."),(0,l.kt)("p",null,"Check back soon for our contribution guidelines. In the meantime, if you'd like to contribute code to Manifold, please do so in the form of a pull request to the upstream repository."))}p.isMDXComponent=!0}}]);