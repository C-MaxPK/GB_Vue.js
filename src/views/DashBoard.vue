<template>
  <div class="window">
    <button-comp></button-comp>
    <main>
      <div class="short">
        <short-cut @openPaymentAdd="show = !show"></short-cut>
      </div>
      <div class="content-page">
        <router-view></router-view>
        <payment-display
          :curPage="curPage"
          :payment="currentElements"
        ></payment-display>
        <h3 class="total">
          <span>Total:</span>
          <span>{{ getFPV }}</span>
        </h3>
        <pagination-hard
          @paginate="OnChange"
          :n="n"
          :cur="curPage"
          :length="paymentsList.length"
        ></pagination-hard>
      </div>
    </main>
  </div>
</template>

<script>
import ShortCut from "@/components/ShortCut";
import paymentDisplay from "@/components/PaymentsDisplay";
import "@/theme.css";
import buttonComp from "@/components/buttonComp.vue";
import HardPagination from "@/components/HardPagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    "short-cut": ShortCut,
    buttonComp,
    "payment-display": paymentDisplay,
    "pagination-hard": HardPagination,
  },

  data() {
    return {
      show: false,
      page: "",
      curPage: 1,
      n: 5,
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      getFPV: "getFullPrise",
    }),

    currentElements() {
      const { n, curPage } = this;
      return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },
  },
  methods: {
    // OpenAdd() {
    //   this.show = !this.show;
    // },

    OnChange(p) {
      this.curPage = p;
    },
    goToPageNot() {
      this.$router.push({ name: "notfound" });
    },
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),
    addData(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    ...mapActions(["fetchData", "fetchCategory"]),
    previous() {
      this.curPage--;
    },
    next() {
      this.curPage++;
    },
    addPay() {
      this.show = false;
      // this.$store.commit("addDataToPaymentList", data);
    },
  },
  mounted() {
    const page = this.$route.params.page || 1;
    this.curPage = Number(page);
  },
  // created() {
  //   this.fetchData();
  //   if (!this.categorys.length) {
  //     this.fetchCategory();
  //   }
  // },
};
</script>

<style scoped>
.content-page {
  display: flex;
  flex-direction: column;
}
.short {
  width: 450px;
  display: flex;
}
.window {
  width: 500px;
}
.total {
  width: 450px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 20px;
}
main {
  display: flex;
  width: 700px;
  margin: 0 auto;
  flex-direction: column;
}

.link:not(:last-child) {
  margin-right: 10px;
}
</style>