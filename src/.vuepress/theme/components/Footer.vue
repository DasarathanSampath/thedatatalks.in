<template>
    <footer class="nav-links">
        <div class="nav-item" v-for="footerLink in footerLinks" :key="footerLink.key">
            <NavLink
                :item="footerLink"
            />
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