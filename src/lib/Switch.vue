<template>
  <button class="x-switch" ref="switch" @click="toggleStatus" :class="{checked:value}"><span></span></button>
</template>

<script>

export default {
  name: "switch",
  props: {
    value: Boolean,
    activeColor: String,
    inactiveColor: String,
  },
  setup(props, context) {
    const toggleStatus = () => {
      context.emit('update:value', !props.value)
    }
    const setBackgroundColor = () => {
      // console.log(context)
      // this.$refs.switch.style.backgroundColor = props.value ? props.activeColor : props.inactiveColor
    }

    if (props.activeColor || props.inactiveColor) {
      setBackgroundColor()
    }
    return {toggleStatus, setBackgroundColor}
  },
  watch: {
    value() {
      // if (this.activeColor || this.inactiveColor) {
      //   this.setBackgroundColor()
      // }
    }
  }
}
</script>

<style  lang="scss">

$inactiveColor: #bfbfbf;
$activeColor: #1890ff;
$switchHeight: 22px;
$circle: $switchHeight - 4px;

.x-switch {
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

.x-switch:focus {
  outline: none;
}



</style>