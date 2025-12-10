<template>
  <v-container fluid class="">
    <v-row no-gutters class="category-grid">
      <!-- Categoria grande à esquerda -->
      <v-col cols="12" v-if="$vuetify.breakpoint.mdAndUp" md="4" class="category-col">
        <router-link to="busca/desinfetantes" class="category-link">
          <div class="category-item category-full-height" 
               @mouseenter="hoveredCategory = 1" 
               @mouseleave="hoveredCategory = null">
            <v-img
              src="https://i.ibb.co/0jvycLPC/disinfectant-5093503-1280.jpg"
              height="600"
              cover
              class="category-image"
            >
              <div class="category-overlay" :class="{ 'show-name': hoveredCategory === 1 }">
                <h2 class="category-name">Desinfetantes</h2>
              </div>
            </v-img>
          </div>
        </router-link>
      </v-col>

      <!-- Coluna central com 2 categorias menores (apenas desktop) -->
      <v-col cols="12" md="4" v-if="$vuetify.breakpoint.mdAndUp" class="center-column desktop-only">
        <v-row no-gutters class="h-100 mx-1">
          <!-- Categoria superior central -->
          <v-col cols="12" class="category-col h-50">
            <router-link to="busca/banheiros" class="category-link">
              <div class="category-item category-center-item" 
                   @mouseenter="hoveredCategory = 2" 
                   @mouseleave="hoveredCategory = null">
                <v-img
                  src="https://i.ibb.co/F4sfSNWJ/bathroom-1336164-1280.jpg"
                  height="100%"
                  cover
                  class="category-image"
                >
                  <div class="category-overlay" :class="{ 'show-name': hoveredCategory === 2 }">
                    <h2 class="category-name">Banheiros</h2>
                  </div>
                </v-img>
              </div>
            </router-link>
          </v-col>

          <!-- Categoria inferior central -->
          <v-col cols="12" class="category-col h-50 mt-1">
            <router-link to="busca/cozinha" class="category-link">
              <div class="category-item category-center-item" 
                   @mouseenter="hoveredCategory = 3" 
                   @mouseleave="hoveredCategory = null">
                <v-img
                  src="https://i.ibb.co/r2KDnt6L/soap-4017607-1280.jpg"
                  height="100%"
                  cover
                  class="category-image"
                >
                  <div class="category-overlay" :class="{ 'show-name': hoveredCategory === 3 }">
                    <h2 class="category-name">Cozinha</h2>
                  </div>
                </v-img>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-col>

      <!-- Categoria grande à direita -->
      <v-col cols="12" md="4" v-if="$vuetify.breakpoint.mdAndUp" class="category-col">
        <router-link to="busca/acessorios" class="category-link">
          <div class="category-item category-full-height" 
               @mouseenter="hoveredCategory = 4" 
               @mouseleave="hoveredCategory = null">
            <v-img
              src="https://i.ibb.co/PZx2DTs3/melhores-produtos-de-limpeza.webp"
              height="600"
              cover
              class="category-image"
            >
              <div class="category-overlay" :class="{ 'show-name': hoveredCategory === 4 }">
                <h2 class="category-name">Acessórios</h2>
              </div>
            </v-img>
          </div>
        </router-link>
      </v-col>

      <!-- Versão mobile das 4 categorias -->
      <v-col v-for="(category, index) in mobileCategories" 
             :key="index"
             cols="6"
             class="category-col mobile-only">
        <router-link :to="category.route" class="category-link">
          <div class="category-item mobile-category" 
               @mouseenter="hoveredCategory = index + 1" 
               @mouseleave="hoveredCategory = null">
            <v-img
              :src="category.image"
              height="100%"
              cover
              class="category-image"
            >
              <div class="category-overlay" :class="{ 'show-name': hoveredCategory === index + 1 }">
                <h2 class="category-name">{{ category.name }}</h2>
              </div>
            </v-img>
          </div>
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
       mobileCategories: [
  { 
    name: 'Desinfetantes', 
    image: 'https://i.ibb.co/0jvycLPC/disinfectant-5093503-1280.jpg',
    route: 'busca/desinfetantes'
  },
  { 
    name: 'Banheiros', 
    image: 'https://i.ibb.co/F4sfSNWJ/bathroom-1336164-1280.jpg',
    route: 'busca/banheiros'
  },
  { 
    name: 'Cozinha', 
    image: 'https://i.ibb.co/r2KDnt6L/soap-4017607-1280.jpg',
    route: 'busca/cozinha'
  },
  { 
    name: 'Acessórios', 
    image: 'https://i.ibb.co/PZx2DTs3/melhores-produtos-de-limpeza.webp',
    route: 'busca/acessorios'
  }
]
    }
  },
  methods: {
    getCategoryRoute(categoryName) {
      // Converte o nome da categoria para slug (minúsculo, sem acentos)
      const slug = categoryName
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/\s+/g, '-'); // Substitui espaços por hífens
      
      return { 
        name: `busca/${slug}`, 
        
      };
    }
  }
}
</script>
<style scoped>
.category-grid {
  max-width: 1400px;
  margin: 0 auto;
}

.category-col {
  position: relative;
  padding: 4px;
}

.category-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 100%;
  border-radius: 8px;
}

.category-full-height {
  height: 600px;
}

/* Classes utilitárias */
.h-100 { height: 100%; }
.h-50 { height: 50%; }

/* Layout desktop (acima de 960px) */
@media (min-width: 960px) {
  .mobile-only {
    display: none !important;
  }
  
  .desktop-only {
    display: block;
  }
  
  .center-column {
    padding: 0 8px;
  }
  
  .category-center-item {
    margin-bottom: 8px;
  }
  
  .category-center-item:last-child {
    margin-bottom: 0;
  }
  
  .category-grid .v-row {
    display: flex;
  }
}

/* Layout mobile (abaixo de 960px) */
@media (max-width: 959px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-only {
    display: block;
  }
  
  .category-grid .v-row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .category-col.mobile-only {
    width: 50% !important;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 4px;
  }
  
  .mobile-category {
    height: 180px !important;
  }
  
  .category-image {
    height: 100% !important;
    width: 100%;
    object-fit: cover;
  }
  
  .category-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  
  .category-name {
    font-size: 1.2rem !important;
    letter-spacing: 1px;
    text-align: center;
    padding: 0 8px;
  }
  
  /* Sempre mostra o nome no mobile */
  .category-name {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}

/* Efeitos hover */
.category-item:hover .category-image {
  transform: scale(1.05);
}

.category-image {
  transition: transform 0.4s ease;
  width: 100%;
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.category-overlay:hover {
  background: rgba(0, 0, 0, 0.4);
}

.category-name {
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.category-overlay.show-name .category-name {
  opacity: 1;
  transform: translateY(0);
}

/* Ajustes para tablets */
@media (max-width: 960px) and (min-width: 600px) {
  .category-name {
    font-size: 1.8rem;
  }
  
  .mobile-category {
    height: 220px !important;
  }
}

/* Ajustes para mobile pequeno */
@media (max-width: 600px) {
  .category-name {
    font-size: 1rem;
    letter-spacing: 0.5px;
  }
  
  .mobile-category {
    height: 150px !important;
    border-radius: 6px;
  }
  
  .category-col.mobile-only {
    padding: 3px;
  }
}

/* Melhorias para acessibilidade */
.category-item:focus {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}
</style>