<template>
  <router-view></router-view>
</template>

<script lang="ts">
    import {provide, ref} from 'vue'
    import {router} from "./router";

    export default {
        name: 'App',
        components: {},
        setup() {
            const clientWidth = document.documentElement.clientWidth;
            const asideVisible = ref(clientWidth > 500);
            provide('asideVisible', asideVisible)
            if (clientWidth <= 500) {
                router.afterEach(() => {
                    asideVisible.value = false;
                })
            }

        }
    }
</script>
