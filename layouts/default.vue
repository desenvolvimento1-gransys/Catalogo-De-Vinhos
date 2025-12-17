<template>
  <div>
    <!-- <v-app
      v-if="!startApp && $nuxt.$route.path == '/' && layout.initLoader.active"
      id="app"
      :style="layout.default.app"
    >
      <init-loader />
    </v-app> -->
    <v-app
      id="app"
      :style="{ ...layout.containerDefault, ...layout.default.app }"
    >
      <close-order-dialog v-if="closeOrderModal" />
      <top-bar />
      <div style="height: 120px" class="d-none d-md-block"></div>
      <nuxt v-if="startApp" :style="layout.default.nuxtDivStyle" />
      <div v-else :style="layout.default.nuxtDivStyle"></div>
      <footer-component />
      <whatsapp />
      <back-to-top />
      <cart-dialog />
      <exit-dialog />
      <!-- <construct /> -->
    </v-app>
  </div>
</template>

<script>
import InitLoader from "@/components/initLoader";
import TopBar from "@/components/header/topBar/topBar";
import NavBar from "@/components/header/navBar/navBar";
import FooterComponent from "@/components/footer/footer";
import Whatsapp from "../components/utils/whatsapp.vue";
import BackToTop from "../components/utils/backToTop.vue";
import cartDialog from "@/components/body/orderSection/cart/components/cartDialog";
import exitDialog from "@/components/utils/exitDialog";
import closeOrderDialog from "@/components/body/orderSection/order/components/closeOrderModal";

import { mapState, mapActions } from "vuex";
import Construct from '../pages/construct.vue';

export default {
  head() {
    return {
      style: [
        {
          hid: "vuetifyTheme",
          type: "text/css",
          cssText: this.$vuetify.theme.generatedStyles,
        },
      ],
    };
  },
  name: "default",
  components: {
    InitLoader,
    TopBar,
    NavBar,
    FooterComponent,
    Whatsapp,
    BackToTop,
    cartDialog,
    exitDialog,
    closeOrderDialog,
    Construct,
  },
  computed: {
    ...mapState("Order", ["closeOrderModal"]),
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("User", ["startApp"]),
  },
  methods: {
    ...mapActions("Utils", ["whenAppInit"]),
    ...mapActions("Settings", ["showLayout"]),
  },
  beforeMount() {
    this.showLayout();
    this.whenAppInit();
  },
  data() {
    return {};
  },

  created() {
    this.showLayout();
  },
};
</script>
