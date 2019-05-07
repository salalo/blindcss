<template>
  <div :class="home ? 'home-players' : 'lobby-players'">
    <!-- <span>{{lobbyId}}</span> -->
    <!-- <div class="player" v-for="user in users" :key="user"></div> -->

    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>
    <div class="player"></div>

    <Button
      text="JOIN!"
      type="active"
      class="join-btn"
      :style=" home ? 'margin-left: 50px;' : 'display: none;'"
      @click.native="joinLobby()"
    ></Button>
  </div>
</template>

<script>
import Button from "../shared/Button.vue";

export default {
  props: ["home", "lobbyId", "users", "timeLeft"],

  components: {
    Button
  },

  methods: {
    joinLobby() {
      //set socket id to lobby's id
      // this.$socket.id = lobby.id;
      this.$socket.emit(
        "join_lobby",
        this.$props.lobbyId,
        this.$store.state.user.about.id
      );
      this.$store.dispatch("user/joinLobby", this.$props.lobbyId);
      this.$store.dispatch("lobby/addPlayer", this.$store.state.user.about.id);
    }
  },

  mounted() {
    this.$store.watch(
      state => {
        return this.$store.state.lobby.users;
      },
      (newVal, oldVal) => {
        console.log(oldVal, newVal);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.player {
  width: 60px;
  height: 60px;
  background-color: $light-grey;
  margin-bottom: 20px;
  border-radius: 100%;
}

.home-players {
  max-width: 600px;
  height: 80px;
  border-top: 1px solid $hover-white;
  margin: 0 auto;
  padding: 10px 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  .player {
    margin: 0 10px;
  }

  @media (max-width: 400px) {
    padding: 10px 10px;
  }
}

.lobby-players {
  width: 60px;
  height: 380px;
  position: absolute;
  top: calc(50% - 190px);
  left: 20px;
}

// MOBILE

/* 
  Device = Most of the Smartphones Mobiles (Portrait)
  Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 500px) {
  .lobby-players {
    width: 380px;
    height: 60px;
    position: unset;
    margin: 0 auto;
    margin-top: 100px;

    .player {
      margin: 0 5px;
      display: inline-block;
    }
  }
}

@media (max-width: 700px) {
  .home-players {
    padding: 10px 10px;

    .player {
      margin: 0 5px;
    }
  }
}

// @media (max-width: 600px) {
//   .join-btn {
//     margin-left: 0;
//   }
// }
</style>

