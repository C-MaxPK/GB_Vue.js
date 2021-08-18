<template>
  <div class="payment">
    <div class="payment-header">
      <span class="payment-header-title">#</span>
      <span class="payment-header-title">Date</span>
      <span class="payment-header-title">Category</span>
      <span class="payment-header-title">Value</span>
    </div>
    <div class="payment-item" v-for="(item, idx) in payment" :key="idx">
      <span class="payment-item-text">{{ item.id }}</span>
      <span class="payment-item-text">{{ item.date }}</span>
      <span class="payment-item-text">{{ item.category }}</span>
      <span class="payment-item-text">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Array,
      default: () => [],
    },
}
}
</script>

<style scoped>
.payment {
  width: 450px;
}
.payment-header {
  box-sizing: border-box;
  height: 30px;
  font-weight: 600;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 5px;
  border-bottom: 1px solid gray;
}

.payment-header-title {
  width: 100px;
}
.payment-header-title:first-child {
  width: 50px;
}
.payment-item {
  border-bottom: 1px solid gray;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.payment-item-text {
  width: 100px;
}

.payment-item-text:first-child {
  width: 50px;
}
.delete {
  font-size: 25px;
  position: absolute;
  right: 0;
  top: -10px;
  cursor: pointer;
}
</style>
