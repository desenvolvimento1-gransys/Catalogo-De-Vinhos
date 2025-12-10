<template>
  <div class="search-container">
    <!-- <div
      class="adjust-title  "
      style="margin:  auto !important"
      v-if="layout.search.home.title && $nuxt.$route.path == '/'"
    >
      <h3
        class="mx-5 mb-5 d-block d-md-none"
        v-show="spinner == false"
        :style="layout.search.home.titleStyle"
        :class="layout.search.home.titleClass"
      >
        {{ layout.search.home.title }}
      </h3>
      <h2
        class="mb-5 d-none d-md-block"
        v-show="spinner == false"
        :style="layout.search.home.titleStyle"
        :class="layout.search.home.titleClass"
      >
        {{ layout.search.home.title }}
      </h2>
    </div> -->

    <!-- If searched -->
    

    <!-- Search Results -->
     <v-row align="center" justify="center">
     <v-col cols="12">
      <div class="adjust-title" v-if="this.$route.params.texto">
      <h3
        class="mb-5 d-block d-md-none"
        v-show="spinner == false"
        :style="layout.search.category.titleStyle"
      >
        Você procurou por: {{ this.$route.params.texto }}
      </h3>
      <h2
        class="mb-5 d-none d-md-block"
        v-show="spinner == false"
        :style="layout.search.category.titleStyle"
      >
        Você procurou por: {{ this.$route.params.texto }}
      </h2>
    </div>
    <simple-search />
    </v-col>
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
     </v-row>
  </div>
</template>

<script>
import SimpleSearch from "@/components/body/productSession/search/components/searchComponents/simpleSearchCoponent";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapState("Utils", ["spinner"]),
  },
  components: {
    SimpleSearch,
  },
};
</script>


<style scoped>
.search-container {
  margin: 40px 10px 200px 10px;
  align-self: flex-start;
  min-height: auto !important;
  height: auto !important;
}
.gs-mw {
  width: 95vw;
  max-width: 1300px;
}
.adjust-title {
  padding: 0 12px 0 12px;
}
@media only screen and (max-width: 600px) {
  .search-container {
    margin: 5px 0 90px 0;
  }
  .adjust-title {
    padding: 0 4px 0 4px !important;
  }
}
</style>