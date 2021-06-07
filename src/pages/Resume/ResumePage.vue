<template>
  <v-app>
    <AppBar/>

    <v-main class="siteBackground">
      <pdf src="/Resume.pdf"></pdf>
    </v-main>
  </v-app>
</template>

<script>


import AppBar from '@/components/AppBar';
import pdf from 'vue-pdf';

export default {
  name: 'ResumePage',

  components: {
    AppBar,
    pdf
  },

};
</script>
