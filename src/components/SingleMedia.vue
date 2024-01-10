<script>
export default {
  name: 'SingleMedia',
}
</script>

<template>
  <div class="card">
    <h1>Test</h1>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.card {
  width: calc((25%) - 1rem);
  margin: 0 .5rem 1rem;
  height: 100px;
  border: 3px solid red;
}
</style>
