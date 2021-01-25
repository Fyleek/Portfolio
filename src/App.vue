<template>
  <v-app>
    <v-app v-if="type != 'Error 404'">
      <p-toolbar />
      <v-main style="background-color: white">
        <router-view />
      </v-main>
      <p-footer />
    </v-app>
    <v-app v-if="type == 'Error 404'">
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-app>
</template>

<script>
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";

export default {
  name: "App",

  components: {
    PToolbar,
    PFooter
  },
  data() {
    return{
      type: this.$route.name,
    }
  },
};
</script>
