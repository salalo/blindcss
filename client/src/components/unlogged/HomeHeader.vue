<template>
  <header>
    <nav>
      <span class="logo">BlindCSS</span>
      <span class="sign-btn sign-up">Sign Up</span>
      <span class="sign-btn">Sign In</span>
    </nav>

    <section>
      <span>Write CSS blindfolded!</span>
      <div
        class="upper-paragraph"
      >Given the image try to transform it to CSS, after time see the results of all players and choose the best one.</div>
      <div
        class="bottom-paragraph"
      >You can play without account created, although your account will not appear in the ranking.</div>
      <Button class="play-btn" text="Play now!"></Button>
    </section>
  </header>
</template>

<script>
import Button from "../Button.vue";
export default {
  components: {
    Button
  }
};
</script>

<style <style lang="scss" scoped>
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
  .sign-btn {
    @include transition(0s, $duration color);

    &:hover {
      @include transition(0s, $duration color);
      cursor: pointer;
      color: $hover-white;
    }
  }
  .sign-up {
    margin: 0 150px 0 50px;
  }
  .sign-btn {
    float: right;
  }
}
section {
  margin: 300px 0 0 150px;

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
    .sign-up {
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

@media only screen and (max-width: 360px) {
  nav {
    .logo {
      margin-left: 10px;
    }
    .sign-up {
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
@media only screen and (max-width: 500px) {
  section {
    margin-top: 200px;
  }
}
</style>
