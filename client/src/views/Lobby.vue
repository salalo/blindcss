<template>
  <div class="waiting_room-container">
    <Menu></Menu>
    <Players></Players>
    <main>
      <div class="countdown">
        <span>CODING STARTS IN</span>
        <div class="countdown-timer">12s</div>
      </div>
      <div class="rules">
        <span>RULES</span>
        <div class="rules-paragraphs">
          <p>• You have to be focused on the current browser tab to take part in the game.</p>
          <p style="margin-left: 30px">• If you're not focused, countdown will begin.</p>
          <p style="margin-left: 60px">• When countdown is done you will be kicked from the lobby.</p>
          <p>• No pasting in available.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "../components/logged/Menu.vue";
import Players from "../components/logged/lobby/Players.vue";

export default {
  components: {
    Menu,
    Players
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.waiting_room-container {
  background-color: $grey;
  height: 100vh;
  width: 100vw;
}

main {
  margin-top: 10%;

  .countdown {
    max-width: 300px;
    margin: 0 auto;

    span {
      font-size: 30px;
      display: table;
      margin: 0 auto;
    }

    &-timer {
      color: $main;
      font-size: 100px;
      margin: 0 auto;
      margin-top: 15px;
      text-align: center;
    }
  }

  .rules {
    margin: 0 auto;
    max-width: 600px;
    margin-top: 10%;

    span {
      font-size: 50px;
      color: $main;
      font-weight: $medium;
    }

    p {
      margin: 7px 10px;
    }

    &-paragraphs {
      border-left: 5px solid $main;
    }
  }
}
</style>

