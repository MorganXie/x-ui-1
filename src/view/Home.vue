<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>XieUI</h1>
      <h2>一个很水的UI</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
    import TopNav from "../components/topNav.vue"
    export default {
        name: "Home.vue",
        components: {TopNav}
    }
</script>

<style scoped lang="scss">
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>
