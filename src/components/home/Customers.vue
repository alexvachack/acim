<template>
  <div class="container" id="clientes">
    <div class="section">
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h5>+</h5>
            <h3 class="center" id="clientsTotal"></h3>
            <p class="light">Clientes Satisfechos</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h5>+</h5>
            <h3 class="center" id="productsTotal"></h3>
            <p class="light">Productos a tu alcance</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="icon-block">
            <h5>+</h5>
            <h3 class="center" id="experienceTotal"></h3>
            <p class="light">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inView from "in-view";

export default {
  name: "Customers",

  methods: {
    async setCounters() {
      // set counter for total customers
      let clients = document.getElementById("clientsTotal");
      let clientsTotal = 840;
      let i = 0;
      let seconds = 100;
      new Promise((resolve) => {
        let counters = setInterval(() => {
          i += 10;
          if (i > clientsTotal) {
            clearInterval(counters);
            resolve();
            return;
          }
          clients.innerHTML = i;
        }, seconds);
      });
      // set counter for total products
      let products = document.getElementById("productsTotal");
      let productsTotal = 200000;
      let j = 0;
      seconds = 0.1;
      new Promise((resolve) => {
        let counters = setInterval(() => {
          j += 100;
          if (j > productsTotal) {
            clearInterval(counters);
            resolve();
            return;
          }
          products.innerHTML = j;
        }, seconds);
      });
      // set counter for total experience
      let experience = document.getElementById("experienceTotal");
      let experienceTotal = 11;
      let k = 0;
      seconds = 750;
      new Promise((resolve) => {
        let counters = setInterval(() => {
          k++;
          if (k > experienceTotal) {
            clearInterval(counters);
            resolve();
            return;
          }
          experience.innerHTML = k;
        }, seconds);
      });
    },
  },

  mounted() {
    inView("#clientes").on("enter", () => this.setCounters());
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#clientes {
  font-size: $defaultFont;
  h3 {
    color: $blueInitial;
  }
  h3,
  h5 {
    display: inline-block;
    margin: 0rem;
  }
  h3 {
    margin-left: 1rem;
  }
}
</style>
