<template>
    <svg :class="{ selected: isSelected }" class="icon" width="28" height="28" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <rect class="icon__rect" width="24" height="24" />
        <path class="icon__itself"
            d="M12.09 12C14.8514 12 17.09 9.76142 17.09 7C17.09 4.23858 14.8514 2 12.09 2C9.32854 2 7.08997 4.23858 7.08997 7C7.08997 9.76142 9.32854 12 12.09 12Z" />
        <path class="icon__itself"
            d="M12.09 14.5C7.08 14.5 3 17.86 3 22C3 22.28 3.22 22.5 3.5 22.5H20.68C20.96 22.5 21.18 22.28 21.18 22C21.18 17.86 17.1 14.5 12.09 14.5Z" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    isSelected: Boolean
})
</script>
