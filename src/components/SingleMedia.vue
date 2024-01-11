<script>
export default {
  name: 'SingleMedia',
  props: {
    mediaInfo: Object
  },
  data() {
    return {
      imageUrl: `https://image.tmdb.org/t/p/w342/${this.mediaInfo.poster_path}`
    }
  },
  computed: {
    roundVoteAverage() {
      if (this.mediaInfo.vote_average !== undefined) {
        return Math.min(5, Math.ceil(this.mediaInfo.vote_average / 2));
      }
      return '';
    }
  }
}
</script>

<template>
  <!-- Poster -->
  <div class="poster">
    <img :src="imageUrl" alt="">
  </div>

  <div class="title">
    <span v-if="mediaInfo.title !== undefined">{{ mediaInfo.title }}</span>
    <span v-else>{{ mediaInfo.name }}</span>
  </div>

  <div class="original-title">
    <span v-if="mediaInfo.original_title !== undefined">{{ mediaInfo.original_title }}</span>
    <span v-else>{{ mediaInfo.original_name }}</span>
  </div>

  <div class="image">
    <span>{{ mediaInfo.original_language }}</span>
    <img src="" alt="">
  </div>

  <!-- Stelline Film / Serie TV -->
  <div class="stars">
    <!-- Operatore ternario (gestione colore) -->
    <i v-for="star in 5" class="fa-solid fa-star" :style="{ color: star <= roundVoteAverage ? '#FFD43B' : '#ccc' }"></i>
  </div>

  <!-- Sinossi -->
  <div class="overview">
    <span>{{ mediaInfo.overview }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

img {
  width: 100%;
}
</style>
