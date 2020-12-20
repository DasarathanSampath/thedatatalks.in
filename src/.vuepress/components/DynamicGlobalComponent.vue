<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      requied: true
    }
  },
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted () {
    import(`./${this.componentName}`).then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
