!function(){"use strict";var e,a,f,c,b,d={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=d,n.c=t,e=[],n.O=function(a,f,c,b){if(!f){var d=1/0;for(o=0;o<e.length;o++){f=e[o][0],c=e[o][1],b=e[o][2];for(var t=!0,r=0;r<f.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,b<d&&(d=b));t&&(e.splice(o--,1),a=c())}return a}b=b||0;for(var o=e.length;o>0&&e[o-1][2]>b;o--)e[o]=e[o-1];e[o]=[f,c,b]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){d[a]=function(){return e[a]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",60:"6cac418a",140:"e437b252",155:"cf600f10",213:"dc964b1a",252:"e56f5feb",261:"b65c8aa5",340:"12d4a64f",523:"470f13e8",524:"c555672b",531:"4838e201",532:"57677a90",663:"24504e17",867:"757d4829",912:"71dfb53c",1019:"e323d878",1054:"5d085b14",1101:"42740665",1115:"34f6bd98",1172:"1e414b27",1213:"e6cd2068",1310:"541b1a64",1315:"c78563b6",1372:"1db64337",1382:"5dd8512b",1438:"0941d86d",1534:"38bae52a",1561:"bc12798f",1590:"080cd984",1713:"3b19a55b",1724:"ad2398c4",1727:"1207808c",2082:"fa938d6a",2148:"a22d72a3",2219:"411826ed",2238:"4887cd4f",2250:"a1cb3534",2306:"005ece64",2336:"98599f51",2388:"dd42501c",2419:"1c621534",2497:"c6d1107f",2534:"0f03ea8c",2568:"8b5af15a",2583:"2b45fbc5",2622:"daa71e97",2639:"8561710a",2691:"d9c2913d",2699:"51e6f39b",2738:"9c5c7610",2858:"95bf0010",2917:"5952b09a",2996:"d12075c4",3074:"6cefb007",3089:"a6aa9e1f",3117:"565bb307",3121:"c833aa87",3145:"f259cb5e",3184:"972c9515",3218:"00de55ac",3315:"1a45670c",3319:"ed528032",3420:"1f0188c1",3436:"947a65ad",3451:"6274d8b1",3505:"e2432d4a",3566:"3b58cd11",3590:"3b595b2a",3650:"85c7384d",3777:"8c4815a3",3780:"8e192df1",3865:"9d3cd5e3",3870:"76535fca",3888:"4bea2224",3990:"8a3714d1",4088:"1e1c2795",4091:"4ba4bcb7",4115:"7775f8e0",4158:"2c32ea21",4195:"c4f5d8e4",4237:"e3e3bb5a",4295:"3d7760d9",4309:"e6af6b7d",4416:"d152a708",4477:"8ae4bf93",4632:"22780084",4721:"48957373",4947:"a8ec06fc",4968:"41010705",4983:"aa94937e",5082:"c64a26e8",5201:"db32a50f",5206:"b5db1d8e",5325:"e20281f9",5506:"24292bee",5524:"6db6401d",5632:"6d85b6df",5771:"1a349082",5778:"89975620",5791:"0e16bb9e",5806:"666934cf",5859:"e8f0fe7a",5896:"18fd052f",5935:"3609b74c",6042:"fb4c8fe3",6060:"9f943f65",6103:"ccc49370",6112:"4b7f436b",6192:"ad73cf65",6221:"49fc7dbc",6286:"c9432231",6316:"693ef520",6394:"e104436d",6570:"4158420b",6657:"f446fdf7",6737:"280a5f0d",6797:"4886b6d5",6813:"a8409ee8",7036:"d99b6c62",7060:"fb1c7cc7",7109:"dac46797",7126:"343dacc4",7209:"71023cc4",7288:"0111eae1",7418:"36879da1",7462:"f10b34a9",7463:"0302a835",7539:"06a8490d",7613:"1c896800",7791:"debf8b86",7863:"4fded3c6",7872:"7b9bf7cf",7918:"17896441",7964:"c310a310",7993:"a525b11f",8002:"2a1099ff",8021:"c5ac5a4a",8024:"ebbea38b",8025:"667f1eae",8044:"e6197a87",8048:"b8a7e7ff",8116:"5aab3b0a",8231:"85a6b3cb",8243:"f0457358",8285:"72465f37",8395:"e12dd66f",8434:"28dc1144",8493:"1ba0ab13",8526:"439e84ef",8537:"afce49a3",8541:"f598894f",8574:"8910d4fa",8578:"eb6147b6",8631:"703a55dd",8641:"a88a3683",8714:"f3917b15",8808:"9fae60f4",8850:"209926f7",8866:"790d25e5",8873:"4e380694",8887:"bb83effd",8975:"0c9fa262",8982:"2453980a",9027:"1b24a69e",9049:"72b8d205",9096:"400ca3d2",9208:"4b34be89",9235:"810d5f5e",9484:"f97a23ef",9514:"1be78505",9568:"41ef5806",9600:"5570d3ef",9627:"4187b1c7",9639:"3ae627b3",9666:"3c33d937",9693:"e15f9616",9703:"77a9019d",9758:"5b53d2e9",9777:"b21534fe",9786:"3209c35a",9923:"48bac902",9937:"4344fd87"}[e]||e)+"."+{53:"9851f2ae",60:"fac1a30c",140:"4df4c773",155:"a3be58e6",213:"a3381e7b",252:"729cc635",261:"aed00a77",336:"3fc68ae7",340:"36430419",523:"314527d0",524:"5a9342ca",531:"c500ef92",532:"76af1001",663:"00465ce2",867:"0ee5dcd7",912:"423bd683",1019:"02a59434",1054:"a9df4a0c",1101:"1bf70436",1115:"226c01ba",1172:"e201020c",1213:"8edb8548",1310:"6986c1dc",1315:"03c49ae6",1372:"e165987c",1382:"a728e534",1438:"bb9c872e",1534:"05c2bdfb",1561:"19f6cb63",1584:"0ae47f7d",1590:"e1abf4fc",1713:"8f585f20",1724:"fd97284c",1727:"ac401bf3",2082:"c937c6bb",2148:"0c471fa7",2219:"2f312119",2238:"4693a5fe",2250:"d2d1950f",2306:"4d47988a",2336:"6781fea5",2388:"560c558d",2419:"5821438c",2497:"375579e3",2534:"b700c6b7",2568:"fbde0ab1",2583:"ca6c9c3f",2622:"1d95a5f2",2639:"b0345f05",2691:"32461ddf",2699:"5f72be2b",2738:"3a7f3f27",2858:"f718e339",2917:"d4ee9172",2996:"5143978c",3074:"5e8445ae",3089:"2b658070",3117:"972eb2c5",3121:"0f876424",3145:"4cf56223",3184:"d4206368",3218:"57461d1b",3315:"c487d21a",3319:"32e6ae03",3420:"c0364fb4",3436:"99f1301d",3451:"1227fb56",3505:"7f4e3751",3566:"01c92da3",3590:"b855e725",3616:"a8f98ffc",3650:"b3012828",3777:"fde4755d",3780:"7d7a197e",3865:"1a30137e",3870:"37a32736",3888:"7fd850ef",3990:"94f6c01e",4088:"7edc4e7a",4091:"3daa4bec",4115:"2bbb0e9c",4158:"8226e862",4195:"9633cbad",4237:"605e69f8",4295:"7655e0b2",4309:"f0e2b648",4416:"bbdaee6f",4477:"2b0770ab",4632:"265e9536",4721:"ca08d781",4947:"b974f69e",4968:"b6291fb2",4983:"e262ac90",5082:"01ded7be",5201:"1fb25b65",5206:"a6137ced",5325:"33537f97",5506:"4f66d776",5524:"81430572",5632:"c2deda02",5681:"1791f1aa",5771:"735bce8b",5778:"82417d90",5791:"a1f8721a",5806:"e1c2ffc3",5859:"b509ddcf",5896:"d76af3b7",5935:"516977af",6042:"35f46614",6060:"37768f21",6103:"45c7c3e5",6112:"0456e513",6192:"b337d13e",6221:"69e8f656",6286:"8006887f",6316:"1e2f4587",6394:"52e8e76d",6570:"954fd6ba",6655:"0518743f",6657:"5f81b602",6737:"de685b82",6797:"ec0ef1e7",6813:"39afeb91",7036:"322668c0",7060:"a48b2ee6",7109:"f56ed335",7126:"5fe566ef",7164:"52072a60",7209:"c30b8d2d",7288:"3aa4adb6",7418:"d4e00264",7462:"27e3864b",7463:"17fd8e38",7539:"49f67bae",7613:"063cda1c",7791:"b7ac7b66",7863:"618c8efc",7872:"5bb9fa41",7918:"eb0eb0a2",7964:"51ede588",7993:"7f8d783b",8002:"51411924",8021:"d8813aa4",8024:"5ca06e8c",8025:"fed24e25",8044:"07b0ca9a",8048:"a84b1f42",8116:"c088c64a",8231:"d29b645a",8243:"5e551e43",8285:"43104c5a",8395:"511973b4",8434:"9cb27054",8483:"f7debed5",8493:"6738fd71",8526:"cf2c6468",8537:"afd33f9a",8541:"523e6842",8574:"11defea0",8578:"050809fd",8631:"c685eabc",8641:"f18817e1",8714:"90c8e4d9",8808:"4630512f",8850:"cc87bfca",8866:"99e0ee52",8873:"894c604a",8887:"0c3d19cc",8975:"04cd8253",8982:"70321526",9027:"3a530806",9049:"2ecd84d8",9096:"5cf0c944",9208:"aac840a8",9235:"b6133048",9484:"f7985cc7",9514:"de13ca55",9568:"f5972e78",9600:"df4b2823",9627:"185f90b8",9639:"2a306101",9666:"1f368ee2",9693:"3d7551f3",9703:"0a61d6da",9758:"0c603b7f",9777:"190f3f14",9786:"453de2ab",9923:"15af7d9d",9937:"b8a69124"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.aa226d41.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},b="manifold-docusaurus:",n.l=function(e,a,f,d){if(c[e])c[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+f),t.src=e),c[e]=[a];var s=function(a,f){t.onerror=t.onload=null,clearTimeout(l);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(f)})),a)return a(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/manifold-docusaurus/",n.gca=function(e){return e={17896441:"7918",22780084:"4632",41010705:"4968",42740665:"1101",48957373:"4721",89975620:"5778","935f2afb":"53","6cac418a":"60",e437b252:"140",cf600f10:"155",dc964b1a:"213",e56f5feb:"252",b65c8aa5:"261","12d4a64f":"340","470f13e8":"523",c555672b:"524","4838e201":"531","57677a90":"532","24504e17":"663","757d4829":"867","71dfb53c":"912",e323d878:"1019","5d085b14":"1054","34f6bd98":"1115","1e414b27":"1172",e6cd2068:"1213","541b1a64":"1310",c78563b6:"1315","1db64337":"1372","5dd8512b":"1382","0941d86d":"1438","38bae52a":"1534",bc12798f:"1561","080cd984":"1590","3b19a55b":"1713",ad2398c4:"1724","1207808c":"1727",fa938d6a:"2082",a22d72a3:"2148","411826ed":"2219","4887cd4f":"2238",a1cb3534:"2250","005ece64":"2306","98599f51":"2336",dd42501c:"2388","1c621534":"2419",c6d1107f:"2497","0f03ea8c":"2534","8b5af15a":"2568","2b45fbc5":"2583",daa71e97:"2622","8561710a":"2639",d9c2913d:"2691","51e6f39b":"2699","9c5c7610":"2738","95bf0010":"2858","5952b09a":"2917",d12075c4:"2996","6cefb007":"3074",a6aa9e1f:"3089","565bb307":"3117",c833aa87:"3121",f259cb5e:"3145","972c9515":"3184","00de55ac":"3218","1a45670c":"3315",ed528032:"3319","1f0188c1":"3420","947a65ad":"3436","6274d8b1":"3451",e2432d4a:"3505","3b58cd11":"3566","3b595b2a":"3590","85c7384d":"3650","8c4815a3":"3777","8e192df1":"3780","9d3cd5e3":"3865","76535fca":"3870","4bea2224":"3888","8a3714d1":"3990","1e1c2795":"4088","4ba4bcb7":"4091","7775f8e0":"4115","2c32ea21":"4158",c4f5d8e4:"4195",e3e3bb5a:"4237","3d7760d9":"4295",e6af6b7d:"4309",d152a708:"4416","8ae4bf93":"4477",a8ec06fc:"4947",aa94937e:"4983",c64a26e8:"5082",db32a50f:"5201",b5db1d8e:"5206",e20281f9:"5325","24292bee":"5506","6db6401d":"5524","6d85b6df":"5632","1a349082":"5771","0e16bb9e":"5791","666934cf":"5806",e8f0fe7a:"5859","18fd052f":"5896","3609b74c":"5935",fb4c8fe3:"6042","9f943f65":"6060",ccc49370:"6103","4b7f436b":"6112",ad73cf65:"6192","49fc7dbc":"6221",c9432231:"6286","693ef520":"6316",e104436d:"6394","4158420b":"6570",f446fdf7:"6657","280a5f0d":"6737","4886b6d5":"6797",a8409ee8:"6813",d99b6c62:"7036",fb1c7cc7:"7060",dac46797:"7109","343dacc4":"7126","71023cc4":"7209","0111eae1":"7288","36879da1":"7418",f10b34a9:"7462","0302a835":"7463","06a8490d":"7539","1c896800":"7613",debf8b86:"7791","4fded3c6":"7863","7b9bf7cf":"7872",c310a310:"7964",a525b11f:"7993","2a1099ff":"8002",c5ac5a4a:"8021",ebbea38b:"8024","667f1eae":"8025",e6197a87:"8044",b8a7e7ff:"8048","5aab3b0a":"8116","85a6b3cb":"8231",f0457358:"8243","72465f37":"8285",e12dd66f:"8395","28dc1144":"8434","1ba0ab13":"8493","439e84ef":"8526",afce49a3:"8537",f598894f:"8541","8910d4fa":"8574",eb6147b6:"8578","703a55dd":"8631",a88a3683:"8641",f3917b15:"8714","9fae60f4":"8808","209926f7":"8850","790d25e5":"8866","4e380694":"8873",bb83effd:"8887","0c9fa262":"8975","2453980a":"8982","1b24a69e":"9027","72b8d205":"9049","400ca3d2":"9096","4b34be89":"9208","810d5f5e":"9235",f97a23ef:"9484","1be78505":"9514","41ef5806":"9568","5570d3ef":"9600","4187b1c7":"9627","3ae627b3":"9639","3c33d937":"9666",e15f9616:"9693","77a9019d":"9703","5b53d2e9":"9758",b21534fe:"9777","3209c35a":"9786","48bac902":"9923","4344fd87":"9937"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,3312:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|3312)$/.test(a))e[a]=0;else{var b=new Promise((function(f,b){c=e[a]=[f,b]}));f.push(c[2]=b);var d=n.p+n.u(a),t=new Error;n.l(d,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,b,d=f[0],t=f[1],r=f[2],o=0;for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n);for(a&&a(f);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[d[o]]=0;return n.O(u)},f=self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();