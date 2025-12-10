<template>
  <span>
     <desktop v-if="!$vuetify.breakpoint.smAndDown" class="d-md-block" />
    <mobile v-if="$vuetify.breakpoint.smAndDown" class="d-md-none d-sm-block" />
  </span>
</template>

<script>
import Desktop from "@/components/header/topBar/components/Desktop/topBarOne";
import Mobile from "@/components/header/topBar/components/Mobile/topBarMobileOne";

export default {
  components: {
    Desktop,
    Mobile,
  },
};
</script>

<style>
</style>