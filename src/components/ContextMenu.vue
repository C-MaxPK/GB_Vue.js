<template>
  <div class="context">
    <div class="arrow"></div>
    <div class="context-content">
      <span class="lnr lnr-cross closePop" @click="closePop"></span>
      <div class="context-line">
        <span class="lnr lnr-pencil context-icon"></span>
        <span class="content-text" @click="changePayment">Редактировать</span>
      </div>
      <div class="context-line" @click="deletePayment">
        <span class="lnr lnr-trash context-icon"></span>
        <span class="content-text">Удалить</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  props: ["settings"],
  computed: {},
  methods: {
    ...mapActions(["fetchData", "fetchCategory", "test"]),
    changePayment() {
      this.$modal.show("add-payment", {
        header: "Add payment",
        idx: this.settings.id,
      });
      this.$emit("test");
      this.$emit("changeBtn");
    },
    closePop() {
      this.$popUp.hidePopUp();
    },
    async deletePayment() {
      await axios.delete(
        `https://cost-vue-default-rtdb.firebaseio.com/payments/${
          this.settings.item.id - 1
        }.json`
      );
      this.$store.commit("deletePayment", this.settings.id);

      this.$popUp.hidePopUp();
    },
  },
};
</script>

<style scoped>
.context {
  position: absolute;
  background: white;
  width: 150px;
  height: 65px;
  border: 1px solid;
  z-index: 1000;
  top: 23px;
  right: -15px;
  border: 1px solid black;
}
.closePop {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.context-content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.context-line {
  margin-top: 7px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
}

.context-line:hover {
  background-color: rgb(197, 197, 197);
}
.context-icon {
  margin: 0 10px;
}
</style>