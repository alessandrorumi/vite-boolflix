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
  <div class="container p-0">

    <!-- Film -->
    <h1 class="text-center" v-if="store.movies.results">Film</h1>
    <div class="d-flex flex-wrap justify-content-center">
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

.my-card {
  width: calc((25%) - 1rem);
  margin: 0 .5rem .5rem;
}
</style>
