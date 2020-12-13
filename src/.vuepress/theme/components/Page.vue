<template>
  <main class="page">
    <slot name="top" />
    <div v-if="!isHome">
      <call-ad-sense addType="horizontal"/>
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
import CallAdSense from '../../components/callAdSense'

export default {
  components: { PageEdit, PageNav, CallAdSense },
  props: ['sidebarItems'],
  computed:{
    isHome(){
      return this.$frontmatter.isHome
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
