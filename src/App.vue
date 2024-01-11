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
      let searchTerm = store.media;

      let movieUrl = store.moviesUrl;
      if (searchTerm !== '') {
        movieUrl += `&query=${searchTerm}`;
      }
      axios.get(movieUrl)
        .then((response) => {
          store.movies = response.data;
        })
        .catch((error) => {
          console.log('Errore Chiamata Api Movies', error);
        });

      let seriesUrl = store.seriesUrl;
      if (searchTerm !== '') {
        seriesUrl += `&query=${searchTerm}`;
      }
      axios.get(seriesUrl)
        .then((response) => {
          store.series = response.data;
        })
        .catch((error) => {
          console.log('Errore Chiamata Api Series', error);
        });
    }


  }
}
</script>

<template>
  <AppHeader @search="searchMedia" />
  <main>
    <MediaList />
  </main>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

main {
  background-color: #111111;
  min-height: 700px;
}
</style>
