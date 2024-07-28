<template>
  <div>
    <NavbarHeader />

    <main class="main content-container p-4 pb-8">
      <PromitionsSlider />
      <ProductCategories />
      <div class="mt-10">
        <div v-if="isLoading" class="flex justify-center p-8">
          <span class="loading loading-spinner loading-lg"></span>
        </div>

        <div v-if="!isLoading && !products.length" class="text-center p-8">
          <div>Товары не найдены.</div>
          <div class="text-gray-600 text-sm mt-4">Попробуйте поискать что-нибудь другое.</div>
        </div>

        <div v-if="!isLoading && products.length" class="product-categories__top">
          <h2 class="product-categories__title">Товары</h2>
          <span class="product-categories__all">Все</span>
        </div>
        <div
          v-if="!isLoading && products.length"
          class="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
        >
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { watchDebounced } from '@vueuse/core'

import { useProductsStore } from '@/stores/products'
import ProductCard from '@shared/Product/index.vue'
import PromitionsSlider from '@/components/PromitionsSlider.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import NavbarHeader from '@/components/NavbarHeader.vue'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

let isLoading = ref(false)
const searchInput = ref('')

onMounted(async () => {
  isLoading.value = true
  await productsStore.fetchProducts()
  isLoading.value = false
})

watchDebounced(
  searchInput,
  async () => {
    isLoading.value = true
    await productsStore.searchProducts(searchInput.value)
    isLoading.value = false
  },
  {
    debounce: 500,
    maxWait: 4000
  }
)
</script>

<style lang="scss">
.main,
main {
  min-height: 100vh;
  padding: 20px 10px;
}
</style>
