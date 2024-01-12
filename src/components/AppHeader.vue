<script>
import { store } from '../store';

export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header>
    <div class="title">
      <h1><a href="">BoolFlix</a></h1>
    </div>
    <div class="search">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Ricerca" v-model="store.media">
        <button class="btn btn-danger" type="button" @click="$emit('search')">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

header {
  height: 60px;
  padding: 0 2rem;
  background-color: #000;
  @include vert-align-center;
  justify-content: space-between;

  .form-control {
    &:focus {
      outline: none;
    }

    box-shadow: none;
    border-color: #000;
  }
}
</style>
