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
            <InfoCard/>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InfoCard from './InfoCard.vue'
  export default {
  components: { 
      InfoCard 
    },
    name: 'IntroView',

    data: () => ({

    }),
  }
</script>
