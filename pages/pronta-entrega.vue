<template>
  <v-container fluid style="margin:0; padding:0">
    <v-row no-gutters>
      <!-- <v-col sm="6" md="3" cols="6" xl="2" v-for="item in filteredList" :key="item.id">
        <product-card-one :data="item" />
      </v-col> -->
      <v-col sm="6" md="3" cols="6" xl="2" v-for="item in list" :key="item.id">
        <product-card-one :data="item"  />
      </v-col>
    </v-row>
    <!-- <next-page></next-page> -->
  </v-container>
</template>

<script>
import ProductCardOne from "@/components/body/productSession/search/components/cards/productCardOne";
import nextPage from "@/components/body/productSession/search/components/searchComponents/components/nextPage";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProductCardOne,
    nextPage,
  },
  computed: {
    ...mapState("Search", ["list"]),
    filteredList() {
      return this.list.filter(item => item.confection_deadline < 1);
    }
  },
  methods: {
    ...mapActions("Search", ["callSearch", "cleanList"]),

    checkIsFilteredSearch() {
      const path = this.$route.path.split("/");
      if (path.includes("busca")) {
        if (path.includes("texto")) {
          return false;
        }
        return true;
      }
      return false;
    },

    checkIsFilteredSearchEmpty() {
      if (Object.keys(this.$route.query).length == 0) {
        return false;
      } else if (this.$route.query.cores && this.$route.query.cores.length === 0) {
        return false;
      } else if (this.$route.query.tamanhos && this.$route.query.tamanhos.length === 0) {
        return false;
      }
      return true;
    },

    async scrollDownOnLoad() {
      let route = $nuxt.$route.path;
      if (route == "/") {
        let scrollPosition = localStorage.getItem("scrollPosition");
        await this.$nextTick();
        if (scrollPosition !== 0 && scrollPosition !== null) {
          window.scrollTo(0, 0);
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  },
  mounted() {
    window.addEventListener("unload", function () {
      localStorage.removeItem("scrollPosition");
    });

    // Verifica se a página foi recarregada ou não
    if (performance.navigation.type === 1) {
      this.callSearch({
        text: this.$route.params.texto,
        confection_deadline: 0 // Filtra produtos com prazo de confecção igual a zero
      });
    } else {
      window.location.reload(); // Recarrega a página ao montar
    }
  },
  beforeDestroy() {
    this.cleanList();
  }
};
</script>

<style scoped>
/* Seu CSS aqui */
</style>
