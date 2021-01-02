<template>
  <div>
    <div
      class="mt-lg-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="font-weight-bold px-5 px-xl-6 fs-5">
        {{ $t("randomSmall") }}
      </h1>
      <h4 class="font-weight-normal pt-4 px-5 px-xl-7 fs-20">
        {{ $t("randomLarge") }}
      </h4>

      <router-link to="/sign-up">
        <b-button
          class="p-3 mt-5 mb-4 btn-width-160"
          squared
          variant="secondary"
          >{{ $t("tryForFree") }}</b-button
        >
      </router-link>
      <b-modal
        id="catalogs-modal"
        centered
        title="Download your catalog"
        hide-footer
      >
        <div
          class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
        >
          <input
            placeholder="Name *"
            class="catalog-input outline-none w-100 p-4"
            type="text"
          />
          <input
            placeholder="Email *"
            class="catalog-input outline-none w-100 p-4 mt-4"
            type="email"
          />

          <input
            placeholder="Phone *"
            class="catalog-input outline-none w-100 p-4 mt-4"
            type="number"
          />
          <button
            class="text-white btn w-100 catalog-btn outline-none mt-4"
            @click="$bvModal.hide('catalogs-modal')"
          >
            Download
          </button>
        </div>
      </b-modal>
      <b-button
        v-b-modal.catalogs-modal
        class="p-3 btn-width-160"
        squared
        variant="outline-light"
        >{{ $t("catalogs") }}</b-button
      >
    </div>
    <div class="mt-5 mt-xl-8">
      <img src="../assets/introImage.png" class="img-fluid w-100 introImage" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
};
</script>