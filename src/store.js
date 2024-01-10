import { reactive } from 'vue'

export const store = reactive({
  // Array e Url Api relativo alla lista dei film
  movies: [],
  moviesUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b3c2594db70cdeb85587a904e8f35132&language=it-IT',

  media: '',

  // Array e Url Api relativo alla lista delle serie Tv
  series: [],
  seriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=b3c2594db70cdeb85587a904e8f35132&language=it-IT',
})