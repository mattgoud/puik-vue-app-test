<template>
    <div>
        <puik-button-group-web v-model="selectedValue">
            <puik-button-web @click="handleSelectedValue" :variant="(selectedValue === 'btn1') ? 'primary' : 'secondary'" value="btn1">Button-web 1</puik-button-web>
            <puik-button-web @click="handleSelectedValue" :variant="(selectedValue === 'btn2') ? 'primary' : 'secondary'" value="btn2">Button-web 2</puik-button-web>
            <puik-button-web @click="handleSelectedValue" :variant="(selectedValue === 'btn3') ? 'primary' : 'secondary'" value="btn3">Button-web 3</puik-button-web>
        </puik-button-group-web>
    </div>
</template>

<script setup lang="ts">
import { PuikButtonCe, PuikButtonGroupCe, initWeb } from '@prestashopcorp/puik-web-components';
import { ref } from 'vue';

const selectedValue = ref('btn1')
const handleSelectedValue = (event: Event) => {
    const target = event.target as HTMLElement | null
    const value = target?.getAttribute('value') ?? ''
    selectedValue.value = value as string
}

initWeb('puik-button-group-web', PuikButtonGroupCe)
initWeb('puik-button-web', PuikButtonCe)
</script>

<style scoped></style>