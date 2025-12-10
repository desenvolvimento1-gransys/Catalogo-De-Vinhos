<template>
  <span>
    <div :style="layout.topBar.mobile.main">
      <!-- <p class="FreteGratis">
        FRETE GRÁTIS ACIMA DE R$399,99
      </p> -->
      <v-row class="px-3">
        <v-col cols="3" align-self="center" align="center" class="d-flex pt-1">
        <button
          class="icon-circle mx-1"
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        >
         
          <v-icon color="white">mdi-menu</v-icon>
        </button>
      </v-col>

        <v-col cols="6" align-self="center" align="center" class="d-flex justify-center pt-3">
          <router-link to="/">
            <v-img
              cover
              :src="typeLogo.items?.[0]?.src || '/suaLogo.png'"
              :style="layout.topBar.mobile.logoStyle"
              alt="Logo da topBar"
            />
          </router-link>
        </v-col>
       <v-col
  cols="3"
  class="d-flex align-center justify-center pt-1"
>
  <div class="cart-wrapper mx-2 d-flex align-center justify-center">
    <span
      @click="setCartModal(!cartDialog)"
      style="cursor:pointer;color: white;size: 24px;"
      class="mdi mdi-heart-outline d-flex align-center justify-center "
    ></span>
  </div>
</v-col>

      </v-row>
    </div>

    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      class="drawer"
    >
      <nav-bar-one @close-drawer2="primaryDrawer.model = false" />
    </v-navigation-drawer>


  </span>
</template>

<script>
import NavBarOne from "@/components/header/navBar/components/mobile/navBarOne";
import navBarSearch from "../../../navBar/components/mobile/navBarSearch.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    NavBarOne,
    navBarSearch,
  },
  data: function () {
    return {
      searchText: "",
      fav: true,
      menu: false,
      message: false,
      hints: true,
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: false,
        type: "temporary",
        clipped: true,
        floating: false,
        mini: false,
      },
      primaryDrawerSearch: {
        model: false,
        type: "temporary",
        clipped: true,
        floating: false,
        mini: false,
      },
    };
  },
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapGetters("Cart", ["totalAmountInCart"]),
    ...mapState("Settings", ["typeLogo"]),
    ...mapState("User", ["user"]),
  },
  methods: {
    ...mapActions("Cart", ["setCartModal"]),
    search() {
      if (this.searchText && this.searchText.length > 0) {
        $nuxt.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
      }
    },
    toCart()
    {
      return   this.$router.push('/carrinho');
    },
    checkUser() {
      return this.user.id ? "/conta/pedidos" : "/login";
    },
  },
};
</script>

<style scoped>
.btnUser {
  transition: transform 0.2s ease;
}
.drawer{
  width: 331px !important;
  z-index: 200;
}
.btnUser:hover {
  transform: scale(1.1);
}
.item-cart-amount {
  color: black;
  text-align: center;
  padding-bottom: 24px !important;
  font-size: 15px;
  /* top: 5px; */
  bottom: 21px;
  left: 12px;
  background: rgba(0, 0, 0, 0.098) !important;
  width: 22px;
  height: 15px !important;
  border-radius: 50px;
  /* z-index: 100; */
}

.userIcon {
  height: 22px;
  width: 22px;
  transition: filter 0.2s ease;
}

.userIcon:hover {
  filter: brightness(0.8);
}
.cart-button {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 200px;
  background-color: #ffffff8a;
}

.icon-circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: #0000008e;
  border: none;
  padding: 0;
}

/* wrapper do carrinho pra grudar a badge */
.cart-wrapper {
 
}

/* badge do carrinho colada no círculo */
.cart-badge {
  position: absolute;
  top: -2px;
  right: -2px;

  min-width: 18px;
  height: 18px;
  border-radius: 999px;

  background: #111;
  color: #fff;
  font-size: 11px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* se quiser, remove esse fundo antigo */
.item-cart-amount {
  display: none;
}

.FreteGratis {
  background-color: #010101 !important;
  color: white !important;
  font-size: 10pt !important;
  font-weight: 1000 !important;
  text-align: center !important;
  transition: all 0.3s ease !important;
  padding: 5px !important;

}
</style>
