<template>
    <div>
        <header>
            <h1 class="title">My personal costs</h1>
            <add-payment-form @addNewPayment='addData' />
            <router-link to="/add/payment/Food?value=500">добавить еды за 500</router-link>
        </header>
        <main class="content">
            <payments-display :list="currentElements" />
            <pagination :cur="cur" :n="n" :length="paymentsList.length" @changePage="onChangePage" />
        </main>
    </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex';
import AddPaymentForm from '../components/AddPaymentForm';
import PaymentsDisplay from '../components/PaymentsDisplay.vue';
import Pagination from '../components/Pagination.vue';

export default {
    name: 'Dashboard',
    data() {
        return {
            cur: 1,
            n: 5,
        }
    },
    components: {
        AddPaymentForm,
        PaymentsDisplay,
        Pagination,
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
        },
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
        // setPage() {
        //   this.page = location.pathname.slice(1);
        // },
    },
    async created () {
        // this.paymentsList = this.fetchData();
        // this.$store.commit('setPaymentListData', this.fetchData());
        // this.loadData(this.fetchData());
        // this.$store.dispatch('fetchData');
        await this.fetchListData();
        if (this.$route.params?.page) {
            this.onChangePage(this.$route.params.page);
        }
    },
}
</script>

<style>
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>