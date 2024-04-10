<template>
    <div class="flex space-x-1">
        <puik-snackbar-web variant="success" />
    </div>
</template>

<script setup lang="ts">
import { PuikSnackbarCe, initWeb } from '@prestashopcorp/puik-web-components';

initWeb('puik-snackbar-web', PuikSnackbarCe)
</script>

<style scoped></style>