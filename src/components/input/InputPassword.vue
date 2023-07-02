<script setup>
import { reactive } from 'vue';
import { Icon } from '@iconify/vue';

     defineProps({
        Password: Object,
    })
    // const showPassword = reactive({
    //     password: false
    // })
    defineEmits(['change-display-pw'])
</script>

<template>
    <div class="password-container">
        <label htmlFor="password" >Password*</label>
        <div class="password-content">
            <input 
            :id="Password.name"
            :type="Password.type"
            placeholder="Enter your password"
            class="input-password"
            />

            <div class="password-eye">
                <Icon v-if="Password.display" icon="ph:eye" @click="$emit('none-display-pw')" width="25" height="25"/>
                <Icon v-else icon="iconamoon:eye-off-light" @click="$emit('display-pw')" width="25" height="25"/>
            </div>
        </div>
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

    .password-container > .password-content{
        display: flex;
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 0 20px;
        align-items: center;
        border: 1px solid #ccc;
    }
    
    .password-content > .password-eye{
        cursor: pointer;
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

</style>