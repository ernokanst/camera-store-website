<script setup>
import Sidebar from '/src/components/Sidebar.vue';
</script>

<template>
  <main>
    <Sidebar />
    <div class="MainContent">
    <v-container>
      <v-row dense v-if="items.length">
        <v-col
          v-for="card in items"
          :key="card.name"
          :cols="12"
        >
        <v-card
    
  >
  <div style="display: flex; flex-direction: row;">
    <v-img
      :src="card.image"
      height="300px"
      contain
    ></v-img>
    <div style="display: flex; flex-direction: column;">

    <v-card-title v-text="card.name">
    </v-card-title>

    <v-card-subtitle v-text="card.description">
    </v-card-subtitle>
    <v-card-title v-text="card.price + '₽'"></v-card-title>

    <v-card-actions>
      <v-btn
        color="red"
        variant="text"
      >
        Удалить
      </v-btn>
    </v-card-actions>
  </div>
  </div>
  </v-card>
        </v-col>
      </v-row>
      <div v-else>
        <h1>Корзина пуста.</h1>
      </div>
    </v-container>
    <div class="textblock" style="display: flex; flex-direction: row;">
      <h1>Итого: {{total}}₽</h1>
      <v-spacer></v-spacer>
      <v-btn class="text-white" color="#58838C">Оформить заказ</v-btn>
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