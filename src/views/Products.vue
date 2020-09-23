<template>
  <v-row>
    <v-col cols="12">
      <Table :headers="headers" :data="data" :itemsPerPage="10" />
    </v-col>
  </v-row>
</template>

<script>
import Table from "@/components/Table.vue";
import { getProducts } from "@/services/api";
export default {
  components: {
    Table,
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      const { products } = await getProducts(new Date().getTime());
      console.log(products);
      this.data = products.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
      }));
    },
  },

  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
      ],
      data: [],
    };
  },
};
</script>

<style lang="css" scoped>
.table-container {
  width: 100%;
}
</style>
