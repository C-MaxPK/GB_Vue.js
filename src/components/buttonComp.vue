  <template>
  <v-btn color="teal" dark @click="showPaymentForm"
    >{{ text }} <v-icon>mdi-plus</v-icon></v-btn
  >
  <!-- <button @click="showPaymentForm">
    {{ text }}
  </button> -->
</template>

  <script>
// import axios from "axios";
export default {
  props: ["expandOpen"],
  computed: {
    text() {
      if (this.expandOpen) {
        return "Close payment form";
      } else {
        return "ADD NEW COST";
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    showPaymentForm() {
      this.$parent.$emit("test");
      if (!this.expandOpen) {
        this.$modal.show("add-payment", {
          header: "Add payment",
        });
      } else {
        this.$modal.hide();
      }
    },
  },
};
</script>
  <style scoped>
</style>