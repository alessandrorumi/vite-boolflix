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

      let seriesUrl = store.seriesUrl;
      let movieUrl = store.moviesUrl;

      if (searchMedia !== '') {
        movieUrl += `&query=${searchMedia}`;
        seriesUrl += `&query=${searchMedia}`;
      }

      // Film
      axios
        .get(movieUrl)
        .then((response) => {
          store.movies = response.data;
        })

      // Serie TV
      axios
        .get(seriesUrl)
        .then((response) => {
          store.series = response.data;
        })
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
