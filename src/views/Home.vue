<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <router-link :to="card.to" class="router-link">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Productos",
        src:
          "https://www.iconfinder.com/data/icons/china-traditional-culture-cartoon-2/512/g29749-512.png",
        flex: 12,
        to: "/products"
      },
      {
        title: "Clientes",
        src:
          "https://www.iconfinder.com/data/icons/restaurants-and-dining-flat/340/meal_woman_food_client_dinner_restaurant_eat_enjoy-512.png",
        flex: 6,
        to: "/buyers"
      },
      {
        title: "Compras",
        src:
          "https://us.123rf.com/450wm/artsonik/artsonik1812/artsonik181200095/126897147-receipt-icon-in-a-flat-style-isolated-on-a-colored-background-invoice-sign-bill-atm-template-or-rest.jpg?ver=6",
        flex: 6,
        to: "/transactions"
      }
    ]
  })
};
</script>

<style lang="css" scoped>
.router-link {
  text-decoration: none;
}
</style>
