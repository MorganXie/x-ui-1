<template>
  <div> Button实例</div>
  <span>实例1</span>
  <div>
    <Button>这是个按钮</Button>
    <Button theme="text">这是个按钮</Button>
    <Button theme="link">这是个按钮</Button>
  </div>
</template>

<script>

import Button from "../lib/Button.vue"

export default {
  name: "buttonDemo",
  components: {Button}
}
</script>

<style scoped>

</style>
