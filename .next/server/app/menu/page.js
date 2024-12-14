(()=>{var e={};e.id=106,e.ids=[106],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6102:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>u,routeModule:()=>x,tree:()=>d});var s=r(3137),a=r(4647),i=r(4183),n=r.n(i),o=r(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=s.AppPageRouteModule,d=["",{children:["menu",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5280)),"/Users/firthmaneesuksri/Desktop/restaurant-museum/app/menu/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9958)),"/Users/firthmaneesuksri/Desktop/restaurant-museum/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/firthmaneesuksri/Desktop/restaurant-museum/app/menu/page.tsx"],m="/menu/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/menu/page",pathname:"/menu",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1014:(e,t,r)=>{Promise.resolve().then(r.bind(r,3624))},3624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Menu});var s=r(80),a=r(9885),i=r(2451),n=r.n(i),o=r(3161),l=r(4796),c=r(7023),d=r(2414);let u=[{id:"all",label:"ALL"},{id:"appetizers",label:"APPETIZERS"},{id:"main",label:"MAIN COURSES"},{id:"desserts",label:"DESSERTS"},{id:"drinks",label:"DRINKS"}],m=[{id:1,name:"PEACH + BURRATA",ingredients:["Peaches","burrata","tomatoes","cucumbers","basil","mint","roasted almonds","spring mix","shredded kale","balsamic vinaigrette"],category:"appetizers",image:"https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:430,protein:11,carbs:25,fat:29},price:16},{id:2,name:"RENAISSANCE RISOTTO",ingredients:["Arborio rice","wild mushrooms","truffle oil","parmesan","fresh herbs","white wine reduction"],category:"main",image:"https://images.unsplash.com/photo-1621341258668-b2bf005a9f97?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:520,protein:14,carbs:65,fat:22},price:24,tags:["POPULAR"]},{id:3,name:"IMPRESSIONIST'S SEAFOOD",ingredients:["Fresh catch of the day","seasonal vegetables","citrus butter","micro greens","edible flowers"],category:"main",image:"https://images.unsplash.com/photo-1659951226926-a75791782250?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:440,protein:38,carbs:12,fat:28},price:32,tags:["CHEF'S SPECIAL"]},{id:4,name:"CUBIST STEAK",ingredients:["Prime beef","geometric vegetable cuts","modernist sauces","potato three ways","herb oil"],category:"main",image:"https://images.unsplash.com/photo-1633040248016-a67a78643afe?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:580,protein:42,carbs:35,fat:32},price:36,tags:["POPULAR"]},{id:5,name:"SURREALIST SOUFFL\xc9",ingredients:["Dark chocolate","unexpected spices","vanilla cream","berry compote","gold leaf"],category:"desserts",image:"https://images.unsplash.com/photo-1579711220373-155ffc441b36?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:380,protein:8,carbs:45,fat:18},price:14,tags:["ONLINE ONLY"]}];function Menu(){let[e,t]=(0,a.useState)("all"),r=m.filter(t=>"all"===e||t.category===e);return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col bg-background",children:[s.jsx(c.Z,{}),(0,s.jsxs)("main",{className:"flex-grow container mx-auto px-4 py-12",children:[s.jsx("h1",{className:"font-serif text-5xl md:text-6xl italic text-primary mb-12",children:"Our Menu"}),(0,s.jsxs)("div",{className:"mb-12",children:[s.jsx("span",{className:"text-sm text-muted-foreground mb-2 block",children:"FILTER:"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:u.map(r=>s.jsx("button",{onClick:()=>t(r.id),className:(0,o.cn)("px-4 py-2 rounded-full border text-sm transition-colors",e===r.id?"bg-foreground text-white":"border-border text-foreground hover:border-primary"),children:r.label},r.id))})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(e=>(0,s.jsxs)("div",{className:"bg-card rounded-lg overflow-hidden border",children:[(0,s.jsxs)("div",{className:"relative",children:[s.jsx(n(),{src:e.image,alt:e.name,width:300,height:300,className:"w-full h-48 object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/20"}),e.tags?.map(e=>s.jsx(l.C,{className:"absolute top-2 left-2 bg-secondary text-accent-foreground",children:e},e))]}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("h2",{className:"text-xl font-bold text-primary",children:e.name}),(0,s.jsxs)("span",{className:"text-lg font-bold text-primary",children:["$",e.price]})]}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:e.ingredients.join(", ")}),(0,s.jsxs)("div",{className:"grid grid-cols-4 gap-2 text-center border-t border-border pt-4",children:[(0,s.jsxs)("div",{children:[s.jsx("p",{className:"font-bold text-foreground",children:e.nutrition.calories}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"CALORIES"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.protein,"G"]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"PROTEIN"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.carbs,"G"]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"CARBS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.fat,"G"]}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"FAT"})]})]})]})]},e.id))})]}),s.jsx(d.Z,{})]})}},4796:(e,t,r)=>{"use strict";r.d(t,{C:()=>Badge});var s=r(80);r(9885);var a=r(1971),i=r(3161);let n=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-accent text-primary-foreground ",secondary:"border-transparent bg-accent text-secondary-foreground ",destructive:"border-transparent bg-destructive text-destructive-foreground ",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Badge({className:e,variant:t,...r}){return s.jsx("div",{className:(0,i.cn)(n({variant:t}),e),...r})}},5280:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var s=r(7536);let a=(0,s.createProxy)(String.raw`/Users/firthmaneesuksri/Desktop/restaurant-museum/app/menu/page.tsx`),{__esModule:i,$$typeof:n}=a,o=a.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[255,297,877,251,775,261,23,414],()=>__webpack_exec__(6102));module.exports=r})();