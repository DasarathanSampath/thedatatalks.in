<template>    
    <form @submit.prevent="save">
        <div class="form-group">
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                class="form-input"
                v-model="text"
            >
            </textarea>
        </div>
        <div class="form-action">
            <button v-if="isUpdate" @click.prevent="cancel">Cancel</button>
            <button class="button-blue">{{isUpdate ? 'Update' : 'Submit Post'}}</button>
        </div>
    </form>    
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props:{
        post:{
            type: Object,
            validator: obj => {
                const keyIsValid = typeof obj['.key'] === 'string'
                const textIsValid = typeof obj.text === 'string'
                const valid = keyIsValid && textIsValid
                if(!textIsValid){
                    console.error(' The post prope object must include a \'text\' attribute.')
                }
                if(!keyIsValid){
                    console.error(' The post prope object must include a \'.key\' attribute.')
                }
                return valid
            }
        }
    },
    data(){
        return{
           text: this.post ? this.post.text : ''
        }
    },
    computed:{
        ...mapGetters({
            authId: 'authId'
        }),
        isUpdate(){
            return !!this.post
        }
    },
    methods:{
        save () {                    
            this.persist()
                .then(post => {
                    this.$emit('save', {post})
                })            
        },
        cancel() {
            this.$emit('cancel')
        },
        create(){
            const post = {
                text: this.text,                
                articleId: this.$frontmatter.id,
                lncode: this.$lang
            }
            this.text = ''   
            return this.$store.dispatch('createPost', post)
        },
        update(){
            const payload = {
                id: this.post['.key'],
                text: this.text,
                lncode: this.post['lncode']
            }
            return this.$store.dispatch('updatePost', payload)
        },
        persist () {
            return this.isUpdate ? this.update() : this.create()
        }
    }
}
</script>

<style lang="stylus">


</style>