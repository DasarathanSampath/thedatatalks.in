<template>
    <div v-if="post && user" class="post">
        <div class="row">
            <div class="user-info">
                <p style="text-align: center; padding-bottom: 1rem; font-weight: 600;">{{user.username}}</p>    
                <img v-if="user.photoURL" :src="user.photoURL" class="profile-image">        
                <img v-else src="/default-profile.svg" class="profile-image">
                <p style="text-align: center;"> {{userPostsCount}} posts </p>
            </div>
            <div class="post-content">
                <template v-if="!editing">            
                    <div>
                        {{post.text}}
                    </div>
                    <div v-if="authId">
                        <a v-if="authId == post['userId']" @click.prevent="editing = true" href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"> </i> </a>
                    </div>
                </template>
                <div v-else> 
                    <PostEditor
                        :post="post"
                        :authId="authId"
                        @save="editing = false"
                        @cancel="editing = false"
                    />
                </div>
            </div>
            <div class="post-date">
                <div v-if="post.edited" class="edition-info">edited</div>
                <AppDate :timeStamp="post.publishedAt"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import PostEditor from './PostEditor'
import {mapGetters} from 'vuex'

export default {
    props:{
        post:{
            required: true,
            type: Object
        }
    },
     data(){
        return{           
           editing: false
        }
    },
    components:{
        PostEditor
    },    
    computed: {
        ...mapGetters({
            authId: 'authId'            
        }),
        user(){
            return this.$store.state.users[this.post.userId]
        },
        userPostsCount(){
            return this.$store.getters['userPostsCount'](this.post.userId, this.$lang)
        }

    },
    /* methods: {
        fetchData () {            
            firebase.database().ref('users').child(this.post.userId).once('value', snapshot => {
                this.user = snapshot.val()
                this.userPostsCount = Object.keys(this.user[this.$lang]).length
            })
        }
    },
     watch: {
     '$route'() {
         this.fetchData()
     }
   },
    mounted() {
          this.fetchData()
    } */
}
</script>

<style lang="stylus">

.post {
    position relative
    border-top 1px solid #ccc
    border-left 1px solid #ccc
    box-shadow 4px 4px 4px rgba(0.15, 136, 136, 0.15)
    margin-bottom 5px
    flex-wrap wrap
    padding 1em 0.7em 0.5em
    width 75%
}

.user-info {    
    word-break break-word
    float left
    width 28%
    border-right 1px solid #ccc
}

.post-content {    
    float left
    padding 0 0 0 0.5rem
    width 68%
}

.post-date {    
    position absolute
    bottom 5px
    right 10px
    color: rgba(84, 84, 84, 0.7);
}

@media (max-width: 820px) {
    .post {
        width 90%
    }
}
</style>