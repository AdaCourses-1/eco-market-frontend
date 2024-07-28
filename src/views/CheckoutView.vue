<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCartStore } from '@/stores/cart';
import { useCurrencyFormatter } from '@/composables/currencyFormatter';
import Button from '@ui/button/Button.vue';

const cartStore = useCartStore();
const currencyFormatter = useCurrencyFormatter();

const { items, total, grandTotal, salesTax } = storeToRefs(cartStore);

</script>

<template>
  <main class="container max-w-5xl mx-auto p-4 pb-8 pt-4">

    <div class="text-sm breadcrumbs mb-6">
      <ul>
        <li>
          <RouterLink to="/">Главная</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart">Корзина</RouterLink>
        </li>
        <li>Оформление заказа</li>
      </ul>
    </div>

    <div class="text-center mt-2" v-if="items.length == 0">There are no products in the cart.</div>

    <div class="flex gap-4 flex-col md:flex-row" v-else>
      <div class="md:w-[60%]">

        <div class="card card-compact md:p-3 rounded-lg">
          <div class="card-body">
            <h2 class="card-title">Детали доставки</h2>
            <form>
              <div class="grid grid-cols-2 gap-4 max-sm:grid-cols-none max-sm:gap-2 mb-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Фамилия</span>
                  </label>
                  <input type="text" placeholder="" class="input input-bordered" required />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Имя</span>
                  </label>
                  <input type="text" placeholder="" class="input input-bordered" required />
                </div>
              </div>
              <div class="form-control mb-2">
                <label class="label">
                  <span class="label-text">Адрес</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered" required />
              </div>
              <div class="form-control mb-2">
                <label class="label">
                  <span class="label-text">Номер телефона (Whatsapp)</span>
                </label>
                <input type="email" placeholder="" class="input input-bordered" required />
              </div>
            </form>
          </div>
        </div>

        <!-- <div class="card card-compact md:p-3 rounded-lg mt-4 shadow bg-gray-100">
          <div class="card-body">
            <h2 class="card-title">Payment Information</h2>
            <form>
              <div class="form-control mb-2">
                <label class="label">
                  <span class="label-text">Name on Card</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered" required />
              </div>
              <div class="form-control mb-2">
                <label class="label">
                  <span class="label-text">Card Number</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered" required />
              </div>
              <div class="grid grid-cols-2 gap-4 max-sm:grid-cols-none max-sm:gap-2 mb-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Expiration Date</span>
                  </label>
                  <input type="month" placeholder="" class="input input-bordered" required />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">CVV</span>
                  </label>
                  <input type="number" placeholder="" class="input input-bordered" required />
                </div>
              </div>
            </form>
          </div>
        </div> -->

      </div>

      <div class="md:w-[40%]">
        <div class="card card-compact md:p-3 rounded-lg border shadow">
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
                <div class="text-right">{{ currencyFormatter.format(item.quantity * item.product.price) }}</div>
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
</template>