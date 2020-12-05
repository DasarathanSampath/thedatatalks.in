<template>
    <div v-if="post && user" class="post">
        <div class="user-info">
            <a href="#" >{{user.name}}</a>
            <p> {{userPostsCount}} posts </p>
        </div>
        <div class="post-content">
            <template v-if="!editing">            
                <div>
                    {{post.text}}
                </div>
                <div v-if="authUser">
                    <a v-if="authUser['.key']==user['.key']" @click.prevent="editing = true" href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"> </i> </a>
                </div>
            </template>
            <div v-else>
                <PostEditor
                    :post="post"
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
            authUser: 'auth/authUser'
        }),
        user(){
            return this.$store.state.users.items[this.post.userId]
        },
        userPostsCount(){
            return this.$store.getters['users/userPostsCount'](this.post.userId, this.$lang)
        }
    },
    methods: {
        
    }
}
</script>

<style lang="stylus">

.post {
    display flex
    border-top 1px solid #ccc
    border-left 1px solid #ccc
    box-shadow 4px 4px 4px rgba(0.15, 136, 136, 0.15)
    margin-bottom 20px
    flex-wrap wrap
    padding 1em 0.7em 0.5em
    width 75%
}

.user-info {
    display flex
    flex-direction column    
    justify-content flex-start
    text-align center
    margin-right 5px
}

.post-content {
    display flex    
    padding-left 15px
    padding-right 10px
    font-size 16px
    text-align justify
    line-height 1.5
    word-break break-word
    border-left: 1px solid #ccc;
}

.post-date {
    flex-basis: 100%;
    font-size: 14px;
    text-align: right;
    margin-bottom: 5px;
    padding-right: 7px;
    color: rgba(84, 84, 84, 0.7);
}

@media (max-width: 820px) {
    .post-date {
        order: -1;
        flex-basis: 40%;
        background: rgba(73, 89, 96, 0.06);
        padding-right: 10px;
        padding-top: 16px;
        margin-bottom: 0px;
        color: rgba(84, 84, 84, 0.7);
    }
}
</style>