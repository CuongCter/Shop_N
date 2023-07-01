
<script setup>
    defineProps({
        text: String,
        type: String,
        name: String,
        placeholder: String,
        class: String,
        // control:String,
    })
</script>

<template>
    <div class="input-component">
        <label :for="name">{{ text }}</label>
        <input :type="type"
            :id="name"
            :placeholder="placeholder"
            :class="class"
        >
    </div>
</template>



<style lang="scss" scoped>
    .input-component{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        font-weight: 500;
        align-items: start;
        width: 100%;
    }
    .input-component > label{
        font-weight: 700;
    }
    .input-component > input{
        width: 100%;
        border-width: 1px;
        border-radius: 0.375rem/* 6px */;
        padding-top: 0.75rem/* 12px */;
        padding-bottom: 0.75rem/* 12px */;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        outline: none;
        border: none;
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid #ccc;
    }

</style>