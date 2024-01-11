<script>
export default {
  name: 'SingleMedia',
  props: {
    mediaInfo: Object
  },
  data() {
    return {
      imageUrl: `https://image.tmdb.org/t/p/w342/${this.mediaInfo.poster_path}`,
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
    <img v-if="imageUrl !== 'https://image.tmdb.org/t/p/w342/null'" :src="imageUrl" alt="">
    <div class="no-poster" v-else><img src="../assets/no-poster.png" alt=""></div>

    <!-- Testo -->
    <div class="text p-0">
      <!-- Titolo -->
      <div class="title">
        <h4 v-if="mediaInfo.title !== undefined">{{ mediaInfo.title }}</h4>
        <h4 v-else>{{ mediaInfo.name }}</h4>
      </div>

      <!-- Titolo originale -->
      <div class="original-title">
        <h4 v-if="mediaInfo.original_title !== undefined">{{ mediaInfo.original_title }}</h4>
        <h4 v-else>{{ mediaInfo.original_name }}</h4>
      </div>

      <!-- Flag -->
      <div class="image">
        <img id="flag" v-if="mediaInfo.original_language === 'it'" src="../assets/flags/it.png" alt="">
        <img id="flag" v-else-if="mediaInfo.original_language === 'en'" src="../assets/flags/en.png" alt="">
        <img id="flag" v-else-if="mediaInfo.original_language === 'ja'" src="../assets/flags/ja.png" alt="">
        <img id="flag" v-else src="../assets/flags/world.png" alt="">
      </div>

      <!-- Stelline Film / Serie TV -->
      <div class="stars my-3">
        <!-- Operatore ternario (gestione colore) -->
        <i v-for="star in 5" class="fa-solid fa-star"
          :style="{ color: star <= roundVoteAverage ? '#FFD43B' : '#ccc' }"></i>
      </div>

      <!-- Sinossi -->
      <div class="overview">
        <span>{{ mediaInfo.overview }}</span>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.poster {
  position: relative;
  height: 480px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    transition: scale 0.5s ease, opacity 0.5s ease;
    opacity: 1;
  }

  .text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    scrollbar-width: none;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
    transition-delay: 0s, 0.5s;
    padding: .25rem;
  }

  // Transizione all'Hover
  &:hover {
    img {
      opacity: .1;
      scale: 1.1;
    }

    .text {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }
  }
}

.no-poster {
  width: 100%;
  background-color: black;
}

.image {
  #flag {
    opacity: .75;
    width: 15%;
    height: auto;
  }
}
</style>
