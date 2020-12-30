<template>
  <div
    class="d-flex mt-5 mt-lg-6 flex-column justify-content-center text-white text-center align-items-center"
  >
    <h1 class="font-weight-normal px-5 px-xl-6" style="font-size: 46px">
      {{ $t("gallery") }}
    </h1>
    <h4 class="font-weight-normal pt-4 px-3 px-xl-7" style="font-size: 20px">
      {{ $t("galleryText") }}
    </h4>
    <div
      class="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center mt-5 mt-lg-9"
    >
      <div>
        <img
          src="../../assets/galleryImage1.jpeg"
          width="225"
          height="285"
          style="object-fit: cover;border-radius:12px"
           class="border-primary"
        />
      </div>
      <div class="ml-lg-5 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage2.jpeg"
          width="225"
          height="285"
          style="object-fit: cover;border-radius:12px"
          class="border-primary"
        />
      </div>
      <div class="ml-lg-5 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage3.jpeg"
          width="225"
          height="285"
          style="object-fit: cover;border-radius:12px"
          class="border-primary"
        />
      </div>
      <div class="ml-lg-5 mt-5 mt-lg-0">
        <img
          src="../../assets/galleryImage4.jpeg"
          width="225"
          height="285"
          style="object-fill:cover;border-radius:12px"
          class="border-primary"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
};
</script>