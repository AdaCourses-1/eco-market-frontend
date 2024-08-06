<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger class="w-full">
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="flex items-center justify-between">
        <DrawerClose @click="handleResetAddressFields">
          <span>
            <ChevronLeft color="#333" />
          </span>
        </DrawerClose>
        <DrawerTitle>Добавьте адрес</DrawerTitle>
        <span class="w-6"></span>
      </DrawerHeader>
      <DrawerDescription as="div" class="flex flex-col flex-wrap px-4 gap-4 mb-2">
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
          <div class="flex-1">
            <Label for="entrance" class="text-gray-400 text-xs">Подьезд</Label>
            <Input v-model="address.entrance" class="mt-1 rounded-sm" id="entrance" type="number" />
          </div>
          <div class="flex-1">
            <Label for="code" class="text-gray-400 text-xs">Код двери</Label>
            <Input v-model="address.code" class="mt-1 rounded-sm" id="code" type="number" />
          </div>
        </div>
        <div class="flex justify-between gap-4">
          <div class="flex-1">
            <Label for="floor" class="text-gray-400 text-xs">Этаж</Label>
            <Input v-model="address.floor" class="mt-1 rounded-sm" id="floor" type="number" />
          </div>
          <div class="flex-1">
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
          <Input v-model="address.phone" class="mt-1 rounded-sm" id="phone" type="number" />
        </div>
        <div>
          <Label for="comment" class="text-gray-400 text-xs">Комментарий к адресу</Label>
          <Textarea v-model="address.comment" id="comment" class="mt-1 rounded-sm" />
        </div>
      </DrawerDescription>
      <DrawerFooter>
        <Button @click="handleSaveAddress" class="w-full mt-4">Добавить</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'
import { useProfileStore } from '@/stores/profile'
import { Label } from '@components/ui/label'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription
} from '@ui/drawer'
import { ChevronLeft } from 'lucide-vue-next'
import { reactive, ref } from 'vue'

const isDrawerOpen = ref(false)

let address = reactive({
  id: '',
  cityStreetHouse: '',
  entrance: '',
  code: '',
  floor: '',
  apartment: '',
  comment: '',
  phone: ''
})

const { addNewAddress } = useProfileStore()

const handleSaveAddress = () => {
  addNewAddress(address)
  handleResetAddressFields()
  isDrawerOpen.value = false
}

const handleResetAddressFields = () => {
  address = {
    id: '',
    cityStreetHouse: '',
    entrance: '',
    code: '',
    floor: '',
    apartment: '',
    comment: '',
    phone: ''
  }
}
</script>
