<script>

import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  data() {
    return {
      state
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
  /* ,
  methods: {

    }
  },
  mounted() {
    this.callApi(state.API_URL)

  }, */

}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
  
</template>

<style lang="scss">
@use './assets/partials/variables' as*;
</style>