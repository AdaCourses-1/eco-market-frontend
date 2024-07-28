<template>
    <div class='busket'>
        <BusketIcon />
        <span v-if="cart.totalQuantity" class="busket__counter">{{ cart.totalQuantity }}</span>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import BusketIcon from './icons/BusketIcon.vue';

const cart = useCartStore()
</script>
<style lang="scss">
.busket {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: hsl(var(--primary));
    transform: translateY(-50%);
    border: 5px solid #fff;
    box-sizing: border-box;
    padding: 5px;

    &__counter {
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        font-weight: 700;
        border-radius: 50%;
        color:  hsl(var(--primary));
        background-color: var(--bg-white);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
        padding: 5px;
        box-sizing: border-box;
        line-height: 1;
        height: 24px;
        min-width: 24px;
    }
}
</style>