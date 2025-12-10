<template>
  <v-container fluid class="px-4 px-md-3 pt-10 pt-md-15">
    <!-- Seção Principal -->
    <div class="sophisticated-layout" v-if="layout.search.home.title && $nuxt.$route.path == '/'">
      <div class="layout-container">

         <v-row no-gutters class="pb-3">
      <v-col cols="12">
        <router-link :to="bottomBannerNormalized.route" class="highlight-link">
          <v-row class="category-grid" no-gutters>
      <!-- Large featured category (left side) -->
      <v-col cols="12" class="pr-md-2">
        <div class="featured-category">
          <router-link 
            :to="featuredCategory.route" 
            class="category-link"
            @click.native="handleCategoryClick(featuredCategory)"
          >
            <div class="featured-image-container">
              <v-img
                :src="featuredCategory.image"
                :alt="featuredCategory.categoryName"
                class="featured-image"
                height="400px"
                cover
                :lazy-src="placeholderImage"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
                
                <!-- Featured overlay -->
                <div class="featured-overlay">
                  <div class="featured-content">
                    <h3 class="featured-subtitle">{{ featuredCategory.subtitle }}</h3>
                    <h2 class="featured-title">{{ featuredCategory.title }}</h2>
                    <p class="featured-year">{{ featuredCategory.year }}</p>
                    <div class="featured-category-name">
                      {{ featuredCategory.categoryName }}
                    </div>
                  </div>
                </div>
              </v-img>
            </div>
          </router-link>
        </div>
      </v-col>
   
    </v-row>
        </router-link>
      </v-col>
    </v-row>
        <!-- Cabeçalho com Título e Navegação -->
        <div class="header-section">
          <div class="text-content mb-3">
            <h1 class="main-title">Vinhos Tintos</h1>
            <p class="subtitle">Descubra os últimos lançamentos Lavine.</p>
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
        <div class="carousel-section" v-if="list.length > 0">
          
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

               <!-- <FastModalCart
                attach="body"
                style="z-index: 999999 !important"
                v-if="$vuetify.breakpoint.smAndDown"
                :modal="modalFast"
                :itemCart="selectedItemModal"
              />

              <FastModalCartDesk
                attach="body"
                style="z-index: 999999 !important"
                v-else
                :modal="modalFast"
                :itemCart="selectedItemModal"
              /> -->
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
// import FastModalCart from "../search/components/modal/FastModalCart.vue";
// import FastModalCartDesk from "../search/components/modal/FastModalCartDesk.vue";

export default {
  components: {
    nextPage,
    ProductCard,
    // FastModalCart,
    // FastModalCartDesk
  },
   props: {
    title: {
      type: String,
      default: 'Categorias'
    },
    subtitle: {
      type: String,
      default: ''
    },
    categories: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    placeholderImage: {
      type: String,
      default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5DYXJyZWdhbmRvLi4uPC90ZXh0Pjwvc3ZnPg=='
    }
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
       defaultFeaturedCategory: {
        image: "https://i.ibb.co/jP8fPYhr/banner-primavera-1.jpg",
        categoryName: "New In",
        subtitle: "Coleção de ",
        title: "PRIMAVERA",
        year: "em 2025",
        route: "/busca/new-in"
      },
    };
  },
  computed: {
    ...mapState("Search", ["list", "sectionName", "loadedSearch"]),
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("Product", ["modalFast","selectedItemModal"]),
    chunkedList() {
      if (this.isDesktop) {
        return this.chunkArray(this.list, 3); // 3 produtos no desktop (como no original)
      } else {
        return this.chunkArray(this.list, 2); // 2 produtos no mobile
      }
    },
    featuredCategory() {
      return this.categories.length > 0 && this.categories[0] 
        ? this.categories[0] 
        : this.defaultFeaturedCategory;
    },
    bottomBannerNormalized() {
      if (this.bottomBanner && Object.keys(this.bottomBanner).length) {
        return this.bottomBanner;
      }

      return {
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "New in",
        subtitle: "conforto e estilo todo dia",
        route: "/busca/new-in",
      };
    },
    computedTitleStyle() {
      return this.isDesktop
        ? this.layout.search.home.titleStyle
        : this.layout.search.home.titleStyleMobile;
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
      this.isDesktop = window.innerWidth > 780; // Mantendo o breakpoint original de 780px
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedList.length;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.chunkedList.length - 1 : this.currentSlide - 1;
    },
      handleCategoryClick(category) {
      this.$emit('category-click', category);
      if (window.gtag) {
        window.gtag('event', 'category_click', {
          category_name: category.categoryName,
          category_route: category.route
        });
      }
    },
    getCategoryClass(index) {
      const classes = ['category-col'];
      if (index === 0) classes.push('pb-1');
      if (index > 0 && index < 3) classes.push('py-1');
      if (index >= 3) classes.push('pt-1');
      if (index % 2 === 0 && index > 0) classes.push('pr-1');
      if (index % 2 === 1 && index > 0) classes.push('pl-1');
      return classes.join(' ');
    },
    getCategoryHeight(index) {
      return index === 0 ? '240px' : '120px';
    }
  },
  mounted() {
    this.callSearch({ group_name:'New In', definition_name:'' });
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


.highlight-link {
  text-decoration: none;
  display: block;
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
    padding: 0px 0;
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

  .featured-overlay{
    padding: 0 !important;
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.grid-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #253753;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.grid-subtitle {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #666;
  font-size: 1.1rem;
}

.category-grid {
  gap: 0;
}

/* Featured Category Styles */
.featured-category {
  height: 100%;
}

.featured-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  height: 400px;
}

.featured-image-container:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

.featured-image {
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
}

.featured-content {
  color: white;
  text-align: left;
}

.featured-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 8px;
  opacity: 0.9;
}

.featured-title {
  font-family: "Poppins", sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 8px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.featured-year {
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 30px;
  font-style: italic;
}

.featured-category-name {
  background: rgba(255, 255, 255, 0.9);
  color: #253753;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Right Categories Styles */
.right-categories {
  height: 500px;
}

.category-col {
  padding: 2px;
}

.category-item {
  height: 100%;
  transition: transform 0.3s ease;
}

.category-item:hover {
  transform: translateY(-4px);
}

.category-link {
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;
  transition: all 0.3s ease;
}

.image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  height: 100%;
}

.image-container:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.category-image {
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.category-link:hover .category-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #304c379d;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay2{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #304c379d;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.category-link:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
}

.overlay-text {
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .featured-image-container {
    height: 300px;
  }
  
  .right-categories {
    height: auto;
    margin-top: 16px;
  }
  
  .featured-title {
    font-size: 2.5rem;
  }
  
  .featured-year {
    font-size: 1.4rem;
  }
  
  .featured-content {
    padding: 20px;
  }
}

@media (max-width: 600px) {
  .grid-title {
    font-size: 1.5rem;
  }
  .featured-image{
    max-height: 250px !important;
  }
  .featured-image-container{
    max-height: 250px !important;
  }
  .featured-title {
    font-size: 2rem;
  }
  
  .featured-year {
    font-size: 1.2rem;
  }
  
  .featured-subtitle {
    font-size: 1rem;
  }
  
  .featured-category-name {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

/* Animation */
.featured-category,
.category-item {
  animation: fadeInUp 0.6s ease forwards;
}

.category-item:nth-child(1) { animation-delay: 0.1s; }
.category-item:nth-child(2) { animation-delay: 0.2s; }
.category-item:nth-child(3) { animation-delay: 0.3s; }
.category-item:nth-child(4) { animation-delay: 0.4s; }
.category-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.grid-container {
  display: grid;
  grid-template-areas:
    "item1 item2 item3"
    "item1 item4 item5"
    "item6 item6 item5";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 5px;
  max-width: 100%;
}

.item {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item1 { grid-area: item1; }
.item2 { grid-area: item2; }
.item3 { grid-area: item3; }
.item4 { grid-area: item4; }
.item5 { grid-area: item5; display: flex; align-items: center; justify-content: center; background: #1a1a1a; color: white; text-align: center; padding: 20px; }
.item6 { grid-area: item6; }


</style>