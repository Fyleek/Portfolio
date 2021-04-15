<!DOCTYPE html>
<template>
  <div class="pt-150 txt">
    <div class="container pb-100">
      Script de données:
      <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          spellcheck="false"
          v-model="data"
      ></textarea>
      <br />
      <base-button
          class="btn-block"
          type="warning"
          @click="Hash(data)"
          style="margin-bottom: 25px;"
      >☠️</base-button
      >
      <div class="row">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>QUESTION</th>
            <th>REPONSE</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="anglais in data_end" :key="anglais.id">
            <td>{{ anglais.question }}</td>
            <td>{{ anglais.reponse }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RIP_EMA",
  data() {
    return {
      data: "",
      data_end: []
    };
  },
  methods: {
    Hash: function(script) {
      this.data_end = [];
      const paraph = script;
      const regex = /\{\\"correct\\":true,\\"tipsAndFeedback\\":{\\"tip\\":\\"\\",\\"chosenFeedback\\":\\"\\",\\"notChosenFeedback\\":\\"\\"\},\\"text\\":\\"<div>./g;
      //const regex = /\{\\"correct\\":true,\\"tipsAndFeedback\\":\{\\"chosenFeedback\\":\\"(.*?)\\",\\"notChosenFeedback\\":\\"(.*?)\\",\\"tip\\":\\"\\"},\\"text\\":\\"<div>./g;
      const found = paraph.match(regex);
      let nbr_valeur = found.length;
      let i = 0;
      while (i < nbr_valeur) {
        this.data_end.push({
          question: i + 1,
          reponse: found[i].slice(-1)
        });
        i++;
      }
    }
  }
};
</script>

<style scoped>
.txt {
  text-align: center;
}
</style>
