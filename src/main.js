import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/Router'
import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCYRWZMJufAl4cZo7VLDI_gQkxpmge3orI",
    authDomain: "testproject-383515.firebaseapp.com",
    projectId: "testproject-383515",
    storageBucket: "testproject-383515.appspot.com",
    messagingSenderId: "402891748125",
    appId: "1:402891748125:web:6b6aab5c899097e854a7f4",
    measurementId: "G-PGV4WGY0Z2"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
