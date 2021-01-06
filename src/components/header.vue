<template>
  <div class="pb-lg-5 mb-lg-5" dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="d-lg-none">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <div
          class="d-flex flex-column ml-xl-5 flex-lg-row align-items-lg-center justify-content-around w-100 pt-3 pt-lg-0"
        >
          <b-navbar-nav class="ml-xl-5" dir="ltr">
            <b-button
              @click="login"
              class="py-2 btn-width-135"
              squared
              variant="secondary"
              >{{ $t("login") }}</b-button
            >

            <b-button
              class="ml-lg-3 py-2 btn-width-135 mt-lg-0 mt-3"
              @click="signup"
              squared
              variant="outline-light"
              >{{ $t("signup") }}</b-button
            >
          </b-navbar-nav>

          <b-navbar-nav
            class="d-flex justify-content-lg-center align-items-lg-center text-light pt-3 w-100"
          >
            <p class="pl-lg-5">{{ $t("home") }}</p>
            <p class="pl-lg-5">{{ $t("product") }}</p>
            <p class="pl-lg-5">{{ $t("about") }}</p>
            <p class="pl-lg-5">{{ $t("contact") }}</p>
            <p class="pl-lg-5">
              <b-nav-item-dropdown :text="`${$t('setLanguage')}`">
                <b-dropdown-item @click="switchLocale('en')"
                  >ENGLISH</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ar')"
                  >عربى</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ch')"
                  >中文</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </p>
          </b-navbar-nav>
        </div>
      </b-collapse>
      <b-navbar-nav class="ml-auto d-none d-lg-block w-25">
        <img src="../assets/logo.png" class="w-50" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (localStorage.email && localStorage.password) {
        this.$router.push({ path: "/dashboard" }).catch(() => {});
      } else {
        this.$router.push({ path: "/login" }).catch(() => {});
      }
    },
    signup() {
      this.$router.push({ path: "/sign-up" });
    },
    handleLanguage(e) {
      this.switchLocale(e.target.value);
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        document.getElementById("app").classList.remove(this.$i18n.locale);
        localStorage.currentLanguage = locale;
        document.getElementById("app").classList.add(locale);
        this.$i18n.locale = locale;
      }
    },
  },
};

/*
  <div class="w-100 d-flex justify-content-center align-items-center">
    <b-navbar toggleable="lg" type="dark" variant="info" class="">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#" class="d-lg-none">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-button
              @click="login"
              class="py-2 btn-width-135"
              squared
              variant="secondary"
              >{{ $t("login") }}</b-button
            >
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/sign-up"
              ><b-button
                class="ml-lg-3 py-2 btn-width-135"
                squared
                variant="outline-light"
                >{{ $t("signup") }}</b-button
              ></router-link
            >
          </b-nav-item>
      <b-navbar-nav class="mt-2">
          <b-nav-item>
            <p class="pl-lg-5">{{ $t("home") }}</p>
          </b-nav-item>
          <b-nav-item>
            <p class="pl-lg-5">{{ $t("product") }}</p>
          </b-nav-item>

          <b-nav-item>
            <p class="pl-lg-5">{{ $t("about") }}</p>
          </b-nav-item>
          <b-nav-item>
            <p class="pl-lg-5">{{ $t("contact") }}</p>
          </b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
      </b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-none d-lg-block ">
            <img src="../assets/logo.png" class="w-50" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
**/
</script>