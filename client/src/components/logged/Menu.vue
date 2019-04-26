<template>
  <nav>
    <span class="logo">BlindCSS</span>
    <span class="ranking">#1204</span>
    <User class="user"></User>
  </nav>
</template>

<script>
import User from "./MenuUser.vue";

export default {
  components: {
    User
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

nav {
  padding-top: 50px;

  .logo {
    margin-left: 150px;
    color: #fff;
    font-size: 20px;

    @media only screen and (max-width: 360px) {
      margin-left: 10px;
    }
  }
  .ranking {
    color: $light-grey;
    display: table;
    margin: 0 auto;
    margin-top: -20px;
  }

  .user {
    float: right;
    margin-top: -35px;
    margin-right: 150px;
  }
}

// BREAKPOINTS

@media only screen and (max-width: 700px) {
  nav {
    .logo {
      margin-left: 50px;
    }
    .user {
      margin-right: 50px;
    }
  }
}
@media only screen and (max-width: 400px) {
  nav {
    .logo {
      margin-left: 20px;
    }
    .user {
      margin-right: 20px;
    }
  }
}
</style>

