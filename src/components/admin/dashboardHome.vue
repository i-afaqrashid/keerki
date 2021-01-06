<template>
  <div
    class="pt-9 w-95 d-flex flex-colum justify-content-center align-items-center"
  >
    <div class="w-100 d-flex flex-column align-items-center">
      <div class="resp-search bg-white">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          class="position-absolute mx-4 mt-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 17H29.75"
            stroke="#C5C7CD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.25 8.5H29.75"
            stroke="#C5C7CD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.25 25.5H29.75"
            stroke="#C5C7CD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          class="w-100 px-5 text-center outline-none quick-search"
          placeholder="Quick Search"
        />
        <svg
          width="30"
          height="40"
          viewBox="0 0 28 28"
          class="position-absolute mx-n5 mt-3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.375"
            cy="11.375"
            r="10.625"
            stroke="#C5C7CD"
            stroke-width="1.5"
          />
          <path
            d="M19.25 19.25L26.25 26.25"
            stroke="#C5C7CD"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        class="d-flex pt-9 justify-content-between flex-column flex-lg-row align-items-center w-100"
      >
        <button
          class="admin-card btn btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
        >
          <svg
            width="37"
            height="53"
            viewBox="0 0 37 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.2251 47.0329C10.2261 47.684 10.4187 48.3217 10.7799 48.8641L12.549 51.5234C12.8512 51.978 13.2611 52.3508 13.7422 52.6087C14.2234 52.8666 14.7608 53.0016 15.3067 53.0016H21.6946C22.2405 53.0016 22.7779 52.8666 23.259 52.6087C23.7402 52.3508 24.1501 51.978 24.4523 51.5234L26.2214 48.8641C26.5825 48.3216 26.7755 47.6846 26.7762 47.0329L26.7803 43.0631H10.2199L10.2251 47.0329ZM0.281372 18.2193C0.281372 22.8123 1.9842 27.0026 4.79051 30.2044C6.50059 32.1556 9.17543 36.2321 10.1951 39.6709C10.1992 39.6978 10.2023 39.7247 10.2064 39.7516H26.7938C26.7979 39.7247 26.801 39.6988 26.8052 39.6709C27.8248 36.2321 30.4997 32.1556 32.2097 30.2044C35.016 27.0026 36.7189 22.8123 36.7189 18.2193C36.7189 8.13794 28.5318 -0.0304781 18.4432 0.000576536C7.88356 0.0326664 0.281372 8.58927 0.281372 18.2193ZM18.5001 9.93808C13.934 9.93808 10.2189 13.6533 10.2189 18.2193C10.2189 19.1344 9.4777 19.8756 8.56262 19.8756C7.64754 19.8756 6.90637 19.1344 6.90637 18.2193C6.90637 11.8262 12.107 6.62558 18.5001 6.62558C19.4152 6.62558 20.1564 7.36675 20.1564 8.28183C20.1564 9.1969 19.4152 9.93808 18.5001 9.93808Z"
              fill="#9FA2B4"
            />
          </svg>
          <p class="font-24 mb-0">Contact</p>
        </button>
        <button
          class="admin-card btn mt-5 mt-lg-0 btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
        >
          <svg
            width="53"
            height="39"
            viewBox="0 0 53 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M7.94976 16.8504C10.873 16.8504 13.2498 14.4737 13.2498 11.5504C13.2498 8.62716 10.873 6.25044 7.94976 6.25044C5.02647 6.25044 2.64976 8.62716 2.64976 11.5504C2.64976 14.4737 5.02647 16.8504 7.94976 16.8504ZM45.0498 16.8504C47.973 16.8504 50.3498 14.4737 50.3498 11.5504C50.3498 8.62716 47.973 6.25044 45.0498 6.25044C42.1265 6.25044 39.7498 8.62716 39.7498 11.5504C39.7498 14.4737 42.1265 16.8504 45.0498 16.8504ZM47.6998 19.5004H42.3998C40.9423 19.5004 39.6255 20.0884 38.6649 21.0408C42.0023 22.8709 44.3707 26.1751 44.8841 30.1004H50.3498C51.8155 30.1004 52.9998 28.9162 52.9998 27.4504V24.8004C52.9998 21.8772 50.623 19.5004 47.6998 19.5004ZM26.4998 19.5004C31.6259 19.5004 35.7748 15.3515 35.7748 10.2254C35.7748 5.09935 31.6259 0.950439 26.4998 0.950439C21.3737 0.950439 17.2248 5.09935 17.2248 10.2254C17.2248 15.3515 21.3737 19.5004 26.4998 19.5004ZM32.8598 22.1504H32.1724C30.4499 22.9786 28.5369 23.4754 26.4998 23.4754C24.4626 23.4754 22.5579 22.9786 20.8271 22.1504H20.1398C14.8729 22.1504 10.5998 26.4236 10.5998 31.6904V34.0754C10.5998 36.27 12.3802 38.0504 14.5748 38.0504H38.4248C40.6193 38.0504 42.3998 36.27 42.3998 34.0754V31.6904C42.3998 26.4236 38.1266 22.1504 32.8598 22.1504ZM14.3346 21.0408C13.374 20.0884 12.0573 19.5004 10.5998 19.5004H5.29976C2.37647 19.5004 -0.000244141 21.8772 -0.000244141 24.8004V27.4504C-0.000244141 28.9162 1.18397 30.1004 2.64976 30.1004H8.1071C8.62882 26.1751 10.9973 22.8709 14.3346 21.0408Z"
              fill="#9FA2B4"
            />
          </svg>

          <p class="font-24 mb-0">Clients</p></button
        ><button
          class="admin-card btn mt-5 mt-lg-0 btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
        >
          <svg
            width="53"
            height="37"
            viewBox="0 0 53 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M11.7781 9.66707H41.2226V27.3337H11.7781V9.66707ZM48.5837 18.5004C48.5837 20.9397 50.5611 22.9171 53.0004 22.9171V31.7504C53.0004 34.1897 51.023 36.1671 48.5837 36.1671H4.41703C1.97774 36.1671 0.000366211 34.1897 0.000366211 31.7504V22.9171C2.43965 22.9171 4.41703 20.9397 4.41703 18.5004C4.41703 16.0611 2.43965 14.0837 0.000366211 14.0837V5.25041C0.000366211 2.81112 1.97774 0.83374 4.41703 0.83374H48.5837C51.023 0.83374 53.0004 2.81112 53.0004 5.25041V14.0837C50.5611 14.0837 48.5837 16.0611 48.5837 18.5004ZM44.167 8.93096C44.167 7.71132 43.1783 6.72263 41.9587 6.72263H11.042C9.82239 6.72263 8.8337 7.71132 8.8337 8.93096V28.0698C8.8337 29.2895 9.82239 30.2782 11.042 30.2782H41.9587C43.1783 30.2782 44.167 29.2895 44.167 28.0698V8.93096Z"
              fill="#9FA2B4"
            />
          </svg>

          <p class="font-24 mb-0">Orders</p>
        </button>
      </div>
      <AdminChart/>
    </div>
  </div>
</template>
<script>
import AdminChart from './adminChart'
export default {
  name: "DashboardHome",
  components:{
      AdminChart
  }
};
</script>
<style scoped>
.admin-card {
  background: #ffffff;
  width: 90% !important;
  border: 1px solid #dfe0eb;
  height: 175px !important;
  border-radius: 10px !important;
}
.resp-search {
  width: 80% !important;
}
.quick-search {
  height: 65px !important;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .resp-search {
    width: 50% !important;
  }
  .admin-card {
    width: 30% !important;
  }
}
@media only screen and (min-width: 1200px) {
  .resp-search {
    width: 62% !important;
  }
  .admin-card {
    width: 30% !important;
  }
}
</style>