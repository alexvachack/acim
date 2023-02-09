<template>
  <div class="section" id="products">
    <div class="container">
      <div class="row">
        <div v-if="!isMobile()" class="col s12 spaceTop">
          <h3>Productos</h3>
          <ul class="tabs col s12 m6">
            <li
              v-for="(product, index) in products.details.products"
              :key="index"
              v-bind:class="[
                productActive == product.category ? 'active' : '',
                'tab col s12',
              ]"
            >
              <a
                v-bind:href="'#' + product.category"
                v-on:click="
                  (subproductActive = null),
                    (productActive = product.category),
                    scrollToTop()
                "
                v-bind:class="[
                  productActive == product.category ? 'active' : '',
                  'left-align',
                ]"
              >
                {{ product.name }}
              </a>
            </li>
          </ul>
          <div
            v-show="productActive && productActive == product.category"
            v-bind:id="product.category"
            v-for="(product, index) in products.details.products"
            :key="index"
            v-bind:class="[
              product.subcategories ? 'subproducts' : 'subproducts',
              'col s12 m6',
            ]"
          >
            <div class="row" v-show="product.subcategories == null">
              <div
                class="col s12 m4 center-align"
                v-for="(image, index) in filterImages(product)"
                :key="index"
              >
                <img
                  class="responsive-img product"
                  v-bind:src="image"
                  v-bind:alt="product.name"
                />
              </div>
            </div>
            <div
              class="row"
              v-for="(row, rowIndex) in subproductsList(product.subcategories)"
              :key="rowIndex"
            >
              <div
                class="col s12 m4 center-align"
                v-for="(column, columnIndex) in row"
                :key="columnIndex"
              >
                <img
                  class="responsive-img subproduct"
                  v-for="(subimage, index) in column.images"
                  :key="index"
                  v-bind:src="subimage"
                  v-bind:alt="column.name"
                />
                <p>
                  {{ column.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col s12 spaceTop">
          <h3>Productos</h3>
          <div
            class="row product"
            v-for="(row, rowIndex) in productsList"
            :key="rowIndex"
          >
            <div
              class="col s12 m4"
              v-for="(column, columnIndex) in row"
              :key="columnIndex"
            >
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    v-for="(image, index) in filterImages(column)"
                    :key="index"
                    class="responsive-img product activator"
                    v-bind:src="image"
                    v-bind:alt="column.name"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator">
                    {{ column.name }}
                  </span>
                </div>
                <div class="card-reveal">
                  <span class="card-title">
                    {{ column.name }}
                    <i class="material-icons right">close</i>
                  </span>
                  <div
                    class="row"
                    v-for="(
                      subcategoriesRow, subcategoriesRowIndex
                    ) in subproductsList(column.subcategories)"
                    :key="subcategoriesRowIndex"
                  >
                    <div
                      class="col s12 center-align"
                      v-for="(
                        subcategoriesColumn, subcategoriesColumnIndex
                      ) in subcategoriesRow"
                      :key="subcategoriesColumnIndex"
                    >
                      <img
                        class="responsive-img subproduct"
                        v-for="(subimage, index) in subcategoriesColumn.images"
                        :key="index"
                        v-bind:src="subimage"
                        v-bind:alt="subcategoriesColumn.name"
                      />
                      <p class="flow-text">
                        {{ subcategoriesColumn.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import { mapState } from "vuex";
//import M from "materialize-css";
let M = require("materialize-css");
//import jQuery from "jquery/dist/jquery.min.js";

export default {
  name: "ProductsVerticalTabs",

  data() {
    return {
      productActive: "",
      subproductActive: "",
    };
  },

  computed: {
    ...mapState({
      productsCatalog: (state) => state.productsCatalog,
      products: (state) => state.products,
    }),
    productsList() {
      let rows = [];
      let columns = [];
      //this.productsCatalog.map(function (product, index, array) {
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

  beforeCreate: function () {
    this.$store.dispatch("products/setProducts");
  },

  methods: {
    changeHeight() {
      let windowHeight = window.innerHeight;
      let headerSectionHeight =
        document.getElementsByClassName("header-section")[0].offsetHeight;
      let footerHeight =
        document.getElementsByClassName("page-footer")[0].offsetHeight;
      let principalColumns = document.getElementsByClassName("spaceTop")[0];
      principalColumns.style.minHeight =
        windowHeight - headerSectionHeight - footerHeight + "px";
    },
    subproductsList(data) {
      let rows = [];
      let columns = [];
      if (data !== undefined && data !== null && data.length > 0) {
        data.map(function (product, index) {
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
      }
      // fill rows
      if (Object.keys(columns).length > 0) {
        rows.push(columns);
      }
      return rows;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    filterImages(product) {
      if (product.category == "gabinetes_armarios_y_accesorios") {
        return product.images.slice(1);
      } else if (product.category == "fusibles_y_portafusibles") {
        return product.images.slice(0, 1);
      } else {
        return product.images;
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    // materialize
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems);
    //M.AutoInit();
    // others
    window.scrollTo(0, 0);
    this.changeHeight();
    //jQuery.noConflict();
  },

  update() {
    // materialize
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems);
    // others
    this.changeHeight();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#products {
  background-image: url("~@/assets/img/products/products.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% auto;
  background-color: $blueInitial;
  .spaceTop {
    padding-top: 6rem;
  }
  .subproducts,
  .card,
  .card .card-reveal {
    background-color: rgba(61, 169, 222, 0.85);
    color: $white;
    padding: 1rem;
  }
  h3 {
    color: $white;
  }
  .card-title {
    font-weight: bold;
  }
  .tabs {
    height: auto !important;
    background-color: transparent !important;
    li {
      //display: block;
      display: flex;
      clear: both;
      a {
        color: $white;
        // text-decoration: underline;
        font-weight: bold;
        font-size: $defaultFont;
      }
      a:hover,
      a:active {
        color: $blueSeparator;
        //background-color: $blueInitial;
      }
    }
    /*
    a:after {
      content: "»";
      opacity: 0;
      margin-left: 0.5rem;
      float: right;
      font-size: 3rem;
    }
    a:hover:after,
    a:active:after {
      opacity: 1;
    }
    */
    .indicator {
      display: none !important;
    }
  }
  li:after {
    content: "»";
    opacity: 0;
    float: right;
    font-weight: bold;
    color: $white;
    font-size: 3rem;
  }
  li.active {
    //background-color: $blueInitial;
  }
  li:hover::after {
    opacity: 1;
  }
  li.active::after {
    opacity: 1;
  }
  .product {
    //max-height: 20rem;
  }
  .subproduct-name:before {
    content: "»";
    opacity: 0;
    margin-right: 0.5rem;
  }
  .subproduct-name:hover {
    color: $blueFinal;
  }
  .subproduct-name:hover:before {
    opacity: 1;
  }
  .subproduct {
    //max-height: 5rem;
  }
  h3 {
    margin-top: 0rem;
  }
  h4 {
    text-transform: capitalize;
  }
  .tabs .tab a:focus,
  .tabs .tab a:focus.active {
    background-color: transparent !important;
  }
  @media only screen and (max-width: 992px) {
    .tabs {
      display: inline-block !important;
    }
  }
}
</style>
