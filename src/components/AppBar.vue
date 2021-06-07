<template>
  <v-app-bar
      app
      color="#126328"
      dark
      elevate-on-scroll
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/drew-gill/drewgill.github.io"
        target="_blank"
        text
      >
        <span class="mr-2">View this site on GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>


      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        clipped
        app
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="green--text text--accent-4"
          >
            <v-list-item href="../home.html">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item href="../projects.html">
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>

            <v-list-item href="../resume.html">
              <v-list-item-title>Resume</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>

          </v-list-item-group>

        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
