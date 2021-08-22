<template>
  <div id="app">
    <header><h1>My personal cost</h1></header>
    <div class="menu">
      <router-link to="/dashboard">DashBoard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/calc">Calculator</router-link>
    </div>
    <transition name="fade">
      <modal-window
        v-if="modalSettings.name"
        :settings="modalSettings"
        :popSettings="popUpSettings"
      ></modal-window>
      <pop-up
        :settings="popUpSettings"
        class="popUp"
        v-if="popUpSettings.name"
        :style="{
          top: `${this.popUpSettings.y + 5}px`,
          left: `${this.popUpSettings.x - 80}px`,
        }"
      ></pop-up>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    popUp: () => import("./components/ContextMenu.vue"),
    ModalWindow: () => import("./components/modalWindow.vue"),
  },
  computed: {
    ...mapGetters({
      categorys: "getCategory",
    }),
  },
  data() {
    return {
      modalSettings: {},
      popUpSettings: {},
    };
  },
  methods: {
    popUpShow(settings) {
      this.popUpSettings = settings;
    },
    popUpHide() {
      this.popUpSettings = {};
    },
    onShow(settings) {
      this.modalSettings = settings;
    },
    onHide() {
      this.modalSettings = {};
    },
    ...mapActions(["fetchData", "fetchCategory"]),
  },
  mounted() {
    this.$popUp.showPopUp();
    this.$popUp.hidePopUp();
    this.$modal.show();
    this.$modal.hide();
  },
  created() {
    this.$popUp.EventBus.$on("popUp", this.popUpShow);
    this.$popUp.EventBus.$on("hideUp", this.popUpHide);
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.fetchData();
    if (!this.categorys.length) {
      this.fetchCategory();
    }
  },

  beforeDestroy() {
    this.$popUp.EventBus.$off("popUp", this.popUpShow);
    this.$popUp.EventBus.$on("hideUp", this.popUpHide);
    this.$modal.EventBus.$off("shown", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
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
