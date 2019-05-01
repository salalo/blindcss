<template>
  <div class="user-container" @click="logout()">
    <img src="@/assets/user_avatar.jpg" alt="user avatar">
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  methods: {
    async logout() {
      axios.defaults.withCredentials = true;
      try {
        axios.get("http://localhost:8081/auth/logout");
      } catch (err) {
        console.error(err);
      }

      await VueCookies.remove("SESS");
      await location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.user-container {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: $light-grey;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
  }

  img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
  }
}
</style>

