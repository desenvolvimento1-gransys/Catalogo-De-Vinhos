<template>
  <v-container fluid class="px-4px-md-3 pt-0 pt-md-15">
    <!-- Seção Principal -->
    <div class="sophisticated-layout" v-if="layout.search.home.title && $nuxt.$route.path == '/'">
      <div class="layout-container">
        <v-row no-gutters class="pb-3">
      <v-col cols="12">
        <router-link :to="bottomBannerNormalized.route" class="highlight-link">
          <v-row no-gutters class="highlight-banner">
            <!-- IMAGEM -->
            <v-col cols="12" md="6">
              <v-img
                :src="bottomBannerNormalized.image"
                height="220px"
                cover
                class="highlight-image"
              />
            </v-col>

            <!-- BLOCO CORAL -->
            <v-col cols="12" md="6">
              <div class="highlight-text-block">
                <h3 class="highlight-title">
                  {{ bottomBannerNormalized.title }}
                </h3>
                <p class="highlight-subtitle">
                  {{ bottomBannerNormalized.subtitle }}
                </p>
              </div>
            </v-col>
          </v-row>
        </router-link>
      </v-col>
    </v-row>
        <!-- Cabeçalho com Título e Navegação -->
        <div class="header-section">
          <div class="text-content mb-3">
            <!-- <div class="title-badge">LANÇAMENTOS</div> -->
            <h1 class="main-title">Vinhos Brancos</h1>
            <p class="subtitle">Descubra os sapatos mais amados da Lavine.</p>

          </div>
          
          <!-- Navegação ao lado do título (Desktop) -->
          <div class="navigation-section d-none d-md-flex">
            <button class="nav-arrow prev" @click="prevSlide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="nav-arrow next" @click="nextSlide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Carousel de Produtos -->
        <div class="carousel-section" v-if="listProd2.length > 0">
          <v-carousel
            ref="carousel"
            class="modern-carousel"
            hide-delimiters
            :show-arrows="false"
            :height="'auto'"
            :cycle="false"
            v-model="currentSlide"
          >
            <v-carousel-item v-for="(chunk, index) in chunkedList" :key="index">
              <div class="carousel-grid">
                <div 
                  v-for="item in chunk" 
                  :key="item.id" 
                  class="product-item"
                >
                  <div class="product-badge" v-if="item.onSale">SALE</div>
                  <product-card :data="item" />
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
          
          <!-- Navegação Mobile -->
          <div class="mobile-navigation d-flex d-md-none">
            <button class="nav-arrow prev" @click="prevSlide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div class="indicators">
              <span 
                v-for="(_, idx) in chunkedList" 
                :key="idx"
                :class="['indicator', { active: currentSlide === idx }]"
              ></span>
            </div>
            <button class="nav-arrow next" @click="nextSlide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Estado Vazio -->
        <div class="empty-state" v-else-if="loadedSearch">
          <div class="empty-content">
            <div class="empty-icon">🛍️</div>
            <p class="empty-text">{{ layout.search.alert.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import nextPage from "@/components/body/productSession/search/components/searchComponents/components/nextPage";
import { mapState, mapActions } from "vuex";
import { s3Url } from "@/Settings/global";
import ProductCard from "@/components/body/productSession/search/components/cards/productCardOne";

export default {
  components: {
    nextPage,
    ProductCard,
  },
  data() {
    return {
      urlImg: s3Url,
      placeholderImage: "https://via.placeholder.com/300",
      noStockMessage: "Produto sem estoque",
      buttonName: "Comprar",
      isDesktop: false,
      spinner: false,
      currentSlide: 0,
    };
  },
  computed: {
    ...mapState("Search", ["listProd2", "sectionName", "loadedSearch"]),
    ...mapState("Layouts", ["layout", "config"]),
    chunkedList() {
      if (this.isDesktop) {
        return this.chunkArray(this.listProd2, 4); // 4 produtos no desktop
      } else {
        return this.chunkArray(this.listProd2, 2); // 2 produtos no mobile
      }
    },
    computedTitleStyle() {
      return this.isDesktop
        ? this.layout.search.home.titleStyle
        : this.layout.search.home.titleStyleMobile;
    },
     bottomBannerNormalized() {
      if (this.bottomBanner && Object.keys(this.bottomBanner).length) {
        return this.bottomBanner;
      }

      return {
        image: "https://granshopping.s3.amazonaws.com/products/97/97092220251625151168691000.jpg",
        title: "Últimos pares",
        subtitle: "conforto e estilo todo dia",
        route: "/busca/sale",
      };
    },
  },
  methods: {
    ...mapActions("Search", ["callSearch", "cleanList"]),
    convertToLink(value) {
      return value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },
    chunkArray(array, chunkSize) {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth > 960;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedList.length;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.chunkedList.length - 1 : this.currentSlide - 1;
    },
  },
  mounted() {
    this.callSearch({ group_name: 'Ultimos Pares', definition_name: 'Calçados' });
    window.scrollTo(0, 0);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    this.cleanList();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
/* Variáveis de design */
.highlight-wrapper {
  margin-top: 24px;
  max-width: 1280px;
  margin-bottom: 40px;
}

.highlight-link {
  text-decoration: none;
  display: block;
}

.highlight-banner {
  background-color: transparent;
}

.highlight-image {
  border-radius: 10px 0 0 10px;
}

.highlight-text-block {
  height: 100%;
  background-color: #e5cfc8; /* coralzinho da referência */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 10px 0;
  text-align: center;
  padding: 24px 16px;
}

.highlight-title {
  font-family: "lexend", "sans-serif" !important;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0 0 6px;
}

.highlight-subtitle {
  font-family: "lexend", "sans-serif" !important;
  font-size: 0.95rem;
  margin: 0;
}
:root {
  --primary-color: #2C2C2C;
  --accent-color: #D4AF37;
  --text-dark: #1A1A1A;
  --text-light: #666;
  --background-light: #F8F8F8;
  --border-color: #E0E0E0;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Layout Principal */
.sophisticated-layout {
  background: white;
}

.layout-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0px;
}

/* Cabeçalho com Título e Navegação */
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
}

.text-content {
  flex: 1;
  max-width: 400px;
}

.title-badge {
  display: inline-block;
  background: var(--accent-color);
  color: white;
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.main-title {
  font-family: Work Sans;
  font-size: 27px;
  font-weight: 500;
  color: rgb(17, 17, 17);
  margin: 0 0 6px 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
}

/* Navegação Desktop */
.navigation-section {
  gap: 12px;
  align-items: center;
  margin-top: 10px;
}

.nav-arrow {
  width: 48px;
  height: 48px;
  border: 2px solid var(--border-color);
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-dark);
}

.nav-arrow:hover {
  border-color: var(--accent-color);
  background: var(--accent-color);
  color: #00000071;
  transform: scale(1.05);
}

.nav-arrow:active {
  transform: scale(0.95);
}

/* Carousel */
.carousel-section {
  position: relative;
}

.modern-carousel {
  border-radius: 12px;
  overflow: hidden;
}

.carousel-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px 0;
}

.product-item {
  position: relative;
  display: flex;
  max-width: 290px;
  justify-content: center;
}

.product-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #E74C3C;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  z-index: 2;
  text-transform: uppercase;
}

/* Navegação Mobile */
.mobile-navigation {
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0 20px;
}

.mobile-navigation .nav-arrow {
  width: 40px;
  height: 40px;
}

.indicators {
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-color);
  transition: var(--transition);
}

.indicator.active {
  background: var(--accent-color);
  transform: scale(1.2);
}

/* Estado Vazio */
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background: var(--background-light);
  border-radius: 12px;
}

.empty-content {
  text-align: center;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.empty-text {
  color: var(--text-light);
  font-size: 16px;
  margin: 0;
}

/* Responsividade */
@media only screen and (max-width: 960px) {
  .sophisticated-layout {
    padding: 40px 0;
    padding-bottom: 0;
  }
  .product-item {
    position: relative;
    display: flex;
    max-width: 250px !important;
    justify-content: center;
  }
  .header-section {
    flex-direction: column;
    justify-content: flex-start !important;
  }
  
  .text-content {
    width: 100%;
  }
  
  .main-title {
    font-size: 32px;
  }
  
  .carousel-grid {
    grid-template-columns: repeat(2, 2fr) !important;
  }
  
  .navigation-section {
    align-self: flex-end;
    margin-top: 0;
  }
}

@media only screen and (max-width: 780px) {
  .layout-container {
    padding: 0 0px !important;
  }
  
  .main-title {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 14px;
  }
  
  .carousel-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .mobile-navigation {
    padding: 0 10px;
  }
  
  .mobile-navigation .nav-arrow {
    width: 36px;
    height: 36px;
  }
}

/* Animações */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sophisticated-layout {
  animation: slideIn 0.6s ease-out;
}

/* Efeitos de hover nos produtos */
.product-item {
  transition: transform 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
}

/* Scroll personalizado */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b8941f;
}
</style>