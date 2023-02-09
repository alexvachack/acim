<template>
  <div id="head">
    <HeaderSection />
    <Header v-show="showedMenu" />
  </div>
  <div id="separator"></div>

  <router-view @setPageInfo="setPageInfo" @showMenu="showMenu" />

  <Footer />
</template>

<script>
// components
import HeaderSection from "@/components/app/HeaderSection.vue";
import Header from "@/components/app/Header.vue";
import Footer from "@/components/app/Footer.vue";

// materialize-css
let M = require("materialize-css");

// use imports
export default {
  components: {
    HeaderSection,
    Header,
    Footer,
  },
  data() {
    return {
      showedMenu: true,
    };
  },
  methods: {
    setPageInfo(title, description) {
      document.title = title;
      let keywords =
        "Mro y Consumibles Industriales, Dispositivos Mecánicos, Componentes Electrónicos, Perfilería, Gabinetes, Armarios y Accesorios,\
      Señalización e Iluminación, Instrumentación y Procesos, Botonería y Fuentes de Alimentación, PLC / HMI / SCADA, Sensores,\
      Visión Artificial, Trazabilidad, Seguridad Industrial, Neumática / Hidráulica, Motores y Bombas, Fusibles y Portafusibles,\
      Conductores Eléctricos, Relevadores y Temporizadores";
      keywords +=
        ", 3M, ABB, ADIR, ALLEN BRADLEY, ALPHA WIRE, ALTECH CORP, AMESA, AMPHENOL, AMPROBE, ANBEC, ANCLO, ANSELL, APEX TOOLS, APOLLO, APT, ARDUINO, ARROW HART, ARSA, ARTLINE, ASCO NUMATICS, AUER, AUSTROMEX, AUTOMATION DIRECT, AUTONICS, AVEN TOOLS, AVENTICS, AZOR, B&K PRECISION, BACHARACH, BACO, BALDOR, BALLUFF, BANNER, BARMESA, BARRILITO, BAUMER, BEI SENSORS, BELDEN, BESSEY, BIC, BIN MASTER, BLACK AND DECKER, BOSCH, BOSTIK, BOSTITCH, BOURNS, BRADY, BRASSO, BRAUNKER, BRIDGESTONE, BROWNING, BTCINO, BULGIN, BURNDY, BUSSMANN, C&K COMPONENTS, CABLOFIL, CAMOZZI, CARLO GAVAZZI, CHAROFIL, CHINT, CKD, CNTD, COGNEX, COILHOSE PNEUMATICS, CONDULAC, CONDUMEX, CONTRINEX, CONTROL TECHNIQUES, COOPER, COPAMEX, CROSSLINE, CROUSE HINDS, CROUZET, CURTIS, CUTLER HAMMER, DAIKIN, DAITO, DAIWA DENGYO, DANFOSS, DATALOGIC, DAYTON, DELPHI, DELTA, DESTACO, DEUBLIN, DEWALT, DEWIT, DIALIGHT, DICA, DICHTOMATIK, DI-SORIC, DIXON, DREMEL, DUFF NORTON, DWYER, DYNISCO, E.DOLD & SONS, E.MC, EASTMAN, EATON, ECLIPSE, ELASTIMOLD, ELDON, ELESTA, ELMO RITHCI, EMERSON, ENCODER PRODUCTS, ENERGIZER, EPSON, ERICO, ESTIC, EUCHNER, EUROTHERM, EVANS, EXTECH INSTRUMENTS, FABCO, FAG, FANDELI, FANUC, FERRAZ SHAWMUT, FESTO, FINDER, FIRESTONE, FISHER, FLIR, FLUKE, FOSEY, FREESCALE, FUJI ELECTRIC, FUJIKIN, FUJITSU, GARDNER DENVER, GARLOCK, GAST, GATES, GE, GENERAL CABLE, GOULD, GRUNDFOS, HAMMOND MANUFACTURING, HANGYOUNG NUX, HARTING, HARTMAN, HASKEL, HELLERMAN TYTON, HELUKABEL, HENKEL, HIKVISION, HIMEL, HIOKI, HIRSCHMANN, HITACHI, HNC ELECTRIC, HOFFMAN, HONDA, HONEYWELL, HUBBELL, IDE, IDEC, IFM ELECTRONIC, IGUS, IKO, INA, INFRA, INTRAMAT, INVERTEK DRIVES, IRWIN, lUSA, JOHNSON ELECTRIC, JWJ COMERCIAL, JYRSA, KARCHER, KB ELECTRONICS, KBC, KEMET, KEYENCE, KEYSIGHT TECHNIQUES, KLEIN TOOLS, KNIPEX, KOGANEI, KONSEI, KORES, KROM SCHROEDER, KYOWA, LAPPKABEL, LEESON, LEGRAND, LENZE, LEUZE, LEVITON, LINKBELT, LITTELFUSE, LOCTITE, LS, LUBE, LUMBERG AUTOMATION, MAC, MAE, MAGG, MAKITA, MARATHON, MARTIN, MAXON, MC, MEDIDORES INT. ROCHESTER, MEGAMEX, METRON, MGG, MICRO AUTOMATION, MIKELS, MILWAUKEE, MITSUBISHI, MITUTOYO, MOBIL, MOELLER, MOLEX, MONROE, MSA SAFETY, MUELLER ELECTRIC, MURR ELEKTRONIK, NACHI, NATIONAL INSTRUMENTS, NEUTRIK, NICE, NICHIFU, NICHOLSON, NIDE, NIDEC, NIHON, NISSEI CORP, NITTO, NORD, NORDSON, NORGREN, NORTON, NSK, NTN, NUMATICS, OHMITE, OMEGA, OMRON, OPTIBELT, ORIENTAL MOTOR, ORION, OSRAM, PANASONIC, PANDUIT, PAPER MATE, PARKER, PATLITE, PEDROLLO, PELIKAN, PEPPERL & FUCHS, PERFECT, PERMATEX, PHILLIPS, PHILLIPS LIGHTING, PHOENIX CONTACT, PILZ, POLIFLEX, POMONA ELECTRONICS, POST IT, PRECISION BRAND, PRETUL, PRITT, PROFACE BY SCHNEIDER, PULS, PULSE ELECTRONICS, QUALTEK, RAWELT, RED LION CONT., RESISTOL, RITE-HITE, RITTAL, ROBERT BOSCH, RS PRO, SANYO DENKI, SCHANFFNER, SCHMERSAL, SCHNEIDER ELECTRIC, SCOTCH, SCOTCH BRITE, SEAL MASTER, SENSATA, SEW EURODRIVE, SICK, SIEMENS, SKF, SKIL, SMF, SOLA BASIC, SOLA HD, SQUARE D, STANLEY, STEINEL, SUMITOMO, TDK LAMBDA, TE CONNECTIVITY, TECNOLITE, TELEMECANIQUE, THK, THOMAS & BETTS, THORSMAN, TIMKEN, TKD, TOSHIBA, TRI-TRONICS, TRUPER, TSUBAKI, TUK, TURCK, TYCO ELECTRONICS, URREA, VAYREMEX, VIAKON, VICKERS, VISHAY, VMECA, VOLTECH, WAGO, WARRICK CONTROLS, WATLOW, WATSON MCDANIEL, WEG, WEIDMULLER, WEILER, WELLER, WEST INSTRUMENTS, WINTERS, WOODHEAD, WURTH, XYCO, XYLEM, YPC, ZEBRA";
      if (document.querySelectorAll('meta[name="keywords"]').length > 0) {
        document.querySelectorAll('meta[name="keywords"]')[0].content =
          keywords;
      } else {
        let meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }
      if (document.querySelectorAll('meta[name="description"]').length > 0) {
        document.querySelectorAll('meta[name="description"]')[0].content =
          description;
      } else {
        let meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.getElementsByTagName("head")[0].appendChild(meta);
      }
    },
    showMenu(value) {
      this.showedMenu = value;
    },
  },
  mounted() {
    M.AutoInit();
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/fonts.scss";
#head {
  position: fixed;
  width: 100%;
  z-index: 999999;
}
#separator {
  height: 6rem;
}
@media (max-width: 62rem) {
  #head {
    position: relative !important;
  }
  #separator {
    display: none;
  }
}
@media (max-width: 28rem) {
  #separator {
    height: 15rem;
  }
}
@media (max-width: 20rem) {
  #separator {
    height: 18rem;
  }
}
</style>
