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
  }
}
</script>

<template>
  <img :src="imageUrl" alt="">

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


  <span>{{ mediaInfo.vote_average }}</span>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

img {
  width: 100%;
}
</style>
