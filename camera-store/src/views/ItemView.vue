<script setup>
  import Sidebar from '/src/components/Sidebar.vue';
</script>

<template>
  <main>
    <Sidebar />
    <v-img :src="item.image" max-height="500px" max-width="500px" style="margin-bottom:auto" contain></v-img>
      <div class="textblock" style="max-height: 500px; display: flex; flex-direction: column;">
      <h1>{{item.name}}</h1>
      <h3>{{item.description}}</h3>
      <div style="margin-top: auto">
        <v-btn class="text-white" color="#365359">В корзину</v-btn>
        <h1>{{item.price}}₽</h1>
        <h4>В наличии: {{item.quantity}}</h4>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from 'axios';
  export default {
  data() {
    return { item: {} }
  },
  created: function() {
      axios.get('/api/items/').then((response) => {
      for (var i in response.data) {
        if (response.data[i].id == this.$route.params.id) {
          this.item = response.data[i];
          console.log(this.item);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>