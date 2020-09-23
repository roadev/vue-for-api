<template>
  <v-row>
    <v-col cols="12">
      <Table :headers="headers" :data="data" :itemsPerPage="10" />
    </v-col>
  </v-row>
</template>

<script>
import Table from "@/components/Table.vue";
import { getBuyers } from "@/services/api";
export default {
  components: {
    Table
  },

  created() {
    this.getBuyers();
  },

  methods: {
    async getBuyers() {
      const { buyers } = await getBuyers(new Date().getTime());
      console.log(buyers);
      this.data = buyers.map(p => ({
        id: p.id,
        name: p.name,
        age: p.age
      }));
    }
  },

  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Age", value: "age" }
      ],
      data: []
    };
  }
};
</script>

<style lang="css">
.table-container {
  width: 100%;
}
</style>
