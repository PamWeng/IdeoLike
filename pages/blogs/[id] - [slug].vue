<template>
  <div>
    <p>details</p>
    <p>slugs: {{ slug }}</p>
    <p>id: {{ id }}</p>
  </div>
</template>

<script setup>
const { id, slug } = useRoute().params;

definePageMeta({
  layout: "services",
});
</script>

<style lang="scss" scoped></style>
