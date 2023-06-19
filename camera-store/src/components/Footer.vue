<template>
  <footer>
    <v-footer class="d-flex flex-column">
      <div class="bg-primary d-flex w-100 align-center px-4">
        <strong>Присоединяйтесь к нам в соцсетях!</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-teal text-center w-100">
        ©{{ new Date().getFullYear() }} — <strong>Онлайн-школа</strong>
      </div>
    </v-footer>
  </footer>
  </template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-youtube',
        'mdi-instagram',
      ],
    }),
  }
</script>