"use strict";(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[537],{49448:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var s=i(74848),l=i(28453);const r={id:"local_development",title:"Developing Locally",sidebar_label:"Developing Locally"},o=void 0,t={id:"developers/local_development",title:"Developing Locally",description:"Your first step toward contributing to Manifold should be to setup a development environment. Manifold requires a number of services for it to run correctly, so getting setup will require a little bit of work.",source:"@site/docs/developers/local_development.md",sourceDirName:"developers",slug:"/developers/local_development",permalink:"/manifold-docusaurus/docs/developers/local_development",draft:!1,unlisted:!1,editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/developers/local_development.md",tags:[],version:"current",frontMatter:{id:"local_development",title:"Developing Locally",sidebar_label:"Developing Locally"},sidebar:"docs",previous:{title:"Metadata",permalink:"/manifold-docusaurus/docs/backend/metadata"},next:{title:"API",permalink:"/manifold-docusaurus/docs/developers/api"}},a={},d=[{value:"Step 1: Install dependencies",id:"step-1-install-dependencies",level:2},{value:"Install Homebrew and XCode command line tools",id:"install-homebrew-and-xcode-command-line-tools",level:3},{value:"Update your PATH variable",id:"update-your-path-variable",level:3},{value:"Install rbenv and Ruby",id:"install-rbenv-and-ruby",level:3},{value:"Install nodenv, Node, and yarn",id:"install-nodenv-node-and-yarn",level:3},{value:"Install Postgres",id:"install-postgres",level:3},{value:"Install Redis",id:"install-redis",level:3},{value:"Ensure Java is present",id:"ensure-java-is-present",level:3},{value:"Install additional libraries",id:"install-additional-libraries",level:3},{value:"Step 2: Clone Manifold source",id:"step-2-clone-manifold-source",level:2},{value:"Step 3: Install API dependencies and setup the database.",id:"step-3-install-api-dependencies-and-setup-the-database",level:2},{value:"Step 4: Setup .env file.",id:"step-4-setup-env-file",level:2},{value:"Step 5: Create the database.",id:"step-5-create-the-database",level:2},{value:"Step 6: Install client dependencies",id:"step-6-install-client-dependencies",level:2},{value:"Step 7: Install ElasticSearch",id:"step-7-install-elasticsearch",level:2},{value:"Step 8: Start Manifold",id:"step-8-start-manifold",level:2},{value:"Step 9: Open Manifold in your browser",id:"step-9-open-manifold-in-your-browser",level:2},{value:"You did it!",id:"you-did-it",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Your first step toward contributing to Manifold should be to setup a development environment. Manifold requires a number of services for it to run correctly, so getting setup will require a little bit of work."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"These instructions may be a little bit out-of-date, and your mileage may vary. We're hoping to circle back soon to update, and would love a pull request to our documentation with improvements to this page."})}),"\n",(0,s.jsx)(n.h2,{id:"step-1-install-dependencies",children:"Step 1: Install dependencies"}),"\n",(0,s.jsx)(n.h3,{id:"install-homebrew-and-xcode-command-line-tools",children:"Install Homebrew and XCode command line tools"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," is by far the easiest way to get the underlying dependencies in place for Manifold. Follow the instructions on the ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew Website"})," to install Homebrew. As of January 2020, the command to install Homebrew is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-your-path-variable",children:"Update your PATH variable"}),"\n",(0,s.jsxs)(n.p,{children:["Manifold relies on a number of binstubs. To simplify development, ensure that ",(0,s.jsx)(n.code,{children:"./bin"})," and ",(0,s.jsx)(n.code,{children:"./node_modules/.bin"})," are both in your $PATH."]}),"\n",(0,s.jsxs)(n.p,{children:["On MacOS 10.15 (Catalina) the default terminal shell was changed form bash to zsh. ",(0,s.jsx)(n.strong,{children:"Zsh and bash are similar, but are not interchangable"}),". If you don't already know which shell you are using, this next command will tell you."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"echo $0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"$0"}),' responded with "zsh" then we are going to save our zsh configuration file to a variable called "profile"']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"profile=~/.zshrc\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"$0"}),' responded with "bash", then we are going to save our bash configuration file to a variable called "profile"']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"profile=~/.bash_profile\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will modify our path using that profile variable we created earlier"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"touch $profile\necho 'export PATH=./bin:$PATH' >> $profile\necho 'export PATH=./node_modules/.bin:$PATH' >> $profile\nsource $profile\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-rbenv-and-ruby",children:"Install rbenv and Ruby"}),"\n",(0,s.jsx)(n.p,{children:"Rbenv is a tool for managing the available Ruby versions on your computer. If you prefer .rvm or another mechanism for managing ruby versions, by all means use it, as long as you can get the correct version of Ruby installed."}),"\n",(0,s.jsxs)(n.p,{children:["As of January 2020, Manifold runs on Ruby 2.6.3. The version changes relatively frequently, as new versions of Ruby are released. We store the current ",(0,s.jsx)(n.a,{href:"https://github.com/ManifoldScholar/manifold/blob/master/.ruby-version",children:"required ruby version"})," in a ",(0,s.jsx)(n.code,{children:".ruby-version"})," file in the project root. Manifold should work with version 2.6 or higher."]}),"\n",(0,s.jsx)(n.p,{children:"First, install rbenv."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install rbenv\n"})}),"\n",(0,s.jsx)(n.p,{children:"Second, adjust your profile so that rbenv is initialized when you open a new terminal session. Follow the directions given from running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rbenv init\n"})}),"\n",(0,s.jsx)(n.p,{children:"Third, install Ruby."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"source $profile\nrbenv install 2.6.3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-nodenv-node-and-yarn",children:"Install nodenv, Node, and yarn"}),"\n",(0,s.jsx)(n.p,{children:"We prefer nodenv for running different versions of Node. If you have a preferred means of installing node, go for it."}),"\n",(0,s.jsxs)(n.p,{children:["As of January 2020, Manifold runs on Node 12.14.0. The version changes relatively frequently, as new versions of Node are released. We store the current ",(0,s.jsx)(n.a,{href:"https://github.com/ManifoldScholar/manifold/blob/master/.node-version",children:"required node version"})," in a ",(0,s.jsx)(n.code,{children:".node-version"})," file in the project root."]}),"\n",(0,s.jsxs)(n.p,{children:["The Manifold development team uses ",(0,s.jsx)(n.a,{href:"https://yarnpkg.com",children:"Yarn"})," rather than ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/",children:"NPM"})," to manage javascript dependencies."]}),"\n",(0,s.jsx)(n.p,{children:"First, install nodenv."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install nodenv\n"})}),"\n",(0,s.jsx)(n.p,{children:"Second, adjust your profile so that nodenv is initialized when you open a new terminal session. Follow the directions given from running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nodenv init\n"})}),"\n",(0,s.jsx)(n.p,{children:"Third, install Node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nodenv install 12.14.0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Fourth, install Yarn."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"source $profile\nbrew install yarn\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-postgres",children:"Install Postgres"}),"\n",(0,s.jsx)(n.p,{children:"Manifold stores most data in a PotsgreSQL database."}),"\n",(0,s.jsxs)(n.p,{children:["As of January 2020, our Manifold packages include Postgres 12.1. This version changes periodically. The current minimum version is recorded in our ",(0,s.jsx)(n.a,{href:"https://github.com/ManifoldScholar/omnibus-manifold/blob/master/config/software/postgresql.rb#L18",children:"Omnibus packaging repository"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"First, install PostgreSQL."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install postgres\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Second, use ",(0,s.jsx)(n.a,{href:"https://github.com/Homebrew/homebrew-services",children:"Homebrew Services"})," to run PostgreSQL in the background."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew services start postgresql\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-redis",children:"Install Redis"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," is an open source (BSD licensed), in-memory data structure store, used primarily by Manifold as a cache and message broker. Manifold is compatible with Redis v3, v4 and v5."]}),"\n",(0,s.jsx)(n.p,{children:"First, install Redis."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install redis\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Second, use ",(0,s.jsx)(n.a,{href:"https://github.com/Homebrew/homebrew-services",children:"Homebrew Services"})," to run Redis in the background."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew services start redis\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ensure-java-is-present",children:"Ensure Java is present"}),"\n",(0,s.jsxs)(n.p,{children:["Java is needed for ElasticSearch. We'll use ",(0,s.jsx)(n.a,{href:"https://github.com/Homebrew/homebrew-cask",children:"Homebrew Cask"})," to install it. You will likely be prompted for your password."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew tap homebrew/cask-versions\nbrew cask install java\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-additional-libraries",children:"Install additional libraries"}),"\n",(0,s.jsx)(n.p,{children:"Manifold uses Imagemagick (or Graphicsmagick) for resizing images. It uses Pandoc for Word document ingestion."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"brew install imagemagick pandoc\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-clone-manifold-source",children:"Step 2: Clone Manifold source"}),"\n",(0,s.jsxs)(n.p,{children:["At ",(0,s.jsx)(n.a,{href:"https://castironcoding.com",children:"Cast Iron"}),", we typically store our projects in a ",(0,s.jsx)(n.code,{children:"~/src"})," directory. For the purposes of these instructions, we'll assume you're doing the same."]}),"\n",(0,s.jsxs)(n.p,{children:["First, make a directory at ",(0,s.jsx)(n.code,{children:"/Users/yourUserName/src"})," and enter it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkdir -p ~/src\ncd ~/src\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Second, clone the ",(0,s.jsx)(n.a,{href:"https://github.com/manifoldScholar/manifold",children:"Manifold source code"})," with git and enter the source directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/ManifoldScholar/manifold.git manifold\ncd ~/src/manifold\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-install-api-dependencies-and-setup-the-database",children:"Step 3: Install API dependencies and setup the database."}),"\n",(0,s.jsxs)(n.p,{children:["Next, install Bundler and Manifold's gem dependencies. There is a Gemfile in the root of the repository, which includes dependencies related to Manifold's tooling. There is also a Gemfile in the ",(0,s.jsx)(n.code,{children:"api"})," directory, which is the root of the Rails application that is Manifold's API backend. You'll need to install both sets of gems."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold\ngem install bundler\nbundle install\ncd ~/src/manifold/api\nbundle install\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-4-setup-env-file",children:"Step 4: Setup .env file."}),"\n",(0,s.jsxs)(n.p,{children:["Generate a secret key and store it. You'll add it to the environment file below, where it says ",(0,s.jsx)(n.code,{children:"ENTER_YOUR_SECRET_KEY"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold/api\nrails secret\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy that key to your clipboard. Create a file at ",(0,s.jsx)(n.code,{children:"~/src/manifold/.env"})," with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DOMAIN=localhost\nAPI_PORT=3020\nAPI_CABLE_PORT=3021\nCLIENT_SERVER_PORT=3010\nCLIENT_URL=http://localhost:3010\nCLIENT_BROWSER_API_URL=http://localhost:3020\nCLIENT_BROWSER_API_CABLE_URL=ws://localhost:3021/cable\nCLIENT_SERVER_API_URL=http://localhost:3020\nCLIENT_SERVER_PROXIES=true\nNODE_ENV=development\nRAILS_ENV=development\nRAILS_SECRET_KEY=ENTER_YOUR_SECRET_KEY\nRAILS_DB_NAME=manifold_development\nELASTICSEARCH_URL=http://127.0.0.1:29200\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-5-create-the-database",children:"Step 5: Create the database."}),"\n",(0,s.jsx)(n.p,{children:"The API is a Rails application, and you'll use standard Rails commands to manage the database. The following commands create the database, loads the schema, and add seed data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold/api\nrails db:create\nrails db:schema:load\nrails db:seed\n"})}),"\n",(0,s.jsx)(n.p,{children:"While you're at it, go ahead and create an admin user. Be sure to replace the values in the command below with your email, password, first name, and last name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'rails manifold:user:create:admin\\["email@email.com","password","FirstName","LastName"\\]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-6-install-client-dependencies",children:"Step 6: Install client dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["Now it's time to install Manifold's javascript dependencies. There is a package.json file in the ",(0,s.jsx)(n.code,{children:"client"})," directory, which contains Manifold's client application."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold/client\nyarn install\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-7-install-elasticsearch",children:"Step 7: Install ElasticSearch"}),"\n",(0,s.jsxs)(n.p,{children:["Manifold includes a command line tool that helps with some development tasks at ",(0,s.jsx)(n.code,{children:"bin/manifold"}),". You can use this tool to install ElasticSearch in the top level ",(0,s.jsx)(n.code,{children:"services"})," folder. As of January 2020, Manifold uses ElasticSearch version 7.5.1."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold\nmanifold install elasticsearch\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-8-start-manifold",children:"Step 8: Start Manifold"}),"\n",(0,s.jsxs)(n.p,{children:["The first time you start Manifold, it will be a little bit slower than usual. Start all services with the ",(0,s.jsx)(n.code,{children:"manifold start"})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~/src/manifold\nmanifold start\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-9-open-manifold-in-your-browser",children:"Step 9: Open Manifold in your browser"}),"\n",(0,s.jsxs)(n.p,{children:["Open a web browser and go to ",(0,s.jsx)(n.a,{href:"http://localhost:3010",children:"http://localhost:3010"}),". If all went according to plan, you can now interact with the instance of Manifold running locally. You should now be able to login to the backend with the user you setup earlier."]}),"\n",(0,s.jsx)(n.h2,{id:"you-did-it",children:"You did it!"}),"\n",(0,s.jsx)(n.p,{children:"You should now have a functioning Manifold development environment. We use Webpack for the client application, and changing most files in the client directory will cause assets to be rebuild. We also have hot module reloading in place for the client application, so any changes you make to a component will cause the component to be re-rendered in your browser."}),"\n",(0,s.jsx)(n.p,{children:"Check back soon for our contribution guidelines. In the meantime, if you'd like to contribute code to Manifold, please do so in the form of a pull request to the upstream repository."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(96540);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);