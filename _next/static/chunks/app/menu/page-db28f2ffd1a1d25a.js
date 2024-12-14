(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{947:function(e,t,r){Promise.resolve().then(r.bind(r,801))},801:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Menu}});var s=r(7437),n=r(2265),a=r(6691),i=r.n(a),o=r(9311),l=r(9155),c=r(6735),d=r(71);let u=[{id:"all",label:"ALL"},{id:"appetizers",label:"APPETIZERS"},{id:"main",label:"MAIN COURSES"},{id:"desserts",label:"DESSERTS"},{id:"drinks",label:"DRINKS"}],m=[{id:1,name:"PEACH + BURRATA",ingredients:["Peaches","burrata","tomatoes","cucumbers","basil","mint","roasted almonds","spring mix","shredded kale","balsamic vinaigrette"],category:"appetizers",image:"https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:430,protein:11,carbs:25,fat:29},price:16},{id:2,name:"RENAISSANCE RISOTTO",ingredients:["Arborio rice","wild mushrooms","truffle oil","parmesan","fresh herbs","white wine reduction"],category:"main",image:"https://images.unsplash.com/photo-1621341258668-b2bf005a9f97?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:520,protein:14,carbs:65,fat:22},price:24,tags:["POPULAR"]},{id:3,name:"IMPRESSIONIST'S SEAFOOD",ingredients:["Fresh catch of the day","seasonal vegetables","citrus butter","micro greens","edible flowers"],category:"main",image:"https://images.unsplash.com/photo-1659951226926-a75791782250?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:440,protein:38,carbs:12,fat:28},price:32,tags:["CHEF'S SPECIAL"]},{id:4,name:"CUBIST STEAK",ingredients:["Prime beef","geometric vegetable cuts","modernist sauces","potato three ways","herb oil"],category:"main",image:"https://images.unsplash.com/photo-1633040248016-a67a78643afe?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:580,protein:42,carbs:35,fat:32},price:36,tags:["POPULAR"]},{id:5,name:"SURREALIST SOUFFL\xc9",ingredients:["Dark chocolate","unexpected spices","vanilla cream","berry compote","gold leaf"],category:"desserts",image:"https://images.unsplash.com/photo-1579711220373-155ffc441b36?q=80&w=2070&auto=format&fit=crop",nutrition:{calories:380,protein:8,carbs:45,fat:18},price:14,tags:["ONLINE ONLY"]}];function Menu(){let[e,t]=(0,n.useState)("all"),r=m.filter(t=>"all"===e||t.category===e);return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col bg-background",children:[(0,s.jsx)(c.Z,{}),(0,s.jsxs)("main",{className:"flex-grow container mx-auto px-4 py-12",children:[(0,s.jsx)("h1",{className:"font-serif text-5xl md:text-6xl italic text-primary mb-12",children:"Our Menu"}),(0,s.jsxs)("div",{className:"mb-12",children:[(0,s.jsx)("span",{className:"text-sm text-muted-foreground mb-2 block",children:"FILTER:"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:u.map(r=>(0,s.jsx)("button",{onClick:()=>t(r.id),className:(0,o.cn)("px-4 py-2 rounded-full border text-sm transition-colors",e===r.id?"bg-foreground text-white":"border-border text-foreground hover:border-primary"),children:r.label},r.id))})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(e=>{var t;return(0,s.jsxs)("div",{className:"bg-card rounded-lg overflow-hidden border",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i(),{src:e.image,alt:e.name,width:300,height:300,className:"w-full h-48 object-cover"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/20"}),null===(t=e.tags)||void 0===t?void 0:t.map(e=>(0,s.jsx)(l.C,{className:"absolute top-2 left-2 bg-secondary text-accent-foreground",children:e},e))]}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,s.jsx)("h2",{className:"text-xl font-bold text-primary",children:e.name}),(0,s.jsxs)("span",{className:"text-lg font-bold text-primary",children:["$",e.price]})]}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:e.ingredients.join(", ")}),(0,s.jsxs)("div",{className:"grid grid-cols-4 gap-2 text-center border-t border-border pt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold text-foreground",children:e.nutrition.calories}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"CALORIES"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.protein,"G"]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"PROTEIN"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.carbs,"G"]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"CARBS"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"font-bold text-foreground",children:[e.nutrition.fat,"G"]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground",children:"FAT"})]})]})]})]},e.id)})})]}),(0,s.jsx)(d.Z,{})]})}},71:function(e,t,r){"use strict";var s=r(7437),n=r(1396),a=r.n(n);t.Z=()=>(0,s.jsx)("footer",{className:"bg-primary text-white py-12",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Museum Restaurant"}),(0,s.jsx)("p",{className:"text-sm",children:"Experience culinary art in a museum-inspired setting"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,s.jsxs)("ul",{className:"space-y-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/menu",className:"hover:text-secondary transition-colors",children:"Menu"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/booking",className:"hover:text-secondary transition-colors",children:"Book a Table"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/events",className:"hover:text-secondary transition-colors",children:"Events"})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Contact Us"}),(0,s.jsxs)("address",{className:"not-italic",children:[(0,s.jsx)("p",{children:"123 Art Street, Culinary City"}),(0,s.jsx)("p",{children:"Phone: (123) 456-7890"}),(0,s.jsx)("p",{children:"Email: info@museumrestaurant.com"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Follow Us"}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)("a",{href:"#",className:"hover:text-secondary transition-colors",children:"Facebook"}),(0,s.jsx)("a",{href:"#",className:"hover:text-secondary transition-colors",children:"Instagram"}),(0,s.jsx)("a",{href:"#",className:"hover:text-secondary transition-colors",children:"Twitter"})]})]})]}),(0,s.jsx)("div",{className:"mt-8 pt-8 border-t border-white/20 text-center",children:(0,s.jsx)("p",{children:"\xa9 2024 Museum Restaurant. All rights reserved."})})]})})},6735:function(e,t,r){"use strict";var s=r(7437),n=r(1396),a=r.n(n),i=r(3023);t.Z=()=>(0,s.jsx)("header",{className:"bg-primary sticky top-0 z-50  border-primary-foreground/10",children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,s.jsxs)("nav",{className:"flex items-center justify-between",children:[(0,s.jsx)(a(),{href:"/",className:"text-2xl font-serif italic text-white",children:"Museum Restaurant"}),(0,s.jsx)("ul",{className:"hidden md:flex space-x-6 text-blue-500",children:["Home","Menu","Recipes","Chef's Table","About","Contact"].map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"home"===e.toLowerCase()?"/":"/".concat(e.toLowerCase().replace("'","").replace(" ","-")),className:"text-white hover:text-white transition-colors",children:e})},e))}),(0,s.jsx)(i.z,{asChild:!0,className:"bg-secondary hidden md:inline-flex border-white text-olive hover:bg-white hover:text-olive",children:(0,s.jsx)(a(),{href:"/booking",children:"Reserve a Table"})}),(0,s.jsx)(i.z,{className:"md:hidden",variant:"ghost",size:"icon",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6 text-white",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]})})})},9155:function(e,t,r){"use strict";r.d(t,{C:function(){return Badge}});var s=r(7437);r(2265);var n=r(6061),a=r(9311);let i=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-accent text-primary-foreground ",secondary:"border-transparent bg-accent text-secondary-foreground ",destructive:"border-transparent bg-destructive text-destructive-foreground ",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Badge(e){let{className:t,variant:r,...n}=e;return(0,s.jsx)("div",{className:(0,a.cn)(i({variant:r}),t),...n})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var s=r(7437),n=r(2265),a=r(7256),i=r(6061),o=r(9311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-foreground text-white",calendar:"bg-foreground text-white",calendarOutline:"border text-calendar  bg-background ",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-primary text-rust-orange  bg-background ",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:c=!1,...d}=e,u=c?a.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...d})});c.displayName="Button"},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return cn}});var s=r(7042),n=r(3986);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,s.W)(t))}},2597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},unstable_getImgProps:function(){return unstable_getImgProps}});let s=r(1024),n=r(3655),a=r(7707),i=r(6964),o=s._(r(5324)),unstable_getImgProps=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/restaurant-gallary/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=i.Image},6691:function(e,t,r){e.exports=r(2597)},1396:function(e,t,r){e.exports=r(4724)}},function(e){e.O(0,[724,649,964,971,864,744],function(){return e(e.s=947)}),_N_E=e.O()}]);