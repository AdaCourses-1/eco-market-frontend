<template>
  <Drawer>
    <DrawerTrigger>
      <slot />
    </DrawerTrigger>
    <DrawerContent class="min-h-[80vh]">
      <DrawerHeader class="">
        <DrawerTitle>Адреса доставки</DrawerTitle>
      </DrawerHeader>
      <div class="address-list pb-2 px-4 max-h-[50vh] overflow-y-auto">
        <RadioGroup :default-value="selectedAddress">
          <Separator class="mb-2" />
          <div
            v-for="address in addresses"
            :key="address.label"
            class="flex items-center space-x-2"
          >
            <RadioGroupItem
              v-model="selectedAddress"
              :id="address.label"
              :value="address.label"
              class="min-w-4"
            />
            <Label :for="address.label" class="flex flex-1 flex-col mr-4">
              <span class="text-sm mr-2">{{ address.label }}</span>
              <span class="text-gray-400 font-normal text-xs">{{ address.phone }}</span>
            </Label>
            <div class="cursor-pointer ml-auto">
              <Edit2 :size="18" :stroke-width="2" class="stroke-gray-400" />
            </div>
          </div>
          
          <Separator class="mb-2" />
        </RadioGroup>
        <AddNewAdressDrawer @added-address="getAddresses">
          <div class="add-new-address justify-between flex items-center gap-2 cursor-pointer">
            <MapPin :size="18" :stroke-width="2" class="stroke-[hsl(var(--primary))]" />
            <span class="text-[hsl(var(--primary))] flex-1 text-left">Добавить новый адрес</span>
            <Plus class="stroke-[hsl(var(--primary))]" />
          </div>
        </AddNewAdressDrawer>
      </div>
      <DrawerFooter>
        <DrawerClose>
          <Button variant="outline" class="w-full">Закрыть</Button>
          <Button class="w-full mt-4">Сохранить</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { Label } from '@components/ui/label'
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@ui/drawer'
import { Edit2, MapPin, Plus } from 'lucide-vue-next'
import AddNewAdressDrawer from './AddNewAdressDrawer.vue'
import { onMounted, ref } from 'vue'
import { getFromLocalStorage } from '@/composables/useLocalStorage'
import type { Address, MappedAddress } from './address.types'

const addresses = ref<MappedAddress[]>()
const selectedAddress = ref()

const getAddresses = () => {
  const savedAddresses = getFromLocalStorage('addresses') as Address[]

  if (addresses) {
    const mapAddressesToString = savedAddresses.map((address: Address) => {
      let label = `${address.cityStreetHouse}`

      if (address.entrance) {
        label += `, под. ${address.entrance}`
      }

      if (address.floor) {
        label += `, эт. ${address.floor}`
      }

      if (address.apartment) {
        label += `, кв. ${address.apartment}`
      }

      if (address.code) {
        label += `, код. ${address.code}`
      }

      return {
        label,
        phone: address.phone ? address.phone : '996 123 321 232'
      }
    })
    addresses.value = mapAddressesToString as MappedAddress[]
    selectedAddress.value = addresses.value[0].label
  }
}

onMounted(() => {
  getAddresses()
})
</script>
