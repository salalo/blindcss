<template>
  <div class="waiting_room-container">
    <Menu></Menu>
    <Players></Players>
    <main>
      <div class="countdown">
        <span>CODING STARTS IN</span>
        <div class="countdown-timer">{{timeleft}}s</div>
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
import Players from "../components/logged/Players.vue";
import axios from "axios";

export default {
  data() {
    return {
      timeleft: 20
    };
  },

  components: {
    Menu,
    Players
  },

  // countdown only begins when lobby (players component) has 5 users
  mounted() {
    axios.defaults.withCredentials = true;

    axios
      .get("http://localhost:8081/game/checkLobby")
      .then(res => {
        if (res.data.lobbyIsFull) {
          let downloadTimer = setInterval(() => {
            this.timeleft--;
            this.timeleft <= 0 ? this.$router.push("/game") : null;
          }, 1000);
        }
      })
      .catch(err => console.error(err));
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
  margin-top: 20vh;

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
    max-width: 570px;
    margin-top: 20vh;

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

    @media only screen and (max-width: 800px) {
      margin-left: 100px;
    }
  }
}

// BREAKPOINTS

@media only screen and (max-width: 700px) {
  main {
    .countdown {
      margin-top: 30vh;
    }
    .rules {
      position: absolute;
      bottom: 20px;
      margin-left: calc(50vw - 250px);
      span {
        font-size: 30px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  main {
    margin-top: 10vh;

    .countdown {
      margin-top: 10vh;

      span {
        font-size: 20px;
      }
      &-timer {
        font-size: 50px;
      }
    }
    .rules {
      margin-left: 10px;
      margin-top: 10vh;
      position: unset;
    }
  }
}
</style>

