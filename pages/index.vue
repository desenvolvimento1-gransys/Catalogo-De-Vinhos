<template>
  <span translate="no">
    <!-- <SearchBarVue v-show="!spinner" /> -->
    <carousel v-show="!spinner" />
    <information v-show="!spinner" />

    
    
    <category-one v-show="!spinner"/>
    
        <ProductCarousel v-show="!spinner" />
        <ProductCarousel2 v-show="!spinner" />
        <ProductCarousel3 v-show="!spinner" />
    <categories v-show="!spinner" />
    <!-- <search v-show="!spinner" /> -->
    <banner-one  v-show="!spinner"/>
    <customer-comments v-show="!spinner" />
  </span>
</template>

<script>
import Carousel from "@/components/body/indexComponents/carousel/carousel";
import Information from "@/components/body/indexComponents/information/information";
import Categories from "@/components/body/indexComponents/categorySession/categories";
import Search from "@/components/body/productSession/search/indexSearch";
import CustomerComments from "@/components/utils/customerComment";
import { mapState } from "vuex";
import CategoryOne from "../components/body/indexComponents/carousel/components/categoryOne.vue";
import BannerOne from "../components/body/indexComponents/carousel/components/bannerOne.vue";
import SearchBarVue from "../components/body/productSession/search/components/SearchBar.vue.vue";
import ProductCarousel3 from "../components/body/productSession/productScreen/ProductCarousel3.vue";
import ProductCarousel2 from "../components/body/productSession/productScreen/ProductCarousel2 .vue";
import ProductCarousel from "../components/body/productSession/productScreen/ProductCarousel.vue";

export default {
  computed: {
    ...mapState("Utils", ["spinner"]),
  },
  components: {
    Carousel,
    Information,
    ProductCarousel,
    ProductCarousel2,
        ProductCarousel3,
    Categories,
    BannerOne,
    CategoryOne,
    SearchBarVue,
    Search,
    CustomerComments,
  },
};
</script>
