<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import NavBar from './components/NavBar.vue';
export default {
  setup() {
    onMounted(() => {
      initFlowbite();
    })
    return {}
  },
  components: {
    NavBar,
  },
  computed: {
    url() {
      return this.$route.path == "/login"
    }
  },
}
</script>

<template>
  <NavBar v-if="!url" />
  <RouterView />
</template>

<style></style>
