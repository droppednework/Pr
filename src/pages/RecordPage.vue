<template>
  <div class="mainlayout">
    <h5 class="text-h5">Запись на приём</h5>

    <q-input
      v-model="FIO"
      label="Фамилия Имя Отчество"
      style="margin-top: 10px"
    />
    <q-input
      v-model="phone"
      label="Номер телефона"
      placeholder="+7 (###) ###-##-##"
      mask="+7 (###) ###-##-##"
      style="margin-top: 10px"
    >
      <template v-slot:append>
        <q-icon name="phone" />
      </template>
    </q-input>
    <q-select
      v-model="selectedService"
      :options="services"
      label="Услуга"
      style="margin-top: 10px"
    />
    <q-select
      v-if="
        selectedService ==
        'Договоры купли-продажи, дарения и другие, связанные с отчуждением недвижимого имущества'
      "
      v-model="who"
      :options="['Супруг, родители, дети, внуки', 'Другие лица']"
      label="Кому"
      style="margin-top: 10px"
    />
    <q-select
      v-if="selectedService == 'Договоры дарения (кроме недвижимости)'"
      v-model="who"
      :options="[
        'Детям, в том числе усыновленным, супругу, родителям, полнородным братьям и сестрам',
        'Другие лица',
      ]"
      label="Кому"
      style="margin-top: 10px"
    />
    <q-input
      v-if="selectedService == 'Другое'"
      v-model="otherServ"
      label="Другое"
      style="margin-top: 10px"
    />
    <q-input
      v-model="transactionPrice"
      type="number"
      label="Сумма договора"
      style="margin-top: 10px"
    >
      <template v-slot:append>
        <span>₽</span>
      </template>
    </q-input>

    <q-date
      v-model="date"
      minimal
      :events="day"
      :options="disabledDates"
      event-color="orange"
      style="margin-top: 20px"
    />

    <q-btn
      color="white"
      text-color="black"
      label="Записаться на приём"
      @click="addDate(date)"
      style="margin-top: 20px"
      :disable="!compDisabledButton"
    />
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      day: [],
      date: moment().format("YYYY/MM/DD"),
      FIO: undefined,
      phone: undefined,
      selectedService: undefined,
      services: [
        "Договоры купли-продажи, дарения и другие, связанные с отчуждением недвижимого имущества",
        "Договоры дарения (кроме недвижимости)",
        "Договоры ренты и пожизненного содержания с иждивением, внесение в уставный капитал ООО",
        "Договор ипотеки (залога недвижимого имущества) жилого помещения",
        "Договор ипотеки (залога недвижимого имущества), в том числе нежилого помещения",
        "Другое",
      ],
      who: undefined,
      otherServ: undefined,
      transactionPrice: undefined,
    };
  },
  computed: {
    compDisabledButton() {
      if (
        this.selectedService ===
          "Договоры купли-продажи, дарения и другие, связанные с отчуждением недвижимого имущества" ||
        this.selectedService === "Договоры дарения (кроме недвижимости)"
      ) {
        return (
          this.FIO &&
          this.phone &&
          this.date &&
          this.selectedService &&
          this.who &&
          this.transactionPrice
        );
      } else {
        return (
          this.FIO &&
          this.phone &&
          this.date &&
          this.selectedService &&
          this.transactionPrice
        );
      }
    },
  },
  methods: {
    calc() {
      if (
        this.selectedService ===
        "Договоры купли-продажи, дарения и другие, связанные с отчуждением недвижимого имущества"
      ) {
        if (this.who === "Супруг, родители, дети, внуки") {
          if (this.transactionPrice <= 10000000) {
            return 3000 + this.transactionPrice * 0.002 + 7000;
          } else if (this.transactionPrice > 10000000) {
            let price = 23000 + this.transactionPrice * 0.001;
            if (price > 50000) price = 50000;
            return price + 7000;
          }
        } else if (this.who === "Другие лица") {
          if (this.transactionPrice <= 1000000) {
            return 3000 + this.transactionPrice * 0.004 + 7000;
          } else if (
            this.transactionPrice > 1000000 &&
            this.transactionPrice <= 10000000
          ) {
            return 7000 + this.transactionPrice * 0.002 + 7000;
          } else if (this.transactionPrice > 10000000) {
            let price = 25000 + this.transactionPrice * 0.001;
            if (price > 100000) price = 100000;
            return price + 7000;
          }
        }
      } else if (
        this.selectedService === "Договоры дарения (кроме недвижимости)"
      ) {
        if (
          this.who ===
          "Детям, в том числе усыновленным, супругу, родителям, полнородным братьям и сестрам"
        ) {
          let price = this.transactionPrice * 0.003;
          if (price < 200) price = 200;
          return price + 7000;
        } else if (this.who === "Другие лица") {
          let price = this.transactionPrice * 0.01;
          if (price < 300) price = 300;
          return price + 7000;
        }
      } else if (
        this.selectedService ===
        "Договоры ренты и пожизненного содержания с иждивением, внесение в уставный капитал ООО"
      ) {
        let price = this.transactionPrice * 0.005;
        if (price < 200) {
          price = 200;
        } else if (price > 20000) {
          price = 20000;
        }
        return price + 7000;
      } else if (
        this.selectedService ===
        "Договор ипотеки (залога недвижимого имущества) жилого помещения"
      ) {
        return 8200;
      } else if (
        this.selectedService ===
        "Договор ипотеки (залога недвижимого имущества), в том числе нежилого помещения"
      ) {
        let price = this.transactionPrice * 0.003;
        if (price > 3000) price = 3000;
        return price + 8000;
      }
    },
    addDate(date) {
      if (this.day.includes(this.date)) {
        alert("Запись на эту дату уже есть");
      } else {
        alert(
          `Вы записаны на ${moment(date).format(
            "DD.MM.YYYY"
          )} \nC вас ${Math.round(this.calc())} рублей`
        );
        this.day.push(date);
      }
    },
    disabledDates(date) {
      return date >= moment().format("YYYY/MM/DD");
    },
  },
  watch: {
    selectedService() {
      this.who = undefined;
    },
  },
};
</script>

<style>
.q-input,
.q-select {
  width: 500px;
}
.mainlayout {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
