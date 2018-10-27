<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-list dense subheader>
          <v-subheader>The main stuff</v-subheader>
          <v-list-tile>
            <router-link to="/">Home</router-link>
          </v-list-tile>
      </v-list>
      <v-list dense subheader>
          <v-subheader>AR.js Examples</v-subheader>
          <v-list-tile>
            <router-link to="/Basic">Basic</router-link>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>BLUR</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">SOURCE</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
