<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Copy from '@/components/Icon/Copy.vue'
import Loading from '@/components/Icon/Loading'
import ChevronDown from '@/components/Icon/ChevronDown.vue'

export default {
  components: {
    Copy,
    Loading,
    ChevronDown,
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
