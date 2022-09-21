<template>
  <div>
    <!-- <label for="my-modal-3" class="btn modal-button">open modal</label> -->

    <!-- Put this part before </body> tag -->
    <!-- <input type="checkbox" id="modal-product" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="modal-product" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>

<input type="checkbox" id="modal-catelog" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="modal-catelog" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div> -->
    <slot name="modal"></slot>
    <div class="shadow bg-base-100 drawer h-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-center justify-center drawer-content">
        <div class="drawer">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
          <div
            class="drawer-content flex flex-col"
            ref="msgContainer"
            @scroll="scrolling()"
          >
            <!-- Navbar -->
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
                <label for="my-drawer-2" class="btn btn-square btn-ghost">
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
                  <a href="/#contact" class="btn btn-ghost btn-sm rounded-btn">
                    Contact
                  </a>
                </div>
              </div>
              <div class="flex-none mr-2">
                <!-- for="modal-joinnows" -->
                <label
                  for="modal-joinnows"
                  class="btn btn-sm btn-outline modal-button"
                  >Login / Sign up</label
                >
                <!-- <button class="btn btn-sm btn-outline">Login / Sign up</button> -->
                <!-- <button class="btn btn-square btn-ghost">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
		</svg>
	  </button> -->
              </div>
            </div>
            <!-- Page content here -->
            <!-- <router-view /> -->
            <slot name="view"></slot>
          </div>
        </div>
      </div>
      <div class="drawer-side w-100">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <div class="bg-base-200 w-80">
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
            <a
              href="#"
              aria-current="page"
              aria-label="Homepage"
              class="flex-0 btn btn-ghost px-2"
            >
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
                <span class="lowercase">admin</span>
                <span class="text-base-content uppercase">UI</span>
              </div>
            </a>
            <a
              href="#"
              class="
                flex-1
                link link-hover
                font-mono
                text-xs text-opacity-50 text-right
              "
            >
              <div data-tip="Changelog" class="tooltip tooltip-bottom">
                Anyi@{{ version }}
              </div>
            </a>
          </div>
          <!-- <ul class="menu menu-compact flex flex-col p-0 px-4">
            <li>
              <a
                sveltekit:prefetch=""
                href="#"
                id=""
                class="flex gap-4"
                @click="changepage('dashboard')"
                :class="$route.name == 'dashboard' ? 'active' : ''"
              >
                <span class="flex-none">
                  <font-awesome-icon icon="fa-solid fa-home" size="1x" />
                </span>
                <router-link to="/">Home</router-link>
                <span class="flex-1">Dashboard </span>
              </a>
            </li>
            <li>
              <a
                sveltekit:prefetch=""
                href="#"
                id=""
                class="flex gap-4"
                @click="changepage('product')"
                :class="$route.name == 'product' ? 'active' : ''"
              >
                <span class="flex-none">
                  <font-awesome-icon icon="fa-solid fa-box-archive" size="1x" />
                </span>
                <span class="flex-1">Product</span>
              </a>
            </li>
            <li>
              <a
                sveltekit:prefetch=""
                href="#"
                id=""
                class="flex gap-4"
                @click="changepage('category')"
                :class="$route.name == 'category' ? 'active' : ''"
              >
                <span class="flex-none">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list" />
                </span>
                <span class="flex-1">Category</span>
              </a>
            </li>
            <li>
              <a
                sveltekit:prefetch=""
                href="#"
                id=""
                class="flex gap-4"
                @click="changepage('store')"
                :class="$route.name == 'store' ? 'active' : ''"
              >
                <span class="flex-none">
                  <font-awesome-icon icon="fa-solid fa-store" />
                </span>
                <span class="flex-1">Store</span>
              </a>
            </li>
          </ul> -->

          <ul class="card menu menu-compact flex flex-col p-0 px-4">
            <li></li>
            <li class="menu-title"><span>Management</span></li>
            <li v-for="route in routeList" :key="route.name">
              <a
                sveltekit:prefetch=""
                href="#"
                :id="route.name"
                class="flex gap-4"
                @click="changepage(route.name)"
                :class="$route.name == route.name ? 'active' : ''"
              >
                <span class="flex-1">{{ route.name }}</span>
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
      // currentPath: window.location.hash
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    changepage(page) {
      console.log(page);
      //  this.$router.push({name:`${page}`, params:{}});
      this.$router.push({ name: `${page}` });
      // this.$route.name = page
      // $vm.proxy.$router.push({name:'product'})
      // return routes[this.currentPath.slice(1) || '/'] || NotFound
    },
    logout() {
      localStorage.removeItem("jwt");
      this.$store.commit("isLogin", false);
      this.$router.push({ name: "login" });
    },
    scrolling() {
      this.scrollTop = this.$refs.msgContainer.scrollTop;
      // console.log(this.scrollTop);
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.scrollTop = this.$refs.msgContainer.scrollTop;
    });
    // console.log(this.$refs.msgContainer.scrollTop)

    // document.addEventListener('scroll', this.test)

    // let routeList = this.$router.getRoutes();
    // routeList.forEach((v, i) => {
    //   if (v.props.default.menu) {
    //     this.routeList.push(v);
    //   }
    // });
    // console.log(this.$router.getRoutes())
    // window.addEventListener('hashchange', () => {
    //   this.currentPath = window.location.hash
    // })
  },
  watch: {
    // '$refs.msgContainer.scrollTop': function(val){
    //   this.$nextTick(() => {
    //       console.log("coming at ya from nextTick!");
    //       console.log(val)
    //       console.log("this.$refs", this.$refs);
    //       this.$refs.flashes.scrollTop = 0;
    //     });
    // },
    // count: function() {
    //   this.$nextTick(function() {
    //     var container = this.$refs.msgContainer;
    //     container.scrollTop = container.scrollTop+10;
    //     console.log(container.scrollTop)
    //   });
    // }
  },
};
</script>
