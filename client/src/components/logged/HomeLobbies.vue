<template>
  <div class="container">
    <p>Join or create a new lobby!</p>
    <i class="material-icons create-lobby-btn">add_circle</i>
    <div class="sort">
      <span>SORT</span>
      <i class="material-icons">sort</i>
    </div>

    <Lobby></Lobby>
    <Lobby></Lobby>
    <Lobby></Lobby>
    <Lobby></Lobby>

    <Button class="load-more-btn" type="outline" text="LOAD MORE"></Button>
  </div>
</template>

<script>
import Button from "../shared/Button.vue";
import Lobby from "../logged/HomeLobbiesLobby.vue";

export default {
  components: {
    Button,
    Lobby
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.container {
  background-color: $white;
  color: $grey;

  p {
    font-size: 50px;
    text-align: center;
    margin-top: 0;
    padding-top: 50px;
    margin-bottom: 50px;
  }

  .load-more-btn {
    margin: 100px auto 50px auto;
  }

  .create-lobby-btn {
    width: 80px;
    height: 80px;
    font-size: 80px;
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
    @include transition(0s, $duration color);

    &:hover {
      @include transition(0s, $duration color);
      cursor: pointer;
      color: $main;
    }
  }

  .sort {
    float: right;
    margin-right: 30%;
    display: table;
    margin-top: -50px;

    @media only screen and (max-width: 1500px) {
      margin-right: 25%;
    }

    @media only screen and (max-width: 1300px) {
      margin-right: 20%;
    }

    &:hover {
      cursor: pointer;
    }

    span {
      display: table-cell;
      vertical-align: middle;
      padding-right: 15px;
    }
  }
}

// BREAKPOINTS

@media only screen and (max-width: 900px) {
  .container {
    .sort {
      margin-right: 10%;
    }
    p {
      font-size: 40px;
    }
  }
}

@media only screen and (max-width: 640px) {
  .container {
    .sort {
      margin-right: 5%;
      margin-top: -35px;
      font-size: 14px;
    }
    p {
      font-size: 30px;
      padding-top: 20px;
      margin-bottom: 20px;
    }
    .create-lobby-btn {
      width: 60px;
      height: 60px;
      font-size: 60px;
      margin-bottom: 70px;
    }
  }
}
</style>

