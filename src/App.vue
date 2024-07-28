<script setup lang="ts">
import { RouterView } from 'vue-router'
import BottomNavigation from './components/BottomNavigation.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :key="route.name" :is="Component"></component>
    </transition>
  </router-view>
  <BottomNavigation />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
