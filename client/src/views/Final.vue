<template>
  <div class="final-container">
    <Menu></Menu>
    <main>
      <div class="final-results">
        <div class="final">
          <div class="player"></div>
          <img src="@/assets/1.png" alt="result">
          <span>0 VOTES</span>
        </div>
        <div class="final">
          <div class="player"></div>
          <img src="@/assets/2.png" alt="result">
          <span>1 VOTE</span>
        </div>
        <div class="final">
          <div class="player"></div>
          <img src="@/assets/3.jpg" alt="result">
          <span>0 VOTES</span>
        </div>
        <div class="final">
          <div class="player"></div>
          <img src="@/assets/4.jpg" alt="result">
          <span>0 VOTES</span>
        </div>
        <div class="final">
          <div class="player"></div>
          <img src="@/assets/5.jpg" alt="result">
          <span>0 VOTES</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "../components/logged/Menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.final-container {
  width: 100vw;
  min-height: 100vh;
  background-color: $grey;

  main {
    margin-top: 20vh;
    width: 100vw;

    .final-results {
      padding: 0 20px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
      justify-content: center;
      grid-gap: 20px;

      @media only screen and (max-width: 1400px) {
        row-gap: 100px;
      }

      :last-child {
        margin-bottom: 100px;
      }

      .final {
        max-width: 250px;

        @media only screen and (max-width: 560px) {
          max-width: 100%;
        }

        .player {
          width: 60px;
          height: 60px;
          background-color: $light-grey;
          border-radius: 100%;
          margin: 0 auto;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

          &:hover {
            cursor: pointer;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 5px 5px rgba(0, 0, 0, 0.22);
          }

          @media only screen and (max-width: 560px) {
            float: left;
            margin: 70px 40px 0 auto;
          }
        }
        img {
          width: 250px;
          height: 150px;
          margin: 100px auto 30px auto;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

          &:hover {
            cursor: pointer;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }

          @media only screen and (max-width: 1400px) {
            margin-top: 30px;
          }
        }
        span {
          font-size: 20px;
          display: table;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>

