<template>
  <div
    class="d-flex align-items-center text-light text-center flex-column mt-5 mt-xl-8"
  >
    <h1 class="font-weight-normal px-5 px-xl-6 fs-52">
      {{ $t("partners") }}
    </h1>
    <h4 class="font-weight-normal pt-2 px-3 px-xl-12 fs-20" >
      {{ $t("partnerText") }}
    </h4>
    <div
      class="mt-lg-11 d-flex w-56 justify-content-around align-items-center flex-column flex-lg-row"
    >
      <div class="mt-11 mt-lg-0">
        <img src="../../assets/logos_apple-app-storeapple.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_apiaryapiary.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_android-iconandroid.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_basecampbasecamp.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_airbnbairbnb.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_ibmibm.png" />
      </div>
    </div>
    <b-button
      class="ml-lg-3 px-4 py-2 mt-lg-11 btn-width-135"
      squared
      variant="outline-light"
      >{{ $t("partnerBtn") }}</b-button
    >
  </div>
</template>
<script>
export default {
  name: "Partners",
};
</script>