<template>
  <div class="pt-1 d-flex flex-row align-center">
    <!-- Container principal da topbar -->
    <div 
      ref="topbar"
      class="topbar-fixed py-4"
      :style="layout.topBar.main"
      translate="no"
    >  
      <v-row>
        <v-col cols="auto" align-self="center">
          <router-link to="/">
            <v-img
              cover
              :src="typeLogo.items?.[0]?.src || '/suaLogo.png'"
              :class="['logoTopbar', { 'logoTopbar--scrolled': isScrolled }]"
            />
          </router-link>
        </v-col>

        <v-col cols="auto" align-self="center" class="ml-5">
          <ul class="nav-menu">
            <router-link style="text-decoration: none;" to="/">
              <li class="navItem">INÍCIO</li>
            </router-link>

            <!-- Slice dinâmico: 3 (<=960), 6 (<=1200), 9 (>1200) -->
            <router-link 
              v-for="(item, i) in itemsNavList.slice(0, maxVisible)"
              :key="i"
              :to="`/busca${item.route}`"
              style="text-decoration: none;"
            >
              <li 
                class="navItem" 
                @mouseenter="showChildren(item, $event)"
                @mouseleave="scheduleHideChildren"
              >
                {{ item.name }}
                <v-icon v-if="item.children.length > 0" small class="arrow">mdi-chevron-down</v-icon>
              </li>
            </router-link>
          </ul>
        </v-col>

        <v-spacer  />

        <v-col cols="auto" align-self="center" class="mr-2">
          <div class="search-container">
            <input
              v-model="searchText"
              type="text"
              class="searchProdut"
              placeholder="O que você está buscando?"
              @keyup.enter="search"
            />
            <v-icon class="search-icon" @click="search" style="cursor:pointer">mdi-magnify</v-icon>
          </div>
        </v-col>

        <span @click="setCartModal(!cartDialog)" style="cursor:pointer" :style="layout.topBar.icons" class="mdi mdi-heart-outline d-flex aling-center items-center">
          <span :style="layout.topBar.iconsText"> Favoritos </span>
        </span>
      </v-row>
    </div>
    
    <!-- Container dos submenus -->
    <transition name="submenu-fade">
      <div 
        ref="submenu"
        class="submenu-container"
        :style="submenuStyle"
        @mouseenter="cancelHideChildren"
        @mouseleave="scheduleHideChildren"
        v-show="activeChildren && activeChildren.length > 0"
      >
        <div class="submenu-content">
          <v-row>
            <v-col 
              cols="12" 
              md="4" 
              v-for="(column, columnIndex) in chunkedChildren" 
              :key="columnIndex"
            >
              <ul class="submenu-column">
                <router-link 
                  v-for="(child, childIndex) in column" 
                  :key="childIndex"
                  :to="`/busca${child.route}`"
                  style="text-decoration: none;"
                >
                  <li class="submenu-item">
                    <a :href="child.link || '#'">{{ child.name }}</a>
                  </li>
                </router-link>
              </ul>
            </v-col>
          </v-row>
        </div>
      </div>
    </transition>

    <!-- Espaço reservado dinâmico -->
    <div 
      class="topbar-placeholder"
      :style="{ height: placeholderHeight + 'px' }"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import cartDialog from "../../../../body/orderSection/cart/components/cartDialogLegacy.vue";

export default {
  components: { cartDialog },

  data() {
    return {      
      searchText: "",
      isScrolled: false,
      topbarHeight: 65, // Altura inicial padrão
      activeChildren: null,
      submenuVisible: false,
      submenuTimer: null,
      lastActiveItem: null,
      resizeObserver: null,
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1920
    };
  },
  computed: {
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("Settings", ["navBarList","typeLogo"]),
    ...mapState("User", ["user"]),
    ...mapGetters("Cart", ["totalAmountInCart", "getProductsWithoutSale"]),
    ...mapState("Cart", ["primaryDrawer", "cartDialog"]),

    placeholderHeight() {
      return this.isScrolled ? this.topbarHeight : 0;
    },

    itemsNavList(){
      return (this.navBarList || []).map(item => {
        return {
          name: item.name ? item.name.toUpperCase() : "",
          route: item.route || "",
          children: Array.isArray(item.children) ? item.children : []
        };
      });
    },

    // Breakpoints:
    // <= 960px => 3 itens
    // 961px ~ 1200px (inclui 1049 e “pouquinho”) => 6 itens
    // > 1200px => 9 itens
    maxVisible() {
      const w = this.windowWidth;
      if (w <= 960) return 3;
      if (w <= 1200) return 6;   // aqui entra 1049, 1050, 1199, 1200...
      return 9;
    },

    chunkedChildren() {
      if (!this.activeChildren) return [];
      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < this.activeChildren.length; i += chunkSize) {
        chunks.push(this.activeChildren.slice(i, i + chunkSize));
      }
      return chunks;
    },

    submenuStyle() {
      return {
        top: `${this.topbarHeight}px`,
        'margin-top': this.isScrolled ? '0' : '0'
      };
    }
  },

  mounted() {
    this.setupResizeObserver();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.updateTopbarHeight();
  },

  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    if (this.submenuTimer) clearTimeout(this.submenuTimer);
  },

  methods: {
    ...mapActions("Cart", ["setCartModal", "callPrimaryDrawer"]),

    setupResizeObserver() {
      this.resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          this.topbarHeight = entry.contentRect.height;
        }
      });
      if (this.$refs.topbar) {
        this.resizeObserver.observe(this.$refs.topbar);
      }
    },

    handleResize() {
      this.windowWidth = window.innerWidth || this.windowWidth;
    },

    handleScroll() {
      this.isScrolled = window.pageYOffset > 100;
    },

    updateTopbarHeight() {
      this.$nextTick(() => {
        if (this.$refs.topbar) {
          this.topbarHeight = this.$refs.topbar.offsetHeight;
        }
      });
    },

    showChildren(item) {
      if (this.submenuTimer) clearTimeout(this.submenuTimer);
      if (item.children && item.children.length > 0) {
        if (this.lastActiveItem === item) return;
        this.lastActiveItem = item;
        this.activeChildren = item.children;
        this.submenuVisible = true;
      } else {
        this.hideChildren();
      }
    },

    scheduleHideChildren() {
      this.submenuTimer = setTimeout(() => {
        this.hideChildren();
      }, 150);
    },

    cancelHideChildren() {
      if (this.submenuTimer) clearTimeout(this.submenuTimer);
    },

    hideChildren() {
      this.activeChildren = null;
      this.submenuVisible = false;
      this.lastActiveItem = null;
    },

    search() {
      if (this.searchText && this.searchText.trim().length > 0) {
        this.$router.push(`/busca/texto/${encodeURIComponent(this.searchText.trim())}`);
        this.searchText = "";
      }
    },

    checkUser() {
      return this.user.id ? "/conta/pedidos" : "/login";
    },

    showCart() {
      this.config?.showModalInClickCartIcon 
        ? this.setCartModal(true)
        : this.$router.push({ path: "/carrinho" });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.topbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white !important;
  z-index: 700;
  transition: all 0.3s ease;
}

.topbar-placeholder {
  transition: height 0.3s ease;
}

.submenu-fade-enter-active,
.submenu-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.submenu-fade-enter,
.submenu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Submenu styles */
.submenu-container {
  position: fixed;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 30px 50px;
  border-top: 1px solid #f0f0f0;
  height: 150px;
}

.submenu-content {
  max-width: 1200px;
  margin: 0 auto;
}

.submenu-column {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.userIcon {
  height: 20px;
  width: 30px;
  transition: filter 0.2s ease;
}

.submenu-item {
  transition: all 0.2s ease;
}

.submenu-item:hover {
  transform: translateX(5px);
}

.submenu-item a {
  color: #000;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 550;
  text-transform: uppercase;
  transition: color 0.2s ease;
  display: block;
  padding: 5px 0;
}

.submenu-item a:hover {
  color: #1a2a45;
  text-decoration: underline;
}

/* Logo */
.logoTopbar {
  height: auto;
  width: 80px;
  transition: all 0.3s ease;
}

.logoTopbar--scrolled {
  height: auto !important;
  width: 60px !important;
}

/* Menu */
.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.navItem {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  position: relative;
  padding: 10px 0;
  white-space: nowrap;
}

.navItem:hover {
  color: #1a2a45;
}

.arrow {
  margin-left: 5px;
  font-size: 16px;
  color: inherit;
  transition: transform 0.2s ease;
}

.navItem:hover .arrow {
  transform: translateY(2px);
}

/* Search */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.searchProdut {
  width: 450px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #fff;
  padding: 0 35px 0 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  transition: all 0.3s ease;
}

.searchProdut::placeholder {
  color: #fff;
  font-weight: 400;
}

.searchProdut:focus {
  outline: none;
  border-color: #fff;
  box-shadow: 0 0 0 2px rgba(26, 42, 69, 0.1);
}

.search-icon {
  position: absolute;
  right: 10px;
  color: #fff;
  font-size: 15px;
  pointer-events: auto;
}

/* Botões */
.btnUser {
  transition: transform 0.2s ease;
}

.btnUser:hover {
  transform: scale(1.1);
}

.user-icon {
  height: 20px;
  width: 30px;
  transition: filter 0.2s ease;
}

.user-icon:hover {
  filter: brightness(0.8);
}

/* Responsividade e ajustes visuais */
@media (max-width: 1470px) {
  .navItem {
    font-size: 13px !important;
  }
  .nav-menu {
    gap: 15px !important;
  }
}

/* Intervalo até 1200px onde o slice vira 6 */
@media (max-width: 1200px) {
  .nav-menu {
    gap: 16px;
  }
  .searchProdut {
    width: 200px;
  }
}

@media (max-width: 960px) {
  .submenu-container {
    padding: 10px 20px;
  }
  .submenu-column {
    width: 100%;
  }
  .nav-menu {
    gap: 20px;
  }
  .searchProdut {
    width: 180px;
  }
}
</style>
