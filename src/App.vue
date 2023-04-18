<script>
import {state} from './state'
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
    callApi(url){
axios
.get(url)
.then(response =>{
  console.log(response.data);
  state.cards = response.data.data
  state.meta = response.data.meta
})
.catch(error =>{
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
                  <h1>Yi-gi-ho</h1>
                </div>
              </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
</template>

<style lang="scss">
@use './assets/partials/variables' as*;
</style>