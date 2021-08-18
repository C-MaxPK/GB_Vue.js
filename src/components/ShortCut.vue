<template>
  <div class="wrapper">
    <div class="short-icons" @click="show = !show">
      <span class="short-cut-text"> Quick add</span>
      <span class="lnr lnr-chevron-down"></span>
    </div>
    <div class="short-btns" v-if="show">
      <router-link to="/add/payment/Food?value=200">
        <button @click="$emit('openPaymentAdd')" class="btn btn-short">
          <div class="btn-short-text">food 200</div>
        </button>
      </router-link>
      <router-link to="/add/payment/Auto?value=50">
        <button @click="$emit('openPaymentAdd')" class="btn btn-short">
          <div class="btn-short-text">Auto 50</div>
        </button>
      </router-link>
      <router-link to="/add/payment/Health?value=5000">
        <button @click="$emit('openPaymentAdd')" class="btn btn-short">
          <div class="btn-short-text">Health 5000</div>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 450px;
  margin-bottom: 20px;
}
button {
  margin: 20px 10px;
}
.short-icons {
  margin-top: 15px;
  cursor: pointer;
  align-self: center;
}
.lnr-chevron-down {
  margin-left: 20px;
}
.btn-short {
  position: relative;
  width: 100px;
  height: 30px;
  background-color: rgb(45, 182, 129);
  color: white;
  font-weight: 300;
  font-size: 15px;
  cursor: pointer;
}
</style>