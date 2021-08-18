<template>
  <div class="form-control">
    <div class="form">
      <div class="form-input">
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
        <input type="text" placeholder="value" v-model.number="value" />
      </div>
      <button class="btn primary" @click="addPayment">ADD +</button>
      <button class="btn primary" @click="changePayment">Change</button>
    </div>
  </div>
</template>

<script>
import category from "./category";
export default {
  components: { category: category },
  props: {
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
      category: this.finalCategory,
      value: Number(this.finalValue),
      id: "",
    };
  },
  methods: {
    changePayment() {
      const { category, value } = this;
      const date = this.date;
      console.log(date);
      const id = this.popSettings.item.id;
      const data = {
        idx: this.popSettings.id,
        item: { date, category, value, id },
      };
      this.$store.commit("changePayment", data);
      this.$modal.hide();
      this.$popUp.hidePopUp();
    },
    change(data) {
      this.category = data;
    },
    chooseCategory(data) {
      this.category = data;
    },
    addPayment() {
      this.$popUp.hidePopUp();
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
        this.$modal.hide();
        this.$popUp.hidePopUp();
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
button,
input {
  outline: none;
}

button:active,
input:active,
input:focus,
select:focus {
  outline: none;
}
.form-control {
  width: 450px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.form button {
  align-self: center;
  margin-top: 5px;
}
.form-input {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-input input,
select {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
  width: inherit;
  height: 35px;
}
</style>