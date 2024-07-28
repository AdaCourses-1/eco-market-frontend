<template>
  <Card class="flex flex-col justify-between flex-1">
    <CardHeader class="p-3">
      <CardTitle class="text-xs text-gray-800 mb-4">{{ title }}</CardTitle>
      <CardDescription v-if="description">{{ description }}</CardDescription>
    </CardHeader>
    <CardContent v-if="content"> {{ content }}</CardContent>
    <CardFooter class="p-3 text-gray-400 text-xs" v-if="subtitle"> {{ subtitle }} </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

defineProps<{
  title: string
  description?: string
  subtitle?: string
  content?: string
}>()
</script>
