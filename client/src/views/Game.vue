<template>
  <div class="game-container">
    <Players></Players>
    <Editor class="editor"></Editor>
    <div class="countdown">
      <span>TIME LEFT</span>
      <div class="countdown-timer">{{gameTimeLeft}}</div>
    </div>
  </div>
</template>

<script>
import Players from "../components/logged/Players.vue";
import Editor from "../components/logged/TheGameTextEditor.vue";

export default {
  data() {
    return {
      // minutesLeft: 1,
      // secondsLeft: 12,
      gameTimeLeft: 1 + "m " + 12 + "s"
    };
  },

  components: {
    Players,
    Editor,
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.game-container {
  height: 100vh;
  width: 100vw;
  background-color: $grey;

  .editor {
    float: right;
    height: 100%;
    width: 80%;
  }

  .countdown {
    position: absolute;
    bottom: 50px;
    left: 10vh;

    span {
      font-size: 20px;
      display: table;
      margin: 0 auto;
    }

    &-timer {
      color: $main;
      font-size: 50px;
      margin: 0 auto;
      margin-top: 15px;
      text-align: center;
    }
  }
}
</style>
