<template>
  <div class="results-container">
    <div class="result">
      <img src="@/assets/1.png" alt="result">
      <i class="material-icons zoom_in">zoom_in</i>
      <i class="material-icons vote">how_to_vote</i>
    </div>
    <div class="result">
      <img src="@/assets/2.png" alt="result">
      <i class="material-icons zoom_in">zoom_in</i>
      <i class="material-icons vote">how_to_vote</i>
    </div>
    <div class="result">
      <img src="@/assets/3.jpg" alt="result">
      <i class="material-icons zoom_in">zoom_in</i>
      <i class="material-icons vote">how_to_vote</i>
    </div>
    <div class="result">
      <img src="@/assets/4.jpg" alt="result">
      <i class="material-icons zoom_in">zoom_in</i>
      <i class="material-icons vote">how_to_vote</i>
    </div>
    <div class="result">
      <img src="@/assets/5.jpg" alt="result">
      <i class="material-icons zoom_in">zoom_in</i>
      <i class="material-icons vote">how_to_vote</i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.results-container {
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  justify-content: center;
  grid-gap: 20px;

  // longen the space after last mobile el
  :last-child {
    margin-bottom: 100px;
  }

  .result {
    width: 250px;
    height: 150px;

    i {
      position: relative;
      bottom: 67%;
      left: 0;
      font-size: 40px;
      @include transition(0s, $duration color);
      color: rgba(36, 36, 36, 0);

      &:hover {
        cursor: pointer;
        @include transition(0s, $duration color);
        color: $main;
      }
    }

    .zoom_in {
      left: 67%;
    }
  }

  img {
    width: 250px;
    height: 150px;
    @include transition(0s, $duration opacity);
    opacity: 1;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      cursor: pointer;
      @include transition(0s, $duration opacity);
      opacity: 0.5;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);

      ~ i {
        @include transition(0s, $duration color);
        color: rgba(36, 36, 36, 1);
      }
    }
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(250px, max-content));
  }
}
</style>

