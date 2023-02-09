<template>
  <div class="container" id="productos">
    <div class="section">
      <div class="row">
        <div class="col s12 center">
          <h3>Productos</h3>
        </div>
      </div>
      <div class="grid" id="grid">
        <div
          class="row product"
          v-for="(row, rowIndex) in productsList"
          :key="rowIndex"
        >
          <div
            class="col s12 m4 center-align"
            v-for="(column, columnIndex) in row"
            :key="columnIndex"
          >
            <img
              class="responsive-img"
              v-bind:src="column.images[0]"
              v-bind:alt="column.name"
            />
            <h4>
              {{ column.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import { mapState } from "vuex";
import AnimScroll from "anim-scroll";

export default {
  name: "ProductsThreeColumns",

  computed: {
    ...mapState({
      productsCatalog: (state) => state.productsCatalog,
    }),
    productsList() {
      let rows = [];
      let columns = [];
      this.productsCatalog.map(function (product, index) {
        if (index % 3) {
          // fill column
          if (Object.keys(product).length > 0) {
            columns.push(product);
          }
        } else {
          // fill rows
          if (Object.keys(columns).length > 0) {
            rows.push(columns);
          }
          // reset columns
          columns = [];
          // fill columns
          if (Object.keys(product).length > 0) {
            columns.push(product);
          }
        }
      });
      // fill rows
      if (Object.keys(columns).length > 0) {
        rows.push(columns);
      }
      return rows;
    },
  },

  methods: {
    changeHeight() {
      let windowHeight = window.innerHeight;
      let headerSectionHeight =
        document.getElementsByClassName("header-section")[0].offsetHeight;
      let footerHeight =
        document.getElementsByClassName("page-footer")[0].offsetHeight;
      let grid = document.getElementsByClassName("grid")[0];
      grid.style.minHeight =
        windowHeight - headerSectionHeight - footerHeight + "px";
    },
  },

  mounted() {
    new AnimScroll(".grid", {
      viewportFactor: 0.2,
      navBar: false, // enable / disable navigation bar
      navArrows: false, // enable / disable arrow navigation
      autoScroll: 6000, //ms, enable / disable automatic scrolling;
      infinite: true,
      delayBetweenSlides: 400, // ms
      scrollSensitivity: 999999, //sets up how much you need to scroll the page for the animation to work
      whereToBegin: 0, // this slide will open first after page load,
      slideAnimation: {
        active: [
          {
            top: "0%",
            transition: "0s",
            display: "inline-block",
          },
          {
            top: "-100%",
            transition: ".8s ease",
            display: "none",
          },
        ],

        next: [
          {
            top: "100%",
            transition: "0s",
            display: "inline-block",
          },
          {
            top: "0%",
            transition: ".8s ease",
            display: "inline-block",
          },
        ],
      },
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#productos {
  .product {
    img {
      max-height: 11rem;
      margin: 0 auto;
      display: block;
    }
    p {
      margin: 0;
      font-size: 1.5rem;
    }
  }
  .grid {
    height: 20rem;
  }
}
@media (max-width: 598px) {
  #productos {
    .grid {
      height: 55rem;
    }
  }
}
</style>
