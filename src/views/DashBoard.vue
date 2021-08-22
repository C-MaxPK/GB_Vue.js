<template>
  <div class="window">
    <div class="text-h5 text-md-h3 mb-8">My personal costs</div>

    <button-comp :expandOpen="expandOpen"></button-comp>
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

        <!-- <v-pagination previous next v-model="list" :length="amount" :value="0">
    </v-pagination> -->

        <pagination-hard
          @paginate="OnChange"
          :n="n"
          :cur="curPage"
          :length="paymentsList.length"
          :list="paymentsList"
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
  props: ["expandOpen"],
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
      n: 6,
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
/* .content-page {
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
  width: 1300px;
  margin: 0 auto;
  flex-direction: column;
}

.link:not(:last-child) {
  margin-right: 10px;
} */
</style>