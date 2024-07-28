<template>
  <div>
    <div class="profile-top px-4 pb-12">
      <div class="flex items-center justify-between rounded-b-sm mb-3 py-4">
        <h3 class="text-[#fff] font-semibold text-sm">Привет, Сергей</h3>
        <div class="bg-white rounded-[50%] p-2 shadow-md">
          <Settings :size="18" :stroke-width="2" color="#333" />
        </div>
      </div>
      <div class="flex gap-2">
        <Card title="Избранные товары" subtitle="2 товара" />
        <Card title="История заказов" subtitle="9 заказов" />
        <Card title="Адреса доставки" subtitle="1 адрес" />
      </div>
    </div>
    <main class="main content-container p-4 pb-8 profile-main bg-white shadow-sm -mt-4 rounded-xl">
      <h3 class="font-bold text-xl mb-2">Данные профиля</h3>
      <div class="flex flex-col gap-4 mb-8">
        <div>
          <Label class="text-gray-400 text-xs">Ваше ФИО</Label>
          <div class="text-sm mb-1">Сергей Сергеевич</div>
          <Separator />
        </div>
        <div>
          <Label class="text-gray-400 text-xs">Номер телефона</Label>
          <div class="text-sm mb-1">+996 773 223 129</div>
          <Separator />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Почта</Label>
          <div class="text-sm mb-1">sergey@gmail.com</div>
          <Separator />
        </div>
        <div>
          <Label for="email" class="text-gray-400 text-xs">Текущий адрес</Label>
          <div class="text-sm mb-1">Бишкек, район Асанбай, Английский квартал, 3 дом, 16 кв</div>
          <Separator />
        </div>
      </div>
      <div class="flex gap-2">
        <DeleteAccountDialog
          ><Button variant="link" class="text-red-500">Удалить аккаунт</Button></DeleteAccountDialog
        >
        <Button @click="handleGoHome" variant="secondary" class="flex-1">Выйти из аккаунта</Button>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/shared/Profile/Card.vue'
import DeleteAccountDialog from '@/components/shared/Profile/DeleteAccountDialog.vue'
import Button from '@/components/ui/button/Button.vue'
import Label from '@/components/ui/label/Label.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { Settings } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGoHome = () => router.push('/')
</script>
<style lang="scss">
.profile-top {
  background: linear-gradient(200.42deg, #14722e 1.86%, #26b44d 80.39%);
}

.profile-main {
  height: 100%;
  min-height: 100%
}
</style>
