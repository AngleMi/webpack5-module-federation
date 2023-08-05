<template>
  <div>
    Hello,{{ name }}
    <RemoteButton  />
    <List />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    RemoteButton: defineAsyncComponent(() => import("remote/Button")),
    List: defineAsyncComponent(()=> import('./components/list.vue'))
  },
  data() {
    return {
      name: "主应用",
    };
  },
};
</script>
<style>
</style>
