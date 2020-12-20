<template>
    <div>
        <div v-if="authUser">
            <div class="user-loggedin">
                <img :src="authUser.photoURL" height="50" style="float: left;">
                <h3 style="display: inline-block; "> 
                    Signed in as {{authUser.email}} 
                    <img v-if="isLinkedGoogle" src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" alt="">
                    <img v-if="linkedPassword" src="https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_email.svg" alt="">
                </h3>            
                <h3 style="float: right; display: inline-block;">{{registeredUsername}}</h3>
            </div>
            <div style="margin: 1rem 1rem 1rem 1rem;">
                <button class="button-blue" @click="signOut">signOut</button>
                <button class="button-blue" v-if="!isLinkedGoogle" @click="linkGoogle">Link with Google</button>
                <button class="button-blue" v-else @click="unLinkGoogle">unLink with Google</button>
                <button class="button-blue" @click="openProfileForm">Update Profile</button>                
                <button class="button-blue" @click="openEmailForm">Update Email</button>
                <button class="button-blue" @click="openPasswordForm">Update Password</button>
            </div>
            <div id="update-profile" style="display: none; padding: 0 0 0 1rem;">
                <form @submit.prevent="updateProfile" >                    
                    <!-- <input v-model="displayName" placeholder="Display Name" style="display: block;"> -->
                    <input v-model="newUserName" placeholder="New User Name" style="display: block;">
                    <input v-model="photoURL" placeholder="New Your photo url" style="display: block;">
                    <button style="display: block;">Update Profile</button>
                </form>
            </div>
            <div id="update-email" style="display: none; padding: 0 0 0 1rem;">
                <form @submit.prevent="updateEmail">
                    <input v-model="email" placeholder="Your Email" style="display: block;">
                    <button>Update Email</button>
                </form>
            </div>
            <div id="update-password" style="display: none; padding: 0 0 0 1rem;">
                <form @submit.prevent="updatePassword">
                    <input type="password" v-model="newPassword" placeholder="New Password" style="display: block;">
                    <button>Update Password</button>
                </form>
            </div>
        </div>
        <div v-else>            
            <form @submit.prevent='register' style="float: left; padding: 0 2rem 0 0">                
                <input type="email" v-model="email" placeholder="Email" style="display: block;">
                <input type="username" v-model="username" placeholder="User Name" style="display: block;"> 
                <input type="password" v-model="password" placeholder="Password" style="display: block;"> 
                <button class="button-blue">Register</button>               
            </form>
            <form @submit.prevent='signIn'>                
                <input type="email" v-model="emailSignIn" placeholder="Email" style="display: block;">
                <input type="password" v-model="passwordSignIn" placeholder="Password" style="display: block;">
                <button class="button-blue">SignIn</button>
            </form>                  
            <button class="button-blue" style="background-color: #074502; font-weight: 600;" @click="signInWithGoogle">SignIn with Google</button>            
        </div>
        <ArticlePosts v-if="asyncDataStatus_ready"/>
    </div>
</template>

<script>
import ArticlePosts from '@theme/components/ArticlePosts.vue'
import {mapGetters} from 'vuex'
import {removeEmptyProperties} from '../../utils'

export default {
    components: {
        ArticlePosts
    },

    data () {
        return {
            email: '',
            password: '',
            username: '',
            emailSignIn: '',
            passwordSignIn: '',
            photoURL: null,
            newPassword: null,
            // displayName: null,
            newUserName: null,
            asyncDataStatus_ready: false,
            profileFormDisplay: "block",
            passwordFormDisplay: "block",
            emailFormDisplay: "block",
            isLinkedGoogle: '',
            isLinkedPassword: ''
        }
    },

    computed: {
        ...mapGetters({
            authId: 'authId',
            authUser: 'authUser',
            registeredUsername: 'registeredUsername'
        }),
        linkedGoogle () {
            this.isLinkedGoogle = !!this.authUser.providerData.find(provider => provider.providerId === 'google.com')
            return this.isLinkedGoogle
        },
        linkedPassword () {
            this.isLinkedPassword = !!this.authUser.providerData.find(provider => provider.providerId === 'password')
            return this.isLinkedPassword
        },
        authUserId () {
            return this.authUser ? this.authUser.uid : null
        }
    },

    methods: {
        register () {            
            this.$store.dispatch('registerUserWithEmailAndPassword', { email: this.email, password: this.password, username: this.username})                
                .catch(error => {                    
                    alert('We have an error' + error.message)
                })    

        },
        signOut () {            
            this.$store.dispatch('signOut')
                .then(() => {
                    this.email = null
                    this.password = null
                    this.photoURL = null
                    this.passwordSignIn = null
                    this.emailSignIn = null
                    this.newUserName = null
                })
        },
        signIn () {            
            this.$store.dispatch('signInWithEmailAndPassword', {email: this.emailSignIn, password: this.passwordSignIn })
                .catch(error => {                    
                    alert('We have an error' + error.message)
                })
        },
        signInWithGoogle () {            
            this.$store.dispatch('signInWithGoogle')                
                .catch(error => {                    
                    alert('We have an error' + error.message)
                })
        },
        linkGoogle () {
            const provider = new firebase.auth.GoogleAuthProvider()
            this.authUser.linkWithPopup(provider)
                .catch(error => alert(error.message))
                .then(() => {                    
                    this.isLinkedGoogle = true
                    this.$router.push(this.$route.path)
                    alert('Account linked with Google account')
                })
        },
        unLinkGoogle () {
            this.authUser.unlink('google.com')
                .then(() => {                    
                    this.isLinkedGoogle = false
                    this.$router.push(this.$route.path)
                    alert('Account un-linked from Google account')
                })
        },
        updateProfile () {
            this.authUser.updateProfile({
                // displayName: this.displayName,
                newUserName: this.userName,
                photoURL: this.photoURL
            })
            .then(() => {
//                 this.$router.push(this.$route.path)
                this.openProfileForm()
                // this.displayName = null
                this.photoURL = null
            })
        },
        updateEmail () {
            this.authUser.updateEmail(this.email)
                .then(() => {
                    this.openEmailForm()
                    this.email = null
                })
        },
        updatePassword () {
            this.authUser.updatePassword(this.newPassword)
                .catch(error => alert(error.message))
                .then(() => {
                    this.openPasswordForm()
                    this.newPassword = null
                })
                
        },
        openProfileForm () {            
            document.getElementById("update-profile").style.display = this.profileFormDisplay                
            this.profileFormDisplay === "none" ? this.profileFormDisplay = "block": this.profileFormDisplay = "none"
         
        },
        openEmailForm () {            
            document.getElementById("update-email").style.display = this.emailFormDisplay
            this.emailFormDisplay === "none" ? this.emailFormDisplay = "block": this.emailFormDisplay = "none"            
        },
        openPasswordForm () {            
            document.getElementById("update-password").style.display = this.passwordFormDisplay
            this.passwordFormDisplay === "none" ? this.passwordFormDisplay = "block": this.passwordFormDisplay = "none"          
        },
        
        asyncDataStatus_fetched() {
            this.asyncDataStatus_ready = true
            this.$emit('ready')
        }
    },

    mounted() {        
        this.$store.dispatch('initAuthentication')
            .then(() => this.asyncDataStatus_fetched() )
        
    }
}
</script>