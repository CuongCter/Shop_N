import { createStore } from 'vuex';
import router from '../routers'
import { auth } from '../components/configs/firebase.js'
import { createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
      signOut
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        async login ({commit}, details) {
            const {email, password} = details;
            try{
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    
                }
            }
            
        }
    },
})

export default store;