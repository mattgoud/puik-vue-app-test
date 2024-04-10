<template>
    <div>
        <puik-notification-bar :teleport="null" variant="blue" closable :messages="messages" />
    </div>
</template>

<script setup lang="ts">
// import type { PuikMessagesType } from '@prestashopcorp/puik-components';
const messages: PuikMessagesType = [
    {
        icon: "sentiment_satisfied",
        text: "Promo thèmes: profitez de -20% sur tous les thèmes PrestaShop",
        link: {
            url: "#",
            text: "J'en profite",
        },
    },
]
</script>

<style scoped></style>