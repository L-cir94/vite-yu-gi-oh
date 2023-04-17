<script>
import axios from 'axios'
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  data() {
    return {
      api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0',

    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
          console.error(err.message);
        })
    }
  },
  mounted() {
    this.callApi(this.api_url)

  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <!--   <AppHeader></AppHeader>
          <AppMain></AppMain>
          <AppFooter></AppFooter> -->
</template>

<style lang="scss">
@use './assets/partials/variables' as*;
</style>