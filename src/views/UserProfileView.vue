<template>
  <div>
    <div class="profile-top px-4 pb-12">
      <div class="flex items-center justify-between rounded-b-sm mb-3 py-4">
        <h3 class="text-[#fff] font-semibold text-sm">Привет, Сергей</h3>
        <SettingsDrawer
          title="Настройки"
          :isOpen="isProfileSettingsOpen"
          @on-close="handleCloseProfileSettingDrawer"
        >
          <div class="bg-white rounded-[50%] p-2 shadow-md">
            <Settings :size="18" :stroke-width="2" color="#333" />
          </div>
        </SettingsDrawer>
      </div>
      <div class="flex gap-2">
        <Card title="Избранные товары" subtitle="2 товара" />
        <Card title="История заказов" subtitle="9 заказов" />
        <AddressesDrawer>
          <Card
            class="min-h-full"
            title="Адреса доставки"
            :subtitle="`Адресов : ${profile.addresses.length}`"
          />
        </AddressesDrawer>
      </div>
    </div>
    <main class="main profile-main  content-container p-4 bg-white shadow-sm -mt-4 rounded-xl">
      <h3 class="font-bold text-xl mb-2">Данные профиля</h3>
      <div class="flex flex-col gap-4 mb-8">
        <div>
          <Label class="text-gray-400 text-xs">Ваше ФИО</Label>
          <div class="text-sm mb-1">{{ profile.name }}</div>
          <Separator />
        </div>
        <div>
          <Label class="text-gray-400 text-xs">Номер телефона</Label>
          <div class="text-sm mb-1">{{ profile.phone }}</div>
          <Separator />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Почта</Label>
          <div class="text-sm mb-1">{{ profile.email }}</div>
          <Separator />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Текущий адрес</Label>
          <div class="text-sm mb-1">{{ profile.selectedAddress?.label }}</div>
          <Separator />
        </div>
      </div>
      <div class="flex gap-2 flex-wrap-reverse">
        <Button v-if="!profile.name" @click="handleOpenProfileSettingDrawer" class="flex-1"
          >Заполнить профиль</Button
        >
        <template v-else>
          <DeleteAccountDialog
            ><Button variant="link" class="text-red-500 flex-1"
              >Удалить аккаунт</Button
            ></DeleteAccountDialog
          >
          <Button @click="handleGoHome" variant="secondary" class="flex-1"
            >Выйти из аккаунта</Button
          >
        </template>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import AddressesDrawer from '@/components/shared/Profile/AddressesDrawer.vue'
import Card from '@/components/shared/Profile/Card.vue'
import DeleteAccountDialog from '@/components/shared/Profile/DeleteAccountDialog.vue'
import SettingsDrawer from '@/components/shared/Profile/SettingsDrawer.vue'
import Button from '@/components/ui/button/Button.vue'
import Label from '@/components/ui/label/Label.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { getFromLocalStorage } from '@/composables/useLocalStorage'
import { useProfileStore } from '@/stores/profile'
import { Settings } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const isProfileSettingsOpen = ref<boolean>(false)

const handleOpenProfileSettingDrawer = () => {
  isProfileSettingsOpen.value = true
}

const handleCloseProfileSettingDrawer = () => {
  isProfileSettingsOpen.value = false
}

const router = useRouter()
const { profile } = useProfileStore()
const handleGoHome = () => router.push('/')

</script>
<style lang="scss">
.profile-top {
  background: linear-gradient(200.42deg, #14722e 1.86%, #26b44d 80.39%);
}

.profile-main {
  height: 100%;
  min-height: 70vh;
}
</style>
