<template>
  <header>
    <v-app-bar :elevation="6" color="#365359">
      <a href="/"><v-img src="/Logo White.png" max-height="75" max-width="75" contain></v-img></a>
        <template v-slot:append>
          <v-btn color="#F2F2F2" variant="text" :ripple="false" href="/about">О нас</v-btn>
          <v-btn color="#F2F2F2" variant="text" :ripple="false" href="/">Новости и акции</v-btn>
          <v-btn color="#F2F2F2" variant="text" :ripple="false" href="/">Доставка и оплата</v-btn>
          <v-btn color="#F2F2F2" variant="text" :ripple="false" href="/">Контакты</v-btn>
          <v-btn color="#F2F2F2" variant="text" :ripple="false" href="/cart">Корзина</v-btn>
        </template>
    </v-app-bar>
  </header>
</template>

<script>
</script>