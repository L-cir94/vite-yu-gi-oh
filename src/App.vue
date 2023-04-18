<script>
import { state } from './state'
import axios from 'axios'
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  data() {
    return {
      state
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          state.cards = response.data.data
          state.meta = response.data.meta
        })
        .catch(error => {
          console.error(error.message)
        })
    }
  },
  mounted() {
    this.callApi(state.API_URL)

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
  <header>
    <div class="container">
      <div class="row">
        <h1 class="p-3">Yi-gi-ho</h1>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <section class="cards">
        <div class="row flex-wrap">
          <div class="col-lg-2 g-3" v-for=" card in state.cards">
            <div class="card">
              <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>

  </main>
  <footer>

  </footer>
</template>

<style lang="scss">
@use './assets/partials/variables' as*;
</style>