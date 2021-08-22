<template>
  <div>
    <div>About</div>
  </div>
</template>

<script>
export default {
  methods: {
    showCalcForm() {
      this.$modal.show("calc", {});
    },
  },
};
</script>

<style scoped>
div {
  width: 450px;
}
</style>