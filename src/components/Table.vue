<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="itemsPerPage"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  props: ["headers", "data", "itemsPerPage"]
};
</script>
