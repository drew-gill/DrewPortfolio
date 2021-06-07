<template>
  <v-container>
    <v-row 
      class="text-center fill-height"
    >
      <v-col class="mb-4">

        <v-row class="text-center">
          <v-col cols="12" md="8"><v-spacer></v-spacer></v-col>
          <v-col
            cols="12"
            md="4"
          >
            <LogoCarousel/>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LogoCarousel from './LogoCarousel.vue'
  export default {
  components: { 
      LogoCarousel 
    },
    name: 'ExperienceView',

    data: () => ({

    }),
  }
</script>
