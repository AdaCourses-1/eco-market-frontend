<template>
  <Button v-if="counter" variant="secondary" class="flex justify-between w-full">
    <span @click="onDecrement" class="w-10 flex">
      <Minus :size="16" :stroke-width="2" />
    </span>
    <span>{{ counter }}</span>
    <span @click="onIncrement" class="w-10 flex justify-end">
      <Plus :size="16" :stroke-width="2" />
    </span>
  </Button>
  <Button v-else @click="onAdd" variant="secondary" class="bg-grayMain w-full flex gap-1">
    <Plus :size="16" :stroke-width="2" />
    <span>Добавить</span>
  </Button>
</template>

<script setup lang="ts">
import { Plus, Minus } from 'lucide-vue-next'
import Button from '@ui/button/Button.vue'

const emit = defineEmits(['onAdd', 'onIncrement', 'onDecrement'])

defineProps<{
  type?: string
  counter?: number
}>()

const onAdd = () => {
  emit('onAdd')
}

const onDecrement = () => {
  emit('onDecrement')
}

const onIncrement = () => {
  emit('onIncrement')
}
</script>

<style lang="scss"></style>
