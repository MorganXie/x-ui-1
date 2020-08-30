<template>
  <div>
    <Switch  v-model:value="defaultVal" active-color="" inactive-color="#ea0432"></Switch>
  </div>
</template>

<script>
import Switch from '../lib/Switch.vue'
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
