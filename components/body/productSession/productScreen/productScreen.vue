<template>
  <span v-if="!load" translate="no">
    <default-desk-screen class="d-none d-md-block" />
    <default-mobile-screen class="d-md-none d-sm-block" />
    <div
      class="search-container"
      :style="layout.productPage.searchSection.style"
    >
      <p
        lass="mx-5 adjust-title"
        :style="layout.productPage.searchSection.title.style"
        :class="layout.productPage.searchSection.title.class"
      >
        {{ layout.productPage.searchSection.title.name }}
      </p>
      <props-search-components
        :params="{
          items_per_page: layout.productPage.searchSection.config.items,
          no_product_id: this.$route.params.productId,
          ...layout.productPage.searchSection.config.params,
        }"
        :displaySize="layout.productPage.searchSection.config.displaySize"
      ></props-search-components>
    </div>
  </span>
</template>

<script>
import defaultDeskScreen from "@/components/body/productSession/productScreen/components/desktop/defaultDeskScreen";
import defaultMobileScreen from "@/components/body/productSession/productScreen/components/mobile/defaultMobileScreen";
import propsSearchComponents from "@/components/body/productSession/search/components/searchComponents/propsSearchComponent";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    defaultDeskScreen,
    defaultMobileScreen,
    propsSearchComponents,
  },
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapState("Product", ["load"]),
  },
  methods: {
    ...mapActions("Product", ["cleanState", "setProduct"]),
  },
  mounted: async function () {
    this.setProduct({
      product_id: this.$route.params.productId,
    });
  },

  // mounted: async function () {
  // },

  beforeDestroy() {
    this.cleanState();
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');

.search-container {
  padding: 110px 32px 90px 32px;
  display: inline-block;
}
.adjust-title {
  padding: 0 auto 0 auto
  mar
}
@media only screen and (max-width: 600px) {
  .search-container {
    margin: 0px 30px 90px 0px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .adjust-title {
    padding: 0 4px 0 4px !important;
  }
}
.search-wrapper {
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important; /* ALINHA TUDO À ESQUERDA */
}

.adjust-title {
  margin: 0 0 20px 0;
  padding: 0;
}

.search-component {
  width: 100%;
}

/* MOBILE */
@media (max-width: 600px) {
  .search-wrapper {
  }

  .adjust-title {
    margin-left: 0 !important;
  }
}
 
</style> 