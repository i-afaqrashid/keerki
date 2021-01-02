<template>
  <form
    class="px-lg-9 pb-11 px-4 d-flex flex-column justify-content-center align-items-center"
    @submit="formSubmit"
  >
    <h1 class="w-100 border-3 text-right font-24 py-2">Company Info</h1>
    <input class="input-form px-lg-5 px-3 mt-15" placeholder="Company Name" />
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-3" placeholder="Country" />
      <input
        class="input-form px-3 px-lg-5 mt-3 ml-lg-4"
        placeholder="Contact Person"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-3" placeholder="City" />
      <input
        class="input-form px-3 px-lg-5 mt-3 ml-lg-4"
        placeholder="Province"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-3" placeholder="Post Code" />
      <input
        class="input-form px-3 px-lg-5 mt-3 ml-lg-4"
        placeholder="Dist&Street"
      />
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-3" placeholder="Phone Number" />
      <input class="input-form px-3 px-lg-5 mt-3 ml-lg-4" placeholder="Email" />
    </div>
    <div
      class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column flex-lg-row"
    >
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
      <h1 class="font-24 text-center mb-0">
        <span class="text-primary">Add logo</span> or drop it right here
      </h1>
    </div>
    <h1 class="w-100 border-3 text-right font-24 py-2 mt-15">Shipping Info</h1>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-15" placeholder="Port" />
      <input
        class="input-form px-3 px-lg-5 mt-15 ml-lg-4"
        placeholder="Country"
      />
    </div>
    <h1 class="w-100 border-3 text-right font-24 py-2 mt-15">Shipping Info</h1>
    <div
      class="d-flex w-100 justify-content-center align-items-center flex-lg-row flex-column mt-5"
    >
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        SAR
      </button>
      <button class="w-100 btn btn-primary py-4 border-26" type="button">
        AED
      </button>

      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        USD
      </button>
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        EURO
      </button>
    </div>
    <h1 class="w-100 border-3 text-right font-24 py-2 mt-15">About products</h1>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-15" placeholder="Unit Price" />
      <input
        class="input-form px-3 px-lg-5 mt-15 ml-lg-3"
        placeholder="Quantity"
      />
      <input class="input-form px-3 px-lg-5 mt-15 ml-lg-3" placeholder="Item" />
    </div>
    <textarea
      class="input-text-area py-5 px-3 px-lg-5 mt-15 ml-lg-3"
      placeholder="Description"
    ></textarea>
    <div class="d-flex align-self-start mt-15 ml-5">
      <button
        class="bg-danger rounded-button d-flex outline-none justify-content-center align-items-center"
        type="button"
      >
        -
      </button>
      <button
        class="bg-primary ml-2 rounded-button outline-none d-flex justify-content-center align-items-center"
        type="button"
      >
        +
      </button>
    </div>
    <h1 class="w-100 border-3 text-right font-24 py-2 mt-15">Remarks</h1>
    <div class="d-flex flex-lg-row flex-column justify-content-between w-100">
      <input class="input-form px-3 px-lg-5 mt-3" placeholder="Other" />
      <select
        class="form-control input-form px-3 px-lg-5 mt-3 ml-lg-4"
        id="tradingTerm"
      >
        <option>Trading Term</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <h1 class="w-100 font-weight-light text-right font-24 py-2 mt-15">
      Payment term
    </h1>
    <div
      class="d-flex w-100 justify-content-center align-items-center flex-lg-row flex-column mt-4"
    >
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        LC
      </button>
      <button class="w-100 btn btn-primary py-4 border-26" type="button">
        TT
      </button>
    </div>
    <h1 class="w-100 font-weight-light text-right font-24 py-2 mt-15">
      Shipping method
    </h1>
    <div
      class="d-flex w-100 justify-content-center align-items-center flex-lg-row flex-column mt-4"
    >
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        BY AIR
      </button>
      <button class="w-100 btn btn-primary py-4 border-26" type="button">
        BY SEA
      </button>
    </div>
    <h1 class="w-100 font-weight-light text-right font-24 py-2 mt-15">
      Delivery Time
    </h1>
    <div
      class="d-flex w-100 justify-content-center align-items-center flex-lg-row flex-column mt-4"
    >
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        30 DAYS
      </button>
      <button
        class="w-100 btn btn-outline-primary py-4 border-26"
        type="button"
      >
        20 DAYS
      </button>
      <button class="w-100 btn btn-primary py-4 border-26" type="button">
        10 DAYS
      </button>
    </div>
    <textarea
      class="input-text-area py-5 px-3 px-lg-5 mt-15 ml-lg-3"
      placeholder="Others"
    ></textarea>
    <div class="w-100 d-flex flex-column flex-lg-row justify-content-center mt-5 align-items-center font-weight-bolder">
      <button
        class="btn btn-outline-secondary w-100 text-dark bg-white form-buttons"
        type="reset"
      >
        Reset
      </button>
      <button
        class="btn btn-secondary w-100 text-dark ml-lg-4 mt-4 mt-lg-0 form-buttons"
        type="submit"
      >
        Save and Continue
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "FormBody",
  methods:{
    formSubmit(e){
      e.preventDefault();
      this.$router.push({ path: "/form/preview" });
    }
  }
};
</script>