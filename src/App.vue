<template>
  <div id='App'>
    <div class="page-links">
      <router-link to="/dashboard">Dashboard</router-link> / 
      <router-link to="/about">About</router-link> / 
      <button @click="goToPage(404)">404</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
       
    }
  },
  methods: {
    goToPage(pageName) {
      this.$router.push({
        name: pageName
      });
    },
  },
}
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.page-links button {
  background-color: rgb(128, 99, 209);
  width: 80px;
}
</style>
