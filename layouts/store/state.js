// Cor Principal do Site
let mainColor = "#fff";
// Cor Secundária do Site
let secondaryColor = "#black";
let thirdColor = "#0098DA";
let fourthColor = "#00A859";
let inputColor = "black";
let iconColor = "grey";
let confirmColor = "#81bd70";
let cancelColor = "#e57373";
let errorColor = "red";
let defaultGold = "#d2ad6d";
const lightTextColor = 'white';

let merchantInfo = {
  // Nome do ecommerce para direitos autorais
  companyName: "Vinho",
  // Cnpj do ecommerce para direitos autorais
  cnpj: "41.114.064/0001-09",
  // Número Whatsapp ecommerce
  whatsappNumber: "(19) 98932-6507",

  // Número Telefone ecommerce
  phone: "(19) 98932-6507",
  // Email ecommerce
  email: "Limp.ja1@gmail.com",
  // Endereço ecommerce *se houver
  address: "Av. José Moreira de Queiroz,246 vila Santa Maria Leme/SP",
  // Horário de Funcionamento ecommerce
  workingHours: "Seg a Sex 08:00h as 18:00h",
  // Endereço ecommerce
  location: "...",
  installment: 2,

  // Link Facebook ecommerce
  facebook: "https://www.facebook.com/Limp.Ja.Produtos/?locale=pt_BR",
  // Link Instagram ecommerce
  instagram: "https://www.instagram.com/limp.ja_/",

  get emailLink() {
    return `mailto:${this.email}`;
  },

  get copyright() {
    return `Copyright ${this.companyName} - CNPJ ${this.cnpj}`;
  },

  get whatsappLink() {
    return `https://api.whatsapp.com/send?phone=${"55" +
      this.whatsappNumber.replace(/[^0-9]/g, "")}`;
  },
};
// Muda logo do topo
let logo = "https://granshopping.s3.amazonaws.com/products/44/4410102024143413971851000.jpg";
// Muda logo do footer
let logoAlt = "https://granshopping.s3.amazonaws.com/products/44/4410102024143413971851000.jpg";

export default () => ({
  config: {
    pixel: false,
    api_conversion: false,
    pixel_id: null,
    api_conversion_access_token: null,
    google_analytics_4: null,
    addExtraSizesInProductPage: false,
    FreightCart: false,
    minimumValueFretch: 200,
    addBackToTop: true,
    addCustomerComment: false, //Adiciona os depoimentos no layout
    checkoutMode: "V2",

    atribute: {
      show: false,
      atributes: [
        {
          atributeName: "Aro Feminino",
          labelName: "Aro Feminino",
          type: "overflow-btn",
          typeable: false,
          required: true,
        },
        {
          atributeName: "Aro Masculino",
          labelName: "Aro Masculino",
          type: "overflow-btn",
          typeable: false,
          required: true,
        },
        {
          atributeName: "Gravacao Feminina",
          labelName: "Gravação Feminina",
          typeable: true,
          required: true,
        },
        {
          atributeName: "Gravacao Masculina",
          labelName: "Gravação Masculina",
          typeable: true,
          required: true,
        },
        {
          atributeName: "Bordado",
          labelName: "Bordado",
          type: "autocomplete",
          typeable: false,
          required: false,
        },
        {
          atributeName: "Turbante",
          labelName: "Turbante",
          type: "autocomplete",
          typeable: false,
          required: false,
        },
      ],
    },
    apiVersion: {
      deliveryCheck: "V2",
      createBuy: "V2",
      finishPayment: "V2",
    },
    installmentRule: {
      minimumInstallmentValue: 5,
      minimumInstallmentTimes: 1,
      maximumInstallmentTimes: merchantInfo.installment,
    },
    qtdProductsForDiscount: 1,
    progressiveDiscount: false,

    storeName: "Mini Kids",
    externalSites: {
      correios:
        "https://buscacepinter.correios.com.br/app/endereco/index.php?t",
    },

    supportText:
      "* Caso algum dado esteja incorreto, envie um email com a cópia do documento (cpf/ cnpj) para:",
    supportEmail: merchantInfo.email,

    productWithoutStockPhrase: "Esgotado",
    product: {
      showBrandInProductPage: true,
      showBrandInFirstPage: false, //Inactive in this layout
      selectSizeIfOnlyOne: true,
      showColorIfNA: false,
      showSizeIfNA: false,
      showColorIfOnlyOne: true,
      showSizeIfOnlyOne: true,
    },
    search: {
      filters: true,
      showSizeFilter: true,
      showColorFilter: true,
    },
    delivery: {
      withdrawlText: `Retirada de ${merchantInfo.workingHours}`,
    },
    showModalInClickCartIcon: true,
    genderList: [
      { value: "m", name: "Masculino" },
      { value: "f", name: "Feminino" },
      { value: "o", name: "Outro" },
    ],
    ordenationSizes: [
      { name: "p" },
      { name: "m" },
      { name: "g" },
      { name: "gg" },
      { name: "xg" },
      { name: "g1" },
      { name: "g2" },
      { name: "g3" },
      { name: "g4" },

      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "4" },
      { name: "5" },
      { name: "6" },
      { name: "7" },
      { name: "8" },
      { name: "9" },
      { name: "10" },
      { name: "12" },
      { name: "13" },
      { name: "14" },
      { name: "15" },
      { name: "16" },
      { name: "17" },
      { name: "18" },
      { name: "19" },
      { name: "20" },
      { name: "21" },
      { name: "22" },
      { name: "23" },
      { name: "24" },
      { name: "25" },
      { name: "26" },
      { name: "27" },
      { name: "28" },
      { name: "29" },
      { name: "30" },
      { name: "31" },
      { name: "32" },
      { name: "33" },
      { name: "34" },
      { name: "35" },
      { name: "36" },
      { name: "37" },
      { name: "38" },
      { name: "39" },
      { name: "40" },
      { name: "41" },
      { name: "42" },
      { name: "43" },
      { name: "44" },
      { name: "45" },
      { name: "46" },
      { name: "47" },
      { name: "48" },
      { name: "49" },
      { name: "50" },
      { name: "52" },
      { name: "54" },
      { name: "56" },
    ],
    paymentCard: {
      urlLogo: logoAlt,
    },
    paymentMethods: {
      creditCard: true,
      pix: true,
    },
    pixKeys: {
      keys: merchantInfo.cnpj,
    },
    installmentRule: {
      minimumInstallmentValue: 5,
      minimumInstallmentTimes: 1,
      maximumInstallmentTimes: merchantInfo.installment,
    },
  },
  fobOptions: {
    addFreightByTheBuyerInDefaultDeskScreen: false, //Escolhe se quer adicionar os campos de texto FOB no componente DefaulScreen(Desk e Mob)
    addFreightFOBinCartDefault: false, //Escolhe se irá selecionar as mensagens no componente cartDefault
    addFreightByTheBuyeinDelivery: false, //Seta irá aparecer no component delivery
    addTextFobinDelivery: "true", //Seta a mensagem que irá aparecer em no component delivery
    buttonFreightByTheBuyerDelivery: false, //Escolhe se terá o botão com o link do wpp no componente delivery
    AddtextFreightByFOBinDelivery: false, //Add o texto com a msg no componente delivery
    addFreightFOBinOrderResume: false,
    buttonFreightByTheBuyer: false, //Escolhe se terá o botão com o link do wpp
    textButtonFreightByTheBuyer: "Consulte um representante", //Seta o texto do botão
    textButtonFreightByTheBuyerCartDefault: "FOB",
    linkButtonFob: false,
    AddtextFreightByFOB: false, //Add o texto com a msg
    AddtextFreightByFOBinCartDefault: false,
    textFreightByFOB: "TEXTO PARA FRETE POR CONTA DO COMPRADOR", //Muda o texto
  },
  layout: {
    initLoader: {
      active: false,

      style: {
        "background-color": secondaryColor,
        width: "100%",
        height: "100%",
      },

      logo: {
        width: "15%",
        height: "15%",

        style: {},
        src: logoAlt,
      },
      loadingText: {
        style: {
          color: mainColor,
        },
      },
    },
    containerDefault: {},
    default: {
      app: {
        // 'font-family': "'Fjalla One', sans-serif",
        //'font-weight': '400',
        "font-family": "'Bree Serif', serif !important",
        "background-color": "white",
        width: "100% !important",
      },
      nuxtDivStyle: {
        "min-height": "400px",
      },
    },
    topBar: {
      main: {
        "font-family": "'Bree Serif', serif",
        "background-color": mainColor,

        'padding': '5px 35px 5px 35px',
      },
      phone: {
        cols: 12,
        sm: 4,
        alignSelf: "center",

        disabled: false,

        label: "Telefone (c/ DDD) *",
        color: inputColor,
        style: {
          color: "grey",
        },
        class: "",

        errorMessage: "",
      },
      logoUrl: logo,
      sizes: {
        "max-width": "1130px !important;",
        "align-items": "center",
        margin: "auto",
      },
      icons: {
        color: "black",
        "font-size": "20px",
        "align-items": "center",
        "text-align": "center",
      },
      iconsText: {
        color: "black !important",
        "font-size": "16px",
        // "font-family":'arial',
        "font-family": "'Montserrat' !important",
      },
      cartIcon: {
        class: "mdi mdi-cart cart-icon",
        style: {
          color: "black",
          "font-size": "30px",
        },
      },
      cartText: {
        color: "black",
        margin: "0px",
        "font-size": "16px",
      },
      topBarLogoImg: {
        height: "80px ",
        width: "auto",
        margin: "-5px",
        padding: "0 0 0px 0 !important",
      },
      searchInput: {
        border: "solid rgba(128, 128, 128, 0.322) 1px",
        width: "100%",
        color: "black !important",
        "border-radius": "50px",
        //  height: '40px'
      },
      searchInputBtn: {
        "font-size": "22px",
      },
      mobile: {
        main: {
          "background-color": 'black !important',
        },
        logoUrl: logo,
        logoStyle: {
          width: "150px !important",
        },
        navIcon: {
          icon: "fas fa-bars",
          style: {
            "font-size": "23px !important",
            color: iconColor,
          },
        },
        cart: {
          icon: "mdi mdi-shopping-outline cart-icon",
          style: {
            "font-size": "27px !important",
            color: iconColor,
          },
        },
        searchInput: {
          position: "relative",
          border: "solid rgba(128, 128, 128, 0.322) 1px",
          background: "rgba(255, 255, 255, 0.877)",
          width: "100%",
          color: "black !important",
          height: "40px",
          width: "90%",
          padding: "0 0 0 10px",
          margin: "0 5% 0 5% !important",
        },
        searchInputBtn: {
          position: "absolute",
          margin: "30px 0 0 0px",
          right: "10px",
          bottom: "0px",
          "box-shadow": "none !important",
          "font-size": "23px !important",
          height: "40px !important",
          background: "none !important",
          color: iconColor,
        },
      },
    },
    navBar: {
      main: {
        "background-color": "#fccfeb",
        border: "solid rgba(128, 128, 128, 0.214) 1px",
        "font-family": "'Montserrat', sans-serif",
      },
      navText: {
        color: "black",
        "font-size": "16px",
        padding: "10px 15px 10px 15px",
        "text-transform": "uppercase",
        
      },
      sub: {
        "background-color": "white",
      },
      subText: {
        color: "black",
        'font-family': 'montserrat',
        'font-size':'15px',
        'font-weight':'500'
      },
      mobile: {
        main: {
          height: "100%",
          overflow: "hidden",
          "background-color": mainColor,
        },
        linkStyle: {
          "border-bottom": "solid rgba(128, 128, 128, 0.336) 1px",
          width: "100%",
        },
        login: {
          name: "Login",
          link: "/login",
          icon: {
            class: "mdi mdi-account-arrow-right-outline",
            style: {
              color: iconColor,
            },
          },
          style: {
            "text-decoration": "none",
            color: iconColor,
          },
        },
        linkList: {
          account: {
            name: "Conta",
            link: "/conta/minha-conta",
            icon: {
              class: "mdi mdi-account-arrow-right-outline",
              style: {
                color: iconColor,
              },
            },
            style: {
              "text-decoration": "none",
              color: iconColor,
            },
          },
          orders: {
            name: "Pedidos",
            link: "/conta/pedidos",
            icon: {
              class: "mdi-clipboard-list-outline",
              style: {
                color: iconColor,
              },
            },
            style: {
              "text-decoration": "none",
              color: iconColor,
            },
          },
        },
        navItemsStyle: {
          "overflow-x": "hidden",
          "overflow-y": "auto",
        },
        itemStyle: {
          color: "black",
          "text-decoration": "none",
          'font-family': 'montserrat',
          'font-size':'15px',
          'font-weight':'500'
        },
        subitemStyle: {
          color: "black",
          "text-decoration": "none",
          'font-family': 'montserrat',
          'font-size':'15px'
          
        },
        subItemStyle: {
          "text-decoration": "none",
        },
        chevronStyle: {
          color: "black",
        },
      },
    },
    index: {
      carousel: {
        // interval: 2000,
        // frameRate: 3 / 8,
        // items: [
        //     {
        //         src:
        //             "https://images.pexels.com/photos/4050345/pexels-photo-4050345.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        //     },
        // ]
      },
      information: {
        items: [
          // {
          //   icon: "mdi mdi-truck-check-outline",
          //   bold: "  Frete grátis",
          //   text: "Leme, Araras e Pirassununga",
          // },
          {
            icon: "mdi mdi-card-account-details-outline",
            bold: `  ${merchantInfo.installment}x s/ juros`,
            text: "nos cartões de crédito",
          },
            {
            icon: "mdi mdi-card-bulleted-outline",
            bold: ` ou 12x com juros`,
            text: "juros da maquininha ",
          },
          {
            icon: "mdi mdi-checkbox-multiple-marked",
            bold: "Pronta entrega",
            text: "em produtos selecionados",
          },
        ],
        rowClass: {},
        colClass: {
          color: "black !important",
        },
        icons: {
          "font-size": "30px",
        },
        boldText: {
          "font-family": "'Bree Serif', serif !important",
          padding: "0 0 25px 0 !important",
          "font-size": "14px",
          color: "black !important",
        },
        text: {
          "padding-bottom": "5px",
          "font-size": "12px",
        },
        mobile: {
          iconsStyle: {
            color: "black !important",
          },
          boldTextStyle: {
            color: "black !important",
          },
          textStyle: {
            color: "black !important",
          },
        },
      },
    },
    search: {
      home: {
        main: {
          margin: "110px 25px 90px 25px",
        },
        title: "DESTAQUES",
        titleStyle: {
          "background-color": secondaryColor,
          "text-transform": "uppercase",
          "border-top": "solid grey 1px",
          "margin-top":"50px",
          "font-size": "35px",
          "letter-spacing": "10px",
          color: mainColor,
        },
        titleClass: "text-center",
      },
      

      alert: {
        cols: 11,
        sm: 8,

        style: {
          "max-width": "300px !important",
        },
        justify: "center",
        align: "center",

        icon: "mdi-alert-box-outline",
        color: iconColor,

        text: "Não foi possível encontrar nenhum produto!",
      },
      showMoreBtn: {
        title: "Ver Mais",
        main: {
          margin: "90px 0 0 0",
          height: "45px !important",
          width: "35% !important",
          border: "none",
          "background-color": "#fee7f5",
          color: "white",
          "font-size": "12px !important",
        },
      },
      accordion: {
        main: {},
        expPanel: {
          "min-width": "120px",
          margin: "8px 0 0 0 !important",
        },
        expHeader: {
          "font-size": "14px",
        },
        expContent: {
          "max-height": "300px",
          "overflow-x": "hidden",
          "overflow-y": "auto",
        },
        expColorCheckBox: {
          height: "30px !important",
          "margin-top": "5px !important",
          "margin-bottom": "5px !important",
        },
        expSizeCheckBox: {
          height: "30px !important",
          "margin-top": "5px !important",
          "margin-bottom": "5px !important",
        },
      },
      category: {
        main: {},
        accordion: {
          cols: 3,
          xl: 2,
        },
        items: {
          cols: 9,
          xl: 10,
          xs: 12,
        },
        titleStyle: {
          "border-bottom": "solid  rgba(128, 128, 128, 0.214) 1px",
        },
      },
      productCard: {
        imgAspectRatio: "0.7",
        placeholder: logoAlt,

        mainStyle: {
          padding: "20px 12px 0px 12px",
          margin: "15px 0 0 0",
        },
        installmentConfig: {
          installment: merchantInfo.installment,
        },
        imgStyle: {
          height: "auto",
        },
        nameStyle: {
          padding: "10px 0 0 0",
          "font-weight": "500 !important",
          'font-family': 'montserrat',
          overflow: "hidden",
          "text-overflow": "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": 2,
          "-webkit-box-orient": "vertical",
        },
        textArea: {
          style: {
            "min-height": "59px",
            height: "100vh",
            "max-height": "66px",
          },
        },
        discountPriceStyle: {
          "margin-left": " 0px !important",
          "text-decoration": "line-through",
          color: "rgba(128, 128, 128, 0.803)",
          "font-size": "14px",
          
        },
        priceStyle: {
          "font-weight": "600 !important",
          'font-family': 'montserrat',
        },
        installmentPriceStyle: {
          padding: "0px 0 0 0 !important",
          "font-weight": "300 !important",
          "font-size": "14px !important",
          color: "#3b4e3c !important",
        },
        noBalanceProduct: {
          style: {
            margin: "0px !important",
            color: "grey",
            "font-weight": "600 !important",
          },
          class: {},
        },
        buttonStyle: {
          margin: "20px 0 0 0",
          width: "100%",
          height: "40px",
          "font-size": "15px",
          "background-color": "#fee7f5",
          color: "black",
          "border-radius": "none !important",

          'font-family': 'montserrat',
          'font-weight':'600'
        },
        btnName: "Detalhes",
        hrStyle: {
          color: "#fff",
        },
      },
    },
    productPage: {
             mainStyle: {
    backgroundColor: '#ffffff',
    padding: '24px 0 48px 0',
  },

  // COLUNA ESQUERDA (IMAGENS)
  availableImgColStyle: {
    padding: '0px 16px',
  },

  availableImgCardStyle: {
    borderRadius: '8px',
    border: '1px solid #eee',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: 'none',
  },

  availableImgStyle: {
    backgroundColor: '#f5f5f5',
  },

  selectedImgColStyle: {
    padding: '0 16px',
  },

  // COLUNA DIREITA (INFORMAÇÕES)
  

  // TÍTULO DO PRODUTO
  productNameStyle: {
    // o grosso do estilo está no .product-title do CSS,
    // aqui só complemento se precisar
    marginBottom: '8px',
    color: '#111827',
  },
  productNameClass: 'product-title',

  // MARCA
  brand: {
    style: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '2px',
    },
    class: '',
  },

  // REFERÊNCIA
  ref: {
    show: true,
    style: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '8px',
    },
    class: '',
  },

  // AVISO SEM ESTOQUE
  noStock: {
    name: 'Produto esgotado',
    style: {
      color: '#b91c1c',
      fontWeight: 600,
      marginTop: '8px',
      fontSize: '14px',
    },
    class: '',
  },

  // CORES
  color: {
    mainStyle: {
      marginTop: '12px',
    },
    titleStyle: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#111827',
      marginBottom: '6px',
    },
    titleClass: '',
    btnStyle: {
      border: '1px solid #e5e7eb',
      borderRadius: '50%',
      width: '28px',
      height: '28px',
      minWidth: '28px',
      padding: 0,
    },
    selectedBtnStyle: {
      border: '2px solid #111827',
      borderRadius: '50%',
      width: '28px',
      height: '28px',
      minWidth: '28px',
      padding: 0,
    },
    btnClass: '',
  },

  // TAMANHOS
  size: {
    mainStyle: {
      marginTop: '18px',
    },
    titleStyle: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#111827',
      marginBottom: '6px',
    },
    titleClass: '',
    btn: {
      defaultStyle: {
        borderRadius: '4px',
        border: '1px solid #d1d5db',
        backgroundColor: '#ffffff',
        color: '#111827',
        minWidth: '40px',
        height: '36px',
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '14px',
      },
      selectedStyle: {
        borderRadius: '4px',
        border: '1px solid #111827',
        backgroundColor: '#111827',
        color: '#ffffff',
        minWidth: '40px',
        height: '36px',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '14px',
      },
      disabledStyle: {
        borderRadius: '4px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#f3f4f6',
        color: '#9ca3af',
        minWidth: '40px',
        height: '36px',
        textTransform: 'none',
        fontWeight: 400,
        fontSize: '14px',
      },
    },
  },

  // PREÇO + BOTÃO COMPRAR
  priceAndBuy: {
    mainStyle: {
      marginTop: '24px',
    },
    priceStyle: {
      fontFamily: "'Lexend', sans-serif",
      fontWeight: 700,
      fontSize: '26px',
      color: '#111827',
      margin: '4px 0',
    },
    installments: true,
    installmentStyle: {
      fontSize: '13px',
      color: '#4b5563',
    },
    buyBtnStyle: {
      backgroundColor: '#111827',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontWeight: 600,
      width: '100%',
      height: '50px',
      borderRadius: '4px',
      padding: '10px 18px',
    },
  },

  
            experience: {},
            conhecaTambem: {
                images: [
                    { src: '/imagem1.jpg',
                        name: "ANIMAL PRINT VOLTOU COM TUDO!",
                        name2: " DESCUBRA COMO USAR A ESTAMPA QUERIDINHA DO MOMENTO E ARRASAR NO LOOK!",
                        link: "https://www.instagram.com/reel/DIcPf4Sgg80/?igsh=NnhrbGhkNmVreGM=",
                     },
                    { src: '/imagem2.jpg',
                        name: "JAQUETA OVERSIZE RACING É O TOQUE DE ESTILO QUE SEU LOOK PEDE ",
                        name2: "VEJA COMO USAR!",
                        link: "https://www.instagram.com/p/DH8hWnAgyeO/?igsh=cXFkbDh6ZndmOGlm",
                     },
                    { src: '/imagem3.jpg',
                        name: "A CALÇA CARGO É ATITUDE",
                        name2: "SE E SE DESTAQUE COM ESTILO SURREAL!",
                        link: "https://www.instagram.com/reel/DIt19fTR-wq/?igsh=MW5kaW9yMm54ZXU5ag==",
                     }
                  ],
                
                btnStyle:{
                    background: 'black',
                    color: 'white',
                    'font-size': '8pt',
                    'font-family': '"Archivo Black", sans-serif !important',
                    'font-weight': '800 !important',
                    width: '150px',
                    'z-index': '1',
                    'position': 'absolute',
                    'top': '80%',
                    'left': '16.5%',
                    'transform': 'translate(-30%, -50%)',
                },
                scopo: {
                    position: 'relative',
                    display: 'inline-block',
                  },
                  imagem: {
                    width: '430px',
                    height: 'auto',
                    display: 'block',
                    marginLeft: '20px',
                    borderRadius: '50px !important',
                    marginRight: '10px',
                  },
                  description: {
                    position: 'absolute',
                    top: '50%',
                    left: '30px',
                    right: '30px',
                    transform: 'translateY(-60%)',
                    fontSize: '10pt',
                    color: 'white',
                    fontWeight: '800',
                    fontFamily: '"Archivo Black", sans-serif',
                    zIndex: '1',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    lineHeight: '1.2',
                    textAlign: 'left',
                    padding: '0px 10px',
                  },
                  
                  description2: {
                    position: 'absolute',
                    top: '60%',
                    left: '30px',
                    right: '30px',
                    transform: 'translateY(-50%)',
                    fontSize: '10pt',
                    color: 'white',
                    fontWeight: '600',
                    fontFamily: '"Archivo Black", sans-serif',
                    zIndex: '1',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    lineHeight: '1.2',
                    textAlign: 'left',
                    padding: '5px 10px',
                    borderRadius: '10px'
                  },
                  
                  
                  Title: {
                    text: 'CONHEÇA TAMBÉM',
                    marginLeft: '40px',
                    fontSize: '22pt',
                    color: 'black',
                    letterSpacing: '3px',
                    fontFamily: '"Archivo Black", sans-serif !important',
                  },
                  imagemStyle: {
                    width: '430px',
                    height: '350px',
                    'object-fit': 'cover',
                    display: 'block',
                    'box-shadow': '0 4px 8px rgba(0,0,0,0.2)'
                  },                  
                  btnStyle: {
                    text: 'VER TUDO',
                    background: 'black',
                    color: 'white',
                    fontSize: '10pt',
                    fontFamily: '"Archivo Black", sans-serif !important',
                    fontWeight: '800 !important',
                    width: '120px',
                    zIndex: '1',
                    position: 'absolute',
                    bottom: '13%',
                    left: '30px',
                    transform: 'none',
                    borderRadius: '25px',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  },
            },
           // DESCRIÇÃO
  description: {
    mainStyle: {
      marginTop: '24px',
    },
    titleStyle: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#111827',
    },
  },
            noStock: {
                mobile: {
                    name: 'Produto Indisponível',
                    style: {
                        margin: '20px 0 20px 0 ',
                        'font-size': '18px',
                        'color': errorColor
                    },
                    class: null
                },
                name: 'Produto Indisponível',
                style: {
                    margin: '130px 0 60px 0 ',
                    'font-size': '23px',
                    'color': errorColor
                },
                class: null
            },
            searchSection: {
                style: {
                    'font-family': '"lexend","sans-serif"'
                },
                title: {
                    name: 'Talvez você goste',
                    style: {
                        'font-size': '20px !important',
                        'font-weight': 'bold'
                    },
                    class: null
                },
                config: {
                    items: 12,
                    displaySize: {
                        sm: 4,
                        md: 2,
                        xl: 2,
                        cols: 6
                    },
                    params: {
                    }
                },
            },
            mobile: {
  mainRowStyle: {
    padding: '20px 5% 0 5%'
  },

  // TÍTULO
  productNameStyle: {
    'font-family': '"Poppins", sans-serif !important',
    'font-weight': '600',
    'font-size': '22px',
    'line-height': '1.2',
    'margin': '0 0 8px 0'
  },
  productNameClass: {
    'font-family': '"Poppins", sans-serif !important'
  },

  selectedImgColStyle: {},

  // PREÇO / PARCELAS
  priceAndBuy: {
    installments: merchantInfo.installment,
    installmentStyle: {
      'font-family': '"Poppins", sans-serif !important',
      'font-size': '14px',
      'font-weight': '500',
      'color': '#6b7280' // cinza do print
    },
    mainStyle: {
      margin: '20px 0 16px 0 !important',
      'border-top': '1px solid rgba(128, 128, 128, 0.25)',
      'border-bottom': '1px solid rgba(128, 128, 128, 0.25)',
      width: '100% !important'
    },
    priceStyle: {
      'font-family': '"Poppins", sans-serif !important',
      'font-weight': '700',
      'font-size': '24px',
      padding: '0 !important',
      margin: '0 !important',
      'color': '#000' // se quiser vermelho do print "À vista"
    },
    buyBtnStyle: {
      'background-color': 'black !important',
      color: `${lightTextColor} !important`,
      height: '55px',
      width: '100%'
    }
  },

  // TAMANHOS
  size: {
    mainStyle: { margin: '12px 0 8px 0' },
    titleStyle: {
      'font-family': '"Poppins", sans-serif !important',
      'font-weight': '700',
      'font-size': '14px',
      'margin-bottom': '8px'
    },
    titleClass: {},
    btn: {
      // estado normal
      defaultStyle: {
        'box-sizing': 'border-box',
        'min-width': '0 !important',
        'width': '123px !important',
        'height': '40px !important',
        'border': '1px solid #cfd8e3 !important',
        'background-color': '#fff',
        'padding': '0 !important',
        'margin': '0 10px 10px 0',
        'color': '#3b4d65',
        'font-family': '"Poppins", sans-serif !important',
        'font-size': '14px',
        'border-radius': '10px',
        'box-shadow': '0 1px 0 rgba(16,24,40,.04)'
      },
      defaultClass: {},

      // selecionado
      selectedStyle: {
        'box-sizing': 'border-box',
        'min-width': '0 !important',
        'width': '123px !important',
        'height': '40px !important',
        'border': '2px solid #ffffffff !important',
        'background-color': '#000000ff !important',
        'padding': '0 !important',
        'margin': '0 10px 10px 0',
        'color': '#ffffffff',
        'font-weight': '600',
        'font-size': '14px',
        'border-radius': '10px',
        'box-shadow': '0 1px 0 rgba(16,24,40,.05)'
      },

      // desabilitado (com “risco” diagonal)
      disabledStyle: {
        'box-sizing': 'border-box',
        'min-width': '0 !important',
        'width': '123px !important',
        'height': '40px !important',
        'border': '1px solid #e5e7eb !important',
        'background-color': '#fff',
        'padding': '0 !important',
        'margin': '0 10px 10px 0',
        'color': '#9ca3af',
        'border-radius': '10px',
        'opacity': '.8',
        // truquezinho do risco diagonal só com inline style
        'background-image': 'linear-gradient(130deg, transparent 45%, #c8d1dc 45%, #c8d1dc 55%, transparent 55%)',
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat'
      }
    }
  },

  // CORES
  color: {
    mainStyle: { margin: '10px 0 0 0' },
    titleStyle: {
      'font-family': '"Poppins", sans-serif !important',
      'font-weight': '700',
      'font-size': '14px',
      'text-transform': 'none'
    },
    titleClass: {},
    // swatch padrão
    btnStyle: {
      'box-sizing': 'border-box',
      'min-width': '0 !important',
      'width': '84px !important',
      'height': '34px !important',
      'padding': '0 !important',
      'margin': '0 12px 12px 0',
      'border-radius': '8px !important',
      'border': '1px solid rgba(0,0,0,.12) !important',
      'box-shadow': '0 1px 0 rgba(16,24,40,.04)'
    },
    // swatch selecionado com contorno interno
   selectedBtnStyle: {
  'box-sizing': 'border-box',
  'min-width': '0 !important',
  'width': '84px !important',
  'height': '34px !important',
  'padding': '4px !important',
  'margin': '0 12px 12px 0',
  'border-radius': '8px !important',
  'border': '1px solid rgba(0, 0, 0, 0.18) !important', // Corrigido: removido "))"
  'box-shadow': '0 0 0 2px rgba(0, 0, 0, 0.06) !important' // Removido o "inset"
},
    btnClass: {}
  },

  // DESCRIÇÃO
  description: {
    mainStyle: { margin: '18px 0 8px 0' },
    titleStyle: {
      'font-family': '"Poppins", sans-serif !important',
      'font-weight': '700',
      'font-size': '14px',
      'margin-bottom': '6px'
    },
    textStyle: { 'white-space': 'pre-line', 'font-family': '"Poppins", sans-serif !important', fontSize: "12px" }
  },

  // Marca e Ref (mantidos, só saneei peso)
  brand: {
    style: {
      color: 'black',
      'font-size': '14px',
      'font-weight': '400',
      'font-family': '"Poppins", sans-serif !important',
      margin: '0 0 2px 0 !important'
    },
    class: null
  },
  ref: {
    show: true,
    style: {
      color: 'black',
      'font-size': '13px',
      'font-weight': '400',
      'font-family': '"Poppins", sans-serif !important',
      margin: '0 !important'
    },
    class: null
  }
}

        },
    cart: {
      cartDialog: {
        dialog: {
          style: {
            background: "none !important",
          },
          class: {},
          maxWidth: "700",
        },
        card: {
          style: {
            // overflow: 'hidden',
            height: "100%",
          },
          class: {},
        },
        headerRow: {
          style: {
            width: "auto",
            padding: "0 15px 0 15px",
            "border-bottom": "solid rgba(128, 128, 128, 0.148) 1px",
          },
        },
        titleCol: {
          title: "Favoritos",
          style: {
            "padding-bottom": "0px",
          },
          textClass: "",
          textStyle: {
            color: "grey",
            "font-weight": "bold",
          },
        },
        list: {
          rowStyle: {
            width: "115%",
          },
          rowStyleMobile: {
            width: "100%",
          },
          rowClass: null,
          productStyle: {
            "max-height": "60vh",
            "overflow-y": "auto",
            "overflow-x": "hidden",
          },
          img: {
            cols: 3,
            sm: 2,
            colStyle: {
              padding: "18px 0 18px 0  ",
            },
            imgStyle: {
              height: "100px",
              width: "auto",
            },
          },
          information: {
            cols: 4,
            sm: 6,
            nameStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            nameClass: {},
            colorStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            colorClass: {},
            sizeStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            sizeClass: {},
            qtdStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            qtdClass: {},
          },
          qtd: {
            input: false,
            cols: 5,
            sm: 3,
            labelStyle: {
              margin: "0px !important",
            },
            inputStyle: {
              "max-width": "110px",
            },
          },
          price: {
            cols: 5,
            sm: 3,
            colAlign: "right",
            totalStyle: {
              "font-size": "16px !important",
              "font-weight": "bold !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            totalClass: {},
            eachStyle: {
              "font-size": "12px !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            eachClass: {},
          },
          removeButton: {
            style: {
              "text-decoration": "underline",
              "font-size": "12px",
            },
          },
        },

        bottomRow: {
          style: {
            "border-top": "solid rgba(128, 128, 128, 0.148) 1px",
            "background-color": "white",
          },
          subTotal: {
            cols: 12,
            sm: 11,
            align: "right",
            text: {
              class: null,
              style: {
                "font-size": "18px",
                margin: "0px !important",
                padding: "0px !important",
                "background-color": "white",
              },
            },
          },
          backToBuys: {
            cols: 12,
            sm: 4,
            align: "center",

            color: cancelColor,
            class: "",

            style: {
              color: "white",
              "background-color": "white",
            },
          },
          goToCart: {
            cols: 12,
            sm: 4,
            align: "center",

            color: confirmColor,
            class: "",

            style: {
              color: "white",
            },
          },
        },
        noItemIcon: {
          style: {
            "font-size": "64px",
            color: iconColor,
          },
          class: "mdi mdi-heart-off-outline",
        },
        emptyText: {
          style: {},
          text: "Favoritos Vazio!!",
        },
        emptyButton: {
          style: {
            "background-color": mainColor,
          },
          text: "Voltar",
        },
      },
      cartScreen: {
        mainStyle: {
          position: "relative",
          "max-width": "1200px !important",
          margin: "30px auto 0 auto",
        },
        title: {
          name: "Meu Carrinho",
          style: {
            padding: "12px 0 0 0 ",
            "font-size": "22px",
            "border-bottom": "solid grey 1px",
          },
          class: null,
        },
        btnTop: {
          show: true,
          style: {
            float: "right",
            "background-color": confirmColor,
            color: "white",
          },
        },
        list: {
          row: {
            style: {
              "border-bottom": "solid rgba(128, 128, 128, 0.26) 1px",
              "max-width": "1200px !important",
              margin: "0px auto 0 auto",
            },
            class: null,
          },
          img: {
            cols: 2,
            sm: 1,
            colStyle: {
              padding: "12px 0 12px 0",
              margin: "0px",
              "max-height": "140px !important",
            },
            imgStyle: {
              height: "100px",
              width: "auto",
            },
          },
          name: {
            cols: 9,
            sm: 4,
            md: 3,
            alignSelf: "center",
            colStyle: {},
            title: {
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
                "font-weight": "bold",
              },
              class: null,
            },
            price: {
              cols: 2,
              colAlign: "right",
              totalStyle: {
                "font-size": "16px !important",
                "font-weight": "bold",
                padding: "0px !important",
                margin: "0px !important",
              },
              totalClass: {},
              eachStyle: {
                "font-size": "12px !important",
                padding: "0px !important",
                margin: "0px !important",
              },
              eachClass: {},
            },
            removeButton: {
              style: {
                "text-decoration": "underline",
                "font-size": "12px",
              },
            },
          },
          info: {
            alignSelf: "center",
            cols: 6,
            sm: 4,
            md: 4,
            color: {
              cols: 12,
              md: 6,
              alignSelf: "center",
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
              },
              class: null,
            },
            size: {
              cols: 12,
              md: 6,
              alignSelf: "center",
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
              },
              sizeClass: null,
            },
          },
          amount: {
            cols: 6,
            sm: 4,
            md: 2,
          },
          price: {
            cols: 6,
            sm: 3,
            md: 2,
            colAlign: "right",
            totalStyle: {
              "font-size": "16px !important",
              "font-weight": "bold",
              padding: "0px !important",
              margin: "0px !important",
            },
            totalClass: {},
            eachStyle: {
              "font-size": "12px !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            eachClass: {},
          },
          removeButton: {
            style: {
              "text-decoration": "underline",
              "font-size": "12px",
            },
          },
        },
        resume: {
          row: {
            style: {
              margin: "35px 0 20px 0",
              border: "solid 1px rgba(128, 128, 128, 0.348)",
            },
          },
          freight: {
            col: {
              cols: 12,
              sm: 7,
              align: "left",
              style: {
                color: "grey",
                "font-weight": "bold",
                "font-size": "22px",
                "border-right": "1px solid lightgrey",
              },
            },
            title: {
              class: null,
              style: {},
            },
            input: {
              cols: "12",
              sm: "12",

              color: inputColor,
            },
            checkCepLink: {
              text: "Não sei o meu CEP",

              style: {
                color: "black",
                "font-size": "12px",
                margin: "0px !important",
              },
            },
            radioGroup: {
              alignSelf: "center",
              cols: "12",
              sm: "7",

              color: inputColor,
              class: "mt-2",
              style: {
                "font-size": "12px !important",
              },
            },
            otherCepLink: {
              text: "Calcular com outro CEP",

              style: {
                color: "black",
                "font-size": "12px !important",
                margin: "0px !important",
                "text-decoration": "underline",
              },
            },
          },
          info: {
            col: {
              cols: 12,
              sm: 5,
              align: "right",
              style: {},
            },
            resume: {
              style: {
                color: "grey",
                "font-weight": "bold",
                "font-size": "22px",
              },
              class: null,
            },
            subtotal: {
              style: {
                margin: "0px !important",
              },
              class: null,
            },
            freight: {
              style: {},
              class: null,
            },
            total: {
              style: {
                color: "black",
                "font-size": "22px",
                margin: "5px 0 0 0",
                "font-weight": "bold",
              },
              class: null,
            },
            installments: {
              show: true,
              installments: merchantInfo.installment,
              style: {
                margin: "0px",
                color: "grey",
                "font-weight": "bold",
                "font-size": "12px",
              },
            },
          },
        },

        btnBottom: {
          show: true,
          style: {
            "background-color": confirmColor,
            color: "white",
            width: "250px",
            height: "45px",
          },
        },

        noItemIcon: {
          style: {
            "font-size": "64px",
            color: iconColor,
          },
          class: "mdi mdi-cart-remove",
        },
        emptyText: {
          text: "Seu carrinho está vazio!!",
          style: {
            color: iconColor,
          },
        },
        emptyButton: {
          text: "Voltar às compras",
          style: {
            "background-color": cancelColor,
            color: "white",
          },
        },
      },
    },
    login: {
      outterRowAlign: "center",
      loginCol: {
        align: "center",
        cols: "11",
        sm: "6",

        style: {
          "max-width": "500px",
        },
      },
      title: {
        class: "text-start mt-5 mb-3",
        text: "Iniciar Sessão",
      },
      email: {
        class: "default-size",
        color: inputColor,
        label: "Email",
      },
      password: {
        class: "default-size",
        color: inputColor,
        label: "Password",
      },
      forgotPassword: {
        style: {
          top: "-19px",
          right: "11px",
          position: "absolute",
          "font-size": "13px",
          color: "blue",
        },
        class: "text-right",
        text: "Esqueci minha Senha",
      },
      loginBtn: {
        style: {
          width: "100%",
          "background-color": "#ebf3e7",
          color: secondaryColor,
        },
        class: "btn-go default-size acess-btn mt-5",
      },
      registerLink: {
        style: {
          "font-size": "14px",
        },
        class: "mt-3",

        quote: "Não tem uma conta?",
        text: "Cadastrar",
      },
      error: {
        text: "",
        style: {
          "margin-top": "-20px",
        },
      },
    },
    register: {
      justify: "center",

      cols: 11,
      sm: 8,
      xl: 4,

      title: {
        color: mainColor,
        class: "white--text",

        text: "Criar Conta",
      },

      company: {
        show: true,

        color: inputColor,
        label: "Empresa",

        isCompany: false,
      },
      name: {
        show: true,

        color: inputColor,
        label: "Nome Completo",
      },
      fantasyName: {
        show: true,

        color: inputColor,
        label: "Nome Fantasia",
      },
      companyName: {
        show: true,

        color: inputColor,
        label: "Razão Social",
      },
      phone: {
        show: true,

        color: inputColor,
        label: "Telefone",
      },
      cpf: {
        show: true,

        color: inputColor,
        label: "CPF",
      },
      cnpj: {
        show: true,

        color: inputColor,
        label: "CNPJ",
      },
      birthday: {
        show: true,

        color: inputColor,
        label: "Data de Nascimento *",
      },
      gender: {
        show: true,

        color: inputColor,
        label: "Sexo *",
      },
      email: {
        show: true,

        color: inputColor,
        label: "Email",
      },
      password: {
        show: true,

        color: inputColor,
        label: "Senha",
      },
      passwordConfirmation: {
        show: true,

        color: inputColor,
        label: "Confirmar Senha",
      },

      finishBtn: {
        cols: 8,
        sm: 6,

        style: {
          "background-color": mainColor,
          color: secondaryColor,
        },
        class: "btn-go default-size acess-btn mt-5",

        text: "Criar Conta",
        icon: "mdi-check",
      },

      error: {
        text: "",
        style: {},
      },
    },
    account: {
      cols: 9,

      tabs: {
        cols: 2,

        slider: {
          style: {
            "background-color": "grey",
          },
          size: 10,
        },
        activeStyle: {
          "background-color": mainColor,
          color: "black !important",
        },
        regularStyle: {
          "background-color": "white !important",
          color: "black !important",
        },
        mobile: {
          slider: {
            color: "grey",
            size: 10,
          },

          activeStyle: {
            "background-color": mainColor,
            color: "white !important",
            height: "40px !important",
          },
          regularStyle: {
            "background-color": "white !important",
            color: "black !important",
            height: "40px !important",
          },
        },
      },
      content: {
        cols: 10,
      },
      people: {
        title: {
          elevation: 0,

          style: {
            "background-color": mainColor,
            color: "white",
          },
          class: "",

          text: "Dados da Conta",
        },

        email: {
          cols: 12,
          sm: 12,
          alignSelf: "center",

          disabled: true,

          label: "Email *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",
        },
        companySwitch: {
          cols: 12,
          sm: 12,

          disabled: true,

          label: "Empresa",
          color: inputColor,
          style: {
            margin: "0 !important",
          },
          class: "",
        },
        name: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Nome Completo *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        companyName: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Razão Social *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        birthday: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Nascimento",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        phone: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Telefone (c/ DDD) *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        cpfCnpj: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "CPF/CNPJ *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        gender: {
          cols: 12,
          sm: 3,
          alignSelf: "center",

          disabled: false,

          label: "Sexo *",
          color: inputColor,
          style: {},
          class: "",

          errorMessage: "",
        },

        error: {
          style: {},
        },
      },
      addresses: {
        title: {
          elevation: 0,

          style: {
            "background-color": mainColor,
            color: "white",
          },
          class: "",

          text: "Endereços",
        },

        input: {
          color: inputColor,
        },

        cep: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Cep",
          style: {
            "max-width": "200px",
          },
          class: "",

          errorMessage: "",
        },
        street: {
          cols: 9,
          sm: 9,
          alignSelf: "",

          label: "Rua",
          style: {},
          class: "",

          errorMessage: "",
        },
        houseNumber: {
          cols: 3,
          sm: 3,
          alignSelf: "",

          label: "Nº",
          style: {},
          class: "",

          errorMessage: "",
        },
        neighborhood: {
          cols: 12,
          sm: 9,
          alignSelf: "",

          label: "Bairro",
          style: {},
          class: "",

          errorMessage: "",
        },
        city: {
          cols: 9,
          sm: 9,
          alignSelf: "",

          label: "Cidade",
          style: {},
          class: "",

          errorMessage: "",
        },
        estate: {
          cols: 3,
          sm: 3,
          alignSelf: "",

          label: "UF",
          style: {},
          class: "",

          errorMessage: "",
        },
        complement: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Complemento",
          style: {},
          class: "",

          errorMessage: "",
        },
        observation: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Observação",
          style: {},
          class: "",

          errorMessage: "",
        },
        saveBtn: {
          style: {
            float: "center",
            "background-color": confirmColor,
            color: "white",
          },
          class: "ml-1 btn-go",

          text: "Salvar",
        },

        error: {
          text: "",
          style: {},
        },

        divider: {
          style: {
            "background-color": "darkgrey",
          },
        },

        addBtn: {
          icon: "mdi-plus",
          text: "adicionar Endereço",
          style: {
            "background-color": confirmColor,
            color: "white",
          },
        },
      },
      orders: {
        title: {
          elevation: 0,

          style: {
            "background-color": mainColor,
            color: "white",
          },
          class: "",

          text: "Histórico de Pedidos",
        },
        detailsBtn: {
          color: mainColor,
          style: {
            color: secondaryColor,
          },
          class: "",
        },
        backToBuys: {
          color: cancelColor,
          style: {
            color: "white",
          },
          class: "",
        },
      },
    },
    orderDetails: {
      stepper: {
        payBtn: {
          style: {
            "background-color": confirmColor,
            color: "white",
          },
          class: "mt-3 mb-5",
        },
        step: {
          color: mainColor,
        },
      },
      deliveryDetails: {
        delivery: {
          cols: 12,
          md: 9,

          style: {},
          class: "",

          title: {
            style: {
              background: mainColor,
              color: "white",
            },
            class: "",
          },
        },
        pricing: {
          cols: 12,
          md: 3,

          style: {},
          class: "",

          title: {
            style: {
              background: mainColor,
              color: "white",
            },
            class: "",
          },
        },
      },
      productDetails: {
        header: {
          style: {
            background: mainColor,
            color: "white",
          },

          product: {
            cols: 12,
            sm: 6,
          },
          amount: {
            cols: 3,
          },
          totalPrice: {
            cols: 3,
          },
        },
        item: {
          style: {
            margin: "0",
            border: "solid rgba(0, 0, 0, 0.075) 0.1px",
          },

          img: {
            cols: 3,
            sm: 2,
          },
          product: {
            cols: 9,
            sm: 4,
          },
          amount: {
            cols: 7,
            sm: 3,
          },
          totalPrice: {
            cols: 5,
            sm: 3,
          },
        },
        footer: {
          style: {
            // 'background-color': '#ebf3e7',
            "text-transform": "uppercase",
            'font-family': 'montserrat',
            // 'font-size':'14px',
            'font-weight':'500',
          },

          product: {
            cols: 7,
            sm: 9,
          },
          totalPrice: {
            cols: 5,
            sm: 3,
          },
        },
      },
    },
    payment: {
      closeOrderModal: {
        input: {
          color: inputColor,
        },
        addressBtn: {
          style: {
            background: confirmColor,
            color: "white",
          },
        },
        buyBtn: {
          style: {
            "background-color": confirmColor,
            color: "white",
          },
        },
      },
      creditCard: {
        front: {
          style: {
            "text-shadow": "black 1px 2px 5px",
            "box-shadow": "0px 0px 12px 0px grey",
            "border-radius": "15px",
            "background-color": mainColor,
            color: defaultGold,
          },
        },
        back: {
          style: {
            "text-shadow": "black 1px 2px 5px",
            "box-shadow": "0px 0px 12px 0px grey",
            "border-radius": "15px",
            "background-color": mainColor,
            color: defaultGold,
          },
        },
        disabled: {
          front: {
            style: {
              "text-shadow": "black 1px 2px 5px",
              "box-shadow": "0px 0px 12px 0px grey",
              "border-radius": "15px",
              "background-color": "lightgrey",
            },
          },
          back: {
            style: {
              "text-shadow": "black 1px 2px 5px",
              "box-shadow": "0px 0px 12px 0px grey",
              "border-radius": "15px",
              "background-color": "lightgrey",
            },
          },
        },
      },
      input: {
        color: mainColor,
      },
      payBtn: {
        style: {
          width: "100%",
          "background-color": confirmColor,
          color: "white",
        },
        class: "mr-5 mb-5",
      },
      backToBuys: {
        style: {
          "background-color": cancelColor,
          color: "white",
        },
        class: "mt-5 mb-5",
      },
    },
    footer: {
      mainStyle: {
        position: "inherit",
        padding: "50px",
        "min-height": "300px",
        "background-color": "#000",
        "margin-top": "20px !important",
        "border-top": "1px solid grey",
        "border-bottom": "1px solid grey",
      },
      titleStyle: {
        "font-size": "22px",
        color: "white",
        "font-weight": "bold",
      },
      list: {
        align: "center",
      },
      institucionalList: [
        {
          name: "Quem Somos",
          route: "/quem-somos",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },
        {
          name: "Políticas de Trocas",
          route: "/politicas-trocas",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },

        {
          name: "Políticas de Entregas",
          route: "/politicas-entrega",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },

        {
          name: "Políticas de Privacidade",
          route: "/politica-privacidade",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },
      ],
      contactList: [
        {
          name: merchantInfo.phone,
          style: {
            color: "white",
            "font-size": "12px",
          },
          icon: "mdi mdi-phone",

          iconStyle: {
            color: iconColor,
          },
        },
        {
          name: merchantInfo.whatsappNumber,
          style: {
            color: "white",
            "font-size": "12px",
          },
          icon: "mdi mdi-whatsapp",

          iconStyle: {
            color: iconColor,
            "font-size": "18px",
          },
        },
        
      ],
      logoSession: {
        style: {},
        align: "center",
        logoSrc: logoAlt,
        logoStyle: {
          width: "250px",
        },
        midiaLinks: [
          {
            icon: "mdi mdi-instagram",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.instagram,
            target: "_blank",
            rel: "noopener noreferrer", 
          },
          {
            icon: "mdi mdi-facebook",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.facebook,
            target: "_blank", 
            rel: "noopener noreferrer", 
          },
          {
            icon: "mdi mdi-whatsapp",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.whatsappLink,
          },
        ],
      },
      paymentSession: {
        align: "center",
        color: "white",

        cards: [
          {
            class: "",
            style: "",
            src: "/cardsBuySession/card-master.png",
          },
          {
            class: "",
            style: "",
            src: "/cardsBuySession/visa.png",
          },
          {
            class: "",
            style: "",
            src: "/cardsBuySession/amex.png",
          },
          {
            class: "",
            style: "width: 53px !important",
            src: "/cardsBuySession/hipercard.png",
          },
          {
            class: "mb-3",
            style: "width: 53px !important",
            src: "/cardsBuySession/elo-white.png",
          },
        ],
      },
      copyrightSession: {
        copyright: merchantInfo.copyright,
      },
    },
    floatingIcon: {
      backToTop: {
        style: {
          position: "fixed",
          right: "1%",
          bottom: "12%",
          width: "50px",
          height: "50px",
          opacity: 0.4,
          "z-index": 99,
        },
      },

      icon: "/whatsapp.svg",
      link: merchantInfo.whatsappLink,

      style: {
        position: "fixed",
        right: "1%",
        bottom: "3%",
        width: "50px",
        height: "50px",
        "z-index": 99,
      },
    },
    dialog: {
      exitDialog: {
        width: 300,
        align: "center",

        style: {
          padding: "10px",
        },

        cancelBtn: {
          width: "100",
          color: cancelColor,
          style: {
            color: "white",
          },
        },
        okBtn: {
          width: "100",
          color: confirmColor,
          style: {
            color: "white",
          },
        },
      },
    },
  },
});
