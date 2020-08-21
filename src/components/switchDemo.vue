<template>
  <div>
    <Switch  v-model:value="defaultVal"></Switch>
  </div>
</template>

<script>
import Switch from '../lib/switch.vue'
import {ref} from 'vue'

export default {
  name: "switchDemo",
  components: {
    Switch
  },
  setup() {
    const defaultVal = ref(false)
    return {defaultVal}
  }
}
</script>

<style scoped>

</style>
