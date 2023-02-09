<template>
  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center"></div>
      </div>
    </div>
    <div class="parallax">
      <img src="@/assets/img/parallax/parallax_2.jpg" alt="Contacto" />
    </div>
  </div>
  <div id="contacto">
    <div class="container">
      <div class="section">
        <div class="row white" v-if="ContactFormSent">
          <div class="col s12">
            <p>
              Gracias por Visitarnos. Nuestros ejecutivos se pondrán en contacto
              con ustedes a la brevedad.
            </p>
          </div>
        </div>
        <form
          v-else
          class=""
          enctype="application/x-www-form-urlencoded"
          method="post"
          accept-charset="UTF-8"
          action=""
          v-on:submit="sendForm"
        >
          <div class="row">
            <div class="input-field col s12 m6">
              <input
                name="name"
                id="name"
                type="text"
                class="validate"
                required="required"
                v-model="ContactForm.name"
              />
              <label for="name">Nombre</label>
            </div>
            <div class="input-field col s12 m6">
              <input
                name="email"
                id="email"
                type="email"
                class="validate"
                required="required"
                v-model="ContactForm.email"
              />
              <label for="email">Correo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="phone"
                id="phone"
                type="tel"
                class="validate"
                required="required"
                v-model="ContactForm.phone"
              />
              <label for="phone">Teléfono</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                name="subject"
                id="subject"
                type="text"
                class="validate"
                v-model="ContactForm.subject"
              />
              <label for="subject">Aplicación</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea
                name="message"
                id="message"
                required="required"
                class="materialize-textarea validate"
                v-model="ContactForm.message"
              ></textarea>
              <label for="message">Comentarios:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <button
                class="btn waves-effect waves-light col s12"
                type="submit"
                name="action"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col s12">
            <a class="btn waves-effect waves-light col s12" href="#inicio">
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import axios from "axios";

export default {
  name: "Contact",

  data() {
    return {
      ContactFormSent: false,
      ContactForm: {
        name: null,
        email: null,
        phone: null,
        subject: null,
        message: null,
      },
    };
  },

  methods: {
    sendForm(e) {
      e.preventDefault();
      let email = axios.create({
        baseURL: "https://www.acmimexico.com/api/",
        headers: {},
      });
      email
        .post("email.php", {
          name: this.ContactForm.name,
          email: this.ContactForm.email,
          phone: this.ContactForm.phone,
          subject: this.ContactForm.subject,
          message: this.ContactForm.message,
        })
        .then((response) => {
          if (response.data.status == "ok") {
            this.ContactFormSent = true;
          } else {
            console.log("response", response);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/custom.scss";
#contacto {
  background-color: $blueInitial;
  .row {
    margin-bottom: 0rem;
  }
  .input-field {
  }
  input,
  textarea {
    background-color: $white;
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      padding-left: 1rem;
    }
    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      padding-left: 1rem;
    }
    /* Microsoft Edge */
    ::-ms-input-placeholder {
      padding-left: 1rem;
    }
  }
  .input-field > label:not(.label-icon).active {
    font-size: $defaultFont;
    color: $white;
    margin-top: -1rem;
  }
  .input-field.col label {
    padding-left: 1rem;
  }
  textarea {
    height: 10rem;
  }
  button {
    background-color: $blueSeparator;
  }
}
</style>
