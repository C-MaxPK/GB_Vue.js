<template>
  <div>
    <div>
      <div>
        <input
          type="tel"
          v-mask="'##/##/####'"
          placeholder="date dd/mm/yyyy"
          v-model="date"
        />
        <category
          :categoryAdd="finalCategory"
          @changeCategory="change"
          @select="chooseCategory"
        ></category>
        <v-text-field v-model.number="value" label="value"></v-text-field>
        <!-- <input type="text" placeholder="value" v-model.number="value" /> -->
      </div>
      <v-btn
        v-if="btn"
        color="teal"
        depressed
        width="100px"
        dark
        @click="addPayment"
        >ADD +</v-btn
      >
      <v-btn v-if="!btn" color="teal" width="100px" dark @click="changePayment"
        >Change</v-btn
      >
    </div>
  </div>
</template>

<script>
import category from "./category";
export default {
  components: { category: category },
  props: {
    btn: {
      type: Boolean,
    },
    popSettings: {
      type: Object,
    },
    settings: {
      type: Object,
    },

    payment: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
    },
  },
  computed: {
    tooday() {
      if (this.date === "") {
        const date = new Date();
        const day = date.getDate();
        let month = date.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      } else {
        return this.date;
      }
    },

    paymentIdx() {
      return this.$store.getters.getPaymentList.length;
    },
    getValueQueryFromRoute() {
      return Number(this.$route.query?.value);
    },
    getCategoryParamFromRoute() {
      return this.$route.params?.category;
    },

    finalValue() {
      if (this.getValueQueryFromRoute) {
        return this.getValueQueryFromRoute;
      } else if (this.popSettings.name) {
        return this.popSettings.item.value;
      } else return "";
    },

    finalCategory() {
      if (this.getCategoryParamFromRoute) {
        return this.getCategoryParamFromRoute;
      } else if (this.popSettings.name) {
        return this.popSettings.item.category;
      } else return "Food";
    },
  },
  data() {
    return {
      date: "",
      category: null,
      value: null,
    };
  },
  methods: {
    changePayment() {
      const { category, value } = this;
      const date = this.popSettings.item.date;
      const id = this.popSettings.item.id;
      const data = {
        idx: this.popSettings.id,
        item: { date, category, value, id },
      };
      this.$store.commit("changePayment", data);
      this.$modal.hide();

      this.$parent.$emit("test");
      this.$parent.$emit("changeBtn");
      this.$popUp.hidePopUp();
    },
    change(data) {
      this.category = data;
    },
    chooseCategory(data) {
      this.category = data;
    },
    addPayment() {
      const { category, value } = this;
      const data = {
        date: this.tooday,
        category,
        value,
        id: this.paymentIdx + 1,
      };
      if (this.getValueQueryFromRoute && this.getCategoryParamFromRoute) {
        this.$store.commit("addDataToPaymentList", data);
        this.$router.push("/dashboard");
      } else {
        this.$store.commit("addDataToPaymentList", data);
        this.$popUp.hidePopUp();
        this.$parent.$emit("test");
        this.$modal.hide();
      }
    },
  },
  mounted() {
    this.category = this.finalCategory;
    this.value = this.finalValue;
  },

  // created() {
  //   if (
  //     (!this.getValueQueryFromRoute || !this.getCategoryParamFromRoute) &&
  //     this.$route.name !== "dashboard"
  //   ) {
  //     this.$router.push("/dashboard");
  //   }

  //   if (this.getCategoryParamFromRoute) {
  //     this.category = this.getCategoryParamFromRoute;
  //   } else {
  //     this.category = "Food";
  //   }

  //   this.value = Number(this.getValue) || "";

  //   // if (this.popSettings.item.category) {
  //   //   this.category = this.popSettings.item.category;
  //   // }
  // },
};
</script>

<style>
</style>