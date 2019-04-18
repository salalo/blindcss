<template>
  <div>
    <UnHeader></UnHeader>
    <UnMain></UnMain>
    <Footer></Footer>
  </div>
</template>

<script>
import UnHeader from "@/components/unlogged/HomeHeader.vue";
import UnMain from "@/components/unlogged/HomeMain.vue";
import Footer from "@/components/shared/HomeFooter.vue";

export default {
  components: {
    UnHeader,
    UnMain,
    Footer
  }
};
</script>