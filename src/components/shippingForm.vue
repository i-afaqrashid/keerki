<template>
  <div class="w-100 d-flex justify-content-center align-items-center">
    <form
      class="w-70 pt-9 pb-11 px-4 d-flex flex-column justify-content-center align-items-center"
      dir="auto"
      @submit="formSubmit"
    >
      <button
        class="d-flex pb-5 align-self-start outline-none d-flex align-items-center justify-content-center"
        @click="$router.push('/dashboard/order-form')"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
            fill="#8692A6"
          />
        </svg>
        <p class="font-weight-lighter ml-3 mb-0">{{ $t("back") }}</p>
      </button>
      <h1
        v-if="this.$i18n.locale == 'ar'"
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
      <div class="w-100" dir="ltr">
        <div @dragover.prevent @drop.prevent>
          <div
            class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column"
            @dragleave="fileDragOut"
            @dragover="fileDragIn"
            @drop="handleFileDrop"
          >
            <div
              class="w-100 file-wrapper d-flex justify-content-center align-items-center flex-column flex-lg-row"
            >
              <input
                type="file"
                name="file-input"
                multiple="True"
                @change="handleFileInput"
              />
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.87738 23C4.02337 23.0013 2.35136 21.8828 1.64169 20.1665C0.932015 18.4503 1.3246 16.4747 2.63622 15.1617L9.1187 8.66718C9.71831 8.08691 10.6714 8.09521 11.2609 8.68583C11.8503 9.27646 11.8586 10.2315 11.2795 10.8323L4.79699 17.327C4.20459 17.9256 4.20657 18.8914 4.80141 19.4876C5.39625 20.0838 6.36016 20.0861 6.95777 19.4927L15.6012 10.8321C16.461 9.97088 16.9441 8.8026 16.9441 7.58441C16.9441 6.36621 16.461 5.19793 15.6012 4.33669C13.7876 2.60073 10.9323 2.60073 9.1187 4.33669L2.63622 10.8315C2.25383 11.235 1.68312 11.3988 1.14553 11.2595C0.607945 11.1202 0.188084 10.6996 0.0488551 10.161C-0.0903737 9.62238 0.0729435 9.05048 0.47544 8.66718L6.95777 2.17098C9.97972 -0.723659 14.7397 -0.723659 17.7617 2.17098C19.1948 3.60628 20 5.55339 20 7.58372C20 9.61404 19.1948 11.5612 17.7617 12.9965L9.1187 21.6571C8.25928 22.5186 7.09298 23.0018 5.87738 23Z"
                    fill="#047BAE"
                  />
                </svg>
              </span>
              <h1 class="font-24 text-center mb-0 mx-lg-4">
                <span class="text-primary">{{ $t("companyInfoAddLogo") }}</span>
                {{ $t("companyInfoDropFile") }}
              </h1>
            </div>
            <ul class="file-list">
              <li v-for="(file, index) in files" :key="index">
                {{ file.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1
        v-if="this.$i18n.locale == 'ar'"
        class="w-100 border-3 text-right font-24 py-2 mt-15"
      >
        {{ $t("factoryContact") }} *
      </h1>
      <h1 v-else class="w-100 border-3 text-left font-24 py-2 mt-15">
        {{ $t("factoryContact") }} *
      </h1>
      <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
        <input
          class="input-form px-3 px-lg-5 mt-3 w-100"
          :placeholder="`${$t('entryFactoryContact')}`"
        />
      </div>
      <h1
        v-if="this.$i18n.locale == 'ar'"
        class="w-100 border-3 text-right font-24 py-2 mt-15"
      >
        {{ $t("whatGoodsShipping") }}*
      </h1>
      <h1 v-else class="w-100 border-3 text-left font-24 py-2 mt-15">
        {{ $t("whatGoodsShipping") }} *
      </h1>
      <textarea
        class="input-text-area py-5 px-3 px-lg-5 mt-15"
        :placeholder="`${$t('listGoods')}`"
      ></textarea>
      <h1
        v-if="this.$i18n.locale == 'ar'"
        class="w-100 border-3 text-right font-24 py-2 mt-15"
      >
        {{ $t("providePackingList") }}
      </h1>
      <h1 v-else class="w-100 border-3 text-left font-24 py-2 mt-15">
        {{ $t("providePackingList") }}
      </h1>
      <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
        <div
          class="w-48 d-flex flex-lg-row flex-column justify-content-between"
        >
          <input
            class="input-form px-3 px-lg-5 mt-3 w-48"
            :placeholder="`${$t('height')}`"
          />
          <input
            class="input-form px-3 px-lg-5 mt-3 w-48"
            :placeholder="`${$t('width')}`"
          />
        </div>
        <div
          class="w-48 d-flex flex-lg-row flex-column justify-content-between"
        >
          <input
            class="input-form px-3 px-lg-5 mt-3 w-48"
            :placeholder="`${$t('height')}`"
          />
          <input
            class="input-form px-3 px-lg-5 mt-3 w-48"
            :placeholder="`${$t('weightKG')}`"
          />
        </div>
      </div>
      <div class="w-100 mt-5" dir="ltr">
        <div @dragover.prevent @drop.prevent>
          <div
            class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column"
            @dragleave="fileDragOut"
            @dragover="fileDragIn"
            @drop="handleFileDrop"
          >
            <div
              class="w-100 file-wrapper d-flex justify-content-center align-items-center flex-column flex-lg-row"
            >
              <input
                type="file"
                name="file-input"
                multiple="True"
                @change="handleFileInput"
              />
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.87738 23C4.02337 23.0013 2.35136 21.8828 1.64169 20.1665C0.932015 18.4503 1.3246 16.4747 2.63622 15.1617L9.1187 8.66718C9.71831 8.08691 10.6714 8.09521 11.2609 8.68583C11.8503 9.27646 11.8586 10.2315 11.2795 10.8323L4.79699 17.327C4.20459 17.9256 4.20657 18.8914 4.80141 19.4876C5.39625 20.0838 6.36016 20.0861 6.95777 19.4927L15.6012 10.8321C16.461 9.97088 16.9441 8.8026 16.9441 7.58441C16.9441 6.36621 16.461 5.19793 15.6012 4.33669C13.7876 2.60073 10.9323 2.60073 9.1187 4.33669L2.63622 10.8315C2.25383 11.235 1.68312 11.3988 1.14553 11.2595C0.607945 11.1202 0.188084 10.6996 0.0488551 10.161C-0.0903737 9.62238 0.0729435 9.05048 0.47544 8.66718L6.95777 2.17098C9.97972 -0.723659 14.7397 -0.723659 17.7617 2.17098C19.1948 3.60628 20 5.55339 20 7.58372C20 9.61404 19.1948 11.5612 17.7617 12.9965L9.1187 21.6571C8.25928 22.5186 7.09298 23.0018 5.87738 23Z"
                    fill="#047BAE"
                  />
                </svg>
              </span>
              <h1 class="font-24 text-center mb-0 mx-lg-4">
                <span class="text-primary">{{ $t("uploadPackingList") }}</span>
                {{ $t("companyInfoDropFile") }}
              </h1>
            </div>
            <ul class="file-list">
              <li v-for="(file, index) in files" :key="index">
                {{ file.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-100 mt-5" dir="ltr">
        <div @dragover.prevent @drop.prevent>
          <div
            class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column"
            @dragleave="fileDragOut"
            @dragover="fileDragIn"
            @drop="handleFileDrop"
          >
            <div
              class="w-100 file-wrapper d-flex justify-content-center align-items-center flex-column flex-lg-row"
            >
              <input
                type="file"
                name="file-input"
                multiple="True"
                @change="handleFileInput"
              />
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.87738 23C4.02337 23.0013 2.35136 21.8828 1.64169 20.1665C0.932015 18.4503 1.3246 16.4747 2.63622 15.1617L9.1187 8.66718C9.71831 8.08691 10.6714 8.09521 11.2609 8.68583C11.8503 9.27646 11.8586 10.2315 11.2795 10.8323L4.79699 17.327C4.20459 17.9256 4.20657 18.8914 4.80141 19.4876C5.39625 20.0838 6.36016 20.0861 6.95777 19.4927L15.6012 10.8321C16.461 9.97088 16.9441 8.8026 16.9441 7.58441C16.9441 6.36621 16.461 5.19793 15.6012 4.33669C13.7876 2.60073 10.9323 2.60073 9.1187 4.33669L2.63622 10.8315C2.25383 11.235 1.68312 11.3988 1.14553 11.2595C0.607945 11.1202 0.188084 10.6996 0.0488551 10.161C-0.0903737 9.62238 0.0729435 9.05048 0.47544 8.66718L6.95777 2.17098C9.97972 -0.723659 14.7397 -0.723659 17.7617 2.17098C19.1948 3.60628 20 5.55339 20 7.58372C20 9.61404 19.1948 11.5612 17.7617 12.9965L9.1187 21.6571C8.25928 22.5186 7.09298 23.0018 5.87738 23Z"
                    fill="#047BAE"
                  />
                </svg>
              </span>
              <h1 class="font-24 text-center mb-0 mx-lg-4">
                <span class="text-primary">{{ $t("uploadInvoice") }}</span>
                {{ $t("companyInfoDropFile") }}
              </h1>
            </div>
            <ul class="file-list">
              <li v-for="(file, index) in files" :key="index">
                {{ file.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          {{ $t("submit") }}
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.file-list {
  list-style: none;
}
.container {
  min-height: 150px;
}

.file-wrapper {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  overflow: hidden;
  display: flex;
}

.file-wrapper input {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  font-size: 300px;
  height: 200px;
}
</style>

<script>
export default {
  name: "ShippingForm",
  data() {
    return {
      currentLanguage: localStorage.currentLanguage,
      files: [],
      color: "#444444",
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.$router.push({ path: "/service-form/preview" });
    },
    handleFileDrop(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach((f) => {
        this.files.push(f);
      });
      this.color = "#444444";
    },
    handleFileInput(e) {
      let files = e.target.files;
      files = e.target.files;
      if (!files) return;
      [...files].forEach((f) => {
        this.files.push(f);
      });
    },
    removeFile(fileKey) {
      this.files.splice(fileKey, 1);
    },
    fileDragIn() {
      // alert("oof")
      // alert("color")
      this.color = "white";
    },
    fileDragOut() {
      this.color = "#444444";
    },
  },
};
</script>