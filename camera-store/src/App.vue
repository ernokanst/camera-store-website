<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import { onBeforeMount } from "vue";
import { initWs } from "@/ws"

onBeforeMount(() => initWs());
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>