<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space />
    <q-btn flat round icon="close" dense v-close-popup />
  </q-card-section>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped></style>