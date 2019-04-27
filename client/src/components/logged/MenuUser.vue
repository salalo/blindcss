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
    logout() {
      axios.defaults.withCredentials = true;
      axios
        .get("http://localhost:8081/auth/logout")
        .then(res => console.log(res))
        .catch(err => console.error(err));
      VueCookies.remove("SESS");
      location.reload();
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

  &:hover {
    cursor: pointer;
  }

  img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
  }
}
</style>

