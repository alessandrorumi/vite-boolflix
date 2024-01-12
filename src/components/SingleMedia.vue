<script>
import axios from 'axios';
import { store } from '../store';


export default {
  name: 'SingleMedia',
  props: {
    mediaInfo: Object
  },
  data() {
    return {
      imageUrl: `https://image.tmdb.org/t/p/w342/${this.mediaInfo.poster_path}`,
      store,
      cast: null,
    }
  },
  methods: {
    // Flags
    getImagePath: function () {
      const supportedLanguages = ['en', 'it', 'ja'];
      if (!supportedLanguages.includes(this.mediaInfo.original_language)) {
        return new URL('../assets/flags/world.png', import.meta.url).href;
      }
      return new URL(`../assets/flags/${this.mediaInfo.original_language}.png`, import.meta.url).href;
    },
    getCastMembers() {
      let castUrl = `https://api.themoviedb.org/3/movie/${this.mediaInfo.id}/credits?api_key=b3c2594db70cdeb85587a904e8f35132&language=it-IT`;
      axios
        .get(castUrl)
        .then((response) => {
          this.cast = response.data.cast;
        });
    }
  },
  computed: {
    // Arrotondamento voti => stelline
    roundVoteAverage() {
      if (this.mediaInfo.vote_average !== undefined) {
        return Math.min(5, Math.ceil(this.mediaInfo.vote_average / 2));
      }
      return '';
    }
  },
  created() {
    this.getCastMembers();
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

      <!-- Cast -->
      <div v-if="cast" class=" cast">
        <!-- Actors -->
        <div class="actors">
          <ul v-if="cast[0].known_for_department === 'Acting'">
            <li v-for=" actors in cast.slice(0, 5)" :key="actors.id">
              <i class="fa-solid fa-user-large" style="color: #ff3c3c;"></i> {{ actors.name }}
            </li>
          </ul>
        </div>
        <!-- Director -->
        <!-- <div class="director">
          <ul v-if="cast[0].known_for_department === 'Directing'">
            <li v-for="director in cast">
              <i class="fa-solid fa-user-large" style="color: #ff3c3c;"></i> {{ director.name }}
            </li>
          </ul>
        </div> -->
      </div>

      <!-- Flag -->
      <div class="flag">
        <img id="flag-img" :src="getImagePath(mediaInfo.original_language)">
      </div>

      <!-- Stelline Film / Serie TV -->
      <div class="stars my-3">
        <!-- Operatore ternario (gestione colore) -->
        <i v-for=" star  in  5 " class="fa-solid fa-star"
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

.flag {
  #flag-img {
    opacity: .75;
    width: 15%;
    height: auto;
  }
}
</style>
