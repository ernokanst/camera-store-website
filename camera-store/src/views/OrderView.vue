<script setup>
import Sidebar from '/src/components/Sidebar.vue';
</script>

<template>
  <main style="width: 100%; height: 100%;">
    <Sidebar />
    <div class="MainContent" style="width: 100vw; height: 100vh; display: flex; flex-direction: column;">
      <div class="textblock">
        <h1>Ваши данные</h1>
        <div style="display: flex; flex-direction: row;">
          <v-text-field label="Фамилия"></v-text-field>
          <v-text-field label="Имя"></v-text-field>
      </div>
      <div style="display: flex; flex-direction: row;">
        <v-text-field label="Телефон"></v-text-field>
        <v-text-field label="E-Mail"></v-text-field>
      </div>
      <h1>Способ получения</h1>
      <v-radio-group>
        <v-radio label="Самовывоз из магазина" color="#365359" value="0"></v-radio>
        <v-radio label="Доставка курьером" color="#365359" value="1"></v-radio>
        <v-radio label="Доставка в пункт выдачи заказов" color="#365359" value="2"></v-radio>
</v-radio-group>
<v-text-field label="Адрес доставки"></v-text-field>
<h1>Способ оплаты</h1>
      <v-radio-group>
        <v-radio label="Наличными при получении" color="#365359" value="0"></v-radio>
        <v-radio label="Картой при получении" color="#365359" value="1"></v-radio>
        <v-radio label="Картой российского банка на сайте" color="#365359" value="2"></v-radio>
        <v-radio label="Картой иностранного банка на сайте" color="#365359" value="3"></v-radio>
        <v-radio label="Криптовалютой" color="#365359" value="4"></v-radio>
</v-radio-group>
      </div>
    <div class="textblock" style="display: flex; flex-direction: row;">
      <h1>Итого: {{total}}₽</h1>
      <v-spacer></v-spacer>
      <v-btn class="text-white" color="#365359" href="/">Оформить заказ</v-btn>
    </div>
</div>
</main>
</template>

<script>
  import axios from 'axios';
  export default {
  data() {
    return { items: [], total: 0 }
  },
  created: function() {
      axios.get('/api/items/').then((response) => {
      this.items = response.data;
      for (var i in response.data) {
        this.total = this.total + response.data[i].price;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>