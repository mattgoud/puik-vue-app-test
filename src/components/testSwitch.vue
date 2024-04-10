<template>
    <div>
        <puik-switch v-model="enabled">Switch Label Slot</puik-switch>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const enabled = ref(false)
</script>

<style scoped></style>