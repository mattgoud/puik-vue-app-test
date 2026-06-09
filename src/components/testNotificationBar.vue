<template>
    <div>
        <puik-notification-bar :teleport="null" variant="blue" closable :messages="messages" />
    </div>
</template>

<script setup lang="ts">
import type { PuikMessagesType } from '@prestashopcorp/puik-components';

const messages: PuikMessagesType = [
    {
        icon: "sentiment_satisfied",
        text: "Theme sale: get -20% off all PrestaShop themes",
        link: {
            url: "#",
            text: "Get the deal",
        },
    },
]
</script>

<style scoped></style>