<script>
export default {
  name: 'SingleMedia',
  props: {
    mediaInfo: Object
  }
}
</script>

<template>
  <span>{{ mediaInfo.title }}</span>
  <span>{{ mediaInfo.original_title }}</span>
  <span>{{ mediaInfo.original_language }}</span>
  <span>{{ mediaInfo.vote_average }}</span>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
</style>
