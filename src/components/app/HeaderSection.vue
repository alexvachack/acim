<template>
  <div class="section header-section">
    <div class="">
      <div class="row">
        <div class="col s12 m6 white-text">
          <h3>ACMI AUTOMATION MEXICO</h3>
          INNOVATING SOLUTIONS
        </div>
        <div class="col s12 m6 white-text right-align">
          ¿TIENES ALGUNA URGENCIA? LLAMANOS AL
          <a href="tel:+(52)8009990695" target="_blank" class="white-text">
            800 999 0695
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/custom.scss";
.header-section {
  background: -prefix-linear-gradient(left, $blueInitial, $blueFinal);
  background: linear-gradient(to right, $blueInitial, $blueFinal);
  font-size: $defaultFont;
  font-family: "LEMONMILK";
  .row {
    margin-bottom: 0 !important;
  }
  .col {
    font-family: "LEMONMILK";
  }
  h3 {
    margin: 0;
    font-family: "LEMONMILK";
  }
  .right-align {
    margin-top: 1.46rem;
  }
}
</style>
