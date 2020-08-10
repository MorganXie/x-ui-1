<template>
  <div>
    <top-nav/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主要内容</main>
    </div>
  </div>
</template>

<script lang="ts">
    import TopNav from "../components/topNav.vue"
    import {inject, Ref} from "vue";

    export default {
        name: "Doc",
        components: {TopNav},
        setup(){
            const asideVisible = inject<Ref<Boolean>>('asideVisible')
            return {asideVisible}
        }
    }
</script>

<style scoped lang="scss">
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;

    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
    @media (max-width: 500px) {
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
    }
  }
</style>
