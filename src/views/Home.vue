<template>
  <div class="home">
    <Index />
    <Acmi />
    <div class="section no-pad-bot separator"></div>
    <AboutUs />
    <Catalog />
    <Customers />
    <Brands />
    <div class="section no-pad-bot separator"></div>
    <ProductsThreeColumns />
    <div class="section no-pad-bot separator"></div>
    <Services />
    <Contact />
  </div>
</template>

<script>
// components
import Index from "@/components/home/Index.vue";
import Acmi from "@/components/home/Acmi.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import Catalog from "@/components/home/Catalog.vue";
import Customers from "@/components/home/Customers.vue";
import Brands from "@/components/home/Brands.vue";
import ProductsThreeColumns from "@/components/home/ProductsThreeColumnsAnimScroll.vue";
import Services from "@/components/home/Services.vue";
import Contact from "@/components/home/Contact.vue";

export default {
  name: "Inicio",

  components: {
    Index,
    Acmi,
    AboutUs,
    Catalog,
    Customers,
    Brands,
    ProductsThreeColumns,
    Services,
    Contact,
  },

  beforeCreate: function () {
    this.$emit(
      "setPageInfo",
      "Inicio",
      "CMI AUTOMATION MEXICO… “INNOVATING SOLUTIONS”... Somos tu mejor aliado para obtener cualquier requerimiento de la industria"
    );
    this.$emit("showMenu", true);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
.valign-wrapper {
  align-items: flex-end !important;
}
.separator {
  background-color: $blueSeparator;
  height: 2.5rem;
  display: block;
}
</style>
