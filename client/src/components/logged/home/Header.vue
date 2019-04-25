<template>
  <header>
    <Menu></Menu>
    <section>
      <span>Write CSS blindfolded!</span>
      <div
        class="upper-paragraph"
      >Given the image try to transform it to CSS, after time see the results of all players and select the best one.</div>
      <div
        class="bottom-paragraph"
      >Find a match automatically by clicking button below or scroll down for more.</div>
      <Button class="play-btn" type="active" text="PLAY NOW!"></Button>
    </section>
  </header>
</template>

<script>
import Button from "../../shared/Button.vue";
import Menu from "../Menu.vue";

export default {
  components: {
    Button,
    Menu
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
section {
  margin-top: 300px;
  text-align: center;
  span {
    font-size: 50px;
    color: #fff;
    font-weight: $medium;
  }
  .upper-paragraph {
    margin: 10px auto;

    font-size: 20px;
    border-bottom: 1px solid $light-grey;
    max-width: 700px;
    padding-bottom: 25px;
  }
  .bottom-paragraph {
    margin: 20px auto;
    max-width: 450px;
  }
  .play-btn {
    margin: 0 auto;
  }

  @media only screen and (max-width: 360px) {
    margin-top: 100px !important;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 200px;
  }

  @media only screen and (max-height: 768px) {
    margin-top: 200px;
  }
}

// BREAKPOINTS

@media only screen and (max-width: 700px) {
  section {
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
  }
}
</style>

