<template>

  <v-card translate="no" @click="saveScrollAndPush()" color="white" class="black--text card-product-class" flat
    @mouseover="onMouse = true" @mouseleave="onMouse = false">
    <!-- IMAGEM 3/4 + OVERLAYS -->
    <div class="image-container">
      <v-hover>
        <div slot-scope="{ hover }">
          <v-img :aspect-ratio="0.75" v-if="data.product_image[1] && hover"
            :src="`${urlImg + data.product_image[1].img_name}300.jpg`" alt="Imagem do produto" class="product-image"
          >
            <template style="min-height: 400px !important;" v-slot:placeholder>
              <v-skeleton-loader   type="image" />
            </template>
          </v-img>

          <v-img :aspect-ratio="0.75" v-else-if="data.product_image[0]"
            :src="`${urlImg + data.product_image[0].img_name}300.jpg`" alt="Imagem do produto" class="product-image"
          >
            <template style="min-height: 400px !important;" v-slot:placeholder>
             <v-skeleton-loader type="image"></v-skeleton-loader>
             <v-skeleton-loader type="image"></v-skeleton-loader>
            </template>
          </v-img>

          <v-img :aspect-ratio="0.75" v-else :src="typeLogo.items?.[0]?.src"
            alt="Placeholder da imagem do produto" class="product-image" contain>
            <template style="min-height: 400px !important;" v-slot:placeholder>
               <v-skeleton-loader type="image"></v-skeleton-loader>
               <v-skeleton-loader type="image"></v-skeleton-loader>
            </template>
          </v-img>
        </div>
      </v-hover>

      <!-- Ícone de sacola (canto) -->
      <button type="button" class="shopping-bag-icon" @click.stop="quickAddToCart()" aria-label="Adicionar ao carrinho">
        <!-- <img src="https://i.ibb.co/35Dzd2RW/fi-rr-shopping-bag-add.png" alt=""> -->
        <v-icon>mdi-heart-outline</v-icon>
        <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> -->
      </button>
    </div>

    <!-- INFOS -->
    <!-- INFOS -->
    <div class="product-info-container">
      <p class="product-name" translate="no">
        {{ data.product_name }}
      </p>

      <div v-if="data.balance > 0" class="price-section">
        <!-- preço antigo em cima, se houver promoção -->
        <div class="d-flex justify-space-between">
           <span class="price-tag">
            {{ calculateMaxInstallments(data.price) }}x R$

            <span class="installment-value">
              {{
                (
                  parseFloat(data.price) / calculateMaxInstallments(data.price)
                ).toLocaleString("pt-BR", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                })
              }}
            </span>
          </span>
          <p v-if="hasPromotion" class="old-price">
            R{{ space }}{{ originalPriceBRL }}
          </p>

         
        </div>

        <!-- linha do preço atual + badge ao lado -->
        <div class="price-line d-flex justify-space-between ">
          <span class="current-price  ">R{{ space }}{{ priceBRL }}</span>
          <span v-if="hasPromotion" class="discount-badge">
            {{ discountPercent }}% OFF
          </span>
        </div>

        <!-- se quiser manter -->
        <span v-if="hasNovidade" class="novidade-badge">Promo</span>
        <span v-else class="novidade-badge">Eu quero</span>
      </div>

      <div v-else class="no-stock-section">
        <p class="no-stock-text">{{ config.productWithoutStockPhrase }}</p>
      </div>
    </div>

  </v-card>

</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { s3Url } from "@/Settings/global";

export default {
  props: {
    data: { type: Object, required: true },
    onMouse: { type: Boolean, default: false }
  },
  computed: {
    ...mapState("Product", ["product","selectedItemModal"]),
    ...mapState("Layouts", ["layout", "config"]),
    ...mapGetters("Product", ["installmentResult"]),
    ...mapState("Settings", ["typeLogo"]),

    ...mapGetters("Cart", [
      "calculateProgressiveDiscount",
      "getProductsWithoutSale",
    ]),

    space() {
      // estética visual "R$ 1.234,56"
      return "$ ";
    },

    hasPromotion() {
      return !!(this.data.actived_promotions && this.data.actived_promotions.length);
    },

    // Tentativa de inferir % de desconto (se você tem esse valor direto, substitua)
    discountPercent() {
      // Se vier no payload, use-o. Senão, calcula pela soma price + discount_value
      try {
        const promo = this.data.actived_promotions?.[0];
        if (!promo) return 0;

        const discountValue = parseFloat(promo.discount_value || 0);
        const price = parseFloat(this.data.price || 0);

        if (!price && !discountValue) return 0;

        const original = price + discountValue;
        if (original <= 0) return 0;

        const pct = Math.round((discountValue / original) * 100);
        return isNaN(pct) ? 0 : pct;
      } catch {
        return 0;
      }
    },

    originalPriceBRL() {
      // seu cálculo original: price + discount_value
      const promo = this.data.actived_promotions?.[0];
      const discountValue = parseFloat(promo?.discount_value || 0);
      const original = parseFloat(this.data.price || 0) + discountValue;

      return original.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

    priceBRL() {
      const price = parseFloat(this.data.price || 0);
      return price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

    hasNovidade() {
      // Regra simples: mostra “NOVIDADE” quando tiver promoção
      return this.hasPromotion;
    },
  },

  methods: {
    ...mapActions("Layouts", ["getYPos"]),
        ...mapActions("Product", ["openModalFast", "setProduct"]),

    convertToLink(value) {
      return value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },

    calculateMaxInstallments(price) {
      return parseFloat(price) > 100 ? 5 : 3;
    },

    saveScrollAndPush() {
      this.getYPos(Math.round(window.scrollY));
      const link =
        "/produto/" +
        this.data.id +
        "/" +
        this.convertToLink(this.data.product_name);

      this.$router.push({ path: link });

      const SendViewPage = {
        item_id: `${this.data.id}`,
        item_name: `${this.data.product_name}`,
        price: `${parseFloat(this.data.price).toFixed(2)}`,
        Rota: `${this.$route.path}`,
      };
      this.$store.dispatch("GoogleTagEvents/view_item", SendViewPage);
    },

    quickAddToCart() {
       this.setProduct({product_id: this.data.id})
      this.selectedItemModal = this.product

      this.openModalFast(true)
    },
  },

  data() {
    return {
      urlImg: s3Url,
      minimumValue: "",
      maximumInstallment: "",
    };
  },

  mounted() {
    const installmentArray = this.installmentResult(this.data.price);
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');

/* CARD BASE */
.card-product-class {
  border: none;
  width: 100%;
  /* ocupa 100% da coluna */
  min-width: 0;
  /* deixa o grid mandar */
  min-height: auto;
  border-radius: 10px !important;
  cursor: pointer;
  transition: transform 0.2s ease;
  background: transparent;
  padding: 0 8px;
  /* espaçamento interno leve */
  margin: 10px 0;
}

.card-product-class:hover {
  transform: translateY(-2px);
}

/* IMAGEM: controla só pelo aspect-ratio */
.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  /* 3/4 igual v-img */
  border-radius: 10px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-product-class:hover .product-image {
  transform: scale(1.05);
}

/* ÍCONE SACOLA */
.shopping-bag-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #ffffffcc;
  color: #333;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  z-index: 2;
  cursor: pointer;
  transition: all .2s ease;
}

.shopping-bag-icon:hover {
  transform: scale(1.1);
}

/* INFOS */
.product-info-container {
  padding: 12px 0 8px 0;
}

.product-name {
  font-size: 14px;
  font-weight: 300;
  font-family: 'Lexend', 'sans-serif';
  color: #333 !important;
  line-height: 1.4;
  margin: 0;
  min-height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.old-price {
  font-size: 12px;
  color: #999;
  font-family: 'Lexend', 'sans-serif';
  text-decoration: line-through;
  margin: 0;
}

.current-price {
  color: #000;
  font-size: 16px;
  font-family: 'Lexend', 'sans-serif';
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.discount-badge {
  font-family: 'Lexend', 'sans-serif';
  font-weight: 700;
  background: #e0e0e0;
  color: #333;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  text-transform: uppercase;
}

/* NOVIDADE */
.novidade-badge {
  display: flex;
  border: 1px solid #ddd;
  justify-content: center;
  background: #fff;
  color: #333;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .5px;
  margin-top: 6px;
}

.price-tag {
  font-weight: 500 !important;
}
.installment-value {
  font-size: 16px !important;
}

.no-stock-section {
  padding: 8px 0;
}

.no-stock-text {
  color: #999;
  font-size: 13px;
  margin: 0;
  font-weight: 400;
}

/* ============= MOBILE/TABLET ============= */
@media (max-width: 780px) {
  .card-product-class {
    padding: 0 4px;
    margin: 8px 0;
  }

  .product-name {
    font-size: 13px;
    min-height: 36px;
  }

  .current-price {
    font-size: 15px;
  }

  .old-price {
    font-size: 11px;
  }

  .shopping-bag-icon {
    width: 36px;
    height: 36px;
  }
  .price-tag{
    font-size: 12px !important;
  }
  .installment-value {
  font-size: 14px !important;
}
}



/* ============= DESKTOP ============= */
@media (min-width: 781px) and (max-width: 1439px) {
  .card-product-class {
    padding: 0 10px;
    margin: 12px 0;
  }

  .product-name {
    font-size: 15px;
    min-height: 44px;
  }

  .current-price {
    font-size: 18px;
  }

  .old-price {
    font-size: 13px;
  }

  .shopping-bag-icon {
    width: 42px;
    height: 42px;
  }
}

/* ============= TELAS GRANDES ============= */
@media (min-width: 1440px) {
  .card-product-class {
    padding: 0 14px;
    margin: 14px 0;
  }

  .product-name {
    font-size: 16px;
  }

  .current-price {
    font-size: 20px;
  }

  .image-container {
    aspect-ratio: 3 / 4;
    /* mantém proporção, só amplia dentro da coluna */
  }
}

@media (max-width: 480px) {

  /* o card inteiro */
  .card-product-class {
    width: 183px !important;
    padding: 0 !important;
    margin: 0 auto 18px auto;
  }

  /* imagem */
  .image-container {
    width: 183px !important;
    height: 180px !important;
    border-radius: 10px;
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* infos */
  .product-info-container {
    width: 183px !important;
  }
}
</style>
