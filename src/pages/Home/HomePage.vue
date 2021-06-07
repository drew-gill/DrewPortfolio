<template>
  <v-app>
    <AppBar/>

    <v-main class="siteBackground">
      <v-row>
        <IntroView/>
      </v-row>
      <v-row>
        <ExperienceView/>
      </v-row>
      <v-row>
        <ProjectView/>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>


import IntroView from '@/components/IntroView';
import ExperienceView from '@/components/ExperienceView.vue'
import ProjectView from '@/components/ProjectView.vue';
import AppBar from '@/components/AppBar.vue';


export default {
  name: 'HomePage',

  components: {
    IntroView,
    ExperienceView,
    ProjectView,
    AppBar
  },

  data: () =>
    ProjectView ({
    //
  }),
};
</script>
