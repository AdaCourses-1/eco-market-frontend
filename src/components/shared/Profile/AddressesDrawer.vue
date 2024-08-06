<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger>
      <slot />
    </DrawerTrigger>
    <DrawerContent class="min-h-[70vh]">
      <DrawerHeader class="">
        <DrawerTitle>Адреса доставки</DrawerTitle>
      </DrawerHeader>
      <DrawerDescription as="div" class="address-list pb-2 px-4 max-h-[50vh] overflow-y-auto">
        <RadioGroup
          v-if="addresses?.length"
          v-model="selectedAddress"
          :default-value="profile.selectedAddress?.id"
        >
          <Separator class="mb-2" />
          <div v-for="address in addresses" :key="address.id" class="flex items-center space-x-2">
            <RadioGroupItem :id="address.label" :value="address.id" class="min-w-4" />
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
        <AddNewAdressDrawer>
          <div class="add-new-address justify-between flex items-center gap-2 cursor-pointer">
            <MapPin :size="18" :stroke-width="2" class="stroke-[hsl(var(--primary))]" />
            <span class="text-[hsl(var(--primary))] flex-1 text-left">Добавить новый адрес</span>
            <Plus class="stroke-[hsl(var(--primary))]" />
          </div>
        </AddNewAdressDrawer>
      </DrawerDescription>
      <DrawerFooter>
        <DrawerClose>
          <Button variant="outline" class="w-full">Закрыть</Button>
        </DrawerClose>
        <Button @click="handleSave" class="w-full mt-4">Сохранить</Button>
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
  DrawerTrigger,
  DrawerDescription
} from '@ui/drawer'
import { Edit2, MapPin, Plus } from 'lucide-vue-next'
import AddNewAdressDrawer from './AddNewAdressDrawer.vue'
import { computed, nextTick, onMounted, ref } from 'vue'
import type { Address, MappedAddress } from './profile.types'
import { useProfileStore } from '@/stores/profile'

const { profile, setCurrentAddress } = useProfileStore()
const selectedAddress = ref()
const isDrawerOpen = ref(false)

const addresses = computed(() => {
  if (profile.addresses.length) {
    return profile.addresses.map((address: Address) => {
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
        id: address.id,
        label,
        phone: address.phone ? address.phone : '996 123 321 232'
      }
    })
  }

  return []
})

onMounted(() => {
  nextTick(() => {
    selectedAddress.value = profile.selectedAddress?.id
  })
})

const handleSave = () => {
  if (selectedAddress.value && addresses.value?.length) {
    const findAddress = addresses.value.find((address) => address.id == selectedAddress.value)
    setCurrentAddress(findAddress as MappedAddress)
  }

  isDrawerOpen.value = false;
}
</script>
