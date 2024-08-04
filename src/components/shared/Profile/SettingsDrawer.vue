<template>
  <Drawer>
    <DrawerTrigger>
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle class="mt-4">{{ title }}</DrawerTitle>
        <!-- <DrawerDescription>{{ description }}</DrawerDescription> -->
      </DrawerHeader>
      <div class="flex flex-col px-4 gap-4 mb-2">
        <div>
          <Label for="fio" class="text-gray-400 text-xs">Ваше ФИО</Label>
          <Input class="mt-1 rounded-sm" id="fio" type="text" placeholder="Сергей Сергеевич" />
        </div>
        <div>
          <Label for="phone" class="text-gray-400 text-xs">Номер телефона</Label>
          <Input class="mt-1 rounded-sm" id="phone" type="email" placeholder="+996 773 223 129" />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Почта</Label>
          <Input class="mt-1 rounded-sm" id="email" type="email" placeholder="sergey@gmail.com" />
        </div>
        <div>
          <Label for="address" class="text-gray-400 text-xs">Текущий адрес</Label>
          <Input
            class="mt-1 rounded-sm"
            id="address"
            type="email"
            placeholder="Бишкек, район Асанбай, Английский квартал, 3 дом, 16 кв"
          />
        </div>
      </div>
      <DrawerFooter>
        <hr class="mb-2" />
        <div class="mb-1">
          <Button class="w-full mb-4" variant="outline">Отменить</Button>
          <Button class="w-full">
            Сохранить
          </Button>
        </div>
        <div class="flex gap-2">
          <DrawerClose class="flex absolute right-4 top-4">
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
import Button from '@ui/button/Button.vue'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@ui/drawer'
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'

defineProps<{
  title: string
}>()
</script>
