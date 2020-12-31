<template>
    <div>
        <h4> {{userDetails.text1}} </h4>
        <p> {{userDetails.text2}} </p>
        <div v-if="authUser">
        <div class="row">
            <div class="user-loggedin">
                <img v-if="authUser.photoURL" :src="authUser.photoURL" class="profile-image">
                <img v-else src="/default-profile.svg" class="profile-image">
            </div>
            <div>
                <h3 style="flex-wrap: wrap;"> 
                    {{userDetails.signedInAs}}: {{authUser.email}} 
                    <img v-if="isLinkedGoogle" src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg" alt="">
                    <img v-if="linkedPassword" src="https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_email.svg" alt="">
                </h3>            
                <p>{{userDetails.displayName}}: {{registeredUsername}}</p>
                </div>
                <div style="margin: 1rem 1rem 1rem 1rem;">
                    <div class="login-row">
                        <div class="login-column">
                            <button class="button-blue" style="margin-left: 2rem;" @click="openProfileForm" >{{userDetails.updateProfile}}</button>                
                            <button class="button-blue" style="margin-left: 2rem;" @click="openEmailForm" >{{userDetails.updateEmail}}</button>
                            <button class="button-blue" style="margin-left: 2rem;" @click="openPasswordForm" >{{userDetails.updatePassword}}</button>                            
                        </div>
                        <div class="login-column">
                            <button class="button-blue" style="margin-left: 2rem;" @click="signOut" >{{userDetails.signOut}}</button>
                            <button class="button-blue" style="margin-left: 2rem;" v-if="!isLinkedGoogle" @click="linkGoogle" >{{userDetails.linkWithGoogle}}</button>
                            <button class="button-blue" style="margin-left: 2rem;" v-else @click="unLinkGoogle" >{{userDetails.unlinkWithGoogle}}</button>                            
                        </div>
                    </div>
                </div>
                <div id="update-profile" style="display: none; padding: 0 0 0 1rem;">
                    <form @submit.prevent="updateProfile" >                  
                        <div class="form-group">  
                            <label for="newUserName">{{userDetails.newUserName}}</label>
                            <input placeholder="New User Name" style="display: block;" v-model.lazy="formProfileUpdate.newUserName" @blur="$v.formProfileUpdate.newUserName.$touch()" id="newUserName">
                            <template v-if="$v.formProfileUpdate.newUserName.$error">
                                <span v-if="!$v.formProfileUpdate.newUserName.required" class="form-error">{{userDetails.errRequired}}</span>
                                <span v-if="!$v.formProfileUpdate.newUserName.unique" class="form-error">{{userDetails.errUniqueUser}}</span>
                            </template>
                        </div>
                        <div class="form-group">  
                            <label for="photoURL">{{userDetails.newPhotoUrl}}</label>
                            <input placeholder="New Your photo url" style="display: block;" v-model.lazy="formProfileUpdate.photoURL" @blur="$v.formProfileUpdate.photoURL.$touch()" id="photoURL">
                            <template v-if="$v.formProfileUpdate.photoURL.$error">
                                <span v-if="!$v.formProfileUpdate.photoURL.url" class="form-error">{{userDetails.errUrl}}</span>
                                <span v-if="!$v.formProfileUpdate.photoURL.supportedImageFile" class="form-error">{{userDetails.errFileType}}</span>
                                <span v-if="!$v.formProfileUpdate.photoURL.responseOk" class="form-error">{{userDetails.errExistance}}</span>
                            </template>
                        </div>
                        <button class="button-blue" style="display: block; margin-left: 2rem;">{{userDetails.updateProfile}}</button>
                    </form>
                </div>
                <div id="update-email" style="display: none; padding: 0 0 0 1rem;">
                    <form @submit.prevent="updateEmail">
                        <div class="form-group">  
                            <label for="newEmail">{{userDetails.newEmail}}</label>
                            <input placeholder="Your Email" style="display: block;" v-model.lazy="formEmailUpdate.newEmail" @blur="$v.formEmailUpdate.newEmail.$touch()" id="newEmail">
                            <template v-if="$v.formEmailUpdate.newEmail.$error">
                                <span v-if="!$v.formEmailUpdate.newEmail.required" class="form-error">{{userDetails.errRequired}}</span>
                                <span v-if="!$v.formEmailUpdate.newEmail.email" class="form-error">{{userDetails.errEmail}}</span>
                                <span v-if="!$v.formEmailUpdate.newEmail.unique" class="form-error">{{userDetails.errUniqueEmail}}</span>
                            </template>
                        </div>
                        <button class="button-blue" style="display: block; margin-left: 2rem;">{{userDetails.updateEmail}}</button>
                    </form>
                </div>
                <div id="update-password" style="display: none; padding: 0 0 0 1rem;">
                    <form @submit.prevent="updatePassword">
                        <div class="form-group">  
                            <label for="newPassword">{{userDetails.newPassword}}</label>
                            <input type="password" placeholder="New Password" style="display: block;" v-model.lazy="formPasswordUpdate.newPassword" @blur="$v.formPasswordUpdate.newPassword.$touch()" id="newPassword" >
                            <template v-if="$v.formPasswordUpdate.newPassword.$error">
                                <span v-if="!$v.formPasswordUpdate.newPassword.required" class="form-error">{{userDetails.errRequired}}</span>
                                <span v-if="!$v.formPasswordUpdate.newPassword.minLength" class="form-error">{{userDetails.errPassword}}</span>
                            </template>                            
                        </div>
                        <button class="button-blue" style="display: block; margin-left: 2rem;">{{userDetails.updatePassword}}</button>                        
                    </form>
                </div>
            </div>
            </div>
            <div v-else>
            <div class="login-row">
                <div class="login-column2">
                <form @submit.prevent='register' style="padding: 0 2rem 0 0">
                    <div class="form-group">  
                        <label for="email">{{userDetails.email}}</label>
                        <input type="email" placeholder="Email" style="display: block;" v-model.lazy="form.email" @blur="$v.form.email.$touch()" id="email">
                        <template v-if="$v.form.email.$error">
                            <span v-if="!$v.form.email.required" class="form-error">{{userDetails.errRequired}}</span>
                            <span v-if="!$v.form.email.email" class="form-error">{{userDetails.errEmail}}</span>
                            <span v-if="!$v.form.email.unique" class="form-error">{{userDetails.errUniqueEmail}}</span>
                        </template>
                    </div>
                    <div class="form-group">
                      <label for="username">{{userDetails.username}}</label>
                      <input type="username" placeholder="User Name" style="display: block;" v-model.lazy="form.username" @blur="$v.form.username.$touch()" id="username">
                      <template v-if="$v.form.username.$error">
                        <span v-if="!$v.form.username.required" class="form-error">{{userDetails.errRequired}}</span>
                        <span v-if="!$v.form.username.unique" class="form-error">{{userDetails.errUniqueUser}}</span>
                      </template>
                    </div>
                    <div class="form-group">
                        <label for="password">{{userDetails.password}}</label>
                        <input type="password" placeholder="Password" style="display: block;" v-model="form.password" @blur="$v.form.password.$touch()" id="password"> 
                        <template v-if="$v.form.password.$error">
                            <span v-if="!$v.form.password.required" class="form-error">{{userDetails.errRequired}}</span>
                            <span v-if="!$v.form.password.minLength" class="form-error">{{userDetails.errPassword}}</span>
                        </template>
                    </div>
                    <button class="button-blue" style="margin-left: 2rem;">{{userDetails.register}}</button>               
                </form>
                </div>
                <div class="login-column2">                    
                <form @submit.prevent='signIn' style="padding-top: 1rem;">
                    <div class="form-group">  
                        <label for="emailSignIn">{{userDetails.signInEmail}}</label>                
                        <input type="email" placeholder="Sign In Email" style="display: block;" v-model.lazy="formSignIn.emailSignIn" @blur="$v.formSignIn.emailSignIn.$touch()" id="emailSignIn">
                        <template v-if="$v.formSignIn.emailSignIn.$error">
                            <span v-if="!$v.formSignIn.emailSignIn.required" class="form-error">{{userDetails.errRequired}}</span>
                            <span v-if="!$v.formSignIn.emailSignIn.email" class="form-error">{{userDetails.errEmail}}</span>
                        </template>
                    </div>
                    <div class="form-group">  
                        <label for="passwordSignIn">{{userDetails.password}}</label>
                        <input type="password" v-model="formSignIn.passwordSignIn" placeholder="Password" style="display: block;" v-model.lazy="formSignIn.passwordSignIn" @blur="$v.formSignIn.passwordSignIn.$touch()" id="passwordSignIn">
                        <template v-if="$v.formSignIn.passwordSignIn.$error">
                            <span v-if="!$v.formSignIn.passwordSignIn.required" class="form-error">{{userDetails.errRequired}}</span>
                            <span v-if="!$v.formSignIn.passwordSignIn.minLength" class="form-error">{{userDetails.errPassword}}</span>
                        </template>   
                    </div>
                    <button class="button-blue" style="margin-left: 2rem;">{{userDetails.signIn}}</button>
                </form>
                </div>  
            </div>            
            </div>
        <button v-if="!authUser" class="button-blue" style="margin: 2rem 0 0 2rem; background-color: #080; color: white;" @click="signInWithGoogle">{{userDetails.signInWithGoogle}}</button>
        <ArticlePosts v-if="asyncDataStatus_ready && !isHome"/>
    </div>
</template>

<script>
import ArticlePosts from '@theme/components/ArticlePosts.vue'
import {mapGetters} from 'vuex'
import {removeEmptyProperties} from '../../utils'
import { required, email, minLength, url} from 'vuelidate/dist/validators.min.js'
import {uniqueEmail, uniqueUsername, supportedImageFile, responseOk} from '../../utils/vallidators'

export default {
    components: {
        ArticlePosts
    },

    data () {
        return {
            asyncDataStatus_ready: false,
            profileFormDisplay: "block",
            passwordFormDisplay: "block",
            emailFormDisplay: "block",
            isLinkedGoogle: '',
            isLinkedPassword: '',
            formProfileUpdate: {
                newUserName: null,
                photoURL: null
            },
            formEmailUpdate: {
                newEmail: ''
            },
            formPasswordUpdate: {
                newPassword: null
            },
            formSignIn: {
                emailSignIn: '',
                passwordSignIn: ''
            },
            form:{
                email: '',
                password: '',
                username: ''                
            }
        }
    },

    validations: {
        formProfileUpdate: {
            newUserName: {
                required,
                unique: uniqueUsername
            },
            photoURL: {
                url,
                supportedImageFile,
                responseOk
            }
        },
        formEmailUpdate: {
            newEmail: {
                required,
                email,
                unique: uniqueEmail
            }
        },
        formPasswordUpdate: {
            newPassword: {
                required,
                minLength: minLength(6)
            }
        },
        formSignIn: {
            emailSignIn: {
                required,
                email
            },
            passwordSignIn: {
                required,
                minLength: minLength(6)
            }
        },        
        form: {
            username: {
                required,
                unique: uniqueUsername
            },            
            email: {
                required,
                email,
                unique: uniqueEmail
            },                        
            password: {
                required,
                minLength: minLength(6)
            }                        
        }
    },

    computed: {
        ...mapGetters({
            authId: 'authId',
            authUser: 'authUser',
            registeredUsername: 'registeredUsername'
        }),
        isHome(){
            return this.$frontmatter.isHome || this.$frontmatter.id == 'about' || this.$frontmatter.id == 'contact' || this.$frontmatter.id == 'privacy' || this.$frontmatter.id == 'disclaimer'
        },
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
        },
        userDetails(){
            return this.$themeConfig.locales[this.$localePath].userDetails
        },
    },

    methods: {
        register () {   
            this.$v.form.$touch()
            if(!this.$v.form.$invalid){                   
                this.$store.dispatch('registerUserWithEmailAndPassword', { email: this.form.email, password: this.form.password, username: this.form.username})                
                    .catch(error => {                    
                        alert('We have an error' + error.message)
                    })
                    .then(() => {
                        this.form.email = null
                        this.form.password = null
                        this.form.username = null
                    })
            }
        },
        signOut () {            
            this.$store.dispatch('signOut')
                .then(() => {
                    this.form.email = null
                    this.form.password = null                    
                })
        },
        signIn () {            
            this.$v.formSignIn.$touch()
            if (!this.$v.formSignIn.$invalid) {
                this.$store.dispatch('signInWithEmailAndPassword', {email: this.formSignIn.emailSignIn, password: this.formSignIn.passwordSignIn })
                .catch(error => {                    
                    alert('We have an error' + error.message)
                })
                .then(() => {
                    this.formSignIn.emailSignIn = null
                    this.formSignIn.passwordSignIn = null
                })
            }
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
                    // this.$router.push(this.$route.path)
                    alert('Account linked with Google account')
                })
        },
        unLinkGoogle () {
            this.authUser.unlink('google.com')
                .then(() => {                    
                    this.isLinkedGoogle = false
                    // this.$router.push(this.$route.path)
                    alert('Account un-linked from Google account')
                })
        },
        updateProfile () {
            this.$v.formProfileUpdate.$touch()
                if (!this.$v.formProfileUpdate.$invalid) {                            
                    const updates = {
                        username: this.formProfileUpdate.newUserName,
                        photoURL: this.formProfileUpdate.photoURL
                    }            
                        this.authUser.updateProfile(removeEmptyProperties(updates))
                        .then(() => {
                            this.$store.dispatch('updateProfile', { username: this.formProfileUpdate.newUserName, photoURL: this.formProfileUpdate.photoURL })                
                                .then(() => {
                                    this.openProfileForm()
                                    this.formProfileUpdate.newUserName = null
                                    this.formProfileUpdate.photoURL = null
                                })                
                        })
                        .catch(error => {                    
                                alert('We have an error' + error.message)
                        }) 
                }
        },
        updateEmail () {
            this.$v.formEmailUpdate.$touch()
            if (!this.$v.formEmailUpdate.$invalid) {   
                this.authUser.updateEmail(this.formEmailUpdate.newEmail)
                    .then(() => {
                        this.$store.dispatch('updateEmail', { email: this.formEmailUpdate.newEmail })
                        .then(() => {
                            this.openEmailForm()
                            this.formEmailUpdate.newEmail = null
                        })                    
                    })
                    .catch(error => {                    
                        alert('We have an error' + error.message)
                    }) 
            }
        },
        updatePassword () {
            this.$v.formPasswordUpdate.$touch()
            if (!this.$v.formPasswordUpdate.$invalid) {   
                this.authUser.updatePassword(this.formPasswordUpdate.newPassword)
                    .catch(error => alert(error.message))
                    .then(() => {
                        this.openPasswordForm()
                        this.formPasswordUpdate.newPassword = null
                    })
            }    
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

<style lang="stylus" scoped>

.login-row:after
  content ""
  display table
  clear both

.login-column 
  float left
  width 50%

.login-column2 
  float left
  width 50%

@media screen and (max-width 640px) {
    .login-column2{
      width 100%  
    }
  }

input
    border: 1px solid #888888;
    border-radius: 5px;
    box-sizing: border-box;
    font: inherit;
    padding: 5px 10px;
    transition: all 0.3s ease;
    background-color: #F2F2F2;
    min-height: 43px;
    

</style>