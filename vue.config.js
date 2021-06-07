module.exports = {
  pages: {
    home: {
      entry: 'src/pages/Home/main.js',
      template: "public/index.html",
      filename: "home.html",
      title: "Home",
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    },
    projects: {
      entry: 'src/pages/Projects/main.js',
      template: "public/index.html",
      filename: "projects.html",
      title: "Projects",
      chunks: ['chunk-vendors', 'chunk-common', 'projects']
    },
    resume: {
      entry: 'src/pages/Resume/main.js',
      template: "public/index.html",
      filename: "resume.html",
      title: "Resume",
      chunks: ['chunk-vendors', 'chunk-common', 'resume']
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
