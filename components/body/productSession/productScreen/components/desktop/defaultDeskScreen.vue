<template>
  <div v-if="!load" :style="layout.productPage.mainStyle" translate="no">
    <v-row no-gutters justify="center">
      <v-col :style="layout.productPage.availableImgColStyle" cols="12" md="7">
        <v-row no-gutters justify="center">
          <v-col cols="3" class="mr-5">
            <v-row no-gutters justify="end" class="thumbnail-sizing">
              <v-col cols="12" lg="8" class="thumbnail-scroll">
                <span v-for="(item, index) in availablesImgs" :key="index">
                  <v-card
                    tile
                    :style="layout.productPage.availableImgCardStyle"
                    @click="setSelectedImg(item.name)"
                    class="mb-5"
                  >
                    <v-img
                      contain
                      class="thumbnail"
                      :style="layout.productPage.availableImgStyle"
                      :src="item.url300px"
                      aspect-ratio="0.9"
                      alt="Thumbnail da imagem do produto"
                    ></v-img>
                  </v-card>
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :style="layout.productPage.selectedImgColStyle"
            class="no-padding"
            cols="8"
            xl="7"
          >
            <zoom-on-hover
              class="magnifier"
              :img-normal="selectedUrlImg.highQuality"
              :scale="1.5"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="no-padding"
        :style="layout.productPage.informationColStyle"
        cols="4"
      >
        <p
          :style="layout.productPage.productNameStyle"
          :class="layout.productPage.productNameClass"
        >
          {{ product.name }}
        </p>
        <p
          v-if="product.brand_name && config.product.showBrandInProductPage"
          :style="layout.productPage.brand.style"
          :class="layout.productPage.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <p
          v-if="product.ref && layout.productPage.ref.show"
          :style="layout.productPage.ref.style"
          :class="layout.productPage.ref.class"
        >
          Ref: {{ product.ref }}
        </p>
        <!-- <p
          v-if="product.balance < 1"
          :style="layout.productPage.noStock.style"
          :class="layout.productPage.noStock.class"
        >
          {{ layout.productPage.noStock.name }}
        </p>
        <p>
          <warn-me
            v-if="product.balance < 1"
            btntext="Avise-me quando chegar"
          />
        </p> -->
        <div
          v-if="
            availablesCodeColors[0] &&
            (config.product.showColorIfOnlyOne ||
              availablesCodeColors.length > 1) &&
            !(
              availablesCodeColors.length == 1 &&
              selectedColorName == 'N/A' &&
              !config.product.showColorIfNA
            )
          "
          :style="layout.productPage.color.mainStyle"
        >
          <p
            :style="layout.productPage.color.titleStyle"
            :class="layout.productPage.color.titleClass"
          >
            Cores Disponiveis :
          </p>
          <span
            v-for="(item, index) in availablesCodeColors"
            :key="index"
            class="gs-color-btn-container"
          >
            <v-btn
              tile
              v-if="item"
              @click="setSelectedColor(item)"
              class="gs-color-btn"
              :style="
                setColorBtnStyle(
                  '',
                  item,
                  layout.productPage.color.selectedBtnStyle
                )
              "
            >
              <span
                class="gs-second-color"
                :style="`background-color: ${setSecondColor(item)}`"
              >
              </span>
            </v-btn>
            <!-- </span> -->
          </span>
        </div>
        <small class="smal">{{ selectedColorName }}</small>
        <!-- <v-row>
          <v-col cols="4">
            <button class="buttonAcab" @click="setModal(marcas.marca)">
              Acabamentosdddd
            </button>
          </v-col>
        </v-row> -->

        <p v-if="!makeDaysProduct()" class="ProductDelivery">
          <span
            style="font-size: 25px"
            class="mdi mdi-truck-check-outline"
          ></span>
          Produto a Pronta Entrega!
        </p>
        <p v-if="makeDaysProduct()" class="ProductDelivery">
          <span
            style="font-size: 25px"
            class="mdi mdi-truck-minus-outline"
          ></span>
          Produto Sob Encomenda, Prazo de 45 Dias
        </p>
        <div style="background: #38383d" class="text-center mt-5">
          <v-dialog
            class="dialog-class"
            v-model="dialog"
            persistent
            max-width="600"
          >
            <v-card-title>
              <button class="button-close-dialog" @click="dialog = false">
                <span class="mdi mdi-close-circle"></span>
              </button>
            </v-card-title>

            <button class="button-open-dialog" @click="dialog = true"></button>
            <div
              class="div-dialog"
              style="overflow-y: auto; overflow-x: hidden"
            >
              <jmarcon v-if="product.brand_name == 'J.marcon'" />
              <estofadosjardim
                v-if="product.brand_name == 'Estofados Jardim'"
              />
              <gs v-if="product.brand_name == 'Gs Móveis Externos'" />
              <tumar v-if="product.brand_name == 'Tumar'"/>
              <elise v-if="product.brand_name == 'Elise'"/>
              <ub v-if="product.brand_name == 'Ub'" />
              <tissot v-if="product.brand_name == 'Tissot'" />
            </div>
          </v-dialog>
        </div>
        <div
          v-if="
            ordenateAvailablesSizes[0] &&
            (config.product.showSizeIfOnlyOne ||
              ordenateAvailablesSizes.length > 1) &&
            !(
              ordenateAvailablesSizes.length == 1 &&
              ordenateAvailablesSizes[0] == 'N/A' &&
              !config.product.showSizeIfNA
            )
          "
          :style="layout.productPage.size.mainStyle"
        >
          <p
            :style="layout.productPage.size.titleStyle"
            :class="layout.productPage.size.titleClass"
          >
            Tamanhos Disponiveis :
          </p>

          <span v-for="(item, index) in ordenateAvailablesSizes" :key="index">
            <v-btn
            class="mr-1"
              tile
              v-if="item"
              :style="
                setSizeBtnStyle(
                  layout.productPage.size.btn.defaultStyle,
                  layout.productPage.size.btn.selectedStyle,
                  item,
                  !enabledSizes.includes(item),
                  layout.productPage.size.btn.disabledStyle
                )
              "
              @click="setSelectedSize(item)"
              :disabled="!enabledSizes.includes(item)"
            >
              {{ item }}
            </v-btn>
          </span>
        </div>
        <atribute-component
          v-if="config.atribute && config.atribute.show"
          :atributes="product.product_atribute"
        />

        <div :style="layout.productPage.priceAndBuy.mainStyle">
          <v-row>
            <v-col cols="5">
              <span
                v-if="
                  product.actived_promotions &&
                  product.actived_promotions.length >= 1
                "
              >
                <strike>
                  R$
                  {{
                    (
                      parseFloat(product.actived_promotions[0].discount_value) +
                      parseFloat(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike>
                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </span>
              <span v-else-if="product.price > 0">
                <!-- <strike>
                  R$
                  {{
                    (
                      parseFloat(product.price) -
                      calculateDiscountRate(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike> -->

                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>

                <p
                  v-if="layout.productPage.priceAndBuy.installments"
                  :style="layout.productPage.priceAndBuy.installmentStyle"
                >
                  ou {{ maximumInstallment }}x de R${{ minimumValue }}
                </p>
              </span>

              <span v-else-if="product.price == 0">
                <!-- <strike>
                  R$
                  {{
                    (
                      parseFloat(product.price) -
                      calculateDiscountRate(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike>  -->

                <p :style="layout.productPage.priceAndBuy.priceConsultStyle">
                  Valor sob Consulta
                </p>

                <!-- <p
                v-if="layout.productPage.priceAndBuy.installments"
                :style="layout.productPage.priceAndBuy.installmentStyle"
              >
                ou {{ maximumInstallment }}x de R${{ minimumValue }}
              </p> -->
              </span>
            </v-col>
            <v-col cols="7" class="d-flex align-center" style="cursor: pointer">
              <span
                @click="setGridIdAndAddItemInCart()"
                class="d-flex align-center icon-heart"
              >
                <i class="mdi mdi-heart-outline"></i>
                <span style="margin-left: 5px;"></span>
              </span>
            </v-col>            
            <br>
            <v-col cols="7" align-self="">
              <v-btn
                @click="whatsapp()"
                :style="layout.productPage.priceAndBuy.buyBtnStyle"
              >
                Realizar Cotação</v-btn
              >
            </v-col>
            <br />
            <div v-if="product.delivery_rule == 1">
              <v-col v-if="fobOptions.addFreightByTheBuyerInDefaultDeskScreen">
                <span
                  v-if="fobOptions.AddtextFreightByFOB"
                  class="txt-freight-buyer"
                  >{{ fobOptions.textFreightByFOB }}</span
                >
                <br />
                <a
                  v-if="this.fobOptions.buttonFreightByTheBuyer"
                  target="_blank"
                  :href="whattsLink"
                  style="color: red; font-weight: bold"
                >
                  {{ fobOptions.textButtonFreightByTheBuyer }}
                </a>
              </v-col>
            </div>
            <!-- <div style="width: 100%;" v-else>
              <v-col cols="12">
                <deliveryCalculator />
              </v-col>
            </div> -->
          </v-row>
        </div>

        <div class="section mt-4 ">
          <div class="section-title">Descrição</div>

          <div class="description-wrapper">
            <p class="description-text" :class="{ collapsed: !isExpanded }">
              {{ product.description }}
            </p>
            <div class="show-more-wrapper">
              <v-btn v-if="product.description.length > 200" class="btn-show-more" tile outlined @click="toggleExpand">
                {{ isExpanded ? 'VER MENOS' : 'VER MAIS' }}
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AtribueComponent from "@/components/body/productSession/productScreen/components/others/atributeComponent";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";
import WarnMe from "@/components/body/productSession/productScreen/components/others/warnMe";
import cartDialog from "@/components/body/orderSection/cart/components/cartDialogFretch";
import Jmarcon from "../marcas/jmarcon.vue";
import Estofadosjardim from "../marcas/estofadosjardim.vue";
import GS from "../marcas/GS.vue";
import Tumar from '../marcas/Tumar.vue';
import Elise from '../marcas/elise.vue';
import Ub from '../marcas/ub.vue';
import Tissot from '../marcas/Tissot.vue';

export default {
  components: {
    AtribueComponent,
    deliveryCalculator,
    WarnMe,
    cartDialog,
    Jmarcon,
    Estofadosjardim,
    GS,
    Tumar,
    Elise,
    Ub,
    Tissot,
  },
  data: function () {
    return {
      maximumInstallment: "",
      minimumValue: "",
      whattsLink: null,
      cartDialog: true,
      isExpanded: false,
      dialog: false,
      marcas: [
        { marca: "J.marcon" },
        { marca: "Estofados Jardim" },
        { marca: "Gs Móveis Externos" },
        { marca: "Tumar" },
        { marca: "Elise" },
        { marca: "Ub" },
        { marca: "Tissot" },
      ],
    };
  },
  computed: {
    ...mapState("Product", [
      "product",
      "load",
      "selectedColor",
      "selectedSize",
    ]),
    ...mapState("Layouts", ["layout", "fobOptions", "config"]),
    ...mapGetters("Product", [
      "selectedUrlImg",
      "availablesImgs",
      "availablesCodeColors",
      "ordenateAvailablesSizes",
      "enabledSizes",
      "selectedColorName",
      "installmentResult",
    ]),
  },
  methods: {
    ...mapActions("Product", [
      "setSelectedImg",
      "setSelectedColor",
      "setSelectedSize",
      "setGridIdAndAddItemInCart",
    ]),
    ...mapActions("Cart", ["setCartModal", "callPrimaryDrawer"]),

    toggleExpand() {
      this.isExpanded = !this.isExpanded; // Alterna entre expandido e recolhido
    },
    setModal(project) {
      this.project = project;
      this.dialog = true;
    },
    calculateDiscountRate(price) {
      this.discountPrice = (parseFloat(price) * 0.4).toFixed(2);
      return this.discountPrice;
    },
    makeDaysProduct() {
      if (
        this.product.confection_deadline === 0 ||
        this.product.confection_deadline === null
      ) {
        return false;
      } else {
        return true;
      }
    },

    whatsapp() {
      // console.log("Testando makeDaysProduct:", this.makeDaysProduct());
      // console.log('Produto:::',this.product.confection_deadline)

      const productName = this.product.name;
      const Routeproduct = this.$route.path;
      const Dominio = "https://www.decorabylu.com.br";
      const message = encodeURIComponent(
        `Olá, gostaria de saber mais informações sobre o produto: ${productName}.\n\n${Dominio}${Routeproduct}`
      );
      window.open(`https://wa.me/5519989326507?text=${message}`, "_blank");
    },

    setColorBtnStyle(style, bgColor, selectedBtnStyle, selected) {
      if (bgColor == this.selectedColor) {
        return {
          ...selectedBtnStyle,
          background: bgColor,
        };
      } else {
        return {
          ...style,
          background: bgColor,
        };
      }
    },

    setSecondColor(value) {
      let response = this.product.grid.filter((data) => {
        return data.code_color === value;
      });
      if (!response[0].second_code_color) {
        return value;
      } else {
        // return ` linear-gradient(135deg, ${value} 50%, ${response[0].second_code_color} 50%);`;
        return response[0].second_code_color;
      }
    },
    setSizeBtnStyle(
      defaultStyle,
      selectedStyle,
      size,
      disabled,
      disabledStyle
    ) {
      if (disabled) {
        return disabledStyle;
      } else {
        if (size == this.selectedSize) {
          return selectedStyle;
        } else {
          return defaultStyle;
        }
      }
    },
  },
  mounted: function () {
    const installmentArray = this.installmentResult();
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
    this.whattsLink = `${this.layout.floatingIcon.link}&text=Olá, gostaria de cotar o frete do pedido: ${this.product.name}`;
  },
};
</script>

<style scoped>
.icon-heart {
  display: flex;
  align-items: center;
  color: black; /* Cor padrão */
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s ease; /* Transição suave */
}

.icon-heart:hover {
  color: red; /* Cor vermelha ao passar o mouse */
}

.icon-heart:active {
  color: darkred; /* Cor vermelha escura ao clicar */
}
.ProductDelivery {
  font-size: 15px;
  font-family: "Montserrat" !important;
  font-weight: 600;
  margin-top: 20px;
}
.buttonAcab {
  background-color: #1b884c !important;
  margin-top: 20px;
  font-family: "Montserrat" !important;
  width: 100%;
  height: 40px;
  color: white;
  border: 1px solid #000000;
  border-radius: 5px;
  font-weight: 500;
}
.smal {
  font-family: "Montserrat" !important;
  font-weight: 600;
}
.dialog-class {
  background: #38383d !important;
  z-index: 9999; /* Eleva o z-index do diálogo */
}
.button-open-dialog {
  position: absolute;

  color: black;
  font-weight: 700;
  z-index: 5000;
  font-size: 20px;
  width: 30px;
  background: #ffffff7b;
  border-radius: 50px;
}
.button-close-dialog {
  position: absolute;
  color: white;
  font-weight: 700;
  z-index: 5000;
  font-size: 25px;
  background: transparent;
  border-radius: 50px;
}
.div-dialog {
  height: 100vh !important;
  width: 100% !important;
  top: 0%;
  left: 0%;
  margin: 0;
  padding: 0;
  background: transparent;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .div-dialog {
    height: 100% !important;
    width: 100%;
    top: 0%;
    left: 50%;
    transform: translate(0%, 0%);
    background: #0000001e;
    padding: 0px;
  }
  .button-close-dialog {
    position: absolute;
    color: black;
    font-weight: 700;
    z-index: 5000;
    font-size: 20px;
    width: 30px;
  }
}

.description-box {
  max-height: 50px;
  overflow: hidden;
  transition: max-height 0.5s ease;
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.description-box.expanded {
  max-height: 500px;
  overflow-y: auto;
}
button:focus,
button:active {
  border: 1px solid black;
  background: none;
  outline: none;
  padding: 0;
}

.thumbnail-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.thumbnail-sizing {
  height: 40vw;
  max-height: 670px;
}
.txt-freight-buyer {
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.thumbnail >>> .v-image__image {
  background-position: center top !important;
}

/* .magnifier >>> .v-image__image {
  background-position: center top !important;
} */

.magnifier {
  height: 100%;
}

.magnifier:hover {
  border: 2px solid black;
  cursor: zoom-in;
}

.magnifier >>> .normal {
  background-position: center top !important;
  height: 100%;
  object-fit: contain !important;
}

.gs-color-btn {
  position: relative;
  box-sizing: inherit;
  min-width: 0 !important;
  width: 32px !important;
  height: 32px !important;
  padding: 3px !important;
  margin: 0 6px 4px 0;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: none;
  overflow: hidden;
}

.gs-second-color {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  transform: skew(45deg) translate(-45%);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.section-title {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
  color: #111827;
}


.description-wrapper {
  width: 100%;
}

.description-text {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #4b5563;
  line-height: 1.5;
  max-height: none;
  overflow: hidden;
  transition: max-height .3s ease;
}

.description-text.collapsed {
  max-height: 70px;
  /* limite do preview */
}

.show-more-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
}

/* Botão “VER MAIS” */
.btn-show-more {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #7E100B !important;
  border-color: #d1d5db !important;
  border-radius: 12px !important;
  min-height: 40px;
  width: 80%;
}

/* Hover opcional */
.btn-show-more:hover {
  background: #f5f5f5 !important;
}

</style>