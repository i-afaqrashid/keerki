<template>
  <div
    class="w-90 d-flex justify-content-center align-items-center flex-column pt-5"
  >
    <div
      class="w-100 client-details-card pt-5 pb-1 d-flex flex-column justify-content-center align-items-center"
    >
      <div
        class="w-90 d-flex justify-content-center flex-column align-items-center"
      >
        <div
          class="d-flex justify-content-between flex-column flex-sm-row w-75-resp align-items-center"
        >
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Name:</span> David Smith Will
          </p>
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Address:</span> Guangzhou, street no
            15
          </p>
        </div>
        <div
          class="d-flex justify-content-between w-75-resp flex-column flex-sm-row pt-4 align-items-center"
        >
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Company Name:</span> Shudi
          </p>
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Email:</span> david@email.com
          </p>
        </div>
        <div
          class="d-flex justify-content-between w-75-resp flex-column flex-sm-row pt-4 align-items-center"
        >
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Phone:</span> 187171717
          </p>
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Whatsapp:</span> 1123232323
          </p>
        </div>
        <div
          class="d-flex justify-content-between w-75-resp flex-column flex-sm-row pt-4 align-items-center"
        >
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Balance:</span> $1873
          </p>
          <p class="w-100 font-weight-bold">
            <span class="font-weight-light">Membership:&nbsp;</span>
            <button class="btn btn-dark px-4 outline-none py-0">VIP</button>
          </p>
        </div>
      </div>
      <div class="w-90 d-flex align-items-center">
        <button
          class="btn p-0 mb-0 outline-none d-flex align-items-center justify-content-around"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V20C1 20.5304 1.21071 21.0391 1.58579 21.4142C1.96086 21.7893 2.46957 22 3 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V13"
              stroke="#FFB800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 2.49998C17.8978 2.10216 18.4374 1.87866 19 1.87866C19.5626 1.87866 20.1022 2.10216 20.5 2.49998C20.8978 2.89781 21.1213 3.43737 21.1213 3.99998C21.1213 4.56259 20.8978 5.10216 20.5 5.49998L11 15L7 16L8 12L17.5 2.49998Z"
              stroke="#FFB800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="mb-0 w-100">Edit</p>
        </button>
      </div>
    </div>
    <div class="w-90 d-flex justify-content-end align-items-center pt-9">
      <button
        class="outline-none justify-content-center d-flex align-items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="mx-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 6L12 2L8 6"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2V15"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="mb-0">Export CSV</p>
      </button>
    </div>
    <DetailedClientsTable />
  </div>
</template>
<script>
import DetailedClientsTable from "./detailedClientTable";
export default {
  name: "ClientDetailed",
  components: {
    DetailedClientsTable,
  },
};
</script>
<style scoped>
.client-details-card {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
.w-75-resp {
  width: 100%;
}
@media (max-width: 1200px) and (min-width: 992px) {
  .w-75-resp {
    width: 75%;
  }
}
@media (min-width: 1200px) {
  .w-75-resp {
    width: 75%;
  }
}
</style>