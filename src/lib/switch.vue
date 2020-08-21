<template>
  <button @click="toggleStatus" :class="{checked}"><span></span></button>
</template>

<script>
import {ref} from "vue"

export default {
  name: "switch",
  setup() {
    const checked = ref(false)
    const toggleStatus = () => {
      checked.value = !checked.value
    }
    return {checked, toggleStatus}
  }
}
</script>

<style scoped lang="scss">
$switchHeight: 22px;
$circle: $switchHeight - 4px;
button:focus {
  outline: none;
}

button {
  height: $switchHeight;
  width: $switchHeight*2;
  border: none;
  background: gray;
  border-radius: $switchHeight/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $circle;
  width: $circle;
  background: white;
  border-radius: 50%;
  transition: left 250ms;
}

button.checked {
  background: blue;
}

button.checked > span {
  left: calc(100% - #{$circle} - 2px);
}
</style>