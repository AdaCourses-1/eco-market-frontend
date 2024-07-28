<template>
    <div class="searchbar">
        <SearchIcon class="searchbar__icon" />
        <input class="searchbar__input" type="text" placeholder="Поиск продуктов">
    </div>
</template>
<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue';


</script>
<style lang="scss">
.searchbar {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    border-radius: 66px;

    &__icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    &__input {
        flex: 1;
        border-radius: 66px;
        padding: 16px 16px 16px 42px;
        outline-color: var(--primary);
        border: none;
        outline: none ;
        box-shadow: none !important;
        font-size: 14px;
        font-weight: 600;
        color: var(--font-grey);
    }
}
</style>