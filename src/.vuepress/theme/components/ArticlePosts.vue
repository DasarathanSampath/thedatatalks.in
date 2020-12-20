<template>    
    <div>
        <div v-if="posts">
            <PostList         
            :posts="posts"            
            />
        </div>    
      <PostEditor
        v-if="authId"        
      />
    </div>    
</template>

<script>
import PostList from './PostList'
import PostEditor from './PostEditor'
import {mapGetters} from 'vuex'

export default {    
    components: {
        PostList, PostEditor
    },
    props: {

    },
    data() {
        return {            
            asyncDataStatus_ready: false
        }
        
    },    
    computed:{
        ...mapGetters({
            authId: 'authId'
        }),
        article(){        
            return this.$store.state.articles[this.$lang][this.$frontmatter.id] ? this.$store.state.articles[this.$lang][this.$frontmatter.id] : null
        },
        posts(){
            if(this.article !== null && typeof this.article.posts !== 'undefined') {
                const postIds = Object.values(this.article.posts)
                return Object.values(this.$store.state.posts[this.$lang])
                    .filter(post => postIds.includes(post['.key']))
            }
            return null 
        }
    },
    methods:{        
        fetchData () {
            this.$store.dispatch('fetchArticle', {lnCode: this.$lang, articleId: this.$frontmatter.id})
            .then(article => {     
                if(article !== null && typeof article.posts !== 'undefined') {
                    return  this.$store.dispatch('fetchPosts', {ids: Object.keys(article.posts), lnCode: article.lncode})
                }
                return null
            })            
            .then(posts => {
                if(posts !== null) {
                    return Promise.all(posts.map(post => {   
                         this.$store.dispatch('fetchUser', {userId: post.userId})
                    }))
                }
                return null    
            })
            .then(() => { this.asyncDataStatus_fetched() })
        },
        asyncDataStatus_fetched() {
            this.asyncDataStatus_ready = true
            this.$emit('ready')
        }
    },

   watch: {
     '$route'() {
        this.fetchData()
     }
   },
    mounted() {    
        this.fetchData()
    }
}
</script>