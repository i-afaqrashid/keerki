<template>
<div>
  <div
    class="mt-lg-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
  >
    <h1 class="font-weight-bold px-5 px-xl-6" style="font-size: 5vw">
      {{ $t("randomSmall") }}
    </h1>
    <h4 class="font-weight-normal pt-4 px-5 px-xl-7" style="font-size: 20px">
      {{ $t("randomLarge") }}
    </h4>

    <b-button class="p-3 mt-5 mb-4" style="width:160px" squared variant="secondary">{{
      $t("tryForFree")
    }}</b-button>
    <b-button class="p-3" style="width:160px" squared variant="outline-light">{{
      $t("catalogs")
    }}</b-button>
  </div>
  <div class="mt-5 mt-xl-8">
  <img src="../assets/introImage.png" class="img-fluid w-100" style="mix-blend-mode:hard-light;opacity:0.9"/>
  </div>
</div>
</template>
<script>
export default {
  name: "Intro",
};
</script>