<template>
  <div style="height: auto; margin: 0 auto" class="gs-mw container-2  ">

    <p v-show="false">
      {{ scrollDownOnLoad() }}
    </p>
    <v-row v-if="layout.search.home.title && $nuxt.$route.path == '/'" class="d-flex align-center justify-center" aling="center">
      <v-col class="d-flex justify-center mb-4">
        <h1>Nossos destaques</h1>
      </v-col>
    </v-row>

    <v-row no-gutters class="product-row" v-if="list.length > 0">
      <v-col v-for="(block, index) in finalList" :key="index" sm="6" md="3" cols="6" lg="3">
        <div class="product-card-wrapper">

          <!-- PRODUTO -->
          <product-card-one v-if="block.type === 'product'" :data="block.data" />

          <!-- PROMO -->
          <!-- <promo-highlight-card v-if="block.type === 'promo'" :promo="block.data" /> -->

        </div>
      </v-col>
      <!-- <FastModalCart/> -->
    </v-row>  


    <v-row v-else :justify="layout.search.alert.justify" :align="layout.search.alert.align">
      <v-col v-if="loadedSearch" cols="12" sm="12" align="center">
        <v-alert :style="layout.search.alert.style" :icon="layout.search.alert.icon" :color="layout.search.alert.color"
          text>
          {{ layout.search.alert.text }}
        </v-alert>
      </v-col>
    </v-row>

    <!-- Botão "Ver Mais Produtos"
    <v-row justify="center" class="ver-mais-container">
      <v-col cols="auto">
        <v-btn class="ver-mais-button" @click="$router.push('/products')">
          Ver Mais Produtos
        </v-btn>
      </v-col>
    </v-row> -->

    <span>
      <empty-search></empty-search>
    </span>
  </div>
</template>

<script>
import ProductCardOne from "@/components/body/productSession/search/components/cards/productCardOne";
import nextPage from "@/components/body/productSession/search/components/searchComponents/components/nextPage";
import { mapState, mapActions } from "vuex";
// import PromoHighlightCard from "../cards/PromoHighlightCard.vue";
// import FastModalCart from "../modal/FastModalCart.vue";

export default {
  components: {
    ProductCardOne,
    nextPage,
    // PromoHighlightCard,
    // FastModalCart
  },
  data() {
    return {
      scrollPosition: "",
      isFilteredSearch: "",
      isFilteredSearchEmpty: "",
      promoIndexes: [],

      promoConfigs: [
        {
          title: "Sapatos de Verão",
          image: "https://i.ibb.co/273w1d8B/woman-3857758-1280.jpg",
          route: "/busca/texto/verao",
        },
        {
          title: "Sapatilhas de Inverno",
          image: "https://i.ibb.co/rG8mzWFn/shoes-6701631-1280.jpg",
           route: "/busca/texto/inverno",
        },
        {
          title: "Calçados da Loja",
          subtitle: "",
          image: "https://i.ibb.co/Y4cK5LZK/boots-181744-1280.jpg",
           route: "/busca/texto/new",
        },
        // {
        //   title: "Últimas Peças",
        //   subtitle: "Descontos progressivos",
        //   image: "/img/promos/ultimas-pecas.jpg",
        //    href: "",
        // },
      ],
    };
  },
  computed: {
    ...mapState("Search", ["list", "sectionName", "loadedSearch"]),
    ...mapState("Layouts", ["layout"]),

    finalList() {
      const result = [];
      const isMobile = this.$vuetify.breakpoint.smAndDown;

      const min = isMobile ? 4 : 8;
      const max = isMobile ? 8 : 14;

      // começa no primeiro intervalo
      let nextPromo = this.getRandom(min, max);

      let promoIndex = 0;

      this.list.forEach((item, index) => {
        // adiciona o produto normal
        result.push({
          type: "product",
          data: item
        });

       
      });

      return result;
    },
  },
  methods: {
    ...mapActions("Search", ["callSearch", "cleanList"]),

    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /** Gera índices onde as promos vão aparecer */
    generatePromoIndexes() {
      this.promoIndexes = [];

      if (!this.list || !this.list.length) return;

      const isMobile = this.$vuetify?.breakpoint?.smAndDown ?? false;

      const minInterval = isMobile ? 4 : 8;
      const maxInterval = isMobile ? 8 : 14;

      let i = this.getRandomInt(minInterval, maxInterval);

      while (i < this.list.length) {
        this.promoIndexes.push(i); // index é zero-based, isso aqui é "depois de X itens"
        i += this.getRandomInt(minInterval, maxInterval);
      }
    },

    getRandomInt(min, max) {
      const mn = Math.ceil(min);
      const mx = Math.floor(max);
      return Math.floor(Math.random() * (mx - mn + 1)) + mn;
    },

    shouldShowPromo(index) {
      // index 0-based; se quiser "depois de 8º", isso aqui já se encaixa
      return this.promoIndexes.includes(index);
    },

    getPromoForIndex(index) {
      // gira entre as 4 promoções
      const i = index % this.promoConfigs.length;
      return this.promoConfigs[i];
    },

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
      } else if (this.$route.query.cores.length === 0) {
        return false;
      } else if (this.$route.query.tamanhos.length === 0) {
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
    },
  },
  watch: {
    $route() {
      this.isFilteredSearch = this.checkIsFilteredSearch();
      this.isFilteredSearchEmpty = this.checkIsFilteredSearchEmpty();
      this.$nextTick(() => this.generatePromoIndexes());
    },
    list() {
      // quando trocar a lista, recalcula as posições
      this.$nextTick(() => this.generatePromoIndexes());
    },
  },
  mounted() {
    window.addEventListener("unload", function () {
      localStorage.removeItem("scrollPosition");
    });

    this.callSearch({ text: this.$route.params.texto });

    this.isFilteredSearch = this.checkIsFilteredSearch();
    this.isFilteredSearchEmpty = this.checkIsFilteredSearchEmpty();

    this.generatePromoIndexes();
  },
  beforeDestroy() {
    this.cleanList();
  },
};

</script>

<style>
.ver-mais-container {
  margin-top: 0px;
  text-align: center;
}

.gs-mw {
  max-width: 1280px;
  margin: auto;
}
.product-card-wrapper{
  display: flex;
  justify-content: center;
}
.ver-mais-button {
  color: #fff;
  /* Cor do texto branco para contraste */
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.ver-mais-button:hover {
  background-color: #7a4e2e;
  /* Tom mais escuro ao passar o mouse */
}
</style>