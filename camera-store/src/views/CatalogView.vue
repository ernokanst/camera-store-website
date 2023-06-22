<script setup>
import Sidebar from '/src/components/Sidebar.vue';
</script>

<template>
  <main>
    <Sidebar />
    <div class="MainContent">
    <v-container fluid>
      <v-row dense v-if="items.length">
        <v-col
          v-for="card in items"
          :key="card.name"
          :cols="4"
        >
        <router-link :to="'/item/' + card.id"><v-card
    class="mx-auto"
    min-width="300"
    max-width="500"
  >
    <v-img
      :src="card.image"
      height="300px"
      cover
    ></v-img>

    <v-card-title v-text="card.name">
    </v-card-title>

    <v-card-subtitle v-text="card.description">
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="#58838C"
        variant="text"
      >
        В корзину
      </v-btn>
    </v-card-actions>
  </v-card></router-link>
        </v-col>
      </v-row>
      <div v-else>Товары не найдены :(</div>
    </v-container>
</div>
</main>
</template>

<script>
  import axios from 'axios';
  export default {
  data() {
    return { items: [] }
  },
  created: function() {
    if (this.$route.params.id === 'all')  {
      axios.get('/api/items/').then((response) => {
      this.items = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    } else {
      axios.get('/api/items/?category=' + this.$route.params.id).then((response) => {
      this.items = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>