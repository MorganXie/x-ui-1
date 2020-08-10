<template>
  <div class="topNav">
    <div class="logo" >LOGO</div>
    <span class="toggleAside" @click="toggleAside"></span>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>

</template>

<script lang="ts">
    import {inject, Ref} from 'vue'

    export default {
        name: "topNav",
        setup() {
            const asideVisible = inject<Ref<Boolean>>('asideVisible')
            const toggleAside = () => {
                asideVisible.value = !asideVisible.value
            }
            return {toggleAside}
        }
    }
</script>

<style scoped lang="scss">
  .topNav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-content: center;

    > .logo {
      cursor: pointer;
      max-width: 6em;
      margin-right: auto;
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    > .toggleAside {
      display: none;
      width: 24px;
      height: 24px;
      background: #ccc;
      position: absolute;
      left: 16px;
      top: 50%;

      transform: translateY(-50%);
    }

    @media (max-width: 500px) {
      .menu {
        display: none
      }
      .logo {
        margin: 0 auto;
      }
      .toggleAside{
        display: inline-block;
      }
    }
  }
</style>
