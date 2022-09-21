<template>
  <div class="home" data-theme="bumblebee">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <!-- <h1 class="text-5xl font-bold">Hello there</h1> -->
          <!-- <p class="py-6"> -->
          <div
            class="card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100"
          >
            <div class="card-body">
              <h1 class="text-5xl font-bold text-primary">Login</h1>
              <p class="font-bold uppercase text-neutral text-opacity-60">
                Verify your access
              </p>
              <div class="form-control mt-4">
                <label class="label">
                  <span class="label-text text-opacity-60">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  class="input input-bordered"
                  v-model="authen.form.username"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-opacity-60">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  v-model="authen.form.password"
                />
                <!-- <label class="label">
                  <a
                    href="#"
                    class="label-text-alt link link-hover text-opacity-60"
                    >Forgot password?</a
                  >
                </label> -->
              </div>
              <div class="form-control mt-10">
                <button class="btn btn-primary" @click="authentication()">Login</button>
              </div>
            </div>
          </div>
          <!-- </p> -->
          <!-- <button class="btn btn-primary">Get Started</button> -->
        </div>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    ServiceUrl() {
      return this.$store.getters.serviceUrl;
    },
  },
  data() {
    return {
      authen: {
        form: {
          username: "",
          password: "",
        },
      },
    }
  },
  methods: {
    authentication() {
      fetch(`${this.$store.state.serviceUrl}authentication`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.authen.form.username,
          password: this.authen.form.password
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          // console.log(res)
          if (res.success) {
            // console.log("success")
            localStorage.setItem('jwt',res.jwt)
            // this.category.modal = false;
            // console.log(this.category.current);
            // this.category_search();
            // this.$route
            this.$router.push({ name: 'dashboard' })

          } else {
            localStorage.removeItem('jwt')
          }
          // callback(res.success ? res.rows : []);
        })
        .catch((error) => {
          // callback([]);
          console.error("Error:", error);
        });
    },
  },
};
</script>
