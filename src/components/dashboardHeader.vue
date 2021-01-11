<template>
  <div dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <div class="d-flex">
        <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
        <div
          class="d-lg-none d-flex ml-2 justify-content-center text-white align-items-center text-left outline-none ml-0 ml-lg-5"
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
          <div class="mx-2">
            <p class="mb-0 fs-14">Hedi</p>
            <p class="mb-0 fs-14">
              {{ $t("formHeaderAccountDetails") }}

              <b-dropdown
                variant="link"
                size="sm"
                dropleft
                toggle-class="text-decoration-none p-0"
                no-caret
              >
                <template #button-content>
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L11.2071 2.20711C11.5976 1.81658 11.5976 1.18342 11.2071 0.792893C10.8166 0.402369 10.1834 0.402369 9.79289 0.792893L6 4.58579L2.20711 0.792893Z"
                      fill="#CCCCCE"
                    />
                  </svg>
                </template>
                <b-dropdown-item @click="account">
                  {{ $t("formHeaderAccountDetails") }}</b-dropdown-item
                >
                <b-dropdown-item @click="overview">{{
                  $t("overview")
                }}</b-dropdown-item>
                <b-dropdown-item @click="orderHistory">{{
                  $t("orderHistory")
                }}</b-dropdown-item>
                <b-dropdown-item @click="notifications">{{
                  $t("notifications")
                }}</b-dropdown-item>
                <b-dropdown-item @click="messages">{{
                  $t("messages")
                }}</b-dropdown-item>
                <b-dropdown-item @click="logout">{{
                  $t("logout")
                }}</b-dropdown-item>
              </b-dropdown>
            </p>
          </div>
        </div>
      </div>
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
            <p class="pl-lg-5 d-flex align-items-center">
              <img
                v-if="this.$i18n.locale == 'en'"
                src="../assets/enFlag.png"
                width="24"
                height="24"
                class="rounded-circle"
              />
              <img
                v-else-if="this.$i18n.locale == 'ar'"
                src="../assets/arFlag.png"
                width="24"
                height="24"
                class="rounded-circle"
              />
              <img
                v-else
                if="this.$i18n.locale == 'ch'"
                src="../assets/chFlag.png"
                width="24"
                height="24"
                class="rounded-circle"
              />
            </p>
            <p>
              <b-nav-item-dropdown :text="`${$t('setLanguage')}`">
                <b-dropdown-item @click="switchLocale('en')">
                  <img
                    src="../assets/enFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  ENGLISH</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ar')">
                  <img
                    src="../assets/arFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  عربى</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ch')">
                  <img
                    src="../assets/chFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  中文</b-dropdown-item
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
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    overview() {
      this.$router.push({ path: "/dashboard" }).catch(() => {});
    },
    notifications() {
      this.$router.push({ path: "/dashboard/notifications" }).catch(() => {});
    },
    messages() {
      this.$router.push({ path: "/dashboard/messages" }).catch(() => {});
    },
    orderHistory() {
      this.$router.push({ path: "/dashboard/order-history" }).catch(() => {});
    },
    account() {
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
    },
  },
};
</script>