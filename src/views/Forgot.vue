<template>
  <div class="d-flex w-100 min-vh-100" dir="ltr">
    <div
      class="d-none w-33 sign-up-image d-lg-flex justify-content-center align-items-center"
    >
      <img
        src="../assets/logo.png"
        width="304"
        height="131"
        class="login-logo"
      />
    </div>
    <div class="w-66 bg-white">
      <router-link to="/login">
        <button class="d-flex pt-5 ml-4 ml-lg-5 outline-none">
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
          <p class="font-weight-lighter ml-3">{{ $t("back") }}</p>
        </button>
      </router-link>

      <div
        class="w-100 pt-lg-8 px-xl-6 px-lg-9 px-5 px-sm-9 px-md-9 text-left flex-column d-flex justify-content-center align-items-center"
      >
        <img
          class="d-block d-lg-none"
          src="../assets/logoDark.png"
          width="158"
          height="80"
        />
        <div>
          <h1 class="fs-30">{{ $t("forgotPasswordHeading") }}</h1>
          <p class="font-weight-lighter fs-18">
            {{ $t("forgotPasswordDescription") }}
          </p>
          <p class="horizontal-line"></p>
          <div dir="auto">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-8"
                :label="`${$t('loginEmail')}`"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="form.email"
                  
                  type="email"
                  :placeholder="`${$t('enterEmail')}`"
                  required
                  class="form-input"
                ></b-form-input>
              </b-form-group>
              <b-button
                v-b-modal.modal-center
                size="lg"
                type="submit"
                class="w-100 bg-info text-white py-3 mb-5"
                >{{ $t("requestNewPassword") }}</b-button
              >
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forgot",
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$router.push({ path: "reset" });
    },
  },
  data() {
    return {
      form: {
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
};
</script>