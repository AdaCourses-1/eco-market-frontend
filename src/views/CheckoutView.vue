<template>
  <div>
    <div class="flex items-center justify-between bg-white rounded-b-sm mb-3 px-4 py-4">
      <div @click="handleGoBack" class="prev cursor-pointer shadow-md rounded-[50%] p-2">
        <ChevronLeft color="#333" />
      </div>
      <h3 class="text-[#333]">Доставка</h3>
    </div>
    <main class="bg-white rounded-lg container max-w-5xl mx-auto p-4 pb-8 pt-4">
      <div class="text-center mt-2" v-if="items.length == 0">
        There are no products in the cart.
      </div>

      <div class="flex gap-4 flex-col" v-else>
        <div class="card card-compact">
          <div class="card-body">
            <h2 class="card-title">Детали доставки</h2>
            <form class="flex flex-col gap-4">
              <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">ФИО</Label>
                <Input id="fio" type="text" placeholder="Введите ваше ФИО" />
              </div>
              <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Номер телефона (Whatsapp)</Label>
                <Input id="phone" type="text" placeholder="Введите ваш номер" />
              </div>
              <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="email">Адрес</Label>
                <Input id="address" type="address" placeholder="Введите адрес доставки" />
              </div>
            </form>
          </div>
        </div>

        <div>
          <div class="card card-compact">
            <div class="card-body">
              <h2 class="card-title">Итого</h2>
              <div class="border-b-gray-200">
                <div class="flex mb-2" v-for="item in items" :key="item.productId">
                  <div class="flex-shrink-0">
                    {{ item.quantity }}<span class="ml-2 mr-0">x</span>
                  </div>
                  <div class="flex-grow text-left px-2">
                    {{ item.product.title }}
                  </div>
                  <div class="text-right">
                    {{ currencyFormatter.format(item.quantity * item.product.price) }}
                  </div>
                </div>
              </div>
              <div class="divider my-0"></div>
              <div>
                <div class="flex mb-2 text-gray-600">
                  <div class="flex-grow">Промежуточный итог</div>
                  <div>{{ currencyFormatter.format(total) }}</div>
                </div>
                <div class="flex mb-2 text-gray-600">
                  <div class="flex-grow">Доставка</div>
                  <div>{{ currencyFormatter.format(salesTax) }}</div>
                </div>
                <div class="flex font-bold">
                  <div class="flex-grow">Общий итог</div>
                  <div>{{ currencyFormatter.format(grandTotal) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 mb-3">
            <Button class="w-full">Оформить заказ</Button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/cart'
import { useCurrencyFormatter } from '@/composables/currencyFormatter'
import Button from '@ui/button/Button.vue'
import { useRouter } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'

const router = useRouter()
const handleGoBack = () => router.back()

const cartStore = useCartStore()
const currencyFormatter = useCurrencyFormatter()

const { items, total, grandTotal, salesTax } = storeToRefs(cartStore)
</script>
