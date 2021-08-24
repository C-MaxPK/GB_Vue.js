<template>
  <div>
    <input v-model="newCategory" type="text" placeholder="Write new category" />
    <button :disabled="!this.newCategory.length" @click="addCategory">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCategory: "",
    };
  },
  methods: {
    addCategory() {
      this.$store.commit("addNewCategory", this.newCategory);
      this.$emit("close", this.newCategory);
    },
  },
};
</script>

<style scoped>
</style>