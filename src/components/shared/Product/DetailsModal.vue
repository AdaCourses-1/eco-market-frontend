<template>
  <Drawer>
    <DrawerTrigger>
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <AspectRatio
          v-if="thumbnail"
          :ratio="16 / 9"
          class="bg-grayMain rounded-xl flex justify-center items-center w-full"
        >
          <img :src="thumbnail.src" :alt="thumbnail.alt" class="rounded-md object-cover h-40" />
        </AspectRatio>
        <div class="flex justify-items-start gap-2 mt-2">
          <Badge class="inline-flex justify-center min-w-12 text-[10px]"> Новинка </Badge>
          <Badge variant="destructive" class="inline-flex justify-center min-w-12 text-[10px]">
            Острый
          </Badge>
          <Badge variant="warning" class="inline-flex justify-center min-w-12 text-[10px]"
            >Популярный</Badge
          >
        </div>
        <DrawerTitle class="mt-4">{{ title }}</DrawerTitle>
        <DrawerDescription>{{ description }}</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <hr class="mb-2" />
        <div class="flex justify-between items-center mb-1">
          <span class="text-md">Вес <span class="text-gray-400 text-xs">520г</span></span>
          <span class="text-[--font-dark] font-bold">{{ price }}сом</span>
        </div>
        <div class="flex gap-2">
          <AddButton
            :counter="counter"
            type="primary"
            @on-add="addToCart"
            @on-increment="handleIncrement"
            @on-decrement="handleDecrement"
          />
          <Button @click="toCart" variant="default" class="w-full">Корзина</Button>
          <DrawerClose class="flex absolute right-8 top-14">
            <div class="flex justify-items-center bg-white rounded-[50%] p-2 shadow-sm">
              <XIcon :size="24" :stroke-width="2" color="#333333" />
            </div>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import Badge from '@/components/ui/badge/Badge.vue'
import AspectRatio from '@ui/aspect-ratio/AspectRatio.vue'
import Button from '@ui/button/Button.vue'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@ui/drawer'
import AddButton from '@shared/Buttons/AddButton.vue'
import { useRouter } from 'vue-router'

defineProps<{
  thumbnail?: {
    src: string
    alt: string
  }
  title: string
  description: string
  price: number | string
  counter?: number
  addToCart: () => void
  handleIncrement: () => void
  handleDecrement: () => void
}>()

const router = useRouter()

const toCart = () => router.push('/cart')
</script>
