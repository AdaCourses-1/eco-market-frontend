<template>
    <svg :class="{ selected: isSelected }" class="icon" width="28" height="28" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <rect class="icon__rect" width="24" height="24" />
        <path class="icon__itself"
            d="M20.05 6.81774L14.29 2.78774C12.72 1.68774 10.31 1.74774 8.8 2.91774L3.79 6.82774C2.79 7.60774 2 9.20774 2 10.4677V17.3677C2 19.9177 4.07 21.9977 6.62 21.9977H17.4C19.95 21.9977 22.02 19.9277 22.02 17.3777V10.5977C22.02 9.24774 21.15 7.58774 20.05 6.81774ZM12.76 17.9977C12.76 18.4077 12.42 18.7477 12.01 18.7477C11.6 18.7477 11.26 18.4077 11.26 17.9977V14.9977C11.26 14.5877 11.6 14.2477 12.01 14.2477C12.42 14.2477 12.76 14.5877 12.76 14.9977V17.9977Z" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    isSelected: Boolean
})
</script>
