<template>
    <div class="flex space-x-1">
        <puik-avatar-web first-name="mg" last-name="presta" />
        <puik-avatar-web first-name="mg" last-name="presta" single-initial />
    </div>
</template>

<script setup lang="ts">
import { PuikAvatarCe, initWeb } from '@prestashopcorp/puik-web-components';

initWeb('puik-avatar-web', PuikAvatarCe)
</script>

<style scoped></style>