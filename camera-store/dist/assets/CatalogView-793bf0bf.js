import{S as k}from"./Sidebar-b124729d.js";import{a as _}from"./axios-4a70c6fc.js";import{r as t,o as s,c,a as e,b,w as o,d as r,F as w,e as y,t as l,f as B}from"./index-a939676e.js";const V={class:"MainContent"},N={key:1},S={data(){return{items:[]}},created:function(){this.$route.params.id==="all"?_.get("/api/items/").then(n=>{this.items=n.data}).catch(function(n){console.log(n)}):_.get("/api/items/?category="+this.$route.params.id).then(n=>{this.items=n.data}).catch(function(n){console.log(n)})}},E=Object.assign(S,{__name:"CatalogView",setup(n){return(i,F)=>{const m=t("v-img"),d=t("v-card-title"),u=t("v-card-subtitle"),p=t("v-btn"),v=t("v-card-actions"),f=t("v-card"),h=t("router-link"),g=t("v-col"),x=t("v-row"),C=t("v-container");return s(),c("main",null,[e(k),b("div",V,[e(C,{fluid:""},{default:o(()=>[i.items.length?(s(),r(x,{key:0,dense:""},{default:o(()=>[(s(!0),c(w,null,y(i.items,a=>(s(),r(g,{key:a.name,cols:4},{default:o(()=>[e(h,{to:"/item/"+a.id},{default:o(()=>[e(f,{class:"mx-auto","min-width":"300","max-width":"500"},{default:o(()=>[e(m,{src:a.image,height:"300px",cover:""},null,8,["src"]),e(d,{textContent:l(a.name)},null,8,["textContent"]),e(u,{textContent:l(a.description)},null,8,["textContent"]),e(v,null,{default:o(()=>[e(p,{color:"#58838C",variant:"text"},{default:o(()=>[B(" В корзину ")]),_:1})]),_:1})]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):(s(),c("div",N,"Товары не найдены :("))]),_:1})])])}}});export{E as default};
