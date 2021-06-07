<template>
  <v-card>
    <v-card-title>
      Work History
    </v-card-title>
    <v-card-subtitle>
      Some awesome places I've had the chance to work at!
    </v-card-subtitle>
    <v-carousel
      cycle
      height="300"
      width="300"
    >
      <v-carousel-item
        v-for="(logo, i) in logoCarousel"
        :key="i"
        :src="logo.src"
        :href="logo.link"
        target="_blank"
        reverse-transition="fade-transition"
        transition="fade-transition"
        contain
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
  export default {
    name: 'LogoCarousel',

    data: () => ({
      logoCarousel: [
        {
          src: require('../assets/amazonLogo.svg'),
          link: "https://www.aboutamazon.com/about-us"
        },
        {
          src: require('../assets/dteLogo.png'),
          link: "https://www.ufdreamteam.org/dream-team-engineering"
        },
        {
          src: require('../assets/eacnLogo.jpg'),
          link: "https://equalaccess.med.ufl.edu/"
        },
        {
          src: require('../assets/pfizerLogo.jpg'),
          link: "https://www.pfizer.com/"
        }
      ]
    }),
  }
</script>
