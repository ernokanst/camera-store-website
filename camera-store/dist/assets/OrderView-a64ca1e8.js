import{S as d}from"./Sidebar-8de400f5.js";import{a as h}from"./axios-4a70c6fc.js";import{r as s,o as u,c as v,a as t,b as e,w as c,t as f,f as p}from"./index-cc47a229.js";const b={style:{width:"100%",height:"100%"}},m={class:"MainContent",style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column"}},x={class:"textblock"},w=e("h1",null,"Ваши данные",-1),y={style:{display:"flex","flex-direction":"row"}},g={style:{display:"flex","flex-direction":"row"}},k=e("h1",null,"Способ получения",-1),V=e("h1",null,"Способ оплаты",-1),B={class:"textblock",style:{display:"flex","flex-direction":"row"}},C={data(){return{items:[],total:0}},created:function(){h.get("/api/items/").then(o=>{this.items=o.data;for(var i in o.data)this.total=this.total+o.data[i].price}).catch(function(o){console.log(o)})}},O=Object.assign(C,{__name:"OrderView",setup(o){return(i,N)=>{const a=s("v-text-field"),l=s("v-radio"),n=s("v-radio-group"),r=s("v-spacer"),_=s("v-btn");return u(),v("main",b,[t(d),e("div",m,[e("div",x,[w,e("div",y,[t(a,{label:"Фамилия"}),t(a,{label:"Имя"})]),e("div",g,[t(a,{label:"Телефон"}),t(a,{label:"E-Mail"})]),k,t(n,null,{default:c(()=>[t(l,{label:"Самовывоз из магазина",color:"#365359",value:"0"}),t(l,{label:"Доставка курьером",color:"#365359",value:"1"}),t(l,{label:"Доставка в пункт выдачи заказов",color:"#365359",value:"2"})]),_:1}),t(a,{label:"Адрес доставки"}),V,t(n,null,{default:c(()=>[t(l,{label:"Наличными при получении",color:"#365359",value:"0"}),t(l,{label:"Картой при получении",color:"#365359",value:"1"}),t(l,{label:"Картой российского банка на сайте",color:"#365359",value:"2"}),t(l,{label:"Картой иностранного банка на сайте",color:"#365359",value:"3"}),t(l,{label:"Криптовалютой",color:"#365359",value:"4"})]),_:1})]),e("div",B,[e("h1",null,"Итого: "+f(i.total)+"₽",1),t(r),t(_,{class:"text-white",color:"#365359",href:"/"},{default:c(()=>[p("Оформить заказ")]),_:1})])])])}}});export{O as default};
