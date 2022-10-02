<template>
  <div class="home" data-theme="bumblebee">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
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
              </div>
              <div class="form-control mt-10">
                <button class="btn btn-primary" @click="authentication()">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
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
    };
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
          password: this.authen.form.password,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            localStorage.setItem("jwt", res.jwt);
            this.$router.push({ name: "dashboard" });
          } else {
            localStorage.removeItem("jwt");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
