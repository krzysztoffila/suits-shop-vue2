<template>
  <select v-model="selectedSize">
    <option v-for="(size, index) in sizes" :key="index" :value="size">
      {{ size }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedSize: "",
      sizes: ["S", "M", "L", "XL"],
    };
  },
  watch: {
    selectedSize(newSize) {
      this.$emit("size-selected", newSize);
    },
  },
};
</script>

<style>
</style>
