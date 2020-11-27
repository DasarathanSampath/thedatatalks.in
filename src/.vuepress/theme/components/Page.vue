<template>
  <main class="page">
    <slot name="top" />
    <div v-if="thisLang" class="action-button" style="padding-top: 4em;">
      <a :href="altPath"> 
          {{alternateLang}}
      </a>
    </div>
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed:{
    isHome(){
      return this.$frontmatter.isHome
    },
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
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
