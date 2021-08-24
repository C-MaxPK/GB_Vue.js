<template>
  <div>
    <v-pagination
      v-model="cur"
      :length="amount"
      :value="0"
      @input="handlePageChange"
      color="teal"
    >
    </v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    handlePageChange(value) {
      this.cur = value;
      this.$emit("paginate", value);
    },
  },
};
</script>
<style scoped>
/* .btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination {
  display: flex;
  align-items: center;
}
.pages {
  cursor: pointer;
  margin: 0 10px;
}
.active {
  font-weight: 600;
} */
</style>

