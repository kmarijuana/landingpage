<template>
  <div>
    <slot name="modal"></slot>
    <div class="shadow bg-base-100 drawer h-100">
      <input id="drawer-menu" v-model="menu" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-center justify-center drawer-content">
        <div class="drawer">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
          <div
            class="drawer-content flex flex-col"
            ref="msgContainer"
            @scroll="scrolling()"
          >
            <div
              class="
                w-full
                navbar
                bg-base-100
                z-30
                top-0
                shadow
                gap-2
                px-4
                py-2
                flex
                absolute
                bg-opacity-20
              "
              :class="`${scrollTop > 100 ? 'bg-opacity-100' : 'bg-opacity-20'}`"
              style="transition: all 0.5s ease-in"
            >
              <div class="flex-none lg:hidden">
                <label for="drawer-menu" class="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <!-- open -->

                  <!-- <font-awesome-icon icon="fa-solid fa-bars" size="2x" /> -->
                </label>
              </div>

              <div class="flex-1 px-2 mx-2">
                <div class="items-stretch hidden lg:flex">
                  <a href="#home" class="btn btn-ghost btn-sm rounded-btn">
                    Home
                  </a>
                  <a href="#about" class="btn btn-ghost btn-sm rounded-btn">
                    About
                  </a>
                  <a href="#events" class="btn btn-ghost btn-sm rounded-btn">
                    Events
                  </a>
                  <a href="#contact" class="btn btn-ghost btn-sm rounded-btn">
                    Contact
                  </a>
                </div>
              </div>
              <div class="flex-none mr-2">
                <label
                  for="modal-joinnows"
                  class="btn btn-sm btn-outline modal-button"
                  >Login / Sign up</label
                >
              </div>
            </div>
            <slot name="view"></slot>
          </div>
        </div>
      </div>
      <div class="drawer-side w-full" >
        <label for="drawer-menu" class="drawer-overlay"></label>
        <div class="bg-base-200 w-full" :class="`${menu!=true ? 'opacity-20' : 'opacity-100'}`"
              style="transition: all 0.5s ease-in">
          <div
            class="
              z-20
              bg-base-200 bg-opacity-90
              backdrop-blur
              sticky
              top-0
              items-center
              gap-2
              px-4
              py-2
              flex
            "
          >
            <div class="flex-0 btn btn-ghost btn-disabled px-2">
              <div
                class="
                  font-title
                  text-primary
                  inline-flex
                  text-lg
                  transition-all
                  duration-200
                  md:text-3xl
                "
              >
                <span class="lowercase">LANDING</span>
                <span class="text-base-content lowercase">Page</span>
              </div>
            </div>
            <div class="flex-1 btn btn-ghost btn-disabled px-2"></div>

            <div
              class="
                flex-0
                link link-hover
                font-mono
                text-xs text-opacity-50 text-right
              "
            >
              <label for="drawer-menu" class="btn btn-ghost text-xl"> ✕ </label>
            </div>
          </div>
          <ul class="card menu menu-compact flex flex-col p-0 px-4">
            <li></li>
            <li class="menu-title"><span>Application Menu</span></li>
            <li>
              <a sveltekit:prefetch="" href="#home" class="flex gap-4" @click="menu=false">
                <span class="flex-1 text-1xl font-bold">Home</span>
              </a>
            </li>

            <li>
              <a sveltekit:prefetch="" href="#about" class="flex gap-4" @click="menu=false">
                <span class="flex-1 text-1xl font-bold">About</span>
              </a>
            </li>

            <li>
              <a sveltekit:prefetch="" href="#events" class="flex gap-4" @click="menu=false">
                <span class="flex-1 text-1xl font-bold">Events</span>
              </a>
            </li>

            <li>
              <a sveltekit:prefetch="" href="#contact" class="flex gap-4" @click="menu=false">
                <span class="flex-1 text-1xl font-bold">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      version: "0.00.1",
      routeList: [],
      scrollTop: 0,
      menu:false
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    changepage(page) {
      this.$router.push({ name: `${page}` });
    },
    logout() {
      localStorage.removeItem("jwt");
      this.$store.commit("isLogin", false);
      this.$router.push({ name: "login" });
    },
    scrolling() {
      this.scrollTop = this.$refs.msgContainer.scrollTop;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.scrollTop = this.$refs.msgContainer.scrollTop;
    });
  },
  watch: {},
};
</script>
