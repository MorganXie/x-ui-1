<template>
  <div>
    <div class="banner">
      <top-nav/>
      <h1>XieUI</h1>
      <h2>一个很水的UI</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script>
    import TopNav from "../components/topNav"
    export default {
        name: "Home.vue",
        components: {TopNav}
    }
</script>

<style scoped lang="scss">

</style>
