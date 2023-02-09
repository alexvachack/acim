<template>
  <div class="container" id="acmi">
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s12 m5">
          <img class="responsive-img Acmi" alt="Acmi" v-bind:src="acmi" />
        </div>
        <div class="col s12 m7">
          <h2>
            Somos tu mejor aliado para obtener cualquier requerimiento de la
            industria
          </h2>
          <router-link
            :to="{ href: '/contacto', hash: '#contacto' }"
            class="waves-effect waves-light btn"
          >
            Contáctanos
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Acmi",

  data() {
    return {
      acmi: null,
    };
  },

  methods: {
    async setAcmiGifs() {
      for (let cicles = 0; cicles < 2; cicles++) {
        let gif = 0;
        let seconds = 3000;
        this.acmi = require("@/assets/img/acmi/Acmi_" + gif + ".gif");
        await new Promise((resolve) => {
          let images = setInterval(() => {
            gif++;
            if (gif > 13) {
              clearInterval(images);
              resolve();
              return;
            }
            this.acmi = require("@/assets/img/acmi/Acmi_" + gif + ".gif");
          }, seconds);
        });
      }
      this.acmi = require("@/assets/img/acmi/Acmi_0.gif");
    },
  },

  mounted() {
    this.setAcmiGifs();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#acmi {
  font-size: $defaultFont;
  color: $blueInitial;
  .valign-wrapper {
    align-items: center !important;
  }
  img {
    max-height: 20rem;
  }
  h2 {
    margin: 0rem;
    font-size: 2.7rem;
  }
  a {
    color: $white;
    background-color: $blueInitial;
    border-radius: 5%;
  }
}
@media (max-width: 62rem) {
  #acmi {
    .valign-wrapper {
      display: block !important;
    }
  }
}
@media (max-width: 600px) {
  #acmi {
    .m7 {
      text-align: center !important;
    }
  }
}
@media (max-width: 1024px) {
  #acmi {
    h2 {
      font-size: 1.6rem;
    }
  }
}
@media (max-width: 768px) {
  #acmi {
    h2 {
      font-size: 1.5rem;
    }
  }
}
</style>
