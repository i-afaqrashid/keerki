<template>
  <div dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="d-lg-none w-25">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav class="w-100">
        <div
          class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-around w-100"
        >
          <b-navbar-nav
            class="d-flex justify-content-lg-center align-items-lg-center text-light pt-lg-3 mt-3 mt-lg-0"
          >
            <router-link to="/">
              <p class="pl-lg-5 text-white">{{ $t("home") }}</p></router-link
            >
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
      <b-navbar-nav class="d-none d-lg-block ml-xl-7 ml-lg-6">
        <img src="../assets/logo.png" width="200" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "DashboardHeader",
  methods: {
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
</script>