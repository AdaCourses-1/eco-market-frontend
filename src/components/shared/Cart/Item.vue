<template>
  <div class="cart-item flex gap-2 justify-between items-center border-b-2 border-x-secondary pb-4">
    <div class="p-2 bg-grayMain w-14 h-14 rounded-sm flex justify-center items-center">
      <img
        class="cart-item-image w-full h-full object-cover"
        :src="product.thumbnail"
        :alt="product.title"
      />
    </div>
    <div class="cart-item-content flex-1 pr-2">
      <h5 class="text-xs text-[#333]">{{ product.title }}</h5>
      <div class="flex items-center gap-1 mt-1">
        <span class="text-sm font-semibold text-[#333]">{{
          currencyFormatter.format(product.price * quantity)
        }}</span>
        <span class="text-xs text-gray-400">-</span>
        <span class="text-xs text-gray-400">{{ product.dimensions.depth }}г</span>
      </div>
    </div>
    <div class="cart-item-actions">
      <CounterButton
        :counter="quantity"
        class="w-24"
        @on-increment="handleIncrement"
        @on-decrement="handleDecrement"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/services/productsService'
import CounterButton from '@shared/Buttons/CounterButton.vue'
import { useCurrencyFormatter } from '@/composables/currencyFormatter'

defineProps<{
  product: Product
  handleIncrement: () => void
  handleDecrement: () => void
  quantity: number
}>()

const currencyFormatter = useCurrencyFormatter()
</script>

<style lang="scss">
.cart-item {
  &:last-child {
    border-bottom: 0;
  }
}
</style>
