<template>
  <form
    class="px-lg-9 pb-11 px-4 d-flex flex-column justify-content-center align-items-center"
    dir="auto"
    @submit="formSubmit"
  >
    <h1
      v-if="this.currentLanguage === 'ar'"
      class="w-100 text-right border-3 font-24 py-2"
    >
      {{ $t("companyInfo") }}
    </h1>
    <h1 v-else class="w-100 text-left border-3 font-24 py-2">
      {{ $t("companyInfo") }}
    </h1>
    <input
      class="input-form px-lg-5 px-3 mt-15"
      :placeholder="`${$t('companyInfoName')}`"
    />
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoCountry')}`"
      />
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoContactPerson')}`"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoCity')}`"
      />
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoProvince')}`"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoPostCode')}`"
      />
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoDist')}`"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoPhone')}`"
      />
      <input
        class="input-form px-3 px-lg-5 mt-3 w-48"
        :placeholder="`${$t('companyInfoEmail')}`"
      />
    </div>
     <h1
      v-if="this.currentLanguage === 'ar'"
      class="w-100 border-3 text-right font-24 py-2 mt-15"
    >
      {{ $t("aboutProducts") }}
    </h1>
    <h1 v-else class="w-100 border-3 text-left font-24 py-2 mt-15">
      {{ $t("aboutProducts") }}
    </h1>
    <textarea
      class="input-text-area py-5 px-3 px-lg-5 mt-15"
      :placeholder="`${$t('productDescription')}`"
    ></textarea>
   
    <div
      class="w-100 d-flex flex-column flex-lg-row justify-content-center mt-5 align-items-center font-weight-bolder"
      dir="ltr"
    >
      <button
        class="btn btn-outline-secondary w-100 text-dark bg-white form-buttons"
        type="reset"
      >
        {{ $t("companyInfoReset") }}
      </button>
      <button
        class="btn btn-secondary w-100 text-dark ml-lg-4 mt-4 mt-lg-0 form-buttons"
        type="submit"
      >
        {{ $t("companyInfoSave") }}
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "ServiceForm",
  data() {
    return {
      currentLanguage: localStorage.currentLanguage,
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
        this.$router.push({ path: "/service-form/preview" });
    },
  },
};
</script>