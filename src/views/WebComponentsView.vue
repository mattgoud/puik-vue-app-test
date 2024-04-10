<script setup lang="ts">
import testAvatarWeb from '../web-components/testAvatarWeb.vue'
import testButtonWeb from '../web-components/testButtonWeb.vue'
// import testInputWeb from '../web-components/testInputWeb.vue'
// import testSnackbarWeb from '../web-components/testSnackbarWeb.vue'
import testSwitchWeb from '../web-components/testSwitchWeb.vue'
</script>

<template>
  <section class="web-components-view">
    <h2 class="puik-h2">Test Web Components</h2>
    <testAvatarWeb />
    <testButtonWeb />
    <!-- <testInputWeb /> -->
    <!-- <testSnackbarWeb /> -->
    <testSwitchWeb />
  </section>
</template>

<style  scoped lang="scss">
.web-components-view{
  @apply flex flex-col space-y-2;
}
</style>
