<template>
  <div class="wrapper">
    <div class="text-h5 text-md-h4 mb-4 teal--text">
      {{ settings.header }}
    </div>
    <div class="content">
      <component
        :popSettings="popSettings"
        :settings="settings"
        :is="settings.name"
        :btn="btn"
      ></component>
    </div>
  </div>
</template>

<script>
import AddPayment from "./addPayment.vue";
import Calc from "../components/calc.vue";
export default {
  components: {
    "add-payment": AddPayment,
    Calc,
  },
  props: {
    btn: Boolean,
    settings: Object,
    popSettings: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>