<template>
  <div class="txt">
    <div class="container">
      <v-row>
        <v-col>
          <h2><b>Script de données:</b></h2>
          <br>
          <v-textarea
              solo
              name="input-7-4"
              label="Code..."
              v-model="data"
          ></v-textarea>
          <br>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
              elevation="2"
              @click="Hash(data)"
              x-large
              style="font-size: 50px;"
          >☠</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
              :headers="headers"
              :items="data_end"
              :items-per-page="10"
              class="elevation-5"
          >
            <template v-slot:item="item">
              <tr>
                <td class="text-xs">{{ item.item.question }}</td>
                <td class="text-xs">{{ item.item.reponse }}</td>
                <td class="text-xs"><v-checkbox></v-checkbox></td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "RIP_EMA",
  data() {
    return {
      data: "",
      data_end: [],
      headers: [
        {
          text: 'Question',
          align: 'center',
          sortable: false,
          value: 'question',
        },
        { text: 'Réponse', align:'center', value: 'res' ,sortable: false },
        { text: 'Check', value: 'checked' ,sortable: false },
      ],
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
  padding-top: 100px;
}
@charset "UTF-8";

form {
  padding: 1em 1em 1.25em 1em;
}

form .inputBox {
  display: block;
  position: relative;
  margin: 1.25em 0 1.75em 0
}

form .inputBox:last-child {
  margin: 1.25em 0 1em 0;
}

form .inputBox > input,
form .inputBox > textarea {
  border-bottom: 2px solid currentColor;
  outline: none;
  transition: .3s all;
}
form .inputBox > input {
  padding-left: 30px;
  width: 100%;
}

form .inputBox > input::placeholder,
form .inputBox > textarea::placeholder {
  opacity: 0;
}
form .inputBox > input:focus::placeholder,
form .inputBox > textarea:focus::placeholder {
  opacity: .5;
}

form .inputBox > .addonBefore {
  left: 2px;
  pointer-events: none;
  position: absolute;
  top: -1px;
}

form .inputBox > .addonAfter ~ input {
  padding-right: 30px;
}

form .inputBox > .addonAfter {
  position: absolute;
  right: 2px;
  top: 0;
}

form .inputBox > .addonAfter > span {
  cursor: pointer;
}

form .inputBox > label {
  left: 30px;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: .3s all;
}
form .inputBox > label::first-letter {
  text-transform: capitalize;
}

form .inputBox > label,
form .inputBox > input,
form .inputBox > textarea {
  box-shadow: none;
  font-size: 16px;
  letter-spacing: 1px;
  outline: none;
  padding-bottom: 10px;
}

form .inputBox > input:focus ~ label,
form .inputBox > input:valid ~ label,
form .inputBox > input[value]:invalid ~ label,
form .inputBox > textarea:focus ~ label,
form .inputBox > textarea:valid ~ label,
form .inputBox > textarea[value]:invalid ~ label {
  font-size: 12px;
  left: 0;
  top: -18px;
}

form .inputBox > input:focus,
form .inputBox > textarea:focus {
  border-color: var(--color-focus) !important;
}
form .inputBox > input:valid,
form .inputBox > textarea:valid {
  border-color: var(--color-valid);
}
form .inputBox > input[value]:invalid,
form .inputBox > textarea[value]:invalid {
  border-color: var(--color-warn);
}

form .container {
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

form .container > input[type="checkbox"],
form .container > input[type="radio"] {
  bottom: 0;
  cursor: pointer;
  height: 0;
  left: 2px;
  opacity: 0;
  position: absolute;
  width: 0;
}

form .container > .checkmark {
  border: 2px solid currentColor;
  border-radius: 2px;
  box-sizing: border-box;
  height: 18px;
  left: 0;
  position: absolute;
  top: 2px;
  transition: .2s all;
  width: 18px;
}
form .container:hover > .checkmark {
  border-color: var(--submit-bg);
}
form .container > .checkmark:after {
  bottom: 0;
  content: "";
  background: var(--submit-bg);
  border-radius: 1px;
  box-shadow:
      0 0 10px var(--submit-bg),
      0 0 15px var(--submit-bg);
  opacity: 0;
  left: 0;
  margin: 2px;
  position: absolute;
  right: 0;
  top: 0;
  transition: .2s all;
}

form .container > input[type="checkbox"]:checked ~ .checkmark:after,
form .container > input[type="radio"]:checked ~ .checkmark:after {
  opacity: 1;
}

form .container > input[type="radio"] ~ .checkmark,
form .container > input[type="radio"] ~ .checkmark:after {
  border-radius: 500px;
}

form > input[type="button"],
form > input[type="submit"],
form > button {
  display: block;
  font-size: 20px;
  margin: .5em auto;
  padding: 10px 30px;
}

form > input[type="submit"]:hover,
form > input[type="submit"]:focus {
  padding: 10px 50px;
}

form > #error {
  color: var(--color-warn);
  display: none;
  font-size: 1.25em;
  text-align: center;
}

</style>
