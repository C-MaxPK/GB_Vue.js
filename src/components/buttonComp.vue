  <template>
  <button class="btn primary" @click="showPaymentForm">
    {{ text }}
  </button>
</template>

  <script>
export default {
  computed: {
    text() {
      if (this.$modal.settings) {
        return "Close payment form";
      } else {
        return "ADD NEW COST +";
      }
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    showPaymentForm() {
      this.isOpen = !this.isOpen;
      if (this.isOpen === true) {
        this.$modal.show("add-payment", {
          header: "Add payment",
        });
      } else {
        this.$modal.hide();
        this.isOpen;
      }
      this.$modal.EventBus;
    },
  },
  created() {},
};
</script>
  <style scoped>
button {
  display: block;
}
</style>