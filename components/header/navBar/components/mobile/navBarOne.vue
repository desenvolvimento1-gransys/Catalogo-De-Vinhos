<template>
  <div :style="layout.navBar.mobile.main" translate="no">
    <v-container
      :style="layout.navBar.mobile.linkStyle"
      v-if="layout.navBar.mobile.linkList"
    >
    <span @click="setCartModal(!cartDialog) " style="cursor:pointer" :style="layout.topBar.icons" class="mdi mdi-heart-outline"><span :style="layout.topBar.iconsText"> Favoritos </span></span>
      <!-- <span v-if="user.id">
        <v-row
          dense
          v-for="(item, index) in layout.navBar.mobile.linkList"
          :key="index"
        >
          <v-col cols="12">
            <v-input hide-details>
              <v-icon :style="item.icon.style">{{ item.icon.class }}</v-icon>
              <router-link :to="item.link" :style="item.style"
                >&nbsp;{{ item.name }}</router-link
              >
            </v-input>
          </v-col>
        </v-row>
      </span>
      <v-row v-else dense>
        <v-col cols="12">
          <v-input hide-details>
            <v-icon :style="layout.navBar.mobile.login.icon.style">{{
              layout.navBar.mobile.login.icon.class
            }}</v-icon>
            <a
              :href="layout.navBar.mobile.login.link"
              :style="layout.navBar.mobile.login.style"
              >&nbsp;{{ layout.navBar.mobile.login.name }}</a
            >
          </v-input>
        </v-col>
      </v-row> -->
    </v-container>

    <v-container>
      <v-row>
        <v-expansion-panels flat>
          <!-- "Quem Somos" e "Assessoria" sem v-expansion-panel-header para evitar erros -->
          <!-- <v-expansion-panel>
            <v-expansion-panel-header>
              <router-link :to="`/quem-somos`" :style="layout.navBar.mobile.itemStyle">
                Quem Somos
              </router-link>
            </v-expansion-panel-header>
          </v-expansion-panel> -->

          <!-- Itens da lista dinâmica navBarList -->
          <v-expansion-panel v-for="(items, i) in navBarList" :key="i">
            <v-expansion-panel-header>
              <router-link
                @click.native.stop
                :to="`/busca${items.route}`"
                :style="layout.navBar.mobile.itemStyle"
              >
                {{ items.name }}
              </router-link>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div
                style="margin-bottom: 10px"
                v-for="detail in items.children"
                :key="detail.name"
              >
                <router-link
                  @click.native.stop
                  :to="`/busca${detail.route}`"
                  :style="layout.navBar.mobile.subitemStyle"
                >
                  {{ detail.name }}
                </router-link>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <router-link
                :to="`/quem-somos`"
                :style="layout.navBar.mobile.itemStyle"
              >
                Quem Somos
              </router-link>
            </v-expansion-panel-header>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <router-link
                :to="`/Inauguracao/inauguracao`"
                :style="layout.navBar.mobile.itemStyle"
              >
                Assessoria
              </router-link>
            </v-expansion-panel-header>
          </v-expansion-panel>
          <!-- <v-expansion-panel>
            <v-expansion-panel-header>
              <router-link :to="`/pronta-entrega`" :style="layout.navBar.mobile.itemStyle">
                Pronta entrega
              </router-link>
            </v-expansion-panel-header>
          </v-expansion-panel> -->
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import { mapState, mapActions, mapGetters } from "vuex";
import cartDialog from "../../../../body/orderSection/cart/components/cartDialogLegacy.vue";

export default {
  components: { cartDialog },
  computed: {
    ...mapState("Settings", ["navBarList"]),
    ...mapState("User", ["user"]),
    ...mapState("Layouts", ["layout"]),
  },
  data: function () {
    return {};
  },
  methods: {
    ...mapActions("Cart", ["setCartModal"]),
    ...mapActions("Cart", ["setCartModal", "callPrimaryDrawer"]),
    search() {
      if (this.searchText && this.searchText.length > 0) {
        $nuxt.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
      }
    },
    checkUser() {
      if (this.user.id) {
        return "/conta/pedidos";
      } else {
        return "/login";
      }
    },
    showCart() {
      if (this.config.showModalInClickCartIcon) {
        this.setCartModal(true);
      } else {
        $nuxt.$router.push({ path: "/carrinho" });
      }
    },
  }
};
</script>

<style scoped>
.v-menu__content {
  left: 0 !important;
}

.subItem >>> .v-btn__content {
  text-transform: none;
  justify-content: left;
}

/* Adicionando alinhamento à esquerda */
.align-left {
  text-align: left;
}

.no-decoration {
  text-decoration: none;
}
</style>