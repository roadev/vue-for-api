<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="buyerId"
            :rules="buyerRules"
            :counter="10"
            label="Buyer ID"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> -->
    <v-btn
      color="success"
      class="mr-4"
      @click="fetchTransactions(buyerId)"
      :disabled="!buyerId"
    >{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
export default {
  props: ["getData", "buttonText", "fetchTransactions"],
  data: () => ({
    valid: false,
    buyerId: "",
    buyerRules: [v => !!v || "Buyer ID is required"]
  }),

  methods: {
    validate() {
      this.getData();
      console.log(this.buyerId);
    }
  }
};
</script>
