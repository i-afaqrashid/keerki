<template>
  <div class="mb-9" dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto d-lg-none">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <div
          class="d-flex flex-column ml-xl-5 flex-lg-row align-items-center justify-content-around w-100 mr-lg-5"
        >
          <b-navbar-nav
            class="d-flex justify-content-center align-items-center text-left w-100 outline-none ml-0 ml-lg-5"
          >
            <div class="bg-secondary rounded-circle">
              <svg
                width="47"
                height="47"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="39"
                  height="36"
                >
                  <ellipse
                    cx="19.5711"
                    cy="18.0019"
                    rx="18.745"
                    ry="17.5292"
                    fill="#FFC145"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M31.1551 37.6195V34.0386C31.1551 32.1392 30.5448 30.3176 29.4586 28.9746C28.3724 27.6315 26.8991 26.877 25.363 26.877H13.7789C12.2427 26.877 10.7695 27.6315 9.68327 28.9746C8.59705 30.3176 7.98682 32.1392 7.98682 34.0386V37.6195"
                    fill="#197BBD"
                  />
                  <path
                    d="M19.5694 21.4598C22.7683 21.4598 25.3615 19.0348 25.3615 16.0434C25.3615 13.052 22.7683 10.627 19.5694 10.627C16.3705 10.627 13.7773 13.052 13.7773 16.0434C13.7773 19.0348 16.3705 21.4598 19.5694 21.4598Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div
              class="mx-lg-4 my-4 my-lg-0 text-white text-center text-lg-left"
            >
              <p class="mb-0 fs-16">Hedi</p>
              <router-link to="/dashboard/account" class="text-white">
                <p class="mb-0 fs-16">{{ $t("formHeaderAccountDetails") }}</p>
              </router-link>
            </div>
          </b-navbar-nav>

          <b-navbar-nav
            class="d-flex justify-content-lg-center align-items-lg-center text-light pt-lg-3 w-100 pr-lg-11"
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
      <b-navbar-nav class="ml-auto d-none d-lg-block w-25">
        <img src="../assets/logo.png" class="w-50" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "FormHeader",
  methods: {
    gotoHome() {
      this.$router.push({ path: "/" });
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
</script>