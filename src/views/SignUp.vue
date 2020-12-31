<template>
  <div class="d-flex w-100 min-vh-100">
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
    <div
      class="w-66 pt-lg-8 bg-white text-left flex-column d-flex justify-content-center align-items-center"
    >
      <img
        class="d-block d-lg-none"
        src="../assets/logoDark.png"
        width="158"
        height="80"
      />
      <div>
        <h1 class="fs-30">{{$t("signUpHeading")}}</h1>
        <p class="font-weight-lighter fs-18">
          {{ $t("signUpdummy") }}
        </p>
        <p class="horizontal-line"></p>
        <div>
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              :label="`${$t('yourName')}`"
              label-for="input-1"
            >
              <b-form-input
                class="form-input"
                id="input-1"
                v-model="form.name"
                :placeholder="`${$t('fullName')}`"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              :label="`${$t('email')}`"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                :placeholder="`${$t('enterEmail')}`"
                required
                class="form-input"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              :label="`${$t('phone')}`"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.number"
                type="text"
                :placeholder="`${$t('phonePlaceholder')}`"
                required
                class="form-input"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              :label="`${$t('createPassword')}`"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.password"
                type="password"
                :placeholder="`${$t('enterPassword')}`"
                required
                class="form-input"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-5"
              :label="`${$t('confirmPassword')}`"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="form.confirmPassword"
                type="password"
                :placeholder="`${$t('confirmPasswordPlaceholder')}`"
                required
                class="form-input"
              ></b-form-input>
            </b-form-group>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" required
              >{{$t('termsAndConditions')}}</b-form-checkbox
            >
            <b-button
              size="lg"
              class="w-100 bg-info mt-11 text-white py-3 mb-5"
              type="submit"
              >{{$t('registerAccountBtn')}}</b-button
            >
            <div
              class="d-flex align-items-center text-center separator font-weight-lighter text-black"
            >
              {{$t('or')}}
            </div>
            <button
              type="button"
              class="btn w-100 btn-white d-flex align-items-center justify-content-between shadow-sm form-input mt-5"
            >
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8913 13.3885H29.7502V13.3332H17.0002V18.6665H25.0065C23.8384 21.7712 20.6998 23.9998 17.0002 23.9998C12.306 23.9998 8.50016 20.4178 8.50016 15.9998C8.50016 11.5818 12.306 7.99984 17.0002 7.99984C19.167 7.99984 21.1382 8.76917 22.6392 10.0258L26.6462 6.2545C24.1161 4.03517 20.7317 2.6665 17.0002 2.6665C9.17662 2.6665 2.8335 8.6365 2.8335 15.9998C2.8335 23.3632 9.17662 29.3332 17.0002 29.3332C24.8237 29.3332 31.1668 23.3632 31.1668 15.9998C31.1668 15.1058 31.0691 14.2332 30.8913 13.3885Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.4668 9.79384L9.12125 13.0065C10.3807 10.0718 13.4308 7.99984 17 7.99984C19.1668 7.99984 21.1381 8.76917 22.6391 10.0258L26.6461 6.2545C24.116 4.03517 20.7315 2.6665 17 2.6665C11.5586 2.6665 6.83971 5.55784 4.4668 9.79384Z"
                  fill="#FF3D00"
                />
                <path
                  d="M17.0001 29.3333C20.6593 29.3333 23.9842 28.0153 26.4981 25.872L22.1135 22.38C20.6434 23.4322 18.847 24.0013 17.0001 24C13.3153 24 10.1866 21.7886 9.00793 18.7026L4.38818 22.0526C6.73277 26.3706 11.4942 29.3333 17.0001 29.3333Z"
                  fill="#4CAF50"
                />
                <path
                  d="M30.8911 13.3888H29.75V13.3335H17V18.6668H25.0063C24.4476 20.1444 23.4411 21.4356 22.1113 22.3808L22.1135 22.3795L26.498 25.8715C26.1878 26.1368 31.1667 22.6668 31.1667 16.0002C31.1667 15.1062 31.0689 14.2335 30.8911 13.3888Z"
                  fill="#1976D2"
                />
              </svg>
              <span class="flex-grow-1">{{$t('registerWithGoogle')}}</span>
            </button>
            <button
              type="button"
              class="btn w-100 btn-white d-flex align-items-center justify-content-between shadow-sm form-input mt-3 mb-5"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="url(#paint0_linear)" />
                <path
                  d="M18.6289 15.625L19.0117 13.1094H16.5781V11.4688C16.5781 10.7578 16.9062 10.1016 18 10.1016H19.1211V7.94141C19.1211 7.94141 18.1094 7.75 17.1523 7.75C15.1562 7.75 13.8438 8.98047 13.8438 11.168V13.1094H11.6016V15.625H13.8438V21.75H16.5781V15.625H18.6289Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-0.000188651"
                    y1="0"
                    x2="-0.000188651"
                    y2="30.0004"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00B2FF" />
                    <stop offset="1" stop-color="#006AFF" />
                  </linearGradient>
                </defs>
              </svg>

              <span class="flex-grow-1">{{$t('registerWithFacebook')}} </span>
            </button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$router.push({ path: "success" });
    },
  },
};
</script>