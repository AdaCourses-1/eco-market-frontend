<template>
    <nav class="nav">
        <ul class="nav__list">
            <li v-for="route in routes" :key="route.name" class="nav__item">
                <RouterLink class="nav__link icon" :to="route.path">
                    <component :is="route.icon" :isSelected="route.name === currentRoute?.name" />
                    <span class="nav__label" v-if="route.render">{{ route.label }}</span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { RouterLink, useRouter, type RouteLocationNormalizedLoaded } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import { ref, watch } from 'vue'
import CategoriesIcon from './icons/CategoriesIcon.vue';
import OrdersIcon from './icons/OrdersIcon.vue';
import UserIcon from './icons/UserIcon.vue';
import BusketCart from './BusketCart.vue';

const router = useRouter()
const currentRoute = ref<RouteLocationNormalizedLoaded>()
const routes = [
    {
        path: '/',
        name: 'home',
        icon: HomeIcon,
        render: true,
        label: 'Главная'
    },
    {
        path: '/categories',
        name: 'categories',
        icon: CategoriesIcon,
        render: true,
        label: 'Категории'
    },
    {
        path: '/cart',
        name: 'cart',
        icon: BusketCart,
        render: false,
    },
    {
        path: '/orders',
        name: 'orders',
        icon: OrdersIcon,
        render: true,
        label: 'Заказы'
    },
    {
        path: '/profile',
        name: 'profile',
        icon: UserIcon,
        render: true,
        label: 'Профиль',
    }
]

watch(
    () => router.currentRoute.value,
    (newRoute) => {
        currentRoute.value = newRoute
    }
)
</script>
<style lang="scss">
.nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
    padding: 10px 32px 5px;
    background-color: var(--bg-white);

    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
    }

    &__label {
        color: var(--light-grey)
    }

    .selected+&__label {
        color: hsl(var(--primary));
    }
}

.icon {
    &__rect {
        fill: transparent;
    }

    &__itself {
        fill: var(--light-grey);
        transition: 0.3s;
    }

    &.selected {
        .icon__itself {
            fill: hsl(var(--primary));
        }
    }
}
</style>
