<template>
  <div
    class="d-flex justify-content-center align-items-center mt-xl-8 mt-5 px-lg-8"
  >
    <div
      class="d-flex flex-column w-100 justify-content-center align-items-center flex-lg-row border-secondary bg-warning"
      style="border-radius: 33px"
    >
      <div style="max-width:100%">
        <img
          src="https://s3-alpha-sig.figma.com/img/d879/2c40/43e06ab6fdbaee0dc45666f2b048ef18?Expires=1610323200&Signature=CirXP8LwD2x4mC-bP9tLY3190nVWkB2CEey6v8oXQdPe0DltOO9CEQB2hXwubL4c7U6WuP-XSNNt~WFAr6nw5z3tw01j43x1AR08FupB1HnEZHg~DY8uj0e3zRF2W5GN3q2CyP66e8~GBJE~7mNhRWUta3SiO3G3cFLS1mdLubuHoxHgcgQ6YlsCWBGXd2lkqqmNduyt8YPnqJKCOFZHt~RDrjQ4ksXQUzDY9i9pdDvYWe17pWDymtWJKP7WVgkSsUUiAK6oKzW-ct~Tr9MM2nwuNx0UEoQr54wpeR3HKsqmMh1RaYEZO3EF2buMhPgWElDV2oPit6BjVL0WLCDssA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          class="border-primary"
          style="max-width: 100%; border-radius: 33px 0px 0px 33px"
        />
      </div>
      <div
        class="d-flex flex-grow-1 w-100 text-white px-9 text-center flex-column justify-content-center align-items-center"
      >
        <h1>{{ $t("containerOffer") }}</h1>
        <b-button
          class="p-3 mt-5 mb-4"
          style="width: 224px"
          squared
          variant="secondary"
          >{{ $t("tryForFree") }}</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>