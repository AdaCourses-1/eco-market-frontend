<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger>
      <slot />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-center">
        <DrawerTitle class="mt-4">{{ title }}</DrawerTitle>
      </DrawerHeader>
      <DrawerDescription as="div" class="flex flex-col px-4 gap-4 mb-2">
        <div>
          <Label for="fio" class="text-gray-400 text-xs">Ваше ФИО</Label>
          <Input
            v-model="userInfo.name"
            :placeholder="profile.name"
            class="mt-1 rounded-sm"
            id="fio"
            type="text"
          />
        </div>
        <div>
          <Label for="phone" class="text-gray-400 text-xs">Номер телефона</Label>
          <Input
            v-model="userInfo.phone"
            :placeholder="profile.phone"
            class="mt-1 rounded-sm"
            id="phone"
            type="number"
          />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Почта</Label>
          <Input
            v-model="userInfo.email"
            :placeholder="profile.email"
            class="mt-1 rounded-sm"
            id="email"
            type="email"
          />
        </div>
      </DrawerDescription>
      <DrawerFooter>
        <hr class="mb-2" />
        <div class="mb-1">
          <Button @click="handleCancel" class="w-full mb-4" variant="outline">Отменить</Button>
          <Button @click="handleSaveUserInfo" class="w-full"> Сохранить </Button>
        </div>
        <div class="flex gap-2">
          <DrawerClose @click="handleClose" class="flex absolute right-4 top-4">
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
  DrawerTrigger,
  DrawerDescription
} from '@ui/drawer'
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'
import { nextTick, onMounted, reactive, ref, watch } from 'vue'
import { useProfileStore } from '@/stores/profile'

const props = defineProps<{
  title: string
  isOpen: boolean
}>()
const { profile, setProfile } = useProfileStore()

const isDrawerOpen = ref(props.isOpen)
const userInfo = reactive({
  name: profile.name,
  email: profile.email,
  phone: profile.phone
})

const emit = defineEmits(['onClose'])

watch(
  () => props.isOpen,
  (newVal: boolean) => {
    isDrawerOpen.value = newVal
  }
)

watch(
  () => isDrawerOpen.value,
  (newVal: boolean) => {
    if (!newVal) {
      handleClose()
    }
  }
)

onMounted(() => {
  nextTick(() => {
    userInfo.email = profile.email
    userInfo.name = profile.name
    userInfo.phone = profile.phone
  })
})

const handleClose = () => {
  emit('onClose')
}

const handleCancel = () => {
  isDrawerOpen.value = false
}

const handleSaveUserInfo = () => {
  setProfile(userInfo)
  isDrawerOpen.value = false
}
</script>
