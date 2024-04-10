<template>
    <div class="flex flex-col space-y-2">
        <puik-switch-web label="test label">
        </puik-switch-web>
        <puik-switch-web label-right="test label right">
        </puik-switch-web>
    </div>
</template>

<script setup lang="ts">
import { PuikSwitchCe, initWeb } from '@prestashopcorp/puik-web-components';
import { onMounted } from 'vue';
initWeb('puik-switch-web', PuikSwitchCe)

onMounted(() => {
    const allSwitchWeb = document.querySelectorAll('puik-switch-web')
    if (allSwitchWeb) {
        allSwitchWeb.forEach((switchWeb) => {
            switchWeb.addEventListener('update:modelValue', (value: any) => {
                switchWeb.setAttribute('model-value', value.detail[0])
                console.log(value.detail[0])
            })
        })
    }
})
</script>

<style scoped></style>