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
  <div class="container d-flex flex-wrap">
    <SingleMedia />
    <SingleMedia />
    <SingleMedia />
    <SingleMedia />
    <SingleMedia />
    <SingleMedia />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
</style>
