<template>
  <div class="pagination">
    <button class="btn" :disabled="pageNumber === 0" @click="prevPage">
      Previous
    </button>
    <ul>
      <li
        :class="pageNumber + 1 === p ? 'active' : ''"
        @click="changePage(p)"
        v-for="p in pageCount"
        :key="p"
      >
        {{ p }}
      </li>
    </ul>
    <button
      class="btn"
      :disabled="pageNumber >= pageCount - 1"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
    },
    payment: {
      type: Array,
      default: () => [],
    },
    size: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  computed: {
    pageCount() {
      let l = this.payment.length,
        s = this.size;
      return Math.ceil(l / s);
    },
  },
  data() {
    return {};
  },
  methods: {
    changePage(p) {
      const data = p;
      this.$emit("chosePage", data);
    },
    nextPage() {
      this.$emit("nextPage");
    },
    prevPage() {
      this.$emit("prevPage");
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  width: 450px;
  justify-content: space-between;
}
ul {
  list-style: none;
  display: flex;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
}
li:first-child {
  margin-left: 50px;
}

li:last-child {
  margin-right: 50px;
}
.btn {
  font-weight: 300;
  width: 70px;
  height: 30px;
}
.active {
  font-weight: 600;
}
</style>