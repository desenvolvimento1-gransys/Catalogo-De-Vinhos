<template>
  <v-container fluid style="max-width: 1400px;" class="px-0 mobile-only ">
    <!-- Título principal -->
    <div class="text-center mb-8">
      <h1 class="text-h4 font-weight-bold primary--text">Nossas Categorias</h1>
    </div>

    <!-- Grid de categorias -->
    <v-row no-gutters class="category-grid justify-center">
      <v-col 
        v-for="(category, index) in categories" 
        :key="index"
        cols="6"
        sm="6"
        md="3"
        class="category-col pa-2"
      >
        <router-link :to="category.route" class="category-link">
          <v-card class="category-card elevation-2" flat>
            <div class="category-item" 
                 @mouseenter="hoveredCategory = index" 
                 @mouseleave="hoveredCategory = null">
              <v-img
                :src="category.image"
                :height="imageHeight"
                cover
                class="category-image"
              >
                <div class="category-overlay" :class="{ 'active': hoveredCategory === index }">
                  <h2 class="category-name">{{ category.name }}</h2>
                </div>
              </v-img>
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CategoryGrid',
  data() {
    return {
      hoveredCategory: null,
      categories: [
        { 
          name: 'Vinhos Tinto', 
          image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          route: '/busca/vinhos-tinto'
        },
        { 
          name: 'Vinhos Brancos', 
          image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          route: '/busca/vinhos-brancos'
        },
        { 
          name: 'Vinhos Rosé', 
          image: 'https://images.unsplash.com/photo-1460200620338-fc6d1a5d4d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          route: '/busca/vinhos-rose'
        },
        { 
          name: 'Espumante', 
          image: 'https://images.unsplash.com/photo-1599594212196-8f65023d1f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          route: '/busca/espumantes'
        }
      ]
    }
  },
  computed: {
    imageHeight() {
      return this.$vuetify.breakpoint.mobile ? '180px' : '350px'
    }
  }
}
</script>

<style scoped>
.category-grid {
  max-width: 1400px;
  margin: 0 ;
}

/* Título principal */
.text-h4 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
}

.text-h4::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #8B0000, #FFD700);
}

.primary--text {
  color: #8B0000 !important; /* Cor vinho */
}

/* Card das categorias */
.category-card {
  border-radius: 12px !important;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
}

.category-link {
  text-decoration: none;
  display: block;
  height: 100%;
}

.category-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

/* A imagem deve ocupar todo o card */
.category-image {
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-item:hover .category-image {
  transform: scale(1.1);
}

/* Overlay com gradiente - sempre visível no mobile */
.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;
  transition: all 0.3s ease;
}

/* Desktop: efeito hover no overlay */
@media (min-width: 960px) {
  .category-overlay.active,
  .category-overlay:hover {
    background: linear-gradient(
      to bottom,
      rgba(139, 0, 0, 0.3) 0%,
      rgba(139, 0, 0, 0.5) 50%,
      rgba(139, 0, 0, 0.8) 100%
    );
  }
}

/* Nome da categoria */
.category-name {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  padding: 0 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
}

/* Mobile: texto sempre visível */
@media (max-width: 959px) {
  .category-name {
    transform: translateY(0);
    opacity: 1;
    font-size: 1.4rem;
  }
  
  .category-overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
}

/* Desktop: animação no hover */
@media (min-width: 960px) {
  .category-overlay.active .category-name,
  .category-overlay:hover .category-name {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Mobile: 2 colunas */
@media (max-width: 959px) {
  .category-col {
    padding: 8px !important;
  }
  
  .category-card {
    height: 180px;
  }
  
  .text-h4 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
}

/* Tablets */
@media (max-width: 960px) and (min-width: 600px) {
  .category-card {
    height: 220px;
  }
  
  .category-name {
    font-size: 1.6rem;
  }
}

/* Mobile pequeno */
@media (max-width: 600px) {
  .category-card {
    height: 160px;
  }
  
  .category-name {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  
  .text-h4 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .category-col {
    padding: 6px !important;
  }
}

/* Desktop: 4 colunas lado a lado */
@media (min-width: 960px) {
  .category-card {
    height: 300px;
  }
  
  .category-overlay {
    padding-bottom: 50px;
  }
}

/* Ajustes para telas muito grandes */
@media (min-width: 1400px) {
  .category-card {
    height: 350px;
  }
}

/* Melhorias para acessibilidade */
.category-item:focus {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}
</style>