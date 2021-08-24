<template>
  <div>
    <div>
      <v-select
        :items="categorys"
        label="category"
        :value="category"
        v-model="category"
        @change="$emit('select', category)"
      >
      </v-select>
      <!-- <select
        @change="$emit('select', category)"
        placeholder="category"
        v-model="category"
      >
        <option
          :value="category"
          v-for="(category, idx) in categorys"
          :key="idx"
        >
          {{ category }}
        </option>
      </select> -->
      <button @click="openComp = !openComp">Add new category</button>
    </div>
    <add-category @close="closeWindow" v-if="openComp === true"></add-category>
  </div>
</template>

<script>
import addCategory from "./addCategory.vue";
export default {
  props: ["categoryAdd"],
  components: {
    "add-category": addCategory,
  },
  computed: {
    categorys() {
      return this.$store.getters.getCategory;
    },
  },
  data() {
    return {
      openComp: false,
      category: this.categoryAdd,
    };
  },
  methods: {
    closeWindow(data) {
      this.category = data;
      this.openComp = false;
      if (this.openComp === false) {
        this.$emit("changeCategoty", this.category);
      }
      this.$emit("changeCategotyTest", this.category);
    },
  },
};
</script>

<style scoped>
/* select {
  width: 300px;
  margin-right: 10px;
}
.select-form {
  align-items: flex-start;
  flex-direction: column;
  width: 450px;
  display: flex;
  justify-content: space-between;
}
.btn {
  margin: 0;
  width: 140px;
  align-self: baseline;
} */
</style>