<template>
<div/>
<q-card-actions>
 <q-space />
        <q-btn
          color="black"
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
          label="Необходимые документы"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
  <div class="text-h6 q-mt-sm q-mb-xs">Основные:</div>
        <div>1. Паспорт обратившегося лица в подлиннике.</div>
        <div>2. Свидетельство о заключении брака в подлиннике.</div>
        <div>3. Брачный договор в подлиннике (если был заключен).</div>

        <div class="text-h6 q-mt-sm q-mb-xs">Правоустанавливающие и подтверждающие документы на имущество в подлинниках:</div>
        <div>1. свидетельство о регистрации права собственности.</div>
        <div>2. свидетельство о праве собственности на жилище.</div>
        <div>3. регистрационное удостоверение.</div>

        <div class="text-h6 q-mt-sm q-mb-xs">В зависимости от основания возникновения права:</div>
        <div>1. договор купли-продажи (если покупалось).</div>
        <div>2. договор дарения (если дарилось).</div>
        <div>3. договор мены (если менялось).</div>
        <div>4. договор передачи (если приватизировалось).</div>
        <div>5. свидетельство о праве на наследство (если наследовалось).</div>
        <div>6. cправка о выплате пая (если ЖСК).</div>

        <div class="text-h6 q-mt-sm q-mb-xs">БТИ:</div>
        <div>1. справка о стоимости.</div>
        <div>2. экспликация.</div>
        <div>3. поэтажный план.</div>

        <div class="text-h6 q-mt-sm q-mb-xs">ЖЭК (Домоуправление)</div>
        <div>1. выписка из домовой книги.</div>

        <div class="text-h6 q-mt-sm q-mb-xs">Дополнительно:</div>
        <div>1. Согласие супруга (оформляется у нотариуса) или заявление что в браке не состоит.</div>
        <div>2. Разрешение органов опеки на сделку (если собственник — несовершеннолетний ребенок)..</div>
        <div>3. Cправка из налоговой об отсутствии задолженности на имущество (только в случае возникновения права собственности в порядке наследования или дарения).</div>
        </q-card-section>
        </div>
      </q-slide-transition>
</template>

<script>
import { ref } from 'vue'
export default {
  // name: 'ComponentName',
  setup () {
    return {
      expanded: ref(false)
    }
  }
}
</script>
