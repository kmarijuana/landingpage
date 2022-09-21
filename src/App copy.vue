<template>
  <div data-theme="lemonade">
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

    <div class="shadow bg-base-100 drawer drawer-mobile h-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-center justify-center drawer-content">
        <div class="drawer">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div
              class="
                w-full
                navbar
                bg-base-100
                z-20
                sticky
                top-0
                shadow
                gap-2
                px-4
                py-2
                flex
              "
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
              <div class="flex-1 hidden px-2 mx-2 lg:flex">
                <span class="text-lg font-bold text-neutral">
                  Management Systems
                </span>
              </div>
              <div class="flex-1 lg:flex-none"></div>
              <!-- <div class="flex-none">
                <button class="btn btn-square btn-ghost">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div> -->
              <!-- <div class="flex-none">
                <button class="btn btn-square btn-ghost">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </button>
              </div> -->
              <div class="flex-none">
                <!-- <div class="avatar">
                  <div class="rounded-full w-10 h-10 m-1">
                    <img src="https://i.pravatar.cc/500?img=32" />
                  </div>
                </div> -->
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="
                      mt-3
                      p-2
                      shadow
                      menu menu-compact
                      dropdown-content
                      bg-base-100
                      rounded-box
                      w-52
                    "
                  >
                    <li>
                      <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                      </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Page content here -->
            <router-view />
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
              href="/"
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
              href="/#"
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
          <ul class="menu menu-compact flex flex-col p-0 px-4">
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
      // currentPath: window.location.hash
    };
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
  },
  computed: {},
  mounted() {
    this.routeList = this.$router.getRoutes();
    // window.addEventListener('hashchange', () => {
    //   this.currentPath = window.location.hash
    // })
  },
};
</script>
