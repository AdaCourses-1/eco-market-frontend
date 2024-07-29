<template>
  <div>
    <div class="welcome">
      <div class="welcome-top text-center">
        <div class="bg-white p-2 rounded-[50%] w-16 h-16 flex items-center justify-center">
          <LogoIcon />
        </div>
        <h1 class="mt-8 mb-6 text-2xl font-bold">Доставим продукты к вам домой</h1>
        <p class="mb-10 text-base text-gray-500">
          Лучшее приложение для доставки в городе для ежедневной доставки свежих продуктов.
        </p>
        <Button @click="handleGoHome">Перейти к покупкам</Button>
      </div>
      <div class="welcome-bottom pt-8">
        <img class="w-full h-full object-cover object-top" src="../assets/welcome.png" alt="" />
      </div>
    </div>
    <div class="welcome-cover">
      <div class="bg-white p-2 rounded-[50%] w-16 h-16 flex items-center justify-center">
        <LogoIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import LogoIcon from '@components/icons/LogoIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGoHome = () => router.push('/')
</script>

<style lang="scss" scoped>
.welcome {
  max-height: 100vh;
  position: relative;
  z-index: 3;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(148, 255, 178, 0.01) 0%, #ffffff 57.41%);

  &-top {
    background: linear-gradient(180deg, rgba(148, 255, 178, 0.01) 0%, #ffffff 57.41%);
    padding: 96px 24px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-bottom {
    height: 40vh;
  }

  &-cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(var(--primary));
    z-index: 4;
    animation: dissapear 1.2s 2.6s forwards ease-in-out;

    > div {
      animation: float 2s infinite ease-in-out;
    }

    svg {
      animation: welcome-loader 2s infinite ease-in-out;
    }
  }

  @keyframes welcome-loader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(-42%);
    }
    50% {
      transform: translateY(-54%);
    }
    100% {
      transform: translateY(-42%);
    }
  }

  @keyframes dissapear {
    0% {
      opacity: 1;
    }
    90% {
      z-index: 4;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
}
</style>
