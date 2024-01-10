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
  },
}
</script>

<template>
  <div class="container">

    <!-- Film -->
    <h1 class="text-center">Film</h1>
    <div class="d-flex flex-wrap" v-if="store.movies.results">
      <div class="card p-3 text-center" v-for="mediaItem in store.movies.results" :key="mediaItem.id">
        <SingleMedia :mediaInfo="mediaItem" />
      </div>
    </div>

    <!-- Serie TV -->
    <h1 class="mt-5 text-center">Serie Tv</h1>

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.card {
  width: calc((25%) - 2rem);
  margin: 0 .5rem 1rem;
  min-height: 100px;
  border: 3px solid red;
}
</style>
