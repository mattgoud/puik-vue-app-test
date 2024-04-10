<template>
  <div>
    <puik-table v-model:selection="selection" :expandable="true" :selectable="true" :search-bar="true" full-width
      sticky-first-col sticky-last-col :items="products" :headers="headers" @sort-column="displaySortOption"
      @search-submit="displaySearchedItems">
      <template #item-thumbnail="{ item }">
        <img :src="item.thumbnail" height="50" alt="" />
      </template>
      <template #item-actions>
        <puik-button variant="text" right-icon="delete" aria-label="Delete item" />
      </template>
      <template #expanded-row="{ item }">
        <div class="flex space-x-2 sticky left-4 max-w-full">
          <img class="h-[150px] w-auto" v-for="src in item.images" :key="src" :src="src" alt="" />
        </div>
      </template>
    </puik-table>
  </div>
</template>

<script setup lang="ts">
// import type { PuikTableHeader, sortOption, searchOption } from './../../node_modules/@prestashopcorp/puik/es/components/index.js';
import type { PuikTableHeader, sortOption, searchOption } from '@prestashopcorp/puik-components';
import { ref } from 'vue';

const data = ref([])
const products = ref([])
const selection = ref([])
let headers: PuikTableHeader[] = []
const isLoading = ref(true)

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const jsonData = await response.json()
  data.value = jsonData
  products.value = jsonData.products

  if (products.value.length > 0) {
    headers = Object.keys(products.value[0])
      .filter((key) => key !== 'images')
      .map((key) => ({
        text: key,
        value: key,
        size:
          key == 'id' || key == 'rating'
            ? 'sm'
            : key == 'description'
              ? 'lg'
              : 'md',
        align:
          key == 'thumbnail'
            ? 'center'
            : key == 'id' ||
              key == 'rating' ||
              key == 'stock' ||
              key == 'price' ||
              key == 'discountPercentage'
              ? 'right'
              : 'left',
        sortable: true,
        searchable: true,
        searchType: key == 'id' || key == 'rating' ? 'range' : 'text',
      }))
  }

  const actions: PuikTableHeader = {
    value: 'actions',
    size: 'sm',
    align: 'center',
    preventExpand: true,
    searchSubmit: true,
  }
  headers.push(actions)
  isLoading.value = false
}

const displaySortOption = (payload: sortOption) => {
  console.log(payload)
}
const displaySearchedItems = (payload: searchOption[]) => {
  console.log(payload)
}

fetchData()
</script>

<style scoped>
</style>