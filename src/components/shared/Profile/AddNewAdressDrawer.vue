<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger class="w-full">
      <slot />
    </DrawerTrigger>
    <DrawerContent class="min-h-[95vh]">
      <DrawerHeader class="flex items-center justify-between">
        <DrawerClose>
          <span>
            <ChevronLeft color="#333" />
          </span>
        </DrawerClose>
        <DrawerTitle>Добавьте адрес</DrawerTitle>
        <span class="w-6"></span>
      </DrawerHeader>
      <div class="flex flex-col flex-wrap px-4 gap-4 mb-2">
        <div>
          <Label for="city, street and house" class="text-gray-400 text-xs"
            >Город, улица и дом</Label
          >
          <Input
            v-model="address.cityStreetHouse"
            class="mt-1 rounded-sm"
            id="city, street and house"
            type="text"
            required
          />
        </div>
        <div class="flex justify-between gap-4">
          <div>
            <Label for="entrance" class="text-gray-400 text-xs">Подьезд</Label>
            <Input
              v-model="address.entrance"
              class="mt-1 rounded-sm"
              id="entrance"
              type="number"
            />
          </div>
          <div>
            <Label for="code" class="text-gray-400 text-xs">Код двери</Label>
            <Input
              v-model="address.code"
              class="mt-1 rounded-sm"
              id="code"
              type="number"
            />
          </div>
        </div>
        <div class="flex justify-between gap-4">
          <div>
            <Label for="floor" class="text-gray-400 text-xs">Этаж</Label>
            <Input
              v-model="address.floor"
              class="mt-1 rounded-sm"
              id="floor"
              type="number"
            />
          </div>
          <div>
            <Label for="apartment" class="text-gray-400 text-xs">Квартира</Label>
            <Input
              v-model="address.apartment"
              class="mt-1 rounded-sm"
              id="apartment"
              type="number"
            />
          </div>
        </div>
        <div>
          <Label for="phone" class="text-gray-400 text-xs">Телефон</Label>
          <Input
            v-model="address.phone"
            class="mt-1 rounded-sm"
            id="phone"
            type="number"
          />
        </div>
        <div>
          <Label for="comment" class="text-gray-400 text-xs">Комментарий к адресу</Label>
          <Textarea
            v-model="address.comment"
            id="comment"
            class="mt-1 rounded-sm"
          />
        </div>
      </div>
      <DrawerFooter>
        <Button @click="handleSaveAddress" class="w-full mt-4">Сохранить</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import { getFromLocalStorage, setToLocalStorage } from '@/composables/useLocalStorage'
import { Label } from '@components/ui/label'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@ui/drawer'
import { ChevronLeft } from 'lucide-vue-next'
import { reactive, ref } from 'vue'

const isDrawerOpen = ref(false)

const address = reactive({
  cityStreetHouse: '',
  entrance: '',
  code: '',
  floor: '',
  apartment: '',
  comment: '',
  phone: ''
})

const emit = defineEmits(['addedAddress'])

const handleSaveAddress = () => {
  const predAddresses = getFromLocalStorage('addresses')

  if (predAddresses) {
    setToLocalStorage('addresses', [...predAddresses, address])
  } else {
    setToLocalStorage('addresses', [address])
  }

  isDrawerOpen.value = false

  emit('addedAddress')
}
</script>
