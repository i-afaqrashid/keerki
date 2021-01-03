<template>
  <div>
    <div
      class="mt-lg-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="font-weight-bold fs-5 w-60">
        {{ $t("randomSmall") }}
      </h1>
      <h4 class="font-weight-normal pt-4 w-60 fs-20 text-center">
        {{ $t("randomLarge") }}
      </h4>

      <router-link to="/dashboard/order-form">
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
        :title="`${$t('downloadYourCatalog')}`"
        hide-footer
      >
        <div
          class="d-flex flex-column w-100 justify-content-center align-items-center p-3" dir="auto"
        >
                <input
                  id="input-7"
                  type="text"
                  :placeholder="`${$t('catalogName')}`"
                  class="catalog-input form-input outline-none border rounded-lg px-3"
                />
                                <input
                  id="input-7"
                  type="text"
                  :placeholder="`${$t('catalogEmail')}`"
                  class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
                />
                                <input
                  id="input-7"
                  type="text"
                  :placeholder="`${$t('catalogPhone')}`"
                  class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
                />
          <button
            class="text-white btn w-100 catalog-btn outline-none mt-4"
            @click="$bvModal.hide('catalogs-modal')"
          >
            {{$t('catalogDownloadBtn')}}
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