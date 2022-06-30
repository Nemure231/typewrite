import{_ as P,i as s,e as j,o as B,c as $,a as e,x as h,u as d,y as C,z as G,A as c,t as x,B as T}from"./index.4a14098a.js";const l=i=>(C("data-v-87bdc058"),i=i(),G(),i),O={class:"fixed z-50 inset-0","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},I={class:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},A=l(()=>e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1)),H={class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"},R=l(()=>e("div",{class:"bg-white relative"},[e("div",{class:"flex flex-col justify-center items-center px-4 pt-10 pb-4 h-auto lg:w-96 md:w-80 w-72"},[e("img",{class:"w-58 h-52 object-cover mb-1",src:"https://stickershop.line-scdn.net/stickershop/v1/sticker/28128900/android/sticker.png",alt:""}),e("span",{class:"text-xl font-semibold"}," Thank you for playing! ")])],-1)),Z={class:"bg-white relative p-2 mb-16 grid grid-cols-2 text-center mt-3"},z={class:"relative"},E=l(()=>e("span",{class:"absolute -top-4 text-xs"},"Score:",-1)),N={class:"relative"},V=l(()=>e("span",{class:"absolute -top-4 text-xs"},"Playtime:",-1)),W={class:"absolute bottom-0 inset-x-0"},Y={class:"flex flex-row p-2 gap-2 flex-wrap"},D={class:"flex-1"},L=x(" Share "),q=l(()=>e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},[e("g",{fill:"none",stroke:"#ffffff","stroke-linejoin":"round","stroke-width":"4"},[e("path",{d:"M35 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"}),e("path",{"stroke-linecap":"round",d:"m30 13.575l-12.661 7.67m0 5.319l13.34 7.883"}),e("path",{d:"M35 32a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"})])],-1)),F=[L,q],J={class:"flex-1"},K=x(" Restart "),Q=l(()=>e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},[e("g",{fill:"none",stroke:"#ffffff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"},[e("path",{d:"M4 25c0-6.65 5.396-12 12-12h28"}),e("path",{d:"m38 7l6 6l-6 6m6 4c0 6.65-5.396 12-12 12H4"}),e("path",{d:"m10 41l-6-6l6-6"})])],-1)),U=[K,Q],X={__name:"ModalGameOver",setup(i){const{share:_,isSupported:f}=T(),p=s("scoreProv"),g=s("lifeProv"),w=s("modalGameOverProv"),n=s("hourProv"),a=s("minuteProv"),r=s("secondProv"),b=s("milliProv"),k=s("selectLangProv"),u=s("allWordsProv");let y=()=>{p.value=0,w.value=!1,g.value=5,S(),k.value==2&&u.value.forEach((o,t)=>{u.value.splice(t,1,{id:o.id,name:o.name,dir:0,top:o.top})})},S=()=>{n.value=0,a.value=0,r.value=0,b.value=0},m=j(()=>{const o=n.value.toString().length==1?"0"+n.value:n.value,t=a.value.toString().length==1?"0"+a.value:a.value,v=r.value.toString().length==1?"0"+r.value:r.value;return`${o}:${t}:${v}`}),M=()=>{f&&_({title:"Playing Typewrite",text:`Hey, i got ${p.value} within ${m.value}!`,url:location.href})};return(o,t)=>(B(),$("div",O,[e("div",I,[A,e("div",H,[R,e("div",Z,[e("p",z,[E,t[0]||(c(-1),t[0]=e("span",{class:"text-xl font-semibold",textContent:h(d(p))},null,8,["textContent"]),c(1),t[0])]),e("p",N,[V,t[1]||(c(-1),t[1]=e("span",{class:"text-xl font-semibold",textContent:h(d(m))},null,8,["textContent"]),c(1),t[1])])]),e("div",W,[e("div",Y,[e("div",D,[e("button",{onClick:t[2]||(t[2]=v=>d(M)()),class:"bg-sky-500 w-full gap-2 justify-center text-white inline-flex items-center rounded-lg py-2 px-4 font-semibold"},F)]),e("div",J,[e("button",{onClick:t[3]||(t[3]=v=>d(y)()),class:"bg-sky-500 w-full gap-2 justify-center text-white inline-flex items-center rounded-lg py-2 px-4 font-semibold"},U)])])])])])]))}};var te=P(X,[["__scopeId","data-v-87bdc058"]]);export{te as default};