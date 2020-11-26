<template>
  <q-banner dense rounded class="text-center text-white" :class="bgColor">
    <span class="text-subtitle1"><slot /></span>
  </q-banner>
</template>

<script>
export default {
  props: ["bgColor"],
};
</script>