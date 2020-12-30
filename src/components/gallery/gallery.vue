<template>
  <div
    class="d-flex mt-5 mt-lg-6 flex-column justify-content-center text-white text-center align-items-center"
  >
    <h1 class="font-weight-normal px-5 px-xl-6 fs-46">
      {{ $t("gallery") }}
    </h1>
    <h4 class="font-weight-normal pt-4 px-3 px-xl-7 fs-20" >
      {{ $t("galleryText") }}
    </h4>
    <div
      class="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center mt-11"
    >
      <div>
        <img
          src="../../assets/galleryImage1.jpeg"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage2.jpeg"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage3.jpeg"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage4.jpeg"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5 w-100"
    >
      <div>
        <img
          src="../../assets/galleryImage5.jpeg"
          width="350px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-4 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage6.jpeg"
          width="225px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-4 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage7.jpeg"
          width="350px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center w-100 mt-5">
      <b-button
        class="py-3 w-152"
        squared
        variant="outline-light"
        >{{ $t("seeMore") }}</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
};
</script>