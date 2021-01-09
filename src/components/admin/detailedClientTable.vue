<template>
  <div
    class="w-100 admin-clients-cont py-4 mt-5 d-flex align-items-center flex-column"
  >
    <div
      class="w-90 d-flex justify-content-between flex-column flex-lg-row align-items-center"
    >
      <p class="fs-19">{{$t('clientDetailsAllOrders')}}</p>
      <div
        class="d-flex justify-content-around align-items-center flex-column flex-lg-row w-50"
      >
        <div class="d-flex align-items-center" dir="auto">
          <p class="d-none">{{$t('rtlHelper')}}</p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79167 12.4583C9.92128 12.4583 12.4583 9.92128 12.4583 6.79167C12.4583 3.66205 9.92128 1.125 6.79167 1.125C3.66205 1.125 1.125 3.66205 1.125 6.79167C1.125 9.92128 3.66205 12.4583 6.79167 12.4583Z"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.875 13.875L10.7938 10.7937"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            class="border-bottom outline-none px-2"
            :placeholder="`${$t('clientDetailsSearchOrders')}`"
          />
        </div>
        <div
          class="d-flex justify-content-between align-items-center w-25-resp pt-4 pt-lg-0"
        >
          <button class="outline-none d-flex align-items-center justify-content-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z"
                fill="#C5C7CD"
              />
            </svg>
            <p class="mb-0">{{$t('clientDetailsOrdersSort')}}</p>
          </button>
          <button class="outline-none d-flex align-items-center justify-content-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z"
                fill="#C5C7CD"
              />
            </svg>

            <p class="mb-0">{{$t('clientDetailsOrdersFilter')}}</p>
          </button>
        </div>
      </div>
    </div>

    <table
      class="table table-borderless table-responsive-md table-hover border-bottom clients-table mt-4"
    >
      <thead class="pt-0 text-center">
        <tr class="border-bottom">
          <th class="pt-0 font-weight-light" scope="col"></th>
          <th class="pt-0 font-weight-light text-left" scope="col">{{$t('clientDetailsOrdersStatus')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrdersDate')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrdersPhoneNumber')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrdersTotal')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrderNo')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrdersCountry')}}</th>
          <th class="pt-0 font-weight-light" scope="col">{{$t('clientDetailsOrdersCompany')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersNewBtn')}`" :color="'cancelled'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersDeliveredBtn')}`" :color="'done'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersDeliveredBtn')}`" :color="'done'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersCancelledBtn')}`" :color="'clientCancel'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersInprogressBtn')}`" :color="'in-progress'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersShippedBtn')}`" :color="'shipped'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersInprogressBtn')}`" :color="'in-progress'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
        <tr class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersEdit')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersCopy')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersDelete')}}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{$t('clientDetailsOrdersInvoice')}}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert :alert="200" :type="`${$t('clientDetailsOrdersCancelledBtn')}`" :color="'clientCancel'" />
          </td>
          <td>May 26, 2019</td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td>Shudi international...</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-md-end align-items-center w-90">
      <div class="w-50 d-flex flex-column flex-lg-row justify-content-between">
        <div
          class="d-flex align-items-center width-25 justify-content-lg-around justify-content-between"
        >
          <p class="mb-0 text-muted">Rows per page</p>
          <select class="outline-none select-arrow">
            <option>8</option>
            <option>10</option>
          </select>
        </div>
        <div
          class="width-25 d-flex justify-content-between align-items-center pt-4 pt-lg-0"
        >
          <p class="mb-0 text-muted">1-8 of 1240</p>
          <button class="outline-none">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
              stroke="#9FA2B4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          </button>
          <button class="outlne-none">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
              stroke="#9FA2B4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomAlert from "../customAlert";
export default {
  name: "DetailedClientsTable",
  components: {
    CustomAlert,
  },
  data() {
    return {
      phone: 18999897899,
      dateJoined: "May 26, 2019",
      time: "6:30px",
      country: "China",
      name: "David Smill Will",
      companyName: "Shudi international...",
      orderNumber: "#645468468",
      updated: "Updated 1 day ago",
      orderTotal: "£2550,30",
    };
  },
};
</script>
<style scoped>
.updated-client{
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.1px;
color: #C5C7CD;
}
.clients-table tr {
  cursor: pointer !important;
}
.object-cover {
  object-fit: cover !important;
}
.admin-btn-active {
  background: #29cc97;
}
.admin-btn-inactive {
  background: #c4c4c4;
}
.width-18 {
  width: 20% !important;
}
@media only screen and (max-width: 576px) {
  .width-18 {
    width: 100% !important;
  }
  .w-25-resp {
    width: 100%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .width-18 {
    width: 50% !important;
  }
  .w-25-resp {
    width: 100%;
  }
}
@media only screen and (max-width: 991px) and (min-width: 768px) {
  .width-18 {
    width: 30% !important;
  }
  .w-25-resp {
    width: 50%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .width-18 {
    width: 30% !important;
  }
  .w-25-resp {
    width: 35%;
  }
}
@media only screen and (min-width: 1200px) {
  .w-25-resp {
    width: 25%;
  }
}
.admin-clients-cont {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
</style>