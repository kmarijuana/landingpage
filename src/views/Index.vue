<template>
  <div class="LandingPage">
    <AppLayout @Logout="Logout">
      <template #modal>
        <!-- <template> -->
        <input
          type="checkbox"
          id="modal-joinnows"
          ref="joinnows"
          class="modal-toggle"
        />
        <div class="modal">
          <div class="modal-box relative">
            <button
              v-if="tab.join == 'register' || tab.join == 'forgot-password'"
              for="modal-joinnows"
              class="btn btn-sm btn-ghost absolute left-2 top-2"
              @click="tab.join = 'login'"
            >
              ←
            </button>
            <label
              for="modal-joinnows"
              class="btn btn-sm btn-ghost absolute right-2 top-2"
              @click="tab.join = 'login'"
              >✕</label
            >
            <LoginComponent
              v-if="tab.join == 'login'"
              ref="LoginComponent"
              @setJoinnows="$refs.joinnows.checked = false"
              @changetab="
                (val) => {
                  tab.join = val;
                }
              "
            />
            <RegisterComponent
              v-if="tab.join == 'register'"
              @changetab="
                (val) => {
                  tab.join = val;
                }
              "
            />
            <VerifyEmailComponent
              v-if="tab.join == 'verify-email'"
              @changetab="
                (val) => {
                  tab.join = val;
                }
              "
            />
            <ForgotPasswordComponent
              v-if="tab.join == 'forgot-password'"
              @changetab="
                (val) => {
                  tab.join = val;
                }
              "
            />
          </div>
        </div>

        <template v-if="isLogin || $route.query.hash">
          <input
            type="checkbox"
            id="modal-profile"
            class="modal-toggle"
            ref="profile"
          />
          <div class="modal">
            <div class="modal-box relative">
              <button
                v-if="
                  (tab.profile == 'editdetail' ||
                    tab.profile == 'editpassword') &&
                  !$route.query.hash
                "
                for="modal-profile"
                class="btn btn-sm btn-ghost absolute left-2 top-2"
                @click="tab.profile = 'profile'"
              >
                ←
              </button>
              <label
                for="modal-profile"
                class="btn btn-sm btn-ghost absolute right-2 top-2"
                @click="tab.profile = 'profile'"
                v-if="!$route.query.hash"
                >✕</label
              >
              <ProfileComponent
                v-if="tab.profile == 'profile'"
                @changetab="
                  (val) => {
                    tab.profile = val;
                  }
                "
              />
              <EditDetailComponent
                v-if="tab.profile == 'editdetail'"
                @changetab="
                  (val) => {
                    tab.profile = val;
                  }
                "
              />

              <EditPasswordComponent
                v-if="tab.profile == 'editpassword'"
                @changetab="
                  (val) => {
                    tab.profile = val;
                  }
                "
              />
            </div>
          </div>
        </template>
        <input
          type="checkbox"
          id="modal-confirm"
          class="modal-toggle"
          ref="confirm"
        />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="modal-confirm"
              class="btn btn-sm btn-ghost absolute right-2 top-2"
              @click="tab.profile = 'profile'"
              >✕</label
            >
            <div class="card-body pb-2">
              <font-awesome-icon
                icon="fa-solid fa-circle-exclamation"
                class="text-5xl"
              />
              <div class="text-xl font-bold">Confirm Change</div>
              <div class="grid gap-4 md:grid-cols-2 grid-cols-1 w-full">
                <div class="form-control mt-4">
                  <label
                    class="
                      btn btn-xs
                      sm:btn-sm
                      md:btn-md
                      lg:btn-lg
                      btn-accent
                      w-full
                    "
                    for="modal-confirm"
                  >
                    Cancel
                  </label>
                </div>
                <div class="form-control mt-4 mb-4">
                  <label
                    class="
                      btn btn-xs
                      sm:btn-sm
                      md:btn-md
                      lg:btn-lg
                      btn-primary
                      w-full
                    "
                    for="modal-confirm"
                  >
                    Confirm
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #view>
        <div class="hero min-auto" ref="home" id="home">
          <div class="carousel w-full h-full">
            <div
              :id="`slide${i}`"
              class="carousel-item relative w-full"
              v-for="(v, i) in slide"
              :key="i"
            >
              <img
                :src="`${v}`"
                class="w-full object-cover"
                style="min-height: 250px"
              />
              <div
                class="
                  absolute
                  flex
                  justify-between
                  transform
                  -translate-y-1/2
                  left-5
                  right-5
                  z-20
                  lg:top-1/2
                  top-44
                "
              >
                <a
                  :href="`#slide${i == 0 ? slide.length - 1 : i - 1}`"
                  class="btn btn-circle opacity-20 hover:opacity-80"
                >
                  ❮
                </a>
                <a
                  :href="`#slide${i >= slide.length - 1 ? 0 : i + 1}`"
                  class="btn btn-circle opacity-20 hover:opacity-80"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div class="hero-overlay bg-base-200 bg-opacity-60 z-10"></div>
          <div
            class="
              hero-content
              flex-col
              lg:flex-row-reverse
              w-full
              lg:px-20 lg:pt-40
              pt-24
              pb-20
            "
            style="z-index: 11"
          >
            <div class="container">
              <div class="text-center lg:text-left">
                <div class="text-4xl lg:text-5xl font-bold">
                  Join World Mission!
                </div>
                <div class="text-3xl lg:text-4xl font-bold">
                  In Decentraland
                </div>
                <div class="text-sm font-bold">
                  join us in our mission to protect
                </div>
                <div class="text-sm font-bold">
                  our bodles from various disases
                </div>

                <div class="text-sm font-bold" v-if="!isLogin">
                  <label
                    for="modal-joinnows"
                    class="
                      btn btn-md
                      md:btn-md
                      lg:btn-lg
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                  >
                    JOIN NOW
                  </label>
                </div>

                <!-- <div class="text-sm font-bold">
                  <button
                    v-if="!isLogin"
                    @click="isLogin = true"
                    class="
                      btn btn-xs
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                  >
                    test login
                  </button>
                  <button
                    v-if="isLogin"
                    @click="isLogin = false"
                    class="
                      btn btn-xs
                      bg-black
                      text-white
                      border-black
                      mt-4
                      w-60
                      modal-button
                    "
                  >
                    test logout
                  </button>
                </div> -->

                <div class="grid grid-col w-full" v-if="isLogin">
                  <div
                    class="
                      grid
                      h-auto
                      place-items-right
                      text-center
                      lg:text-right
                    "
                  >
                    <!-- <div class="text-sm font-bold">
                      <label
                        for="modal-joinnows"
                        class="
                          btn btn-md
                          md:btn-md
                          lg:btn-md
                          bg-black
                          text-white
                          border-black
                          mt-4
                          w-60
                          modal-button
                        "
                      >
                        JOIN NOW
                      </label>
                    </div> -->
                  </div>
                  <div class="divider"></div>
                  <div
                    class="
                      grid
                      rounded-box
                      place-items-center
                      text-white
                      bg-black bg-opacity-70
                    "
                  >
                    <div
                      class="
                        grid
                        lg:flex lg:flex-cols
                        w-full
                        grid-cols-1
                        md:grid-cols-3
                        lg:grid-cols-4
                      "
                    >
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          md:border-b-2
                          lg:border-b-0
                          border-white border-opacity-25
                        "
                      >
                        <!-- <div class="card w-full"> -->
                        <!-- <div class="card-body items-center text-center"> -->
                        <div class="avatar p-8">
                          <div
                            class="
                              lg:w-32
                              w-52
                              rounded-full
                              ring
                              ring-primary
                              ring-offset-base-100
                              ring-offset-2
                            "
                          >
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                        </div>
                        <!-- </div> -->
                        <!-- </div> -->
                      </div>
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          md:col-span-2
                          lg:border-b-0
                          md:border-b-2
                          border-b-2 border-white border-opacity-25
                        "
                      >
                        <div class="card w-full">
                          <!-- <figure class="px-10 pt-10">
                            <img
                              src="https://placeimg.com/400/225/tech6"
                              alt="Shoes"
                              class="rounded-xl"
                            />
                          </figure> -->
                          <div
                            class="
                              card-body
                              items-center
                              lg:items-start
                              md:items-start
                              text-center
                              lg:pl-0
                              md:py-7
                              pt-0
                            "
                          >
                            <!-- <h2 class="card-title">Roblox</h2> -->

                            <div
                              class="lg:text-2xl md:text-3xl text-2xl font-bold"
                            >
                              Vivian
                            </div>
                            <div
                              class="lg:text-sm md:text-xl text-lg font-bold"
                            >
                              Wissuwattananupong
                            </div>
                            <div class="text-sm font-bold">
                              viwian.s@gmail.com
                            </div>
                            <div class="text-sm font-bold w-full">
                              <label
                                for="modal-profile"
                                class="
                                  btn btn-sm
                                  sm:btn-md
                                  md:btn-md
                                  lg:btn-md
                                  bg-black
                                  text-white
                                  border-black
                                  mt-4
                                  w-full
                                  modal-button
                                "
                              >
                                Profile
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          lg:border-l-2
                          border-white border-opacity-25
                          md:col-span-3
                          lg:border-b-0
                          md:border-b-2
                          border-b-2
                        "
                      >
                        <div class="card w-full">
                          <!-- <figure class="px-10 pt-10">
                            <img
                              src="https://placeimg.com/400/225/tech6"
                              alt="Shoes"
                              class="rounded-xl"
                            />
                          </figure> -->
                          <div class="card-body items-center text-center py-4">
                            <div
                              class="lg:text-lg md:text-3xl text-2xl font-bold"
                            >
                              My Tokens
                            </div>
                            <div
                              class="
                                grid
                                rounded-box
                                place-items-center
                                text-white
                              "
                            >
                              <div class="flex flex-cols w-full">
                                <div
                                  class="
                                    grid
                                    h-auto
                                    flex-grow
                                    card
                                    rounded-box
                                    place-items-center
                                  "
                                  v-for="(v, i) in image"
                                  :key="i"
                                >
                                  <div class="text-sm font-bold">
                                    <img
                                      :src="
                                        require(`@/assets/images/${
                                          image[i] == false
                                            ? i + 1
                                            : `${i + 1}a`
                                        }.png`)
                                      "
                                      @click="
                                        image[i] =
                                          image[i] == false ? true : false
                                      "
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="lg:text-lg md:text-2xl text-xl font-bold"
                            >
                              {{
                                parseInt(image[0] == true ? 1 : 0) +
                                parseInt(image[1] == true ? 1 : 0) +
                                parseInt(image[2] == true ? 1 : 0) +
                                parseInt(image[3] == true ? 1 : 0) +
                                parseInt(image[4] == true ? 1 : 0) +
                                parseInt(image[5] == true ? 1 : 0)
                              }}/6
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          grid
                          h-auto
                          flex-grow
                          card
                          rounded-box
                          place-items-center
                          lg:border-l-2
                          border-white border-opacity-25
                          md:col-span-3
                        "
                      >
                        <div class="card w-full">
                          <div class="card-body items-center text-center">
                            <div
                              class="lg:text-lg md:text-3xl text-2xl font-bold"
                            >
                              My Coins
                            </div>
                            <div
                              class="
                                lg:pt-1
                                md:pt-2
                                pt-3
                                lg:text-5xl
                                md:text-9xl
                                text-8xl
                                font-bold
                              "
                            >
                              50
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid h-auto place-items-left text-left pt-5">
                    <!-- <div class="text-sm font-bold"> -->
                    <!-- <label
                        for="modal-joinnows"
                        class="
                          btn btn-sm
                          sm:btn-sm
                          md:btn-md
                          lg:btn-md
                          bg-black
                          text-white
                          border-black
                          mt-4
                          w-60
                          modal-button
                        "
                      >
                        JOIN NOW
                      </label> -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div
                        class="
                          text-3xl
                          lg:text-3xl
                          font-bold
                          col-span-2
                          lg:col-span-4
                        "
                      >
                        Get more coins
                      </div>
                      <div class="text-sm font-bold">Vivian</div>
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        do it
                      </button>
                      <div class="text-sm font-bold">Wissuwattananupong</div>
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        rate us
                      </button>
                      <div class="text-sm font-bold">viwian.s@gmail.com</div>
                      <button
                        class="
                          btn btn-xs
                          bg-black
                          text-white
                          border-black
                          w-32
                          lg:col-span-3 lg:justify-self-start
                          justify-self-end
                        "
                      >
                        explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto py-10">
          <div class="grid grid-col w-full px-4 lg:px-auto">
            <div class="grid h-auto place-items-left">
              <div class="text-2xl lg:text-3xl font-bold">
                Explore Multiverse
              </div>
            </div>
            <div class="divider"></div>
            <div class="grid rounded-box place-items-center">
              <div
                class="
                  grid
                  w-full
                  gap-4
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-4
                "
              >
                <div
                  class="
                    card
                    image-full
                    grid
                    h-auto
                    flex-grow
                    rounded-box
                    object-cover
                    hover:place-items-center
                    cursor-pointer
                    hover:shadow-lg
                  "
                  @click="
                    !isLogin
                      ? ($refs.joinnows.checked = true)
                      : getLink('Roblox')
                  "
                  v-for="(v, i) in explore"
                  :key="i"
                >
                  <figure class="h-full">
                    <img :src="`${v.image}`" :alt="`${v}`" class="rounded-xl" />
                  </figure>
                  <div
                    class="
                      card-body
                      items-center
                      text-center
                      place-content-center
                    "
                  >
                    <h2 class="card-title" style="text-transform: capitalize">
                      {{ i }}
                    </h2>
                    <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
                    <!-- <div class="card-actions justify-end">
                      <button class="btn btn-primary">Play now</button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            lg:bg-base-200
            grid grid-col
            w-full
            px-4
            lg:px-auto
            hover:shadow-2xl
          "
          ref="about"
          id="about"
        >
          <div class="container mx-auto">
            <div class="card lg:card-side">
              <div class="card-body items-center text-center self-center">
                <div class="card-title flex flex-col w-full">
                  <div class="text-2xl lg:text-3xl font-bold">About</div>
                  <div class="divider"></div>
                </div>
                <p>
                  {{ example_text }}
                </p>
              </div>
              <figure>
                <img src="https://placeimg.com/500/400/tech/2" alt="Album" />
              </figure>
            </div>
          </div>
        </div>
        <div class="lg:bg-base-100 px-4 lg:px-auto" ref="events" id="events">
          <div class="container mx-auto py-10 bg-base-100">
            <div class="card">
              <div class="card-body items-center text-center self-center">
                <div class="card-title flex flex-col w-full">
                  <div class="text-2xl lg:text-3xl font-bold">Event</div>
                  <div class="divider"></div>
                </div>
                <p>
                  {{ example_text }}
                </p>
              </div>
              <figure class="w-full">
                <img
                  src="https://freddiegeorges.com/wp-content/uploads/2022/01/metaverse-blog-image-0_-1220x640.jpg"
                  alt="Events"
                  class="w-full max-h-96 object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
        <div
          class="bg-primary-content text-base-100"
          ref="contact"
          id="contact"
        >
          <div class="container mx-auto">
            <div class="card lg:card-side">
              <div
                class="
                  card-body
                  items-left
                  text-left
                  self-left
                  max-w-full
                  lg:max-w-xl
                "
              >
                <img
                  src="https://i.insider.com/61af7e6306b6770018c46506?width=1136&format=jpeg"
                  alt="map"
                />
              </div>
              <div class="card-body items-left text-left self-left">
                <div class="card-title w-full text-sm lg:text-2xl font-bold">
                  Thai Health Promotion Foundation
                </div>
                <div class="text-sm lg:text-2xl font-bold">Address</div>
                <p class="text-base-100">
                  ThaiHealth Centre,99/99 {{ example_text }}
                  thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </AppLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import AppLayout from "@/components/layouts/App.vue";
import RegisterComponent from "@/components/Register.vue";
import LoginComponent from "@/components/Login.vue";
import VerifyEmailComponent from "@/components/VerifyEmail.vue";
import ForgotPasswordComponent from "@/components/ForgotPassword.vue";
import ProfileComponent from "@/components/Profile.vue";
import EditDetailComponent from "@/components/EditDetail.vue";
import EditPasswordComponent from "@/components/EditPassword.vue";
export default {
  name: "LandingPage",
  components: {
    AppLayout,
    RegisterComponent,
    LoginComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    EditDetailComponent,
    EditPasswordComponent,
  },

  data() {
    return {
      image: [false, false, false, false, false, false],
      explore: {
        decentraland: {
          image:
            "https://nftevening.com/wp-content/uploads/2021/08/featuredddddd.jpg",
        },
        roblox: {
          image:
            "https://media.wired.com/photos/604be13a1d09b7f18fe49d6c/125:94/w_1436,h_1080,c_limit/Gear-Roblox-jailbreak_1920x1080.jpg",
        },
        zepeto: {
          image:
            "https://assets.moguravr.com/uploads/2021/12/202112081801837000.jpg",
        },
        spatial: {
          image:
            "https://dd2cgqlmnwvp5.cloudfront.net/spatial.io/vid/1080/posters/park-no-avatars.jpg",
        },
      },
      slide: [
        "https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/4/4/9/39219442-1-eng-GB/photo_SXM2022021500001571.png",
        "https://venturebeat.com/wp-content/uploads/2021/03/article23-1.jpg?w=1200&strip=all",
        "https://beaconvcfund.sgp1.cdn.digitaloceanspaces.com/2022/06/metaverse-cover-1288x724-1.jpeg",
      ],
      example_text: `test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test`,
      tab: {
        join: "login",
        profile: "profile",
      },
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
  methods: {
    getLink(web) {
      let url = "";
      switch (web) {
        case "Decentraland":
          url = `https://decentraland.org/`;
          break;
        case "Roblox":
          url = `https://www.roblox.com/`;
          break;
        case "Zepeto":
          url = `https://zepeto.me/`;
          break;
        case "Spatial":
          url = `https://spatial.io/`;
          break;
      }
      return window.open(url, "_blank").focus();
    },
    Logout() {
      this.$refs.LoginComponent.Logout();
      this.$refs.joinnows.checked = true;
      this.$refs.profile.checked = false;
    },
  },
  mounted() {
    if (this.$route.query.hash) {
      this.tab.profile = "editpassword";
      this.$refs.profile.checked = true;
    }
  },
  beforeDestroy() {},
  watch: {},
};
</script>

<style>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
p,
div {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 1em;
}
button:disabled {
  background: #fff;
  color: #ddd;
  cursor: not-allowed;
}
</style>
