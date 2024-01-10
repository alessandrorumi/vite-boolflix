import { reactive } from 'vue'

export const store = reactive({
  // Array e Url Api relativo alla lista dei media
  movies: [],
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b3c2594db70cdeb85587a904e8f35132&language=it-IT',
  media: 'kill+bill',
})