<!-- <template>
    <div class="flex flex-col space-y-2">
        <puik-input-web type="password" />
        <puik-input-web type="number" />
    </div>
</template>

<script setup lang="ts">
import { PuikInputCe, initWeb } from '@prestashopcorp/puik-web-components';
import { onMounted } from 'vue';

initWeb('puik-input-web', PuikInputCe)

onMounted(() => {
    const inputsWeb = document.querySelectorAll('puik-input-web')
    if (inputsWeb) {
        inputsWeb.forEach((inputWeb) => {
            inputWeb.addEventListener('update:modelValue', (value: any) => {
                console.log(value?.detail[0])
                inputWeb.setAttribute('model-value', value.detail[0])
            })
        })
    }
})
</script>

<style scoped></style> -->