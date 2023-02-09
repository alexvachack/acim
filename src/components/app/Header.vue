<template>
  <nav role="navigation" id="nav">
    <div class="nav-wrapper">
      <a id="logo-container" href="/" class="brand-logo">
        <img src="@/assets/img/logo.png" class="responsive-img" />
      </a>
      <ul class="right hide-on-med-and-down">
        <router-link
          v-for="menu in $router.options.routes"
          :key="menu.path"
          :to="{ name: menu.name, hash: menu.hash }"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <li :class="[isActive && 'active', isExactActive && 'active']">
            <a :href="href" @click="navigate">{{ route.name }}</a>
          </li>
        </router-link>
        <li class="input-field">
          <i class="material-icons prefix" v-on:click="search">search</i>
          <input
            type="text"
            placeholder="Buscar..."
            v-model="products.form.search"
            v-on:keyup.enter="search"
          />
        </li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <router-link
          v-for="menu in $router.options.routes"
          :key="menu.path"
          :to="{ name: menu.name, hash: menu.hash }"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <li :class="[isActive && 'active', isExactActive && 'active']">
            <a :href="href" @click="navigate">{{ route.name }}</a>
          </li>
        </router-link>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      productsCatalog: (state) => state.productsCatalog,
      products: (state) => state.products,
    }),
  },

  methods: {
    search() {
      this.$store.dispatch("products/searchProduct").then(() => {
        this.$router.push({ name: "Productos" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/custom.scss";
nav {
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  z-index: 999999;
  //float: left;
  //box-shadow: none !important;
  .sidenav-trigger {
    color: $blueInitial;
  }
  .brand-logo {
    margin-left: 2rem;
    img {
      max-height: 4rem;
    }
  }
  ul a {
    font-size: $defaultFont;
    color: $blueInitial;
  }
  .input-field {
    input {
      margin: 0rem !important;
      color: $white;
      background-color: $blueInitial;
    }
    .prefix {
      right: 0;
      top: 0.6rem;
      color: $white;
      background-color: $blueFinal;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
    }
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: $white;
      /* Firefox */
      opacity: 1;
      padding-left: 1rem;
    }
    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: $white;
      padding-left: 1rem;
    }
    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: $white;
      padding-left: 1rem;
    }
  }
}
@media (max-width: 992px) {
  nav {
    .brand-logo {
      margin-left: 0rem;
    }
  }
}
</style>
