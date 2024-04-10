<template>
    <div>
        <puik-alert title="title" variant="success" :disable-borders="false" button-label="buttonLabel" @click="Alertclick">
            This is the description of the success alert
        </puik-alert>
    </div>
</template>

<script setup lang="ts">
const Alertclick = (event: PointerEvent) => {
  console.log(event)
}
</script>

<style scoped></style>