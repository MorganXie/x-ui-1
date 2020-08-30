<template>
  <button class="x-button"  :disabled="disabled" :class="classes">
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue'

export default {
  name: "Button",
  props: {
    theme: {type: String, default: 'button'},
    size: {type: String, default: 'normal'},
    type: {type: String, default: 'primary'},
    disabled: {type: Boolean, default: false}
  },
  setup(props) {
    const {theme, size} = props
    const classes = computed(() => {
      return {
        [`x-theme-${theme}`]: theme,
        [`x-size-${size}`]: size,
      }
    })

    return {classes}
  }
}
</script>

<style lang="scss">
$buttonHeight: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$grey: grey;
.x-button {
  box-sizing: border-box;
  height: $buttonHeight;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.x-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.x-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.x-theme-button {
    &.x-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }

    &.x-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }

  &.x-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.x-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }


  &.x-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.x-theme-link, &.x-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>