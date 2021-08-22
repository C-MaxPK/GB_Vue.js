<template>
  <v-app>
    <v-app-bar app>
      <v-btn plain to="/dashboard"> dashboard </v-btn>
      <v-btn plain to="/calc"> Calculator </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col :cols="6">
            <v-expand-transition>
              <v-card v-show="expand" height="300" width="500">
                <modal-window
                  @test="testik"
                  @changeBtn="btnChange"
                  v-if="modalSettings.name"
                  :settings="modalSettings"
                  :popSettings="popUpSettings"
                  :btn="changeBtn"
                ></modal-window>
              </v-card>
            </v-expand-transition>

            <pop-up
              @changeBtn="btnChange"
              @test="testik"
              :settings="popUpSettings"
              class="popUp"
              v-if="popUpSettings.name"
              :style="{
                top: `${this.popUpSettings.y - 45}px`,
                left: `${this.popUpSettings.x - 130}px`,
              }"
            ></pop-up>
            <router-view
              :btn="changeBtn"
              :expandOpen="expand"
              @test="testik"
            ></router-view>
          </v-col>
          <v-col :cols="1"></v-col>
          <v-col :cols="5">
            <div class="justify-center d-flex align-center">
              <v-progress-circular
                v-if="!paymentList.length"
                :size="70"
                :width="7"
                color="green"
                indeterminate
              ></v-progress-circular>
            </div>
            <chart
              class="mt-16"
              :options="options"
              :categorys="categorys"
              :paymentList="paymentList"
            >
            </chart>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import chart from "./components/chart";

export default {
  name: "App",
  components: {
    chart,
    ModalWindow: () => import("./components/modalWindow.vue"),
    popUp: () => import("./components/ContextMenu.vue"),
  },
  computed: {
    categorys() {
      return this.$store.getters.getCategory;
    },
    paymentList() {
      return this.$store.getters.getPaymentList;
    },
  },

  data() {
    return {
      options: {
        heigth: 100,
        width: 100,
      },
      changeBtn: true,
      expand: false,
      modalSettings: {},
      popUpSettings: {},
    };
  },

  methods: {
    btnChange() {
      this.changeBtn = !this.changeBtn;
    },
    testik() {
      this.expand = !this.expand;
    },
    ...mapActions(["fetchData", "fetchCategory"]),
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
};
</script>
