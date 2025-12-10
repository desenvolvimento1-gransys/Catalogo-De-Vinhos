<template>
  <v-row
    justify="center"
    align="center"
    style="margin: 0 auto !important; width: 100% !important"
    v-model="cartDialog"

  >
  <v-container>
    <v-card :style="layout.cart.cartDialog.card.style" outlined>
      
          <br />
           <!-- <cart-dialog />  -->
          <span v-if="totalAmountInCart > 0">
            <div :style="layout.cart.cartDialog.list.productStyle">
              <!-- <v-row style="margin-top: 5px">
                <v-col>
                  <cart-dialog-fretch></cart-dialog-fretch>
                </v-col>
              </v-row> -->
              <span v-for="(item, index) in productsWithImgUrl" :key="index">
                <router-link
                  :to="`/produto/${item.id}/${convertToLink(item.name)}`"
                  @click.native="setCartModal(false)"
                  style="text-decoration: none; color: inherit"
                  class="no-decoration"
                >
                  <v-row
                    :class="layout.cart.cartDialog.list.rowClass"
                    :style="isMobile ? layout.cart.cartDialog.list.rowStyleMobile : layout.cart.cartDialog.list.rowStyle"
                  >
                    <v-col
                      :style="layout.cart.cartDialog.list.img.colStyle"
                      :cols="layout.cart.cartDialog.list.img.cols"
                      :sm="layout.cart.cartDialog.list.img.sm"
                    >
                      <v-img
                        contain
                        :style="layout.cart.cartDialog.list.img.imgStyle"
                        :src="item.imgUrl"
                        alt="Imagem do produto na sacola"
                      ></v-img>
                    </v-col>
                    <v-col
                      :cols="layout.cart.cartDialog.list.information.cols"
                      :sm="layout.cart.cartDialog.list.information.sm"
                    >
                      <p
                        :style="
                          layout.cart.cartDialog.list.information.nameStyle
                        "
                        class="nameText"
         
                      >
                        {{ item.name }}
                      </p>
                      <small>
                        <p
                          :style="
                            layout.cart.cartDialog.list.information.colorStyle
                          "
                          class="text"
                        >
                          <strong>Cor: </strong>{{ item.color }}
                        </p>
                        <p
                          :style="
                            layout.cart.cartDialog.list.information.sizeStyle
                          "
                          class="text"
                        >
                          <!-- <strong>Tamanho: </strong> -->
                          <span style="text-transform: uppercase">
                            {{ item.size }}
                          </span>
                        </p>
                        <p
                          :style="
                            layout.cart.cartDialog.list.information.qtdStyle
                          "
                          class="text"
                          v-if="!layout.cart.cartDialog.list.qtd.input"
                        >
                          <strong>Qtd </strong>{{ parseInt(item.amount) }}
                        </p>
                        <p v-if="item.balance < 1" style="color: red">
                          Produto Indisponível
                        </p>
                      </small>
                    </v-col>
                    <v-col
                      v-if="layout.cart.cartDialog.list.qtd.input"
                      :cols="layout.cart.cartDialog.list.qtd.cols"
                      :sm="layout.cart.cartDialog.list.qtd.sm"
                      align="center"
                    >
                      <p :style="layout.cart.cartDialog.list.qtd.labelStyle">
                        Qtd
                      </p>
                      <v-text-field
                        dense
                        readonly
                        flat
                        solo
                        v-model="item.amount"
                        label="QTD"
                        type="text"
                        :style="layout.cart.cartDialog.list.qtd.inputStyle"
                        class="qtd-input"
                        :disabled="item.balance < 1"
                        ><v-icon
                          small
                          :disabled="item.amount < 2"
                          @click="
                            changeItemAmount({
                              index: index,
                              amount: item.amount - 1,
                            })
                          "
                          slot="prepend"
                          color="black"
                        >
                          mdi-minus-circle
                        </v-icon>
                        <v-icon
                          small
                          @click="
                            changeItemAmount({
                              index: index,
                              amount: item.amount + 1,
                            })
                          "
                          slot="append-outer"
                          color="black"
                          :disabled="item.balance < 1"
                        >
                          mdi-plus-circle
                        </v-icon>
                      </v-text-field>
                    </v-col>
                    <v-col
                      :align="layout.cart.cartDialog.list.price.colAlign"
                      :cols="layout.cart.cartDialog.list.price.cols"
                      :sm="layout.cart.cartDialog.list.price.sm"
                      @click.prevent
                    >
                      <p
                        v-show="item.size !== 'N/A'"
                        :style="layout.cart.cartDialog.list.price.totalStyle"
                        class="priceText"
                      >
                        R$
                        {{
                          (item.amount * item.price).toLocaleString("pt-BR", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                        }}
                      </p>
                      <p
                        :style="layout.cart.cartDialog.list.price.eachStyle"
                        class="text"
                      >
                        ( R$
                        {{
                          item.price.toLocaleString("pt-BR", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })
                        }}
                        cada)
                      </p>
                      <button
                        :style="layout.cart.cartDialog.list.removeButton.style"
                        @click="removeItem(index)"
                      >
                        Remover
                      </button>
                    </v-col>
                  </v-row>
                </router-link>
              </span>
            </div>
          </span>
          <v-row v-else justify="center">
            <v-col cols="12" align="center">
              <span
                :style="layout.cart.cartDialog.noItemIcon.style"
                :class="layout.cart.cartDialog.noItemIcon.class"
              />
            </v-col>
            <v-col cols="12" align="center">
              <span :style="layout.cart.cartDialog.emptyText.style">{{
                layout.cart.cartDialog.emptyText.text
              }}</span>
            </v-col>
            
            <v-col cols="12" align="center">
              <v-btn
                @click.stop="setCartModal(!cartDialog)"
                :style="layout.cart.cartDialog.emptyButton.style"
                >{{ layout.cart.cartDialog.emptyButton.text }}</v-btn
              >
            </v-col>
          </v-row>
          <!-- <v-row
            v-if="totalAmountInCart > 0"
            :style="layout.cart.cartDialog.bottomRow.style"
          >
            <v-col
              :cols="layout.cart.cartDialog.bottomRow.subTotal.cols"
              :sm="layout.cart.cartDialog.bottomRow.subTotal.sm"
              :align="layout.cart.cartDialog.bottomRow.subTotal.align"
            >
              <p
                :class="layout.cart.cartDialog.bottomRow.subTotal.text.class"
                :style="layout.cart.cartDialog.bottomRow.subTotal.text.style"
              >
                <strong>Subtotal: </strong>
                R$
                {{
                  totalProductsValue.toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </p>

              <p
                v-if="config.progressiveDiscount"
                :class="layout.cart.cartDialog.bottomRow.subTotal.text.class"
                :style="layout.cart.cartDialog.bottomRow.subTotal.text.style"
              >
                Desconto: R$
                {{
                  calculateProgressiveDiscount.discountValue.toLocaleString(
                    "pt-BR",
                    {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }
                  )
                }}
              </p>

              <p
                v-if="config.progressiveDiscount"
                :class="layout.cart.cartDialog.bottomRow.subTotal.text.class"
                :style="layout.cart.cartDialog.bottomRow.subTotal.text.style"
              >
                Total: R$
                {{
                  (
                    totalProductsValue -
                    calculateProgressiveDiscount.discountValue
                  ).toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </p>
              <br />

              <div>
                <span style="" v-if="config.progressiveDiscount">{{
                  getQtdProducts()
                }}</span>

                <p
                  v-if="
                    getProductsWithoutSale.totalAmount >= 1 &&
                    config.progressiveDiscount
                  "
                  :class="layout.cart.cartScreen.resume.info.freight.class"
                  style="color: #b96890; font-size: 16px"
                >
                  Você adquiriu
                  {{ calculateProgressiveDiscount.discountRate }}% desconto em
                  {{ getProductsWithoutSale.totalAmount }} peça(s)
                </p>
              </div>
            </v-col>

            <!-- <v-col
              :cols="layout.cart.cartDialog.bottomRow.backToBuys.cons"
              :align="layout.cart.cartDialog.bottomRow.backToBuys.align"
            >
              <v-btn
                style="width: 20px !important"
                block
                :color="layout.cart.cartDialog.bottomRow.backToBuys.color"
                :class="layout.cart.cartDialog.bottomRow.backToBuys.class"
                :style="layout.cart.cartDialog.bottomRow.goToCart.style"
                @click="setCartModal(false)"
                >Voltar</v-btn
              >
            </v-col> -->
            <v-col
              :cols="layout.cart.cartDialog.bottomRow.goToCart.cons"
              :align="layout.cart.cartDialog.bottomRow.goToCart.align"
              :style="layout.cart.cartDialog.bottomRow.goToCart.style"
            >
           
              <v-btn
                width="200px"
                :color="layout.cart.cartDialog.bottomRow.goToCart.color"
                :class="layout.cart.cartDialog.bottomRow.goToCart.class"
                :style="layout.cart.cartDialog.bottomRow.goToCart.style"
                @click="whatsapp()"
                @click.native="setCartModal(false)"
                v-if="totalAmountInCart > 0"
                >Realizar Cotação</v-btn
              >
            </v-col>
          
        
      </v-card>
    </v-container>
  </v-row>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ModalSpinner from "@/components/utils/modalSpinner";
import AtributeComponent from "@/components/body/orderSection/cart/others/cartProductAtribute";
import cartDialog from "@/components/body/orderSection/cart/components/cartDialogFretch";
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },

  components: {
    ModalSpinner,
    AtributeComponent,
    cartDialog,
  },
  computed: {
    ...mapState("Cart", ["cartDialog", "cartData"]),
    ...mapGetters("Cart", [
      "productsWithImgUrl",
      "totalAmountInCart",
      "totalProductsValue",
      "calculateProgressiveDiscount",
      "getProductsWithoutSale",
    ]),
    ...mapState("Layouts", ["layout", "fobOptions", "config"]),
  },
  watch: {
    totalAmountInCart(newValue, oldValue) {
      // Esta função será chamada sempre que o valor de `totalAmountInCart` mudar
      console.log("Novo valor de totalAmountInCart:", newValue);
      // Você pode fazer qualquer outra operação necessária aqui
    },
  },
  methods: {
    whatsapp() {
      console.log('Item recebido:', this.productsWithImgUrl);
      
      var productList = this.productsWithImgUrl;
      var produtos = ''; 

      productList.forEach((product, index) => {
        produtos += `${index + 1} - ${product.name}\n`;
      });

      const Dominio = "https://www.decorabylu.com.br";
      const message = encodeURIComponent(
        `Olá, gostaria de saber mais informações sobre os seguintes produtos:\n\n${produtos}\n${Dominio}`
      );
      
      window.open(`https://wa.me/5519997718057?text=${message}`, "_blank");
    },

    checkScreenSize() {
      const isMobile = document.querySelectorAll;
      if (window.innerWidth < 780) {
        lines.forEach((line) => {
          line.style.display = "none";
        });
        this.desktopp = false; // Atualiza o estado reativo
      } else {
        lines.forEach((line) => {
          line.style.display = "";
        });
        this.desktopp = true; // Atualiza o estado reativo
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Defina a largura que considera como mobile
    },
    // atributeSum(atributes, amount) {
    //   return 10;
    // },
    convertToLink(value) {
      let response = value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return response;
    },
    ...mapActions("Cart", [
      "setCartModal",
      "showCartItems",
      "changeItemAmount",
      "removeItem",
      "callPrimaryDrawer",
    ]),

    getQtdProducts() {
      let result =
        this.config.qtdProductsForDiscount -
        this.getProductsWithoutSale.totalAmount;
      if (result <= 0) {
        return "";
      } else {
        return "";
      }
    },
  },
  mounted() {
    // console.log("aaa");
    console.log("Lista de produtos com URLs de imagem:", this.productsWithImgUrl);
  },
};
</script>
<style scoped>
.nameText {
  font-size: 14px !important;
}

.text {
  font-size: 12px;
}

.priceText {
  font-size: 14px;
}

.subtotal {
  font-size: 18px;
}

.qtd-input >>> input {
  text-align: center;
}

.cartBtn {
  font-size: 12px;
}

@media only screen and (max-width: 600px) {
  .nameText {
    font-size: 12px !important;
  }
  .text {
    font-size: 10px !important;
  }

  .priceText {
    font-size: 14px;
  }

  .subtotal {
    font-size: 14px;
  }

  .v-dialog__content >>> .v-dialog {
    margin: 10px !important;
    max-height: 99vh !important;
  }

  .cartBtn {
    font-size: 10px;
  }
}
</style>
