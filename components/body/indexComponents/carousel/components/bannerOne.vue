<template>
  <v-container fluid class="pa-0">
    <!-- Banner promocional -->
    <v-card
      class="promo-banner rounded-lg mb-8 overflow-hidden"
      elevation="0"
    >
      <v-row no-gutters align="center">
        <v-col cols="12" md="6" class="pa-8 pa-md-12">
          <div class="text-overline sage-green--text mb-2">PROMOÇÃO ESPECIAL</div>
          <h1 class="display-1 font-weight-bold mb-4 text-balance">
            Rotina de limpeza completa para sua pele
          </h1>
          <p class="subtitle-1 grey--text text--darken-1 mb-6 text-pretty">
            Descubra os produtos essenciais para manter sua pele limpa, 
            hidratada e radiante todos os dias.
          </p>
          <v-btn
            large
            rounded
            color="#5a7a6b"
            dark
            class="px-8"
          >
            Explorar produtos
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://i.ibb.co/M581nKMJ/ainda-vida-de-ferramentas-de-limpeza.jpg""
            height="400"
            cover
            class="banner-image"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CleaningProductsBanner'
}
</script>

<style scoped>
.promo-banner {
  background: linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%);
  border: 1px solid #e7e5e4;
}

.sage-green--text {
  color: #5a7a6b;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.banner-image {
  filter: brightness(1.05);
}
</style>
