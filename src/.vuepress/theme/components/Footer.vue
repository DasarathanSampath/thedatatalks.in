<template>
    <footer class="nav-links footer-links">
        <div class="nav-item" v-for="footerLink in footerLinks" :key="footerLink.key">
            <NavLink class="footer-text"
                :item="footerLink"
            />
        </div>
        <div style="text-align: center;">
            <i class="footer-slogan"> {{footerSlogan}} </i>
        </div>
    </footer>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
    components: {
        NavLink
    },
    computed: {
        footerLinks(){
            return this.$themeConfig.locales[this.$localePath].foot
        },
        footerSlogan() {
            return this.$themeConfig.locales[this.$localePath].footSlohan
        }
    }
}
</script>

<style lang="stylus" scoped>

.footer-links
     float center
@media screen and (max-width $MQNarrow) {
  .footer-links{
    padding-left 0
  }
}

.footer-text
    padding 1em 2em 0 2em

.footer-slogan
    font-size: 0.9rem; 
    background: gray; 
    font-weight: bold; 
    color: white;
    border-radius 5px
    padding 0 1rem 0 1rem

</style>