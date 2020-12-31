<template>
  <div class="d-flex w-100 min-vh-100">
    <div
      class="d-none w-33 sign-up-image d-lg-flex justify-content-center align-items-center"
    >
      <img
        src="../assets/logo.png"
        width="304"
        height="131"
        class="login-logo"
      />
    </div>
    <div class="w-66  bg-white">
      <router-link to="/login">
        <button class="d-flex pt-5 ml-4 ml-lg-5 outline-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
              fill="#8692A6"
            />
          </svg>
          <p class="font-weight-lighter ml-3">Back</p>
        </button>
      </router-link>

      <div
        class="w-100 pt-lg-8 px-4 text-left flex-column d-flex justify-content-center align-items-center"
      >
        <img
          class="d-block d-lg-none"
          src="../assets/logoDark.png"
          width="158"
          height="80"
        />
        <div>
          <h1 class="fs-30">Forgot your password?</h1>
          <p class="font-weight-lighter fs-18">
            Enter your email that you used to create your<br />account and we
            will reset your password for you
          </p>
          <p class="horizontal-line"></p>
          <div>
            <b-form>
              <b-form-group
                id="input-group-8"
                label="Email"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  class="form-input"
                ></b-form-input>
              </b-form-group>
              <b-button
                v-b-modal.modal-center
                size="lg"
                class="w-100 bg-info text-white py-3 mb-5"
                >Request new password</b-button
              >
              <div>
                <b-modal id="modal-center" hide-footer centered size="md">
                  <div class="d-flex justify-content-center flex-column px-5">
                    <h1 class="fs-28">Change Password</h1>
                    <h3 class="fs-16 font-weight-thin mt-4">
                      Password must contain atleast 8 characters <br />
                      and include atleast one:
                    </h3>
                    <div
                      class="d-flex mt-4 justify-content-between "
                    >
                      <p class="font-weight-light w-50">-Lowercase letter</p>
                      <p class="font-weight-light w-50 ml-3 ml-sm-0">-Number</p>
                    </div>
                    <div
                      class="d-flex justify-content-between text-left"
                    >
                      <p class="font-weight-light w-50">-Uppercase letter</p>
                      <p class="font-weight-light w-50 ml-3 ml-sm-0">-Special Character</p>
                    </div>
                    <b-form class="mt-4">
                      <b-form-group
                        id="input-group-9"
                        label="Old password"
                        label-for="input-9"
                      >
                        <b-form-input
                          id="input-9"
                          v-model="form.oldPassword"
                          type="password"
                          required
                          class="modal-input"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-10"
                        label="New password"
                        label-for="input-10"
                        class="mt-3"
                      >
                        <b-form-input
                          id="input-11"
                          v-model="form.newPassword"
                          type="password"
                          required
                          class="modal-input"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-12"
                        label="Confirm password"
                        label-for="input-12"
                        class="mt-3"
                      >
                        <b-form-input
                          id="input-12"
                          v-model="form.confirmPassword"
                          type="password"
                          required
                          class="modal-input"
                        ></b-form-input>
                      </b-form-group>
                      <router-link to="/login">
                        <b-button
                          size="sm"
                          class="w-100 bg-info mt-5 text-white py-3 mb-5"
                          >Change password</b-button
                        ></router-link
                      >
                    </b-form>
                  </div>
                </b-modal>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forgot",
  data() {
    return {
      form: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
};
</script>