<template>
  <ProductsTabs />
</template>

<script>
// components
import ProductsTabs from "@/components/products/ProductsVerticalTabs.vue";

export default {
  name: "Products",

  components: {
    ProductsTabs,
  },

  beforeCreate: function () {
    this.$emit("setPageInfo", "Productos", "");
    this.$emit("showMenu", true);
  },
};
</script>

<style lang="scss"></style>
