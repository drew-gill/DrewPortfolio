<template>
  <v-card>
    <v-img
      :src="require('../assets/multnomahHeadshot.jpg')"
      max-height="500"
      contain
    />

    <v-card-title>
      Hi, I'm Drew!
    </v-card-title>
    <v-card-subtitle>
      Welcome to my portfolio site - take a look at the projects I have below!
    </v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
  components: {  },
    name: 'InfoCard',

    data: () => ({

    }),
  }
</script>
