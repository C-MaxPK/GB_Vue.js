<template>
  <div id='App'>
    <header>
      <h1 class="title">My personal costs</h1>
      <add-payment-form @addNewPayment='addData' />
    </header>
    <main class="content">
      <payments-display :list="paymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm';
import PaymentsDisplay from './components/PaymentsDisplay';

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
  },
  data() {
    return {
       paymentsList: [],
    }
  },
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    },
    addData(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
  },
  created () {
    this.paymentsList = this.fetchData();
  },
}
</script>

<style lang="scss">
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
