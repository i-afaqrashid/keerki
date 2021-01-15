<template>
  <div>
    <div
      class="mt-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="font-weight-bold fs-5 w-60">
        {{ $t("randomSmall") }}
      </h1>
      <h4 class="font-weight-normal pt-4 w-60 fs-20 text-center">
        {{ $t("randomLarge") }}
      </h4>
    <div class="d-flex justify-content-between mt-5 align-items-center flex-column flex-sm-row">

      <router-link to="/dashboard/order-form">
        <b-button
          class="p-3 btn-width-160 mx-3"
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
        header-class="border-0"
      >
        <div
          class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
          dir="auto"
        >
          <div class="w-100 d-flex">
            <p class="text-red mb-0 fs-24">*</p>
            <input
              id="input-700"
              type="text"
              :placeholder="`${$t('yourName')}`"
              class="catalog-input form-input outline-none border rounded-lg px-3"
            />
          </div>
          <div class="w-100 d-flex">
            <p class="text-red mb-0 fs-24 mt-3">*</p>
            <input
              id="input-800"
              type="text"
              :placeholder="`${$t('companyName')}`"
              class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
            />
          </div>
          <div class="w-100 d-flex">
            <p class="text-red mb-0 fs-24 mt-3">*</p>
            <input
              id="input-900"
              type="text"
              :placeholder="`${$t('catalogEmail')}`"
              class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
            />
          </div>
          <div class="w-100 d-flex">
            <p class="text-red mb-0 fs-24 mt-3">*</p>
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <select
                name="countrycode"
                class="catalog-input outline-none select-width border mt-3 d-flex justify-content-center align-items-center px-2"
                id="countrycode"
                @change="displayCountryCode"
              >
                <option data-countryCode="SA" value="966">
                  +986 {{ $t("ksa") }}
                </option>
                <option data-countryCode="AE" value="971">
                  +971 {{ $t("uae") }}
                </option>
                <option data-countryCode="QA" value="974">
                  +974 {{ $t("qatar") }}
                </option>
                <option data-countryCode="QA" value="973">
                  +973 {{ $t("bahrain") }}
                </option>
                <option data-countryCode="OM" value="968">
                  +978 {{ $t("oman") }}
                </option>
                <option data-countryCode="LB" value="961">
                  +961 {{ $t("lebanon") }}
                </option>
                <option data-countryCode="JO" value="962">
                  +961 {{ $t("jordan") }}
                </option>
                <option data-countryCode="EG" value="20">
                  +961 {{ $t("egypt") }}
                </option>
                <option data-countryCode="DE" value="40">
                  +961 {{ $t("germany") }}
                </option>
                <option data-countryCode="AD" value="376">+376 Andorra</option>
                <option data-countryCode="AO" value="244">+244 Angola</option>
                <option data-countryCode="AI" value="1264">
                  +1264 Anguilla
                </option>
                <option data-countryCode="AG" value="1268">
                  +1268 Antigua
                </option>
                <option data-countryCode="AR" value="54">+54 Argentina</option>
                <option data-countryCode="AM" value="374">+374 Armenia</option>
                <option data-countryCode="AW" value="297">+297 Aruba</option>
                <option data-countryCode="AU" value="61">+61 Australia</option>
                <option data-countryCode="AT" value="43">+43 Austria</option>
                <option data-countryCode="AZ" value="994">
                  +994 Azerbaijan
                </option>
                <option data-countryCode="BS" value="1242">
                  +1242 Bahamas
                </option>
                <option data-countryCode="BD" value="880">
                  +880 Bangladesh
                </option>
                <option data-countryCode="BB" value="1246">
                  +1246 Barbados
                </option>
                <option data-countryCode="BY" value="375">+375 Belarus</option>
              </select>
              <input
                id="input-7"
                type="text"
                :placeholder="`${$t('catalogPhone')}`"
                class="catalog-input form-input input-width outline-none border rounded-lg px-3 mt-3"
                style="width: 65% !important"
              />
            </div>
          </div>
          <div class="w-90 d-flex">
            <b-form-checkbox class="mt-4" required>{{
              $t("termsAndConditions")
            }}</b-form-checkbox>
          </div>
          <button
            class="text-white btn w-100 catalog-btn outline-none mt-4"
            @click="$bvModal.hide('catalogs-modal')"
          >
            {{ $t("catalogDownloadBtn") }}
          </button>
        </div>
      </b-modal>
      <b-button
        v-b-modal.catalogs-modal
        class="p-3 btn-width-160 mt-3 mt-sm-0"
        squared
        variant="outline-light"
        >{{ $t("catalogs") }}</b-button
      >
    </div>
      
    </div>
    <div class="mt-5">
      <img src="../assets/introImage.png" class="img-fluid w-100 introImage" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
  methods: {
    displayCountryCode() {
      var countrycode = document.getElementById("countrycode");
      countrycode.options[countrycode.selectedIndex].text =
        "+" + countrycode.value;
    },
  },
};
</script>
<style scoped>
.text-red {
  color: red !important;
}
</style>