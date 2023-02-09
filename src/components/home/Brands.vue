<template>
  <div class="container" id="marcas">
    <div class="section">
      <div class="row">
        <div class="col s12 center">
          <vueper-slides
            class="no-shadow"
            autoplay
            infinite
            :bullets="false"
            :arrows-outside="false"
            :arrows="false"
            :visible-slides="10"
            fixed-height="4rem"
            :duration="2000"
            :pauseOnHover="false"
            :pauseOnTouch="false"
          >
            <vueper-slide
              v-for="(slide, index) in brands"
              :key="index"
              :image="slide.img"
            />
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
let M = require("materialize-css");
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Brands",

  components: {
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      brands: [
        {
          img: require("@/assets/img/brands/abb.jpg"),
        },
        {
          img: require("@/assets/img/brands/altech-corp.jpg"),
        },
        {
          img: require("@/assets/img/brands/amphenol.jpg"),
        },
        {
          img: require("@/assets/img/brands/APT.jpg"),
        },
        {
          img: require("@/assets/img/brands/asgo.jpg"),
        },
        {
          img: require("@/assets/img/brands/autonics.jpg"),
        },
        {
          img: require("@/assets/img/brands/ayrmex.jpg"),
        },
        {
          img: require("@/assets/img/brands/balluf.jpg"),
        },
        {
          img: require("@/assets/img/brands/banner.jpg"),
        },
        {
          img: require("@/assets/img/brands/baumer.jpg"),
        },
        {
          img: require("@/assets/img/brands/bin-master.jpg"),
        },
        {
          img: require("@/assets/img/brands/bticino.jpg"),
        },
        {
          img: require("@/assets/img/brands/bussmann.jpg"),
        },
        {
          img: require("@/assets/img/brands/camozzi.jpg"),
        },
        {
          img: require("@/assets/img/brands/cognex.jpg"),
        },
        {
          img: require("@/assets/img/brands/datalogic.jpg"),
        },
        {
          img: require("@/assets/img/brands/delta.jpg"),
        },
        {
          img: require("@/assets/img/brands/detalogic.jpg"),
        },
        {
          img: require("@/assets/img/brands/de-wit.jpg"),
        },
        {
          img: require("@/assets/img/brands/dwyer.jpg"),
        },
        {
          img: require("@/assets/img/brands/Eldon.jpg"),
        },
        {
          img: require("@/assets/img/brands/emc.jpg"),
        },
        {
          img: require("@/assets/img/brands/extech.jpg"),
        },
        {
          img: require("@/assets/img/brands/festo.jpg"),
        },
        {
          img: require("@/assets/img/brands/finder.jpg"),
        },
        {
          img: require("@/assets/img/brands/fisher.jpg"),
        },
        {
          img: require("@/assets/img/brands/fluke.jpg"),
        },
        {
          img: require("@/assets/img/brands/Hammond.jpg"),
        },
        {
          img: require("@/assets/img/brands/harting.jpg"),
        },
        {
          img: require("@/assets/img/brands/honeywell.jpg"),
        },
        {
          img: require("@/assets/img/brands/hubbell.jpg"),
        },
        {
          img: require("@/assets/img/brands/idec.jpg"),
        },
        {
          img: require("@/assets/img/brands/ifm.jpg"),
        },
        {
          img: require("@/assets/img/brands/lapp-kabel.jpg"),
        },
        {
          img: require("@/assets/img/brands/micro.jpg"),
        },
        {
          img: require("@/assets/img/brands/Mitsubishi.jpg"),
        },
        {
          img: require("@/assets/img/brands/norgren.jpg"),
        },
        {
          img: require("@/assets/img/brands/omrom.jpg"),
        },
        {
          img: require("@/assets/img/brands/osram.jpg"),
        },
        {
          img: require("@/assets/img/brands/panduit.jpg"),
        },
        {
          img: require("@/assets/img/brands/parker.jpg"),
        },
        {
          img: require("@/assets/img/brands/Patlite.jpg"),
        },
        {
          img: require("@/assets/img/brands/pepper.jpg"),
        },
        {
          img: require("@/assets/img/brands/phoenix-contact.jpg"),
        },
        {
          img: require("@/assets/img/brands/red-lion.jpg"),
        },
        {
          img: require("@/assets/img/brands/schneider.jpg"),
        },
        {
          img: require("@/assets/img/brands/sick.jpg"),
        },
        {
          img: require("@/assets/img/brands/siemens.jpg"),
        },
        {
          img: require("@/assets/img/brands/TE-Connectivity.jpg"),
        },
        {
          img: require("@/assets/img/brands/telemecanique.jpg"),
        },
        {
          img: require("@/assets/img/brands/tkd.jpg"),
        },
        {
          img: require("@/assets/img/brands/tri-tronics.jpg"),
        },
        {
          img: require("@/assets/img/brands/turck.jpg"),
        },
        {
          img: require("@/assets/img/brands/wago.jpg"),
        },
        {
          img: require("@/assets/img/brands/weg.jpg"),
        },
        {
          img: require("@/assets/img/brands/weidmuller.jpg"),
        },
        {
          img: require("@/assets/img/brands/winters.jpg"),
        },
      ],
    };
  },
  mounted() {
    // materialize
    let elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/custom.scss";
#marcas {
  .vueperslides--fixed-height.vueperslides--bullets-outside {
    margin: 0rem !important;
  }
  .vueperslide__image,
  .vueperslide {
    background-size: contain !important;
    background-repeat: no-repeat !important;
  }
}
</style>
