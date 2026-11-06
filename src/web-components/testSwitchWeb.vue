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
            switchWeb.addEventListener('update:modelValue', (event: Event) => {
                const value = (event as CustomEvent<boolean[]>).detail[0]
                switchWeb.setAttribute('model-value', String(value))
                console.log(value)
            })
        })
    }
})
</script>

<style scoped></style>