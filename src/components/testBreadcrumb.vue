<template>
    <div>
        <puik-breadcrumb :items="itemsBreadCrumb" />
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@prestashopcorp/puik-components'

const itemsBreadCrumb: BreadcrumbItem[] = [
  {
    label: 'test',
    href: '#',
    target: '_blank'
  },
  {
    label: 'test',
    href: '#',
    target: '_blank'
  },
  {
    label: 'test',
    href: '#',
    target: '_blank'
  },
  {
    label: 'test',
    href: '#',
    target: '_blank'
  }
]
</script>

<style scoped>

</style>