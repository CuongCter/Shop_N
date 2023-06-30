<script setup>
import { reactive } from 'vue';

     defineProps({
        name: String,
    })
    const showPassword = reactive({
        password: false
    })
</script>

<template>
    <div class="password-container">
        <label htmlFor="password" >Password*</label>
            <input 
            :id="name"
            :type="showPassword.password ? 'text' : 'password'"
            placeholder="Enter your password"
            class="input-password"
            />
    </div>
</template>

<style lang="scss" scoped>
    .password-container{
        display: flex;
        flex-direction: column;
        gap: 0.5rem/* 8px */;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        font-weight: 500;
        align-items: flex-start;
        width: 100%;
    }
    .password-container > label{
        font-weight: 700;
    }
    .input-password{
        width: 100%;
        border-width: 1px;
        border-radius: 0.375rem/* 6px */;
        padding-top: 0.75rem/* 12px */;
        padding-bottom: 0.75rem/* 12px */;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        outline: none;
        border: none;
    }
    // .input-password{
    //     width: 100%;    
    //     font-size: 0.875rem/* 14px */;
    //      line-height: 1.25rem/* 20px */;
    // }
    input::placeholder{
        padding-left: 20px;
    }
</style>