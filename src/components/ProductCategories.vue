<template>
    <div class="product-categories">
        <div class="product-categories__top">
            <h2 class="product-categories__title">Категории</h2>
            <span class="product-categories__all">Все</span>
        </div>
        <div class="product-categories__row">
            <div v-for="category in categories" :key="category.label" class="bg-white py-4 px-5 shadow-md shadow-gray-100 rounded-lg product-categories__column">
                <img class="product-categories__image" :src="category.imageUrl" :alt="category.label">
                <span class="product-categories__subtitle">{{ category.label }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const categories = [
    { label: 'Овощи', imageUrl: 'https://i.postimg.cc/qhHk8gLr/category-1.png' },
    { label: 'Сухофрукты', imageUrl: 'https://i.postimg.cc/XGKnx3HC/category-2.png' },
    { label: 'Ягоды', imageUrl: 'https://i.postimg.cc/K3ZxHVws/category-3.png' },
    { label: 'Фрукты', imageUrl: 'https://i.postimg.cc/G9rLt8tJ/category-4.png' },
    { label: 'Пальмовые', imageUrl: 'https://i.postimg.cc/c6msnx8q/category-5.png' },
    { label: 'Картошки', imageUrl: 'https://i.postimg.cc/rKwqGBSD/category-6.png' },
    { label: 'Морковки', imageUrl: 'https://i.postimg.cc/xcpn66Rt/category-7.png' },
    { label: 'Свекла', imageUrl: 'https://i.postimg.cc/TKyGFnNG/category-8.png' },
    { label: 'Кофе', imageUrl: 'https://i.postimg.cc/xXWY2qBm/category-9.png' }
];
</script>
<style lang="scss">
.product-categories {
    padding: 20px 0;

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    &__title {
        font-size: 18px;
        font-weight: 700;
        color: var(--font-dark);
    }

    &__all {
        color: var(--primary);
        font-size: 14px;
        font-weight: 600;
    }

    &__row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    &__column {
        text-align: center;
        cursor: pointer;
        flex-grow: 1;
    }

    &__image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin: 0 auto 2px;
    }

    &__subtitle {
        color: var(--font-dark);
        font-size: 14px;
    }
}
</style>