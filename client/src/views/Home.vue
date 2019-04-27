<template>
  <div v-if="isLogged">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  <div v-else>
    <UnHeader></UnHeader>
    <UnMain></UnMain>
    <Footer></Footer>
  </div>
</template>

<script>
import UnHeader from "@/components/unlogged/HomeHeader.vue";
import UnMain from "@/components/unlogged/HomeMain.vue";
import Header from "@/components/logged/home/Header.vue";
import Main from "@/components/logged/home/Lobbies.vue";
import Footer from "@/components/shared/HomeFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      isLogged: false
    };
  },

  components: {
    UnHeader,
    UnMain,
    Header,
    Main,
    Footer
  },

  mounted() {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8081/auth/checkAuth")
      .then(res => {
        res.data === "unlogged"
          ? (this.isLogged = false)
          : (this.isLogged = true);
      })
      .catch(err => console.error(err));
    // console.log("isLogged:", this.isLogged);
  }
};
</script>