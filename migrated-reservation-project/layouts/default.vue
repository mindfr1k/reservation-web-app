<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" temporary app>
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon 
      class="hidden-sm-and-up" 
      @click="sidebar = !sidebar">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-flex xs8 ml-4 mr-2 v-if="searchField">
        <v-text-field
        label="Введите название вида..."  
        hide-details
        solo
        append-icon="search"/>
      </v-flex>

      <v-toolbar-items class="hidden-xs-only">
          <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
              <v-icon left>{{ item.icon }}</v-icon>  
              {{ item.title }}
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer>
      <v-flex xs12 class="text-xs-center">
        <span>&copy; 2018 Василюк Роман</span>
      </v-flex>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sidebar: false
      }
    },
    computed: {
      appTitle() {
        return this.$store.state.appTitle;
      },
      menuItems() {
        return this.$store.state.menuItems;
      },
      searchField() {
        const pages = this.$store.state.searchNeededPages.reduce((acc, value) => {
          return `${acc}|${value}`;
        });

        if (this.$route.name) {
          return this.$route.name.match(pages);
        }   
      }
    }
  }
</script>