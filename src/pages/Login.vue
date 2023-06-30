<script setup>
import Input from '../components/input/Input.vue';
import ButtonLoading from '../components/button/ButtonLoading.vue'
import InputPassword from '../components/input/InputPassword.vue';
</script>

<template>
    <div class="login-container">
        <div class="login-content">
            <div class="login-form">
                <h4 class="welcome">Welcome Back!</h4>
                <h3 class="not-account">Don't have an account? <span class="sign-up">Sign Up</span></h3>
                <h3 class="sign-in">
                    Sign In
                </h3>
                <form autocomplete="off" class="form-signin">
                    <Input text="Email*" type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    />
                    <InputPassword/>
                    <ButtonLoading/>
                </form>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .login-container{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;;
    }
    .login-container > .login-content{
        width: 100%;
        padding: 1.25rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-content > .login-form{
        max-width: 500px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 2.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        border-radius: 0.5rem;
        background-color: rgb(228, 238, 255);
    }
    .login-form > .welcome{
        font-weight: 600;
        margin-bottom: 0.5rem;
        z-index: 10;
        font-size: 1.25rem/* 20px */;
        line-height: 1.75rem/* 28px */;
    }
    .login-form > .not-account{
        margin-bottom: 1.25rem;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        font-weight: 500;
        z-index: 10;
        
    }
    .not-account > .sign-up{
        color: blue;
    }
    .sign-in{
        font-size: 1.5rem/* 24px */;
        line-height: 2rem/* 32px */;
        font-weight: 600;
        margin-bottom: 1.25rem;
        z-index: 10;
    }
    .form-signin{
        display: flex;
        flex-direction: column;
        gap: 1.25rem/* 20px */;
        width: 85%;
        z-index: 10;
        // width: 100%;

    }  
</style>