<template>
  <div id='App'>
    <header>
      <h1 class="title">My personal costs</h1>
      <add-payment-form @addNewPayment='addData' />
    </header>
    <main class="content">
      <payments-display :list="currentElements" />
      <pagination :cur="cur" :n="n" :length="paymentsList.length" @changePage="onChangePage" />
    </main>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex';
import AddPaymentForm from './components/AddPaymentForm';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
       cur: 1,
       n: 5,
    }
  },
  computed: {
    ...mapGetters({
      paymentsList: 'getPaymentsList'
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const {n, cur} = this;
      return this.paymentsList.slice(n * (cur - 1), n * (cur - 1) + n);
    }
  },
  methods: {
    ...mapMutations({
      loadData: 'setPaymentListData',
      addDataToStore: 'addDataToPaymentList',
    }),
    ...mapActions({
      fetchListData: 'fetchData',
    }),
    addData(data) {
      this.addDataToStore(data);
    },
    onChangePage(page) {
      this.cur = page;
    },
  },
  created () {
    // this.paymentsList = this.fetchData();
    // this.$store.commit('setPaymentListData', this.fetchData());
    // this.loadData(this.fetchData());
    // this.$store.dispatch('fetchData');
    this.fetchListData();
  },
}
</script>

<style lang="scss">
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
