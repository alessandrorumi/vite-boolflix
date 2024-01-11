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
      let searchMedia = store.media;

      let movieUrl = store.moviesUrl;
      if (searchMedia !== '') {
        movieUrl += `&query=${searchMedia}`;
      }
      axios.get(movieUrl)
        .then((response) => {
          store.movies = response.data;
        })
        .catch((error) => {
          console.log('Errore Chiamata Api Movies', error);
        });

      let seriesUrl = store.seriesUrl;
      if (searchMedia !== '') {
        seriesUrl += `&query=${searchMedia}`;
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
  min-height: calc(100vh - 60px);
}
</style>
