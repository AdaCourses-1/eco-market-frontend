<template>
  <Button v-if="counter" size="xs" variant="secondary" class="flex justify-between w-full">
    <span @click="onDecrement" class="w-8 flex">
      <Minus :size="16" :stroke-width="2" />
    </span>
    <span class="text-xs">{{ counter }}</span>
    <span @click="onIncrement" class="w-8 flex justify-end">
      <Plus :size="16" :stroke-width="2" />
    </span>
  </Button>
</template>

<script setup lang="ts">
import { Plus, Minus } from 'lucide-vue-next'
import Button from '@ui/button/Button.vue'

const emit = defineEmits(['onIncrement', 'onDecrement'])

defineProps<{
  type?: string
  counter?: number
}>()

const onDecrement = () => {
  emit('onDecrement')
}

const onIncrement = () => {
  emit('onIncrement')
}
</script>

<style scoped></style>
