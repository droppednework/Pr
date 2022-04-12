<template>
  <div class="q-pa-md">
    <q-date v-model="date" minimal :events="day" event-color="orange" />
  </div>

  <form @submit.prevent>
    <!-- <input
      v-bind:value="date"
      @input="date = $event.target.value"
      type="date"
      name="Date"
      id="davaToday"
    /> -->
    <button @click="addDate(date)">Записаться на приём</button>
  </form>
</template>

<script>
// import { ref } from "vue";
// import { datetime } from "@intlify/core-base";
// import moment from "moment";

export default {
  data() {
    return {
      day: [],
      date: "",
    };
  },
  methods: {
    addDate(date) {
      // var today = moment().format("YYYY/MM/DD");
      for (var i = 0; i <= this.day.length; i++) {
        if (date != this.day[i]) {
          alert(i + "Length:" + this.day.length);
          this.day.push(date);
          this.date = "";
          break;
        } else {
          alert("Error");
          break;
        }
      }
      // this.day.push(date);
      // this.date = "";
    },
  },
};
</script>

<style></style>
