<template>
  <div class="d-flex flex-lg-row flex-column w-100 bg-white mt-15">
    <div class="w-15 admin-inbox-side border-right py-4">
      <button
        class="w-100 d-flex justify-content-between btn outline-none align-items-center font-weight-bold"
      >
        <span>{{$t('adminMessagesHeading')}}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
            fill="#191919"
          />
        </svg>
      </button>
      <div class="w-100 bg-white mt-15" dir="auto">
        <p class="d-none">{{$t('rtlHelper')}}</p>
        <input
          class="w-100 outline-none search-admin-inbox fs-10 px-2"
          :placeholder="`${$t('adminMessagesSearch')}`"
        />
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          class="position-absolute mx-n5 mt-17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774ZM16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.774 14.8021L16.438 14.4654Z"
            fill="#747F8D"
          />
        </svg>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-4">
        <div class="d-flex align-items-center">
          <button class="btn outline-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.295 4L6 6.2869L3.705 4L3 4.70403L6 7.7L9 4.70403L8.295 4Z"
                fill="#6A7480"
              />
            </svg>
          </button>
          <p class="mb-0 text-muted font-weight-bold">{{$t('adminMessagesOrderMessages')}}</p>
        </div>
        <button class="btn outline-none">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 10H10V15H8V10H3V8H8V3H10V8H15V10Z" fill="#6A7480" />
          </svg>
        </button>
      </div>
      <button
        class="w-100 outline-none btn d-flex justify-content-between align-items-center mt-4"
      >
        <div class="d-flex align-items-center">
          <div class="btn outlin-none">
            <img src="../../assets/AvataradminInbox.png" />
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              class="align-self-end mt-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#43B581" />
            </svg>
          </div>
          <div class="d-flex flex-column align-items-center">
            <p class="mb-0">Customer Name</p>
            <p class="mb-0 font-weight-light">#order number</p>
          </div>
        </div>
        <div
          class="rounded-button-inbox rounded-circle d-flex justify-content-center align-items-center"
        >
          3
        </div>
      </button>
      <div
        class="w-100 d-flex justify-content-between align-items-center pt-lg-14 pt-4"
      >
        <div class="d-flex align-items-center">
          <button class="btn outline-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.295 4L6 6.2869L3.705 4L3 4.70403L6 7.7L9 4.70403L8.295 4Z"
                fill="#6A7480"
              />
            </svg>
          </button>
          <p class="mb-0 text-muted font-weight-bold">{{$t('adminMessagesCompanyContact')}}</p>
        </div>
        <button class="btn outline-none">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 10H10V15H8V10H3V8H8V3H10V8H15V10Z" fill="#6A7480" />
          </svg>
        </button>
      </div>
      <div class="w-100 d-flex justify-content-center align-items-center pt-2">
        <p class="text-muted font-weight-bold">{{$t('adminMessagesSubjects')}}</p>
      </div>
    </div>
    <div class="pb-4 order-1 order-lg-0 w-75-resp">
      <div class="w-100">
        <div
          class="d-flex justify-content-around flex-column flex-md-row align-items-center border-bottom py-15"
        >
          <div
            class="width-50 px-4 px-lg-0 d-flex justify-content-around align-items-center"
          >
            <div class="d-flex flex-column mx-3">
              <img src="../../assets/messageProfile.png" class="w-100" />
              <p class="btn btn-dark py-0 mt-2">VIP</p>
            </div>
            <div class="w-100">
              <p class="mb-1 text-inbox font-weight-bold">Customer Name</p>
              <p class="mb-0 text-inbox">
                Customer IP location + Device Type + Online status Date of
                Conversation
              </p>
            </div>
          </div>
          <div
            class="width-50 pt-4 pt-md-0 d-flex justify-content-around align-items-center flex-column flex-xl-row"
          >
            <button
              class="d-flex flex-column pt-2 px-2 d-lg-none align-items-center justify-content-center"
              v-on:click="sidebarToggle"
            >
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
            </button>

            <button
              class="btn btn-primary px-0 admin-inbox-button admin-btn-color d-flex justify-content-center align-items-center mt-lg-0 mt-2"
            >
              {{$t('adminMessagesTransferTheChat')}}
            </button>

            <button
              class="btn btn-primary px-0 admin-inbox-button d-flex justify-content-center align-items-center mt-2 mt-xl-0"
            >
              {{$t('adminMessagesMarkAsResolved')}}
            </button>
          </div>
        </div>
      </div>
      <div class="w-100 p-2">
        <div
          class="d-flex flex-column p-4 justify-content-between overflow-scroll"
          style="height: 500px !important"
        >
          <div class="d-flex flex-row-reverse">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Hello, I would like to ask about my order
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <img
                src="../../assets/customerSupport.png"
                class="w-100 rounded-circle"
              />
            </div>
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend">David - Customer Support</p>
                <div
                  class="receive d-flex justify-content-center align-items-center w-100 p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Welcome, my name is David and I will be helping you today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Hi david, Thank you, My order number is: #789789789
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse pt-lg-4">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    I have sent an email as well.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <img
                src="../../assets/customerSupport.png"
                class="w-100 rounded-circle"
              />
            </div>
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend">David - Customer Support</p>
                <div
                  class="receive d-flex justify-content-center align-items-center w-100 p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    I’m checking your order right now and it’s in progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-100 p-2 send-bar d-flex justify-content-between align-items-center"
      >
        <div class="d-flex justify-content-around align-items-center width-25">
          <button class="outline-none">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 2.41699C7.82996 2.41699 2.41663 7.83033 2.41663 14.5003C2.41663 21.1703 7.82996 26.5837 14.5 26.5837C21.17 26.5837 26.5833 21.1703 26.5833 14.5003C26.5833 7.83033 21.17 2.41699 14.5 2.41699ZM20.5416 15.7087H15.7083V20.542H13.2916V15.7087H8.45829V13.292H13.2916V8.45866H15.7083V13.292H20.5416V15.7087Z"
                fill="#4F5660"
              />
            </svg>
          </button>
          <button class="outline-none">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                fill="#CFCFCF"
              />
              <path
                d="M7.59402 17.0598C7.62652 17.1891 8.43758 20.2224 12.9999 20.2224C17.5629 20.2224 18.3732 17.1891 18.4057 17.0598C18.4454 16.9031 18.3746 16.7406 18.2345 16.6597C18.0937 16.5795 17.9175 16.6034 17.8012 16.7153C17.7875 16.729 16.39 18.0558 12.9999 18.0558C9.60974 18.0558 8.21152 16.7291 8.19852 16.7161C8.12919 16.6474 8.03674 16.6113 7.9443 16.6113C7.88363 16.6113 7.82224 16.6265 7.76663 16.6575C7.62508 16.7384 7.5543 16.9024 7.59402 17.0598Z"
                fill="#4F5660"
              />
              <path
                d="M8.66664 12.2782C9.66382 12.2782 10.4722 11.1465 10.4722 9.75043C10.4722 8.35438 9.66382 7.22266 8.66664 7.22266C7.66946 7.22266 6.86108 8.35438 6.86108 9.75043C6.86108 11.1465 7.66946 12.2782 8.66664 12.2782Z"
                fill="#4F5660"
              />
              <path
                d="M17.3333 12.2782C18.3304 12.2782 19.1388 11.1465 19.1388 9.75043C19.1388 8.35438 18.3304 7.22266 17.3333 7.22266C16.3361 7.22266 15.5277 8.35438 15.5277 9.75043C15.5277 11.1465 16.3361 12.2782 17.3333 12.2782Z"
                fill="#4F5660"
              />
            </svg>
          </button>
          <button class="outline-none">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31674 23.6713C-0.81344 20.6097 -0.755101 15.6727 2.39099 12.6222L13.6281 1.72659C16.0022 -0.575427 19.8612 -0.57563 22.2355 1.72659C24.5867 4.00636 24.5896 7.68469 22.2355 9.96715L12.44 19.4557C10.8406 21.0064 8.22754 20.9848 6.65527 19.405C5.14054 17.8831 5.18913 15.4709 6.73306 13.9738L14.4336 6.51738C14.7648 6.19675 15.3074 6.19127 15.6457 6.50515L16.8704 7.64158C17.2087 7.95551 17.2144 8.46992 16.8833 8.79055L9.18357 16.2463C8.91936 16.5025 8.90307 16.9282 9.14886 17.1752C9.38307 17.4105 9.75127 17.4144 9.98929 17.1836L19.7848 7.69505C20.8355 6.67628 20.8355 5.01761 19.7842 3.99828C18.7562 3.0016 17.1079 3.00109 16.0795 3.99828L4.84231 14.8939C2.98001 16.6997 2.95129 19.6226 4.7785 21.4098C6.60047 23.1918 9.54556 23.1941 11.3709 21.4243L20.5884 12.4869C20.9193 12.166 21.462 12.1602 21.8005 12.4739L23.0261 13.6095C23.3646 13.9232 23.3707 14.4376 23.0398 14.7585L13.8223 23.6959C10.6307 26.7904 5.46818 26.7537 2.31674 23.6713Z"
                fill="#4F5660"
              />
            </svg>
          </button>
          <button class="outline-none"
          @click="quickResponses">
            <svg
              width="20"
              height="26"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 15.4H10L9 25L19 10.6H10L11 1Z"
                stroke="#4F5660"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <button class="outline-none">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8565 14.6928L21.7131 22.237C21.4685 22.8241 21.1182 23.3112 20.6973 23.6497C20.2763 23.9882 19.7993 24.1663 19.3138 24.1663H1.95421C1.15026 24.1663 0.649349 22.9454 1.05443 21.9732L4.19783 14.429C4.44246 13.8419 4.79273 13.3549 5.21372 13.0163C5.63471 12.6778 6.11173 12.4997 6.59722 12.4997H23.9568C24.7607 12.4997 25.2616 13.7206 24.8565 14.6928ZM6.59722 10.5552H20.8333V7.63856C20.8333 6.02771 19.9006 4.7219 18.75 4.7219H11.8056L9.02778 0.833008H2.08333C0.932726 0.833008 0 2.13882 0 3.74967V20.6448L2.99813 13.4493C3.74193 11.6642 5.12105 10.5552 6.59722 10.5552Z"
                fill="#4F5660"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <textarea
          v-if="this.$i18n.locale === 'ar'"
          class="w-100 text-right messagebox px-4 py-2 outline-none border-bottom"
          :placeholder="`${$t('adminMessagesPlaceholder')}`"
        ></textarea>
        <textarea
          v-else
          class="w-100 messagebox px-4 py-2 outline-none border-bottom"
          :placeholder="`${$t('adminMessagesPlaceholder')}`"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-outline-primary border-0 outline-none font-weight-bold"
        >
          {{ $t("adminMessagesSend") }}
        </button>
      </div>
    </div>
    <div
      class="py-15 border-left d-flex flex-column w-xl-25 align-items-center"
    >
      <div class="d-flex justify-content-center align-items-center w-100">
        <div
          class="d-flex justify-content-around align-items-center w-100 flex-wrap"
        >
          <button class="fs-14 btn-inbox btn btn-primary">
            {{ $t("adminMessagesAll") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary mx-2">
            {{ $t("adminMessagesFile") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary">
            {{ $t("adminMessagesImages") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary">
            {{ $t("adminMessagesOrders") }}
          </button>
        </div>
      </div>

      <div class="w-100 bg-white mt-15" dir="auto">
        <p class="d-none">{{$t('rtlHelper')}}</p>
        <input
          class="w-100 px-5 outline-none quick-search"
          :placeholder="`${$t('adminMessagesQuickSearch')}`"
        />
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          class="position-absolute mx-n5 mt-17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774ZM16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.774 14.8021L16.438 14.4654Z"
            fill="#747F8D"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminInbox",
  data() {
    return {
      value: null,
    };
  },
  methods: {
    sidebarToggle() {
      document.getElementsByClassName("side-bar")[0].classList.toggle("d-none");
    },
    quickResponses(){
              this.$router.push({ path: "quick-responses" }).catch(() => {});
    }

  },
};
</script>
<style scoped>
.rounded-button-inbox {
  background: #ff3737;
  width: 20px;
  height: 20px;
  color: white;
  border: 1.5px solid #f7f8fc;
}
.search-admin-inbox {
  height: 46px;
}
.admin-inbox-button {
  min-width: 150px;
  min-height: 46px;
}
.admin-btn-color {
  background: #8290a5;
}
.w-15 {
  min-width: 20%;
}
.text-inbox {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
}
.admin-inbox-side {
  background: #f2f3f5;
}
</style>