<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Input
          :buttonText="buttonText"
          :fetchTransactions="fetchTransactions"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Table :headers="headers" :data="data" :itemsPerPage="10" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Table from "@/components/Table.vue";
import Input from "@/components/Input.vue";
import { getTransactions } from "@/services/api";
export default {
  components: {
    Table,
    Input,
  },

  created() {},

  methods: {
    async getTransactions(buyerId) {
      const { transactions } = await getTransactions(buyerId);
      this.data = transactions
        .filter((t) => t.products)
        .map((p) => ({
          id: p.id,
          ip: p.ip,
          device: p.device,
          // products: p.product_ids,
          products:
            p.products && p.products.map((prod) => prod.name).join(", "),
        }));
    },

    fetchTransactions(buyerId) {
      this.getTransactions(buyerId);
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
        { text: "Products", value: "products" },
        { text: "IP", value: "ip" },
        { text: "Device", value: "device" },
      ],
      data: [],

      buttonText: "Get transactions",
    };
  },
};
</script>

<style lang="css">
.table-container {
  width: 100%;
}
</style>
