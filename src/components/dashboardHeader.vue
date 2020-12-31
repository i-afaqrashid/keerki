<template>
        <div class="">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
        <b-navbar-nav class="ml-auto d-lg-none w-25">
          <img src="../assets/logo.png" class="w-100" />
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav class="w-100">
          <div
            class="d-flex flex-column flex-lg-row align-items-center justify-content-around w-100"
          >
            <b-navbar-nav
              class="flex justify-content-center align-items-center text-light pt-lg-3"
            >
              <p class="pl-lg-5">{{ $t("home") }}</p>
              <p class="pl-lg-5">{{ $t("product") }}</p>
              <p class="pl-lg-5">{{ $t("about") }}</p>
              <p class="pl-lg-5">{{ $t("contact") }}</p>
            </b-navbar-nav>
          </div>
        </b-collapse>
        <b-navbar-nav class="d-none d-lg-block w-25 ml-xl-7 ml-lg-6">
          <img src="../assets/logo.png" width="200" />
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>
<script>
export default {
    name:"DashboardHeader"
}
</script>