<template>
  <div :style="layout.navBar.mobile.main">
    <v-col @click="closeDrawer" class="closeButton">
      <v-icon color="#43310e">mdi-close</v-icon>
    </v-col>
    <div style="height: 100%" :style="layout.navBar.mobile.navItemsStyle">
      <v-container>
        <v-row>
          <v-col cols="12" align="start" align-self="center" class="mr-2 pt-4">
            <div class="searchContainer">
              <input
                type="text"
                class="searchProdut"
                v-model="searchText"
                @keydown.enter="search"
                placeholder="O que você está buscando?"
              />
              <v-icon class="searchIcon" @click="search">mdi-magnify</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Settings", ["navBarList"]),
    ...mapState("User", ["user"]),
    ...mapState("Layouts", ["layout"]),
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    closeDrawer() {
      this.$emit("close-drawer");
    },
    search() {
      if (this.searchText && this.searchText.length > 0) {
        this.$nuxt.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
        this.closeDrawer(); // Fecha o drawer após a pesquisa
      }
    },
  },
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

.closeButton {
  border-bottom: 1px solid #fff; /* Borda branca de 2px */
  padding: 8px; /* Espaçamento interno */
  margin-right: 16px; /* Espaço entre o botão e o separador */
  cursor: pointer; /* Muda o cursor para pointer */
  transition: all 0.3s ease; /* Transição suave para hover */
}

.searchContainer {
  position: relative;
  display: flex;
  align-items: center;
}

.searchProdut {
  width: 100%;
  height: 40px;
  color: "#fff";
  border-radius: 3px;
  border: 1px solid #fff;
  padding: 0 35px 0 15px;
  font-family: "Poppins", sans-serif !important;
  font-size: 12px;
  transition: all 0.3s ease;
}

.searchProdut::placeholder {
  color: #fff;
  font-weight: 400;
}

.searchProdut:focus {
  outline: none;
  border-color: #1a2a45;
  box-shadow: 0 0 0 2px rgba(26, 42, 69, 0.1);
}

.searchIcon {
  position: absolute !important;
  right: 10px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  color: #fff !important;
  font-size: 18px !important;
}
</style>
