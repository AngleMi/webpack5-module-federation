<template>
  <div>
    Hello,{{ name }}
    <Button></Button>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Button : defineAsyncComponent(() => import('./components/Button.vue')),
  },
  data() {
    return {
      name: "子应用",
    };
  },
};
</script>
<style>
</style>
