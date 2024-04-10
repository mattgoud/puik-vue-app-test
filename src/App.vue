<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <h1 class="puik-brand-h1">Puik tests</h1>
      <nav>
        <puik-link to="/">Vue components</puik-link>
        <puik-link to="/web-components">Web components</puik-link>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header,
main {
  @apply flex flex-col space-y-5 p-5;
}
nav {
  @apply flex space-x-5;
}
</style>
