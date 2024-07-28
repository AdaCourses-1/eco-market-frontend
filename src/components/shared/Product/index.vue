<template>
  <div class="product bg-white flex flex-col justify-between rounded-xl">
    <DetailsModal
      :title="product.title"
      :description="product.description"
      :price="product.price"
      :thumbnail="thumbnail"
      :counter="cartItem?.quantity"
      :addToCart="addToCart"
      :handleIncrement="handleIncrement"
      :handleDecrement="handleDecrement"
    >
      <div class="bg-grayMain mb-2 rounded-md">
        <img class="product__image" :src="product.thumbnail" alt="Product Image" />
      </div>
      <div class="text-left">
        <span class="product__price">{{ currencyFormatter.format(product.price, 2) }}</span>
        <h2 class="product__title line-clamp-2">{{ product.title }}</h2>
        <span class="product__weight">{{ product.dimensions.depth }} kg</span>
      </div>
    </DetailsModal>
    <AddButton
      @on-add="addToCart"
      @on-increment="handleIncrement"
      @on-decrement="handleDecrement"
      :counter="cartItem?.quantity"
      class="mt-2"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/services/productsService'
import { useCurrencyFormatter } from '@/composables/currencyFormatter'
import AddButton from '@shared/Buttons/AddButton.vue'
import { useCartStore } from '@/stores/cart'
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import DetailsModal from './DetailsModal.vue'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)
const currencyFormatter = useCurrencyFormatter()

const thumbnail = reactive({
  src: props.product.thumbnail,
  alt: props.product.title
})

const cartItem = computed(() => {
  return items.value.find((item) => {
    if (item.productId == props.product.id) return true
    return false
  })
})

const addToCart = () => {
  cartStore.addToCart(props.product, 1)
}

const handleIncrement = () => {
  cartStore.increaseQuantity(props.product.id)
}

const handleDecrement = () => {
  cartStore.decreaseQuantity(props.product.id)
}
</script>

<style lang="scss">
.product {
  position: relative;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.05);
  padding: 12px 12px;
  box-sizing: border-box;
  color: #21201f;

  &__image {
    height: 100px;
    display: block;
    margin: 0 auto 10px;
  }

  &__title {
    font-size: 12px;
    font-weight: 400;
    color: #253d4e;
  }

  &__price {
    color: var(--font-dark);
    font-weight: 600;
  }

  &__add {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(25%, 25%);
    border-radius: 50%;
    background-color: #def9ec;
    border: 5px solid #fff;
    color: hsl(var(--primary));
    display: inline-block;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    cursor: pointer;
    z-index: 1;
    line-height: 1;
    padding-bottom: 5px;
  }

  &__weight {
    font-size: 12px;
    font-weight: 600;
    color: var(--light-grey);
  }
}
</style>
