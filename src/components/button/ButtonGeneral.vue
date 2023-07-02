<script setup>
import { defineProps } from 'vue';
const props = defineProps(['nameClass'])
</script>

<template>
    <button :class="nameClass">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    button{
        color: white;
        background-color: rgba(69 117 216);
        border-radius: 0.375rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }
</style>