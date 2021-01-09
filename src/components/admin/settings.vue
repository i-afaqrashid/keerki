<template>
  <div
    class="w-90 d-flex justify-content-center flex-column align-items-center pt-9"
    dir="auto"
  >
    <div
      class="setting-cont w-100 py-4 d-flex justify-content-center align-items-center"
    >
      <div class="w-75">
        <div class="d-flex justify-content-center align-items-center w-75-resp">
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsSessionTimeOut") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-lg-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-lg-0">
                <select class="select-arrow setting-select outline-none">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsHours") }}</p>
                </div>
              </div>
              <div class="border rounded-lg d-flex mt-15 mt-lg-0">
                <select class="select-arrow setting-select outline-none">
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsMinutes") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsAutoSendSms") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-lg-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-lg-0">
                <select class="select-arrow setting-select outline-none">
                  <option>7</option>
                  <option>14</option>
                  <option>21</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsDays") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsDeactivateEmployee") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-lg-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-lg-0">
                <select class="select-arrow setting-select outline-none">
                  <option>90</option>
                  <option>30</option>
                  <option>60</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsDays") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsDeactivateUser") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-lg-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-lg-0 w-75">
                <select class="select-arrow setting-select w-100 outline-none">
                  <option>-- Select --</option>
                  <option>David - Employee</option>
                  <option>Wang - Employee</option>
                  <option>Lina - Employee</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsRemoveUser") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-lg-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-lg-0 w-75">
                <select class="select-arrow setting-select w-100 outline-none">
                  <option>-- Select --</option>
                  <option>David - Admin</option>
                  <option>Wang - Admin</option>
                  <option>Lina - Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 pt-5">
      <p class="mb-0 font-24 font-weight-bold">
        {{ $t("adminSettingsEmployeeSetting") }}
      </p>
      <div
        class="setting-cont w-100 py-5 d-flex justify-content-center flex-column align-items-center mt-2"
      >
        <div
          class="d-flex justify-content-around flex-column flex-lg-row w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            v-b-modal.new-employee-modal
          >
            {{ $t("adminSettingsAddNewEmploy") }}

            <b-modal
              id="new-employee-modal"
              centered
              hide-footer
              header-class="border-0"
              hider-header
              no-stacking
              size="xl"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <form
                  class="w-90 d-flex justify-content-center flex-column align-items-center"
                  @submit="submitHandler"
                >
                  <div
                    class="w-100 d-flex justify-content-around flex-column flex-lg-row"
                    dir="auto"
                  >
                    <div class="d-flex pb-4 flex-column">
                      <h1 class="fs-28 mb-0">
                        {{ $t("adminSettingsRegisterEmployee") }}
                      </h1>
                      <div class="w-100 pt-5">
                        <p class="mb-1">{{ $t("adminSettingsName") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0 d-none">
                            {{ $t("adminSettingsMinutes") }}
                          </p>
                          <input
                            class="settings-input w-48 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsFirstName')}`"
                            type="text"
                            required
                          />
                          <input
                            class="settings-input w-48 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsLastName')}`"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsUsername") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsUsernamePlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsPassword") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsPassowordPlaceholder'
                            )}`"
                            :type="passwordType1"
                            required
                          />
                          <button
                            class="outline-none"
                            type="button"
                            @click="showPassword(1)"
                          >
                            <svg
                              width="21"
                              height="16"
                              class="position-relative mx-lg-n5 mx-n4 float-right"
                              viewBox="0 0 21 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                                fill="#747474"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsConfirmPassword") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsConfirmPasswordPlaceholder'
                            )}`"
                            :type="passwordType2"
                            required
                          />
                          <button
                            class="outline-none"
                            type="button"
                            @click="showPassword(2)"
                          >
                            <svg
                              width="21"
                              height="16"
                              class="position-relative mx-lg-n5 mx-n4 float-right"
                              viewBox="0 0 21 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                                fill="#747474"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="d-flexpb-4 flex-column">
                      <div class="w-100">
                        <p class="mb-1">{{ $t("adminSettingsEmail") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEmailPlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-3">
                        <p class="mb-1">
                          {{ $t("adminSettingsConfirmEmail") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEmailPlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsWorkPhone") }}</p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="color-f5 p-2 border-dede outline-none select-arrow"
                          >
                            <option>+86</option>
                            <option>+971</option>
                          </select>
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsEnterPhone')}`"
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsUserTimeZone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>+5</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsRole") }}</p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>{{ $t("adminSettingsRoleAdmin") }}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-100 d-flex justify-content-between align-items-center flex-column flex-lg-row"
                  >
                    <div class="d-flex">
                      <button class="btn">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875ZM6 3.26562C6.53906 3.26562 6.98438 3.71094 6.98438 4.25C6.98438 4.8125 6.53906 5.23438 6 5.23438C5.4375 5.23438 5.01562 4.8125 5.01562 4.25C5.01562 3.71094 5.4375 3.26562 6 3.26562ZM7.3125 9.21875C7.3125 9.38281 7.17188 9.5 7.03125 9.5H4.96875C4.80469 9.5 4.6875 9.38281 4.6875 9.21875V8.65625C4.6875 8.51562 4.80469 8.375 4.96875 8.375H5.25V6.875H4.96875C4.80469 6.875 4.6875 6.75781 4.6875 6.59375V6.03125C4.6875 5.89062 4.80469 5.75 4.96875 5.75H6.46875C6.60938 5.75 6.75 5.89062 6.75 6.03125V8.375H7.03125C7.17188 8.375 7.3125 8.51562 7.3125 8.65625V9.21875Z"
                            fill="#0074BD"
                          />
                        </svg>
                      </button>
                      <p class="fs-12 font-weight-lighter">
                        {{ $t("adminSettingsPassowordDescription") }}
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-between width-25 align-items-center"
                    >
                      <button
                        class="btn border"
                        type="button"
                        @click="$bvModal.hide('new-employee-modal')"
                      >
                        {{ $t("adminSettingsCancel") }}
                      </button>
                      <button class="btn btn-primary" type="submit">
                        {{ $t("adminSettingsSubmit") }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </b-modal>
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-lg-0"
            @click="allEmployees"
          >
            {{ $t("adminSettingsViewAllEmployees") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-lg-row pt-5 w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            v-b-modal.edit-modal
          >
            <b-modal
              id="edit-modal"
              centered
              hide-footer
              header-class="border-0"
              hider-header
              size="xl"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <form
                  class="w-90 d-flex justify-content-center flex-column align-items-center"
                  @submit="submitHandler"
                >
                  <div
                    class="w-100 d-flex justify-content-around flex-column flex-lg-row"
                    dir="auto"
                  >
                    <div class="d-flex pb-4 flex-column">
                      <h1 class="fs-28 mb-0">
                        {{ $t("adminSettingsEditEmployee") }}
                      </h1>
                      <div class="w-100 pt-5">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeName") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-50 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeFirst'
                            )}`"
                            type="text"
                            required
                          />
                          <input
                            class="settings-input w-50 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeFirst'
                            )}`"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsEditEmployeePassword") }}
                          </p>
                          <button
                            class="change-pass outline-none"
                            type="button"
                            v-b-modal.pass-modal
                          >
                            {{ $t("adminSettingsEditEmployeeChangePassword") }}
                            <b-modal
                              id="pass-modal"
                              centered
                              hide-footer
                              header-class="border-0"
                              hider-header
                              size="xl"
                            >
                              <div
                                class="w-100 d-flex justify-content-center align-items-center flex-column"
                                dir="auto"
                              >
                                <div class="d-flex flex-column w-90">
                                  <h1 class="fs-28">
                                    {{
                                      $t(
                                        "adminSettingsEditEmployeeChangePassword"
                                      )
                                    }}
                                  </h1>
                                  <p class="py-4">
                                    {{
                                      $t(
                                        "adminSettingsEditEmployeeChangePasswordDescription"
                                      )
                                    }}
                                  </p>

                                  <div
                                    class="d-flex mt-4 justify-content-between"
                                  >
                                    <p class="font-weight-light w-50">
                                      {{ $t("lowercaseLetter") }}
                                    </p>
                                    <p
                                      class="font-weight-light w-50 ml-3 ml-sm-0"
                                    >
                                      {{ $t("number") }}
                                    </p>
                                  </div>
                                  <div
                                    class="d-flex justify-content-between text-left"
                                  >
                                    <p class="font-weight-light w-50">
                                      {{ $t("uppercaseLetter") }}
                                    </p>
                                    <p
                                      class="font-weight-light w-50 ml-3 ml-sm-0"
                                    >
                                      {{ $t("specialCharacter") }}
                                    </p>
                                  </div>
                                  <div class="w-100 pt-15">
                                    <p class="mb-1">
                                      {{ $t("adminSettingsPassword") }}
                                    </p>
                                    <div
                                      class="d-flex w-100 justify-content-between align-items-center"
                                    >
                                      <input
                                        class="settings-input width-50 px-1 outline-none"
                                        :placeholder="`${$t(
                                          'adminSettingsPassowordPlaceholder'
                                        )}`"
                                        type="password"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class="w-100 pt-15">
                                    <p class="mb-1">
                                      {{ $t("adminSettingsConfirmPassword") }}
                                    </p>
                                    <div
                                      class="d-flex w-100 justify-content-between align-items-center"
                                    >
                                      <input
                                        class="settings-input width-50 px-1 outline-none"
                                        :placeholder="`${$t(
                                          'adminSettingsConfirmPasswordPlaceholder'
                                        )}`"
                                        type="password"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div
                                    class="w-100 d-flex justify-content-end mt-4 align-items-center flex-column flex-lg-row"
                                  >
                                    <div
                                      class="d-flex justify-content-around width-25 align-items-center"
                                    >
                                      <button
                                        class="btn border"
                                        type="button"
                                        @click="$bvModal.hide('pass-modal')"
                                      >
                                        {{ $t("adminSettingsCancel") }}
                                      </button>
                                      <button
                                        class="btn btn-primary"
                                        type="submit"
                                        @click="$bvModal.hide('pass-modal')"
                                      >
                                        {{ $t("adminSettingsSubmit") }}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </b-modal>
                          </button>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center text-left"
                        >
                          <p class="mb-0">{{ $t("adminSettingsLastLogin") }}</p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm
                          </p>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsAccountCreated") }}
                          </p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm
                          </p>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsLastModified") }}
                          </p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm by Hedi
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flexpb-4 flex-column">
                      <div class="w-100">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeEmail") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeEmailPlaceHolder'
                            )}`"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeWorkPone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="color-f5 p-2 border-dede outline-none select-arrow"
                          >
                            <option>+86</option>
                            <option>+971</option>
                          </select>
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeEnterPhone'
                            )}`"
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeUserTimeZone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>+5</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeRole") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>{{ $t("adminSettingsRoleAdmin") }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeAccountStatus") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>
                              {{ $t("adminSettingsEditEmployeeActve") }}
                            </option>
                            <option>
                              {{ $t("adminSettingsEditEmployeeInactive") }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-100 d-flex justify-content-end mt-4 align-items-center flex-column flex-lg-row"
                  >
                    <div
                      class="d-flex justify-content-between width-25 align-items-center"
                    >
                      <button
                        class="btn border"
                        type="button"
                        @click="$bvModal.hide('edit-modal')"
                      >
                        {{ $t("adminSettingsCancel") }}
                      </button>
                      <button class="btn btn-primary" type="submit">
                        {{ $t("adminSettingsSubmit") }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </b-modal>
            {{ $t("adminSettingsEditEmployee") }}
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-lg-0"
            @click="notifyAll"
          >
            {{ $t("adminSettingNotifyAllEMployees") }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-100 pt-5">
      <p class="mb-0 font-24 font-weight-bold">
        {{ $t("adminSettingClientSettings") }}
      </p>
      <div
        class="setting-cont w-100 py-5 d-flex justify-content-center flex-column align-items-center mt-2"
      >
        <div
          class="d-flex justify-content-around flex-column flex-lg-row w-100 align-items-center"
        >
          <button class="settings-btn text-white width-25 btn">
            {{ $t("adminSettingAddNewClient") }}
          </button>
          <button class="settings-btn text-white width-25 btn mt-4 mt-lg-0">
            {{ $t("adminSettingsNofifyAllClients") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-lg-row pt-5 w-100 align-items-center"
        >
          <button class="settings-btn text-white width-25 btn" @click="sendSms">
            {{ $t("adminSettingsSendSms") }}
          </button>
          <button class="settings-btn text-white width-25 btn mt-4 mt-lg-0">
            {{ $t("adminSettingActivateClient") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-lg-row pt-5 w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            @click="sendEmail"
          >
            {{ $t("adminSettingSendEmail") }}
          </button>
          <button class="settings-btn text-white width-25 btn mt-4 mt-lg-0">
            {{ $t("adminSettingSuspendAccount") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminSettings",
  data() {
    return {
      passwordType1: "password",
      passwordType2: "password",
    };
  },
  methods: {
    showPassword(e) {
      if (e == 1) {
        if (this.passwordType1 == "password") this.passwordType1 = "text";
        else this.passwordType1 = "password";
      } else {
        if (this.passwordType2 == "password") this.passwordType2 = "text";
        else this.passwordType2 = "password";
      }
    },
    submitHandler(e) {
      e.preventDefault();
      this.$bvModal.hide("new-employee-modal");
    },
    sendSms() {
      this.$router.push({ path: "sms" }).catch(() => {});
    },
    sendEmail() {
      this.$router.push({ path: "email" }).catch(() => {});
    },
    allEmployees() {
      this.$router.push({ path: "employees" }).catch(() => {});
    },
    notifyAll() {
      this.$router.push({ path: "notify-employees" }).catch(() => {});
    },
  },
};
</script>
<style scoped>
.change-pass {
  color: #ff3a67;
}
.border-dede {
  border: 1px solid #dedede;
  border-radius: 4px;
}
.settings-input {
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 4px;
  height: 36px;
}
.settings-btn {
  background: #245aab !important;
  border-radius: 10px !important;
}
.setting-select {
  height: 36px;
  background: #ffffff;
  width: 66px;

  border-radius: 4px;
}
.grey-bg {
  background: #f5f5f5;
  width: 100%;
}
.color-f5 {
  background: #f5f5f5;
}
.setting-cont {
  background: #ffffff;
  border-radius: 10px;
}
</style>

