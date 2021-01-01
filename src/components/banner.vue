<template>
  <div
    class="d-flex justify-content-center align-items-center mt-xl-8 mt-5 px-xl-8 px-lg-11"
  >
    <div
      class="d-flex flex-column w-100 justify-content-center align-items-center padding flex-lg-row border-secondary bg-warning bordered"
    >
      <div class="mw-100">
        <img
          src="https://s3-alpha-sig.figma.com/img/d879/2c40/43e06ab6fdbaee0dc45666f2b048ef18?Expires=1610323200&Signature=CirXP8LwD2x4mC-bP9tLY3190nVWkB2CEey6v8oXQdPe0DltOO9CEQB2hXwubL4c7U6WuP-XSNNt~WFAr6nw5z3tw01j43x1AR08FupB1HnEZHg~DY8uj0e3zRF2W5GN3q2CyP66e8~GBJE~7mNhRWUta3SiO3G3cFLS1mdLubuHoxHgcgQ6YlsCWBGXd2lkqqmNduyt8YPnqJKCOFZHt~RDrjQ4ksXQUzDY9i9pdDvYWe17pWDymtWJKP7WVgkSsUUiAK6oKzW-ct~Tr9MM2nwuNx0UEoQr54wpeR3HKsqmMh1RaYEZO3EF2buMhPgWElDV2oPit6BjVL0WLCDssA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          class="border-primary respImage"
        />
      </div>
      <div
        class="d-flex pt-5 pt-lg-0 flex-grow-1 w-100 text-white px-xl-9 text-center flex-column justify-content-center align-items-center"
      >
        <h1>{{ $t("containerOffer") }}</h1>
        <router-link to="/sign-up">
          <b-button
            class="p-3 mt-5 mb-4 btn-width"
            squared
            variant="secondary"
            >{{ $t("tryForFree") }}</b-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style>
.border-radius-13 {
  border-radius: 13.62px !important;
}
.w-21 {
  width: 21%;
}
.fs-14 {
  font-size: 14px;
}
.fs-43 {
  font-size: 18px;
}
.fs-13 {
  font-size: 13px;
}
.dashboard-card {
  margin-bottom: 40px;
  width: 219px;
  height: 219px;
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.dashboard-btn {
  width: 176px !important;
  height: 40px !important;
  outline: none !important;
}
btn:focus,
a:focus,
btn-secondary:focus {
  outline: none !important;
}
.outline-none {
  outline: none !important;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #bababa;
}
.separator::before {
  margin-right: 0.25em;
}
.separator::after {
  margin-left: 0.25em;
}
.modal-input {
  border: 1px solid transparent;
  height: 36px !important;
}
.form-input {
  border: 1px solid transparent;
  height: 64px !important;
  width: 100% !important;
}
.form-input:focus,
.form-input:hover,
.modal-input:focus,
.modal-input:hover {
  background: #ffffff;
  border: 1px solid #1565d8;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  border-radius: 6px;
}
.horizontal-line {
  border: 1px solid #f5f5f5;
}
.fs-30 {
  font-size: 30px;
}
.fs-18 {
  font-size: 18px;
}
.w-66 {
  width: 100%;
}
.w-33 {
  width: 45%;
}
.login-logo {
  opacity: 0.7;
}
.sign-up-image {
  background: linear-gradient(
      0deg,
      rgba(2, 120, 174, 0.9),
      rgba(2, 120, 174, 0.9)
    ),
    url("../assets/login.jpeg");
}
.w-152 {
  width: 152px;
}
.galleryImage {
  object-fit: cover;
  border-radius: 12px;
}
.fs-46 {
  font-size: 46px;
}
.fs-16 {
  font-size: 16px;
}
.lh-32 {
  line-height: 32px;
}
.border-radius-5 {
  border-radius: 50%;
}

.w-22 {
  width: 22rem;
}
.fs-52 {
  font-size: 52px;
}
.introImage {
  mix-blend-mode: hard-light;
  opacity: 0.9;
}
.btn-width-160 {
  width: 160px;
}
.fs-5 {
  font-size: 5vw;
}
.btn-width-135 {
  width: 135px;
}
.fs-28 {
  font-size: 28px;
}
.fs-20 {
  font-size: 20px;
}
.fs-24 {
  font-size: 24px;
  color: #696969;
  line-height: 28px;
}
.btn-width {
  width: 224px;
}
@media only screen and (max-width: 576px) {
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    max-width: 100%;
    border-radius: 0px;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 65%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    max-width: 100%;
    border-radius: 0px;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 70%;
  }
  .fs-43 {
    font-size: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    border-radius: 0px;
    max-width: 100%;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 80%;
  }
  .fs-43 {
    font-size: 35px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .respImage {
    max-width: 35rem;
    border-radius: 33px 0px 0px 33px;
  }
  .bordered {
    border-radius: 33px;
    width: 100%;
  }
  .w-66 {
    width: 55%;
  }
  .fs-13 {
    font-size: 16px;
  }
  .fs-43 {
    font-size: 40px;
  }
}
@media only screen and (min-width: 1200px) {
  .respImage {
    max-width: 35rem;
    border-radius: 33px 0px 0px 33px;
  }
  .bordered {
    border-radius: 33px;
    width: 100%;
  }
  .form-input {
    width: 464px !important;
  }
  .w-66 {
    width: 55%;
  }
  .fs-13 {
    font-size: 16px;
  }
  .fs-43 {
    font-size: 43px;
  }
}
</style>