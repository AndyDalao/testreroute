<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import { Auth } from "aws-amplify";

import '@fortawesome/fontawesome-free/js/all' 

export default {
  props: {},
  components: { SidebarLink },
  data() {
    return { isLoggedIn: false, isNotLoggedIn: true };
  },
  async created() {
    const isAuthenticated = await Auth.currentUserInfo();

    if (isAuthenticated) {
      let isLoggedIn = true;
      let isNotLoggedIn = false;
      this.isLoggedIn = isLoggedIn;
      this.isNotLoggedIn = isNotLoggedIn;
    } else {
      let isLoggedIn = false;
      let isNotLoggedIn = true;
      this.isLoggedIn = isLoggedIn;
      this.isNotLoggedIn = isNotLoggedIn;
    }
  },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>T</div>
      </span>
      <span v-else>Therapist Yourself</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <!-- <SidebarLink v-if="isNotLoggedIn" to="/Login" icon="fas fa-sign-in-alt"
      >Login</SidebarLink
    > 
    <SidebarLink v-if="isLoggedIn" to="/userProfile" icon="fas fa-user"
      >Profile</SidebarLink
    >
     <SidebarLink v-if="isLoggedIn" to="/userHistory" icon="fas fa-history"
      >History</SidebarLink
    > 
    <SidebarLink v-if="isLoggedIn" to="/logout" icon="fas fa-sign-out-alt"
      >LogOut</SidebarLink
    >-->

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
