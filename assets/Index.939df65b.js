import{i as s,o as p,c as v,a as o,w as c,v as _,u as d,b as r,r as C,S,F as k,n as V,x as U,k as W,e as w,h as x,P as B}from"./index.feae9843.js";const R={class:"flex-1 basis-full"},T=o("span",{class:"text-2xl font-bold"},"Font",-1),z={class:"grid grid-cols-3 gap-4 mt-2"},D={class:""},X={class:"flex flex-col"},Y=o("label",{class:"text-sm font-semibold"},"Color",-1),F={class:"flex flex-col"},H=o("label",{class:"text-sm font-semibold mb-2.5"},"Size",-1),N={class:"flex flex-col"},j=o("label",{class:"text-sm font-semibold mb-2.5"},"Weight",-1),E={__name:"Font",setup(h){const l=s("fontSizeProv"),e=s("fontColorProv"),n=s("fontWeightProv");return(a,t)=>(p(),v("div",R,[T,o("div",z,[o("div",D,[o("div",X,[Y,c(o("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>r(e)?e.value=i:null),class:"w-full h-10",type:"color",name:"",id:""},null,512),[[_,d(e)]])])]),o("div",null,[o("div",F,[H,c(o("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>r(l)?l.value=i:null),min:"14",max:"50",step:"1",class:"custom-range",type:"range",name:"",id:""},null,512),[[_,d(l)]])])]),o("div",null,[o("div",N,[j,c(o("input",{"onUpdate:modelValue":t[2]||(t[2]=i=>r(n)?n.value=i:null),class:"mt-3 custom-range",min:"100",max:"900",step:"100",type:"range",name:"",id:""},null,512),[[_,d(n)]])])])])]))}},L={class:"flex-1"},M=o("span",{class:"text-2xl font-bold"},"Background",-1),I={class:"grid grid-cols-3 gap-4 mt-2"},q={class:"col-span-3"},A={class:"flex flex-col"},G=o("label",{class:"text-sm font-semibold"},"Color",-1),J={__name:"Bg",setup(h){const l=s("bgColorProv");return(e,n)=>(p(),v("div",L,[M,o("div",I,[o("div",q,[o("div",A,[G,c(o("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>r(l)?l.value=a:null),class:"w-full h-10",type:"color",name:"",id:""},null,512),[[_,d(l)]])])])])]))}},K={class:"flex-1 basis-1/3"},O=o("span",{class:"text-2xl font-bold"},"Padding",-1),Q={class:"grid grid-cols-2 gap-4 mt-2"},Z={class:""},oo={class:"flex flex-col"},so=o("label",{class:"text-sm font-semibold mb-2.5"},"X",-1),to={class:""},lo={class:"flex flex-col"},eo=o("label",{class:"text-sm font-semibold mb-2.5"},"Y",-1),no={__name:"Padding",setup(h){const l=s("paddingXProv"),e=s("paddingYProv");return(n,a)=>(p(),v("div",K,[O,o("div",Q,[o("div",Z,[o("div",oo,[so,c(o("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>r(l)?l.value=t:null),class:"mt-3 custom-range",min:"1",max:"20",step:"1",type:"range",name:"",id:""},null,512),[[_,d(l)]])])]),o("div",to,[o("div",lo,[eo,c(o("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>r(e)?e.value=t:null),class:"mt-3 custom-range",min:"1",max:"20",step:"1",type:"range",name:"",id:""},null,512),[[_,d(e)]])])])])]))}},io={class:"flex-1 basis-full"},ao=o("span",{class:"text-2xl font-bold"},"Border",-1),co={class:"grid grid-cols-3 gap-4 mt-2"},ro={class:"flex flex-col"},uo=o("label",{class:"text-sm font-semibold"},"Color",-1),_o={class:"flex flex-col"},mo=o("label",{class:"text-sm font-semibold mb-2.5"},"Width",-1),po={class:"flex flex-col"},vo=o("label",{class:"text-sm font-semibold mb-2.5"},"Radius",-1),ho={__name:"Border",setup(h){const l=s("borderColorProv"),e=s("borderWidthProv"),n=s("borderRadiusProv");return(a,t)=>(p(),v("div",io,[ao,o("div",co,[o("div",null,[o("div",ro,[uo,c(o("input",{class:"w-full h-10","onUpdate:modelValue":t[0]||(t[0]=i=>r(l)?l.value=i:null),type:"color"},null,512),[[_,d(l)]])])]),o("div",null,[o("div",_o,[mo,c(o("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>r(e)?e.value=i:null),class:"mt-3 custom-range",min:"1",max:"20",step:"1",type:"range"},null,512),[[_,d(e)]])])]),o("div",null,[o("div",po,[vo,c(o("input",{"onUpdate:modelValue":t[2]||(t[2]=i=>r(n)?n.value=i:null),min:"1",max:"900",step:"1",class:"mt-3 custom-range",type:"range"},null,512),[[_,d(n)]])])])])]))}},xo={key:0,class:"flex-1 basis-full"},go=o("span",{class:"text-2xl font-bold"},"Highlight",-1),fo={class:"grid grid-cols-3 gap-4 mt-2"},bo={class:""},$o={class:"flex flex-col"},yo=o("label",{class:"text-sm font-semibold"},"Color",-1),Po={class:"flex flex-col"},Co=o("label",{class:"text-sm font-semibold mb-2.5"},"Style",-1),So=["value"],ko={class:"flex flex-col"},Vo=o("label",{class:"text-sm font-semibold mb-2.5"},"Thickness",-1),Uo={__name:"Highlight",setup(h){const l=s("highlightColorProv"),e=s("highlightStyleProv"),n=s("highlightThickProv"),a=s("milliProv"),t=C([{id:1,name:"solid"},{id:2,name:"double"},{id:3,name:"dotted"},{id:4,name:"dotted"},{id:5,name:"dashed"},{id:6,name:"wavy"}]);return(i,m)=>d(a)<=0?(p(),v("div",xo,[go,o("div",fo,[o("div",bo,[o("div",$o,[yo,c(o("input",{"onUpdate:modelValue":m[0]||(m[0]=u=>r(l)?l.value=u:null),class:"w-full h-10",type:"color"},null,512),[[_,d(l)]])])]),o("div",null,[o("div",Po,[Co,c(o("select",{class:"font-normal focus:outline-none dark:bg-gray-700 border-2 px-2 py-1 -mt-2 rounded-xl border-sky-500","onUpdate:modelValue":m[1]||(m[1]=u=>r(e)?e.value=u:null)},[(p(!0),v(k,null,V(t.value,u=>(p(),v("option",{key:u.id,value:u.name},U(u.name),9,So))),128))],512),[[S,d(e)]])])]),o("div",null,[o("div",ko,[Vo,c(o("input",{"onUpdate:modelValue":m[2]||(m[2]=u=>r(n)?n.value=u:null),class:"mt-3 custom-range",min:"1",max:"8",step:"1",type:"range"},null,512),[[_,d(n)]])])])])])):W("",!0)}},Wo={class:"flex-1 space-y-3"},wo={class:"flex flex-row flex-wrap gap-4"},Bo={class:"text-center pb-10"},Ro=o("span",{class:"text-2xl font-bold"},"Preview",-1),To={class:"w-full flex justify-center"},Xo={__name:"Index",setup(h){const l=s("fontSizeProv"),e=s("fontColorProv"),n=s("fontWeightProv"),a=s("bgColorProv"),t=s("paddingXProv"),i=s("paddingYProv"),m=s("borderColorProv"),u=s("borderWidthProv"),g=s("borderRadiusProv"),f=s("highlightColorProv"),b=s("highlightStyleProv"),$=s("highlightThickProv"),y=w(()=>({color:e.value,backgroundColor:a.value,fontSize:`${l.value}px`,fontWeight:n.value,paddingLeft:`${t.value}px`,paddingRight:`${t.value}px`,paddingTop:`${i.value}px`,paddingBottom:`${i.value}px`,borderColor:m.value,borderWidth:`${u.value}px`,borderRadius:`${g.value}px`,textDecorationColor:`${f.value}`,textDecorationStyle:`${b.value}`,textDecorationThickness:`${$.value}px`}));return(P,zo)=>(p(),v("div",Wo,[o("div",wo,[x(E),x(J),x(no),x(ho),x(Uo)]),o("div",Bo,[Ro,o("div",To,[o("p",{class:"mt-6 underline inline underline-offset-4",style:B(d(y))}," Example ",4)])])]))}};export{Xo as default};
