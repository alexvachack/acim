<template>
  <div class="container" id="catalogo">
    <div class="section">
      <div class="row">
        <div class="col s12 m4 right-align">
          <a v-bind:href="require('@/assets/pdf/catalogo.pdf')" target="_blank">
            <img
              src="@/assets/img/pdf.png"
              alt="Descargar catálogo"
              class="responsive-img"
            />
          </a>
        </div>
        <div class="col s12 m8">
          <h2>Descarga nuestro catálogo</h2>
          <h3>y conoce todas nuestras marcas</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#catalogo {
  img {
    max-height: 8rem;
  }
  h2 {
    margin-top: 0rem;
  }
  h3 {
    margin-bottom: 0rem;
  }
}
@media (max-width: 600px) {
  #catalogo {
    .right-align {
      text-align: center !important;
    }
  }
}
</style>
