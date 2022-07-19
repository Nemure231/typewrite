import{_ as k,o as l,c as a,a as e,i as m,w as V,v as A,u as _,b as D,d as O,r as w,p as $,e as g,f as i,g as r,F as P,h as b,j as y,k as M,l as T,m as R,n as I,q as E,s as B,t as j,K as G,x as z}from"./index.22408a41.js";const F={},N=e("label",{for:"exmaple",class:"block"},"Example:",-1),U=e("div",{class:"inline font-light dark:bg-gray-600 dark:text-gray-300 bg-sky-100 w-max rounded-lg py-1 px-2 mb-2 text-xs"}," https://open.spotify.com/playlist/37i9dQZF1DX78L8foCBod1 ",-1),K=[N,U];function Y(f,o){return l(),a("div",null,K)}var Z=k(F,[["render",Y]]);const q={class:"relative mt-2"},Q={__name:"Form",setup(f){const o=m("spotifyProv"),u=m("spotifyValProv");let p=()=>{const t=x(o.value);if(o.value=="")alert("The url cannot be empty!");else if(t===!0){const n=o.value.split("/");n[2]!="open.spotify.com"?alert("The domain isn't from spotify!"):u.value=n[4]}else alert("The url only accept https protocol!")},x=t=>t.match(/^https:?:\/\/.+\/.+$/)!==null;return(t,n)=>(l(),a("div",q,[V(e("input",{"onUpdate:modelValue":n[0]||(n[0]=h=>D(o)?o.value=h:null),class:"font-normal dark:bg-gray-700 py-2.5 pl-4 pr-24 focus:outline-none w-full border-2 border-sky-500 rounded-lg",type:"url"},null,512),[[A,_(o),void 0,{trim:!0}]]),e("button",{type:"submit",onClick:n[1]||(n[1]=h=>_(p)()),class:"absolute top-1 right-1 py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg"}," Submit ")]))}},W={class:"flex gap-3 mt-6"},X=["src"],H={__name:"Spotify",setup(f){const o=m("spotifyValProv");return(u,p)=>(l(),a("div",W,[e("iframe",{style:{"border-radius":"12px"},src:`https://open.spotify.com/embed/playlist/${_(o)}?utm_source=generator`,width:"100%",height:"380",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"},null,8,X)]))}},J={class:"flex-1"},ee={class:"flex flex-col gap-6"},te={class:"flex-1"},oe=e("span",{class:"text-2xl font-bold"},"Spotify Playlist",-1),le={class:"flex flex-col gap-3 mt-3"},se={__name:"Index",setup(f){const o=O(),u=w(""),p=w("");$("spotifyProv",g({get:()=>u.value,set:t=>{u.value=t}})),$("spotifyValProv",g({get:()=>p.value,set:t=>{p.value=t}}));const x=g(()=>{if(!o.value)return i(()=>r(()=>import("./Index.70c7378e.js"),["assets/Index.70c7378e.js","assets/index.22408a41.js","assets/index.631ac01b.css"]))});return(t,n)=>(l(),a("div",J,[e("div",ee,[e("div",te,[oe,_(o)?(l(),a(P,{key:0},[e("div",le,[b(Z),b(Q)]),p.value?(l(),y(H,{key:0})):M("",!0)],64)):M("",!0),(l(),y(T(_(x))))])])]))}},ne={},ie={class:"flex-1"},re=e("div",{class:"flex flex-col gap-6"},[e("div",{class:"flex-1"},[e("div",{class:"flex flex-col gap-3 font-normal text-justify items-center overflow-hidden"},[e("svg",{class:"fill-sky-500 mt-20 w-24 h-24 animate-spin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},[e("path",{fill:"none",stroke:"#0ea5e9","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464"})]),e("span",{class:"text-2xl font-semibold text-center"}," Please wait until the loading finish. ")])])],-1),ae=[re];function de(f,o){return l(),a("div",ie,ae)}var d=k(ne,[["render",de]]);const ce={},_e={class:"flex-1"},pe=R('<div class="flex flex-col gap-6"><div class="flex-1"><div class="flex flex-col gap-3 font-normal text-justify items-center overflow-hidden"><svg class="fill-sky-500 mt-20 w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"></path></svg><span class="text-2xl font-semibold text-center"> Woops, something wrong with your connection. </span></div></div></div>',1),ue=[pe];function me(f,o){return l(),a("div",_e,ue)}var c=k(ce,[["render",me]]);const fe={class:"fixed z-10 inset-0 font-bold","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},ve={class:"flex items-center justify-center min-h-screen text-center"},xe=e("span",{class:"hidden sm:inline-block rounded-xl","aria-hidden":"true"},"\u200B",-1),he={class:"relative inline-block align-bottom rounded-xl text-left shadow-xl transform transition-all sm:align-middle"},ge={class:"backdrop-blur-sm bg-white/75 dark:bg-gray-800/75 relative rounded-xl"},ye={class:"absolute right-6 top-3"},we=e("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("path",{fill:"#bb3535",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"})],-1),be=[we],ke={class:"flex flex-col pb-4 w-[50rem] overflow-scroll overflow-x-hidden h-[32rem]"},Ce={class:"flex-1"},$e={class:"flex flex-row"},Me={class:"flex-none basis-[20%] rounded-xl"},Ee={class:"flex flex-col items-center justify-center flex-wrap py-2 px-2"},Ve=["onClick"],Pe={class:"text-xl w-full font-semibold relative"},Te={class:"flex-1 basis-[80%] px-12 py-6"},Le={class:"flex flex-col dark:text-gray-300"},De={__name:"ModalSetting",emits:["childCloseModalSetting","childStartGame"],setup(f,{emit:o}){const u=m("milliProv"),p=m("secondProv"),x=m("modalGameOverProv"),t=m("currentTabProv"),n=w(["General","Level","Text","Font","Background","Music","Type","Score","About"]);let h=()=>{o("childCloseModalSetting"),(u.value>0||p.value>0)&&(x.value||L())},L=()=>{o("childStartGame")};const S=g(()=>{var s;return t.value=="Level"&&(s=i({loader:()=>r(()=>import("./Index.63290ef3.js"),["assets/Index.63290ef3.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Text"&&(s=i({loader:()=>r(()=>import("./Index.cad2b21c.js"),["assets/Index.cad2b21c.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Font"&&(s=i({loader:()=>r(()=>import("./Index.eef41445.js"),["assets/Index.eef41445.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Background"&&(s=i({loader:()=>r(()=>import("./Index.8c5f0b2b.js"),["assets/Index.8c5f0b2b.js","assets/Index.17998412.css","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Music"&&(s=i({loader:()=>r(()=>import("./Empty.d089a8b2.js"),["assets/Empty.d089a8b2.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Type"&&(s=i({loader:()=>r(()=>import("./Index.7e1c88e4.js"),["assets/Index.7e1c88e4.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="Score"&&(s=i({loader:()=>r(()=>import("./Index.2b79572a.js"),["assets/Index.2b79572a.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="General"&&(s=i({loader:()=>r(()=>import("./Index.8cee4f61.js"),["assets/Index.8cee4f61.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),t.value=="About"&&(s=i({loader:()=>r(()=>import("./Index.4e8fa75f.js"),["assets/Index.4e8fa75f.js","assets/index.22408a41.js","assets/index.631ac01b.css"]),loadingComponent:d,delay:200,errorComponent:c,timeout:1e3})),s});return(s,C)=>(l(),a("div",fe,[e("div",ve,[xe,e("div",he,[e("div",ge,[e("div",ye,[e("div",{onClick:C[0]||(C[0]=v=>_(h)()),class:"cursor-pointer hover:bg-red-100"},be)]),e("div",ke,[e("div",Ce,[e("div",$e,[e("div",Me,[e("div",Ee,[(l(!0),a(P,null,I(n.value,v=>(l(),a("button",{key:v,onClick:Se=>t.value=v,class:E(["w-full text-left p-2 rounded-xl dark:text-gray-300",_(t)==v&&"bg-sky-200 dark:bg-gray-600"])},[e("span",Pe,[e("span",{class:E(v=="Support"&&"animate-ping absolute inline-flex h-2.5 w-2 top-0 -right-3 rounded-full bg-sky-400 opacity-75")},null,2),B(" "+j(v),1)])],10,Ve))),128))])]),e("div",Te,[e("div",Le,[(l(),y(G,null,[(l(),y(T(_(S))))],1024)),V(b(se,null,null,512),[[z,_(t)=="Music"]])])])])])])])])])]))}};export{De as default};