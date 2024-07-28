<template>
    <swiper class="promotions" :modules="swiperModules" :centered-slides="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }" :loop="true" :slides-per-view="1" :space-between="20">
        <swiper-slide>
            <img class="promotions__slider" src="../assets/promotion-1.png" alt="Скидки 10%">
        </swiper-slide>
        <swiper-slide>
            <img class="promotions__slider" src="../assets/promotion-2.png" alt="Скидки 20%">
        </swiper-slide>
        <swiper-slide>
            <img class="promotions__slider" src="../assets/promotion-3.png" alt="Скидки 30%">
        </swiper-slide>
        <swiper-slide>
            <img class="promotions__slider" src="../assets/promotion-4.png" alt="Скидки 40%">
        </swiper-slide>
    </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

const swiperModules = [Autoplay]

</script>
<style lang="scss">
.promotions {
    &__slider {
        width: 100%;
        height: 175px;
        object-fit: cover;
        border-radius: 10px;
    }
}
</style>