<template>
    <div v-if="thisLang" class="action-button">
      <a :href="altPath"> 
          {{alternateLang}}
      </a>
    </div>
</template>

<script>

export default {  
  computed:{
    thisLang(){
      return this.$page.frontmatter.altLang
    },
    alternateLang() {
      return this.$lang =='en-US' ? 'தமிழில்' : 'in English'
    },
    altPath() {
      if(this.$lang == 'en-US') {
        return `/ta${this.$page.path}`
      }
      else {
        return (this.$page.path).substring(3)
      }
    },
  }
}
</script>

<style lang="stylus">

</style>
