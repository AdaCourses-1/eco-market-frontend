<template>
  <div>
    <div class="flex items-center justify-between bg-white rounded-b-sm px-4 py-4">
      <div @click="handleGoBack" class="prev cursor-pointer">
        <ChevronLeft color="#333" />
      </div>
      <h3 class="text-[#333]">Категории</h3>
    </div>
    <main class="main content-container pb-8">
      <div>
        <div class="relative w-full items-center mb-4">
          <Input
            v-model="searchText"
            id="search"
            type="text"
            placeholder="Название категории..."
            class="pl-12 py-6 pr-4 rounded-2xl"
          />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
            <Search class="size-6 text-primary" />
          </span>
        </div>
        <div v-if="!searchText">
          <div
            v-for="category in categories"
            :key="category.imageUrl"
            class="flex items-center gap-4 bg-white mb-2 p-2 px-4 rounded-sm"
          >
            <img :src="category.imageUrl" :alt="category.label" class="w-12 h-12" />
            <div class="flex-1">
              <h3 class="font-medium text-sm text-[#333]">{{ category.label }}</h3>
              <span class="font-light text-gray-300 text-xs">Товаров: {{ category.elements }}</span>
            </div>
            <div>
              <ChevronRight color="#333" />
            </div>
          </div>
        </div>
        <div v-else>
          <div
            v-for="category in filteredCategories"
            :key="category.imageUrl"
            class="flex items-center gap-4 bg-white mb-2 p-2 px-4 rounded-sm"
          >
            <img :src="category.imageUrl" :alt="category.label" class="w-12 h-12" />
            <div class="flex-1">
              <h3 class="font-medium text-sm text-[#333]">{{ category.label }}</h3>
              <span class="font-light text-gray-300 text-xs">Товаров: {{ category.elements }}</span>
            </div>
            <div>
              <ChevronRight color="#333" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ChevronLeft, ChevronRight, Search } from 'lucide-vue-next'
import Input from '@/components/ui/input/Input.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()
const searchText = ref('')
const categories = [
  { label: 'Овощи', imageUrl: 'https://i.postimg.cc/qhHk8gLr/category-1.png', elements: 15 },
  { label: 'Сухофрукты', imageUrl: 'https://i.postimg.cc/XGKnx3HC/category-2.png', elements: 22 },
  { label: 'Ягоды', imageUrl: 'https://i.postimg.cc/K3ZxHVws/category-3.png', elements: 2 },
  { label: 'Фрукты', imageUrl: 'https://i.postimg.cc/G9rLt8tJ/category-4.png', elements: 112 },
  { label: 'Пальмовые', imageUrl: 'https://i.postimg.cc/c6msnx8q/category-5.png', elements: 2 },
  { label: 'Картошки', imageUrl: 'https://i.postimg.cc/rKwqGBSD/category-6.png', elements: 12 },
  { label: 'Морковки', imageUrl: 'https://i.postimg.cc/xcpn66Rt/category-7.png', elements: 22 },
  { label: 'Свекла', imageUrl: 'https://i.postimg.cc/TKyGFnNG/category-8.png', elements: 23 },
  { label: 'Кофе', imageUrl: 'https://i.postimg.cc/xXWY2qBm/category-9.png', elements: 32 },
  { label: 'Овощи', imageUrl: 'https://i.postimg.cc/qhHk8gLr/category-1.png', elements: 15 },
  { label: 'Сухофрукты', imageUrl: 'https://i.postimg.cc/XGKnx3HC/category-2.png', elements: 22 },
  { label: 'Ягоды', imageUrl: 'https://i.postimg.cc/K3ZxHVws/category-3.png', elements: 2 },
  { label: 'Фрукты', imageUrl: 'https://i.postimg.cc/G9rLt8tJ/category-4.png', elements: 112 },
  { label: 'Пальмовые', imageUrl: 'https://i.postimg.cc/c6msnx8q/category-5.png', elements: 2 },
  { label: 'Картошки', imageUrl: 'https://i.postimg.cc/rKwqGBSD/category-6.png', elements: 12 },
  { label: 'Морковки', imageUrl: 'https://i.postimg.cc/xcpn66Rt/category-7.png', elements: 22 },
  { label: 'Свекла', imageUrl: 'https://i.postimg.cc/TKyGFnNG/category-8.png', elements: 23 },
  { label: 'Кофе', imageUrl: 'https://i.postimg.cc/xXWY2qBm/category-9.png', elements: 32 }
]
const filteredCategories = computed(() => {
  if (!searchText.value) return;

  return categories.filter((category) => category.label.includes(searchText.value))
})
const handleGoBack = () => router.back()
</script>
<style lang=""></style>
