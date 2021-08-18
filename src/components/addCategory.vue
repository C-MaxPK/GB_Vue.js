<template>
  <div>
    <input
      class="newCategory"
      v-model="newCategory"
      type="text"
      placeholder="Write new category"
    />
    <button
      :disabled="!this.newCategory.length"
      class="addPlus"
      @click="addCategory"
    >
      +
    </button>
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
div {
  width: 450px;
  display: flex;
  align-items: center;
}
.newCategory {
  width: 300px;
}
.addPlus {
  margin-left: 10px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  border: 1px solid rgb(45, 182, 129);
  background-color: rgb(45, 182, 129);
  border-radius: 50%;
  width: 32px;
}
.addPlus:disabled {
  background: rgb(177, 177, 177);
  border: none;
}
</style>