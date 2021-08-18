<template>
  <div class="pagination">
    <div class="btn" @click="onClick(cur - 1)">previos</div>
    <div
      class="pages"
      v-for="i in amount"
      :class="cur === i ? 'active' : ''"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div class="btn" @click="onClick(cur + 1)">next</div>
  </div>
</template>

<script>
export default {
  props: {
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
    onClick(p) {
      if (p < 1 || p > this.amount || p === this.cur) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>
<style scoped>
.btn {
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
}
</style>

