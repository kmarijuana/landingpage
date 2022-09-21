<template>
  <div data-theme="wireframe" class="scroll-smooth">
    <router-view />
  </div>
</template>

<style lang="scss">
#app,* {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	--font-mono: 'Fira Mono', monospace;
	--pure-white: #ffffff;
	--primary-color: #b9c6d2;
	--secondary-color: #d0dde9;
	--tertiary-color: #edf0f8;
	--accent-color: #ff3e00;
	--heading-color: rgba(0, 0, 0, 0.7);
	--text-color: #444444;
	--background-without-opacity: rgba(255, 255, 255, 0.7);
	--column-width: 42rem;
	--column-margin-top: 4rem;
}



body {
	min-height: 100vh;
	margin: 0;
	/* background-color: var(--primary-color); */
	/* background: linear-gradient(
		180deg,
		var(--primary-color) 0%,
		var(--secondary-color) 10.45%,
		var(--tertiary-color) 41.35%
	); */
}

body::before {
	content: '';
	width: 80vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 10vw;
	z-index: -1;
	background: radial-gradient(
		50% 50% at 50% 50%,
		var(--pure-white) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	opacity: 0.05;
}

#svelte {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

h1,
h2,
p {
	font-weight: 400;
	color: var(--heading-color);
}

p {
	line-height: 1.5;
}

a {
	color: var(--accent-color);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

h1 {
	font-size: 2rem;
	text-align: center;
}

h2 {
	font-size: 1rem;
}

pre {
	font-size: 16px;
	font-family: var(--font-mono);
	background-color: rgba(255, 255, 255, 0.45);
	border-radius: 3px;
	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
	padding: 0.5em;
	overflow-x: auto;
	color: var(--text-color);
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button:focus:not(:focus-visible) {
	outline: none;
}

@media (min-width: 720px) {
	h1 {
		font-size: 2.4rem;
	}
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
/* width */
::-webkit-scrollbar {
  width: 7.5px;
  height: 7.5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b6b6b6;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a4a4a4;
}
</style>

<script>
export default {
  name: "app",
  computed: {
    ServiceUrl() {
      return this.$store.getters.serviceUrl;
    },
    // isLogin() {
    //   return this.$store.getters.isLogin;
    // },
  },
  data() {
    return {
      version: "0.00.1",
      routeList: [],
      ready:false
      // currentPath: window.location.hash
    };
  },
  methods: {
    changepage(page) {
      this.$router.push({ name: `${page}` });
    },
 
  },
  mounted() {
  },
  watch: {
  },
};
</script>
