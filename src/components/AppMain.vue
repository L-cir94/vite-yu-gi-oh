<template>
<main>
    <div class="container">
      <section class="cards mt-4">
        <div class="row flex-wrap">
          <div class="col-lg-2 g-3" v-for=" card in state.cards">
            <div class="card h-100 p-3">
              <img class="img-fluid rounded-2"  :src="card.card_images[0].image_url" alt="">
              <h4 class="text-center mt-2 mb-2">{{ card.name }}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { state } from '../state.js'
export default {
    name: "AppMain",
    setup () {
        
        return {}
    },
    mounted() {
    this.state.callApi(state.API_URL)

  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;
.row{
 background-color: white; 
 padding: 1.5rem;
}
.card{
  background-color:#d58f39;;
}
</style>