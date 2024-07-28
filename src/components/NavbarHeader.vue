<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__logo logo">
          <RouterLink class="logo__link" to="/">
            <LogoIcon />
            <span>Эко-маркет</span>
          </RouterLink>
        </div>
        <div class="header__user user">
          <img class="user__avatar" src="../assets/user-avatar.png" alt="Amelia Barlow">
          <div class="user__content">
            <h5 class="user__subtitle">Добро пожаловать</h5>
            <h2 class="user__name">Пользователь</h2>
          </div>
        </div>
      </div>
      <div class="header__searchbar">
        <SearchInput />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from './icons/LogoIcon.vue';
import SearchInput from './SearchInput.vue';

</script>


<style lang="scss">
.header {
  padding: 20px 0;
  background-color: #F3F5F7;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__searchbar {
    margin-top: 24px;
  }

  .logo {
    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 16px;
      color: hsl(var(--primary));
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    &__subtitle {
      font-size: 12px;
      font-weight: 600;
      color: var(--light-grey)
    }

    &__name {
      font-size: 16px;
      font-weight: 700;
      color: var(--font-dark);
    }

    &__avatar {
      object-fit: cover;
      height: 44px;
      width: 44px;
    }
  }
}
</style>