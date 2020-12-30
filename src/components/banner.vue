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
        <b-button class="p-3 mt-5 mb-4 btn-width" squared variant="secondary">{{
          $t("tryForFree")
        }}</b-button>
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
.w-152
{
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
.fs-20 {
  font-size: 20px;
}
.btn-width {
  width: 224px;
}
@media only screen and (max-width: 576px) {
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
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
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
}
</style>