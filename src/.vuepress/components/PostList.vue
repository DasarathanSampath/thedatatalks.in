<template>
    <div class="post-list">
        <PostListItem
            v-for="post in posts"
            :post="post"
            :key="post['.key']"
        />
    </div>
</template>

<script>
import PostListItem from './PostListItem'
export default {
    components:{
        PostListItem
    },
    props:{
        posts:{
            required:true,
            type: Array
        }
    }
    
}
</script>

<style lang="stylus">

.post-list {
    margin: 1em 0 0 2em
}

</style>