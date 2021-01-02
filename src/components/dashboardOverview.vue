<template>
  <div class="d-flex flex-column">
    <b-modal id="entry-modal" hide-footer centered size="lg" v-model="visible">
      <div
        class="d-flex flex-column py-4 px-5 align-items-center justify-content-center"
      >
        <div class="align-self-start">
          <p class="first-modal-header">{{ this.data[index].heading }}</p>
          <p class="first-modal-body mb-0">{{ this.data[index].body }}</p>
        </div>
        <img :src="this.data[index].img" class="mt-16 w-100" />
        <div
          class="d-flex justify-content-between align-items-center flex-column flex-lg-row w-100 mt-5"
        >
          <div class="d-flex justify-content-center w-100 pl-lg-9">
            <button
              class="rounded-circle ml-2 faded-circle outline-none active-circle"
              @click="changeSlide(0, 'active-circle0')"
              id="active-circle0"
            ></button>
            <button
              class="rounded-circle ml-2 faded-circle outline-none"
              @click="changeSlide(1, 'active-circle1')"
              id="active-circle1"
            ></button>
            <button
              class="rounded-circle ml-2 faded-circle outline-none"
              @click="changeSlide(2, 'active-circle2')"
              id="active-circle2"
            ></button>
            <button
              class="rounded-circle ml-2 faded-circle outline-none"
              @click="changeSlide(3, 'active-circle3')"
              id="active-circle3"
            ></button>
            <button
              class="rounded-circle ml-2 faded-circle outline-none"
              @click="changeSlide(4, 'active-circle4')"
              id="active-circle4"
            ></button>
          </div>
          <div class="d-flex flex-column flex-lg-row">
            <button
              v-if="index != 0"
              class="btn btn-outline-primary border-0 mr-lg-3 mt-4 mt-lg-0"
              @click="prev"
            >
              Previous
            </button>
            <div
              v-else
              class="btn border-0 mr-0 outline-none mt-4 mt-lg-0 bg-transparent text-white"
            >
              Previous
            </div>
            <button
              v-if="index != 4"
              class="btn btn-primary mt-4 mt-lg-0"
              @click="next"
            >
              Next
            </button>
            <button
              v-if="index >= 4"
              class="btn btn-primary mt-4 mt-lg-0"
              @click="done"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </b-modal>
    <div class="d-flex flex-column flex-xl-row">
      <div
        class="d-flex justify-content-around align-items-center flex-column flex-lg-row pt-lg-9 pt-11 px-0 w-100"
      >
        <DashboardCard
          v-bind:title="`${$t('overViewOrderHistory')}`"
          v-bind:footer="`${$t('cardClickHere')}`"
          v-on:click.native="orderHistory"
        />
        <DashboardCard
          v-bind:title="`${$t('overViewNotification')}`"
          v-bind:footer="`${$t('cardClickHere')}`"
          v-on:click.native="notification"
          icon="<svg width='37' height='41' viewBox='0 0 37 41' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18.5 41C21.417 41 23.7832 38.7058 23.7832 35.875H13.2168C13.2168 38.7058 15.583 41 18.5 41ZM36.2889 29.0115C34.6932 27.3491 31.7076 24.8482 31.7076 16.6562C31.7076 10.4342 27.2082 5.45332 21.1412 4.23133V2.5625C21.1412 1.14752 19.9585 0 18.5 0C17.0415 0 15.8588 1.14752 15.8588 2.5625V4.23133C9.79181 5.45332 5.29236 10.4342 5.29236 16.6562C5.29236 24.8482 2.30677 27.3491 0.711149 29.0115C0.215614 29.528 -0.00407235 30.1454 5.71011e-05 30.75C0.00914189 32.0633 1.07206 33.3125 2.65116 33.3125H34.3488C35.9279 33.3125 36.9917 32.0633 36.9999 30.75C37.0041 30.1454 36.7844 29.5272 36.2889 29.0115Z' fill='#F8964C'/></svg>"
        />
      </div>
      <div
        class="d-flex justify-content-around align-items-center flex-column flex-lg-row pt-xl-9 pt-lg-0 px-0 w-100"
      >
        <DashboardCard
          v-bind:title="`${$t('overViewAccount')}`"
          v-bind:footer="`${$t('cardClickHere')}`"
          v-on:click.native="account"
          icon='<svg width="39" height="43" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 24.1875C25.5557 24.1875 30.4688 18.7705 30.4688 12.0938C30.4688 5.41699 25.5557 0 19.5 0C13.4443 0 8.53125 5.41699 8.53125 12.0938C8.53125 18.7705 13.4443 24.1875 19.5 24.1875ZM29.25 26.875H25.0529C23.3619 27.7316 21.4805 28.2188 19.5 28.2188C17.5195 28.2188 15.6457 27.7316 13.9471 26.875H9.75C4.36465 26.875 0 31.6873 0 37.625V38.9688C0 41.1943 1.6377 43 3.65625 43H35.3438C37.3623 43 39 41.1943 39 38.9688V37.625C39 31.6873 34.6354 26.875 29.25 26.875Z" fill="#20A044"/>
      </svg>'
        />
        <DashboardCard
          v-bind:title="`${$t('overViewOrderForm')}`"
          v-bind:footer="`${$t('cardClickHere')}`"
          v-on:click.native="form"
          icon='<svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.25 5.5H21.25L16.25 0H3.75C1.67891 0 0 1.8468 0 4.125V28.875C0 31.1532 1.67891 33 3.75 33H36.25C38.3211 33 40 31.1532 40 28.875V9.625C40 7.3468 38.3211 5.5 36.25 5.5ZM28.75 19.9375C28.75 20.6972 28.1906 21.3125 27.5 21.3125H21.875V27.5C21.875 28.2597 21.3156 28.875 20.625 28.875H19.375C18.6844 28.875 18.125 28.2597 18.125 27.5V21.3125H12.5C11.8094 21.3125 11.25 20.6972 11.25 19.9375V18.5625C11.25 17.8028 11.8094 17.1875 12.5 17.1875H18.125V11C18.125 10.2403 18.6844 9.625 19.375 9.625H20.625C21.3156 9.625 21.875 10.2403 21.875 11V17.1875H27.5C28.1906 17.1875 28.75 17.8028 28.75 18.5625V19.9375Z" fill="#FFC107"/>
      </svg>'
        />
      </div>
    </div>
    <div
      class="text-dark d-none d-lg-flex justify-content-end align-items-center mt-14"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 15C30 23.2861 23.2837 30 15 30C6.71631 30 0 23.2861 0 15C0 6.71873 6.71631 0 15 0C23.2837 0 30 6.71873 30 15ZM15.4025 4.95968C12.1063 4.95968 10.004 6.34821 8.35319 8.81601C8.13931 9.13573 8.21087 9.56692 8.5174 9.79935L10.6161 11.3907C10.9309 11.6294 11.3795 11.5726 11.6241 11.2623C12.7046 9.89189 13.4454 9.0972 15.09 9.0972C16.3256 9.0972 17.854 9.89244 17.854 11.0906C17.854 11.9964 17.1062 12.4616 15.8862 13.1456C14.4634 13.9432 12.5806 14.9359 12.5806 17.4194V17.6613C12.5806 18.0621 12.9056 18.3871 13.3065 18.3871H16.6935C17.0944 18.3871 17.4194 18.0621 17.4194 17.6613V17.5807C17.4194 15.8592 22.4508 15.7875 22.4508 11.129C22.4508 7.62085 18.8118 4.95968 15.4025 4.95968ZM15 19.9597C13.4658 19.9597 12.2177 21.2078 12.2177 22.7419C12.2177 24.276 13.4658 25.5242 15 25.5242C16.5342 25.5242 17.7823 24.276 17.7823 22.7419C17.7823 21.2078 16.5342 19.9597 15 19.9597Z"
          fill="#0278AE"
        />
      </svg>
      <p class="mb-0 ml-2">{{ $t("help") }}</p>
    </div>
  </div>
</template>
<script>
import DashboardCard from "../components/dashboardCard";

export default {
  name: "DashboardOverview",
  data() {
    return {
      visible: true,
      index: 0,
      data: [
        {
          heading: "Welcome to Keerki.",
          body:
            "A new experience designed to help you manage your orders faster!",
          img: "/img/dashboard.620aa608.png",
        },
        {
          heading: "View all orders in one place!",
          body:
            "Check all  your orders and details in orders history page and check their status. ",
          img: "/img/orderhistory.d29eda7c.png",
        },
        {
          heading: "View your orders in templates ",
          body:
            "Even better and faster you can view all your status and orders in templates",
          img: "/img/orderpreview.c81043bc.png",
        },
        {
          heading:
            "Manage your account information and add your company details",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
          img: "/img/account.984f9563.png",
        },
        {
          heading: "Send messages and view notification within one screen",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
        },
      ],
    };
  },
  components: {
    DashboardCard,
  },
  methods: {
    done() {
      this.$bvModal.hide("entry-modal");
      this.index = 0;
    },
    prev() {
      this.index != 0 && this.index--;
            this.changeSlide(this.index, `active-circle${this.index}`);

    },
    next() {
      this.index < 5 && this.index++;
            this.changeSlide(this.index, `active-circle${this.index}`);

    },
    changeSlide(currentIndex, id) {
      var elems = document.querySelectorAll(".active-circle");

      [].forEach.call(elems, function (el) {
        el.classList.remove("active-circle");
      });
      this.index = currentIndex;
      document.getElementById(id).classList.add("active-circle");
    },
    orderHistory() {
      console.log(this.data);
      this.$router.push({ path: "/dashboard/order-history" }).catch(() => {});
      document.getElementsByClassName("side-bar")[0].classList.add("d-none");
    },
    notification() {
      this.$router.push({ path: "/dashboard/notifications" }).catch(() => {});
      document.getElementsByClassName("side-bar")[0].classList.add("d-none");
    },
    account() {
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
      document.getElementsByClassName("side-bar")[0].classList.add("d-none");
    },
    form() {
      this.$router.push({ path: "/dashboard/order-form" }).catch(() => {});
    },
  },
};
</script>

