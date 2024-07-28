<template>
  <div>
    <div class="flex items-center justify-between bg-white rounded-b-sm mb-3 px-4 py-4">
      <div @click="handleGoBack" class="prev cursor-pointer shadow-md rounded-[50%] p-2">
        <ChevronLeft color="#333" />
      </div>
      <h3 class="text-[#333]">Категории</h3>
    </div>
    <main class="main content-container p-4 pb-8"></main>
  </div>
</template>
<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleGoBack = () => router.back()
</script>
<style lang=""></style>
