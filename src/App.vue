<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import MediaList from './components/MediaList.vue'

export default {
  components: {
    AppHeader,
    MediaList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    searchMedia() {
      let searchUrl = store.apiUrl;
      if (store.movie !== '') {
        searchUrl += `&query=${store.movie}`
      }
      axios
        .get(searchUrl)
        .then((response) => {
          // console.log(response.data.results[0].original_title);
          // console.log(response.data.results[0].overview);
          store.movies = response.data;
        })
        .catch((error) => {
          console.log('Errore Chiamata Api', error);
        })
    },
  },
  // created() {
  //   this.searchMedia();
  // }
}
</script>

<template>
  <AppHeader @search="searchMedia" />
  <main class="px-5">
    <MediaList />
  </main>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

main {
  background-color: rgba($color: #000000, $alpha: .8);
  min-height: 700px;
}
</style>
