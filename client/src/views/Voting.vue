<template>
  <div class="voting-container">
    <Menu></Menu>
    <Players></Players>
    <main>
      <!-- <span class="votes-indicator">{{votesToGO}} {{votesToGO === 1 ? "VOTE" : "VOTES"}} LEFT</span> -->
      <div class="countdown">
        <span>PICK THE BEST OUTCOME</span>
        <div class="countdown-timer">{{votingTimeLeft}}s</div>
      </div>
      <Results></Results>
    </main>
  </div>
</template>

<script>
import Players from "../components/logged/Players.vue";
import Menu from "../components/logged/Menu.vue";
import Results from "../components/logged/TheVotingResults.vue";

export default {
  data() {
    return {
      votingTimeLeft: 20,
      votesToGO: 5
    };
  },
  components: {
    Menu,
    Players,
    Results
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.voting-container {
  background-color: $grey;
  width: 100vw;
  min-height: 100vh;

  main {
    margin-top: 15vh;
    width: 100vw;

    .countdown {
      margin: 0 auto;
      margin-bottom: 10vh;

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
}
</style>
