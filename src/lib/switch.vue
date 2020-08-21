<template>
  <button @click="toggleStatus" :class="{checked:value}"><span></span></button>
</template>

<script>
import {ref} from "vue"

export default {
  name: "switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleStatus = () => {
      context.emit('update:value', !props.value)
    }
    return {toggleStatus}
  }
}
</script>

<style scoped lang="scss">

$inactiveColor: #bfbfbf;
$activeColor: #1890ff;
$switchHeight: 22px;
$circle: $switchHeight - 4px;


button:focus {
  outline: none;
}

button {
  cursor: pointer;
  height: $switchHeight;
  width: $switchHeight*2;
  border: none;
  background: $inactiveColor;
  border-radius: $switchHeight/2;
  position: relative;
  transition: background-color 250ms;

  &.checked {
    background: $activeColor;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $circle;
    width: $circle;
    background: white;
    border-radius: 50%;
    transition: all 250ms;
  }

  &.checked > span {
    left: calc(100% - #{$circle} - 2px);
  }

  &:active {
    > span {
      width: $circle + 4px;
    }
  }

  &.checked:active {
    > span {
      width: $circle + 4px;
      margin-left: -4px;
    }
  }
}


</style>