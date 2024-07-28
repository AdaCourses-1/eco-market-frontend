import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/services/productsService'

interface CartItem {
  productId: number
  product: Product
  quantity: number
}

export const useCartStore = defineStore(
  'cart',
  () => {
    const items = ref<CartItem[]>([])

    const totalQuantity = computed(() => {
      return items.value.reduce((acc, item) => acc + item.quantity, 0)
    })

    const total = computed(() => {
      let sum = 0
      items.value.forEach((item) => {
        sum += item.product.price * item.quantity
      })
      return sum
    })

    const salesTax = computed(() => {
      return (total.value * 5) / 100
    })

    const grandTotal = computed(() => {
      return total.value + salesTax.value
    })

    const addToCart = (product: Product, quantiy: number): void => {
      items.value.push({
        productId: product.id,
        product: product,
        quantity: quantiy
      })
    }

    const removeFromCart = (productId: number): void => {
      items.value = items.value.filter((cartItem: CartItem) => cartItem.productId != productId);
    }

    const increaseQuantity = (productId: number): void => {
      const targetItem = items.value.find((item) => item.productId == productId)

      if (targetItem) {
        targetItem.quantity++
      }
    }

    const decreaseQuantity = (productId: number): void => {
      const targetItem = items.value.find((item) => item.productId == productId)
      
      if (targetItem) {
        targetItem.quantity--
      }

      if (targetItem && !targetItem.quantity) {
        removeFromCart(productId)
      }
    }

    return {
      totalQuantity,
      total,
      items,
      salesTax,
      grandTotal,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity
    }
  },
  {
    persist: true
  }
)
