<template>
  <span v-if="!load" translate="no">
    <v-row :style="layout.productPage.mobile.mainRowStyle">
      <v-col cols="12" align="center">
        <p
          :style="layout.productPage.mobile.productNameStyle"
          :class="layout.productPage.mobile.productNameClass"
        >
          {{ product.name }}
        </p>
      </v-col>
      <v-col
        :style="layout.productPage.mobile.selectedImgColStyle"
        class="no-padding"
        cols="12"
      >
        <v-img
          v-if="selectedUrlImg.highQuality"
          :src="selectedUrlImg.highQuality"
          :lazy-src="selectedUrlImg.lowQuality"
          alt="Imagem do produto"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <div style="overflow-x: hidden">
          <div
            style="
              width: 104%;
              overflow-y: hidden;
              overflow-x: auto;
              white-space: nowrap;
              margin: 0 -3vw;
            "
          >
            <v-img
              contain
              style="display: inline-block; margin-left: 3vw"
              width="100"
              height="100"
              v-for="(item, index) in availablesImgs"
              :key="index"
              @click="setSelectedImg(item.name)"
              class="pointer"
              :src="item.url300px"
              alt="Thumbnail da imagem do produto"
            ></v-img>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <p
          v-if="product.brand_name && config.product.showBrandInProductPage"
          :style="layout.productPage.mobile.brand.style"
          :class="layout.productPage.mobile.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <p
          v-if="product.ref && layout.productPage.mobile.ref.show"
          :style="layout.productPage.mobile.ref.style"
          :class="layout.productPage.mobile.ref.class"
        >
          Ref: {{ product.ref }}
        </p>
        <br>
        <span
            @click="setGridIdAndAddItemInCart()"
            class="d-flex align-center icon-heart"
          >
            <i class="mdi mdi-heart-outline"></i>
            <span style="margin-left: 5px; font-size:15px">Favoritar</span>
          </span>
        <!-- <p
         
          :style="layout.productPage.noStock.mobile.style"
          :class="layout.productPage.noStock.mobile.class"
        >
          {{ layout.productPage.noStock.mobile.name }}
        </p> -->
      </v-col>
      <v-col v-if="
      availablesCodeColors[0] &&
      (config.product.showColorIfOnlyOne ||
        availablesCodeColors.length > 1) &&
   
      !(
        availablesCodeColors.length == 1 &&
        selectedColorName == 'N/A' &&
        !config.product.showColorIfNA
      )
    " cols="12" align="center">
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
          :style="layout.productPage.mobile.color.mainStyle"
        >
          <p
            :style="layout.productPage.mobile.color.titleStyle"
            :class="layout.productPage.mobile.color.titleClass"
          >
            Cores Disponiveis :
          </p>
          <span v-for="(item, index) in availablesCodeColors" :key="index">
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
          <br />
          <p>{{ selectedColorName }}</p>
        </div>
      </v-col>
  
      <v-row>
        <!-- <v-col cols="12" align="center">
          <button
          class="buttonAcab"
          @click="setModal(marcas.marca)"
          >Acabamentos</button>
        </v-col> -->
        <!-- <v-col cols="12">
          <p v-if="!makeDaysProduct()" class="ProductDelivery"><span style="font-size:25px" class="mdi mdi-truck-check-outline"></span> Produto a Pronta Entrega!</p>
          <p v-if="makeDaysProduct()" class="ProductDelivery"><span style="font-size:25px" class="mdi mdi-truck-minus-outline"></span> Produto Sob Encomenda, Prazo de {{ product.confection_deadline }} Dias</p>
      </v-col> -->
    </v-row>


      <!-- <div style="background:#38383d" class="text-center mt-5">
        <v-dialog class="dialog-class" v-model="dialog" persistent max-width="600">
          <v-card-title>
            <button class="button-close-dialog" @click="dialog = false"><span class="mdi mdi-close-circle"></span></button>
          </v-card-title>
    
          <button class="button-open-dialog" @click="dialog = true"></button>
          <div class="div-dialog" style="overflow-y: auto; overflow-x: hidden">
            <jmarcon v-if="product.brand_name == 'J.marcon'"/>
            <estofadosjardim v-if="product.brand_name == 'Estofados Jardim'" />
            <gs v-if="product.brand_name == 'Gs Móveis Externos'"/>
            <tumar v-if="product.brand_name == 'Tumar'"/>
            <elise v-if="product.brand_name == 'Elise'"/>
            <ub v-if="product.brand_name == 'Ub'" />
            <tissot v-if="product.brand_name == 'Tissot'" />
          </div>
        </v-dialog>
      </div> -->

      <v-col cols="12" align="center"    v-if="
      ordenateAvailablesSizes[0] &&
      (config.product.showSizeIfOnlyOne ||
        ordenateAvailablesSizes.length > 1) &&
     
      !(
        ordenateAvailablesSizes.length == 1 &&
        ordenateAvailablesSizes[0] == 'N/A' &&
        !config.product.showSizeIfNA
      )
    ">
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
          :style="layout.productPage.mobile.size.mainStyle"
        >
          <p
            :style="layout.productPage.mobile.size.titleStyle"
            :class="layout.productPage.mobile.size.titleClass"
          >
            Tamanhos Disponiveis :
          </p>

          <span v-for="(item, index) in ordenateAvailablesSizes" :key="index">
            <v-btn
              tile
              v-if="item"
              :style="
                setSizeBtnStyle(
                  layout.productPage.mobile.size.btn.defaultStyle,
                  layout.productPage.mobile.size.btn.selectedStyle,
                  item,
                  !enabledSizes.includes(item),
                  layout.productPage.mobile.size.btn.disabledStyle
                )
              "
              @click="setSelectedSize(item)"
              :disabled="!enabledSizes.includes(item)"
            >
              {{ item }}
            </v-btn>
          </span>
        </div>
      </v-col>

      <v-col cols="12" align="center">
        <div :style="layout.productPage.mobile.priceAndBuy.mainStyle">
          <v-row>
            <v-col cols="12">
              <span v-if="product.actived_promotions.length > 0">
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
                <!-- R$
                {{
                  (
                    parseFloat(product.price) -
                    calculateDiscountRate(product.price)
                  ).toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }} -->
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
                v-if="layout.productPage.mobile.priceAndBuy.installments"
                :style="layout.productPage.mobile.priceAndBuy.installmentStyle"
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
            <!-- <v-col v-if="makeDaysProduct()" cols="12">
              <v-btn
                @click="setGridIdAndAddItemInCart()"
                :disabled="product.balance < 1"
                :style="layout.productPage.priceAndBuy.buyBtnStyle"
                >Comprar</v-btn
              >
              <br />
            </v-col> -->
            <v-col cols="12">
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
            <!-- <div v-else style="width:100%">
              <v-col cols="12" align="center">
                <deliveryCalculator />
              </v-col>
            </div> -->
          </v-row>
        </div>
        <div :style="layout.productPage.description.mainStyle">
    
          <div
            class="description-box"
            @click="toggleExpand"
            :class="{ expanded: isExpanded }"
          >
          <p :style="layout.productPage.description.titleStyle">Descrição:  <span class="chevron-icon mdi" :class="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"></span>
    </p>
         
            <p :style="layout.productPage.description.textStyle" class="txt">
              {{ product.description }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </span>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";
import cartDialog from "@/components/body/orderSection/cart/components/cartDialogFretch";
import Jmarcon from '../marcas/jmarcon.vue';
import Estofadosjardim from '../marcas/estofadosjardim.vue';
import GS from '../marcas/GS.vue';
import Tumar from '../marcas/Tumar.vue';
import Elise from '../marcas/elise.vue';
import Ub from '../marcas/ub.vue';
import Tissot from '../marcas/Tissot.vue';
export default {
  components: {
    deliveryCalculator,
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
      marcas:[
        {marca:'J.marcon'},
        {marca:'Estofados Jardim'},
        {marca:'Gs Móveis Externos'},
        { marca: "Tumar" },
        { marca: "Elise" },
        { marca: "Ub" },
        { marca: "Tissot" },
      ]
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
    setModal(project) {
      this.project = project;
      this.dialog = true;
    },
    calculateDiscountRate(price) {
      this.discountPrice = (parseFloat(price) * 0.4).toFixed(2);
      return this.discountPrice;
    },

    makeDaysProduct() {
      if (this.product.confection_deadline === 0 || this.product.confection_deadline === null) {
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
    toggleExpand() {
      this.isExpanded = !this.isExpanded; // Alterna entre expandido e recolhido
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
.ProductDelivery{
  font-size: 15px;
  font-family: 'Montserrat' !important;
  font-weight: 600;
  margin-top: 20px;
}
.buttonAcab{
  background-color: #1b884c !important;
  margin-top: 20px;
  font-family: 'Montserrat' !important;
  width:100%;
  height: 40px;
  color: white;
  border: 1px solid #000000;
  border-radius: 5px;
  font-weight: 500;
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





.txt{
  text-align: left;
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
.txt-freight-buyer-mobile {
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.gs-color-btn {
  position: relative;
  box-sizing: inherit;
  min-width: 0 !important;
  width: 32px !important;
  height: 32px !important;
  padding: 3px !important;
  margin: 0 6px 4px 0;
  border-radius: 50%;
  box-shadow: none;
  overflow: hidden;
  border: 1px solid black;
}
.gs-second-color {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  transform: skew(45deg) translate(-45%);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>