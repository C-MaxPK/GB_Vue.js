<template>
  <div class="form-control">
    <div class="form">
      <div class="form-input">
        <input
          v-model="date"
          placeholder="date"
          type="tel"
          v-mask="'##/##/####'"
        />
        <category
          :categoryAdd="getCategoryParamFromRoute"
          @changeCategory="change"
          @changeCategotyTest="changeTest"
          @select="chooseCategory"
        ></category>
        <input type="text" placeholder="value" v-model.number="value" />
      </div>
      <button class="btn primary" @click="addPayment">ADD +</button>
    </div>
  </div>
</template>

<script>
import category from "./category";
export default {
  components: { category: category },
  props: {
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
      return Number(this.$route.query?.value) ?? null;
    },
    getCategoryParamFromRoute() {
      return this.$route.params?.category ?? "Food";
    },
  },
  data() {
    return {
      date: "",
      category: "Food",
      value: "",
      id: "",
    };
  },
  methods: {
    changeTest(data) {
      this.category = data;
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
        this.$emit("addNewPayment", data);
      }
    },
  },
  created() {
    if (
      (!this.getValueQueryFromRoute || !this.getCategoryParamFromRoute) &&
      this.$route.name !== "dashboard"
    ) {
      this.$router.push("/dashboard");
    }
    if (this.getCategoryParamFromRoute) {
      this.category = this.getCategoryParamFromRoute;
    } else {
      this.category = "Food";
    }
    this.value = Number(this.getValueQueryFromRoute) || "";
  },
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

.btn {
  width: 150px;
  height: 40px;
  border: 1px solid rgb(45, 182, 129);
  border-radius: 5px;
  color: black;
  background: none;
  font-weight: 600;
}
.btn:active {
  box-shadow: 1px 1px 3px rgb(18, 104, 71);
}
.primary {
  background: rgb(45, 182, 129);
  color: white;
  border: none;
}
</style>