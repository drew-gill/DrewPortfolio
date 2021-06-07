<template>
  <v-app>
    <AppBar/>
    <v-main class="siteBackground">
      test
    </v-main>
  </v-app>
</template>

<script>

import AppBar from '@/components/AppBar.vue'
export default {
  name: 'ProjectPage',

  components: {
    AppBar
  },

  data: () =>
     ({
    //
  }),
};
</script>
