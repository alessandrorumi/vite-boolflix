<script>
import SingleMedia from './SingleMedia.vue';
import { store } from '../store';

export default {
  name: 'MediaList',
  components: {
    SingleMedia
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="container p-0 pb-5">

    <!-- Film -->
    <h1 class="text-center" v-if="store.movies.results">Film</h1>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4  g-3 d-flex flex-wrap justify-content-center">
      <div class="my-card text-center" v-for="mediaItem in store.movies.results" :key="mediaItem.id">
        <SingleMedia :mediaInfo="mediaItem" />
      </div>
    </div>

    <!-- Serie TV -->
    <h1 class="mt-5 text-center" v-if="store.series.results">Serie TV</h1>
    <div class="d-flex flex-wrap justify-content-center">
      <div class="my-card text-center" v-for="mediaItem in store.series.results" :key="mediaItem.id">
        <SingleMedia :mediaInfo="mediaItem" />
      </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
</style>
