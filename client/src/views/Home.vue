<template>
  <div v-if="isLogged">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  <div v-else>
    <UnHeader></UnHeader>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import UnHeader from "@/components/unlogged/HomeHeader.vue";
import UnMain from "@/components/unlogged/HomeMain.vue";
import Header from "@/components/logged/home/Header.vue";
import Main from "@/components/logged/home/Lobbies.vue";
import Footer from "@/components/shared/HomeFooter.vue";
import { mapState } from "vuex";

export default {
  components: {
    UnHeader,
    UnMain,
    Header,
    Main,
    Footer
  },

  computed: {
    ...mapState("user", {
      isLogged: store => store.isLogged
    })
  },

  mounted() {
    this.$store.dispatch("user/login");
    this.$store.dispatch("user/getUserData");

    // manage user being in lobby or not
    if (
      window.location.pathname !== "/lobby" &&
      window.location.pathname !== "/game"
    ) {
      this.$store.dispatch("user/leaveLobby");

      this.$store.dispatch(
        "lobby/removePlayer",
        this.$store.state.user.about.id
      );
    }
    // facebook callback fix
    if (window.location.hash && window.location.hash == "#_=_") {
      window.location.hash = "";
    }
  }
};
</script>