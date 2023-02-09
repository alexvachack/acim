<template>
  <div class="parallax-container" id="inicio">
    <div class="section no-pad-bot"></div>
    <div class="parallax">
      <img src="@/assets/img/parallax/parallax_1.jpg" alt="Inicio" />
    </div>
  </div>
</template>

<script>
// components
let M = require("materialize-css");

export default {
  name: "Index",

  mounted() {
    // materialize
    let elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  },
};
</script>
