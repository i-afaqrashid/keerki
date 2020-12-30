<template>
  <div class="pb-lg-5 mb-lg-5">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto d-lg-none w-25">
        <img src="../assets/logo.png" class="w-100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <div
          class="d-flex flex-column ml-xl-5 flex-lg-row align-items-center justify-content-around w-100 px-5"
        >
          <b-navbar-nav class="ml-xl-5">
            <b-button
              class="px-4 py-2 btn-width-135"
              squared
              variant="secondary"
              >{{ $t("login") }}</b-button
            >
            <router-link to="/sign-up"
              ><b-button
                class="ml-lg-3 px-4 py-2 btn-width-135"
                squared
                variant="outline-light"
                >{{ $t("signup") }}</b-button
              ></router-link
            >
          </b-navbar-nav>

          <b-navbar-nav
            class="flex justify-content-center align-items-center text-light pt-lg-3 w-100"
          >
            <p class="pl-lg-5">{{ $t("home") }}</p>
            <p class="pl-lg-5">{{ $t("product") }}</p>
            <p class="pl-lg-5">{{ $t("about") }}</p>
            <p class="pl-lg-5">{{ $t("contact") }}</p>
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
};
</script>