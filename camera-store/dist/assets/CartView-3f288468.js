import{S as b}from"./Sidebar-5c41ee2f.js";import{a as w}from"./axios-4a70c6fc.js";import{r as e,o as l,c as _,a as t,b as a,w as n,t as i,d as m,F as k,e as B,f as u}from"./index-88823c98.js";const V={class:"MainContent"},N={style:{display:"flex","flex-direction":"row"}},S={style:{display:"flex","flex-direction":"column"}},F={key:1},j=a("h1",null,"Корзина пуста.",-1),D=[j],E={class:"textblock",style:{display:"flex","flex-direction":"row"}},L={data(){return{items:[],total:0}},created:function(){w.get("/api/items/").then(o=>{this.items=o.data;for(var s in o.data)this.total=this.total+o.data[s].price}).catch(function(o){console.log(o)})}},z=Object.assign(L,{__name:"CartView",setup(o){return(s,M)=>{const p=e("v-img"),r=e("v-card-title"),v=e("v-card-subtitle"),d=e("v-btn"),f=e("v-card-actions"),h=e("v-card"),x=e("v-col"),g=e("v-row"),y=e("v-container"),C=e("v-spacer");return l(),_("main",null,[t(b),a("div",V,[t(y,null,{default:n(()=>[s.items.length?(l(),m(g,{key:0,dense:""},{default:n(()=>[(l(!0),_(k,null,B(s.items,c=>(l(),m(x,{key:c.name,cols:12},{default:n(()=>[t(h,null,{default:n(()=>[a("div",N,[t(p,{src:c.image,height:"300px",contain:""},null,8,["src"]),a("div",S,[t(r,{textContent:i(c.name)},null,8,["textContent"]),t(v,{textContent:i(c.description)},null,8,["textContent"]),t(r,{textContent:i(c.price+"₽")},null,8,["textContent"]),t(f,null,{default:n(()=>[t(d,{color:"red",variant:"text"},{default:n(()=>[u(" Удалить ")]),_:1})]),_:1})])])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(l(),_("div",F,D))]),_:1}),a("div",E,[a("h1",null,"Итого: "+i(s.total)+"₽",1),t(C),t(d,{class:"text-white",color:"#365359",href:"/order"},{default:n(()=>[u("Оформить заказ")]),_:1})])])])}}});export{z as default};