<template>
    <footer class="nav-links">
        <div class="nav-item" v-for="footerLink in footerLinks" :key="footerLink.key">
            <NavLink
                :item="footerLink"
            />
        </div>
        <div style="text-align: center;">
            <i style="font-size: 0.9rem; background: black; font-weight: bold; color: white;"> {{footerSlogan}} </i>
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

<style lang="stylus">

.footer-links
    display flex
    padding 1em 1em 1em 5em

.footer-text
    padding 1em 1em 1em 2em

</style>