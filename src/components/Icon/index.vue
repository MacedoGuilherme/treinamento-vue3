<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Copy from '@/components/Icon/Copy.vue'
import Loading from '@/components/Icon/Loading'

export default {
  components: {
    Copy,
    Loading
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
