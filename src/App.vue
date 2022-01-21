<script>
import Sidebar from "./views/sidebar/Sidebar";
import { sidebarWidth } from "./views/sidebar/state";

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <div class="background"></div>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<style>
main {
  background-image: url("./assets/Background.png");
  object-fit: cover;
  object-position: center;
  position: fixed;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#background {
  object-fit: cover;
  object-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(4px);

  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
