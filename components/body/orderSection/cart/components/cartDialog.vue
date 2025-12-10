<template>
  <span v-if="cartDialog">
    <div class="backdrop" @click="closeDrawer"></div>
    <v-layout>
      <v-navigation-drawer
        ref="cartDrawer"
        right
        v-model="cartDialog"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        class="drawer"
        @click.stop
      >
        <span>
          <v-row
            :style="layout.cart.cartDialog.headerRow.style"
            style="margin: 0 auto !important"
          >
            <v-col
              :style="layout.cart.cartDialog.titleCol.style"
              cols="11"
              sm="11"
            >
              <p
                :style="layout.cart.cartDialog.titleCol.textStyle"
                :class="layout.cart.cartDialog.titleCol.textClass"
              >
                {{ layout.cart.cartDialog.titleCol.title }}
              </p>
            </v-col>
            <v-col cols="1" align="right">
              <button @click.stop="setCartModal(!cartDialog)" icon>
                <i class="mdi mdi-close"></i>
              </button>
            </v-col>
          </v-row>
        </span>
        <cart-dialog-legacy />
      </v-navigation-drawer>
    </v-layout>
  </span>
</template>

<script>
import cartDialogLegacy from "@/components/body/orderSection/cart/components/cartDialogLegacy";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    cartDialogLegacy,
  },
  computed: {
    ...mapState("Cart", ["cartDialog", "primaryDrawer"]),
    ...mapState("Layouts", ["layout", "config"]),
  },
  methods: {
    ...mapActions("Cart", ["setCartModal", "callPrimaryDrawer"]),
    closeDrawer() {
      this.setCartModal(false);
    },
  },
};
</script>

<style scoped>
.cart-icon {
  font-size: 29px;
}
.drawer {
  width: 400px !important;
}
.user-icon {
  font-size: 17px;
}
.order-class {
  font-size: 19px;
}
.order-class2 {
  font-size: 19px;
}
.logo-container {
  display: flex;
  align-items: center;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 400px; /* Adjust this value to match the width of your drawer */
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 998; /* Ensure it is behind the drawer */
}
@media only screen and (max-width: 600px) {
  .backdrop {
    position: none;
    top: 0;
    left: 0;
    right: 0px; /* Adjust this value to match the width of your drawer */
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1; /* Ensure it is behind the drawer */
  }
}
</style>
