<template>
  <header>
    <nav>
      <span class="logo">BlindCSS</span>

      <div class="reglog">
        <a href="http://localhost:8081/auth/google">
          <img src="@/assets/google_logo.png" alt="google logo">
        </a>
        <a href="http://localhost:8081/auth/facebook">
          <img src="@/assets/fb_logo.png" alt="facebook logo">
        </a>
      </div>
    </nav>

    <section>
      <span>Write CSS blindfolded!</span>
      <div
        class="upper-paragraph"
      >Given the image try to transform it to CSS, after time see the results of all players and select the best one.</div>
      <div
        class="bottom-paragraph"
      >You can play without account created, although your account will not appear in the ranking.</div>
      <Button class="play-btn" type="active" text="Play now!"></Button>
    </section>
  </header>
</template>

<script>
import Button from "../shared/Button.vue";
export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

header {
  height: 100vh;
  min-height: 700px;
  background-color: $grey;
}
nav {
  padding-top: 50px;

  .logo {
    margin-left: 150px;
    color: #fff;
    font-size: 20px;
  }
  .reglog {
    float: right;
    margin: -7px 130px 0 0;
    height: 40px;

    img {
      position: relative;
      width: 20px;
      height: 20px;
      top: 10px;
    }
    a {
      border-radius: 100%;
      height: 40px;
      width: 40px;
      background-color: $light-grey;
      float: left;
      text-align: center;
      margin-right: 20px;
      @include transition(0s, $duration background-color);

      &:hover {
        cursor: pointer;
        @include transition(0s, $duration background-color);
        background-color: $hover-white;
      }
    }
  }
}
section {
  margin: calc(40vh - 100px) 0 0 150px;

  span {
    font-size: 50px;
    color: #fff;
    font-weight: $medium;
  }
  .upper-paragraph {
    font-size: 20px;
    border-bottom: 1px solid $light-grey;
    max-width: 700px;
    padding-bottom: 25px;
    margin: 10px 0;
  }
  .bottom-paragraph {
    margin: 20px 0;
    max-width: 450px;
  }
}

// BREAKPOINTS

@media only screen and (max-width: 900px) {
  nav {
    .logo {
      margin-left: 50px;
    }
    .reglog {
      margin-right: 50px;
    }
  }
  section {
    margin-left: 50px;
  }
}

@media only screen and (max-width: 700px) {
  section {
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;

    span {
      font-size: 35px;
    }
    .upper-paragraph {
      font-size: 16px;
      margin: 10px auto;
      max-width: 90%;
    }
    .bottom-paragraph {
      margin: 20px auto;
    }
    .play-btn {
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 500px) {
  section {
    margin-top: 200px;
  }
}

@media only screen and (max-width: 360px) {
  nav {
    .logo {
      margin-left: 10px;
    }
    .reglog {
      margin-right: 10px;
    }
  }
  section {
    margin-top: 100px !important;
  }
}

// HEIGHT
@media only screen and (max-height: 768px) {
  section {
    margin-top: 200px;
  }
}
</style>
