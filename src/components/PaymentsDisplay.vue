<template>
  <div class="list">

    <table class='table' cellspacing="0">
      <thead>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.table {
  width: 600px;
  margin-bottom: 20px;
}
th {
  text-align: left;
  border-bottom: 2px solid black;
  padding: 10px;
}
td {
  border-bottom: 1px solid grey;
  padding: 8px;
  color: grey;
}
</style>
