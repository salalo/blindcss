<template>
  <router-link to="/lobby">
    <div class="lobby-container">
      <div class="players">
        <div class="player"></div>
        <div class="player"></div>
        <div class="player"></div>
        <div class="player"></div>
        <div class="player"></div>
      </div>
      <div class="countdown">
        <span>CODING STARTS IN</span>
        <div class="countdown-timer">12s</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.lobby-container {
  max-width: 700px;
  height: 80px;
  border-top: 1px solid $hover-white;
  margin: 0 auto;
  padding: 20px 50px;
  @include transition(0s, $duration background-color);

  &:hover {
    @include transition(0s, $duration background-color);
    cursor: pointer;
    background-color: $hover-white;
  }

  .players {
    max-width: 70%;
    float: left;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    .player {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      margin-right: 30px;
      display: inline-block;
      background-color: $light-grey;
    }
  }

  .countdown {
    float: right;
    margin-right: 150px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0;

    span {
      color: $grey;
    }

    &-timer {
      color: $main;
      font-size: 50px;
      margin: 0 auto;
      text-align: center;
    }
  }
}

// BREAKPOINTS

@media only screen and (max-width: 800px) {
  .lobby-container {
    padding: 10px 30px;
    .players {
      .player {
        margin-right: 20px;
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .lobby-container {
    .players {
      .player {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
    }
    .countdown {
      font-size: 14px;
      &-timer {
        font-size: 40px;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .lobby-container {
    padding: 20px 10px;
    .players {
      .player {
        margin-right: 5px;
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>

