<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col s6">
          <ul>
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
        </div>
        <div class="col s6 right right-align">
          <ul>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>© Derechos Reservados por ACMI AUTOMATION MÉXICO</li>
            <li>
              Sitio Desarrollado por
              <a href="http://www.ddg-jakemate.com" target="_blank">
                www.ddg-jakemate.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=524425486701"
            target="_blank"
          >
            <img
              src="@/assets/img/whatsapp.png"
              alt="whatsapp"
              class="responsive-img"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/custom.scss";
footer {
  background-color: $blueInitial;
  a {
    color: $white;
  }
  a:hover {
    color: $blueSeparator;
  }
  .whatsapp {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 9;
    img {
      max-width: 5rem;
    }
  }
  .page-footer {
    margin: 0;
  }
}
</style>
