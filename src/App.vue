<template>
  <div id="app">
    <header><h1>My personal cost</h1></header>
    <div class="menu">
      <router-link to="/dashboard">DashBoard</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({
      categorys: "getCategory",
    }),
  },
  methods: {
    ...mapActions(["fetchData", "fetchCategory"]),
  },
  created() {
    this.fetchData();
    if (!this.categorys.length) {
      this.fetchCategory();
    }
  },
};
</script>

<style>
#app {
  padding: 30px;
  width: 1300px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  width: 450px;
  display: flex;
  padding-left: 130px;
}
.menu {
  display: flex;
  padding-left: 50px;
  margin: 15px 0;
  width: 450px;
  justify-content: space-between;
}
router-view {
  width: 450px;
}
a {
  border: none;
  text-decoration: none;
  color: rgb(45, 182, 129);
  font-size: 20px;
}
a:visited {
  color: rgb(45, 182, 129);
}
.active {
  border-bottom: 2px solid rgb(45, 182, 129);
}
</style>
