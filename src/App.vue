<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/buyers">
          <v-list-item-action>
            <v-icon>fas fa-users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Compradores
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/transactions">
          <v-list-item-action>
            <v-icon>fas fa-money-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- <router-link to="/transactions" class="router-link"> -->
            <v-list-item-title>
              Transacciones
            </v-list-item-title>
            <!-- </router-link> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/products">
          <v-list-item-action>
            <v-icon>fas fa-utensils</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- <router-link to="/transactions" class="router-link"> -->
            <v-list-item-title>
              Productos
            </v-list-item-title>
            <!-- </router-link> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/" class="router-link router-link-header">
        <v-toolbar-title>Roa's Restaurant</v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss" scoped>
.router-link-header {
  color: #ffffff;
}
</style>

<style lang="css">
.router-link {
  text-decoration: none;
}
</style>
