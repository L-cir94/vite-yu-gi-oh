
import axios from 'axios'
import { reactive } from "vue";
export const state = reactive({
    loading: '',
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0',
    cards: null,
    meta: null,
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
            });
    }
})
