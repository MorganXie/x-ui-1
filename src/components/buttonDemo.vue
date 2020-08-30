<template>
  <div> Button实例</div>
  <span>实例1</span>
  <div>
    <Button>这是个按钮</Button>
    <Button theme="text">这是个按钮</Button>
    <Button theme="link">这是个按钮</Button>
  </div>
  <span>实例2</span>
  <div>
    <Button size="big">这是个按钮</Button>
    <Button>这是个按钮</Button>
    <Button size="small">这是个按钮</Button>
  </div>

  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big"  disabled>大大大</Button>
    <Button theme="text" disabled>普普通</Button>
    <Button size="small" disabled theme="text">小小小</Button>
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
