<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <component
        :popSettings="popSettings"
        :settings="settings"
        :is="settings.name"
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
    settings: Object,
    popSettings: Object,
  },
  data() {
    return {
      testData: this.settings,
    };
  },
  methods: {},
};
</script>

<style>
</style>