<script>
export default {
  name: 'SingleMedia',
  props: {
    mediaInfo: Object
  }
}
</script>

<template>
  <span v-if="mediaInfo.title !== undefined">{{ mediaInfo.title }}</span>
  <span v-else>{{ mediaInfo.name }}</span>

  <span v-if="mediaInfo.original_title !== undefined">{{ mediaInfo.original_title }}</span>
  <span v-else>{{ mediaInfo.original_name }}</span>

  <span>{{ mediaInfo.original_language }}</span>
  <span>{{ mediaInfo.vote_average }}</span>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
</style>
