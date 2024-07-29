<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useCurrencyFormatter } from '@/composables/currencyFormatter'
import Button from '@ui/button/Button.vue'
import Item from '@shared/Cart/Item.vue'
import { ChevronLeft, EllipsisVertical, ShoppingCart, Trash2Icon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover'

const cartStore = useCartStore()
const currencyFormatter = useCurrencyFormatter()

const router = useRouter()

const { items, total, grandTotal, salesTax } = storeToRefs(cartStore)

const handleIncrement = (productId: number) => {
  cartStore.increaseQuantity(productId)
}

const handleDecrement = (productId: number) => {
  cartStore.decreaseQuantity(productId)
}

const handleClearCart = () => cartStore.clearCart()
const handleGoBack = () => router.back()
</script>

<template>
  <main class="mx-auto p-4 pt-0 pb-32">
    <div
      class="flex items-center justify-between bg-white shadow-sm rounded-b-sm -mx-5 mb-3 px-4 py-4"
    >
      <div @click="handleGoBack" class="prev cursor-pointer shadow-md rounded-[50%] p-2">
        <ChevronLeft color="#333" />
      </div>
      <h3 class="text-[#333]">Корзина</h3>

      <Popover>
        <PopoverTrigger> <EllipsisVertical /> </PopoverTrigger>
        <PopoverContent class="text-xs text-center mr-2">
          Данная функция скоро появится!)</PopoverContent
        >
      </Popover>
    </div>

    <div
      v-if="items.length == 0"
      class="flex gap-2 flex-col justify-center items-center text-center mt-2 pt-24"
    >
      <ShoppingCart :stroke-width="1" :size="120" class="" color="#333" />
      <h3 class="text-xl mt-2 font-semibold">Ваша Корзина пуста</h3>
      <p class="text-gray-400 text-sm">
        Вы можете вернуться на главную страницу и пополнить корзину
      </p>
    </div>

    <div
      v-if="items.length"
      class="bg-white py-4 px-4 grid grid-cols-1 gap-4 mb-4 -mx-5 rounded-md"
    >
      <div class="flex justify-between">
        <h3 class="font-semibold text-xl">Заказ</h3>
        <div @click="handleClearCart" class="cursor-pointer">
          <Trash2Icon color="#333" />
        </div>
      </div>

      <Item
        v-for="item of items"
        :key="item.productId"
        :product="item.product"
        :quantity="item.quantity"
        :handleIncrement="() => handleIncrement(item.productId)"
        :handleDecrement="() => handleDecrement(item.productId)"
      />
    </div>

    <div class="bg-white py-4 px-4 shadow-sm -mx-5 rounded-lg" v-if="items.length">
      <!-- Grand Total -->
      <div class="flex flex-row-reverse">
        <table class="table md:max-w-sm">
          <tbody>
            <tr>
              <th class="font-medium">Промежуточный итог:</th>
              <td class="text-right">{{ currencyFormatter.format(total) }}</td>
            </tr>
            <tr>
              <th class="font-medium">Доставка:</th>
              <td class="text-right">{{ currencyFormatter.format(salesTax) }}</td>
            </tr>
            <tr>
              <th class="font-medium text-lg">Общий итог</th>
              <td class="font-medium text-lg text-right">
                {{ currencyFormatter.format(grandTotal) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <RouterLink to="/checkout" class="flex flex-row-reverse mt-4">
        <Button class="w-full">Оформить</Button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.table tr {
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-bottom-color: hsl(240 4.8% 95.9%);
}
</style>
