import{S as m}from"./Sidebar-5c41ee2f.js";import{a as c}from"./axios-4a70c6fc.js";import{r as n,o as r,c as d,a as i,b as a,t as o,w as u,f as h}from"./index-88823c98.js";const p={class:"textblock",style:{"max-height":"500px",display:"flex","flex-direction":"column"}},_={style:{"margin-top":"auto"}},f={data(){return{item:{}}},created:function(){c.get("/api/items/").then(e=>{for(var t in e.data)e.data[t].id==this.$route.params.id&&(this.item=e.data[t],console.log(this.item))}).catch(function(e){console.log(e)})}},y=Object.assign(f,{__name:"ItemView",setup(e){return(t,g)=>{const s=n("v-img"),l=n("v-btn");return r(),d("main",null,[i(m),i(s,{src:t.item.image,"max-height":"500px","max-width":"500px",style:{"margin-bottom":"auto"},contain:""},null,8,["src"]),a("div",p,[a("h1",null,o(t.item.name),1),a("h3",null,o(t.item.description),1),a("div",_,[i(l,{class:"text-white",color:"#365359"},{default:u(()=>[h("В корзину")]),_:1}),a("h1",null,o(t.item.price)+"₽",1),a("h4",null,"В наличии: "+o(t.item.quantity),1)])])])}}});export{y as default};