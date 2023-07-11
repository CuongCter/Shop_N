<script setup>
import Input from '../components/input/Input.vue';
import Button from '../components/button/Button.vue'
import InputPassword from '../components/input/InputPassword.vue';
import NavigationBrand from '../components/navigation/NavigationBrand.vue';
import { ref } from 'vue'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router'
import { auth } from '../components/configs/firebase'
const Password = ref({
    display: false,
    type: 'password',
    name:''
});
const email = ref("")
const password = ref("");
const errMsg = ref("")
const router = useRouter();

const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value) //trả về một Promise
        .then((data) => {
            console.log("Successfully login");
            console.log(auth.currentUser);
            router.push('/');
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
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
    <div class="login-container">
        <NavigationBrand/>
        <div class="login-content">
            <div class="login-form">
                <h4 class="welcome">Welcome Back!</h4>
                <h3 class="not-account">Don't have an account?
                     <span>
                        <router-link to="/signup" class="sign-up">Sign up</router-link>
                     </span></h3>
                <h3 class="sign-in">
                    Sign In
                </h3>
                <form @submit.prevent="signin" autocomplete="off" class="form-signin">
                    <Input
                    text="Email*"
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    v-model="email"
                    />
                    <InputPassword 
                    :Password="Password" 
                    @display-pw="displayPw" 
                    @none-display-pw="noneDisplayPw"
                    v-model="password"/>
                    <p v-if="errMsg" class="errMsg-login">{{ errMsg }}</p>
                    <Button type="submit" nameClass="buttonSignin">Sign in</Button>
                </form>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .login-container{
        width: 100%;
        height: 100vh;
        // display: flex;
        // justify-content: center;
        // flex-direction: column;
        // align-items: center;
        background-color: #4575d81a;
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
        // background-color: white;
        box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
        backdrop-filter: blur(5px);
        // opacity: 0.5;
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
    .not-account .sign-up{
        color: blue;
        text-decoration: none;
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
    .form-signin > .buttonSignin{
        margin-top: 0.5rem/* 8px */;
        width: 100%;
        height: 45px;
        font-size: 18px;
    }

    .errMsg-login {
        color: red;
        font-size: 12px;
    }
</style>