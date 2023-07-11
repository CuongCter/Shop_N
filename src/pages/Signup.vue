<script setup>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue'
import InputPassword from '../components/input/InputPassword.vue';
import NavigationBrand from '../components/navigation/NavigationBrand.vue';
import { ref } from 'vue'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const Password = ref({
    display: false,
    type: 'password',
    // name:''
});

const name = ref("");
const email = ref("")
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value) //trả về một Promise
        .then((data) => {
            console.log("Successfully register");
            router.push('/login');
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message)
        })
}

const displayPw = () => {
    Password.value.display = !Password.value.display;
    Password.value.type = 'text';
}

const noneDisplayPw = () => {
    Password.value.display = !Password.value.display;
    Password.value.type = 'password';
}

</script>

<template>
    <div class="signup-container">
        <NavigationBrand/>
        <div class="signup-content">
            <div class="signup-form">
                <h4 class="welcome">Welcome To Our Website!</h4>
                <h3 class="have-account">Already have an account?
                     <span>
                        <router-link class="sign-in" to="/login">Sign in</router-link>
                     </span></h3>
                <h3 class="sign-up">
                    Sign up
                </h3>
                <form @submit.prevent="register" autocomplete="off" class="form-signup">
                    <Input
                    text="Name*" 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    v-model="name"/>
                    <Input text="Email*" type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    v-model="email"/>
                    <InputPassword 
                    :Password="Password"
                    @display-pw="displayPw" 
                    @none-display-pw="noneDisplayPw"
                    v-model="password"/>
                    <Button type="submit" nameClass="buttonSignup">Create an account</Button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .signup-container{
        width: 100%;
        height: 100vh;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        background-color: #4575d81a;
    }
    .signup-container > .signup-content{
        width: 100%;
        padding: 1.25rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .signup-content > .signup-form{
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
        // background-color: white;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
        backdrop-filter: blur(5px);
        // opacity: 0.5;
    }

    .signup-form > .welcome{
        font-weight: 600;
        margin-bottom: 0.5rem;
        z-index: 10;
        font-size: 1.25rem/* 20px */;
        line-height: 1.75rem/* 28px */;
    }
    .signup-form > .have-account{
        margin-bottom: 1.25rem;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        font-weight: 500;
        z-index: 10;
        
    }
    .have-account .sign-in{
        color: blue;
        font-size: 14px;
        cursor: pointer;
        text-decoration: none;
    }
    .sign-up{
        font-size: 1.5rem/* 24px */;
        line-height: 2rem/* 32px */;
        font-weight: 600;
        margin-bottom: 1.25rem;
        z-index: 10;
    }
    .form-signup{
        display: flex;
        flex-direction: column;
        gap: 1.25rem/* 20px */;
        width: 85%;
        z-index: 10;
        // width: 100%;
    }  

    .form-signup > .buttonSignup{
        margin-top: 0.5rem/* 8px */;
        width: 100%;
        height: 45px;
        font-size: 18px;
    }
</style>