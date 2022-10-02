<template>
  <div class="card-body pb-2" v-if="!isLogin">
    <div class="text-xl font-bold">LOG IN OR CREATE AN ACCOUNT</div>
    <div class="text-md">Log in with social</div>
    <div class="flex flex-col w-full border-opacity-50">
      <div class="grid h-20 card rounded-box place-items-center">
        <div class="grid gap-4 grid-cols-1 w-full" v-if="isLogin">
          <div class="form-control">
            <div
              @click="Logout"
              :class="`
                          btn btn-circle btn-xs
                          sm:btn-sm
                          md:btn-md
                          lg:btn-lg
                          bg-black
                          text-white
                          border-black
                          w-full`"
            >
              Logout
            </div>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-2 grid-cols-1 w-full" v-else>
          <div class="form-control">
            <v-facebook-login
              v-model="model"
              @sdk-init="handleSdkInit"
              @login="fb_login"
              :class="`
                          btn btn-circle
                          btn-sm
                          md:btn-md
                          lg:btn-lg
                          bg-black
                          text-white
                          border-black
                          w-full`"
              app-id="1180264592120063"
              :style="`display: flex;`"
            >
              <template #login>Facebook</template>

              <template #logout>ออกจากระบบ</template>

              <template #working>กำลังตรวจสอบ</template>
            </v-facebook-login>
          </div>
          <div class="form-control">
            <div>
              <!-- <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
                          <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
                          <h2 v-if="user">signed user: {{ user }}</h2> -->
              <button
                class="
                  btn btn-circle btn-sm
                  md:btn-md
                  lg:btn-lg
                  bg-black
                  text-white
                  border-black
                  w-full
                "
                @click="handleClickSignIn"
                v-if="Vue3GoogleOauth.isInit && !Vue3GoogleOauth.isAuthorized"
              >
                sign in
              </button>
              <!-- <button
                          class="
                            btn btn-circle btn-xs
                            sm:btn-sm
                            md:btn-md
                            lg:btn-lg
                            bg-black
                            text-white
                            border-black
                            w-full
                          "
                          @click="handleClickGetAuthCode"
                          v-if="Vue3GoogleOauth.isInit"
                        >
                          get authCode
                        </button> -->
              <button
                class="
                  btn btn-circle btn-sm
                  md:btn-md
                  lg:btn-lg
                  bg-black
                  text-white
                  border-black
                  w-full
                "
                @click="handleClickSignOut"
                v-if="Vue3GoogleOauth.isAuthorized"
              >
                sign out
              </button>
              <!-- <button
                          class="
                            btn btn-circle btn-xs
                            sm:btn-sm
                            md:btn-md
                            lg:btn-lg
                            bg-black
                            text-white
                            border-black
                            w-full
                          "
                          @click="handleClickDisconnect"
                          :disabled="!Vue3GoogleOauth.isAuthorized"
                        >
                          disconnect
                        </button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="divider">OR</div>
      <div class="form-control grid">
        <label class="label">
          <span class="label-text">Email Address*</span>
        </label>
        <input
          type="text"
          placeholder="Email Address*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Password*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4 mb-4">
        <div class="flex w-full">
          <div class="rounded-box">
            <label class="label cursor-pointer">
              <input type="checkbox" checked="checked" class="checkbox" />
              <span class="label-text pl-2">Remember me</span>
            </label>
          </div>
          <div class="grid flex-grow rounded-box justify-end">
            <label class="label">
              <a
                href="#"
                class="label-text-alt link link-hover font-bold"
                @click="$emit('changetab','forgot-password')"
              >
                Forgot password?
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-control">
      <button
        class="
          btn btn-sm
          md:btn-md
          lg:btn-lg
          bg-black
          text-white
          border-black
          w-full
        "
      >
        Login
      </button>
    </div>
    <div class="form-control">
      <p class="label-text-alt">
        You don't have an account yes?
        <a
          href="#"
          class="label-text-alt link link-hover font-bold"
          @click="$emit('changetab','register')"
          >Join now!
        </a>
      </p>
    </div>
  </div>
</template>
<script>
import VFacebookLogin from "vue-facebook-login-component-next";
import { inject, toRefs } from "vue";
export default {
  name: "Dashboard",
  components: {
    VFacebookLogin,
  },
  props: ["getLogout", "joinnows"],

  data() {
    return {
      facebook: { isAuthorized: false },
      FB: {},
      model: {},
      scope: {},
    };
  },
  computed: {
    ServiceUrl() {
      return this.$store.getters.serviceUrl;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
  methods: {
    fb_login(response) {
      console.log(response);
      this.facebook.isAuthorized = true;
      //   this.$refs.joinnows.checked = false;
      this.$emit("setJoinnows");
      if (!response) {
        return;
      }
      FB.login(function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      });
    },
    Logout() {
      console.log("LOGOUT");
      let vm = this;
      if (this.facebook.isAuthorized) {
        FB.logout(function (response) {
          // user is now logged out
          console.log(response);
          vm.facebook.isAuthorized = false;
        });
      } else {
        this.handleClickSignOut();
      }
      this.$store.commit("isLogin", false);
      //   this.$emit("setLogout");
    },
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },
    //////////////////// GMAIL
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        // console.log("googleUser", googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        // console.log("getId", this.user);
        // console.log("getBasicProfile", googleUser.getBasicProfile());
        // console.log("getAuthResponse", googleUser.getAuthResponse());
        // console.log(
        //   "getAuthResponse",
        //   this.$gAuth.instance.currentUser.get().getAuthResponse()
        // );
        this.$emit("setJoinnows");
        // this.$refs.joinnows.checked = false;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickGetAuthCode() {
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },
    // handleClickDisconnect() {
    //   window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    // },
  },

  mounted() {},
  beforeDestroy() {},
  watch: {
    getLogout: function (val) {
      console.log("getLogout", val);
      if (val) {
        this.Logout();
        this.$emit("response");
      }
    },
    "facebook.isAuthorized": function (val) {
      console.log(val);
      if (val) {
        this.$store.commit("isLogin", true);
      }
    },
    "Vue3GoogleOauth.isAuthorized": function (val) {
      console.log(val);
      if (val) {
        this.$store.commit("isLogin", true);
      }
    },
  },
};
</script>

<style >
.v-facebook-login .logo {
  display: none;
}
</style>