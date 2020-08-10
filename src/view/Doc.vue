<template>
  <div>
    <top-nav/>
    <div class="content">
      <aside>侧边栏</aside>
      <main>主要内容</main>
    </div>
  </div>
</template>

<script>
    import TopNav from "../components/topNav"
    export default {
        name: "Doc",
        components: {TopNav}
    }
</script>

<style scoped>

</style>
