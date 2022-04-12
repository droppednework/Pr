<template>
  <q-page >
    <div class="header">

      <div class="avatar">
      <q-img class="img" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-btn icon="photo" rounded dense size="lg" class="absolute-top-right bg-amber"/>

      </div>
    </div>
    <div class="p-4 space-y-4">
      <q-card class="rounded-borders rounded-xl bg-grey-3 whitespace-pre-line">
        <q-card-section class="space-y-2">
          <div class="text-h5 text-bold">You inf</div>
          <q-form class="space-y-2">
            <q-input v-model="form.firstName" label="Name" outlined />
            <q-input v-model="form.lastName" label="lastName" outlined />
            <q-input v-model="form.numberPhone" mask="+7(###)###+##+##" unmasked-value label="Phone" outlined />
            <q-btn label="Обновить" class="full-width bg-primary text-white"></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data: () => ({
    form: {
      firstName:'',
      lastName:'',
      numberPhone:''
    }
  })
};
</script>

<style>
.header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
}
.avatar{
  margin:10px;
  position: relative;
  width: 140px;
  height: 140px;
}
  .img{
    height: 140px;
    max-width: 140px;
    border-radius: 100px;
    border:solid black 4px
  }
</style>
